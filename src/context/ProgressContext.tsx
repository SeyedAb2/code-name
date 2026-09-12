"use client";

/* ============================================================================
   پیشرفت خواندن و علاقه‌مندی‌ها

   در context نگه داشته می‌شود نه در state هر صفحه، چون:
     · نوار پیشرفت یک مسیر هم در صفحهٔ اصلی دیده می‌شود، هم در خانهٔ مسیر،
       هم در ستون کناری فصل. هر سه باید یک عدد نشان بدهند.
     · وقتی کاربر از فصل به صفحهٔ اصلی برمی‌گردد، نباید دوباره از حافظه
       خوانده و دوباره محاسبه شود.
   ========================================================================== */

import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from "react";
import type { Chapter, ChapterProgress } from "@/lib/types";
import { readJson, writeJson, remove, keys, restoreFromMirror } from "@/lib/storage";

const K_BM = "bookmarks";
const progKey = (trackId: string, chapterN: string) => `p:${trackId}:${chapterN}`;

/** وزن مطالعه در برابر تمرین. تمرین سخت‌تر است ولی خواندن پیش‌نیاز آن است. */
const W_READ = 0.55;
const W_EXERCISE = 0.45;

const EMPTY: ChapterProgress = { s: [], e: [], t: 0, x: 0 };

interface ProgressApi {
  /** درصد یک فصل، ۰ تا ۱۰۰ */
  chapterPct: (trackId: string, ch: Chapter) => number;
  /** میانگین فصل‌های آمادهٔ یک مسیر */
  trackPct: (track: { id: string; chapters: Chapter[] }) => number;
  getChapter: (trackId: string, chapterN: string) => ChapterProgress;

  markSection: (trackId: string, chapterN: string, sectionId: string, totals: { sections: number; exercises: number }) => void;
  toggleExercise: (trackId: string, chapterN: string, exerciseId: string, totals: { sections: number; exercises: number }) => void;
  resetTrack: (trackId: string) => void;
  resetAll: () => void;

  bookmarks: string[];
  isBookmarked: (trackId: string) => boolean;
  toggleBookmark: (trackId: string) => void;

  /** بعد از خواندن اولیه از حافظه true می‌شود */
  ready: boolean;
  /** اگر از نسخهٔ پشتیبان IndexedDB چیزی برگشت، تعدادش */
  restored: number;
}

const Ctx = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  /* کل پیشرفت در یک شیء، تا هر تغییر یک بار رندر بدهد نه چند بار */
  const [store, setStore] = useState<Record<string, ChapterProgress>>({});
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [restored, setRestored] = useState(0);

  useEffect(() => {
    let alive = true;

    (async () => {
      /* اول ببین آیا localStorage پاک شده و باید از نسخهٔ دوم برگردانیم */
      const n = await restoreFromMirror();
      if (!alive) return;
      if (n > 0) setRestored(n);

      const next: Record<string, ChapterProgress> = {};
      for (const k of keys()) {
        if (k.startsWith("p:")) next[k] = readJson<ChapterProgress>(k, EMPTY);
      }
      setStore(next);
      setBookmarks(readJson<string[]>(K_BM, []));
      setReady(true);
    })();

    return () => { alive = false; };
  }, []);

  const getChapter = useCallback(
    (trackId: string, chapterN: string) => store[progKey(trackId, chapterN)] ?? EMPTY,
    [store],
  );



  const markSection = useCallback(
    (trackId: string, chapterN: string, sectionId: string, totals: { sections: number; exercises: number }) => {
      const key = progKey(trackId, chapterN);
      setStore((prev) => {
        const cur = prev[key] ?? EMPTY;
        if (cur.s.includes(sectionId) && cur.t === totals.sections && cur.x === totals.exercises) {
          return prev; /* چیزی عوض نشده — رندر اضافه نده */
        }
        const next: ChapterProgress = {
          s: cur.s.includes(sectionId) ? cur.s : [...cur.s, sectionId],
          e: cur.e,
          t: totals.sections,
          x: totals.exercises,
        };
        writeJson(key, next);
        return { ...prev, [key]: next };
      });
    },
    [],
  );

  const toggleExercise = useCallback(
    (trackId: string, chapterN: string, exerciseId: string, totals: { sections: number; exercises: number }) => {
      const key = progKey(trackId, chapterN);
      setStore((prev) => {
        const cur = prev[key] ?? EMPTY;
        const has = cur.e.includes(exerciseId);
        const next: ChapterProgress = {
          s: cur.s,
          e: has ? cur.e.filter((x) => x !== exerciseId) : [...cur.e, exerciseId],
          t: totals.sections || cur.t,
          x: totals.exercises,
        };
        writeJson(key, next);
        return { ...prev, [key]: next };
      });
    },
    [],
  );

  const chapterPct = useCallback(
    (trackId: string, ch: Chapter) => {
      const p = store[progKey(trackId, ch.n)];
      if (!p) return 0;

      const totalSections = p.t || 0;
      const totalEx = p.x ?? ch.ex;

      const readPart = totalSections ? Math.min(p.s.length / totalSections, 1) : 0;
      const exPart = totalEx ? Math.min(p.e.length / totalEx, 1) : 0;

      /* فصلی که هنوز باز نشده، صفر است — نه اینکه با نبود تمرین ۱۰۰ شود */
      if (!totalSections && p.e.length === 0) return 0;
      if (!totalEx) return Math.round(readPart * 100);
      return Math.round((readPart * W_READ + exPart * W_EXERCISE) * 100);
    },
    [store],
  );

  const trackPct = useCallback(
    (track: { id: string; chapters: Chapter[] }) => {
      const ready = track.chapters.filter((c) => c.ready);
      if (!ready.length) return 0;
      const sum = ready.reduce((acc, c) => acc + chapterPct(track.id, c), 0);
      return Math.round(sum / ready.length);
    },
    [chapterPct],
  );

  const resetTrack = useCallback((trackId: string) => {
    const prefix = `p:${trackId}:`;
    keys().filter((k) => k.startsWith(prefix)).forEach(remove);
    setStore((prev) => {
      const next = { ...prev };
      Object.keys(next).filter((k) => k.startsWith(prefix)).forEach((k) => delete next[k]);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    keys().filter((k) => k.startsWith("p:")).forEach(remove);
    remove(K_BM);
    setStore({});
    setBookmarks([]);
  }, []);

  const toggleBookmark = useCallback((trackId: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(trackId)
        ? prev.filter((x) => x !== trackId)
        : [...prev, trackId];
      writeJson(K_BM, next);
      return next;
    });
  }, []);

  const value = useMemo<ProgressApi>(
    () => ({
      chapterPct,
      trackPct,
      getChapter,
      markSection,
      toggleExercise,
      resetTrack,
      resetAll,
      bookmarks,
      isBookmarked: (id) => bookmarks.includes(id),
      toggleBookmark,
      ready,
      restored,
    }),
    [chapterPct, trackPct, getChapter, markSection, toggleExercise,
     resetTrack, resetAll, bookmarks, toggleBookmark, ready, restored],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProgress(): ProgressApi {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProgress باید داخل ProgressProvider استفاده شود");
  return ctx;
}
