/* ============================================================================
   صفحه‌های دست‌نویس (خانهٔ داکر و فصل‌هایش) را با برند و لودر جدید هماهنگ می‌کند.
   صفحه‌های تولیدشده این را لازم ندارند — build-pages.js خودش می‌سازدشان.

   اجرا:  node tools/patch-handwritten.js
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..", "docs-fa");

const { MARK, BRAND_FAVICON } = require("./brand");

const LOADER = `
<div class="loader" aria-hidden="true">
  <div class="loader-in">
    <span class="loader-mark">${MARK}</span>
    <span class="loader-name">کدنامه<i>Codenameh</i></span>
    <span class="loader-bar"><i></i></span>
  </div>
</div>`;

const OLD_MARK_RE =
  /<span class="brand-mark" aria-hidden="true">[\s\S]*?<\/span>\s*<span class="brand-txt">docs-fa<i lang="fa">[^<]*<\/i><i lang="en">[^<]*<\/i><\/span>/;

const NEW_BRAND =
  `<span class="brand-mark" aria-hidden="true">${MARK}</span>\n` +
  `    <span class="brand-txt">کدنامه<i lang="fa">مرجع‌های مهندسی نرم‌افزار، به فارسی</i>` +
  `<i lang="en">Software engineering references, in Persian</i></span>`;

const files = [
  "01-docker/index.html",
  "01-docker/ch/01-intro.html"
];

let touched = 0;
for (const rel of files) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) { console.log("  ! نیست: " + rel); continue; }
  let s = fs.readFileSync(p, "utf8");
  const before = s;

  s = s.replace(OLD_MARK_RE, NEW_BRAND);
  s = s.replace(/\| docs-fa<\/title>/, "| کدنامه</title>");
  s = s.replace(/— docs-fa<\/title>/, "— کدنامه</title>");
  s = s.replace(
    /<meta name="viewport" content="width=device-width,initial-scale=1">/,
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="color-scheme" content="light dark">'
  );
  /* لودر را درست بعد از <body …> بگذار، اگر از قبل نیست */
  if (!s.includes('class="loader"')) {
    s = s.replace(/(<body[^>]*>)/, "$1\n" + LOADER);
  }
  /* پاورقی: نام برند و لینک راهنمای مشارکت */
  s = s.replace(
    /<span><kbd>Ctrl<\/kbd>\+<kbd>K<\/kbd> <span lang="fa">جستجو<\/span><span lang="en">search<\/span><\/span>/,
    '<span><span lang="fa">ساختهٔ سیدعباس موسوی اصل</span><span lang="en">Built by Seyed Abbas Mousavi Asl</span> · <kbd>Ctrl</kbd>+<kbd>K</kbd></span>'
  );

  if (s !== before) { fs.writeFileSync(p, s, "utf8"); touched++; console.log("  ✓ " + rel); }
  else console.log("  – بدون تغییر: " + rel);
}
console.log(`\n${touched} فایل به‌روز شد.`);
