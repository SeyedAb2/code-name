"use client";

import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { num } from "@/lib/i18n";
import type { Roadmap } from "@/lib/roadmaps.types";
import AppShell from "@/components/layout/AppShell";
import GlyphIcon from "@/components/ui/GlyphIcon";
import s from "./RoadmapDetail.module.scss";

interface TrackRef { id: string; fa: string; en: string }

interface Props {
  roadmap: Roadmap;
  months: [number, number];
  hard: number;
  soft: number;
  /** نام مسیرهایی که مهارت‌ها به آن‌ها ارجاع می‌دهند */
  trackNames: TrackRef[];
  /** رودمپ‌های پیش‌نیاز، با نامشان */
  prereqs: { id: string; fa: string; en: string }[];
}

export default function RoadmapDetail({
  roadmap: r, months, hard, soft, trackNames, prereqs,
}: Props) {
  const { lang } = usePrefs();
  const fa = lang === "fa";
  const nameOf = (id: string) => trackNames.find((t) => t.id === id);

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: "رودمپ‌ها", en: "Roadmaps" }, href: "/roadmap" },
      { label: { fa: r.fa.name, en: r.en.name } },
    ]}>
      <header className={s.head} style={{ ["--acc" as string]: r.accent }}>
        <div className={s.headTop}>
          <span className={s.icon}><GlyphIcon glyph={r.ico} size={30} /></span>
          <div className={s.titles}>
            <h1>{r[lang].name}</h1>
            <span>{r[lang].role}</span>
          </div>
        </div>

        <p className={s.intro}>{r[lang].intro}</p>

        <div className={s.facts}>
          <div className={s.fact}>
            <b>{num(r.stages.length, lang)}</b>
            <span>{fa ? "مرحله" : "stages"}</span>
          </div>
          <div className={s.fact}>
            <b>{num(hard, lang)}</b>
            <span>{fa ? "مهارت فنی" : "hard skills"}</span>
          </div>
          <div className={s.fact}>
            <b>{num(soft, lang)}</b>
            <span>{fa ? "مهارت نرم" : "soft skills"}</span>
          </div>
          <div className={s.fact}>
            <b>{num(months[0], lang)}–{num(months[1], lang)}</b>
            <span>{fa ? "ماه، با هفته‌ای ۱۰ تا ۱۵ ساعت" : "months at 10–15 h/week"}</span>
          </div>
        </div>

        {prereqs.length > 0 && (
          <p className={s.prereq}>
            {fa ? "بهتر است قبلش این را رفته باشی: " : "Best taken after: "}
            {prereqs.map((p, i) => (
              <span key={p.id}>
                {i > 0 && "، "}
                <Link href={`/roadmap/${p.id}`}>{fa ? p.fa : p.en}</Link>
              </span>
            ))}
          </p>
        )}
      </header>

      {r.stages.map((stage, i) => (
        <section key={stage.id} className={s.stage} style={{ ["--acc" as string]: r.accent }}>
          <span className={s.stageNum}>{num(i + 1, lang)}</span>

          <div className={s.stageHead}>
            <h2>{stage[lang]}</h2>
            <span className={s.months}>
              {num(stage.months[0], lang)}–{num(stage.months[1], lang)} {fa ? "ماه" : "months"}
            </span>
          </div>

          <p className={s.outcome}>
            {fa ? stage.outcomeFa : stage.outcomeEn}
          </p>

          <div className={s.skills}>
            {stage.skills.map((sk) => (
              <article key={sk.fa} className={s.skill}>
                <div className={s.skillHead}>
                  <h3>{sk[lang]}</h3>
                  <span className={[s.kind, sk.kind === "hard" ? s.hard : s.soft].join(" ")}>
                    {sk.kind === "hard"
                      ? (fa ? "فنی" : "hard")
                      : (fa ? "نرم" : "soft")}
                  </span>
                </div>

                <p className={s.why}>{fa ? sk.whyFa : sk.whyEn}</p>

                {sk.tracks && sk.tracks.length > 0 && (
                  <div className={s.trackLinks}>
                    {sk.tracks.map((id) => {
                      const n = nameOf(id);
                      if (!n) return null;
                      return (
                        <Link key={id} href={`/track/${id}`}>
                          {fa ? n.fa : n.en}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </AppShell>
  );
}
