import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TRACKS, CATEGORIES } from "@/lib/courses.data";
import { toSummaries } from "@/lib/view";
import CategoryView from "@/components/category/CategoryView";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ id: c.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
): Promise<Metadata> {
  const { id } = await params;
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) return {};
  return { title: cat.fa.name, description: cat.fa.desc };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) notFound();

  const list = TRACKS.filter((t) => t.cat === cat.id);
  return (
    <CategoryView
      category={cat}
      tracks={toSummaries(list)}
      totals={{
        chapters: list.reduce((a, x) => a + x.stats.chapters, 0),
        exercises: list.reduce((a, x) => a + x.stats.exercises, 0),
      }}
    />
  );
}
