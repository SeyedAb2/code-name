/* ============================================================================
   کمکی‌های مسیر و فصل
   ========================================================================== */
import type { Chapter, ChapterProgress } from "./types";
import type { TrackSummary } from "./view";

/** نام فایل فصل → قطعهٔ نشانی. «۰۱-why.html» → «۰۱-why» */
export const chapterSlug = (ch: Chapter): string => ch.file.replace(/\.html$/, "");

export const chapterHref = (track: TrackSummary, ch: Chapter): string =>
  `/track/${track.id}/${chapterSlug(ch)}`;

export interface Resume {
  chapter: Chapter;
  /** هنوز شروع نکرده — یعنی دکمه باید «شروع» بگوید نه «ادامه» */
  fresh: boolean;
}

/**
 * فصلی که کاربر باید از آن ادامه بدهد.
 *
 * قاعده: اولین فصل آماده‌ای که تمام نشده. اگر همه تمام شده‌اند، آخرین فصل
 * آماده — تا دکمه بی‌کار نماند. اگر هیچ فصلی آماده نیست، null.
 */
export function resumeTarget(
  track: TrackSummary,
  progressOf: (ch: Chapter) => ChapterProgress | undefined,
): Resume | null {
  const ready = track.chapters.filter((c) => c.ready);
  if (!ready.length) return null;

  let touched = false;
  for (const ch of ready) {
    const p = progressOf(ch);
    const started = !!p && (p.s.length > 0 || p.e.length > 0);
    if (started) touched = true;

    const doneReading = !!p && p.t > 0 && p.s.length >= p.t;
    const doneEx = !p || p.x === 0 || p.e.length >= p.x;
    if (!doneReading || !doneEx) return { chapter: ch, fresh: !touched };
  }
  return { chapter: ready[ready.length - 1], fresh: false };
}

/** برچسب سطح پروژهٔ نهایی */
export function capstoneLabel(cap: number, lang: "fa" | "en"): string | null {
  if (!cap) return null;
  const fa = ["", "پروژهٔ ساده", "پروژهٔ متوسط", "پروژهٔ پیچیده"];
  const en = ["", "Easy project", "Medium project", "Hard project"];
  return (lang === "fa" ? fa : en)[cap] ?? null;
}
