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
  c.hours = Math.round(c.chapters.reduce((s, x) => s + (x.mins || 0), 0) / 60);
});

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const fa = n => String(n).replace(/\d/g, d => FA_DIGITS[+d]);

const CATS = [
  { id: "infra",    fa: "زیرساخت و عملیات",   en: "Infrastructure & operations" },
  { id: "arch",     fa: "معماری و مهندسی",     en: "Architecture & engineering" },
  { id: "backend",  fa: "بک‌اند",              en: "Backend" },
  { id: "frontend", fa: "فرانت‌اند و موبایل",  en: "Frontend & mobile" },
  { id: "data",     fa: "داده و بی‌درنگ",      en: "Data & real-time" },
  { id: "career",   fa: "مهارت و مسیر شغلی",   en: "Skills & career" }
];

/* ───────────────────────────── نشان و آیکون‌ها ───────────────────────────── */
/* نشان کدنامه: یک کتاب باز با نشانهٔ کد داخلش */
const MARK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
<path d="M3.6 4.8A1.8 1.8 0 0 1 5.4 3H20v18H5.4a1.8 1.8 0 0 1-1.8-1.8z"/>
<path d="M7.6 18.2H20"/><path d="m10.4 8.6-2.3 2.9 2.3 2.9M14.4 8.6l2.3 2.9-2.3 2.9"/></svg>`;

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
  mail:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="m3 7 9 6 9-6"/></svg>`,
  code:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 8-4 4 4 4M15 8l4 4-4 4"/></svg>`,
  heart:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.3 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 1 1 19.4 13z"/></svg>`
};

/* ───────────────────────────── قطعه‌های مشترک ───────────────────────────── */
const loader = () => `
<div class="loader" aria-hidden="true">
  <div class="loader-in">
    <span class="loader-mark">${MARK}</span>
    <span class="loader-name">${BRAND.fa}<i>${BRAND.en}</i></span>
    <span class="loader-bar"><i></i></span>
  </div>
</div>`;

const topbar = (root, crumbs) => `
<header class="topbar">
  <a class="brand" href="${root}index.html">
    <span class="brand-mark" aria-hidden="true">${MARK}</span>
    <span class="brand-txt">${BRAND.fa}<i lang="fa">${TAGLINE.fa}</i><i lang="en">${TAGLINE.en}</i></span>
  </a>
${crumbs}
  <div class="bar-tools">
    <button class="ibtn js-search" type="button" aria-label="جستجو">${ICO.search}<span lang="fa">جستجو</span><span lang="en">Search</span></button>
    <div class="lang-sw" role="group" aria-label="زبان">
      <button type="button" data-l="fa" aria-pressed="true">FA</button>
      <button type="button" data-l="en" aria-pressed="false">EN</button>
    </div>
    <button class="ibtn js-theme" type="button" aria-label="تغییر تم">${ICO.moon}${ICO.sun}</button>
  </div>
</header>`;

const crumb = items => `  <nav class="crumbs" aria-label="مسیر">
${items.map((it, i) => (i ? '    <span class="sep">/</span>\n' : "") +
    (it.href ? `    <a href="${it.href}">${it.label}</a>` : `    <span class="cur">${it.label}</span>`)).join("\n")}
  </nav>`;

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

const scripts = root => `
<script src="${root}assets/courses.js"></script>
<script src="${root}assets/app.js"></script>`;

const head = (title, desc, favicon, root) => `<!doctype html>
<html lang="fa" dir="rtl" data-lang="fa">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="color-scheme" content="light dark">
<link rel="stylesheet" href="${root}assets/theme.css">
<link rel="icon" href="${favicon}">
</head>`;

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
    "../"
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

  <div class="masthead">
    <span class="eyebrow"><span class="dot"></span>
      <span lang="fa">مسیر ${fa(String(idx).padStart(2, "0"))}</span><span lang="en">Track ${String(idx).padStart(2, "0")}</span>
    </span>
    <h1 lang="fa" data-chead="name">${c.fa.name}</h1>
    <h1 lang="en" data-chead="name">${c.en.name}</h1>
    <p class="sub" lang="fa" data-chead="intro">${c.fa.intro}</p>
    <p class="sub" lang="en" data-chead="intro">${c.en.intro}</p>
    <div class="facts">
      <div class="fact"><b data-cstat="${c.id}:chapters">${fa(c.chapters.length)}</b><span lang="fa">فصل</span><span lang="en">chapters</span></div>
      <div class="fact"><b data-cstat="${c.id}:ex">${fa(c.exTotal)}</b><span lang="fa">تمرین با پاسخ</span><span lang="en">solved exercises</span></div>
      <div class="fact"><b>≈ <span data-cstat="${c.id}:hours">${fa(c.hours)}</span> <span lang="fa">ساعت</span><span lang="en">h</span></b><span lang="fa">زمان تخمینی</span><span lang="en">estimated time</span></div>
      <div class="fact"><b>۳</b><span lang="fa">پروژهٔ نهایی</span><span lang="en">final projects</span></div>
    </div>
    <div style="margin-top:20px" data-resume="${c.id}"></div>
  </div>

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
${footer("../")}
${scripts("../")}
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
          <span class="logo-box" style="color:${c.accent}" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">${c.ico}</svg>
          </span>
          <div>
            <span class="course-id">${fa(String(COURSES.indexOf(c) + 1).padStart(2, "0"))}</span>
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
    return `  <div class="cat-block">
    <div class="cat">
      <h2 lang="fa">${cat.fa}</h2><h2 lang="en">${cat.en}</h2>
      <span class="n">${fa(list.length)}</span>
      <span class="line"></span>
    </div>
    <div class="grid-courses">
${list.map(card).join("\n")}
    </div>
  </div>`;
  }).join("\n");

  return `${head(
    `${BRAND.fa} — ${TAGLINE.fa}`,
    "مرجع‌های آموزشی فارسی برای مهندسی نرم‌افزار: داکر، کوبرنتیز، معماری، میکروسرویس، ‎C#‎، پایتون، ری‌اکت، فلاتر و بیشتر.",
    FAVICON("#4F6BF5", `<path d="M3.6 4.8A1.8 1.8 0 0 1 5.4 3H20v18H5.4a1.8 1.8 0 0 1-1.8-1.8z"/><path d="M7.6 18.2H20"/><path d="m10.4 8.6-2.3 2.9 2.3 2.9M14.4 8.6l2.3 2.9-2.3 2.9"/>`),
    ""
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

  <div class="dev">
    <span class="dev-av">ab2</span>
    <div class="dev-b">
      <span class="role"><span lang="fa">توسعه‌دهنده</span><span lang="en">Developer</span></span>
      <h3 lang="fa">سیدعباس موسوی اصل</h3>
      <h3 lang="en">Seyed Abbas Mousavi Asl</h3>
      <p lang="fa">این مجموعه را نوشتم چون خودم وقتی شروع کردم، چنین چیزی به فارسی نبود. متن‌باز است — اگر فصلی نوشتی یا غلطی دیدی، خوشحال می‌شوم مشارکت کنی.</p>
      <p lang="en">I wrote this because when I started, nothing like it existed in Persian. It is open source — if you write a chapter or spot a mistake, contributions are welcome.</p>
      <div class="dev-links">
        <a href="mailto:abbas.mossavi1378@gmail.com">${ICO.mail}<code>abbas.mossavi1378@gmail.com</code></a>
        <a href="contributing.html">${ICO.code}<span lang="fa">چطور مشارکت کنم</span><span lang="en">How to contribute</span></a>
      </div>
    </div>
  </div>

  <div class="donate">
    <div class="donate-h">${ICO.heart}
      <h3 lang="fa">حمایت از این پروژه</h3>
      <h3 lang="en">Supporting this project</h3>
    </div>
    <p lang="fa">
      کدنامه رایگان است و رایگان می‌ماند — نه تبلیغ دارد، نه اشتراک، نه ردیاب.
      اگر به کارت آمد و خواستی حمایت کنی، فعلاً فقط کارت‌به‌کارت ممکن است؛
      هنوز درگاه پرداخت ندارم. هیچ اجباری نیست و هیچ بخشی از محتوا پشت پرداخت نمی‌رود.
    </p>
    <p lang="en">
      Codenameh is free and will stay free — no ads, no subscription, no tracking.
      If it helped and you would like to support it, a direct card transfer is the only
      option for now; there is no payment gateway yet. Nothing is required, and no content
      is ever put behind a paywall.
    </p>
    <div class="card-row">
      <span class="card-num">
        <b>6219 8618 4472 9987</b>
        <span class="card-bank">
          <span lang="fa">بانک سامان</span><span lang="en">Saman Bank</span>
          <span lang="fa">سیدعباس موسوی اصل</span><span lang="en">Seyed Abbas Mousavi Asl</span>
        </span>
      </span>
      <button class="btn-copy-card" type="button" data-copy="6219861844729987">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="8.5" y="8.5" width="12" height="12" rx="2.4"/><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/></svg>
        <span class="cp-lbl"><span lang="fa">کپی شمارهٔ کارت</span><span lang="en">Copy card number</span></span>
      </button>
    </div>
  </div>
</div>
</main>
${searchBox()}
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
    ""
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
    <span class="js-t" data-t="menu">فهرست مطالب</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
      <div class="fact"><b data-stat-chapters>۰</b><span lang="fa">فصل در نقشهٔ راه</span><span lang="en">chapters mapped</span></div>
      <div class="fact"><b data-stat-ready>۰</b><span lang="fa">نوشته‌شده</span><span lang="en">written</span></div>
      <div class="fact"><b data-stat-tracks>۰</b><span lang="fa">مسیر</span><span lang="en">tracks</span></div>
      <div class="fact"><b>MIT<span style="font-size:.6em"> + </span>CC</b><span lang="fa">پروانه</span><span lang="en">licence</span></div>
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

console.log("کدنامه — ساخت صفحه‌ها\n");
write("index.html", homePage());
write("contributing.html", contributingPage());
COURSES.forEach(c => {
  /* ۰۱ داکر خانهٔ دست‌نویس و مفصل‌تری دارد؛ بازنویسی‌اش نکن */
  if (c.id === "01-docker") { console.log("  – " + c.dir + "/index.html (دست‌نویس، رد شد)"); return; }
  write(path.join(c.dir, "index.html"), coursePage(c));
});
console.log(`\n${n} فایل ساخته شد.`);
console.log(`${COURSES.length} مسیر · ${COURSES.reduce((s, c) => s + c.chapters.length, 0)} فصل · ` +
            `${COURSES.reduce((s, c) => s + c.readyCount, 0)} فصل آماده`);
