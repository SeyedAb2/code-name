/* ============================================================================
   رودمپ‌های رهبری فنی و مدیریت

   نکتهٔ مشترک همهٔ این نقش‌ها: از جایی به بعد، رشد تو دیگر از عمق فنی
   نمی‌آید. این را دیر فهمیدن، پرتکرارترین دلیل گیر کردن مهندس‌های خوب است.
   ========================================================================== */
import type { Roadmap } from "./roadmaps.types";

export const MANAGEMENT_ROADMAPS: Roadmap[] = [
  /* ═══════════════════════════ تک‌لید ═══════════════════════════ */
  {
    id: "tech-lead",
    field: "management",
    accent: "#F59E0B",
    ico: '<circle cx="12" cy="7.4" r="3.4"/><path d="M5 20.2a7 7 0 0 1 14 0" stroke-linecap="round"/><path d="M18.6 3.4 20 6.2l2.8.4-2 2 .5 2.8-2.7-1.4-2.7 1.4.5-2.8-2-2 2.8-.4z" opacity=".75"/>',
    after: ["backend", "frontend"],
    fa: {
      name: "تک‌لید",
      role: "Tech Lead",
      intro:
        "اولین نقشی که در آن موفقیتت با کدی که خودت می‌نویسی سنجیده نمی‌شود، بلکه با کاری که تیم تحویل می‌دهد. بیشتر تک‌لیدهای تازه یک اشتباه مشترک می‌کنند: می‌خواهند هم بهترین برنامه‌نویس تیم بمانند و هم رهبری کنند. نمی‌شود؛ و انتخاب نکردن، یعنی هر دو را بد انجام دادن.",
    },
    en: {
      name: "Tech lead",
      role: "Tech Lead",
      intro:
        "The first role where your success is not measured by the code you write but by what the team ships. Most new tech leads make the same mistake: trying to stay the best programmer on the team while also leading it. You cannot; and not choosing means doing both badly.",
    },
    stages: [
      {
        id: "tl-technical",
        fa: "اعتبار فنی",
        en: "Technical credibility",
        outcomeFa: "تیم به قضاوت فنی تو اعتماد دارد، چون دیده‌اند درست بوده.",
        outcomeEn: "The team trusts your technical judgement because they have seen it be right.",
        months: [12, 24],
        skills: [
          {
            fa: "تسلط عمیق بر دامنهٔ تیم", en: "Deep command of the team's domain",
            kind: "hard",
            whyFa: "نمی‌توانی دربارهٔ چیزی تصمیم بگیری که خودت نساخته‌ای.",
            whyEn: "You cannot make decisions about something you have never built.",
            tracks: ["07-architecture"],
          },
          {
            fa: "طراحی سیستم", en: "System design",
            kind: "hard",
            whyFa: "کار اصلی تک‌لید، تصمیم‌های گران است — همان‌هایی که عوض کردنشان بعداً سخت است.",
            whyEn: "A tech lead's core work is the expensive decisions — the ones that are hard to change later.",
            tracks: ["07-architecture", "08-microservices", "50-ddd"],
          },
          {
            fa: "بازبینی کد در مقیاس", en: "Code review at scale",
            kind: "hard",
            whyFa: "بازبینی تو استاندارد تیم را تعیین می‌کند، چه بخواهی چه نخواهی.",
            whyEn: "Your reviews set the team's standard, whether you intend it or not.",
            tracks: ["28-git", "22-skills"],
          },
        ],
      },
      {
        id: "tl-lead",
        fa: "رهبری بدون اختیار رسمی",
        en: "Leading without authority",
        outcomeFa: "تیم مسیر را می‌فهمد و می‌پذیرد، بدون اینکه لازم باشد دستور بدهی.",
        outcomeEn: "The team understands and accepts the direction without you having to give orders.",
        months: [6, 12],
        skills: [
          {
            fa: "واگذاری کار", en: "Delegation",
            kind: "soft",
            whyFa: "سخت‌ترین مهارت این نقش. اگر کار سخت را همیشه خودت برداری، تیمت رشد نمی‌کند و خودت گلوگاه می‌شوی.",
            whyEn: "The hardest skill in the role. Always taking the hard task yourself stunts the team and makes you the bottleneck.",
          },
          {
            fa: "بازخورد دادن", en: "Giving feedback",
            kind: "soft",
            whyFa: "بازخوردی که به‌موقع و مشخص نباشد، شش ماه بعد به یک ارزیابی تلخ تبدیل می‌شود.",
            whyEn: "Feedback that is not timely and specific becomes a bitter review six months later.",
            tracks: ["22-skills"],
          },
          {
            fa: "مستندسازی تصمیم", en: "Documenting decisions",
            kind: "soft",
            whyFa: "‏ADR بنویس. شش ماه بعد کسی می‌پرسد «چرا این‌طور؟» و آن کس ممکن است خودت باشی.",
            whyEn: "Write ADRs. In six months someone asks “why this way?” and it may be you.",
            tracks: ["64-docs-writing"],
          },
          {
            fa: "تخمین و برنامه‌ریزی", en: "Estimation and planning",
            kind: "soft",
            whyFa: "تخمین بد، اعتماد را از بین می‌برد — بیشتر از تأخیر.",
            whyEn: "A bad estimate destroys trust faster than a delay does.",
            tracks: ["63-scrum-agile"],
          },
          {
            fa: "مدیریت جلسه", en: "Running meetings",
            kind: "soft",
            whyFa: "جلسهٔ بی‌هدف، گران‌ترین چیزی است که یک تیم مصرف می‌کند.",
            whyEn: "An aimless meeting is the most expensive thing a team consumes.",
            tracks: ["65-presentation"],
          },
        ],
      },
      {
        id: "tl-delivery",
        fa: "تحویل",
        en: "Delivery",
        outcomeFa: "تیم پیش‌بینی‌پذیر تحویل می‌دهد و ذی‌نفعان می‌دانند کجای کار است.",
        outcomeEn: "The team delivers predictably and stakeholders know where things stand.",
        months: [6, 12],
        skills: [
          {
            fa: "اسکرام و جریان کار", en: "Scrum and workflow",
            kind: "hard",
            whyFa: "نه به‌عنوان مناسک، به‌عنوان ابزاری برای دیدن گلوگاه.",
            whyEn: "Not as ritual, but as a tool for seeing the bottleneck.",
            tracks: ["63-scrum-agile"],
          },
          {
            fa: "مدیریت بدهی فنی", en: "Managing technical debt",
            kind: "soft",
            whyFa: "باید بتوانی به غیرفنی‌ها توضیح بدهی چرا این هفته سرعت کم است تا ماه بعد کم نباشد.",
            whyEn: "You must explain to non-engineers why this week is slower so next month is not.",
          },
          {
            fa: "ارتباط با ذی‌نفعان", en: "Stakeholder communication",
            kind: "soft",
            whyFa: "خبر بد را زود بده. خبر بدی که دیر برسد، دو برابر بد است.",
            whyEn: "Deliver bad news early. Bad news delivered late is twice as bad.",
            tracks: ["65-presentation"],
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ معمار نرم‌افزار ═══════════════════════════ */
  {
    id: "architect",
    field: "management",
    accent: "#0EA5A5",
    ico: '<path d="M3.4 20h17.2M5.6 20V9.4L12 4.4l6.4 5V20"/><path d="M9.8 20v-5.2h4.4V20"/><path d="M12 2.2v2" stroke-linecap="round"/>',
    after: ["backend"],
    fa: {
      name: "معمار نرم‌افزار",
      role: "Software Architect",
      intro:
        "معمار کسی نیست که دیاگرام می‌کشد؛ کسی است که trade-offها را می‌بیند و صادقانه انتخاب می‌کند. خطر این نقش، دور شدن از کد است: معماری که شش ماه کد ننوشته، تصمیم‌هایی می‌گیرد که پیاده‌سازی‌شان دردناک است و خودش خبر ندارد.",
    },
    en: {
      name: "Software architect",
      role: "Software Architect",
      intro:
        "An architect is not the person who draws diagrams; it is the person who sees the trade-offs and chooses honestly. The hazard of the role is drifting away from code: an architect who has not written any for six months makes decisions that are painful to implement without knowing it.",
    },
    stages: [
      {
        id: "ar-breadth",
        fa: "گستره",
        en: "Breadth",
        outcomeFa: "چند سبک معماری را نه از روی مقاله، که از روی تجربه می‌شناسی.",
        outcomeEn: "You know several architectural styles from experience, not from articles.",
        months: [12, 24],
        skills: [
          {
            fa: "سبک‌های معماری", en: "Architectural styles",
            kind: "hard",
            whyFa: "لایه‌ای، شش‌ضلعی، رویدادمحور — و مهم‌تر، اینکه هرکدام چه هزینه‌ای دارند.",
            whyEn: "Layered, hexagonal, event-driven — and more importantly, what each one costs.",
            tracks: ["07-architecture", "50-ddd"],
          },
          {
            fa: "الگوهای یکپارچه‌سازی", en: "Integration patterns",
            kind: "hard",
            whyFa: "سخت‌ترین بخش هر سیستم بزرگ، درزهای بین اجزاست نه خود اجزا.",
            whyEn: "The hardest part of any large system is the seams between parts, not the parts.",
            tracks: ["08-microservices"],
          },
          {
            fa: "داده در مقیاس", en: "Data at scale",
            kind: "hard",
            whyFa: "رابطه‌ای، سندی، کلید-مقدار، جستجو — انتخاب اشتباه، بعداً گران‌ترین تغییر است.",
            whyEn: "Relational, document, key-value, search — the wrong choice is the most expensive thing to change later.",
            tracks: ["05-sql", "51-mongodb", "19-elasticsearch"],
          },
        ],
      },
      {
        id: "ar-judgement",
        fa: "قضاوت",
        en: "Judgement",
        outcomeFa: "می‌دانی کِی سادگی از انعطاف مهم‌تر است — و اغلب همین‌طور است.",
        outcomeEn: "You know when simplicity beats flexibility — and it usually does.",
        months: [12, 24],
        skills: [
          {
            fa: "تحلیل trade-off", en: "Trade-off analysis",
            kind: "hard",
            whyFa: "هیچ معماری‌ای «بهترین» نیست؛ هرکدام چیزی را به قیمت چیز دیگری می‌دهند.",
            whyEn: "No architecture is “best”; each buys something at the price of something else.",
            tracks: ["07-architecture"],
          },
          {
            fa: "مقاومت در برابر مهندسی بیش از حد", en: "Resisting over-engineering",
            kind: "soft",
            whyFa: "پرتکرارترین اشتباه معمارها: ساختن برای مقیاسی که هرگز نمی‌رسد.",
            whyEn: "The most common architect mistake: building for a scale that never arrives.",
          },
          {
            fa: "مستندسازی معماری", en: "Documenting architecture",
            kind: "soft",
            whyFa: "‏C4 و ADR. تصمیم را ثبت کن، نه فقط نتیجه را.",
            whyEn: "C4 and ADRs. Record the decision, not just the outcome.",
            tracks: ["64-docs-writing"],
          },
          {
            fa: "کد زدن، همچنان", en: "Still writing code",
            kind: "soft",
            whyFa: "معماری که کد نمی‌زند، از واقعیت پیاده‌سازی دور می‌شود و خودش آخرین کسی است که می‌فهمد.",
            whyEn: "An architect who stops coding drifts from implementation reality and is the last to notice.",
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ مدیر مهندسی ═══════════════════════════ */
  {
    id: "engineering-manager",
    field: "management",
    accent: "#DB2777",
    ico: '<circle cx="8.4" cy="8" r="3"/><circle cx="16.6" cy="8" r="2.6" opacity=".7"/><path d="M3 19.4a5.6 5.6 0 0 1 10.8 0M15 12.6a5 5 0 0 1 6 4.6" stroke-linecap="round"/>',
    after: ["tech-lead"],
    fa: {
      name: "مدیر مهندسی",
      role: "Engineering Manager",
      intro:
        "اینجا شغل عوض می‌شود، نه فقط عنوان. کار تو دیگر نرم‌افزار نیست، آدم‌هاست. کسانی که این را نمی‌پذیرند و نیمی از وقتشان را کد می‌زنند، معمولاً هم مدیر بدی می‌شوند هم برنامه‌نویس بدی. اگر کد زدن را دوست داری، مسیر «معمار» صادقانه‌تر است.",
    },
    en: {
      name: "Engineering manager",
      role: "Engineering Manager",
      intro:
        "Here the job changes, not just the title. Your work is no longer software, it is people. Those who refuse to accept it and spend half their time coding usually become both a poor manager and a poor engineer. If you love writing code, the architect path is the more honest one.",
    },
    stages: [
      {
        id: "em-people",
        fa: "آدم‌ها",
        en: "People",
        outcomeFa: "تیمت رشد می‌کند و کسی بی‌صدا ناراضی نمی‌ماند.",
        outcomeEn: "Your team grows and nobody stays quietly unhappy.",
        months: [6, 12],
        skills: [
          {
            fa: "جلسهٔ یک‌به‌یک", en: "One-on-ones",
            kind: "soft",
            whyFa: "مهم‌ترین ابزار این نقش. جایی که مشکل را قبل از استعفا می‌شنوی.",
            whyEn: "The most important tool in the role. Where you hear the problem before the resignation.",
          },
          {
            fa: "استخدام و مصاحبه", en: "Hiring and interviewing",
            kind: "soft",
            whyFa: "یک استخدام بد، یک سال از تیم می‌گیرد.",
            whyEn: "One bad hire costs the team a year.",
            tracks: ["22-skills"],
          },
          {
            fa: "مسیر رشد افراد", en: "Career growth",
            kind: "soft",
            whyFa: "آدم‌ها وقتی می‌مانند که ببینند کجا دارند می‌روند.",
            whyEn: "People stay when they can see where they are going.",
          },
          {
            fa: "گفت‌وگوی سخت", en: "Difficult conversations",
            kind: "soft",
            whyFa: "به تعویق انداختنشان، همیشه گران‌تر از انجام دادنشان است.",
            whyEn: "Postponing them always costs more than having them.",
          },
        ],
      },
      {
        id: "em-system",
        fa: "سیستم تیم",
        en: "The team's system",
        outcomeFa: "تیم بدون تو هم کار می‌کند، چون فرایند سر جایش است.",
        outcomeEn: "The team works without you, because the process holds.",
        months: [6, 12],
        skills: [
          {
            fa: "فرایند تحویل", en: "Delivery process",
            kind: "hard",
            whyFa: "اسکرام یا کانبان مهم نیست؛ اینکه گلوگاه دیده شود مهم است.",
            whyEn: "Scrum or Kanban matters less than whether the bottleneck is visible.",
            tracks: ["63-scrum-agile"],
          },
          {
            fa: "سلامت فنی تیم", en: "Technical health",
            kind: "hard",
            whyFa: "باید بتوانی بدهی فنی را ببینی، حتی وقتی خودت دیگر کد نمی‌زنی.",
            whyEn: "You must still see technical debt even when you no longer write code.",
          },
          {
            fa: "بودجه و اولویت", en: "Budget and priorities",
            kind: "soft",
            whyFa: "«نه» گفتن به کار خوب، برای اینکه کار مهم انجام شود.",
            whyEn: "Saying no to good work so that important work gets done.",
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ CTO ═══════════════════════════ */
  {
    id: "cto",
    field: "management",
    accent: "#7C3AED",
    ico: '<path d="M12 2.6 20.4 7v10L12 21.4 3.6 17V7z"/><path d="M8.4 14.4V9.6l3.6 3.2 3.6-3.2v4.8" stroke-linecap="round" stroke-linejoin="round"/>',
    after: ["engineering-manager", "architect"],
    fa: {
      name: "مدیر ارشد فناوری",
      role: "CTO",
      intro:
        "نقشی که معنایش کاملاً به اندازهٔ شرکت بستگی دارد: در تیم ده‌نفره یعنی کسی که بیشترین کد را می‌زند، در شرکت سیصدنفره یعنی کسی که شاید یک سال است کد نزده. وجه مشترکشان یکی است — تو مسئول این هستی که تصمیم‌های فنی امروز، دو سال دیگر شرکت را زمین نزنند.",
    },
    en: {
      name: "Chief technology officer",
      role: "CTO",
      intro:
        "A role whose meaning depends entirely on company size: in a team of ten it means the person who writes the most code; in a company of three hundred it may mean someone who has not written any for a year. What they share is one thing — you are accountable for today's technical decisions not sinking the company in two years.",
    },
    stages: [
      {
        id: "cto-strategy",
        fa: "راهبرد فنی",
        en: "Technical strategy",
        outcomeFa: "انتخاب‌های فناوری با جهت کسب‌وکار می‌خوانند، نه با علاقهٔ شخصی.",
        outcomeEn: "Technology choices match where the business is going, not personal taste.",
        months: [12, 36],
        skills: [
          {
            fa: "پیوند فناوری و کسب‌وکار", en: "Connecting technology to business",
            kind: "soft",
            whyFa: "باید بتوانی هزینهٔ یک تصمیم فنی را به زبان پول و زمان بگویی.",
            whyEn: "You must be able to state a technical decision's cost in money and time.",
          },
          {
            fa: "‏build در برابر buy", en: "Build versus buy",
            kind: "hard",
            whyFa: "ساختن چیزی که می‌شد خرید، پرتکرارترین اتلاف منابع در شرکت‌های فنی است.",
            whyEn: "Building what could have been bought is the most common waste in technical companies.",
          },
          {
            fa: "مدیریت ریسک فنی", en: "Technical risk",
            kind: "hard",
            whyFa: "امنیت، وابستگی به یک فروشنده، و دانشی که فقط در سر یک نفر است.",
            whyEn: "Security, vendor lock-in, and knowledge that lives in one person's head.",
          },
        ],
      },
      {
        id: "cto-org",
        fa: "سازمان",
        en: "Organisation",
        outcomeFa: "ساختار تیم‌ها با معماری سیستم می‌خواند و هر دو با هم رشد می‌کنند.",
        outcomeEn: "Team structure matches system architecture and both scale together.",
        months: [12, 36],
        skills: [
          {
            fa: "قانون کانوی در عمل", en: "Conway's law in practice",
            kind: "hard",
            whyFa: "معماری سیستم تو، شکل نمودار سازمانی‌ات را می‌گیرد — چه بخواهی چه نخواهی.",
            whyEn: "Your system architecture takes the shape of your org chart, whether you want it or not.",
            tracks: ["08-microservices"],
          },
          {
            fa: "ساختن رهبر", en: "Growing leaders",
            kind: "soft",
            whyFa: "‏CTO‌ای که همه‌چیز از او بپرسند، گلوگاه است نه رهبر.",
            whyEn: "A CTO everyone must ask is a bottleneck, not a leader.",
          },
          {
            fa: "ارتباط با هیئت‌مدیره", en: "Communicating with the board",
            kind: "soft",
            whyFa: "مخاطبی که جزئیات فنی نمی‌خواهد، ولی باید به قضاوت تو اعتماد کند.",
            whyEn: "An audience that does not want technical detail but must trust your judgement.",
            tracks: ["65-presentation"],
          },
        ],
      },
    ],
  },
];
