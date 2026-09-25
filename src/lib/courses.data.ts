/* ============================================================================
   دادهٔ مسیرها — ساختهٔ tools/export-manifest.js

   دست نزن. منبع: data/courses.js و data/categories.js
   برای اضافه یا ویرایش کردن فصل، همان‌ها را عوض کن و دوباره بساز:
       npm run manifest
   ========================================================================== */
import type { Track, Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    "id": "roots",
    "ico": "<path d=\"M7 3.2h10M7 20.8h10\" stroke-linecap=\"round\"/><path d=\"M8 3.2v3.1c0 2 1.5 3.6 3.1 4.7.6.4.6 1.6 0 2C9.5 14.1 8 15.7 8 17.7v3.1M16 3.2v3.1c0 2-1.5 3.6-3.1 4.7-.6.4-.6 1.6 0 2 1.6 1.1 3.1 2.7 3.1 4.7v3.1\" stroke-linejoin=\"round\"/>",
    "fa": {
      "name": "بنیان‌ها و تاریخچه",
      "desc": "اینکه هر چیزی از کجا آمد و چه دردی را درمان کرد. اگر تازه‌کاری، از اینجا شروع کن."
    },
    "en": {
      "name": "Foundations & history",
      "desc": "Where each thing came from and which pain it cured. If you are new, start here."
    }
  },
  {
    "id": "basics",
    "ico": "<path d=\"M14.6 4.4a3.9 3.9 0 0 0 5 5l-9.6 9.6a2.4 2.4 0 0 1-3.4-3.4z\"/><path d=\"M6.4 17.6h.02\" stroke-linecap=\"round\"/>",
    "fa": {
      "name": "ابزار روزمره",
      "desc": "ابزارهایی که هر روز، در هر پروژه‌ای، صرف‌نظر از زبان و فریم‌ورک لازمشان داری."
    },
    "en": {
      "name": "Everyday tools",
      "desc": "The tools you need every day, in every project, whatever the language or framework."
    }
  },
  {
    "id": "infra",
    "ico": "<rect x=\"3.4\" y=\"3.4\" width=\"17.2\" height=\"6\" rx=\"1.8\"/><rect x=\"3.4\" y=\"14.6\" width=\"17.2\" height=\"6\" rx=\"1.8\"/><path d=\"M6.8 6.4h.02M6.8 17.6h.02\" stroke-linecap=\"round\"/><path d=\"M16 6.4h2.2M16 17.6h2.2\" stroke-linecap=\"round\" opacity=\".6\"/>",
    "fa": {
      "name": "زیرساخت و عملیات",
      "desc": "بردن کد از لپ‌تاپ به سروری که شب هم بیدار می‌ماند."
    },
    "en": {
      "name": "Infrastructure & operations",
      "desc": "Getting code from your laptop onto a server that stays up overnight."
    }
  },
  {
    "id": "arch",
    "ico": "<path d=\"M12 2.6 21 7.2 12 11.8 3 7.2z\" stroke-linejoin=\"round\"/><path d=\"m3 12 9 4.6 9-4.6\" stroke-linejoin=\"round\"/><path d=\"m3 16.8 9 4.6 9-4.6\" stroke-linejoin=\"round\" opacity=\".55\"/>",
    "fa": {
      "name": "معماری و مهندسی",
      "desc": "تصمیم‌هایی که عوض کردنشان بعداً گران است — و چطور درست بگیری‌شان."
    },
    "en": {
      "name": "Architecture & engineering",
      "desc": "The decisions that are expensive to change later — and how to make them well."
    }
  },
  {
    "id": "backend",
    "ico": "<rect x=\"3\" y=\"4.6\" width=\"18\" height=\"6\" rx=\"1.8\"/><rect x=\"3\" y=\"13.4\" width=\"18\" height=\"6\" rx=\"1.8\"/><path d=\"M6.6 7.6h.02M6.6 16.4h.02\" stroke-linecap=\"round\"/><path d=\"M13 7.6h4.6M13 16.4h4.6\" stroke-linecap=\"round\" opacity=\".55\"/>",
    "fa": {
      "name": "بک‌اند",
      "desc": "زبان‌ها و فریم‌ورک‌های سمت سرور، هرکدام از مقدماتی تا پیشرفته."
    },
    "en": {
      "name": "Backend",
      "desc": "Server-side languages and frameworks, each from beginner to advanced."
    }
  },
  {
    "id": "frontend",
    "ico": "<rect x=\"2.6\" y=\"4\" width=\"18.8\" height=\"13\" rx=\"2.2\"/><path d=\"M8.4 20.4h7.2M12 17v3.4\" stroke-linecap=\"round\"/>",
    "fa": {
      "name": "فرانت‌اند و موبایل",
      "desc": "آنچه کاربر واقعاً می‌بیند و لمس می‌کند."
    },
    "en": {
      "name": "Frontend & mobile",
      "desc": "What the user actually sees and touches."
    }
  },
  {
    "id": "ai",
    "ico": "<rect x=\"6.4\" y=\"6.4\" width=\"11.2\" height=\"11.2\" rx=\"2.4\"/><rect x=\"9.8\" y=\"9.8\" width=\"4.4\" height=\"4.4\" rx=\"1\"/><path d=\"M9.6 6.4V3.8M14.4 6.4V3.8M9.6 20.2v-2.6M14.4 20.2v-2.6M6.4 9.6H3.8M6.4 14.4H3.8M20.2 9.6h-2.6M20.2 14.4h-2.6\" stroke-linecap=\"round\"/>",
    "fa": {
      "name": "هوش مصنوعی",
      "desc": "از یادگیری ماشین تا ساختن محصول با مدل‌های زبانی — با تأکید بر داده و ارزیابی."
    },
    "en": {
      "name": "Artificial intelligence",
      "desc": "From machine learning to building products on language models — with the emphasis on data and evaluation."
    }
  },
  {
    "id": "data",
    "ico": "<ellipse cx=\"12\" cy=\"5.8\" rx=\"7.4\" ry=\"2.9\"/><path d=\"M4.6 5.8v12.4c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V5.8\"/><path d=\"M4.6 12c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9\"/>",
    "fa": {
      "name": "داده و بی‌درنگ",
      "desc": "ذخیره کردن، پیدا کردن و زنده رساندن داده."
    },
    "en": {
      "name": "Data & real-time",
      "desc": "Storing data, finding it, and delivering it live."
    }
  },
  {
    "id": "publish",
    "ico": "<path d=\"M12 2.8 20.4 7v10L12 21.2 3.6 17V7z\"/><path d=\"M3.6 7 12 11.2 20.4 7M12 11.2v10\"/>",
    "fa": {
      "name": "انتشار و توزیع",
      "desc": "از کدی که کار می‌کند تا چیزی که دیگران نصبش می‌کنند."
    },
    "en": {
      "name": "Publishing & distribution",
      "desc": "From code that works to something other people install."
    }
  },
  {
    "id": "projects",
    "ico": "<rect x=\"3.4\" y=\"3.4\" width=\"7.2\" height=\"7.2\" rx=\"1.6\"/><rect x=\"13.4\" y=\"3.4\" width=\"7.2\" height=\"7.2\" rx=\"1.6\"/><rect x=\"3.4\" y=\"13.4\" width=\"7.2\" height=\"7.2\" rx=\"1.6\"/><rect x=\"13.4\" y=\"13.4\" width=\"7.2\" height=\"7.2\" rx=\"1.6\"/>",
    "fa": {
      "name": "پروژه‌های ترکیبی",
      "desc": "سامانه‌های کامل که چند مسیر را به هم وصل می‌کنند. بعد از چند مسیر بیا سراغشان."
    },
    "en": {
      "name": "Integration projects",
      "desc": "Complete systems tying several tracks together. Come here after a few tracks."
    }
  },
  {
    "id": "career",
    "ico": "<path d=\"M3.4 20.6h4.2v-5.2H3.4zM9.9 20.6h4.2V10.2H9.9zM16.4 20.6h4.2V5H16.4z\" stroke-linejoin=\"round\"/><path d=\"M4.6 9.4 9 5l2.8 2.6L17.6 2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".6\"/><path d=\"M14.4 2h3.4v3.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".6\"/>",
    "fa": {
      "name": "مهارت و مسیر شغلی",
      "desc": "آنچه بین یک برنامه‌نویس خوب و یک مهندس نرم‌افزار فرق می‌گذارد."
    },
    "en": {
      "name": "Skills & career",
      "desc": "What separates a good programmer from a software engineer."
    }
  }
];

export const TRACKS: Track[] = [
  {
    "id": "01-docker",
    "dir": "01-docker",
    "accent": "#2496ED",
    "accentDark": null,
    "cat": "infra",
    "ico": "<rect x=\"3\" y=\"10.5\" width=\"4\" height=\"3.6\" rx=\".6\"/><rect x=\"8\" y=\"10.5\" width=\"4\" height=\"3.6\" rx=\".6\"/><rect x=\"13\" y=\"10.5\" width=\"4\" height=\"3.6\" rx=\".6\"/><rect x=\"8\" y=\"6.2\" width=\"4\" height=\"3.6\" rx=\".6\"/><path d=\"M2 15.4c1.6 0 2.4-.5 2.4-.5h14.2c1.6 0 2.9-.6 3.4-1.6-1.2-.6-2.6-.3-2.6-.3s.3-1.6-1.4-2.4c-.9 1-.7 2.7-.7 2.7\" stroke-linecap=\"round\"/><path d=\"M2.6 15.4c.6 2.9 3 4.6 6.4 4.6 4.7 0 8.5-2 10.3-6.2\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "داکر",
      "desc": "از «روی سیستم من کار می‌کرد» تا استقرار واقعی روی سرور: ایمیج، کانتینر، شبکه، دیتا، Compose و امنیت.",
      "intro": "این مسیر یک هدف دارد: بتوانی نرم‌افزارت را طوری بسته‌بندی کنی که روی هر ماشینی دقیقاً همان‌طور اجرا شود که روی لپ‌تاپ خودت اجرا می‌شد — و بعد آن را روی یک سرور واقعی بگذاری و شب راحت بخوابی."
    },
    "en": {
      "name": "Docker",
      "desc": "From “it works on my machine” to a real deployment: images, containers, networking, data, Compose and hardening.",
      "intro": "This track has one goal: to let you package your software so it runs on any machine exactly as it ran on your laptop — and then put it on a real server and sleep at night."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-intro.html",
        "ready": true,
        "ex": 8,
        "mins": 80,
        "fa": {
          "t": "مسئله‌ای که داکر حل می‌کند",
          "d": "درد محیط‌های ناهمگون، و مدل ذهنی درست از image / container / volume."
        },
        "en": {
          "t": "The problem Docker solves",
          "d": "Environment drift, and a correct mental model of image / container / volume."
        },
        "kw": "container image volume registry namespace cgroup vm کانتینر ایمیج لایه",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-install.html",
        "ready": true,
        "ex": 18,
        "mins": 110,
        "fa": {
          "t": "نصب روی ویندوز، لینوکس و WSL2",
          "d": "Engine در برابر Desktop، راه‌اندازی WSL2 و رفع خطاهای رایج نصب."
        },
        "en": {
          "t": "Installing on Windows, Linux and WSL2",
          "d": "Engine vs Desktop, WSL2 setup, and the usual installation failures."
        },
        "kw": "install wsl2 desktop engine systemd نصب",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-run.html",
        "ready": true,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "اجرا، لاگ، exec و پورت",
          "d": "چرخهٔ کامل کار با یک کانتینر زنده: run، ps، logs، exec، stop، rm."
        },
        "en": {
          "t": "Run, logs, exec and ports",
          "d": "The full loop with a live container: run, ps, logs, exec, stop, rm."
        },
        "kw": "run ps logs exec stop rm port publish detach tty",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-dockerfile.html",
        "ready": true,
        "ex": 18,
        "mins": 110,
        "fa": {
          "t": "نوشتن Dockerfile؛ لایه‌ها و کش",
          "d": "هر دستور یک لایه است. ترتیب دستورها یعنی تفاوت بیلد ۲ ثانیه‌ای و ۲ دقیقه‌ای."
        },
        "en": {
          "t": "Writing a Dockerfile; layers and cache",
          "d": "Every instruction is a layer. Order is the difference between a 2-second and a 2-minute build."
        },
        "kw": "dockerfile from run copy cmd entrypoint layer cache dockerignore",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-multistage.html",
        "ready": true,
        "ex": 18,
        "mins": 120,
        "fa": {
          "t": "multi-stage build و کوچک‌کردن ایمیج",
          "d": "جدا کردن محیط build از runtime و سنجش اندازهٔ واقعی artifact."
        },
        "en": {
          "t": "Multi-stage builds and slim images",
          "d": "Separating build from runtime and measuring the real artifact."
        },
        "kw": "multi-stage builder alpine distroless slim size",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-data.html",
        "ready": true,
        "ex": 18,
        "mins": 120,
        "fa": {
          "t": "داده: volume، bind mount و پشتیبان‌گیری",
          "d": "writable layer، named volume، bind mount و backup را با آزمایش واقعی و یک لَب PostgreSQL از هم جدا کن."
        },
        "en": {
          "t": "Data: volumes, bind mounts, and backups",
          "d": "Compare the writable layer, named volumes, bind mounts, and backups through hands-on experiments and a PostgreSQL lab."
        },
        "kw": "volume bind mount writable layer backup restore postgres data persistence",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-network.html",
        "ready": true,
        "ex": 18,
        "mins": 120,
        "fa": {
          "t": "شبکه: bridge، DNS داخلی و publish",
          "d": "localhost، network مشترک، DNS داخلی و تفاوت traffic داخل Docker با publish روی host را با دو container عیب‌یابی کن."
        },
        "en": {
          "t": "Networking: bridge networks, internal DNS, and port publishing",
          "d": "Diagnose localhost, shared networks, internal DNS, and the difference between Docker traffic and host publishing with two containers."
        },
        "kw": "network bridge dns localhost publish port container name connect disconnect isolation",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-compose.html",
        "ready": true,
        "ex": 18,
        "mins": 140,
        "fa": {
          "t": "Docker Compose: چند سرویس، یک مدل",
          "d": "با ساخت تدریجی compose.yaml، ارتباط web و PostgreSQL، شبکهٔ داخلی، volume ماندگار و عیب‌یابی چرخهٔ عمر آشنا شو."
        },
        "en": {
          "t": "Docker Compose: many services, one model",
          "d": "Build compose.yaml progressively, connect web to PostgreSQL, and investigate internal networking, persistent volumes, and lifecycle failures."
        },
        "kw": "compose yaml services postgres service dns depends_on named volume up down build recreate",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-env-secrets.html",
        "ready": true,
        "ex": 18,
        "mins": 150,
        "fa": {
          "t": "متغیرهای محیطی و secretها",
          "d": "یک image را میان محیط‌ها به‌کار ببر؛ تنظیمات را جدا کن و رمز را از image، Git و خروجی‌های ناامن دور نگه دار."
        },
        "en": {
          "t": "Environment variables and secrets",
          "d": "Reuse one image across environments, separate configuration, and keep credentials out of images, Git, and unsafe output."
        },
        "kw": "env environment secret dotenv config interpolation env_file compose secrets rotation",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-health.html",
        "ready": true,
        "ex": 18,
        "mins": 150,
        "fa": {
          "t": "healthcheck، restart policy و لاگ",
          "d": "فرق زنده‌بودن با آمادگی برنامه؛ بازیابی بعد از crash و پیدا کردن علت از روی log."
        },
        "en": {
          "t": "Healthchecks, restart policies, and logs",
          "d": "Separate process state from application readiness, recover from crashes, and find the cause in logs."
        },
        "kw": "healthcheck starting healthy unhealthy restart unless-stopped logs stdout stderr compose service_healthy",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-registry.html",
        "ready": true,
        "ex": 18,
        "mins": 130,
        "fa": {
          "t": "registry و push",
          "d": "از image محلی تا انتشار در registry؛ نام‌گذاری repository، tag و digest، ورود امن، push، pull و اثبات اجرای image بازیابی‌شده."
        },
        "en": {
          "t": "Registries, repositories, tags, and push",
          "d": "Publish a local image, read registry names and digests, authenticate safely, push and pull, then prove the retrieved image runs."
        },
        "kw": "registry repository namespace tag digest docker hub ghcr login password-stdin push pull layers RepoDigests latest image distribution",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-debug.html",
        "ready": true,
        "ex": 18,
        "mins": 160,
        "fa": {
          "t": "عیب‌یابی: exit code، OOM، پر شدن دیسک",
          "d": "از Exited 137 و خطای no space left تا مدرک، علت و اصلاح؛ بدون حدس یا پاک‌سازی پرخطر."
        },
        "en": {
          "t": "Troubleshooting: exit codes, OOM, and disk exhaustion",
          "d": "Trace exit status, OOM, and storage failures from evidence to a verified repair without destructive guesswork."
        },
        "kw": "exit code 126 127 137 143 oom oomkilled memory disk full enospc df inode docker system df prune log driver",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-security.html",
        "ready": true,
        "ex": 18,
        "mins": 170,
        "fa": {
          "t": "امنیت: non-root، read-only، محدودیت منابع",
          "d": "از کاربر غیرریشه و فایل‌سیستم فقط‌خواندنی تا سقف حافظه، CPU و پردازه؛ هر تغییر با آزمون و مدرک."
        },
        "en": {
          "t": "Container security: non-root, read-only filesystems, and resource limits",
          "d": "Reduce container authority, writable paths, and resource blast radius; verify each control with a working service."
        },
        "kw": "security non-root user uid gid chown read-only readonly rootfs tmpfs volume memory mem_limit cpu cpus pids_limit docker.sock privileged capability Compose",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-deploy.html",
        "ready": true,
        "ex": 18,
        "mins": 180,
        "fa": {
          "t": "استقرار روی VPS",
          "d": "از انتشار image نسخه‌دار تا reverse proxy، بررسی سلامت و rollback؛ با توضیح صادقانهٔ وقفهٔ ممکن."
        },
        "en": {
          "t": "Deploying Docker applications to a VPS",
          "d": "Ship versioned images, route through a reverse proxy, verify health, and roll back; understand single-container downtime."
        },
        "kw": "vps deploy ssh registry caddy tls compose update rollback firewall",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": true,
        "ex": 0,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۱ — یک سرویس، یک ایمیج",
          "d": "یک API کوچک را خودت به image نسخه‌دار تبدیل کن، به registry بفرست و از نو pull و اجرا کن."
        },
        "en": {
          "t": "Project 1 — One service, one image",
          "d": "Build a versioned image for a small API, push it to a registry, then pull and run it from scratch."
        },
        "kw": "project capstone node typescript dockerfile dockerignore multistage non-root healthcheck registry push pull limits",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": true,
        "ex": 0,
        "mins": 240,
        "fa": {
          "t": "پروژهٔ ۲ — اپ + پایگاه‌داده با Compose",
          "d": "دو سرویس، یک شبکهٔ داخلی، والیوم ماندگار، secret فایل‌محور و مدرک ماندگاری داده."
        },
        "en": {
          "t": "Project 2 — Web application + database with Docker Compose",
          "d": "Two services, an internal network, a persistent volume, a file-backed secret, and proof of data persistence."
        },
        "kw": "capstone compose postgres volume secret healthcheck backup",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": true,
        "ex": 0,
        "mins": 480,
        "fa": {
          "t": "پروژهٔ ۳ — استقرار سه‌سرویسه روی سرور واقعی",
          "d": "Caddy، برنامه و PostgreSQL روی VPS؛ backup شبانه، آزمون restore، انتشار blue/green و rollback با شواهد."
        },
        "en": {
          "t": "Project 3 — Deploy a three-service application to a real server",
          "d": "Deploy Caddy, an application, and PostgreSQL to a VPS; prove nightly backup, restore, blue/green release, and rollback."
        },
        "kw": "capstone production vps caddy postgres registry blue green zero downtime backup restore rollback",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 242,
      "minutes": 2745,
      "capstones": 3,
      "ready": 17
    }
  },
  {
    "id": "02-nginx",
    "dir": "02-nginx",
    "accent": "#009639",
    "accentDark": null,
    "cat": "infra",
    "ico": "<path d=\"M12 2.4 20.5 7v10L12 21.6 3.5 17V7z\"/><path d=\"M9 16V9l6 6.4V9\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "انجین‌ایکس",
      "desc": "از سرو کردن یک فایل استاتیک تا gateway کامل: منطق location، reverse proxy، TLS، کش و rate limiting.",
      "intro": "Nginx ساده به نظر می‌رسد تا وقتی اولین location را بنویسی و کار نکند. این مسیر منطق واقعی پیکربندی را باز می‌کند: چه چیزی به چه چیزی می‌رسد، با چه اولویتی، و آن ۵۰۲ از کجا می‌آید."
    },
    "en": {
      "name": "Nginx",
      "desc": "From serving one static file to a full gateway: location matching, reverse proxy, TLS, caching and rate limiting.",
      "intro": "Nginx looks simple until your first location block does not match. This track opens up the real configuration logic: what matches what, in which order, and where that 502 comes from."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-install.html",
        "ready": true,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "نصب و ساختار فایل‌ها",
          "d": "کجا نصب می‌شود و کدام فایل را باید دست بزنی."
        },
        "en": {
          "t": "Installation and file layout",
          "d": "Where it installs and which file you are meant to edit."
        },
        "kw": "nginx install conf.d sites-available",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-syntax.html",
        "ready": true,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "دستور زبان کانفیگ و context‌ها",
          "d": "directive، block، و وراثت بین context‌ها."
        },
        "en": {
          "t": "Config syntax and contexts",
          "d": "Directives, blocks, and inheritance between contexts."
        },
        "kw": "directive context http server location inheritance",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-server-block.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "server block و virtual host",
          "d": "چند سایت روی یک IP و یک پورت."
        },
        "en": {
          "t": "Server blocks and virtual hosts",
          "d": "Many sites on one IP and one port."
        },
        "kw": "server_name virtual host default_server sni",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-location.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "منطق location و اولویت‌ها",
          "d": "پیچیده‌ترین بخش Nginx، با جدول تصمیم."
        },
        "en": {
          "t": "Location matching and priority",
          "d": "The trickiest part of Nginx, with a decision table."
        },
        "kw": "location regex prefix priority try_files",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-static.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "فایل استاتیک، کش مرورگر، فشرده‌سازی",
          "d": "gzip، brotli و هدرهای کش."
        },
        "en": {
          "t": "Static files, browser cache, compression",
          "d": "gzip, brotli and cache headers."
        },
        "kw": "gzip brotli expires cache-control root alias",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-proxy.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "reverse proxy و هدرها",
          "d": "X-Forwarded-For و چیزهایی که اپ پشت پروکسی از دست می‌دهد."
        },
        "en": {
          "t": "Reverse proxy and headers",
          "d": "X-Forwarded-For and what your app loses behind a proxy."
        },
        "kw": "proxy_pass proxy_set_header x-forwarded-for upstream",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-lb.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "load balancing و upstream",
          "d": "round-robin، least_conn، health و sticky session."
        },
        "en": {
          "t": "Load balancing and upstreams",
          "d": "round-robin, least_conn, health checks and sticky sessions."
        },
        "kw": "upstream least_conn ip_hash keepalive",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-tls.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "HTTPS، Let's Encrypt، تمدید خودکار",
          "d": "گواهی واقعی در پنج دقیقه و تمدید بی‌دردسر."
        },
        "en": {
          "t": "HTTPS, Let's Encrypt, auto-renewal",
          "d": "A real certificate in five minutes and painless renewal."
        },
        "kw": "ssl tls certbot letsencrypt hsts redirect",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-ratelimit.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "rate limiting و محافظت",
          "d": "limit_req، limit_conn و محافظت از فرم ورود."
        },
        "en": {
          "t": "Rate limiting and protection",
          "d": "limit_req, limit_conn and protecting a login form."
        },
        "kw": "limit_req limit_conn burst nodelay",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-logs.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "لاگ و آنالیز",
          "d": "فرمت سفارشی، چرخش، و پیدا کردن کندترین مسیر."
        },
        "en": {
          "t": "Logs and analysis",
          "d": "Custom formats, rotation, and finding the slowest route."
        },
        "kw": "access_log error_log log_format logrotate",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-ws-upload.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "WebSocket و آپلود حجیم",
          "d": "هدر Upgrade و client_max_body_size."
        },
        "en": {
          "t": "WebSockets and large uploads",
          "d": "The Upgrade header and client_max_body_size."
        },
        "kw": "websocket upgrade client_max_body_size buffering",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-tuning.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "tuning: worker، buffer، timeout",
          "d": "عددهایی که واقعاً باید عوض شوند و آن‌هایی که نباید."
        },
        "en": {
          "t": "Tuning: workers, buffers, timeouts",
          "d": "The numbers worth changing and the ones that are not."
        },
        "kw": "worker_processes worker_connections buffer timeout sendfile",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عیب‌یابی ۴۰۳/۵۰۲/۵۰۴",
          "d": "هر کد خطا یک علت مشخص دارد."
        },
        "en": {
          "t": "Debugging 403/502/504",
          "d": "Each status code points at a specific cause."
        },
        "kw": "403 502 504 permission upstream timeout selinux",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — یک سایت استاتیک با HTTPS",
          "d": "سرو کردن فایل، فشرده‌سازی، کش و گواهی معتبر."
        },
        "en": {
          "t": "Project 1 — a static site with HTTPS",
          "d": "Serving files, compression, caching and a valid certificate."
        },
        "kw": "capstone static",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۲ — پروکسی جلوی یک اپ",
          "d": "reverse proxy با هدرهای درست، WebSocket و آپلود حجیم."
        },
        "en": {
          "t": "Project 2 — proxying an app",
          "d": "A reverse proxy with correct headers, WebSockets and large uploads."
        },
        "kw": "capstone proxy",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۳ — gateway کامل",
          "d": "سه سرویس پشت یک Nginx با SSL، کش، load balancing و rate limiting."
        },
        "en": {
          "t": "Project 3 — a complete gateway",
          "d": "Three services behind one Nginx with SSL, caching, load balancing and rate limits."
        },
        "kw": "capstone gateway",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1245,
      "capstones": 3,
      "ready": 2
    }
  },
  {
    "id": "03-linux-network",
    "dir": "03-linux-network",
    "accent": "#B45309",
    "accentDark": null,
    "cat": "infra",
    "ico": "<rect x=\"2.5\" y=\"4\" width=\"19\" height=\"16\" rx=\"3\"/><path d=\"m7 10 2.6 2.2L7 14.4M12.4 15h4.4\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "لینوکس برای شبکه",
      "desc": "شل، مجوز، سرویس، فایروال، SSH و عیب‌یابی شبکه — همان چیزی که برای زنده نگه‌داشتن یک سرور لازم است.",
      "intro": "این مسیر قرار نیست تو را مدیر سیستم کند. قرار است وقتی سرورت جواب نمی‌دهد، بدانی کجا را نگاه کنی و با چه دستوری — به‌جای اینکه پیام خطا را کورکورانه جستجو کنی."
    },
    "en": {
      "name": "Linux for networking",
      "desc": "Shell, permissions, services, firewall, SSH and network debugging — what it takes to keep a server alive.",
      "intro": "This track will not make you a sysadmin. It will make sure that when your server stops answering, you know where to look and with which command."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-shell.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "شل و فایل‌سیستم",
          "d": "مسیر، ناوبری، و اینکه هر چیزی فایل است."
        },
        "en": {
          "t": "The shell and the filesystem",
          "d": "Paths, navigation, and everything-is-a-file."
        },
        "kw": "bash ls cd path fhs",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-perms.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کاربر، گروه، مجوز",
          "d": "chmod، chown و اینکه ۷۵۵ یعنی چه."
        },
        "en": {
          "t": "Users, groups, permissions",
          "d": "chmod, chown, and what 755 actually means."
        },
        "kw": "chmod chown umask sudo group",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-systemd.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پردازه و سرویس (systemd)",
          "d": "unit، سرویس خودت، و چرا بالا نمی‌آید."
        },
        "en": {
          "t": "Processes and services (systemd)",
          "d": "Units, your own service, and why it will not start."
        },
        "kw": "systemd systemctl unit service journal",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-packages.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "بسته و ریپازیتوری",
          "d": "apt و dnf بدون خراب کردن سیستم."
        },
        "en": {
          "t": "Packages and repositories",
          "d": "apt and dnf without breaking the system."
        },
        "kw": "apt dnf repository gpg key",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-text.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ابزار متن: grep، awk، sed",
          "d": "استخراج جواب از لاگ در یک خط."
        },
        "en": {
          "t": "Text tools: grep, awk, sed",
          "d": "Pulling answers out of a log in one line."
        },
        "kw": "grep awk sed cut sort uniq pipe",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-bash.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اسکریپت‌نویسی bash",
          "d": "اسکریپتی که وقتی خطا داد، متوقف شود."
        },
        "en": {
          "t": "Bash scripting",
          "d": "Scripts that stop when something goes wrong."
        },
        "kw": "bash set euo pipefail function trap",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-net.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدل شبکه در عمل: ip، route، DNS",
          "d": "آدرس، مسیر، نام — سه لایه‌ای که همیشه یکی‌شان خراب است."
        },
        "en": {
          "t": "Networking in practice: ip, route, DNS",
          "d": "Address, route, name — one of the three is always the problem."
        },
        "kw": "ip route dns resolv netplan",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-netdebug.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "عیب‌یابی: ping، traceroute، ss، tcpdump",
          "d": "از «کار نمی‌کند» تا «این پورت بسته است»."
        },
        "en": {
          "t": "Debugging: ping, traceroute, ss, tcpdump",
          "d": "From “it does not work” to “that port is closed”."
        },
        "kw": "ping traceroute ss netstat tcpdump mtr dig",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-firewall.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فایروال: nftables / ufw",
          "d": "قانون بنویس، خودت را بیرون نیانداز."
        },
        "en": {
          "t": "Firewalls: nftables / ufw",
          "d": "Write rules without locking yourself out."
        },
        "kw": "ufw nftables iptables firewall rule",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-ssh.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "SSH، کلید، tunnel، ssh/config",
          "d": "ورود بی‌رمز، تونل، و پیکربندی تمیز."
        },
        "en": {
          "t": "SSH, keys, tunnels, ssh/config",
          "d": "Passwordless login, tunnels, and a clean config."
        },
        "kw": "ssh key tunnel port forward config agent",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-logs.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "لاگ و journald",
          "d": "journalctl و لاگ‌های ماندگار."
        },
        "en": {
          "t": "Logs and journald",
          "d": "journalctl and persistent logs."
        },
        "kw": "journalctl syslog rsyslog logrotate",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-monitor.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "مانیتورینگ منابع و دیسک",
          "d": "CPU، RAM، I/O و دیسکی که پر شد."
        },
        "en": {
          "t": "Resource and disk monitoring",
          "d": "CPU, RAM, I/O and the disk that filled up."
        },
        "kw": "top htop df du iostat free",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-cron.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "cron و زمان‌بندی",
          "d": "cron و systemd timer، و چرا اجرا نشد."
        },
        "en": {
          "t": "cron and scheduling",
          "d": "cron and systemd timers, and why it did not run."
        },
        "kw": "cron crontab timer at",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-hardening.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سخت‌سازی سرور",
          "d": "حداقل کارهایی که قبل از production باید کرد."
        },
        "en": {
          "t": "Server hardening",
          "d": "The minimum you must do before production."
        },
        "kw": "hardening fail2ban ssh root sysctl",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — کاربر، سرویس، فایروال",
          "d": "یک سرویس کوچک بساز، با کاربر اختصاصی اجرا کن و پورتش را باز کن."
        },
        "en": {
          "t": "Project 1 — user, service, firewall",
          "d": "Build a small service, run it as its own user and open its port."
        },
        "kw": "capstone service",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۲ — اسکریپت پشتیبان‌گیری زمان‌بندی‌شده",
          "d": "اسکریپت مقاوم، لاگ‌گیری، چرخش نسخه‌ها و اجرای شبانه."
        },
        "en": {
          "t": "Project 2 — a scheduled backup script",
          "d": "A resilient script with logging, rotation and a nightly run."
        },
        "kw": "capstone backup cron",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۳ — آماده‌سازی کامل یک VPS تازه",
          "d": "از سرور خام تا سروری سخت‌شده و آمادهٔ production."
        },
        "en": {
          "t": "Project 3 — preparing a fresh VPS",
          "d": "From a raw server to a hardened, production-ready one."
        },
        "kw": "capstone vps hardening",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1345,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "04-devops",
    "dir": "04-devops",
    "accent": "#8B5CF6",
    "accentDark": null,
    "cat": "infra",
    "ico": "<path d=\"M8.2 12c0 2.2-1.5 4-3.3 4S1.5 14.2 1.5 12s1.5-4 3.4-4c2.7 0 4.2 8 6.9 8 1.9 0 3.4-1.8 3.4-4s-1.5-4-3.4-4c-1.3 0-2.4.9-3 2.2\" stroke-linecap=\"round\"/><path d=\"M18 8h4.5M20.2 5.8V10\" stroke-linecap=\"round\" opacity=\".85\"/>",
    "locked": false,
    "fa": {
      "name": "دواپس و CI/CD",
      "desc": "Git، CI/CD، Terraform، Ansible، Prometheus و انتشار بدون قطعی — و postmortem وقتی خراب شد.",
      "intro": "این مسیر دربارهٔ ابزار نیست، دربارهٔ فاصلهٔ بین «کد نوشتم» و «کاربر دارد ازش استفاده می‌کند» است. هر فصل یک تکه از آن فاصله را خودکار می‌کند."
    },
    "en": {
      "name": "DevOps & CI/CD",
      "desc": "Git, CI/CD, Terraform, Ansible, Prometheus and zero-downtime releases — plus the postmortem when it breaks.",
      "intro": "This track is not about tools; it is about the gap between “I wrote the code” and “a user is using it”. Each chapter automates one piece of that gap."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-what.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "DevOps چیست و چه چیزی نیست",
          "d": "نه یک سِمَت، نه یک ابزار."
        },
        "en": {
          "t": "What DevOps is and is not",
          "d": "Not a job title, not a tool."
        },
        "kw": "devops culture sre",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-git.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "Git در عمل: branch، merge، rebase",
          "d": "استراتژی شاخه‌بندی و بیرون آمدن از دردسر."
        },
        "en": {
          "t": "Git in practice: branch, merge, rebase",
          "d": "Branching strategy and getting out of trouble."
        },
        "kw": "git branch merge rebase conflict reflog",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-ci.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "CI: تست خودکار، lint، build",
          "d": "GitHub Actions از صفر."
        },
        "en": {
          "t": "CI: automated tests, lint, build",
          "d": "GitHub Actions from zero."
        },
        "kw": "ci github actions workflow matrix cache",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-cd.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "CD و محیط‌ها",
          "d": "staging، production و تأیید دستی."
        },
        "en": {
          "t": "CD and environments",
          "d": "Staging, production and manual approval."
        },
        "kw": "cd deploy environment approval",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-artifacts.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "ساخت artifact و نسخه‌گذاری",
          "d": "semver و اینکه چه چیزی را باید نگه داشت."
        },
        "en": {
          "t": "Artifacts and versioning",
          "d": "Semver and what is worth keeping."
        },
        "kw": "artifact semver release tag",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-terraform.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "IaC با Terraform",
          "d": "state، plan، apply و اینکه چرا state مقدس است."
        },
        "en": {
          "t": "IaC with Terraform",
          "d": "State, plan, apply — and why state is sacred."
        },
        "kw": "terraform state plan apply module",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-ansible.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Ansible",
          "d": "playbook، inventory و idempotency."
        },
        "en": {
          "t": "Ansible",
          "d": "Playbooks, inventories and idempotency."
        },
        "kw": "ansible playbook inventory role idempotent",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-monitoring.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مانیتورینگ: Prometheus + Grafana",
          "d": "متریک، scrape، و داشبوردی که به درد بخورد."
        },
        "en": {
          "t": "Monitoring: Prometheus + Grafana",
          "d": "Metrics, scraping, and a dashboard worth looking at."
        },
        "kw": "prometheus grafana metrics promql exporter",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-logging.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "لاگ متمرکز",
          "d": "جمع‌آوری، ساختاردهی و جستجو."
        },
        "en": {
          "t": "Centralised logging",
          "d": "Collection, structure and search."
        },
        "kw": "loki elastic fluentbit structured logging",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-alerting.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "alert و on-call",
          "d": "هشداری که نصف شب بیدارت کند باید ارزشش را داشته باشد."
        },
        "en": {
          "t": "Alerting and on-call",
          "d": "An alert that wakes you at 3am had better be worth it."
        },
        "kw": "alert alertmanager oncall slo",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-release.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "blue-green، canary، rollback",
          "d": "انتشار بدون قطعی و راه برگشت."
        },
        "en": {
          "t": "Blue-green, canary, rollback",
          "d": "Releasing without downtime, and the way back."
        },
        "kw": "blue-green canary rollback feature flag",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-secrets.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "مدیریت secret",
          "d": "Vault، sealed secret و چیزهایی که نباید در Git باشند."
        },
        "en": {
          "t": "Secret management",
          "d": "Vault, sealed secrets, and what must never be in Git."
        },
        "kw": "vault secret sops kms",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-backup.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "backup و disaster recovery",
          "d": "پشتیبانی که تست نشده، پشتیبان نیست."
        },
        "en": {
          "t": "Backup and disaster recovery",
          "d": "An untested backup is not a backup."
        },
        "kw": "backup restore rpo rto dr",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-postmortem.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "postmortem",
          "d": "بدون مقصر، با درس."
        },
        "en": {
          "t": "Postmortems",
          "d": "Blameless, with an actual lesson."
        },
        "kw": "postmortem incident blameless timeline",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — اولین خط لولهٔ CI",
          "d": "تست و lint خودکار روی هر push."
        },
        "en": {
          "t": "Project 1 — your first CI pipeline",
          "d": "Automated tests and linting on every push."
        },
        "kw": "capstone ci",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۲ — استقرار خودکار به staging",
          "d": "بیلد ایمیج، انتشار و استقرار با تأیید دستی."
        },
        "en": {
          "t": "Project 2 — automated deploy to staging",
          "d": "Build the image, publish it and deploy behind a manual approval."
        },
        "kw": "capstone cd staging",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — از commit تا production با rollback خودکار",
          "d": "خط لولهٔ کامل با canary، مانیتورینگ و برگشت خودکار روی خطا."
        },
        "en": {
          "t": "Project 3 — commit to production with automatic rollback",
          "d": "A full pipeline with canary releases, monitoring and automatic rollback on failure."
        },
        "kw": "capstone pipeline canary rollback",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1405,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "05-sql",
    "dir": "05-sql",
    "accent": "#DC2626",
    "accentDark": null,
    "cat": "data",
    "ico": "<ellipse cx=\"12\" cy=\"6\" rx=\"7.5\" ry=\"3.2\"/><path d=\"M4.5 6v6c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V6\"/><path d=\"M4.5 12v6c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2v-6\"/>",
    "locked": false,
    "fa": {
      "name": "SQL و SQL Server",
      "desc": "از SELECT تا خواندن execution plan و درمان کوئری کند — با تمرین روی دادهٔ واقعی.",
      "intro": "نوشتن کوئری که جواب بدهد آسان است. نوشتن کوئری که روی ده میلیون سطر هم جواب بدهد، مهارت دیگری است. این مسیر هر دستور را با دلیلش می‌دهد: چرا بهینه‌ساز این نقشه را انتخاب کرد، چرا این ایندکس کمک می‌کند و آن یکی نه، و چرا این کوئری که درست به نظر می‌رسد سطرها را تکثیر می‌کند. کد کپی‌کردنی همه‌جا هست؛ چیزی که کم است، فهمیدن آن است."
    },
    "en": {
      "name": "SQL & SQL Server",
      "desc": "From SELECT to reading an execution plan and fixing a slow query — practised on real data.",
      "intro": "Writing a query that returns the right answer is easy. Writing one that still answers over ten million rows is a different skill. This track teaches both and spends most of its time on the second."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-relational.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدل رابطه‌ای",
          "d": "چرا داده را در جدول می‌ریزیم و نه در فایل — و ایدهٔ ‎relation‎ از کجا آمد."
        },
        "en": {
          "t": "The relational model",
          "d": "Why we put data in tables rather than files — and where the idea of a relation came from."
        },
        "kw": "relational codd table row tuple key",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-install.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نصب و ابزار",
          "d": "‏SQL Server با داکر، ‎SSMS‎ و ‎Azure Data Studio‎."
        },
        "en": {
          "t": "Installation and tooling",
          "d": "SQL Server on Docker, SSMS and Azure Data Studio."
        },
        "kw": "install docker ssms azure data studio sqlcmd",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-select.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏SELECT",
          "d": "ترتیب واقعی اجرا — چرا ‎WHERE‎ قبل از ‎SELECT‎ اجرا می‌شود."
        },
        "en": {
          "t": "SELECT",
          "d": "The real order of execution — why WHERE runs before SELECT."
        },
        "kw": "select from where logical order projection",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-filtering.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "فیلتر کردن",
          "d": "‏WHERE، ‎IN‎، ‎BETWEEN‎، ‎LIKE‎ و منطق سه‌مقداری."
        },
        "en": {
          "t": "Filtering",
          "d": "WHERE, IN, BETWEEN, LIKE and three-valued logic."
        },
        "kw": "where in between like predicate",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-null.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏NULL",
          "d": "نه صفر است نه رشتهٔ خالی — و چرا ‎= NULL‎ هیچ‌وقت درست نیست."
        },
        "en": {
          "t": "NULL",
          "d": "Neither zero nor empty string — and why = NULL is never right."
        },
        "kw": "null is unknown three-valued coalesce isnull",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-sorting.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مرتب‌سازی و صفحه‌بندی",
          "d": "‏ORDER BY، ‎OFFSET/FETCH‎ و ‎collation‎ فارسی."
        },
        "en": {
          "t": "Sorting and paging",
          "d": "ORDER BY, OFFSET/FETCH and Persian collation."
        },
        "kw": "order by offset fetch top collation",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-joins-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏JOIN ۱",
          "d": "‏INNER و ‎LEFT‎ — با نمودار، و اینکه ‎ON‎ دقیقاً چه می‌کند."
        },
        "en": {
          "t": "JOINs 1",
          "d": "INNER and LEFT — with diagrams, and what ON really does."
        },
        "kw": "join inner left on cartesian",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-joins-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏JOIN ۲",
          "d": "‏RIGHT، ‎FULL‎، ‎CROSS‎، ‎self join‎ و تکثیر ناخواستهٔ سطرها."
        },
        "en": {
          "t": "JOINs 2",
          "d": "RIGHT, FULL, CROSS, self joins, and accidental row multiplication."
        },
        "kw": "right full cross self join duplicate fanout",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-aggregate.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "تجمیع",
          "d": "‏GROUP BY، ‎HAVING‎، و تفاوت آن با ‎WHERE‎."
        },
        "en": {
          "t": "Aggregation",
          "d": "GROUP BY, HAVING, and how it differs from WHERE."
        },
        "kw": "group by having count sum avg min max",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-subqueries.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "زیرکوئری",
          "d": "‏scalar، ‎IN‎، ‎EXISTS‎ و زیرکوئری همبسته."
        },
        "en": {
          "t": "Subqueries",
          "d": "Scalar, IN, EXISTS and correlated subqueries."
        },
        "kw": "subquery correlated exists in any all",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-cte.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏CTE",
          "d": "کوئری خوانا به‌جای تودرتو، و ‎CTE‎ بازگشتی."
        },
        "en": {
          "t": "CTEs",
          "d": "Readable queries instead of nested ones, plus recursive CTEs."
        },
        "kw": "cte with recursive anchor readable",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-window-1.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏window function ۱",
          "d": "‏OVER، ‎PARTITION BY‎ — تجمیع بدون از دست دادن سطرها."
        },
        "en": {
          "t": "Window functions 1",
          "d": "OVER and PARTITION BY — aggregating without losing rows."
        },
        "kw": "over partition window rank row_number",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-window-2.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏window function ۲",
          "d": "‏LAG، ‎LEAD‎، مجموع تجمعی و قاب پنجره."
        },
        "en": {
          "t": "Window functions 2",
          "d": "LAG, LEAD, running totals and window frames."
        },
        "kw": "lag lead running total frame rows range",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-pivot.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏PIVOT و شرط",
          "d": "چرخاندن سطر به ستون، و ‎CASE‎ در تجمیع."
        },
        "en": {
          "t": "PIVOT and conditionals",
          "d": "Turning rows into columns, and CASE inside aggregates."
        },
        "kw": "pivot unpivot case conditional aggregate",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-set-ops.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عملگرهای مجموعه‌ای",
          "d": "‏UNION، ‎INTERSECT‎، ‎EXCEPT‎ و ‎UNION ALL‎."
        },
        "en": {
          "t": "Set operators",
          "d": "UNION, INTERSECT, EXCEPT and UNION ALL."
        },
        "kw": "union intersect except all distinct",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-insert.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏INSERT",
          "d": "درج تکی، انبوه، از روی ‎SELECT‎ و ‎IDENTITY‎."
        },
        "en": {
          "t": "INSERT",
          "d": "Single, bulk, from SELECT, and IDENTITY."
        },
        "kw": "insert values select into identity bulk",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-update-delete.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏UPDATE و ‎DELETE‎",
          "d": "تغییر داده بدون فاجعه — و چرا همیشه اول ‎SELECT‎."
        },
        "en": {
          "t": "UPDATE and DELETE",
          "d": "Changing data without disaster — and why you always SELECT first."
        },
        "kw": "update delete truncate where safety transaction",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-merge.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏MERGE و ‎OUTPUT‎",
          "d": "همگام‌سازی دو جدول، و گرفتن سطرهای تغییرکرده."
        },
        "en": {
          "t": "MERGE and OUTPUT",
          "d": "Synchronising two tables and capturing changed rows."
        },
        "kw": "merge upsert output inserted deleted",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-datatypes.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "نوع داده",
          "d": "‏VARCHAR در برابر ‎NVARCHAR‎، ‎DECIMAL‎ در برابر ‎FLOAT‎ — و فارسی."
        },
        "en": {
          "t": "Data types",
          "d": "VARCHAR versus NVARCHAR, DECIMAL versus FLOAT — and Persian text."
        },
        "kw": "varchar nvarchar decimal float date unicode",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-constraints.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏constraint",
          "d": "‏PRIMARY KEY، ‎FOREIGN KEY‎، ‎UNIQUE‎، ‎CHECK‎ و ‎DEFAULT‎."
        },
        "en": {
          "t": "Constraints",
          "d": "PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK and DEFAULT."
        },
        "kw": "primary foreign unique check default cascade",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-design.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "طراحی جدول",
          "d": "از نیاز تا شِما: کلید طبیعی یا مصنوعی، و نام‌گذاری."
        },
        "en": {
          "t": "Table design",
          "d": "From requirement to schema: natural or surrogate keys, and naming."
        },
        "kw": "design schema surrogate natural key naming",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-normalization.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "نرمال‌سازی",
          "d": "‏1NF تا ‎3NF‎ با مثال واقعی — و مشکلی که هر فرم حل می‌کند."
        },
        "en": {
          "t": "Normalisation",
          "d": "1NF to 3NF with a real example — and the problem each form solves."
        },
        "kw": "normalization 1nf 2nf 3nf bcnf anomaly",
        "cap": 0
      },
      {
        "n": "23",
        "file": "23-denormalization.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏denormalization آگاهانه",
          "d": "کِی عمداً قاعده را بشکنیم، و هزینه‌اش را بپذیریم."
        },
        "en": {
          "t": "Deliberate denormalisation",
          "d": "When to break the rule on purpose, and accept the cost."
        },
        "kw": "denormalization redundancy tradeoff cache column",
        "cap": 0
      },
      {
        "n": "24",
        "file": "24-indexes-1.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "ایندکس ۱",
          "d": "ساختار ‎B-tree‎، ‎clustered‎ در برابر ‎nonclustered‎."
        },
        "en": {
          "t": "Indexes 1",
          "d": "The B-tree structure, clustered versus nonclustered."
        },
        "kw": "index btree clustered nonclustered heap",
        "cap": 0
      },
      {
        "n": "25",
        "file": "25-indexes-2.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "ایندکس ۲",
          "d": "ترتیب ستون، ‎covering‎، ‎INCLUDE‎ و ایندکس فیلترشده."
        },
        "en": {
          "t": "Indexes 2",
          "d": "Column order, covering indexes, INCLUDE and filtered indexes."
        },
        "kw": "covering include filtered column order selectivity",
        "cap": 0
      },
      {
        "n": "26",
        "file": "26-indexes-3.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "ایندکس ۳",
          "d": "هزینهٔ ایندکس: کندی نوشتن، ‎fragmentation‎ و نگه‌داری."
        },
        "en": {
          "t": "Indexes 3",
          "d": "The cost of indexes: slower writes, fragmentation and maintenance."
        },
        "kw": "fragmentation rebuild reorganize fillfactor cost",
        "cap": 0
      },
      {
        "n": "27",
        "file": "27-plan-1.html",
        "ready": false,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "برنامهٔ اجرا ۱",
          "d": "خواندن نقشه: ‎scan‎ در برابر ‎seek‎، و جهت خواندن."
        },
        "en": {
          "t": "Execution plans 1",
          "d": "Reading the map: scan versus seek, and which way to read it."
        },
        "kw": "execution plan scan seek estimated actual",
        "cap": 0
      },
      {
        "n": "28",
        "file": "28-plan-2.html",
        "ready": false,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "برنامهٔ اجرا ۲",
          "d": "‏nested loop، ‎hash‎، ‎merge‎ — و تخمین اشتباه بهینه‌ساز."
        },
        "en": {
          "t": "Execution plans 2",
          "d": "Nested loops, hash and merge joins — and bad optimiser estimates."
        },
        "kw": "nested loop hash merge cardinality estimate spill",
        "cap": 0
      },
      {
        "n": "29",
        "file": "29-statistics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "آمار",
          "d": "بهینه‌ساز از کجا می‌داند چند سطر برمی‌گردد."
        },
        "en": {
          "t": "Statistics",
          "d": "How the optimiser knows how many rows will come back."
        },
        "kw": "statistics histogram cardinality update auto",
        "cap": 0
      },
      {
        "n": "30",
        "file": "30-transactions.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "تراکنش",
          "d": "‏ACID در عمل، ‎COMMIT‎، ‎ROLLBACK‎ و تراکنش تودرتو."
        },
        "en": {
          "t": "Transactions",
          "d": "ACID in practice, COMMIT, ROLLBACK and nesting."
        },
        "kw": "transaction acid commit rollback savepoint xact",
        "cap": 0
      },
      {
        "n": "31",
        "file": "31-isolation.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "سطوح ایزوله",
          "d": "‏dirty read تا ‎serializable‎ — با آزمایش عملی هر کدام."
        },
        "en": {
          "t": "Isolation levels",
          "d": "From dirty reads to serializable — demonstrated for each."
        },
        "kw": "isolation dirty phantom repeatable snapshot rcsi",
        "cap": 0
      },
      {
        "n": "32",
        "file": "32-locking.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "قفل و ‎deadlock‎",
          "d": "چه چیزی قفل می‌شود، چرا، و باز کردن گره."
        },
        "en": {
          "t": "Locking and deadlocks",
          "d": "What gets locked, why, and how to untangle it."
        },
        "kw": "lock escalation deadlock graph blocking wait",
        "cap": 0
      },
      {
        "n": "33",
        "file": "33-procedures.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏stored procedure",
          "d": "پارامتر، خروجی، و ‎parameter sniffing‎."
        },
        "en": {
          "t": "Stored procedures",
          "d": "Parameters, output, and parameter sniffing."
        },
        "kw": "procedure parameter sniffing recompile output",
        "cap": 0
      },
      {
        "n": "34",
        "file": "34-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تابع",
          "d": "‏scalar در برابر ‎table-valued‎ — و چرا ‎scalar‎ کند است."
        },
        "en": {
          "t": "Functions",
          "d": "Scalar versus table-valued — and why scalar functions are slow."
        },
        "kw": "function scalar inline table-valued udf",
        "cap": 0
      },
      {
        "n": "35",
        "file": "35-triggers.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏trigger",
          "d": "قدرت پنهان، و اینکه چرا معمولاً بد است."
        },
        "en": {
          "t": "Triggers",
          "d": "Hidden power, and why it is usually a bad idea."
        },
        "kw": "trigger after instead of inserted deleted",
        "cap": 0
      },
      {
        "n": "36",
        "file": "36-tsql-1.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏T-SQL ۱",
          "d": "متغیر، شرط، حلقه و جدول موقت."
        },
        "en": {
          "t": "T-SQL 1",
          "d": "Variables, conditionals, loops and temp tables."
        },
        "kw": "declare if while temp table variable",
        "cap": 0
      },
      {
        "n": "37",
        "file": "37-tsql-2.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏T-SQL ۲",
          "d": "‏TRY/CATCH، ‎THROW‎ و مدیریت خطای تراکنشی."
        },
        "en": {
          "t": "T-SQL 2",
          "d": "TRY/CATCH, THROW and transactional error handling."
        },
        "kw": "try catch throw error xact_abort",
        "cap": 0
      },
      {
        "n": "38",
        "file": "38-dynamic-sql.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SQL پویا",
          "d": "‏sp_executesql، و تزریق ‎SQL‎ در سمت پایگاه‌داده."
        },
        "en": {
          "t": "Dynamic SQL",
          "d": "sp_executesql, and SQL injection on the database side."
        },
        "kw": "dynamic sql sp_executesql injection quotename",
        "cap": 0
      },
      {
        "n": "39",
        "file": "39-json-xml.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏JSON و ‎XML‎",
          "d": "‏FOR JSON، ‎OPENJSON‎ و کِی داده را نیمه‌ساختاریافته نگه داریم."
        },
        "en": {
          "t": "JSON and XML",
          "d": "FOR JSON, OPENJSON, and when to keep data semi-structured."
        },
        "kw": "json openjson for json xml semi-structured",
        "cap": 0
      },
      {
        "n": "40",
        "file": "40-partitioning.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "پارتیشن‌بندی",
          "d": "جدول‌های خیلی بزرگ، و ‎partition switching‎."
        },
        "en": {
          "t": "Partitioning",
          "d": "Very large tables, and partition switching."
        },
        "kw": "partition function scheme switching sliding window",
        "cap": 0
      },
      {
        "n": "41",
        "file": "41-security.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "امنیت",
          "d": "‏login، ‎user‎، ‎role‎، ‎schema‎ و کمترین دسترسی."
        },
        "en": {
          "t": "Security",
          "d": "Logins, users, roles, schemas and least privilege."
        },
        "kw": "login user role grant schema tde encryption",
        "cap": 0
      },
      {
        "n": "42",
        "file": "42-backup.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "پشتیبان و بازیابی",
          "d": "‏full، ‎differential‎، ‎log‎ و بازیابی نقطه‌ای واقعی."
        },
        "en": {
          "t": "Backup and recovery",
          "d": "Full, differential, log backups and real point-in-time recovery."
        },
        "kw": "backup restore recovery model log pitr",
        "cap": 0
      },
      {
        "n": "43",
        "file": "43-maintenance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نگه‌داری",
          "d": "ایندکس، آمار، ‎DBCC‎ و کار زمان‌بندی‌شده."
        },
        "en": {
          "t": "Maintenance",
          "d": "Indexes, statistics, DBCC and scheduled jobs."
        },
        "kw": "maintenance dbcc checkdb agent job rebuild",
        "cap": 0
      },
      {
        "n": "44",
        "file": "44-monitoring.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مانیتورینگ",
          "d": "‏DMV، ‎Query Store‎ و ‎wait statistics‎."
        },
        "en": {
          "t": "Monitoring",
          "d": "DMVs, the Query Store and wait statistics."
        },
        "kw": "dmv query store wait stats extended events",
        "cap": 0
      },
      {
        "n": "45",
        "file": "45-tuning-1.html",
        "ready": false,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "بهینه‌سازی ۱",
          "d": "روش سیستماتیک: اندازه‌گیری، تشخیص، درمان — نه حدس."
        },
        "en": {
          "t": "Tuning 1",
          "d": "A systematic method: measure, diagnose, treat — not guess."
        },
        "kw": "tuning method measure bottleneck slow query",
        "cap": 0
      },
      {
        "n": "46",
        "file": "46-tuning-2.html",
        "ready": false,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "بهینه‌سازی ۲",
          "d": "بازنویسی کوئری: ‎SARGable‎، ‎OR‎ و تابع روی ستون."
        },
        "en": {
          "t": "Tuning 2",
          "d": "Rewriting queries: SARGability, OR, and functions on columns."
        },
        "kw": "sargable rewrite predicate function index usage",
        "cap": 0
      },
      {
        "n": "47",
        "file": "47-antipatterns.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ضدالگوها",
          "d": "‏SELECT *‎، ‎cursor‎، ‎NOLOCK‎ و بقیهٔ عادت‌های گران."
        },
        "en": {
          "t": "Anti-patterns",
          "d": "SELECT *, cursors, NOLOCK and other expensive habits."
        },
        "kw": "antipattern select star cursor nolock eav",
        "cap": 0
      },
      {
        "n": "48",
        "file": "48-app-integration.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اتصال از اپ",
          "d": "‏connection pool، ‎ORM‎ و ‎N+1‎ از سمت پایگاه‌داده."
        },
        "en": {
          "t": "Connecting from an app",
          "d": "Connection pooling, ORMs and N+1 seen from the database side."
        },
        "kw": "pool orm n+1 parameterized ado efcore",
        "cap": 0
      },
      {
        "n": "49",
        "file": "49-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — طراحی شِما",
          "d": "از نیاز تا جدول، با کلید و ‎constraint‎ درست."
        },
        "en": {
          "t": "Project 1 — design a schema",
          "d": "From requirements to tables, with correct keys and constraints."
        },
        "kw": "capstone schema design",
        "cap": 1
      },
      {
        "n": "50",
        "file": "50-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۲ — گزارش تحلیلی",
          "d": "‏window، ‎CTE‎ و ‎PIVOT‎ روی دادهٔ واقعی."
        },
        "en": {
          "t": "Project 2 — analytical reporting",
          "d": "Windows, CTEs and PIVOT over real data."
        },
        "kw": "capstone report analytics",
        "cap": 2
      },
      {
        "n": "51",
        "file": "51-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 260,
        "fa": {
          "t": "پروژهٔ ۳ — پایگاه‌دادهٔ فروش با دادهٔ حجیم",
          "d": "بارگذاری میلیون‌ها سطر و رساندن کوئری به زیر یک ثانیه."
        },
        "en": {
          "t": "Project 3 — a sales database at scale",
          "d": "Load millions of rows and get the query under one second."
        },
        "kw": "capstone performance tuning",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 51,
      "exercises": 885,
      "minutes": 4840,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "06-kubernetes",
    "dir": "06-kubernetes",
    "accent": "#326CE5",
    "accentDark": null,
    "cat": "infra",
    "ico": "<path d=\"M12 2.6 20 7v10l-8 4.4L4 17V7z\"/><circle cx=\"12\" cy=\"12\" r=\"2.6\"/><path d=\"M12 4.6v4.8M12 14.6v4.8M6.4 8.8l4 2.2M13.6 13l4 2.2M17.6 8.8l-4 2.2M10.4 13l-4 2.2\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "کوبرنتیز",
      "desc": "وقتی چند کانتینر روی چند سرور می‌شوند: Pod، Deployment، Service، Ingress، مقیاس‌پذیری و عیب‌یابی.",
      "intro": "داکر به تو می‌گوید یک کانتینر را چطور اجرا کنی. کوبرنتیز جواب سؤال بعدی است: پنجاه کانتینر روی ده سرور را چه کسی زنده نگه می‌دارد، چه کسی جایگزینشان می‌کند وقتی می‌میرند، و چه کسی ترافیک را بینشان پخش می‌کند."
    },
    "en": {
      "name": "Kubernetes",
      "desc": "When containers become many across many servers: Pods, Deployments, Services, Ingress, scaling and debugging.",
      "intro": "Docker tells you how to run one container. Kubernetes answers the next question: who keeps fifty containers alive across ten servers, who replaces them when they die, and who spreads traffic between them."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا کوبرنتیز؛ مسئله‌ای که داکر تنها حل نمی‌کند",
          "d": "کِی لازم است و — مهم‌تر — کِی لازم نیست."
        },
        "en": {
          "t": "Why Kubernetes; what Docker alone cannot do",
          "d": "When you need it and — more importantly — when you do not."
        },
        "kw": "kubernetes orchestration why scale",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "معماری کلاستر",
          "d": "control plane، node، etcd، scheduler و kubelet."
        },
        "en": {
          "t": "Cluster architecture",
          "d": "Control plane, nodes, etcd, scheduler and kubelet."
        },
        "kw": "control plane etcd scheduler kubelet node",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-pod.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "Pod: کوچک‌ترین واحد",
          "d": "چرا واحد اجرا Pod است و نه کانتینر."
        },
        "en": {
          "t": "Pods: the smallest unit",
          "d": "Why the unit of execution is a Pod and not a container."
        },
        "kw": "pod sidecar init container",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-kubectl.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "kubectl در عمل",
          "d": "get، describe، logs، exec، apply — و خواندن YAML."
        },
        "en": {
          "t": "kubectl in practice",
          "d": "get, describe, logs, exec, apply — and reading YAML."
        },
        "kw": "kubectl apply describe logs context",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-deployment.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Deployment و ReplicaSet",
          "d": "اعلام وضعیت مطلوب، و به‌روزرسانی تدریجی."
        },
        "en": {
          "t": "Deployments and ReplicaSets",
          "d": "Declaring desired state, and rolling updates."
        },
        "kw": "deployment replicaset rollout strategy",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-service.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Service و انواعش",
          "d": "ClusterIP، NodePort، LoadBalancer و DNS داخلی."
        },
        "en": {
          "t": "Services and their types",
          "d": "ClusterIP, NodePort, LoadBalancer and internal DNS."
        },
        "kw": "service clusterip nodeport loadbalancer dns",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-ingress.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Ingress و مسیریابی HTTP",
          "d": "یک نقطهٔ ورود برای چند سرویس، با TLS."
        },
        "en": {
          "t": "Ingress and HTTP routing",
          "d": "One entry point for many services, with TLS."
        },
        "kw": "ingress controller tls host path",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-config.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "ConfigMap و Secret",
          "d": "پیکربندی بیرون از ایمیج، در سطح کلاستر."
        },
        "en": {
          "t": "ConfigMaps and Secrets",
          "d": "Configuration outside the image, at cluster level."
        },
        "kw": "configmap secret env volume mount",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-storage.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "دادهٔ ماندگار: PV، PVC، StorageClass",
          "d": "وقتی Pod می‌میرد، داده نباید بمیرد."
        },
        "en": {
          "t": "Persistent data: PV, PVC, StorageClass",
          "d": "When a Pod dies, the data must not."
        },
        "kw": "persistentvolume pvc storageclass",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-resources.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "منابع: request، limit و QoS",
          "d": "چرا Pod تو Pending مانده و چرا آن یکی کشته شد."
        },
        "en": {
          "t": "Resources: requests, limits and QoS",
          "d": "Why your Pod is Pending and why that other one got killed."
        },
        "kw": "request limit qos oom pending",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-scaling.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مقیاس‌پذیری خودکار",
          "d": "HPA بر اساس CPU و متریک سفارشی."
        },
        "en": {
          "t": "Autoscaling",
          "d": "HPA on CPU and on custom metrics."
        },
        "kw": "hpa autoscale metrics server",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-rbac.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "Namespace، RBAC و ServiceAccount",
          "d": "چه کسی اجازهٔ چه کاری را دارد."
        },
        "en": {
          "t": "Namespaces, RBAC and ServiceAccounts",
          "d": "Who is allowed to do what."
        },
        "kw": "namespace rbac role binding serviceaccount",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-probes.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "Probe: liveness، readiness، startup",
          "d": "تفاوت «بالا هست» و «آمادهٔ ترافیک است»."
        },
        "en": {
          "t": "Probes: liveness, readiness, startup",
          "d": "The difference between “it is up” and “it is ready for traffic”."
        },
        "kw": "liveness readiness startup probe",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-workloads.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "StatefulSet، DaemonSet، Job و CronJob",
          "d": "وقتی Deployment جواب نمی‌دهد."
        },
        "en": {
          "t": "StatefulSets, DaemonSets, Jobs and CronJobs",
          "d": "When a Deployment is the wrong shape."
        },
        "kw": "statefulset daemonset job cronjob",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-helm.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Helm",
          "d": "بسته‌بندی و پیکربندی چند محیط با یک chart."
        },
        "en": {
          "t": "Helm",
          "d": "Packaging and configuring many environments from one chart."
        },
        "kw": "helm chart values template release",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "عیب‌یابی: CrashLoopBackOff، Pending، ImagePullBackOff",
          "d": "هر وضعیت یک علت مشخص دارد."
        },
        "en": {
          "t": "Debugging: CrashLoopBackOff, Pending, ImagePullBackOff",
          "d": "Each status points at a specific cause."
        },
        "kw": "crashloopbackoff imagepullbackoff pending evicted",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — اولین اپ روی کلاستر",
          "d": "یک Deployment و یک Service، با کلاستر محلی."
        },
        "en": {
          "t": "Project 1 — your first app on a cluster",
          "d": "One Deployment and one Service on a local cluster."
        },
        "kw": "capstone kind minikube",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۲ — اپ سه‌سرویسه با Ingress",
          "d": "سه سرویس، پیکربندی، دادهٔ ماندگار و یک نقطهٔ ورود."
        },
        "en": {
          "t": "Project 2 — three services behind an Ingress",
          "d": "Three services, configuration, persistent data and one entry point."
        },
        "kw": "capstone ingress configmap",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — کلاستر آمادهٔ production",
          "d": "با HPA، RBAC، probe، منابع محدود و مانیتورینگ."
        },
        "en": {
          "t": "Project 3 — a production-ready cluster",
          "d": "With HPA, RBAC, probes, resource limits and monitoring."
        },
        "kw": "capstone production hpa rbac",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1595,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "07-architecture",
    "dir": "07-architecture",
    "accent": "#0EA5A5",
    "accentDark": null,
    "cat": "arch",
    "ico": "<path d=\"M3 20h18M5 20V9l7-5 7 5v11\"/><path d=\"M9.5 20v-5.5h5V20\"/><path d=\"M9.5 11h5\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "معماری نرم‌افزار و تحلیل سیستم",
      "desc": "SOLID، الگوهای طراحی، معماری لایه‌ای، شش‌ضلعی و Clean، DDD مقدماتی و هرم تست — با مثال در چند زبان.",
      "intro": "معماری یعنی تصمیم‌هایی که عوض کردنشان بعداً گران است. این مسیر یادت می‌دهد کدام تصمیم‌ها این‌طورند، چطور بگیری‌شان، و چطور کدی بنویسی که شش ماه بعد هم بشود عوضش کرد. مثال‌ها در ‎C#‎، پایتون، تایپ‌اسکریپت و Go می‌آیند."
    },
    "en": {
      "name": "Software architecture & system analysis",
      "desc": "SOLID, design patterns, layered/hexagonal/clean architecture, introductory DDD and the test pyramid — with examples in several languages.",
      "intro": "Architecture is the set of decisions that are expensive to change later. This track teaches you which decisions those are, how to make them, and how to write code you can still change in six months. Examples come in C#, Python, TypeScript and Go."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-what.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "معماری چیست و کدام تصمیم معماری است",
          "d": "تفاوت تصمیم معماری با تصمیم پیاده‌سازی، و معیار «گران برای تغییر»."
        },
        "en": {
          "t": "What architecture is, and which decisions count",
          "d": "Architectural versus implementation decisions, and the “expensive to change” test."
        },
        "kw": "architecture decision significant tradeoff",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-analysis.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تحلیل سیستم: از نیاز تا مدل",
          "d": "استخراج نیاز، ‎use case‎ و اولین مدل دامنه."
        },
        "en": {
          "t": "System analysis: from requirement to model",
          "d": "Eliciting requirements, use cases and a first domain model."
        },
        "kw": "analysis requirement usecase domain model",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-qualities.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کیفیت‌ها و trade-off",
          "d": "تغییرپذیری، تست‌پذیری، کارایی — نمی‌شود همه را با هم داشت."
        },
        "en": {
          "t": "Quality attributes and trade-offs",
          "d": "Changeability, testability, performance — you cannot have them all."
        },
        "kw": "quality attribute tradeoff nfr",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-coupling.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "وابستگی و جهت آن",
          "d": "‏coupling، cohesion، و اینکه چرا جهت وابستگی مهم‌تر از وجودش است."
        },
        "en": {
          "t": "Coupling and its direction",
          "d": "Coupling, cohesion, and why a dependency's direction matters more than its existence."
        },
        "kw": "coupling cohesion dependency direction",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-solid-1.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SOLID ۱: SRP و OCP",
          "d": "با کد واقعی، نه مثال دایره و مربع."
        },
        "en": {
          "t": "SOLID 1: SRP and OCP",
          "d": "With real code, not shapes and squares."
        },
        "kw": "solid srp ocp single responsibility open closed",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-solid-2.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SOLID ۲: LSP، ISP، DIP",
          "d": "و اینکه ‎DIP‎ چطور کل جهت معماری را برمی‌گرداند."
        },
        "en": {
          "t": "SOLID 2: LSP, ISP, DIP",
          "d": "And how DIP reverses the direction of an entire architecture."
        },
        "kw": "solid lsp isp dip liskov inversion",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-layered.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری لایه‌ای کلاسیک",
          "d": "‏presentation، business، data — و جایی که به گِل می‌نشیند."
        },
        "en": {
          "t": "Classic layered architecture",
          "d": "Presentation, business, data — and where it sinks."
        },
        "kw": "layered n-tier presentation domain data",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-layered-problems.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مشکل معماری لایه‌ای",
          "d": "چرا لایهٔ دامنه به پایگاه‌داده وابسته می‌شود و تست‌پذیری می‌میرد."
        },
        "en": {
          "t": "What goes wrong with layers",
          "d": "Why the domain layer ends up depending on the database, and testability dies."
        },
        "kw": "anemic leaky layer transaction script",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-dip-inversion.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "وارونگی وابستگی در عمل",
          "d": "همان کد لایه‌ای، با یک تغییر جهت — و اثرش بر تست."
        },
        "en": {
          "t": "Dependency inversion in practice",
          "d": "The same layered code with one direction reversed — and what it does to tests."
        },
        "kw": "dip inversion interface port abstraction",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-hexagonal.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "معماری شش‌ضلعی",
          "d": "‏port و adapter: دامنه در مرکز، همه‌چیز دیگر افزونه."
        },
        "en": {
          "t": "Hexagonal architecture",
          "d": "Ports and adapters: the domain at the centre, everything else a plug-in."
        },
        "kw": "hexagonal ports adapters driving driven",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-hexagonal-build.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "شش‌ضلعی، قدم‌به‌قدم",
          "d": "یک سرویس واقعی از صفر با ‎port‎ و ‎adapter‎، با کد کامل."
        },
        "en": {
          "t": "Building a hexagon, step by step",
          "d": "A real service from scratch with ports and adapters, in full."
        },
        "kw": "hexagonal implementation adapter inmemory test",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-onion.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "معماری Onion",
          "d": "لایه‌های هم‌مرکز، و قاعدهٔ وابستگی رو به مرکز."
        },
        "en": {
          "t": "Onion architecture",
          "d": "Concentric layers, and the dependency rule pointing inward."
        },
        "kw": "onion layer concentric core infrastructure",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-clean.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Clean Architecture",
          "d": "‏entity، use case، adapter، framework — و قاعدهٔ وابستگی."
        },
        "en": {
          "t": "Clean Architecture",
          "d": "Entities, use cases, adapters, frameworks — and the dependency rule."
        },
        "kw": "clean architecture usecase entity boundary",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-clean-build.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏Clean، قدم‌به‌قدم",
          "d": "همان سرویس، این‌بار با ساختار Clean کامل و مرزهای صریح."
        },
        "en": {
          "t": "Clean, step by step",
          "d": "The same service, now with a full Clean structure and explicit boundaries."
        },
        "kw": "clean implementation interactor presenter gateway",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-comparing.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "لایه‌ای، شش‌ضلعی، Onion، Clean",
          "d": "چهار نام برای یک ایدهٔ مشترک — تفاوت‌های واقعی و ماتریس انتخاب."
        },
        "en": {
          "t": "Layered, hexagonal, onion, clean",
          "d": "Four names for one shared idea — the real differences, and a decision matrix."
        },
        "kw": "comparison decision matrix architecture style",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cost.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "هزینهٔ معماری تمیز",
          "d": "کِی ارزشش را دارد و کِی فقط پوشه‌های خالی می‌سازی."
        },
        "en": {
          "t": "The cost of clean architecture",
          "d": "When it pays off and when you are just creating empty folders."
        },
        "kw": "overengineering yagni pragmatic cost",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-creational.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "الگوهای ساختنی",
          "d": "‏Factory، Builder، Prototype — و چرا ‎Singleton‎ معمولاً دام است."
        },
        "en": {
          "t": "Creational patterns",
          "d": "Factory, Builder, Prototype — and why Singleton is usually a trap."
        },
        "kw": "factory builder singleton prototype",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-structural.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوهای ساختاری",
          "d": "‏Adapter، Decorator، Facade، Proxy، Composite."
        },
        "en": {
          "t": "Structural patterns",
          "d": "Adapter, Decorator, Facade, Proxy, Composite."
        },
        "kw": "adapter decorator facade proxy composite",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-behavioral-1.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوهای رفتاری ۱",
          "d": "‏Strategy، Observer، Command."
        },
        "en": {
          "t": "Behavioural patterns 1",
          "d": "Strategy, Observer, Command."
        },
        "kw": "strategy observer command",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-behavioral-2.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوهای رفتاری ۲",
          "d": "‏State، Template Method، Chain of Responsibility، Mediator."
        },
        "en": {
          "t": "Behavioural patterns 2",
          "d": "State, Template Method, Chain of Responsibility, Mediator."
        },
        "kw": "state template chain mediator",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-repository.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Repository و Unit of Work",
          "d": "کِی مفیدند و کِی فقط یک لایهٔ اضافه‌اند."
        },
        "en": {
          "t": "Repository and Unit of Work",
          "d": "When they help and when they are just another layer."
        },
        "kw": "repository unit of work persistence",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-cqrs.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏CQRS",
          "d": "جدا کردن خواندن از نوشتن، با هزینه‌هایش."
        },
        "en": {
          "t": "CQRS",
          "d": "Separating reads from writes, with its costs."
        },
        "kw": "cqrs command query read model",
        "cap": 0
      },
      {
        "n": "23",
        "file": "23-events.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری رویدادمحور",
          "d": "رویداد در برابر فراخوانی مستقیم، و سازگاری نهایی."
        },
        "en": {
          "t": "Event-driven architecture",
          "d": "Events versus direct calls, and eventual consistency."
        },
        "kw": "event driven eventual consistency message",
        "cap": 0
      },
      {
        "n": "24",
        "file": "24-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "هرم تست",
          "d": "‏unit، integration، contract — تستی که اجازهٔ تغییر بدهد."
        },
        "en": {
          "t": "The test pyramid",
          "d": "Unit, integration, contract — tests that let you change code."
        },
        "kw": "test pyramid unit integration contract",
        "cap": 0
      },
      {
        "n": "25",
        "file": "25-refactoring.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏refactoring به‌سمت معماری",
          "d": "از کد موجود شروع کن، نه از دیاگرام."
        },
        "en": {
          "t": "Refactoring towards architecture",
          "d": "Start from the code you have, not from a diagram."
        },
        "kw": "refactoring smell strangler legacy",
        "cap": 0
      },
      {
        "n": "26",
        "file": "26-documenting.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مستندسازی معماری",
          "d": "‏C4 و ‎ADR‎: تصمیم را ثبت کن، نه فقط نتیجه را."
        },
        "en": {
          "t": "Documenting architecture",
          "d": "C4 and ADRs: record the decision, not only the outcome."
        },
        "kw": "c4 adr diagram documentation",
        "cap": 0
      },
      {
        "n": "27",
        "file": "27-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — بازطراحی یک ‎CRUD‎ به لایه‌ای",
          "d": "از یک فایل هزارخطی به لایه‌هایی با مسئولیت روشن."
        },
        "en": {
          "t": "Project 1 — refactor a CRUD into layers",
          "d": "From one thousand-line file to layers with clear responsibilities."
        },
        "kw": "capstone layered refactor",
        "cap": 1
      },
      {
        "n": "28",
        "file": "28-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۲ — همان سیستم، شش‌ضلعی",
          "d": "دامنه را از پایگاه‌داده و وب جدا کن و تست کامل بنویس."
        },
        "en": {
          "t": "Project 2 — the same system, hexagonal",
          "d": "Separate the domain from the database and the web, then test it fully."
        },
        "kw": "capstone hexagonal test",
        "cap": 2
      },
      {
        "n": "29",
        "file": "29-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 220,
        "fa": {
          "t": "پروژهٔ ۳ — ‎Clean‎ با ‎CQRS‎ و رویداد",
          "d": "مرزهای صریح، مدل خواندن جدا، و سازگاری نهایی."
        },
        "en": {
          "t": "Project 3 — Clean with CQRS and events",
          "d": "Explicit boundaries, a separate read model, and eventual consistency."
        },
        "kw": "capstone clean cqrs event",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 29,
      "exercises": 489,
      "minutes": 2705,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "08-microservices",
    "dir": "08-microservices",
    "accent": "#E11D74",
    "accentDark": null,
    "cat": "arch",
    "ico": "<circle cx=\"12\" cy=\"5\" r=\"2.6\"/><circle cx=\"5\" cy=\"18\" r=\"2.6\"/><circle cx=\"19\" cy=\"18\" r=\"2.6\"/><path d=\"M10.4 7.1 6.4 15.6M13.6 7.1l4 8.5M7.6 18h8.8\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "میکروسرویس و میکروفرانت‌اند",
      "desc": "مرزبندی سرویس، REST و gRPC، صف و رویداد، Saga، تاب‌آوری، مشاهده‌پذیری و میکروفرانت‌اند.",
      "intro": "میکروسرویس یک ارتقا نیست؛ یک معامله است. پیچیدگی داخل کد را کم می‌کنی و به شبکه منتقلش می‌کنی. این مسیر هر دو طرف معامله را نشان می‌دهد و بیشترین وقتش را روی سخت‌ترین بخش می‌گذارد: اینکه سرویس‌ها چطور با هم حرف بزنند."
    },
    "en": {
      "name": "Microservices & micro-frontends",
      "desc": "Service boundaries, REST and gRPC, queues and events, Saga, resilience, observability and micro-frontends.",
      "intro": "Microservices are not an upgrade; they are a trade. You move complexity out of your code and into the network. This track shows both sides of that trade and spends most of its time on the hardest part: how services talk to each other."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-when.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مونولیت بد نیست — کِی میکروسرویس",
          "d": "نشانه‌های واقعی نیاز، و هزینه‌ای که می‌پذیری."
        },
        "en": {
          "t": "A monolith is not bad — when to split",
          "d": "The real signals, and the cost you accept."
        },
        "kw": "monolith microservice when tradeoff",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-boundaries.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مرزبندی سرویس‌ها",
          "d": "bounded context، و اشتباه مرزبندی بر اساس جدول."
        },
        "en": {
          "t": "Drawing service boundaries",
          "d": "Bounded contexts, and the mistake of splitting by table."
        },
        "kw": "bounded context boundary decomposition",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-rest.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ارتباط همگام ۱: REST",
          "d": "طراحی API، نسخه، و هزینهٔ فراخوانی زنجیره‌ای."
        },
        "en": {
          "t": "Synchronous 1: REST",
          "d": "API design, versioning, and the cost of call chains."
        },
        "kw": "rest http api sync",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-grpc.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ارتباط همگام ۲: gRPC",
          "d": "protobuf، استریم، و کِی از REST بهتر است."
        },
        "en": {
          "t": "Synchronous 2: gRPC",
          "d": "Protobuf, streaming, and when it beats REST."
        },
        "kw": "grpc protobuf stream rpc",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-queue.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ارتباط ناهمگام ۱: صف پیام",
          "d": "RabbitMQ، تحویل، تأیید و صف مرده."
        },
        "en": {
          "t": "Asynchronous 1: message queues",
          "d": "RabbitMQ, delivery, acknowledgements and dead letters."
        },
        "kw": "rabbitmq queue amqp ack dlq",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-stream.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ارتباط ناهمگام ۲: جریان رویداد",
          "d": "Kafka، partition، consumer group و ترتیب."
        },
        "en": {
          "t": "Asynchronous 2: event streams",
          "d": "Kafka, partitions, consumer groups and ordering."
        },
        "kw": "kafka partition consumer group offset",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-compare.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مقایسهٔ روش‌های ارتباط",
          "d": "ماتریس تصمیم: کدام روش برای کدام مسئله."
        },
        "en": {
          "t": "Comparing the communication styles",
          "d": "A decision matrix: which style for which problem."
        },
        "kw": "sync async comparison decision matrix",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-gateway.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "API Gateway و BFF",
          "d": "یک درِ ورودی، و اینکه چرا هر کلاینت BFF خودش را می‌خواهد."
        },
        "en": {
          "t": "API Gateway and BFF",
          "d": "One front door, and why each client wants its own BFF."
        },
        "kw": "gateway bff aggregation routing",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-discovery.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "service discovery و توزیع بار",
          "d": "سرویس‌ها چطور همدیگر را پیدا می‌کنند."
        },
        "en": {
          "t": "Service discovery and load balancing",
          "d": "How services find each other."
        },
        "kw": "discovery consul dns load balancing",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-data.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "داده: هر سرویس، پایگاه‌دادهٔ خودش",
          "d": "و مسئله‌ای که این قانون می‌سازد."
        },
        "en": {
          "t": "Data: one database per service",
          "d": "And the problem this rule creates."
        },
        "kw": "database per service data ownership",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-saga.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "تراکنش توزیع‌شده: Saga",
          "d": "choreography در برابر orchestration، و جبران."
        },
        "en": {
          "t": "Distributed transactions: Saga",
          "d": "Choreography versus orchestration, and compensation."
        },
        "kw": "saga distributed transaction compensation",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-outbox.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "الگوی Outbox و تحویل تضمین‌شده",
          "d": "چطور پیام و پایگاه‌داده از هم جدا نیفتند."
        },
        "en": {
          "t": "The Outbox pattern and guaranteed delivery",
          "d": "How to keep your database and your messages in step."
        },
        "kw": "outbox inbox dual write cdc",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-resilience.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تاب‌آوری",
          "d": "retry، timeout، circuit breaker، bulkhead."
        },
        "en": {
          "t": "Resilience",
          "d": "Retries, timeouts, circuit breakers, bulkheads."
        },
        "kw": "retry timeout circuit breaker bulkhead",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-idempotency.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "idempotency و پیام تکراری",
          "d": "شبکه پیام را دو بار می‌رساند. آماده باش."
        },
        "en": {
          "t": "Idempotency and duplicate messages",
          "d": "The network will deliver twice. Be ready."
        },
        "kw": "idempotency exactly once deduplication",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-observability.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مشاهده‌پذیری توزیع‌شده",
          "d": "لاگ، متریک و trace با OpenTelemetry."
        },
        "en": {
          "t": "Distributed observability",
          "d": "Logs, metrics and traces with OpenTelemetry."
        },
        "kw": "tracing opentelemetry jaeger correlation",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-versioning.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نسخه‌گذاری API و سازگاری",
          "d": "تغییر بدون شکستن کلاینت‌ها."
        },
        "en": {
          "t": "API versioning and compatibility",
          "d": "Changing without breaking your clients."
        },
        "kw": "versioning backward compatibility contract",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-microfrontend.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "میکروفرانت‌اند",
          "d": "روش‌ها: build-time، run-time، module federation — و trade-offها."
        },
        "en": {
          "t": "Micro-frontends",
          "d": "Build-time, run-time, module federation — and the trade-offs."
        },
        "kw": "micro frontend module federation shell",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-antipatterns.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ضدالگوها",
          "d": "مونولیت توزیع‌شده، و بقیهٔ راه‌های شکست."
        },
        "en": {
          "t": "Anti-patterns",
          "d": "The distributed monolith, and the other ways to fail."
        },
        "kw": "antipattern distributed monolith chatty",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — دو سرویس با REST",
          "d": "تقسیم یک مونولیت کوچک به دو سرویس."
        },
        "en": {
          "t": "Project 1 — two services over REST",
          "d": "Splitting a small monolith into two services."
        },
        "kw": "capstone rest split",
        "cap": 1
      },
      {
        "n": "20",
        "file": "20-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — افزودن صف و Saga",
          "d": "یک عملیات چندسرویسه با جبران خطا."
        },
        "en": {
          "t": "Project 2 — adding a queue and a Saga",
          "d": "A multi-service operation with compensation."
        },
        "kw": "capstone saga queue",
        "cap": 2
      },
      {
        "n": "21",
        "file": "21-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — سامانهٔ کامل",
          "d": "gateway، رویداد، trace توزیع‌شده و circuit breaker."
        },
        "en": {
          "t": "Project 3 — the complete system",
          "d": "Gateway, events, distributed tracing and circuit breakers."
        },
        "kw": "capstone gateway tracing",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 21,
      "exercises": 345,
      "minutes": 1875,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "09-csharp",
    "dir": "09-csharp",
    "accent": "#68217A",
    "accentDark": "#B77BCF",
    "cat": "backend",
    "ico": "<path d=\"M9.5 3.5 7.5 20.5M16.5 3.5l-2 17M4 8.6h16M3 15.4h16\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "زبان ‎C#‎",
      "desc": "از نوع‌ها و LINQ تا async/await، کارایی و تست — جامع، از مقدماتی تا پیشرفته.",
      "intro": "‎C#‎ زبان بزرگی است و بیشتر آموزش‌ها در سطح نحو متوقف می‌شوند. این مسیر تا جایی می‌رود که بدانی پشت async/await چه می‌گذرد، چرا آن LINQ کند است، و کِی struct به‌جای class."
    },
    "en": {
      "name": "C#",
      "desc": "From types and LINQ to async/await, performance and testing — comprehensive, beginner to advanced.",
      "intro": "C# is a large language and most tutorials stop at syntax. This track goes far enough that you know what happens behind async/await, why that LINQ query is slow, and when to reach for a struct."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-ecosystem.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "اکوسیستم دات‌نت",
          "d": "‏SDK، runtime، پروژه، و اینکه dotnet build دقیقاً چه می‌کند."
        },
        "en": {
          "t": "The .NET ecosystem",
          "d": "SDK, runtime, projects, and what dotnet build actually does."
        },
        "kw": "dotnet sdk runtime csproj cli msbuild",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-types.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌ها: value و reference",
          "d": "پشته و هیپ، کپی در برابر ارجاع، و boxing."
        },
        "en": {
          "t": "Types: value and reference",
          "d": "Stack and heap, copy versus reference, and boxing."
        },
        "kw": "value reference stack heap boxing",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-nullable.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏nullable reference types",
          "d": "کامپایلری که ‎NullReferenceException‎ را قبل از اجرا می‌گیرد."
        },
        "en": {
          "t": "Nullable reference types",
          "d": "A compiler that catches NullReferenceException before run time."
        },
        "kw": "nullable annotation warning null-forgiving",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-class-record-struct.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کلاس، record و struct",
          "d": "سه انتخاب با سه معناشناسی متفاوت — و معیار انتخاب."
        },
        "en": {
          "t": "Class, record and struct",
          "d": "Three choices with three semantics — and how to pick."
        },
        "kw": "class record struct readonly init",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-inheritance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "وراثت و interface",
          "d": "‏virtual، abstract، sealed و پیاده‌سازی پیش‌فرض interface."
        },
        "en": {
          "t": "Inheritance and interfaces",
          "d": "virtual, abstract, sealed, and default interface methods."
        },
        "kw": "inheritance virtual abstract sealed interface",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-members.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عضو ایستا، const و readonly",
          "d": "تفاوت‌هایی که در زمان کامپایل و اجرا اثر دارند."
        },
        "en": {
          "t": "Static, const and readonly members",
          "d": "Differences that matter at compile time and at run time."
        },
        "kw": "static const readonly field initializer",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-equality.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "برابری و hash",
          "d": "‏Equals، GetHashCode، ‎==‎ و قرارداد‌هایی که شکستنشان گران است."
        },
        "en": {
          "t": "Equality and hashing",
          "d": "Equals, GetHashCode, ==, and contracts that are expensive to break."
        },
        "kw": "equals gethashcode comparer icomparable",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-operators.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عملگر و تبدیل نوع",
          "d": "بارگذاری عملگر، ‎implicit‎ و ‎explicit‎."
        },
        "en": {
          "t": "Operators and conversions",
          "d": "Operator overloading, implicit and explicit conversions."
        },
        "kw": "operator overload implicit explicit conversion",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-generics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏generic و constraint",
          "d": "نوع به‌عنوان پارامتر، بدون از دست دادن ایمنی یا کارایی."
        },
        "en": {
          "t": "Generics and constraints",
          "d": "Types as parameters, without losing safety or speed."
        },
        "kw": "generic constraint where new class struct",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-variance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏variance: in و out",
          "d": "چرا ‎List<Derived>‎ یک ‎List<Base>‎ نیست."
        },
        "en": {
          "t": "Variance: in and out",
          "d": "Why a List<Derived> is not a List<Base>."
        },
        "kw": "covariance contravariance in out variance",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-generic-math.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏static abstract و ریاضی عمومی",
          "d": "عضو ایستای انتزاعی در interface — قابلیت تازهٔ زبان."
        },
        "en": {
          "t": "Static abstract members and generic math",
          "d": "Abstract static interface members — a recent language capability."
        },
        "kw": "static abstract generic math inumber",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-collections.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مجموعه‌ها",
          "d": "‏List، Dictionary، HashSet، Queue — و پیچیدگی زمانی هرکدام."
        },
        "en": {
          "t": "Collections",
          "d": "List, Dictionary, HashSet, Queue — and each one's complexity."
        },
        "kw": "list dictionary hashset queue complexity",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-iterators.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏iterator و yield",
          "d": "تولید تنبل، و ماشین حالتی که کامپایلر می‌سازد."
        },
        "en": {
          "t": "Iterators and yield",
          "d": "Lazy sequences, and the state machine the compiler builds."
        },
        "kw": "yield ienumerable iterator lazy state machine",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-linq-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏LINQ ۱: مبانی و اجرای معوق",
          "d": "چرا کوئری تو هنوز اجرا نشده است."
        },
        "en": {
          "t": "LINQ 1: basics and deferred execution",
          "d": "Why your query has not run yet."
        },
        "kw": "linq deferred lazy enumerable query",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-linq-advanced.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏LINQ ۲: عملگرهای پیشرفته",
          "d": "‏GroupBy، Join، SelectMany، Aggregate و دام‌های کارایی."
        },
        "en": {
          "t": "LINQ 2: advanced operators",
          "d": "GroupBy, Join, SelectMany, Aggregate and the performance traps."
        },
        "kw": "groupby join selectmany aggregate performance",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-expression-trees.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏expression tree",
          "d": "کد به‌عنوان داده — پایه‌ای که ‎EF Core‎ رویش ساخته شده."
        },
        "en": {
          "t": "Expression trees",
          "d": "Code as data — the foundation EF Core is built on."
        },
        "kw": "expression tree lambda visitor compile",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-delegates.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏delegate، event و lambda",
          "d": "تابع به‌عنوان مقدار، و الگوی رویداد."
        },
        "en": {
          "t": "Delegates, events and lambdas",
          "d": "Functions as values, and the event pattern."
        },
        "kw": "delegate event func action lambda",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-closures.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏closure و دام‌هایش",
          "d": "متغیر ربوده‌شده در حلقه — کلاسیک‌ترین باگ."
        },
        "en": {
          "t": "Closures and their traps",
          "d": "Captured loop variables — the classic bug."
        },
        "kw": "closure capture loop variable allocation",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-pattern-matching.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏pattern matching",
          "d": "‏switch expression، الگوی ویژگی، لیست و رابطه‌ای."
        },
        "en": {
          "t": "Pattern matching",
          "d": "Switch expressions, property, list and relational patterns."
        },
        "kw": "pattern switch expression property list relational",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-exceptions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "خطا و exception",
          "d": "کِی بگیر، کِی نگیر، ‎filter‎ و خطای سفارشی."
        },
        "en": {
          "t": "Exceptions",
          "d": "When to catch, when not to, filters and custom exceptions."
        },
        "kw": "exception filter custom rethrow stacktrace",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-disposable.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏IDisposable و IAsyncDisposable",
          "d": "‏using، الگوی dispose و منابعی که GC نمی‌گیرد."
        },
        "en": {
          "t": "IDisposable and IAsyncDisposable",
          "d": "using, the dispose pattern, and resources the GC will not reclaim."
        },
        "kw": "idisposable using finalizer safehandle",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-async-model.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏async/await: مدل ذهنی",
          "d": "‏async یعنی «نخ را نگه ندار»، نه «سریع‌تر»."
        },
        "en": {
          "t": "async/await: the mental model",
          "d": "async means “do not hold the thread”, not “faster”."
        },
        "kw": "async await state machine continuation",
        "cap": 0
      },
      {
        "n": "23",
        "file": "23-tasks.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Task و cancellation",
          "d": "‏WhenAll، WhenAny، CancellationToken و مهلت."
        },
        "en": {
          "t": "Tasks and cancellation",
          "d": "WhenAll, WhenAny, CancellationToken and timeouts."
        },
        "kw": "task whenall cancellation token timeout",
        "cap": 0
      },
      {
        "n": "24",
        "file": "24-async-pitfalls.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "دام‌های async",
          "d": "‏async void، بن‌بست، ‎ConfigureAwait‎ و ‎sync over async‎."
        },
        "en": {
          "t": "Async pitfalls",
          "d": "async void, deadlocks, ConfigureAwait and sync-over-async."
        },
        "kw": "deadlock async void configureawait sync over async",
        "cap": 0
      },
      {
        "n": "25",
        "file": "25-valuetask.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏ValueTask و IAsyncEnumerable",
          "d": "جریان ناهمگام و کاهش تخصیص."
        },
        "en": {
          "t": "ValueTask and IAsyncEnumerable",
          "d": "Async streams and reducing allocations."
        },
        "kw": "valuetask iasyncenumerable await foreach",
        "cap": 0
      },
      {
        "n": "26",
        "file": "26-channels.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Channel",
          "d": "تولیدکننده و مصرف‌کننده، با فشار برگشتی."
        },
        "en": {
          "t": "Channels",
          "d": "Producer/consumer with backpressure."
        },
        "kw": "channel producer consumer backpressure bounded",
        "cap": 0
      },
      {
        "n": "27",
        "file": "27-threading.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "نخ، قفل و atomic",
          "d": "‏lock، Interlocked، مدل حافظه و مسابقهٔ داده."
        },
        "en": {
          "t": "Threads, locks and atomics",
          "d": "lock, Interlocked, the memory model and data races."
        },
        "kw": "thread lock interlocked volatile race",
        "cap": 0
      },
      {
        "n": "28",
        "file": "28-span.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Span و Memory",
          "d": "کار با حافظه بدون کپی و بدون تخصیص."
        },
        "en": {
          "t": "Span and Memory",
          "d": "Working with memory without copying or allocating."
        },
        "kw": "span memory stackalloc slice arraypool",
        "cap": 0
      },
      {
        "n": "29",
        "file": "29-gc.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تخصیص و زباله‌روب",
          "d": "نسل‌ها، ‎LOH‎، و اینکه چرا کد تو مکث می‌کند."
        },
        "en": {
          "t": "Allocation and the GC",
          "d": "Generations, the LOH, and why your code pauses."
        },
        "kw": "gc generation loh allocation pause server gc",
        "cap": 0
      },
      {
        "n": "30",
        "file": "30-json.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏System.Text.Json",
          "d": "سریال‌سازی، تبدیل‌گر سفارشی و منبع تولید."
        },
        "en": {
          "t": "System.Text.Json",
          "d": "Serialisation, custom converters and source generation."
        },
        "kw": "json serialize converter polymorphic sourcegen",
        "cap": 0
      },
      {
        "n": "31",
        "file": "31-datetime.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "زمان و تاریخ",
          "d": "‏DateTimeOffset، TimeProvider، منطقهٔ زمانی و تقویم فارسی."
        },
        "en": {
          "t": "Dates and times",
          "d": "DateTimeOffset, TimeProvider, time zones and the Persian calendar."
        },
        "kw": "datetime offset timezone timeprovider persian calendar",
        "cap": 0
      },
      {
        "n": "32",
        "file": "32-regex.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عبارت باقاعده",
          "d": "‏Regex، منبع تولید، و خطر بازگشت فاجعه‌بار."
        },
        "en": {
          "t": "Regular expressions",
          "d": "Regex, source generation, and catastrophic backtracking."
        },
        "kw": "regex backtracking generated compiled",
        "cap": 0
      },
      {
        "n": "33",
        "file": "33-reflection.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏reflection و attribute",
          "d": "قدرت زمان اجرا، و هزینه‌اش."
        },
        "en": {
          "t": "Reflection and attributes",
          "d": "Run-time power, and what it costs."
        },
        "kw": "reflection attribute metadata activator",
        "cap": 0
      },
      {
        "n": "34",
        "file": "34-source-generators.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏source generator",
          "d": "کد تولید کن به‌جای reflection — سریع‌تر و AOT-پسند."
        },
        "en": {
          "t": "Source generators",
          "d": "Generate code instead of reflecting — faster and AOT-friendly."
        },
        "kw": "source generator roslyn incremental aot",
        "cap": 0
      },
      {
        "n": "35",
        "file": "35-analyzers.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏analyzer و قواعد کد",
          "d": "قانون تیمی که کامپایلر اجرایش می‌کند."
        },
        "en": {
          "t": "Analyzers and code rules",
          "d": "Team rules the compiler enforces for you."
        },
        "kw": "analyzer roslyn editorconfig warning as error",
        "cap": 0
      },
      {
        "n": "36",
        "file": "36-interop.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏interop و P/Invoke",
          "d": "فراخوانی کد بومی و ‎LibraryImport‎."
        },
        "en": {
          "t": "Interop and P/Invoke",
          "d": "Calling native code and LibraryImport."
        },
        "kw": "pinvoke interop marshal libraryimport native",
        "cap": 0
      },
      {
        "n": "37",
        "file": "37-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست با xUnit",
          "d": "‏fixture، تست پارامتری، mock و assertion خوانا."
        },
        "en": {
          "t": "Testing with xUnit",
          "d": "Fixtures, parameterised tests, mocking and readable assertions."
        },
        "kw": "xunit theory fixture moq fluentassertions",
        "cap": 0
      },
      {
        "n": "38",
        "file": "38-benchmark.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏benchmark",
          "d": "‏BenchmarkDotNet: اندازه‌گیری قبل از بهینه‌سازی."
        },
        "en": {
          "t": "Benchmarking",
          "d": "BenchmarkDotNet: measure before you optimise."
        },
        "kw": "benchmarkdotnet memory diagnoser baseline",
        "cap": 0
      },
      {
        "n": "39",
        "file": "39-project.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ساختار پروژه و NuGet",
          "d": "چند پروژه، وابستگی مرکزی و انتشار بسته."
        },
        "en": {
          "t": "Project structure and NuGet",
          "d": "Multiple projects, central package management and publishing."
        },
        "kw": "solution csproj nuget central package management",
        "cap": 0
      },
      {
        "n": "40",
        "file": "40-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "‏CLI واقعی با آرگومان، خطا، لاگ و تست."
        },
        "en": {
          "t": "Project 1 — a command-line tool",
          "d": "A real CLI with arguments, error handling, logging and tests."
        },
        "kw": "capstone cli",
        "cap": 1
      },
      {
        "n": "41",
        "file": "41-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — کتابخانهٔ قابل انتشار",
          "d": "‏API تمیز، تست کامل، benchmark و بستهٔ NuGet."
        },
        "en": {
          "t": "Project 2 — a publishable library",
          "d": "A clean API, full tests, benchmarks and a NuGet package."
        },
        "kw": "capstone library nuget",
        "cap": 2
      },
      {
        "n": "42",
        "file": "42-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — پردازشگر همروند پرکار",
          "d": "‏Channel، async، cancellation، pooling و کارایی اندازه‌گیری‌شده."
        },
        "en": {
          "t": "Project 3 — a high-throughput concurrent processor",
          "d": "Channels, async, cancellation, pooling and measured performance."
        },
        "kw": "capstone concurrency performance",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 42,
      "exercises": 723,
      "minutes": 3655,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "10-aspnet-core",
    "dir": "10-aspnet-core",
    "accent": "#512BD4",
    "accentDark": null,
    "cat": "backend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3.2 9.5h17.6M3.2 14.5h17.6\"/><path d=\"M12 3a15 15 0 0 0 0 18 15 15 0 0 0 0-18z\"/>",
    "locked": false,
    "fa": {
      "name": "ASP.NET Core",
      "desc": "از pipeline و DI تا EF Core، احراز هویت، SignalR، تست و استقرار روی لینوکس.",
      "intro": "این مسیر فرض می‌کند ‎C#‎ را می‌دانی و می‌خواهی با آن سرویس وب بنویسی — سرویسی که تست دارد، امن است، و روی یک سرور لینوکسی پشت Nginx کار می‌کند."
    },
    "en": {
      "name": "ASP.NET Core",
      "desc": "From the pipeline and DI to EF Core, authentication, SignalR, testing and deploying on Linux.",
      "intro": "This track assumes you know C# and want to build web services with it — services that are tested, secure, and running on a Linux server behind Nginx."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-mental-model.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدل ذهنی: host، pipeline، DI",
          "d": "سه چیزی که اگر بفهمی، بقیه واضح می‌شود."
        },
        "en": {
          "t": "The mental model: host, pipeline, DI",
          "d": "Understand these three and the rest follows."
        },
        "kw": "host builder pipeline middleware di",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-minimal-vs-mvc.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Minimal API در برابر Controller",
          "d": "کدام برای کدام پروژه، با معیار روشن."
        },
        "en": {
          "t": "Minimal APIs versus controllers",
          "d": "Which for which project, with clear criteria."
        },
        "kw": "minimal api controller mvc endpoint",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسیریابی",
          "d": "الگو، پارامتر، constraint و اولویت تطبیق."
        },
        "en": {
          "t": "Routing",
          "d": "Patterns, parameters, constraints and match precedence."
        },
        "kw": "routing route constraint parameter precedence",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-middleware.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏middleware و ترتیبش",
          "d": "ترتیب اشتباه = خطای بی‌معنی. با نمودار جریان."
        },
        "en": {
          "t": "Middleware and its order",
          "d": "The wrong order gives a meaningless error. With a flow diagram."
        },
        "kw": "middleware order use run map short-circuit",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-filters.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "فیلتر و endpoint filter",
          "d": "منطق عرضی، بدون تکرار در هر اکشن."
        },
        "en": {
          "t": "Filters and endpoint filters",
          "d": "Cross-cutting logic without repeating it in every action."
        },
        "kw": "filter action result exception endpoint filter",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-di.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏DI و طول عمر",
          "d": "‏singleton، scoped، transient — و باگ وابستگی اسیر."
        },
        "en": {
          "t": "DI and lifetimes",
          "d": "Singleton, scoped, transient — and the captive dependency bug."
        },
        "kw": "di lifetime singleton scoped transient captive",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-options.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "الگوی Options",
          "d": "‏IOptions، IOptionsSnapshot، اعتبارسنجی پیکربندی."
        },
        "en": {
          "t": "The Options pattern",
          "d": "IOptions, IOptionsSnapshot and configuration validation."
        },
        "kw": "options ioptions snapshot monitor validate",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-config.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پیکربندی، محیط و اسرار",
          "d": "‏appsettings، متغیر محیطی، user-secrets و اولویت‌ها."
        },
        "en": {
          "t": "Configuration, environments and secrets",
          "d": "appsettings, environment variables, user-secrets and precedence."
        },
        "kw": "configuration environment secret keyvault precedence",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-binding.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏model binding",
          "d": "از درخواست خام تا شیء — و جایی که بی‌صدا شکست می‌خورد."
        },
        "en": {
          "t": "Model binding",
          "d": "From raw request to object — and where it silently fails."
        },
        "kw": "binding frombody fromquery custom binder",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-validation.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اعتبارسنجی با DataAnnotations",
          "d": "اعتبارسنجی داخلی و محدودیت‌هایش."
        },
        "en": {
          "t": "Validation with DataAnnotations",
          "d": "Built-in validation and its limits."
        },
        "kw": "dataannotation validation modelstate required",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-fluentvalidation.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏FluentValidation",
          "d": "قاعده‌های پیچیده، خوانا و تست‌پذیر — جدا از مدل."
        },
        "en": {
          "t": "FluentValidation",
          "d": "Complex rules, readable and testable — separate from the model."
        },
        "kw": "fluentvalidation validator rule async cascade",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-mapping.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نگاشت شیء",
          "d": "‏AutoMapper، Mapperly و نگاشت دستی — کدام کِی."
        },
        "en": {
          "t": "Object mapping",
          "d": "AutoMapper, Mapperly and hand-written mapping — which when."
        },
        "kw": "automapper mapperly dto projection mapping",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-efcore-model.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏EF Core ۱: DbContext و مدل",
          "d": "‏entity، رابطه، پیکربندی fluent و قرارداد."
        },
        "en": {
          "t": "EF Core 1: DbContext and the model",
          "d": "Entities, relationships, fluent configuration and conventions."
        },
        "kw": "efcore dbcontext entity fluent api relationship",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-efcore-migrations.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏EF Core ۲: مهاجرت",
          "d": "تغییر شِما به‌صورت نسخه‌بندی‌شده، و مهاجرت در production."
        },
        "en": {
          "t": "EF Core 2: migrations",
          "d": "Versioned schema change, and migrating in production."
        },
        "kw": "migration add-migration update-database idempotent script",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-efcore-query.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏EF Core ۳: کوئری و بارگذاری",
          "d": "‏Include، projection، split query و کوئری سمت کلاینت."
        },
        "en": {
          "t": "EF Core 3: querying and loading",
          "d": "Include, projections, split queries and client-side evaluation."
        },
        "kw": "include projection split query client evaluation",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-efcore-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏EF Core ۴: کارایی و ‎N+1‎",
          "d": "چرا صفحهٔ فهرست تو ۳۰ ثانیه طول می‌کشد."
        },
        "en": {
          "t": "EF Core 4: performance and N+1",
          "d": "Why your list page takes thirty seconds."
        },
        "kw": "n+1 asnotracking compiled query batching profiling",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-efcore-tracking.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏EF Core ۵: tracking، همزمانی، تراکنش",
          "d": "‏change tracker، همزمانی خوش‌بینانه و ‎SaveChanges‎."
        },
        "en": {
          "t": "EF Core 5: tracking, concurrency, transactions",
          "d": "The change tracker, optimistic concurrency and SaveChanges."
        },
        "kw": "tracking concurrency rowversion transaction savechanges",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-efcore-advanced.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏EF Core ۶: پیشرفته",
          "d": "‏SQL خام، view، interceptor، فیلتر سراسری و چند DbContext."
        },
        "en": {
          "t": "EF Core 6: advanced",
          "d": "Raw SQL, views, interceptors, global filters and multiple contexts."
        },
        "kw": "raw sql interceptor global filter keyless owned",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-dapper-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Dapper ۱: مبانی",
          "d": "‏micro-ORM: کوئری، پارامتر و نگاشت."
        },
        "en": {
          "t": "Dapper 1: the basics",
          "d": "A micro-ORM: queries, parameters and mapping."
        },
        "kw": "dapper query parameter execute micro orm",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-dapper-advanced.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Dapper ۲: پیشرفته",
          "d": "نگاشت چندگانه، چند نتیجه، ‎bulk‎ و تراکنش."
        },
        "en": {
          "t": "Dapper 2: advanced",
          "d": "Multi-mapping, multiple result sets, bulk operations and transactions."
        },
        "kw": "dapper multimap querymultiple bulk transaction",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-ef-vs-dapper.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏EF Core یا Dapper؟",
          "d": "ماتریس تصمیم، و الگوی استفادهٔ همزمان."
        },
        "en": {
          "t": "EF Core or Dapper?",
          "d": "A decision matrix, and using both together."
        },
        "kw": "comparison decision hybrid read write",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-repository.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Repository و Unit of Work",
          "d": "کِی لایهٔ مفیدی است و کِی فقط یک لایهٔ اضافه."
        },
        "en": {
          "t": "Repository and Unit of Work",
          "d": "When it is a useful layer and when it is just another one."
        },
        "kw": "repository unit of work abstraction testability",
        "cap": 0
      },
      {
        "n": "23",
        "file": "23-cqrs-mediatr.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏CQRS با MediatR",
          "d": "جدا کردن خواندن از نوشتن، و pipeline behavior."
        },
        "en": {
          "t": "CQRS with MediatR",
          "d": "Separating reads from writes, and pipeline behaviours."
        },
        "kw": "mediatr cqrs handler behavior notification",
        "cap": 0
      },
      {
        "n": "24",
        "file": "24-openapi.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏OpenAPI و Swagger",
          "d": "مستند زنده‌ای که با کد هماهنگ می‌ماند."
        },
        "en": {
          "t": "OpenAPI and Swagger",
          "d": "Living documentation that stays in step with the code."
        },
        "kw": "openapi swagger swashbuckle schema example",
        "cap": 0
      },
      {
        "n": "25",
        "file": "25-versioning.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نسخه‌گذاری ‎API‎",
          "d": "تغییر بدون شکستن کلاینت‌های موجود."
        },
        "en": {
          "t": "API versioning",
          "d": "Changing without breaking existing clients."
        },
        "kw": "versioning header url deprecation sunset",
        "cap": 0
      },
      {
        "n": "26",
        "file": "26-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدیریت خطای سراسری",
          "d": "‏ProblemDetails، ‎IExceptionHandler‎ و پاسخ یکدست."
        },
        "en": {
          "t": "Global error handling",
          "d": "ProblemDetails, IExceptionHandler and consistent responses."
        },
        "kw": "problemdetails exception handler middleware rfc7807",
        "cap": 0
      },
      {
        "n": "27",
        "file": "27-logging.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "لاگ ساخت‌یافته",
          "d": "‏Serilog، scope، enricher و لاگی که بشود جستجو کرد."
        },
        "en": {
          "t": "Structured logging",
          "d": "Serilog, scopes, enrichers and logs you can search."
        },
        "kw": "serilog structured scope enricher sink",
        "cap": 0
      },
      {
        "n": "28",
        "file": "28-telemetry.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏OpenTelemetry",
          "d": "‏trace، متریک و ردیابی یک درخواست در چند سرویس."
        },
        "en": {
          "t": "OpenTelemetry",
          "d": "Traces, metrics and following one request across services."
        },
        "kw": "opentelemetry trace span metric exporter",
        "cap": 0
      },
      {
        "n": "29",
        "file": "29-healthchecks.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏health check",
          "d": "تفاوت «بالا هست» و «آمادهٔ ترافیک است»."
        },
        "en": {
          "t": "Health checks",
          "d": "The difference between “it is up” and “it is ready”."
        },
        "kw": "healthcheck liveness readiness probe",
        "cap": 0
      },
      {
        "n": "30",
        "file": "30-caching.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کش",
          "d": "‏memory، distributed با Redis، ‎output cache‎ و باطل‌سازی."
        },
        "en": {
          "t": "Caching",
          "d": "In-memory, distributed with Redis, output caching and invalidation."
        },
        "kw": "memorycache redis distributed output cache invalidation",
        "cap": 0
      },
      {
        "n": "31",
        "file": "31-ratelimit.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "محدودیت نرخ",
          "d": "‏fixed، sliding، token bucket و concurrency."
        },
        "en": {
          "t": "Rate limiting",
          "d": "Fixed, sliding, token bucket and concurrency limiters."
        },
        "kw": "ratelimit fixed sliding token bucket partition",
        "cap": 0
      },
      {
        "n": "32",
        "file": "32-authn.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "احراز هویت: cookie و JWT",
          "d": "چه کسی هستی — و توکن کجا باید بماند."
        },
        "en": {
          "t": "Authentication: cookies and JWT",
          "d": "Who you are — and where the token should live."
        },
        "kw": "authentication jwt cookie bearer refresh token",
        "cap": 0
      },
      {
        "n": "33",
        "file": "33-identity.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏ASP.NET Core Identity",
          "d": "کاربر، رمز، تأیید ایمیل، ‎2FA‎ و قفل حساب."
        },
        "en": {
          "t": "ASP.NET Core Identity",
          "d": "Users, passwords, email confirmation, 2FA and lockout."
        },
        "kw": "identity user password 2fa lockout claims",
        "cap": 0
      },
      {
        "n": "34",
        "file": "34-oauth-oidc.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏OAuth2 و OIDC",
          "d": "ورود با ارائه‌دهندهٔ بیرونی، و جریان‌های استاندارد."
        },
        "en": {
          "t": "OAuth2 and OIDC",
          "d": "Logging in with an external provider, and the standard flows."
        },
        "kw": "oauth oidc pkce authorization code identity server",
        "cap": 0
      },
      {
        "n": "35",
        "file": "35-authz.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مجوز",
          "d": "‏policy، role، claim و مجوز مبتنی بر منبع."
        },
        "en": {
          "t": "Authorisation",
          "d": "Policies, roles, claims and resource-based authorisation."
        },
        "kw": "authorization policy role claim requirement handler",
        "cap": 0
      },
      {
        "n": "36",
        "file": "36-security.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "امنیت",
          "d": "‏CORS، HTTPS، antiforgery، هدرهای امنیتی و ده مورد OWASP."
        },
        "en": {
          "t": "Security",
          "d": "CORS, HTTPS, antiforgery, security headers and the OWASP top ten."
        },
        "kw": "cors https antiforgery csp owasp hsts",
        "cap": 0
      },
      {
        "n": "37",
        "file": "37-files.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "آپلود فایل و استریم",
          "d": "فایل حجیم بدون پر کردن حافظه، و ذخیره‌سازی امن."
        },
        "en": {
          "t": "File uploads and streaming",
          "d": "Large files without filling memory, and safe storage."
        },
        "kw": "upload multipart stream formfile antivirus",
        "cap": 0
      },
      {
        "n": "38",
        "file": "38-localization.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "بومی‌سازی",
          "d": "چندزبانگی، منابع، قالب عدد و تاریخ فارسی."
        },
        "en": {
          "t": "Localisation",
          "d": "Multiple languages, resources, Persian number and date formats."
        },
        "kw": "localization resx culture rtl persian",
        "cap": 0
      },
      {
        "n": "39",
        "file": "39-background.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "سرویس پس‌زمینه",
          "d": "‏BackgroundService، صف کار و کار زمان‌بندی‌شده."
        },
        "en": {
          "t": "Background services",
          "d": "BackgroundService, work queues and scheduled jobs."
        },
        "kw": "backgroundservice hostedservice queue hangfire quartz",
        "cap": 0
      },
      {
        "n": "40",
        "file": "40-signalr.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SignalR",
          "d": "ارتباط بی‌درنگ، گروه، و مقیاس افقی با backplane."
        },
        "en": {
          "t": "SignalR",
          "d": "Real-time communication, groups and scaling out with a backplane."
        },
        "kw": "signalr hub group backplane websocket",
        "cap": 0
      },
      {
        "n": "41",
        "file": "41-grpc.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏gRPC",
          "d": "قرارداد protobuf، استریم، و کِی از REST بهتر است."
        },
        "en": {
          "t": "gRPC",
          "d": "Protobuf contracts, streaming, and when it beats REST."
        },
        "kw": "grpc protobuf streaming interceptor",
        "cap": 0
      },
      {
        "n": "42",
        "file": "42-testing-unit.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست واحد",
          "d": "تست کنترلر، سرویس و اعتبارسنجی — بدون پایگاه‌داده."
        },
        "en": {
          "t": "Unit testing",
          "d": "Testing controllers, services and validators — without a database."
        },
        "kw": "unit test moq xunit isolation",
        "cap": 0
      },
      {
        "n": "43",
        "file": "43-testing-integration.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "تست یکپارچه",
          "d": "‏WebApplicationFactory و پایگاه‌دادهٔ واقعی با Testcontainers."
        },
        "en": {
          "t": "Integration testing",
          "d": "WebApplicationFactory and a real database with Testcontainers."
        },
        "kw": "webapplicationfactory testcontainers integration respawn",
        "cap": 0
      },
      {
        "n": "44",
        "file": "44-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کارایی و پروفایل",
          "d": "اندازه‌گیری، گلوگاه، تست بار و بهینه‌سازی واقعی."
        },
        "en": {
          "t": "Performance and profiling",
          "d": "Measure, find the bottleneck, load test, then optimise."
        },
        "kw": "performance profiling load test k6 dotnet-counters",
        "cap": 0
      },
      {
        "n": "45",
        "file": "45-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "استقرار روی لینوکس",
          "d": "داکر، Nginx، ‎systemd‎، health و پیکربندی production."
        },
        "en": {
          "t": "Deploying on Linux",
          "d": "Docker, Nginx, systemd, health checks and production configuration."
        },
        "kw": "deploy docker nginx systemd kestrel reverse proxy",
        "cap": 0
      },
      {
        "n": "46",
        "file": "46-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — ‎API‎ با پایگاه‌داده",
          "d": "‏CRUD کامل با EF Core، FluentValidation و تست."
        },
        "en": {
          "t": "Project 1 — an API with a database",
          "d": "Full CRUD with EF Core, FluentValidation and tests."
        },
        "kw": "capstone crud efcore",
        "cap": 1
      },
      {
        "n": "47",
        "file": "47-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۲ — ‎API‎ امن و لایه‌بندی‌شده",
          "d": "‏Identity، JWT، CQRS، کش، لاگ و تست یکپارچه."
        },
        "en": {
          "t": "Project 2 — a secured, layered API",
          "d": "Identity, JWT, CQRS, caching, logging and integration tests."
        },
        "kw": "capstone identity cqrs",
        "cap": 2
      },
      {
        "n": "48",
        "file": "48-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 240,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس production",
          "d": "مشاهده‌پذیری، بی‌درنگ، صف، محدودیت نرخ و استقرار خودکار."
        },
        "en": {
          "t": "Project 3 — a production service",
          "d": "Observability, real-time features, queues, rate limiting and automated deployment."
        },
        "kw": "capstone production observability",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 48,
      "exercises": 831,
      "minutes": 4365,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "11-go",
    "dir": "11-go",
    "accent": "#00ADD8",
    "accentDark": null,
    "cat": "backend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M7.5 10.5h4M6 13.5h4\" stroke-linecap=\"round\"/><circle cx=\"15.5\" cy=\"12\" r=\"2.8\"/>",
    "locked": false,
    "fa": {
      "name": "زبان Go",
      "desc": "همروندی، interface، خطا به‌عنوان مقدار، و باینری تک‌فایلی که هرجا اجرا می‌شود.",
      "intro": "Go عمداً کوچک است. کل زبان را در یک هفته یاد می‌گیری؛ سختی‌اش جای دیگری است — در فکر کردن به همروندی و در پذیرفتن اینکه خطا هم یک مقدار عادی است."
    },
    "en": {
      "name": "Go",
      "desc": "Concurrency, interfaces, errors as values, and a single binary that runs anywhere.",
      "intro": "Go is deliberately small. You learn the whole language in a week; the difficulty lies elsewhere — in thinking about concurrency and in accepting that an error is just a value."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "چرا Go؛ نصب و اولین برنامه",
          "d": "فلسفهٔ زبان و ابزار go."
        },
        "en": {
          "t": "Why Go; setup and first program",
          "d": "The language's philosophy and the go tool."
        },
        "kw": "go install gopath module hello",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-types.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نوع‌ها، struct و method",
          "d": "بدون کلاس، بدون وراثت."
        },
        "en": {
          "t": "Types, structs and methods",
          "d": "No classes, no inheritance."
        },
        "kw": "struct method receiver type",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-interface.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "interface — متفاوت از آنچه فکر می‌کنی",
          "d": "پیاده‌سازی ضمنی، و interface کوچک."
        },
        "en": {
          "t": "Interfaces — not what you expect",
          "d": "Implicit satisfaction, and small interfaces."
        },
        "kw": "interface implicit duck typing",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خطا به‌عنوان مقدار",
          "d": "errors.Is، errors.As، wrap — و چرا panic نه."
        },
        "en": {
          "t": "Errors as values",
          "d": "errors.Is, errors.As, wrapping — and why not panic."
        },
        "kw": "error wrap errors.is panic recover",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-slice-map.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "slice و map — دام‌های حافظه",
          "d": "append، ظرفیت، و نشتی که کسی انتظارش را ندارد."
        },
        "en": {
          "t": "Slices and maps — the memory traps",
          "d": "append, capacity, and the leak nobody expects."
        },
        "kw": "slice map append capacity aliasing",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-goroutine.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "goroutine و مدل همروندی",
          "d": "ارزان است، اما رایگان نیست."
        },
        "en": {
          "t": "Goroutines and the concurrency model",
          "d": "Cheap, but not free."
        },
        "kw": "goroutine concurrency scheduler leak",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-channel.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "channel و select",
          "d": "ارتباط به‌جای اشتراک حافظه."
        },
        "en": {
          "t": "Channels and select",
          "d": "Communicate instead of sharing memory."
        },
        "kw": "channel select buffered deadlock",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-sync.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "sync، mutex و context",
          "d": "وقتی channel جواب نمی‌دهد، و لغو کار."
        },
        "en": {
          "t": "sync, mutex and context",
          "d": "When a channel is the wrong tool, and cancelling work."
        },
        "kw": "mutex waitgroup context cancel",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "پکیج و ماژول",
          "d": "سازماندهی کد و مدیریت وابستگی."
        },
        "en": {
          "t": "Packages and modules",
          "d": "Organising code and managing dependencies."
        },
        "kw": "module package import vendor",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست و benchmark",
          "d": "تست جدولی و اندازه‌گیری واقعی."
        },
        "en": {
          "t": "Testing and benchmarking",
          "d": "Table-driven tests and real measurement."
        },
        "kw": "test benchmark table driven coverage",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-http.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "HTTP server استاندارد",
          "d": "بدون فریم‌ورک، با کتابخانهٔ استاندارد."
        },
        "en": {
          "t": "The standard HTTP server",
          "d": "No framework, just the standard library."
        },
        "kw": "http handler mux middleware server",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-json.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "JSON و struct tag",
          "d": "کدگذاری، رمزگشایی و میدان‌های اختیاری."
        },
        "en": {
          "t": "JSON and struct tags",
          "d": "Encoding, decoding and optional fields."
        },
        "kw": "json marshal unmarshal tag",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-db.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اتصال به پایگاه‌داده",
          "d": "database/sql، pool و تراکنش."
        },
        "en": {
          "t": "Talking to a database",
          "d": "database/sql, pooling and transactions."
        },
        "kw": "database sql pool transaction sqlx",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-structure.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ساختار پروژه در Go",
          "d": "الگوهای رایج، و اینکه چرا ساده‌تر بهتر است."
        },
        "en": {
          "t": "Project structure in Go",
          "d": "Common layouts, and why simpler is better."
        },
        "kw": "project layout cmd internal pkg",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-profiling.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پروفایلینگ با pprof",
          "d": "پیدا کردن گلوگاه واقعی."
        },
        "en": {
          "t": "Profiling with pprof",
          "d": "Finding the real bottleneck."
        },
        "kw": "pprof profile cpu memory trace",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کامپایل و استقرار",
          "d": "باینری تک‌فایل، کراس‌کامپایل و ایمیج کوچک."
        },
        "en": {
          "t": "Building and deploying",
          "d": "A single binary, cross-compilation and tiny images."
        },
        "kw": "build cross compile scratch distroless",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "خواندن ورودی، پردازش موازی و خروجی تمیز."
        },
        "en": {
          "t": "Project 1 — a CLI tool",
          "d": "Reading input, parallel processing and clean output."
        },
        "kw": "capstone cli",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — REST API با پایگاه‌داده",
          "d": "لایه‌بندی، تست و مدیریت خطا."
        },
        "en": {
          "t": "Project 2 — a REST API with a database",
          "d": "Layering, tests and error handling."
        },
        "kw": "capstone api",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس همروند پرکار",
          "d": "worker pool، context، graceful shutdown و پروفایل."
        },
        "en": {
          "t": "Project 3 — a high-throughput concurrent service",
          "d": "Worker pools, context, graceful shutdown and profiling."
        },
        "kw": "capstone concurrency",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1620,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "12-python",
    "dir": "12-python",
    "accent": "#3776AB",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M12 3c-3 0-4.5 1.2-4.5 3v2.5h4.6M12 3c3 0 4.5 1.2 4.5 3v4c0 1.8-1.5 3-4.5 3H9c-2.5 0-4.5 1.4-4.5 3.5V18c0 1.8 1.5 3 4.5 3\"/><path d=\"M12 21c3 0 4.5-1.2 4.5-3v-2.5h-4.6\" /><circle cx=\"9.6\" cy=\"6.2\" r=\".6\" fill=\"currentColor\"/><circle cx=\"14.4\" cy=\"17.8\" r=\".6\" fill=\"currentColor\"/>",
    "locked": false,
    "fa": {
      "name": "پایتون",
      "desc": "از محیط مجازی و ساختمان داده تا generator، decorator، type hint و تست.",
      "intro": "پایتون آسان شروع می‌شود و همان آسانی، پروژه‌های بزرگ را خراب می‌کند. این مسیر از همان اول عادت‌هایی می‌سازد — محیط مجازی، type hint، تست — که پروژهٔ هزار خطی‌ات را قابل نگهداری نگه می‌دارد."
    },
    "en": {
      "name": "Python",
      "desc": "From virtual environments and data structures to generators, decorators, type hints and testing.",
      "intro": "Python starts easy, and that same easiness is what ruins large projects. This track builds the habits — virtual environments, type hints, tests — that keep a thousand-line project maintainable."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-setup.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "نصب، محیط مجازی، pip",
          "d": "چرا هرگز روی پایتون سیستم نصب نکنی."
        },
        "en": {
          "t": "Setup, virtual environments, pip",
          "d": "Why you never install into the system Python."
        },
        "kw": "venv pip virtualenv requirements",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-types.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌ها و ساختمان داده",
          "d": "list، dict، set، tuple — و هزینهٔ هرکدام."
        },
        "en": {
          "t": "Types and data structures",
          "d": "list, dict, set, tuple — and what each costs."
        },
        "kw": "list dict set tuple mutable",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تابع، آرگومان، scope",
          "d": "آرگومان پیش‌فرض تغییرپذیر: کلاسیک‌ترین دام."
        },
        "en": {
          "t": "Functions, arguments, scope",
          "d": "Mutable default arguments: the classic trap."
        },
        "kw": "function argument default scope closure",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-oop.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کلاس و مدل شیءگرا",
          "d": "dunder، property، dataclass."
        },
        "en": {
          "t": "Classes and the object model",
          "d": "Dunder methods, properties, dataclasses."
        },
        "kw": "class dunder property dataclass",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "ماژول و پکیج",
          "d": "import، مسیر، و واردکردن دایره‌ای."
        },
        "en": {
          "t": "Modules and packages",
          "d": "Imports, paths, and circular imports."
        },
        "kw": "module package import __init__",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-comprehension.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "comprehension و iterator",
          "d": "خوانا نوشتن حلقه."
        },
        "en": {
          "t": "Comprehensions and iterators",
          "d": "Writing loops readably."
        },
        "kw": "comprehension iterator iterable enumerate zip",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-generator.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "generator و yield",
          "d": "پردازش داده‌ای که در حافظه جا نمی‌شود."
        },
        "en": {
          "t": "Generators and yield",
          "d": "Processing data that does not fit in memory."
        },
        "kw": "generator yield lazy pipeline",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-decorator.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "decorator",
          "d": "تابعی که تابع را می‌پیچد — و کاربردهای واقعی‌اش."
        },
        "en": {
          "t": "Decorators",
          "d": "A function that wraps a function — and real uses for it."
        },
        "kw": "decorator wraps closure functools",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-context.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "context manager",
          "d": "with، و آزاد کردن مطمئن منابع."
        },
        "en": {
          "t": "Context managers",
          "d": "with, and releasing resources reliably."
        },
        "kw": "context manager with contextlib",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "خطا و exception",
          "d": "سلسله‌مراتب، خطای سفارشی، و کِی نگیریم."
        },
        "en": {
          "t": "Errors and exceptions",
          "d": "The hierarchy, custom errors, and when not to catch."
        },
        "kw": "exception raise custom traceback",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-typing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "type hint و mypy",
          "d": "تایپ اختیاری که باگ‌ها را قبل از اجرا می‌گیرد."
        },
        "en": {
          "t": "Type hints and mypy",
          "d": "Optional typing that catches bugs before run time."
        },
        "kw": "typing mypy annotation protocol generic",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-stdlib.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کتابخانهٔ استاندارد مفید",
          "d": "pathlib، collections، itertools، datetime."
        },
        "en": {
          "t": "The useful standard library",
          "d": "pathlib, collections, itertools, datetime."
        },
        "kw": "pathlib collections itertools datetime",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-io.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فایل، JSON، CSV",
          "d": "خواندن و نوشتن بدون خراب کردن انکودینگ."
        },
        "en": {
          "t": "Files, JSON, CSV",
          "d": "Reading and writing without breaking encodings."
        },
        "kw": "file json csv encoding utf8",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-async.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "async در پایتون",
          "d": "asyncio، و کِی اصلاً کمک نمی‌کند."
        },
        "en": {
          "t": "async in Python",
          "d": "asyncio, and when it does not help at all."
        },
        "kw": "asyncio await coroutine gil",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست با pytest",
          "d": "fixture، parametrize و mock."
        },
        "en": {
          "t": "Testing with pytest",
          "d": "Fixtures, parametrize and mocking."
        },
        "kw": "pytest fixture parametrize mock",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-packaging.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "بسته‌بندی و انتشار",
          "d": "pyproject، ساختار پروژه و انتشار روی PyPI."
        },
        "en": {
          "t": "Packaging and publishing",
          "d": "pyproject, project layout and publishing to PyPI."
        },
        "kw": "pyproject packaging wheel pypi",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — اسکریپت پردازش داده",
          "d": "خواندن CSV، پاک‌سازی و گزارش."
        },
        "en": {
          "t": "Project 1 — a data-processing script",
          "d": "Read a CSV, clean it, produce a report."
        },
        "kw": "capstone script csv",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — کتابخانهٔ تست‌شده",
          "d": "API تمیز، type hint کامل و پوشش تست."
        },
        "en": {
          "t": "Project 2 — a tested library",
          "d": "A clean API, full type hints and test coverage."
        },
        "kw": "capstone library",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — خط لولهٔ داده",
          "d": "generator، همروندی، لاگ و مدیریت خطا."
        },
        "en": {
          "t": "Project 3 — a data pipeline",
          "d": "Generators, concurrency, logging and error handling."
        },
        "kw": "capstone pipeline",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1595,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "13-django",
    "dir": "13-django",
    "accent": "#0C4B33",
    "accentDark": "#44B78B",
    "cat": "backend",
    "ico": "<path d=\"M13.5 3v14.5c0 2-1.6 3.2-4 3.2-3 0-5-2.4-5-6s2-6 5-6c.8 0 1.5.1 2 .4\"/><path d=\"M17.8 8v9M17.8 3.6v1.6\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "جنگو",
      "desc": "ORM، admin، احراز هویت و REST Framework — از پروژهٔ خالی تا استقرار.",
      "intro": "جنگو «باتری‌ها سرجایشان» است: admin، احراز هویت، ORM و migration را از قبل دارد. مهارت واقعی این است که بدانی کدام باتری را استفاده کنی و کِی کنارش بگذاری."
    },
    "en": {
      "name": "Django",
      "desc": "The ORM, admin, authentication and REST Framework — from an empty project to deployment.",
      "intro": "Django is batteries-included: admin, auth, ORM and migrations are already there. The real skill is knowing which battery to use and when to set one aside."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "معماری جنگو و اولین پروژه",
          "d": "project، app، و جریان یک درخواست."
        },
        "en": {
          "t": "Django's architecture and first project",
          "d": "Projects, apps, and the path of a request."
        },
        "kw": "django project app mtv request",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-models.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "model و ORM",
          "d": "تعریف داده، رابطه‌ها و QuerySet."
        },
        "en": {
          "t": "Models and the ORM",
          "d": "Defining data, relationships and QuerySets."
        },
        "kw": "model orm queryset field relation",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-migrations.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "migration",
          "d": "تغییر شِما بدون از دست دادن داده."
        },
        "en": {
          "t": "Migrations",
          "d": "Changing the schema without losing data."
        },
        "kw": "migration makemigrations schema",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-views.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "view و URL",
          "d": "function-based و class-based."
        },
        "en": {
          "t": "Views and URLs",
          "d": "Function-based and class-based views."
        },
        "kw": "view url path cbv fbv",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-templates.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "template",
          "d": "ارث‌بری قالب و context."
        },
        "en": {
          "t": "Templates",
          "d": "Template inheritance and context."
        },
        "kw": "template jinja context tag filter",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "form و اعتبارسنجی",
          "d": "ModelForm و خطاهای قابل‌فهم."
        },
        "en": {
          "t": "Forms and validation",
          "d": "ModelForms and understandable errors."
        },
        "kw": "form modelform validation clean",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-admin.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "admin",
          "d": "سفارشی‌سازی، و کِی نباید به کاربر نهایی بدهی‌اش."
        },
        "en": {
          "t": "The admin",
          "d": "Customising it, and when not to give it to end users."
        },
        "kw": "admin modeladmin inline permission",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "احراز هویت و مجوز",
          "d": "کاربر سفارشی، گروه و permission."
        },
        "en": {
          "t": "Authentication and authorisation",
          "d": "Custom users, groups and permissions."
        },
        "kw": "auth user group permission login",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-drf-1.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "DRF ۱: serializer و view",
          "d": "تبدیل مدل به JSON و برعکس."
        },
        "en": {
          "t": "DRF 1: serializers and views",
          "d": "Turning models into JSON and back."
        },
        "kw": "drf serializer viewset router",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-drf-2.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "DRF ۲: احراز هویت و مجوز",
          "d": "توکن، JWT و permission سفارشی."
        },
        "en": {
          "t": "DRF 2: authentication and permissions",
          "d": "Tokens, JWT and custom permissions."
        },
        "kw": "drf token jwt permission throttle",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-queries.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کوئری بهینه",
          "d": "select_related، prefetch_related و N+1."
        },
        "en": {
          "t": "Optimised queries",
          "d": "select_related, prefetch_related and N+1."
        },
        "kw": "select_related prefetch n+1 explain",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-signals.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "signal و middleware",
          "d": "قدرتمند و خطرناک — کِی استفاده کنیم."
        },
        "en": {
          "t": "Signals and middleware",
          "d": "Powerful and dangerous — when to use them."
        },
        "kw": "signal middleware hook",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-celery.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کش و صف با Celery",
          "d": "کار سنگین را از چرخهٔ درخواست بیرون بیاور."
        },
        "en": {
          "t": "Caching and queues with Celery",
          "d": "Get heavy work out of the request cycle."
        },
        "kw": "celery redis cache task beat",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست",
          "d": "TestCase، client و fixture."
        },
        "en": {
          "t": "Testing",
          "d": "TestCase, the test client and fixtures."
        },
        "kw": "test testcase client factory pytest-django",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-security.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "امنیت",
          "d": "CSRF، XSS، SQL injection و تنظیمات production."
        },
        "en": {
          "t": "Security",
          "d": "CSRF, XSS, SQL injection and production settings."
        },
        "kw": "csrf xss injection security settings",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "استقرار",
          "d": "Gunicorn، Nginx، فایل استاتیک و داکر."
        },
        "en": {
          "t": "Deployment",
          "d": "Gunicorn, Nginx, static files and Docker."
        },
        "kw": "gunicorn nginx static whitenoise docker",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — وبلاگ با admin",
          "d": "مدل، view، قالب و پنل مدیریت."
        },
        "en": {
          "t": "Project 1 — a blog with the admin",
          "d": "Models, views, templates and the admin panel."
        },
        "kw": "capstone blog",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — REST API با DRF",
          "d": "احراز هویت، مجوز، صفحه‌بندی و تست."
        },
        "en": {
          "t": "Project 2 — a REST API with DRF",
          "d": "Authentication, permissions, pagination and tests."
        },
        "kw": "capstone drf api",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — اپ کامل با صف و استقرار",
          "d": "کار پس‌زمینه، کش، کوئری بهینه و استقرار با داکر."
        },
        "en": {
          "t": "Project 3 — a full app with queues and deployment",
          "d": "Background work, caching, optimised queries and a Docker deployment."
        },
        "kw": "capstone celery deploy",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1675,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "14-flask",
    "dir": "14-flask",
    "accent": "#5C5C5C",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M10 3h4M12 3v5.5L7 18.5c-.8 1.5.2 2.5 1.6 2.5h6.8c1.4 0 2.4-1 1.6-2.5L12 8.5\"/><path d=\"M8.6 14h6.8\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "فلسک",
      "desc": "میکروفریم‌ورک: blueprint، SQLAlchemy، JWT و ساختاری که با پروژه بزرگ شود.",
      "intro": "فلسک تقریباً هیچ تصمیمی برایت نمی‌گیرد. این هم آزادی است هم دام: باید خودت ساختار بسازی. این مسیر ساختاری می‌دهد که از یک فایل تا یک سرویس واقعی مقیاس بگیرد."
    },
    "en": {
      "name": "Flask",
      "desc": "The micro-framework: blueprints, SQLAlchemy, JWT and a structure that grows with the project.",
      "intro": "Flask makes almost no decisions for you. That is freedom and a trap: you must build the structure yourself. This track gives you one that scales from a single file to a real service."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-vs-django.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "فلسک در برابر جنگو",
          "d": "کدام مسئله با کدام ابزار."
        },
        "en": {
          "t": "Flask versus Django",
          "d": "Which problem suits which tool."
        },
        "kw": "flask django comparison micro",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-first-app.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "اولین اپ و routing",
          "d": "از یک فایل شروع کن."
        },
        "en": {
          "t": "First app and routing",
          "d": "Start from one file."
        },
        "kw": "route app decorator methods",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-jinja.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "قالب با Jinja2",
          "d": "ارث‌بری، فیلتر و ماکرو."
        },
        "en": {
          "t": "Templates with Jinja2",
          "d": "Inheritance, filters and macros."
        },
        "kw": "jinja template filter macro",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-request.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "request و response",
          "d": "context، فرم، فایل و کوکی."
        },
        "en": {
          "t": "Requests and responses",
          "d": "Contexts, forms, files and cookies."
        },
        "kw": "request response context cookie session",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-blueprint.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "blueprint و ساختار پروژه",
          "d": "از یک فایل به یک پکیج قابل نگهداری."
        },
        "en": {
          "t": "Blueprints and project structure",
          "d": "From one file to a maintainable package."
        },
        "kw": "blueprint factory structure config",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-sqlalchemy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "پایگاه‌داده با SQLAlchemy",
          "d": "مدل، session و رابطه‌ها."
        },
        "en": {
          "t": "Databases with SQLAlchemy",
          "d": "Models, sessions and relationships."
        },
        "kw": "sqlalchemy model session relationship",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-alembic.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "migration با Alembic",
          "d": "تغییر شِما، کنترل‌شده."
        },
        "en": {
          "t": "Migrations with Alembic",
          "d": "Schema changes, under control."
        },
        "kw": "alembic migration revision",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "فرم و اعتبارسنجی",
          "d": "WTForms و اعتبارسنجی سمت سرور."
        },
        "en": {
          "t": "Forms and validation",
          "d": "WTForms and server-side validation."
        },
        "kw": "wtforms validation csrf",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-rest.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "REST API",
          "d": "طراحی، serialization و کد وضعیت درست."
        },
        "en": {
          "t": "REST APIs",
          "d": "Design, serialisation and correct status codes."
        },
        "kw": "rest api marshmallow status",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "احراز هویت با JWT",
          "d": "ورود، توکن و محافظت از مسیرها."
        },
        "en": {
          "t": "Authentication with JWT",
          "d": "Login, tokens and protecting routes."
        },
        "kw": "jwt auth token login",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "مدیریت خطا و لاگ",
          "d": "پاسخ خطای یکدست و لاگ قابل جستجو."
        },
        "en": {
          "t": "Error handling and logging",
          "d": "Consistent error responses and searchable logs."
        },
        "kw": "errorhandler logging abort",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تست",
          "d": "test client، fixture و پایگاه‌دادهٔ تست."
        },
        "en": {
          "t": "Testing",
          "d": "The test client, fixtures and a test database."
        },
        "kw": "pytest client fixture testing",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-config.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "پیکربندی و محیط",
          "d": "تنظیمات جدا برای توسعه و production."
        },
        "en": {
          "t": "Configuration and environments",
          "d": "Separate settings for development and production."
        },
        "kw": "config environment dotenv",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "استقرار",
          "d": "Gunicorn، Nginx و داکر."
        },
        "en": {
          "t": "Deployment",
          "d": "Gunicorn, Nginx and Docker."
        },
        "kw": "gunicorn nginx docker wsgi",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — API کوچک",
          "d": "چند مسیر، اعتبارسنجی و تست."
        },
        "en": {
          "t": "Project 1 — a small API",
          "d": "A few routes, validation and tests."
        },
        "kw": "capstone api",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — سرویس با پایگاه‌داده و ورود",
          "d": "SQLAlchemy، JWT و ساختار blueprint."
        },
        "en": {
          "t": "Project 2 — a service with a database and login",
          "d": "SQLAlchemy, JWT and a blueprint structure."
        },
        "kw": "capstone auth db",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس آمادهٔ استقرار",
          "d": "مهاجرت، لاگ، تست و داکر."
        },
        "en": {
          "t": "Project 3 — a deployable service",
          "d": "Migrations, logging, tests and Docker."
        },
        "kw": "capstone deploy",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1410,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "15-react",
    "dir": "15-react",
    "accent": "#61DAFB",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"2.1\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9.5\" ry=\"3.8\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9.5\" ry=\"3.8\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9.5\" ry=\"3.8\" transform=\"rotate(120 12 12)\"/>",
    "locked": false,
    "fa": {
      "name": "ری‌اکت",
      "desc": "UI به‌عنوان تابعی از state: هوک‌ها، رندر مجدد، مدیریت state، دریافت داده و کارایی.",
      "intro": "بیشتر مشکلات ری‌اکت از یک سوءتفاهم می‌آید: اینکه فکر کنی داری DOM را دستکاری می‌کنی. نمی‌کنی. داری توصیف می‌کنی که UI برای یک state مشخص چه شکلی است. این مسیر روی همان یک جمله بنا شده."
    },
    "en": {
      "name": "React",
      "desc": "UI as a function of state: hooks, re-renders, state management, data fetching and performance.",
      "intro": "Most React problems come from one misunderstanding: thinking you are manipulating the DOM. You are not. You are describing what the UI looks like for a given state. This track is built on that one sentence."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-mental-model.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدل ذهنی: UI تابعی از state",
          "d": "چرا این جمله همه‌چیز را عوض می‌کند."
        },
        "en": {
          "t": "The mental model: UI as a function of state",
          "d": "Why that one sentence changes everything."
        },
        "kw": "react mental model declarative state",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-jsx.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "JSX و کامپوننت",
          "d": "JSX چه چیزی واقعاً هست."
        },
        "en": {
          "t": "JSX and components",
          "d": "What JSX actually compiles to."
        },
        "kw": "jsx component element createelement",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-props.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "props و ترکیب",
          "d": "children، و ترکیب به‌جای پیکربندی."
        },
        "en": {
          "t": "Props and composition",
          "d": "children, and composition over configuration."
        },
        "kw": "props children composition",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-state.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "state و useState",
          "d": "state چیست و چه چیزی نباید state باشد."
        },
        "en": {
          "t": "State and useState",
          "d": "What state is, and what should not be state."
        },
        "kw": "usestate state derived",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-rerender.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "رندر مجدد — کِی و چرا",
          "d": "منبع نصف سؤال‌های ری‌اکت."
        },
        "en": {
          "t": "Re-renders — when and why",
          "d": "The source of half of all React questions."
        },
        "kw": "rerender reconciliation batching",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-effect.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "useEffect",
          "d": "و اینکه اکثر useEffectهایی که می‌نویسی لازم نیستند."
        },
        "en": {
          "t": "useEffect",
          "d": "And why most of the useEffects you write are unnecessary."
        },
        "kw": "useeffect cleanup dependency sync",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فرم‌ها",
          "d": "controlled، uncontrolled و اعتبارسنجی."
        },
        "en": {
          "t": "Forms",
          "d": "Controlled, uncontrolled and validation."
        },
        "kw": "form controlled input validation",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-lists.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "لیست و key",
          "d": "چرا index به‌عنوان key باگ می‌سازد."
        },
        "en": {
          "t": "Lists and keys",
          "d": "Why index-as-key creates bugs."
        },
        "kw": "list key reconciliation",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-refs-memo.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "useRef، useMemo، useCallback",
          "d": "کِی واقعاً لازم‌اند — و معمولاً نیستند."
        },
        "en": {
          "t": "useRef, useMemo, useCallback",
          "d": "When they are actually needed — usually they are not."
        },
        "kw": "useref usememo usecallback memo",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-context.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "Context",
          "d": "حل prop drilling، و هزینهٔ رندرش."
        },
        "en": {
          "t": "Context",
          "d": "Solving prop drilling, and its render cost."
        },
        "kw": "context provider drilling",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-reducer.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "useReducer و state پیچیده",
          "d": "وقتی useState کافی نیست."
        },
        "en": {
          "t": "useReducer and complex state",
          "d": "When useState is not enough."
        },
        "kw": "usereducer reducer action",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-global-state.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدیریت state سراسری",
          "d": "Zustand و Redux Toolkit — و کِی هیچ‌کدام."
        },
        "en": {
          "t": "Global state management",
          "d": "Zustand and Redux Toolkit — and when neither."
        },
        "kw": "zustand redux store global state",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-data.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "دریافت داده",
          "d": "React Query: کش، بی‌اعتبارسازی و وضعیت سرور."
        },
        "en": {
          "t": "Data fetching",
          "d": "React Query: caching, invalidation and server state."
        },
        "kw": "react query fetch cache swr",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مسیریابی",
          "d": "مسیر تودرتو، پارامتر و محافظت."
        },
        "en": {
          "t": "Routing",
          "d": "Nested routes, parameters and guards."
        },
        "kw": "router route param guard",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-splitting.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کد اسپلیت و Suspense",
          "d": "بارگذاری تنبل و مرز خطا."
        },
        "en": {
          "t": "Code splitting and Suspense",
          "d": "Lazy loading and error boundaries."
        },
        "kw": "lazy suspense error boundary",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست",
          "d": "Testing Library و تست از دید کاربر."
        },
        "en": {
          "t": "Testing",
          "d": "Testing Library and testing from the user's point of view."
        },
        "kw": "testing library user event vitest",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کارایی",
          "d": "پروفایلر، لیست بلند و رندر غیرضروری."
        },
        "en": {
          "t": "Performance",
          "d": "The profiler, long lists and needless renders."
        },
        "kw": "profiler virtualization memo performance",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-patterns.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "الگوها و ضدالگوها",
          "d": "الگوهای کامپوننت که واقعاً کار می‌کنند."
        },
        "en": {
          "t": "Patterns and anti-patterns",
          "d": "Component patterns that actually hold up."
        },
        "kw": "pattern compound render prop hook",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-zustand-redux.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "حالت سراسری: Zustand و Redux",
          "d": "دو رویکرد به یک مسئله، و معیار انتخاب بینشان."
        },
        "en": {
          "t": "Global state: Zustand and Redux",
          "d": "Two approaches to one problem, and how to choose."
        },
        "kw": "zustand redux toolkit global store selector",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-custom-hooks.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏hook سفارشی",
          "d": "استخراج منطق مشترک، بدون ساختن انتزاع نشتی."
        },
        "en": {
          "t": "Custom hooks",
          "d": "Extracting shared logic without a leaky abstraction."
        },
        "kw": "custom hook reuse rules of hooks",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-concurrent.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏React همروند",
          "d": "‏transition، ‎useDeferredValue‎ و رابطی که هنگام کار سنگین یخ نمی‌زند."
        },
        "en": {
          "t": "Concurrent React",
          "d": "Transitions, useDeferredValue and a UI that does not freeze under load."
        },
        "kw": "concurrent transition deferred suspense",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-rsc.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Server Component",
          "d": "مرز سرور و کلاینت، و آنچه واقعاً به مرورگر می‌رود."
        },
        "en": {
          "t": "Server Components",
          "d": "The server/client boundary, and what actually ships to the browser."
        },
        "kw": "rsc server component action boundary",
        "cap": 0
      },
      {
        "n": "23",
        "file": "23-a11y.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "دسترس‌پذیری",
          "d": "مدیریت فوکوس، ‎ARIA‎ و کامپوننت قابل استفاده با کیبورد."
        },
        "en": {
          "t": "Accessibility",
          "d": "Focus management, ARIA and keyboard-usable components."
        },
        "kw": "accessibility focus aria headless keyboard",
        "cap": 0
      },
      {
        "n": "24",
        "file": "24-forms-advanced.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "فرم‌های پیچیده",
          "d": "‏react-hook-form، اعتبارسنجی طرح‌محور و فرم چندمرحله‌ای."
        },
        "en": {
          "t": "Advanced forms",
          "d": "react-hook-form, schema validation and multi-step forms."
        },
        "kw": "react-hook-form zod validation wizard",
        "cap": 0
      },
      {
        "n": "25",
        "file": "25-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — لیست کارها با state واقعی",
          "d": "کامپوننت، فرم، لیست و ماندگاری محلی."
        },
        "en": {
          "t": "Project 1 — a to-do app with real state",
          "d": "Components, forms, lists and local persistence."
        },
        "kw": "capstone todo",
        "cap": 1
      },
      {
        "n": "26",
        "file": "26-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — داشبورد با داده از API",
          "d": "دریافت داده، کش، مسیریابی و وضعیت بارگذاری."
        },
        "en": {
          "t": "Project 2 — a dashboard fed by an API",
          "d": "Data fetching, caching, routing and loading states."
        },
        "kw": "capstone dashboard",
        "cap": 2
      },
      {
        "n": "27",
        "file": "27-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — اپ کامل با احراز هویت",
          "d": "ورود، مسیر محافظت‌شده، تست و بهینه‌سازی کارایی."
        },
        "en": {
          "t": "Project 3 — a full app with authentication",
          "d": "Login, protected routes, tests and performance work."
        },
        "kw": "capstone auth spa",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 27,
      "exercises": 453,
      "minutes": 2375,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "16-nextjs",
    "dir": "16-nextjs",
    "accent": "#111827",
    "accentDark": "#E6EAF2",
    "cat": "frontend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.2 15.8V8.2l5.6 7.6M14.8 8.2v7.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Next.js",
      "desc": "App Router، Server Component، رندر سمت سرور، Server Action و استقرار خودمیزبان.",
      "intro": "Next پاسخ این سؤال است: بخشی از UI را سرور بسازد یا مرورگر؟ App Router این تصمیم را برای هر کامپوننت جداگانه ممکن کرده — و همین، هم قدرتش است هم جایی که همه گیج می‌شوند."
    },
    "en": {
      "name": "Next.js",
      "desc": "App Router, Server Components, server rendering, Server Actions and self-hosted deployment.",
      "intro": "Next answers one question: should the server or the browser build this piece of UI? The App Router lets you decide per component — which is both its power and where everyone gets confused."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا Next و App Router",
          "d": "چه مسئله‌ای را حل می‌کند و چه پیچیدگی‌ای می‌آورد."
        },
        "en": {
          "t": "Why Next, and the App Router",
          "d": "What it solves and what complexity it brings."
        },
        "kw": "nextjs app router pages router why",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-structure.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ساختار پروژه و مسیریابی فایل‌محور",
          "d": "پوشه = مسیر، و فایل‌های ویژه‌ای که معنا دارند."
        },
        "en": {
          "t": "Project structure and file routing",
          "d": "A folder is a route, and the special files that carry meaning."
        },
        "kw": "app directory page layout file convention",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-layouts.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏layout، template و route group",
          "d": "‏UI مشترک، و گروه‌بندی بدون اثر روی آدرس."
        },
        "en": {
          "t": "Layouts, templates and route groups",
          "d": "Shared UI, and grouping without affecting the URL."
        },
        "kw": "layout template route group nested",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-dynamic-routes.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسیرهای پویا",
          "d": "پارامتر، ‎catch-all‎ و ‎generateStaticParams‎."
        },
        "en": {
          "t": "Dynamic routes",
          "d": "Parameters, catch-all segments and generateStaticParams."
        },
        "kw": "dynamic route slug catch-all generatestaticparams",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-rsc.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Server Component در برابر Client Component",
          "d": "مهم‌ترین مفهوم App Router — با نمودار مرز."
        },
        "en": {
          "t": "Server versus Client Components",
          "d": "The key App Router concept — with a boundary diagram."
        },
        "kw": "rsc server client component boundary",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-use-client.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مرز ‎use client‎ و سریال‌سازی",
          "d": "چه چیزی می‌تواند از سرور به کلاینت رد شود و چه چیزی نه."
        },
        "en": {
          "t": "The use client boundary and serialisation",
          "d": "What can cross from server to client, and what cannot."
        },
        "kw": "use client serializable props boundary bundle",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-data-fetching.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "دریافت داده در Server Component",
          "d": "‏fetch روی سرور، بدون ‎useEffect‎ و بدون حالت بارگذاری."
        },
        "en": {
          "t": "Data fetching in Server Components",
          "d": "Fetching on the server, with no useEffect and no loading state."
        },
        "kw": "fetch server async component data",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-caching.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "چهار لایهٔ کش Next",
          "d": "‏request memoization، data cache، route cache و router cache."
        },
        "en": {
          "t": "The four caching layers",
          "d": "Request memoisation, data cache, full route cache and router cache."
        },
        "kw": "cache memoization data cache route cache router cache",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-revalidation.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏revalidate",
          "d": "زمان‌محور، تگ‌محور و بر حسب تقاضا."
        },
        "en": {
          "t": "Revalidation",
          "d": "Time-based, tag-based and on-demand."
        },
        "kw": "revalidate revalidatetag revalidatepath isr",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-render-modes.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏SSG، SSR و ISR در Next",
          "d": "انتخاب حالت رندر برای هر مسیر، جداگانه."
        },
        "en": {
          "t": "SSG, SSR and ISR in Next",
          "d": "Choosing a rendering mode per route."
        },
        "kw": "static dynamic force-dynamic ssg ssr isr",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-streaming.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "استریم و Suspense",
          "d": "فرستادن HTML تکه‌تکه، قبل از آماده شدن همهٔ داده."
        },
        "en": {
          "t": "Streaming and Suspense",
          "d": "Sending HTML in chunks before all the data is ready."
        },
        "kw": "streaming suspense boundary partial prerender",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-loading.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏loading و اسکلت",
          "d": "وضعیت بارگذاری که خودکار می‌آید."
        },
        "en": {
          "t": "Loading UI and skeletons",
          "d": "Loading states that arrive automatically."
        },
        "kw": "loading skeleton suspense fallback",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏error، not-found و مرز خطا",
          "d": "خطا در سرور، خطا در کلاینت، و بازیابی."
        },
        "en": {
          "t": "Errors, not-found and error boundaries",
          "d": "Server errors, client errors and recovery."
        },
        "kw": "error boundary not-found global-error reset",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-server-actions.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Server Action: مبانی",
          "d": "فراخوانی تابع سرور از کلاینت، بدون ساختن ‎API‎."
        },
        "en": {
          "t": "Server Actions: the basics",
          "d": "Calling a server function from the client without building an API."
        },
        "kw": "server action use server mutation",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "فرم با Server Action",
          "d": "‏useActionState، اعتبارسنجی، به‌روزرسانی خوش‌بینانه."
        },
        "en": {
          "t": "Forms with Server Actions",
          "d": "useActionState, validation and optimistic updates."
        },
        "kw": "form useactionstate useoptimistic zod validation",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-route-handlers.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Route Handler",
          "d": "وقتی واقعاً به یک ‎API‎ نیاز داری."
        },
        "en": {
          "t": "Route Handlers",
          "d": "When you genuinely need an API endpoint."
        },
        "kw": "route handler request response rest webhook",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-middleware.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏middleware",
          "d": "اجرا قبل از مسیریابی: تغییر مسیر، هدر و احراز هویت."
        },
        "en": {
          "t": "Middleware",
          "d": "Running before routing: redirects, headers and auth."
        },
        "kw": "middleware matcher redirect rewrite edge",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-parallel-routes.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مسیرهای موازی و رهگیر",
          "d": "مودالی که آدرس خودش را دارد."
        },
        "en": {
          "t": "Parallel and intercepting routes",
          "d": "A modal that has its own URL."
        },
        "kw": "parallel route intercepting slot modal",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "احراز هویت",
          "d": "‏Auth.js، ارائه‌دهنده و جریان ورود."
        },
        "en": {
          "t": "Authentication",
          "d": "Auth.js, providers and the login flow."
        },
        "kw": "authjs nextauth provider oauth credentials",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-session.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نشست و محافظت از مسیر",
          "d": "کوکی، نشست سمت سرور و مسیر محافظت‌شده."
        },
        "en": {
          "t": "Sessions and protected routes",
          "d": "Cookies, server-side sessions and route protection."
        },
        "kw": "session cookie jwt protect middleware",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-database.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اتصال به پایگاه‌داده",
          "d": "‏connection pooling در محیط serverless."
        },
        "en": {
          "t": "Connecting to a database",
          "d": "Connection pooling in a serverless environment."
        },
        "kw": "database pool serverless connection",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-orm.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏ORM: Prisma و Drizzle",
          "d": "مدل، مهاجرت و کوئری نوع‌دار."
        },
        "en": {
          "t": "ORMs: Prisma and Drizzle",
          "d": "Models, migrations and typed queries."
        },
        "kw": "prisma drizzle schema migration typed",
        "cap": 0
      },
      {
        "n": "23",
        "file": "23-metadata-seo.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Metadata API و SEO",
          "d": "عنوان، توضیح، ‎canonical‎، ‎sitemap‎ و ‎robots‎."
        },
        "en": {
          "t": "The Metadata API and SEO",
          "d": "Titles, descriptions, canonicals, sitemaps and robots."
        },
        "kw": "metadata seo sitemap robots canonical",
        "cap": 0
      },
      {
        "n": "24",
        "file": "24-og-images.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تولید تصویر ‎OG‎",
          "d": "تصویر اشتراک‌گذاری که خودکار ساخته می‌شود."
        },
        "en": {
          "t": "Generating OG images",
          "d": "Share images generated automatically."
        },
        "kw": "opengraph image imageresponse satori twitter card",
        "cap": 0
      },
      {
        "n": "25",
        "file": "25-images.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "بهینه‌سازی تصویر",
          "d": "‏next/image، اندازه، ‎placeholder‎ و ‎CLS‎."
        },
        "en": {
          "t": "Image optimisation",
          "d": "next/image, sizing, placeholders and CLS."
        },
        "kw": "next image optimization lazy placeholder cls",
        "cap": 0
      },
      {
        "n": "26",
        "file": "26-fonts.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فونت",
          "d": "‏next/font، فونت فارسی و حذف ‎layout shift‎."
        },
        "en": {
          "t": "Fonts",
          "d": "next/font, Persian fonts and eliminating layout shift."
        },
        "kw": "next font local google subset persian",
        "cap": 0
      },
      {
        "n": "27",
        "file": "27-i18n.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "چندزبانگی و ‎RTL‎",
          "d": "مسیر زبان‌دار، ترجمه و راست‌چین فارسی."
        },
        "en": {
          "t": "Internationalisation and RTL",
          "d": "Locale routing, translations and Persian right-to-left."
        },
        "kw": "i18n locale rtl translation middleware",
        "cap": 0
      },
      {
        "n": "28",
        "file": "28-styling.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "استایل",
          "d": "‏CSS Module، Tailwind و ‎CSS-in-JS‎ در ‎RSC‎."
        },
        "en": {
          "t": "Styling",
          "d": "CSS Modules, Tailwind and CSS-in-JS under RSC."
        },
        "kw": "css module tailwind styled rsc",
        "cap": 0
      },
      {
        "n": "29",
        "file": "29-client-state.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "حالت سمت کلاینت",
          "d": "‏Zustand و React Query کنار ‎Server Component‎."
        },
        "en": {
          "t": "Client-side state",
          "d": "Zustand and React Query alongside Server Components."
        },
        "kw": "zustand react query client state hydration",
        "cap": 0
      },
      {
        "n": "30",
        "file": "30-runtime.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏runtime: Node یا Edge",
          "d": "تفاوت‌ها، محدودیت‌ها و معیار انتخاب."
        },
        "en": {
          "t": "Runtimes: Node or Edge",
          "d": "Differences, limits and how to choose."
        },
        "kw": "edge runtime node serverless region",
        "cap": 0
      },
      {
        "n": "31",
        "file": "31-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست",
          "d": "تست کامپوننت سرور، اکشن و ‎e2e‎ با Playwright."
        },
        "en": {
          "t": "Testing",
          "d": "Testing server components, actions and e2e with Playwright."
        },
        "kw": "test playwright vitest server component",
        "cap": 0
      },
      {
        "n": "32",
        "file": "32-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کارایی",
          "d": "‏Core Web Vitals، تحلیل باندل و ‎RSC payload‎."
        },
        "en": {
          "t": "Performance",
          "d": "Core Web Vitals, bundle analysis and the RSC payload."
        },
        "kw": "performance bundle analyzer lcp inp rsc payload",
        "cap": 0
      },
      {
        "n": "33",
        "file": "33-build.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "بیلد و ابزار",
          "d": "‏Turbopack، خروجی standalone و متغیرهای محیطی."
        },
        "en": {
          "t": "Build and tooling",
          "d": "Turbopack, standalone output and environment variables."
        },
        "kw": "turbopack build standalone env analyze",
        "cap": 0
      },
      {
        "n": "34",
        "file": "34-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "استقرار خودمیزبان",
          "d": "داکر، ‎standalone‎، Nginx و کش — بدون Vercel."
        },
        "en": {
          "t": "Self-hosted deployment",
          "d": "Docker, standalone output, Nginx and caching — without Vercel."
        },
        "kw": "docker standalone selfhost nginx deploy",
        "cap": 0
      },
      {
        "n": "35",
        "file": "35-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — وبلاگ با ‎SSG‎",
          "d": "مسیر پویا، متادیتا، ‎sitemap‎ و ‎OG‎."
        },
        "en": {
          "t": "Project 1 — a static blog",
          "d": "Dynamic routes, metadata, sitemap and OG images."
        },
        "kw": "capstone blog ssg seo",
        "cap": 1
      },
      {
        "n": "36",
        "file": "36-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۲ — داشبورد با احراز هویت",
          "d": "‏Auth.js، Server Action، پایگاه‌داده و مسیر محافظت‌شده."
        },
        "en": {
          "t": "Project 2 — an authenticated dashboard",
          "d": "Auth.js, Server Actions, a database and protected routes."
        },
        "kw": "capstone auth dashboard",
        "cap": 2
      },
      {
        "n": "37",
        "file": "37-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 240,
        "fa": {
          "t": "پروژهٔ ۳ — فروشگاه کامل",
          "d": "‏ISR، سبد خرید، پرداخت، جستجو، ‎SEO‎ و استقرار با داکر."
        },
        "en": {
          "t": "Project 3 — a complete storefront",
          "d": "ISR, cart, checkout, search, SEO and Docker deployment."
        },
        "kw": "capstone commerce isr production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 37,
      "exercises": 633,
      "minutes": 3430,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "17-angular",
    "dir": "17-angular",
    "accent": "#DD0031",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M12 2.6 21 5.8l-1.4 12L12 21.4 4.4 17.8 3 5.8z\"/><path d=\"m8.8 15 3.2-7.6L15.2 15M9.9 12.6h4.2\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "انگولار",
      "desc": "کامپوننت، DI، RxJS، signal، فرم reactive و مدیریت state — فریم‌ورک کامل، با ساختار.",
      "intro": "انگولار برخلاف ری‌اکت یک فریم‌ورک کامل است: مسیریابی، فرم، HTTP و تزریق وابستگی همه در خودش هستند. سختی‌اش نحو نیست، RxJS است — و این مسیر وقت لازم را رویش می‌گذارد."
    },
    "en": {
      "name": "Angular",
      "desc": "Components, DI, RxJS, signals, reactive forms and state management — a complete, structured framework.",
      "intro": "Unlike React, Angular is a complete framework: routing, forms, HTTP and dependency injection are all built in. The hard part is not the syntax, it is RxJS — and this track gives that the time it needs."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "معماری انگولار و CLI",
          "d": "ساختار پروژه و ابزار خط فرمان."
        },
        "en": {
          "t": "Angular's architecture and the CLI",
          "d": "Project structure and the command-line tool."
        },
        "kw": "angular cli project structure",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-components.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کامپوننت و template",
          "d": "نحو قالب و چرخهٔ عمر."
        },
        "en": {
          "t": "Components and templates",
          "d": "Template syntax and lifecycle."
        },
        "kw": "component template lifecycle oninit",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-binding.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "data binding",
          "d": "یک‌طرفه، دوطرفه و رویداد."
        },
        "en": {
          "t": "Data binding",
          "d": "One-way, two-way and events."
        },
        "kw": "binding interpolation ngmodel event",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-directives.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "directive",
          "d": "ساختاری و صفتی، و ساختن directive خودت."
        },
        "en": {
          "t": "Directives",
          "d": "Structural and attribute, and writing your own."
        },
        "kw": "directive ngif ngfor structural",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-pipes.html",
        "ready": false,
        "ex": 18,
        "mins": 65,
        "fa": {
          "t": "pipe",
          "d": "تبدیل نمایش، و pipe سفارشی."
        },
        "en": {
          "t": "Pipes",
          "d": "Transforming what is displayed, and custom pipes."
        },
        "kw": "pipe async date custom",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-di.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "service و تزریق وابستگی",
          "d": "provider، طول عمر و injector."
        },
        "en": {
          "t": "Services and dependency injection",
          "d": "Providers, lifetimes and injectors."
        },
        "kw": "service di provider injector",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-rxjs-1.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "RxJS ۱: Observable",
          "d": "جریان داده در زمان — مدل ذهنی."
        },
        "en": {
          "t": "RxJS 1: Observables",
          "d": "Data as a stream over time — the mental model."
        },
        "kw": "rxjs observable subscribe stream",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-rxjs-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "RxJS ۲: عملگرها",
          "d": "map، switchMap، combineLatest — و نشتی اشتراک."
        },
        "en": {
          "t": "RxJS 2: operators",
          "d": "map, switchMap, combineLatest — and subscription leaks."
        },
        "kw": "operator switchmap combinelatest unsubscribe",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-signals.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "signal",
          "d": "مدل واکنشی جدید، در کنار RxJS."
        },
        "en": {
          "t": "Signals",
          "d": "The new reactivity model, alongside RxJS."
        },
        "kw": "signal computed effect reactivity",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "فرم: template-driven و reactive",
          "d": "و اینکه چرا reactive معمولاً درست‌تر است."
        },
        "en": {
          "t": "Forms: template-driven and reactive",
          "d": "And why reactive is usually the right choice."
        },
        "kw": "form reactive validator formgroup",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-http.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "HttpClient و interceptor",
          "d": "درخواست، خطا و افزودن توکن."
        },
        "en": {
          "t": "HttpClient and interceptors",
          "d": "Requests, errors and attaching tokens."
        },
        "kw": "httpclient interceptor error retry",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسیریابی و guard",
          "d": "مسیر تودرتو، پارامتر و محافظت."
        },
        "en": {
          "t": "Routing and guards",
          "d": "Nested routes, parameters and protection."
        },
        "kw": "router guard resolver param",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-lazy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "lazy loading",
          "d": "تقسیم باندل و بارگذاری بر حسب نیاز."
        },
        "en": {
          "t": "Lazy loading",
          "d": "Splitting the bundle and loading on demand."
        },
        "kw": "lazy loading module bundle",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-state.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدیریت state",
          "d": "NgRx و گزینه‌های ساده‌تر."
        },
        "en": {
          "t": "State management",
          "d": "NgRx and the simpler alternatives."
        },
        "kw": "ngrx store effect state",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست",
          "d": "TestBed، spy و تست کامپوننت."
        },
        "en": {
          "t": "Testing",
          "d": "TestBed, spies and component tests."
        },
        "kw": "testbed jasmine karma spy",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-change-detection.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "change detection و کارایی",
          "d": "OnPush و اینکه چرا اپت کند شده."
        },
        "en": {
          "t": "Change detection and performance",
          "d": "OnPush, and why your app got slow."
        },
        "kw": "change detection onpush zone performance",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-standalone.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "standalone component",
          "d": "انگولار بدون NgModule."
        },
        "en": {
          "t": "Standalone components",
          "d": "Angular without NgModules."
        },
        "kw": "standalone component module import",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "بیلد و استقرار",
          "d": "بهینه‌سازی باندل و سرو کردن با Nginx."
        },
        "en": {
          "t": "Building and deploying",
          "d": "Bundle optimisation and serving with Nginx."
        },
        "kw": "build production bundle nginx",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — لیست و فرم",
          "d": "کامپوننت، سرویس و فرم reactive."
        },
        "en": {
          "t": "Project 1 — a list and a form",
          "d": "Components, services and a reactive form."
        },
        "kw": "capstone form list",
        "cap": 1
      },
      {
        "n": "20",
        "file": "20-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — اپ با API و مسیریابی",
          "d": "HttpClient، interceptor، guard و مدیریت خطا."
        },
        "en": {
          "t": "Project 2 — an app with an API and routing",
          "d": "HttpClient, interceptors, guards and error handling."
        },
        "kw": "capstone api routing",
        "cap": 2
      },
      {
        "n": "21",
        "file": "21-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — اپ سازمانی",
          "d": "state سراسری، lazy loading، تست و کارایی."
        },
        "en": {
          "t": "Project 3 — an enterprise-scale app",
          "d": "Global state, lazy loading, tests and performance."
        },
        "kw": "capstone ngrx enterprise",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 21,
      "exercises": 345,
      "minutes": 1850,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "18-flutter",
    "dir": "18-flutter",
    "accent": "#02569B",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M14.6 2.6 5 12.2l3 3 12.6-12.6z\"/><path d=\"m14.6 11.4-4.5 4.5 4.5 4.5h5.5l-4.5-4.5 4.5-4.5z\"/>",
    "locked": false,
    "fa": {
      "name": "فلاتر",
      "desc": "از Dart تا انتشار: widget، چیدمان، مدیریت state، شبکه و اپ راست‌به‌چپ فارسی.",
      "intro": "در فلاتر همه‌چیز widget است — حتی padding و مرکز‌چین کردن. وقتی این را بپذیری، بقیه‌اش ترکیب است. این مسیر ویژه به چیدمان راست‌به‌چپ و فونت فارسی هم می‌پردازد."
    },
    "en": {
      "name": "Flutter",
      "desc": "From Dart to release: widgets, layout, state management, networking and right-to-left Persian apps.",
      "intro": "In Flutter everything is a widget — even padding and centring. Once you accept that, the rest is composition. This track also covers right-to-left layout and Persian typography properly."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-dart.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "Dart در ۹۰ دقیقه",
          "d": "نوع‌ها، null safety، async و کلاس."
        },
        "en": {
          "t": "Dart in 90 minutes",
          "d": "Types, null safety, async and classes."
        },
        "kw": "dart null safety future class",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-first-app.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "اولین اپ و ساختار پروژه",
          "d": "ابزار، شبیه‌ساز و hot reload."
        },
        "en": {
          "t": "First app and project structure",
          "d": "Tooling, emulators and hot reload."
        },
        "kw": "flutter create hot reload structure",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-widgets.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Widget: stateless و stateful",
          "d": "درخت widget و چرخهٔ ساخت."
        },
        "en": {
          "t": "Widgets: stateless and stateful",
          "d": "The widget tree and the build cycle."
        },
        "kw": "widget stateless stateful build tree",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-layout-1.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "چیدمان: Row، Column، Flex",
          "d": "و خطای overflow که همه می‌گیرند."
        },
        "en": {
          "t": "Layout: Row, Column, Flex",
          "d": "And the overflow error everyone hits."
        },
        "kw": "row column flex expanded overflow",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-layout-2.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "چیدمان پیشرفته و constraint",
          "d": "قانون: constraint پایین می‌رود، اندازه بالا می‌آید."
        },
        "en": {
          "t": "Advanced layout and constraints",
          "d": "The rule: constraints go down, sizes come up."
        },
        "kw": "constraint boxconstraints stack layoutbuilder",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-navigation.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ناوبری",
          "d": "صفحه، آرگومان و مسیریابی نام‌دار."
        },
        "en": {
          "t": "Navigation",
          "d": "Screens, arguments and named routes."
        },
        "kw": "navigator route push gorouter",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-state-1.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدیریت state ۱",
          "d": "setState و InheritedWidget."
        },
        "en": {
          "t": "State management 1",
          "d": "setState and InheritedWidget."
        },
        "kw": "setstate inherited widget lifting",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-state-2.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدیریت state ۲",
          "d": "Provider و Riverpod در عمل."
        },
        "en": {
          "t": "State management 2",
          "d": "Provider and Riverpod in practice."
        },
        "kw": "provider riverpod bloc state",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فرم و ورودی",
          "d": "اعتبارسنجی و کنترلر."
        },
        "en": {
          "t": "Forms and input",
          "d": "Validation and controllers."
        },
        "kw": "form textfield validator controller",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-lists.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "لیست و کارایی",
          "d": "ListView.builder و لیست بلند."
        },
        "en": {
          "t": "Lists and performance",
          "d": "ListView.builder and long lists."
        },
        "kw": "listview builder scroll performance",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-network.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شبکه و JSON",
          "d": "درخواست، مدل و مدیریت خطا."
        },
        "en": {
          "t": "Networking and JSON",
          "d": "Requests, models and error handling."
        },
        "kw": "http dio json serialization",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-storage.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ذخیره‌سازی محلی",
          "d": "preferences، فایل و پایگاه‌دادهٔ محلی."
        },
        "en": {
          "t": "Local storage",
          "d": "Preferences, files and a local database."
        },
        "kw": "sharedpreferences sqlite hive isar",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-animation.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "انیمیشن",
          "d": "ضمنی، صریح و انتقال بین صفحه‌ها."
        },
        "en": {
          "t": "Animation",
          "d": "Implicit, explicit and page transitions."
        },
        "kw": "animation controller tween hero",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-platform.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کد پلتفرم‌محور",
          "d": "کانال بومی و پلاگین."
        },
        "en": {
          "t": "Platform-specific code",
          "d": "Native channels and plugins."
        },
        "kw": "platform channel plugin native",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-rtl.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تم، فونت و اپ راست‌به‌چپ",
          "d": "طراحی فارسی که واقعاً درست دربیاید."
        },
        "en": {
          "t": "Theming, fonts and RTL apps",
          "d": "Persian design that actually comes out right."
        },
        "kw": "rtl locale font theme intl",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تست",
          "d": "تست widget و تست یکپارچه."
        },
        "en": {
          "t": "Testing",
          "d": "Widget tests and integration tests."
        },
        "kw": "widget test integration golden",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عیب‌یابی و پروفایل",
          "d": "DevTools و پیدا کردن پرش فریم."
        },
        "en": {
          "t": "Debugging and profiling",
          "d": "DevTools and finding dropped frames."
        },
        "kw": "devtools profile jank inspector",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-release.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "انتشار",
          "d": "امضا، بیلد اندروید و iOS، و اندازهٔ اپ."
        },
        "en": {
          "t": "Releasing",
          "d": "Signing, Android and iOS builds, and app size."
        },
        "kw": "release signing apk appbundle ipa",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — اپ تک‌صفحه‌ای",
          "d": "چیدمان، لیست و state محلی."
        },
        "en": {
          "t": "Project 1 — a single-screen app",
          "d": "Layout, lists and local state."
        },
        "kw": "capstone layout",
        "cap": 1
      },
      {
        "n": "20",
        "file": "20-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — اپ چندصفحه‌ای با API",
          "d": "ناوبری، شبکه، ذخیره‌سازی و حالت خطا."
        },
        "en": {
          "t": "Project 2 — a multi-screen app with an API",
          "d": "Navigation, networking, storage and error states."
        },
        "kw": "capstone api navigation",
        "cap": 2
      },
      {
        "n": "21",
        "file": "21-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 220,
        "fa": {
          "t": "پروژهٔ ۳ — اپ کامل فارسی و آمادهٔ انتشار",
          "d": "راست‌به‌چپ، تم، تست، بهینه‌سازی و بیلد امضاشده."
        },
        "en": {
          "t": "Project 3 — a complete Persian app, ready to ship",
          "d": "RTL, theming, tests, optimisation and a signed build."
        },
        "kw": "capstone rtl release",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 21,
      "exercises": 345,
      "minutes": 1865,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "19-elasticsearch",
    "dir": "19-elasticsearch",
    "accent": "#00A9E5",
    "accentDark": null,
    "cat": "data",
    "ico": "<circle cx=\"10.5\" cy=\"10.5\" r=\"6.4\"/><path d=\"m15.2 15.2 5 5\" stroke-linecap=\"round\"/><path d=\"M7.6 9.4h5.8M7.6 12h4\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "الاستیک‌سرچ",
      "desc": "جستجوی متنی واقعی: mapping، analyzer فارسی، query DSL، امتیازدهی و aggregation.",
      "intro": "‏<code>LIKE '%متن%'</code> جستجو نیست. جستجوی واقعی یعنی ریشه‌یابی کلمه، تحمل غلط املایی، و مرتب‌سازی بر اساس ربط. این مسیر نشان می‌دهد چطور — با توجه ویژه به متن فارسی."
    },
    "en": {
      "name": "Elasticsearch",
      "desc": "Real text search: mappings, Persian analyzers, the query DSL, relevance scoring and aggregations.",
      "intro": "<code>LIKE '%text%'</code> is not search. Real search means stemming, tolerating typos, and ordering by relevance. This track shows how — with particular attention to Persian text."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چه مسئله‌ای را حل می‌کند",
          "d": "الاستیک در برابر پایگاه‌دادهٔ رابطه‌ای."
        },
        "en": {
          "t": "What problem it solves",
          "d": "Elasticsearch versus a relational database."
        },
        "kw": "search inverted index vs sql",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-concepts.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نصب و مفاهیم",
          "d": "index، document، shard و replica."
        },
        "en": {
          "t": "Setup and concepts",
          "d": "Indices, documents, shards and replicas."
        },
        "kw": "index document shard replica cluster",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-mapping.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "mapping و نوع داده",
          "d": "text در برابر keyword — مهم‌ترین تصمیم."
        },
        "en": {
          "t": "Mappings and field types",
          "d": "text versus keyword — the decision that matters most."
        },
        "kw": "mapping text keyword dynamic",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-analysis.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "تحلیل متن و زبان فارسی",
          "d": "analyzer، tokenizer، نرمال‌سازی و ریشه‌یابی فارسی."
        },
        "en": {
          "t": "Text analysis and Persian",
          "d": "Analyzers, tokenizers, normalisation and Persian stemming."
        },
        "kw": "analyzer tokenizer persian normalizer stemmer",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-indexing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نمایه‌سازی و به‌روزرسانی",
          "d": "تک‌تک، دسته‌ای و همگام‌سازی."
        },
        "en": {
          "t": "Indexing and updates",
          "d": "Single documents, bulk, and staying in sync."
        },
        "kw": "index bulk update refresh",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-query-1.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "جستجو ۱: query DSL پایه",
          "d": "match، term و تفاوت حیاتی‌شان."
        },
        "en": {
          "t": "Search 1: the basic query DSL",
          "d": "match, term, and the crucial difference."
        },
        "kw": "match term query dsl filter",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-query-2.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "جستجو ۲: ترکیبی",
          "d": "bool، fuzzy، phrase و جستجوی چندفیلدی."
        },
        "en": {
          "t": "Search 2: compound queries",
          "d": "bool, fuzzy, phrase and multi-field search."
        },
        "kw": "bool fuzzy phrase multi_match",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-relevance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "امتیازدهی و ربط",
          "d": "BM25، boost و اینکه چرا آن نتیجه اول آمده."
        },
        "en": {
          "t": "Scoring and relevance",
          "d": "BM25, boosting, and why that result came first."
        },
        "kw": "score bm25 boost explain relevance",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-aggregation.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "aggregation",
          "d": "دسته‌بندی، آمار و فیلتر جانبی."
        },
        "en": {
          "t": "Aggregations",
          "d": "Bucketing, metrics and faceting."
        },
        "kw": "aggregation bucket metric facet",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-paging.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "صفحه‌بندی",
          "d": "from/size، search_after و صفحهٔ عمیق."
        },
        "en": {
          "t": "Pagination",
          "d": "from/size, search_after and deep paging."
        },
        "kw": "pagination from size search_after scroll",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کارایی و طراحی index",
          "d": "تعداد shard، حافظه و کوئری کند."
        },
        "en": {
          "t": "Performance and index design",
          "d": "Shard count, memory and slow queries."
        },
        "kw": "performance shard heap slowlog",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-kibana.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "Kibana",
          "d": "کاوش داده و ساخت داشبورد."
        },
        "en": {
          "t": "Kibana",
          "d": "Exploring data and building dashboards."
        },
        "kw": "kibana dashboard discover visualization",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-ops.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "عملیات",
          "d": "کلاستر، replica، snapshot و بازیابی."
        },
        "en": {
          "t": "Operations",
          "d": "Clusters, replicas, snapshots and recovery."
        },
        "kw": "cluster snapshot restore health",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-clients.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اتصال از اپ",
          "d": "کلاینت رسمی در دات‌نت، پایتون و Node."
        },
        "en": {
          "t": "Connecting from your app",
          "d": "Official clients in .NET, Python and Node."
        },
        "kw": "client dotnet python nodejs",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — جستجوی ساده روی متن فارسی",
          "d": "mapping درست، analyzer فارسی و کوئری match."
        },
        "en": {
          "t": "Project 1 — simple search over Persian text",
          "d": "A correct mapping, a Persian analyzer and a match query."
        },
        "kw": "capstone persian search",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — جستجوی محصولات با فیلتر",
          "d": "کوئری ترکیبی، facet و مرتب‌سازی."
        },
        "en": {
          "t": "Project 2 — product search with facets",
          "d": "Compound queries, facets and sorting."
        },
        "kw": "capstone facet filter",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — موتور جستجوی کامل",
          "d": "تنظیم ربط، خودتکمیل، همگام‌سازی با پایگاه‌داده و پایش."
        },
        "en": {
          "t": "Project 3 — a complete search engine",
          "d": "Relevance tuning, autocomplete, database sync and monitoring."
        },
        "kw": "capstone autocomplete relevance",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1480,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "20-realtime",
    "dir": "20-realtime",
    "accent": "#F59E0B",
    "accentDark": null,
    "cat": "data",
    "ico": "<path d=\"M4 12a8 8 0 0 1 8-8M20 12a8 8 0 0 1-8 8\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"2.4\"/><path d=\"M7.6 12a4.4 4.4 0 0 1 4.4-4.4M16.4 12a4.4 4.4 0 0 1-4.4 4.4\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "WebSocket و ارتباط بی‌درنگ",
      "desc": "از polling تا WebSocket و SSE — سمت سرور و سمت مرورگر، تا مقیاس افقی.",
      "intro": "HTTP برای «بپرس و جواب بگیر» ساخته شده. وقتی سرور باید بدون سؤال حرف بزند — چت، اعلان، قیمت زنده — به چیز دیگری نیاز داری. این مسیر هر دو سرِ ماجرا را می‌سازد: بک‌اند و فرانت‌اند."
    },
    "en": {
      "name": "WebSockets & real-time",
      "desc": "From polling to WebSockets and SSE — server side and browser side, all the way to horizontal scale.",
      "intro": "HTTP is built for ask-and-answer. When the server must speak unprompted — chat, notifications, live prices — you need something else. This track builds both ends: backend and frontend."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا HTTP کافی نیست",
          "d": "polling، long-polling، SSE و WebSocket."
        },
        "en": {
          "t": "Why HTTP is not enough",
          "d": "Polling, long-polling, SSE and WebSockets."
        },
        "kw": "polling sse websocket comparison",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-protocol.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پروتکل WebSocket",
          "d": "handshake، فریم و اینکه چطور از HTTP جدا می‌شود."
        },
        "en": {
          "t": "The WebSocket protocol",
          "d": "The handshake, frames, and how it leaves HTTP behind."
        },
        "kw": "websocket handshake upgrade frame",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-browser.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سمت مرورگر",
          "d": "WebSocket API، رویدادها و مدیریت خطا."
        },
        "en": {
          "t": "The browser side",
          "d": "The WebSocket API, events and error handling."
        },
        "kw": "websocket api onmessage client",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-node.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سمت سرور: Node",
          "d": "با ws و Socket.IO."
        },
        "en": {
          "t": "Server side: Node",
          "d": "With ws and Socket.IO."
        },
        "kw": "node ws socket.io server",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-signalr.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سمت سرور: SignalR",
          "d": "دات‌نت، hub و fallback خودکار."
        },
        "en": {
          "t": "Server side: SignalR",
          "d": ". NET, hubs and automatic fallback."
        },
        "kw": "signalr hub dotnet",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-python.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سمت سرور: پایتون",
          "d": "FastAPI و Django Channels."
        },
        "en": {
          "t": "Server side: Python",
          "d": "FastAPI and Django Channels."
        },
        "kw": "fastapi channels asgi websocket",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-protocol-design.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "طراحی پروتکل پیام خودت",
          "d": "نوع پیام، نسخه و سازگاری."
        },
        "en": {
          "t": "Designing your own message protocol",
          "d": "Message types, versioning and compatibility."
        },
        "kw": "message protocol schema versioning",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "احراز هویت روی سوکت",
          "d": "توکن، و اینکه چرا هدر Authorization اینجا نیست."
        },
        "en": {
          "t": "Authenticating a socket",
          "d": "Tokens, and why there is no Authorization header here."
        },
        "kw": "auth token websocket handshake",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-rooms.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اتاق، کانال و انتشار",
          "d": "ارسال به یک نفر، یک گروه، یا همه."
        },
        "en": {
          "t": "Rooms, channels and broadcasting",
          "d": "Sending to one, to a group, or to everyone."
        },
        "kw": "room channel broadcast group",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-scale.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مقیاس افقی",
          "d": "backplane با Redis، و مسئلهٔ چسبندگی اتصال."
        },
        "en": {
          "t": "Horizontal scale",
          "d": "A Redis backplane, and the sticky-connection problem."
        },
        "kw": "scale redis backplane pubsub sticky",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-reconnect.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اتصال مجدد و حالت آفلاین",
          "d": "صف پیام محلی و همگام‌سازی پس از بازگشت."
        },
        "en": {
          "t": "Reconnection and offline state",
          "d": "A local outbox and resyncing after reconnect."
        },
        "kw": "reconnect backoff offline queue",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-sse.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "SSE و کِی بهتر است",
          "d": "یک‌طرفه، ساده‌تر، و اغلب کافی."
        },
        "en": {
          "t": "SSE and when it is the better choice",
          "d": "One-way, simpler, and often enough."
        },
        "kw": "sse eventsource stream",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "عیب‌یابی",
          "d": "ابزار مرورگر، لاگ و ردیابی پیام."
        },
        "en": {
          "t": "Debugging",
          "d": "Browser tools, logging and tracing messages."
        },
        "kw": "debug devtools frame inspect",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-nginx.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "استقرار پشت Nginx",
          "d": "هدر Upgrade، timeout و TLS."
        },
        "en": {
          "t": "Deploying behind Nginx",
          "d": "The Upgrade header, timeouts and TLS."
        },
        "kw": "nginx upgrade proxy timeout wss",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — اعلان زنده",
          "d": "سرور یک پیام می‌فرستد، مرورگر نشان می‌دهد."
        },
        "en": {
          "t": "Project 1 — live notifications",
          "d": "The server pushes, the browser displays."
        },
        "kw": "capstone notification",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — چت چنداتاقه",
          "d": "اتاق، احراز هویت، تاریخچه و اتصال مجدد."
        },
        "en": {
          "t": "Project 2 — multi-room chat",
          "d": "Rooms, authentication, history and reconnection."
        },
        "kw": "capstone chat rooms",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — سامانهٔ بی‌درنگ مقیاس‌پذیر",
          "d": "چند نمونهٔ سرور، Redis، پایش و استقرار پشت Nginx."
        },
        "en": {
          "t": "Project 3 — a scalable real-time system",
          "d": "Multiple server instances, Redis, monitoring and an Nginx deployment."
        },
        "kw": "capstone scale redis",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1490,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "21-proxy-vpn",
    "dir": "21-proxy-vpn",
    "accent": "#0891B2",
    "accentDark": null,
    "cat": "infra",
    "ico": "<rect x=\"2.6\" y=\"8.5\" width=\"7\" height=\"7\" rx=\"1.6\"/><rect x=\"14.4\" y=\"8.5\" width=\"7\" height=\"7\" rx=\"1.6\"/><path d=\"M9.6 12h4.8\" stroke-linecap=\"round\"/><path d=\"M12 9.6v4.8\" stroke-linecap=\"round\" opacity=\".5\"/>",
    "locked": false,
    "fa": {
      "name": "پروکسی و VPN",
      "desc": "مهندسی شبکه در عمل: forward و reverse proxy، SOCKS5، تونل، WireGuard و OpenVPN.",
      "intro": "پروکسی و VPN هر دو یک کار می‌کنند: ترافیک را از مسیر دیگری عبور می‌دهند. تفاوتشان در لایه‌ای است که در آن کار می‌کنند. این مسیر هر دو را از پایه می‌سازد — با کد، نه فقط با پیکربندی."
    },
    "en": {
      "name": "Proxies & VPNs",
      "desc": "Practical network engineering: forward and reverse proxies, SOCKS5, tunnels, WireGuard and OpenVPN.",
      "intro": "Proxies and VPNs do the same thing: send traffic another way. They differ in the layer they operate at. This track builds both from the ground up — with code, not only configuration."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-what.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "پروکسی چیست",
          "d": "forward، reverse و transparent — سه چیز متفاوت با یک اسم."
        },
        "en": {
          "t": "What a proxy is",
          "d": "Forward, reverse and transparent — three different things, one name."
        },
        "kw": "proxy forward reverse transparent",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-http-proxy.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "HTTP proxy و متد CONNECT",
          "d": "چطور یک درخواست از پروکسی رد می‌شود."
        },
        "en": {
          "t": "HTTP proxies and the CONNECT method",
          "d": "How a request passes through a proxy."
        },
        "kw": "http proxy connect tunnel header",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-socks.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "SOCKS5",
          "d": "لایهٔ پایین‌تر، انعطاف بیشتر."
        },
        "en": {
          "t": "SOCKS5",
          "d": "A lower layer, more flexibility."
        },
        "kw": "socks5 socks handshake udp",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-build-proxy.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ساخت یک پروکسی ساده با کد",
          "d": "سوکت، انتقال دوطرفه و همروندی."
        },
        "en": {
          "t": "Building a simple proxy in code",
          "d": "Sockets, bidirectional relaying and concurrency."
        },
        "kw": "socket relay proxy implementation",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-tls.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "TLS و termination",
          "d": "رمزنگاری، گواهی و جایی که رمز باز می‌شود."
        },
        "en": {
          "t": "TLS and termination",
          "d": "Encryption, certificates and where decryption happens."
        },
        "kw": "tls sni termination certificate",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-chaining.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "زنجیره‌کردن پروکسی",
          "d": "چند پرش، و هزینهٔ تأخیرش."
        },
        "en": {
          "t": "Chaining proxies",
          "d": "Multiple hops, and the latency they cost."
        },
        "kw": "chain upstream hop latency",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-vpn-model.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "VPN چیست: مدل تونل",
          "d": "تفاوت بنیادی با پروکسی، در لایهٔ شبکه."
        },
        "en": {
          "t": "What a VPN is: the tunnel model",
          "d": "How it fundamentally differs from a proxy, at the network layer."
        },
        "kw": "vpn tunnel tun tap layer3",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-wireguard.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "WireGuard",
          "d": "کلید، peer، و راه‌اندازی از صفر."
        },
        "en": {
          "t": "WireGuard",
          "d": "Keys, peers, and setting one up from scratch."
        },
        "kw": "wireguard peer key allowedips",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-openvpn.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "OpenVPN",
          "d": "گواهی، پیکربندی و مقایسه با WireGuard."
        },
        "en": {
          "t": "OpenVPN",
          "d": "Certificates, configuration and a comparison with WireGuard."
        },
        "kw": "openvpn certificate config tls",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مسیریابی و NAT",
          "d": "جدول مسیر، forwarding و masquerade."
        },
        "en": {
          "t": "Routing and NAT",
          "d": "Routing tables, forwarding and masquerading."
        },
        "kw": "routing nat masquerade forward iptables",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-dns.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "DNS در تونل",
          "d": "نشتی DNS و حل درستش."
        },
        "en": {
          "t": "DNS inside a tunnel",
          "d": "DNS leaks and how to fix them properly."
        },
        "kw": "dns leak resolver split",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کارایی",
          "d": "MTU، سربار رمزنگاری و اندازه‌گیری واقعی."
        },
        "en": {
          "t": "Performance",
          "d": "MTU, encryption overhead and real measurement."
        },
        "kw": "mtu throughput overhead benchmark",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-monitoring.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "پایش و لاگ",
          "d": "چه کسی وصل است و چقدر مصرف کرده."
        },
        "en": {
          "t": "Monitoring and logging",
          "d": "Who is connected and how much they used."
        },
        "kw": "monitoring log metrics connection",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-hardening.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امنیت و سخت‌سازی",
          "d": "کلیدها، به‌روزرسانی و کمترین دسترسی."
        },
        "en": {
          "t": "Security and hardening",
          "d": "Keys, updates and least privilege."
        },
        "kw": "hardening key rotation firewall",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — پروکسی HTTP خودت",
          "d": "یک پروکسی کارا در کمتر از ۲۰۰ خط."
        },
        "en": {
          "t": "Project 1 — your own HTTP proxy",
          "d": "A working proxy in under 200 lines."
        },
        "kw": "capstone proxy code",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — سرور WireGuard",
          "d": "راه‌اندازی، چند peer، مسیریابی و DNS."
        },
        "en": {
          "t": "Project 2 — a WireGuard server",
          "d": "Setup, multiple peers, routing and DNS."
        },
        "kw": "capstone wireguard",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — دروازهٔ شبکهٔ کامل",
          "d": "پروکسی، تونل، فایروال، پایش و سخت‌سازی روی یک VPS."
        },
        "en": {
          "t": "Project 3 — a complete network gateway",
          "d": "Proxy, tunnel, firewall, monitoring and hardening on one VPS."
        },
        "kw": "capstone gateway vps",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1510,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "22-skills",
    "dir": "22-skills",
    "accent": "#7C3AED",
    "accentDark": null,
    "cat": "career",
    "ico": "<circle cx=\"12\" cy=\"7.5\" r=\"3.4\"/><path d=\"M4.5 20.5c0-3.6 3.4-6.2 7.5-6.2s7.5 2.6 7.5 6.2\" stroke-linecap=\"round\"/><path d=\"M18.5 4.5 20 6l3-3\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "مهارت‌های مهندس نرم‌افزار",
      "desc": "خواندن کد دیگران، code review، تخمین، مستندنویسی، ارتباط، مصاحبه و رشد شغلی.",
      "intro": "هیچ‌کس به‌خاطر ندانستن یک تابع اخراج نمی‌شود. آدم‌ها به‌خاطر تخمین‌های غلط، کدی که کسی نمی‌تواند نگهداری کند، و نتوانستن توضیح کارشان گیر می‌کنند. این مسیر دربارهٔ همان چیزهاست."
    },
    "en": {
      "name": "Software engineering skills",
      "desc": "Reading other people's code, code review, estimation, technical writing, communication, interviews and career growth.",
      "intro": "Nobody gets fired for not knowing a function. People get stuck on bad estimates, on code nobody can maintain, and on being unable to explain their work. This track is about those things."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-role.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "مهندس نرم‌افزار چه کاری می‌کند",
          "d": "کدنویسی کمتر از نصف کار است."
        },
        "en": {
          "t": "What a software engineer actually does",
          "d": "Writing code is less than half the job."
        },
        "kw": "role responsibility engineering",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-reading-code.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خواندن کد دیگران",
          "d": "روش سیستماتیک ورود به یک پروژهٔ ناآشنا."
        },
        "en": {
          "t": "Reading other people's code",
          "d": "A systematic way into an unfamiliar codebase."
        },
        "kw": "reading code onboarding legacy",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-writing-code.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوشتن کد قابل نگهداری",
          "d": "نام‌گذاری، اندازهٔ تابع و کامنتی که ارزش دارد."
        },
        "en": {
          "t": "Writing maintainable code",
          "d": "Naming, function size and comments worth having."
        },
        "kw": "naming readability comment refactor",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-review.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "code review: دادن و گرفتن",
          "d": "نقد کد بدون نقد آدم."
        },
        "en": {
          "t": "Code review: giving and receiving",
          "d": "Critiquing code without critiquing the person."
        },
        "kw": "review feedback pullrequest",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-debugging.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اشکال‌زدایی سیستماتیک",
          "d": "فرضیه، آزمایش، حذف — به‌جای حدس زدن."
        },
        "en": {
          "t": "Systematic debugging",
          "d": "Hypothesise, test, eliminate — instead of guessing."
        },
        "kw": "debugging bisect hypothesis rubber duck",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-estimation.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تخمین و برنامه‌ریزی",
          "d": "چرا همیشه طولانی‌تر می‌شود، و چه کارش می‌شود کرد."
        },
        "en": {
          "t": "Estimation and planning",
          "d": "Why it always takes longer, and what to do about it."
        },
        "kw": "estimation planning scope buffer",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-writing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوشتن مستند فنی",
          "d": "RFC، ADR و مستندی که خوانده شود."
        },
        "en": {
          "t": "Technical writing",
          "d": "RFCs, ADRs and documents people actually read."
        },
        "kw": "documentation rfc adr writing",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-communication.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ارتباط با غیرفنی‌ها",
          "d": "ترجمهٔ تصمیم فنی به زبان اثر."
        },
        "en": {
          "t": "Communicating with non-engineers",
          "d": "Translating a technical decision into impact."
        },
        "kw": "communication stakeholder tradeoff",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-teamwork.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کار تیمی و جریان Git",
          "d": "شاخه، commit خوانا و حل تعارض."
        },
        "en": {
          "t": "Teamwork and Git workflow",
          "d": "Branches, readable commits and resolving conflicts."
        },
        "kw": "git workflow commit branch team",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-interview.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مصاحبهٔ فنی",
          "d": "الگوریتم، طراحی سیستم و سؤال رفتاری."
        },
        "en": {
          "t": "Technical interviews",
          "d": "Algorithms, system design and behavioural questions."
        },
        "kw": "interview algorithm system design behavioral",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-resume.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "رزومه و نمونه‌کار",
          "d": "نوشتن اثر، نه فهرست تکنولوژی."
        },
        "en": {
          "t": "CV and portfolio",
          "d": "Write impact, not a list of technologies."
        },
        "kw": "resume cv portfolio github",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-learning.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "یادگیری مداوم",
          "d": "چطور یاد بگیری بدون غرق شدن در ابزار جدید."
        },
        "en": {
          "t": "Continuous learning",
          "d": "How to keep learning without drowning in new tools."
        },
        "kw": "learning depth breadth",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-focus.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "مدیریت زمان و تمرکز",
          "d": "کار عمیق در محیطی پر از وقفه."
        },
        "en": {
          "t": "Time and focus",
          "d": "Deep work in an interrupt-driven environment."
        },
        "kw": "focus deep work time management",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-growth.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "رشد شغلی: junior تا senior",
          "d": "تفاوت واقعی سطح‌ها چیست."
        },
        "en": {
          "t": "Career growth: junior to senior",
          "d": "What actually separates the levels."
        },
        "kw": "career growth senior mentoring",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — مستندسازی یک پروژهٔ موجود",
          "d": "README، ADR و راهنمای شروع."
        },
        "en": {
          "t": "Project 1 — document an existing project",
          "d": "A README, an ADR and a getting-started guide."
        },
        "kw": "capstone documentation",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۲ — review و بهبود کد دیگران",
          "d": "خواندن، نقد سازنده و refactor."
        },
        "en": {
          "t": "Project 2 — review and improve someone's code",
          "d": "Reading, constructive critique and refactoring."
        },
        "kw": "capstone review refactor",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۳ — نمونه‌کار قابل ارائه",
          "d": "پروژه‌ای با مستند، تست، CI و توضیح تصمیم‌ها."
        },
        "en": {
          "t": "Project 3 — a portfolio piece",
          "d": "A project with docs, tests, CI and explained decisions."
        },
        "kw": "capstone portfolio",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1400,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "23-history-computing",
    "dir": "23-history-computing",
    "accent": "#A16207",
    "accentDark": null,
    "cat": "roots",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 6.6V12l3.6 2.2\" stroke-linecap=\"round\"/><path d=\"M3.4 9.2h3M17.6 9.2h3\" stroke-linecap=\"round\" opacity=\".5\"/>",
    "locked": false,
    "fa": {
      "name": "تاریخچهٔ رایانش",
      "desc": "از چرتکه تا یادگیری ماشین: چرا هر تکنولوژی ساخته شد، چه دردی داشت، و چه چیزی را ممکن کرد.",
      "intro": "تاریخ برای حفظ کردن تاریخ نیست. هر ابزاری که امروز استفاده می‌کنی، جواب یک دردِ مشخص در یک زمانِ مشخص بوده. وقتی آن درد را بشناسی، دیگر لازم نیست قاعده‌ها را حفظ کنی — خودت می‌فهمی چرا این‌طورند. این مسیر خط زمانی کامل را با نمودار می‌سازد."
    },
    "en": {
      "name": "A history of computing",
      "desc": "From the abacus to machine learning: why each technology was built, what hurt before it, and what it made possible.",
      "intro": "History is not for memorising dates. Every tool you use today answered a specific pain at a specific time. Once you know the pain, you stop memorising rules and start understanding them. This track builds the full timeline, with diagrams."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-before.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "پیش از رایانه",
          "d": "چرتکه، لگاریتم، ماشین تفاضلی بابیج و ایدهٔ آدا لاولیس."
        },
        "en": {
          "t": "Before the computer",
          "d": "The abacus, logarithms, Babbage's difference engine and Ada Lovelace's idea."
        },
        "kw": "abacus babbage lovelace mechanical تاریخچه",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-vacuum.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "دههٔ ۱۹۴۰: لامپ خلأ و فون‌نویمان",
          "d": "ENIAC، معماری برنامهٔ ذخیره‌شده، و چرا هنوز همان معماری است."
        },
        "en": {
          "t": "The 1940s: vacuum tubes and von Neumann",
          "d": "ENIAC, the stored-program architecture, and why we still use it."
        },
        "kw": "eniac von neumann vacuum tube architecture",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-transistor.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ترانزیستور و مدار مجتمع",
          "d": "از اتاقی به اندازهٔ خانه تا تراشه‌ای در کف دست."
        },
        "en": {
          "t": "The transistor and the integrated circuit",
          "d": "From a room-sized machine to a chip in your palm."
        },
        "kw": "transistor integrated circuit bell labs moore",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-unix.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "دههٔ ۶۰ و ۷۰: مِین‌فریم، یونیکس، C",
          "d": "فلسفه‌ای که هنوز روی هر سروری زنده است."
        },
        "en": {
          "t": "The 60s and 70s: mainframes, Unix, C",
          "d": "A philosophy still alive on every server today."
        },
        "kw": "unix mainframe c language bell labs philosophy",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-pc.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "انقلاب ریزپردازنده و رایانهٔ شخصی",
          "d": "وقتی رایانه از سازمان به خانه آمد."
        },
        "en": {
          "t": "The microprocessor and the personal computer",
          "d": "When the computer left the institution and came home."
        },
        "kw": "microprocessor intel 4004 apple ibm pc",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-gui.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "دههٔ ۸۰ و ۹۰: رابط گرافیکی و شبکه",
          "d": "Xerox PARC، مکینتاش، ویندوز، و تولد لینوکس."
        },
        "en": {
          "t": "The 80s and 90s: the GUI and the network",
          "d": "Xerox PARC, the Macintosh, Windows, and the birth of Linux."
        },
        "kw": "gui xerox parc macintosh windows linux",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-internet.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اینترنت عمومی و وب",
          "d": "از شبکه‌ای پژوهشی تا زیرساخت جهانی."
        },
        "en": {
          "t": "The public internet and the web",
          "d": "From a research network to global infrastructure."
        },
        "kw": "internet www browser dotcom",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-2000s.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "دههٔ ۲۰۰۰: موبایل، ابر، متن‌باز",
          "d": "سه تغییری که مدل کسب‌وکار نرم‌افزار را عوض کردند."
        },
        "en": {
          "t": "The 2000s: mobile, cloud, open source",
          "d": "Three shifts that rewrote the business of software."
        },
        "kw": "mobile cloud aws open source saas",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-today.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امروز: چندهسته‌ای، GPU، یادگیری ماشین",
          "d": "چرا پردازنده‌ها دیگر سریع‌تر نمی‌شوند و به‌جایش بیشتر می‌شوند."
        },
        "en": {
          "t": "Today: many cores, GPUs, machine learning",
          "d": "Why processors stopped getting faster and started getting more numerous."
        },
        "kw": "multicore gpu parallel machine learning",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-languages.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تاریخچهٔ زبان‌های برنامه‌نویسی",
          "d": "از اسمبلی تا Rust — هر زبان جواب چه دردی بود."
        },
        "en": {
          "t": "A history of programming languages",
          "d": "From assembly to Rust — which pain each language answered."
        },
        "kw": "fortran lisp c java python rust language history",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تاریخچهٔ معماری نرم‌افزار",
          "d": "مونولیت ← لایه‌ای ← client-server ← SOA ← میکروسرویس ← serverless، و چرخهٔ بازگشتش."
        },
        "en": {
          "t": "A history of software architecture",
          "d": "Monolith → layered → client-server → SOA → microservices → serverless, and how it loops back."
        },
        "kw": "monolith soa microservice serverless architecture history",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-moore.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "قانون مور و پایان آن",
          "d": "یک مشاهدهٔ تجربی که پنجاه سال صنعت را هدایت کرد."
        },
        "en": {
          "t": "Moore's law and its end",
          "d": "An empirical observation that steered an industry for fifty years."
        },
        "kw": "moore law dennard scaling limits",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-timeline.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خط زمانی کامل",
          "d": "یک نمودار بزرگ: سخت‌افزار، زبان، شبکه و معماری کنار هم."
        },
        "en": {
          "t": "The complete timeline",
          "d": "One large diagram: hardware, languages, networks and architecture side by side."
        },
        "kw": "timeline diagram overview chronology",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — خط زمانی یک تکنولوژی",
          "d": "یک ابزاری که هر روز استفاده می‌کنی را ریشه‌یابی کن."
        },
        "en": {
          "t": "Project 1 — the timeline of one technology",
          "d": "Trace the roots of a tool you use every day."
        },
        "kw": "capstone timeline research",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۲ — چرا این تصمیم گرفته شد",
          "d": "یک تصمیم فنی مشهور را تحلیل کن: زمینه، گزینه‌ها، نتیجه."
        },
        "en": {
          "t": "Project 2 — why that decision was made",
          "d": "Analyse a famous technical decision: context, options, outcome."
        },
        "kw": "capstone analysis decision",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۳ — نقشهٔ تکامل یک حوزه",
          "d": "تکامل یک حوزهٔ فنی را با نمودار و منابع مستند کن."
        },
        "en": {
          "t": "Project 3 — mapping the evolution of a field",
          "d": "Document a field's evolution with diagrams and sources."
        },
        "kw": "capstone research diagram",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1300,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "24-hardware",
    "dir": "24-hardware",
    "accent": "#0F766E",
    "accentDark": null,
    "cat": "roots",
    "ico": "<rect x=\"6.5\" y=\"6.5\" width=\"11\" height=\"11\" rx=\"1.6\"/><rect x=\"9.6\" y=\"9.6\" width=\"4.8\" height=\"4.8\" rx=\".8\"/><path d=\"M9.5 6.5V3.4M14.5 6.5V3.4M9.5 17.5v3.1M14.5 17.5v3.1M6.5 9.5H3.4M6.5 14.5H3.4M17.5 9.5h3.1M17.5 14.5h3.1\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "سخت‌افزار در عمل",
      "desc": "قطعه‌به‌قطعهٔ یک رایانه: CPU، حافظه، ذخیره‌سازی، گذرگاه، GPU، توان و خنک‌سازی — و اینکه هرکدام دقیقاً چه می‌کنند.",
      "intro": "نرم‌افزار روی چیزی اجرا می‌شود. اگر ندانی آن چیز چطور کار می‌کند، بعضی مسائل هیچ‌وقت برایت معنا نمی‌دهند: چرا آن حلقه کند است، چرا آن سرور داغ می‌کند، چرا آن دیسک گلوگاه شده. این مسیر سخت‌افزار را از دید کسی توضیح می‌دهد که نرم‌افزار می‌نویسد."
    },
    "en": {
      "name": "Hardware in practice",
      "desc": "Component by component: CPU, memory, storage, buses, GPU, power and cooling — and exactly what each one does.",
      "intro": "Software runs on something. If you do not know how that something works, certain problems never make sense: why that loop is slow, why that server runs hot, why that disk became the bottleneck. This track explains hardware from the point of view of someone who writes software."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-overview.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "معماری کلی یک رایانه",
          "d": "مسیر یک دستور، از دکمهٔ روشن تا اجرا."
        },
        "en": {
          "t": "The overall architecture",
          "d": "The path of one instruction, from power button to execution."
        },
        "kw": "architecture bus cpu memory io overview",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-cpu.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "CPU: هسته، کش، خط لوله",
          "d": "چرا cache miss گران‌تر از یک شاخهٔ اشتباه است."
        },
        "en": {
          "t": "The CPU: cores, cache, pipeline",
          "d": "Why a cache miss costs more than a mispredicted branch."
        },
        "kw": "cpu core cache pipeline branch prediction isa",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-memory.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "حافظه و سلسله‌مراتبش",
          "d": "رجیستر تا دیسک، و اختلاف ده‌میلیون‌برابری تأخیر."
        },
        "en": {
          "t": "Memory and its hierarchy",
          "d": "From register to disk, and a ten-million-fold latency gap."
        },
        "kw": "ram ddr latency hierarchy virtual memory",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-storage.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ذخیره‌سازی: HDD، SSD، NVMe",
          "d": "چرا تصادفی خواندن روی SSD ارزان است و روی HDD نه."
        },
        "en": {
          "t": "Storage: HDD, SSD, NVMe",
          "d": "Why random reads are cheap on an SSD and expensive on a disk."
        },
        "kw": "hdd ssd nvme iops seek wear",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-motherboard.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مادربرد، چیپست و گذرگاه",
          "d": "PCIe و اینکه پهنای باند کجا تمام می‌شود."
        },
        "en": {
          "t": "Motherboard, chipset and buses",
          "d": "PCIe, and where the bandwidth runs out."
        },
        "kw": "motherboard chipset pcie bus lanes",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-gpu.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "GPU و پردازش موازی",
          "d": "چرا کارت گرافیک برای یادگیری ماشین استفاده می‌شود."
        },
        "en": {
          "t": "GPUs and parallel processing",
          "d": "Why a graphics card ended up training models."
        },
        "kw": "gpu cuda parallel simd vram",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-power.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "منبع تغذیه و توان",
          "d": "وات، راندمان، و محاسبهٔ نیاز واقعی."
        },
        "en": {
          "t": "Power supply and consumption",
          "d": "Watts, efficiency, and calculating what you actually need."
        },
        "kw": "psu power efficiency watt ups",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-cooling.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "حرارت و خنک‌سازی",
          "d": "throttling: وقتی سخت‌افزار خودش را کند می‌کند."
        },
        "en": {
          "t": "Heat and cooling",
          "d": "Throttling: when the hardware slows itself down."
        },
        "kw": "cooling thermal throttle tdp fan",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-io.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کارت شبکه و ورودی/خروجی",
          "d": "وقفه، DMA، و اینکه چرا I/O گران است."
        },
        "en": {
          "t": "Network cards and I/O",
          "d": "Interrupts, DMA, and why I/O is expensive."
        },
        "kw": "nic dma interrupt io throughput",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-server.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سرور در برابر دسکتاپ",
          "d": "ECC، RAID، افزونگی — چه چیزی واقعاً فرق دارد."
        },
        "en": {
          "t": "Servers versus desktops",
          "d": "ECC, RAID, redundancy — what genuinely differs."
        },
        "kw": "server ecc raid redundancy rack",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-arm-x86.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ARM در برابر x86",
          "d": "دو فلسفهٔ طراحی، و اینکه چرا ایمیج داکر تو روی یکی کار نمی‌کند."
        },
        "en": {
          "t": "ARM versus x86",
          "d": "Two design philosophies, and why your Docker image fails on one of them."
        },
        "kw": "arm x86 risc cisc architecture multiarch",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-choosing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "انتخاب سخت‌افزار برای بار کاری",
          "d": "پایگاه‌داده، وب، پردازش — هرکدام گلوگاه متفاوتی دارند."
        },
        "en": {
          "t": "Choosing hardware for a workload",
          "d": "Databases, web, batch — each has a different bottleneck."
        },
        "kw": "sizing bottleneck workload benchmark",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "عیب‌یابی سخت‌افزاری",
          "d": "تشخیص RAM معیوب، دیسک در حال مرگ، و حرارت."
        },
        "en": {
          "t": "Hardware troubleshooting",
          "d": "Spotting bad RAM, a dying disk, and thermal problems."
        },
        "kw": "smart memtest diagnostics failure",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — تشریح ماشین خودت",
          "d": "هر قطعه را شناسایی و نقشش را مستند کن."
        },
        "en": {
          "t": "Project 1 — dissect your own machine",
          "d": "Identify every component and document its role."
        },
        "kw": "capstone inventory",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۲ — پیدا کردن گلوگاه",
          "d": "با اندازه‌گیری ثابت کن کدام قطعه محدودکننده است."
        },
        "en": {
          "t": "Project 2 — find the bottleneck",
          "d": "Prove by measurement which component is the limit."
        },
        "kw": "capstone benchmark bottleneck",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۳ — طراحی یک سرور",
          "d": "برای یک بار کاری مشخص، سخت‌افزار انتخاب و توجیه کن."
        },
        "en": {
          "t": "Project 3 — spec a server",
          "d": "Choose and justify hardware for a defined workload."
        },
        "kw": "capstone sizing design",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1290,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "25-network-foundations",
    "dir": "25-network-foundations",
    "accent": "#1D4ED8",
    "accentDark": null,
    "cat": "roots",
    "ico": "<circle cx=\"12\" cy=\"5\" r=\"2.3\"/><circle cx=\"4.8\" cy=\"18\" r=\"2.3\"/><circle cx=\"19.2\" cy=\"18\" r=\"2.3\"/><circle cx=\"12\" cy=\"12\" r=\"2.3\"/><path d=\"M12 7.3v2.4M10.2 13.4 6.4 16.4M13.8 13.4l3.8 3\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "بنیان شبکه",
      "desc": "از سیگنال تا HTTP: مدل لایه‌ای، IP، TCP، DNS، TLS — با تاریخچه‌ای که نشان می‌دهد چرا این‌طور شد.",
      "intro": "هر بار که چیزی «کار نمی‌کند»، مشکل در یکی از لایه‌هاست. اگر لایه‌ها را بشناسی، عیب‌یابی از حدس زدن به روش تبدیل می‌شود: از پایین شروع کن، هر لایه را ثابت کن، برو بالاتر."
    },
    "en": {
      "name": "Networking foundations",
      "desc": "From signal to HTTP: the layered model, IP, TCP, DNS, TLS — with the history that explains why it turned out this way.",
      "intro": "Every time something “does not work”, the problem is in one of the layers. Know the layers and debugging turns from guesswork into method: start at the bottom, prove each layer, move up."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا شبکه؛ از سیگنال تا پیام",
          "d": "مسئلهٔ بنیادی: چطور معنا را روی سیم بفرستیم."
        },
        "en": {
          "t": "Why networks; from signal to message",
          "d": "The founding problem: how to send meaning down a wire."
        },
        "kw": "signal encoding bandwidth network basics",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-layers.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدل OSI و TCP/IP",
          "d": "چرا لایه‌بندی کردند و کدام لایه‌ها واقعاً وجود دارند."
        },
        "en": {
          "t": "The OSI and TCP/IP models",
          "d": "Why they layered it, and which layers really exist."
        },
        "kw": "osi tcpip layer model encapsulation",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-physical.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "لایهٔ فیزیکی و کابل",
          "d": "مس، فیبر، و محدودیت‌های فیزیکی واقعی."
        },
        "en": {
          "t": "The physical layer and cabling",
          "d": "Copper, fibre, and the real physical limits."
        },
        "kw": "cable fiber copper ethernet physical",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-ethernet.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اترنت و سوییچینگ",
          "d": "MAC، فریم، و کاری که سوییچ واقعاً می‌کند."
        },
        "en": {
          "t": "Ethernet and switching",
          "d": "MAC addresses, frames, and what a switch really does."
        },
        "kw": "ethernet mac switch vlan arp",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-ip.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "IP، زیرشبکه و مسیریابی",
          "d": "subnet mask بدون حفظ کردن — با منطق."
        },
        "en": {
          "t": "IP, subnets and routing",
          "d": "Subnet masks by logic, not memorisation."
        },
        "kw": "ip subnet cidr routing gateway ipv6",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-tcp-udp.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "TCP در برابر UDP",
          "d": "تضمین در برابر سرعت، و هزینهٔ هرکدام."
        },
        "en": {
          "t": "TCP versus UDP",
          "d": "Guarantees versus speed, and what each costs."
        },
        "kw": "tcp udp handshake window retransmit",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-dns.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "DNS",
          "d": "بزرگ‌ترین پایگاه‌دادهٔ توزیع‌شدهٔ دنیا، و چرا کش می‌کند."
        },
        "en": {
          "t": "DNS",
          "d": "The world's largest distributed database, and why it caches."
        },
        "kw": "dns resolver record ttl cache",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-nat.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "NAT و فایروال",
          "d": "چرا آدرس خصوصی داری و چرا port forwarding لازم است."
        },
        "en": {
          "t": "NAT and firewalls",
          "d": "Why you have a private address and why port forwarding exists."
        },
        "kw": "nat firewall port forwarding private",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-http.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "HTTP روی لایهٔ انتقال",
          "d": "یک درخواست از مرورگر تا سرور، بایت‌به‌بایت."
        },
        "en": {
          "t": "HTTP over the transport layer",
          "d": "One browser request to server, byte by byte."
        },
        "kw": "http request response header keepalive",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-tls.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "TLS و رمزنگاری",
          "d": "دست‌دادن، گواهی، و اینکه اعتماد از کجا می‌آید."
        },
        "en": {
          "t": "TLS and encryption",
          "d": "The handshake, certificates, and where trust comes from."
        },
        "kw": "tls ssl certificate ca handshake pki",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-history.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تاریخچه: ARPANET تا امروز",
          "d": "چرا اینترنت غیرمتمرکز طراحی شد."
        },
        "en": {
          "t": "History: ARPANET to now",
          "d": "Why the internet was designed to be decentralised."
        },
        "kw": "arpanet rfc ietf history internet",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-wireshark.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تحلیل ترافیک با Wireshark",
          "d": "دیدن آنچه واقعاً روی سیم می‌رود."
        },
        "en": {
          "t": "Traffic analysis with Wireshark",
          "d": "Seeing what actually goes down the wire."
        },
        "kw": "wireshark capture pcap filter analysis",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "عیب‌یابی لایه‌به‌لایه",
          "d": "روشی که همیشه جواب می‌دهد: از پایین به بالا."
        },
        "en": {
          "t": "Layer-by-layer debugging",
          "d": "The method that always works: bottom-up."
        },
        "kw": "troubleshooting ping traceroute mtr method",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — نقشهٔ شبکهٔ خانه",
          "d": "هر دستگاه، آدرس و مسیرش را ترسیم کن."
        },
        "en": {
          "t": "Project 1 — map your home network",
          "d": "Chart every device, its address and its route."
        },
        "kw": "capstone mapping",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۲ — تشریح یک درخواست",
          "d": "یک بارگذاری صفحه را از DNS تا TLS تا HTTP ضبط و تحلیل کن."
        },
        "en": {
          "t": "Project 2 — dissect one request",
          "d": "Capture and analyse a page load from DNS to TLS to HTTP."
        },
        "kw": "capstone wireshark analysis",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۳ — شبکهٔ چندزیرشبکه‌ای",
          "d": "طراحی، مسیریابی و فایروال یک شبکهٔ کوچک سازمانی."
        },
        "en": {
          "t": "Project 3 — a multi-subnet network",
          "d": "Design, route and firewall a small organisational network."
        },
        "kw": "capstone subnet design",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1340,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "26-web-foundations",
    "dir": "26-web-foundations",
    "accent": "#E8590C",
    "accentDark": null,
    "cat": "roots",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3.2 9.6h17.6M3.2 14.4h17.6\"/><path d=\"M12 3a15 15 0 0 0 0 18 15 15 0 0 0 0-18z\"/>",
    "locked": false,
    "fa": {
      "name": "وب: تاریخچه و بنیان",
      "desc": "از اولین صفحهٔ وب تا HTTP/3، WebAssembly و PWA — و اینکه مرورگر واقعاً چه می‌کند.",
      "intro": "وب تنها پلتفرمی است که هیچ‌کس مالکش نیست و همه رویش می‌سازند. این مسیر نشان می‌دهد چطور از یک سند ساده به یک پلتفرم برنامه‌نویسی رسید، و هر لایه‌ای که اضافه شد جواب چه مشکلی بود."
    },
    "en": {
      "name": "The web: history and foundations",
      "desc": "From the first web page to HTTP/3, WebAssembly and PWAs — and what the browser is really doing.",
      "intro": "The web is the only platform nobody owns and everybody builds on. This track shows how a simple document format became a programming platform, and which problem each added layer solved."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-birth.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "وب چطور متولد شد",
          "d": "CERN، ابرمتن، و تصمیمی که همه‌چیز را باز نگه داشت."
        },
        "en": {
          "t": "How the web was born",
          "d": "CERN, hypertext, and the decision that kept it open."
        },
        "kw": "cern berners-lee hypertext history",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-url.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "URL و مسیر یک درخواست",
          "d": "از تایپ آدرس تا رسیدن اولین بایت."
        },
        "en": {
          "t": "URLs and the path of a request",
          "d": "From typing an address to the first byte arriving."
        },
        "kw": "url dns request navigation",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-http-versions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "HTTP/1.1، HTTP/2، HTTP/3",
          "d": "هر نسخه کدام گلوگاه را برداشت."
        },
        "en": {
          "t": "HTTP/1.1, HTTP/2, HTTP/3",
          "d": "Which bottleneck each version removed."
        },
        "kw": "http2 http3 quic multiplexing pipelining",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-html.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "HTML و مدل سند",
          "d": "معناشناسی، DOM، و اینکه چرا تگ درست مهم است."
        },
        "en": {
          "t": "HTML and the document model",
          "d": "Semantics, the DOM, and why the right tag matters."
        },
        "kw": "html dom semantic accessibility",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-css.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "CSS: از جدول‌چینی تا Grid",
          "d": "سه دههٔ تلاش برای چیدمان."
        },
        "en": {
          "t": "CSS: from table layout to Grid",
          "d": "Three decades of trying to lay things out."
        },
        "kw": "css layout flexbox grid cascade",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-js.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "جاوااسکریپت: از اسکریپت تا پلتفرم",
          "d": "ده روز طراحی، سی سال پیامد."
        },
        "en": {
          "t": "JavaScript: from script to platform",
          "d": "Ten days of design, thirty years of consequences."
        },
        "kw": "javascript ecmascript engine v8 history",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-rendering.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مرورگر چطور صفحه را می‌سازد",
          "d": "parse، style، layout، paint، composite — و اینکه کجا کند می‌شود."
        },
        "en": {
          "t": "How a browser renders a page",
          "d": "Parse, style, layout, paint, composite — and where it gets slow."
        },
        "kw": "rendering reflow repaint critical path",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-security.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "امنیت وب",
          "d": "same-origin، CORS، CSP، XSS و CSRF."
        },
        "en": {
          "t": "Web security",
          "d": "Same-origin, CORS, CSP, XSS and CSRF."
        },
        "kw": "cors csp xss csrf same-origin",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-state.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کوکی، session و storage",
          "d": "حالت روی پروتکلی که بی‌حالت طراحی شده بود."
        },
        "en": {
          "t": "Cookies, sessions and storage",
          "d": "State on a protocol designed to be stateless."
        },
        "kw": "cookie session localstorage samesite",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-apis.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "API: از SOAP تا REST تا GraphQL",
          "d": "هر سبک جواب چه مشکلی بود."
        },
        "en": {
          "t": "APIs: SOAP to REST to GraphQL",
          "d": "Which problem each style answered."
        },
        "kw": "soap rest graphql rpc api design",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-pwa.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "PWA و وب آفلاین",
          "d": "service worker و اپی که نصب می‌شود."
        },
        "en": {
          "t": "PWAs and the offline web",
          "d": "Service workers and a web app you install."
        },
        "kw": "pwa service worker manifest offline",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-wasm.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "WebAssembly",
          "d": "وقتی جاوااسکریپت تنها زبان مرورگر نماند."
        },
        "en": {
          "t": "WebAssembly",
          "d": "When JavaScript stopped being the browser's only language."
        },
        "kw": "wasm webassembly performance runtime",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-timeline.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "خط زمانی وب",
          "d": "سی سال در یک نمودار."
        },
        "en": {
          "t": "The web timeline",
          "d": "Thirty years in one diagram."
        },
        "kw": "timeline history web evolution",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — صفحه‌ای بدون فریم‌ورک",
          "d": "HTML معنایی، CSS مدرن، بدون هیچ وابستگی."
        },
        "en": {
          "t": "Project 1 — a page with no framework",
          "d": "Semantic HTML, modern CSS, zero dependencies."
        },
        "kw": "capstone vanilla",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۲ — تحلیل کارایی یک سایت واقعی",
          "d": "اندازه‌گیری، تشخیص گلوگاه، و بهبود اندازه‌گیری‌شده."
        },
        "en": {
          "t": "Project 2 — audit a real site's performance",
          "d": "Measure, find the bottleneck, improve measurably."
        },
        "kw": "capstone performance audit",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۳ — اپ وب آفلاین‌کار",
          "d": "service worker، کش، همگام‌سازی و نصب‌پذیری."
        },
        "en": {
          "t": "Project 3 — an offline-capable web app",
          "d": "Service worker, caching, sync and installability."
        },
        "kw": "capstone pwa offline",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1355,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "27-wireless",
    "dir": "27-wireless",
    "accent": "#7E22CE",
    "accentDark": null,
    "cat": "roots",
    "ico": "<path d=\"M4.2 8.4a11 11 0 0 1 15.6 0M7 11.6a7 7 0 0 1 10 0M9.8 14.8a3 3 0 0 1 4.4 0\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"18.6\" r=\"1.5\"/>",
    "locked": false,
    "fa": {
      "name": "شبکه‌های بی‌سیم و مخابرات",
      "desc": "از موج و فرکانس تا ‎2G‎، ‎3G‎، ‎4G‎، ‎5G‎، وای‌فای، بلوتوث و اینترنت اشیا — با نمودار.",
      "intro": "هوا سیم ندارد، پس چطور داده از آن رد می‌شود؟ این مسیر از فیزیک موج شروع می‌کند و لایه‌به‌لایه بالا می‌آید تا برسد به اینکه گوشی‌ات چطور با دکل حرف می‌زند و چرا ‎5G‎ اصلاً ساخته شد."
    },
    "en": {
      "name": "Wireless and telecom networks",
      "desc": "From waves and frequency to 2G, 3G, 4G, 5G, Wi-Fi, Bluetooth and IoT — with diagrams throughout.",
      "intro": "Air has no wires, so how does data cross it? This track starts at the physics of a wave and works up, layer by layer, to how your phone talks to a tower and why 5G was built at all."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-waves.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "موج، فرکانس، طیف",
          "d": "چرا طیف فرکانسی کمیاب و گران است."
        },
        "en": {
          "t": "Waves, frequency, spectrum",
          "d": "Why radio spectrum is scarce and expensive."
        },
        "kw": "wave frequency spectrum hertz wavelength",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-modulation.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدولاسیون",
          "d": "چطور صفر و یک را سوار موج می‌کنیم."
        },
        "en": {
          "t": "Modulation",
          "d": "How ones and zeros get carried on a wave."
        },
        "kw": "modulation am fm qam psk constellation",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-antenna.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "آنتن و انتشار",
          "d": "بهره، جهت‌مندی، افت مسیر و چندمسیری."
        },
        "en": {
          "t": "Antennas and propagation",
          "d": "Gain, directivity, path loss and multipath."
        },
        "kw": "antenna gain propagation path loss mimo",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-access.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "دسترسی چندگانه",
          "d": "FDMA، TDMA، CDMA، OFDMA — چطور هزاران نفر یک دکل را share می‌کنند."
        },
        "en": {
          "t": "Multiple access",
          "d": "FDMA, TDMA, CDMA, OFDMA — how thousands share one tower."
        },
        "kw": "fdma tdma cdma ofdma multiple access",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-1g-2g.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‎1G‎ و ‎2G‎: از صدا تا پیامک",
          "d": "آنالوگ به دیجیتال، و تولد GSM."
        },
        "en": {
          "t": "1G and 2G: from voice to SMS",
          "d": "Analogue to digital, and the birth of GSM."
        },
        "kw": "1g 2g gsm sms analog digital",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-3g.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‎3G‎: داده وارد می‌شود",
          "d": "UMTS، و لحظه‌ای که موبایل به اینترنت وصل شد."
        },
        "en": {
          "t": "3G: data arrives",
          "d": "UMTS, and the moment mobile met the internet."
        },
        "kw": "3g umts wcdma hspa data",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-4g.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎4G LTE‎: همه‌چیز IP",
          "d": "چرا شبکهٔ صوتی کنار گذاشته شد."
        },
        "en": {
          "t": "4G LTE: everything over IP",
          "d": "Why the voice-switched network was abandoned."
        },
        "kw": "4g lte volte ofdm ip core",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-5g.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‎5G‎: معماری و mmWave",
          "d": "تأخیر پایین، برش شبکه، و اینکه چه چیزی واقعاً تازه است."
        },
        "en": {
          "t": "5G: architecture and mmWave",
          "d": "Low latency, network slicing, and what is genuinely new."
        },
        "kw": "5g mmwave slicing nr latency massive mimo",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-wifi.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "وای‌فای: ‎802.11‎ از b تا 7",
          "d": "باند، کانال، تداخل و اینکه چرا سرعت واقعی کمتر است."
        },
        "en": {
          "t": "Wi-Fi: 802.11 from b to 7",
          "d": "Bands, channels, interference, and why real speed is lower."
        },
        "kw": "wifi 802.11 channel band interference wpa",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-bluetooth.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "بلوتوث و شبکه‌های کوتاه‌برد",
          "d": "BLE، profile، و مصرف انرژی."
        },
        "en": {
          "t": "Bluetooth and short-range networks",
          "d": "BLE, profiles, and power consumption."
        },
        "kw": "bluetooth ble profile pairing zigbee",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-iot.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "LPWAN و اینترنت اشیا",
          "d": "LoRa و NB-IoT: برد زیاد، داده کم، باتری چندساله."
        },
        "en": {
          "t": "LPWAN and IoT",
          "d": "LoRa and NB-IoT: long range, little data, years of battery."
        },
        "kw": "lora nbiot lpwan iot sigfox",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-satellite.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ارتباط ماهواره‌ای",
          "d": "GEO، LEO، و تأخیری که فیزیک تحمیل می‌کند."
        },
        "en": {
          "t": "Satellite communication",
          "d": "GEO, LEO, and the latency physics imposes."
        },
        "kw": "satellite geo leo starlink latency",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-security.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امنیت بی‌سیم",
          "d": "WPA، رمزنگاری هوایی، و حمله‌های شناخته‌شده."
        },
        "en": {
          "t": "Wireless security",
          "d": "WPA, over-the-air encryption, and the known attacks."
        },
        "kw": "wpa3 encryption security wireless attack",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-measure.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اندازه‌گیری و عیب‌یابی سیگنال",
          "d": "RSSI، SNR، و تفسیر درست عددها."
        },
        "en": {
          "t": "Signal measurement and debugging",
          "d": "RSSI, SNR, and reading the numbers correctly."
        },
        "kw": "rssi snr rsrp measurement survey",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 60,
        "fa": {
          "t": "پروژهٔ ۱ — نقشهٔ پوشش وای‌فای",
          "d": "اندازه‌گیری سیگنال و تحلیل تداخل کانال."
        },
        "en": {
          "t": "Project 1 — a Wi-Fi coverage map",
          "d": "Measure signal and analyse channel interference."
        },
        "kw": "capstone survey wifi",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۲ — تحلیل اتصال موبایل",
          "d": "نسل، باند و کیفیت اتصال را ثبت و تفسیر کن."
        },
        "en": {
          "t": "Project 2 — analyse a mobile connection",
          "d": "Record and interpret generation, band and link quality."
        },
        "kw": "capstone mobile analysis",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۳ — طراحی پوشش یک ساختمان",
          "d": "انتخاب فرکانس، جای‌گذاری اکسس‌پوینت و توجیه مهندسی."
        },
        "en": {
          "t": "Project 3 — design coverage for a building",
          "d": "Frequency choice, access-point placement and engineering justification."
        },
        "kw": "capstone design coverage",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1440,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "28-git",
    "dir": "28-git",
    "accent": "#F05033",
    "accentDark": null,
    "cat": "basics",
    "ico": "<circle cx=\"6.5\" cy=\"6.5\" r=\"2.4\"/><circle cx=\"6.5\" cy=\"17.5\" r=\"2.4\"/><circle cx=\"17.5\" cy=\"12\" r=\"2.4\"/><path d=\"M6.5 8.9v6.2M8.9 6.9c4 .5 6 2 6.4 4.3M15.3 13.4c-.6 2.1-2.6 3.3-6.3 3.7\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "گیت",
      "desc": "از اولین commit تا rebase، bisect و بیرون آمدن از هر دردسری — با مدل ذهنی درست از گراف.",
      "intro": "بیشتر آدم‌ها Git را با حفظ کردن پنج دستور یاد می‌گیرند و بعد هر بار که چیزی غیرمنتظره می‌شود، مخزن را پاک می‌کنند و از نو clone می‌گیرند. این مسیر آن پنج دستور را کنار می‌گذارد و از مدل داده شروع می‌کند: Git یک گراف از snapshot‌هاست. وقتی گراف را ببینی، هیچ دستوری دیگر جادو نیست و هیچ خطایی بن‌بست نیست."
    },
    "en": {
      "name": "Git",
      "desc": "From your first commit to rebase, bisect and getting out of any mess — with a correct mental model of the graph.",
      "intro": "Most people learn Git by memorising five commands, then delete the repository and re-clone whenever something unexpected happens. This track skips the five commands and starts from the data model: Git is a graph of snapshots. Once you can see the graph, no command is magic and no error is a dead end."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": true,
        "ex": 12,
        "mins": 70,
        "fa": {
          "t": "مسئله‌ای که Git حل می‌کند",
          "d": "چرا «کپی پوشه با تاریخ» جواب نمی‌دهد، و کنترل نسخه از کجا آمد."
        },
        "en": {
          "t": "The problem Git solves",
          "d": "Why “copy the folder with today's date” fails, and where version control came from."
        },
        "kw": "git vcs history version control چرا",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-model.html",
        "ready": true,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدل داده: blob، tree، commit",
          "d": "Git یک پایگاه‌دادهٔ کلید-مقدار است. همه‌چیز از اینجا نتیجه می‌شود."
        },
        "en": {
          "t": "The data model: blobs, trees, commits",
          "d": "Git is a key-value store. Everything else follows from that."
        },
        "kw": "blob tree commit sha object model plumbing",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-basics.html",
        "ready": true,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "سه ناحیه: working، staging، repository",
          "d": "چرا staging وجود دارد و چطور درست ازش استفاده کنیم."
        },
        "en": {
          "t": "Three areas: working, staging, repository",
          "d": "Why the staging area exists and how to use it properly."
        },
        "kw": "add commit status staging index working tree",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-history.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خواندن تاریخچه",
          "d": "log، show، diff — و پیدا کردن اینکه چه کسی چه چیزی را کِی عوض کرد."
        },
        "en": {
          "t": "Reading history",
          "d": "log, show, diff — and finding who changed what, when."
        },
        "kw": "log diff show blame pickaxe",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-branch.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شاخه: فقط یک اشاره‌گر",
          "d": "چرا ساختن شاخه در Git تقریباً رایگان است."
        },
        "en": {
          "t": "Branches: just a pointer",
          "d": "Why creating a branch in Git costs almost nothing."
        },
        "kw": "branch checkout switch head pointer",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-merge.html",
        "ready": true,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "merge و حل تعارض",
          "d": "fast-forward، merge commit، و اینکه تعارض واقعاً یعنی چه."
        },
        "en": {
          "t": "Merging and resolving conflicts",
          "d": "Fast-forward, merge commits, and what a conflict actually is."
        },
        "kw": "merge conflict fast-forward three-way",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-rebase.html",
        "ready": true,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "rebase",
          "d": "بازنویسی تاریخچه، و قانون طلایی‌اش."
        },
        "en": {
          "t": "Rebase",
          "d": "Rewriting history, and its golden rule."
        },
        "kw": "rebase interactive squash fixup onto",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-remote.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مخزن راه دور",
          "d": "fetch در برابر pull، push، و tracking branch."
        },
        "en": {
          "t": "Remotes",
          "d": "fetch versus pull, push, and tracking branches."
        },
        "kw": "remote fetch pull push origin upstream tracking",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-undo.html",
        "ready": true,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "برگرداندن: reset، revert، restore",
          "d": "سه راه «برگرد عقب» که سه کار متفاوت می‌کنند."
        },
        "en": {
          "t": "Undoing: reset, revert, restore",
          "d": "Three ways to “go back” that do three different things."
        },
        "kw": "reset revert restore hard soft mixed undo",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-reflog.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "reflog: تور نجات",
          "d": "ردّ حرکت refها را پیدا کن؛ و مرزهای واقعی بازیابی را بشناس."
        },
        "en": {
          "t": "Reflog: Git's local safety journal",
          "d": "Find ref movement clues—and understand the limits of recovery."
        },
        "kw": "reflog recover lost commit dangling",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-stash.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "stash، cherry-pick، tag",
          "d": "کار نیمه‌تمام را امن کنار بگذار، hotfix مشخص را انتخابی بیاور و انتشار را با tag دقیق مشخص کن."
        },
        "en": {
          "t": "Stash, cherry-pick, and tags",
          "d": "Set unfinished work aside, apply a selected hotfix, and mark the release with an exact tag."
        },
        "kw": "stash cherry-pick tag annotated",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-bisect.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "bisect: پیدا کردن commit خراب",
          "d": "با آزمون تکرارپذیر، مرز سالم و خراب را در تاریخچه پیدا کن و نتیجه را با patch ثابت کن."
        },
        "en": {
          "t": "Bisect: finding the commit that introduced a bug",
          "d": "Use a repeatable test to find the good/bad boundary and verify the culprit from its patch."
        },
        "kw": "bisect regression debug automate",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-workflow.html",
        "ready": true,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "استراتژی شاخه‌بندی",
          "d": "عمر شاخه، انتشار، CI و نیازهای تیم را بسنج؛ trunk-based، GitHub Flow یا Git Flow را با هزینه‌ها و trade-offهایش انتخاب کن."
        },
        "en": {
          "t": "Branching strategies",
          "d": "Assess branch lifetime, releases, CI, and team needs; choose trunk-based, GitHub Flow, or Git Flow with their costs and trade-offs."
        },
        "kw": "workflow gitflow trunk based feature branch",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-collab.html",
        "ready": true,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کار تیمی: PR و بازبینی کد",
          "d": "commitهای معنادار، توضیح روشن PR، گفت‌وگوی سازندهٔ review، checkهای CI و انتخاب روش merge با دیدن تاریخچه."
        },
        "en": {
          "t": "Team collaboration: pull requests and code review",
          "d": "Meaningful commits, clear PR context, constructive review, CI checks, and choosing a merge method with history in mind."
        },
        "kw": "pull request review conventional commit",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-advanced.html",
        "ready": true,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ابزارهای پیشرفته",
          "d": "worktree، submodule، sparse checkout، hook و LFS."
        },
        "en": {
          "t": "Advanced Git tools: worktree, submodule, sparse-checkout, hooks, and LFS",
          "d": "worktree, submodules, sparse checkout, hooks and LFS."
        },
        "kw": "worktree submodule hook lfs sparse",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-recovery.html",
        "ready": true,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "وقتی همه‌چیز خراب شد",
          "d": "از نشانه تا مدرک و تشخیص: نجات امن refها، commitها و دادهٔ Git، و شناخت مرز چیزی که هرگز ذخیره نشده است."
        },
        "en": {
          "t": "When everything goes wrong",
          "d": "Move from symptom to evidence and diagnosis: safely rescue refs, commits, and Git-stored data while recognizing what was never stored."
        },
        "kw": "recovery detached head force push disaster",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": true,
        "ex": 0,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۱ — تاریخچهٔ تمیز",
          "d": "یک مخزن محلیِ آشفته را با staging دقیق و rebase تعاملی به تاریخچه‌ای خوانا تبدیل کن؛ محتوا را با آزمون و مقایسهٔ درخت ثابت کن."
        },
        "en": {
          "t": "Project 1 — Build a clean, readable history",
          "d": "Reshape a messy local repository with deliberate staging and interactive rebase; prove the result with tests and tree comparison."
        },
        "kw": "capstone git history interactive rebase staging clean commits",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": true,
        "ex": 0,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۲ — گردش کار تیمی",
          "d": "با bare remote و دو clone، دو feature هم‌زمان را با PR، review، حل تعارض و merge policy یکپارچه کن؛ همگامی آلیس و باب را با شواهد ثابت کن."
        },
        "en": {
          "t": "Project 2 — A real team workflow",
          "d": "Integrate two concurrent features through a bare remote and two clones; review, resolve a conflict, apply a merge policy, and prove both clones agree."
        },
        "kw": "capstone team workflow bare remote clone fetch push pull request code review conflict merge policy",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": true,
        "ex": 0,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — نجات مخزن",
          "d": "cloneهای خراب را با reflog، rescue ref، بررسی objectها و نگه‌داشتن کار هم‌تیمی ترمیم کن؛ تفاوت دادهٔ بازیافتنی و فایلی را که Git ذخیره نکرده با مدرک گزارش بده."
        },
        "en": {
          "t": "Project 3 — Rescue a damaged repository without losing recoverable work",
          "d": "Preserve evidence, recover commits from reflogs and a teammate clone, repair the remote safely, and report what Git never stored."
        },
        "kw": "capstone git rescue recovery reflog fsck unreachable force-push detached HEAD recoverable objects incident",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 282,
      "minutes": 1750,
      "capstones": 3,
      "ready": 19
    }
  },
  {
    "id": "29-nodejs",
    "dir": "29-nodejs",
    "accent": "#539E43",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M12 2.6 20.5 7.3v9.4L12 21.4 3.5 16.7V7.3z\"/><path d=\"M9.4 9.2v5.6M9.4 9.2h2.4a1.6 1.6 0 0 1 1.6 1.6v3a1.6 1.6 0 0 1-1.6 1.6\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Node.js",
      "desc": "event loop، ماژول، stream، همروندی و استقرار — پلتفرم، نه فریم‌ورک.",
      "intro": "Node یک فریم‌ورک وب نیست؛ یک محیط اجرای جاوااسکریپت است که یک تصمیم بزرگ گرفته: یک نخ، و همه‌چیز غیرمسدودکننده. این مسیر روی همان تصمیم تمرکز می‌کند، چون هر رفتار عجیبی که در Node می‌بینی — از ترتیب لاگ‌ها تا سرور یخ‌زده — نتیجهٔ مستقیم آن است."
    },
    "en": {
      "name": "Node.js",
      "desc": "The event loop, modules, streams, concurrency and deployment — the platform, not a framework.",
      "intro": "Node is not a web framework; it is a JavaScript runtime built on one big decision: a single thread, and nothing blocking. This track focuses on that decision, because every strange behaviour you meet in Node — from log ordering to a frozen server — follows directly from it."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-what.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "Node چیست و چه مسئله‌ای را حل کرد",
          "d": "‎C10k‎، ورودی/خروجی غیرمسدودکننده و انتخاب تک‌نخی."
        },
        "en": {
          "t": "What Node is and what it solved",
          "d": "C10k, non-blocking I/O and the single-threaded choice."
        },
        "kw": "node runtime v8 libuv nonblocking",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ماژول: CommonJS و ESM",
          "d": "دو سیستم ماژول در یک زیست‌بوم، و قواعد همزیستی‌شان."
        },
        "en": {
          "t": "Modules: CommonJS and ESM",
          "d": "Two module systems in one ecosystem, and the rules for living with both."
        },
        "kw": "commonjs esm require import module",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-npm.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "npm و package.json",
          "d": "وابستگی، نسخه، script و lockfile."
        },
        "en": {
          "t": "npm and package.json",
          "d": "Dependencies, versions, scripts and the lockfile."
        },
        "kw": "npm package.json lockfile semver script",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-eventloop.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "event loop از نزدیک",
          "d": "فاز‌ها، microtask و macrotask — و ترتیبی که غافلگیرت می‌کند."
        },
        "en": {
          "t": "The event loop up close",
          "d": "Phases, microtasks and macrotasks — and the ordering that surprises you."
        },
        "kw": "event loop microtask nexttick setimmediate phase",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-async.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "async: از callback تا async/await",
          "d": "سه نسل مدیریت ناهمگامی و چرا هرکدام آمدند."
        },
        "en": {
          "t": "Async: from callbacks to async/await",
          "d": "Three generations of asynchrony and why each arrived."
        },
        "kw": "callback promise async await hell",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-fs-stream.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "فایل‌سیستم و stream",
          "d": "پردازش فایل یک‌گیگابایتی بدون پر کردن حافظه."
        },
        "en": {
          "t": "Filesystem and streams",
          "d": "Processing a one-gigabyte file without filling memory."
        },
        "kw": "fs stream pipe backpressure buffer",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-http.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "HTTP خام",
          "d": "سرور بدون فریم‌ورک، تا بدانی فریم‌ورک چه می‌کند."
        },
        "en": {
          "t": "Raw HTTP",
          "d": "A server with no framework, so you know what a framework does."
        },
        "kw": "http server request response header",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-buffer.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "buffer و داده باینری",
          "d": "کار با بایت، رمزگذاری و فایل‌های دودویی."
        },
        "en": {
          "t": "Buffers and binary data",
          "d": "Working with bytes, encodings and binary files."
        },
        "kw": "buffer binary encoding typedarray",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-workers.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "worker thread و cluster",
          "d": "وقتی یک نخ کافی نیست."
        },
        "en": {
          "t": "Worker threads and cluster",
          "d": "When one thread is not enough."
        },
        "kw": "worker thread cluster child process cpu",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خطا و چرخهٔ عمر پروسه",
          "d": "خطای مدیریت‌نشده، سیگنال، و خاموشی تمیز."
        },
        "en": {
          "t": "Errors and the process lifecycle",
          "d": "Unhandled rejections, signals, and a graceful shutdown."
        },
        "kw": "error uncaught rejection signal graceful shutdown",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "دیباگ و پروفایل",
          "d": "inspector، heap snapshot و پیدا کردن نشتی حافظه."
        },
        "en": {
          "t": "Debugging and profiling",
          "d": "The inspector, heap snapshots and finding a memory leak."
        },
        "kw": "debug inspector profile heap leak flame",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تست",
          "d": "تست‌ران داخلی Node، mock و تست ناهمگام."
        },
        "en": {
          "t": "Testing",
          "d": "Node's built-in test runner, mocking and async tests."
        },
        "kw": "test node:test vitest jest mock",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-security.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امنیت",
          "d": "وابستگی‌های آسیب‌پذیر، ورودی نامعتبر و اسرار."
        },
        "en": {
          "t": "Security",
          "d": "Vulnerable dependencies, untrusted input and secrets."
        },
        "kw": "security audit injection secret supply chain",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "استقرار",
          "d": "داکر، مدیریت پروسه، متغیر محیطی و لاگ."
        },
        "en": {
          "t": "Deployment",
          "d": "Docker, process management, environment variables and logging."
        },
        "kw": "deploy docker pm2 systemd env",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "یک CLI که فایل می‌خواند و گزارش می‌سازد."
        },
        "en": {
          "t": "Project 1 — a command-line tool",
          "d": "A CLI that reads files and produces a report."
        },
        "kw": "capstone cli",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۲ — سرور HTTP بدون فریم‌ورک",
          "d": "مسیریابی، بدنهٔ درخواست، فایل استاتیک و خطا — دستی."
        },
        "en": {
          "t": "Project 2 — an HTTP server with no framework",
          "d": "Routing, request bodies, static files and errors — by hand."
        },
        "kw": "capstone http server",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۳ — خط لولهٔ پردازش داده",
          "d": "stream، worker، backpressure و اندازه‌گیری کارایی."
        },
        "en": {
          "t": "Project 3 — a data-processing pipeline",
          "d": "Streams, workers, backpressure and measured throughput."
        },
        "kw": "capstone stream worker performance",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1470,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "30-express",
    "dir": "30-express",
    "accent": "#3F4A55",
    "accentDark": null,
    "cat": "backend",
    "ico": "<rect x=\"2.6\" y=\"6\" width=\"18.8\" height=\"12\" rx=\"2.4\"/><path d=\"M6.4 12h11.2M14.4 9.2l3.2 2.8-3.2 2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Express",
      "desc": "مدل middleware، مسیریابی، اعتبارسنجی، احراز هویت و ساختار پروژه‌ای که بزرگ شود.",
      "intro": "Express عمداً کم‌امکانات است: یک تابع، یک زنجیرهٔ middleware، و بقیه‌اش با تو. این آزادی هم قدرت آن است و هم دام آن. این مسیر ساختار می‌دهد — تا پروژه‌ات در ماه ششم هم قابل خواندن بماند."
    },
    "en": {
      "name": "Express",
      "desc": "The middleware model, routing, validation, authentication and a project structure that scales.",
      "intro": "Express is deliberately minimal: one function, one middleware chain, and the rest is up to you. That freedom is both its strength and its trap. This track supplies the structure — so your project is still readable in month six."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-model.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "Express و مدل middleware",
          "d": "همه‌چیز یک تابع با سه آرگومان است."
        },
        "en": {
          "t": "Express and the middleware model",
          "d": "Everything is one function with three arguments."
        },
        "kw": "express middleware next request response",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مسیریابی",
          "d": "پارامتر، الگو، router و ترتیب تطبیق."
        },
        "en": {
          "t": "Routing",
          "d": "Parameters, patterns, routers and match order."
        },
        "kw": "route router param wildcard order",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-req-res.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "درخواست و پاسخ",
          "d": "بدنه، هدر، کوکی، آپلود و پاسخ‌های مختلف."
        },
        "en": {
          "t": "Request and response",
          "d": "Bodies, headers, cookies, uploads and response types."
        },
        "kw": "body parser header cookie multipart",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-custom-mw.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "middleware خودت",
          "d": "لاگ، زمان‌سنجی، احراز هویت — و ترتیبی که مهم است."
        },
        "en": {
          "t": "Writing your own middleware",
          "d": "Logging, timing, auth — and the order that matters."
        },
        "kw": "middleware custom order error-handling",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-static.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "فایل استاتیک و قالب",
          "d": "سرو کردن دارایی و رندر سمت سرور."
        },
        "en": {
          "t": "Static files and templates",
          "d": "Serving assets and server-side rendering."
        },
        "kw": "static template ejs pug view",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-validation.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "اعتبارسنجی ورودی",
          "d": "هیچ ورودی‌ای قابل اعتماد نیست."
        },
        "en": {
          "t": "Input validation",
          "d": "No input is trustworthy."
        },
        "kw": "validation zod joi sanitize schema",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-db.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اتصال به پایگاه‌داده",
          "d": "Prisma یا کوئری خام، pool و مهاجرت."
        },
        "en": {
          "t": "Connecting to a database",
          "d": "Prisma or raw queries, pooling and migrations."
        },
        "kw": "prisma sql pool migration orm",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "احراز هویت با JWT",
          "d": "ورود، توکن، refresh و نگهداری امن."
        },
        "en": {
          "t": "Authentication with JWT",
          "d": "Login, tokens, refresh and safe storage."
        },
        "kw": "jwt auth bcrypt session refresh",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مدیریت خطا",
          "d": "middleware خطا، پاسخ یکدست و لاگ."
        },
        "en": {
          "t": "Error handling",
          "d": "The error middleware, consistent responses and logging."
        },
        "kw": "error handler async wrapper logging",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-structure.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ساختار پروژه",
          "d": "از یک فایل به لایه‌های با مسئولیت روشن."
        },
        "en": {
          "t": "Project structure",
          "d": "From one file to layers with clear responsibilities."
        },
        "kw": "structure layer service controller repository",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست",
          "d": "تست مسیرها با supertest و پایگاه‌دادهٔ تست."
        },
        "en": {
          "t": "Testing",
          "d": "Route tests with supertest and a test database."
        },
        "kw": "supertest integration test fixture",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-security.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امنیت",
          "d": "helmet، CORS، rate limit و تزریق."
        },
        "en": {
          "t": "Security",
          "d": "helmet, CORS, rate limiting and injection."
        },
        "kw": "helmet cors ratelimit injection owasp",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "استقرار",
          "d": "داکر، پروکسی معکوس و پیکربندی production."
        },
        "en": {
          "t": "Deployment",
          "d": "Docker, a reverse proxy and production configuration."
        },
        "kw": "deploy docker nginx cluster env",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — API یادداشت",
          "d": "CRUD کامل با اعتبارسنجی و تست."
        },
        "en": {
          "t": "Project 1 — a notes API",
          "d": "Full CRUD with validation and tests."
        },
        "kw": "capstone crud",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۲ — API با احراز هویت",
          "d": "کاربر، نقش، توکن و مسیرهای محافظت‌شده."
        },
        "en": {
          "t": "Project 2 — an authenticated API",
          "d": "Users, roles, tokens and protected routes."
        },
        "kw": "capstone auth jwt",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس production",
          "d": "لایه‌بندی، کش، صف، مشاهده‌پذیری و استقرار."
        },
        "en": {
          "t": "Project 3 — a production service",
          "d": "Layering, caching, queues, observability and deployment."
        },
        "kw": "capstone production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1350,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "31-nestjs",
    "dir": "31-nestjs",
    "accent": "#E0234E",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M12 2.6 20.5 7.3v9.4L12 21.4 3.5 16.7V7.3z\"/><circle cx=\"12\" cy=\"12\" r=\"2.2\"/><path d=\"M12 4.8v5M12 14.2v5\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "NestJS",
      "desc": "معماری ماژولار، DI، guard و interceptor، ORM، میکروسرویس و GraphQL روی Node.",
      "intro": "Nest جواب یک سؤال است: اگر بخواهی روی Node پروژه‌ای بنویسی که ده نفر رویش کار کنند و سه سال زنده بماند، ساختارش باید چه باشد. جوابش را از Angular و از دنیای جاوا و دات‌نت گرفته: ماژول، تزریق وابستگی، و مرزهای صریح."
    },
    "en": {
      "name": "NestJS",
      "desc": "Modular architecture, DI, guards and interceptors, ORMs, microservices and GraphQL on Node.",
      "intro": "Nest answers one question: if ten people must work on a Node project that has to live three years, what structure does it need? Its answer borrows from Angular and from the Java and .NET worlds: modules, dependency injection, and explicit boundaries."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا Nest؛ معماری ماژولار",
          "d": "چه چیزی را از Express می‌گیرد و چه چیزی می‌دهد."
        },
        "en": {
          "t": "Why Nest; modular architecture",
          "d": "What it takes away from Express and what it gives back."
        },
        "kw": "nest architecture module opinionated",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-building-blocks.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ماژول، کنترلر، سرویس",
          "d": "سه قطعه‌ای که کل فریم‌ورک از آن‌ها ساخته می‌شود."
        },
        "en": {
          "t": "Modules, controllers, services",
          "d": "The three pieces the whole framework is built from."
        },
        "kw": "module controller service provider",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-di.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تزریق وابستگی",
          "d": "دامنه، طول عمر و وابستگی دایره‌ای."
        },
        "en": {
          "t": "Dependency injection",
          "d": "Scopes, lifetimes and circular dependencies."
        },
        "kw": "di inject provider scope circular",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-pipes.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "pipe و اعتبارسنجی",
          "d": "تبدیل و اعتبارسنجی ورودی، به‌صورت اعلانی."
        },
        "en": {
          "t": "Pipes and validation",
          "d": "Transforming and validating input, declaratively."
        },
        "kw": "pipe validation dto class-validator transform",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-guards.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "guard و احراز هویت",
          "d": "‎JWT‎، نقش و مجوز مبتنی بر متادیتا."
        },
        "en": {
          "t": "Guards and authentication",
          "d": "JWT, roles and metadata-driven authorisation."
        },
        "kw": "guard jwt passport role authorization",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-interceptors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "interceptor",
          "d": "لاگ، تبدیل پاسخ، کش و زمان‌سنجی."
        },
        "en": {
          "t": "Interceptors",
          "d": "Logging, response shaping, caching and timing."
        },
        "kw": "interceptor rxjs transform cache",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-filters.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "exception filter",
          "d": "خطای یکدست در کل برنامه."
        },
        "en": {
          "t": "Exception filters",
          "d": "One consistent error shape across the app."
        },
        "kw": "exception filter http error",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-orm.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "پایگاه‌داده: TypeORM و Prisma",
          "d": "مدل، رابطه، مهاجرت و تراکنش."
        },
        "en": {
          "t": "Databases: TypeORM and Prisma",
          "d": "Models, relations, migrations and transactions."
        },
        "kw": "typeorm prisma entity migration transaction",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-config.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "پیکربندی و محیط",
          "d": "ماژول پیکربندی، اعتبارسنجی متغیرها و اسرار."
        },
        "en": {
          "t": "Configuration and environments",
          "d": "The config module, validated variables and secrets."
        },
        "kw": "config env validation secret",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست",
          "d": "تست واحد با ماژول تست و تست ‎e2e‎."
        },
        "en": {
          "t": "Testing",
          "d": "Unit tests with the testing module, and e2e tests."
        },
        "kw": "test e2e supertest mock testing module",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-microservices.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "میکروسرویس در Nest",
          "d": "transport، الگوی پیام و رویداد."
        },
        "en": {
          "t": "Microservices in Nest",
          "d": "Transports, message patterns and events."
        },
        "kw": "microservice transport tcp rabbitmq pattern",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-graphql.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "GraphQL",
          "d": "schema-first در برابر code-first، resolver و ‎N+1‎."
        },
        "en": {
          "t": "GraphQL",
          "d": "Schema-first versus code-first, resolvers and N+1."
        },
        "kw": "graphql resolver dataloader schema",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-websocket.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "WebSocket",
          "d": "gateway، اتاق و رویداد بی‌درنگ."
        },
        "en": {
          "t": "WebSockets",
          "d": "Gateways, rooms and real-time events."
        },
        "kw": "websocket gateway socket.io room",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "استقرار",
          "d": "بیلد، داکر، مانیتورینگ و کارایی."
        },
        "en": {
          "t": "Deployment",
          "d": "Building, Docker, monitoring and performance."
        },
        "kw": "deploy docker build monitoring",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — ‎API‎ ماژولار",
          "d": "دو ماژول با مرز روشن و تست."
        },
        "en": {
          "t": "Project 1 — a modular API",
          "d": "Two modules with clear boundaries and tests."
        },
        "kw": "capstone module",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — احراز هویت و مجوز",
          "d": "‎JWT‎، نقش، guard سفارشی و تست ‎e2e‎."
        },
        "en": {
          "t": "Project 2 — authentication and authorisation",
          "d": "JWT, roles, custom guards and e2e tests."
        },
        "kw": "capstone auth guard",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — سامانهٔ چندسرویسه",
          "d": "دو سرویس Nest با صف، رویداد و مشاهده‌پذیری."
        },
        "en": {
          "t": "Project 3 — a multi-service system",
          "d": "Two Nest services with a queue, events and observability."
        },
        "kw": "capstone microservice",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1505,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "32-rust",
    "dir": "32-rust",
    "accent": "#CE422B",
    "accentDark": null,
    "cat": "backend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"8.6\"/><circle cx=\"12\" cy=\"12\" r=\"3.4\"/><path d=\"M12 3.4v2.2M12 18.4v2.2M20.6 12h-2.2M5.6 12H3.4\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Rust",
      "desc": "مالکیت، قرض‌گیری، trait، همروندی بی‌ترس و وب با Axum — از صفر تا سرویس واقعی.",
      "intro": "Rust یک معامله پیشنهاد می‌دهد: کامپایلر سخت‌گیری می‌کند، و در عوض کل دسته‌ای از باگ‌ها — نشتی حافظه، اشارهٔ آویزان، مسابقهٔ داده — در زمان اجرا اصلاً ممکن نمی‌شوند. سه هفتهٔ اول با کامپایلر می‌جنگی. بعد از آن، متوجه می‌شوی داشت درست می‌گفت."
    },
    "en": {
      "name": "Rust",
      "desc": "Ownership, borrowing, traits, fearless concurrency and web services with Axum — from zero to production.",
      "intro": "Rust offers a trade: the compiler is strict, and in exchange an entire class of bugs — leaks, dangling pointers, data races — becomes impossible at run time. You fight the compiler for three weeks. After that, you realise it was right."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا Rust",
          "d": "مسئلهٔ ایمنی حافظه بدون زباله‌روب."
        },
        "en": {
          "t": "Why Rust",
          "d": "Memory safety without a garbage collector."
        },
        "kw": "rust safety performance gc systems",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-ownership.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مالکیت",
          "d": "تک قاعده‌ای که همه‌چیز از آن می‌آید."
        },
        "en": {
          "t": "Ownership",
          "d": "The single rule everything else follows from."
        },
        "kw": "ownership move drop scope",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-borrowing.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "قرض‌گیری و طول عمر",
          "d": "مرجع مشترک و انحصاری، و اینکه lifetime چه می‌گوید."
        },
        "en": {
          "t": "Borrowing and lifetimes",
          "d": "Shared and exclusive references, and what a lifetime states."
        },
        "kw": "borrow reference lifetime mutable aliasing",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-types.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌ها: struct و enum",
          "d": "enum در Rust بسیار قوی‌تر از چیزی است که فکر می‌کنی."
        },
        "en": {
          "t": "Types: structs and enums",
          "d": "Rust's enums are far more powerful than you expect."
        },
        "kw": "struct enum type impl derive",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-matching.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "pattern matching",
          "d": "تطبیق جامع، و کامپایلری که حالت فراموش‌شده را می‌گیرد."
        },
        "en": {
          "t": "Pattern matching",
          "d": "Exhaustive matching, and a compiler that catches the case you forgot."
        },
        "kw": "match pattern if-let exhaustive",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "خطا: Result و Option",
          "d": "بدون exception، بدون null."
        },
        "en": {
          "t": "Errors: Result and Option",
          "d": "No exceptions, no null."
        },
        "kw": "result option error question mark anyhow",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-traits.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "trait و generic",
          "d": "چندریختی بدون وراثت."
        },
        "en": {
          "t": "Traits and generics",
          "d": "Polymorphism without inheritance."
        },
        "kw": "trait generic impl dyn bound",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-collections.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مجموعه‌ها و iterator",
          "d": "Vec، HashMap و زنجیرهٔ iterator بدون هزینه."
        },
        "en": {
          "t": "Collections and iterators",
          "d": "Vec, HashMap and zero-cost iterator chains."
        },
        "kw": "vec hashmap iterator closure collect",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ماژول و Cargo",
          "d": "ساختار پروژه، crate، feature و workspace."
        },
        "en": {
          "t": "Modules and Cargo",
          "d": "Project layout, crates, features and workspaces."
        },
        "kw": "cargo crate module workspace feature",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-concurrency.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "همروندی بی‌ترس",
          "d": "چرا مسابقهٔ داده در Rust کامپایل نمی‌شود."
        },
        "en": {
          "t": "Fearless concurrency",
          "d": "Why a data race does not compile in Rust."
        },
        "kw": "thread send sync arc mutex channel",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-async.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "async و Tokio",
          "d": "future، runtime و تفاوتش با نخ."
        },
        "en": {
          "t": "async and Tokio",
          "d": "Futures, the runtime, and how it differs from threads."
        },
        "kw": "async await tokio future runtime",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-unsafe.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "unsafe و FFI",
          "d": "کِی لازم است و چطور مهارش کنیم."
        },
        "en": {
          "t": "unsafe and FFI",
          "d": "When it is necessary and how to contain it."
        },
        "kw": "unsafe ffi raw pointer extern",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست و benchmark",
          "d": "تست داخلی، تست یکپارچه و اندازه‌گیری."
        },
        "en": {
          "t": "Testing and benchmarking",
          "d": "Unit tests, integration tests and measurement."
        },
        "kw": "test bench criterion assert",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-web.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "وب با Axum",
          "d": "مسیریابی، حالت مشترک، پایگاه‌داده و ‎JSON‎."
        },
        "en": {
          "t": "Web with Axum",
          "d": "Routing, shared state, databases and JSON."
        },
        "kw": "axum tower serde sqlx handler",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "بیلد و استقرار",
          "d": "کامپایل بهینه، باینری کوچک و داکر."
        },
        "en": {
          "t": "Building and deploying",
          "d": "Optimised builds, small binaries and Docker."
        },
        "kw": "release build musl docker static",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "پردازش فایل با مدیریت خطای درست."
        },
        "en": {
          "t": "Project 1 — a CLI tool",
          "d": "File processing with proper error handling."
        },
        "kw": "capstone cli clap",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — سرویس وب",
          "d": "‎API‎ با پایگاه‌داده، اعتبارسنجی و تست."
        },
        "en": {
          "t": "Project 2 — a web service",
          "d": "An API with a database, validation and tests."
        },
        "kw": "capstone axum api",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس همروند پرکار",
          "d": "async، اشتراک حالت، backpressure و اندازه‌گیری."
        },
        "en": {
          "t": "Project 3 — a high-throughput concurrent service",
          "d": "async, shared state, backpressure and measurement."
        },
        "kw": "capstone concurrency performance",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1660,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "33-ruby-rails",
    "dir": "33-ruby-rails",
    "accent": "#CC0000",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M12 3 20.4 8.4 17.4 19H6.6L3.6 8.4z\"/><path d=\"M3.6 8.4h16.8M12 3v16M8 8.4 12 19M16 8.4 12 19\" stroke-linecap=\"round\" opacity=\".85\"/>",
    "locked": false,
    "fa": {
      "name": "Ruby و Rails",
      "desc": "زبان Ruby، سپس Rails: ‎MVC‎، ActiveRecord، ‎API‎، job پس‌زمینه و تست با RSpec.",
      "intro": "Rails با یک ادعا آمد: بیشتر برنامه‌های وب شبیه هم‌اند، پس بیایید تصمیم‌های تکراری را پیش‌فرض کنیم. نتیجه‌اش سرعتی است که هنوز کم‌نظیر است — به شرطی که قراردادها را بشناسی. این مسیر اول خود Ruby را می‌دهد، چون Rails بدون Ruby فقط جادوست."
    },
    "en": {
      "name": "Ruby & Rails",
      "desc": "The Ruby language, then Rails: MVC, ActiveRecord, APIs, background jobs and testing with RSpec.",
      "intro": "Rails arrived with a claim: most web applications resemble each other, so let us make the repetitive decisions defaults. The result is a speed that is still hard to match — provided you know the conventions. This track teaches Ruby first, because Rails without Ruby is just magic."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-ruby.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "Ruby در ۹۰ دقیقه",
          "d": "نحو، نوع‌ها و فلسفهٔ «همه‌چیز شیء است»."
        },
        "en": {
          "t": "Ruby in ninety minutes",
          "d": "Syntax, types and the everything-is-an-object philosophy."
        },
        "kw": "ruby syntax object irb",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-oop.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شیءگرایی در Ruby",
          "d": "کلاس، ماژول، mixin و متد گمشده."
        },
        "en": {
          "t": "Object orientation in Ruby",
          "d": "Classes, modules, mixins and method_missing."
        },
        "kw": "class module mixin metaprogramming",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-blocks.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "block، proc و lambda",
          "d": "الگویی که همهٔ کد Ruby رویش سوار است."
        },
        "en": {
          "t": "Blocks, procs and lambdas",
          "d": "The pattern all Ruby code rests on."
        },
        "kw": "block proc lambda yield enumerable",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-gems.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "gem و Bundler",
          "d": "وابستگی و نسخه‌بندی."
        },
        "en": {
          "t": "Gems and Bundler",
          "d": "Dependencies and versioning."
        },
        "kw": "gem bundler gemfile version",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-rails.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "Rails: معماری و قرارداد",
          "d": "‎MVC‎، ساختار پوشه و «قرارداد بر پیکربندی»."
        },
        "en": {
          "t": "Rails: architecture and convention",
          "d": "MVC, the directory structure and convention over configuration."
        },
        "kw": "rails mvc convention generator",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-activerecord.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ActiveRecord",
          "d": "مدل، رابطه، اعتبارسنجی و callback."
        },
        "en": {
          "t": "ActiveRecord",
          "d": "Models, associations, validations and callbacks."
        },
        "kw": "activerecord association validation callback",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-migration.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مهاجرت پایگاه‌داده",
          "d": "تغییر شِما به‌صورت نسخه‌بندی‌شده."
        },
        "en": {
          "t": "Database migrations",
          "d": "Versioned schema change."
        },
        "kw": "migration schema rollback seed",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسیریابی و کنترلر",
          "d": "مسیر ‎RESTful‎، پارامتر قوی و فیلتر."
        },
        "en": {
          "t": "Routing and controllers",
          "d": "RESTful routes, strong parameters and filters."
        },
        "kw": "route controller restful params filter",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-views.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "view و قالب",
          "d": "‎ERB‎، partial، helper و دارایی‌ها."
        },
        "en": {
          "t": "Views and templates",
          "d": "ERB, partials, helpers and assets."
        },
        "kw": "erb view partial helper asset",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فرم",
          "d": "‎form_with‎، اعتبارسنجی و نمایش خطا."
        },
        "en": {
          "t": "Forms",
          "d": "form_with, validation and error display."
        },
        "kw": "form validation error nested",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "احراز هویت",
          "d": "‎has_secure_password‎ یا Devise."
        },
        "en": {
          "t": "Authentication",
          "d": "has_secure_password or Devise."
        },
        "kw": "authentication devise session password",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-api.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "Rails به‌عنوان ‎API‎",
          "d": "حالت ‎API-only‎، سریال‌سازی و نسخه‌گذاری."
        },
        "en": {
          "t": "Rails as an API",
          "d": "API-only mode, serialisation and versioning."
        },
        "kw": "api serializer jbuilder versioning",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-jobs.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کار پس‌زمینه",
          "d": "‎ActiveJob‎، Sidekiq و صف."
        },
        "en": {
          "t": "Background jobs",
          "d": "ActiveJob, Sidekiq and queues."
        },
        "kw": "activejob sidekiq queue worker",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست با RSpec",
          "d": "تست مدل، درخواست و سیستم."
        },
        "en": {
          "t": "Testing with RSpec",
          "d": "Model, request and system specs."
        },
        "kw": "rspec factory capybara spec",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کارایی",
          "d": "‎N+1‎، کش و ایندکس."
        },
        "en": {
          "t": "Performance",
          "d": "N+1 queries, caching and indexes."
        },
        "kw": "n+1 cache index bullet",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "استقرار",
          "d": "Puma، داکر، دارایی‌ها و متغیر محیطی."
        },
        "en": {
          "t": "Deployment",
          "d": "Puma, Docker, assets and environment variables."
        },
        "kw": "puma deploy docker credentials",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — وبلاگ",
          "d": "‎CRUD‎، فرم و اعتبارسنجی."
        },
        "en": {
          "t": "Project 1 — a blog",
          "d": "CRUD, forms and validation."
        },
        "kw": "capstone crud blog",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — ‎API‎ با احراز هویت",
          "d": "حالت ‎API-only‎، توکن و تست."
        },
        "en": {
          "t": "Project 2 — an authenticated API",
          "d": "API-only mode, tokens and tests."
        },
        "kw": "capstone api auth",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — اپ کامل",
          "d": "کار پس‌زمینه، کش، جستجو و استقرار."
        },
        "en": {
          "t": "Project 3 — a complete app",
          "d": "Background jobs, caching, search and deployment."
        },
        "kw": "capstone production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1640,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "34-svelte",
    "dir": "34-svelte",
    "accent": "#FF3E00",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M15.6 4.2 9.2 8.3a4.3 4.3 0 0 0-1.3 5.9 4.3 4.3 0 0 0 6 1.3l6.4-4.1a4.3 4.3 0 0 0 1.3-5.9 4.3 4.3 0 0 0-6-1.3z\" opacity=\".55\"/><path d=\"M8.4 19.8l6.4-4.1a4.3 4.3 0 0 0 1.3-5.9 4.3 4.3 0 0 0-6-1.3L3.7 12.6a4.3 4.3 0 0 0-1.3 5.9 4.3 4.3 0 0 0 6 1.3z\"/>",
    "locked": false,
    "fa": {
      "name": "Svelte",
      "desc": "کامپایلر به‌جای runtime: واکنش‌پذیری، store، SvelteKit و استقرار.",
      "intro": "بقیهٔ فریم‌ورک‌ها یک کتابخانه را به مرورگر می‌فرستند تا کار را در زمان اجرا انجام دهد. Svelte همان کار را در زمان کامپایل انجام می‌دهد و جاوااسکریپت خالص تحویل می‌دهد. نتیجه: باندل کوچک‌تر و کد کمتر — به قیمت یک مرحلهٔ بیلد که دیگر اختیاری نیست."
    },
    "en": {
      "name": "Svelte",
      "desc": "A compiler instead of a runtime: reactivity, stores, SvelteKit and deployment.",
      "intro": "Other frameworks ship a library to the browser to do the work at run time. Svelte does that work at compile time and ships plain JavaScript. The result is a smaller bundle and less code — at the cost of a build step that is no longer optional."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا Svelte؛ کامپایلر به‌جای runtime",
          "d": "تفاوت بنیادی با React و Vue، در یک مثال."
        },
        "en": {
          "t": "Why Svelte; a compiler, not a runtime",
          "d": "The fundamental difference from React and Vue, in one example."
        },
        "kw": "svelte compiler runtime bundle virtual dom",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-components.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کامپوننت و نحو",
          "d": "یک فایل: نشانه‌گذاری، استایل و منطق."
        },
        "en": {
          "t": "Components and syntax",
          "d": "One file: markup, style and logic."
        },
        "kw": "component script style markup",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-reactivity.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "واکنش‌پذیری",
          "d": "‎rune‎ و مدل جدید، در برابر ‎$:‎ قدیمی."
        },
        "en": {
          "t": "Reactivity",
          "d": "Runes and the new model, versus the old $: syntax."
        },
        "kw": "reactivity rune state derived effect",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-props.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "props و رویداد",
          "d": "داده به پایین، رویداد به بالا."
        },
        "en": {
          "t": "Props and events",
          "d": "Data down, events up."
        },
        "kw": "props event dispatch binding",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-slots.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "slot و ترکیب",
          "d": "کامپوننت‌هایی که محتوا می‌پذیرند."
        },
        "en": {
          "t": "Slots and composition",
          "d": "Components that accept content."
        },
        "kw": "slot snippet children composition",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-lifecycle.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "چرخهٔ عمر",
          "d": "‎onMount‎، پاکسازی و اثرها."
        },
        "en": {
          "t": "Lifecycle",
          "d": "onMount, cleanup and effects."
        },
        "kw": "onmount ondestroy tick effect",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-stores.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "store و حالت مشترک",
          "d": "حالت بیرون از کامپوننت."
        },
        "en": {
          "t": "Stores and shared state",
          "d": "State outside components."
        },
        "kw": "store writable readable derived context",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-animation.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "انیمیشن و گذار",
          "d": "حرکت داخلی فریم‌ورک، بدون کتابخانه."
        },
        "en": {
          "t": "Animation and transitions",
          "d": "Built-in motion, no library needed."
        },
        "kw": "transition animate motion tween spring",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-kit-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "SvelteKit: مسیریابی",
          "d": "مسیریابی مبتنی بر فایل و layout."
        },
        "en": {
          "t": "SvelteKit: routing",
          "d": "File-based routing and layouts."
        },
        "kw": "sveltekit route layout param",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-kit-load.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "load و داده",
          "d": "بارگذاری سمت سرور و سمت مرورگر."
        },
        "en": {
          "t": "load and data",
          "d": "Server-side and client-side loading."
        },
        "kw": "load server universal fetch",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-kit-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‎form action‎",
          "d": "فرم‌هایی که بدون جاوااسکریپت هم کار می‌کنند."
        },
        "en": {
          "t": "Form actions",
          "d": "Forms that work without JavaScript."
        },
        "kw": "form action progressive enhancement",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-ssr.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‎SSR‎، ‎SSG‎ و adapter",
          "d": "انتخاب حالت رندر و مقصد استقرار."
        },
        "en": {
          "t": "SSR, SSG and adapters",
          "d": "Choosing a render mode and a deployment target."
        },
        "kw": "ssr ssg prerender adapter",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تست",
          "d": "تست کامپوننت و تست ‎e2e‎."
        },
        "en": {
          "t": "Testing",
          "d": "Component tests and e2e tests."
        },
        "kw": "vitest playwright testing library",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "استقرار",
          "d": "بیلد، adapter نود و داکر."
        },
        "en": {
          "t": "Deployment",
          "d": "Building, the node adapter and Docker."
        },
        "kw": "deploy adapter node docker static",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — لیست کارها",
          "d": "حالت، رویداد و ماندگاری محلی."
        },
        "en": {
          "t": "Project 1 — a to-do list",
          "d": "State, events and local persistence."
        },
        "kw": "capstone todo",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۲ — اپ چندصفحه‌ای با داده",
          "d": "مسیریابی، load، فرم و خطا."
        },
        "en": {
          "t": "Project 2 — a multi-page data app",
          "d": "Routing, load, forms and errors."
        },
        "kw": "capstone sveltekit",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۳ — اپ کامل ‎SSR‎",
          "d": "احراز هویت، ‎SSR‎، کارایی و استقرار."
        },
        "en": {
          "t": "Project 3 — a full SSR app",
          "d": "Authentication, SSR, performance and deployment."
        },
        "kw": "capstone ssr production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1420,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "35-qwik",
    "dir": "35-qwik",
    "accent": "#18B6F6",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M13.4 2.6 3.6 13.4h6.2l-1 8 9.8-10.8h-6.2z\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Qwik",
      "desc": "‎resumability‎ به‌جای ‎hydration‎: اپی که تقریباً هیچ جاوااسکریپتی بارگذاری نمی‌کند.",
      "intro": "هر فریم‌ورک ‎SSR‎ یک هزینهٔ پنهان دارد: صفحه سریع نمایش داده می‌شود، اما تا وقتی کل جاوااسکریپت دانلود و اجرا نشود، کلیک‌ها کار نمی‌کنند. اسمش ‎hydration‎ است. Qwik این مرحله را کاملاً حذف می‌کند — و این مسیر توضیح می‌دهد چطور، و چه چیزی در عوض می‌دهی."
    },
    "en": {
      "name": "Qwik",
      "desc": "Resumability instead of hydration: an app that loads almost no JavaScript.",
      "intro": "Every SSR framework carries a hidden cost: the page paints fast, but clicks do nothing until all the JavaScript has downloaded and run. That step is hydration. Qwik removes it entirely — and this track explains how, and what you give up in return."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-hydration.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسئله: hydration",
          "d": "چرا صفحه‌ای که دیده می‌شود هنوز کار نمی‌کند."
        },
        "en": {
          "t": "The problem: hydration",
          "d": "Why a page you can see still does not respond."
        },
        "kw": "hydration tti interactive ssr cost",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-resumability.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "resumability",
          "d": "به‌جای اجرای دوباره، ادامه دادن از جایی که سرور رها کرد."
        },
        "en": {
          "t": "Resumability",
          "d": "Continuing where the server left off, instead of re-running."
        },
        "kw": "resumability serialize continue state",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-components.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کامپوننت و signal",
          "d": "واکنش‌پذیری ریزدانه."
        },
        "en": {
          "t": "Components and signals",
          "d": "Fine-grained reactivity."
        },
        "kw": "component signal useSignal store",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-dollar.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎$‎ و اجرای تنبل",
          "d": "مرز‌هایی که کامپایلر برای بارگذاری تنبل می‌سازد."
        },
        "en": {
          "t": "The $ sign and lazy execution",
          "d": "The boundaries the compiler creates for lazy loading."
        },
        "kw": "dollar lazy chunk qrl optimizer",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "Qwik City: مسیریابی",
          "d": "مسیریابی مبتنی بر فایل و layout."
        },
        "en": {
          "t": "Qwik City: routing",
          "d": "File-based routing and layouts."
        },
        "kw": "qwik city route layout",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-data.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "routeLoader و routeAction",
          "d": "داده و فرم، سمت سرور."
        },
        "en": {
          "t": "routeLoader and routeAction",
          "d": "Data and forms on the server."
        },
        "kw": "routeloader routeaction form server",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-state.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدیریت حالت",
          "d": "حالت محلی، مشترک و سریال‌سازی‌پذیر."
        },
        "en": {
          "t": "State management",
          "d": "Local, shared and serialisable state."
        },
        "kw": "state context store serialization",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-styling.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "استایل",
          "d": "‎CSS‎ محدود به کامپوننت و راه‌های دیگر."
        },
        "en": {
          "t": "Styling",
          "d": "Scoped CSS and the alternatives."
        },
        "kw": "css scoped tailwind style",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-integrations.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "یکپارچگی با کتابخانه‌ها",
          "d": "استفاده از کد React و کتابخانه‌های موجود."
        },
        "en": {
          "t": "Integrations",
          "d": "Using React code and existing libraries."
        },
        "kw": "integration react qwikify adapter",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کارایی و اندازهٔ باندل",
          "d": "اندازه‌گیری واقعی، نه ادعا."
        },
        "en": {
          "t": "Performance and bundle size",
          "d": "Real measurement, not claims."
        },
        "kw": "performance bundle lighthouse core web vitals",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-render.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‎SSR‎ و ‎SSG‎",
          "d": "انتخاب حالت رندر برای هر مسیر."
        },
        "en": {
          "t": "SSR and SSG",
          "d": "Choosing a render mode per route."
        },
        "kw": "ssr ssg static prerender",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "استقرار",
          "d": "adapter، داکر و لبه."
        },
        "en": {
          "t": "Deployment",
          "d": "Adapters, Docker and the edge."
        },
        "kw": "deploy adapter docker edge",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — صفحهٔ تعاملی",
          "d": "کامپوننت، signal و رویداد."
        },
        "en": {
          "t": "Project 1 — an interactive page",
          "d": "Components, signals and events."
        },
        "kw": "capstone signal",
        "cap": 1
      },
      {
        "n": "14",
        "file": "14-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۲ — اپ داده‌محور",
          "d": "loader، action، فرم و خطا."
        },
        "en": {
          "t": "Project 2 — a data-driven app",
          "d": "Loaders, actions, forms and errors."
        },
        "kw": "capstone loader action",
        "cap": 2
      },
      {
        "n": "15",
        "file": "15-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۳ — اپ کامل با اندازه‌گیری کارایی",
          "d": "احراز هویت، استقرار و مقایسهٔ عددی با یک اپ ‎SSR‎ معمولی."
        },
        "en": {
          "t": "Project 3 — a full app, measured",
          "d": "Authentication, deployment and a numeric comparison with a conventional SSR app."
        },
        "kw": "capstone performance production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 15,
      "exercises": 237,
      "minutes": 1265,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "36-packaging",
    "dir": "36-packaging",
    "accent": "#0891B2",
    "accentDark": null,
    "cat": "publish",
    "ico": "<path d=\"M12 2.8 20.5 7v10L12 21.2 3.5 17V7z\"/><path d=\"M3.5 7 12 11.2 20.5 7M12 11.2v10\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "انتشار پکیج و مخزن‌سازی",
      "desc": "‎npm‎، ‎NuGet‎، ‎PyPI‎، ‎crates.io‎، ‎RubyGems‎ و ‎Go modules‎ — به‌علاوهٔ مخزن خصوصی با Nexus و امنیت زنجیرهٔ تأمین.",
      "intro": "کدی که فقط در پروژهٔ خودت کار می‌کند، یک فایل است. کدی که دیگران با یک دستور نصبش می‌کنند، یک محصول است. فاصلهٔ این دو، چند قرارداد ساده اما سخت‌گیر است: نسخه‌گذاری، متادیتا، امضا و سازگاری. این مسیر همان فاصله را برای شش زیست‌بوم بزرگ می‌پیماید، و بعد نشان می‌دهد چطور مخزن خصوصی خودت را بالا بیاوری."
    },
    "en": {
      "name": "Publishing packages & running registries",
      "desc": "npm, NuGet, PyPI, crates.io, RubyGems and Go modules — plus private registries with Nexus and supply-chain security.",
      "intro": "Code that only works inside your project is a file. Code others install with one command is a product. The distance between them is a handful of simple but unforgiving conventions: versioning, metadata, signing and compatibility. This track walks that distance for six major ecosystems, then shows how to run your own private registry."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "پکیج چیست و چرا",
          "d": "مرز میان «کد من» و «کدی که دیگران استفاده می‌کنند»."
        },
        "en": {
          "t": "What a package is, and why",
          "d": "The line between “my code” and “code others use”."
        },
        "kw": "package library distribution reuse",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-semver.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نسخه‌گذاری معنایی",
          "d": "‎major.minor.patch‎ یک قرارداد است، نه یک شماره."
        },
        "en": {
          "t": "Semantic versioning",
          "d": "major.minor.patch is a contract, not a number."
        },
        "kw": "semver breaking change version range",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-npm-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎npm‎: ساخت و انتشار",
          "d": "‎package.json‎، فایل‌های منتشرشده، و اولین ‎publish‎."
        },
        "en": {
          "t": "npm: building and publishing",
          "d": "package.json, published files, and your first publish."
        },
        "kw": "npm publish package.json files exports",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-npm-advanced.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎npm‎ پیشرفته",
          "d": "scope، بسته‌های خصوصی، ‎workspace‎ و ‎monorepo‎."
        },
        "en": {
          "t": "npm advanced",
          "d": "Scopes, private packages, workspaces and monorepos."
        },
        "kw": "scope workspace monorepo changesets",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-nuget.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎NuGet‎: ساخت و انتشار",
          "d": "‎csproj‎، متادیتا، ‎symbol package‎ و ‎nuget.org‎."
        },
        "en": {
          "t": "NuGet: building and publishing",
          "d": "csproj metadata, symbol packages and nuget.org."
        },
        "kw": "nuget nupkg csproj symbols dotnet pack",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-pypi.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎PyPI‎: ‎pyproject‎ و ‎wheel‎",
          "d": "بسته‌بندی مدرن پایتون، از ‎setup.py‎ تا ‎build‎."
        },
        "en": {
          "t": "PyPI: pyproject and wheels",
          "d": "Modern Python packaging, from setup.py to build."
        },
        "kw": "pypi pyproject wheel sdist twine",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-cargo.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‎Cargo‎ و ‎crates.io‎",
          "d": "انتشار crate و مستندسازی خودکار."
        },
        "en": {
          "t": "Cargo and crates.io",
          "d": "Publishing a crate and automatic documentation."
        },
        "kw": "cargo crates.io docs.rs publish",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-gems.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‎RubyGems‎",
          "d": "‎gemspec‎ و انتشار."
        },
        "en": {
          "t": "RubyGems",
          "d": "The gemspec and publishing."
        },
        "kw": "gem gemspec rubygems bundler",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-go-maven.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‎Go modules‎ و ‎Maven‎",
          "d": "دو مدل متفاوت: بدون رجیستری مرکزی، و با آن."
        },
        "en": {
          "t": "Go modules and Maven",
          "d": "Two different models: without a central registry, and with one."
        },
        "kw": "go module maven gradle proxy sum",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-nexus.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مخزن خصوصی با Nexus",
          "d": "یک سرور، چند فرمت: ‎npm‎، ‎NuGet‎، ‎PyPI‎ و ‎Maven‎."
        },
        "en": {
          "t": "A private registry with Nexus",
          "d": "One server, many formats: npm, NuGet, PyPI and Maven."
        },
        "kw": "nexus repository proxy hosted group",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-alternatives.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "گزینه‌های دیگر مخزن",
          "d": "Verdaccio، Artifactory و ‎GitHub Packages‎."
        },
        "en": {
          "t": "Other registry options",
          "d": "Verdaccio, Artifactory and GitHub Packages."
        },
        "kw": "verdaccio artifactory github packages",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-supply-chain.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "امنیت زنجیرهٔ تأمین",
          "d": "امضا، ‎provenance‎، ‎SBOM‎ و حملهٔ ‎typosquatting‎."
        },
        "en": {
          "t": "Supply-chain security",
          "d": "Signing, provenance, SBOMs and typosquatting."
        },
        "kw": "sbom provenance sigstore audit typosquatting",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-ci-release.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "انتشار خودکار با ‎CI‎",
          "d": "انتشار روی تگ، بدون رمز روی لپ‌تاپ کسی."
        },
        "en": {
          "t": "Automated releases with CI",
          "d": "Publish on tag, with no credentials on anyone's laptop."
        },
        "kw": "ci release automation oidc trusted publishing",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-docs.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مستندسازی و ‎CHANGELOG‎",
          "d": "‎README‎ای که سؤال اول را جواب بدهد."
        },
        "en": {
          "t": "Documentation and CHANGELOG",
          "d": "A README that answers the first question."
        },
        "kw": "readme changelog keepachangelog docs",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-maintenance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نگهداری و منسوخ‌سازی",
          "d": "‎deprecate‎، ‎yank‎ و مسئولیت در برابر کاربران."
        },
        "en": {
          "t": "Maintenance and deprecation",
          "d": "deprecate, yank, and your duty to users."
        },
        "kw": "deprecate yank maintenance breaking",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — اولین پکیج عمومی",
          "d": "یک کتابخانهٔ کوچک را واقعاً منتشر کن."
        },
        "en": {
          "t": "Project 1 — your first public package",
          "d": "Actually publish a small library."
        },
        "kw": "capstone publish",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۲ — مخزن خصوصی",
          "d": "Nexus را بالا بیاور و از آن نصب و به آن منتشر کن."
        },
        "en": {
          "t": "Project 2 — a private registry",
          "d": "Stand up Nexus, then install from it and publish to it."
        },
        "kw": "capstone nexus private",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۳ — خط لولهٔ انتشار چندزیست‌بومی",
          "d": "یک ‎monorepo‎ که هم ‎npm‎ و هم ‎NuGet‎ منتشر می‌کند، خودکار و امضاشده."
        },
        "en": {
          "t": "Project 3 — a multi-ecosystem release pipeline",
          "d": "A monorepo publishing both npm and NuGet, automated and signed."
        },
        "kw": "capstone monorepo pipeline",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1560,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "37-mobile-release",
    "dir": "37-mobile-release",
    "accent": "#16A34A",
    "accentDark": null,
    "cat": "publish",
    "ico": "<rect x=\"6.4\" y=\"2.6\" width=\"11.2\" height=\"18.8\" rx=\"2.4\"/><path d=\"M10.6 5.4h2.8\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"18\" r=\"1.1\"/>",
    "locked": false,
    "fa": {
      "name": "انتشار اپلیکیشن موبایل",
      "desc": "از کد تا فایل نصبی و بعد تا فروشگاه: امضا، ‎AAB‎ و ‎IPA‎، گوگل پلی، ‎App Store‎، بازار و مایکت.",
      "intro": "نوشتن اپ نصف کار است. نیمهٔ دیگر — امضای دیجیتال، متادیتا، بازبینی فروشگاه، انتشار تدریجی و بازگشت نسخه — جایی است که بیشتر تیم‌ها اولین بار گیر می‌کنند، معمولاً یک روز قبل از انتشار. این مسیر همان نیمه است، برای هر چهار فروشگاهی که برای مخاطب ایرانی اهمیت دارند."
    },
    "en": {
      "name": "Shipping mobile apps",
      "desc": "From code to installable to store: signing, AAB and IPA, Google Play, the App Store, Bazaar and Myket.",
      "intro": "Writing the app is half the work. The other half — code signing, metadata, store review, staged rollout and rollback — is where most teams get stuck the first time, usually the day before launch. This track is that other half, for all four stores that matter to a Persian-speaking audience."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-pipeline.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "از کد تا فایل نصبی",
          "d": "مسیر بیلد در اندروید و ‎iOS‎، کنار هم."
        },
        "en": {
          "t": "From code to installable",
          "d": "The build path on Android and iOS, side by side."
        },
        "kw": "build pipeline gradle xcode artifact",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-signing.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "امضای دیجیتال",
          "d": "‎keystore‎، گواهی، و اینکه گم کردنش یعنی چه."
        },
        "en": {
          "t": "Code signing",
          "d": "Keystores, certificates, and what losing one means."
        },
        "kw": "keystore signing certificate key alias",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-android-build.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اندروید: ‎APK‎ در برابر ‎AAB‎",
          "d": "چرا گوگل پلی دیگر ‎APK‎ نمی‌پذیرد."
        },
        "en": {
          "t": "Android: APK versus AAB",
          "d": "Why Google Play no longer accepts APKs."
        },
        "kw": "apk aab bundle split abi",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-ios-build.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‎iOS‎: گواهی، ‎provisioning‎ و ‎IPA‎",
          "d": "پیچیده‌ترین بخش انتشار موبایل، مرحله‌به‌مرحله."
        },
        "en": {
          "t": "iOS: certificates, provisioning and IPA",
          "d": "The most intricate part of mobile release, step by step."
        },
        "kw": "certificate provisioning profile ipa xcode",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-assets.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "آیکون، اسپلش و متادیتا",
          "d": "اندازه‌ها، الزامات و اشتباهات رایج."
        },
        "en": {
          "t": "Icons, splash screens and metadata",
          "d": "Sizes, requirements and common mistakes."
        },
        "kw": "icon splash screenshot metadata adaptive",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-versioning.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نسخه‌گذاری و ‎build number‎",
          "d": "تفاوت نسخهٔ نمایشی با شمارهٔ بیلد."
        },
        "en": {
          "t": "Versioning and build numbers",
          "d": "The display version versus the build number."
        },
        "kw": "version code build number semver",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-play-console.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "گوگل پلی: کنسول و انتشار",
          "d": "ایجاد اپ، مسیرهای انتشار و تست بسته."
        },
        "en": {
          "t": "Google Play: console and release",
          "d": "Creating the app, release tracks and closed testing."
        },
        "kw": "play console track internal alpha beta",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-play-policy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "گوگل پلی: بازبینی و سیاست‌ها",
          "d": "دلایل رایج رد شدن و انتشار تدریجی."
        },
        "en": {
          "t": "Google Play: review and policy",
          "d": "Common rejection reasons and staged rollout."
        },
        "kw": "policy review rejection rollout data safety",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-appstore.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‎App Store Connect‎ و ‎TestFlight‎",
          "d": "توزیع نسخهٔ آزمایشی پیش از انتشار عمومی."
        },
        "en": {
          "t": "App Store Connect and TestFlight",
          "d": "Distributing a beta before going public."
        },
        "kw": "app store connect testflight beta",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-apple-review.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "بازبینی اپل",
          "d": "راهنمای بازبینی، دلایل رد و پاسخ دادن به آن."
        },
        "en": {
          "t": "Apple review",
          "d": "The review guidelines, rejection reasons and how to respond."
        },
        "kw": "apple review guideline rejection appeal",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-bazaar.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کافه‌بازار",
          "d": "الزامات، فرایند انتشار و تفاوت‌ها با پلی."
        },
        "en": {
          "t": "Cafe Bazaar",
          "d": "Requirements, the publishing flow, and how it differs from Play."
        },
        "kw": "bazaar cafebazaar انتشار فروشگاه",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-myket.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مایکت",
          "d": "انتشار، به‌روزرسانی و نکات عملی."
        },
        "en": {
          "t": "Myket",
          "d": "Publishing, updates and practical notes."
        },
        "kw": "myket مایکت انتشار فروشگاه",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-updates.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "به‌روزرسانی و بازگشت",
          "d": "انتشار تدریجی، توقف انتشار و به‌روزرسانی اجباری."
        },
        "en": {
          "t": "Updates and rollback",
          "d": "Staged rollout, halting a release and forced updates."
        },
        "kw": "rollout halt force update migration",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-analytics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "آنالیتیکس و گزارش خرابی",
          "d": "دیدن اینکه اپ در دست کاربر واقعی چه می‌کند."
        },
        "en": {
          "t": "Analytics and crash reporting",
          "d": "Seeing what your app does in real users' hands."
        },
        "kw": "crashlytics analytics anr sentry",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — اولین فایل نصبی امضاشده",
          "d": "یک ‎AAB‎ امضاشده بساز و روی دستگاه واقعی نصب کن."
        },
        "en": {
          "t": "Project 1 — your first signed build",
          "d": "Produce a signed AAB and install it on a real device."
        },
        "kw": "capstone signing build",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — انتشار در یک فروشگاه",
          "d": "متادیتا، تست بسته و انتشار واقعی."
        },
        "en": {
          "t": "Project 2 — publish to one store",
          "d": "Metadata, closed testing and a real release."
        },
        "kw": "capstone store release",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — انتشار خودکار چندفروشگاهی",
          "d": "‎CI‎ که بیلد می‌کند، امضا می‌زند و به چند فروشگاه می‌فرستد."
        },
        "en": {
          "t": "Project 3 — automated multi-store release",
          "d": "CI that builds, signs and ships to several stores."
        },
        "kw": "capstone ci fastlane automation",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1510,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "38-projects",
    "dir": "38-projects",
    "accent": "#7C3AED",
    "accentDark": null,
    "cat": "projects",
    "ico": "<path d=\"M4 7.4 12 3l8 4.4v9.2L12 21l-8-4.4z\"/><path d=\"M8 9.6 12 12l4-2.4M12 12v5.4\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
    "locked": false,
    "fa": {
      "name": "پروژه‌های ترکیبی",
      "desc": "سامانه‌های کامل و مستقل که چند مسیر را به هم وصل می‌کنند: چت بی‌درنگ، ‎ERP‎ سازمانی، میکروسرویس چندپایگاه‌داده و بیشتر.",
      "intro": "هر مسیر یک ابزار را عمیق یاد می‌دهد. اما کار واقعی هیچ‌وقت یک ابزار نیست — یک سامانه است که در آن پنج ابزار باید با هم کنار بیایند، و سختی دقیقاً در همان درزهاست. هر فصل اینجا یک پروژهٔ کامل و مستقل است: صورت مسئله، تصمیم‌های معماری با دلیل، پیاده‌سازی، و آنچه می‌شکند."
    },
    "en": {
      "name": "Integration projects",
      "desc": "Complete, self-contained systems that tie several tracks together: real-time chat, an enterprise ERP, multi-database microservices and more.",
      "intro": "Each track teaches one tool deeply. But real work is never one tool — it is a system where five tools must get along, and the difficulty lives precisely in those seams. Every chapter here is one complete, standalone project: the problem, the architectural decisions with their reasoning, the implementation, and what breaks."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-chat.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "چت بی‌درنگ",
          "d": "‎WebSocket‎، Redis برای مقیاس افقی، تاریخچهٔ پیام و حضور کاربر."
        },
        "en": {
          "t": "Real-time chat",
          "d": "WebSockets, Redis for horizontal scale, message history and presence."
        },
        "kw": "chat websocket redis realtime presence",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-shop-search.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "فروشگاه با جستجوی پیشرفته",
          "d": "‎Elasticsearch‎ کنار پایگاه‌دادهٔ رابطه‌ای، و همگام‌سازی بینشان."
        },
        "en": {
          "t": "A shop with real search",
          "d": "Elasticsearch beside a relational database, and keeping them in sync."
        },
        "kw": "shop elasticsearch sync cdc catalog",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-microservices-db.html",
        "ready": false,
        "ex": 18,
        "mins": 325,
        "fa": {
          "t": "میکروسرویس با چند پایگاه‌داده",
          "d": "هر سرویس، پایگاه‌دادهٔ خودش؛ ‎Saga‎ و ‎Outbox‎ برای سازگاری."
        },
        "en": {
          "t": "Microservices with multiple databases",
          "d": "One database per service; Saga and Outbox for consistency."
        },
        "kw": "microservice saga outbox polyglot persistence",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-microfrontend.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "میکروفرانت‌اند روی همان سامانه",
          "d": "سه تیم، سه فریم‌ورک، یک صفحه."
        },
        "en": {
          "t": "Micro-frontends on the same system",
          "d": "Three teams, three frameworks, one page."
        },
        "kw": "micro frontend module federation shell",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-erp-design.html",
        "ready": false,
        "ex": 18,
        "mins": 325,
        "fa": {
          "t": "‎ERP‎ سازمانی — مدل‌سازی و معماری",
          "d": "تحلیل دامنه، مرزبندی ماژول‌ها و تصمیم‌های معماری با دلیل."
        },
        "en": {
          "t": "Enterprise ERP — modelling and architecture",
          "d": "Domain analysis, module boundaries and reasoned architectural decisions."
        },
        "kw": "erp domain modeling module boundary ddd",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-erp-build.html",
        "ready": false,
        "ex": 18,
        "mins": 385,
        "fa": {
          "t": "‎ERP‎ سازمانی — پیاده‌سازی",
          "d": "انبار، فروش، حسابداری: سه ماژول با مرز واقعی."
        },
        "en": {
          "t": "Enterprise ERP — implementation",
          "d": "Inventory, sales, accounting: three modules with real boundaries."
        },
        "kw": "erp inventory accounting implementation",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-sso.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "احراز هویت مرکزی و ‎SSO‎",
          "d": "‎OAuth2‎ و ‎OIDC‎: یک ورود برای همهٔ سرویس‌ها."
        },
        "en": {
          "t": "Central authentication and SSO",
          "d": "OAuth2 and OIDC: one login for every service."
        },
        "kw": "sso oauth oidc keycloak identity",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-dashboard.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "داشبورد تحلیلی بی‌درنگ",
          "d": "جمع‌آوری رویداد، تجمیع و نمایش زنده."
        },
        "en": {
          "t": "A real-time analytics dashboard",
          "d": "Event collection, aggregation and live display."
        },
        "kw": "dashboard analytics aggregation streaming",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-queue.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "صف کار و پردازش پس‌زمینه",
          "d": "کار طولانی، تلاش مجدد، اولویت و صف مرده."
        },
        "en": {
          "t": "Job queues and background processing",
          "d": "Long tasks, retries, priorities and dead letters."
        },
        "kw": "queue worker retry priority dlq",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-gateway.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "‎API Gateway‎ خودت",
          "d": "مسیریابی، احراز هویت، محدودیت نرخ و تجمیع."
        },
        "en": {
          "t": "Build your own API gateway",
          "d": "Routing, authentication, rate limiting and aggregation."
        },
        "kw": "gateway routing ratelimit aggregation",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-notifications.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "سامانهٔ اعلان چندکاناله",
          "d": "ایمیل، پیامک و اعلان درون‌برنامه‌ای با یک ‎API‎."
        },
        "en": {
          "t": "A multi-channel notification system",
          "d": "Email, SMS and in-app notifications behind one API."
        },
        "kw": "notification email sms push template",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-observability.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "مشاهده‌پذیری کامل",
          "d": "لاگ، متریک و trace برای همهٔ پروژه‌های بالا."
        },
        "en": {
          "t": "Full observability",
          "d": "Logs, metrics and traces for every project above."
        },
        "kw": "observability tracing metrics logging grafana",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-cicd.html",
        "ready": false,
        "ex": 18,
        "mins": 265,
        "fa": {
          "t": "خط لولهٔ ‎CI/CD‎ مشترک",
          "d": "یک خط لوله که همهٔ این سامانه‌ها را می‌سازد و مستقر می‌کند."
        },
        "en": {
          "t": "A shared CI/CD pipeline",
          "d": "One pipeline that builds and deploys all of these systems."
        },
        "kw": "cicd pipeline deploy environment",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-mobile-backend.html",
        "ready": false,
        "ex": 18,
        "mins": 325,
        "fa": {
          "t": "اپ موبایل با بک‌اند مشترک",
          "d": "یک ‎API‎، سه کلاینت: وب، اندروید و ‎iOS‎."
        },
        "en": {
          "t": "A mobile app on a shared backend",
          "d": "One API, three clients: web, Android and iOS."
        },
        "kw": "mobile backend api flutter shared",
        "cap": 0
      }
    ],
    "stats": {
      "chapters": 14,
      "exercises": 252,
      "minutes": 4010,
      "capstones": 0,
      "ready": 0
    }
  },
  {
    "id": "41-javascript",
    "dir": "41-javascript",
    "accent": "#A88A00",
    "accentDark": "#F7DF1E",
    "cat": "frontend",
    "ico": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2.4\"/><path d=\"M9.4 9.6v5.2c0 1.1-.7 1.7-1.7 1.7M13 15.6c.5.7 1.2 1 2.1 1 1.2 0 1.9-.6 1.9-1.5 0-2-3.7-1.4-3.7-3.4 0-.9.8-1.5 1.8-1.5.8 0 1.4.3 1.8.9\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "جاوااسکریپت",
      "desc": "از نوع‌ها و scope تا prototype، async، ماژول و الگوهای مدرن — زبان، بدون فریم‌ورک.",
      "intro": "جاوااسکریپت زبانی است که همه فکر می‌کنند بلدند و کمتر کسی واقعاً می‌داند. `this` چه می‌شود، چرا آن حلقه عدد اشتباه چاپ می‌کند، چرا `0.1 + 0.2` برابر `0.3` نیست — همهٔ اینها قاعده دارند. این مسیر قاعده‌ها را می‌دهد تا دیگر حدس نزنی."
    },
    "en": {
      "name": "JavaScript",
      "desc": "From types and scope to prototypes, async, modules and modern patterns — the language, without a framework.",
      "intro": "JavaScript is the language everyone thinks they know and few actually do. What `this` becomes, why that loop logs the wrong number, why `0.1 + 0.2` is not `0.3` — all of it has rules. This track gives you the rules so you stop guessing."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-types.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌ها و تبدیل",
          "d": "‏coercion، ‎==‎ در برابر ‎===‎، و ‎NaN‎."
        },
        "en": {
          "t": "Types and coercion",
          "d": "Coercion, == versus ===, and NaN."
        },
        "kw": "type coercion primitive nan typeof",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-scope.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏scope و hoisting",
          "d": "‏var، let، const و چیزی که واقعاً اتفاق می‌افتد."
        },
        "en": {
          "t": "Scope and hoisting",
          "d": "var, let, const, and what really happens."
        },
        "kw": "scope hoisting tdz closure block",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تابع و closure",
          "d": "تابع مقدار است — و closure طبیعی‌ترین نتیجهٔ آن."
        },
        "en": {
          "t": "Functions and closures",
          "d": "Functions are values — and closures are the natural consequence."
        },
        "kw": "function closure iife arrow first-class",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-this.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏this و bind",
          "d": "چهار قاعده که همهٔ رفتار ‎this‎ را توضیح می‌دهند."
        },
        "en": {
          "t": "this and binding",
          "d": "Four rules that explain every behaviour of this."
        },
        "kw": "this bind call apply arrow context",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-objects.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شیء و prototype",
          "d": "وراثت prototypal، که کلاس فقط پوستهٔ آن است."
        },
        "en": {
          "t": "Objects and prototypes",
          "d": "Prototypal inheritance, of which class is only a shell."
        },
        "kw": "object prototype inheritance descriptor",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-classes.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏class و شیءگرایی",
          "d": "‏class، ‎#private‎، static و getter."
        },
        "en": {
          "t": "Classes and OOP",
          "d": "class, #private fields, static members and getters."
        },
        "kw": "class extends super static private",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-arrays.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "آرایه و متدهایش",
          "d": "‏map، filter، reduce — و اینکه کِی حلقه بهتر است."
        },
        "en": {
          "t": "Arrays and their methods",
          "d": "map, filter, reduce — and when a plain loop is better."
        },
        "kw": "array map filter reduce spread destructuring",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-async-1.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ناهمگامی ۱: event loop",
          "d": "‏call stack، صف، و ترتیبی که غافلگیرت می‌کند."
        },
        "en": {
          "t": "Async 1: the event loop",
          "d": "The call stack, the queues, and the ordering that surprises you."
        },
        "kw": "event loop task microtask stack queue",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-async-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ناهمگامی ۲: Promise و async/await",
          "d": "زنجیره، خطا، و اجرای موازی."
        },
        "en": {
          "t": "Async 2: Promises and async/await",
          "d": "Chaining, error handling and parallel execution."
        },
        "kw": "promise async await all race settled",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ماژول",
          "d": "‏ESM، import پویا و بارگذاری تنبل."
        },
        "en": {
          "t": "Modules",
          "d": "ESM, dynamic import and lazy loading."
        },
        "kw": "module esm import export dynamic",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-dom.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏DOM و رویداد",
          "d": "انتخاب، تغییر، رویداد، و bubbling."
        },
        "en": {
          "t": "The DOM and events",
          "d": "Selecting, mutating, events and bubbling."
        },
        "kw": "dom event bubble delegate listener",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-fetch.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شبکه",
          "d": "‏fetch، JSON، خطا، لغو درخواست و CORS."
        },
        "en": {
          "t": "Networking",
          "d": "fetch, JSON, errors, aborting requests and CORS."
        },
        "kw": "fetch json abort cors headers",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-storage.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ذخیره‌سازی در مرورگر",
          "d": "‏localStorage، sessionStorage، IndexedDB و کوکی."
        },
        "en": {
          "t": "Browser storage",
          "d": "localStorage, sessionStorage, IndexedDB and cookies."
        },
        "kw": "localstorage indexeddb cookie storage",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خطا و اشکال‌زدایی",
          "d": "‏try/catch، خطای سفارشی، و ابزار مرورگر."
        },
        "en": {
          "t": "Errors and debugging",
          "d": "try/catch, custom errors, and the browser devtools."
        },
        "kw": "error debug devtools breakpoint stack trace",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-patterns.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوهای مدرن",
          "d": "‏optional chaining، nullish، destructuring، generator و Proxy."
        },
        "en": {
          "t": "Modern patterns",
          "d": "Optional chaining, nullish coalescing, destructuring, generators and Proxy."
        },
        "kw": "optional chaining generator proxy symbol iterator",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کارایی",
          "d": "‏debounce، throttle، حافظه و نشتی."
        },
        "en": {
          "t": "Performance",
          "d": "Debounce, throttle, memory and leaks."
        },
        "kw": "performance debounce throttle memory leak",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست",
          "d": "‏Vitest، mock و تست ناهمگام."
        },
        "en": {
          "t": "Testing",
          "d": "Vitest, mocking and async tests."
        },
        "kw": "test vitest jest mock spy",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — اپ تعاملی بدون فریم‌ورک",
          "d": "‏DOM، رویداد، حالت و ذخیره‌سازی — دستی."
        },
        "en": {
          "t": "Project 1 — an interactive app, no framework",
          "d": "DOM, events, state and storage — by hand."
        },
        "kw": "capstone vanilla dom",
        "cap": 1
      },
      {
        "n": "19",
        "file": "19-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — کتابخانهٔ کوچک خودت",
          "d": "‏API تمیز، ماژول، تست و انتشار."
        },
        "en": {
          "t": "Project 2 — your own small library",
          "d": "A clean API, modules, tests and publishing."
        },
        "kw": "capstone library",
        "cap": 2
      },
      {
        "n": "20",
        "file": "20-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — کلاینت بی‌درنگ",
          "d": "‏fetch، WebSocket، حالت پیچیده و مدیریت خطا."
        },
        "en": {
          "t": "Project 3 — a real-time client",
          "d": "fetch, WebSockets, complex state and error handling."
        },
        "kw": "capstone realtime",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 20,
      "exercises": 327,
      "minutes": 1790,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "42-typescript",
    "dir": "42-typescript",
    "accent": "#3178C6",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2.4\"/><path d=\"M7 10h5M9.5 10v7M14 16.4c.5.5 1.2.8 2 .8 1.1 0 1.9-.6 1.9-1.4 0-1.9-3.6-1.3-3.6-3.2 0-.8.7-1.4 1.7-1.4.7 0 1.3.2 1.7.7\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "TypeScript",
      "desc": "سیستم نوع، generic، نوع‌های شرطی و پیکربندی — تا کامپایلر باگ را قبل از کاربر پیدا کند.",
      "intro": "‏TypeScript جاوااسکریپت با نوع نیست؛ یک سیستم نوع کامل روی زبانی است که برای نوع طراحی نشده بود. همین باعث می‌شود هم قوی‌تر از چیزی که فکر می‌کنی باشد، هم عجیب‌تر. این مسیر تا جایی می‌رود که بتوانی نوع‌های واقعاً پیچیده را بخوانی و بنویسی."
    },
    "en": {
      "name": "TypeScript",
      "desc": "The type system, generics, conditional types and configuration — so the compiler finds the bug before your user does.",
      "intro": "TypeScript is not JavaScript with types; it is a full type system layered onto a language never designed for one. That makes it both more powerful and stranger than you expect. This track goes far enough that you can read and write genuinely complex types."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا TypeScript",
          "d": "چه چیزی می‌گیرد و چه هزینه‌ای دارد."
        },
        "en": {
          "t": "Why TypeScript",
          "d": "What it catches and what it costs."
        },
        "kw": "typescript why type safety",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌های پایه",
          "d": "‏primitive، آرایه، tuple، enum و ‎any‎ که باید ازش بترسی."
        },
        "en": {
          "t": "Basic types",
          "d": "Primitives, arrays, tuples, enums, and the any you should fear."
        },
        "kw": "type primitive tuple enum any unknown",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-interfaces.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏interface و type",
          "d": "تفاوتشان، و اینکه کدام را کِی."
        },
        "en": {
          "t": "Interfaces and type aliases",
          "d": "The difference, and which to use when."
        },
        "kw": "interface type alias extends intersection",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تابع و overload",
          "d": "پارامتر اختیاری، نوع بازگشتی و امضای چندگانه."
        },
        "en": {
          "t": "Functions and overloads",
          "d": "Optional parameters, return types and multiple signatures."
        },
        "kw": "function overload parameter return void never",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-narrowing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "باریک‌سازی نوع",
          "d": "‏typeof، in، instanceof و type guard خودت."
        },
        "en": {
          "t": "Type narrowing",
          "d": "typeof, in, instanceof and your own type guards."
        },
        "kw": "narrowing guard discriminated union predicate",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-generics.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏generic",
          "d": "نوع به‌عنوان پارامتر — سخت‌ترین بخش، با مثال واقعی."
        },
        "en": {
          "t": "Generics",
          "d": "Types as parameters — the hardest part, with real examples."
        },
        "kw": "generic constraint infer default",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-utility.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌های کمکی",
          "d": "‏Partial، Pick، Omit، Record و بقیه."
        },
        "en": {
          "t": "Utility types",
          "d": "Partial, Pick, Omit, Record and the rest."
        },
        "kw": "utility partial pick omit record readonly",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-conditional.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "نوع‌های شرطی و mapped",
          "d": "برنامه‌نویسی در سطح نوع."
        },
        "en": {
          "t": "Conditional and mapped types",
          "d": "Programming at the type level."
        },
        "kw": "conditional mapped infer template literal",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ماژول و فایل تعریف",
          "d": "‏.d.ts و کار با کتابخانه‌های بدون نوع."
        },
        "en": {
          "t": "Modules and declaration files",
          "d": ".d.ts and working with untyped libraries."
        },
        "kw": "declaration dts module ambient namespace",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-config.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏tsconfig",
          "d": "‏strict، target، path و گزینه‌هایی که واقعاً مهم‌اند."
        },
        "en": {
          "t": "tsconfig",
          "d": "strict, target, paths, and the options that actually matter."
        },
        "kw": "tsconfig strict target module paths",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-react.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏TypeScript در React",
          "d": "‏props، hook، event و کامپوننت عمومی."
        },
        "en": {
          "t": "TypeScript with React",
          "d": "Props, hooks, events and generic components."
        },
        "kw": "react props hook event fc generic",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-node.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏TypeScript در Node",
          "d": "بیلد، اجرا، و پیکربندی سمت سرور."
        },
        "en": {
          "t": "TypeScript with Node",
          "d": "Building, running and server-side configuration."
        },
        "kw": "node tsx build esm cjs",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-migration.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مهاجرت از جاوااسکریپت",
          "d": "تدریجی، بدون توقف پروژه."
        },
        "en": {
          "t": "Migrating from JavaScript",
          "d": "Incrementally, without stopping the project."
        },
        "kw": "migration allowjs incremental strict",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — نوع‌گذاری یک پروژهٔ موجود",
          "d": "یک کد جاوااسکریپتی را تدریجی نوع‌دار کن."
        },
        "en": {
          "t": "Project 1 — type an existing project",
          "d": "Incrementally add types to a JavaScript codebase."
        },
        "kw": "capstone migration",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — کتابخانهٔ نوع‌دار",
          "d": "‏API عمومی با نوع‌های دقیق و ‎.d.ts‎."
        },
        "en": {
          "t": "Project 2 — a typed library",
          "d": "A public API with precise types and a .d.ts."
        },
        "kw": "capstone library types",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — نوع‌های پیشرفته",
          "d": "‏client API با نوع‌های استنتاجی از روی schema."
        },
        "en": {
          "t": "Project 3 — advanced types",
          "d": "An API client with types inferred from a schema."
        },
        "kw": "capstone advanced inference",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1445,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "43-c",
    "dir": "43-c",
    "accent": "#5C6BC0",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M16.8 8.2A5.6 5.6 0 0 0 12 5.6 6.4 6.4 0 0 0 12 18.4a5.6 5.6 0 0 0 4.8-2.6\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"9.4\" opacity=\".45\"/>",
    "locked": false,
    "fa": {
      "name": "زبان C",
      "desc": "اشاره‌گر، حافظه، آرایه و ساختمان داده — زبانی که سیستم‌عامل‌ها با آن نوشته شده‌اند.",
      "intro": "‏C کوچک است: بیست‌وچند کلیدواژه و تقریباً هیچ چیز پنهانی. همین باعث می‌شود سخت‌ترین و آموزنده‌ترین زبان برای یادگیری باشد — چون هیچ‌چیز را برایت انجام نمی‌دهد. اگر C را بفهمی، بعد از آن هر زبانی به نظرت یک راحتی لوکس می‌آید، و می‌دانی آن راحتی دقیقاً چه چیزی را پنهان می‌کند."
    },
    "en": {
      "name": "C",
      "desc": "Pointers, memory, arrays and data structures — the language operating systems are written in.",
      "intro": "C is small: two dozen keywords and almost nothing hidden. That makes it the hardest and most instructive language to learn, because it does nothing for you. Understand C and every later language feels like a luxury — and you know exactly what that luxury is hiding."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا هنوز C",
          "d": "کجا استفاده می‌شود و چرا جایگزین نشده."
        },
        "en": {
          "t": "Why C, still",
          "d": "Where it is used and why nothing replaced it."
        },
        "kw": "c systems history kernel embedded",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع، متغیر، عملگر",
          "d": "اندازهٔ نوع‌ها و سرریز."
        },
        "en": {
          "t": "Types, variables, operators",
          "d": "Type sizes and overflow."
        },
        "kw": "type int char overflow sizeof",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-control.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کنترل جریان",
          "d": "شرط، حلقه، switch و goto."
        },
        "en": {
          "t": "Control flow",
          "d": "Conditionals, loops, switch and goto."
        },
        "kw": "if while for switch goto",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تابع و پشته",
          "d": "فراخوانی، بازگشت و frame پشته."
        },
        "en": {
          "t": "Functions and the stack",
          "d": "Calls, recursion and stack frames."
        },
        "kw": "function stack recursion frame",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-pointers.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "اشاره‌گر",
          "d": "مهم‌ترین فصل. آدرس، مرجع‌گیری و حساب اشاره‌گر."
        },
        "en": {
          "t": "Pointers",
          "d": "The chapter that matters most. Addresses, dereferencing and pointer arithmetic."
        },
        "kw": "pointer address dereference arithmetic null",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-arrays.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "آرایه و رشته",
          "d": "چرا آرایه در C اشاره‌گر است و رشته پایان‌یافته با صفر."
        },
        "en": {
          "t": "Arrays and strings",
          "d": "Why an array is a pointer, and null-terminated strings."
        },
        "kw": "array string char decay strlen",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-memory.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مدیریت حافظه",
          "d": "‏malloc، free، نشتی و استفادهٔ پس از آزادسازی."
        },
        "en": {
          "t": "Memory management",
          "d": "malloc, free, leaks and use-after-free."
        },
        "kw": "malloc free heap leak valgrind",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-structs.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏struct و union",
          "d": "چیدمان حافظه و padding."
        },
        "en": {
          "t": "Structs and unions",
          "d": "Memory layout and padding."
        },
        "kw": "struct union typedef padding align",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-files.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فایل و ورودی/خروجی",
          "d": "خواندن، نوشتن و باینری."
        },
        "en": {
          "t": "Files and I/O",
          "d": "Reading, writing and binary data."
        },
        "kw": "file fopen fread stdin buffer",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-preprocessor.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "پیش‌پردازنده",
          "d": "‏#define، #include و ماکرو."
        },
        "en": {
          "t": "The preprocessor",
          "d": "#define, #include and macros."
        },
        "kw": "preprocessor macro define include guard",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-datastructures.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ساختمان داده با اشاره‌گر",
          "d": "لیست پیوندی، درخت و پشته — از صفر."
        },
        "en": {
          "t": "Data structures with pointers",
          "d": "Linked lists, trees and stacks — from scratch."
        },
        "kw": "linked list tree stack queue",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-build.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کامپایل و Make",
          "d": "مراحل کامپایل، لینک و Makefile."
        },
        "en": {
          "t": "Compiling and Make",
          "d": "Compilation stages, linking and Makefiles."
        },
        "kw": "gcc compile link makefile object",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-debug.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اشکال‌زدایی",
          "d": "‏gdb، valgrind و segfault."
        },
        "en": {
          "t": "Debugging",
          "d": "gdb, valgrind and segfaults."
        },
        "kw": "gdb valgrind segfault sanitizer",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "پردازش فایل با مدیریت حافظهٔ درست."
        },
        "en": {
          "t": "Project 1 — a CLI tool",
          "d": "File processing with correct memory management."
        },
        "kw": "capstone cli",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — ساختمان داده",
          "d": "‏hash table کامل با تست."
        },
        "en": {
          "t": "Project 2 — a data structure",
          "d": "A complete hash table, with tests."
        },
        "kw": "capstone hashtable",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — مفسر کوچک",
          "d": "‏tokenizer، parser و ارزیاب."
        },
        "en": {
          "t": "Project 3 — a small interpreter",
          "d": "Tokeniser, parser and evaluator."
        },
        "kw": "capstone interpreter parser",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1500,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "44-cpp",
    "dir": "44-cpp",
    "accent": "#00599C",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M14.4 8.6A5 5 0 0 0 10.6 6.8 5.6 5.6 0 0 0 10.6 17.2a5 5 0 0 0 3.8-1.8\" stroke-linecap=\"round\"/><path d=\"M17.4 10v4M15.4 12h4M20.4 10v4M18.4 12h4\" stroke-linecap=\"round\" transform=\"translate(-1.2)\"/>",
    "locked": false,
    "fa": {
      "name": "‏++C",
      "desc": "‏RAII، قالب، STL، مالکیت و ‎C++‎ مدرن — قدرت C بدون خطرهایش.",
      "intro": "‏‎C++‎ چند زبان است در یک بسته، و بخش زیادی از سردرگمی از همین می‌آید: کدی که در سال ۲۰۰۰ درست بود، امروز اشتباه است. این مسیر فقط ‎C++‎ مدرن را یاد می‌دهد — با اشاره‌گر هوشمند، RAII و کتابخانهٔ استاندارد — و توضیح می‌دهد چرا سبک قدیمی کنار گذاشته شد."
    },
    "en": {
      "name": "C++",
      "desc": "RAII, templates, the STL, ownership and modern C++ — the power of C without its hazards.",
      "intro": "C++ is several languages in one package, and much of the confusion comes from that: code that was correct in 2000 is wrong today. This track teaches only modern C++ — smart pointers, RAII, the standard library — and explains why the old style was abandoned."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏++C مدرن",
          "d": "چه چیزی از C گرفت و چه چیزی اضافه کرد."
        },
        "en": {
          "t": "Modern C++",
          "d": "What it took from C and what it added."
        },
        "kw": "cpp modern standard c++11 c++20",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع، مرجع و ‎auto‎",
          "d": "مرجع در برابر اشاره‌گر."
        },
        "en": {
          "t": "Types, references and auto",
          "d": "References versus pointers."
        },
        "kw": "reference auto const type deduction",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-classes.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کلاس و چرخهٔ عمر",
          "d": "سازنده، مخرب و قاعدهٔ صفر."
        },
        "en": {
          "t": "Classes and object lifetime",
          "d": "Constructors, destructors and the rule of zero."
        },
        "kw": "class constructor destructor rule of zero",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-raii.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏RAII",
          "d": "مهم‌ترین ایدهٔ ‎C++‎: منبع را به عمر شیء گره بزن."
        },
        "en": {
          "t": "RAII",
          "d": "The key idea of C++: tie a resource to an object's lifetime."
        },
        "kw": "raii resource scope exception safety",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-smart-pointers.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "اشاره‌گر هوشمند",
          "d": "‏unique_ptr، shared_ptr و مالکیت صریح."
        },
        "en": {
          "t": "Smart pointers",
          "d": "unique_ptr, shared_ptr and explicit ownership."
        },
        "kw": "unique_ptr shared_ptr weak_ptr ownership",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-move.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "معناشناسی انتقال",
          "d": "‏move، rvalue و اینکه چرا کپی گران است."
        },
        "en": {
          "t": "Move semantics",
          "d": "move, rvalues, and why copying is expensive."
        },
        "kw": "move rvalue forward copy elision",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-templates.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "قالب",
          "d": "‏generic در زمان کامپایل، و پیام‌های خطای بدنامش."
        },
        "en": {
          "t": "Templates",
          "d": "Compile-time generics, and their notorious error messages."
        },
        "kw": "template specialization sfinae concept",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-stl-containers.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏STL: ظرف‌ها",
          "d": "‏vector، map، set — و هزینهٔ هرکدام."
        },
        "en": {
          "t": "STL: containers",
          "d": "vector, map, set — and what each costs."
        },
        "kw": "vector map set unordered complexity",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-stl-algorithms.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏STL: الگوریتم‌ها",
          "d": "‏sort، find، transform و ranges."
        },
        "en": {
          "t": "STL: algorithms",
          "d": "sort, find, transform and ranges."
        },
        "kw": "algorithm sort find transform ranges",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خطا",
          "d": "‏exception، noexcept و ایمنی در برابر خطا."
        },
        "en": {
          "t": "Error handling",
          "d": "Exceptions, noexcept and exception safety."
        },
        "kw": "exception noexcept safety expected",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-concurrency.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "همروندی",
          "d": "‏thread، mutex، atomic و future."
        },
        "en": {
          "t": "Concurrency",
          "d": "Threads, mutexes, atomics and futures."
        },
        "kw": "thread mutex atomic future async",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-build.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏CMake و وابستگی",
          "d": "بیلد چندسکویی و مدیریت کتابخانه."
        },
        "en": {
          "t": "CMake and dependencies",
          "d": "Cross-platform builds and library management."
        },
        "kw": "cmake vcpkg conan build target",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کارایی",
          "d": "‏cache، تخصیص، و اندازه‌گیری قبل از بهینه‌سازی."
        },
        "en": {
          "t": "Performance",
          "d": "Cache behaviour, allocation, and measuring before optimising."
        },
        "kw": "performance cache benchmark profile inline",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تست",
          "d": "‏GoogleTest و Catch2."
        },
        "en": {
          "t": "Testing",
          "d": "GoogleTest and Catch2."
        },
        "kw": "gtest catch2 test fixture",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — کلاس منبع‌محور",
          "d": "‏RAII واقعی با تست چرخهٔ عمر."
        },
        "en": {
          "t": "Project 1 — a resource-owning class",
          "d": "Real RAII with lifetime tests."
        },
        "kw": "capstone raii",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۲ — ظرف عمومی",
          "d": "ظرف قالبی خودت با iterator."
        },
        "en": {
          "t": "Project 2 — a generic container",
          "d": "Your own templated container with iterators."
        },
        "kw": "capstone template container",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 210,
        "fa": {
          "t": "پروژهٔ ۳ — موتور همروند",
          "d": "‏thread pool با صف بدون قفل و اندازه‌گیری."
        },
        "en": {
          "t": "Project 3 — a concurrent engine",
          "d": "A thread pool with a lock-free queue and measurements."
        },
        "kw": "capstone concurrency threadpool",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1635,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "47-oop",
    "dir": "47-oop",
    "accent": "#DB2777",
    "accentDark": null,
    "cat": "arch",
    "ico": "<circle cx=\"7\" cy=\"7\" r=\"3.2\"/><circle cx=\"17\" cy=\"7\" r=\"3.2\"/><circle cx=\"12\" cy=\"17\" r=\"3.2\"/><path d=\"M9.4 9.4 10.8 14M14.6 9.4 13.2 14M10.2 7h3.6\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "شیءگرایی با چند زبان",
      "desc": "‏encapsulation، وراثت، چندریختی و ترکیب — با مثال هم‌زمان در ‎C#‎، Java، پایتون و تایپ‌اسکریپت.",
      "intro": "شیءگرایی را معمولاً با یک زبان یاد می‌گیرند و بعد فکر می‌کنند قاعده‌های آن زبان، قاعده‌های شیءگرایی‌اند. این مسیر عمداً چهار زبان را کنار هم می‌گذارد تا ببینی کدام بخش ایدهٔ اصلی است و کدام بخش فقط سلیقهٔ آن زبان. همان مثال، چهار بار، با تفاوت‌هایی که آموزنده‌اند."
    },
    "en": {
      "name": "OOP across languages",
      "desc": "Encapsulation, inheritance, polymorphism and composition — demonstrated side by side in C#, Java, Python and TypeScript.",
      "intro": "People usually learn OOP in one language and then mistake that language's rules for OOP's rules. This track deliberately places four languages side by side so you can see which part is the idea and which part is just that language's taste. The same example, four times, with instructive differences."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شیءگرایی چه مسئله‌ای را حل کرد",
          "d": "قبل از آن چه بود و چه دردی داشت."
        },
        "en": {
          "t": "What OOP solved",
          "d": "What came before and what hurt about it."
        },
        "kw": "oop history procedural abstraction",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-encapsulation.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کپسوله‌سازی",
          "d": "حالت خصوصی، و اینکه چهار زبان چهار جور می‌گویند."
        },
        "en": {
          "t": "Encapsulation",
          "d": "Private state, expressed four different ways."
        },
        "kw": "encapsulation private getter setter property",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-classes.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کلاس و شیء",
          "d": "سازنده، عضو نمونه‌ای و عضو ایستا."
        },
        "en": {
          "t": "Classes and objects",
          "d": "Constructors, instance members and static members."
        },
        "kw": "class object constructor static instance",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-inheritance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "وراثت",
          "d": "‏is-a، بازنویسی متد و مسئلهٔ کلاس پایهٔ شکننده."
        },
        "en": {
          "t": "Inheritance",
          "d": "is-a, method overriding and the fragile base class problem."
        },
        "kw": "inheritance override virtual base fragile",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-polymorphism.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "چندریختی",
          "d": "‏static و dynamic، و duck typing در پایتون."
        },
        "en": {
          "t": "Polymorphism",
          "d": "Static and dynamic, and Python's duck typing."
        },
        "kw": "polymorphism dynamic dispatch duck typing",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-abstraction.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "انتزاع و interface",
          "d": "‏abstract در برابر interface، در چهار زبان."
        },
        "en": {
          "t": "Abstraction and interfaces",
          "d": "Abstract classes versus interfaces, in four languages."
        },
        "kw": "abstract interface protocol contract",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-composition.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ترکیب در برابر وراثت",
          "d": "چرا ترکیب معمولاً جواب بهتری است."
        },
        "en": {
          "t": "Composition over inheritance",
          "d": "Why composition is usually the better answer."
        },
        "kw": "composition delegation has-a mixin",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-solid.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏SOLID در عمل",
          "d": "پنج اصل، با کد بد و کد اصلاح‌شده."
        },
        "en": {
          "t": "SOLID in practice",
          "d": "Five principles, with bad code and its fix."
        },
        "kw": "solid srp ocp lsp isp dip",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-coupling.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "وابستگی و انسجام",
          "d": "معیار سنجش طراحی خوب."
        },
        "en": {
          "t": "Coupling and cohesion",
          "d": "How to measure a good design."
        },
        "kw": "coupling cohesion dependency law of demeter",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-patterns.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوهای پایه",
          "d": "‏Strategy، Factory، Observer — در چهار زبان."
        },
        "en": {
          "t": "Core patterns",
          "d": "Strategy, Factory, Observer — in four languages."
        },
        "kw": "pattern strategy factory observer",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-typing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نوع‌دهی ایستا و پویا",
          "d": "اثرش بر طراحی شیءگرا."
        },
        "en": {
          "t": "Static and dynamic typing",
          "d": "How it changes object-oriented design."
        },
        "kw": "static dynamic typing generic variance",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تست کد شیءگرا",
          "d": "‏mock، stub و طراحی تست‌پذیر."
        },
        "en": {
          "t": "Testing object-oriented code",
          "d": "Mocks, stubs and designing for testability."
        },
        "kw": "test mock stub seam injection",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-antipatterns.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ضدالگوها",
          "d": "‏God object، وراثت عمیق و anemic model."
        },
        "en": {
          "t": "Anti-patterns",
          "d": "God objects, deep hierarchies and anemic models."
        },
        "kw": "antipattern god object anemic",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — یک دامنه، چهار زبان",
          "d": "همان مدل را در هر چهار زبان پیاده کن."
        },
        "en": {
          "t": "Project 1 — one domain, four languages",
          "d": "Implement the same model in all four languages."
        },
        "kw": "capstone comparison",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — بازطراحی با SOLID",
          "d": "کد بدبو را با اصول بازسازی کن."
        },
        "en": {
          "t": "Project 2 — refactor with SOLID",
          "d": "Rebuild smelly code using the principles."
        },
        "kw": "capstone refactor solid",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — موتور افزونه‌پذیر",
          "d": "طراحی توسعه‌پذیر با interface و ترکیب."
        },
        "en": {
          "t": "Project 3 — a pluggable engine",
          "d": "An extensible design using interfaces and composition."
        },
        "kw": "capstone plugin extensible",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1465,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "48-state-management",
    "dir": "48-state-management",
    "accent": "#764ABC",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<circle cx=\"12\" cy=\"6.4\" r=\"2.6\"/><circle cx=\"5.6\" cy=\"16.6\" r=\"2.6\"/><circle cx=\"18.4\" cy=\"16.6\" r=\"2.6\"/><path d=\"M9.8 7.9 7.2 14.2M14.2 7.9l2.6 6.3M8.2 16.6h7.6\" stroke-linecap=\"round\" stroke-dasharray=\"1 2.2\"/>",
    "locked": false,
    "fa": {
      "name": "مدیریت حالت",
      "desc": "‏Redux، Zustand، RxJS، NgRx، Signals و Context — و مهم‌تر از همه، اینکه کِی هیچ‌کدام لازم نیستند.",
      "intro": "بیشتر پیچیدگی فرانت‌اند از حالت می‌آید: چه کسی مالک این داده است، چه کسی می‌تواند عوضش کند، و چطور بقیه خبردار می‌شوند. کتابخانه‌های مدیریت حالت جواب‌های متفاوتی به همین سه سؤال‌اند. این مسیر همهٔ جواب‌های رایج را با یک مسئلهٔ واحد پیاده می‌کند تا تفاوتشان را در عمل ببینی، نه در تبلیغاتشان. و از فصل اول تأکید می‌کند که پرکاربردترین جواب درست، «هیچ‌کدام» است."
    },
    "en": {
      "name": "State management",
      "desc": "Redux, Zustand, RxJS, NgRx, Signals and Context — and, above all, when you need none of them.",
      "intro": "Most frontend complexity comes from state: who owns this data, who may change it, and how everyone else finds out. State libraries are different answers to those three questions. This track implements one single problem in every common library so you can see the differences in practice rather than in marketing. And from chapter one it insists that the most frequently correct answer is “none of them”."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-problem.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسئلهٔ حالت",
          "d": "مالکیت، همگام‌سازی و منبع حقیقت واحد."
        },
        "en": {
          "t": "The state problem",
          "d": "Ownership, synchronisation and a single source of truth."
        },
        "kw": "state ownership source of truth sync",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-local-first.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اول حالت محلی",
          "d": "چرا اکثر اپ‌ها به هیچ کتابخانه‌ای نیاز ندارند."
        },
        "en": {
          "t": "Local state first",
          "d": "Why most apps need no library at all."
        },
        "kw": "local state lifting colocation",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-context.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Context و prop drilling",
          "d": "راه‌حل داخلی React و محدودیت واقعی‌اش."
        },
        "en": {
          "t": "Context and prop drilling",
          "d": "React's built-in answer and its real limitation."
        },
        "kw": "context provider prop drilling rerender",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-reducer.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوی reducer",
          "d": "‏action، خلوص و تغییر قابل ردیابی."
        },
        "en": {
          "t": "The reducer pattern",
          "d": "Actions, purity and traceable change."
        },
        "kw": "reducer action dispatch pure immutable",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-redux.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Redux و Redux Toolkit",
          "d": "‏store، slice، و چرا Redux قدیمی بدنام شد."
        },
        "en": {
          "t": "Redux and Redux Toolkit",
          "d": "The store, slices, and why classic Redux earned its reputation."
        },
        "kw": "redux toolkit slice store devtools",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-redux-async.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ناهمگامی در Redux",
          "d": "‏thunk، RTK Query و کش سمت کلاینت."
        },
        "en": {
          "t": "Async in Redux",
          "d": "Thunks, RTK Query and client-side caching."
        },
        "kw": "thunk saga rtk query middleware",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-zustand.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Zustand",
          "d": "کمترین کد ممکن برای حالت سراسری."
        },
        "en": {
          "t": "Zustand",
          "d": "The least possible code for global state."
        },
        "kw": "zustand store selector shallow persist",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-jotai-signals.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏atom و signal",
          "d": "‏Jotai، Signals و واکنش‌پذیری ریزدانه."
        },
        "en": {
          "t": "Atoms and signals",
          "d": "Jotai, Signals and fine-grained reactivity."
        },
        "kw": "jotai signal atom fine-grained reactive",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-rxjs-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏RxJS ۱: Observable",
          "d": "جریان به‌جای مقدار — تغییر مدل ذهنی."
        },
        "en": {
          "t": "RxJS 1: Observables",
          "d": "Streams instead of values — a mental model shift."
        },
        "kw": "rxjs observable subscribe stream cold hot",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-rxjs-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏RxJS ۲: عملگرها",
          "d": "‏map، switchMap، debounce و ترکیب جریان‌ها."
        },
        "en": {
          "t": "RxJS 2: operators",
          "d": "map, switchMap, debounce and combining streams."
        },
        "kw": "operator switchmap mergemap debounce combine",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-ngrx.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏NgRx",
          "d": "‏Redux برای Angular: store، effect، selector."
        },
        "en": {
          "t": "NgRx",
          "d": "Redux for Angular: store, effects, selectors."
        },
        "kw": "ngrx effect selector entity angular",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-server-state.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "حالت سرور در برابر حالت کلاینت",
          "d": "‏React Query و TanStack — تفکیکی که همه‌چیز را ساده می‌کند."
        },
        "en": {
          "t": "Server state versus client state",
          "d": "React Query and TanStack — the distinction that simplifies everything."
        },
        "kw": "react query tanstack cache stale invalidate",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "حالت فرم",
          "d": "چرا فرم مسئلهٔ جدایی است."
        },
        "en": {
          "t": "Form state",
          "d": "Why forms are their own problem."
        },
        "kw": "form state validation controlled uncontrolled",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-url-state.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "حالت در URL",
          "d": "‏URL بهترین ذخیره‌سازی حالتی است که اغلب فراموش می‌شود."
        },
        "en": {
          "t": "State in the URL",
          "d": "The URL is the best state store, and the most forgotten."
        },
        "kw": "url query param router state share",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-persistence.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ماندگاری و همگام‌سازی",
          "d": "‏localStorage، همگام‌سازی بین تب و آفلاین."
        },
        "en": {
          "t": "Persistence and syncing",
          "d": "localStorage, cross-tab sync and offline."
        },
        "kw": "persist localstorage broadcast offline sync",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کارایی",
          "d": "رندر اضافی، selector و memo — با اندازه‌گیری."
        },
        "en": {
          "t": "Performance",
          "d": "Extra renders, selectors and memoisation — measured."
        },
        "kw": "rerender memo selector profiler performance",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-comparison.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مقایسه و انتخاب",
          "d": "ماتریس تصمیم بر اساس اندازهٔ تیم و نوع مسئله."
        },
        "en": {
          "t": "Comparison and choosing",
          "d": "A decision matrix by team size and problem type."
        },
        "kw": "comparison decision tradeoff choose",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — یک مسئله، پنج راه‌حل",
          "d": "همان اپ را با Context، Redux، Zustand، Jotai و RxJS بساز."
        },
        "en": {
          "t": "Project 1 — one problem, five solutions",
          "d": "Build the same app with Context, Redux, Zustand, Jotai and RxJS."
        },
        "kw": "capstone comparison",
        "cap": 1
      },
      {
        "n": "19",
        "file": "19-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — داشبورد بی‌درنگ",
          "d": "حالت سرور، حالت کلاینت و به‌روزرسانی زنده."
        },
        "en": {
          "t": "Project 2 — a real-time dashboard",
          "d": "Server state, client state and live updates."
        },
        "kw": "capstone realtime dashboard",
        "cap": 2
      },
      {
        "n": "20",
        "file": "20-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — اپ آفلاین‌اول",
          "d": "همگام‌سازی، تعارض و صف تغییرات."
        },
        "en": {
          "t": "Project 3 — an offline-first app",
          "d": "Syncing, conflicts and a mutation queue."
        },
        "kw": "capstone offline sync conflict",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 20,
      "exercises": 327,
      "minutes": 1880,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "49-rendering-pwa",
    "dir": "49-rendering-pwa",
    "accent": "#0284C7",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<rect x=\"2.6\" y=\"4\" width=\"18.8\" height=\"13\" rx=\"2.2\"/><path d=\"M8 20.6h8M12 17v3.6\" stroke-linecap=\"round\"/><path d=\"M6.4 9.4h5M6.4 12.4h8\" stroke-linecap=\"round\" opacity=\".7\"/>",
    "locked": false,
    "fa": {
      "name": "رندر، PWA و کارایی وب",
      "desc": "‏CSR، SSR، SSG، ISR، استریم، جزیره‌ها و PWA — و اندازه‌گیری واقعی به‌جای حدس.",
      "intro": "«کدام حالت رندر؟» سؤالی است که هر پروژهٔ فرانت‌اند در هفتهٔ اول با آن روبه‌رو می‌شود و معمولاً بر اساس عادت جواب داده می‌شود، نه بر اساس نیاز. این مسیر هر حالت را با همان اپ پیاده می‌کند، عددهایش را اندازه می‌گیرد، و نشان می‌دهد هرکدام چه چیزی را سریع و چه چیزی را کند می‌کنند. مستقل از فریم‌ورک."
    },
    "en": {
      "name": "Rendering, PWAs and web performance",
      "desc": "CSR, SSR, SSG, ISR, streaming, islands and PWAs — with real measurement instead of guesswork.",
      "intro": "“Which rendering mode?” is the question every frontend project faces in week one, and it is usually answered by habit rather than need. This track implements the same app in each mode, measures the numbers, and shows what each one makes fast and what it makes slow. Framework-independent."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-modes.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نقشهٔ حالت‌های رندر",
          "d": "‏CSR، SSR، SSG، ISR — با یک نمودار و یک جدول تصمیم."
        },
        "en": {
          "t": "The map of rendering modes",
          "d": "CSR, SSR, SSG, ISR — in one diagram and one decision table."
        },
        "kw": "csr ssr ssg isr rendering mode",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-csr.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏CSR",
          "d": "سریع‌ترین ناوبری، کندترین بارگذاری اول."
        },
        "en": {
          "t": "CSR",
          "d": "Fastest navigation, slowest first load."
        },
        "kw": "csr spa bundle hydration first paint",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-ssr.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SSR",
          "d": "‏HTML آماده از سرور، و هزینه‌ای که روی سرور می‌گذارد."
        },
        "en": {
          "t": "SSR",
          "d": "Ready HTML from the server, and what it costs the server."
        },
        "kw": "ssr server render ttfb streaming",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-ssg-isr.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SSG و ISR",
          "d": "ساخت در زمان بیلد، و بازسازی تدریجی."
        },
        "en": {
          "t": "SSG and ISR",
          "d": "Building at build time, and incremental regeneration."
        },
        "kw": "ssg static isr revalidate build",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-hydration.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏hydration و هزینه‌اش",
          "d": "چرا صفحهٔ دیده‌شده هنوز کلیک نمی‌پذیرد."
        },
        "en": {
          "t": "Hydration and its cost",
          "d": "Why a visible page still ignores your clicks."
        },
        "kw": "hydration tti interactive partial progressive",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-islands.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری جزیره‌ای و RSC",
          "d": "‏Astro، Server Component و resumability."
        },
        "en": {
          "t": "Islands architecture and RSC",
          "d": "Astro, Server Components and resumability."
        },
        "kw": "island rsc astro qwik resumable",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-metrics.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "معیارها",
          "d": "‏LCP، INP، CLS و TTFB — و اینکه هرکدام چه می‌گویند."
        },
        "en": {
          "t": "The metrics",
          "d": "LCP, INP, CLS and TTFB — and what each actually tells you."
        },
        "kw": "core web vitals lcp inp cls ttfb",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-measuring.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "اندازه‌گیری",
          "d": "‏Lighthouse، دادهٔ میدانی و پروفایل مرورگر."
        },
        "en": {
          "t": "Measuring",
          "d": "Lighthouse, field data and browser profiling."
        },
        "kw": "lighthouse rum profiling devtools trace",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-loading.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "راهبرد بارگذاری",
          "d": "‏preload، prefetch، lazy و مسیر بحرانی."
        },
        "en": {
          "t": "Loading strategy",
          "d": "preload, prefetch, lazy loading and the critical path."
        },
        "kw": "preload prefetch lazy critical path defer",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-images.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تصویر و رسانه",
          "d": "فرمت، اندازه، ‎srcset‎ و بارگذاری تنبل."
        },
        "en": {
          "t": "Images and media",
          "d": "Formats, sizing, srcset and lazy loading."
        },
        "kw": "image webp avif srcset lazy responsive",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-caching.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کش",
          "d": "‏HTTP cache، ETag، CDN و باطل‌سازی."
        },
        "en": {
          "t": "Caching",
          "d": "HTTP caching, ETags, CDNs and invalidation."
        },
        "kw": "cache etag cdn immutable stale-while-revalidate",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-sw.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Service Worker",
          "d": "رهگیری درخواست، کش آفلاین و به‌روزرسانی."
        },
        "en": {
          "t": "Service Workers",
          "d": "Intercepting requests, offline caching and updates."
        },
        "kw": "service worker cache api offline update",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-pwa.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏PWA",
          "d": "‏manifest، نصب‌پذیری و تجربهٔ شبه‌بومی."
        },
        "en": {
          "t": "PWAs",
          "d": "The manifest, installability and a near-native experience."
        },
        "kw": "pwa manifest install standalone icon",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-offline.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "آفلاین و همگام‌سازی",
          "d": "صف تغییرات، تعارض و پس‌زمینه."
        },
        "en": {
          "t": "Offline and background sync",
          "d": "Mutation queues, conflicts and background sync."
        },
        "kw": "offline background sync indexeddb conflict",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-push.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اعلان push",
          "d": "‏Web Push، مجوز و پیاده‌سازی سمت سرور."
        },
        "en": {
          "t": "Push notifications",
          "d": "Web Push, permissions and the server side."
        },
        "kw": "push notification vapid subscription",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-seo.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SEO و رندر",
          "d": "چه چیزی را خزنده می‌بیند و چه چیزی را نه."
        },
        "en": {
          "t": "SEO and rendering",
          "d": "What a crawler sees and what it does not."
        },
        "kw": "seo crawler meta og structured data",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — یک اپ، چهار حالت رندر",
          "d": "همان صفحه را در CSR، SSR، SSG و ISR بساز و عدد بگیر."
        },
        "en": {
          "t": "Project 1 — one app, four rendering modes",
          "d": "Build the same page in CSR, SSR, SSG and ISR, then measure."
        },
        "kw": "capstone rendering comparison",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — تبدیل به PWA",
          "d": "نصب‌پذیر، آفلاین‌کار و با اعلان."
        },
        "en": {
          "t": "Project 2 — turn it into a PWA",
          "d": "Installable, offline-capable and with notifications."
        },
        "kw": "capstone pwa offline",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — بودجهٔ کارایی",
          "d": "یک سایت کند را با اندازه‌گیری به هدف برسان."
        },
        "en": {
          "t": "Project 3 — a performance budget",
          "d": "Take a slow site to target, driven by measurement."
        },
        "kw": "capstone performance budget",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1780,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "50-ddd",
    "dir": "50-ddd",
    "accent": "#B45309",
    "accentDark": null,
    "cat": "arch",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"8.8\"/><circle cx=\"12\" cy=\"12\" r=\"4.6\"/><circle cx=\"12\" cy=\"12\" r=\"1.4\"/><path d=\"M12 3.2v3.4M12 17.4v3.4M3.2 12h3.4M17.4 12h3.4\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "طراحی دامنه‌محور",
      "desc": "زبان فراگیر، bounded context، aggregate، رویداد دامنه و event sourcing — با مثال کامل و تست.",
      "intro": "‏DDD یک چارچوب یا کتابخانه نیست؛ روشی است برای اینکه کد، همان چیزی را بگوید که کارشناس کسب‌وکار می‌گوید. بیشتر پروژه‌هایی که «‎DDD‎ کار می‌کنند» فقط پوشه‌هایی به نام Domain ساخته‌اند و مدلشان همچنان کم‌خون است. این مسیر از زبان شروع می‌کند، نه از ساختار پوشه — و صادقانه می‌گوید کجا اصلاً به ‎DDD‎ نیاز نداری."
    },
    "en": {
      "name": "Domain-Driven Design",
      "desc": "Ubiquitous language, bounded contexts, aggregates, domain events and event sourcing — with a full worked example and tests.",
      "intro": "DDD is not a framework or a library; it is a way of making the code say what the domain expert says. Most projects that “do DDD” have merely created folders named Domain while their model stays anemic. This track starts from language, not folder structure — and is honest about where you do not need DDD at all."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏DDD چه مسئله‌ای را حل می‌کند",
          "d": "وقتی پیچیدگی دامنه است، نه فناوری."
        },
        "en": {
          "t": "What DDD solves",
          "d": "When the complexity is in the domain, not the technology."
        },
        "kw": "ddd complexity domain why",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-ubiquitous-language.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "زبان فراگیر",
          "d": "یک واژه، یک معنا — بین برنامه‌نویس و کارشناس کسب‌وکار."
        },
        "en": {
          "t": "Ubiquitous language",
          "d": "One word, one meaning — shared by developers and domain experts."
        },
        "kw": "ubiquitous language glossary vocabulary",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-strategic.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "طراحی راهبردی",
          "d": "نقشهٔ کل دامنه: هسته، پشتیبان، عمومی."
        },
        "en": {
          "t": "Strategic design",
          "d": "Mapping the whole domain: core, supporting, generic."
        },
        "kw": "strategic core subdomain generic supporting",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-bounded-context.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏bounded context",
          "d": "مهم‌ترین مفهوم DDD — مرزی که معنا در آن ثابت است."
        },
        "en": {
          "t": "Bounded contexts",
          "d": "The central DDD concept — a boundary inside which meaning is stable."
        },
        "kw": "bounded context boundary model integrity",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-context-map.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "نقشهٔ زمینه‌ها",
          "d": "رابطهٔ بین context‌ها: ‎shared kernel‎، ‎ACL‎، ‎conformist‎."
        },
        "en": {
          "t": "Context maps",
          "d": "Relationships between contexts: shared kernel, ACL, conformist."
        },
        "kw": "context map anticorruption shared kernel upstream",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-entities.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏entity",
          "d": "هویت در برابر مقدار، و چرا شناسه مهم است."
        },
        "en": {
          "t": "Entities",
          "d": "Identity versus value, and why the ID matters."
        },
        "kw": "entity identity lifecycle equality",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-value-objects.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏value object",
          "d": "بدون هویت، تغییرناپذیر — و اینکه چرا اینقدر مفید است."
        },
        "en": {
          "t": "Value objects",
          "d": "No identity, immutable — and why that is so useful."
        },
        "kw": "value object immutable equality money",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-aggregates.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏aggregate",
          "d": "سخت‌ترین بخش ‎DDD‎: مرز ثبات و قاعدهٔ تراکنش."
        },
        "en": {
          "t": "Aggregates",
          "d": "The hardest part of DDD: the consistency boundary and the transaction rule."
        },
        "kw": "aggregate root invariant boundary transaction",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-aggregate-design.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "طراحی ‎aggregate‎",
          "d": "قاعده‌های عملی: کوچک نگه دار، با شناسه ارجاع بده."
        },
        "en": {
          "t": "Designing aggregates",
          "d": "Practical rules: keep them small, reference by ID."
        },
        "kw": "aggregate design small reference id rules",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-domain-events.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "رویداد دامنه",
          "d": "چیزی که در دامنه اتفاق افتاد، و بقیه باید بدانند."
        },
        "en": {
          "t": "Domain events",
          "d": "Something that happened in the domain, which others must learn about."
        },
        "kw": "domain event publish handler eventual",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-services.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏domain service و application service",
          "d": "منطقی که به هیچ ‎entity‎ تعلق ندارد."
        },
        "en": {
          "t": "Domain and application services",
          "d": "Logic that belongs to no single entity."
        },
        "kw": "domain service application service orchestration",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-repositories.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏repository در ‎DDD‎",
          "d": "مجموعه‌ای از ‎aggregate‎، نه یک لایهٔ پایگاه‌داده."
        },
        "en": {
          "t": "Repositories in DDD",
          "d": "A collection of aggregates, not a database layer."
        },
        "kw": "repository aggregate collection persistence ignorance",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-factories.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏factory",
          "d": "ساختن ‎aggregate‎ معتبر، از همان لحظهٔ اول."
        },
        "en": {
          "t": "Factories",
          "d": "Creating a valid aggregate from the very first moment."
        },
        "kw": "factory creation invariant construction",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-specification.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "الگوی ‎specification‎",
          "d": "قاعدهٔ کسب‌وکار به‌عنوان یک شیء قابل ترکیب."
        },
        "en": {
          "t": "The specification pattern",
          "d": "A business rule as a composable object."
        },
        "kw": "specification rule composable query",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-anticorruption.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "لایهٔ ضدفساد",
          "d": "محافظت از مدل خودت در برابر مدل سیستم بیرونی."
        },
        "en": {
          "t": "The anti-corruption layer",
          "d": "Protecting your model from an external system's model."
        },
        "kw": "anticorruption acl translation legacy integration",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-event-sourcing.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏event sourcing",
          "d": "ذخیرهٔ رویدادها به‌جای وضعیت — و هزینهٔ واقعی‌اش."
        },
        "en": {
          "t": "Event sourcing",
          "d": "Storing events instead of state — and what it really costs."
        },
        "kw": "event sourcing projection replay snapshot",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cqrs-ddd.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏CQRS در کنار ‎DDD‎",
          "d": "مدل نوشتن غنی، مدل خواندن ساده."
        },
        "en": {
          "t": "CQRS alongside DDD",
          "d": "A rich write model, a simple read model."
        },
        "kw": "cqrs read model projection write model",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-persistence.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏DDD و ‎ORM‎",
          "d": "نگاشت ‎aggregate‎ به جدول بدون آلوده کردن دامنه."
        },
        "en": {
          "t": "DDD and ORMs",
          "d": "Mapping aggregates to tables without polluting the domain."
        },
        "kw": "orm mapping efcore owned type persistence",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست دامنه",
          "d": "تست قاعده‌های کسب‌وکار، بدون پایگاه‌داده و بدون ‎mock‎."
        },
        "en": {
          "t": "Testing the domain",
          "d": "Testing business rules with no database and no mocks."
        },
        "kw": "test domain unit given when then",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-antipatterns.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ضدالگوها",
          "d": "مدل کم‌خون، ‎aggregate‎ غول‌آسا، و ‎DDD‎ کاغذی."
        },
        "en": {
          "t": "Anti-patterns",
          "d": "Anemic models, giant aggregates, and DDD on paper only."
        },
        "kw": "anemic antipattern god aggregate cargo cult",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-when-not.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کِی ‎DDD‎ نزن",
          "d": "‏CRUD ساده به ‎DDD‎ نیاز ندارد — و این را باید بپذیری."
        },
        "en": {
          "t": "When not to use DDD",
          "d": "Simple CRUD does not need DDD — and you must accept that."
        },
        "kw": "yagni crud simple overengineering",
        "cap": 0
      },
      {
        "n": "22",
        "file": "22-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۱ — مدل‌سازی یک دامنه",
          "d": "از گفت‌وگو با کارشناس تا ‎entity‎ و ‎value object‎."
        },
        "en": {
          "t": "Project 1 — model a domain",
          "d": "From a conversation with an expert to entities and value objects."
        },
        "kw": "capstone modeling",
        "cap": 1
      },
      {
        "n": "23",
        "file": "23-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۲ — ‎aggregate‎ و رویداد",
          "d": "مرز ثبات، ‎invariant‎ و رویداد دامنه، با تست کامل."
        },
        "en": {
          "t": "Project 2 — aggregates and events",
          "d": "Consistency boundaries, invariants and domain events, fully tested."
        },
        "kw": "capstone aggregate event",
        "cap": 2
      },
      {
        "n": "24",
        "file": "24-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 260,
        "fa": {
          "t": "پروژهٔ ۳ — دو ‎bounded context‎",
          "d": "دو زمینه، نقشهٔ رابطه، ‎ACL‎ و سازگاری نهایی."
        },
        "en": {
          "t": "Project 3 — two bounded contexts",
          "d": "Two contexts, a context map, an ACL and eventual consistency."
        },
        "kw": "capstone bounded context integration",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 24,
      "exercises": 399,
      "minutes": 2360,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "51-mongodb",
    "dir": "51-mongodb",
    "accent": "#13AA52",
    "accentDark": null,
    "cat": "data",
    "ico": "<path d=\"M12 2.6c3.4 4 5.2 7.2 5.2 10.2 0 3.6-2.4 6.4-5.2 8.6-2.8-2.2-5.2-5-5.2-8.6 0-3 1.8-6.2 5.2-10.2z\"/><path d=\"M12 6.4v13.4\" stroke-linecap=\"round\" opacity=\".6\"/>",
    "locked": false,
    "fa": {
      "name": "MongoDB",
      "desc": "پایگاه‌دادهٔ سندگرا: مدل‌سازی، aggregation، ایندکس، replica set و شاردینگ.",
      "intro": "‏MongoDB شِما ندارد — و همین هم بزرگ‌ترین قدرتش است و هم خطرناک‌ترین بخشش. نداشتن شِما یعنی سرعت در شروع، و بی‌نظمی در ماه ششم اگر خودت نظم ندهی. این مسیر بیشتر وقتش را روی مدل‌سازی می‌گذارد، چون در دنیای سندگرا، طراحی سند مهم‌تر از هر کوئری‌ای است."
    },
    "en": {
      "name": "MongoDB",
      "desc": "The document database: modelling, aggregation, indexing, replica sets and sharding.",
      "intro": "MongoDB has no schema — which is both its greatest strength and its most dangerous part. No schema means speed at the start and disorder by month six unless you impose order yourself. This track spends most of its time on modelling, because in a document world the shape of your document matters more than any query."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "چرا سندگرا",
          "d": "در برابر رابطه‌ای: کجا برنده است و کجا نه."
        },
        "en": {
          "t": "Why documents",
          "d": "Versus relational: where it wins and where it does not."
        },
        "kw": "document nosql relational comparison",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-install.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "نصب و ابزار",
          "d": "‏mongosh، Compass و داکر."
        },
        "en": {
          "t": "Installation and tooling",
          "d": "mongosh, Compass and Docker."
        },
        "kw": "install mongosh compass docker atlas",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-crud.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏CRUD",
          "d": "درج، خواندن، به‌روزرسانی و حذف."
        },
        "en": {
          "t": "CRUD",
          "d": "Insert, find, update and delete."
        },
        "kw": "insert find update delete bulk",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-query.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کوئری",
          "d": "عملگرها، پروجکشن، مرتب‌سازی و صفحه‌بندی."
        },
        "en": {
          "t": "Querying",
          "d": "Operators, projection, sorting and pagination."
        },
        "kw": "query operator projection sort limit skip",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-modeling-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مدل‌سازی ۱: تعبیه یا ارجاع",
          "d": "مهم‌ترین تصمیم در MongoDB."
        },
        "en": {
          "t": "Modelling 1: embed or reference",
          "d": "The most important decision in MongoDB."
        },
        "kw": "embed reference denormalize modeling",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-modeling-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مدل‌سازی ۲: الگوها",
          "d": "‏bucket، subset، computed و attribute pattern."
        },
        "en": {
          "t": "Modelling 2: patterns",
          "d": "Bucket, subset, computed and attribute patterns."
        },
        "kw": "pattern bucket subset computed attribute",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-schema.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اعتبارسنجی شِما",
          "d": "نظم بدون از دست دادن انعطاف."
        },
        "en": {
          "t": "Schema validation",
          "d": "Order without losing flexibility."
        },
        "kw": "validation jsonschema validator strict",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-aggregation-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏aggregation ۱",
          "d": "‏pipeline: match، group، project، sort."
        },
        "en": {
          "t": "Aggregation 1",
          "d": "The pipeline: match, group, project, sort."
        },
        "kw": "aggregation pipeline match group project",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-aggregation-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏aggregation ۲",
          "d": "‏lookup، unwind، facet و کوئری‌های پیچیده."
        },
        "en": {
          "t": "Aggregation 2",
          "d": "lookup, unwind, facet and complex queries."
        },
        "kw": "lookup unwind facet bucket window",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-indexes.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "ایندکس",
          "d": "‏single، compound، ترتیب کلید و ‎ESR‎."
        },
        "en": {
          "t": "Indexes",
          "d": "Single, compound, key order and the ESR rule."
        },
        "kw": "index compound esr covered partial ttl",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-explain.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏explain و کارایی",
          "d": "خواندن برنامهٔ اجرا و رفع کوئری کند."
        },
        "en": {
          "t": "explain and performance",
          "d": "Reading the execution plan and fixing slow queries."
        },
        "kw": "explain plan winning stage collscan",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-transactions.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تراکنش",
          "d": "چندسندی، و اینکه چرا معمولاً لازم نیست."
        },
        "en": {
          "t": "Transactions",
          "d": "Multi-document, and why you usually do not need them."
        },
        "kw": "transaction session acid multi-document",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-replication.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏replica set",
          "d": "دسترس‌پذیری، انتخاب رهبر و ‎read preference‎."
        },
        "en": {
          "t": "Replica sets",
          "d": "Availability, elections and read preferences."
        },
        "kw": "replica set primary election oplog",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-sharding.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "شاردینگ",
          "d": "کلید شارد، توزیع و اشتباه‌های گران."
        },
        "en": {
          "t": "Sharding",
          "d": "Shard keys, distribution and expensive mistakes."
        },
        "kw": "shard key chunk balancer distribution",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-security.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امنیت",
          "d": "کاربر، نقش، ‎TLS‎ و رمزگذاری."
        },
        "en": {
          "t": "Security",
          "d": "Users, roles, TLS and encryption."
        },
        "kw": "auth role tls encryption audit",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-backup.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پشتیبان و بازیابی",
          "d": "‏mongodump، snapshot و بازیابی نقطه‌ای."
        },
        "en": {
          "t": "Backup and restore",
          "d": "mongodump, snapshots and point-in-time recovery."
        },
        "kw": "backup mongodump restore oplog pitr",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-drivers.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اتصال از اپ",
          "d": "‏Node، Python و ‎.NET‎: pool و الگوی درست."
        },
        "en": {
          "t": "Connecting from an app",
          "d": "Node, Python and .NET: pooling and correct patterns."
        },
        "kw": "driver pool connection nodejs python dotnet",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — کاتالوگ محصول",
          "d": "مدل‌سازی، کوئری و ایندکس."
        },
        "en": {
          "t": "Project 1 — a product catalogue",
          "d": "Modelling, querying and indexing."
        },
        "kw": "capstone catalog",
        "cap": 1
      },
      {
        "n": "19",
        "file": "19-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — تحلیل با aggregation",
          "d": "گزارش‌های پیچیده روی دادهٔ حجیم."
        },
        "en": {
          "t": "Project 2 — analytics with aggregation",
          "d": "Complex reports over a large dataset."
        },
        "kw": "capstone aggregation analytics",
        "cap": 2
      },
      {
        "n": "20",
        "file": "20-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — سامانهٔ مقیاس‌پذیر",
          "d": "‏replica، شارد، پشتیبان و مانیتورینگ."
        },
        "en": {
          "t": "Project 3 — a scalable system",
          "d": "Replicas, shards, backups and monitoring."
        },
        "kw": "capstone production sharding",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 20,
      "exercises": 327,
      "minutes": 1860,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "52-redis",
    "dir": "52-redis",
    "accent": "#DC382D",
    "accentDark": null,
    "cat": "data",
    "ico": "<path d=\"M2.8 7.4 12 4l9.2 3.4L12 10.8z\"/><path d=\"M2.8 12 12 15.4 21.2 12M2.8 16.6 12 20l9.2-3.4\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Redis",
      "desc": "کش، صف، قفل توزیع‌شده، pub/sub و ساختمان‌های دادهٔ درون‌حافظه‌ای.",
      "intro": "‏Redis را همه به‌عنوان «کش» می‌شناسند و همان‌جا متوقف می‌شوند. اما Redis یک سرور ساختمان دادهٔ درون‌حافظه‌ای است: لیست، مجموعه، مجموعهٔ مرتب، bitmap و stream. وقتی این‌ها را بشناسی، مسائلی که با پایگاه‌دادهٔ رابطه‌ای سخت بودند در چند خط حل می‌شوند — و مسائلی که نباید با Redis حل کنی هم روشن می‌شوند."
    },
    "en": {
      "name": "Redis",
      "desc": "Caching, queues, distributed locks, pub/sub and in-memory data structures.",
      "intro": "Everyone knows Redis as “a cache” and stops there. But Redis is an in-memory data-structure server: lists, sets, sorted sets, bitmaps and streams. Once you know them, problems that were hard in a relational database collapse into a few lines — and it also becomes clear which problems you should not solve with Redis."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏Redis چیست",
          "d": "درون‌حافظه‌ای بودن یعنی چه، و چه چیزی را ممکن می‌کند."
        },
        "en": {
          "t": "What Redis is",
          "d": "What in-memory really means, and what it enables."
        },
        "kw": "redis in-memory keyvalue latency",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-strings.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "رشته و شمارنده",
          "d": "‏SET، GET، INCR و عملیات اتمی."
        },
        "en": {
          "t": "Strings and counters",
          "d": "SET, GET, INCR and atomic operations."
        },
        "kw": "string incr atomic expire setnx",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-hash.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏hash",
          "d": "ذخیرهٔ شیء بدون سریال‌سازی کل آن."
        },
        "en": {
          "t": "Hashes",
          "d": "Storing objects without serialising the whole thing."
        },
        "kw": "hash hset hget field object",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-list.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏list",
          "d": "صف و پشته، و ‎BLPOP‎ برای مصرف‌کننده."
        },
        "en": {
          "t": "Lists",
          "d": "Queues and stacks, and BLPOP for consumers."
        },
        "kw": "list lpush rpop blpop queue",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-set.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مجموعه و مجموعهٔ مرتب",
          "d": "عضویت، اشتراک، و جدول امتیاز با ‎ZSET‎."
        },
        "en": {
          "t": "Sets and sorted sets",
          "d": "Membership, intersection, and leaderboards with ZSET."
        },
        "kw": "set zset leaderboard rank union",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-advanced-types.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌های ویژه",
          "d": "‏bitmap، HyperLogLog، geo و stream."
        },
        "en": {
          "t": "Special types",
          "d": "Bitmaps, HyperLogLog, geo and streams."
        },
        "kw": "bitmap hyperloglog geo stream",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-expiry.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "انقضا و حذف",
          "d": "‏TTL، سیاست‌های ‎eviction‎ و مدیریت حافظه."
        },
        "en": {
          "t": "Expiry and eviction",
          "d": "TTL, eviction policies and memory management."
        },
        "kw": "ttl expire eviction lru maxmemory",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-caching.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "الگوهای کش",
          "d": "‏cache-aside، write-through و مسئلهٔ باطل‌سازی."
        },
        "en": {
          "t": "Caching patterns",
          "d": "Cache-aside, write-through and the invalidation problem."
        },
        "kw": "cache aside write through invalidation stampede",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-pubsub.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏pub/sub و stream",
          "d": "پیام‌رسانی ساده در برابر جریان ماندگار."
        },
        "en": {
          "t": "Pub/sub and streams",
          "d": "Simple messaging versus a durable log."
        },
        "kw": "pubsub stream consumer group xadd",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-locks.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "قفل توزیع‌شده",
          "d": "‏SETNX، Redlock و خطرهای واقعی‌اش."
        },
        "en": {
          "t": "Distributed locks",
          "d": "SETNX, Redlock and its real hazards."
        },
        "kw": "lock setnx redlock fencing token",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-scripting.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Lua و تراکنش",
          "d": "عملیات اتمی مرکب."
        },
        "en": {
          "t": "Lua scripting and transactions",
          "d": "Compound atomic operations."
        },
        "kw": "lua eval multi exec watch",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-persistence.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ماندگاری",
          "d": "‏RDB، AOF و اینکه چه چیزی ممکن است گم شود."
        },
        "en": {
          "t": "Persistence",
          "d": "RDB, AOF, and what can actually be lost."
        },
        "kw": "rdb aof fsync durability snapshot",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-cluster.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏replication و cluster",
          "d": "دسترس‌پذیری، Sentinel و توزیع کلید."
        },
        "en": {
          "t": "Replication and clustering",
          "d": "Availability, Sentinel and key distribution."
        },
        "kw": "replica sentinel cluster slot failover",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-monitoring.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مانیتورینگ و عیب‌یابی",
          "d": "‏SLOWLOG، INFO و کلید داغ."
        },
        "en": {
          "t": "Monitoring and debugging",
          "d": "SLOWLOG, INFO and hot keys."
        },
        "kw": "slowlog info latency hotkey memory",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — لایهٔ کش",
          "d": "کش‌کردن یک ‎API‎ کند، با باطل‌سازی درست."
        },
        "en": {
          "t": "Project 1 — a cache layer",
          "d": "Caching a slow API, with correct invalidation."
        },
        "kw": "capstone cache",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — صف کار و محدودیت نرخ",
          "d": "‏worker، تلاش مجدد و ‎rate limiter‎."
        },
        "en": {
          "t": "Project 2 — a job queue and rate limiter",
          "d": "Workers, retries and a rate limiter."
        },
        "kw": "capstone queue ratelimit",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — جدول امتیاز بی‌درنگ",
          "d": "‏ZSET، stream، pub/sub و مقیاس افقی."
        },
        "en": {
          "t": "Project 3 — a real-time leaderboard",
          "d": "ZSETs, streams, pub/sub and horizontal scale."
        },
        "kw": "capstone leaderboard realtime",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1485,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "53-mysql-mariadb",
    "dir": "53-mysql-mariadb",
    "accent": "#00758F",
    "accentDark": null,
    "cat": "data",
    "ico": "<ellipse cx=\"12\" cy=\"6.2\" rx=\"7.6\" ry=\"3.2\"/><path d=\"M4.4 6.2v11.6c0 1.8 3.4 3.2 7.6 3.2s7.6-1.4 7.6-3.2V6.2\"/><path d=\"M4.4 12c0 1.8 3.4 3.2 7.6 3.2s7.6-1.4 7.6-3.2\" opacity=\".6\"/>",
    "locked": false,
    "fa": {
      "name": "MySQL و MariaDB",
      "desc": "از ‎SELECT‎ تا ایندکس، ‎EXPLAIN‎، تراکنش، replication و بهینه‌سازی کوئری کند.",
      "intro": "‏MySQL پرکاربردترین پایگاه‌دادهٔ رابطه‌ای دنیاست و MariaDB شاخهٔ آزاد آن. این مسیر فرض نمی‌کند ‎SQL‎ بلدی — از مدل رابطه‌ای شروع می‌کند — اما خیلی زود می‌رود سراغ چیزی که واقعاً فرق می‌گذارد: اینکه چرا آن کوئری کند است و ایندکس درست کدام است."
    },
    "en": {
      "name": "MySQL & MariaDB",
      "desc": "From SELECT to indexes, EXPLAIN, transactions, replication and fixing slow queries.",
      "intro": "MySQL is the most widely deployed relational database in the world, and MariaDB is its free fork. This track does not assume you know SQL — it starts from the relational model — but it moves quickly to what actually matters: why that query is slow and which index is the right one."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-relational.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مدل رابطه‌ای و نصب",
          "d": "جدول، کلید، و راه‌اندازی با داکر."
        },
        "en": {
          "t": "The relational model and setup",
          "d": "Tables, keys, and getting started with Docker."
        },
        "kw": "relational install docker workbench",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-select.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏SELECT و فیلتر",
          "d": "‏WHERE، ORDER BY، LIMIT و ‎NULL‎."
        },
        "en": {
          "t": "SELECT and filtering",
          "d": "WHERE, ORDER BY, LIMIT and NULL."
        },
        "kw": "select where order limit null",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-joins.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏JOIN",
          "d": "‏inner، left، و اشتباهی که سطرها را تکثیر می‌کند."
        },
        "en": {
          "t": "JOINs",
          "d": "Inner, left, and the mistake that multiplies rows."
        },
        "kw": "join inner left cross duplicate",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-aggregate.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تجمیع",
          "d": "‏GROUP BY، HAVING و توابع پنجره‌ای."
        },
        "en": {
          "t": "Aggregation",
          "d": "GROUP BY, HAVING and window functions."
        },
        "kw": "group having window over",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-subquery.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "زیرکوئری و ‎CTE‎",
          "d": "کوئری خوانا به‌جای تودرتو."
        },
        "en": {
          "t": "Subqueries and CTEs",
          "d": "Readable queries instead of nested ones."
        },
        "kw": "cte subquery with exists",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-dml.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تغییر داده",
          "d": "‏INSERT، UPDATE، DELETE، ‎UPSERT‎."
        },
        "en": {
          "t": "Changing data",
          "d": "INSERT, UPDATE, DELETE and UPSERT."
        },
        "kw": "insert update delete upsert replace",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-design.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "طراحی جدول",
          "d": "نوع داده، کلید، ‎constraint‎ و ‎charset‎ فارسی."
        },
        "en": {
          "t": "Table design",
          "d": "Data types, keys, constraints and Persian character sets."
        },
        "kw": "datatype key constraint utf8mb4 collation",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-normalization.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نرمال‌سازی",
          "d": "سه فرم اول، و ‎denormalization‎ آگاهانه."
        },
        "en": {
          "t": "Normalisation",
          "d": "The first three forms, and deliberate denormalisation."
        },
        "kw": "normalization 1nf 2nf 3nf",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-indexes.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "ایندکس",
          "d": "‏B-tree، ترکیبی، پوششی و ترتیب ستون‌ها."
        },
        "en": {
          "t": "Indexes",
          "d": "B-trees, composite, covering, and column order."
        },
        "kw": "index btree composite covering prefix",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-explain.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏EXPLAIN",
          "d": "خواندن برنامهٔ اجرا و تشخیص ‎full scan‎."
        },
        "en": {
          "t": "EXPLAIN",
          "d": "Reading the plan and spotting full scans."
        },
        "kw": "explain analyze plan type rows filtered",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-transactions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تراکنش و قفل",
          "d": "سطوح ایزوله، ‎deadlock‎ و ‎InnoDB‎."
        },
        "en": {
          "t": "Transactions and locking",
          "d": "Isolation levels, deadlocks and InnoDB."
        },
        "kw": "transaction isolation deadlock innodb mvcc",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-procedures.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏procedure، function، trigger",
          "d": "کِی مفیدند و کِی دردسر."
        },
        "en": {
          "t": "Procedures, functions, triggers",
          "d": "When they help and when they hurt."
        },
        "kw": "procedure function trigger event",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-replication.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏replication",
          "d": "‏master-replica، تأخیر و خواندن از replica."
        },
        "en": {
          "t": "Replication",
          "d": "Primary/replica, lag, and reading from replicas."
        },
        "kw": "replication binlog lag gtid failover",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-backup.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پشتیبان و بازیابی",
          "d": "‏mysqldump، binlog و بازیابی نقطه‌ای."
        },
        "en": {
          "t": "Backup and restore",
          "d": "mysqldump, binlogs and point-in-time recovery."
        },
        "kw": "mysqldump xtrabackup binlog pitr",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-security.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "امنیت",
          "d": "کاربر، ‎GRANT‎، ‎TLS‎ و تزریق ‎SQL‎."
        },
        "en": {
          "t": "Security",
          "d": "Users, GRANT, TLS and SQL injection."
        },
        "kw": "grant privilege tls injection prepared",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-tuning.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "بهینه‌سازی",
          "d": "‏slow log، buffer pool و کوئری کند واقعی."
        },
        "en": {
          "t": "Tuning",
          "d": "The slow log, the buffer pool and a genuinely slow query."
        },
        "kw": "slowlog buffer pool tuning optimize",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — طراحی شِما",
          "d": "از نیاز تا جدول، با کلید و ‎constraint‎ درست."
        },
        "en": {
          "t": "Project 1 — design a schema",
          "d": "From requirements to tables, with proper keys and constraints."
        },
        "kw": "capstone schema",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — گزارش‌های تحلیلی",
          "d": "کوئری‌های پیچیده و ایندکس‌گذاری."
        },
        "en": {
          "t": "Project 2 — analytical reports",
          "d": "Complex queries and indexing."
        },
        "kw": "capstone report",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — از کند به سریع",
          "d": "یک پایگاه‌دادهٔ میلیونی را به زیر یک ثانیه برسان."
        },
        "en": {
          "t": "Project 3 — from slow to fast",
          "d": "Take a million-row database under one second."
        },
        "kw": "capstone performance",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1735,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "54-cassandra",
    "dir": "54-cassandra",
    "accent": "#1287B1",
    "accentDark": null,
    "cat": "data",
    "ico": "<path d=\"M12 2.6 20 7v10l-8 4.4L4 17V7z\"/><path d=\"M12 7.4 16.4 9.8v4.4L12 16.6l-4.4-2.4V9.8z\" opacity=\".65\"/>",
    "locked": false,
    "fa": {
      "name": "Cassandra",
      "desc": "پایگاه‌دادهٔ توزیع‌شدهٔ ستونی: مدل‌سازی کوئری‌محور، partition، ثبات قابل تنظیم.",
      "intro": "‏Cassandra قاعده‌ای دارد که برای کسی که با ‎SQL‎ بزرگ شده تکان‌دهنده است: **اول کوئری را بنویس، بعد جدول را طراحی کن.** نرمال‌سازی اینجا اشتباه است و تکرار داده درست. این مسیر آن وارونگی ذهنی را جا می‌اندازد، چون بدون آن هر چیزی که در Cassandra بسازی بالاخره از کار می‌افتد."
    },
    "en": {
      "name": "Cassandra",
      "desc": "The distributed wide-column store: query-first modelling, partitions and tunable consistency.",
      "intro": "Cassandra has a rule that shocks anyone raised on SQL: **write the query first, then design the table.** Normalisation is wrong here and duplicating data is right. This track drills that mental inversion, because without it anything you build on Cassandra eventually falls over."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "چرا Cassandra",
          "d": "مقیاس افقی، بدون نقطهٔ شکست واحد."
        },
        "en": {
          "t": "Why Cassandra",
          "d": "Horizontal scale with no single point of failure."
        },
        "kw": "cassandra distributed scale availability",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری",
          "d": "حلقه، گره، تکرار و ‎gossip‎."
        },
        "en": {
          "t": "Architecture",
          "d": "The ring, nodes, replication and gossip."
        },
        "kw": "ring node replication gossip token",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-datamodel.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مدل داده",
          "d": "‏keyspace، جدول، ستون و انواع."
        },
        "en": {
          "t": "The data model",
          "d": "Keyspaces, tables, columns and types."
        },
        "kw": "keyspace table column collection udt",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-partition.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "کلید partition",
          "d": "مهم‌ترین تصمیم: توزیع و ‎hot partition‎."
        },
        "en": {
          "t": "Partition keys",
          "d": "The decisive choice: distribution and hot partitions."
        },
        "kw": "partition key clustering hot large",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-query-first.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مدل‌سازی کوئری‌محور",
          "d": "اول کوئری، بعد جدول — و تکرار عمدی داده."
        },
        "en": {
          "t": "Query-first modelling",
          "d": "Query first, table second — and deliberate duplication."
        },
        "kw": "query first denormalize duplicate table per query",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-cql.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏CQL",
          "d": "شبیه ‎SQL‎ است، ولی نیست."
        },
        "en": {
          "t": "CQL",
          "d": "It looks like SQL. It is not."
        },
        "kw": "cql select insert allow filtering",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-consistency.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "ثبات قابل تنظیم",
          "d": "‏ONE، QUORUM، ALL و قضیهٔ ‎CAP‎ در عمل."
        },
        "en": {
          "t": "Tunable consistency",
          "d": "ONE, QUORUM, ALL and CAP in practice."
        },
        "kw": "consistency quorum cap tunable read repair",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-writes.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مسیر نوشتن",
          "d": "‏commit log، memtable، SSTable و ‎compaction‎."
        },
        "en": {
          "t": "The write path",
          "d": "Commit log, memtable, SSTables and compaction."
        },
        "kw": "write path memtable sstable compaction",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-deletes.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "حذف و ‎tombstone‎",
          "d": "چرا حذف در Cassandra گران است."
        },
        "en": {
          "t": "Deletes and tombstones",
          "d": "Why deleting is expensive in Cassandra."
        },
        "kw": "tombstone delete ttl gc grace",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-operations.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "عملیات",
          "d": "افزودن گره، ‎repair‎ و مانیتورینگ."
        },
        "en": {
          "t": "Operations",
          "d": "Adding nodes, repair and monitoring."
        },
        "kw": "nodetool repair bootstrap monitoring",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-drivers.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اتصال از اپ",
          "d": "‏prepared statement، صفحه‌بندی و تلاش مجدد."
        },
        "en": {
          "t": "Connecting from an app",
          "d": "Prepared statements, paging and retries."
        },
        "kw": "driver prepared paging retry policy",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-antipatterns.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ضدالگوها",
          "d": "‏ALLOW FILTERING، صف، و مدل رابطه‌ای تحمیلی."
        },
        "en": {
          "t": "Anti-patterns",
          "d": "ALLOW FILTERING, queues, and forcing a relational model."
        },
        "kw": "antipattern allow filtering queue join",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — مدل‌سازی از روی کوئری",
          "d": "سه کوئری، سه جدول."
        },
        "en": {
          "t": "Project 1 — model from queries",
          "d": "Three queries, three tables."
        },
        "kw": "capstone modeling",
        "cap": 1
      },
      {
        "n": "14",
        "file": "14-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — سری زمانی",
          "d": "دادهٔ حسگر با partition زمان‌محور."
        },
        "en": {
          "t": "Project 2 — time series",
          "d": "Sensor data with time-bucketed partitions."
        },
        "kw": "capstone timeseries",
        "cap": 2
      },
      {
        "n": "15",
        "file": "15-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — کلاستر چندگره",
          "d": "‏replication، ثبات و تحمل خطا."
        },
        "en": {
          "t": "Project 3 — a multi-node cluster",
          "d": "Replication, consistency and fault tolerance."
        },
        "kw": "capstone cluster",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 15,
      "exercises": 237,
      "minutes": 1450,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "55-oracle",
    "dir": "55-oracle",
    "accent": "#C74634",
    "accentDark": null,
    "cat": "data",
    "ico": "<ellipse cx=\"12\" cy=\"12\" rx=\"9.4\" ry=\"5.6\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4.6\" ry=\"2.6\" opacity=\".6\"/>",
    "locked": false,
    "fa": {
      "name": "Oracle Database",
      "desc": "‏PL/SQL، ایندکس، برنامهٔ اجرا، پارتیشن‌بندی، ‎AWR‎ و بهینه‌سازی سازمانی.",
      "intro": "‏Oracle در بانک‌ها، بیمه‌ها و سازمان‌های بزرگ هنوز حاکم است و احتمالاً تا مدت‌ها می‌ماند. این مسیر برای کسی است که باید با یک پایگاه‌دادهٔ Oracle موجود کار کند: کوئری بنویسد، ‎PL/SQL‎ بخواند، و وقتی چیزی کند شد بتواند بفهمد چرا."
    },
    "en": {
      "name": "Oracle Database",
      "desc": "PL/SQL, indexes, execution plans, partitioning, AWR and enterprise-grade tuning.",
      "intro": "Oracle still rules in banking, insurance and large institutions, and will for some time. This track is for someone who has to work with an existing Oracle database: write queries, read PL/SQL, and work out why something got slow."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری Oracle",
          "d": "نمونه، پایگاه‌داده، ‎tablespace‎ و ‎PDB‎."
        },
        "en": {
          "t": "Oracle architecture",
          "d": "Instances, databases, tablespaces and PDBs."
        },
        "kw": "instance sga tablespace pdb cdb",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-setup.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "راه‌اندازی",
          "d": "‏Oracle XE با داکر و ابزارهای کار."
        },
        "en": {
          "t": "Getting set up",
          "d": "Oracle XE with Docker and the tooling."
        },
        "kw": "xe docker sqlplus sqldeveloper",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-sql.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏SQL در Oracle",
          "d": "تفاوت‌ها با استاندارد و توابع ویژه."
        },
        "en": {
          "t": "SQL in Oracle",
          "d": "Differences from the standard and Oracle-specific functions."
        },
        "kw": "dual rownum nvl decode sequence",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-joins-analytics.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏JOIN و توابع تحلیلی",
          "d": "‏window function و ‎hierarchical query‎."
        },
        "en": {
          "t": "Joins and analytics",
          "d": "Window functions and hierarchical queries."
        },
        "kw": "analytic window connect by partition",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-datatypes.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع داده",
          "d": "‏VARCHAR2، NUMBER، DATE، CLOB و یونیکد فارسی."
        },
        "en": {
          "t": "Data types",
          "d": "VARCHAR2, NUMBER, DATE, CLOB and Persian Unicode."
        },
        "kw": "varchar2 number date clob nls unicode",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-plsql-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏PL/SQL ۱",
          "d": "بلوک، متغیر، شرط، حلقه و ‎cursor‎."
        },
        "en": {
          "t": "PL/SQL 1",
          "d": "Blocks, variables, control flow and cursors."
        },
        "kw": "plsql block cursor loop record",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-plsql-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏PL/SQL ۲",
          "d": "‏procedure، function، package و ‎exception‎."
        },
        "en": {
          "t": "PL/SQL 2",
          "d": "Procedures, functions, packages and exceptions."
        },
        "kw": "procedure function package exception",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-plsql-3.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏PL/SQL ۳",
          "d": "‏trigger، ‎bulk collect‎ و ‎FORALL‎."
        },
        "en": {
          "t": "PL/SQL 3",
          "d": "Triggers, bulk collect and FORALL."
        },
        "kw": "trigger bulk collect forall collection",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-indexes.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "ایندکس",
          "d": "‏B-tree، bitmap، function-based و ‎IOT‎."
        },
        "en": {
          "t": "Indexes",
          "d": "B-tree, bitmap, function-based and index-organised tables."
        },
        "kw": "index bitmap function based iot",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-explain.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "برنامهٔ اجرا",
          "d": "‏EXPLAIN PLAN، ‎autotrace‎ و آمار."
        },
        "en": {
          "t": "Execution plans",
          "d": "EXPLAIN PLAN, autotrace and statistics."
        },
        "kw": "explain plan autotrace statistics cardinality",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-partitioning.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "پارتیشن‌بندی",
          "d": "‏range، list، hash و ‎pruning‎."
        },
        "en": {
          "t": "Partitioning",
          "d": "Range, list, hash and partition pruning."
        },
        "kw": "partition range list hash pruning",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-transactions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تراکنش و ثبات",
          "d": "‏undo، ‎read consistency‎ و قفل."
        },
        "en": {
          "t": "Transactions and consistency",
          "d": "Undo, read consistency and locking."
        },
        "kw": "undo redo consistency lock savepoint",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-tuning.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "بهینه‌سازی",
          "d": "‏AWR، ‎ASH‎، ‎SQL profile‎ و ‎hint‎."
        },
        "en": {
          "t": "Tuning",
          "d": "AWR, ASH, SQL profiles and hints."
        },
        "kw": "awr ash hint sql tuning advisor",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-security.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "امنیت",
          "d": "کاربر، نقش، ‎VPD‎ و ممیزی."
        },
        "en": {
          "t": "Security",
          "d": "Users, roles, VPD and auditing."
        },
        "kw": "user role privilege vpd audit tde",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-backup.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "پشتیبان و بازیابی",
          "d": "‏RMAN، ‎data pump‎ و بازیابی نقطه‌ای."
        },
        "en": {
          "t": "Backup and recovery",
          "d": "RMAN, Data Pump and point-in-time recovery."
        },
        "kw": "rman datapump flashback recovery",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — شِما و ‎PL/SQL‎",
          "d": "طراحی جدول و یک بستهٔ ‎PL/SQL‎ کامل."
        },
        "en": {
          "t": "Project 1 — schema and PL/SQL",
          "d": "Table design and a complete PL/SQL package."
        },
        "kw": "capstone plsql",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۲ — گزارش‌های تحلیلی",
          "d": "توابع تحلیلی روی دادهٔ حجیم."
        },
        "en": {
          "t": "Project 2 — analytical reporting",
          "d": "Analytic functions over large data."
        },
        "kw": "capstone analytics",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — بهینه‌سازی سازمانی",
          "d": "پارتیشن، ایندکس و ‎AWR‎ روی یک بار کاری واقعی."
        },
        "en": {
          "t": "Project 3 — enterprise tuning",
          "d": "Partitioning, indexing and AWR against a real workload."
        },
        "kw": "capstone tuning",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1750,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "56-fastapi",
    "dir": "56-fastapi",
    "accent": "#059486",
    "accentDark": null,
    "cat": "backend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12.8 6.4 8.6 12.8h3.4l-.8 4.8 4.2-6.4h-3.4z\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "FastAPI",
      "desc": "‏API ناهمگام پایتون: Pydantic، تزریق وابستگی، احراز هویت، تست و استقرار.",
      "intro": "‏FastAPI یک ایدهٔ ساده را تا انتها برد: اگر نوع‌ها را بنویسی، بقیه‌اش خودکار می‌شود — اعتبارسنجی، مستندسازی، سریال‌سازی. نتیجه‌اش این است که کد کمتری می‌نویسی و خطای کمتری می‌دهی. این مسیر روی همان نوع‌ها تمرکز می‌کند، چون هرچه ‎Pydantic‎ را بهتر بشناسی، ‎FastAPI‎ برایت ساده‌تر می‌شود."
    },
    "en": {
      "name": "FastAPI",
      "desc": "Async Python APIs: Pydantic, dependency injection, authentication, testing and deployment.",
      "intro": "FastAPI took one simple idea all the way: write the types and everything else follows — validation, documentation, serialisation. The result is less code and fewer mistakes. This track focuses on those types, because the better you know Pydantic, the simpler FastAPI becomes."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا FastAPI",
          "d": "در برابر Django و Flask، و نقش ‎async‎."
        },
        "en": {
          "t": "Why FastAPI",
          "d": "Versus Django and Flask, and the role of async."
        },
        "kw": "fastapi asgi starlette comparison",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-first.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "اولین ‎API‎",
          "d": "مسیر، پارامتر و پاسخ خودکار."
        },
        "en": {
          "t": "Your first API",
          "d": "Routes, parameters and automatic responses."
        },
        "kw": "path query parameter response uvicorn",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-pydantic-1.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Pydantic ۱",
          "d": "مدل، اعتبارسنجی و تبدیل نوع."
        },
        "en": {
          "t": "Pydantic 1",
          "d": "Models, validation and coercion."
        },
        "kw": "pydantic model validation field type",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-pydantic-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Pydantic ۲",
          "d": "اعتبارسنج سفارشی، مدل تودرتو و ‎settings‎."
        },
        "en": {
          "t": "Pydantic 2",
          "d": "Custom validators, nested models and settings."
        },
        "kw": "validator nested settings alias serializer",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-async.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏async در FastAPI",
          "d": "کِی ‎async def‎ و کِی ‎def‎ — و چرا اشتباهش گران است."
        },
        "en": {
          "t": "Async in FastAPI",
          "d": "When to use async def and when def — and why getting it wrong costs."
        },
        "kw": "async await threadpool blocking event loop",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-dependencies.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "تزریق وابستگی",
          "d": "‏Depends: قوی‌ترین ویژگی فریم‌ورک."
        },
        "en": {
          "t": "Dependency injection",
          "d": "Depends: the framework's strongest feature."
        },
        "kw": "depends dependency injection yield scope",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-database.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "پایگاه‌داده",
          "d": "‏SQLAlchemy ناهمگام، نشست و مهاجرت با Alembic."
        },
        "en": {
          "t": "Databases",
          "d": "Async SQLAlchemy, sessions and Alembic migrations."
        },
        "kw": "sqlalchemy async session alembic pool",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "احراز هویت",
          "d": "‏OAuth2 با ‎password flow‎، ‎JWT‎ و نقش."
        },
        "en": {
          "t": "Authentication",
          "d": "OAuth2 password flow, JWT and roles."
        },
        "kw": "oauth2 jwt password bearer scope",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "خطا",
          "d": "‏HTTPException، ‎handler‎ سراسری و پاسخ یکدست."
        },
        "en": {
          "t": "Error handling",
          "d": "HTTPException, global handlers and consistent responses."
        },
        "kw": "httpexception handler validation error",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-middleware.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏middleware و ‎CORS‎",
          "d": "لاگ، زمان‌سنجی و ‎CORS‎."
        },
        "en": {
          "t": "Middleware and CORS",
          "d": "Logging, timing and CORS."
        },
        "kw": "middleware cors gzip trusted host",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-background.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کار پس‌زمینه",
          "d": "‏BackgroundTasks و Celery."
        },
        "en": {
          "t": "Background work",
          "d": "BackgroundTasks and Celery."
        },
        "kw": "background task celery worker redis",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-websocket.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏WebSocket",
          "d": "ارتباط بی‌درنگ در FastAPI."
        },
        "en": {
          "t": "WebSockets",
          "d": "Real-time communication in FastAPI."
        },
        "kw": "websocket connection manager broadcast",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-structure.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ساختار پروژه",
          "d": "‏router، لایه‌بندی و پروژه‌ای که بزرگ شود."
        },
        "en": {
          "t": "Project structure",
          "d": "Routers, layering and a project that scales."
        },
        "kw": "router structure layer service repository",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست",
          "d": "‏TestClient، ‎fixture‎ و پایگاه‌دادهٔ تست."
        },
        "en": {
          "t": "Testing",
          "d": "TestClient, fixtures and a test database."
        },
        "kw": "pytest testclient fixture httpx async test",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "استقرار",
          "d": "‏Uvicorn، Gunicorn، داکر و Nginx."
        },
        "en": {
          "t": "Deployment",
          "d": "Uvicorn, Gunicorn, Docker and Nginx."
        },
        "kw": "uvicorn gunicorn docker nginx worker",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — ‎API‎ با پایگاه‌داده",
          "d": "‏CRUD با ‎Pydantic‎ و ‎SQLAlchemy‎."
        },
        "en": {
          "t": "Project 1 — an API with a database",
          "d": "CRUD with Pydantic and SQLAlchemy."
        },
        "kw": "capstone crud",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — ‎API‎ امن",
          "d": "‏JWT، نقش، صف و تست کامل."
        },
        "en": {
          "t": "Project 2 — a secured API",
          "d": "JWT, roles, queues and full tests."
        },
        "kw": "capstone auth",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس production",
          "d": "بی‌درنگ، کش، مانیتورینگ و استقرار."
        },
        "en": {
          "t": "Project 3 — a production service",
          "d": "Real-time features, caching, monitoring and deployment."
        },
        "kw": "capstone production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1675,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "57-maps",
    "dir": "57-maps",
    "accent": "#199900",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M9 4.2 3.6 6.4v13.4L9 17.6l6 2.2 5.4-2.2V4.2L15 6.4z\"/><path d=\"M9 4.2v13.4M15 6.4v13.4\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "نقشه و داده‌های مکانی",
      "desc": "‏Leaflet، MapLibre، ‎GeoJSON‎، کاشی، مسیریابی و ‎PostGIS‎ — از نمایش تا تحلیل مکانی.",
      "intro": "نقشه فقط یک تصویر نیست؛ یک سیستم مختصات، یک تصویر برداری، و یک پایگاه‌دادهٔ مکانی است. اگر فقط کتابخانه را یاد بگیری، در اولین مسئلهٔ واقعی — «نزدیک‌ترین شعبه کدام است؟» یا «این نقطه داخل کدام محدوده است؟» — گیر می‌کنی. این مسیر از سیستم مختصات شروع می‌کند و تا تحلیل مکانی در پایگاه‌داده می‌رود."
    },
    "en": {
      "name": "Maps & geospatial",
      "desc": "Leaflet, MapLibre, GeoJSON, tiles, routing and PostGIS — from display to spatial analysis.",
      "intro": "A map is not just a picture; it is a coordinate system, a vector rendering and a spatial database. Learn only the library and you will stall on the first real question — “which branch is nearest?” or “which zone contains this point?” This track starts from coordinate systems and goes through to spatial analysis in the database."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مبانی مکانی",
          "d": "طول و عرض جغرافیایی، ‎WGS84‎ و تصویر مرکاتور."
        },
        "en": {
          "t": "Geospatial basics",
          "d": "Latitude and longitude, WGS84 and the Mercator projection."
        },
        "kw": "latitude longitude wgs84 projection mercator srid",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-tiles.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کاشی و سطح بزرگ‌نمایی",
          "d": "چرا نقشه از مربع‌های ۲۵۶ پیکسلی ساخته می‌شود."
        },
        "en": {
          "t": "Tiles and zoom levels",
          "d": "Why a map is built from 256-pixel squares."
        },
        "kw": "tile zoom xyz raster vector slippy",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-leaflet-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Leaflet: شروع",
          "d": "نقشه، لایه، نشانگر و رویداد."
        },
        "en": {
          "t": "Leaflet: getting started",
          "d": "Maps, layers, markers and events."
        },
        "kw": "leaflet map layer marker popup",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-leaflet-layers.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "لایه و کنترل",
          "d": "‏overlay، گروه لایه و کنترل سفارشی."
        },
        "en": {
          "t": "Layers and controls",
          "d": "Overlays, layer groups and custom controls."
        },
        "kw": "layergroup control overlay tilelayer",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-geojson.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏GeoJSON",
          "d": "نقطه، خط، چندضلعی — و استایل‌دهی به آن‌ها."
        },
        "en": {
          "t": "GeoJSON",
          "d": "Points, lines, polygons — and styling them."
        },
        "kw": "geojson feature geometry polygon style",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-interaction.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تعامل",
          "d": "رسم، ویرایش، ‎drag‎ و انتخاب ناحیه."
        },
        "en": {
          "t": "Interaction",
          "d": "Drawing, editing, dragging and area selection."
        },
        "kw": "draw edit interaction geoman handler",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-clustering.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "خوشه‌بندی و کارایی",
          "d": "ده‌هزار نشانگر بدون یخ‌زدن مرورگر."
        },
        "en": {
          "t": "Clustering and performance",
          "d": "Ten thousand markers without freezing the browser."
        },
        "kw": "cluster marker performance canvas heatmap",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-maplibre.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏MapLibre و کاشی برداری",
          "d": "نقشهٔ برداری، استایل ‎JSON‎ و چرخش سه‌بعدی."
        },
        "en": {
          "t": "MapLibre and vector tiles",
          "d": "Vector maps, JSON styles and 3D tilt."
        },
        "kw": "maplibre mapbox vector tile style pitch",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-geocoding.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏geocoding",
          "d": "آدرس به مختصات و برعکس — با Nominatim."
        },
        "en": {
          "t": "Geocoding",
          "d": "Address to coordinates and back — with Nominatim."
        },
        "kw": "geocoding nominatim reverse address search",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مسیریابی",
          "d": "‏OSRM و ‎GraphHopper‎: مسیر، فاصله و زمان."
        },
        "en": {
          "t": "Routing",
          "d": "OSRM and GraphHopper: route, distance and duration."
        },
        "kw": "routing osrm graphhopper directions isochrone",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-postgis.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏PostGIS",
          "d": "ذخیره و کوئری مکانی: نزدیک‌ترین، درون، تقاطع."
        },
        "en": {
          "t": "PostGIS",
          "d": "Storing and querying space: nearest, within, intersects."
        },
        "kw": "postgis st_distance st_within gist spatial index",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-analysis.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "تحلیل مکانی",
          "d": "‏buffer، تقاطع، خوشه و ‎heatmap‎."
        },
        "en": {
          "t": "Spatial analysis",
          "d": "Buffers, intersections, clustering and heatmaps."
        },
        "kw": "buffer intersect cluster heatmap analysis",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-selfhost.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "میزبانی نقشهٔ خودت",
          "d": "سرور کاشی، ‎OSM‎ و کار بدون سرویس بیرونی."
        },
        "en": {
          "t": "Self-hosting maps",
          "d": "A tile server, OpenStreetMap, and working without external services."
        },
        "kw": "osm tileserver selfhost planet extract",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-mobile.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نقشه در موبایل",
          "d": "‏Flutter و ‎React Native‎: مکان‌یابی و مجوز."
        },
        "en": {
          "t": "Maps on mobile",
          "d": "Flutter and React Native: geolocation and permissions."
        },
        "kw": "flutter react native geolocation permission",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — نقشهٔ شعب",
          "d": "نشانگر، ‎popup‎ و جستجو."
        },
        "en": {
          "t": "Project 1 — a branch locator",
          "d": "Markers, popups and search."
        },
        "kw": "capstone locator",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — ردیاب زنده",
          "d": "موقعیت بی‌درنگ، مسیر طی‌شده و ‎geofence‎."
        },
        "en": {
          "t": "Project 2 — a live tracker",
          "d": "Real-time position, travelled path and geofences."
        },
        "kw": "capstone tracking realtime",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — سامانهٔ مسیریابی",
          "d": "‏PostGIS، مسیریابی، بهینه‌سازی سفر و تحلیل."
        },
        "en": {
          "t": "Project 3 — a routing system",
          "d": "PostGIS, routing, trip optimisation and analysis."
        },
        "kw": "capstone routing postgis",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1605,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "58-algorithms",
    "dir": "58-algorithms",
    "accent": "#7C3AED",
    "accentDark": null,
    "cat": "basics",
    "ico": "<circle cx=\"6\" cy=\"6\" r=\"2.4\"/><circle cx=\"18\" cy=\"6\" r=\"2.4\"/><circle cx=\"12\" cy=\"12\" r=\"2.4\"/><circle cx=\"6\" cy=\"18\" r=\"2.4\"/><circle cx=\"18\" cy=\"18\" r=\"2.4\"/><path d=\"M7.7 7.7 10.3 10.3M16.3 7.7 13.7 10.3M10.3 13.7 7.7 16.3M13.7 13.7l2.6 2.6\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "الگوریتم و حل مسئله",
      "desc": "ساختمان داده، پیچیدگی، بازگشت، گراف، برنامه‌ریزی پویا و روش سیستماتیک حل مسئله.",
      "intro": "الگوریتم برای قبولی در مصاحبه نیست — هرچند آنجا هم به کار می‌آید. برای این است که وقتی کدت روی ده رکورد سریع است و روی ده میلیون رکورد از کار می‌افتد، بدانی چرا و چه کار کنی. این مسیر روی «چطور به جواب رسیدیم» تمرکز می‌کند، نه «جواب چیست»، چون حفظ کردن الگوریتم بی‌فایده است و روشِ رسیدن به آن نیست."
    },
    "en": {
      "name": "Algorithms & problem solving",
      "desc": "Data structures, complexity, recursion, graphs, dynamic programming and a systematic method for solving problems.",
      "intro": "Algorithms are not for passing interviews — though they help there too. They are for the moment your code is fast over ten records and collapses over ten million, so you know why and what to do. This track focuses on how we arrived at a solution rather than what the solution is, because memorising algorithms is useless while the method of finding them is not."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-method.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "روش حل مسئله",
          "d": "قبل از کد: بفهم، مثال بزن، ساده کن، تعمیم بده."
        },
        "en": {
          "t": "A method for solving problems",
          "d": "Before code: understand, exemplify, simplify, generalise."
        },
        "kw": "method polya problem solving approach",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-complexity.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "پیچیدگی زمانی و حافظه",
          "d": "‏Big-O بدون ریاضیات ترسناک — با شهود."
        },
        "en": {
          "t": "Time and space complexity",
          "d": "Big-O without the frightening maths — by intuition."
        },
        "kw": "bigo complexity amortized asymptotic",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-arrays.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "آرایه و رشته",
          "d": "دو اشاره‌گر، پنجرهٔ لغزان و پیشوند تجمعی."
        },
        "en": {
          "t": "Arrays and strings",
          "d": "Two pointers, sliding windows and prefix sums."
        },
        "kw": "array string two pointer sliding window prefix",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-hashing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏hash",
          "d": "جدول hash، برخورد، و چرا ‎O(1)‎ همیشه ‎O(1)‎ نیست."
        },
        "en": {
          "t": "Hashing",
          "d": "Hash tables, collisions, and why O(1) is not always O(1)."
        },
        "kw": "hash table collision map set",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-linked.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "لیست پیوندی",
          "d": "‏reverse، تشخیص حلقه و اشاره‌گر سریع و کند."
        },
        "en": {
          "t": "Linked lists",
          "d": "Reversal, cycle detection and fast/slow pointers."
        },
        "kw": "linked list reverse cycle floyd",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-stack-queue.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پشته و صف",
          "d": "‏monotonic stack و صف دوسر."
        },
        "en": {
          "t": "Stacks and queues",
          "d": "Monotonic stacks and deques."
        },
        "kw": "stack queue deque monotonic parenthesis",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-recursion.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "بازگشت",
          "d": "اعتماد به فراخوانی بازگشتی، و درخت فراخوانی."
        },
        "en": {
          "t": "Recursion",
          "d": "Trusting the recursive call, and the call tree."
        },
        "kw": "recursion base case call tree backtrack",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-sorting.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مرتب‌سازی",
          "d": "‏merge، quick، heap — و اینکه کِی خودت بنویسی."
        },
        "en": {
          "t": "Sorting",
          "d": "Merge, quick, heap — and when to write your own."
        },
        "kw": "sort merge quick heap stability",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-searching.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "جستجوی دودویی",
          "d": "ساده به نظر می‌رسد، و بیشتر آدم‌ها اشتباه می‌نویسند."
        },
        "en": {
          "t": "Binary search",
          "d": "It looks simple, and most people write it wrong."
        },
        "kw": "binary search boundary invariant",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-trees.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "درخت",
          "d": "پیمایش، ‎BST‎ و درخت متوازن."
        },
        "en": {
          "t": "Trees",
          "d": "Traversal, BSTs and balanced trees."
        },
        "kw": "tree traversal bst avl inorder",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-heaps.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏heap و صف اولویت",
          "d": "‏k‎ بزرگ‌ترین، ادغام و زمان‌بندی."
        },
        "en": {
          "t": "Heaps and priority queues",
          "d": "Top-k, merging and scheduling."
        },
        "kw": "heap priority queue topk",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-graphs-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "گراف ۱",
          "d": "نمایش، ‎BFS‎ و ‎DFS‎."
        },
        "en": {
          "t": "Graphs 1",
          "d": "Representation, BFS and DFS."
        },
        "kw": "graph bfs dfs adjacency component",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-graphs-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "گراف ۲",
          "d": "کوتاه‌ترین مسیر: ‎Dijkstra‎ و ‎topological sort‎."
        },
        "en": {
          "t": "Graphs 2",
          "d": "Shortest paths: Dijkstra and topological sort."
        },
        "kw": "dijkstra topological shortest path dag",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-greedy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "حریصانه",
          "d": "کِی جواب می‌دهد و چطور ثابت کنیم."
        },
        "en": {
          "t": "Greedy algorithms",
          "d": "When it works and how to prove it."
        },
        "kw": "greedy exchange argument interval",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-dp-1.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "برنامه‌ریزی پویا ۱",
          "d": "از بازگشت به یادداشت‌برداری، قدم‌به‌قدم."
        },
        "en": {
          "t": "Dynamic programming 1",
          "d": "From recursion to memoisation, step by step."
        },
        "kw": "dp memoization overlapping subproblem",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-dp-2.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "برنامه‌ریزی پویا ۲",
          "d": "‏knapsack، ‎LCS‎ و بهینه‌سازی حافظه."
        },
        "en": {
          "t": "Dynamic programming 2",
          "d": "Knapsack, LCS and space optimisation."
        },
        "kw": "dp knapsack lcs tabulation",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-backtracking.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "عقب‌گرد",
          "d": "‏n-queens، جایگشت و هرس فضای جستجو."
        },
        "en": {
          "t": "Backtracking",
          "d": "N-queens, permutations and pruning the search space."
        },
        "kw": "backtracking permutation pruning nqueens",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-strings.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوریتم رشته",
          "d": "‏KMP، ‎trie‎ و ‎hash‎ غلتان."
        },
        "en": {
          "t": "String algorithms",
          "d": "KMP, tries and rolling hashes."
        },
        "kw": "kmp trie rolling hash pattern",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-practical.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "الگوریتم در کار روزمره",
          "d": "کجا در کد واقعی به دردت می‌خورد."
        },
        "en": {
          "t": "Algorithms in daily work",
          "d": "Where this shows up in real code."
        },
        "kw": "practical real world optimization",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-interview.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مصاحبهٔ الگوریتمی",
          "d": "بلند فکر کردن، و روش رسیدن به جواب زیر فشار."
        },
        "en": {
          "t": "Algorithm interviews",
          "d": "Thinking aloud, and getting to an answer under pressure."
        },
        "kw": "interview whiteboard communication",
        "cap": 0
      },
      {
        "n": "21",
        "file": "21-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — ساختمان دادهٔ خودت",
          "d": "‏hash map و ‎LRU cache‎ با تست."
        },
        "en": {
          "t": "Project 1 — build a data structure",
          "d": "A hash map and an LRU cache, with tests."
        },
        "kw": "capstone lru hashmap",
        "cap": 1
      },
      {
        "n": "22",
        "file": "22-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۲ — موتور جستجوی کوچک",
          "d": "‏trie، رتبه‌بندی و پیشنهاد خودکار."
        },
        "en": {
          "t": "Project 2 — a small search engine",
          "d": "Tries, ranking and autocomplete."
        },
        "kw": "capstone search trie",
        "cap": 2
      },
      {
        "n": "23",
        "file": "23-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — مسیریاب",
          "d": "گراف واقعی شهری با ‎Dijkstra‎ و ‎A*‎."
        },
        "en": {
          "t": "Project 3 — a route planner",
          "d": "A real city graph with Dijkstra and A*."
        },
        "kw": "capstone routing astar",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 23,
      "exercises": 381,
      "minutes": 2200,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "59-machine-learning",
    "dir": "59-machine-learning",
    "accent": "#F59E0B",
    "accentDark": null,
    "cat": "ai",
    "ico": "<circle cx=\"5.4\" cy=\"8\" r=\"2\"/><circle cx=\"5.4\" cy=\"16\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"18.6\" cy=\"8\" r=\"2\"/><circle cx=\"18.6\" cy=\"16\" r=\"2\"/><path d=\"M7.2 8.8 10.4 11M7.2 15.2 10.4 13M13.6 11l3.2-2.2M13.6 13l3.2 2.2\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "یادگیری ماشین",
      "desc": "از رگرسیون تا درخت و ‎SVM‎: آماده‌سازی داده، ارزیابی، ‎overfitting‎ و استقرار مدل.",
      "intro": "یادگیری ماشین جادو نیست؛ بهینه‌سازی آماری است. مدل چیزی را یاد می‌گیرد که در داده هست — از جمله سوگیری‌هایی که نمی‌خواستی. این مسیر بیشتر وقتش را روی داده و ارزیابی می‌گذارد، نه روی الگوریتم، چون در پروژهٔ واقعی همان‌جاست که کار برنده یا بازنده می‌شود."
    },
    "en": {
      "name": "Machine learning",
      "desc": "From regression to trees and SVMs: data preparation, evaluation, overfitting and deploying a model.",
      "intro": "Machine learning is not magic; it is statistical optimisation. A model learns what is in the data — including the biases you did not want. This track spends most of its time on data and evaluation rather than algorithms, because that is where real projects are won or lost."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-what.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "یادگیری ماشین چیست",
          "d": "‏نظارت‌شده، بی‌نظارت، تقویتی — و کِی اصلاً لازم نیست."
        },
        "en": {
          "t": "What machine learning is",
          "d": "Supervised, unsupervised, reinforcement — and when you do not need any of it."
        },
        "kw": "supervised unsupervised ml when not",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-tools.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ابزار کار",
          "d": "‏Python، NumPy، pandas و ‎Jupyter‎."
        },
        "en": {
          "t": "The toolkit",
          "d": "Python, NumPy, pandas and Jupyter."
        },
        "kw": "numpy pandas jupyter scikit matplotlib",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-data.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "داده: مهم‌ترین بخش",
          "d": "پاکسازی، مقدار گمشده، ‎outlier‎ و نشت داده."
        },
        "en": {
          "t": "Data: the part that matters most",
          "d": "Cleaning, missing values, outliers and data leakage."
        },
        "kw": "cleaning missing outlier leakage eda",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-features.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مهندسی ویژگی",
          "d": "مقیاس‌دهی، رمزگذاری دسته‌ای و ساخت ویژگی."
        },
        "en": {
          "t": "Feature engineering",
          "d": "Scaling, categorical encoding and building features."
        },
        "kw": "feature scaling encoding onehot pipeline",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-linear.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "رگرسیون خطی",
          "d": "ساده‌ترین مدل، و اینکه چقدر می‌شود ازش یاد گرفت."
        },
        "en": {
          "t": "Linear regression",
          "d": "The simplest model, and how much it teaches you."
        },
        "kw": "linear regression gradient descent loss",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-logistic.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "رگرسیون لجستیک",
          "d": "طبقه‌بندی، احتمال و مرز تصمیم."
        },
        "en": {
          "t": "Logistic regression",
          "d": "Classification, probability and decision boundaries."
        },
        "kw": "logistic classification sigmoid threshold",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-evaluation.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "ارزیابی مدل",
          "d": "‏accuracy کافی نیست: precision، recall، ‎F1‎، ‎ROC‎."
        },
        "en": {
          "t": "Evaluating a model",
          "d": "Accuracy is not enough: precision, recall, F1, ROC."
        },
        "kw": "precision recall f1 roc confusion matrix",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-overfitting.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏overfitting و اعتبارسنجی",
          "d": "‏train/test، ‎cross-validation‎ و منظم‌سازی."
        },
        "en": {
          "t": "Overfitting and validation",
          "d": "Train/test splits, cross-validation and regularisation."
        },
        "kw": "overfitting crossvalidation regularization bias variance",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-trees.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "درخت تصمیم و جنگل",
          "d": "قابل تفسیر، قوی و پرکاربرد."
        },
        "en": {
          "t": "Decision trees and forests",
          "d": "Interpretable, strong and widely used."
        },
        "kw": "decision tree random forest feature importance",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-boosting.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏boosting",
          "d": "‏XGBoost و ‎LightGBM‎: برندهٔ بیشتر مسائل جدولی."
        },
        "en": {
          "t": "Boosting",
          "d": "XGBoost and LightGBM: winners of most tabular problems."
        },
        "kw": "xgboost lightgbm gradient boosting",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-svm-knn.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏SVM و ‎k-NN‎",
          "d": "مرز و همسایگی."
        },
        "en": {
          "t": "SVMs and k-NN",
          "d": "Boundaries and neighbourhoods."
        },
        "kw": "svm knn kernel margin distance",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-clustering.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "خوشه‌بندی",
          "d": "‏k-means، ‎DBSCAN‎ و ارزیابی بدون برچسب."
        },
        "en": {
          "t": "Clustering",
          "d": "k-means, DBSCAN and evaluating without labels."
        },
        "kw": "kmeans dbscan silhouette unsupervised",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-dimensionality.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کاهش بعد",
          "d": "‏PCA و ‎t-SNE‎ برای دیدن داده."
        },
        "en": {
          "t": "Dimensionality reduction",
          "d": "PCA and t-SNE for seeing your data."
        },
        "kw": "pca tsne umap dimensionality",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-imbalance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "دادهٔ نامتوازن",
          "d": "وقتی ۹۹٪ کلاس منفی است."
        },
        "en": {
          "t": "Imbalanced data",
          "d": "When 99% of the data is the negative class."
        },
        "kw": "imbalance smote resampling class weight",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-tuning.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تنظیم ابرپارامتر",
          "d": "‏grid، random و ‎Bayesian‎."
        },
        "en": {
          "t": "Hyperparameter tuning",
          "d": "Grid, random and Bayesian search."
        },
        "kw": "hyperparameter grid random optuna",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-pipeline.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏pipeline و بازتولیدپذیری",
          "d": "یک خط لولهٔ کامل، قابل تکرار."
        },
        "en": {
          "t": "Pipelines and reproducibility",
          "d": "One complete, repeatable pipeline."
        },
        "kw": "pipeline sklearn reproducible seed",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "استقرار مدل",
          "d": "‏API، نسخه‌گذاری مدل، و ‎drift‎."
        },
        "en": {
          "t": "Deploying a model",
          "d": "APIs, model versioning and drift."
        },
        "kw": "deploy mlflow api drift monitoring",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-ethics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "سوگیری و اخلاق",
          "d": "مدلی که تبعیض یاد گرفته، و مسئولیت تو."
        },
        "en": {
          "t": "Bias and ethics",
          "d": "A model that learned to discriminate, and your responsibility."
        },
        "kw": "bias fairness ethics explainability",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 100,
        "fa": {
          "t": "پروژهٔ ۱ — پیش‌بینی قیمت",
          "d": "رگرسیون کامل با ارزیابی درست."
        },
        "en": {
          "t": "Project 1 — price prediction",
          "d": "A complete regression with proper evaluation."
        },
        "kw": "capstone regression",
        "cap": 1
      },
      {
        "n": "20",
        "file": "20-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۲ — طبقه‌بندی با دادهٔ کثیف",
          "d": "پاکسازی، ویژگی، نامتوازنی و تفسیر."
        },
        "en": {
          "t": "Project 2 — classification on messy data",
          "d": "Cleaning, features, imbalance and interpretation."
        },
        "kw": "capstone classification",
        "cap": 2
      },
      {
        "n": "21",
        "file": "21-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 220,
        "fa": {
          "t": "پروژهٔ ۳ — مدل در production",
          "d": "خط لوله، ‎API‎، مانیتورینگ و بازآموزی."
        },
        "en": {
          "t": "Project 3 — a model in production",
          "d": "A pipeline, an API, monitoring and retraining."
        },
        "kw": "capstone mlops",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 21,
      "exercises": 345,
      "minutes": 2060,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "60-deep-learning",
    "dir": "60-deep-learning",
    "accent": "#EF4444",
    "accentDark": null,
    "cat": "ai",
    "ico": "<circle cx=\"4.6\" cy=\"12\" r=\"1.8\"/><circle cx=\"11\" cy=\"7\" r=\"1.8\"/><circle cx=\"11\" cy=\"17\" r=\"1.8\"/><circle cx=\"17.4\" cy=\"9.6\" r=\"1.8\"/><circle cx=\"17.4\" cy=\"14.4\" r=\"1.8\"/><path d=\"M6.2 11 9.4 8M6.2 13l3.2 3M12.6 8l3.4 1.2M12.6 16l3.4-1.2\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "یادگیری عمیق",
      "desc": "شبکهٔ عصبی، ‎CNN‎، ‎RNN‎، ترنسفورمر و آموزش مدل — با PyTorch.",
      "intro": "یادگیری عمیق یک ایده است که بارها تکرار شده: لایه‌ای بساز، مشتق بگیر، وزن را کمی تغییر بده. همین. پیچیدگی از عمق می‌آید نه از مفهوم. این مسیر از یک نورون شروع می‌کند و تا ترنسفورمر می‌رود، و در هر مرحله اول با ‎NumPy‎ دستی می‌سازد بعد با ‎PyTorch‎ — تا بدانی کتابخانه چه کاری را برایت انجام می‌دهد."
    },
    "en": {
      "name": "Deep learning",
      "desc": "Neural networks, CNNs, RNNs, transformers and training — with PyTorch.",
      "intro": "Deep learning is one idea repeated: build a layer, take the derivative, nudge the weights. That is all. The complexity comes from depth, not from the concept. This track starts at a single neuron and works up to transformers, building each stage by hand in NumPy first and then in PyTorch — so you know what the library is doing for you."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-neuron.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "از یک نورون",
          "d": "‏perceptron، وزن و تابع فعال‌سازی."
        },
        "en": {
          "t": "From a single neuron",
          "d": "The perceptron, weights and activation functions."
        },
        "kw": "perceptron neuron activation weight bias",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-backprop.html",
        "ready": false,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "پس‌انتشار",
          "d": "قاعدهٔ زنجیره‌ای — با محاسبهٔ دستی روی یک شبکهٔ کوچک."
        },
        "en": {
          "t": "Backpropagation",
          "d": "The chain rule — computed by hand on a tiny network."
        },
        "kw": "backpropagation gradient chain rule derivative",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-numpy-net.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "شبکه با ‎NumPy‎",
          "d": "یک شبکهٔ کامل بدون فریم‌ورک."
        },
        "en": {
          "t": "A network in NumPy",
          "d": "A complete network with no framework."
        },
        "kw": "numpy from scratch forward backward",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-pytorch.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏PyTorch",
          "d": "‏tensor، autograd و ‎nn.Module‎."
        },
        "en": {
          "t": "PyTorch",
          "d": "Tensors, autograd and nn.Module."
        },
        "kw": "pytorch tensor autograd module optimizer",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-training.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "حلقهٔ آموزش",
          "d": "‏loss، بهینه‌ساز، ‎batch‎ و ‎epoch‎."
        },
        "en": {
          "t": "The training loop",
          "d": "Loss, optimiser, batches and epochs."
        },
        "kw": "training loop loss optimizer batch epoch",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-optimization.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "بهینه‌سازی",
          "d": "‏SGD، Adam، نرخ یادگیری و زمان‌بند."
        },
        "en": {
          "t": "Optimisation",
          "d": "SGD, Adam, learning rates and schedulers."
        },
        "kw": "sgd adam learning rate scheduler momentum",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-regularization.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "منظم‌سازی",
          "d": "‏dropout، ‎batch norm‎ و ‎early stopping‎."
        },
        "en": {
          "t": "Regularisation",
          "d": "Dropout, batch norm and early stopping."
        },
        "kw": "dropout batchnorm early stopping augmentation",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-cnn.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏CNN",
          "d": "کانولوشن، ‎pooling‎ و بینایی ماشین."
        },
        "en": {
          "t": "CNNs",
          "d": "Convolution, pooling and computer vision."
        },
        "kw": "cnn convolution pooling kernel vision",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-vision.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "بینایی در عمل",
          "d": "طبقه‌بندی تصویر، ‎transfer learning‎ و ‎fine-tuning‎."
        },
        "en": {
          "t": "Vision in practice",
          "d": "Image classification, transfer learning and fine-tuning."
        },
        "kw": "transfer learning resnet finetune augmentation",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-rnn.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏RNN و ‎LSTM‎",
          "d": "داده‌های دنباله‌ای و مسئلهٔ حافظهٔ بلندمدت."
        },
        "en": {
          "t": "RNNs and LSTMs",
          "d": "Sequential data and the long-memory problem."
        },
        "kw": "rnn lstm gru sequence vanishing gradient",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-attention.html",
        "ready": false,
        "ex": 18,
        "mins": 105,
        "fa": {
          "t": "‏attention",
          "d": "ایده‌ای که همه‌چیز را عوض کرد."
        },
        "en": {
          "t": "Attention",
          "d": "The idea that changed everything."
        },
        "kw": "attention query key value softmax",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-transformer.html",
        "ready": false,
        "ex": 18,
        "mins": 110,
        "fa": {
          "t": "ترنسفورمر",
          "d": "معماری کامل، از ‎embedding‎ تا خروجی."
        },
        "en": {
          "t": "Transformers",
          "d": "The full architecture, from embeddings to output."
        },
        "kw": "transformer encoder decoder positional multihead",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-nlp.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "پردازش زبان",
          "d": "‏tokenization، ‎embedding‎ و فارسی."
        },
        "en": {
          "t": "Natural language processing",
          "d": "Tokenisation, embeddings and Persian text."
        },
        "kw": "nlp tokenization embedding bert persian",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-generative.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مدل‌های مولد",
          "d": "‏autoencoder، ‎GAN‎ و ‎diffusion‎ — مرور مفهومی."
        },
        "en": {
          "t": "Generative models",
          "d": "Autoencoders, GANs and diffusion — a conceptual tour."
        },
        "kw": "gan vae diffusion generative",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-training-real.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "آموزش در عمل",
          "d": "‏GPU، حافظه، ‎mixed precision‎ و ‎checkpoint‎."
        },
        "en": {
          "t": "Training for real",
          "d": "GPUs, memory, mixed precision and checkpointing."
        },
        "kw": "gpu cuda mixed precision checkpoint oom",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "استقرار مدل",
          "d": "‏ONNX، کوانتیزه‌سازی و استنتاج سریع."
        },
        "en": {
          "t": "Deploying a model",
          "d": "ONNX, quantisation and fast inference."
        },
        "kw": "onnx quantization inference serving latency",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 110,
        "fa": {
          "t": "پروژهٔ ۱ — طبقه‌بندی تصویر",
          "d": "‏CNN از صفر، بعد با ‎transfer learning‎."
        },
        "en": {
          "t": "Project 1 — image classification",
          "d": "A CNN from scratch, then with transfer learning."
        },
        "kw": "capstone cnn vision",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۲ — تحلیل متن فارسی",
          "d": "‏tokenization فارسی، ‎fine-tune‎ و ارزیابی."
        },
        "en": {
          "t": "Project 2 — Persian text analysis",
          "d": "Persian tokenisation, fine-tuning and evaluation."
        },
        "kw": "capstone nlp persian",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 240,
        "fa": {
          "t": "پروژهٔ ۳ — ترنسفورمر کوچک از صفر",
          "d": "‏attention، آموزش و تولید متن."
        },
        "en": {
          "t": "Project 3 — a small transformer from scratch",
          "d": "Attention, training and text generation."
        },
        "kw": "capstone transformer",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 2065,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "61-ai-engineering",
    "dir": "61-ai-engineering",
    "accent": "#8B5CF6",
    "accentDark": null,
    "cat": "ai",
    "ico": "<rect x=\"4.4\" y=\"6.4\" width=\"15.2\" height=\"12\" rx=\"3\"/><circle cx=\"9.2\" cy=\"12.4\" r=\"1.4\"/><circle cx=\"14.8\" cy=\"12.4\" r=\"1.4\"/><path d=\"M12 6.4V3.6M9.6 16h4.8\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "مهندسی هوش مصنوعی",
      "desc": "ساخت محصول با ‎LLM‎: prompt، ‎RAG‎، ‎embedding‎، ابزار، عامل، ارزیابی و هزینه.",
      "intro": "مدل زبانی را کسی دیگر آموزش داده؛ کار تو ساختن چیزی است که با آن کار می‌کند و در عمل قابل اعتماد باشد. این مسیر دربارهٔ آموزش مدل نیست — دربارهٔ مهندسی اطراف آن است: چطور داده‌ات را وارد کنی، چطور خروجی را بسنجی، چطور جلوی هزینهٔ بی‌حساب را بگیری، و چه کاری را اصلاً نباید به مدل بسپاری."
    },
    "en": {
      "name": "AI engineering",
      "desc": "Building products with LLMs: prompting, RAG, embeddings, tools, agents, evaluation and cost.",
      "intro": "Somebody else trained the model; your job is building something around it that is reliable in practice. This track is not about training models — it is about the engineering around them: how to feed in your data, how to measure the output, how to keep costs from running away, and what you should never hand to a model at all."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-landscape.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏LLM چیست و چه نیست",
          "d": "توانایی‌ها، محدودیت‌ها و توهم‌زایی."
        },
        "en": {
          "t": "What an LLM is and is not",
          "d": "Capabilities, limits and hallucination."
        },
        "kw": "llm token context hallucination capability",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-api.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کار با ‎API‎ مدل",
          "d": "درخواست، پارامتر، استریم و مدیریت خطا."
        },
        "en": {
          "t": "Working with a model API",
          "d": "Requests, parameters, streaming and error handling."
        },
        "kw": "api completion streaming temperature retry",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-prompting.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "مهندسی prompt",
          "d": "ساختار، مثال، نقش و خروجی ساخت‌یافته."
        },
        "en": {
          "t": "Prompt engineering",
          "d": "Structure, examples, roles and structured output."
        },
        "kw": "prompt fewshot system structured json",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-structured.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "خروجی ساخت‌یافته",
          "d": "‏JSON schema، اعتبارسنجی و ‎retry‎ هوشمند."
        },
        "en": {
          "t": "Structured output",
          "d": "JSON schemas, validation and smart retries."
        },
        "kw": "json schema function calling validation",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-embeddings.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏embedding",
          "d": "معنا به‌صورت عدد، و شباهت برداری."
        },
        "en": {
          "t": "Embeddings",
          "d": "Meaning as numbers, and vector similarity."
        },
        "kw": "embedding vector cosine similarity",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-vectordb.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "پایگاه‌دادهٔ برداری",
          "d": "‏pgvector، Qdrant و جستجوی شباهت."
        },
        "en": {
          "t": "Vector databases",
          "d": "pgvector, Qdrant and similarity search."
        },
        "kw": "pgvector qdrant faiss ann index",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-rag-1.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏RAG ۱",
          "d": "بازیابی و تولید: مدل را با دادهٔ خودت وصل کن."
        },
        "en": {
          "t": "RAG 1",
          "d": "Retrieval-augmented generation: connecting the model to your data."
        },
        "kw": "rag retrieval chunking context",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-rag-2.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏RAG ۲",
          "d": "‏chunking، بازرتبه‌بندی، جستجوی ترکیبی و ارزیابی."
        },
        "en": {
          "t": "RAG 2",
          "d": "Chunking, reranking, hybrid search and evaluation."
        },
        "kw": "chunking rerank hybrid bm25 evaluation",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-tools.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ابزار و ‎function calling‎",
          "d": "وقتی مدل باید کاری انجام دهد، نه فقط حرف بزند."
        },
        "en": {
          "t": "Tools and function calling",
          "d": "When the model must do something, not just talk."
        },
        "kw": "tool function calling schema execution",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-agents.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "عامل",
          "d": "حلقهٔ تصمیم، حافظه و جایی که از کنترل خارج می‌شود."
        },
        "en": {
          "t": "Agents",
          "d": "The decision loop, memory, and where it runs away."
        },
        "kw": "agent loop memory planning guardrail",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-evaluation.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "ارزیابی",
          "d": "چطور بفهمی خروجی خوب است — بدون حدس."
        },
        "en": {
          "t": "Evaluation",
          "d": "How to know the output is good — without guessing."
        },
        "kw": "eval golden set llm judge regression",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-cost.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "هزینه و تأخیر",
          "d": "‏token، کش، مدل کوچک‌تر و ‎batch‎."
        },
        "en": {
          "t": "Cost and latency",
          "d": "Tokens, caching, smaller models and batching."
        },
        "kw": "cost token cache latency batching",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-safety.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "ایمنی و تزریق prompt",
          "d": "ورودی کاربر قابل اعتماد نیست — حتی وقتی مؤدب است."
        },
        "en": {
          "t": "Safety and prompt injection",
          "d": "User input is untrusted — even when it is polite."
        },
        "kw": "prompt injection jailbreak guardrail moderation",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-local.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدل محلی",
          "d": "‏Ollama و اجرای مدل روی سخت‌افزار خودت."
        },
        "en": {
          "t": "Local models",
          "d": "Ollama and running a model on your own hardware."
        },
        "kw": "ollama local quantization gguf offline",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-persian.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "فارسی و ‎LLM‎",
          "d": "‏tokenization فارسی، کیفیت و راهکارها."
        },
        "en": {
          "t": "Persian and LLMs",
          "d": "Persian tokenisation, quality and workarounds."
        },
        "kw": "persian farsi tokenization rtl quality",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — دستیار با خروجی ساخت‌یافته",
          "d": "‏API، prompt و اعتبارسنجی خروجی."
        },
        "en": {
          "t": "Project 1 — an assistant with structured output",
          "d": "API, prompting and output validation."
        },
        "kw": "capstone assistant",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۲ — ‏RAG روی سند خودت",
          "d": "‏chunking، برداری، بازیابی و ارزیابی."
        },
        "en": {
          "t": "Project 2 — RAG over your own documents",
          "d": "Chunking, vectors, retrieval and evaluation."
        },
        "kw": "capstone rag",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 230,
        "fa": {
          "t": "پروژهٔ ۳ — عامل ابزارمند",
          "d": "ابزار، حافظه، حفاظ، ارزیابی و کنترل هزینه."
        },
        "en": {
          "t": "Project 3 — a tool-using agent",
          "d": "Tools, memory, guardrails, evaluation and cost control."
        },
        "kw": "capstone agent",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1840,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "62-virtualization",
    "dir": "62-virtualization",
    "accent": "#0F766E",
    "accentDark": null,
    "cat": "infra",
    "ico": "<rect x=\"2.6\" y=\"4.6\" width=\"12\" height=\"9\" rx=\"2\"/><rect x=\"9.4\" y=\"10.4\" width=\"12\" height=\"9\" rx=\"2\"/><path d=\"M6 8h5M12.8 14h5\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "ماشین مجازی و توزیع‌ها",
      "desc": "‏VirtualBox، KVM/QEMU، Proxmox: نصب چند توزیع، شبکه بین آن‌ها و snapshot.",
      "intro": "قبل از اینکه روی یک سرور واقعی خطا کنی، بهتر است روی ماشینی خطا کنی که با یک کلیک به حالت قبل برمی‌گردد. آزمایشگاه مجازی همان جاست: چند توزیع لینوکس کنار هم، یک شبکهٔ داخلی بین‌شان، و snapshot که هر اشتباهی را برگشت‌پذیر می‌کند. این مسیر همان آزمایشگاه را می‌سازد — که بعد در مسیرهای لینوکس، شبکه و دواپس رویش کار می‌کنی."
    },
    "en": {
      "name": "Virtual machines & distributions",
      "desc": "VirtualBox, KVM/QEMU, Proxmox: installing several distributions, networking between them and snapshots.",
      "intro": "Before you break a real server, it is better to break one that reverts with a click. That is what a virtual lab is for: several Linux distributions side by side, a private network between them, and snapshots that make every mistake reversible. This track builds that lab — the one you will then use throughout the Linux, networking and DevOps tracks."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مجازی‌سازی چیست",
          "d": "‏hypervisor نوع ۱ و ۲، و تفاوتش با کانتینر."
        },
        "en": {
          "t": "What virtualisation is",
          "d": "Type 1 and type 2 hypervisors, and how this differs from containers."
        },
        "kw": "hypervisor type1 type2 container comparison",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-virtualbox.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏VirtualBox",
          "d": "نصب، ساخت ماشین و ‎guest additions‎."
        },
        "en": {
          "t": "VirtualBox",
          "d": "Installing, creating a machine and guest additions."
        },
        "kw": "virtualbox vm guest additions vdi",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-kvm.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏KVM و ‎QEMU‎",
          "d": "مجازی‌سازی بومی لینوکس با ‎virt-manager‎."
        },
        "en": {
          "t": "KVM and QEMU",
          "d": "Native Linux virtualisation with virt-manager."
        },
        "kw": "kvm qemu libvirt virt-manager virsh",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-resources.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "منابع",
          "d": "‏CPU، RAM، دیسک و ‎overcommit‎."
        },
        "en": {
          "t": "Resources",
          "d": "CPU, RAM, disk and overcommitting."
        },
        "kw": "vcpu ram disk overcommit balloon",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-storage.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ذخیره‌سازی",
          "d": "‏qcow2، ‎thin provisioning‎ و افزودن دیسک."
        },
        "en": {
          "t": "Storage",
          "d": "qcow2, thin provisioning and adding disks."
        },
        "kw": "qcow2 raw thin provisioning lvm",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-snapshots.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏snapshot و کلون",
          "d": "برگشت به عقب، و کلون سریع برای آزمایش."
        },
        "en": {
          "t": "Snapshots and clones",
          "d": "Rolling back, and fast clones for experiments."
        },
        "kw": "snapshot clone linked restore",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-networking-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "شبکه ۱",
          "d": "‏NAT، bridge، host-only — و کدام برای کدام کار."
        },
        "en": {
          "t": "Networking 1",
          "d": "NAT, bridged, host-only — and which for what."
        },
        "kw": "nat bridge hostonly internal network mode",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-networking-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "شبکه ۲",
          "d": "شبکهٔ داخلی بین چند ماشین، و ‎ping‎ بینشان."
        },
        "en": {
          "t": "Networking 2",
          "d": "A private network between machines, and pinging across it."
        },
        "kw": "internal network subnet static ip route",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-distros.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "توزیع‌های لینوکس",
          "d": "‏Ubuntu، Debian، Rocky، Arch، Alpine — تفاوت‌های واقعی."
        },
        "en": {
          "t": "Linux distributions",
          "d": "Ubuntu, Debian, Rocky, Arch, Alpine — the real differences."
        },
        "kw": "ubuntu debian rocky arch alpine package",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-install.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "نصب چند توزیع",
          "d": "نصب دستی، پارتیشن‌بندی و اولین بوت."
        },
        "en": {
          "t": "Installing several distributions",
          "d": "Manual installation, partitioning and first boot."
        },
        "kw": "install partition bootloader grub iso",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-automation.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "خودکارسازی",
          "d": "‏Vagrant و ‎cloud-init‎: ساخت ماشین با یک فایل."
        },
        "en": {
          "t": "Automation",
          "d": "Vagrant and cloud-init: a machine from one file."
        },
        "kw": "vagrant cloud-init provisioning box",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-proxmox.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Proxmox",
          "d": "مجازی‌سازی سازمانی، ‎LXC‎ و پشتیبان‌گیری."
        },
        "en": {
          "t": "Proxmox",
          "d": "Enterprise virtualisation, LXC containers and backups."
        },
        "kw": "proxmox lxc cluster backup ve",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-wsl.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏WSL2 و مک",
          "d": "لینوکس روی ویندوز و مک، و محدودیت‌هایش."
        },
        "en": {
          "t": "WSL2 and macOS",
          "d": "Linux on Windows and macOS, and the limits."
        },
        "kw": "wsl2 hyperv utm multipass",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-troubleshoot.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "عیب‌یابی",
          "d": "بوت نشدن، شبکه نداشتن و کندی."
        },
        "en": {
          "t": "Troubleshooting",
          "d": "Failure to boot, no network, and slowness."
        },
        "kw": "troubleshoot boot network performance nested",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — اولین ماشین",
          "d": "نصب یک توزیع و دسترسی ‎SSH‎ از میزبان."
        },
        "en": {
          "t": "Project 1 — your first machine",
          "d": "Install a distribution and reach it over SSH from the host."
        },
        "kw": "capstone vm ssh",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — آزمایشگاه سه‌ماشینه",
          "d": "سه توزیع، یک شبکهٔ داخلی، ارتباط کامل."
        },
        "en": {
          "t": "Project 2 — a three-machine lab",
          "d": "Three distributions, one private network, full connectivity."
        },
        "kw": "capstone lab network",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 190,
        "fa": {
          "t": "پروژهٔ ۳ — آزمایشگاه خودکار",
          "d": "‏Vagrant، ‎cloud-init‎ و بازسازی کامل با یک دستور."
        },
        "en": {
          "t": "Project 3 — an automated lab",
          "d": "Vagrant, cloud-init and a full rebuild from one command."
        },
        "kw": "capstone vagrant automation",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1615,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "63-scrum-agile",
    "dir": "63-scrum-agile",
    "accent": "#0EA5E9",
    "accentDark": null,
    "cat": "career",
    "ico": "<path d=\"M20.4 12a8.4 8.4 0 1 1-3.4-6.7\" stroke-linecap=\"round\"/><path d=\"M20.6 4.4v4.4h-4.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"2.2\"/>",
    "locked": false,
    "fa": {
      "name": "اسکرام، اجایل و جیرا",
      "desc": "چارچوب اسکرام، نقش‌ها، رویدادها، تخمین، ‎backlog‎ و روند واقعی تحویل یک فیچر.",
      "intro": "بیشتر تیم‌هایی که می‌گویند «اسکرام کار می‌کنیم» در واقع جلسهٔ روزانهٔ طولانی دارند و ‎backlog‎ی که کسی نگاهش نمی‌کند. اسکرام یک چارچوب کوچک با قواعد کم است، و همان قواعد کم دلیل دارند. این مسیر هم چارچوب را دقیق می‌گوید و هم صادقانه نشان می‌دهد کجا در عمل شکست می‌خورد — و یک فیچر را از ایده تا production دنبال می‌کند."
    },
    "en": {
      "name": "Scrum, agile and Jira",
      "desc": "The Scrum framework, roles, events, estimation, backlogs and the real path a feature takes to delivery.",
      "intro": "Most teams that say “we do Scrum” actually have a long daily meeting and a backlog nobody reads. Scrum is a small framework with few rules, and those few rules have reasons. This track states the framework precisely and is honest about where it breaks down in practice — following one feature from idea to production."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-agile.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اجایل چیست",
          "d": "بیانیه، و چیزی که از آن برداشت غلط شد."
        },
        "en": {
          "t": "What agile is",
          "d": "The manifesto, and what got misread."
        },
        "kw": "agile manifesto principle waterfall",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-scrum-overview.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "چارچوب اسکرام",
          "d": "سه نقش، پنج رویداد، سه مصنوع."
        },
        "en": {
          "t": "The Scrum framework",
          "d": "Three roles, five events, three artefacts."
        },
        "kw": "scrum framework role event artifact",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-roles.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نقش‌ها",
          "d": "‏Product Owner، Scrum Master، تیم توسعه."
        },
        "en": {
          "t": "The roles",
          "d": "Product Owner, Scrum Master, developers."
        },
        "kw": "product owner scrum master team accountability",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-backlog.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏product backlog",
          "d": "اولویت‌بندی، ‎refinement‎ و ‎backlog‎ی که زنده است."
        },
        "en": {
          "t": "The product backlog",
          "d": "Prioritisation, refinement and a backlog that stays alive."
        },
        "kw": "backlog refinement priority grooming",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-user-stories.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏user story",
          "d": "نوشتن داستان خوب و معیار پذیرش."
        },
        "en": {
          "t": "User stories",
          "d": "Writing a good story and acceptance criteria."
        },
        "kw": "user story acceptance criteria invest",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-estimation.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "تخمین",
          "d": "‏story point، ‎planning poker‎ و چرا تخمین ساعتی خراب می‌شود."
        },
        "en": {
          "t": "Estimation",
          "d": "Story points, planning poker, and why hour estimates fail."
        },
        "kw": "story point planning poker velocity relative",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-sprint-planning.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏sprint planning",
          "d": "هدف اسپرینت، ظرفیت و تعهد."
        },
        "en": {
          "t": "Sprint planning",
          "d": "The sprint goal, capacity and commitment."
        },
        "kw": "sprint planning goal capacity commitment",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-daily.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏daily scrum",
          "d": "پانزده دقیقه، و اینکه چرا معمولاً یک ساعت می‌شود."
        },
        "en": {
          "t": "The daily scrum",
          "d": "Fifteen minutes, and why it usually becomes an hour."
        },
        "kw": "daily standup impediment sync",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-review-retro.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏review و ‎retrospective‎",
          "d": "نمایش کار، و بهبودی که واقعاً اجرا شود."
        },
        "en": {
          "t": "Review and retrospective",
          "d": "Showing the work, and improvements that actually happen."
        },
        "kw": "review retrospective demo improvement",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-dod.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Definition of Done",
          "d": "تعریفی که جلوی «تقریباً تمام شده» را می‌گیرد."
        },
        "en": {
          "t": "Definition of Done",
          "d": "The definition that kills “almost done”."
        },
        "kw": "definition of done ready quality gate",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-metrics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معیارها",
          "d": "‏velocity، ‎burndown‎، ‎lead time‎ — و سوءاستفاده از آن‌ها."
        },
        "en": {
          "t": "Metrics",
          "d": "Velocity, burndown, lead time — and how they get abused."
        },
        "kw": "velocity burndown cumulative flow lead time",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-kanban.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Kanban",
          "d": "جریان به‌جای اسپرینت، و ‎WIP limit‎."
        },
        "en": {
          "t": "Kanban",
          "d": "Flow instead of sprints, and WIP limits."
        },
        "kw": "kanban wip flow pull board",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-jira-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Jira: مبانی",
          "d": "پروژه، ‎issue‎، ‎workflow‎ و ‎board‎."
        },
        "en": {
          "t": "Jira: the basics",
          "d": "Projects, issues, workflows and boards."
        },
        "kw": "jira issue workflow board sprint",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-jira-advanced.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏Jira پیشرفته",
          "d": "‏JQL، خودکارسازی، گزارش و ‎epic‎."
        },
        "en": {
          "t": "Jira: advanced",
          "d": "JQL, automation, reports and epics."
        },
        "kw": "jql automation report epic filter dashboard",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-feature-flow.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "روند تحویل یک فیچر",
          "d": "از ایده تا production: هر مرحله و هر تحویل‌دادنی."
        },
        "en": {
          "t": "The path of a feature",
          "d": "From idea to production: every stage and every handover."
        },
        "kw": "feature flow lifecycle handover release",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-failures.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کجا اسکرام شکست می‌خورد",
          "d": "‏«اسکرام آبشاری»، و نشانه‌هایش."
        },
        "en": {
          "t": "Where Scrum fails",
          "d": "“Waterfall in sprints”, and how to spot it."
        },
        "kw": "antipattern dark scrum zombie failure",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — ‏backlog و داستان",
          "d": "یک محصول کوچک را به داستان بشکن و تخمین بزن."
        },
        "en": {
          "t": "Project 1 — backlog and stories",
          "d": "Break a small product into stories and estimate them."
        },
        "kw": "capstone backlog story",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — یک اسپرینت کامل",
          "d": "برنامه‌ریزی، تابلو، معیارها و ‎retrospective‎."
        },
        "en": {
          "t": "Project 2 — a complete sprint",
          "d": "Planning, the board, metrics and a retrospective."
        },
        "kw": "capstone sprint",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — راه‌اندازی جیرا برای یک تیم",
          "d": "‏workflow، خودکارسازی، گزارش و ‎DoD‎."
        },
        "en": {
          "t": "Project 3 — set up Jira for a team",
          "d": "Workflows, automation, reports and a Definition of Done."
        },
        "kw": "capstone jira setup",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1745,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "64-docs-writing",
    "dir": "64-docs-writing",
    "accent": "#475569",
    "accentDark": null,
    "cat": "career",
    "ico": "<path d=\"M6 3.4h8.4L19 8v12.6H6z\"/><path d=\"M14 3.4V8h5M9 12.4h7M9 16h5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "سندنویسی فنی",
      "desc": "‏SRS، BPMN، ‎ADR‎، مستند ‎API‎، ‎RFC‎ و نمودارهای ‎UML‎ — سندی که خوانده شود.",
      "intro": "سند بد از نبودِ سند بدتر است، چون به آن اعتماد می‌کنی و دروغ می‌گوید. نوشتن سند خوب یک مهارت مهندسی است، نه کار اداری: باید بدانی مخاطب کیست، چه تصمیمی می‌خواهد بگیرد، و چه چیزی را می‌شود حذف کرد. این مسیر انواع سند را با نمونهٔ واقعی نشان می‌دهد و در هرکدام می‌گوید چه چیزی را ننویسی."
    },
    "en": {
      "name": "Technical documentation",
      "desc": "SRS, BPMN, ADRs, API docs, RFCs and UML diagrams — documents people actually read.",
      "intro": "A bad document is worse than none, because you trust it and it lies. Writing well is an engineering skill, not clerical work: you must know who the reader is, what decision they are making, and what can be left out. This track walks through each document type with a real example and, for each, says what not to write."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا سند",
          "d": "هزینهٔ ننوشتن، و هزینهٔ زیاد نوشتن."
        },
        "en": {
          "t": "Why document at all",
          "d": "The cost of not writing, and the cost of writing too much."
        },
        "kw": "documentation cost audience purpose",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-audience.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مخاطب و هدف",
          "d": "برای که می‌نویسی و او چه تصمیمی دارد."
        },
        "en": {
          "t": "Audience and purpose",
          "d": "Who you write for and what they must decide."
        },
        "kw": "audience purpose scope decision",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-requirements.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "استخراج نیاز",
          "d": "مصاحبه، سؤال درست و نیاز پنهان."
        },
        "en": {
          "t": "Eliciting requirements",
          "d": "Interviews, the right questions and hidden needs."
        },
        "kw": "elicitation interview stakeholder requirement",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-srs.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏SRS",
          "d": "سند نیازمندی نرم‌افزار: ساختار، نیاز کارکردی و غیرکارکردی."
        },
        "en": {
          "t": "SRS",
          "d": "A software requirements specification: structure, functional and non-functional needs."
        },
        "kw": "srs requirement functional nonfunctional ieee",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-user-stories.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "داستان و معیار پذیرش",
          "d": "سبک چابک در برابر ‎SRS‎ سنگین."
        },
        "en": {
          "t": "Stories and acceptance criteria",
          "d": "The agile style versus a heavy SRS."
        },
        "kw": "user story acceptance gherkin criteria",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-uml-structure.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏UML ساختاری",
          "d": "نمودار کلاس، مؤلفه و استقرار."
        },
        "en": {
          "t": "Structural UML",
          "d": "Class, component and deployment diagrams."
        },
        "kw": "uml class component deployment diagram",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-uml-behavior.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏UML رفتاری",
          "d": "‏use case، توالی، فعالیت و وضعیت."
        },
        "en": {
          "t": "Behavioural UML",
          "d": "Use case, sequence, activity and state diagrams."
        },
        "kw": "uml usecase sequence activity state",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-bpmn.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏BPMN",
          "d": "مدل‌سازی فرایند کسب‌وکار: رویداد، فعالیت، دروازه و ‎lane‎."
        },
        "en": {
          "t": "BPMN",
          "d": "Business process modelling: events, activities, gateways and lanes."
        },
        "kw": "bpmn process gateway lane event task",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-bpms.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏BPMS",
          "d": "از نمودار تا فرایند اجراشدنی: ‎Camunda‎ و مانند آن."
        },
        "en": {
          "t": "BPMS",
          "d": "From diagram to executable process: Camunda and friends."
        },
        "kw": "bpms camunda workflow engine executable",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-c4-adr.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏C4 و ‎ADR‎",
          "d": "سند معماری: زمینه تا کد، و ثبت تصمیم."
        },
        "en": {
          "t": "C4 and ADRs",
          "d": "Architecture documentation: context to code, and recording decisions."
        },
        "kw": "c4 adr context container decision record",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-api-docs.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مستند ‎API‎",
          "d": "‏OpenAPI، مثال، خطا و نسخه."
        },
        "en": {
          "t": "API documentation",
          "d": "OpenAPI, examples, errors and versioning."
        },
        "kw": "openapi swagger example error reference",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-readme.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏README و راهنمای کاربر",
          "d": "اولین سؤال خواننده را اول جواب بده."
        },
        "en": {
          "t": "READMEs and user guides",
          "d": "Answer the reader's first question first."
        },
        "kw": "readme quickstart tutorial howto diataxis",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-rfc.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏RFC و طرح فنی",
          "d": "پیشنهاد تغییر بزرگ، و گرفتن بازخورد قبل از کد."
        },
        "en": {
          "t": "RFCs and design docs",
          "d": "Proposing a large change and getting feedback before code."
        },
        "kw": "rfc design doc proposal review",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-diagrams.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نمودار خوب",
          "d": "‏Mermaid، PlantUML و قاعده‌های خوانایی."
        },
        "en": {
          "t": "Good diagrams",
          "d": "Mermaid, PlantUML and the rules of legibility."
        },
        "kw": "mermaid plantuml diagram legibility",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-maintenance.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نگه‌داشتن سند زنده",
          "d": "سندی که با کد به‌روز می‌ماند، نه سندی که می‌پوسد."
        },
        "en": {
          "t": "Keeping docs alive",
          "d": "Documentation that updates with the code instead of rotting."
        },
        "kw": "docs as code review rot changelog",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — ‏SRS یک سامانهٔ کوچک",
          "d": "از مصاحبه تا سند کامل."
        },
        "en": {
          "t": "Project 1 — an SRS for a small system",
          "d": "From interview to a complete document."
        },
        "kw": "capstone srs",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — مدل‌سازی فرایند با ‎BPMN‎",
          "d": "یک فرایند سازمانی واقعی."
        },
        "en": {
          "t": "Project 2 — process modelling with BPMN",
          "d": "A real organisational process."
        },
        "kw": "capstone bpmn",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — بستهٔ سند معماری",
          "d": "‏C4، ‎ADR‎، مستند ‎API‎ و ‎README‎."
        },
        "en": {
          "t": "Project 3 — an architecture documentation set",
          "d": "C4, ADRs, API docs and a README."
        },
        "kw": "capstone c4 adr",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1710,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "65-presentation",
    "dir": "65-presentation",
    "accent": "#DB2777",
    "accentDark": null,
    "cat": "career",
    "ico": "<path d=\"M12 3.4a3 3 0 0 1 3 3v4.4a3 3 0 0 1-6 0V6.4a3 3 0 0 1 3-3z\"/><path d=\"M6.4 11.4a5.6 5.6 0 0 0 11.2 0M12 17v3.6M9 20.6h6\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "ارائه، سخنرانی و رهبری فنی",
      "desc": "ساختن ارائهٔ فنی، سخنرانی بدون اضطراب، بازبینی کد محترمانه و رشد به سمت ‎tech lead‎.",
      "intro": "در سطحی از کار، کیفیت کدت دیگر تعیین‌کننده نیست — توانایی‌ات در توضیح دادن، متقاعد کردن و هماهنگ کردن آدم‌ها تعیین‌کننده می‌شود. این مهارت‌ها ذاتی نیستند؛ قابل تمرین‌اند، درست مثل الگوریتم. این مسیر آن‌ها را مثل مهارت فنی برخورد می‌کند: با ساختار، تمرین و بازخورد."
    },
    "en": {
      "name": "Presenting, speaking and tech leadership",
      "desc": "Building a technical talk, speaking without dread, reviewing code respectfully, and growing into a tech lead.",
      "intro": "Past a certain point, the quality of your code stops being the deciding factor and your ability to explain, persuade and align people takes over. These are not innate traits; they are practisable, exactly like algorithms. This track treats them as technical skills: structure, practice and feedback."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-structure.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "ساختار یک ارائه",
          "d": "پیام اصلی، قوس روایت و آنچه باید حذف شود."
        },
        "en": {
          "t": "Structuring a talk",
          "d": "The core message, the narrative arc, and what to cut."
        },
        "kw": "structure narrative message outline",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-audience.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "شناخت مخاطب",
          "d": "همان محتوا، برای مدیر و برای مهندس — دو ارائهٔ متفاوت."
        },
        "en": {
          "t": "Knowing your audience",
          "d": "The same content for a manager and an engineer is two different talks."
        },
        "kw": "audience level context executive",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-slides.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اسلاید خوب",
          "d": "کمتر متن، بیشتر معنا — و قاعده‌های خوانایی."
        },
        "en": {
          "t": "Good slides",
          "d": "Less text, more meaning — and the rules of legibility."
        },
        "kw": "slide design contrast font density",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-visuals.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نمودار در ارائه",
          "d": "نموداری که در ده ثانیه فهمیده شود."
        },
        "en": {
          "t": "Visuals in a talk",
          "d": "A diagram understood in ten seconds."
        },
        "kw": "diagram chart visual simplify",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-demo.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "دموی زنده",
          "d": "چطور دمو بدهی که خراب نشود — و اگر شد چه کنی."
        },
        "en": {
          "t": "Live demos",
          "d": "How to demo without it breaking — and what to do when it does."
        },
        "kw": "demo backup recording failure",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-delivery.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "اجرا",
          "d": "صدا، مکث، تماس چشمی و سرعت."
        },
        "en": {
          "t": "Delivery",
          "d": "Voice, pauses, eye contact and pace."
        },
        "kw": "delivery voice pace pause body language",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-anxiety.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اضطراب",
          "d": "چیزی که از بین نمی‌رود، ولی مهارش می‌شود."
        },
        "en": {
          "t": "Stage anxiety",
          "d": "It does not disappear, but it becomes manageable."
        },
        "kw": "anxiety preparation breathing rehearsal",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-qa.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پرسش و پاسخ",
          "d": "سؤال سخت، سؤال خصمانه، و «نمی‌دانم»."
        },
        "en": {
          "t": "Questions and answers",
          "d": "Hard questions, hostile questions, and “I don't know”."
        },
        "kw": "qa question hostile honest",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-writing-persuasive.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نوشتن متقاعدکننده",
          "d": "پیشنهاد فنی که پذیرفته شود."
        },
        "en": {
          "t": "Persuasive writing",
          "d": "A technical proposal that gets accepted."
        },
        "kw": "persuasion proposal argument evidence",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-meetings.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "جلسهٔ مفید",
          "d": "دستور کار، تصمیم و پیگیری."
        },
        "en": {
          "t": "Useful meetings",
          "d": "Agenda, decisions and follow-up."
        },
        "kw": "meeting agenda decision facilitation",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-code-review.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "بازبینی کد",
          "d": "نقد کد بدون تحقیر آدم — و پذیرش نقد."
        },
        "en": {
          "t": "Code review",
          "d": "Critiquing code without diminishing the person — and taking criticism."
        },
        "kw": "code review feedback tone nitpick",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-mentoring.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "راهنمایی و آموزش",
          "d": "بزرگ کردن دیگران، به‌جای انجام دادن کارشان."
        },
        "en": {
          "t": "Mentoring",
          "d": "Growing others instead of doing their work."
        },
        "kw": "mentoring pairing teaching growth",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-techlead.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏tech lead شدن",
          "d": "از «بهترین کدنویس» به «کسی که تیم را جلو می‌برد»."
        },
        "en": {
          "t": "Becoming a tech lead",
          "d": "From best coder to the person who moves the team forward."
        },
        "kw": "tech lead responsibility delegation influence",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-conflict.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "اختلاف فنی",
          "d": "وقتی دو نفر هر دو منطق دارند."
        },
        "en": {
          "t": "Technical disagreement",
          "d": "When two people are both being reasonable."
        },
        "kw": "conflict disagree commit tradeoff",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-stakeholders.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "گفت‌وگو با غیرفنی‌ها",
          "d": "ترجمهٔ ریسک فنی به زبان کسب‌وکار."
        },
        "en": {
          "t": "Talking to non-technical people",
          "d": "Translating technical risk into business language."
        },
        "kw": "stakeholder business risk translation",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — ارائهٔ پنج‌دقیقه‌ای",
          "d": "یک موضوع فنی، پنج دقیقه، ضبط و بازبینی."
        },
        "en": {
          "t": "Project 1 — a five-minute talk",
          "d": "One technical topic, five minutes, recorded and reviewed."
        },
        "kw": "capstone lightning talk",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — طرح فنی و دفاع از آن",
          "d": "بنویس، ارائه بده، به سؤال‌ها جواب بده."
        },
        "en": {
          "t": "Project 2 — a design doc and its defence",
          "d": "Write it, present it, answer the questions."
        },
        "kw": "capstone design doc",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — کارگاه فنی",
          "d": "یک موضوع را به دیگران آموزش بده و بازخورد بگیر."
        },
        "en": {
          "t": "Project 3 — run a technical workshop",
          "d": "Teach a topic to others and collect feedback."
        },
        "kw": "capstone workshop teaching",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1655,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "66-html",
    "dir": "66-html",
    "accent": "#E34F26",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M4.2 3h15.6l-1.4 15.8L12 21l-6.4-2.2z\"/><path d=\"M8 7.6h8l-.4 4.2H9.4l.2 2.4 2.4.6 2.4-.6.2-1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "HTML",
      "desc": "سند معنایی، فرم، جدول، رسانه، دسترس‌پذیری و ‎SEO‎ — زبانی که همهٔ وب رویش سوار است.",
      "intro": "‏HTML را همه فکر می‌کنند بلدند چون چند تگ می‌شناسند. اما HTML یک زبان نشانه‌گذاری معنایی است، نه فهرستی از تگ‌ها: انتخاب درست تگ تعیین می‌کند صفحه‌خوان چه بخواند، گوگل چه بفهمد، و مرورگر بدون یک خط جاوااسکریپت چه رفتاری بدهد. این مسیر همان معنا را یاد می‌دهد — و در راه، مقدار زیادی جاوااسکریپتِ لازم‌نشده را از تو می‌گیرد."
    },
    "en": {
      "name": "HTML",
      "desc": "Semantic documents, forms, tables, media, accessibility and SEO — the language the whole web rests on.",
      "intro": "Everyone thinks they know HTML because they know a few tags. But HTML is a semantic markup language, not a tag list: choosing the right element decides what a screen reader announces, what Google understands, and what the browser does for free without a line of JavaScript. This track teaches that meaning — and along the way removes a great deal of JavaScript you never needed."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-document.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "سند و درخت",
          "d": "‏HTML یک سند است نه بوم نقاشی. ساختار درختی و ‎DOM‎."
        },
        "en": {
          "t": "The document and its tree",
          "d": "HTML is a document, not a canvas. The tree structure and the DOM."
        },
        "kw": "html document dom tree parse",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-anatomy.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کالبد یک صفحه",
          "d": "‏doctype، head، meta، charset و ترتیبی که مهم است."
        },
        "en": {
          "t": "Anatomy of a page",
          "d": "doctype, head, meta, charset, and the order that matters."
        },
        "kw": "doctype head meta charset viewport",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-text.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "متن",
          "d": "عنوان‌بندی، پاراگراف، نقل‌قول، ‎strong‎ در برابر ‎b‎."
        },
        "en": {
          "t": "Text",
          "d": "Headings, paragraphs, quotations, strong versus b."
        },
        "kw": "heading paragraph strong em blockquote",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-semantic.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "معناشناسی",
          "d": "‏article، section، nav، aside — و اینکه ‎div‎ کِی درست است."
        },
        "en": {
          "t": "Semantics",
          "d": "article, section, nav, aside — and when a div is genuinely right."
        },
        "kw": "semantic landmark article section outline",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-links.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "پیوند",
          "d": "‏href، هدف، ‎rel‎ و پیوند امن به بیرون."
        },
        "en": {
          "t": "Links",
          "d": "href, targets, rel, and linking outward safely."
        },
        "kw": "anchor href rel noopener target",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-lists.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "فهرست",
          "d": "‏ul، ol، dl و کاربرد واقعی هرکدام."
        },
        "en": {
          "t": "Lists",
          "d": "ul, ol, dl and where each genuinely belongs."
        },
        "kw": "list ul ol dl definition",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-images.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تصویر و رسانه",
          "d": "‏alt، srcset، picture، ویدیو و زیرنویس."
        },
        "en": {
          "t": "Images and media",
          "d": "alt, srcset, picture, video and captions."
        },
        "kw": "img alt srcset picture video track",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-tables.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "جدول",
          "d": "جدول دادهٔ درست: ‎thead‎، ‎scope‎ و ‎caption‎."
        },
        "en": {
          "t": "Tables",
          "d": "A correct data table: thead, scope and caption."
        },
        "kw": "table thead scope caption colspan",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-forms-1.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "فرم ۱",
          "d": "‏input، label، نوع‌های ورودی و ‎name‎."
        },
        "en": {
          "t": "Forms 1",
          "d": "Inputs, labels, input types and name."
        },
        "kw": "form input label type name placeholder",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-forms-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "فرم ۲",
          "d": "اعتبارسنجی داخلی مرورگر، بدون جاوااسکریپت."
        },
        "en": {
          "t": "Forms 2",
          "d": "The browser's built-in validation, with no JavaScript."
        },
        "kw": "validation required pattern constraint novalidate",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-forms-3.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "فرم ۳",
          "d": "‏select، datalist، fieldset، آپلود و ارسال."
        },
        "en": {
          "t": "Forms 3",
          "d": "select, datalist, fieldset, file upload and submission."
        },
        "kw": "select datalist fieldset file submit",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-interactive.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "عناصر تعاملی",
          "d": "‏details، dialog، progress — رفتار رایگان از مرورگر."
        },
        "en": {
          "t": "Interactive elements",
          "d": "details, dialog, progress — free behaviour from the browser."
        },
        "kw": "details dialog progress meter popover",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-a11y.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "دسترس‌پذیری",
          "d": "‏ARIA، ترتیب فوکوس، و اینکه HTML درست ۹۰٪ کار را می‌کند."
        },
        "en": {
          "t": "Accessibility",
          "d": "ARIA, focus order, and how correct HTML does 90% of the work."
        },
        "kw": "aria role focus screen reader tabindex",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-seo.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏HTML و SEO",
          "d": "‏title، توضیح، داده‌های ساخت‌یافته و ‎sitemap‎."
        },
        "en": {
          "t": "HTML and SEO",
          "d": "Titles, descriptions, structured data and sitemaps."
        },
        "kw": "seo title meta schema jsonld canonical",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-rtl.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "فارسی و ‎RTL‎",
          "d": "‏dir، ‎lang‎، متن دوجهته و عدد فارسی."
        },
        "en": {
          "t": "Persian and RTL",
          "d": "dir, lang, bidirectional text and Persian numerals."
        },
        "kw": "rtl dir lang bidi persian",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-embed.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "جاسازی و امنیت",
          "d": "‏iframe، ‎sandbox‎ و محتوای بیرونی."
        },
        "en": {
          "t": "Embedding and safety",
          "d": "iframes, sandboxing and third-party content."
        },
        "kw": "iframe sandbox embed csp",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-validation.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "اعتبارسنجی و ابزار",
          "d": "اعتبارسنج ‎W3C‎ و خطاهای رایج ساختاری."
        },
        "en": {
          "t": "Validation and tooling",
          "d": "The W3C validator and common structural errors."
        },
        "kw": "validator w3c lint nesting error",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — رزومهٔ معنایی",
          "d": "یک صفحهٔ کامل، فقط با ‎HTML‎ درست."
        },
        "en": {
          "t": "Project 1 — a semantic résumé",
          "d": "One complete page, with correct HTML alone."
        },
        "kw": "capstone semantic resume",
        "cap": 1
      },
      {
        "n": "19",
        "file": "19-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — فرم چندمرحله‌ای",
          "d": "اعتبارسنجی کامل بدون یک خط جاوااسکریپت."
        },
        "en": {
          "t": "Project 2 — a multi-step form",
          "d": "Full validation without a line of JavaScript."
        },
        "kw": "capstone form validation",
        "cap": 2
      },
      {
        "n": "20",
        "file": "20-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — صفحهٔ کاملاً دسترس‌پذیر",
          "d": "تست با صفحه‌خوان، کیبورد و اعتبارسنج."
        },
        "en": {
          "t": "Project 3 — a fully accessible page",
          "d": "Tested with a screen reader, the keyboard and the validator."
        },
        "kw": "capstone accessibility audit",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 20,
      "exercises": 327,
      "minutes": 1770,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "67-css",
    "dir": "67-css",
    "accent": "#2965F1",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M4.2 3h15.6l-1.4 15.8L12 21l-6.4-2.2z\"/><path d=\"M15.8 7.6H8.6l.3 3.2h6.6l-.4 3.6-3.1.8-3.1-.8-.2-1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "CSS",
      "desc": "آبشار، مدل جعبه، Flexbox، Grid، متغیر، انیمیشن، ‎RTL‎ و کارایی رندر.",
      "intro": "بیشتر ناامیدی از ‎CSS‎ از یک چیز می‌آید: آدم‌ها خاصیت‌ها را حفظ می‌کنند ولی مدل زیرین را نه. چرا این ‎margin‎ اعمال نشد، چرا آن عنصر وسط نمی‌آید، چرا ‎z-index‎ کار نمی‌کند — همه جواب دقیق دارند، و همه از سه مفهوم می‌آیند: آبشار، جریان، و بافت انباشت. این مسیر آن سه را محکم می‌کند، بعد می‌رود سراغ چیدمان."
    },
    "en": {
      "name": "CSS",
      "desc": "The cascade, the box model, Flexbox, Grid, custom properties, animation, RTL and render performance.",
      "intro": "Most frustration with CSS comes from one thing: people memorise properties but not the underlying model. Why that margin did not apply, why the element will not centre, why z-index does nothing — each has an exact answer, and they all come from three ideas: the cascade, flow, and stacking contexts. This track makes those solid, then moves to layout."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-cascade.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "آبشار و ویژگی",
          "d": "منشأ بیشتر «چرا اعمال نمی‌شود؟»"
        },
        "en": {
          "t": "The cascade and specificity",
          "d": "The source of most “why is this not applying?”"
        },
        "kw": "cascade specificity inherit important layer",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-selectors.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "انتخابگرها",
          "d": "ترکیبی، شبه‌کلاس، ‎:has()‎ و ‎:is()‎."
        },
        "en": {
          "t": "Selectors",
          "d": "Combinators, pseudo-classes, :has() and :is()."
        },
        "kw": "selector pseudo class has is where nth",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-box-model.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مدل جعبه",
          "d": "‏margin، padding، border و ‎border-box‎."
        },
        "en": {
          "t": "The box model",
          "d": "margin, padding, border and border-box."
        },
        "kw": "box model border-box collapse overflow",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-flow.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "جریان سند",
          "d": "‏block، inline، ‎inline-block‎ و ‎BFC‎."
        },
        "en": {
          "t": "Document flow",
          "d": "block, inline, inline-block and block formatting contexts."
        },
        "kw": "flow block inline bfc float clear",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-units.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "واحدها",
          "d": "‏px، rem، em، ‎%‎، ‎vh‎، ‎ch‎ و ‎clamp()‎."
        },
        "en": {
          "t": "Units",
          "d": "px, rem, em, %, vh, ch and clamp()."
        },
        "kw": "unit rem em vh clamp calc",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-color.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "رنگ",
          "d": "‏hex، ‎hsl‎، ‎oklch‎، شفافیت و ‎color-mix()‎."
        },
        "en": {
          "t": "Colour",
          "d": "hex, hsl, oklch, alpha and color-mix()."
        },
        "kw": "color hsl oklch opacity color-mix contrast",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-typography.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تایپوگرافی",
          "d": "خط، فاصله، ‎font-face‎ و فونت متغیر."
        },
        "en": {
          "t": "Typography",
          "d": "Line height, spacing, font-face and variable fonts."
        },
        "kw": "font typography line-height woff2 variable",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-flexbox.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "Flexbox",
          "d": "چیدمان یک‌بعدی — و اینکه هر خاصیت روی کدام محور اثر دارد."
        },
        "en": {
          "t": "Flexbox",
          "d": "One-dimensional layout — and which axis each property affects."
        },
        "kw": "flex justify align gap basis grow shrink",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-grid-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "Grid ۱",
          "d": "ستون، ردیف، ‎fr‎ و ‎gap‎."
        },
        "en": {
          "t": "Grid 1",
          "d": "Columns, rows, fr units and gap."
        },
        "kw": "grid template columns rows fr gap",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-grid-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "Grid ۲",
          "d": "ناحیهٔ نام‌دار، ‎auto-fit‎، ‎minmax‎ و چیدمان زیرشبکه."
        },
        "en": {
          "t": "Grid 2",
          "d": "Named areas, auto-fit, minmax and subgrid."
        },
        "kw": "grid area autofit minmax subgrid dense",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-position.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "موقعیت و لایه",
          "d": "‏sticky، ‎absolute‎ و بافت انباشت ‎z-index‎."
        },
        "en": {
          "t": "Positioning and layers",
          "d": "sticky, absolute and the z-index stacking context."
        },
        "kw": "position sticky absolute z-index stacking",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-responsive.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "واکنش‌گرایی",
          "d": "‏media query، ‎container query‎ و طراحی سیال."
        },
        "en": {
          "t": "Responsive design",
          "d": "Media queries, container queries and fluid design."
        },
        "kw": "responsive media container query breakpoint",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-variables.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "متغیرهای ‎CSS‎",
          "d": "‏custom property، دامنه، و ساخت تم تاریک."
        },
        "en": {
          "t": "CSS custom properties",
          "d": "Custom properties, scope, and building a dark theme."
        },
        "kw": "variable custom property theme dark scope",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-transitions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "گذار و انیمیشن",
          "d": "‏transition، ‎keyframes‎ و حرکتی که آزار ندهد."
        },
        "en": {
          "t": "Transitions and animation",
          "d": "transitions, keyframes and motion that does not annoy."
        },
        "kw": "transition animation keyframes reduced motion",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-transforms.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تبدیل",
          "d": "‏translate، ‎scale‎، ‎rotate‎ و سه‌بعدی."
        },
        "en": {
          "t": "Transforms",
          "d": "translate, scale, rotate and 3D."
        },
        "kw": "transform translate scale rotate perspective",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-rtl.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏RTL و خاصیت منطقی",
          "d": "‏inline-start به‌جای ‎left‎ — درس اصلی برای فارسی."
        },
        "en": {
          "t": "RTL and logical properties",
          "d": "inline-start instead of left — the key lesson for Persian."
        },
        "kw": "rtl logical inline-start direction margin-inline",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری ‎CSS‎",
          "d": "‏BEM، لایه‌بندی و کدی که بشود حذفش کرد."
        },
        "en": {
          "t": "CSS architecture",
          "d": "BEM, layering, and code you can safely delete."
        },
        "kw": "bem architecture layer naming scope",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کارایی رندر",
          "d": "‏reflow، ‎repaint‎، ‎contain‎ و اسکرول روان."
        },
        "en": {
          "t": "Render performance",
          "d": "Reflow, repaint, contain and smooth scrolling."
        },
        "kw": "reflow repaint contain will-change compositing",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-modern.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏CSS مدرن",
          "d": "‏@layer، ‎@container‎، ‎:has()‎، ‎nesting‎ و ‎@supports‎."
        },
        "en": {
          "t": "Modern CSS",
          "d": "@layer, @container, :has(), nesting and @supports."
        },
        "kw": "layer container has nesting supports",
        "cap": 0
      },
      {
        "n": "20",
        "file": "20-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — چیدمان صفحه",
          "d": "یک صفحهٔ کامل با ‎Grid‎ و ‎Flexbox‎."
        },
        "en": {
          "t": "Project 1 — a page layout",
          "d": "A full page with Grid and Flexbox."
        },
        "kw": "capstone layout",
        "cap": 1
      },
      {
        "n": "21",
        "file": "21-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — سیستم تم",
          "d": "توکن، تم روشن و تاریک، و ‎RTL‎."
        },
        "en": {
          "t": "Project 2 — a theming system",
          "d": "Tokens, light and dark themes, and RTL."
        },
        "kw": "capstone theme tokens",
        "cap": 2
      },
      {
        "n": "22",
        "file": "22-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — رابط کامل بدون فریم‌ورک",
          "d": "واکنش‌گرا، دسترس‌پذیر و با اسکرول روان."
        },
        "en": {
          "t": "Project 3 — a complete UI, no framework",
          "d": "Responsive, accessible and smooth-scrolling."
        },
        "kw": "capstone ui performance",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 22,
      "exercises": 363,
      "minutes": 2045,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "68-sass",
    "dir": "68-sass",
    "accent": "#CD6799",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M3.4 12.4c3-5.4 8.8-7.8 13-7 2.6.5 3.8 2.2 3.2 3.8-1 2.6-5.6 3-8.6 1.6-2.4-1.1-2-3 .4-2.6\" stroke-linecap=\"round\"/><path d=\"M20.6 13.6c-2.6 4.6-7.6 6.8-11.4 6.2\" stroke-linecap=\"round\" opacity=\".75\"/>",
    "locked": false,
    "fa": {
      "name": "Sass",
      "desc": "متغیر، تودرتویی، ‎mixin‎، تابع، ماژول و معماری ‎7-1‎ — ‎CSS‎ در مقیاس.",
      "intro": "‏Sass اولین چیزی بود که ‎CSS‎ را قابل مدیریت کرد، و با اینکه ‎CSS‎ امروز خیلی از قابلیت‌هایش را دارد، هنوز جایی می‌ماند که ‎CSS‎ نمی‌رسد: منطق در زمان کامپایل. این مسیر یاد می‌دهد کجا ‎Sass‎ هنوز ارزش دارد و کجا فقط پیچیدگی اضافه است — چون بخش زیادی از ‎Sass‎ی که تیم‌ها می‌نویسند، امروز با ‎CSS‎ خام ساده‌تر است."
    },
    "en": {
      "name": "Sass",
      "desc": "Variables, nesting, mixins, functions, modules and the 7-1 architecture — CSS at scale.",
      "intro": "Sass was the first thing that made CSS manageable, and although modern CSS has absorbed many of its features, it still reaches where CSS cannot: logic at compile time. This track shows where Sass still earns its place and where it is now just extra complexity — because much of the Sass teams write today is simpler in plain CSS."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "چرا ‎Sass‎ آمد",
          "d": "مسئله‌ای که ‎CSS‎ آن زمان نداشت."
        },
        "en": {
          "t": "Why Sass appeared",
          "d": "The problem CSS did not solve at the time."
        },
        "kw": "sass scss why preprocessor history",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-setup.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "راه‌اندازی",
          "d": "‏dart-sass، ‎watch‎ و یکپارچگی با ابزار بیلد."
        },
        "en": {
          "t": "Getting set up",
          "d": "dart-sass, watching, and build-tool integration."
        },
        "kw": "install dart sass watch cli vite",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-syntax.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "نحو",
          "d": "‏SCSS در برابر نحو تورفته."
        },
        "en": {
          "t": "Syntax",
          "d": "SCSS versus the indented syntax."
        },
        "kw": "scss sass syntax indented",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-variables.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "متغیر",
          "d": "متغیر ‎Sass‎ در برابر ‎custom property‎ — تفاوت مهم."
        },
        "en": {
          "t": "Variables",
          "d": "Sass variables versus CSS custom properties — an important difference."
        },
        "kw": "variable custom property compile runtime",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-nesting.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تودرتویی",
          "d": "قدرتش، و دامی که ویژگی را منفجر می‌کند."
        },
        "en": {
          "t": "Nesting",
          "d": "Its power, and the trap that explodes specificity."
        },
        "kw": "nesting ampersand specificity depth",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-partials.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏partial و ماژول",
          "d": "‏@use و ‎@forward‎ به‌جای ‎@import‎ منسوخ."
        },
        "en": {
          "t": "Partials and modules",
          "d": "@use and @forward instead of the deprecated @import."
        },
        "kw": "partial use forward import namespace",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-mixins.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‎mixin‎",
          "d": "کد قابل استفادهٔ مجدد با پارامتر و بلوک محتوا."
        },
        "en": {
          "t": "Mixins",
          "d": "Reusable code with parameters and content blocks."
        },
        "kw": "mixin include content parameter default",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تابع",
          "d": "تابع خودت، و توابع داخلی رنگ و ریاضی."
        },
        "en": {
          "t": "Functions",
          "d": "Your own functions, plus the built-in colour and maths modules."
        },
        "kw": "function return math color module",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-control.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کنترل جریان",
          "d": "‏@if، ‎@each‎، ‎@for‎ و تولید کلاس."
        },
        "en": {
          "t": "Control flow",
          "d": "@if, @each, @for and generating classes."
        },
        "kw": "if each for while map list",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-maps.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏map",
          "d": "توکن طراحی به‌صورت ساختار داده."
        },
        "en": {
          "t": "Maps",
          "d": "Design tokens as a data structure."
        },
        "kw": "map get merge keys token",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-extend.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‎@extend‎",
          "d": "چرا معمولاً باید از ‎mixin‎ استفاده کنی نه این."
        },
        "en": {
          "t": "@extend",
          "d": "Why you should usually reach for a mixin instead."
        },
        "kw": "extend placeholder selector output",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "معماری ‎7-1‎",
          "d": "ساختار پوشه‌ای که در پروژهٔ بزرگ دوام می‌آورد."
        },
        "en": {
          "t": "The 7-1 architecture",
          "d": "A folder structure that survives a large project."
        },
        "kw": "7-1 architecture folder abstract layout",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-bem.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏BEM با ‎Sass‎",
          "d": "نام‌گذاری منظم و ‎&__element‎."
        },
        "en": {
          "t": "BEM with Sass",
          "d": "Disciplined naming and &__element."
        },
        "kw": "bem naming block element modifier",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-modern-css.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Sass یا ‎CSS‎ مدرن؟",
          "d": "چه چیزی را دیگر لازم نداری."
        },
        "en": {
          "t": "Sass or modern CSS?",
          "d": "What you no longer need it for."
        },
        "kw": "nesting variable modern css comparison",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — بازنویسی با ‎Sass‎",
          "d": "یک ‎CSS‎ تکراری را ماژولار کن."
        },
        "en": {
          "t": "Project 1 — refactor into Sass",
          "d": "Make a repetitive stylesheet modular."
        },
        "kw": "capstone refactor",
        "cap": 1
      },
      {
        "n": "16",
        "file": "16-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — سیستم توکن",
          "d": "‏map، تابع و تولید خودکار کلاس‌ها."
        },
        "en": {
          "t": "Project 2 — a token system",
          "d": "Maps, functions and generated utility classes."
        },
        "kw": "capstone token map",
        "cap": 2
      },
      {
        "n": "17",
        "file": "17-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۳ — کتابخانهٔ استایل",
          "d": "ساختار ‎7-1‎، تم، ‎RTL‎ و مستندات."
        },
        "en": {
          "t": "Project 3 — a style library",
          "d": "7-1 structure, theming, RTL and documentation."
        },
        "kw": "capstone library",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 17,
      "exercises": 273,
      "minutes": 1485,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "69-tailwind",
    "dir": "69-tailwind",
    "accent": "#06B6D4",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<path d=\"M7.4 10.4c.6-2.6 2.3-3.9 5-3.9 4 0 4.5 3 6.6 3.5 1.3.3 2.5-.2 3.5-1.5-.6 2.6-2.3 3.9-5 3.9-4 0-4.5-3-6.6-3.5-1.3-.3-2.5.2-3.5 1.5z\"/><path d=\"M1.5 17c.6-2.6 2.3-3.9 5-3.9 4 0 4.5 3 6.6 3.5 1.3.3 2.5-.2 3.5-1.5-.6 2.6-2.3 3.9-5 3.9-4 0-4.5-3-6.6-3.5-1.3-.3-2.5.2-3.5 1.5z\"/>",
    "locked": false,
    "fa": {
      "name": "Tailwind CSS",
      "desc": "‏utility-first، پیکربندی، توکن طراحی، ‎variant‎، پلاگین، ‎RTL‎ و بهینه‌سازی باندل.",
      "intro": "اولین واکنش تقریباً همه به ‎Tailwind‎ این است: «این که همان ‎inline style‎ است.» نیست، و تفاوتش دقیقاً همان چیزی است که ارزشش را می‌سازد — مجموعه‌ای محدود از مقادیر مجاز، یعنی یک سیستم طراحی که رعایتش اجباری است. این مسیر از همان جا شروع می‌کند، و بعد نشان می‌دهد کجا ‎Tailwind‎ واقعاً اذیت می‌کند."
    },
    "en": {
      "name": "Tailwind CSS",
      "desc": "Utility-first, configuration, design tokens, variants, plugins, RTL and bundle optimisation.",
      "intro": "Almost everyone's first reaction to Tailwind is: “this is just inline styles.” It is not, and the difference is exactly what makes it valuable — a constrained set of permitted values, which is to say a design system you cannot casually break. This track starts there, then shows honestly where Tailwind does get in the way."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏utility-first",
          "d": "چرا کلاس زیاد در ‎HTML‎ لزوماً بد نیست."
        },
        "en": {
          "t": "Utility-first",
          "d": "Why many classes in your HTML is not necessarily bad."
        },
        "kw": "utility first atomic inline comparison",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-setup.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "راه‌اندازی",
          "d": "نصب، ‎CLI‎، و یکپارچگی با ‎Vite‎ و فریم‌ورک‌ها."
        },
        "en": {
          "t": "Getting set up",
          "d": "Installation, the CLI, and integrating with Vite and frameworks."
        },
        "kw": "install cli vite postcss config",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-core.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کلاس‌های پایه",
          "d": "فاصله، رنگ، متن، حاشیه و اندازه."
        },
        "en": {
          "t": "The core utilities",
          "d": "Spacing, colour, text, borders and sizing."
        },
        "kw": "spacing color text border sizing scale",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-layout.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "چیدمان",
          "d": "‏Flexbox و ‎Grid‎ با کلاس‌های ‎Tailwind‎."
        },
        "en": {
          "t": "Layout",
          "d": "Flexbox and Grid the Tailwind way."
        },
        "kw": "flex grid gap container layout",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-responsive.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "واکنش‌گرایی",
          "d": "‏breakpoint‌ها و رویکرد ‎mobile-first‎."
        },
        "en": {
          "t": "Responsive design",
          "d": "Breakpoints and the mobile-first approach."
        },
        "kw": "responsive breakpoint sm md lg mobile first",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-states.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "حالت‌ها و ‎variant‎",
          "d": "‏hover، focus، ‎group‎، ‎peer‎ و ‎data-*‎."
        },
        "en": {
          "t": "States and variants",
          "d": "hover, focus, group, peer and data-* variants."
        },
        "kw": "hover focus group peer variant data",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-dark.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تم تاریک",
          "d": "دو راهبرد، و انتخاب درست."
        },
        "en": {
          "t": "Dark mode",
          "d": "Two strategies, and choosing correctly."
        },
        "kw": "dark mode class media strategy",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-config.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "پیکربندی",
          "d": "گسترش تم، توکن طراحی و مقیاس سفارشی."
        },
        "en": {
          "t": "Configuration",
          "d": "Extending the theme, design tokens and custom scales."
        },
        "kw": "config theme extend token scale",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-components.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کامپوننت",
          "d": "‎@apply‎، تکرار، و اینکه کِی باید انتزاع بسازی."
        },
        "en": {
          "t": "Components",
          "d": "@apply, repetition, and when to abstract."
        },
        "kw": "apply component extract cva clsx",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-plugins.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "پلاگین",
          "d": "پلاگین رسمی و نوشتن پلاگین خودت."
        },
        "en": {
          "t": "Plugins",
          "d": "Official plugins and writing your own."
        },
        "kw": "plugin typography forms addutilities",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-rtl.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏RTL و فارسی",
          "d": "‏ps/pe به‌جای ‎pl/pr‎، و فونت فارسی."
        },
        "en": {
          "t": "RTL and Persian",
          "d": "ps/pe instead of pl/pr, and Persian fonts."
        },
        "kw": "rtl logical ps pe direction font",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-animation.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "انیمیشن",
          "d": "‏transition، ‎animate‎ و ‎keyframes‎ سفارشی."
        },
        "en": {
          "t": "Animation",
          "d": "transition, animate and custom keyframes."
        },
        "kw": "transition animate keyframes motion",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-optimization.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "بهینه‌سازی",
          "d": "چطور باندل نهایی چند کیلوبایت می‌ماند."
        },
        "en": {
          "t": "Optimisation",
          "d": "How the final bundle stays a few kilobytes."
        },
        "kw": "purge content jit bundle size",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-headless.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کامپوننت آماده",
          "d": "‏Headless UI، ‎Radix‎ و ‎shadcn‎ در کنار ‎Tailwind‎."
        },
        "en": {
          "t": "Component libraries",
          "d": "Headless UI, Radix and shadcn alongside Tailwind."
        },
        "kw": "headless radix shadcn accessible component",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-tradeoffs.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کجا اذیت می‌کند",
          "d": "خوانایی ‎HTML‎، بازبینی کد و تیم بزرگ."
        },
        "en": {
          "t": "Where it hurts",
          "d": "HTML readability, code review and large teams."
        },
        "kw": "tradeoff readability review criticism",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — صفحهٔ فرود",
          "d": "یک صفحهٔ واکنش‌گرا با ‎Tailwind‎ خالص."
        },
        "en": {
          "t": "Project 1 — a landing page",
          "d": "A responsive page in pure Tailwind."
        },
        "kw": "capstone landing",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 130,
        "fa": {
          "t": "پروژهٔ ۲ — تم سفارشی",
          "d": "توکن، تم تاریک، ‎RTL‎ و پلاگین خودت."
        },
        "en": {
          "t": "Project 2 — a custom theme",
          "d": "Tokens, dark mode, RTL and your own plugin."
        },
        "kw": "capstone theme plugin",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 170,
        "fa": {
          "t": "پروژهٔ ۳ — داشبورد کامل",
          "d": "کامپوننت‌های تکرارشونده، دسترس‌پذیری و باندل کوچک."
        },
        "en": {
          "t": "Project 3 — a complete dashboard",
          "d": "Repeatable components, accessibility and a small bundle."
        },
        "kw": "capstone dashboard",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1635,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "70-bootstrap",
    "dir": "70-bootstrap",
    "accent": "#7952B3",
    "accentDark": null,
    "cat": "frontend",
    "ico": "<rect x=\"2.6\" y=\"2.6\" width=\"18.8\" height=\"18.8\" rx=\"4.4\"/><path d=\"M8.6 17V7h4.2c1.9 0 2.9 1 2.9 2.4 0 1.2-.8 2.1-2 2.3v.1c1.5.1 2.5 1.1 2.5 2.5 0 1.7-1.2 2.7-3.3 2.7z\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Bootstrap",
      "desc": "شبکه، کامپوننت آماده، ابزار ‎JavaScript‎، سفارشی‌سازی با ‎Sass‎ و ‎RTL‎.",
      "intro": "‏Bootstrap سریع‌ترین راه رسیدن به یک رابط قابل‌قبول است و همین باعث می‌شود هم بی‌جهت تحقیر شود و هم بی‌جهت همه‌جا استفاده شود. برای پنل داخلی، ابزار سازمانی و نمونهٔ اولیه، هنوز انتخاب عاقلانه‌ای است. این مسیر آن را جدی یاد می‌دهد — و مهم‌تر، یاد می‌دهد چطور سفارشی‌اش کنی که شبیه ‎Bootstrap‎ نباشد."
    },
    "en": {
      "name": "Bootstrap",
      "desc": "The grid, ready-made components, JavaScript widgets, Sass customisation and RTL.",
      "intro": "Bootstrap is the fastest route to an acceptable interface, which is why it gets both unfair scorn and unwarranted ubiquity. For internal panels, admin tools and prototypes it is still the sensible choice. This track teaches it seriously — and, more importantly, teaches you to customise it so it does not look like Bootstrap."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "کِی ‎Bootstrap‎",
          "d": "کجا انتخاب درستی است و کجا نه."
        },
        "en": {
          "t": "When Bootstrap",
          "d": "Where it is the right choice and where it is not."
        },
        "kw": "bootstrap when comparison admin prototype",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-setup.html",
        "ready": false,
        "ex": 18,
        "mins": 70,
        "fa": {
          "t": "راه‌اندازی",
          "d": "‏CDN، ‎npm‎ و ساختار فایل‌ها."
        },
        "en": {
          "t": "Getting set up",
          "d": "CDN, npm and the file structure."
        },
        "kw": "install cdn npm bundle scss",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-layout.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏container و شبکه",
          "d": "‏۱۲ ستون، ‎gutter‎ و ‎breakpoint‎."
        },
        "en": {
          "t": "Containers and the grid",
          "d": "Twelve columns, gutters and breakpoints."
        },
        "kw": "container row col grid gutter breakpoint",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-flex-utils.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کلاس‌های کمکی",
          "d": "فاصله، نمایش، ‎Flexbox‎ و متن."
        },
        "en": {
          "t": "Utility classes",
          "d": "Spacing, display, Flexbox and text."
        },
        "kw": "utility spacing display flex text",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-typography.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "تایپوگرافی و رنگ",
          "d": "مقیاس متن، رنگ‌های معنایی و ‎badge‎."
        },
        "en": {
          "t": "Typography and colour",
          "d": "The type scale, semantic colours and badges."
        },
        "kw": "typography color badge text muted",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-components-1.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کامپوننت ۱",
          "d": "دکمه، کارت، ‎navbar‎، ‎alert‎."
        },
        "en": {
          "t": "Components 1",
          "d": "Buttons, cards, navbars, alerts."
        },
        "kw": "button card navbar alert list group",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-components-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کامپوننت ۲",
          "d": "‏table، ‎pagination‎، ‎breadcrumb‎، ‎spinner‎."
        },
        "en": {
          "t": "Components 2",
          "d": "Tables, pagination, breadcrumbs, spinners."
        },
        "kw": "table pagination breadcrumb spinner progress",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-forms.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "فرم",
          "d": "ورودی، اعتبارسنجی و چیدمان فرم."
        },
        "en": {
          "t": "Forms",
          "d": "Inputs, validation and form layout."
        },
        "kw": "form input validation floating label",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-js-components.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "کامپوننت تعاملی",
          "d": "مودال، ‎dropdown‎، ‎tooltip‎، ‎collapse‎، ‎toast‎."
        },
        "en": {
          "t": "Interactive components",
          "d": "Modals, dropdowns, tooltips, collapse, toasts."
        },
        "kw": "modal dropdown tooltip collapse toast offcanvas",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-js-api.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏API جاوااسکریپت",
          "d": "کنترل کامپوننت‌ها از کد، و رویدادهایشان."
        },
        "en": {
          "t": "The JavaScript API",
          "d": "Controlling components from code, and their events."
        },
        "kw": "javascript api event instance dispose",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-customize.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "سفارشی‌سازی",
          "d": "متغیرهای ‎Sass‎، و اینکه چطور شبیه ‎Bootstrap‎ نباشد."
        },
        "en": {
          "t": "Customisation",
          "d": "Sass variables, and how to stop looking like Bootstrap."
        },
        "kw": "customize sass variable override theme",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-rtl.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏RTL و فارسی",
          "d": "نسخهٔ ‎RTL‎، فونت فارسی و نکات چیدمان."
        },
        "en": {
          "t": "RTL and Persian",
          "d": "The RTL build, Persian fonts and layout notes."
        },
        "kw": "rtl bootstrap-rtl direction persian",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-optimize.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "بهینه‌سازی",
          "d": "فقط چیزی که لازم داری را وارد کن."
        },
        "en": {
          "t": "Optimisation",
          "d": "Import only what you use."
        },
        "kw": "import tree shaking bundle size purge",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 70,
        "fa": {
          "t": "پروژهٔ ۱ — پنل مدیریت",
          "d": "شبکه، ‎navbar‎، جدول و فرم."
        },
        "en": {
          "t": "Project 1 — an admin panel",
          "d": "Grid, navbar, tables and forms."
        },
        "kw": "capstone admin",
        "cap": 1
      },
      {
        "n": "15",
        "file": "15-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 120,
        "fa": {
          "t": "پروژهٔ ۲ — تم سفارشی",
          "d": "متغیر ‎Sass‎، رنگ برند و ‎RTL‎."
        },
        "en": {
          "t": "Project 2 — a custom theme",
          "d": "Sass variables, brand colours and RTL."
        },
        "kw": "capstone theme",
        "cap": 2
      },
      {
        "n": "16",
        "file": "16-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۳ — اپ چندصفحه‌ای",
          "d": "کامپوننت تعاملی، اعتبارسنجی و دسترس‌پذیری."
        },
        "en": {
          "t": "Project 3 — a multi-page app",
          "d": "Interactive components, validation and accessibility."
        },
        "kw": "capstone app",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 16,
      "exercises": 255,
      "minutes": 1430,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "71-java",
    "dir": "71-java",
    "accent": "#E76F00",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M9.4 17.6c-2.6.7-4.2 1.7-1 2.4 4 .9 9.6.5 11-.2M10.4 14.4c-2 .6-3 1.4-.7 2 3 .7 7.6.4 9-.2\" stroke-linecap=\"round\"/><path d=\"M13.6 3.4c1.8 2-2.4 3.4-2.4 5.4 0 1.8 3 2.6 3 4.4\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "زبان Java",
      "desc": "‏JVM، شیءگرایی، ‎generic‎، ‎Stream‎، همروندی، ماژول و ابزار بیلد.",
      "intro": "‏Java زبان سازمان‌هاست — نه چون بهترین است، بلکه چون پیش‌بینی‌پذیر است: کدی که امروز می‌نویسی، ده سال دیگر هم کامپایل می‌شود. این پایداری هزینه دارد (پرگویی) و سود دارد (اکوسیستم عظیم و ابزار بالغ). این مسیر ‎Java‎ مدرن را یاد می‌دهد، نه ‎Java‎ی سال ۲۰۰۸: ‎record‎، ‎var‎، ‎switch‎ الگویی و ‎virtual thread‎."
    },
    "en": {
      "name": "Java",
      "desc": "The JVM, object orientation, generics, streams, concurrency, modules and build tooling.",
      "intro": "Java is the language of institutions — not because it is the best, but because it is predictable: code you write today still compiles in ten years. That stability has a cost (verbosity) and a payoff (an enormous ecosystem and mature tooling). This track teaches modern Java, not 2008 Java: records, var, pattern-matching switch and virtual threads."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-jvm.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏JVM و اولین برنامه",
          "d": "کامپایل، ‎bytecode‎ و اجرا."
        },
        "en": {
          "t": "The JVM and your first program",
          "d": "Compilation, bytecode and execution."
        },
        "kw": "jvm jdk jre bytecode classpath",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-types.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "نوع‌ها",
          "d": "اولیه در برابر شیء، ‎autoboxing‎ و ‎var‎."
        },
        "en": {
          "t": "Types",
          "d": "Primitives versus objects, autoboxing and var."
        },
        "kw": "primitive wrapper autoboxing var literal",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-oop-1.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "شیءگرایی ۱",
          "d": "کلاس، سازنده، ‎encapsulation‎."
        },
        "en": {
          "t": "OOP 1",
          "d": "Classes, constructors and encapsulation."
        },
        "kw": "class constructor field encapsulation",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-oop-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "شیءگرایی ۲",
          "d": "وراثت، ‎interface‎، ‎abstract‎ و چندریختی."
        },
        "en": {
          "t": "OOP 2",
          "d": "Inheritance, interfaces, abstract classes and polymorphism."
        },
        "kw": "inheritance interface abstract polymorphism",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-records.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏record و ‎sealed‎",
          "d": "‏Java مدرن: داده بدون پرگویی."
        },
        "en": {
          "t": "Records and sealed types",
          "d": "Modern Java: data without ceremony."
        },
        "kw": "record sealed immutable equals",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-generics.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏generic",
          "d": "‏wildcard، ‎bound‎ و ‎type erasure‎."
        },
        "en": {
          "t": "Generics",
          "d": "Wildcards, bounds and type erasure."
        },
        "kw": "generic wildcard bound erasure",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-collections.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "مجموعه‌ها",
          "d": "‏List، Map، Set و انتخاب درست."
        },
        "en": {
          "t": "Collections",
          "d": "List, Map, Set and choosing correctly."
        },
        "kw": "collection list map set comparator",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-streams.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Stream و ‎lambda‎",
          "d": "برنامه‌نویسی تابعی در ‎Java‎."
        },
        "en": {
          "t": "Streams and lambdas",
          "d": "Functional programming in Java."
        },
        "kw": "stream lambda collector optional map filter",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-optional.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "‏Optional",
          "d": "‏null بدون ‎NullPointerException‎."
        },
        "en": {
          "t": "Optional",
          "d": "Absence without a NullPointerException."
        },
        "kw": "optional null npe orelse",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-exceptions.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خطا",
          "d": "‏checked و ‎unchecked‎، و ‎try-with-resources‎."
        },
        "en": {
          "t": "Exceptions",
          "d": "Checked and unchecked, and try-with-resources."
        },
        "kw": "exception checked try-with-resources finally",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-io.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "فایل و ‎I/O‎",
          "d": "‏NIO، مسیر، خواندن و نوشتن."
        },
        "en": {
          "t": "Files and I/O",
          "d": "NIO, paths, reading and writing."
        },
        "kw": "nio path files reader stream",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-concurrency-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "همروندی ۱",
          "d": "نخ، ‎executor‎ و ‎synchronized‎."
        },
        "en": {
          "t": "Concurrency 1",
          "d": "Threads, executors and synchronized."
        },
        "kw": "thread executor synchronized runnable",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-concurrency-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "همروندی ۲",
          "d": "‏CompletableFuture و ‎virtual thread‎."
        },
        "en": {
          "t": "Concurrency 2",
          "d": "CompletableFuture and virtual threads."
        },
        "kw": "completablefuture virtual thread loom",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-modules.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "ماژول و پکیج",
          "d": "‏JPMS و سازماندهی کد."
        },
        "en": {
          "t": "Modules and packages",
          "d": "JPMS and organising code."
        },
        "kw": "module jpms package visibility",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-build.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Maven و ‎Gradle‎",
          "d": "وابستگی، ‎lifecycle‎ و چندماژولی."
        },
        "en": {
          "t": "Maven and Gradle",
          "d": "Dependencies, lifecycles and multi-module builds."
        },
        "kw": "maven gradle pom dependency lifecycle",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست",
          "d": "‏JUnit 5، ‎Mockito‎ و ‎assertion‎ خوانا."
        },
        "en": {
          "t": "Testing",
          "d": "JUnit 5, Mockito and readable assertions."
        },
        "kw": "junit mockito assertj parameterized",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-jvm-tuning.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏JVM در عمل",
          "d": "حافظه، ‎GC‎ و پروفایل."
        },
        "en": {
          "t": "The JVM in practice",
          "d": "Memory, garbage collection and profiling."
        },
        "kw": "heap gc jvm flags profiling jfr",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "خواندن فایل، پردازش و تست."
        },
        "en": {
          "t": "Project 1 — a CLI tool",
          "d": "Reading files, processing and tests."
        },
        "kw": "capstone cli",
        "cap": 1
      },
      {
        "n": "19",
        "file": "19-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 150,
        "fa": {
          "t": "پروژهٔ ۲ — کتابخانه",
          "d": "‏API تمیز، ‎generic‎ و انتشار ‎Maven‎."
        },
        "en": {
          "t": "Project 2 — a library",
          "d": "A clean API, generics and Maven publishing."
        },
        "kw": "capstone library",
        "cap": 2
      },
      {
        "n": "20",
        "file": "20-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 200,
        "fa": {
          "t": "پروژهٔ ۳ — پردازشگر همروند",
          "d": "‏executor، ‎virtual thread‎ و اندازه‌گیری."
        },
        "en": {
          "t": "Project 3 — a concurrent processor",
          "d": "Executors, virtual threads and measurement."
        },
        "kw": "capstone concurrency",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 20,
      "exercises": 327,
      "minutes": 1885,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "72-spring-boot",
    "dir": "72-spring-boot",
    "accent": "#6DB33F",
    "accentDark": null,
    "cat": "backend",
    "ico": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 14.6c2.6 1.6 5.6 1.2 7-.6 1.6-2 .8-4.6-1.4-5.4-1.8-.7-3.2.4-3 1.8.2 1.3 1.8 1.4 2.6.6\" stroke-linecap=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "Spring Boot",
      "desc": "‏DI، ‎REST‎، ‎JPA‎، امنیت، تست، ‎cache‎، پیام و استقرار — فریم‌ورک غالب دنیای ‎Java‎.",
      "intro": "‏Spring پیش از ‎Boot‎ به پیکربندی ‎XML‎ بی‌پایان معروف بود. ‎Boot‎ یک تصمیم گرفت: پیش‌فرض عاقلانه بگذار و فقط چیزی را که فرق دارد بنویس. نتیجه‌اش این است که در پنج دقیقه یک سرویس داری — و در ماه ششم، وقتی باید بفهمی آن پیش‌فرض از کجا آمده، این مسیر به کارت می‌آید."
    },
    "en": {
      "name": "Spring Boot",
      "desc": "DI, REST, JPA, security, testing, caching, messaging and deployment — the dominant Java framework.",
      "intro": "Before Boot, Spring was famous for endless XML configuration. Boot made one decision: supply sensible defaults and only write what differs. The result is a running service in five minutes — and in month six, when you need to know where a default came from, this track is what helps."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-why.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "چرا ‎Spring Boot‎",
          "d": "‏auto-configuration و ‎starter‎."
        },
        "en": {
          "t": "Why Spring Boot",
          "d": "Auto-configuration and starters."
        },
        "kw": "spring boot starter autoconfiguration",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-di.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "تزریق وابستگی",
          "d": "‏bean، ‎context‎، دامنه و چرخهٔ عمر."
        },
        "en": {
          "t": "Dependency injection",
          "d": "Beans, the context, scopes and lifecycles."
        },
        "kw": "bean context inject component scope",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-config.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "پیکربندی",
          "d": "‏properties، ‎profile‎ و ‎@ConfigurationProperties‎."
        },
        "en": {
          "t": "Configuration",
          "d": "Properties, profiles and @ConfigurationProperties."
        },
        "kw": "properties yaml profile configurationproperties",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-web.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏Spring Web",
          "d": "کنترلر، مسیریابی و ‎REST‎."
        },
        "en": {
          "t": "Spring Web",
          "d": "Controllers, routing and REST."
        },
        "kw": "controller restcontroller mapping requestbody",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-validation.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "اعتبارسنجی و ‎DTO‎",
          "d": "‏Bean Validation و جدا کردن مدل انتقال."
        },
        "en": {
          "t": "Validation and DTOs",
          "d": "Bean Validation and separating the transport model."
        },
        "kw": "validation dto mapstruct valid",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مدیریت خطا",
          "d": "‏@ControllerAdvice و پاسخ یکدست."
        },
        "en": {
          "t": "Error handling",
          "d": "@ControllerAdvice and consistent responses."
        },
        "kw": "exception handler controlleradvice problem",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-jpa-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏JPA ۱",
          "d": "‏entity، رابطه و ‎repository‎."
        },
        "en": {
          "t": "JPA 1",
          "d": "Entities, relationships and repositories."
        },
        "kw": "jpa entity repository relation mapping",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-jpa-2.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏JPA ۲",
          "d": "‏N+1، ‎fetch‎، ‎lazy‎ و کوئری بهینه."
        },
        "en": {
          "t": "JPA 2",
          "d": "N+1, fetch strategies, laziness and efficient queries."
        },
        "kw": "n+1 fetch lazy join entitygraph",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-migrations.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "مهاجرت پایگاه‌داده",
          "d": "‏Flyway و ‎Liquibase‎."
        },
        "en": {
          "t": "Database migrations",
          "d": "Flyway and Liquibase."
        },
        "kw": "flyway liquibase migration versioning",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-security-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Spring Security ۱",
          "d": "زنجیرهٔ فیلتر، احراز هویت و ‎UserDetails‎."
        },
        "en": {
          "t": "Spring Security 1",
          "d": "The filter chain, authentication and UserDetails."
        },
        "kw": "security filter chain authentication userdetails",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-security-2.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Spring Security ۲",
          "d": "‏JWT، ‎OAuth2‎ و مجوز روش‌محور."
        },
        "en": {
          "t": "Spring Security 2",
          "d": "JWT, OAuth2 and method-level authorisation."
        },
        "kw": "jwt oauth2 preauthorize resource server",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "تست",
          "d": "‏slice test، ‎MockMvc‎ و ‎Testcontainers‎."
        },
        "en": {
          "t": "Testing",
          "d": "Slice tests, MockMvc and Testcontainers."
        },
        "kw": "springboottest mockmvc testcontainers slice",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-caching.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کش",
          "d": "‎@Cacheable‎ و ‎Redis‎."
        },
        "en": {
          "t": "Caching",
          "d": "@Cacheable and Redis."
        },
        "kw": "cache cacheable redis eviction",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-async.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کار ناهمگام",
          "d": "‎@Async‎، ‎@Scheduled‎ و صف."
        },
        "en": {
          "t": "Async work",
          "d": "@Async, @Scheduled and queues."
        },
        "kw": "async scheduled executor rabbitmq kafka",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-observability.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مشاهده‌پذیری",
          "d": "‏Actuator، ‎Micrometer‎ و ‎trace‎."
        },
        "en": {
          "t": "Observability",
          "d": "Actuator, Micrometer and tracing."
        },
        "kw": "actuator micrometer prometheus tracing",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "استقرار",
          "d": "‏JAR اجرایی، داکر و پیکربندی ‎production‎."
        },
        "en": {
          "t": "Deployment",
          "d": "Executable JARs, Docker and production configuration."
        },
        "kw": "jar docker native image profile",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — ‎REST API‎",
          "d": "‏CRUD با ‎JPA‎ و اعتبارسنجی."
        },
        "en": {
          "t": "Project 1 — a REST API",
          "d": "CRUD with JPA and validation."
        },
        "kw": "capstone crud",
        "cap": 1
      },
      {
        "n": "18",
        "file": "18-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۲ — سرویس امن",
          "d": "‏JWT، نقش و تست یکپارچه."
        },
        "en": {
          "t": "Project 2 — a secured service",
          "d": "JWT, roles and integration tests."
        },
        "kw": "capstone security",
        "cap": 2
      },
      {
        "n": "19",
        "file": "19-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 220,
        "fa": {
          "t": "پروژهٔ ۳ — سرویس ‎production‎",
          "d": "کش، صف، مشاهده‌پذیری و استقرار خودکار."
        },
        "en": {
          "t": "Project 3 — a production service",
          "d": "Caching, queues, observability and automated deployment."
        },
        "kw": "capstone production",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 19,
      "exercises": 309,
      "minutes": 1865,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "73-php",
    "dir": "73-php",
    "accent": "#777BB4",
    "accentDark": null,
    "cat": "backend",
    "ico": "<ellipse cx=\"12\" cy=\"12\" rx=\"9.6\" ry=\"5.6\"/><path d=\"M7.4 14.6 8.8 9h2.2c1 0 1.5.6 1.3 1.6-.2 1-.9 1.6-1.9 1.6H9M13.6 14.6 15 9h2.2c1 0 1.5.6 1.3 1.6-.2 1-.9 1.6-1.9 1.6h-1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
    "locked": false,
    "fa": {
      "name": "زبان PHP",
      "desc": "‏PHP 8: نوع، ‎enum‎، شیءگرایی، ‎Composer‎، ‎PSR‎، تست و امنیت.",
      "intro": "بدنامی ‎PHP‎ مال پانزده سال پیش است و منصفانه هم بود. اما ‎PHP 8‎ زبان دیگری است: نوع‌دار، سریع، با ‎JIT‎ و اکوسیستمی منظم که ‎Composer‎ و استانداردهای ‎PSR‎ ساخته‌اند. این مسیر از ‎PHP‎ امروز شروع می‌کند، نه از آنچه در ذهن‌ها مانده — و روی نوشتن ‎PHP‎ی تأکید دارد که بشود تست و نگهداری‌اش کرد."
    },
    "en": {
      "name": "PHP",
      "desc": "PHP 8: types, enums, object orientation, Composer, PSRs, testing and security.",
      "intro": "PHP's bad reputation was earned fifteen years ago, and fairly. But PHP 8 is a different language: typed, fast, JIT-compiled, with an orderly ecosystem built by Composer and the PSR standards. This track starts from PHP as it is today, not as it is remembered — and insists on PHP you can test and maintain."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-modern.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏PHP امروز",
          "d": "چه چیزی از ‎5‎ به ‎8‎ عوض شد و چرا مهم است."
        },
        "en": {
          "t": "PHP today",
          "d": "What changed from 5 to 8, and why it matters."
        },
        "kw": "php8 jit performance history",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-basics.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مبانی",
          "d": "متغیر، آرایه، رشته و عملگرها."
        },
        "en": {
          "t": "The basics",
          "d": "Variables, arrays, strings and operators."
        },
        "kw": "variable array string operator",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-types.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "نوع‌ها",
          "d": "اعلان نوع، ‎union‎، ‎nullable‎ و ‎strict_types‎."
        },
        "en": {
          "t": "Types",
          "d": "Type declarations, unions, nullables and strict_types."
        },
        "kw": "type union nullable strict declare",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-functions.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "تابع",
          "d": "آرگومان نام‌دار، ‎spread‎، ‎closure‎ و ‎arrow fn‎."
        },
        "en": {
          "t": "Functions",
          "d": "Named arguments, spread, closures and arrow functions."
        },
        "kw": "function named argument closure arrow",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-oop-1.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "شیءگرایی ۱",
          "d": "کلاس، سازنده ارتقایافته، ‎readonly‎."
        },
        "en": {
          "t": "OOP 1",
          "d": "Classes, constructor promotion and readonly."
        },
        "kw": "class constructor promotion readonly property",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-oop-2.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "شیءگرایی ۲",
          "d": "‏interface، ‎trait‎، ‎abstract‎ و ‎enum‎."
        },
        "en": {
          "t": "OOP 2",
          "d": "Interfaces, traits, abstract classes and enums."
        },
        "kw": "interface trait abstract enum static",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-errors.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "خطا",
          "d": "‏exception، ‎error‎ و ‎try/catch/finally‎."
        },
        "en": {
          "t": "Errors",
          "d": "Exceptions, errors and try/catch/finally."
        },
        "kw": "exception error throwable finally",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-arrays.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "آرایه و تابع‌های آن",
          "d": "‏map، ‎filter‎، ‎reduce‎ و ‎spread‎."
        },
        "en": {
          "t": "Arrays and their functions",
          "d": "map, filter, reduce and spread."
        },
        "kw": "array map filter reduce usort",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-composer.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Composer و ‎PSR‎",
          "d": "وابستگی، ‎autoload‎ و استانداردها."
        },
        "en": {
          "t": "Composer and PSRs",
          "d": "Dependencies, autoloading and the standards."
        },
        "kw": "composer autoload psr4 packagist",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-http.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏PHP و ‎HTTP‎",
          "d": "درخواست، پاسخ، ‎session‎ و کوکی."
        },
        "en": {
          "t": "PHP and HTTP",
          "d": "Requests, responses, sessions and cookies."
        },
        "kw": "request response session cookie superglobal",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-database.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "پایگاه‌داده",
          "d": "‏PDO، ‎prepared statement‎ و تراکنش."
        },
        "en": {
          "t": "Databases",
          "d": "PDO, prepared statements and transactions."
        },
        "kw": "pdo prepared transaction mysql",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-security.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "امنیت",
          "d": "تزریق ‎SQL‎، ‎XSS‎، ‎CSRF‎ و رمز عبور."
        },
        "en": {
          "t": "Security",
          "d": "SQL injection, XSS, CSRF and password hashing."
        },
        "kw": "injection xss csrf password_hash sanitize",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-files.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "فایل و آپلود",
          "d": "خواندن، نوشتن و آپلود امن."
        },
        "en": {
          "t": "Files and uploads",
          "d": "Reading, writing and safe uploads."
        },
        "kw": "file upload stream mime validation",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "تست",
          "d": "‏PHPUnit، ‎Pest‎ و کد تست‌پذیر."
        },
        "en": {
          "t": "Testing",
          "d": "PHPUnit, Pest and testable code."
        },
        "kw": "phpunit pest mock coverage",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-tooling.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "ابزار کیفیت",
          "d": "‏PHPStan، ‎Rector‎ و ‎CS Fixer‎."
        },
        "en": {
          "t": "Quality tooling",
          "d": "PHPStan, Rector and CS Fixer."
        },
        "kw": "phpstan psalm rector cs-fixer static analysis",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 80,
        "fa": {
          "t": "پروژهٔ ۱ — ابزار خط فرمان",
          "d": "پردازش فایل با نوع‌دهی کامل."
        },
        "en": {
          "t": "Project 1 — a CLI tool",
          "d": "File processing with full typing."
        },
        "kw": "capstone cli",
        "cap": 1
      },
      {
        "n": "17",
        "file": "17-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 140,
        "fa": {
          "t": "پروژهٔ ۲ — ‎API‎ بدون فریم‌ورک",
          "d": "مسیریابی، ‎PDO‎ و تست — دستی."
        },
        "en": {
          "t": "Project 2 — an API with no framework",
          "d": "Routing, PDO and tests — by hand."
        },
        "kw": "capstone api vanilla",
        "cap": 2
      },
      {
        "n": "18",
        "file": "18-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 180,
        "fa": {
          "t": "پروژهٔ ۳ — کتابخانهٔ ‎Composer‎",
          "d": "‏PSR، تست، تحلیل ایستا و انتشار."
        },
        "en": {
          "t": "Project 3 — a Composer library",
          "d": "PSRs, tests, static analysis and publishing."
        },
        "kw": "capstone package",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 18,
      "exercises": 291,
      "minutes": 1660,
      "capstones": 3,
      "ready": 0
    }
  },
  {
    "id": "74-laravel",
    "dir": "74-laravel",
    "accent": "#FF2D20",
    "accentDark": null,
    "cat": "backend",
    "ico": "<path d=\"M3 7.4 8.2 4.6l5.2 2.8v5.4l5.2 2.8-5.2 2.8-5.2-2.8V10.2z\" stroke-linejoin=\"round\"/><path d=\"M8.2 10.2 13.4 7.4M8.2 10.2v5.4\" stroke-linejoin=\"round\" opacity=\".6\"/>",
    "locked": false,
    "fa": {
      "name": "Laravel",
      "desc": "‏Eloquent، مسیریابی، احراز هویت، صف، رویداد، تست و استقرار — با اکوسیستم کاملش.",
      "intro": "‏Laravel چیزی را ساخت که کمتر فریم‌ورکی دارد: یک اکوسیستم کامل که همه‌چیزش با هم جور است — از صف و زمان‌بند تا احراز هویت و تست. قیمتش این است که باید «راه ‎Laravel‎» را بپذیری. این مسیر آن راه را دقیق نشان می‌دهد و توضیح می‌دهد پشت هر جادویی چه می‌گذرد، تا وقتی چیزی خراب شد بدانی کجا را نگاه کنی."
    },
    "en": {
      "name": "Laravel",
      "desc": "Eloquent, routing, authentication, queues, events, testing and deployment — with its full ecosystem.",
      "intro": "Laravel built something few frameworks have: a complete ecosystem where everything fits together — queues, schedulers, auth, testing. The price is accepting “the Laravel way”. This track shows that way precisely and explains what sits behind each piece of magic, so that when something breaks you know where to look."
    },
    "chapters": [
      {
        "n": "01",
        "file": "01-architecture.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "معماری و چرخهٔ درخواست",
          "d": "از ‎index.php‎ تا پاسخ، مرحله‌به‌مرحله."
        },
        "en": {
          "t": "Architecture and the request lifecycle",
          "d": "From index.php to the response, step by step."
        },
        "kw": "lifecycle kernel container provider bootstrap",
        "cap": 0
      },
      {
        "n": "02",
        "file": "02-container.html",
        "ready": false,
        "ex": 18,
        "mins": 90,
        "fa": {
          "t": "‏service container",
          "d": "تزریق وابستگی و ‎binding‎ — قلب ‎Laravel‎."
        },
        "en": {
          "t": "The service container",
          "d": "Dependency injection and binding — the heart of Laravel."
        },
        "kw": "container binding singleton resolve provider",
        "cap": 0
      },
      {
        "n": "03",
        "file": "03-routing.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مسیریابی",
          "d": "مسیر، گروه، ‎middleware‎ و ‎model binding‎."
        },
        "en": {
          "t": "Routing",
          "d": "Routes, groups, middleware and model binding."
        },
        "kw": "route group middleware binding resource",
        "cap": 0
      },
      {
        "n": "04",
        "file": "04-controllers.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کنترلر و درخواست",
          "d": "‏Form Request و اعتبارسنجی."
        },
        "en": {
          "t": "Controllers and requests",
          "d": "Form Requests and validation."
        },
        "kw": "controller formrequest validation invokable",
        "cap": 0
      },
      {
        "n": "05",
        "file": "05-eloquent-1.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "‏Eloquent ۱",
          "d": "مدل، ‎cast‎، ‎scope‎ و ‎accessor‎."
        },
        "en": {
          "t": "Eloquent 1",
          "d": "Models, casts, scopes and accessors."
        },
        "kw": "eloquent model cast scope accessor mutator",
        "cap": 0
      },
      {
        "n": "06",
        "file": "06-eloquent-2.html",
        "ready": false,
        "ex": 18,
        "mins": 100,
        "fa": {
          "t": "‏Eloquent ۲",
          "d": "رابطه‌ها، ‎eager loading‎ و ‎N+1‎."
        },
        "en": {
          "t": "Eloquent 2",
          "d": "Relationships, eager loading and N+1."
        },
        "kw": "relationship hasmany belongsto eager n+1",
        "cap": 0
      },
      {
        "n": "07",
        "file": "07-migrations.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "مهاجرت، ‎seeder‎ و ‎factory‎",
          "d": "شِمای نسخه‌بندی‌شده و دادهٔ آزمایشی."
        },
        "en": {
          "t": "Migrations, seeders and factories",
          "d": "Versioned schema and test data."
        },
        "kw": "migration seeder factory faker schema",
        "cap": 0
      },
      {
        "n": "08",
        "file": "08-blade.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "‏Blade",
          "d": "قالب، ‎component‎ و ‎slot‎."
        },
        "en": {
          "t": "Blade",
          "d": "Templates, components and slots."
        },
        "kw": "blade component slot directive layout",
        "cap": 0
      },
      {
        "n": "09",
        "file": "09-auth.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "احراز هویت",
          "d": "‏Breeze، ‎Sanctum‎، ‎guard‎ و نشست."
        },
        "en": {
          "t": "Authentication",
          "d": "Breeze, Sanctum, guards and sessions."
        },
        "kw": "auth breeze sanctum guard session",
        "cap": 0
      },
      {
        "n": "10",
        "file": "10-authorization.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "مجوز",
          "d": "‏policy، ‎gate‎ و نقش."
        },
        "en": {
          "t": "Authorisation",
          "d": "Policies, gates and roles."
        },
        "kw": "policy gate authorize role permission",
        "cap": 0
      },
      {
        "n": "11",
        "file": "11-api.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "‏API",
          "d": "‏API resource، نسخه‌گذاری و ‎rate limit‎."
        },
        "en": {
          "t": "APIs",
          "d": "API resources, versioning and rate limiting."
        },
        "kw": "api resource collection versioning throttle",
        "cap": 0
      },
      {
        "n": "12",
        "file": "12-queues.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "صف و کار پس‌زمینه",
          "d": "‏job، ‎worker‎، ‎Horizon‎ و تلاش مجدد."
        },
        "en": {
          "t": "Queues and background jobs",
          "d": "Jobs, workers, Horizon and retries."
        },
        "kw": "queue job horizon retry failed batch",
        "cap": 0
      },
      {
        "n": "13",
        "file": "13-events.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "رویداد و ‎listener‎",
          "d": "جدا کردن اثرات جانبی از منطق اصلی."
        },
        "en": {
          "t": "Events and listeners",
          "d": "Separating side effects from core logic."
        },
        "kw": "event listener observer broadcast",
        "cap": 0
      },
      {
        "n": "14",
        "file": "14-scheduling.html",
        "ready": false,
        "ex": 18,
        "mins": 75,
        "fa": {
          "t": "زمان‌بندی",
          "d": "‏scheduler و کار دوره‌ای."
        },
        "en": {
          "t": "Scheduling",
          "d": "The scheduler and recurring work."
        },
        "kw": "schedule cron task withoutoverlapping",
        "cap": 0
      },
      {
        "n": "15",
        "file": "15-cache.html",
        "ready": false,
        "ex": 18,
        "mins": 80,
        "fa": {
          "t": "کش و جلسه",
          "d": "‏Redis، ‎tag‎ و باطل‌سازی."
        },
        "en": {
          "t": "Caching and sessions",
          "d": "Redis, tags and invalidation."
        },
        "kw": "cache redis tag session store",
        "cap": 0
      },
      {
        "n": "16",
        "file": "16-testing.html",
        "ready": false,
        "ex": 18,
        "mins": 95,
        "fa": {
          "t": "تست",
          "d": "‏Pest، تست ویژگی، ‎factory‎ و پایگاه‌دادهٔ تست."
        },
        "en": {
          "t": "Testing",
          "d": "Pest, feature tests, factories and a test database."
        },
        "kw": "pest phpunit feature refreshdatabase mock",
        "cap": 0
      },
      {
        "n": "17",
        "file": "17-performance.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "کارایی",
          "d": "‏N+1، ایندکس، ‎cache‎ و ‎Octane‎."
        },
        "en": {
          "t": "Performance",
          "d": "N+1, indexes, caching and Octane."
        },
        "kw": "performance octane debugbar telescope",
        "cap": 0
      },
      {
        "n": "18",
        "file": "18-deploy.html",
        "ready": false,
        "ex": 18,
        "mins": 85,
        "fa": {
          "t": "استقرار",
          "d": "‏Nginx، ‎PHP-FPM‎، داکر و ‎queue worker‎."
        },
        "en": {
          "t": "Deployment",
          "d": "Nginx, PHP-FPM, Docker and queue workers."
        },
        "kw": "deploy nginx fpm docker supervisor envoyer",
        "cap": 0
      },
      {
        "n": "19",
        "file": "19-cap1.html",
        "ready": false,
        "ex": 5,
        "mins": 90,
        "fa": {
          "t": "پروژهٔ ۱ — وبلاگ",
          "d": "‏CRUD، احراز هویت و آپلود."
        },
        "en": {
          "t": "Project 1 — a blog",
          "d": "CRUD, authentication and uploads."
        },
        "kw": "capstone blog",
        "cap": 1
      },
      {
        "n": "20",
        "file": "20-cap2.html",
        "ready": false,
        "ex": 7,
        "mins": 160,
        "fa": {
          "t": "پروژهٔ ۲ — ‎API‎ فروشگاه",
          "d": "سبد، سفارش، صف، رویداد و اعلان."
        },
        "en": {
          "t": "Project 2 — a shop API",
          "d": "Cart, orders, queues, events and notifications."
        },
        "kw": "capstone shop",
        "cap": 2
      },
      {
        "n": "21",
        "file": "21-cap3.html",
        "ready": false,
        "ex": 9,
        "mins": 220,
        "fa": {
          "t": "پروژهٔ ۳ — سامانهٔ چندمستأجری",
          "d": "مجوز پیچیده، کش، صف و استقرار کامل."
        },
        "en": {
          "t": "Project 3 — a multi-tenant system",
          "d": "Complex authorisation, caching, queues and full deployment."
        },
        "kw": "capstone multitenant",
        "cap": 3
      }
    ],
    "stats": {
      "chapters": 21,
      "exercises": 345,
      "minutes": 2025,
      "capstones": 3,
      "ready": 0
    }
  }
];
