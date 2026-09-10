/* ============================================================================
   کدنامه — تولیدکنندهٔ صفحه‌ها
   ---------------------------------------------------------------------------
   این ابزار *فقط برای نویسنده* است، نه برای خواننده. خروجی‌اش HTML ساکن است و
   خواننده هیچ‌وقت Node لازم ندارد.

   چه می‌سازد:
     docs-fa/index.html                 صفحهٔ اصلی (فهرست مسیرها)
     docs-fa/<dir>/index.html           خانهٔ هر مسیر  (برای همهٔ مسیرها جز ۰۱)
     docs-fa/contributing.html          راهنمای مشارکت

   چرا: نام و توضیح و فصل‌های هر دوره فقط در assets/courses.js می‌مانند.
   این‌جا فقط قالب است. یعنی برای افزودن یک دوره، هیچ HTMLای دست‌نویس نمی‌شود.

   اجرا:  node tools/build-pages.js
   ========================================================================== */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "docs-fa");
const BRAND = { fa: "کدنامه", en: "Codenameh" };
const TAGLINE = { fa: "مرجع‌های مهندسی نرم‌افزار، به فارسی", en: "Software engineering references, in Persian" };

/* دوره‌ها را از همان فایلی می‌خوانیم که مرورگر می‌خواند */
const global_ = { window: {} };
const src = fs.readFileSync(path.join(ROOT, "assets", "courses.js"), "utf8");
new Function("window", src)(global_.window);
const COURSES = global_.window.COURSES;

/* همان نرمال‌سازی app.js */
COURSES.forEach(c => {
  c.chapters = (c.ch || []).map(a => ({
    n: a[0], file: a[1], ready: !!a[2], ex: a[3], mins: a[4],
    fa: { t: a[5], d: a[6] }, en: { t: a[7], d: a[8] }, kw: a[9] || "", cap: a[10] || 0
  }));
  c.readyCount = c.chapters.filter(x => x.ready).length;
  c.exTotal = c.chapters.reduce((s, x) => s + (x.ex || 0), 0);
  c.capCount = c.chapters.filter(x => x.cap).length;
  c.hours = Math.round(c.chapters.reduce((s, x) => s + (x.mins || 0), 0) / 60);
});

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const fa = n => String(n).replace(/\d/g, d => FA_DIGITS[+d]);

const CATS = [
  { id: "roots",    fa: "بنیان‌ها و تاریخچه",  en: "Foundations & history",
    dfa: "اینکه هر چیزی از کجا آمد و چه دردی را درمان کرد. اگر تازه‌کاری، از اینجا شروع کن.",
    den: "Where each thing came from and which pain it cured. If you are new, start here." },
  { id: "basics",   fa: "ابزار روزمره",        en: "Everyday tools",
    dfa: "ابزارهایی که هر روز، در هر پروژه‌ای، صرف‌نظر از زبان و فریم‌ورک لازمشان داری.",
    den: "The tools you need every day, in every project, whatever the language or framework." },
  { id: "infra",    fa: "زیرساخت و عملیات",    en: "Infrastructure & operations",
    dfa: "بردن کد از لپ‌تاپ به سروری که شب هم بیدار می‌ماند.",
    den: "Getting code from your laptop onto a server that stays up overnight." },
  { id: "arch",     fa: "معماری و مهندسی",     en: "Architecture & engineering",
    dfa: "تصمیم‌هایی که عوض کردنشان بعداً گران است — و چطور درست بگیری‌شان.",
    den: "The decisions that are expensive to change later — and how to make them well." },
  { id: "backend",  fa: "بک‌اند",              en: "Backend",
    dfa: "زبان‌ها و فریم‌ورک‌های سمت سرور، هرکدام از مقدماتی تا پیشرفته.",
    den: "Server-side languages and frameworks, each from beginner to advanced." },
  { id: "frontend", fa: "فرانت‌اند و موبایل",  en: "Frontend & mobile",
    dfa: "آنچه کاربر واقعاً می‌بیند و لمس می‌کند.",
    den: "What the user actually sees and touches." },
  { id: "ai",       fa: "هوش مصنوعی",          en: "Artificial intelligence",
    dfa: "از یادگیری ماشین تا ساختن محصول با مدل‌های زبانی — با تأکید بر داده و ارزیابی.",
    den: "From machine learning to building products on language models — with the emphasis on data and evaluation." },
  { id: "data",     fa: "داده و بی‌درنگ",      en: "Data & real-time",
    dfa: "ذخیره کردن، پیدا کردن و زنده رساندن داده.",
    den: "Storing data, finding it, and delivering it live." },
  { id: "publish",  fa: "انتشار و توزیع",      en: "Publishing & distribution",
    dfa: "از کدی که کار می‌کند تا چیزی که دیگران نصبش می‌کنند.",
    den: "From code that works to something other people install." },
  { id: "projects", fa: "پروژه‌های ترکیبی",    en: "Integration projects",
    dfa: "سامانه‌های کامل که چند مسیر را به هم وصل می‌کنند. بعد از چند مسیر بیا سراغشان.",
    den: "Complete systems tying several tracks together. Come here after a few tracks." },
  { id: "career",   fa: "مهارت و مسیر شغلی",   en: "Skills & career",
    dfa: "آنچه بین یک برنامه‌نویس خوب و یک مهندس نرم‌افزار فرق می‌گذارد.",
    den: "What separates a good programmer from a software engineer." }
];

/* ───────────────────────────── نشان و آیکون‌ها ───────────────────────────── */
/* نشان کدنامه: یک کتاب باز با نشانهٔ کد داخلش */
const MARK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
<path d="M3.6 4.8A1.8 1.8 0 0 1 5.4 3H20v18H5.4a1.8 1.8 0 0 1-1.8-1.8z"/>
<path d="M7.6 18.2H20"/><path d="m10.4 8.6-2.3 2.9 2.3 2.9M14.4 8.6l2.3 2.9-2.3 2.9"/></svg>`;

/* رنگ نشان دوره.
   رنگ برند بعضی ابزارها در یکی از دو تم خوانا نیست (Next.js تقریباً سیاه است،
   JavaScript تقریباً سفید). هرجا accentDark تعریف شده، تم تاریک از آن استفاده
   می‌کند. theme.css این دو متغیر را برمی‌دارد. */
const accVars = c =>
  `--acc:${c.accent}` + (c.accentDark ? `;--acc-d:${c.accentDark}` : "");

/* یک خانهٔ باکس آمار: آیکون + عدد + برچسب دوزبانه */
const factCell = (ico, value, labelFa, labelEn) =>
  `<div class="fact"><span class="fact-ico" aria-hidden="true">${ico}</span>` +
  `<span class="fact-v">${value}` +
  `<span lang="fa">${labelFa}</span><span lang="en">${labelEn}</span></span></div>`;

const FAVICON = (color, inner) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="${color}"/><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" transform="translate(2.4 2.4) scale(.8)">${inner}</g></svg>`
  )}`;

const ICO = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>`,
  moon:   `<svg class="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
  sun:    `<svg class="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display:none"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  book:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16M4 12h16M4 19h10"/></svg>`,
  clock:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  check:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11 2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="3"/></svg>`,
  flag:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 21V4M5 4h12l-2.4 3.6L17 11H5"/></svg>`,
  mail:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="m3 7 9 6 9-6"/></svg>`,
  code:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 8-4 4 4 4M15 8l4 4-4 4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.4 20 6.6v5.6c0 4.4-3.2 7.5-8 8.8-4.8-1.3-8-4.4-8-8.8V6.6z"/><path d="m9 12 2.2 2.2L15.4 10"/></svg>`,
  down:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14"/></svg>`,
  up:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V9M7.5 13.5 12 9l4.5 4.5M5 4h14"/></svg>`,
  bars:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  list:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 7h12M8 12h12M8 17h9"/><circle cx="4.3" cy="7" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.3" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.3" cy="17" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  close:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
  star:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85z"/></svg>`,
  share:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="17.5" cy="6" r="2.6"/><circle cx="6.5" cy="12" r="2.6"/><circle cx="17.5" cy="18" r="2.6"/><path d="m8.9 10.7 6.2-3.4M8.9 13.3l6.2 3.4"/></svg>`,
  dots:   `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="5.5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="18.5" cy="12" r="1.7"/></svg>`,
  heart:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 20.4 4.6 13a4.7 4.7 0 0 1 6.6-6.7l.8.8.8-.8A4.7 4.7 0 0 1 19.4 13z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9.5h4v11H3zM10 9.5h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.04c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.3-2.02 2.66v5.13h-4z"/></svg>`,
  phone:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M21 16.5v2.8a1.8 1.8 0 0 1-2 1.8 17.6 17.6 0 0 1-7.7-2.7 17.3 17.3 0 0 1-5.3-5.3A17.6 17.6 0 0 1 3.3 5.3a1.8 1.8 0 0 1 1.8-2h2.8a1.8 1.8 0 0 1 1.8 1.6c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9l-1.2 1.2a14 14 0 0 0 5.3 5.3l1.2-1.2a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.6 1.8z"/></svg>`,
  card:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19M6 15h3"/></svg>`,
  copy:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="9" y="9" width="11.5" height="11.5" rx="2.2"/><path d="M15 6.5V5.8A2.3 2.3 0 0 0 12.7 3.5H5.8A2.3 2.3 0 0 0 3.5 5.8v6.9A2.3 2.3 0 0 0 5.8 15h.7"/></svg>`,
  heart:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.3 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 1 1 19.4 13z"/></svg>`
};

/* ───────────────────────────── قطعه‌های مشترک ───────────────────────────── */
const loader = () => `
<div class="loader" aria-hidden="true">
  <div class="loader-in">
    <span class="loader-mark">${MARK}</span>
    <span class="loader-name"><b lang="fa">${BRAND.fa}</b><b lang="en">${BRAND.en}</b><i>${BRAND.en}</i></span>
    <span class="loader-bar"><i></i></span>
  </div>
</div>`;

const topbar = (root, crumbs) => `
<header class="topbar">
  <a class="brand" href="${root}index.html">
    <span class="brand-mark" aria-hidden="true">${MARK}</span>
    <span class="brand-txt"><b lang="fa">${BRAND.fa}</b><b lang="en">${BRAND.en}</b><i lang="fa">${TAGLINE.fa}</i><i lang="en">${TAGLINE.en}</i></span>
  </a>
${crumbs}
  <div class="bar-tools">
    <button class="ibtn js-search" type="button" aria-label="جستجو">${ICO.search}<span lang="fa">جستجو</span><span lang="en">Search</span></button>
    <a class="ibtn js-bm-open" href="${root}bookmarks.html" aria-label="علاقه‌مندی‌ها">${ICO.star}<span class="bm-count" hidden>۰</span></a>
    <button class="ibtn js-share" type="button" aria-label="اشتراک‌گذاری">${ICO.share}</button>
    <a class="ibtn" href="${root}contributing.html" aria-label="مشارکت در پروژه" title="مشارکت در پروژه">${ICO.code}</a>
    <div class="lang-sw" role="group" aria-label="زبان">
      <button type="button" data-l="fa" aria-pressed="true">FA</button>
      <button type="button" data-l="en" aria-pressed="false">EN</button>
    </div>
    <button class="ibtn js-theme" type="button" aria-label="تغییر تم">${ICO.moon}${ICO.sun}</button>
    <button class="ibtn js-about" type="button" aria-label="دربارهٔ پروژه و توسعه‌دهنده">${ICO.dots}</button>
  </div>

  <!-- روی موبایل به‌جای هفت دکمه، یک دکمه؛ کشوی زیر باز می‌شود -->
  <button class="ibtn js-menu bar-menu" type="button" aria-label="منو" aria-expanded="false">${ICO.bars}</button>
</header>

<div class="mdim js-menu-dim" role="dialog" aria-modal="true" aria-label="منو">
  <div class="sheet">
    <header class="sheet-h">
      <span lang="fa">منو</span><span lang="en">Menu</span>
      <button class="ibtn js-menu-close" type="button" aria-label="بستن">${ICO.close}</button>
    </header>
    <nav class="sheet-b">
      <button class="sheet-i js-search" type="button">${ICO.search}
        <span lang="fa">جستجو</span><span lang="en">Search</span></button>
      <a class="sheet-i" href="${root}bookmarks.html">${ICO.star}
        <span lang="fa">علاقه‌مندی‌ها</span><span lang="en">Bookmarks</span>
        <span class="bm-count" hidden>۰</span></a>
      <button class="sheet-i js-share" type="button">${ICO.share}
        <span lang="fa">اشتراک‌گذاری</span><span lang="en">Share</span></button>
      <a class="sheet-i" href="${root}contributing.html">${ICO.code}
        <span lang="fa">مشارکت در پروژه</span><span lang="en">Contribute</span></a>
      <button class="sheet-i js-about" type="button">${ICO.heart}
        <span lang="fa">دربارهٔ پروژه و حمایت</span><span lang="en">About &amp; support</span></button>
      <div class="sheet-row">
        <span lang="fa">زبان</span><span lang="en">Language</span>
        <div class="lang-sw" role="group" aria-label="زبان">
          <button type="button" data-l="fa" aria-pressed="true">FA</button>
          <button type="button" data-l="en" aria-pressed="false">EN</button>
        </div>
      </div>
      <div class="sheet-row">
        <span lang="fa">تم</span><span lang="en">Theme</span>
        <button class="ibtn js-theme" type="button" aria-label="تغییر تم">${ICO.moon}${ICO.sun}</button>
      </div>
    </nav>
  </div>
</div>`;

const crumb = items => `  <nav class="crumbs" aria-label="مسیر">
${items.map((it, i) => (i ? '    <span class="sep">/</span>\n' : "") +
    (it.href ? `    <a href="${it.href}">${it.label}</a>` : `    <span class="cur">${it.label}</span>`)).join("\n")}
  </nav>`;

/* ─────────────────────── مودال «دربارهٔ پروژه» ───────────────────────
   سه زبانه‌ی کوچک: توسعه‌دهنده · همکاری · حمایت مالی. */
const DEV = {
  name: { fa: "سیدعباس موسوی اصل", en: "Seyed Abbas Mousavi Asl" },
  role: { fa: "توسعه‌دهنده و نویسندهٔ کدنامه", en: "Developer and author of Codenameh" },
  github: "seyedAb2",
  githubUrl: "https://github.com/SeyedAb2",
  repoUrl: "https://github.com/SeyedAb2/code-name",
  email: "abbas.mossavi1378@gmail.com",
  phone: "09302010811",
  phoneIntl: "+989302010811",
  linkedin: "https://www.linkedin.com/in/abbas-mossavi-520b09213",
  card: "6219 8618 4472 9987",
  bank: { fa: "بلوبانک — بانک سامان", en: "Blu Bank — Saman Bank" }
};

const aboutModal = (root = "") => `
<div class="mdim js-about-dim" role="dialog" aria-modal="true" aria-labelledby="about-t">
  <div class="modal">
    <header class="modal-h">
      <h2 id="about-t"><span lang="fa">دربارهٔ کدنامه</span><span lang="en">About Codenameh</span></h2>
      <button class="modal-x js-modal-close" type="button" aria-label="بستن">&times;</button>
    </header>

    <nav class="modal-tabs" role="tablist">
      <button class="on" data-tab="dev" role="tab" type="button"><span lang="fa">توسعه‌دهنده</span><span lang="en">Developer</span></button>
      <button data-tab="join" role="tab" type="button"><span lang="fa">همکاری</span><span lang="en">Contribute</span></button>
      <button data-tab="donate" role="tab" type="button"><span lang="fa">حمایت</span><span lang="en">Support</span></button>
    </nav>

    <div class="modal-b">
      <!-- توسعه‌دهنده -->
      <section data-pane="dev" class="on">
        <div class="dev-card">
          <span class="dev-av" aria-hidden="true">${MARK}</span>
          <div>
            <b lang="fa">${DEV.name.fa}</b><b lang="en">${DEV.name.en}</b>
            <span lang="fa">${DEV.role.fa}</span><span lang="en">${DEV.role.en}</span>
          </div>
        </div>
        <ul class="link-list">
          <li><a href="${DEV.githubUrl}" target="_blank" rel="noopener noreferrer">
            <span class="li">${ICO.github}</span>
            <span class="lt">GitHub<i dir="ltr">@${DEV.github}</i></span></a></li>
          <li><a href="${DEV.linkedin}" target="_blank" rel="noopener noreferrer">
            <span class="li">${ICO.linkedin}</span>
            <span class="lt"><span lang="fa">لینکدین</span><span lang="en">LinkedIn</span><i dir="ltr">abbas-mossavi</i></span></a></li>
          <li><a href="tel:${DEV.phoneIntl}">
            <span class="li">${ICO.phone}</span>
            <span class="lt"><span lang="fa">تلفن</span><span lang="en">Phone</span><i dir="ltr">${DEV.phone}</i></span></a></li>
          <li><a href="mailto:${DEV.email}">
            <span class="li">${ICO.mail}</span>
            <span class="lt"><span lang="fa">ایمیل</span><span lang="en">Email</span><i dir="ltr">${DEV.email}</i></span></a></li>
        </ul>
      </section>

      <!-- همکاری -->
      <section data-pane="join">
        <p lang="fa">کدنامه متن‌باز است و هر فصلی که بنویسی به نام خودت ثبت می‌شود. لازم نیست همه‌چیز بلد باشی — یک فصل، یک تمرین، یا حتی اصلاح یک غلط املایی هم کمک است.</p>
        <p lang="en">Codenameh is open source and every chapter you write carries your name. You do not need to know everything — one chapter, one exercise, even a typo fix helps.</p>
        <ul class="link-list">
          <li><a href="${DEV.repoUrl}" target="_blank" rel="noopener noreferrer">
            <span class="li">${ICO.github}</span>
            <span class="lt"><span lang="fa">مخزن پروژه</span><span lang="en">The repository</span><i dir="ltr">github.com/SeyedAb2/code-name</i></span></a></li>
          <li><a class="js-contrib-link" href="${root}contributing.html">
            <span class="li">${ICO.code}</span>
            <span class="lt"><span lang="fa">راهنمای مشارکت</span><span lang="en">Contributing guide</span>
            <i lang="fa">قدم‌به‌قدم، از صفر</i><i lang="en">Step by step, from zero</i></span></a></li>
          <li><a href="mailto:${DEV.email}?subject=Codenameh">
            <span class="li">${ICO.mail}</span>
            <span class="lt"><span lang="fa">پیشنهاد یا سؤال</span><span lang="en">Ideas or questions</span><i dir="ltr">${DEV.email}</i></span></a></li>
        </ul>
      </section>

      <!-- حمایت -->
      <section data-pane="donate">
        <p lang="fa">کدنامه رایگان است و رایگان می‌ماند. اگر به کارت آمد و خواستی حمایت کنی، سپاسگزارم — اما هیچ فصلی پشت پرداخت قفل نمی‌شود.</p>
        <p lang="en">Codenameh is free and stays free. If it helped you and you would like to support it, thank you — but no chapter will ever be locked behind a payment.</p>

        <div class="bank-card">
          <div class="bank-top">
            <span class="bank-name"><span lang="fa">${DEV.bank.fa}</span><span lang="en">${DEV.bank.en}</span></span>
            <span class="bank-chip" aria-hidden="true"></span>
          </div>
          <div class="bank-num" dir="ltr">${DEV.card}</div>
          <div class="bank-bot">
            <span lang="fa">${DEV.name.fa}</span><span lang="en">${DEV.name.en}</span>
            <button class="bank-copy js-copy-card" type="button" data-card="${DEV.card.replace(/\s/g, "")}">
              ${ICO.copy}<span lang="fa">کپی</span><span lang="en">Copy</span>
            </button>
          </div>
        </div>
        <p class="hint" lang="en">The card number is a placeholder; replace it in <code>tools/build-pages.js</code> before publishing.</p>
      </section>
    </div>
  </div>
</div>`;

const searchBox = () => `
<div class="sdim" role="dialog" aria-modal="true" aria-label="جستجو">
  <div class="sbox">
    <input type="search" placeholder="جستجو در همهٔ دوره‌ها…" autocomplete="off" spellcheck="false">
    <div class="sres"></div>
    <div class="sfoot">
      <span><kbd>↑</kbd> <kbd>↓</kbd> <span lang="fa">حرکت</span><span lang="en">navigate</span></span>
      <span><kbd>Enter</kbd> <span lang="fa">باز کردن</span><span lang="en">open</span></span>
      <span><kbd>Esc</kbd> <span lang="fa">بستن</span><span lang="en">close</span></span>
    </div>
  </div>
</div>`;

const footer = root => `
<footer class="foot">
  <div class="foot-in">
    <span><a href="${root}index.html"><span lang="fa">${BRAND.fa}</span><span lang="en">${BRAND.en}</span></a>
      · <a href="${root}contributing.html"><span lang="fa">راهنمای مشارکت</span><span lang="en">Contributing</span></a></span>
    <span><span lang="fa">ساختهٔ سیدعباس موسوی اصل</span><span lang="en">Built by Seyed Abbas Mousavi Asl</span> · <kbd>Ctrl</kbd>+<kbd>K</kbd></span>
  </div>
</footer>`;

/* ‏tracks.js سبک است و همه‌جا می‌آید؛ فهرست کامل فصل‌های یک مسیر فقط در
   صفحه‌های همان مسیر. defer ترتیب اجرا را حفظ می‌کند، پس CHAPTERS همیشه
   قبل از app.js تعریف شده است. */
const scripts = (root, courseId) => `
<script src="${root}assets/tracks.js" defer></script>${courseId ? `
<script src="${root}assets/ch/${courseId}.js" defer></script>` : ""}
<script src="${root}assets/app.js" defer></script>`;

/* آدرس پایه برای canonical و ‎og:url‎. اگر جای دیگری میزبانی می‌کنی، فقط همین را عوض کن. */
const SITE = process.env.CODENAMEH_SITE || "https://codenameh.ir";
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/* seo: {path, type, jsonld} — path نسبت به ریشهٔ سایت، بدون اسلش ابتدایی */
const head = (title, desc, favicon, root, seo = {}) => {
  const url = SITE + "/" + (seo.path || "");
  return `<!doctype html>
<html lang="fa" dir="rtl" data-lang="fa">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="color-scheme" content="light dark">
<link rel="canonical" href="${esc(url)}">

<meta property="og:type" content="${seo.type || "website"}">
<meta property="og:site_name" content="${esc(BRAND.fa)}">
<meta property="og:locale" content="fa_IR">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(SITE)}/assets/og/${seo.og || "home"}.svg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(SITE)}/assets/og/${seo.og || "home"}.svg">
${seo.jsonld ? `<script type="application/ld+json">${JSON.stringify(seo.jsonld)}</script>` : ""}
<link rel="preload" href="${root}assets/fonts/Vazirmatn-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${root}assets/theme.css">
<link rel="icon" href="${favicon}">
</head>`;
};

/* ───────────────────────────── خانهٔ هر مسیر ───────────────────────────── */
function coursePage(c) {
  const idx = COURSES.indexOf(c) + 1;
  const status = c.readyCount
    ? `<div class="note safe"><div class="note-t"><span lang="fa">در حال نوشته‌شدن</span><span lang="en">Being written</span></div>
    <p lang="fa">${fa(c.readyCount)} فصل از ${fa(c.chapters.length)} فصل این مسیر آماده است. بقیه در راه‌اند.</p>
    <p lang="en">${c.readyCount} of ${c.chapters.length} chapters are ready. The rest are on the way.</p></div>`
    : `<div class="note warn"><div class="note-t">${ICO.clock}<span lang="fa">هنوز فصلی نوشته نشده</span><span lang="en">No chapter written yet</span></div>
    <p lang="fa">نقشهٔ راه پایین کامل است، اما نوشتن این مسیر هنوز شروع نشده. اگر دوست داری کمک کنی،
      <a href="../contributing.html">راهنمای مشارکت</a> را ببین — این پروژه متن‌باز است.</p>
    <p lang="en">The roadmap below is complete, but writing has not started. If you would like to help, see the
      <a href="../contributing.html">contributing guide</a> — this project is open source.</p></div>`;

  return `${head(
    `${c.fa.name} — ${BRAND.fa}`,
    c.fa.desc.replace(/"/g, "'"),
    FAVICON(c.accent, c.ico),
    "../",
    {
      path: c.dir + "/",
      type: "article",
      og: c.id,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Course",
        name: c.fa.name,
        description: c.fa.desc,
        inLanguage: "fa",
        url: SITE + "/" + c.dir + "/",
        provider: { "@type": "Organization", name: BRAND.fa, url: SITE },
        isAccessibleForFree: true,
        teaches: c.chapters.slice(0, 12).map(ch => ch.fa.t),
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT" + c.hours + "H"
        }
      }
    }
  )}
<body data-page="course" data-course="${c.id}">
${loader()}
<div class="readbar" aria-hidden="true"></div>
${topbar("../", crumb([
    { label: `<span lang="fa">خانه</span><span lang="en">Home</span>`, href: "../index.html" },
    { label: `<span lang="fa">${c.fa.name}</span><span lang="en">${c.en.name}</span>` }
  ]))}

<div class="shell">
<main class="content">

  <div class="masthead has-mark">
    <div class="mast-head">
      <span class="mast-mark" style="${accVars(c)}" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">${c.ico}</svg>
      </span>
      <div class="mast-t">
        <h1 lang="fa" data-chead="name">${c.fa.name}</h1>
        <h1 lang="en" data-chead="name">${c.en.name}</h1>
        <span class="mast-cat" lang="fa">${(CATS.find(x => x.id === c.cat) || {}).fa || ""}</span>
        <span class="mast-cat" lang="en">${(CATS.find(x => x.id === c.cat) || {}).en || ""}</span>
      </div>
      <span class="eyebrow mast-badge"><span class="dot"></span>
        <span lang="fa">مسیر ${fa(String(idx).padStart(2, "0"))}</span><span lang="en">Track ${String(idx).padStart(2, "0")}</span>
      </span>
    </div>
    <p class="sub" lang="fa" data-chead="intro">${c.fa.intro}</p>
    <p class="sub" lang="en" data-chead="intro">${c.en.intro}</p>
    <div class="facts">
      ${factCell(ICO.book,  `<b data-cstat="${c.id}:chapters">${fa(c.chapters.length)}</b>`, "فصل", "chapters")}
      ${factCell(ICO.check, `<b data-cstat="${c.id}:ex">${fa(c.exTotal)}</b>`, "تمرین با پاسخ", "solved exercises")}
      ${factCell(ICO.clock, `<b><span data-cstat="${c.id}:hours">${fa(c.hours)}</span><span class="u" lang="fa">ساعت</span><span class="u" lang="en">h</span></b>`, "زمان تخمینی", "estimated time")}
      ${factCell(ICO.flag,  `<b>${fa(c.capCount)}</b>`, "پروژهٔ نهایی", "final projects")}
    </div>
    <div style="margin-top:20px" data-resume="${c.id}"></div>
  </div>

${prereqSection(c)}
  <section id="status">
    <h2><span lang="fa">وضعیت این مسیر</span><span lang="en">Status</span></h2>
    ${status}
  </section>

  <section id="chapters">
    <h2><span lang="fa">فصل‌ها</span><span lang="en">Chapters</span></h2>
    <p class="lede" lang="fa">فصل‌ها به هم وابسته‌اند و ترتیبشان معنا دارد. هر مسیر با سه پروژهٔ نهایی تمام می‌شود: ساده، متوسط، پیچیده.</p>
    <p class="lede" lang="en">Chapters build on each other; the order is deliberate. Every track ends with three final projects: easy, medium and hard.</p>
    <div class="ch-grid" data-chgrid></div>
    <noscript><div class="note warn"><p lang="fa">جاوااسکریپت خاموش است، پس فهرست فصل‌ها ساخته نشد.</p><p lang="en">JavaScript is off, so the chapter list was not built.</p></div></noscript>
  </section>

  <section id="progress">
    <h2><span lang="fa">پیشرفت تو</span><span lang="en">Your progress</span></h2>
    <div class="ex-stat" data-prog-overall="${c.id}">
      <span class="js-pct" style="font-family:var(--num);font-weight:700;font-size:1.1rem">۰٪</span>
      <div class="pbar"><i></i></div>
      <button class="ibtn js-reset" data-scope="${c.id}" type="button"><span lang="fa">صفر کن</span><span lang="en">Reset</span></button>
    </div>
    <p style="font-size:.88rem;color:var(--ink-soft)" lang="fa">درصد هر فصل از دو چیز می‌آید: چقدر خوانده‌ای (۵۵٪) و چند تمرین تیک زده‌ای (۴۵٪). همه‌چیز داخل مرورگر خودت می‌ماند.</p>
    <p style="font-size:.88rem;color:var(--ink-soft)" lang="en">A chapter's percentage comes from how much you have read (55%) and how many exercises you ticked (45%). It all stays in your own browser.</p>
  </section>

</main>
</div>
${searchBox()}
${aboutModal("../")}
${footer("../")}
${scripts("../", c.id)}
</body>
</html>
`;
}

/* ───────────────────────────── صفحهٔ اصلی ───────────────────────────── */
function homePage() {
  const card = c => {
    const ready = c.readyCount > 0;
    return `      <div class="course" style="--lb:${c.accent}22">
        ${ready ? "" : `<span class="badge-soon"><span lang="fa">در نوبت نوشتن</span><span lang="en">Planned</span></span>`}
        <div class="course-top">
          <span class="logo-box" style="${accVars(c)}" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">${c.ico}</svg>
            <i class="logo-n">${fa(c.id.slice(0, 2))}</i>
          </span>
          <div class="course-name">
            <h2><a href="${c.dir}/index.html"><span lang="fa">${c.fa.name}</span><span lang="en">${c.en.name}</span></a></h2>
            <span class="en-name" lang="fa">${c.en.name}</span>
          </div>
        </div>
        <p class="desc" lang="fa">${c.fa.desc}</p>
        <p class="desc" lang="en">${c.en.desc}</p>
        <div class="course-meta">
          <span>${ICO.book}<span lang="fa"><span data-cstat="${c.id}:chapters">${fa(c.chapters.length)}</span> فصل</span><span lang="en"><span data-cstat="${c.id}:chapters">${c.chapters.length}</span> ch.</span></span>
          <span>${ICO.clock}<span lang="fa">≈ <span data-cstat="${c.id}:hours">${fa(c.hours)}</span> ساعت</span><span lang="en">≈ <span data-cstat="${c.id}:hours">${c.hours}</span> h</span></span>
          <span>${ICO.check}<span lang="fa"><span data-cstat="${c.id}:ex">${fa(c.exTotal)}</span> تمرین</span><span lang="en"><span data-cstat="${c.id}:ex">${c.exTotal}</span> ex.</span></span>
        </div>
        <div class="course-prog" data-prog-course="${c.id}"><div class="pbar"><i></i></div><b>۰٪</b></div>
        <div class="course-cta" data-resume="${c.id}"></div>
      </div>`;
  };

  const blocks = CATS.map(cat => {
    const list = COURSES.filter(c => c.cat === cat.id);
    if (!list.length) return "";
    const chs = list.reduce((s, c) => s + c.chapters.length, 0);
    return `  <section class="cat-block" id="cat-${cat.id}">
    <header class="cat">
      <div class="cat-t">
        <h2 lang="fa">${cat.fa}</h2><h2 lang="en">${cat.en}</h2>
        <p lang="fa">${cat.dfa}</p><p lang="en">${cat.den}</p>
      </div>
      <span class="cat-n">
        <b>${fa(list.length)}</b>
        <span lang="fa">مسیر</span><span lang="en">tracks</span>
        <i lang="fa">${fa(chs)} فصل</i><i lang="en">${chs} chapters</i>
      </span>
    </header>
    <div class="grid-courses">
${list.map(card).join("\n")}
    </div>
  </section>`;
  }).join("\n");

  return `${head(
    `${BRAND.fa} — ${TAGLINE.fa}`,
    "مرجع‌های آموزشی فارسی برای مهندسی نرم‌افزار: داکر، کوبرنتیز، معماری، میکروسرویس، ‎C#‎، پایتون، ری‌اکت، فلاتر و بیشتر.",
    FAVICON("#4F6BF5", `<path d="M3.6 4.8A1.8 1.8 0 0 1 5.4 3H20v18H5.4a1.8 1.8 0 0 1-1.8-1.8z"/><path d="M7.6 18.2H20"/><path d="m10.4 8.6-2.3 2.9 2.3 2.9M14.4 8.6l2.3 2.9-2.3 2.9"/>`),
    "",
    {
      path: "",
      og: "home",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: BRAND.fa,
        alternateName: BRAND.en,
        url: SITE,
        inLanguage: "fa",
        description: TAGLINE.fa
      }
    }
  )}
<body data-page="home">
${loader()}
<div class="readbar" aria-hidden="true"></div>
${topbar("", "")}

<main>
<section class="hero">
  <div class="shell">
    <span class="eyebrow"><span class="dot"></span>
      <span lang="fa">متن‌باز · بدون سرور · بدون ردیابی</span><span lang="en">Open source · no server · no tracking</span>
    </span>
    <h1 lang="fa">از <em>هیچ‌چی نمی‌دانم</em> تا سروری که<br>خودت نگهش می‌داری</h1>
    <h1 lang="en">From <em>knowing nothing</em> to running<br>the server yourself</h1>
    <p lang="fa">این‌ها دورهٔ ویدیویی نیستند. مستند مرجع‌اند — مثل صفحه‌های راهنمای رسمی، اما فارسی، با مثال خودمانی، تمرین با پاسخ کامل، و سه پروژهٔ واقعی در پایان هر مسیر.</p>
    <p lang="en">These are not video courses. They are reference documents — like official manuals, but in plain language, with worked examples, exercises that ship with full solutions, and three real projects at the end of every track.</p>
    <div class="hero-stats">
      <div><b data-stat-tracks>۰</b><span lang="fa">مسیر یادگیری</span><span lang="en">tracks</span></div>
      <div><b data-stat-chapters>۰</b><span lang="fa">فصل در نقشهٔ راه</span><span lang="en">chapters mapped</span></div>
      <div><b data-stat-ready>۰</b><span lang="fa">فصل آمادهٔ مطالعه</span><span lang="en">ready to read</span></div>
      <div><b data-stat-ex>۰</b><span lang="fa">تمرین با پاسخ</span><span lang="en">solved exercises</span></div>
    </div>
  </div>
</section>

<div class="shell">
${blocks}

</main>
${searchBox()}
${aboutModal()}
${footer("")}
${scripts("")}
</body>
</html>
`;
}

/* ───────────────────────────── راهنمای مشارکت ───────────────────────────── */
function contributingPage() {
  const S = (id, faT, enT, body) => `
  <section id="${id}">
    <h2><span lang="fa">${faT}</span><span lang="en">${enT}</span></h2>
${body}
  </section>`;

  return `${head(
    `راهنمای مشارکت — ${BRAND.fa}`,
    "چطور در کدنامه یک فصل یا یک دورهٔ کامل اضافه کنیم.",
    FAVICON("#15A34A", `<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>`),
    "",
    { path: "contributing.html", og: "home" }
  )}
<body data-page="doc">
${loader()}
<div class="readbar" aria-hidden="true"></div>
${topbar("", crumb([
    { label: `<span lang="fa">خانه</span><span lang="en">Home</span>`, href: "index.html" },
    { label: `<span lang="fa">راهنمای مشارکت</span><span lang="en">Contributing</span>` }
  ]))}

<div class="shell shell-grid">
<aside class="rail">
  <button class="rail-toggle" type="button" aria-expanded="false">
    <span class="rail-ico" aria-hidden="true">${ICO.list}</span>
    <span class="js-t" data-t="menu">فهرست مطالب</span>
  </button>
  <div class="rail-body"></div>
</aside>

<main class="content">
  <div class="masthead">
    <span class="eyebrow"><span class="dot"></span><span lang="fa">متن‌باز</span><span lang="en">Open source</span></span>
    <h1 lang="fa">راهنمای مشارکت</h1>
    <h1 lang="en">Contributing guide</h1>
    <p class="sub" lang="fa">این سند دقیقاً می‌گوید چطور یک فصل یا یک دورهٔ کامل به کدنامه اضافه کنی. هیچ دانش قبلی از این پروژه لازم نیست؛ فقط HTML مقدماتی.</p>
    <p class="sub" lang="en">This page tells you exactly how to add a chapter or a whole track to Codenameh. No prior knowledge of the project is needed — just basic HTML.</p>
    <div class="facts">
      ${factCell(ICO.book,  `<b data-stat-chapters>۰</b>`, "فصل در نقشهٔ راه", "chapters mapped")}
      ${factCell(ICO.check, `<b data-stat-ready>۰</b>`, "نوشته‌شده", "written")}
      ${factCell(ICO.flag,  `<b data-stat-tracks>۰</b>`, "مسیر", "tracks")}
      ${factCell(ICO.clock, `<b>MIT<span class="u">+ CC</span></b>`, "پروانه", "licence")}
    </div>
  </div>

${S("rules", "قانون‌های غیرقابل مذاکره", "The non-negotiable rules", `
    <div class="note danger">
      <div class="note-t"><span lang="fa">۱ — بدون ترجمه</span><span lang="en">1 — No translation</span></div>
      <p lang="fa">حق نداری متن هیچ کتاب یا مستند تجاری را ترجمه یا بازتولید کنی. همه‌چیز باید با ادبیات، ساختار و مثال‌های خودت نوشته شود. سرفصل‌ها راهنمای پوشش موضوعی‌اند، نه دستور ترجمه.</p>
      <p lang="en">You may not translate or reproduce text from any book or commercial documentation. Everything must be written in your own words, structure and examples. An outline is a guide to coverage, not an instruction to translate.</p>
    </div>
    <div class="note warn">
      <div class="note-t"><span lang="fa">۲ — دستورها را واقعاً اجرا کن</span><span lang="en">2 — Actually run the commands</span></div>
      <p lang="fa">هر دستوری که می‌نویسی را باید خودت اجرا کرده باشی و خروجی‌ای که نشان می‌دهی باید واقعی باشد، نه حدس.</p>
      <p lang="en">Every command you publish must be one you have run, and every output you show must be real, not guessed.</p>
    </div>
    <div class="note">
      <div class="note-t"><span lang="fa">۳ — هیچ تمرینی بدون پاسخ</span><span lang="en">3 — No exercise without a solution</span></div>
      <p lang="fa">«این را خودتان امتحان کنید» ممنوع است. پاسخ باید بگوید <em>چرا</em>، نه فقط <em>چه</em>.</p>
      <p lang="en">“Try it yourself” is banned. A solution must explain <em>why</em>, not only <em>what</em>.</p>
    </div>`)}

${S("architecture", "معماری در سه دقیقه", "The architecture in three minutes", `
    <p class="lede" lang="fa">سه چیز را بفهمی، همه‌چیز را فهمیده‌ای.</p>
    <p class="lede" lang="en">Understand three things and you understand all of it.</p>
    <div class="cards">
      <div class="card">
        <h3><code>assets/courses.js</code></h3>
        <p lang="fa">تنها منبع حقیقت. فهرست همهٔ دوره‌ها و فصل‌ها اینجاست. صفحهٔ اصلی، خانهٔ مسیرها، ستون کناری، جستجو و پیشرفت — همه از همین می‌خوانند.</p>
        <p lang="en">The single source of truth. Every track and chapter lives here. The home page, track pages, sidebar, search and progress all read from it.</p>
      </div>
      <div class="card v">
        <h3><code>assets/theme.css</code></h3>
        <p lang="fa">کل سیستم طراحی. رنگ‌ها از توکن‌های <code>:root</code> می‌آیند و در دارک‌مود خودکار عوض می‌شوند. هیچ رنگی را مستقیم ننویس.</p>
        <p lang="en">The whole design system. Colours come from <code>:root</code> tokens and swap automatically in dark mode. Never hard-code a colour.</p>
      </div>
      <div class="card g">
        <h3><code>assets/app.js</code></h3>
        <p lang="fa">رفتار مشترک: تم، زبان، کپی، فهرست خودکار، پیشرفت، جستجو، کشوی موبایل. معمولاً دست‌نخورده می‌ماند.</p>
        <p lang="en">Shared behaviour: theme, language, copy, auto TOC, progress, search, mobile drawer. You usually leave it alone.</p>
      </div>
    </div>
    <div class="note safe">
      <p lang="fa">نتیجه: برای اضافه کردن یک <strong>دوره</strong>، هیچ HTMLای دست‌نویس نمی‌کنی. فقط مانیفست را ویرایش می‌کنی و سازنده را اجرا می‌کنی.</p>
      <p lang="en">The upshot: adding a <strong>track</strong> requires writing no HTML at all. You edit the manifest and run the generator.</p>
    </div>`)}

${S("manifest", "قالب مانیفست", "The manifest format", `
    <p lang="fa">هر فصل یک آرایهٔ فشرده است. ترتیب مقادیر ثابت است:</p>
    <p lang="en">Each chapter is a compact array. The order of values is fixed:</p>
    <div class="code"><div class="code-bar"><span class="code-path">docs-fa/assets/courses.js</span><button class="copy">کپی</button></div>
<pre dir="ltr"><span class="p">[</span><span class="s">"04"</span>, <span class="s">"04-dockerfile.html"</span>, <span class="k">0</span>, <span class="k">12</span>, <span class="k">60</span>,
 <span class="s">"نوشتن Dockerfile؛ لایه‌ها و کش"</span>,
 <span class="s">"هر دستور یک لایه است. ترتیب دستورها یعنی تفاوت بیلد ۲ ثانیه‌ای و ۲ دقیقه‌ای."</span>,
 <span class="s">"Writing a Dockerfile; layers and cache"</span>,
 <span class="s">"Every instruction is a layer. Order is the difference between a 2-second and a 2-minute build."</span>,
 <span class="s">"dockerfile layer cache کش لایه"</span><span class="p">]</span></pre></div>
    <div class="table-wrap"><table>
      <thead><tr><th><span lang="fa">موقعیت</span><span lang="en">Index</span></th><th><span lang="fa">معنی</span><span lang="en">Meaning</span></th></tr></thead>
      <tbody>
        <tr><td><code>[0]</code></td><td><span lang="fa">شمارهٔ فصل، دو رقمی، رشته‌ای — <code>"04"</code></span><span lang="en">Chapter number, two digits, as a string — <code>"04"</code></span></td></tr>
        <tr><td><code>[1]</code></td><td><span lang="fa">نام فایل HTML</span><span lang="en">The HTML file name</span></td></tr>
        <tr><td><code>[2]</code></td><td><span lang="fa">آماده است؟ <code>0</code> = نه، <code>1</code> = نوشته شده</span><span lang="en">Ready? <code>0</code> = no, <code>1</code> = written</span></td></tr>
        <tr><td><code>[3]</code></td><td><span lang="fa">تعداد تمرین</span><span lang="en">Number of exercises</span></td></tr>
        <tr><td><code>[4]</code></td><td><span lang="fa">زمان مطالعه به دقیقه</span><span lang="en">Reading time in minutes</span></td></tr>
        <tr><td><code>[5]</code> <code>[6]</code></td><td><span lang="fa">عنوان و توضیح فارسی</span><span lang="en">Persian title and description</span></td></tr>
        <tr><td><code>[7]</code> <code>[8]</code></td><td><span lang="fa">عنوان و توضیح انگلیسی</span><span lang="en">English title and description</span></td></tr>
        <tr><td><code>[9]</code></td><td><span lang="fa">کلیدواژه‌های جستجو</span><span lang="en">Search keywords</span></td></tr>
        <tr><td><code>[10]</code></td><td><span lang="fa">فقط پروژهٔ نهایی: ۱ ساده، ۲ متوسط، ۳ پیچیده</span><span lang="en">Final projects only: 1 easy, 2 medium, 3 hard</span></td></tr>
      </tbody>
    </table></div>`)}

${S("add-chapter", "اضافه کردن یک فصل", "Adding a chapter", `
    <ol class="ranked">
      <li><b lang="fa">از الگو کپی بگیر</b><b lang="en">Copy the template</b>
        <p lang="fa">فصل ۱ داکر الگوی مرجع است؛ هر کامپوننتی که لازم داری آنجا نمونه دارد.</p>
        <p lang="en">Docker chapter 1 is the reference template; every component you need is demonstrated there.</p>
        <div class="term"><div class="term-bar"><span class="dots"><i></i><i></i><i></i></span><span class="term-label">bash</span><button class="copy">کپی</button></div>
<pre dir="ltr"><span class="k">cp</span> docs-fa/01-docker/ch/01-intro.html docs-fa/01-docker/ch/04-dockerfile.html</pre></div>
      </li>
      <li><b lang="fa">صفت‌های ‎&lt;body&gt;‎ را درست کن</b><b lang="en">Fix the &lt;body&gt; attributes</b>
        <p lang="fa">اگر این سه را اشتباه بزنی، ستون کناری و نوار پیشرفت کار نمی‌کنند.</p>
        <p lang="en">Get these three wrong and the sidebar and progress bar stop working.</p>
        <div class="code"><div class="code-bar"><span class="code-path">04-dockerfile.html</span><button class="copy">کپی</button></div>
<pre dir="ltr">&lt;<span class="k">body</span> <span class="f">data-page</span>=<span class="s">"chapter"</span> <span class="f">data-course</span>=<span class="s">"01-docker"</span> <span class="f">data-chapter</span>=<span class="s">"04"</span>&gt;</pre></div>
      </li>
      <li><b lang="fa">بخش‌ها را بنویس</b><b lang="en">Write the sections</b>
        <p lang="fa">هر بخش یک <code>&lt;section id&gt;</code> با یک <code>&lt;h2&gt;</code>. فهرست کناری خودکار از همین‌ها ساخته می‌شود.</p>
        <p lang="en">Each section is a <code>&lt;section id&gt;</code> with an <code>&lt;h2&gt;</code>. The sidebar list is built from these automatically.</p>
      </li>
      <li><b lang="fa">دوزبانه بنویس</b><b lang="en">Write it bilingually</b>
        <p lang="fa">هر متنی که ترجمه دارد دو بار می‌آید: یکی <code>lang="fa"</code>، یکی <code>lang="en"</code>. CSS آن‌که لازم نیست را پنهان می‌کند.</p>
        <p lang="en">Any translatable text appears twice: once with <code>lang="fa"</code>, once with <code>lang="en"</code>. CSS hides the one not in use.</p>
        <div class="note warn">
          <p lang="fa">صفت <code>lang</code> را فقط برای همین کار استفاده کن. برای یک کلمهٔ انگلیسی وسط متن فارسی از <code>&lt;code&gt;</code> استفاده کن — وگرنه در حالت فارسی ناپدید می‌شود.</p>
          <p lang="en">Use the <code>lang</code> attribute only for this. For a single English word inside Persian prose use <code>&lt;code&gt;</code> — otherwise it vanishes in Persian mode.</p>
        </div>
      </li>
      <li><b lang="fa">فصل را آماده اعلام کن و بساز</b><b lang="en">Mark it ready and build</b>
        <div class="term"><div class="term-bar"><span class="dots"><i></i><i></i><i></i></span><span class="term-label">bash</span><button class="copy">کپی</button></div>
<pre dir="ltr"><span class="c"># در courses.js مقدار [2] را از 0 به 1 تغییر بده، بعد:</span>
<span class="k">node</span> tools/build-pages.js</pre></div>
      </li>
    </ol>`)}

${S("quota", "سهمیهٔ محتوای هر فصل", "Content quota per chapter", `
    <p class="lede" lang="fa">این‌ها حداقل‌اند، نه هدف. فصلی که کمتر از این داشته باشد پذیرفته نمی‌شود.</p>
    <p class="lede" lang="en">These are minimums, not targets. A chapter below them is not accepted.</p>
    <div class="table-wrap"><table>
      <thead><tr><th><span lang="fa">مورد</span><span lang="en">Item</span></th><th><span lang="fa">حداقل</span><span lang="en">Minimum</span></th></tr></thead>
      <tbody>
        <tr><td><span lang="fa">بخش (<code>section id</code>)</span><span lang="en">Sections</span></td><td>۵ / 5</td></tr>
        <tr><td><span lang="fa">کلمهٔ توضیح فارسی</span><span lang="en">Persian words</span></td><td>۲۵۰۰ / 2500</td></tr>
        <tr><td><span lang="fa">بلوک ترمینال یا کد</span><span lang="en">Terminal or code blocks</span></td><td>۱۲ / 12</td></tr>
        <tr><td><span lang="fa">نمودار SVG</span><span lang="en">SVG diagrams</span></td><td>۱ / 1</td></tr>
        <tr><td><span lang="fa">جدول</span><span lang="en">Tables</span></td><td>۱ / 1</td></tr>
        <tr><td><span lang="fa">تمرین (۴ مبتدی، ۵ متوسط، ۳ پیشرفته)</span><span lang="en">Exercises (4 easy, 5 medium, 3 hard)</span></td><td>۱۲ / 12</td></tr>
        <tr><td><span lang="fa">دام رایج</span><span lang="en">Common pitfalls</span></td><td>۴ / 4</td></tr>
        <tr><td><span lang="fa">پروژهٔ کوچک پایان فصل</span><span lang="en">End-of-chapter project</span></td><td>۱ / 1</td></tr>
      </tbody>
    </table></div>`)}

${S("checklist", "چک‌لیست قبل از ارسال", "Checklist before you submit", `
    <div class="note safe">
      <ul>
        <li lang="fa">فایل با دابل‌کلیک و بدون اینترنت درست باز می‌شود</li>
        <li lang="en">The file opens correctly by double-click, with no internet</li>
        <li lang="fa">در دارک‌مود و لایت‌مود هر دو خوانا است</li>
        <li lang="en">Readable in both dark and light mode</li>
        <li lang="fa">در عرض ۳۷۵px به‌هم نمی‌ریزد و کشوی فهرست باز و بسته می‌شود</li>
        <li lang="en">Holds together at 375px and the contents drawer opens and closes</li>
        <li lang="fa">سوییچ FA/EN همهٔ متن‌ها را عوض می‌کند و چیزی جا نمی‌ماند</li>
        <li lang="en">The FA/EN switch swaps every string, with nothing left behind</li>
        <li lang="fa">هیچ بلوک کدی بدون <code>dir="ltr"</code> نمانده</li>
        <li lang="en">No code block is missing <code>dir="ltr"</code></li>
        <li lang="fa">همهٔ دستورها را واقعاً اجرا کرده‌ای</li>
        <li lang="en">You have actually run every command</li>
        <li lang="fa">هر <code>section</code> و هر <code>.ex</code> یک <code>id</code> یکتا دارد</li>
        <li lang="en">Every <code>section</code> and every <code>.ex</code> has a unique <code>id</code></li>
        <li lang="fa">هر تمرین پاسخ کامل دارد و هیچ <code>TODO</code> نمانده</li>
        <li lang="en">Every exercise has a full solution and no <code>TODO</code> remains</li>
        <li lang="fa">در کنسول مرورگر خطایی نیست</li>
        <li lang="en">No errors in the browser console</li>
      </ul>
    </div>`)}

${S("pr", "ارسال Pull Request", "Sending a pull request", `
    <div class="term"><div class="term-bar"><span class="dots"><i></i><i></i><i></i></span><span class="term-label">bash</span><button class="copy">کپی</button></div>
<pre dir="ltr"><span class="k">git</span> checkout <span class="f">-b</span> chapter/docker-04-dockerfile
<span class="k">git</span> add .
<span class="k">git</span> commit <span class="f">-m</span> <span class="s">"افزودن فصل ۴ داکر: نوشتن Dockerfile"</span>
<span class="k">git</span> push origin chapter/docker-04-dockerfile</pre></div>
    <div class="table-wrap"><table>
      <thead><tr><th><span lang="fa">کار</span><span lang="en">Work</span></th><th><span lang="fa">نام شاخه</span><span lang="en">Branch name</span></th></tr></thead>
      <tbody>
        <tr><td><span lang="fa">فصل تازه</span><span lang="en">New chapter</span></td><td><code>chapter/&lt;track&gt;-&lt;nn&gt;-&lt;topic&gt;</code></td></tr>
        <tr><td><span lang="fa">دورهٔ تازه</span><span lang="en">New track</span></td><td><code>track/&lt;name&gt;</code></td></tr>
        <tr><td><span lang="fa">تصحیح</span><span lang="en">Fix</span></td><td><code>fix/&lt;short-description&gt;</code></td></tr>
        <tr><td><span lang="fa">طراحی و رابط</span><span lang="en">Design / UI</span></td><td><code>ui/&lt;short-description&gt;</code></td></tr>
      </tbody>
    </table></div>
    <div class="capsule">
      <h3 lang="fa">سؤال داری؟</h3><h3 lang="en">Questions?</h3>
      <p lang="fa">اگر مطمئن نیستی فصلی که در نظر داری با روح این مجموعه جور است یا نه، قبل از نوشتن یک issue باز کن و بپرس. بهتر از این است که ده ساعت بنویسی و بعد معلوم شود جایش اینجا نبود.</p>
      <p lang="en">If you are unsure whether the chapter you have in mind fits, open an issue and ask before you write it. Better than spending ten hours and finding out it did not belong.</p>
      <p><a class="btn btn-ghost" href="mailto:abbas.mossavi1378@gmail.com">${ICO.mail}<span>abbas.mossavi1378@gmail.com</span></a></p>
    </div>`)}

</main>
</div>
${searchBox()}
${aboutModal()}
${footer("")}
${scripts("")}
</body>
</html>
`;
}

/* ───────────────────────────── نوشتن ───────────────────────────── */
let n = 0;
function write(rel, html) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html, "utf8");
  n++;
  console.log("  ✓ " + rel);
}

/* ─────────────────── دارایی‌های تولیدی: tracks / ch / search ───────────────────
   ‏courses.js منبع نوشتن است و هرگز به مرورگر فرستاده نمی‌شود. از رویش سه چیز
   ساخته می‌شود تا هر صفحه فقط چیزی را بگیرد که لازم دارد. */
const J = v => JSON.stringify(v);

function writeAssets() {
  /* ۱) tracks.js — متادیتای مسیرها + فقط فصل‌های آماده (برای نوار پیشرفت) */
  const tracks = COURSES.map(c => {
    const o = {
      id: c.id, dir: c.dir, accent: c.accent, cat: c.cat, ico: c.ico,
      /* intro فقط در سربرگ خودِ آن مسیر لازم است و همان‌جا در HTML نوشته شده،
         پس به همهٔ صفحه‌ها فرستاده نمی‌شود. */
      fa: { name: c.fa.name, desc: c.fa.desc },
      en: { name: c.en.name, desc: c.en.desc },
      nCh: c.chapters.length,
      nEx: c.chapters.reduce((s, x) => s + (x.ex || 0), 0),
      nCap: c.chapters.filter(x => x.cap).length,
      hours: c.hours,
      ch: c.ch.filter(a => a[2])            // فقط ردیف‌های آماده
    };
    if (c.pre)  o.pre  = c.pre;
    if (c.soft) o.soft = c.soft;
    if (c.locked) o.locked = true;
    return o;
  });
  const tracksJs =
`/* ساختهٔ tools/build-pages.js — دست نزن. منبع: assets/courses.js */
window.COURSES=${J(tracks)};
`;
  writeAsset("assets/tracks.js", tracksJs);

  /* ۲) assets/ch/<id>.js — فهرست کامل فصل‌های یک مسیر */
  COURSES.forEach(c => {
    writeAsset(`assets/ch/${c.id}.js`,
`/* ساختهٔ tools/build-pages.js — دست نزن. */
window.CHAPTERS={id:${J(c.id)},ch:${J(c.ch)}};
`);
  });

  /* ۳) search.js — نمایهٔ جستجو، تنبل بارگذاری می‌شود */
  const rows = [];
  COURSES.forEach(c => {
    if (c.locked) return;
    c.ch.forEach(a => rows.push([c.id, a[0], a[1], a[2] ? 1 : 0, a[5], a[6], a[7], a[8], a[9] || ""]));
  });
  writeAsset("assets/search.js",
`/* ساختهٔ tools/build-pages.js — دست نزن. */
window.SEARCH_ROWS=${J(rows)};
`);
}

/* ─────────────────── تصویر اشتراک‌گذاری، sitemap و robots ───────────────────
   تصویر ‎OG‎ به‌صورت ‎SVG‎ ساخته می‌شود: بدون ابزار بیرونی، بدون فونت رستر شده.
   نکته: تلگرام و واتساپ ‎SVG‎ را در پیش‌نمایش نشان نمی‌دهند؛ برای پوشش کامل باید
   همین‌ها را یک‌بار به ‎PNG‎ تبدیل کنی (مثلاً با resvg یا مرورگر). ساختار آماده است. */
function ogImage(title, sub, accent, accentDark) {
  const c = accentDark || accent;
  const t = String(title).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const s = String(sub).replace(/&/g, "&amp;").replace(/</g, "&lt;").slice(0, 90);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#4F6BF5"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs>
<rect width="1200" height="630" fill="#0B1220"/>
<rect x="0" y="0" width="1200" height="7" fill="url(#g)"/>
<circle cx="1050" cy="120" r="190" fill="${c}" opacity=".14"/>
<text x="1130" y="120" text-anchor="end" font-family="Vazirmatn,Tahoma,sans-serif"
 font-size="30" fill="#8FA0BF" direction="rtl">${esc(BRAND.fa)}</text>
<text x="1130" y="330" text-anchor="end" font-family="Vazirmatn,Tahoma,sans-serif"
 font-size="72" font-weight="700" fill="#E9EEF9" direction="rtl">${t}</text>
<text x="1130" y="400" text-anchor="end" font-family="Vazirmatn,Tahoma,sans-serif"
 font-size="30" fill="#9CA9C6" direction="rtl">${s}</text>
<rect x="1010" y="520" width="120" height="6" rx="3" fill="${c}"/>
</svg>`;
}

function writeSeoAssets() {
  writeAsset("assets/og/home.svg", ogImage(BRAND.fa, TAGLINE.fa, "#4F6BF5"));
  COURSES.forEach(c =>
    writeAsset(`assets/og/${c.id}.svg`, ogImage(c.fa.name, c.fa.desc, c.accent, c.accentDark)));

  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: SITE + "/", pri: "1.0" },
    { loc: SITE + "/contributing.html", pri: "0.4" },
    ...COURSES.map(c => ({ loc: `${SITE}/${c.dir}/`, pri: c.readyCount ? "0.9" : "0.6" })),
    ...COURSES.flatMap(c => c.chapters.filter(ch => ch.ready)
      .map(ch => ({ loc: `${SITE}/${c.dir}/ch/${ch.file}`, pri: "0.8" })))
  ];
  writeAsset("sitemap.xml",
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.pri}</priority></url>`).join("\n")}
</urlset>
`);

  writeAsset("robots.txt",
`User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
}

let assetN = 0, assetBytes = 0;
function writeAsset(rel, body) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
  assetN++;
  assetBytes += Buffer.byteLength(body);
}

/* ═══════════════════════════ صفحهٔ فصل ═══════════════════════════
   محتوای هر فصل در docs-fa/<dir>/ch/_src/<file> نگه داشته می‌شود و فقط شامل
   چیزی است که داخل <main class="content"> می‌آید — بدون نوار بالا، بدون فوتر.
   این‌جا دورش پیچیده می‌شود.

   چرا: چهارچوب صفحه (نوار بالا، مودال، اسکریپت‌ها) مدام عوض می‌شود. اگر داخل
   هر فصل دست‌نویس تکرار شده باشد، با اولین تغییر، فصل‌ها عقب می‌مانند — همان
   اتفاقی که برای فصل ۱ داکر افتاد. حالا یک جا تعریف می‌شود.

   سرِ فایل _src می‌تواند یک بلوک متادیتا داشته باشد:
     <!--meta
     title: عنوان فصل
     desc:  توضیح برای موتور جستجو
     -->                                                                     */
function chapterMeta(srcText) {
  const m = /^<!--meta([\s\S]*?)-->/.exec(srcText.trim());
  if (!m) return { meta: {}, body: srcText };
  const meta = {};
  m[1].split("\n").forEach(line => {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { meta, body: srcText.trim().slice(m[0].length) };
}

function chapterPage(c, ch, inner, meta) {
  const nFa = fa(String(parseInt(ch.n, 10)));
  const title = meta.title || ch.fa.t;
  const desc = (meta.desc || ch.fa.d).replace(/"/g, "'");
  return `${head(
    `فصل ${nFa} — ${title} | ${c.fa.name} | ${BRAND.fa}`,
    desc,
    FAVICON(c.accent, c.ico),
    "../../",
    {
      path: `${c.dir}/ch/${ch.file}`,
      type: "article",
      og: c.id,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: title,
        description: desc,
        inLanguage: "fa",
        url: `${SITE}/${c.dir}/ch/${ch.file}`,
        isPartOf: { "@type": "Course", name: c.fa.name, url: `${SITE}/${c.dir}/` },
        timeRequired: "PT" + (ch.mins || 45) + "M",
        isAccessibleForFree: true
      }
    }
  )}
<body data-page="chapter" data-course="${c.id}" data-chapter="${ch.n}">
${loader()}
<div class="readbar" aria-hidden="true"></div>
${topbar("../../", crumb([
    { label: `<span lang="fa">خانه</span><span lang="en">Home</span>`, href: "../../index.html" },
    { label: `<span lang="fa">${c.fa.name}</span><span lang="en">${c.en.name}</span>`, href: "../index.html" },
    { label: `<span lang="fa">فصل ${nFa}</span><span lang="en">Chapter ${parseInt(ch.n, 10)}</span>` }
  ]))}

<div class="shell shell-grid">
<aside class="rail">
  <button class="rail-toggle" type="button" aria-expanded="false">
    <span class="rail-ico" aria-hidden="true">${ICO.list}</span>
    <span class="js-t" data-t="menu">فهرست مطالب</span>
  </button>
  <div class="rail-body"><!-- app.js پرش می‌کند --></div>
</aside>

<main class="content">
${inner}
<div class="pager"><!-- app.js پرش می‌کند --></div>
</main>
</div>
${searchBox()}
${aboutModal("../../")}
${footer("../../")}
${scripts("../../", c.id)}
</body>
</html>
`;
}

function buildChapters() {
  let n = 0;
  COURSES.forEach(c => {
    const dir = path.join(ROOT, c.dir, "ch", "_src");
    if (!fs.existsSync(dir)) return;
    c.chapters.forEach(ch => {
      const p = path.join(dir, ch.file);
      if (!fs.existsSync(p)) return;
      const { meta, body } = chapterMeta(fs.readFileSync(p, "utf8"));
      write(path.join(c.dir, "ch", ch.file), chapterPage(c, ch, body, meta));
      n++;
    });
  });
  return n;
}

/* ─────────────────────────── پیش‌نیازهای یک مسیر ───────────────────────────
   ‏pre  = بدون این، فصل‌ها معنا نمی‌دهند.
   ‏soft = کمک می‌کند ولی می‌شود بدونش هم شروع کرد.
   هر پیش‌نیازی که خودش مسیری در کدنامه است، لینک می‌شود. */
function prereqSection(c) {
  const byId = id => COURSES.find(x => x.id === id);
  const pre = (c.pre || []).map(byId).filter(Boolean);
  const soft = (c.soft || []).map(byId).filter(Boolean);

  if (!pre.length && !soft.length) {
    return `
  <section id="prereq">
    <h2><span lang="fa">پیش‌نیاز</span><span lang="en">Prerequisites</span></h2>
    <div class="note safe"><div class="note-t">${ICO.check}<span lang="fa">پیش‌نیازی ندارد</span><span lang="en">No prerequisites</span></div>
    <p lang="fa">این مسیر از صفر شروع می‌کند. اگر با ترمینال و ویرایشگر کد راحت باشی، کافی است.</p>
    <p lang="en">This track starts from zero. Being comfortable with a terminal and an editor is enough.</p></div>
  </section>`;
  }

  const card = (x, need) => `      <a class="pre-card${need ? "" : " soft"}" href="../${x.dir}/index.html">
        <span class="logo-box" style="${accVars(x)}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">${x.ico}</svg>
        </span>
        <span class="pre-t">
          <b lang="fa">${x.fa.name}</b><b lang="en">${x.en.name}</b>
          <i lang="fa">${x.fa.desc.slice(0, 74)}…</i><i lang="en">${x.en.desc.slice(0, 74)}…</i>
        </span>
        <span class="pre-tag">${need
          ? `<span lang="fa">لازم</span><span lang="en">Required</span>`
          : `<span lang="fa">مفید</span><span lang="en">Helpful</span>`}</span>
      </a>`;

  return `
  <section id="prereq">
    <h2><span lang="fa">پیش‌نیاز</span><span lang="en">Prerequisites</span></h2>
    <p class="lede" lang="fa">${pre.length
      ? "بدون این مسیرها، بخشی از فصل‌های اینجا معنا نمی‌دهد."
      : "این مسیر پیش‌نیاز اجباری ندارد، اما این‌ها کارت را خیلی راحت‌تر می‌کنند."}</p>
    <p class="lede" lang="en">${pre.length
      ? "Without these, parts of this track will not make sense."
      : "This track has no hard prerequisites, but these make it much easier."}</p>
    <div class="pre-grid">
${pre.map(x => card(x, true)).concat(soft.map(x => card(x, false))).join("\n")}
    </div>
  </section>`;
}

/* ─────────────────────────── صفحهٔ علاقه‌مندی‌ها ─────────────────────────── */
function bookmarksPage() {
  return `${head(
    `علاقه‌مندی‌ها — ${BRAND.fa}`,
    "مسیرهایی که ذخیره کرده‌ای، با درصد پیشرفت هرکدام.",
    FAVICON("#B45309", `<path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85z"/>`),
    "",
    { path: "bookmarks.html", og: "home" }
  )}
<body data-page="doc">
${loader()}
<div class="readbar" aria-hidden="true"></div>
${topbar("", crumb([
    { label: `<span lang="fa">خانه</span><span lang="en">Home</span>`, href: "index.html" },
    { label: `<span lang="fa">علاقه‌مندی‌ها</span><span lang="en">Bookmarks</span>` }
  ]))}

<div class="shell">
<main class="content">
  <div class="masthead">
    <span class="eyebrow"><span class="dot"></span>
      <span lang="fa">ذخیره‌شده‌های تو</span><span lang="en">Your saved tracks</span>
    </span>
    <h1 lang="fa">علاقه‌مندی‌ها</h1>
    <h1 lang="en">Bookmarks</h1>
    <p class="sub" lang="fa">هر مسیری که ستاره بزنی اینجا می‌آید، همراه با درصد پیشرفتت. همه‌چیز داخل مرورگر خودت می‌ماند و به هیچ سروری نمی‌رود.</p>
    <p class="sub" lang="en">Every track you star appears here with your progress. It all stays in your own browser and reaches no server.</p>
  </div>

  <section id="saved">
    <h2><span lang="fa">مسیرهای ذخیره‌شده</span><span lang="en">Saved tracks</span></h2>
    <div class="ch-grid" data-bmgrid></div>
  </section>

  <section id="backup">
    <h2><span lang="fa">پشتیبان‌گیری</span><span lang="en">Backup</span></h2>
    <div class="note">
      <div class="note-t">${ICO.shield}
        <span lang="fa">دادهٔ تو کجا می‌ماند و کِی از بین می‌رود</span>
        <span lang="en">Where your data lives, and when it disappears</span>
      </div>
      <p lang="fa">
        پیشرفت و علاقه‌مندی‌هایت در دو جای مرورگر خودت ذخیره می‌شود
        (<code>localStorage</code> و <code>IndexedDB</code>) تا اگر یکی پاک شد، از دیگری برگردد.
      </p>
      <p lang="en">
        Your progress and bookmarks are stored in two places inside your own browser
        (<code>localStorage</code> and <code>IndexedDB</code>) so that if one is cleared, it comes back from the other.
      </p>
      <div class="table-wrap" style="margin:14px 0">
        <table>
          <thead><tr>
            <th><span lang="fa">این اتفاق</span><span lang="en">If this happens</span></th>
            <th><span lang="fa">دادهٔ تو</span><span lang="en">Your data</span></th>
          </tr></thead>
          <tbody>
            <tr><td><span lang="fa">‏IP یا شبکه‌ات عوض شود</span><span lang="en">Your IP or network changes</span></td>
                <td class="yes"><span lang="fa">سالم می‌ماند</span><span lang="en">Survives</span></td></tr>
            <tr><td><span lang="fa">مرورگر یا سیستم را ری‌استارت کنی</span><span lang="en">You restart the browser or machine</span></td>
                <td class="yes"><span lang="fa">سالم می‌ماند</span><span lang="en">Survives</span></td></tr>
            <tr><td><span lang="fa">مرورگر به‌روزرسانی شود</span><span lang="en">The browser updates</span></td>
                <td class="yes"><span lang="fa">سالم می‌ماند</span><span lang="en">Survives</span></td></tr>
            <tr><td><span lang="fa">کش را پاک کنی (بدون «دادهٔ سایت»)</span><span lang="en">You clear the cache (not “site data”)</span></td>
                <td class="yes"><span lang="fa">سالم می‌ماند</span><span lang="en">Survives</span></td></tr>
            <tr><td><span lang="fa">«دادهٔ سایت» را پاک کنی</span><span lang="en">You clear “site data”</span></td>
                <td class="no"><span lang="fa">از بین می‌رود</span><span lang="en">Lost</span></td></tr>
            <tr><td><span lang="fa">مرورگر یا دستگاه دیگری باز کنی</span><span lang="en">You open another browser or device</span></td>
                <td class="no"><span lang="fa">آنجا نیست</span><span lang="en">Not there</span></td></tr>
            <tr><td><span lang="fa">حالت ناشناس</span><span lang="en">Private/incognito mode</span></td>
                <td class="no"><span lang="fa">با بستن پنجره می‌رود</span><span lang="en">Gone when you close it</span></td></tr>
          </tbody>
        </table>
      </div>
      <p lang="fa">
        برای آن سه ردیف قرمز، تنها راه واقعی پشتیبان‌گیری است. یک فایل کوچک
        <code>JSON</code> می‌گیری و هر وقت خواستی — روی همین دستگاه یا هر دستگاه دیگری — برش می‌گردانی.
        کدنامه سرور ندارد، پس همگام‌سازی خودکار بین دستگاه‌ها ممکن نیست؛ این جایگزین صادقانه‌اش است.
      </p>
      <p lang="en">
        For those three red rows the only real answer is a backup. You get a small
        <code>JSON</code> file and can restore it whenever you like — on this device or any other.
        Codenameh has no server, so automatic cross-device sync is not possible; this is the honest substitute.
      </p>
      <div class="dev-links" style="margin-top:14px">
        <button class="btn btn-primary js-export" type="button">${ICO.down}
          <span lang="fa">گرفتن فایل پشتیبان</span><span lang="en">Download a backup</span></button>
        <button class="btn btn-ghost js-import" type="button">${ICO.up}
          <span lang="fa">بازیابی از فایل</span><span lang="en">Restore from a file</span></button>
      </div>
    </div>
  </section>
</main>
</div>
${searchBox()}
${aboutModal()}
${footer("")}
${scripts("")}
</body>
</html>
`;
}

/* دارایی‌های یتیم را پاک می‌کند.
   وقتی مسیری حذف یا تغییر نام داده می‌شود، فایل‌های ساخته‌شده‌اش می‌مانند و
   بی‌صدا در sitemap و پوشه‌ها باقی می‌مانند. این تابع فقط چیزهایی را حذف
   می‌کند که خودِ همین ابزار ساخته و دیگر در مانیفست نیستند. */
function prune() {
  const live = new Set(COURSES.map(c => c.id));
  let gone = 0;

  [["assets/ch", ".js"], ["assets/og", ".svg"]].forEach(([dir, ext]) => {
    const p = path.join(ROOT, dir);
    if (!fs.existsSync(p)) return;
    fs.readdirSync(p).forEach(f => {
      if (!f.endsWith(ext)) return;
      const id = f.slice(0, -ext.length);
      if (id === "home" || live.has(id)) return;
      fs.unlinkSync(path.join(p, f));
      console.log("  ✂ " + dir + "/" + f);
      gone++;
    });
  });

  /* پوشهٔ مسیرهایی که دیگر وجود ندارند — فقط اگر خالی یا فقط index.html باشند،
     تا اگر کسی فصل دست‌نویس گذاشته، تصادفی پاک نشود. */
  fs.readdirSync(ROOT, { withFileTypes: true }).forEach(d => {
    if (!d.isDirectory() || !/^\d{2}-/.test(d.name) || live.has(d.name)) return;
    const p = path.join(ROOT, d.name);
    const rest = fs.readdirSync(p);
    if (rest.length && !(rest.length === 1 && rest[0] === "index.html")) {
      console.log("  ! " + d.name + " در مانیفست نیست ولی فایل دارد — دستی بررسی کن");
      return;
    }
    fs.rmSync(p, { recursive: true, force: true });
    console.log("  ✂ " + d.name + "/");
    gone++;
  });

  if (gone) console.log(`  ${gone} دارایی یتیم پاک شد.\n`);
}

console.log("کدنامه — ساخت صفحه‌ها\n");
prune();
writeAssets();
writeSeoAssets();
console.log(`  ✓ ${assetN} دارایی جاوااسکریپت (${(assetBytes / 1024).toFixed(0)} KB مجموع)\n`);
write("index.html", homePage());
write("contributing.html", contributingPage());
write("bookmarks.html", bookmarksPage());
COURSES.forEach(c => {
  /* ۰۱ داکر خانهٔ دست‌نویس و مفصل‌تری دارد؛ بازنویسی‌اش نکن */
  if (c.id === "01-docker") { console.log("  – " + c.dir + "/index.html (دست‌نویس، رد شد)"); return; }
  write(path.join(c.dir, "index.html"), coursePage(c));
});
const chN = buildChapters();
console.log(`\n${n} فایل ساخته شد.`);
console.log(`${COURSES.length} مسیر · ${COURSES.reduce((s, c) => s + c.chapters.length, 0)} فصل · ` +
            `${COURSES.reduce((s, c) => s + c.readyCount, 0)} فصل آماده`);
