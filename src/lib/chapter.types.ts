/* نوع‌های مشترک صفحهٔ فصل — جدا از chapters.server.ts تا کلاینت بتواند
   بدون کشیدن ماژول fs واردشان کند. */

/** یک ردیف فهرست مطالب: شناسهٔ بخش و عنوان دوزبانه‌اش */
export interface TocItem {
  id: string;
  fa: string;
  en: string;
}

/** فصل قبل یا بعد، برای ناوبری پایین صفحه */
export interface ChapterRef {
  slug: string;
  n: string;
  ready: boolean;
  fa: string;
  en: string;
}
