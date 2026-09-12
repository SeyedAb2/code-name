/* ============================================================================
   فهرست رودمپ‌ها

   محتوا در چند فایل جدا نوشته شده تا هر حوزه قابل ویرایش بماند و یک فایل
   چندهزارخطی نشود. این فایل همه را کنار هم می‌گذارد — و فقط سمت سرور
   وارد می‌شود؛ کلاینت نسخهٔ سبک‌شده (RoadmapCard) یا یک رودمپ را می‌گیرد.
   ========================================================================== */
import type { FieldMeta, Roadmap, RoadmapStats } from "./types";
import { ROLE_ROADMAPS } from "./roles";
import { TECH_WEB_ROADMAPS } from "./tech-web";
import { TECH_DOTNET_ROADMAPS } from "./tech-dotnet";
import { TECH_DATA_ROADMAPS } from "./tech-data";
import { EE_ROADMAPS } from "./ee";
import { EE_SYSTEMS_ROADMAPS } from "./ee-systems";
import { CE_ROADMAPS } from "./ce";
import { CE_SYSTEMS_ROADMAPS } from "./ce-systems";
import { MANAGEMENT_ROADMAPS } from "./management";

export const ROADMAPS: Roadmap[] = [
  ...ROLE_ROADMAPS,
  ...TECH_WEB_ROADMAPS,
  ...TECH_DOTNET_ROADMAPS,
  ...TECH_DATA_ROADMAPS,
  ...EE_ROADMAPS,
  ...EE_SYSTEMS_ROADMAPS,
  ...CE_ROADMAPS,
  ...CE_SYSTEMS_ROADMAPS,
  ...MANAGEMENT_ROADMAPS,
];

export const FIELDS: FieldMeta[] = [
  {
    id: "role",
    ico: '<rect x="3" y="7" width="18" height="13" rx="2.2"/><path d="M8.5 7V5.3a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8V7M3 12.6h18" stroke-linecap="round"/>',
    fa: {
      name: "تخصص هر حوزه",
      desc: "نقش‌های شغلی نرم‌افزار: از پایهٔ مشترک تا فرانت‌اند، بک‌اند و دواپس — هر کدام با ترتیب یادگیری و مهارت‌های نرمش.",
    },
    en: {
      name: "Specialist roles",
      desc: "Software job roles: from shared foundations to frontend, backend and DevOps — each with its learning order and its soft skills.",
    },
  },
  {
    id: "tech",
    ico: '<path d="m8 8-4.2 4L8 16M16 8l4.2 4L16 16M13.6 5.4l-3.2 13.2" stroke-linecap="round" stroke-linejoin="round"/>',
    fa: {
      name: "تخصص هر تکنولوژی",
      desc: "یک ابزار، از صفر تا سطح ارشد: React، Angular، Next.js، C#، ASP.NET Core، پایگاه‌داده و SQL.",
    },
    en: {
      name: "Technology roadmaps",
      desc: "One tool, from zero to senior: React, Angular, Next.js, C#, ASP.NET Core, databases and SQL.",
    },
  },
  {
    id: "ee",
    ico: '<path d="M13.2 2.8 4.8 13.6h6.4l-.8 7.6 8.8-11.2h-6.4z" stroke-linejoin="round"/>',
    fa: {
      name: "مهندسی برق — گرایش‌ها",
      desc: "پایهٔ مشترک برق و گرایش‌های قدرت، الکترونیک، مخابرات، کنترل و بیوالکتریک؛ از درس‌های دانشگاه تا ابزار و بازار کار.",
    },
    en: {
      name: "Electrical engineering",
      desc: "The shared EE core and the power, electronics, telecoms, control and biomedical specialisations — from coursework to tools and jobs.",
    },
  },
  {
    id: "ce",
    ico: '<rect x="6.4" y="6.4" width="11.2" height="11.2" rx="2"/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx=".8"/><path d="M9.6 6.4V3.6M14.4 6.4V3.6M9.6 20.4v-2.8M14.4 20.4v-2.8M6.4 9.6H3.6M6.4 14.4H3.6M20.4 9.6h-2.8M20.4 14.4h-2.8" stroke-linecap="round"/>',
    fa: {
      name: "مهندسی کامپیوتر — گرایش‌ها",
      desc: "پایهٔ مشترک کامپیوتر و گرایش‌های معماری سخت‌افزار، هوش مصنوعی، امنیت، شبکه و سیستم‌های تعبیه‌شده.",
    },
    en: {
      name: "Computer engineering",
      desc: "The shared CE core and the hardware architecture, AI, security, networking and embedded specialisations.",
    },
  },
  {
    id: "management",
    ico: '<circle cx="9" cy="8" r="3.2"/><path d="M3.4 19.6a5.6 5.6 0 0 1 11.2 0" stroke-linecap="round"/><circle cx="17.2" cy="9.4" r="2.5"/><path d="M15.6 14.5a4.6 4.6 0 0 1 5.4 4.5" stroke-linecap="round"/>',
    fa: { name: "رهبری فنی", desc: "از تک‌لید و معمار تا مدیر مهندسی و مدیر ارشد فناوری." },
    en: { name: "Technical leadership", desc: "From tech lead and architect to engineering manager and CTO." },
  },
];

export const roadmapById = (id: string): Roadmap | undefined =>
  ROADMAPS.find((r) => r.id === id);

export function statsOf(r: Roadmap): RoadmapStats {
  let hard = 0;
  let soft = 0;
  let topics = 0;
  for (const st of r.stages) {
    for (const k of st.skills) {
      if (k.kind === "hard") hard++;
      else soft++;
      topics += k.items?.length ?? 0;
    }
  }
  /* مرحله‌ها پشت سر هم‌اند، پس بازه‌ها جمع می‌شوند */
  const months = r.stages.reduce<[number, number]>(
    ([lo, hi], st) => [lo + st.months[0], hi + st.months[1]],
    [0, 0],
  );
  return { stages: r.stages.length, hard, soft, topics, months };
}
