"use client";

import { usePrefs } from "@/context/PrefsContext";
import { num, t } from "@/lib/i18n";
import type { Category } from "@/lib/types";
import type { TrackSummary } from "@/lib/view";
import AppShell from "@/components/layout/AppShell";
import TrackCard from "@/components/track/TrackCard";
import GlyphIcon from "@/components/ui/GlyphIcon";
import s from "./CategoryView.module.scss";

interface Props {
  category: Category;
  tracks: TrackSummary[];
  totals: { chapters: number; exercises: number };
}

export default function CategoryView({ category, tracks, totals }: Props) {
  const { lang } = usePrefs();

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: category.fa.name, en: category.en.name } },
    ]}>
      <header className={s.head}>
        <span className={s.icon}><GlyphIcon glyph={category.ico} size={28} /></span>
        <div>
          <h1>{category[lang].name}</h1>
          <p>{category[lang].desc}</p>
        </div>
      </header>

      <div className={s.stats}>
        <span><b>{num(tracks.length, lang)}</b> {t("tracks", lang)}</span>
        <span><b>{num(totals.chapters, lang)}</b> {t("chapters", lang)}</span>
        <span><b>{num(totals.exercises, lang)}</b> {lang === "fa" ? "تمرین" : "exercises"}</span>
      </div>

      <div className={s.grid}>
        {tracks.map((tr, i) => <TrackCard key={tr.id} track={tr} index={i} />)}
      </div>
    </AppShell>
  );
}
