/* ============================================================================
   رودمپ مهندسی برق (۱): پایهٔ مشترک، قدرت، الکترونیک

   ترتیب مرحله‌ها از برنامهٔ درسی کارشناسی برق می‌آید — همان درس‌هایی که
   در دانشگاه‌ها پیش‌نیاز هم‌اند — به‌اضافهٔ ابزار و مهارتی که بازار کار
   می‌خواهد و در کلاس کمتر گفته می‌شود. زمان‌ها برای کسی است که هفته‌ای
   ۱۰ تا ۱۵ ساعت می‌گذارد؛ دانشجوی تمام‌وقت سریع‌تر جلو می‌رود.
   ========================================================================== */
import type { Roadmap } from "./types";

export const EE_ROADMAPS: Roadmap[] = [
  /* ═══════════════════════════ پایهٔ مشترک برق ═══════════════════════════ */
  {
    id: "ee-foundations",
    field: "ee",
    accent: "#CA8A04",
    ico: '<path d="M13.2 2.8 4.8 13.6h6.4l-.8 7.6 8.8-11.2h-6.4z" stroke-linejoin="round"/>',
    next: ["ee-power", "ee-electronics", "ee-telecom", "ee-control", "ee-bioelectric"],
    fa: {
      name: "پایهٔ مشترک مهندسی برق",
      role: "Electrical Engineering Core",
      intro:
        "همهٔ گرایش‌های برق — قدرت، الکترونیک، مخابرات، کنترل و بیوالکتریک — روی یک پایهٔ مشترک ساخته می‌شوند: ریاضیات، فیزیک، مدار، الکترونیک، سیگنال و سیستم. این پایه همان چیزی است که مهندس برق را از تکنسین جدا می‌کند: تکنسین می‌داند چه کند، مهندس می‌داند چرا. این رودمپ همان مسیر دو سال اول دانشگاه است، به‌اضافهٔ مهارت‌های عملی‌ای که کلاس کمتر یاد می‌دهد.",
    },
    en: {
      name: "Electrical engineering core",
      role: "Electrical Engineering Core",
      intro:
        "Every branch of electrical engineering — power, electronics, telecoms, control and biomedical — is built on one shared foundation: mathematics, physics, circuits, electronics, signals and systems. That foundation is what separates an engineer from a technician: the technician knows what to do, the engineer knows why. This roadmap follows the first two years of a degree, plus the practical skills classes rarely teach.",
    },
    stages: [
      {
        id: "eef-math",
        fa: "ریاضیات مهندسی",
        en: "Engineering mathematics",
        outcomeFa: "معادلهٔ دیفرانسیل یک مدار را می‌نویسی، با لاپلاس حلش می‌کنی و دستگاه معادلات خطی را با ماتریس حل می‌کنی.",
        outcomeEn: "You write a circuit's differential equation, solve it with Laplace, and solve linear systems with matrices.",
        months: [6, 10],
        skills: [
          {
            fa: "ریاضی عمومی ۱ و ۲", en: "Calculus I and II", kind: "hard",
            whyFa: "زبان همهٔ درس‌های بعدی؛ بدون مشتق و انتگرال، مدار و الکترومغناطیس فقط فرمول حفظی است.",
            whyEn: "The language of every later course; without derivatives and integrals, circuits and electromagnetics are just memorised formulas.",
            items: ["Limits & derivatives", "Integrals", "Series & Taylor expansion", "Multivariable calculus", "Vector calculus: grad, div, curl"],
          },
          {
            fa: "معادلات دیفرانسیل", en: "Differential equations", kind: "hard",
            whyFa: "هر مدار با خازن و سلف یک معادلهٔ دیفرانسیل است؛ تبدیل لاپلاس حلش را جبری می‌کند.",
            whyEn: "Every circuit with capacitors and inductors is a differential equation; the Laplace transform makes solving it algebraic.",
            items: ["First-order ODEs", "Linear ODEs with constant coefficients", "Laplace transform", "Systems of ODEs"],
          },
          {
            fa: "جبر خطی", en: "Linear algebra", kind: "hard",
            whyFa: "تحلیل گره‌ای مدار، فضای حالت در کنترل و پخش بار در قدرت، همه دستگاه‌های خطی‌اند.",
            whyEn: "Nodal circuit analysis, state space in control and load flow in power are all linear systems.",
            items: ["Matrices & determinants", "Eigenvalues & eigenvectors", "Vector spaces", "Matrix decompositions"],
          },
          {
            fa: "ریاضی مهندسی", en: "Engineering mathematics", kind: "hard",
            whyFa: "سری و تبدیل فوریه و متغیر مختلط، پایهٔ تحلیل سیگنال، موج و میدان‌اند.",
            whyEn: "Fourier series and transforms and complex variables underpin the analysis of signals, waves and fields.",
            items: ["Complex numbers & functions", "Fourier series & transform", "Partial differential equations", "Residue theorem"],
          },
          {
            fa: "آمار و احتمال مهندسی", en: "Probability and statistics", kind: "hard",
            whyFa: "نویز، خطای اندازه‌گیری و قابلیت اطمینان همه آماری‌اند؛ مخابرات بدون احتمال ممکن نیست.",
            whyEn: "Noise, measurement error and reliability are all statistical; telecoms is impossible without probability.",
            items: ["Random variables", "Distributions", "Expectation & variance", "Random processes basics"],
          },
          {
            fa: "محاسبات عددی", en: "Numerical methods", kind: "hard",
            whyFa: "بیشتر مسئله‌های واقعی جواب بسته ندارند؛ هر شبیه‌سازی دقیقاً همین روش‌ها را اجرا می‌کند.",
            whyEn: "Most real problems have no closed-form answer; every simulator runs exactly these methods.",
            items: ["Root finding", "Numerical integration", "Solving linear systems", "Runge–Kutta"],
          },
        ],
      },
      {
        id: "eef-phys",
        fa: "فیزیک و الکترومغناطیس",
        en: "Physics and electromagnetics",
        outcomeFa: "میدان الکتریکی و مغناطیسی را تصور و محاسبه می‌کنی و می‌فهمی موج و قطعهٔ نیمه‌هادی از درون چه می‌کنند.",
        outcomeEn: "You picture and calculate electric and magnetic fields and understand what waves and semiconductor devices do inside.",
        months: [3, 6],
        skills: [
          {
            fa: "فیزیک ۱ و ۲", en: "Physics I and II", kind: "hard",
            whyFa: "برق شاخه‌ای از فیزیک است؛ قانون فارادی پشت هر ژنراتور و ترانسفورماتوری نشسته است.",
            whyEn: "Electrical engineering is a branch of physics; Faraday's law sits behind every generator and transformer.",
            items: ["Mechanics", "Electric field & potential", "Magnetic field", "Faraday's law", "Waves"],
          },
          {
            fa: "الکترومغناطیس", en: "Electromagnetics", kind: "hard",
            whyFa: "پایهٔ آنتن، ماشین الکتریکی، سازگاری الکترومغناطیسی و هر چیزی که «میدان» دارد.",
            whyEn: "The foundation of antennas, electrical machines, electromagnetic compatibility and anything with a “field”.",
            items: ["Maxwell's equations", "Electrostatics & magnetostatics", "Boundary conditions", "Plane waves", "Transmission lines"],
            tracks: ["27-wireless"],
          },
          {
            fa: "فیزیک نیمه‌هادی", en: "Semiconductor physics", kind: "hard",
            whyFa: "تا ندانی دیود و ترانزیستور از درون چه می‌کنند، مدل‌های الکترونیک فقط جعبهٔ سیاه‌اند.",
            whyEn: "Until you know what diodes and transistors do inside, electronics models are just black boxes.",
            items: ["Energy bands", "Doping", "PN junction", "MOS structure"],
          },
        ],
      },
      {
        id: "eef-circuits",
        fa: "مدارهای الکتریکی",
        en: "Electric circuits",
        outcomeFa: "هر مدار خطی — DC، گذرا یا AC، تک‌فاز یا سه‌فاز — را تحلیل و شبیه‌سازی می‌کنی.",
        outcomeEn: "You analyse and simulate any linear circuit — DC, transient or AC, single- or three-phase.",
        months: [4, 8],
        skills: [
          {
            fa: "قوانین و روش‌های تحلیل", en: "Laws and analysis methods", kind: "hard",
            whyFa: "مهم‌ترین درس پایه؛ هر گرایشی بروی، مدار ۱ و ۲ را هر روز به کار می‌بری.",
            whyEn: "The single most important foundation course; whichever branch you choose, you use circuits I and II every day.",
            items: ["Ohm's & Kirchhoff's laws", "Nodal & mesh analysis", "Thevenin & Norton", "Superposition", "Maximum power transfer"],
            tracks: ["24-hardware"],
          },
          {
            fa: "تحلیل گذرا", en: "Transient analysis", kind: "hard",
            whyFa: "لحظهٔ روشن و خاموش شدن، جایی است که قطعه‌ها می‌سوزند؛ پاسخ گذرا را باید پیش‌بینی کنی.",
            whyEn: "Switching on and off is where parts burn out; you must predict the transient response.",
            items: ["RC, RL, RLC circuits", "Initial conditions", "Step & impulse response", "Laplace-domain analysis"],
          },
          {
            fa: "تحلیل AC", en: "AC analysis", kind: "hard",
            whyFa: "شبکهٔ برق سینوسی است؛ فازور و توان راکتیو زبان روزمرهٔ مهندس قدرت و الکترونیک است.",
            whyEn: "The grid is sinusoidal; phasors and reactive power are the everyday language of power and electronics engineers.",
            items: ["Phasors", "Impedance", "Active, reactive & apparent power", "Power factor", "Resonance"],
          },
          {
            fa: "دوقطبی‌ها و سه‌فاز", en: "Two-ports and three-phase", kind: "hard",
            whyFa: "انتقال و توزیع انرژی سه‌فاز است؛ و هر تقویت‌کننده و فیلتری را می‌شود دوقطبی دید.",
            whyEn: "Energy is transmitted and distributed in three phases; and any amplifier or filter can be viewed as a two-port.",
            items: ["Two-port parameters", "Three-phase circuits", "Star & delta", "Mutual inductance"],
          },
          {
            fa: "شبیه‌سازی مدار", en: "Circuit simulation", kind: "hard",
            whyFa: "پیش از بستن مدار، شبیه‌سازی‌اش کن؛ ارزان‌تر، سریع‌تر و بدون دود.",
            whyEn: "Simulate before you build; cheaper, faster and smoke-free.",
            items: ["LTspice", "PSpice / Multisim", "MATLAB / Simulink", "Python: NumPy, SciPy"],
            tracks: ["12-python"],
          },
        ],
      },
      {
        id: "eef-electronics",
        fa: "الکترونیک و مدار منطقی",
        en: "Electronics and digital logic",
        outcomeFa: "تقویت‌کنندهٔ ترانزیستوری و مدار با آپ‌امپ طراحی می‌کنی و مدار ترتیبی دیجیتال می‌سازی.",
        outcomeEn: "You design transistor amplifiers and op-amp circuits and build sequential digital circuits.",
        months: [4, 8],
        skills: [
          {
            fa: "الکترونیک ۱", en: "Electronics I", kind: "hard",
            whyFa: "بایاس کردن ترانزیستور و مدل سیگنال کوچک، پایهٔ هر مدار الکترونیکی است.",
            whyEn: "Transistor biasing and small-signal models are the basis of every electronic circuit.",
            items: ["Diodes & rectifiers", "BJT & MOSFET biasing", "Small-signal models", "Single-stage amplifiers"],
          },
          {
            fa: "الکترونیک ۲", en: "Electronics II", kind: "hard",
            whyFa: "فیدبک و پاسخ فرکانسی توضیح می‌دهند چرا مدار روی کاغذ کار می‌کند ولی روی بُرد نوسان می‌کند.",
            whyEn: "Feedback and frequency response explain why a circuit works on paper but oscillates on the board.",
            items: ["Multistage & differential amplifiers", "Frequency response", "Feedback", "Op-amps", "Oscillators"],
          },
          {
            fa: "مدار منطقی", en: "Digital logic", kind: "hard",
            whyFa: "پایهٔ هر پردازنده، FPGA و میکروکنترلر؛ ماشین حالت را اینجا یاد می‌گیری و همه‌جا به کار می‌بری.",
            whyEn: "The basis of every processor, FPGA and microcontroller; you learn state machines here and use them everywhere.",
            items: ["Boolean algebra", "Combinational circuits", "Flip-flops & sequential circuits", "Finite state machines", "Karnaugh maps"],
          },
          {
            fa: "ریزپردازنده", en: "Microprocessors", kind: "hard",
            whyFa: "دری به دنیای سیستم‌های تعبیه‌شده؛ امروز تقریباً هر دستگاهی یک میکروکنترلر دارد.",
            whyEn: "A door into embedded systems; almost every device today has a microcontroller inside.",
            items: ["Computer organisation", "Assembly basics", "Peripherals", "Interrupts"],
            tracks: ["43-c"],
          },
        ],
      },
      {
        id: "eef-systems",
        fa: "سیگنال، سیستم، کنترل و انرژی",
        en: "Signals, systems, control and energy",
        outcomeFa: "سیستم خطی را در حوزهٔ زمان و فرکانس تحلیل می‌کنی و ماشین‌ها و شبکهٔ قدرت را در سطح پایه می‌شناسی.",
        outcomeEn: "You analyse linear systems in time and frequency, and know machines and the power grid at a foundational level.",
        months: [4, 8],
        skills: [
          {
            fa: "سیگنال‌ها و سیستم‌ها", en: "Signals and systems", kind: "hard",
            whyFa: "زبان مشترک مخابرات، کنترل، پردازش سیگنال و حتی قدرت.",
            whyEn: "The common language of telecoms, control, signal processing and even power.",
            items: ["LTI systems", "Convolution", "Fourier, Laplace & Z transforms", "Sampling theorem", "Filters"],
          },
          {
            fa: "سیستم‌های کنترل خطی", en: "Linear control systems", kind: "hard",
            whyFa: "هر چیزی که خودش را تنظیم می‌کند — از ترموستات تا پهپاد — یک حلقهٔ کنترل است.",
            whyEn: "Anything that regulates itself — from a thermostat to a drone — is a control loop.",
            items: ["Transfer functions", "Routh–Hurwitz stability", "Root locus", "Bode & Nyquist", "PID"],
          },
          {
            fa: "ماشین‌های الکتریکی", en: "Electrical machines", kind: "hard",
            whyFa: "حدود نیمی از برق دنیا را موتورها مصرف می‌کنند؛ و هر نیروگاهی یک ژنراتور است.",
            whyEn: "Motors consume roughly half the world's electricity; and every power station is a generator.",
            items: ["Transformers", "DC machines", "Induction motors", "Synchronous machines"],
          },
          {
            fa: "بررسی سیستم‌های قدرت", en: "Power systems analysis", kind: "hard",
            whyFa: "حتی اگر گرایش قدرت نروی، باید بدانی برق از نیروگاه تا پریز چه مسیری را طی می‌کند.",
            whyEn: "Even outside power engineering, you should know the path electricity takes from station to socket.",
            items: ["Per-unit system", "Transmission line models", "Load flow basics", "Fault calculations"],
          },
        ],
      },
      {
        id: "eef-practice",
        fa: "مهارت‌های عملی و حرفه‌ای",
        en: "Practical and professional skills",
        outcomeFa: "در آزمایشگاه راحتی، برنامه می‌نویسی، گزارش فنی خوب می‌نویسی و گرایشت را آگاهانه انتخاب می‌کنی.",
        outcomeEn: "You are at ease in the lab, can program, write good technical reports and choose your branch deliberately.",
        months: [2, 4],
        skills: [
          {
            fa: "کار آزمایشگاهی", en: "Lab skills", kind: "hard",
            whyFa: "مهندسی که اسیلوسکوپ را درست نمی‌شناسد، هر اندازه‌گیری را اشتباه می‌خواند.",
            whyEn: "An engineer who does not know the oscilloscope reads every measurement wrong.",
            items: ["Multimeter", "Oscilloscope & probes", "Function generator", "Breadboarding & soldering", "Lab safety"],
            tracks: ["24-hardware"],
          },
          {
            fa: "برنامه‌نویسی", en: "Programming", kind: "hard",
            whyFa: "مهندس برق امروز بدون برنامه‌نویسی کم می‌آورد: از firmware تا تحلیل داده و خودکارسازی آزمایش.",
            whyEn: "Today's electrical engineer falls short without programming: from firmware to data analysis and test automation.",
            items: ["C", "Python", "MATLAB", "Git"],
            tracks: ["43-c", "12-python", "28-git"],
          },
          {
            fa: "استاندارد و ایمنی", en: "Standards and safety", kind: "hard",
            whyFa: "در برق، اشتباه فقط باگ نیست؛ آتش‌سوزی یا برق‌گرفتگی است.",
            whyEn: "In electrical work, a mistake is not just a bug; it is a fire or an electric shock.",
            items: ["IEC & IEEE standards", "Electrical safety", "Earthing basics"],
          },
          {
            fa: "نوشتن فنی", en: "Technical writing", kind: "soft",
            whyFa: "گزارش آزمایش، پایان‌نامه و مستند پروژه، کار تو را برای دیگران قابل اعتماد می‌کند.",
            whyEn: "Lab reports, theses and project documents make your work trustworthy to others.",
            items: ["Lab reports", "Thesis writing", "Reading papers", "LaTeX"],
            tracks: ["64-docs-writing"],
          },
          {
            fa: "انگلیسی فنی", en: "Technical English", kind: "soft",
            whyFa: "دیتاشیت، استاندارد و مقاله همه انگلیسی‌اند؛ خواندن روانشان سرعت یادگیری را چند برابر می‌کند.",
            whyEn: "Datasheets, standards and papers are all in English; reading them fluently multiplies your learning speed.",
            items: ["Datasheets & papers", "Emails", "Presentations"],
            tracks: ["65-presentation"],
          },
          {
            fa: "انتخاب گرایش", en: "Choosing a branch", kind: "soft",
            whyFa: "گرایش را با علاقه و بازار کار انتخاب کن، نه با رتبه؛ پیش از انتخاب، در هر کدام یک پروژهٔ کوچک انجام بده.",
            whyEn: "Choose a branch by interest and job market, not by exam rank; do a small project in each before you decide.",
            items: ["Power", "Electronics", "Telecommunications", "Control", "Bioelectric"],
          },
        ],
      },
    ],
  },

  /* ════════════════════════════════ قدرت ════════════════════════════════ */
  {
    id: "ee-power",
    field: "ee",
    accent: "#D97706",
    ico: '<path d="M12 2.8 7.4 21.2M12 2.8l4.6 18.4M8.5 16.6h7M9.5 12.4h5M4.2 7.4h15.6" stroke-linecap="round" stroke-linejoin="round"/>',
    after: ["ee-foundations"],
    next: ["ee-control", "ee-electronics"],
    fa: {
      name: "مهندسی برق — قدرت",
      role: "Power Systems Engineer",
      intro:
        "مهندسی قدرت دربارهٔ تولید، انتقال، توزیع و مصرف انرژی الکتریکی است — شبکه‌ای که اگر یک ثانیه بخوابد، شهر می‌خوابد. امروز این رشته با انرژی‌های تجدیدپذیر، شبکهٔ هوشمند و الکترونیک قدرت دوباره داغ شده است. این رودمپ از تحلیل سیستم قدرت و ماشین‌ها تا حفاظت، تجدیدپذیرها، ابزارهای شبیه‌سازی و طراحی تأسیسات برقی ساختمان پیش می‌رود.",
    },
    en: {
      name: "Electrical engineering — power",
      role: "Power Systems Engineer",
      intro:
        "Power engineering is about generating, transmitting, distributing and using electrical energy — a network where one second of failure puts a city in the dark. Renewables, smart grids and power electronics have made the field hot again. This roadmap goes from power-system analysis and machines to protection, renewables, simulation tools and building electrical design.",
    },
    stages: [
      {
        id: "pw-analysis",
        fa: "تحلیل سیستم قدرت",
        en: "Power system analysis",
        outcomeFa: "شبکه را مدل می‌کنی، پخش بار و اتصال کوتاه را حساب می‌کنی و پایداری را می‌سنجی.",
        outcomeEn: "You model the grid, calculate load flow and short circuits and assess stability.",
        months: [3, 6],
        skills: [
          {
            fa: "مدل‌سازی سیستم قدرت", en: "Power system modelling", kind: "hard",
            whyFa: "سیستم پریونیت محاسبهٔ شبکه‌ای با ده سطح ولتاژ را به یک مسئلهٔ یکدست تبدیل می‌کند.",
            whyEn: "The per-unit system turns a network with ten voltage levels into one uniform problem.",
            items: ["Per-unit system", "Line, transformer & generator models", "Admittance matrix (Ybus)", "Single-line diagrams"],
          },
          {
            fa: "پخش بار", en: "Load flow", kind: "hard",
            whyFa: "پرکاربردترین مطالعهٔ شبکه؛ هر توسعه و هر خط جدید اول با آن سنجیده می‌شود.",
            whyEn: "The most used grid study; every expansion and every new line is checked with it first.",
            items: ["Gauss–Seidel", "Newton–Raphson", "Fast decoupled", "PV / PQ / slack buses", "Voltage control"],
          },
          {
            fa: "اتصال کوتاه", en: "Fault analysis", kind: "hard",
            whyFa: "سطح اتصال کوتاه تعیین می‌کند کلید و کابل چقدر باید تحمل کنند؛ اشتباهش یعنی انفجار تجهیز.",
            whyEn: "Short-circuit levels set what breakers and cables must withstand; getting them wrong means exploding equipment.",
            items: ["Symmetrical components", "Balanced & unbalanced faults", "Short-circuit levels", "IEC 60909"],
          },
          {
            fa: "پایداری", en: "Stability", kind: "hard",
            whyFa: "خاموشی‌های سراسری معمولاً با از دست رفتن پایداری شروع می‌شوند، نه با یک خرابی بزرگ.",
            whyEn: "Wide-area blackouts usually start with a loss of stability, not one big failure.",
            items: ["Rotor angle stability", "Swing equation", "Equal area criterion", "Voltage & frequency stability"],
          },
          {
            fa: "بهره‌برداری و بازار برق", en: "Operation and electricity markets", kind: "hard", level: "opt",
            whyFa: "برق کالایی است که باید هر لحظه تولید و مصرفش برابر باشد؛ بهره‌برداری اقتصادی همین تعادل را ارزان نگه می‌دارد.",
            whyEn: "Electricity must be produced exactly as it is consumed, every moment; economic operation keeps that balance cheap.",
            items: ["Economic dispatch", "Unit commitment", "Optimal power flow", "Electricity markets"],
          },
        ],
      },
      {
        id: "pw-machines",
        fa: "ماشین‌ها و الکترونیک قدرت",
        en: "Machines and power electronics",
        outcomeFa: "ترانسفورماتور و موتور را آزمایش و مدل می‌کنی و مبدل الکترونیک قدرت و درایو را می‌فهمی.",
        outcomeEn: "You test and model transformers and motors and understand power converters and drives.",
        months: [3, 6],
        skills: [
          {
            fa: "ترانسفورماتور", en: "Transformers", kind: "hard",
            whyFa: "گران‌ترین و حیاتی‌ترین تجهیز پست؛ آزمون بی‌باری و اتصال کوتاه مدارش را می‌دهد.",
            whyEn: "The most expensive and critical piece of a substation; open- and short-circuit tests give its equivalent circuit.",
            items: ["Equivalent circuit", "Open & short-circuit tests", "Three-phase connections", "Tap changers"],
          },
          {
            fa: "ماشین‌های گردان", en: "Rotating machines", kind: "hard",
            whyFa: "موتور القایی اسب کاری صنعت است و ژنراتور سنکرون قلب نیروگاه.",
            whyEn: "The induction motor is industry's workhorse and the synchronous generator the heart of every power station.",
            items: ["Induction motors", "Synchronous generators", "DC machines", "Starting & speed control"],
          },
          {
            fa: "الکترونیک قدرت", en: "Power electronics", kind: "hard",
            whyFa: "هر پنل خورشیدی، توربین بادی، خودروی برقی و درایو موتور، یک مبدل الکترونیک قدرت است.",
            whyEn: "Every solar panel, wind turbine, electric car and motor drive is a power-electronic converter.",
            items: ["Rectifiers", "DC-DC converters (buck, boost)", "Inverters & PWM", "IGBT, SiC & GaN"],
          },
          {
            fa: "درایوهای الکتریکی", en: "Electric drives", kind: "hard",
            whyFa: "درایو سرعت متغیر مصرف انرژی پمپ و فن را تا چند ده درصد کم می‌کند.",
            whyEn: "Variable-speed drives cut the energy use of pumps and fans by tens of percent.",
            items: ["V/f control", "Field-oriented control", "Variable frequency drives"],
          },
        ],
      },
      {
        id: "pw-protection",
        fa: "حفاظت، پست و فشار قوی",
        en: "Protection, substations and high voltage",
        outcomeFa: "رله‌ها را هماهنگ می‌کنی، طرح پست را می‌خوانی و سیستم زمین را طراحی می‌کنی.",
        outcomeEn: "You coordinate relays, read substation layouts and design earthing systems.",
        months: [2, 4],
        skills: [
          {
            fa: "رله و حفاظت", en: "Protection relaying", kind: "hard",
            whyFa: "حفاظت خوب فقط بخش خراب را جدا می‌کند؛ حفاظت بد، کل منطقه را خاموش می‌کند.",
            whyEn: "Good protection isolates only the faulty section; bad protection blacks out the whole area.",
            items: ["Overcurrent relays", "Distance protection", "Differential protection", "Coordination & selectivity", "CTs & VTs"],
          },
          {
            fa: "پست و کلیدخانه", en: "Substations and switchgear", kind: "hard",
            whyFa: "پست جایی است که همهٔ دانش قدرت — ولتاژ، حفاظت، کنترل — در یک محوطه کنار هم می‌نشیند.",
            whyEn: "The substation is where all of power engineering — voltage, protection, control — sits in one yard.",
            items: ["Circuit breakers", "Substation layouts", "Busbar schemes", "GIS vs AIS"],
          },
          {
            fa: "فشار قوی", en: "High-voltage engineering", kind: "hard",
            whyFa: "صاعقه و اضافه‌ولتاژ کلیدزنی عایق را می‌شکنند؛ هماهنگی عایقی جلوی این را می‌گیرد.",
            whyEn: "Lightning and switching overvoltages break insulation; insulation coordination prevents it.",
            items: ["Insulation", "Overvoltages & lightning", "Surge arresters", "Insulation coordination"],
          },
          {
            fa: "سیستم زمین", en: "Earthing", kind: "hard",
            whyFa: "زمین درست جان آدم‌ها را نجات می‌دهد؛ ولتاژ گام و تماس را باید حساب کنی، نه حدس بزنی.",
            whyEn: "Correct earthing saves lives; step and touch voltages must be calculated, not guessed.",
            items: ["TN, TT & IT systems", "Step & touch voltage", "Earth resistance measurement"],
          },
        ],
      },
      {
        id: "pw-dist",
        fa: "توزیع و تأسیسات برقی",
        en: "Distribution and building installations",
        outcomeFa: "شبکهٔ توزیع را تحلیل می‌کنی و تأسیسات برقی یک ساختمان را مطابق مقررات طراحی می‌کنی.",
        outcomeEn: "You analyse distribution networks and design a building's electrical installation to code.",
        months: [2, 4],
        skills: [
          {
            fa: "شبکهٔ توزیع", en: "Distribution networks", kind: "hard",
            whyFa: "بیشتر خاموشی‌هایی که مردم می‌بینند در شبکهٔ توزیع است، نه انتقال.",
            whyEn: "Most outages people actually experience happen in distribution, not transmission.",
            items: ["Radial vs ring networks", "Voltage drop", "Losses", "Reactive power compensation", "SAIDI & SAIFI"],
          },
          {
            fa: "طراحی تأسیسات برقی ساختمان", en: "Building electrical design", kind: "hard",
            whyFa: "یکی از بزرگ‌ترین بازارهای کار فارغ‌التحصیلان قدرت؛ از برآورد بار تا انتخاب کابل و طراحی روشنایی.",
            whyEn: "One of the largest job markets for power graduates; from load estimation to cable sizing and lighting design.",
            items: ["Load estimation", "Cable sizing", "Lighting design (DIALux)", "Distribution boards", "مبحث ۱۳ مقررات ملی ساختمان"],
          },
          {
            fa: "پروانهٔ نظام مهندسی", en: "Engineering licence", kind: "hard", level: "opt",
            whyFa: "برای امضای نقشهٔ طراحی یا نظارت تأسیسات برقی ساختمان، پروانهٔ نظام مهندسی لازم است.",
            whyEn: "Signing off building electrical designs or supervision requires a professional engineering licence.",
            items: ["طراحی / نظارت / اجرا", "آزمون ورود به حرفه", "مبحث ۱۳ مقررات ملی ساختمان"],
          },
          {
            fa: "کیفیت توان", en: "Power quality", kind: "hard",
            whyFa: "بارهای الکترونیکی هارمونیک می‌سازند که ترانسفورماتور را داغ و تجهیز حساس را خراب می‌کند.",
            whyEn: "Electronic loads create harmonics that overheat transformers and damage sensitive equipment.",
            items: ["Harmonics & THD", "Voltage sags & flicker", "IEEE 519", "Harmonic filters"],
          },
        ],
      },
      {
        id: "pw-renew",
        fa: "تجدیدپذیرها و شبکهٔ هوشمند",
        en: "Renewables and smart grids",
        outcomeFa: "یک نیروگاه خورشیدی کوچک طراحی می‌کنی و می‌دانی ذخیره‌ساز و اتوماسیون چطور به شبکه اضافه می‌شوند.",
        outcomeEn: "You design a small solar plant and know how storage and automation are added to the grid.",
        months: [2, 4],
        skills: [
          {
            fa: "انرژی خورشیدی", en: "Solar PV", kind: "hard",
            whyFa: "سریع‌ترین بخش در حال رشد صنعت برق؛ از پشت‌بام خانه تا نیروگاه چندمگاواتی.",
            whyEn: "The fastest-growing part of the power industry; from home rooftops to multi-megawatt plants.",
            items: ["PV cells & modules", "MPPT", "Grid-tied vs off-grid", "PVsyst", "Inverter sizing"],
          },
          {
            fa: "انرژی باد", en: "Wind power", kind: "hard", level: "alt",
            whyFa: "توربین بادی ترکیب ماشین الکتریکی، الکترونیک قدرت و کنترل است.",
            whyEn: "A wind turbine combines an electrical machine, power electronics and control.",
            items: ["Turbine types", "DFIG & PMSG", "Power curves"],
          },
          {
            fa: "ذخیره‌سازی انرژی", en: "Energy storage", kind: "hard",
            whyFa: "خورشید شب نمی‌تابد؛ بدون ذخیره‌ساز، تجدیدپذیر سهم محدودی از شبکه می‌گیرد.",
            whyEn: "The sun does not shine at night; without storage, renewables can only take a limited share of the grid.",
            items: ["Battery chemistries", "Battery management systems", "Grid-scale storage", "EV charging"],
          },
          {
            fa: "شبکهٔ هوشمند و اتوماسیون", en: "Smart grid and automation", kind: "hard",
            whyFa: "شبکهٔ امروز داده تولید می‌کند؛ مهندس قدرت باید اسکادا، پروتکل پست و تحلیل داده را بشناسد.",
            whyEn: "Today's grid produces data; power engineers need SCADA, substation protocols and data analysis.",
            items: ["SCADA", "IEC 61850", "Smart meters (AMI)", "Microgrids", "Demand response"],
          },
        ],
      },
      {
        id: "pw-tools",
        fa: "ابزار و نرم‌افزار",
        en: "Tools and software",
        outcomeFa: "با ابزارهای صنعتی مطالعهٔ شبکه انجام می‌دهی و نقشهٔ برقی استاندارد می‌کشی.",
        outcomeEn: "You run grid studies in industrial tools and draw standard electrical drawings.",
        months: [1, 3],
        skills: [
          {
            fa: "نرم‌افزار شبیه‌سازی شبکه", en: "Grid simulation software", kind: "hard", level: "alt",
            whyFa: "شرکت‌های برق و مهندسان مشاور با همین‌ها کار می‌کنند و آگهی‌های شغلی اسمشان را می‌آورند.",
            whyEn: "Utilities and consulting engineers work with these, and job adverts name them.",
            items: ["DIgSILENT PowerFactory", "ETAP", "PSS/E", "PSCAD / EMTP"],
          },
          {
            fa: "MATLAB و Simulink", en: "MATLAB and Simulink", kind: "hard",
            whyFa: "برای شبیه‌سازی مبدل‌ها، کنترل و مطالعه‌های پژوهشی ابزار استاندارد دانشگاه و صنعت است.",
            whyEn: "The standard academic and industrial tool for simulating converters, control and research studies.",
            items: ["Simscape Electrical", "Converter control", "Scripted studies"],
          },
          {
            fa: "پایتون برای قدرت", en: "Python for power", kind: "hard", level: "opt",
            whyFa: "تحلیل دادهٔ کنتورها و مطالعه‌های تکراری با اسکریپت، ساعت‌ها کار دستی را حذف می‌کند.",
            whyEn: "Analysing meter data and scripting repetitive studies removes hours of manual work.",
            items: ["pandapower", "PyPSA", "Load profile analysis"],
            tracks: ["12-python"],
          },
          {
            fa: "نقشه‌کشی برق", en: "Electrical drafting", kind: "hard",
            whyFa: "نقشهٔ تک‌خطی و سیم‌کشی، زبان مشترک طراح، پیمانکار و ناظر است.",
            whyEn: "Single-line and wiring diagrams are the shared language of designer, contractor and supervisor.",
            items: ["AutoCAD", "Single-line & wiring diagrams", "Revit MEP (BIM)"],
          },
        ],
      },
      {
        id: "pw-career",
        fa: "حرفه",
        en: "The profession",
        outcomeFa: "در کارگاه و پروژهٔ واقعی کار می‌کنی، با کارفرما و پیمانکار روشن حرف می‌زنی و مسیر شغلی‌ات را می‌شناسی.",
        outcomeEn: "You work on real sites and projects, talk clearly with clients and contractors and know your career options.",
        months: [1, 2],
        skills: [
          {
            fa: "استاندارد و دستورالعمل", en: "Standards and regulations", kind: "hard",
            whyFa: "طراحی قدرت بدون استاندارد تأیید نمی‌شود؛ IEC و IEEE و دستورالعمل‌های شرکت برق زبان رسمی کارند.",
            whyEn: "Power designs are not approved without standards; IEC, IEEE and utility regulations are the official language of the job.",
            items: ["IEC", "IEEE", "دستورالعمل‌های توانیر"],
          },
          {
            fa: "کار در کارگاه", en: "Site work", kind: "soft",
            whyFa: "در کارگاه، فرهنگ ایمنی از دانش فنی مهم‌تر است؛ قفل و برچسب (LOTO) را هیچ‌وقت دور نزن.",
            whyEn: "On site, safety culture matters more than technical knowledge; never bypass lockout/tagout (LOTO).",
            items: ["Site supervision", "Commissioning", "Lockout / tagout"],
          },
          {
            fa: "ارتباط با ذی‌نفعان", en: "Working with stakeholders", kind: "soft",
            whyFa: "کارفرما، پیمانکار و شرکت برق هر کدام زبان خودشان را دارند؛ گزارش فنی روشن اختلاف را کم می‌کند.",
            whyEn: "Clients, contractors and utilities each speak their own language; a clear technical report reduces disputes.",
            items: ["Clients", "Contractors", "Utilities", "Technical reports"],
            tracks: ["64-docs-writing"],
          },
          {
            fa: "مسیرهای شغلی", en: "Career paths", kind: "soft",
            whyFa: "شرکت برق، مهندس مشاور، پیمانکار EPC، استارتاپ انرژی یا ادامهٔ تحصیل — هر کدام مهارت متفاوتی می‌خواهد.",
            whyEn: "Utility, consulting engineer, EPC contractor, energy start-up or graduate study — each needs different skills.",
            items: ["Utilities", "Consulting engineers", "EPC contractors", "Energy start-ups", "Graduate study"],
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════ الکترونیک ═══════════════════════════════ */
  {
    id: "ee-electronics",
    field: "ee",
    accent: "#059669",
    ico: '<path d="M6.2 4.5v15L19 12z" stroke-linejoin="round"/><path d="M2.6 9h3.6M2.6 15h3.6M19 12h2.4M8.6 9h2M9.6 8v2M8.6 15h2" stroke-linecap="round"/>',
    after: ["ee-foundations"],
    next: ["embedded", "ce-architecture"],
    fa: {
      name: "مهندسی برق — الکترونیک",
      role: "Electronics Engineer",
      intro:
        "الکترونیک یعنی طراحی مدارهایی که هر دستگاه هوشمندی را زنده می‌کنند — از تقویت‌کنندهٔ صوتی تا تراشه‌ای با میلیاردها ترانزیستور. این گرایش چند شاخهٔ بزرگ دارد: مدار آنالوگ، دیجیتال و FPGA، طراحی بُرد (PCB)، طراحی مدار مجتمع (VLSI) و RF. این رودمپ مسیر مشترک را می‌گوید و بعد هر شاخه را باز می‌کند.",
    },
    en: {
      name: "Electrical engineering — electronics",
      role: "Electronics Engineer",
      intro:
        "Electronics means designing the circuits that bring every smart device to life — from an audio amplifier to a chip with billions of transistors. The field has several big branches: analogue circuits, digital and FPGA, board design (PCB), integrated-circuit design (VLSI) and RF. This roadmap gives the shared path and then opens each branch.",
    },
    stages: [
      {
        id: "el-analog",
        fa: "مدارهای آنالوگ",
        en: "Analogue circuits",
        outcomeFa: "تقویت‌کننده، فیلتر فعال و منبع تغذیهٔ خطی طراحی می‌کنی و پایداری‌شان را تضمین می‌کنی.",
        outcomeEn: "You design amplifiers, active filters and linear supplies and guarantee their stability.",
        months: [3, 6],
        skills: [
          {
            fa: "طراحی در سطح ترانزیستور", en: "Transistor-level design", kind: "hard",
            whyFa: "آینهٔ جریان و زوج تفاضلی آجرهای هر مدار آنالوگ‌اند، از آپ‌امپ تا مبدل داده.",
            whyEn: "Current mirrors and differential pairs are the bricks of every analogue circuit, from op-amps to data converters.",
            items: ["BJT & MOSFET models", "Current mirrors", "Differential pairs", "Cascode", "Biasing"],
          },
          {
            fa: "مدارهای آپ‌امپ", en: "Op-amp circuits", kind: "hard",
            whyFa: "با چند آپ‌امپ و مقاومت، تقریباً هر پردازش آنالوگی را می‌سازی — به شرط پایداری.",
            whyEn: "With a few op-amps and resistors you can build almost any analogue processing — as long as it is stable.",
            items: ["Inverting / non-inverting", "Active filters", "Instrumentation amplifiers", "Stability & compensation"],
          },
          {
            fa: "نویز و فیدبک", en: "Noise and feedback", kind: "hard",
            whyFa: "در مدار حساس، نویز است که مرز دقت را تعیین می‌کند، نه بهره.",
            whyEn: "In sensitive circuits it is noise, not gain, that sets the limit of precision.",
            items: ["Noise sources", "SNR", "Negative feedback", "Phase margin"],
          },
          {
            fa: "بلوک‌های آنالوگ", en: "Analogue building blocks", kind: "hard",
            whyFa: "مرجع ولتاژ، رگولاتور و PLL در هر سیستمی هستند؛ ADC پل بین دنیای آنالوگ و دیجیتال است.",
            whyEn: "Voltage references, regulators and PLLs are in every system; the ADC is the bridge between analogue and digital.",
            items: ["Voltage references", "LDO regulators", "Oscillators & PLLs", "ADC & DAC basics"],
          },
        ],
      },
      {
        id: "el-digital",
        fa: "دیجیتال و FPGA",
        en: "Digital design and FPGA",
        outcomeFa: "مدار دیجیتال را با HDL توصیف می‌کنی، روی FPGA پیاده می‌کنی و قیدهای زمانی را برآورده می‌کنی.",
        outcomeEn: "You describe digital circuits in an HDL, implement them on an FPGA and meet timing constraints.",
        months: [3, 6],
        skills: [
          {
            fa: "زبان توصیف سخت‌افزار", en: "Hardware description languages", kind: "hard",
            whyFa: "HDL برنامه‌نویسی نیست؛ داری سخت‌افزار موازی توصیف می‌کنی. این تغییر ذهنیت سخت‌ترین قدم است.",
            whyEn: "An HDL is not programming; you are describing parallel hardware. That mental shift is the hardest step.",
            items: ["Verilog", "VHDL", "SystemVerilog", "RTL design", "Testbenches"],
          },
          {
            fa: "جریان کار FPGA", en: "The FPGA flow", kind: "hard",
            whyFa: "کدی که شبیه‌سازی می‌شود لزوماً با فرکانس هدف کار نمی‌کند؛ تحلیل زمانی ایستا این را از قبل می‌گوید.",
            whyEn: "Code that simulates does not necessarily run at the target clock; static timing analysis tells you beforehand.",
            items: ["Vivado / Quartus", "Synthesis & implementation", "Timing constraints (XDC / SDC)", "Static timing analysis", "IP cores"],
          },
          {
            fa: "طراحی دیجیتال در عمل", en: "Digital design in practice", kind: "hard",
            whyFa: "عبور سیگنال بین دو حوزهٔ کلاک، منشأ باگ‌هایی است که فقط گاهی و فقط روی سخت‌افزار واقعی ظاهر می‌شوند.",
            whyEn: "Signals crossing between clock domains cause bugs that only appear sometimes, and only on real hardware.",
            items: ["Clock domain crossing", "Metastability", "FSM design", "Pipelining", "Reset strategies"],
          },
          {
            fa: "سنتز سطح بالا و SoC", en: "High-level synthesis and SoC", kind: "hard", level: "opt",
            whyFa: "برای شتاب‌دهنده‌های سخت‌افزاری و تراشه‌هایی که پردازنده و FPGA را کنار هم دارند.",
            whyEn: "For hardware accelerators and chips that pair a processor with FPGA fabric.",
            items: ["Vitis HLS", "Hardware accelerators", "Zynq SoC"],
          },
        ],
      },
      {
        id: "el-pcb",
        fa: "طراحی بُرد (PCB)",
        en: "Board design (PCB)",
        outcomeFa: "شماتیک و بُرد چندلایه طراحی می‌کنی که بار اول ساخته شود و کار کند.",
        outcomeEn: "You design schematics and multilayer boards that are manufactured and work first time.",
        months: [2, 4],
        skills: [
          {
            fa: "شماتیک و چیدمان", en: "Schematic and layout", kind: "hard",
            whyFa: "مدار خوب با بُرد بد کار نمی‌کند؛ چیدمان خودش بخشی از طراحی مدار است.",
            whyEn: "A good circuit on a bad board does not work; layout is part of the circuit design.",
            items: ["Altium Designer", "KiCad", "Footprints & libraries", "Bill of materials"],
            tracks: ["24-hardware"],
          },
          {
            fa: "یکپارچگی سیگنال و توان", en: "Signal and power integrity", kind: "hard",
            whyFa: "در فرکانس بالا، مسیر برگشت جریان به اندازهٔ مسیر رفت مهم است؛ خازن دکوپلینگ جایش را باید بداند.",
            whyEn: "At high frequency the return current path matters as much as the outgoing one; decoupling capacitors must be placed with care.",
            items: ["Stack-up", "Impedance control", "Decoupling", "Return paths", "High-speed routing"],
          },
          {
            fa: "سازگاری الکترومغناطیسی", en: "Electromagnetic compatibility", kind: "hard",
            whyFa: "محصولی که از آزمون EMC رد شود، به بازار نمی‌رسد؛ دوباره‌کاری در این مرحله بسیار گران است.",
            whyEn: "A product that fails EMC testing does not reach the market; redesign at that stage is very expensive.",
            items: ["EMI sources", "Grounding & shielding", "Pre-compliance testing"],
          },
          {
            fa: "ساخت و مونتاژ", en: "Manufacturing and assembly", kind: "hard",
            whyFa: "طراحی که قابل ساخت نباشد، طراحی نیست؛ قاعده‌های کارخانه را از اول رعایت کن.",
            whyEn: "A design that cannot be manufactured is not a design; follow the fab's rules from the start.",
            items: ["Gerber files", "DFM / DFA", "SMD soldering", "Working with PCB fabs"],
          },
        ],
      },
      {
        id: "el-vlsi",
        fa: "طراحی مدار مجتمع (VLSI)",
        en: "Integrated circuit design (VLSI)",
        outcomeFa: "جریان کامل طراحی تراشه — از RTL یا ترانزیستور تا چیدمان و درستی‌سنجی — را می‌شناسی و در یک شاخه‌اش عمیق می‌شوی.",
        outcomeEn: "You know the full chip flow — from RTL or transistor to layout and verification — and go deep in one branch of it.",
        months: [4, 8],
        skills: [
          {
            fa: "مبانی CMOS", en: "CMOS fundamentals", kind: "hard",
            whyFa: "هر تراشهٔ دیجیتال امروز از CMOS ساخته شده؛ توان دینامیک و نشتی مرز طراحی را تعیین می‌کنند.",
            whyEn: "Every digital chip today is CMOS; dynamic and leakage power set the limits of design.",
            items: ["CMOS inverter", "Transistor-level gates", "Dynamic & leakage power", "Process nodes"],
          },
          {
            fa: "طراحی آنالوگ مجتمع", en: "Analogue IC design", kind: "hard", level: "alt",
            whyFa: "کمیاب‌ترین و پردرآمدترین مهارت این حوزه؛ هر تراشه‌ای بالاخره با دنیای آنالوگ حرف می‌زند.",
            whyEn: "The rarest and best-paid skill in the field; every chip eventually talks to the analogue world.",
            items: ["Cadence Virtuoso", "Spectre simulation", "Layout & matching", "DRC / LVS"],
          },
          {
            fa: "جریان طراحی دیجیتال مجتمع", en: "Digital IC flow", kind: "hard", level: "alt",
            whyFa: "از RTL تا چیدمان نهایی با ابزارهای خودکار؛ هر مرحله قید زمانی و توان خودش را دارد.",
            whyEn: "From RTL to final layout with automated tools; each step has its own timing and power constraints.",
            items: ["Synthesis (Design Compiler / Genus)", "Place & route (Innovus)", "Static timing (PrimeTime)", "Low-power design"],
          },
          {
            fa: "درستی‌سنجی", en: "Verification", kind: "hard", level: "alt",
            whyFa: "در شرکت‌های تراشه معمولاً مهندس درستی‌سنجی از طراح بیشتر است؛ باگی که به سیلیکون برسد میلیون‌ها هزینه دارد.",
            whyEn: "Chip companies usually employ more verification engineers than designers; a bug that reaches silicon costs millions.",
            items: ["UVM", "Coverage", "SystemVerilog assertions", "Formal verification"],
          },
          {
            fa: "سیلیکون متن‌باز", en: "Open-source silicon", kind: "hard", level: "opt",
            whyFa: "راهی برای یادگیری تا ساخت تراشهٔ واقعی، بدون مجوزهای گران ابزارهای تجاری.",
            whyEn: "A way to learn all the way to a real chip, without expensive commercial tool licences.",
            items: ["OpenROAD", "SkyWater PDK", "Tiny Tapeout", "RISC-V cores"],
          },
        ],
      },
      {
        id: "el-rf",
        fa: "RF و فرکانس بالا",
        en: "RF and high frequency",
        outcomeFa: "خط انتقال و تطبیق امپدانس را طراحی می‌کنی و بلوک‌های گیرنده و فرستندهٔ رادیویی را می‌شناسی.",
        outcomeEn: "You design transmission lines and impedance matching and know the blocks of radio transmitters and receivers.",
        months: [2, 4],
        skills: [
          {
            fa: "مبانی RF", en: "RF fundamentals", kind: "hard",
            whyFa: "در فرکانس بالا سیم دیگر سیم نیست، خط انتقال است؛ نمودار اسمیت ابزار روزمرهٔ این دنیاست.",
            whyEn: "At high frequency a wire is no longer a wire but a transmission line; the Smith chart is this world's everyday tool.",
            items: ["Transmission lines", "Smith chart", "S-parameters", "Impedance matching"],
            tracks: ["27-wireless"],
          },
          {
            fa: "مدارهای RF", en: "RF circuits", kind: "hard",
            whyFa: "هر گوشی چند گیرنده و فرستنده دارد؛ LNA و تقویت‌کنندهٔ توان قلب آن‌ها هستند.",
            whyEn: "Every phone has several transceivers; the LNA and power amplifier are at their heart.",
            items: ["LNA", "Mixers", "Power amplifiers", "RF filters"],
          },
          {
            fa: "ابزار و اندازه‌گیری RF", en: "RF tools and measurement", kind: "hard",
            whyFa: "در RF، شبیه‌سازی و اندازه‌گیری دست در دست هم‌اند؛ تحلیلگر شبکه و طیف چشم تو هستند.",
            whyEn: "In RF, simulation and measurement go hand in hand; network and spectrum analysers are your eyes.",
            items: ["Keysight ADS", "Vector network analyser", "Spectrum analyser"],
          },
        ],
      },
      {
        id: "el-instr",
        fa: "اندازه‌گیری، سنسور و تعبیه‌شده",
        en: "Measurement, sensors and embedded",
        outcomeFa: "سنسور را با مدار واسط درست به میکروکنترلر وصل می‌کنی و داده‌اش را قابل اعتماد می‌خوانی.",
        outcomeEn: "You connect sensors to a microcontroller through proper conditioning and read reliable data.",
        months: [1, 3],
        skills: [
          {
            fa: "سنسور و آماده‌سازی سیگنال", en: "Sensors and signal conditioning", kind: "hard",
            whyFa: "دادهٔ خوب از سنسور خوب شروع می‌شود و با فیلتر ضدالیاسینگ و ایزولاسیون درست به ADC می‌رسد.",
            whyEn: "Good data starts with a good sensor and reaches the ADC through proper anti-aliasing and isolation.",
            items: ["Temperature, pressure & current sensors", "Bridge circuits", "Anti-aliasing filters", "Isolation"],
          },
          {
            fa: "تجهیزات آزمون", en: "Test equipment", kind: "hard",
            whyFa: "پراب اشتباه یعنی دیدن سیگنالی که وجود ندارد؛ ابزار را باید مثل مدار بشناسی.",
            whyEn: "The wrong probe shows you signals that are not there; know your instruments as well as your circuits.",
            items: ["Oscilloscope probing", "Logic analyser", "Bench power supplies", "LabVIEW"],
          },
          {
            fa: "پیوند با سیستم تعبیه‌شده", en: "The embedded connection", kind: "hard",
            whyFa: "امروز تقریباً هر مدار الکترونیکی یک میکروکنترلر دارد؛ مهندس الکترونیک باید firmware ساده بنویسد.",
            whyEn: "Almost every electronic circuit now has a microcontroller; an electronics engineer should write simple firmware.",
            items: ["Microcontrollers", "Firmware in C", "I2C, SPI, UART, CAN"],
            tracks: ["43-c", "24-hardware"],
          },
        ],
      },
      {
        id: "el-career",
        fa: "حرفه",
        en: "The profession",
        outcomeFa: "خرابی را روشمند پیدا می‌کنی، مستندات قطعه را سریع می‌خوانی و مسیر شغلی‌ات را انتخاب می‌کنی.",
        outcomeEn: "You find faults methodically, read component documentation quickly and choose your career path.",
        months: [1, 2],
        skills: [
          {
            fa: "دیتاشیت و یادداشت کاربردی", en: "Datasheets and application notes", kind: "hard",
            whyFa: "سازندهٔ قطعه مدار پیشنهادی و تله‌ها را در یادداشت کاربردی نوشته؛ نخواندنش یعنی تکرار اشتباه دیگران.",
            whyEn: "The manufacturer wrote the recommended circuit and the traps into the application note; skipping it means repeating others' mistakes.",
            items: ["Absolute maximum ratings", "Typical application circuits", "Errata"],
          },
          {
            fa: "ذهن عیب‌یاب", en: "A debugging mindset", kind: "soft",
            whyFa: "عیب‌یابی سخت‌افزار علم است نه شانس: فرضیه، اندازه‌گیری، نتیجه — و دفترچه‌ای که همه را ثبت کند.",
            whyEn: "Hardware debugging is science, not luck: hypothesis, measurement, conclusion — and a notebook that records it all.",
            items: ["Divide and conquer", "Hypothesis → measurement", "Lab notebook"],
          },
          {
            fa: "مسیرهای شغلی", en: "Career paths", kind: "soft",
            whyFa: "طراحی بُرد، طراحی تراشه، صنایع مخابرات و دفاعی، اینترنت اشیا یا پژوهش — هر کدام شاخهٔ متفاوتی از این رودمپ را می‌خواهد.",
            whyEn: "Board design, chip design, telecom and defence industries, IoT or research — each needs a different branch of this roadmap.",
            items: ["Board design companies", "Chip design", "Telecom & defence", "IoT start-ups", "Graduate study"],
          },
        ],
      },
    ],
  },
];
