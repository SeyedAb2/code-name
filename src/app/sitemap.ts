import type { MetadataRoute } from "next";
import { TRACKS, CATEGORIES } from "@/lib/courses.data";
import { ROADMAPS } from "@/lib/roadmaps";
import { chapterSlug } from "@/lib/track";
import { hasChapter } from "@/lib/chapters.server";
import { SITE } from "@/lib/site";

/* نقشهٔ سایت در زمان build ساخته می‌شود. فصل‌هایی که هنوز نوشته نشده‌اند
   نمی‌آیند — لینک به صفحهٔ نبوده، به موتور جستجو سیگنال بد می‌دهد. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const out: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/roadmap`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/contributing`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  for (const c of CATEGORIES) {
    out.push({ url: `${SITE.url}/category/${c.id}`, lastModified, changeFrequency: "weekly", priority: 0.7 });
  }

  for (const t of TRACKS) {
    out.push({ url: `${SITE.url}/track/${t.id}`, lastModified, changeFrequency: "weekly", priority: 0.8 });
    for (const ch of t.chapters) {
      const slug = chapterSlug(ch);
      if (ch.ready && hasChapter(t.id, slug)) {
        out.push({
          url: `${SITE.url}/track/${t.id}/${slug}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.9,
        });
      }
    }
  }

  for (const r of ROADMAPS) {
    out.push({ url: `${SITE.url}/roadmap/${r.id}`, lastModified, changeFrequency: "monthly", priority: 0.8 });
  }

  return out;
}
