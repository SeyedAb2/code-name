/* ============================================================================
   ثابت‌های سایت و توسعه‌دهنده — یک جا، تا در ده فایل تکرار نشود.
   ========================================================================== */

export const SITE = {
  url: "https://codenameh.ir",
  name: { fa: "کدنامه", en: "Codenameh" },
  tagline: {
    fa: "مرجع‌های مهندسی نرم‌افزار، به فارسی",
    en: "Software engineering references, in Persian",
  },
  description: {
    fa: "مرجع‌های آموزشی فارسی برای مهندسی نرم‌افزار: داکر، کوبرنتیز، معماری، میکروسرویس، ‎C#‎، پایتون، ری‌اکت، فلاتر و بیشتر.",
    en: "Persian software-engineering references: Docker, Kubernetes, architecture, microservices, C#, Python, React, Flutter and more.",
  },
  repo: "https://github.com/SeyedAb2/code-name",
  author: {
    name: "سیدعباس موسوی اصل",
    nameEn: "Seyed Abbas Mousavi Asl",
    github: "https://github.com/SeyedAb2",
    githubHandle: "SeyedAb2",
    email: "abbas.mossavi1378@gmail.com",
    phone: "09302010811",
    phoneIntl: "+989302010811",
    linkedin: "https://www.linkedin.com/in/abbas-mossavi-520b09213",
  },
  donate: {
    card: "6219 8618 4472 9987",
    cardRaw: "6219861844729987",
    bank: { fa: "بانک سامان", en: "Saman Bank" },
    holder: { fa: "سیدعباس موسوی اصل", en: "Seyed Abbas Mousavi Asl" },
  },
} as const;
