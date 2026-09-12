import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROADMAPS, roadmapById, statsOf } from "@/lib/roadmaps";
import type { NamedRef, Roadmap } from "@/lib/roadmaps/types";
import { skillId } from "@/lib/roadmaps/helpers";
import { TRACKS } from "@/lib/courses.data";
import { SITE } from "@/lib/site";
import RoadmapDetail from "@/components/roadmap/RoadmapDetail";

export const dynamicParams = false;

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  assertRoadmapLinks();
  return ROADMAPS.map((r) => ({ id: r.id }));
}

/**
 * ارجاع به مسیر یا رودمپی که وجود ندارد، لینکی می‌سازد که بی‌صدا ناپدید
 * می‌شود و هیچ‌کس متوجه نمی‌شود. بهتر است build بشکند و بگوید کجا.
 * مهارت تکراری هم شکسته حساب می‌شود، چون شناسه‌اش با دیگری یکی می‌شود و
 * تیک یکی روی دیگری هم می‌نشیند.
 */
function assertRoadmapLinks() {
  const tracks = new Set(TRACKS.map((t) => t.id));
  const maps = new Set(ROADMAPS.map((r) => r.id));
  const bad: string[] = [];

  for (const r of ROADMAPS) {
    for (const id of [...(r.after ?? []), ...(r.next ?? [])]) {
      if (!maps.has(id)) bad.push(`${r.id}: unknown roadmap "${id}"`);
    }
    const seen = new Set<string>();
    for (const st of r.stages) {
      for (const sk of st.skills) {
        const sid = skillId(st, sk);
        if (seen.has(sid)) bad.push(`${r.id}: duplicate skill "${sid}"`);
        seen.add(sid);
        for (const t of sk.tracks ?? []) {
          if (!tracks.has(t)) bad.push(`${r.id} › ${sk.en}: unknown track "${t}"`);
        }
      }
    }
  }

  if (bad.length) throw new Error(`Broken roadmap links:\n  ${bad.join("\n  ")}`);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const r = roadmapById(id);
  if (!r) return {};
  const url = `${SITE.url}/roadmap/${r.id}`;
  const title = `رودمپ ${r.fa.name}`;
  const description = r.fa.intro.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
  };
}

const refOf = (x: Roadmap): NamedRef => ({ id: x.id, fa: x.fa.name, en: x.en.name });

const refs = (ids?: string[]): NamedRef[] =>
  (ids ?? [])
    .map(roadmapById)
    .filter((x): x is Roadmap => !!x)
    .map(refOf);

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const r = roadmapById(id);
  if (!r) notFound();

  /* فقط نام مسیرهایی که واقعاً ارجاع داده شده‌اند — نه کل مانیفست */
  const referenced = new Set<string>();
  r.stages.forEach((st) => st.skills.forEach((sk) => sk.tracks?.forEach((t) => referenced.add(t))));
  const trackNames: NamedRef[] = TRACKS
    .filter((t) => referenced.has(t.id))
    .map((t) => ({ id: t.id, fa: t.fa.name, en: t.en.name }));

  const url = `${SITE.url}/roadmap/${r.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    learningResourceType: "Roadmap",
    name: r.fa.name,
    description: r.fa.intro,
    inLanguage: "fa",
    url,
    isAccessibleForFree: true,
    teaches: r.stages.map((st) => st.fa),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoadmapDetail
        roadmap={r}
        stats={statsOf(r)}
        trackNames={trackNames}
        prereqs={refs(r.after)}
        nexts={refs(r.next)}
      />
    </>
  );
}
