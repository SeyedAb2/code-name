/* ============================================================================
   نوع‌های رودمپ

   رودمپ با «دوره» فرق دارد: دوره یک ابزار را یاد می‌دهد، رودمپ می‌گوید
   برای رسیدن به یک نقش، چه چیزهایی را به چه ترتیبی لازم داری — و کدام
   مسیرهای کدنامه هر مرحله را پوشش می‌دهند.

   هر رودمپ چند «مرحله» دارد و هر مرحله چند «مهارت». مهارت‌ها عمداً
   دو دسته‌اند: فنی و نرم. بیشتر رودمپ‌های اینترنتی دستهٔ دوم را جا
   می‌اندازند و همان است که آدم‌ها را در سطح میانی گیر می‌اندازد.
   ========================================================================== */

export type SkillKind = "hard" | "soft";

export interface Skill {
  fa: string;
  en: string;
  kind: SkillKind;
  /** چرا این مهارت لازم است — بدون این، رودمپ فقط یک فهرست است. */
  whyFa: string;
  whyEn: string;
  /** شناسهٔ مسیرهایی از کدنامه که این را پوشش می‌دهند */
  tracks?: string[];
}

export interface Stage {
  id: string;
  fa: string;
  en: string;
  /** توضیح این مرحله: در پایانش چه کاری از تو برمی‌آید */
  outcomeFa: string;
  outcomeEn: string;
  /** تخمین زمان به ماه، برای کسی که هفته‌ای ۱۰ تا ۱۵ ساعت می‌گذارد */
  months: [number, number];
  skills: Skill[];
}

export type RoadmapField =
  | "software"     // نرم‌افزار
  | "hardware"     // سخت‌افزار و برق
  | "management";  // مدیریت و رهبری فنی

export interface Roadmap {
  id: string;
  field: RoadmapField;
  /** محتویات یک ‎<svg viewBox="0 0 24 24">‎ */
  ico: string;
  accent: string;
  fa: { name: string; role: string; intro: string };
  en: { name: string; role: string; intro: string };
  /** پیش‌نیاز: شناسهٔ رودمپ‌هایی که بهتر است قبلش رفته باشی */
  after?: string[];
  stages: Stage[];
}
