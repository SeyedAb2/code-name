"use client";

import { usePrefs } from "@/context/PrefsContext";
import { SITE } from "@/lib/site";
import AppShell from "@/components/layout/AppShell";
import { BookIcon, CheckBoxIcon, CodeIcon, HeartIcon } from "@/components/ui/Icons";
import s from "./ContributingView.module.scss";

/** یک قدم شماره‌دار با عنوان و توضیح */
function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <li className={s.step}>
      <span className={s.stepN}>{n}</span>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </li>
  );
}

export default function ContributingView() {
  const { lang } = usePrefs();
  const fa = lang === "fa";

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: "راهنمای مشارکت", en: "Contributing" } },
    ]}>
      <header className={s.head}>
        <h1>{fa ? "راهنمای مشارکت" : "Contributing"}</h1>
        <p className={s.lede}>
          {fa
            ? "کدنامه یک پروژهٔ باز است. هر فصلی که اینجا می‌بینی را یک نفر نوشته، هر دستوری را قبل از انتشار اجرا کرده و خروجی‌اش را کنار جواب گذاشته است. اگر می‌خواهی کمک کنی، سه راه هست — و هیچ‌کدام نیاز به اجازه گرفتن ندارد."
            : "Codenameh is an open project. Every chapter here was written by someone who ran each command before publishing and put the real output next to the answer. If you want to help, there are three ways in — and none of them needs permission."}
        </p>
        <div className={s.ways}>
          <div className={s.way}>
            <span className={s.wayIcon}><BookIcon size={16} /></span>
            <h2>{fa ? "نوشتن فصل" : "Write a chapter"}</h2>
            <p>{fa
              ? "سنگین‌ترین و ارزشمندترین کار. یک فصل از یک مسیر را بردار و کامل بنویس."
              : "The heaviest and most valuable work. Take one chapter of a track and write it fully."}</p>
          </div>
          <div className={s.way}>
            <span className={s.wayIcon}><CheckBoxIcon size={16} /></span>
            <h2>{fa ? "اصلاح خطا" : "Fix an error"}</h2>
            <p>{fa
              ? "دستوری که کار نمی‌کند، خروجی‌ای که عوض شده، جمله‌ای که مبهم است. کوچک‌ترین اصلاح هم مهم است."
              : "A command that no longer works, output that changed, a sentence that is unclear. The smallest fix counts."}</p>
          </div>
          <div className={s.way}>
            <span className={s.wayIcon}><CodeIcon size={16} /></span>
            <h2>{fa ? "بهبود سایت" : "Improve the site"}</h2>
            <p>{fa
              ? "دسترس‌پذیری، سرعت، ترجمهٔ انگلیسی، طراحی. کد سایت Next.js و TypeScript است."
              : "Accessibility, speed, the English translation, design. The site is Next.js and TypeScript."}</p>
          </div>
        </div>
      </header>

      <section className={s.section}>
        <h2>{fa ? "یک فصل چه شکلی است" : "What a chapter looks like"}</h2>
        <p>
          {fa
            ? "هر فصل یک فایل HTML در پوشهٔ content است: content/<نام مسیر>/<نام فصل>.html. بالای فایل یک سربرگ کوتاه می‌آید و بعد از آن، بخش‌ها. هر بخش یک section با id است که خودش در فهرست مطالب و در محاسبهٔ پیشرفت می‌نشیند."
            : "Each chapter is one HTML file under content: content/<track>/<chapter>.html. A short header sits at the top, then the sections. Every section is a <section> with an id; it lands in the table of contents and in the progress calculation by itself."}
        </p>

        <pre className={s.code} dir="ltr">{`<!--meta
title: عنوان فصل
desc:  یک جملهٔ کوتاه برای موتور جستجو
-->

<section id="why">
  <h2><span lang="fa">چرا این کار</span><span lang="en">Why this</span></h2>
  <p lang="fa">متن فارسی…</p>
  <p lang="en">English text…</p>
</section>`}</pre>

        <p>
          {fa
            ? "متن فارسی و انگلیسی کنار هم می‌آیند و سوییچ زبان یکی را پنهان می‌کند؛ پس هر جمله باید هر دو نسخه را داشته باشد. کلاس‌های آماده‌ای هم هست که در همهٔ فصل‌ها یکسان‌اند:"
            : "Persian and English sit side by side and the language switch hides one; so every sentence needs both versions. A set of ready-made classes is shared by all chapters:"}
        </p>

        <div className={s.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>{fa ? "کلاس" : "Class"}</th>
                <th>{fa ? "برای چه" : "What it is for"}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>.term</code> / <code>.code</code></td><td>{fa ? "جعبهٔ ترمینال و فایل کد، با دکمهٔ کپی" : "Terminal and code-file boxes, with a copy button"}</td></tr>
              <tr><td><code>.note</code></td><td>{fa ? "یادداشت؛ با safe، warn یا danger" : "A note; with safe, warn or danger"}</td></tr>
              <tr><td><code>.cards</code> / <code>.card</code></td><td>{fa ? "چند مفهوم کنار هم" : "Several concepts side by side"}</td></tr>
              <tr><td><code>.diagram</code></td><td>{fa ? "نمودار SVG با رنگ‌های سازگار با تم" : "An SVG diagram with theme-aware colours"}</td></tr>
              <tr><td><code>.ex</code></td><td>{fa ? "تمرین، با راهنمایی و پاسخ کامل" : "An exercise, with a hint and a full solution"}</td></tr>
              <tr><td><code>.pitfalls</code> / <code>.pit</code></td><td>{fa ? "دام‌ها، با پیام خطای دقیق" : "Pitfalls, with the exact error message"}</td></tr>
              <tr><td><code>.cheat</code></td><td>{fa ? "مرجع سریع پایان فصل" : "The end-of-chapter quick reference"}</td></tr>
              <tr><td><code>.capsule</code></td><td>{fa ? "پروژهٔ پایان فصل" : "The end-of-chapter project"}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={s.section}>
        <h2>{fa ? "معیار کیفیت" : "The quality bar"}</h2>
        <p>
          {fa
            ? "یک فصل وقتی آماده است که همهٔ این‌ها را داشته باشد. این فهرست سخت‌گیرانه است، چون هدف پروژه مرجع بودن است نه معرفی."
            : "A chapter is ready when it has all of these. The list is strict on purpose: the project aims to be a reference, not an introduction."}
        </p>
        <ul className={s.checks}>
          {(fa
            ? [
              "دست‌کم ۴۵۰۰ کلمهٔ فارسی، با نسخهٔ انگلیسی کنارش",
              "دست‌کم ۱۸ تمرین، از ساده به سخت، هر کدام با راهنمایی، پاسخ کامل و خروجی مورد انتظار",
              "دست‌کم ۳۰ بلوک کد یا ترمینال با خروجی واقعی",
              "دست‌کم دو نمودار و یک جدول مقایسه",
              "دست‌کم چهار دام، هر کدام با پیام خطای دقیق و راه‌حل",
              "یک مرجع سریع و یک پروژهٔ پایان فصل",
              "هر دستور قبل از انتشار اجرا شده باشد — خروجی حدسی ممنوع",
            ]
            : [
              "At least 4,500 Persian words, with the English version beside it",
              "At least 18 exercises, easy to hard, each with a hint, a full solution and the expected output",
              "At least 30 code or terminal blocks with real output",
              "At least two diagrams and one comparison table",
              "At least four pitfalls, each with the exact error message and the fix",
              "A quick reference and an end-of-chapter project",
              "Every command run before publishing — no guessed output",
            ]).map((x) => <li key={x}>{x}</li>)}
        </ul>
      </section>

      <section className={s.section}>
        <h2>{fa ? "اجرای پروژه روی سیستم خودت" : "Running the project locally"}</h2>
        <ol className={s.steps}>
          <Step n="۱" title={fa ? "کلون کن" : "Clone it"}>
            <pre className={s.code} dir="ltr">{`git clone ${SITE.repo}.git
cd code-name
npm install`}</pre>
          </Step>
          <Step n="۲" title={fa ? "اجرا کن" : "Run it"}>
            <pre className={s.code} dir="ltr">{`npm run dev   # http://localhost:3000
npm run build # ساخت نسخهٔ نهایی`}</pre>
          </Step>
          <Step n="۳" title={fa ? "بنویس" : "Write"}>
            <p>
              {fa
                ? "فایل فصل را در content/ بساز و در فهرست مسیرها ready را برایش روشن کن. صفحهٔ فصل خودش ساخته می‌شود."
                : "Create the chapter file under content/ and switch its ready flag on in the track manifest. The chapter page builds itself."}
            </p>
          </Step>
          <Step n="۴" title={fa ? "Pull Request بفرست" : "Send a pull request"}>
            <p>
              {fa
                ? "هر PR یک موضوع. پیام کامیت انگلیسی و کوتاه. اگر فصل نوشته‌ای، در توضیح PR بگو کدام دستورها را روی چه سیستمی اجرا کرده‌ای."
                : "One topic per pull request. Commit messages in short English. If you wrote a chapter, say in the description which commands you ran and on what system."}
            </p>
          </Step>
        </ol>
      </section>

      <section className={s.contact}>
        <h2>{fa ? "تماس" : "Get in touch"}</h2>
        <p>
          {fa
            ? "اگر سؤالی داری یا می‌خواهی پیش از شروع هماهنگ کنی، هر کدام از این راه‌ها باز است."
            : "If you have a question or want to coordinate before starting, any of these is open."}
        </p>
        <div className={s.links}>
          <a href={SITE.repo} target="_blank" rel="noreferrer">GitHub · {SITE.author.githubHandle}</a>
          <a href={`mailto:${SITE.author.email}`}>{SITE.author.email}</a>
          <a href={SITE.author.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className={s.thanks}>
          <HeartIcon size={15} />
          {fa
            ? "و اگر فقط می‌خوانی و استفاده می‌کنی — همین هم برای این پروژه کافی است."
            : "And if you only read and use it — that is enough for this project."}
        </p>
      </section>
    </AppShell>
  );
}
