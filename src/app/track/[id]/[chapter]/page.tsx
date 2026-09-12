import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TRACKS, CATEGORIES } from "@/lib/courses.data";
import { SITE } from "@/lib/site";
import { chapterSlug } from "@/lib/track";
import { hasChapter, readChapter } from "@/lib/chapters.server";
import type { Chapter } from "@/lib/types";
import type { ChapterRef } from "@/lib/chapter.types";
import ChapterView from "@/components/chapter/ChapterView";
import "@/styles/prose.scss";

/* فقط فصل‌هایی که واقعاً نوشته شده‌اند ساخته می‌شوند؛ هر نشانی دیگری ۴۰۴ */
export const dynamicParams = false;

type Params = Promise<{ id: string; chapter: string }>;

export function generateStaticParams() {
  const out: { id: string; chapter: string }[] = [];
  for (const t of TRACKS) {
    for (const c of t.chapters) {
      const slug = chapterSlug(c);
      if (c.ready && hasChapter(t.id, slug)) out.push({ id: t.id, chapter: slug });
    }
  }
  return out;
}

function locate(id: string, slug: string) {
  const track = TRACKS.find((t) => t.id === id);
  if (!track) return null;
  const i = track.chapters.findIndex((c) => chapterSlug(c) === slug);
  if (i < 0) return null;
  return { track, chapter: track.chapters[i], index: i };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id, chapter: slug } = await params;
  const hit = locate(id, slug);
  if (!hit) return {};
  const doc = readChapter(id, slug);
  const title = doc?.title || hit.chapter.fa.t;
  const description = doc?.desc || hit.chapter.fa.d;
  const url = `${SITE.url}/track/${id}/${slug}`;
  return {
    title: `${title} | ${hit.track.fa.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
  };
}

/** فصل کامل را برای ستون کناری سبک می‌کند: توضیح و کلیدواژه لازم نیست */
const slim = (c: Chapter): Chapter => ({
  ...c,
  fa: { t: c.fa.t, d: "" },
  en: { t: c.en.t, d: "" },
  kw: "",
});

const refOf = (c: Chapter | undefined): ChapterRef | null =>
  c ? { slug: chapterSlug(c), n: c.n, ready: c.ready, fa: c.fa.t, en: c.en.t } : null;

export default async function Page({ params }: { params: Params }) {
  const { id, chapter: slug } = await params;
  const hit = locate(id, slug);
  if (!hit) notFound();

  const doc = readChapter(id, slug);
  if (!doc) notFound();

  const { track, chapter, index } = hit;
  const cat = CATEGORIES.find((c) => c.id === track.cat);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: doc.title || chapter.fa.t,
    description: doc.desc || chapter.fa.d,
    inLanguage: "fa",
    url: `${SITE.url}/track/${id}/${slug}`,
    isPartOf: { "@type": "Course", name: track.fa.name, url: `${SITE.url}/track/${id}` },
    timeRequired: `PT${chapter.mins || 45}M`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChapterView
        track={{ id: track.id, cat: track.cat, fa: { name: track.fa.name }, en: { name: track.en.name } }}
        category={{ fa: cat?.fa.name ?? "", en: cat?.en.name ?? "" }}
        chapter={slim(chapter)}
        chapters={track.chapters.map(slim)}
        html={doc.html}
        toc={doc.toc}
        exercises={doc.exercises}
        prev={refOf(track.chapters[index - 1])}
        next={refOf(track.chapters[index + 1])}
      />
    </>
  );
}
