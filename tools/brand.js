/* ============================================================================
   نشان کدنامه — تنها جایی که لوگو تعریف می‌شود

   چرا جدا: نشان هم در صفحه‌های تولیدی می‌آید (build-pages.js) و هم در
   صفحه‌های دست‌نویس (patch-handwritten.js). وقتی در دو جا کپی بود، عوض کردن
   لوگو یعنی یکی از دو جا عقب می‌ماند — و دقیقاً همین اتفاق افتاد.

   فایل‌های تصویر با tools/make-logo.js از assets/images/logo.png ساخته
   می‌شوند: بریده تا کادر واقعی، و در چند اندازه. اصلِ ۶۵۲ کیلوبایتی هرگز
   به مرورگر فرستاده نمی‌شود.
   ========================================================================== */
"use strict";

/* نشان تصویری. اندازهٔ ۶۴ برای نوار بالا (۳۰px روی نمایشگر دوبرابری) کافی است
   و ۹٫۶ کیلوبایت است. width/height صریح‌اند تا چیدمان موقع بارگذاری نپرد. */
const MARK = (root = "", px = 30) =>
  `<img src="${root}assets/images/logo-64.png" alt="" width="${px}" height="${px}" decoding="async">`;

/* favicon: همان لوگو، اندازهٔ ۳۲ — ۲٫۹ کیلوبایت */
const FAVICON_LINKS = (root = "") =>
  `<link rel="icon" type="image/png" sizes="32x32" href="${root}assets/images/logo-32.png">\n` +
  `<link rel="icon" type="image/png" sizes="128x128" href="${root}assets/images/logo-128.png">\n` +
  `<link rel="apple-touch-icon" sizes="256x256" href="${root}assets/images/logo-256.png">`;

module.exports = { MARK, FAVICON_LINKS };
