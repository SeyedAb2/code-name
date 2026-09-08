/* ============================================================================
   بررسی سلامت: هر لینک داخلی، هر src، و هر لنگر باید واقعاً وجود داشته باشد.
   اجرا:  node tools/check-links.js
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..", "docs-fa");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

/* فایل‌های داخل lab/ عمداً مستقل‌اند — نمونه‌کارِ تمرین‌اند، نه صفحهٔ سایت */
const files = walk(ROOT).filter(p => !/[\\/]lab[\\/]/.test(p));
let problems = 0;
let checked = 0;

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  const html = fs.readFileSync(file, "utf8");
  const dir = path.dirname(file);

  /* href و src داخلی */
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
  for (const r of refs) {
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(r)) continue;
    checked++;
    const target = path.join(dir, r.split("#")[0].split("?")[0]);
    if (!fs.existsSync(target)) {
      console.log(`  ✗ ${rel}  →  ${r}`);
      problems++;
    }
  }

  /* لنگرهای داخل همان صفحه */
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
  for (const a of anchors) {
    checked++;
    if (!ids.has(a)) { console.log(`  ✗ ${rel}  →  لنگر #${a} وجود ندارد`); problems++; }
  }

  /* هر صفحه باید هر سه دارایی را داشته باشد */
  for (const need of ["theme.css", "courses.js", "app.js"]) {
    if (!html.includes(need)) { console.log(`  ✗ ${rel}  →  ${need} بارگذاری نشده`); problems++; }
  }

  /* صفت‌های body */
  if (!/\<body[^>]*data-page=/.test(html)) {
    console.log(`  ✗ ${rel}  →  data-page روی body نیست`); problems++;
  }
}

console.log(`\n${files.length} صفحه · ${checked} ارجاع بررسی شد`);
console.log(problems ? `${problems} مشکل پیدا شد.` : "همه‌چیز سالم است. ✓");
process.exit(problems ? 1 : 0);
