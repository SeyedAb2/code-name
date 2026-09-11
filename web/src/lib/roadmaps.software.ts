/* ============================================================================
   رودمپ‌های نرم‌افزار
   ========================================================================== */
import type { Roadmap } from "./roadmaps.types";

export const SOFTWARE_ROADMAPS: Roadmap[] = [
  /* ═══════════════════════════ پایه، مشترک همه ═══════════════════════════ */
  {
    id: "foundations",
    field: "software",
    accent: "#A16207",
    ico: '<path d="M3.4 20h17.2M5.6 20V9.4L12 4.4l6.4 5V20"/><path d="M9.8 20v-5.2h4.4V20"/>',
    fa: {
      name: "پایهٔ مشترک",
      role: "پیش از هر تخصصی",
      intro:
        "هر مسیری در مهندسی نرم‌افزار انتخاب کنی، این‌ها را لازم داری. آدم‌هایی که این مرحله را رد می‌کنند و مستقیم سراغ فریم‌ورک می‌روند، معمولاً دو سال بعد به همین‌جا برمی‌گردند — چون هر باگ عجیبی که می‌بینند ریشه در چیزی دارد که اینجا نخوانده‌اند. سه تا شش ماه اینجا، دو سال بعد را نجات می‌دهد.",
    },
    en: {
      name: "Shared foundations",
      role: "Before any specialisation",
      intro:
        "Whichever path in software you choose, you need these. People who skip this stage and go straight to a framework usually come back to it two years later — because every strange bug they meet has its roots in something they did not read here. Three to six months here saves the two years after.",
    },
    stages: [
      {
        id: "computing",
        fa: "درک ماشین",
        en: "Understanding the machine",
        outcomeFa: "می‌دانی وقتی برنامه‌ات اجرا می‌شود، زیر آن چه اتفاقی می‌افتد.",
        outcomeEn: "You know what happens underneath when your program runs.",
        months: [1, 2],
        skills: [
          {
            fa: "معماری رایانه و حافظه", en: "Computer architecture and memory",
            kind: "hard",
            whyFa: "چرا آن حلقه کند است و چرا آن سرور حافظه کم می‌آورد — هر دو از همین‌جا جواب می‌گیرند.",
            whyEn: "Why that loop is slow and why that server runs out of memory both get answered here.",
            tracks: ["24-hardware", "23-history-computing"],
          },
          {
            fa: "سیستم‌عامل: پروسه، نخ، فایل‌سیستم", en: "OS: processes, threads, filesystems",
            kind: "hard",
            whyFa: "کانتینر، همروندی و مجوزها همه روی این مفاهیم سوارند.",
            whyEn: "Containers, concurrency and permissions all rest on these.",
            tracks: ["03-linux-network"],
          },
          {
            fa: "شبکه: از TCP تا HTTP", en: "Networking: TCP through HTTP",
            kind: "hard",
            whyFa: "هر چیزی که می‌سازی روی شبکه حرف می‌زند. ندانستنش یعنی عیب‌یابی با حدس.",
            whyEn: "Everything you build talks over a network. Not knowing it means debugging by guesswork.",
            tracks: ["25-network-foundations"],
          },
        ],
      },
      {
        id: "programming",
        fa: "برنامه‌نویسی و حل مسئله",
        en: "Programming and problem solving",
        outcomeFa: "یک زبان را عمیق بلدی و می‌توانی مسئله‌ای را که قبلاً ندیده‌ای بشکنی و حل کنی.",
        outcomeEn: "You know one language deeply and can break down a problem you have not seen before.",
        months: [2, 4],
        skills: [
          {
            fa: "یک زبان، عمیق", en: "One language, deeply",
            kind: "hard",
            whyFa: "ده زبان سطحی به‌اندازهٔ یک زبان عمیق ارزش ندارد. زبان دوم بعداً در چند هفته می‌آید.",
            whyEn: "Ten shallow languages are worth less than one deep one. The second language takes weeks later.",
            tracks: ["41-javascript", "12-python", "09-csharp"],
          },
          {
            fa: "ساختمان داده و الگوریتم", en: "Data structures and algorithms",
            kind: "hard",
            whyFa: "نه برای مصاحبه — برای اینکه بدانی کدام ساختار کدام مسئله را ارزان حل می‌کند.",
            whyEn: "Not for interviews — so you know which structure solves which problem cheaply.",
            tracks: ["58-algorithms"],
          },
          {
            fa: "Git و کار با تاریخچه", en: "Git and working with history",
            kind: "hard",
            whyFa: "از روز اول لازمش داری و تا آخر عمر حرفه‌ای همراهت است.",
            whyEn: "You need it from day one and it stays with you for your whole career.",
            tracks: ["28-git"],
          },
          {
            fa: "اشکال‌زدایی سیستماتیک", en: "Systematic debugging",
            kind: "soft",
            whyFa: "تفاوت کسی که چهار ساعت گیر می‌کند با کسی که بیست دقیقه، در روش است نه در دانش.",
            whyEn: "The difference between being stuck for four hours and twenty minutes is method, not knowledge.",
          },
          {
            fa: "خواندن کد دیگران", en: "Reading other people's code",
            kind: "soft",
            whyFa: "بیشتر کار حرفه‌ای، خواندن است نه نوشتن. این مهارت را کسی به تو یاد نمی‌دهد مگر خودت تمرین کنی.",
            whyEn: "Professional work is mostly reading, not writing. Nobody teaches this unless you practise it.",
            tracks: ["22-skills"],
          },
        ],
      },
      {
        id: "craft",
        fa: "کیفیت کد",
        en: "Code quality",
        outcomeFa: "کدی می‌نویسی که شش ماه بعد خودت هم بتوانی عوضش کنی.",
        outcomeEn: "You write code you can still change in six months.",
        months: [1, 3],
        skills: [
          {
            fa: "تست‌نویسی", en: "Writing tests",
            kind: "hard",
            whyFa: "تست برای اثبات درستی نیست؛ برای این است که بتوانی بدون ترس تغییر بدهی.",
            whyEn: "Tests are not to prove correctness; they are so you can change things without fear.",
            tracks: ["07-architecture"],
          },
          {
            fa: "شیءگرایی و SOLID", en: "OOP and SOLID",
            kind: "hard",
            whyFa: "نه به‌عنوان قانون، به‌عنوان ابزاری برای کنترل وابستگی‌ها.",
            whyEn: "Not as law, but as a tool for controlling dependencies.",
            tracks: ["47-oop", "07-architecture"],
          },
          {
            fa: "بازبینی کد", en: "Code review",
            kind: "soft",
            whyFa: "دادن و گرفتن بازخورد، بدون اینکه شخصی شود. مهارتی که سرعت کل تیم را تعیین می‌کند.",
            whyEn: "Giving and taking feedback without it becoming personal. It sets the whole team's pace.",
            tracks: ["22-skills"],
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ فرانت‌اند ═══════════════════════════ */
  {
    id: "frontend",
    field: "software",
    accent: "#61DAFB",
    ico: '<rect x="2.6" y="4" width="18.8" height="13" rx="2.2"/><path d="M8.4 20.6h7.2M12 17v3.6" stroke-linecap="round"/>',
    after: ["foundations"],
    fa: {
      name: "توسعه‌دهندهٔ فرانت‌اند",
      role: "Frontend Developer",
      intro:
        "فرانت‌اند تنها جایی است که کاربر واقعاً لمسش می‌کند. آسان به نظر می‌رسد چون نتیجه فوراً دیده می‌شود، ولی سخت‌ترین بخشش همان چیزی است که دیده نمی‌شود: حالت. این مسیر عمداً از HTML و CSS شروع می‌کند نه از فریم‌ورک — چون هر فریم‌ورکی در نهایت همان‌ها را تولید می‌کند.",
    },
    en: {
      name: "Frontend developer",
      role: "Frontend Developer",
      intro:
        "The frontend is the only part users actually touch. It looks easy because results are immediate, but its hardest part is the invisible one: state. This path deliberately starts with HTML and CSS rather than a framework, because every framework ultimately produces those.",
    },
    stages: [
      {
        id: "fe-base",
        fa: "پایهٔ وب",
        en: "Web fundamentals",
        outcomeFa: "بدون هیچ کتابخانه‌ای می‌توانی صفحه‌ای بسازی که واکنش‌گرا، دسترس‌پذیر و راست‌چین باشد.",
        outcomeEn: "You can build a responsive, accessible, RTL-ready page with no library at all.",
        months: [2, 3],
        skills: [
          {
            fa: "HTML معنایی و دسترس‌پذیری", en: "Semantic HTML and accessibility",
            kind: "hard",
            whyFa: "تگ درست یعنی صفحه‌خوان کار می‌کند و موتور جستجو می‌فهمد. این را بعداً نمی‌شود اضافه کرد.",
            whyEn: "The right tag means screen readers work and search engines understand. It cannot be bolted on later.",
            tracks: ["39-html-css"],
          },
          {
            fa: "CSS: چیدمان، Grid، Flexbox", en: "CSS: layout, Grid, Flexbox",
            kind: "hard",
            whyFa: "بیشتر «باگ‌های عجیب CSS» در واقع نفهمیدن مدل چیدمان است.",
            whyEn: "Most “weird CSS bugs” are really a misunderstanding of the layout model.",
            tracks: ["39-html-css", "40-css-tools"],
          },
          {
            fa: "راست‌چینی و چندزبانگی", en: "RTL and multilingual layout",
            kind: "hard",
            whyFa: "برای مخاطب فارسی این اختیاری نیست. خاصیت‌های منطقی را از همان اول یاد بگیر.",
            whyEn: "For a Persian audience this is not optional. Learn logical properties from the start.",
            tracks: ["39-html-css"],
          },
          {
            fa: "جاوااسکریپت، عمیق", en: "JavaScript, deeply",
            kind: "hard",
            whyFa: "‏this، closure و event loop را اگر ندانی، در هر فریم‌ورکی سردرگم می‌مانی.",
            whyEn: "Without this, closures and the event loop, you stay lost in every framework.",
            tracks: ["41-javascript"],
          },
        ],
      },
      {
        id: "fe-framework",
        fa: "فریم‌ورک و حالت",
        en: "Framework and state",
        outcomeFa: "یک اپ چندصفحه‌ای با احراز هویت و داده از API می‌سازی و می‌دانی حالت کجا باید بنشیند.",
        outcomeEn: "You build a multi-page app with auth and API data, and know where state belongs.",
        months: [3, 5],
        skills: [
          {
            fa: "TypeScript", en: "TypeScript",
            kind: "hard",
            whyFa: "در پروژهٔ تیمی عملاً اجباری است. کامپایلر باگ را قبل از کاربر می‌گیرد.",
            whyEn: "Effectively mandatory on a team. The compiler catches the bug before the user does.",
            tracks: ["42-typescript"],
          },
          {
            fa: "یک فریم‌ورک: React یا Angular یا Svelte", en: "One framework: React, Angular or Svelte",
            kind: "hard",
            whyFa: "یکی را عمیق. دومی بعداً در دو هفته می‌آید چون مفاهیم مشترک‌اند.",
            whyEn: "One, deeply. The second takes two weeks later because the concepts transfer.",
            tracks: ["15-react", "17-angular", "34-svelte"],
          },
          {
            fa: "مدیریت حالت", en: "State management",
            kind: "hard",
            whyFa: "سخت‌ترین بخش فرانت‌اند. و پرتکرارترین جواب درست، «هیچ کتابخانه‌ای» است.",
            whyEn: "The hardest part of frontend. And the most frequently correct answer is “no library”.",
            tracks: ["48-state-management"],
          },
          {
            fa: "حالت‌های رندر و PWA", en: "Rendering modes and PWAs",
            kind: "hard",
            whyFa: "‏CSR یا SSR؟ این تصمیم روی سرعت و SEO اثر مستقیم دارد.",
            whyEn: "CSR or SSR? That decision directly affects speed and SEO.",
            tracks: ["49-rendering-pwa", "16-nextjs"],
          },
        ],
      },
      {
        id: "fe-pro",
        fa: "حرفه‌ای شدن",
        en: "Going professional",
        outcomeFa: "اپت سریع است، تست دارد، و خودت می‌توانی استقرارش بدهی.",
        outcomeEn: "Your app is fast, tested, and you can deploy it yourself.",
        months: [3, 6],
        skills: [
          {
            fa: "کارایی و Core Web Vitals", en: "Performance and Core Web Vitals",
            kind: "hard",
            whyFa: "با اندازه‌گیری، نه با حدس. بدون عدد، بهینه‌سازی فقط جابه‌جا کردن مشکل است.",
            whyEn: "By measurement, not guesswork. Without numbers, optimising just moves the problem.",
            tracks: ["49-rendering-pwa"],
          },
          {
            fa: "تست فرانت‌اند", en: "Frontend testing",
            kind: "hard",
            whyFa: "تست رفتار کاربر، نه جزئیات پیاده‌سازی.",
            whyEn: "Test user behaviour, not implementation details.",
            tracks: ["15-react"],
          },
          {
            fa: "انتشار پکیج و کتابخانه", en: "Publishing packages",
            kind: "hard",
            whyFa: "وقتی کامپوننت مشترک بین چند پروژه داری، باید بدانی چطور منتشرش کنی.",
            whyEn: "When you share components across projects, you need to know how to publish them.",
            tracks: ["36-packaging"],
          },
          {
            fa: "همکاری با طراح", en: "Working with designers",
            kind: "soft",
            whyFa: "«این‌طور نشد» بیشتر از مشکل فنی، مشکل گفت‌وگوست.",
            whyEn: "“That is not what I meant” is more often a conversation problem than a technical one.",
            tracks: ["22-skills"],
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ بک‌اند ═══════════════════════════ */
  {
    id: "backend",
    field: "software",
    accent: "#0EA5A5",
    ico: '<ellipse cx="12" cy="6" rx="7.4" ry="3"/><path d="M4.6 6v12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6"/><path d="M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3"/>',
    after: ["foundations"],
    fa: {
      name: "توسعه‌دهندهٔ بک‌اند",
      role: "Backend Developer",
      intro:
        "بک‌اند جایی است که داده زندگی می‌کند و اشتباه‌ها گران‌اند: یک باگ فرانت‌اند صفحه را خراب می‌کند، یک باگ بک‌اند داده را. این مسیر روی سه چیز تمرکز دارد که تازه‌کارها کم‌جدی می‌گیرند: پایگاه‌داده، تراکنش، و اینکه وقتی سیستم زیر بار می‌رود چه می‌شود.",
    },
    en: {
      name: "Backend developer",
      role: "Backend Developer",
      intro:
        "The backend is where the data lives and where mistakes are expensive: a frontend bug breaks a page, a backend bug breaks the data. This path focuses on three things beginners underrate: the database, transactions, and what happens when the system goes under load.",
    },
    stages: [
      {
        id: "be-base",
        fa: "سرویس و داده",
        en: "Services and data",
        outcomeFa: "یک API با پایگاه‌داده، اعتبارسنجی و تست می‌سازی که کار می‌کند.",
        outcomeEn: "You build a working API with a database, validation and tests.",
        months: [3, 5],
        skills: [
          {
            fa: "یک زبان سمت سرور", en: "One server-side language",
            kind: "hard",
            whyFa: "‏C#‎، Go، پایتون، Java یا Node — کدام مهم نیست، عمقش مهم است.",
            whyEn: "C#, Go, Python, Java or Node — which one matters less than how deeply.",
            tracks: ["09-csharp", "11-go", "12-python", "29-nodejs", "45-java-spring"],
          },
          {
            fa: "SQL و طراحی پایگاه‌داده", en: "SQL and database design",
            kind: "hard",
            whyFa: "پرتکرارترین گلوگاه هر سیستمی پایگاه‌داده است، و بیشترش از طراحی بد می‌آید.",
            whyEn: "The most common bottleneck in any system is the database, and most of it comes from bad design.",
            tracks: ["05-sql", "53-mysql-mariadb"],
          },
          {
            fa: "طراحی API", en: "API design",
            kind: "hard",
            whyFa: "‏API قراردادی است که بعداً نمی‌توانی راحت عوضش کنی. نسخه‌گذاری را از اول جدی بگیر.",
            whyEn: "An API is a contract you cannot easily change later. Take versioning seriously from day one.",
            tracks: ["10-aspnet-core", "30-express"],
          },
          {
            fa: "احراز هویت و مجوز", en: "Authentication and authorisation",
            kind: "hard",
            whyFa: "این همان جایی است که اشتباه، نشت داده می‌شود. خودت از صفر ننویسش.",
            whyEn: "This is where a mistake becomes a data breach. Do not roll your own.",
            tracks: ["10-aspnet-core"],
          },
        ],
      },
      {
        id: "be-scale",
        fa: "مقیاس و پایداری",
        en: "Scale and reliability",
        outcomeFa: "می‌دانی سیستم زیر بار کجا می‌شکند و چطور جلویش را بگیری.",
        outcomeEn: "You know where the system breaks under load and how to prevent it.",
        months: [4, 8],
        skills: [
          {
            fa: "کش و Redis", en: "Caching and Redis",
            kind: "hard",
            whyFa: "ارزان‌ترین راه سریع‌کردن — و باطل‌سازی کش، یکی از دو مسئلهٔ سخت علوم کامپیوتر.",
            whyEn: "The cheapest way to go faster — and cache invalidation is one of the two hard problems.",
            tracks: ["52-redis"],
          },
          {
            fa: "صف و کار پس‌زمینه", en: "Queues and background work",
            kind: "hard",
            whyFa: "هر کاری که بیش از چند ثانیه طول بکشد نباید داخل چرخهٔ درخواست باشد.",
            whyEn: "Anything taking more than a few seconds does not belong in the request cycle.",
            tracks: ["08-microservices"],
          },
          {
            fa: "تراکنش و همزمانی", en: "Transactions and concurrency",
            kind: "hard",
            whyFa: "‏deadlock و شرایط رقابتی تا وقتی زیر بار نروی خودشان را نشان نمی‌دهند.",
            whyEn: "Deadlocks and race conditions do not show themselves until you are under load.",
            tracks: ["05-sql"],
          },
          {
            fa: "مشاهده‌پذیری", en: "Observability",
            kind: "hard",
            whyFa: "سیستمی که نتوانی ببینی، سیستمی است که نتوانی درستش کنی.",
            whyEn: "A system you cannot see is a system you cannot fix.",
            tracks: ["04-devops"],
          },
        ],
      },
      {
        id: "be-arch",
        fa: "معماری",
        en: "Architecture",
        outcomeFa: "می‌توانی سیستمی طراحی کنی که تیم چندنفره رویش کار کند و سه سال دوام بیاورد.",
        outcomeEn: "You can design a system several people work on that lasts three years.",
        months: [6, 12],
        skills: [
          {
            fa: "معماری لایه‌ای، شش‌ضلعی، Clean", en: "Layered, hexagonal, clean architecture",
            kind: "hard",
            whyFa: "چهار نام برای یک ایده: جهت وابستگی را کنترل کن.",
            whyEn: "Four names for one idea: control the direction of your dependencies.",
            tracks: ["07-architecture"],
          },
          {
            fa: "طراحی دامنه‌محور", en: "Domain-driven design",
            kind: "hard",
            whyFa: "وقتی پیچیدگی در دامنه است نه در فناوری — و صادقانه، کِی لازم نیست.",
            whyEn: "When complexity is in the domain, not the technology — and honestly, when it is not needed.",
            tracks: ["50-ddd"],
          },
          {
            fa: "میکروسرویس و کِی نه", en: "Microservices, and when not to",
            kind: "hard",
            whyFa: "میکروسرویس ارتقا نیست، معامله است: پیچیدگی از کد به شبکه منتقل می‌شود.",
            whyEn: "Microservices are not an upgrade, they are a trade: complexity moves from code to network.",
            tracks: ["08-microservices"],
          },
          {
            fa: "توضیح تصمیم فنی", en: "Explaining a technical decision",
            kind: "soft",
            whyFa: "معماری‌ای که نتوانی برای تیم توجیهش کنی، پیاده نمی‌شود.",
            whyEn: "An architecture you cannot justify to the team never gets built.",
            tracks: ["64-docs-writing", "65-presentation"],
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ دواپس ═══════════════════════════ */
  {
    id: "devops",
    field: "software",
    accent: "#8B5CF6",
    ico: '<path d="M8.2 12c0 2.2-1.5 4-3.3 4S1.5 14.2 1.5 12s1.5-4 3.4-4c2.7 0 4.2 8 6.9 8 1.9 0 3.4-1.8 3.4-4s-1.5-4-3.4-4c-1.3 0-2.4.9-3 2.2" stroke-linecap="round"/><path d="M18 8h4.5M20.2 5.8V10" stroke-linecap="round" opacity=".85"/>',
    after: ["foundations"],
    fa: {
      name: "مهندس دواپس",
      role: "DevOps / SRE",
      intro:
        "دواپس یک ابزار نیست، فاصلهٔ بین «کد نوشتم» و «کاربر دارد ازش استفاده می‌کند» است. این نقش بیش از هر نقش دیگری لینوکس می‌خواهد — و بیش از آن، خونسردی: بیشتر کار مهم دواپس ساعت سه بامداد اتفاق می‌افتد.",
    },
    en: {
      name: "DevOps engineer",
      role: "DevOps / SRE",
      intro:
        "DevOps is not a tool; it is the gap between “I wrote the code” and “a user is using it”. This role demands Linux more than any other — and composure more than that: most of the important work happens at 3am.",
    },
    stages: [
      {
        id: "do-base",
        fa: "سرور و کانتینر",
        en: "Servers and containers",
        outcomeFa: "یک سرور خام را می‌گیری و یک سرویس امن رویش بالا می‌آوری.",
        outcomeEn: "You take a bare server and stand a secured service on it.",
        months: [3, 5],
        skills: [
          {
            fa: "لینوکس در عمل", en: "Linux in practice",
            kind: "hard",
            whyFa: "بدون این، بقیهٔ دواپس فقط کپی‌کردن دستور از اینترنت است.",
            whyEn: "Without it, the rest of DevOps is copying commands off the internet.",
            tracks: ["03-linux-network"],
          },
          {
            fa: "داکر", en: "Docker",
            kind: "hard",
            whyFa: "واحد استاندارد تحویل نرم‌افزار. همه‌چیز بعدی رویش سوار است.",
            whyEn: "The standard unit of software delivery. Everything after sits on it.",
            tracks: ["01-docker"],
          },
          {
            fa: "شبکه و Nginx", en: "Networking and Nginx",
            kind: "hard",
            whyFa: "‏۵۰۲ و ۵۰۴ را باید در سی ثانیه تشخیص بدهی، نه در سه ساعت.",
            whyEn: "You should diagnose a 502 or 504 in thirty seconds, not three hours.",
            tracks: ["02-nginx", "25-network-foundations"],
          },
          {
            fa: "اسکریپت‌نویسی", en: "Scripting",
            kind: "hard",
            whyFa: "هر کاری که دو بار انجام دادی، بار سوم باید اسکریپت باشد.",
            whyEn: "Anything you have done twice should be a script the third time.",
            tracks: ["03-linux-network"],
          },
        ],
      },
      {
        id: "do-pipeline",
        fa: "خودکارسازی",
        en: "Automation",
        outcomeFa: "از commit تا production، بدون دست زدن به چیزی.",
        outcomeEn: "From commit to production without touching anything.",
        months: [3, 6],
        skills: [
          {
            fa: "CI/CD", en: "CI/CD",
            kind: "hard",
            whyFa: "استقرار دستی یعنی استقرار نادر، و استقرار نادر یعنی استقرار پرخطر.",
            whyEn: "Manual deploys mean rare deploys, and rare deploys mean risky deploys.",
            tracks: ["04-devops"],
          },
          {
            fa: "زیرساخت به‌عنوان کد", en: "Infrastructure as code",
            kind: "hard",
            whyFa: "سروری که دستی ساخته شده، سروری است که نمی‌توانی دوباره بسازی.",
            whyEn: "A server built by hand is a server you cannot rebuild.",
            tracks: ["04-devops"],
          },
          {
            fa: "کوبرنتیز", en: "Kubernetes",
            kind: "hard",
            whyFa: "وقتی چند کانتینر روی چند سرور شدند. قبل از آن، پیچیدگی اضافه است.",
            whyEn: "When containers become many across many servers. Before that, it is needless complexity.",
            tracks: ["06-kubernetes"],
          },
          {
            fa: "مانیتورینگ و alert", en: "Monitoring and alerting",
            kind: "hard",
            whyFa: "هشداری که نصف شب بیدارت کند باید ارزشش را داشته باشد، وگرنه یادش می‌گیری نادیده بگیری.",
            whyEn: "An alert that wakes you at 3am had better be worth it, or you learn to ignore it.",
            tracks: ["04-devops"],
          },
        ],
      },
      {
        id: "do-reliability",
        fa: "پایداری",
        en: "Reliability",
        outcomeFa: "سیستم بدون قطعی به‌روز می‌شود و وقتی خراب شد، می‌دانی چه کار کنی.",
        outcomeEn: "The system updates without downtime, and when it breaks you know what to do.",
        months: [6, 12],
        skills: [
          {
            fa: "استراتژی انتشار", en: "Release strategy",
            kind: "hard",
            whyFa: "‏blue-green و canary یعنی اشتباه به همهٔ کاربران نرسد.",
            whyEn: "Blue-green and canary mean a mistake does not reach every user.",
            tracks: ["04-devops"],
          },
          {
            fa: "پشتیبان‌گیری و بازیابی", en: "Backup and recovery",
            kind: "hard",
            whyFa: "پشتیبانی که تست نشده، پشتیبان نیست. این را همه می‌دانند و کم‌تر کسی تست می‌کند.",
            whyEn: "An untested backup is not a backup. Everyone knows this; few test it.",
            tracks: ["04-devops"],
          },
          {
            fa: "امنیت و سخت‌سازی", en: "Security and hardening",
            kind: "hard",
            whyFa: "پیش‌فرض‌ها برای راحتی تنظیم شده‌اند، نه برای امنیت.",
            whyEn: "Defaults are tuned for convenience, not safety.",
            tracks: ["03-linux-network", "01-docker"],
          },
          {
            fa: "آرامش در بحران", en: "Composure in an incident",
            kind: "soft",
            whyFa: "وقتی همه‌چیز خراب است، کسی که منظم فکر می‌کند از کسی که سریع تایپ می‌کند ارزشمندتر است.",
            whyEn: "When everything is broken, thinking in order beats typing fast.",
            tracks: ["22-skills"],
          },
          {
            fa: "postmortem بدون مقصر", en: "Blameless postmortems",
            kind: "soft",
            whyFa: "اگر دنبال مقصر بگردی، دفعهٔ بعد کسی خطا را گزارش نمی‌کند.",
            whyEn: "Hunt for someone to blame and next time nobody reports the failure.",
            tracks: ["04-devops"],
          },
        ],
      },
    ],
  },
];
