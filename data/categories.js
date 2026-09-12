/* ============================================================================
   دسته‌های مسیرها — کدنامه

   این فایل و courses.js کنار هم، تنها منبع سرفصل‌ها هستند. ابزار
   tools/export-manifest.js از روی همین دو، دادهٔ نوع‌دار اپ را می‌سازد.

   نشان هر دسته جدا از خود جدول نگه داشته شده تا CATS خوانا بماند؛ محتوای
   هر نشان، درون یک <svg viewBox="0 0 24 24"> می‌نشیند.
   ========================================================================== */
"use strict";

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
    den: "What separates a good programmer from a software engineer." },
];

const CAT_ICO = {
  /* تاریخچه — ساعت شنی، نه ساعت دیواری: گذر زمان، نه زمان فعلی */
  roots:    '<path d="M7 3.2h10M7 20.8h10" stroke-linecap="round"/><path d="M8 3.2v3.1c0 2 1.5 3.6 3.1 4.7.6.4.6 1.6 0 2C9.5 14.1 8 15.7 8 17.7v3.1M16 3.2v3.1c0 2-1.5 3.6-3.1 4.7-.6.4-.6 1.6 0 2 1.6 1.1 3.1 2.7 3.1 4.7v3.1" stroke-linejoin="round"/>',
  /* ابزار روزمره — آچار */
  basics:   '<path d="M14.6 4.4a3.9 3.9 0 0 0 5 5l-9.6 9.6a2.4 2.4 0 0 1-3.4-3.4z"/><path d="M6.4 17.6h.02" stroke-linecap="round"/>',
  /* زیرساخت — رَک سرور با چراغ */
  infra:    '<rect x="3.4" y="3.4" width="17.2" height="6" rx="1.8"/><rect x="3.4" y="14.6" width="17.2" height="6" rx="1.8"/><path d="M6.8 6.4h.02M6.8 17.6h.02" stroke-linecap="round"/><path d="M16 6.4h2.2M16 17.6h2.2" stroke-linecap="round" opacity=".6"/>',
  /* معماری — نقشهٔ لایه‌ای، نه ساختمان */
  arch:     '<path d="M12 2.6 21 7.2 12 11.8 3 7.2z" stroke-linejoin="round"/><path d="m3 12 9 4.6 9-4.6" stroke-linejoin="round"/><path d="m3 16.8 9 4.6 9-4.6" stroke-linejoin="round" opacity=".55"/>',
  /* بک‌اند — سرور و پردازش، نه پایگاه‌داده */
  backend:  '<rect x="3" y="4.6" width="18" height="6" rx="1.8"/><rect x="3" y="13.4" width="18" height="6" rx="1.8"/><path d="M6.6 7.6h.02M6.6 16.4h.02" stroke-linecap="round"/><path d="M13 7.6h4.6M13 16.4h4.6" stroke-linecap="round" opacity=".55"/>',
  /* فرانت‌اند — نمایشگر */
  frontend: '<rect x="2.6" y="4" width="18.8" height="13" rx="2.2"/><path d="M8.4 20.4h7.2M12 17v3.4" stroke-linecap="round"/>',
  /* هوش مصنوعی — تراشه */
  ai:       '<rect x="6.4" y="6.4" width="11.2" height="11.2" rx="2.4"/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx="1"/><path d="M9.6 6.4V3.8M14.4 6.4V3.8M9.6 20.2v-2.6M14.4 20.2v-2.6M6.4 9.6H3.8M6.4 14.4H3.8M20.2 9.6h-2.6M20.2 14.4h-2.6" stroke-linecap="round"/>',
  /* داده — استوانهٔ پایگاه‌داده؛ جایش همین‌جاست، نه روی بک‌اند */
  data:     '<ellipse cx="12" cy="5.8" rx="7.4" ry="2.9"/><path d="M4.6 5.8v12.4c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V5.8"/><path d="M4.6 12c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9"/>',
  /* انتشار — جعبهٔ بسته‌بندی */
  publish:  '<path d="M12 2.8 20.4 7v10L12 21.2 3.6 17V7z"/><path d="M3.6 7 12 11.2 20.4 7M12 11.2v10"/>',
  /* پروژه‌های ترکیبی — قطعات کنار هم */
  projects: '<rect x="3.4" y="3.4" width="7.2" height="7.2" rx="1.6"/><rect x="13.4" y="3.4" width="7.2" height="7.2" rx="1.6"/><rect x="3.4" y="13.4" width="7.2" height="7.2" rx="1.6"/><rect x="13.4" y="13.4" width="7.2" height="7.2" rx="1.6"/>',
  /* مسیر شغلی — پله‌های بالارونده با فلش؛ آدمک معنایی نداشت */
  career:   '<path d="M3.4 20.6h4.2v-5.2H3.4zM9.9 20.6h4.2V10.2H9.9zM16.4 20.6h4.2V5H16.4z" stroke-linejoin="round"/><path d="M4.6 9.4 9 5l2.8 2.6L17.6 2" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/><path d="M14.4 2h3.4v3.4" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>',
};

module.exports = { CATS, CAT_ICO };
