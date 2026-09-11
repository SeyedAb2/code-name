import type { Metadata } from "next";
import { ROADMAPS, FIELDS, totalMonths, countSkills } from "@/lib/roadmaps";
import RoadmapIndex from "@/components/roadmap/RoadmapIndex";

export const metadata: Metadata = {
  title: "رودمپ‌ها",
  description:
    "رودمپ تخصص‌های مهندسی نرم‌افزار، سخت‌افزار و رهبری فنی — از صفر، با مهارت‌های فنی و نرم و تخمین زمان.",
};

export default function Page() {
  /* آمار در سرور حساب می‌شود تا کلاینت کار اضافه نکند */
  const cards = ROADMAPS.map((r) => {
    const { hard, soft } = countSkills(r);
    return { ...r, months: totalMonths(r), hard, soft };
  });
  return <RoadmapIndex roadmaps={cards} fields={FIELDS} />;
}
