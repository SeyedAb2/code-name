/* ============================================================================
   نوع‌های رودمپ

   رودمپ با «دوره» فرق دارد: دوره یک ابزار را یاد می‌دهد، رودمپ می‌گوید
   برای رسیدن به یک نقش یا تسلط بر یک تکنولوژی، چه چیزهایی را به چه
   ترتیبی لازم داری — و کدام مسیرهای کدنامه هر مرحله را پوشش می‌دهند.

   ساختار سه‌لایه است، مثل نمودارهای roadmap.sh:
     مرحله   ← گره‌های روی ستون اصلی نمودار، از بالا به پایین
     مهارت   ← شاخه‌های دو طرف هر مرحله
     موضوع   ← برگ‌ها: نام‌های مشخصی که زیر هر مهارت باید بشناسی

   مهارت‌ها عمداً دو نوع‌اند: فنی و نرم. بیشتر رودمپ‌های اینترنتی نوع دوم
   را جا می‌اندازند و همان است که آدم‌ها را در سطح میانی گیر می‌اندازد.
   ========================================================================== */

export type SkillKind = "hard" | "soft";

/**
 * وزن هر گره در نمودار:
 *   core — مسیر پیشنهادی؛ این را یاد بگیر
 *   alt  — جایگزین؛ از گروه گزینه‌های هم‌ارز، یکی کافی است
 *   opt  — اختیاری یا «هر وقت لازم شد»؛ ترتیبش مهم نیست
 */
export type SkillLevel = "core" | "alt" | "opt";

export interface Skill {
  fa: string;
  en: string;
  kind: SkillKind;
  /** پیش‌فرض core */
  level?: SkillLevel;
  /** چرا این مهارت لازم است — بدون این، رودمپ فقط یک فهرست است. */
  whyFa: string;
  whyEn: string;
  /**
   * موضوع‌های مشخص زیر این مهارت. نام فنی‌اند و معمولاً انگلیسی می‌مانند،
   * چون همان‌هایی‌اند که در مستندات، پیام خطا و آگهی شغلی می‌بینی.
   */
  items?: string[];
  /** شناسهٔ مسیرهایی از کدنامه که این را پوشش می‌دهند */
  tracks?: string[];
}

export interface Stage {
  id: string;
  fa: string;
  en: string;
  /** در پایان این مرحله چه کاری از تو برمی‌آید */
  outcomeFa: string;
  outcomeEn: string;
  /** تخمین زمان به ماه، برای کسی که هفته‌ای ۱۰ تا ۱۵ ساعت می‌گذارد */
  months: [number, number];
  skills: Skill[];
}

export type RoadmapField =
  | "role"         // تخصص هر حوزه: فرانت‌اند، بک‌اند، دواپس…
  | "tech"         // تخصص هر تکنولوژی: React، C#، SQL…
  | "ee"           // گرایش‌های مهندسی برق
  | "ce"           // گرایش‌های مهندسی کامپیوتر
  | "management";  // رهبری فنی

export interface Roadmap {
  id: string;
  field: RoadmapField;
  /** محتویات یک ‎<svg viewBox="0 0 24 24">‎ */
  ico: string;
  accent: string;
  fa: { name: string; role: string; intro: string };
  en: { name: string; role: string; intro: string };
  /** پیش‌نیاز: رودمپ‌هایی که بهتر است قبلش رفته باشی */
  after?: string[];
  /** قدم بعدی: رودمپ‌هایی که طبیعی است بعد از این سراغشان بروی */
  next?: string[];
  stages: Stage[];
}

/** وضعیتی که خود کاربر برای هر مهارت انتخاب می‌کند */
export type SkillStatus = "doing" | "done" | "skip";

/** آمار یک رودمپ — در سرور حساب می‌شود و به کلاینت می‌رود */
export interface RoadmapStats {
  stages: number;
  hard: number;
  soft: number;
  /** مجموع موضوع‌های برگ */
  topics: number;
  months: [number, number];
}

/** یک دسته در صفحهٔ فهرست رودمپ‌ها */
export interface FieldMeta {
  id: RoadmapField;
  ico: string;
  fa: { name: string; desc: string };
  en: { name: string; desc: string };
}

/** کارت سبک‌شدهٔ یک رودمپ برای صفحهٔ فهرست — بدون مرحله‌ها و مهارت‌ها */
export interface RoadmapCard extends Pick<Roadmap, "id" | "field" | "ico" | "accent" | "fa" | "en"> {
  stats: RoadmapStats;
}

/** ارجاع کوتاه به یک رودمپ یا مسیر، فقط با نام */
export interface NamedRef {
  id: string;
  fa: string;
  en: string;
}
