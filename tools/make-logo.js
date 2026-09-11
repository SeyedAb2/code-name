#!/usr/bin/env node
/* ============================================================================
   ساخت نسخه‌های لوگو — کدنامه

   ورودی: assets/images/logo.png  (۱۲۵۴×۱۲۵۴، ۶۵۲ کیلوبایت)
   مسئله: این فایل روی هر صفحه بار می‌شود تا در جعبه‌ای ۳۰ پیکسلی دیده شود،
   و ۳۵٪ کناره‌هایش شفافِ خالی است — یعنی نشان کوچک‌تر از کادرش دیده می‌شود.

   این ابزار:
     ۱) تا کادر واقعی پیکسل‌های مات می‌بُرد (با کمی حاشیهٔ متقارن)
     ۲) با فیلتر جعبه‌ای و میانگین‌گیریِ آلفا-وزن‌دار کوچک می‌کند
        (میانگین سادهٔ RGB روی پیکسل شفاف، لبه را تیره می‌کند)
     ۳) چند اندازه می‌نویسد: ۲۵۶ / ۱۲۸ / ۶۴ / ۳۲

   بدون هیچ وابستگی — فقط zlib خود نود.
   اجرا:  node tools/make-logo.js
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const SRC = path.join(__dirname, "..", "assets", "images", "logo.png");
const OUT = path.join(__dirname, "..", "docs-fa", "assets", "images");
const SIZES = [256, 128, 64, 32];

/* ───────────────────────────── خواندن PNG ───────────────────────────── */
function readPng(file) {
  const buf = fs.readFileSync(file);
  if (buf.slice(0, 8).toString("hex") !== "89504e470d0a1a0a") throw new Error("PNG نیست");
  let pos = 8, w = 0, h = 0, depth = 0, type = 0;
  const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const tag = buf.slice(pos + 4, pos + 8).toString("ascii");
    const data = buf.slice(pos + 8, pos + 8 + len);
    if (tag === "IHDR") { w = data.readUInt32BE(0); h = data.readUInt32BE(4); depth = data[8]; type = data[9]; }
    else if (tag === "IDAT") idat.push(data);
    else if (tag === "IEND") break;
    pos += 12 + len;
  }
  if (depth !== 8 || type !== 6) throw new Error("فقط RGBA هشت‌بیتی پشتیبانی می‌شود");

  const raw = zlib.inflateSync(Buffer.concat(idat));
  const bpp = 4, stride = w * bpp;
  const px = Buffer.alloc(h * stride);
  const paeth = (a, b, c) => {
    const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  let rp = 0;
  for (let y = 0; y < h; y++) {
    const ft = raw[rp++];
    for (let x = 0; x < stride; x++) {
      const rv = raw[rp + x];
      const a = x >= bpp ? px[y * stride + x - bpp] : 0;
      const b = y > 0 ? px[(y - 1) * stride + x] : 0;
      const c = x >= bpp && y > 0 ? px[(y - 1) * stride + x - bpp] : 0;
      let v;
      if (ft === 0) v = rv;
      else if (ft === 1) v = rv + a;
      else if (ft === 2) v = rv + b;
      else if (ft === 3) v = rv + ((a + b) >> 1);
      else v = rv + paeth(a, b, c);
      px[y * stride + x] = v & 0xff;
    }
    rp += stride;
  }
  return { w, h, px };
}

/* ───────────────────────────── نوشتن PNG ───────────────────────────── */
function writePng(file, w, h, px) {
  const stride = w * 4;
  const raw = Buffer.alloc(h * (stride + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0;                       // فیلتر None
    px.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const chunk = (tag, data) => {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const body = Buffer.concat([Buffer.from(tag, "ascii"), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body) >>> 0);
    return Buffer.concat([len, body, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const out = Buffer.concat([
    Buffer.from("89504e470d0a1a0a", "hex"),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
  fs.writeFileSync(file, out);
  return out.length;
}

let CRC_T = null;
function crc32(buf) {
  if (!CRC_T) {
    CRC_T = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      CRC_T[n] = c;
    }
  }
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_T[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return c ^ -1;
}

/* ───────────── بریدن تا کادر مات، با حاشیهٔ متقارن ───────────── */
function cropToContent({ w, h, px }, marginPct = 0.04) {
  const stride = w * 4;
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++)
      if (px[y * stride + x * 4 + 3] > 8) {
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
  /* مربعش کن تا در جعبهٔ مربعی کج نیفتد */
  let cw = maxX - minX + 1, ch = maxY - minY + 1;
  const side = Math.max(cw, ch);
  const m = Math.round(side * marginPct);
  const full = side + m * 2;
  const cx = minX + cw / 2, cy = minY + ch / 2;
  const sx = Math.round(cx - full / 2), sy = Math.round(cy - full / 2);

  const out = Buffer.alloc(full * full * 4);
  for (let y = 0; y < full; y++)
    for (let x = 0; x < full; x++) {
      const gx = sx + x, gy = sy + y;
      if (gx < 0 || gy < 0 || gx >= w || gy >= h) continue;
      px.copy(out, (y * full + x) * 4, (gy * stride + gx * 4), (gy * stride + gx * 4) + 4);
    }
  return { w: full, h: full, px: out };
}

/* ───────── کوچک‌کردن با میانگین آلفا-وزن‌دار ─────────
   رنگ در پیکسل شفاف بی‌معناست؛ اگر ساده میانگین بگیریم، لبه‌ها تیره
   می‌شوند. پس رنگ را در آلفا وزن می‌دهیم و بعد برمی‌گردانیم. */
function resize(src, size) {
  const { w, h, px } = src;
  const out = Buffer.alloc(size * size * 4);
  const sx = w / size, sy = h / size;
  for (let y = 0; y < size; y++) {
    const y0 = Math.floor(y * sy), y1 = Math.min(h, Math.ceil((y + 1) * sy));
    for (let x = 0; x < size; x++) {
      const x0 = Math.floor(x * sx), x1 = Math.min(w, Math.ceil((x + 1) * sx));
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      for (let yy = y0; yy < y1; yy++)
        for (let xx = x0; xx < x1; xx++) {
          const i = (yy * w + xx) * 4, al = px[i + 3];
          r += px[i] * al; g += px[i + 1] * al; b += px[i + 2] * al;
          a += al; n++;
        }
      const o = (y * size + x) * 4;
      if (a > 0) {
        out[o]     = Math.round(r / a);
        out[o + 1] = Math.round(g / a);
        out[o + 2] = Math.round(b / a);
        out[o + 3] = Math.round(a / n);
      }
    }
  }
  return { w: size, h: size, px: out };
}

/* ───────────────────────────── اجرا ───────────────────────────── */
const src = readPng(SRC);
console.log(`ورودی        ${src.w}×${src.h}  ${(fs.statSync(SRC).size / 1024).toFixed(0)} KB`);

const cropped = cropToContent(src);
console.log(`بریده‌شده     ${cropped.w}×${cropped.h}`);

fs.mkdirSync(OUT, { recursive: true });
SIZES.forEach(s => {
  const img = resize(cropped, s);
  const bytes = writePng(path.join(OUT, `logo-${s}.png`), s, s, img.px);
  console.log(`  ✓ logo-${String(s).padEnd(4)} ${(bytes / 1024).toFixed(1).padStart(6)} KB`);
});

/* نسخهٔ اصلی بریده‌شده هم برای مصارف بعدی */
const bytes = writePng(path.join(OUT, "logo.png"), cropped.w, cropped.h, cropped.px);
console.log(`  ✓ logo.png  ${(bytes / 1024).toFixed(1)} KB  (بریده‌شده، ${cropped.w}px)`);
