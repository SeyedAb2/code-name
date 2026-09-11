/* ============================================================================
   رودمپ‌های سخت‌افزار و مهندسی برق
   ========================================================================== */
import type { Roadmap } from "./roadmaps.types";

export const HARDWARE_ROADMAPS: Roadmap[] = [
  /* ═══════════════════════════ تعبیه‌شده ═══════════════════════════ */
  {
    id: "embedded",
    field: "hardware",
    accent: "#0F766E",
    ico: '<rect x="6.4" y="6.4" width="11.2" height="11.2" rx="2"/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx=".8"/><path d="M9.6 6.4V3.6M14.4 6.4V3.6M9.6 20.4v-2.8M14.4 20.4v-2.8M6.4 9.6H3.6M6.4 14.4H3.6M20.4 9.6h-2.8M20.4 14.4h-2.8" stroke-linecap="round"/>',
    fa: {
      name: "مهندس سیستم‌های تعبیه‌شده",
      role: "Embedded Engineer",
      intro:
        "جایی که نرم‌افزار به سخت‌افزار می‌رسد. اینجا هیچ سیستم‌عاملی نیست که حواسش به تو باشد: حافظه محدود است، خطا یعنی دستگاه قفل می‌شود، و اشکال‌زدایی گاهی با اسیلوسکوپ انجام می‌شود نه با breakpoint. در عوض، چیزی که می‌سازی را می‌توانی در دست بگیری.",
    },
    en: {
      name: "Embedded systems engineer",
      role: "Embedded Engineer",
      intro:
        "Where software meets hardware. There is no operating system watching over you here: memory is finite, a fault means the device locks up, and debugging sometimes happens with an oscilloscope rather than a breakpoint. In return, you can hold what you built.",
    },
    stages: [
      {
        id: "em-electronics",
        fa: "الکترونیک پایه",
        en: "Electronics fundamentals",
        outcomeFa: "می‌توانی مدار ساده‌ای را بخوانی، ببندی و با مولتی‌متر عیب‌یابی کنی.",
        outcomeEn: "You can read, build and debug a simple circuit with a multimeter.",
        months: [2, 4],
        skills: [
          {
            fa: "قانون اهم، ولتاژ، جریان", en: "Ohm's law, voltage, current",
            kind: "hard",
            whyFa: "بدون این، هر مدار یک جعبهٔ سیاه است و هر خرابی یک معما.",
            whyEn: "Without it every circuit is a black box and every failure a mystery.",
          },
          {
            fa: "قطعات: مقاومت، خازن، ترانزیستور، دیود", en: "Components: resistors, capacitors, transistors, diodes",
            kind: "hard",
            whyFa: "هر مدار پیچیده‌ای ترکیبی از همین چند قطعه است.",
            whyEn: "Every complex circuit is a combination of these few parts.",
            tracks: ["24-hardware"],
          },
          {
            fa: "خواندن شماتیک و دیتاشیت", en: "Reading schematics and datasheets",
            kind: "hard",
            whyFa: "دیتاشیت جواب نود درصد سؤال‌هاست، به شرطی که بلد باشی بخوانی‌اش.",
            whyEn: "The datasheet answers ninety percent of questions, if you can read one.",
          },
          {
            fa: "ابزار: مولتی‌متر و اسیلوسکوپ", en: "Tools: multimeter and oscilloscope",
            kind: "hard",
            whyFa: "در سخت‌افزار، `console.log` وجود ندارد. این‌ها چشم تو هستند.",
            whyEn: "In hardware there is no console.log. These are your eyes.",
          },
        ],
      },
      {
        id: "em-micro",
        fa: "میکروکنترلر",
        en: "Microcontrollers",
        outcomeFa: "برنامه‌ای می‌نویسی که روی بُرد اجرا شود و با دنیای بیرون کار کند.",
        outcomeEn: "You write firmware that runs on a board and talks to the outside world.",
        months: [3, 6],
        skills: [
          {
            fa: "زبان C", en: "The C language",
            kind: "hard",
            whyFa: "زبان بی‌رقیب این حوزه. اشاره‌گر و مدیریت حافظه اینجا اختیاری نیست.",
            whyEn: "The unrivalled language here. Pointers and memory management are not optional.",
            tracks: ["43-c"],
          },
          {
            fa: "‏GPIO، تایمر، وقفه", en: "GPIO, timers, interrupts",
            kind: "hard",
            whyFa: "وقفه سخت‌ترین مفهوم این مرحله است و منشأ عجیب‌ترین باگ‌ها.",
            whyEn: "Interrupts are the hardest concept here and the source of the strangest bugs.",
          },
          {
            fa: "پروتکل‌ها: UART، I2C، SPI", en: "Protocols: UART, I2C, SPI",
            kind: "hard",
            whyFa: "هر حسگر و نمایشگری با یکی از این‌ها حرف می‌زند.",
            whyEn: "Every sensor and display speaks one of these.",
          },
          {
            fa: "‏RTOS", en: "RTOS",
            kind: "hard",
            whyFa: "وقتی چند کار همزمان لازم شد و حلقهٔ ساده جواب نداد.",
            whyEn: "When you need several things at once and a simple loop stops working.",
          },
        ],
      },
      {
        id: "em-product",
        fa: "از نمونه تا محصول",
        en: "From prototype to product",
        outcomeFa: "چیزی می‌سازی که می‌شود تولیدش کرد، نه فقط روی میز کار کند.",
        outcomeEn: "You build something manufacturable, not just something that works on your desk.",
        months: [6, 12],
        skills: [
          {
            fa: "طراحی PCB", en: "PCB design",
            kind: "hard",
            whyFa: "برد‌بورد برای آزمایش است؛ محصول به بُرد چاپی نیاز دارد.",
            whyEn: "A breadboard is for experiments; a product needs a printed board.",
          },
          {
            fa: "مصرف توان و باتری", en: "Power and battery life",
            kind: "hard",
            whyFa: "در دستگاه باتری‌خور، هر میکروآمپر شمرده می‌شود.",
            whyEn: "In a battery device every microamp counts.",
          },
          {
            fa: "‏IoT و ارتباط بی‌سیم", en: "IoT and wireless",
            kind: "hard",
            whyFa: "‏LoRa، BLE یا NB-IoT — انتخاب بین برد، پهنای باند و عمر باتری.",
            whyEn: "LoRa, BLE or NB-IoT — a choice between range, bandwidth and battery life.",
            tracks: ["27-wireless"],
          },
          {
            fa: "امنیت دستگاه", en: "Device security",
            kind: "hard",
            whyFa: "دستگاهی که در دست کاربر است، در دست مهاجم هم هست.",
            whyEn: "A device in a user's hands is also in an attacker's hands.",
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════ شبکه و مخابرات ═══════════════════════════ */
  {
    id: "network-engineer",
    field: "hardware",
    accent: "#1D4ED8",
    ico: '<circle cx="12" cy="5" r="2.3"/><circle cx="4.8" cy="18" r="2.3"/><circle cx="19.2" cy="18" r="2.3"/><circle cx="12" cy="12" r="2.3"/><path d="M12 7.3v2.4M10.2 13.4 6.4 16.4M13.8 13.4l3.8 3" stroke-linecap="round"/>',
    fa: {
      name: "مهندس شبکه و مخابرات",
      role: "Network Engineer",
      intro:
        "شبکه تنها حوزه‌ای است که در آن «کار نمی‌کند» می‌تواند هفت معنی متفاوت داشته باشد. ارزش یک مهندس شبکهٔ خوب در این است که بداند از کدام لایه شروع کند — و این را فقط با فهمیدن لایه‌ها می‌شود یاد گرفت، نه با حفظ کردن دستور.",
    },
    en: {
      name: "Network engineer",
      role: "Network Engineer",
      intro:
        "Networking is the one field where “it does not work” can mean seven different things. A good network engineer's value is knowing which layer to start from — and that comes only from understanding the layers, not from memorising commands.",
    },
    stages: [
      {
        id: "ne-base",
        fa: "لایه‌ها",
        en: "The layers",
        outcomeFa: "یک مشکل شبکه را لایه‌به‌لایه و منظم عیب‌یابی می‌کنی.",
        outcomeEn: "You debug a network problem layer by layer, methodically.",
        months: [2, 4],
        skills: [
          {
            fa: "مدل OSI و TCP/IP", en: "OSI and TCP/IP",
            kind: "hard",
            whyFa: "چهارچوبی که همهٔ عیب‌یابی‌ها روی آن سوار است.",
            whyEn: "The framework every diagnosis rests on.",
            tracks: ["25-network-foundations"],
          },
          {
            fa: "‏IP، زیرشبکه، مسیریابی", en: "IP, subnets, routing",
            kind: "hard",
            whyFa: "‏subnet را با منطق یاد بگیر نه با حفظ کردن جدول.",
            whyEn: "Learn subnetting by logic, not by memorising a table.",
            tracks: ["25-network-foundations"],
          },
          {
            fa: "تحلیل بسته با Wireshark", en: "Packet analysis with Wireshark",
            kind: "hard",
            whyFa: "تنها راه دیدن چیزی که واقعاً روی سیم می‌رود، نه چیزی که فکر می‌کنی می‌رود.",
            whyEn: "The only way to see what actually goes down the wire, not what you think does.",
            tracks: ["25-network-foundations"],
          },
        ],
      },
      {
        id: "ne-wireless",
        fa: "بی‌سیم",
        en: "Wireless",
        outcomeFa: "می‌دانی چرا سیگنال آنجا ضعیف است و چطور درستش کنی.",
        outcomeEn: "You know why the signal is weak there and how to fix it.",
        months: [3, 6],
        skills: [
          {
            fa: "موج، فرکانس، مدولاسیون", en: "Waves, frequency, modulation",
            kind: "hard",
            whyFa: "فیزیکی که همهٔ محدودیت‌های بی‌سیم از آن می‌آید.",
            whyEn: "The physics every wireless limit comes from.",
            tracks: ["27-wireless"],
          },
          {
            fa: "وای‌فای و طراحی پوشش", en: "Wi-Fi and coverage design",
            kind: "hard",
            whyFa: "تداخل کانال، پرتکرارترین علت «اینترنت کنده» است.",
            whyEn: "Channel interference is the most common cause of “the internet is slow”.",
            tracks: ["27-wireless"],
          },
          {
            fa: "نسل‌های موبایل: ‎2G‎ تا ‎5G‎", en: "Mobile generations: 2G to 5G",
            kind: "hard",
            whyFa: "هر نسل یک محدودیت مشخص را برداشت. دانستنش یعنی فهمیدن ظرفیت واقعی.",
            whyEn: "Each generation removed one specific limit. Knowing which means knowing real capacity.",
            tracks: ["27-wireless"],
          },
        ],
      },
      {
        id: "ne-ops",
        fa: "عملیات",
        en: "Operations",
        outcomeFa: "شبکه‌ای را طراحی، امن و پایش می‌کنی که خودش بماند.",
        outcomeEn: "You design, secure and monitor a network that stays up.",
        months: [4, 10],
        skills: [
          {
            fa: "فایروال و امنیت شبکه", en: "Firewalls and network security",
            kind: "hard",
            whyFa: "قانون بنویس، ولی اول مطمئن شو خودت را بیرون نمی‌اندازی.",
            whyEn: "Write rules, but first make sure you do not lock yourself out.",
            tracks: ["03-linux-network"],
          },
          {
            fa: "‏VPN و تونل", en: "VPNs and tunnels",
            kind: "hard",
            whyFa: "اتصال امن بین دو نقطه — پایهٔ هر شبکهٔ توزیع‌شده.",
            whyEn: "A secure link between two points — the basis of any distributed network.",
            tracks: ["21-proxy-vpn"],
          },
          {
            fa: "پایش و ظرفیت", en: "Monitoring and capacity",
            kind: "hard",
            whyFa: "مشکل را قبل از کاربر ببین، نه بعد از تماس او.",
            whyEn: "See the problem before the user does, not after their call.",
            tracks: ["04-devops"],
          },
          {
            fa: "مستندسازی شبکه", en: "Network documentation",
            kind: "soft",
            whyFa: "شبکه‌ای که فقط در سر یک نفر است، ریسک سازمانی است.",
            whyEn: "A network that exists only in one person's head is an organisational risk.",
            tracks: ["64-docs-writing"],
          },
        ],
      },
    ],
  },
];
