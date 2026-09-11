"use client";

import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { num, pct, hours, t } from "@/lib/i18n";
import type { TrackSummary } from "@/lib/view";
import GlyphIcon from "@/components/ui/GlyphIcon";
import ProgressBar from "@/components/ui/ProgressBar";
import Button, { GoArrow } from "@/components/ui/Button";
import { StarIcon, BookIcon, ClockIcon, CheckBoxIcon } from "@/components/ui/Icons";
import { resumeTarget } from "@/lib/track";
import s from "./TrackCard.module.scss";

export default function TrackCard({ track }: { track: TrackSummary }) {
  const { lang, theme } = usePrefs();
  const { trackPct, isBookmarked, toggleBookmark, getChapter } = useProgress();

  const text = track[lang];
  /* بعضی رنگ‌های برند در یکی از دو تم گم می‌شوند و جایگزین دارند */
  const accent = theme === "dark" && track.accentDark ? track.accentDark : track.accent;

  const progress = trackPct(track);
  const saved = isBookmarked(track.id);
  const resume = resumeTarget(track, (ch) => getChapter(track.id, ch.n));

  const starLabel = saved
    ? (lang === "fa" ? "حذف از علاقه‌مندی‌ها" : "Remove bookmark")
    : (lang === "fa" ? "افزودن به علاقه‌مندی‌ها" : "Add bookmark");

  return (
    <article
      className={[s.card, track.locked ? s.locked : ""].filter(Boolean).join(" ")}
      style={{ ["--acc" as string]: accent }}
    >
      {track.stats.ready === 0 && (
        <span className={s.badge}>{t("planned", lang)}</span>
      )}

      <div className={s.top}>
        <span className={s.logo}>
          <GlyphIcon glyph={track.ico} size={30} />
        </span>

        <div className={s.name}>
          <h3>
            <Link href={`/track/${track.id}`}>{text.name}</Link>
          </h3>
          {lang === "fa" && <span className={s.latin}>{track.en.name}</span>}
        </div>

        <button
          type="button"
          className={s.star}
          aria-pressed={saved}
          aria-label={starLabel}
          title={starLabel}
          onClick={() => toggleBookmark(track.id)}
        >
          <StarIcon size={16} filled={saved} />
        </button>
      </div>

      <p className={s.desc}>{text.desc}</p>

      <div className={s.meta}>
        <span><BookIcon size={13} /> {num(track.stats.chapters, lang)} {t("chapters", lang)}</span>
        <span><ClockIcon size={13} /> ≈ {num(hours(track.stats.minutes), lang)} {t("hoursUnit", lang)}</span>
        <span><CheckBoxIcon size={13} /> {num(track.stats.exercises, lang)} {lang === "fa" ? "تمرین" : "ex."}</span>
      </div>

      <div className={s.progress}>
        <ProgressBar value={progress} label={text.name} />
        <b>{pct(progress, lang)}</b>
      </div>

      {resume ? (
        <Button href={`/track/${track.id}/${resume.chapter.file.replace(/\.html$/, "")}`}>
          {resume.fresh
            ? t("startTrack", lang)
            : `${t("resumeFrom", lang)} ${num(parseInt(resume.chapter.n, 10), lang)}`}
          <GoArrow />
        </Button>
      ) : (
        <Button variant="ghost" disabled>{t("notReady", lang)}</Button>
      )}
    </article>
  );
}
