#!/usr/bin/env node
/* ============================================================================
   تبدیل مانیفست به TypeScript — کدنامه

   ‏docs-fa/assets/courses.js همچنان تنها جای نوشتن سرفصل‌هاست: یک فایل
   ‏JS ساده که آرایه‌های فشرده دارد و ویرایشش آسان است. این ابزار همان را
   به دادهٔ نوع‌دار برای اپ Next تبدیل می‌کند.

   چرا از روی همان فایل و نه کپی دستی: دو نسخه یعنی دیر یا زود دو حقیقت.

   اجرا:  node tools/export-manifest.js
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "docs-fa", "assets", "courses.js");
const OUT = path.join(ROOT, "web", "src", "lib", "courses.data.ts");

/* دسته‌ها را از build-pages.js می‌خوانیم تا در یک جا بمانند */
const buildSrc = fs.readFileSync(path.join(__dirname, "build-pages.js"), "utf8");
const catBlock = /const CATS = (\[[\s\S]*?\n\]);/.exec(buildSrc);
if (!catBlock) throw new Error("CATS در build-pages.js پیدا نشد");
const CATS = vm.runInNewContext(catBlock[1]);

/* آیکون دسته‌ها در یک نگاشت جدا نگه داشته شده، نه داخل خود CATS */
const icoBlock = /const CAT_ICO = (\{[\s\S]*?\n\});/.exec(buildSrc);
if (!icoBlock) throw new Error("CAT_ICO در build-pages.js پیدا نشد");
const CAT_ICO = vm.runInNewContext("(" + icoBlock[1] + ")");

const w = {};
vm.runInContext(fs.readFileSync(SRC, "utf8"), vm.createContext({ window: w }));

/* آرایهٔ فشردهٔ هر فصل → شیء خوانا.
   ترتیب در سرِ courses.js توضیح داده شده. */
const expand = (a) => ({
  n: a[0],
  file: a[1],
  ready: !!a[2],
  ex: a[3] ?? 0,
  mins: a[4] ?? 0,
  fa: { t: a[5] ?? "", d: a[6] ?? "" },
  en: { t: a[7] ?? "", d: a[8] ?? "" },
  kw: a[9] ?? "",
  cap: a[10] ?? 0,
});

const tracks = w.COURSES.map((c) => {
  const chapters = (c.ch || []).map(expand);
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

   دست نزن. منبع: docs-fa/assets/courses.js
   برای اضافه یا ویرایش کردن فصل، همان فایل را عوض کن و دوباره بساز:
       node tools/export-manifest.js
   ========================================================================== */
import type { Track, Category } from "./types";

`;

const body =
  header +
  `export const CATEGORIES: Category[] = ${JSON.stringify(cats, null, 2)};\n\n` +
  `export const TRACKS: Track[] = ${JSON.stringify(tracks, null, 2)};\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body, "utf8");

const totCh = tracks.reduce((s, t) => s + t.stats.chapters, 0);
const totEx = tracks.reduce((s, t) => s + t.stats.exercises, 0);
const totReady = tracks.reduce((s, t) => s + t.stats.ready, 0);
console.log(`✓ ${path.relative(ROOT, OUT)}`);
console.log(`  ${cats.length} دسته · ${tracks.length} مسیر · ${totCh} فصل · ${totEx} تمرین · ${totReady} فصل آماده`);
console.log(`  ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB`);

/* ── نمایهٔ جستجو ────────────────────────────────────────────────────────────
   جدا از مانیفست و تنبل بارگذاری می‌شود: تا کسی جستجو را باز نکند، دانلود
   نمی‌شود. کلیدها یک‌حرفی‌اند چون ۱۳۸۹ ردیف در آن است و نام‌های بلند،
   چند ده کیلوبایت تکرار خالص می‌شوند. */
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const faNum = (n) => String(n).replace(/\d/g, (d) => FA_DIGITS[+d]);

const SEARCH_OUT = path.join(ROOT, "web", "public", "search-index.json");

const rows = [];
w.COURSES.forEach((c) => {
  if (c.locked) return;
  (c.ch || []).forEach((a) => {
    const ch = expand(a);
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
console.log(`✓ web/public/search-index.json`);
console.log(`  ${rows.length} ردیف · ${(fs.statSync(SEARCH_OUT).size / 1024).toFixed(0)} KB`);
