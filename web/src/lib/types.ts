/* ============================================================================
   نوع‌های دامنهٔ کدنامه

   هر متن دوزبانه است. به‌جای اینکه همه‌جا دو فیلد جدا بنویسیم، یک نوع
   عمومی داریم که زبان را پارامتر می‌گیرد — این‌طور اگر جایی یک زبان جا
   بیفتد، کامپایلر می‌گیردش.
   ========================================================================== */

export type Lang = "fa" | "en";
export type Theme = "light" | "dark";

/** متنی که در هر دو زبان وجود دارد. */
export interface Localized<T> {
  fa: T;
  en: T;
}

export interface TrackText {
  name: string;
  desc: string;
  /** پاراگراف بلند سربرگ. فقط در صفحهٔ خود مسیر لازم است. */
  intro: string;
}

export interface ChapterText {
  /** عنوان */
  t: string;
  /** توضیح یک‌خطی */
  d: string;
}

export interface Chapter {
  /** شمارهٔ دورقمی، مثل «۰۷». رشته است چون صفر ابتدایی معنا دارد. */
  n: string;
  file: string;
  /** آیا متن این فصل نوشته شده؟ */
  ready: boolean;
  ex: number;
  mins: number;
  fa: ChapterText;
  en: ChapterText;
  /** کلیدواژه‌های جستجو */
  kw: string;
  /** سطح پروژهٔ نهایی: ۰ فصل عادی · ۱ ساده · ۲ متوسط · ۳ پیچیده */
  cap: 0 | 1 | 2 | 3 | number;
}

export interface TrackStats {
  chapters: number;
  exercises: number;
  minutes: number;
  capstones: number;
  ready: number;
}

export interface Track {
  id: string;
  dir: string;
  /** رنگ نشان در تم روشن */
  accent: string;
  /** رنگ جایگزین برای تم تاریک، وقتی accent آنجا گم می‌شود */
  accentDark: string | null;
  cat: string;
  /** محتویات داخل یک ‎<svg viewBox="0 0 24 24">‎ */
  ico: string;
  locked: boolean;
  fa: TrackText;
  en: TrackText;
  chapters: Chapter[];
  stats: TrackStats;
}

export interface CategoryText {
  name: string;
  desc: string;
}

export interface Category {
  id: string;
  ico: string;
  fa: CategoryText;
  en: CategoryText;
}

/* ── پیشرفت خواندن ───────────────────────────────────────────────────────── */

/** پیشرفت یک فصل. کلیدها کوتاه‌اند چون در localStorage ذخیره می‌شوند. */
export interface ChapterProgress {
  /** شناسهٔ بخش‌هایی که خوانده شده‌اند */
  s: string[];
  /** شناسهٔ تمرین‌هایی که تیک خورده‌اند */
  e: string[];
  /** تعداد کل بخش‌ها، وقتی صفحه باز شد */
  t: number;
  /** تعداد کل تمرین‌ها */
  x: number;
}
