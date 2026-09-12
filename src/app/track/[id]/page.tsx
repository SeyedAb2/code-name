import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Chapter } from "@/lib/types";
import { TRACKS, CATEGORIES } from "@/lib/courses.data";
import { SITE } from "@/lib/site";
import { readTrackExtra } from "@/lib/chapters.server";
import TrackView from "@/components/track/TrackView";
import "@/styles/prose.scss";

/* خانهٔ مسیر همهٔ فصل‌ها را فهرست می‌کند، اما کلیدواژه‌های جستجو را لازم
   ندارد — آن‌ها فقط در search-index.json به کار می‌آیند. */
const slimChapter = (c: Chapter): Chapter => ({ ...c, kw: "" });

export function generateStaticParams() {
  return TRACKS.map((t) => ({ id: t.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
): Promise<Metadata> {
  const { id } = await params;
  const track = TRACKS.find((t) => t.id === id);
  if (!track) return {};

  const url = `${SITE.url}/track/${track.id}`;
  return {
    title: track.fa.name,
    description: track.fa.desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${track.fa.name} — ${SITE.name.fa}`,
      description: track.fa.desc,
      url,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const track = TRACKS.find((t) => t.id === id);
  if (!track) notFound();

  const cat = CATEGORIES.find((c) => c.id === track.cat);

  /* \u200FCourse در schema.org به موتور جستجو می‌گوید این یک دورهٔ آموزشی است،
     نه یک صفحهٔ معمولی — و فهرست فصل‌ها را هم می‌فهمد. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: track.fa.name,
    description: track.fa.desc,
    inLanguage: "fa",
    url: `${SITE.url}/track/${track.id}`,
    provider: { "@type": "Organization", name: SITE.name.fa, url: SITE.url },
    isAccessibleForFree: true,
    teaches: track.chapters.slice(0, 12).map((c) => c.fa.t),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${Math.round(track.stats.minutes / 60)}H`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrackView
        track={{ ...track, chapters: track.chapters.map(slimChapter) }}
        categoryName={{ fa: cat?.fa.name ?? "", en: cat?.en.name ?? "" }}
        extra={readTrackExtra(track.id)}
      />
    </>
  );
}
