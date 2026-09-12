"use client";

/* ============================================================================
   صفحهٔ فصل

   متن فصل HTML نوشته‌شده با دست است و با dangerouslySetInnerHTML تزریق
   می‌شود — دادهٔ خود پروژه است، نه ورودی کاربر. رفتارهای تعاملی (تیک
   تمرین، دکمهٔ کپی، ردیابی بخش خوانده‌شده) بعد از mount به همان DOM
   وصل می‌شوند.
   ========================================================================== */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { num, t } from "@/lib/i18n";
import { chapterSlug } from "@/lib/track";
import type { Chapter } from "@/lib/types";
import type { ChapterRef, TocItem } from "@/lib/chapter.types";
import AppShell from "@/components/layout/AppShell";
import ProgressBar from "@/components/ui/ProgressBar";
import IconButton from "@/components/ui/IconButton";
import { ListIcon, CloseIcon } from "@/components/ui/Icons";
import s from "./ChapterView.module.scss";

interface Props {
  track: { id: string; cat: string; fa: { name: string }; en: { name: string } };
  category: { fa: string; en: string };
  chapter: Chapter;
  /** همهٔ فصل‌های مسیر، سبک‌شده — برای ستون کناری */
  chapters: Chapter[];
  html: string;
  toc: TocItem[];
  exercises: number;
  prev: ChapterRef | null;
  next: ChapterRef | null;
}

/** کپی، با پشتیبان برای مرورگرهایی که Clipboard API را نمی‌دهند */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch { /* هیچ راهی نماند */ }
    document.body.removeChild(ta);
  }
}

export default function ChapterView({
  track, category, chapter, chapters, html, toc, exercises, prev, next,
}: Props) {
  const { lang } = usePrefs();
  const { markSection, toggleExercise, getChapter, chapterPct, ready } = useProgress();
  const fa = lang === "fa";

  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | undefined>(toc[0]?.id);
  const [open, setOpen] = useState(false);
  const [readPct, setReadPct] = useState(0);

  const n = chapter.n;
  const nInt = parseInt(n, 10);
  const sections = toc.length;

  /* ‏React فقط وقتی innerHTML را دوباره می‌نویسد که رشته عوض شود؛ با
     useMemo مطمئن می‌شویم تیک‌های تزریق‌شده با هر رندر پاک نمی‌شوند. */
  const inner = useMemo(() => ({ __html: html }), [html]);

  const progress = getChapter(track.id, n);
  const pct = chapterPct(track.id, chapter);

  /* ── ۱) ردیابی بخش فعال و بخش‌های خوانده‌شده ─────────────────────────────
     تا وقتی پیشرفت از حافظه بارگذاری نشده (ready)، چیزی ثبت نمی‌کنیم.
     وگرنه اولین بخشِ دیده‌شده رکوردی تازه روی دیسک می‌نوشت و پیشرفت
     ذخیره‌شدهٔ قبلی را پاک می‌کرد. */
  useEffect(() => {
    const root = ref.current;
    if (!root || !ready) return;

    const els = toc
      .map((it) => root.querySelector<HTMLElement>(`section#${CSS.escape(it.id)}`))
      .filter((x): x is HTMLElement => !!x);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = e.target.id;
          setActive(id);
          markSection(track.id, n, id, { sections, exercises });
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [html, ready, toc, track.id, n, sections, exercises, markSection]);

  /* ── ۲) تیک «انجام شد» در سربرگ هر تمرین ──────────────────────────────── */
  useEffect(() => {
    const root = ref.current;
    if (!root || !ready) return;

    const off: (() => void)[] = [];
    root.querySelectorAll<HTMLElement>(".ex[id]").forEach((ex) => {
      const head = ex.querySelector(".ex-h");
      if (!head) return;

      let label = head.querySelector<HTMLLabelElement>(".ex-done");
      if (!label) {
        label = document.createElement("label");
        label.className = "ex-done";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        label.append(cb, document.createElement("span"));
        head.append(label);
      }

      const cb = label.querySelector("input")!;
      const onChange = () => toggleExercise(track.id, n, ex.id, { sections, exercises });
      cb.addEventListener("change", onChange);
      off.push(() => cb.removeEventListener("change", onChange));
    });

    return () => off.forEach((f) => f());
  }, [html, ready, track.id, n, sections, exercises, toggleExercise]);

  /* ── ۳) همگام کردن وضعیت تیک‌ها، شمارنده و برچسب‌ها با پیشرفت و زبان ─── */
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    root.querySelectorAll<HTMLElement>(".ex[id]").forEach((ex) => {
      const done = progress.e.includes(ex.id);
      ex.classList.toggle("solved", done);
      const label = ex.querySelector(".ex-done");
      if (!label) return;
      label.classList.toggle("on", done);
      const cb = label.querySelector("input");
      if (cb) cb.checked = done;
      const txt = label.querySelector("span");
      if (txt) txt.textContent = t("done", lang);
    });

    const stat = root.querySelector(".ex-stat");
    if (stat) {
      const b = stat.querySelector("b");
      if (b) b.textContent = `${num(progress.e.length, lang)} / ${num(exercises, lang)}`;
      const bar = stat.querySelector<HTMLElement>(".pbar > i");
      if (bar) bar.style.width = `${exercises ? (progress.e.length / exercises) * 100 : 0}%`;
    }

    root.querySelectorAll<HTMLButtonElement>(".copy:not(.ok)").forEach((b) => {
      b.textContent = t("copy", lang);
    });
  }, [progress, lang, ready, html, exercises]);

  /* ── ۴) دکمهٔ کپی — یک شنونده برای همهٔ بلوک‌ها ────────────────────────── */
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const onClick = async (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".copy");
      if (!btn || !root.contains(btn)) return;
      const pre = btn.closest(".term, .code")?.querySelector("pre");
      if (!pre) return;

      /* پرامپت‌ها (.d) کپی نمی‌شوند — کد باید مستقیم قابل اجرا باشد */
      const clone = pre.cloneNode(true) as HTMLElement;
      clone.querySelectorAll(".d").forEach((x) => x.remove());
      await copyText((clone.textContent ?? "").replace(/\n{3,}/g, "\n\n").trim());

      btn.classList.add("ok");
      btn.textContent = t("copied", lang);
      window.setTimeout(() => {
        btn.classList.remove("ok");
        btn.textContent = t("copy", lang);
      }, 1600);
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [lang]);

  /* ── ۵) نوار پیشرفت خواندن — با rAF تا هر رویداد اسکرول رندر نگیرد ───── */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setReadPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* کشوی موبایل با Esc بسته شود */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const pagerCell = (ref: ChapterRef | null, dir: "prev" | "next") => {
    const cls = [s.pagerLink, dir === "next" ? s.pagerNext : ""].filter(Boolean).join(" ");
    if (!ref) return <span className={[cls, s.pagerOff].join(" ")} aria-hidden />;

    const body = (
      <>
        <span className={s.pagerDir}>
          {t(dir === "next" ? "next" : "prev", lang)} · {num(parseInt(ref.n, 10), lang)}
        </span>
        <span className={s.pagerTitle}>
          {fa ? ref.fa : ref.en}
          {!ref.ready && ` (${t("planned", lang)})`}
        </span>
      </>
    );

    return ref.ready
      ? <Link href={`/track/${track.id}/${ref.slug}`} className={cls}>{body}</Link>
      : <span className={[cls, s.pagerOff].join(" ")}>{body}</span>;
  };

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: category, href: `/category/${track.cat}` },
      { label: { fa: track.fa.name, en: track.en.name }, href: `/track/${track.id}` },
      { label: { fa: `فصل ${num(nInt, "fa")}`, en: `Chapter ${nInt}` } },
    ]}>
      <div className={s.readbar} style={{ width: `${readPct}%` }} aria-hidden />

      <div className={s.grid}>
        <aside className={[s.rail, open ? s.open : ""].filter(Boolean).join(" ")}>
          <button
            type="button"
            className={s.toggle}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <ListIcon size={18} />
            <span>{t("contents", lang)}</span>
          </button>

          {open && <div className={s.dim} onClick={() => setOpen(false)} />}

          <nav
            className={s.panel}
            aria-label={t("contents", lang)}
            onClick={(e) => {
              /* روی موبایل بعد از انتخاب، کشو بسته شود */
              if ((e.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            <div className={s.panelHead}>
              <span>{t("contents", lang)}</span>
              <IconButton label={t("close", lang)} onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>

            <p className={s.railH}>{t("inThisChapter", lang)}</p>
            <ol className={s.toc}>
              {toc.map((it, i) => (
                <li key={it.id}>
                  <a href={`#${it.id}`} className={active === it.id ? s.active : undefined}>
                    <span className={s.tocNum}>{num(i + 1, lang)}</span>
                    {it[lang]}
                  </a>
                </li>
              ))}
            </ol>

            <div className={s.progCard}>
              <span className={s.progLabel}>{fa ? "پیشرفت این فصل" : "Chapter progress"}</span>
              <ProgressBar value={pct} />
            </div>

            <p className={s.railH}>{t("chapterList", lang)}</p>
            <ul className={s.chlist}>
              {chapters.map((c) => {
                const cur = c.n === chapter.n;
                const done = c.ready && chapterPct(track.id, c) >= 100;
                const cls = [cur ? s.cur : "", done ? s.done : "", c.ready ? "" : s.off]
                  .filter(Boolean).join(" ");
                const body = (
                  <>
                    <span className={s.chN}>{num(parseInt(c.n, 10), lang)}</span>
                    <span className={s.chT}>{c[lang].t}</span>
                  </>
                );
                return (
                  <li key={c.n}>
                    {c.ready
                      ? (
                        <Link
                          href={`/track/${track.id}/${chapterSlug(c)}`}
                          className={cls}
                          aria-current={cur ? "page" : undefined}
                        >
                          {body}
                        </Link>
                      )
                      : <span className={[cls, s.row].filter(Boolean).join(" ")}>{body}</span>}
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <article className={s.main}>
          <div ref={ref} className="prose" dangerouslySetInnerHTML={inner} />

          <nav className={s.pager} aria-label={fa ? "فصل قبل و بعد" : "Previous and next"}>
            {pagerCell(prev, "prev")}
            {pagerCell(next, "next")}
          </nav>
        </article>
      </div>
    </AppShell>
  );
}
