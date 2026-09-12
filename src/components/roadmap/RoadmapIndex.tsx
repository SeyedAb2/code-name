"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { num } from "@/lib/i18n";
import { readJson } from "@/lib/storage";
import { monthRange, progressKey } from "@/lib/roadmaps/helpers";
import type { FieldMeta, RoadmapCard, RoadmapField } from "@/lib/roadmaps/types";
import AppShell from "@/components/layout/AppShell";
import GlyphIcon from "@/components/ui/GlyphIcon";
import ProgressBar from "@/components/ui/ProgressBar";
import { BookIcon, ClockIcon, CodeIcon, LayersIcon, MapIcon } from "@/components/ui/Icons";
import s from "./RoadmapIndex.module.scss";

type Filter = RoadmapField | "all";

export default function RoadmapIndex({
  roadmaps, fields,
}: { roadmaps: RoadmapCard[]; fields: FieldMeta[] }) {
  const { lang } = usePrefs();
  const { ready } = useProgress();
  const fa = lang === "fa";
  const [filter, setFilter] = useState<Filter>("all");
  const [done, setDone] = useState<Record<string, number>>({});

  /* پیشرفت هر رودمپ، فقط برای کارت‌هایی که کاربر شروعشان کرده */
  useEffect(() => {
    if (!ready) return;
    const out: Record<string, number> = {};
    for (const r of roadmaps) {
      const m = readJson<Record<string, string>>(progressKey(r.id), {});
      const n = Object.values(m).filter((v) => v === "done").length;
      if (n) out[r.id] = n;
    }
    setDone(out);
  }, [ready, roadmaps]);

  const totals = useMemo(() => roadmaps.reduce(
    (acc, r) => ({
      skills: acc.skills + r.stats.hard + r.stats.soft,
      topics: acc.topics + r.stats.topics,
    }),
    { skills: 0, topics: 0 },
  ), [roadmaps]);

  const countOf = (f: RoadmapField) => roadmaps.filter((r) => r.field === f).length;
  const shown = fields.filter((f) => countOf(f.id) > 0 && (filter === "all" || filter === f.id));

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: "رودمپ‌ها", en: "Roadmaps" } },
    ]}>
      <header className={s.hero}>
        <h1>{fa ? "رودمپ‌ها" : "Roadmaps"}</h1>
        <p className={s.intro}>
          {fa
            ? "دوره یک ابزار را یاد می‌دهد؛ رودمپ می‌گوید برای رسیدن به یک نقش، تسلط بر یک تکنولوژی یا ساختن یک گرایش دانشگاهی، چه چیزهایی را به چه ترتیبی لازم داری. هر رودمپ یک نمودار درختی از بالا به پایین است: مرحله‌ها روی ستون وسط، مهارت‌ها دو طرفش، و زیر هر مهارت موضوع‌های مشخصی که باید بشناسی. مهارت‌های نرم را هم عمداً آورده‌ایم — همان‌هایی که بیشتر فهرست‌ها جا می‌اندازند."
            : "A track teaches one tool; a roadmap tells you what you need, and in what order, to reach a role, master a technology or build a university specialisation. Each roadmap is a top-to-bottom tree: stages on the central spine, skills branching off both sides, and under each skill the concrete topics to know. Soft skills are included deliberately — the ones most lists leave out."}
        </p>

        <div className={s.stats}>
          <div className={s.stat} style={{ ["--fc" as string]: "var(--blue)" } as CSSProperties}>
            <span className={s.statIcon}><MapIcon size={15} /></span>
            <b>{num(roadmaps.length, lang)}</b>
            <span>{fa ? "رودمپ" : "roadmaps"}</span>
          </div>
          <div className={s.stat} style={{ ["--fc" as string]: "var(--violet)" } as CSSProperties}>
            <span className={s.statIcon}><LayersIcon size={15} /></span>
            <b>{num(fields.filter((f) => countOf(f.id) > 0).length, lang)}</b>
            <span>{fa ? "حوزه" : "fields"}</span>
          </div>
          <div className={s.stat} style={{ ["--fc" as string]: "var(--safe)" } as CSSProperties}>
            <span className={s.statIcon}><CodeIcon size={15} /></span>
            <b>{num(totals.skills, lang)}</b>
            <span>{fa ? "مهارت فنی و نرم" : "hard and soft skills"}</span>
          </div>
          {totals.topics > 0 && (
            <div className={s.stat} style={{ ["--fc" as string]: "var(--warn)" } as CSSProperties}>
              <span className={s.statIcon}><BookIcon size={15} /></span>
              <b>{num(totals.topics, lang)}</b>
              <span>{fa ? "موضوع مشخص" : "concrete topics"}</span>
            </div>
          )}
        </div>
      </header>

      <nav className={s.filters} aria-label={fa ? "دسته‌ها" : "Fields"}>
        <button type="button" className={s.chip} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          {fa ? "همه" : "All"}
          <b>{num(roadmaps.length, lang)}</b>
        </button>
        {fields.filter((f) => countOf(f.id) > 0).map((f) => (
          <button
            key={f.id}
            type="button"
            className={s.chip}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            <GlyphIcon glyph={f.ico} size={16} />
            {f[lang].name}
            <b>{num(countOf(f.id), lang)}</b>
          </button>
        ))}
      </nav>

      {shown.map((f) => {
        const list = roadmaps.filter((r) => r.field === f.id);
        return (
          <section key={f.id} className={s.field}>
            <header className={s.fieldHead}>
              <span className={s.fieldIcon}><GlyphIcon glyph={f.ico} size={22} /></span>
              <div>
                <h2>{f[lang].name}</h2>
                <p>{f[lang].desc}</p>
              </div>
              <span className={s.fieldCount}>
                {num(list.length, lang)} {fa ? "رودمپ" : "roadmaps"}
              </span>
            </header>

            <div className={s.grid}>
              {list.map((r, i) => {
                const total = r.stats.hard + r.stats.soft;
                const d = done[r.id] ?? 0;
                return (
                  <Link
                    key={r.id}
                    href={`/roadmap/${r.id}`}
                    className={s.card}
                    style={{ ["--acc" as string]: r.accent, ["--i" as string]: Math.min(i, 8) } as CSSProperties}
                  >
                    <div className={s.cardTop}>
                      <span className={s.icon}><GlyphIcon glyph={r.ico} size={24} /></span>
                      <div className={s.titles}>
                        <h3>{r[lang].name}</h3>
                        <span>{r[lang].role}</span>
                      </div>
                    </div>

                    <p className={s.desc}>{r[lang].intro}</p>

                    <div className={s.meta}>
                      <span className={s.metaChip}>
                        <LayersIcon size={13} /><b>{num(r.stats.stages, lang)}</b>{fa ? "مرحله" : "stages"}
                      </span>
                      <span className={s.metaChip}>
                        <CodeIcon size={13} /><b>{num(total, lang)}</b>{fa ? "مهارت" : "skills"}
                      </span>
                      <span className={s.metaChip}>
                        <ClockIcon size={13} /><b>{monthRange(r.stats.months, lang)}</b>{fa ? "ماه" : "months"}
                      </span>
                    </div>

                    {d > 0 && <ProgressBar value={(d / total) * 100} small label={r[lang].name} />}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </AppShell>
  );
}
