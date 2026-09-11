"use client";

import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { num, pct, hours, t } from "@/lib/i18n";
import { capstoneLabel, chapterSlug, resumeTarget } from "@/lib/track";
import type { Track } from "@/lib/types";
import AppShell from "@/components/layout/AppShell";
import GlyphIcon from "@/components/ui/GlyphIcon";
import ProgressBar from "@/components/ui/ProgressBar";
import Button, { GoArrow } from "@/components/ui/Button";
import {
  StarIcon, BookIcon, ClockIcon, CheckBoxIcon, FlagIcon,
} from "@/components/ui/Icons";
import s from "./TrackView.module.scss";

interface Props {
  track: Track;
  categoryName: { fa: string; en: string };
}

export default function TrackView({ track, categoryName }: Props) {
  const { lang, theme } = usePrefs();
  const { trackPct, chapterPct, isBookmarked, toggleBookmark, getChapter, resetTrack } = useProgress();
  const fa = lang === "fa";

  const text = track[lang];
  const accent = theme === "dark" && track.accentDark ? track.accentDark : track.accent;
  const progress = trackPct(track);
  const saved = isBookmarked(track.id);
  const resume = resumeTarget(track, (ch) => getChapter(track.id, ch.n));

  const starLabel = saved
    ? (fa ? "حذف از علاقه‌مندی‌ها" : "Remove bookmark")
    : (fa ? "افزودن به علاقه‌مندی‌ها" : "Add bookmark");

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: categoryName, href: `/category/${track.cat}` },
      { label: { fa: track.fa.name, en: track.en.name } },
    ]}>
      <header className={s.head} style={{ ["--acc" as string]: accent }}>
        <div className={s.headTop}>
          <span className={s.mark}><GlyphIcon glyph={track.ico} size={30} /></span>
          <div className={s.titles}>
            <h1>{text.name}</h1>
            {fa && <span>{track.en.name}</span>}
          </div>
          <button
            type="button"
            className={s.star}
            aria-pressed={saved}
            aria-label={starLabel}
            title={starLabel}
            onClick={() => toggleBookmark(track.id)}
          >
            <StarIcon size={18} filled={saved} />
          </button>
        </div>

        <p className={s.intro}>{text.intro || text.desc}</p>

        <div className={s.facts}>
          <div className={s.fact}>
            <span className={s.factIcon}><BookIcon size={15} /></span>
            <b>{num(track.stats.chapters, lang)}</b>
            <span>{t("chapters", lang)}</span>
          </div>
          <div className={s.fact}>
            <span className={s.factIcon}><CheckBoxIcon size={15} /></span>
            <b>{num(track.stats.exercises, lang)}</b>
            <span>{t("exercises", lang)}</span>
          </div>
          <div className={s.fact}>
            <span className={s.factIcon}><ClockIcon size={15} /></span>
            <b>≈ {num(hours(track.stats.minutes), lang)} <i>{t("hoursUnit", lang)}</i></b>
            <span>{t("estTime", lang)}</span>
          </div>
          <div className={s.fact}>
            <span className={s.factIcon}><FlagIcon size={15} /></span>
            <b>{num(track.stats.capstones, lang)}</b>
            <span>{t("finalProjects", lang)}</span>
          </div>
        </div>

        {resume && (
          <div className={s.cta}>
            <Button href={`/track/${track.id}/${chapterSlug(resume.chapter)}`}>
              {resume.fresh
                ? t("startTrack", lang)
                : `${t("resumeFrom", lang)} ${num(parseInt(resume.chapter.n, 10), lang)}`}
              <GoArrow />
            </Button>
          </div>
        )}
      </header>

      <section className={s.section}>
        <div className={s.sectionHead}>
          <h2>{t("yourProgress", lang)}</h2>
        </div>
        <div className={s.progressBox}>
          <div><ProgressBar value={progress} label={text.name} /></div>
          <Button variant="ghost" onClick={() => resetTrack(track.id)}>
            {t("reset", lang)}
          </Button>
        </div>
        <p className={s.note}>
          {fa
            ? "درصد هر فصل از دو چیز می‌آید: چقدر از بخش‌هایش را خوانده‌ای (۵۵٪) و چند تمرینش را تیک زده‌ای (۴۵٪). همه‌چیز داخل مرورگر خودت می‌ماند."
            : "A chapter's percentage comes from two things: how much you have read (55%) and how many exercises you ticked (45%). It all stays in your own browser."}
        </p>
      </section>

      <section className={s.section}>
        <div className={s.sectionHead}>
          <h2>{t("chapters", lang)}</h2>
          <p>
            {fa
              ? "فصل‌ها به هم وابسته‌اند و ترتیبشان معنا دارد. هر مسیر با پروژه‌های نهایی تمام می‌شود: ساده، متوسط، پیچیده."
              : "Chapters build on each other; the order is deliberate. Every track ends with final projects: easy, medium and hard."}
          </p>
        </div>

        <div className={s.chapters} style={{ ["--acc" as string]: accent }}>
          {track.chapters.map((ch) => {
            const done = chapterPct(track.id, ch) >= 100;
            const cap = capstoneLabel(ch.cap, lang);
            const body = (
              <>
                <span className={s.chNum}>{num(parseInt(ch.n, 10), lang)}</span>
                <div className={s.chBody}>
                  <h3>{ch[lang].t}</h3>
                  <p>{ch[lang].d}</p>
                  {ch.ready
                    ? <ProgressBar value={chapterPct(track.id, ch)} small />
                    : <span className={s.tag}>{t("planned", lang)}</span>}
                  {cap && (
                    <span className={[s.tag, s[`cap${ch.cap}`]].filter(Boolean).join(" ")}
                      style={{ marginInlineStart: 6 }}>
                      {cap}
                    </span>
                  )}
                </div>
              </>
            );

            return ch.ready ? (
              <Link
                key={ch.n}
                href={`/track/${track.id}/${chapterSlug(ch)}`}
                className={[s.chapter, done ? s.chDone : ""].filter(Boolean).join(" ")}
              >
                {body}
              </Link>
            ) : (
              <div key={ch.n} className={[s.chapter, s.soon].join(" ")}>{body}</div>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
