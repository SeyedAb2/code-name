/* ============================================================================
   فهرست رودمپ‌ها

   محتوا در سه فایل جدا نوشته شده تا هر حوزه قابل ویرایش بماند و یک فایل
   دوهزارخطی نشود.
   ========================================================================== */
import type { Roadmap, RoadmapField } from "./roadmaps.types";
import { SOFTWARE_ROADMAPS } from "./roadmaps.software";
import { MANAGEMENT_ROADMAPS } from "./roadmaps.management";
import { HARDWARE_ROADMAPS } from "./roadmaps.hardware";

export const ROADMAPS: Roadmap[] = [
  ...SOFTWARE_ROADMAPS,
  ...HARDWARE_ROADMAPS,
  ...MANAGEMENT_ROADMAPS,
];

export const FIELDS: {
  id: RoadmapField;
  fa: { name: string; desc: string };
  en: { name: string; desc: string };
}[] = [
  {
    id: "software",
    fa: { name: "مهندسی نرم‌افزار", desc: "از پایهٔ مشترک تا تخصص‌های فرانت، بک و عملیات." },
    en: { name: "Software engineering", desc: "From shared foundations to frontend, backend and operations." },
  },
  {
    id: "hardware",
    fa: { name: "سخت‌افزار و برق", desc: "سیستم‌های تعبیه‌شده، شبکه و مخابرات." },
    en: { name: "Hardware and electrical", desc: "Embedded systems, networking and telecoms." },
  },
  {
    id: "management",
    fa: { name: "رهبری فنی", desc: "از تک‌لید تا مدیر ارشد فناوری." },
    en: { name: "Technical leadership", desc: "From tech lead to chief technology officer." },
  },
];

export const roadmapById = (id: string): Roadmap | undefined =>
  ROADMAPS.find((r) => r.id === id);

/** مجموع بازهٔ زمانی همهٔ مرحله‌ها، به ماه. */
export function totalMonths(r: Roadmap): [number, number] {
  return r.stages.reduce<[number, number]>(
    ([lo, hi], s) => [lo + s.months[0], hi + s.months[1]],
    [0, 0],
  );
}

export function countSkills(r: Roadmap): { hard: number; soft: number } {
  let hard = 0, soft = 0;
  for (const s of r.stages) {
    for (const k of s.skills) (k.kind === "hard" ? hard++ : soft++);
  }
  return { hard, soft };
}
