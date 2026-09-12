/* ============================================================================
   خواندن متن فصل‌ها — فقط سمت سرور

   متن هر فصل یک تکه HTML در content/<track>/<slug>.html است، با یک سربرگ
   اختیاری:
       <!--meta
       title: عنوان فصل
       desc:  توضیح برای موتور جستجو
       -->

   فهرست مطالب همین‌جا، در زمان بیلد، از روی بخش‌ها ساخته می‌شود — نه در
   مرورگر. این‌طور در HTML ایستا هست، موتور جستجو می‌بیندش، و ستون کناری
   بعد از بارگذاری جابه‌جا نمی‌شود.
   ========================================================================== */
import fs from "node:fs";
import path from "node:path";
import type { TocItem } from "./chapter.types";

/* ‏content/ کنار ریشهٔ پروژهٔ Next می‌نشیند، پس با جابه‌جا شدن ریشه هم
   مسیرش درست می‌ماند. */
const CONTENT = path.join(process.cwd(), "content");

export interface ChapterDoc {
  html: string;
  title?: string;
  desc?: string;
  toc: TocItem[];
  /** تعداد تمرین‌ها — برای محاسبهٔ درصد پیشرفت */
  exercises: number;
}

const fileOf = (trackId: string, slug: string) =>
  path.join(CONTENT, trackId, `${slug}.html`);

export function hasChapter(trackId: string, slug: string): boolean {
  return fs.existsSync(fileOf(trackId, slug));
}

/** متن خالص، بدون تگ و فاصلهٔ اضافه */
const plain = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

export function readChapter(trackId: string, slug: string): ChapterDoc | null {
  const p = fileOf(trackId, slug);
  if (!fs.existsSync(p)) return null;

  let html = fs.readFileSync(p, "utf8");

  /* سربرگ متادیتا */
  const meta: Record<string, string> = {};
  const m = /^\s*<!--meta([\s\S]*?)-->/.exec(html);
  if (m) {
    for (const line of m[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    html = html.slice(m.index + m[0].length);
  }

  /* فهرست مطالب: هر <section id> که مستقیم با <h2> شروع می‌شود */
  const toc: TocItem[] = [];
  const re = /<section\s+id="([^"]+)"[^>]*>\s*<h2[^>]*>([\s\S]*?)<\/h2>/g;
  for (const s of html.matchAll(re)) {
    const inner = s[2];
    const fa = /<span lang="fa">([\s\S]*?)<\/span>/.exec(inner)?.[1] ?? inner;
    const en = /<span lang="en">([\s\S]*?)<\/span>/.exec(inner)?.[1] ?? fa;
    toc.push({ id: s[1], fa: plain(fa), en: plain(en) });
  }

  const exercises = (html.match(/<div class="ex" id=/g) ?? []).length;

  return { html: html.trim(), title: meta.title, desc: meta.desc, toc, exercises };
}

/** بخش‌های اضافهٔ خانهٔ یک مسیر، اگر نوشته شده باشد (مثل «قبل از شروع» داکر) */
export function readTrackExtra(trackId: string): string | null {
  const p = path.join(CONTENT, trackId, "_track-extra.html");
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf8").replace(/^\s*<!--[\s\S]*?-->/, "").trim();
}
