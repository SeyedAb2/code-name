/* ============================================================================
   دوزبانگی — کدنامه

   سایت فارسی و انگلیسی است و سوییچ زبان نباید صفحه را دوباره بارگذاری کند.
   برای همین رشته‌ها اینجا جمع‌اند و در زمان اجرا انتخاب می‌شوند.
   ========================================================================== */
import type { Lang } from "./types";

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

/** عدد را به رقم فارسی می‌برد. در حالت انگلیسی دست‌نخورده برمی‌گردد. */
export function num(n: number | string, lang: Lang): string {
  const s = String(n);
  return lang === "fa" ? s.replace(/\d/g, (d) => FA_DIGITS[+d]) : s;
}

/** درصد با علامت درست هر زبان. */
export function pct(n: number, lang: Lang): string {
  return lang === "fa" ? `${num(n, lang)}٪` : `${n}%`;
}

/** دقیقه → ساعت، گرد شده. برای برچسب «≈ ۱۷ ساعت». */
export function hours(minutes: number): number {
  return Math.round(minutes / 60);
}

export const DICT = {
  brand: { fa: "کدنامه", en: "Codenameh" },
  tagline: {
    fa: "مرجع‌های مهندسی نرم‌افزار، به فارسی",
    en: "Software engineering references, in Persian",
  },

  home: { fa: "خانه", en: "Home" },
  search: { fa: "جستجو", en: "Search" },
  searchPlaceholder: { fa: "جستجو در همهٔ مسیرها…", en: "Search all tracks…" },
  bookmarks: { fa: "علاقه‌مندی‌ها", en: "Bookmarks" },
  share: { fa: "اشتراک‌گذاری", en: "Share" },
  contribute: { fa: "مشارکت در پروژه", en: "Contribute" },
  about: { fa: "دربارهٔ پروژه", en: "About" },
  roadmaps: { fa: "رودمپ‌ها", en: "Roadmaps" },
  menu: { fa: "منو", en: "Menu" },
  close: { fa: "بستن", en: "Close" },
  theme: { fa: "تم", en: "Theme" },
  language: { fa: "زبان", en: "Language" },

  tracks: { fa: "مسیر", en: "tracks" },
  chapters: { fa: "فصل", en: "chapters" },
  exercises: { fa: "تمرین با پاسخ", en: "solved exercises" },
  estTime: { fa: "زمان تخمینی", en: "estimated time" },
  finalProjects: { fa: "پروژهٔ نهایی", en: "final projects" },
  hoursUnit: { fa: "ساعت", en: "h" },

  allTracks: { fa: "همهٔ مسیرها", en: "All tracks" },
  categories: { fa: "دسته‌ها", en: "Categories" },
  contents: { fa: "فهرست مطالب", en: "Contents" },
  inThisChapter: { fa: "در این فصل", en: "On this page" },
  chapterList: { fa: "فصل‌های مسیر", en: "Chapters" },

  startTrack: { fa: "شروع مسیر", en: "Start the track" },
  resumeFrom: { fa: "ادامه از فصل", en: "Resume from ch." },
  notReady: { fa: "هنوز آماده نیست", en: "Not ready yet" },
  planned: { fa: "در نوبت نوشتن", en: "Planned" },

  yourProgress: { fa: "پیشرفت تو", en: "Your progress" },
  reset: { fa: "صفر کن", en: "Reset" },
  done: { fa: "انجام شد", en: "Done" },
  solved: { fa: "تمرین‌های حل‌شده", en: "Solved" },

  prev: { fa: "فصل قبل", en: "Previous" },
  next: { fa: "فصل بعد", en: "Next" },

  copy: { fa: "کپی", en: "Copy" },
  copied: { fa: "کپی شد ✓", en: "Copied ✓" },
  noResults: { fa: "چیزی پیدا نشد.", en: "No matches." },

  beginner: { fa: "مبتدی", en: "Beginner" },
  intermediate: { fa: "متوسط", en: "Intermediate" },
  advanced: { fa: "پیشرفته", en: "Advanced" },
} as const;

export type DictKey = keyof typeof DICT;

/** یک رشته از فرهنگ، به زبان جاری. */
export function t(key: DictKey, lang: Lang): string {
  return DICT[key][lang];
}
