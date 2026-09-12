#!/usr/bin/env node
/* ============================================================================
   تبدیل مانیفست به TypeScript — کدنامه

   ‏data/courses.js و data/categories.js تنها جای نوشتن سرفصل‌ها هستند: دو
   فایل JS ساده با آرایه‌های فشرده که ویرایششان آسان است. این ابزار همان‌ها
   را به دادهٔ نوع‌دار اپ Next تبدیل می‌کند.

   چرا از روی همان فایل‌ها و نه کپی دستی: دو نسخه یعنی دیر یا زود دو حقیقت.

   یک کار دیگر هم می‌کند: برای فصلی که واقعاً نوشته شده، تعداد تمرین را از
   خود متن می‌شمارد و عدد مانیفست را نادیده می‌گیرد. عدد مانیفست برای
   فصل‌های نیامده «هدف» است؛ برای فصل نوشته‌شده باید حقیقت باشد.

   اجرا:  node tools/export-manifest.js
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "data", "courses.js");
const CONTENT = path.join(ROOT, "content");
const OUT = path.join(ROOT, "src", "lib", "courses.data.ts");
const SEARCH_OUT = path.join(ROOT, "public", "search-index.json");

const { CATS, CAT_ICO } = require(path.join(ROOT, "data", "categories.js"));

const w = {};
vm.runInContext(fs.readFileSync(SRC, "utf8"), vm.createContext({ window: w }));

/* تعداد تمرین‌های واقعی یک فصل نوشته‌شده، یا null اگر هنوز نوشته نشده */
function writtenExercises(trackId, file) {
  const p = path.join(CONTENT, trackId, file);
  if (!fs.existsSync(p)) return null;
  const html = fs.readFileSync(p, "utf8");
  return (html.match(/<div class="ex" id=/g) || []).length;
}

/* آرایهٔ فشردهٔ هر فصل → شیء خوانا. ترتیب در سرِ courses.js توضیح داده شده. */
const mismatched = [];
const expand = (a, trackId) => {
  const file = a[1];
  const real = a[2] ? writtenExercises(trackId, file) : null;
  if (real !== null && real !== a[3]) mismatched.push(`${trackId}/${file}: ${a[3]} → ${real}`);
  return {
    n: a[0],
    file,
    ready: !!a[2],
    ex: real !== null ? real : (a[3] ?? 0),
    mins: a[4] ?? 0,
    fa: { t: a[5] ?? "", d: a[6] ?? "" },
    en: { t: a[7] ?? "", d: a[8] ?? "" },
    kw: a[9] ?? "",
    cap: a[10] ?? 0,
  };
};

const tracks = w.COURSES.map((c) => {
  const chapters = (c.ch || []).map((a) => expand(a, c.id));
  return {
    id: c.id,
    dir: c.dir,
    accent: c.accent,
    accentDark: c.accentDark || null,
    cat: c.cat,
    ico: c.ico,
    locked: !!c.locked,
    fa: { name: c.fa.name, desc: c.fa.desc, intro: c.fa.intro || "" },
    en: { name: c.en.name, desc: c.en.desc, intro: c.en.intro || "" },
    chapters,
    stats: {
      chapters: chapters.length,
      exercises: chapters.reduce((s, x) => s + x.ex, 0),
      minutes: chapters.reduce((s, x) => s + x.mins, 0),
      capstones: chapters.filter((x) => x.cap).length,
      ready: chapters.filter((x) => x.ready).length,
    },
  };
});

const cats = CATS.map((c) => ({
  id: c.id,
  ico: CAT_ICO[c.id] || CAT_ICO.projects || "",
  fa: { name: c.fa, desc: c.dfa },
  en: { name: c.en, desc: c.den },
}));

const header = `/* ============================================================================
   دادهٔ مسیرها — ساختهٔ tools/export-manifest.js

   دست نزن. منبع: data/courses.js و data/categories.js
   برای اضافه یا ویرایش کردن فصل، همان‌ها را عوض کن و دوباره بساز:
       npm run manifest
   ========================================================================== */
import type { Track, Category } from "./types";

`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(
  OUT,
  header +
    `export const CATEGORIES: Category[] = ${JSON.stringify(cats, null, 2)};\n\n` +
    `export const TRACKS: Track[] = ${JSON.stringify(tracks, null, 2)};\n`,
  "utf8",
);

const totCh = tracks.reduce((s, t) => s + t.stats.chapters, 0);
const totEx = tracks.reduce((s, t) => s + t.stats.exercises, 0);
const totReady = tracks.reduce((s, t) => s + t.stats.ready, 0);
console.log(`✓ ${path.relative(ROOT, OUT)}`);
console.log(`  ${cats.length} دسته · ${tracks.length} مسیر · ${totCh} فصل · ${totEx} تمرین · ${totReady} فصل آماده`);
console.log(`  ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB`);
if (mismatched.length) {
  console.log(`  تعداد تمرین از روی متن فصل اصلاح شد: ${mismatched.join("، ")}`);
}

/* ── نمایهٔ جستجو ────────────────────────────────────────────────────────────
   جدا از مانیفست و تنبل بارگذاری می‌شود: تا کسی جستجو را باز نکند، دانلود
   نمی‌شود. کلیدها یک‌حرفی‌اند چون ۱۳۸۹ ردیف در آن است و نام‌های بلند،
   چند ده کیلوبایت تکرار خالص می‌شوند. */
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const faNum = (n) => String(n).replace(/\d/g, (d) => FA_DIGITS[+d]);

const rows = [];
w.COURSES.forEach((c) => {
  if (c.locked) return;
  (c.ch || []).forEach((a) => {
    const ch = expand(a, c.id);
    const slug = ch.file.replace(/\.html$/, "");
    rows.push({
      tf: ch.fa.t,
      te: ch.en.t,
      nf: `${c.fa.name} · فصل ${faNum(parseInt(ch.n, 10))}`,
      ne: `${c.en.name} · Ch. ${parseInt(ch.n, 10)}`,
      u: ch.ready ? `/track/${c.id}/${slug}` : `/track/${c.id}`,
      r: ch.ready ? 1 : 0,
      h: `${ch.fa.t} ${ch.fa.d} ${ch.en.t} ${ch.en.d} ${ch.kw} ${c.fa.name} ${c.en.name}`.toLowerCase(),
    });
  });
});

fs.mkdirSync(path.dirname(SEARCH_OUT), { recursive: true });
fs.writeFileSync(SEARCH_OUT, JSON.stringify(rows), "utf8");
console.log(`✓ public/search-index.json`);
console.log(`  ${rows.length} ردیف · ${(fs.statSync(SEARCH_OUT).size / 1024).toFixed(0)} KB`);
