"use client";

import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { num } from "@/lib/i18n";
import type { Roadmap, RoadmapField } from "@/lib/roadmaps.types";
import AppShell from "@/components/layout/AppShell";
import GlyphIcon from "@/components/ui/GlyphIcon";
import s from "./RoadmapIndex.module.scss";

interface FieldMeta {
  id: RoadmapField;
  fa: { name: string; desc: string };
  en: { name: string; desc: string };
}

interface Card extends Roadmap {
  months: [number, number];
  hard: number;
  soft: number;
}

export default function RoadmapIndex({
  roadmaps, fields,
}: { roadmaps: Card[]; fields: FieldMeta[] }) {
  const { lang } = usePrefs();
  const fa = lang === "fa";

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: "رودمپ‌ها", en: "Roadmaps" } },
    ]}>
      <h1 className={s.title}>{fa ? "رودمپ‌ها" : "Roadmaps"}</h1>

      <p className={s.intro}>
        {fa
          ? "دوره یک ابزار را یاد می‌دهد؛ رودمپ می‌گوید برای رسیدن به یک نقش، چه چیزهایی را به چه ترتیبی لازم داری. هر رودمپ چند مرحله دارد و هر مرحله می‌گوید در پایانش چه کاری از تو برمی‌آید. مهارت‌های نرم را هم عمداً آورده‌ایم — همان‌هایی که بیشتر فهرست‌های اینترنتی جا می‌اندازند و همان‌ها هستند که مهندس‌های خوب را در سطح میانی نگه می‌دارند."
          : "A track teaches one tool; a roadmap tells you what you need for a role and in what order. Each roadmap has stages, and each stage states what you can do by the end of it. Soft skills are included deliberately — the ones most online lists omit, and the ones that keep good engineers stuck at mid-level."}
      </p>

      {fields.map((f) => {
        const list = roadmaps.filter((r) => r.field === f.id);
        if (!list.length) return null;
        return (
          <section key={f.id} className={s.field}>
            <header className={s.fieldHead}>
              <h2>{f[lang].name}</h2>
              <p>{f[lang].desc}</p>
            </header>

            <div className={s.grid}>
              {list.map((r) => (
                <Link
                  key={r.id}
                  href={`/roadmap/${r.id}`}
                  className={s.card}
                  style={{ ["--acc" as string]: r.accent }}
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
                    <span><b>{num(r.stages.length, lang)}</b> {fa ? "مرحله" : "stages"}</span>
                    <span><b>{num(r.hard + r.soft, lang)}</b> {fa ? "مهارت" : "skills"}</span>
                    <span>
                      <b>{num(r.months[0], lang)}–{num(r.months[1], lang)}</b> {fa ? "ماه" : "months"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </AppShell>
  );
}
