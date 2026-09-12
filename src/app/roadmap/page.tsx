import type { Metadata } from "next";
import { ROADMAPS, FIELDS, statsOf } from "@/lib/roadmaps";
import type { RoadmapCard } from "@/lib/roadmaps/types";
import { SITE } from "@/lib/site";
import RoadmapIndex from "@/components/roadmap/RoadmapIndex";

export const metadata: Metadata = {
  title: "رودمپ‌ها",
  description:
    "رودمپ درختی تخصص‌های نرم‌افزار، تکنولوژی‌ها (React، Angular، Next.js، C#، ASP.NET Core، SQL) و گرایش‌های مهندسی برق و کامپیوتر — از صفر، با مهارت‌های فنی و نرم و تخمین زمان.",
  alternates: { canonical: `${SITE.url}/roadmap` },
};

export default function Page() {
  /* فقط چیزی که کارت نشان می‌دهد — مرحله‌ها و مهارت‌ها در payload نمی‌آیند */
  const cards: RoadmapCard[] = ROADMAPS.map((r) => ({
    id: r.id,
    field: r.field,
    ico: r.ico,
    accent: r.accent,
    fa: r.fa,
    en: r.en,
    stats: statsOf(r),
  }));
  return <RoadmapIndex roadmaps={cards} fields={FIELDS} />;
}
