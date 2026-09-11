import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROADMAPS, roadmapById, totalMonths, countSkills } from "@/lib/roadmaps";
import { TRACKS } from "@/lib/courses.data";
import RoadmapDetail from "@/components/roadmap/RoadmapDetail";

export function generateStaticParams() {
  return ROADMAPS.map((r) => ({ id: r.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
): Promise<Metadata> {
  const { id } = await params;
  const r = roadmapById(id);
  if (!r) return {};
  return { title: r.fa.name, description: r.fa.intro.slice(0, 160) };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const r = roadmapById(id);
  if (!r) notFound();

  const { hard, soft } = countSkills(r);

  /* فقط نام مسیرهایی که واقعاً ارجاع داده شده‌اند — نه کل مانیفست */
  const referenced = new Set<string>();
  r.stages.forEach((st) => st.skills.forEach((sk) => sk.tracks?.forEach((t) => referenced.add(t))));
  const trackNames = TRACKS
    .filter((t) => referenced.has(t.id))
    .map((t) => ({ id: t.id, fa: t.fa.name, en: t.en.name }));

  const prereqs = (r.after ?? [])
    .map(roadmapById)
    .filter((x): x is NonNullable<typeof x> => !!x)
    .map((x) => ({ id: x.id, fa: x.fa.name, en: x.en.name }));

  return (
    <RoadmapDetail
      roadmap={r}
      months={totalMonths(r)}
      hard={hard}
      soft={soft}
      trackNames={trackNames}
      prereqs={prereqs}
    />
  );
}
