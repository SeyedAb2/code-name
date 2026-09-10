#!/usr/bin/env node
/* ============================================================================
   بررسی آیکون مسیرها — کدنامه

   هر آیکون در یک viewBox ‎۲۴×۲۴‎ رسم می‌شود. اگر مسیری از این کادر بیرون بزند،
   در مرورگر بریده یا کج دیده می‌شود و معمولاً هم کسی متوجه نمی‌شود تا وقتی که
   روی صفحه ببیندش.

   این ابزار مسیر را واقعاً پیمایش می‌کند (نه با regex ساده)، چون دستورهای
   نسبیِ کوچک — l، v، h، c — عدد منفی دارند و منفی بودن به‌تنهایی خطا نیست.
   آنچه اهمیت دارد نقطهٔ مطلقِ نهایی است.

   اجرا:  node tools/check-icons.js
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "docs-fa");
const w = {};
vm.runInContext(
  fs.readFileSync(path.join(ROOT, "assets", "courses.js"), "utf8"),
  vm.createContext({ window: w })
);

const PAD = 1.5;              // کمی رواداری برای ضخامت خط
const MIN = -PAD, MAX = 24 + PAD;

/* اعداد یک دستور مسیر */
const nums = s => (s.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) || []).map(Number);

/* پیمایش یک صفت d و برگرداندن همهٔ نقاط مطلق */
function pathPoints(d) {
  const pts = [];
  let x = 0, y = 0, sx = 0, sy = 0;
  const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
  let m;
  while ((m = re.exec(d))) {
    const cmd = m[1];
    const a = nums(m[2]);
    const rel = cmd === cmd.toLowerCase();
    const up = cmd.toUpperCase();

    const push = () => pts.push([x, y]);

    if (up === "Z") { x = sx; y = sy; push(); continue; }

    // اندازهٔ هر «دور» بر حسب دستور
    const step = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7 }[up];
    if (!step) continue;

    for (let i = 0; i + step <= a.length; i += step) {
      const g = a.slice(i, i + step);
      if (up === "H") { x = rel ? x + g[0] : g[0]; }
      else if (up === "V") { y = rel ? y + g[0] : g[0]; }
      else if (up === "A") {
        // فقط نقطهٔ پایانی کمان مهم است (دو عدد آخر)
        x = rel ? x + g[5] : g[5];
        y = rel ? y + g[6] : g[6];
      } else {
        // نقاط کنترل هم بررسی می‌شوند چون کادر رسم را بزرگ می‌کنند
        for (let k = 0; k + 1 < g.length - 2; k += 2) {
          pts.push([rel ? x + g[k] : g[k], rel ? y + g[k + 1] : g[k + 1]]);
        }
        const lx = g[g.length - 2], ly = g[g.length - 1];
        x = rel ? x + lx : lx;
        y = rel ? y + ly : ly;
      }
      push();
      if (up === "M" && i === 0) { sx = x; sy = y; }
    }
  }
  return pts;
}

/* نقاط شکل‌های پایه */
function shapePoints(tag, attrs) {
  const n = k => parseFloat(attrs[k]);
  if (tag === "rect") {
    const x = n("x") || 0, y = n("y") || 0, W = n("width") || 0, H = n("height") || 0;
    return [[x, y], [x + W, y + H]];
  }
  if (tag === "circle") {
    const cx = n("cx") || 0, cy = n("cy") || 0, r = n("r") || 0;
    return [[cx - r, cy - r], [cx + r, cy + r]];
  }
  if (tag === "ellipse") {
    const cx = n("cx") || 0, cy = n("cy") || 0, rx = n("rx") || 0, ry = n("ry") || 0;
    return [[cx - rx, cy - ry], [cx + rx, cy + ry]];
  }
  return [];
}

/* استخراج عناصر از رشتهٔ آیکون */
function iconPoints(ico) {
  const pts = [];
  const el = /<(path|rect|circle|ellipse)\b([^>]*)>/g;
  let m;
  while ((m = el.exec(ico))) {
    const tag = m[1], raw = m[2];
    const attrs = {};
    let a;
    const ar = /([a-zA-Z-]+)\s*=\s*"([^"]*)"/g;
    while ((a = ar.exec(raw))) attrs[a[1]] = a[2];

    let p = tag === "path" ? pathPoints(attrs.d || "") : shapePoints(tag, attrs);

    // جابه‌جایی translate(x y) اگر روی خود عنصر باشد
    const t = /translate\(\s*(-?[\d.]+)[\s,]+(-?[\d.]+)/.exec(attrs.transform || "");
    if (t) p = p.map(([px, py]) => [px + parseFloat(t[1]), py + parseFloat(t[2])]);

    pts.push(...p);
  }
  return pts;
}

let bad = 0, checked = 0;
const problems = [];

w.COURSES.forEach(t => {
  if (!t.ico) { problems.push([t.id, "آیکون ندارد"]); bad++; return; }
  checked++;
  const pts = iconPoints(t.ico);
  if (!pts.length) { problems.push([t.id, "هیچ شکلی خوانده نشد"]); bad++; return; }
  const out = pts.filter(([x, y]) => x < MIN || x > MAX || y < MIN || y > MAX);
  if (out.length) {
    const worst = out.map(p => `(${p[0].toFixed(1)},${p[1].toFixed(1)})`).slice(0, 4).join(" ");
    problems.push([t.id, `${out.length} نقطه بیرون از کادر: ${worst}`]);
    bad++;
  }
});

/* ── خوانایی رنگ نشان در هر دو تم ────────────────────────────────────────────
   رنگ برند بعضی ابزارها تقریباً سیاه یا تقریباً سفید است و در یکی از دو تم
   دیده نمی‌شود. هرجا این‌طور بود، باید accentDark تعریف شده باشد. */
function lum(hex) {
  const c = hex.replace("#", "");
  const v = i => {
    let x = parseInt(c.slice(i, i + 2), 16) / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * v(0) + 0.7152 * v(2) + 0.0722 * v(4);
}
const DARK_FLOOR = 0.06;   // کمتر از این، روی زمینهٔ تیره گم می‌شود
const LIGHT_CEIL = 0.72;   // بیشتر از این، روی زمینهٔ روشن گم می‌شود

w.COURSES.forEach(t => {
  if (!t.accent) return;
  const L = lum(t.accent), D = t.accentDark ? lum(t.accentDark) : null;
  if (L > LIGHT_CEIL && (D === null || lum(t.accent) > LIGHT_CEIL) && !t.accentDark) {
    problems.push([t.id, `رنگ ${t.accent} در تم روشن گم می‌شود — accentDark لازم است`]);
    bad++;
  }
  const dark = t.accentDark || t.accent;
  if (lum(dark) < DARK_FLOOR) {
    problems.push([t.id, `رنگ تم تاریک ${dark} خیلی تیره است (روشنایی ${lum(dark).toFixed(3)})`]);
    bad++;
  }
  if (t.accentDark && L > LIGHT_CEIL) {
    problems.push([t.id, `رنگ تم روشن ${t.accent} خیلی روشن است`]);
    bad++;
  }
});

problems.forEach(p => console.log(`  ✗ ${p[0]}  →  ${p[1]}`));
console.log(`\n${checked} آیکون بررسی شد.`);
if (bad) {
  console.log(`${bad} آیکون از کادر ۲۴×۲۴ بیرون می‌زند.`);
  process.exit(1);
}
console.log("همهٔ آیکون‌ها داخل کادرند. ✓");
