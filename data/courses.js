/* ============================================================================
   docs-fa — مانیفست دوره‌ها (بخش ۱ از ۲)
   تنها منبع حقیقت برای: صفحهٔ اصلی، خانهٔ هر دوره، ستون کناری، ناوبری، جستجو، پیشرفت.

   قالب فشردهٔ هر فصل — یک آرایه، به همین ترتیب:
     [0] شماره  [1] نام فایل  [2] آماده؟ ۰/۱  [3] تعداد تمرین  [4] دقیقه
     [5] عنوان فارسی  [6] توضیح فارسی
     [7] عنوان انگلیسی [8] توضیح انگلیسی
     [9] کلیدواژه‌های جستجو
     [10] سطح پروژهٔ نهایی: ۱ ساده · ۲ متوسط · ۳ پیچیده (برای فصل عادی خالی)

   app.js این آرایه‌ها را به شیء تبدیل می‌کند؛ جای دیگری دست نزن.
   وقتی فصلی را نوشتی، فقط [2] را ۱ کن.
   ========================================================================== */
window.COURSES = window.COURSES || [];

(function () {
"use strict";
var C = window.COURSES;

/* ═══════════════ ۰۱ — داکر ═══════════════ */
C.push({
  id:"01-docker", dir:"01-docker", accent:"#2496ED", cat:"infra",
  ico:'<rect x="3" y="10.5" width="4" height="3.6" rx=".6"/><rect x="8" y="10.5" width="4" height="3.6" rx=".6"/><rect x="13" y="10.5" width="4" height="3.6" rx=".6"/><rect x="8" y="6.2" width="4" height="3.6" rx=".6"/><path d="M2 15.4c1.6 0 2.4-.5 2.4-.5h14.2c1.6 0 2.9-.6 3.4-1.6-1.2-.6-2.6-.3-2.6-.3s.3-1.6-1.4-2.4c-.9 1-.7 2.7-.7 2.7" stroke-linecap="round"/><path d="M2.6 15.4c.6 2.9 3 4.6 6.4 4.6 4.7 0 8.5-2 10.3-6.2" stroke-linecap="round"/>',
  fa:{name:"داکر", desc:"از «روی سیستم من کار می‌کرد» تا استقرار واقعی روی سرور: ایمیج، کانتینر، شبکه، دیتا، Compose و امنیت.",
      intro:"این مسیر یک هدف دارد: بتوانی نرم‌افزارت را طوری بسته‌بندی کنی که روی هر ماشینی دقیقاً همان‌طور اجرا شود که روی لپ‌تاپ خودت اجرا می‌شد — و بعد آن را روی یک سرور واقعی بگذاری و شب راحت بخوابی."},
  en:{name:"Docker", desc:"From “it works on my machine” to a real deployment: images, containers, networking, data, Compose and hardening.",
      intro:"This track has one goal: to let you package your software so it runs on any machine exactly as it ran on your laptop — and then put it on a real server and sleep at night."},
  ch:[
["01","01-intro.html",1,18,80,"مسئله‌ای که داکر حل می‌کند","درد محیط‌های ناهمگون، و مدل ذهنی درست از image / container / volume.","The problem Docker solves","Environment drift, and a correct mental model of image / container / volume.","container image volume registry namespace cgroup vm کانتینر ایمیج لایه"],
["02","02-install.html",0,18,65,"نصب روی ویندوز، لینوکس و WSL2","Engine در برابر Desktop، راه‌اندازی WSL2 و رفع خطاهای رایج نصب.","Installing on Windows, Linux and WSL2","Engine vs Desktop, WSL2 setup, and the usual installation failures.","install wsl2 desktop engine systemd نصب"],
["03","03-run.html",0,18,75,"اجرا، لاگ، exec و پورت","چرخهٔ کامل کار با یک کانتینر زنده: run، ps، logs، exec، stop، rm.","Run, logs, exec and ports","The full loop with a live container: run, ps, logs, exec, stop, rm.","run ps logs exec stop rm port publish detach tty"],
["04","04-dockerfile.html",0,18,85,"نوشتن Dockerfile؛ لایه‌ها و کش","هر دستور یک لایه است. ترتیب دستورها یعنی تفاوت بیلد ۲ ثانیه‌ای و ۲ دقیقه‌ای.","Writing a Dockerfile; layers and cache","Every instruction is a layer. Order is the difference between a 2-second and a 2-minute build.","dockerfile from run copy cmd entrypoint layer cache dockerignore"],
["05","05-multistage.html",0,18,75,"multi-stage build و کوچک‌کردن ایمیج","جدا کردن محیط بیلد از محیط اجرا؛ از ۹۰۰ مگابایت به ۸۰ مگابایت.","Multi-stage builds and slim images","Separating build-time from run-time; from 900 MB down to 80 MB.","multi-stage builder alpine distroless slim size"],
["06","06-data.html",0,18,80,"داده: volume، bind mount، پشتیبان‌گیری","کانتینر فناپذیر است، داده نباید باشد. سه راه نگه‌داشتن داده و یکی که درست است.","Data: volumes, bind mounts, backups","Containers are disposable; your data must not be. Three ways to persist, one that is right.","volume bind mount tmpfs backup restore دیتا"],
["07","07-network.html",0,18,80,"شبکه: bridge، DNS داخلی، publish","چرا localhost داخل کانتینر خودِ کانتینر است، و کانتینرها چطور همدیگر را پیدا می‌کنند.","Networking: bridge, internal DNS, publish","Why localhost inside a container is the container, and how containers find each other.","network bridge host dns publish expose port mapping"],
["08","08-compose.html",0,18,90,"Docker Compose","چند سرویس، یک فایل، یک دستور. از توسعه تا production.","Docker Compose","Many services, one file, one command — from development to production.","compose yaml services depends_on profiles override"],
["09","09-env-secrets.html",0,18,70,"متغیر محیطی و secret","پیکربندی بیرون از ایمیج بماند؛ رمز هرگز داخل ایمیج نرود.","Environment variables and secrets","Configuration stays outside the image; secrets never go inside it.","env environment secret dotenv config"],
["10","10-health.html",1,18,150,"healthcheck، restart policy و لاگ","فرق زنده‌بودن با آمادگی برنامه؛ بازیابی بعد از crash و پیدا کردن علت از روی log.","Healthchecks, restart policies, and logs","Separate process state from application readiness, recover from crashes, and find the cause in logs.","healthcheck starting healthy unhealthy restart unless-stopped logs stdout stderr compose service_healthy"],
["11","11-registry.html",0,18,70,"registry و push","تگ‌گذاری معنادار، push به Docker Hub و registry خصوصی.","Registries and pushing","Meaningful tagging, pushing to Docker Hub and to a private registry.","registry push pull tag login digest"],
["12","12-debug.html",0,18,80,"عیب‌یابی: exit code، OOM، پر شدن دیسک","کانتینر مُرد. حالا چه؟ روش سیستماتیک خواندن نشانه‌ها.","Troubleshooting: exit codes, OOM, disk","The container died. Now what? A systematic way to read the symptoms.","exit code 137 oom prune disk inspect events"],
["13","13-security.html",0,18,75,"امنیت: non-root، read-only، محدودیت منابع","کانتینر ماشین مجازی نیست. مرزها را خودت باید بکشی.","Security: non-root, read-only, resource limits","A container is not a VM. You draw the boundaries yourself.","non-root user cap-drop read-only seccomp memory cpu limit"],
["14","14-deploy.html",0,18,85,"استقرار روی VPS","از لپ‌تاپ تا سرور واقعی: انتقال ایمیج، reverse proxy، به‌روزرسانی بدون قطعی.","Deploying to a VPS","Laptop to real server: shipping the image, reverse proxy, zero-downtime updates.","vps deploy ssh proxy nginx tls update rollback"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — یک سرویس، یک ایمیج","یک اپ ساده را خودت بسته‌بندی کن و روی پورت دلخواه بالا بیاور.","Project 1 — one service, one image","Package a simple app yourself and bring it up on a port of your choosing.","capstone project simple",1],
["16","16-cap2.html",0,7,90,"پروژهٔ ۲ — اپ + پایگاه‌داده با Compose","دو سرویس، یک شبکهٔ داخلی، والیوم ماندگار و پیکربندی از بیرون.","Project 2 — app + database with Compose","Two services, an internal network, a persistent volume and external configuration.","capstone compose postgres volume",2],
["17","17-cap3.html",0,9,150,"پروژهٔ ۳ — استقرار سه‌سرویسه روی سرور واقعی","اپ، پایگاه‌داده و پروکسی با healthcheck، پشتیبان‌گیری شبانه و به‌روزرسانی بدون قطعی.","Project 3 — three-service deployment on a real server","App, database and proxy with healthchecks, nightly backups and zero-downtime updates.","capstone production backup proxy healthcheck",3]
]});

/* ═══════════════ ۰۲ — Nginx ═══════════════ */
C.push({
  id:"02-nginx", dir:"02-nginx", accent:"#009639", cat:"infra", soft:["03-linux-network"],
  ico:'<path d="M12 2.4 20.5 7v10L12 21.6 3.5 17V7z"/><path d="M9 16V9l6 6.4V9" stroke-linecap="round"/>',
  fa:{name:"انجین‌ایکس", desc:"از سرو کردن یک فایل استاتیک تا gateway کامل: منطق location، reverse proxy، TLS، کش و rate limiting.",
      intro:"Nginx ساده به نظر می‌رسد تا وقتی اولین location را بنویسی و کار نکند. این مسیر منطق واقعی پیکربندی را باز می‌کند: چه چیزی به چه چیزی می‌رسد، با چه اولویتی، و آن ۵۰۲ از کجا می‌آید."},
  en:{name:"Nginx", desc:"From serving one static file to a full gateway: location matching, reverse proxy, TLS, caching and rate limiting.",
      intro:"Nginx looks simple until your first location block does not match. This track opens up the real configuration logic: what matches what, in which order, and where that 502 comes from."},
  ch:[
["01","01-install.html",0,18,65,"نصب و ساختار فایل‌ها","کجا نصب می‌شود و کدام فایل را باید دست بزنی.","Installation and file layout","Where it installs and which file you are meant to edit.","nginx install conf.d sites-available"],
["02","02-syntax.html",0,18,70,"دستور زبان کانفیگ و context‌ها","directive، block، و وراثت بین context‌ها.","Config syntax and contexts","Directives, blocks, and inheritance between contexts.","directive context http server location inheritance"],
["03","03-server-block.html",0,18,70,"server block و virtual host","چند سایت روی یک IP و یک پورت.","Server blocks and virtual hosts","Many sites on one IP and one port.","server_name virtual host default_server sni"],
["04","04-location.html",0,18,80,"منطق location و اولویت‌ها","پیچیده‌ترین بخش Nginx، با جدول تصمیم.","Location matching and priority","The trickiest part of Nginx, with a decision table.","location regex prefix priority try_files"],
["05","05-static.html",0,18,70,"فایل استاتیک، کش مرورگر، فشرده‌سازی","gzip، brotli و هدرهای کش.","Static files, browser cache, compression","gzip, brotli and cache headers.","gzip brotli expires cache-control root alias"],
["06","06-proxy.html",0,18,80,"reverse proxy و هدرها","X-Forwarded-For و چیزهایی که اپ پشت پروکسی از دست می‌دهد.","Reverse proxy and headers","X-Forwarded-For and what your app loses behind a proxy.","proxy_pass proxy_set_header x-forwarded-for upstream"],
["07","07-lb.html",0,18,75,"load balancing و upstream","round-robin، least_conn، health و sticky session.","Load balancing and upstreams","round-robin, least_conn, health checks and sticky sessions.","upstream least_conn ip_hash keepalive"],
["08","08-tls.html",0,18,80,"HTTPS، Let's Encrypt، تمدید خودکار","گواهی واقعی در پنج دقیقه و تمدید بی‌دردسر.","HTTPS, Let's Encrypt, auto-renewal","A real certificate in five minutes and painless renewal.","ssl tls certbot letsencrypt hsts redirect"],
["09","09-ratelimit.html",0,18,70,"rate limiting و محافظت","limit_req، limit_conn و محافظت از فرم ورود.","Rate limiting and protection","limit_req, limit_conn and protecting a login form.","limit_req limit_conn burst nodelay"],
["10","10-logs.html",0,18,65,"لاگ و آنالیز","فرمت سفارشی، چرخش، و پیدا کردن کندترین مسیر.","Logs and analysis","Custom formats, rotation, and finding the slowest route.","access_log error_log log_format logrotate"],
["11","11-ws-upload.html",0,18,70,"WebSocket و آپلود حجیم","هدر Upgrade و client_max_body_size.","WebSockets and large uploads","The Upgrade header and client_max_body_size.","websocket upgrade client_max_body_size buffering"],
["12","12-tuning.html",0,18,75,"tuning: worker، buffer، timeout","عددهایی که واقعاً باید عوض شوند و آن‌هایی که نباید.","Tuning: workers, buffers, timeouts","The numbers worth changing and the ones that are not.","worker_processes worker_connections buffer timeout sendfile"],
["13","13-debug.html",0,18,75,"عیب‌یابی ۴۰۳/۵۰۲/۵۰۴","هر کد خطا یک علت مشخص دارد.","Debugging 403/502/504","Each status code points at a specific cause.","403 502 504 permission upstream timeout selinux"],
["14","14-cap1.html",0,5,60,"پروژهٔ ۱ — یک سایت استاتیک با HTTPS","سرو کردن فایل، فشرده‌سازی، کش و گواهی معتبر.","Project 1 — a static site with HTTPS","Serving files, compression, caching and a valid certificate.","capstone static",1],
["15","15-cap2.html",0,7,90,"پروژهٔ ۲ — پروکسی جلوی یک اپ","reverse proxy با هدرهای درست، WebSocket و آپلود حجیم.","Project 2 — proxying an app","A reverse proxy with correct headers, WebSockets and large uploads.","capstone proxy",2],
["16","16-cap3.html",0,9,150,"پروژهٔ ۳ — gateway کامل","سه سرویس پشت یک Nginx با SSL، کش، load balancing و rate limiting.","Project 3 — a complete gateway","Three services behind one Nginx with SSL, caching, load balancing and rate limits.","capstone gateway",3]
]});

/* ═══════════════ ۰۳ — لینوکس برای شبکه ═══════════════ */
C.push({
  id:"03-linux-network", dir:"03-linux-network", accent:"#B45309", cat:"infra",
  ico:'<rect x="2.5" y="4" width="19" height="16" rx="3"/><path d="m7 10 2.6 2.2L7 14.4M12.4 15h4.4" stroke-linecap="round"/>',
  fa:{name:"لینوکس برای شبکه", desc:"شل، مجوز، سرویس، فایروال، SSH و عیب‌یابی شبکه — همان چیزی که برای زنده نگه‌داشتن یک سرور لازم است.",
      intro:"این مسیر قرار نیست تو را مدیر سیستم کند. قرار است وقتی سرورت جواب نمی‌دهد، بدانی کجا را نگاه کنی و با چه دستوری — به‌جای اینکه پیام خطا را کورکورانه جستجو کنی."},
  en:{name:"Linux for networking", desc:"Shell, permissions, services, firewall, SSH and network debugging — what it takes to keep a server alive.",
      intro:"This track will not make you a sysadmin. It will make sure that when your server stops answering, you know where to look and with which command."},
  ch:[
["01","01-shell.html",0,18,75,"شل و فایل‌سیستم","مسیر، ناوبری، و اینکه هر چیزی فایل است.","The shell and the filesystem","Paths, navigation, and everything-is-a-file.","bash ls cd path fhs"],
["02","02-perms.html",0,18,75,"کاربر، گروه، مجوز","chmod، chown و اینکه ۷۵۵ یعنی چه.","Users, groups, permissions","chmod, chown, and what 755 actually means.","chmod chown umask sudo group"],
["03","03-systemd.html",0,18,80,"پردازه و سرویس (systemd)","unit، سرویس خودت، و چرا بالا نمی‌آید.","Processes and services (systemd)","Units, your own service, and why it will not start.","systemd systemctl unit service journal"],
["04","04-packages.html",0,18,65,"بسته و ریپازیتوری","apt و dnf بدون خراب کردن سیستم.","Packages and repositories","apt and dnf without breaking the system.","apt dnf repository gpg key"],
["05","05-text.html",0,18,80,"ابزار متن: grep، awk، sed","استخراج جواب از لاگ در یک خط.","Text tools: grep, awk, sed","Pulling answers out of a log in one line.","grep awk sed cut sort uniq pipe"],
["06","06-bash.html",0,18,80,"اسکریپت‌نویسی bash","اسکریپتی که وقتی خطا داد، متوقف شود.","Bash scripting","Scripts that stop when something goes wrong.","bash set euo pipefail function trap"],
["07","07-net.html",0,18,80,"مدل شبکه در عمل: ip، route، DNS","آدرس، مسیر، نام — سه لایه‌ای که همیشه یکی‌شان خراب است.","Networking in practice: ip, route, DNS","Address, route, name — one of the three is always the problem.","ip route dns resolv netplan"],
["08","08-netdebug.html",0,18,80,"عیب‌یابی: ping، traceroute، ss، tcpdump","از «کار نمی‌کند» تا «این پورت بسته است».","Debugging: ping, traceroute, ss, tcpdump","From “it does not work” to “that port is closed”.","ping traceroute ss netstat tcpdump mtr dig"],
["09","09-firewall.html",0,18,75,"فایروال: nftables / ufw","قانون بنویس، خودت را بیرون نیانداز.","Firewalls: nftables / ufw","Write rules without locking yourself out.","ufw nftables iptables firewall rule"],
["10","10-ssh.html",0,18,75,"SSH، کلید، tunnel، ssh/config","ورود بی‌رمز، تونل، و پیکربندی تمیز.","SSH, keys, tunnels, ssh/config","Passwordless login, tunnels, and a clean config.","ssh key tunnel port forward config agent"],
["11","11-logs.html",0,18,65,"لاگ و journald","journalctl و لاگ‌های ماندگار.","Logs and journald","journalctl and persistent logs.","journalctl syslog rsyslog logrotate"],
["12","12-monitor.html",0,18,70,"مانیتورینگ منابع و دیسک","CPU، RAM، I/O و دیسکی که پر شد.","Resource and disk monitoring","CPU, RAM, I/O and the disk that filled up.","top htop df du iostat free"],
["13","13-cron.html",0,18,65,"cron و زمان‌بندی","cron و systemd timer، و چرا اجرا نشد.","cron and scheduling","cron and systemd timers, and why it did not run.","cron crontab timer at"],
["14","14-hardening.html",0,18,80,"سخت‌سازی سرور","حداقل کارهایی که قبل از production باید کرد.","Server hardening","The minimum you must do before production.","hardening fail2ban ssh root sysctl"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — کاربر، سرویس، فایروال","یک سرویس کوچک بساز، با کاربر اختصاصی اجرا کن و پورتش را باز کن.","Project 1 — user, service, firewall","Build a small service, run it as its own user and open its port.","capstone service",1],
["16","16-cap2.html",0,7,90,"پروژهٔ ۲ — اسکریپت پشتیبان‌گیری زمان‌بندی‌شده","اسکریپت مقاوم، لاگ‌گیری، چرخش نسخه‌ها و اجرای شبانه.","Project 2 — a scheduled backup script","A resilient script with logging, rotation and a nightly run.","capstone backup cron",2],
["17","17-cap3.html",0,9,150,"پروژهٔ ۳ — آماده‌سازی کامل یک VPS تازه","از سرور خام تا سروری سخت‌شده و آمادهٔ production.","Project 3 — preparing a fresh VPS","From a raw server to a hardened, production-ready one.","capstone vps hardening",3]
]});

/* ═══════════════ ۰۴ — دواپس ═══════════════ */
C.push({
  id:"04-devops", dir:"04-devops", accent:"#8B5CF6", cat:"infra", pre:["28-git"], soft:["01-docker","03-linux-network"],
  ico:'<path d="M8.2 12c0 2.2-1.5 4-3.3 4S1.5 14.2 1.5 12s1.5-4 3.4-4c2.7 0 4.2 8 6.9 8 1.9 0 3.4-1.8 3.4-4s-1.5-4-3.4-4c-1.3 0-2.4.9-3 2.2" stroke-linecap="round"/><path d="M18 8h4.5M20.2 5.8V10" stroke-linecap="round" opacity=".85"/>',
  fa:{name:"دواپس و CI/CD", desc:"Git، CI/CD، Terraform، Ansible، Prometheus و انتشار بدون قطعی — و postmortem وقتی خراب شد.",
      intro:"این مسیر دربارهٔ ابزار نیست، دربارهٔ فاصلهٔ بین «کد نوشتم» و «کاربر دارد ازش استفاده می‌کند» است. هر فصل یک تکه از آن فاصله را خودکار می‌کند."},
  en:{name:"DevOps & CI/CD", desc:"Git, CI/CD, Terraform, Ansible, Prometheus and zero-downtime releases — plus the postmortem when it breaks.",
      intro:"This track is not about tools; it is about the gap between “I wrote the code” and “a user is using it”. Each chapter automates one piece of that gap."},
  ch:[
["01","01-what.html",0,18,65,"DevOps چیست و چه چیزی نیست","نه یک سِمَت، نه یک ابزار.","What DevOps is and is not","Not a job title, not a tool.","devops culture sre"],
["02","02-git.html",0,18,85,"Git در عمل: branch، merge، rebase","استراتژی شاخه‌بندی و بیرون آمدن از دردسر.","Git in practice: branch, merge, rebase","Branching strategy and getting out of trouble.","git branch merge rebase conflict reflog"],
["03","03-ci.html",0,18,85,"CI: تست خودکار، lint، build","GitHub Actions از صفر.","CI: automated tests, lint, build","GitHub Actions from zero.","ci github actions workflow matrix cache"],
["04","04-cd.html",0,18,80,"CD و محیط‌ها","staging، production و تأیید دستی.","CD and environments","Staging, production and manual approval.","cd deploy environment approval"],
["05","05-artifacts.html",0,18,70,"ساخت artifact و نسخه‌گذاری","semver و اینکه چه چیزی را باید نگه داشت.","Artifacts and versioning","Semver and what is worth keeping.","artifact semver release tag"],
["06","06-terraform.html",0,18,90,"IaC با Terraform","state، plan، apply و اینکه چرا state مقدس است.","IaC with Terraform","State, plan, apply — and why state is sacred.","terraform state plan apply module"],
["07","07-ansible.html",0,18,80,"Ansible","playbook، inventory و idempotency.","Ansible","Playbooks, inventories and idempotency.","ansible playbook inventory role idempotent"],
["08","08-monitoring.html",0,18,85,"مانیتورینگ: Prometheus + Grafana","متریک، scrape، و داشبوردی که به درد بخورد.","Monitoring: Prometheus + Grafana","Metrics, scraping, and a dashboard worth looking at.","prometheus grafana metrics promql exporter"],
["09","09-logging.html",0,18,75,"لاگ متمرکز","جمع‌آوری، ساختاردهی و جستجو.","Centralised logging","Collection, structure and search.","loki elastic fluentbit structured logging"],
["10","10-alerting.html",0,18,70,"alert و on-call","هشداری که نصف شب بیدارت کند باید ارزشش را داشته باشد.","Alerting and on-call","An alert that wakes you at 3am had better be worth it.","alert alertmanager oncall slo"],
["11","11-release.html",0,18,80,"blue-green، canary، rollback","انتشار بدون قطعی و راه برگشت.","Blue-green, canary, rollback","Releasing without downtime, and the way back.","blue-green canary rollback feature flag"],
["12","12-secrets.html",0,18,70,"مدیریت secret","Vault، sealed secret و چیزهایی که نباید در Git باشند.","Secret management","Vault, sealed secrets, and what must never be in Git.","vault secret sops kms"],
["13","13-backup.html",0,18,75,"backup و disaster recovery","پشتیبانی که تست نشده، پشتیبان نیست.","Backup and disaster recovery","An untested backup is not a backup.","backup restore rpo rto dr"],
["14","14-postmortem.html",0,18,65,"postmortem","بدون مقصر، با درس.","Postmortems","Blameless, with an actual lesson.","postmortem incident blameless timeline"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — اولین خط لولهٔ CI","تست و lint خودکار روی هر push.","Project 1 — your first CI pipeline","Automated tests and linting on every push.","capstone ci",1],
["16","16-cap2.html",0,7,90,"پروژهٔ ۲ — استقرار خودکار به staging","بیلد ایمیج، انتشار و استقرار با تأیید دستی.","Project 2 — automated deploy to staging","Build the image, publish it and deploy behind a manual approval.","capstone cd staging",2],
["17","17-cap3.html",0,9,180,"پروژهٔ ۳ — از commit تا production با rollback خودکار","خط لولهٔ کامل با canary، مانیتورینگ و برگشت خودکار روی خطا.","Project 3 — commit to production with automatic rollback","A full pipeline with canary releases, monitoring and automatic rollback on failure.","capstone pipeline canary rollback",3]
]});

/* ═══════════════ ۰۵ — SQL و SQL Server ═══════════════ */
C.push({
  id:"05-sql", dir:"05-sql", accent:"#DC2626", cat:"data",
  ico:'<ellipse cx="12" cy="6" rx="7.5" ry="3.2"/><path d="M4.5 6v6c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V6"/><path d="M4.5 12v6c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2v-6"/>',
  fa:{name:"SQL و SQL Server", desc:"از SELECT تا خواندن execution plan و درمان کوئری کند — با تمرین روی دادهٔ واقعی.",
      intro:"نوشتن کوئری که جواب بدهد آسان است. نوشتن کوئری که روی ده میلیون سطر هم جواب بدهد، مهارت دیگری است. این مسیر هر دستور را با دلیلش می‌دهد: چرا بهینه‌ساز این نقشه را انتخاب کرد، چرا این ایندکس کمک می‌کند و آن یکی نه، و چرا این کوئری که درست به نظر می‌رسد سطرها را تکثیر می‌کند. کد کپی‌کردنی همه‌جا هست؛ چیزی که کم است، فهمیدن آن است."},
  en:{name:"SQL & SQL Server", desc:"From SELECT to reading an execution plan and fixing a slow query — practised on real data.",
      intro:"Writing a query that returns the right answer is easy. Writing one that still answers over ten million rows is a different skill. This track teaches both and spends most of its time on the second."},
  ch:[
["01","01-relational.html",0,18,85,"مدل رابطه‌ای","چرا داده را در جدول می‌ریزیم و نه در فایل — و ایدهٔ ‎relation‎ از کجا آمد.","The relational model","Why we put data in tables rather than files — and where the idea of a relation came from.","relational codd table row tuple key"],
["02","02-install.html",0,18,75,"نصب و ابزار","‏SQL Server با داکر، ‎SSMS‎ و ‎Azure Data Studio‎.","Installation and tooling","SQL Server on Docker, SSMS and Azure Data Studio.","install docker ssms azure data studio sqlcmd"],
["03","03-select.html",0,18,80,"‏SELECT","ترتیب واقعی اجرا — چرا ‎WHERE‎ قبل از ‎SELECT‎ اجرا می‌شود.","SELECT","The real order of execution — why WHERE runs before SELECT.","select from where logical order projection"],
["04","04-filtering.html",0,18,85,"فیلتر کردن","‏WHERE، ‎IN‎، ‎BETWEEN‎، ‎LIKE‎ و منطق سه‌مقداری.","Filtering","WHERE, IN, BETWEEN, LIKE and three-valued logic.","where in between like predicate"],
["05","05-null.html",0,18,85,"‏NULL","نه صفر است نه رشتهٔ خالی — و چرا ‎= NULL‎ هیچ‌وقت درست نیست.","NULL","Neither zero nor empty string — and why = NULL is never right.","null is unknown three-valued coalesce isnull"],
["06","06-sorting.html",0,18,75,"مرتب‌سازی و صفحه‌بندی","‏ORDER BY، ‎OFFSET/FETCH‎ و ‎collation‎ فارسی.","Sorting and paging","ORDER BY, OFFSET/FETCH and Persian collation.","order by offset fetch top collation"],
["07","07-joins-1.html",0,18,95,"‏JOIN ۱","‏INNER و ‎LEFT‎ — با نمودار، و اینکه ‎ON‎ دقیقاً چه می‌کند.","JOINs 1","INNER and LEFT — with diagrams, and what ON really does.","join inner left on cartesian"],
["08","08-joins-2.html",0,18,95,"‏JOIN ۲","‏RIGHT، ‎FULL‎، ‎CROSS‎، ‎self join‎ و تکثیر ناخواستهٔ سطرها.","JOINs 2","RIGHT, FULL, CROSS, self joins, and accidental row multiplication.","right full cross self join duplicate fanout"],
["09","09-aggregate.html",0,18,90,"تجمیع","‏GROUP BY، ‎HAVING‎، و تفاوت آن با ‎WHERE‎.","Aggregation","GROUP BY, HAVING, and how it differs from WHERE.","group by having count sum avg min max"],
["10","10-subqueries.html",0,18,90,"زیرکوئری","‏scalar، ‎IN‎، ‎EXISTS‎ و زیرکوئری همبسته.","Subqueries","Scalar, IN, EXISTS and correlated subqueries.","subquery correlated exists in any all"],
["11","11-cte.html",0,18,90,"‏CTE","کوئری خوانا به‌جای تودرتو، و ‎CTE‎ بازگشتی.","CTEs","Readable queries instead of nested ones, plus recursive CTEs.","cte with recursive anchor readable"],
["12","12-window-1.html",0,18,100,"‏window function ۱","‏OVER، ‎PARTITION BY‎ — تجمیع بدون از دست دادن سطرها.","Window functions 1","OVER and PARTITION BY — aggregating without losing rows.","over partition window rank row_number"],
["13","13-window-2.html",0,18,100,"‏window function ۲","‏LAG، ‎LEAD‎، مجموع تجمعی و قاب پنجره.","Window functions 2","LAG, LEAD, running totals and window frames.","lag lead running total frame rows range"],
["14","14-pivot.html",0,18,80,"‏PIVOT و شرط","چرخاندن سطر به ستون، و ‎CASE‎ در تجمیع.","PIVOT and conditionals","Turning rows into columns, and CASE inside aggregates.","pivot unpivot case conditional aggregate"],
["15","15-set-ops.html",0,18,75,"عملگرهای مجموعه‌ای","‏UNION، ‎INTERSECT‎، ‎EXCEPT‎ و ‎UNION ALL‎.","Set operators","UNION, INTERSECT, EXCEPT and UNION ALL.","union intersect except all distinct"],
["16","16-insert.html",0,18,80,"‏INSERT","درج تکی، انبوه، از روی ‎SELECT‎ و ‎IDENTITY‎.","INSERT","Single, bulk, from SELECT, and IDENTITY.","insert values select into identity bulk"],
["17","17-update-delete.html",0,18,90,"‏UPDATE و ‎DELETE‎","تغییر داده بدون فاجعه — و چرا همیشه اول ‎SELECT‎.","UPDATE and DELETE","Changing data without disaster — and why you always SELECT first.","update delete truncate where safety transaction"],
["18","18-merge.html",0,18,80,"‏MERGE و ‎OUTPUT‎","همگام‌سازی دو جدول، و گرفتن سطرهای تغییرکرده.","MERGE and OUTPUT","Synchronising two tables and capturing changed rows.","merge upsert output inserted deleted"],
["19","19-datatypes.html",0,18,95,"نوع داده","‏VARCHAR در برابر ‎NVARCHAR‎، ‎DECIMAL‎ در برابر ‎FLOAT‎ — و فارسی.","Data types","VARCHAR versus NVARCHAR, DECIMAL versus FLOAT — and Persian text.","varchar nvarchar decimal float date unicode"],
["20","20-constraints.html",0,18,90,"‏constraint","‏PRIMARY KEY، ‎FOREIGN KEY‎، ‎UNIQUE‎، ‎CHECK‎ و ‎DEFAULT‎.","Constraints","PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK and DEFAULT.","primary foreign unique check default cascade"],
["21","21-design.html",0,18,95,"طراحی جدول","از نیاز تا شِما: کلید طبیعی یا مصنوعی، و نام‌گذاری.","Table design","From requirement to schema: natural or surrogate keys, and naming.","design schema surrogate natural key naming"],
["22","22-normalization.html",0,18,95,"نرمال‌سازی","‏1NF تا ‎3NF‎ با مثال واقعی — و مشکلی که هر فرم حل می‌کند.","Normalisation","1NF to 3NF with a real example — and the problem each form solves.","normalization 1nf 2nf 3nf bcnf anomaly"],
["23","23-denormalization.html",0,18,85,"‏denormalization آگاهانه","کِی عمداً قاعده را بشکنیم، و هزینه‌اش را بپذیریم.","Deliberate denormalisation","When to break the rule on purpose, and accept the cost.","denormalization redundancy tradeoff cache column"],
["24","24-indexes-1.html",0,18,100,"ایندکس ۱","ساختار ‎B-tree‎، ‎clustered‎ در برابر ‎nonclustered‎.","Indexes 1","The B-tree structure, clustered versus nonclustered.","index btree clustered nonclustered heap"],
["25","25-indexes-2.html",0,18,100,"ایندکس ۲","ترتیب ستون، ‎covering‎، ‎INCLUDE‎ و ایندکس فیلترشده.","Indexes 2","Column order, covering indexes, INCLUDE and filtered indexes.","covering include filtered column order selectivity"],
["26","26-indexes-3.html",0,18,95,"ایندکس ۳","هزینهٔ ایندکس: کندی نوشتن، ‎fragmentation‎ و نگه‌داری.","Indexes 3","The cost of indexes: slower writes, fragmentation and maintenance.","fragmentation rebuild reorganize fillfactor cost"],
["27","27-plan-1.html",0,18,105,"برنامهٔ اجرا ۱","خواندن نقشه: ‎scan‎ در برابر ‎seek‎، و جهت خواندن.","Execution plans 1","Reading the map: scan versus seek, and which way to read it.","execution plan scan seek estimated actual"],
["28","28-plan-2.html",0,18,105,"برنامهٔ اجرا ۲","‏nested loop، ‎hash‎، ‎merge‎ — و تخمین اشتباه بهینه‌ساز.","Execution plans 2","Nested loops, hash and merge joins — and bad optimiser estimates.","nested loop hash merge cardinality estimate spill"],
["29","29-statistics.html",0,18,85,"آمار","بهینه‌ساز از کجا می‌داند چند سطر برمی‌گردد.","Statistics","How the optimiser knows how many rows will come back.","statistics histogram cardinality update auto"],
["30","30-transactions.html",0,18,95,"تراکنش","‏ACID در عمل، ‎COMMIT‎، ‎ROLLBACK‎ و تراکنش تودرتو.","Transactions","ACID in practice, COMMIT, ROLLBACK and nesting.","transaction acid commit rollback savepoint xact"],
["31","31-isolation.html",0,18,100,"سطوح ایزوله","‏dirty read تا ‎serializable‎ — با آزمایش عملی هر کدام.","Isolation levels","From dirty reads to serializable — demonstrated for each.","isolation dirty phantom repeatable snapshot rcsi"],
["32","32-locking.html",0,18,100,"قفل و ‎deadlock‎","چه چیزی قفل می‌شود، چرا، و باز کردن گره.","Locking and deadlocks","What gets locked, why, and how to untangle it.","lock escalation deadlock graph blocking wait"],
["33","33-procedures.html",0,18,90,"‏stored procedure","پارامتر، خروجی، و ‎parameter sniffing‎.","Stored procedures","Parameters, output, and parameter sniffing.","procedure parameter sniffing recompile output"],
["34","34-functions.html",0,18,85,"تابع","‏scalar در برابر ‎table-valued‎ — و چرا ‎scalar‎ کند است.","Functions","Scalar versus table-valued — and why scalar functions are slow.","function scalar inline table-valued udf"],
["35","35-triggers.html",0,18,80,"‏trigger","قدرت پنهان، و اینکه چرا معمولاً بد است.","Triggers","Hidden power, and why it is usually a bad idea.","trigger after instead of inserted deleted"],
["36","36-tsql-1.html",0,18,85,"‏T-SQL ۱","متغیر، شرط، حلقه و جدول موقت.","T-SQL 1","Variables, conditionals, loops and temp tables.","declare if while temp table variable"],
["37","37-tsql-2.html",0,18,85,"‏T-SQL ۲","‏TRY/CATCH، ‎THROW‎ و مدیریت خطای تراکنشی.","T-SQL 2","TRY/CATCH, THROW and transactional error handling.","try catch throw error xact_abort"],
["38","38-dynamic-sql.html",0,18,85,"‏SQL پویا","‏sp_executesql، و تزریق ‎SQL‎ در سمت پایگاه‌داده.","Dynamic SQL","sp_executesql, and SQL injection on the database side.","dynamic sql sp_executesql injection quotename"],
["39","39-json-xml.html",0,18,80,"‏JSON و ‎XML‎","‏FOR JSON، ‎OPENJSON‎ و کِی داده را نیمه‌ساختاریافته نگه داریم.","JSON and XML","FOR JSON, OPENJSON, and when to keep data semi-structured.","json openjson for json xml semi-structured"],
["40","40-partitioning.html",0,18,85,"پارتیشن‌بندی","جدول‌های خیلی بزرگ، و ‎partition switching‎.","Partitioning","Very large tables, and partition switching.","partition function scheme switching sliding window"],
["41","41-security.html",0,18,90,"امنیت","‏login، ‎user‎، ‎role‎، ‎schema‎ و کمترین دسترسی.","Security","Logins, users, roles, schemas and least privilege.","login user role grant schema tde encryption"],
["42","42-backup.html",0,18,95,"پشتیبان و بازیابی","‏full، ‎differential‎، ‎log‎ و بازیابی نقطه‌ای واقعی.","Backup and recovery","Full, differential, log backups and real point-in-time recovery.","backup restore recovery model log pitr"],
["43","43-maintenance.html",0,18,85,"نگه‌داری","ایندکس، آمار، ‎DBCC‎ و کار زمان‌بندی‌شده.","Maintenance","Indexes, statistics, DBCC and scheduled jobs.","maintenance dbcc checkdb agent job rebuild"],
["44","44-monitoring.html",0,18,95,"مانیتورینگ","‏DMV، ‎Query Store‎ و ‎wait statistics‎.","Monitoring","DMVs, the Query Store and wait statistics.","dmv query store wait stats extended events"],
["45","45-tuning-1.html",0,18,105,"بهینه‌سازی ۱","روش سیستماتیک: اندازه‌گیری، تشخیص، درمان — نه حدس.","Tuning 1","A systematic method: measure, diagnose, treat — not guess.","tuning method measure bottleneck slow query"],
["46","46-tuning-2.html",0,18,105,"بهینه‌سازی ۲","بازنویسی کوئری: ‎SARGable‎، ‎OR‎ و تابع روی ستون.","Tuning 2","Rewriting queries: SARGability, OR, and functions on columns.","sargable rewrite predicate function index usage"],
["47","47-antipatterns.html",0,18,90,"ضدالگوها","‏SELECT *‎، ‎cursor‎، ‎NOLOCK‎ و بقیهٔ عادت‌های گران.","Anti-patterns","SELECT *, cursors, NOLOCK and other expensive habits.","antipattern select star cursor nolock eav"],
["48","48-app-integration.html",0,18,85,"اتصال از اپ","‏connection pool، ‎ORM‎ و ‎N+1‎ از سمت پایگاه‌داده.","Connecting from an app","Connection pooling, ORMs and N+1 seen from the database side.","pool orm n+1 parameterized ado efcore"],
["49","49-cap1.html",0,5,90,"پروژهٔ ۱ — طراحی شِما","از نیاز تا جدول، با کلید و ‎constraint‎ درست.","Project 1 — design a schema","From requirements to tables, with correct keys and constraints.","capstone schema design",1],
["50","50-cap2.html",0,7,170,"پروژهٔ ۲ — گزارش تحلیلی","‏window، ‎CTE‎ و ‎PIVOT‎ روی دادهٔ واقعی.","Project 2 — analytical reporting","Windows, CTEs and PIVOT over real data.","capstone report analytics",2],
["51","51-cap3.html",0,9,260,"پروژهٔ ۳ — پایگاه‌دادهٔ فروش با دادهٔ حجیم","بارگذاری میلیون‌ها سطر و رساندن کوئری به زیر یک ثانیه.","Project 3 — a sales database at scale","Load millions of rows and get the query under one second.","capstone performance tuning",3]
]});

/* ═══════════════ ۰۶ — کوبرنتیز ═══════════════ */
C.push({
  id:"06-kubernetes", dir:"06-kubernetes", accent:"#326CE5", cat:"infra", pre:["01-docker"], soft:["03-linux-network"],
  ico:'<path d="M12 2.6 20 7v10l-8 4.4L4 17V7z"/><circle cx="12" cy="12" r="2.6"/><path d="M12 4.6v4.8M12 14.6v4.8M6.4 8.8l4 2.2M13.6 13l4 2.2M17.6 8.8l-4 2.2M10.4 13l-4 2.2" stroke-linecap="round"/>',
  fa:{name:"کوبرنتیز", desc:"وقتی چند کانتینر روی چند سرور می‌شوند: Pod، Deployment، Service، Ingress، مقیاس‌پذیری و عیب‌یابی.",
      intro:"داکر به تو می‌گوید یک کانتینر را چطور اجرا کنی. کوبرنتیز جواب سؤال بعدی است: پنجاه کانتینر روی ده سرور را چه کسی زنده نگه می‌دارد، چه کسی جایگزینشان می‌کند وقتی می‌میرند، و چه کسی ترافیک را بینشان پخش می‌کند."},
  en:{name:"Kubernetes", desc:"When containers become many across many servers: Pods, Deployments, Services, Ingress, scaling and debugging.",
      intro:"Docker tells you how to run one container. Kubernetes answers the next question: who keeps fifty containers alive across ten servers, who replaces them when they die, and who spreads traffic between them."},
  ch:[
["01","01-why.html",0,18,75,"چرا کوبرنتیز؛ مسئله‌ای که داکر تنها حل نمی‌کند","کِی لازم است و — مهم‌تر — کِی لازم نیست.","Why Kubernetes; what Docker alone cannot do","When you need it and — more importantly — when you do not.","kubernetes orchestration why scale"],
["02","02-architecture.html",0,18,80,"معماری کلاستر","control plane، node، etcd، scheduler و kubelet.","Cluster architecture","Control plane, nodes, etcd, scheduler and kubelet.","control plane etcd scheduler kubelet node"],
["03","03-pod.html",0,18,75,"Pod: کوچک‌ترین واحد","چرا واحد اجرا Pod است و نه کانتینر.","Pods: the smallest unit","Why the unit of execution is a Pod and not a container.","pod sidecar init container"],
["04","04-kubectl.html",0,18,75,"kubectl در عمل","get، describe، logs، exec، apply — و خواندن YAML.","kubectl in practice","get, describe, logs, exec, apply — and reading YAML.","kubectl apply describe logs context"],
["05","05-deployment.html",0,18,80,"Deployment و ReplicaSet","اعلام وضعیت مطلوب، و به‌روزرسانی تدریجی.","Deployments and ReplicaSets","Declaring desired state, and rolling updates.","deployment replicaset rollout strategy"],
["06","06-service.html",0,18,80,"Service و انواعش","ClusterIP، NodePort، LoadBalancer و DNS داخلی.","Services and their types","ClusterIP, NodePort, LoadBalancer and internal DNS.","service clusterip nodeport loadbalancer dns"],
["07","07-ingress.html",0,18,80,"Ingress و مسیریابی HTTP","یک نقطهٔ ورود برای چند سرویس، با TLS.","Ingress and HTTP routing","One entry point for many services, with TLS.","ingress controller tls host path"],
["08","08-config.html",0,18,70,"ConfigMap و Secret","پیکربندی بیرون از ایمیج، در سطح کلاستر.","ConfigMaps and Secrets","Configuration outside the image, at cluster level.","configmap secret env volume mount"],
["09","09-storage.html",0,18,80,"دادهٔ ماندگار: PV، PVC، StorageClass","وقتی Pod می‌میرد، داده نباید بمیرد.","Persistent data: PV, PVC, StorageClass","When a Pod dies, the data must not.","persistentvolume pvc storageclass"],
["10","10-resources.html",0,18,75,"منابع: request، limit و QoS","چرا Pod تو Pending مانده و چرا آن یکی کشته شد.","Resources: requests, limits and QoS","Why your Pod is Pending and why that other one got killed.","request limit qos oom pending"],
["11","11-scaling.html",0,18,75,"مقیاس‌پذیری خودکار","HPA بر اساس CPU و متریک سفارشی.","Autoscaling","HPA on CPU and on custom metrics.","hpa autoscale metrics server"],
["12","12-rbac.html",0,18,75,"Namespace، RBAC و ServiceAccount","چه کسی اجازهٔ چه کاری را دارد.","Namespaces, RBAC and ServiceAccounts","Who is allowed to do what.","namespace rbac role binding serviceaccount"],
["13","13-probes.html",0,18,70,"Probe: liveness، readiness، startup","تفاوت «بالا هست» و «آمادهٔ ترافیک است».","Probes: liveness, readiness, startup","The difference between “it is up” and “it is ready for traffic”.","liveness readiness startup probe"],
["14","14-workloads.html",0,18,80,"StatefulSet، DaemonSet، Job و CronJob","وقتی Deployment جواب نمی‌دهد.","StatefulSets, DaemonSets, Jobs and CronJobs","When a Deployment is the wrong shape.","statefulset daemonset job cronjob"],
["15","15-helm.html",0,18,80,"Helm","بسته‌بندی و پیکربندی چند محیط با یک chart.","Helm","Packaging and configuring many environments from one chart.","helm chart values template release"],
["16","16-debug.html",0,18,85,"عیب‌یابی: CrashLoopBackOff، Pending، ImagePullBackOff","هر وضعیت یک علت مشخص دارد.","Debugging: CrashLoopBackOff, Pending, ImagePullBackOff","Each status points at a specific cause.","crashloopbackoff imagepullbackoff pending evicted"],
["17","17-cap1.html",0,5,70,"پروژهٔ ۱ — اولین اپ روی کلاستر","یک Deployment و یک Service، با کلاستر محلی.","Project 1 — your first app on a cluster","One Deployment and one Service on a local cluster.","capstone kind minikube",1],
["18","18-cap2.html",0,7,110,"پروژهٔ ۲ — اپ سه‌سرویسه با Ingress","سه سرویس، پیکربندی، دادهٔ ماندگار و یک نقطهٔ ورود.","Project 2 — three services behind an Ingress","Three services, configuration, persistent data and one entry point.","capstone ingress configmap",2],
["19","19-cap3.html",0,9,180,"پروژهٔ ۳ — کلاستر آمادهٔ production","با HPA، RBAC، probe، منابع محدود و مانیتورینگ.","Project 3 — a production-ready cluster","With HPA, RBAC, probes, resource limits and monitoring.","capstone production hpa rbac",3]
]});

/* ═══════════════ ۰۷ — معماری نرم‌افزار ═══════════════ */
C.push({
  id:"07-architecture", dir:"07-architecture", accent:"#0EA5A5", cat:"arch", soft:["47-oop"],
  ico:'<path d="M3 20h18M5 20V9l7-5 7 5v11"/><path d="M9.5 20v-5.5h5V20"/><path d="M9.5 11h5" stroke-linecap="round"/>',
  fa:{name:"معماری نرم‌افزار و تحلیل سیستم", desc:"SOLID، الگوهای طراحی، معماری لایه‌ای، شش‌ضلعی و Clean، DDD مقدماتی و هرم تست — با مثال در چند زبان.",
      intro:"معماری یعنی تصمیم‌هایی که عوض کردنشان بعداً گران است. این مسیر یادت می‌دهد کدام تصمیم‌ها این‌طورند، چطور بگیری‌شان، و چطور کدی بنویسی که شش ماه بعد هم بشود عوضش کرد. مثال‌ها در ‎C#‎، پایتون، تایپ‌اسکریپت و Go می‌آیند."},
  en:{name:"Software architecture & system analysis", desc:"SOLID, design patterns, layered/hexagonal/clean architecture, introductory DDD and the test pyramid — with examples in several languages.",
      intro:"Architecture is the set of decisions that are expensive to change later. This track teaches you which decisions those are, how to make them, and how to write code you can still change in six months. Examples come in C#, Python, TypeScript and Go."},
  ch:[
["01","01-what.html",0,18,75,"معماری چیست و کدام تصمیم معماری است","تفاوت تصمیم معماری با تصمیم پیاده‌سازی، و معیار «گران برای تغییر».","What architecture is, and which decisions count","Architectural versus implementation decisions, and the “expensive to change” test.","architecture decision significant tradeoff"],
["02","02-analysis.html",0,18,85,"تحلیل سیستم: از نیاز تا مدل","استخراج نیاز، ‎use case‎ و اولین مدل دامنه.","System analysis: from requirement to model","Eliciting requirements, use cases and a first domain model.","analysis requirement usecase domain model"],
["03","03-qualities.html",0,18,80,"کیفیت‌ها و trade-off","تغییرپذیری، تست‌پذیری، کارایی — نمی‌شود همه را با هم داشت.","Quality attributes and trade-offs","Changeability, testability, performance — you cannot have them all.","quality attribute tradeoff nfr"],
["04","04-coupling.html",0,18,85,"وابستگی و جهت آن","‏coupling، cohesion، و اینکه چرا جهت وابستگی مهم‌تر از وجودش است.","Coupling and its direction","Coupling, cohesion, and why a dependency's direction matters more than its existence.","coupling cohesion dependency direction"],
["05","05-solid-1.html",0,18,85,"‏SOLID ۱: SRP و OCP","با کد واقعی، نه مثال دایره و مربع.","SOLID 1: SRP and OCP","With real code, not shapes and squares.","solid srp ocp single responsibility open closed"],
["06","06-solid-2.html",0,18,85,"‏SOLID ۲: LSP، ISP، DIP","و اینکه ‎DIP‎ چطور کل جهت معماری را برمی‌گرداند.","SOLID 2: LSP, ISP, DIP","And how DIP reverses the direction of an entire architecture.","solid lsp isp dip liskov inversion"],
["07","07-layered.html",0,18,85,"معماری لایه‌ای کلاسیک","‏presentation، business، data — و جایی که به گِل می‌نشیند.","Classic layered architecture","Presentation, business, data — and where it sinks.","layered n-tier presentation domain data"],
["08","08-layered-problems.html",0,18,85,"مشکل معماری لایه‌ای","چرا لایهٔ دامنه به پایگاه‌داده وابسته می‌شود و تست‌پذیری می‌میرد.","What goes wrong with layers","Why the domain layer ends up depending on the database, and testability dies.","anemic leaky layer transaction script"],
["09","09-dip-inversion.html",0,18,90,"وارونگی وابستگی در عمل","همان کد لایه‌ای، با یک تغییر جهت — و اثرش بر تست.","Dependency inversion in practice","The same layered code with one direction reversed — and what it does to tests.","dip inversion interface port abstraction"],
["10","10-hexagonal.html",0,18,95,"معماری شش‌ضلعی","‏port و adapter: دامنه در مرکز، همه‌چیز دیگر افزونه.","Hexagonal architecture","Ports and adapters: the domain at the centre, everything else a plug-in.","hexagonal ports adapters driving driven"],
["11","11-hexagonal-build.html",0,18,95,"شش‌ضلعی، قدم‌به‌قدم","یک سرویس واقعی از صفر با ‎port‎ و ‎adapter‎، با کد کامل.","Building a hexagon, step by step","A real service from scratch with ports and adapters, in full.","hexagonal implementation adapter inmemory test"],
["12","12-onion.html",0,18,90,"معماری Onion","لایه‌های هم‌مرکز، و قاعدهٔ وابستگی رو به مرکز.","Onion architecture","Concentric layers, and the dependency rule pointing inward.","onion layer concentric core infrastructure"],
["13","13-clean.html",0,18,95,"‏Clean Architecture","‏entity، use case، adapter، framework — و قاعدهٔ وابستگی.","Clean Architecture","Entities, use cases, adapters, frameworks — and the dependency rule.","clean architecture usecase entity boundary"],
["14","14-clean-build.html",0,18,100,"‏Clean، قدم‌به‌قدم","همان سرویس، این‌بار با ساختار Clean کامل و مرزهای صریح.","Clean, step by step","The same service, now with a full Clean structure and explicit boundaries.","clean implementation interactor presenter gateway"],
["15","15-comparing.html",0,18,90,"لایه‌ای، شش‌ضلعی، Onion، Clean","چهار نام برای یک ایدهٔ مشترک — تفاوت‌های واقعی و ماتریس انتخاب.","Layered, hexagonal, onion, clean","Four names for one shared idea — the real differences, and a decision matrix.","comparison decision matrix architecture style"],
["16","16-cost.html",0,18,85,"هزینهٔ معماری تمیز","کِی ارزشش را دارد و کِی فقط پوشه‌های خالی می‌سازی.","The cost of clean architecture","When it pays off and when you are just creating empty folders.","overengineering yagni pragmatic cost"],
["17","17-creational.html",0,18,80,"الگوهای ساختنی","‏Factory، Builder، Prototype — و چرا ‎Singleton‎ معمولاً دام است.","Creational patterns","Factory, Builder, Prototype — and why Singleton is usually a trap.","factory builder singleton prototype"],
["18","18-structural.html",0,18,85,"الگوهای ساختاری","‏Adapter، Decorator، Facade، Proxy، Composite.","Structural patterns","Adapter, Decorator, Facade, Proxy, Composite.","adapter decorator facade proxy composite"],
["19","19-behavioral-1.html",0,18,85,"الگوهای رفتاری ۱","‏Strategy، Observer، Command.","Behavioural patterns 1","Strategy, Observer, Command.","strategy observer command"],
["20","20-behavioral-2.html",0,18,85,"الگوهای رفتاری ۲","‏State، Template Method، Chain of Responsibility، Mediator.","Behavioural patterns 2","State, Template Method, Chain of Responsibility, Mediator.","state template chain mediator"],
["21","21-repository.html",0,18,80,"‏Repository و Unit of Work","کِی مفیدند و کِی فقط یک لایهٔ اضافه‌اند.","Repository and Unit of Work","When they help and when they are just another layer.","repository unit of work persistence"],
["22","22-cqrs.html",0,18,85,"‏CQRS","جدا کردن خواندن از نوشتن، با هزینه‌هایش.","CQRS","Separating reads from writes, with its costs.","cqrs command query read model"],
["23","23-events.html",0,18,85,"معماری رویدادمحور","رویداد در برابر فراخوانی مستقیم، و سازگاری نهایی.","Event-driven architecture","Events versus direct calls, and eventual consistency.","event driven eventual consistency message"],
["24","24-testing.html",0,18,90,"هرم تست","‏unit، integration، contract — تستی که اجازهٔ تغییر بدهد.","The test pyramid","Unit, integration, contract — tests that let you change code.","test pyramid unit integration contract"],
["25","25-refactoring.html",0,18,85,"‏refactoring به‌سمت معماری","از کد موجود شروع کن، نه از دیاگرام.","Refactoring towards architecture","Start from the code you have, not from a diagram.","refactoring smell strangler legacy"],
["26","26-documenting.html",0,18,80,"مستندسازی معماری","‏C4 و ‎ADR‎: تصمیم را ثبت کن، نه فقط نتیجه را.","Documenting architecture","C4 and ADRs: record the decision, not only the outcome.","c4 adr diagram documentation"],
["27","27-cap1.html",0,5,90,"پروژهٔ ۱ — بازطراحی یک ‎CRUD‎ به لایه‌ای","از یک فایل هزارخطی به لایه‌هایی با مسئولیت روشن.","Project 1 — refactor a CRUD into layers","From one thousand-line file to layers with clear responsibilities.","capstone layered refactor",1],
["28","28-cap2.html",0,7,150,"پروژهٔ ۲ — همان سیستم، شش‌ضلعی","دامنه را از پایگاه‌داده و وب جدا کن و تست کامل بنویس.","Project 2 — the same system, hexagonal","Separate the domain from the database and the web, then test it fully.","capstone hexagonal test",2],
["29","29-cap3.html",0,9,220,"پروژهٔ ۳ — ‎Clean‎ با ‎CQRS‎ و رویداد","مرزهای صریح، مدل خواندن جدا، و سازگاری نهایی.","Project 3 — Clean with CQRS and events","Explicit boundaries, a separate read model, and eventual consistency.","capstone clean cqrs event",3]
]});

/* ═══════════════ ۰۸ — میکروسرویس‌ها ═══════════════ */
C.push({
  id:"08-microservices", dir:"08-microservices", accent:"#E11D74", cat:"arch", pre:["07-architecture"], soft:["01-docker"],
  ico:'<circle cx="12" cy="5" r="2.6"/><circle cx="5" cy="18" r="2.6"/><circle cx="19" cy="18" r="2.6"/><path d="M10.4 7.1 6.4 15.6M13.6 7.1l4 8.5M7.6 18h8.8" stroke-linecap="round"/>',
  fa:{name:"میکروسرویس و میکروفرانت‌اند", desc:"مرزبندی سرویس، REST و gRPC، صف و رویداد، Saga، تاب‌آوری، مشاهده‌پذیری و میکروفرانت‌اند.",
      intro:"میکروسرویس یک ارتقا نیست؛ یک معامله است. پیچیدگی داخل کد را کم می‌کنی و به شبکه منتقلش می‌کنی. این مسیر هر دو طرف معامله را نشان می‌دهد و بیشترین وقتش را روی سخت‌ترین بخش می‌گذارد: اینکه سرویس‌ها چطور با هم حرف بزنند."},
  en:{name:"Microservices & micro-frontends", desc:"Service boundaries, REST and gRPC, queues and events, Saga, resilience, observability and micro-frontends.",
      intro:"Microservices are not an upgrade; they are a trade. You move complexity out of your code and into the network. This track shows both sides of that trade and spends most of its time on the hardest part: how services talk to each other."},
  ch:[
["01","01-when.html",0,18,75,"مونولیت بد نیست — کِی میکروسرویس","نشانه‌های واقعی نیاز، و هزینه‌ای که می‌پذیری.","A monolith is not bad — when to split","The real signals, and the cost you accept.","monolith microservice when tradeoff"],
["02","02-boundaries.html",0,18,85,"مرزبندی سرویس‌ها","bounded context، و اشتباه مرزبندی بر اساس جدول.","Drawing service boundaries","Bounded contexts, and the mistake of splitting by table.","bounded context boundary decomposition"],
["03","03-rest.html",0,18,80,"ارتباط همگام ۱: REST","طراحی API، نسخه، و هزینهٔ فراخوانی زنجیره‌ای.","Synchronous 1: REST","API design, versioning, and the cost of call chains.","rest http api sync"],
["04","04-grpc.html",0,18,85,"ارتباط همگام ۲: gRPC","protobuf، استریم، و کِی از REST بهتر است.","Synchronous 2: gRPC","Protobuf, streaming, and when it beats REST.","grpc protobuf stream rpc"],
["05","05-queue.html",0,18,85,"ارتباط ناهمگام ۱: صف پیام","RabbitMQ، تحویل، تأیید و صف مرده.","Asynchronous 1: message queues","RabbitMQ, delivery, acknowledgements and dead letters.","rabbitmq queue amqp ack dlq"],
["06","06-stream.html",0,18,85,"ارتباط ناهمگام ۲: جریان رویداد","Kafka، partition، consumer group و ترتیب.","Asynchronous 2: event streams","Kafka, partitions, consumer groups and ordering.","kafka partition consumer group offset"],
["07","07-compare.html",0,18,75,"مقایسهٔ روش‌های ارتباط","ماتریس تصمیم: کدام روش برای کدام مسئله.","Comparing the communication styles","A decision matrix: which style for which problem.","sync async comparison decision matrix"],
["08","08-gateway.html",0,18,80,"API Gateway و BFF","یک درِ ورودی، و اینکه چرا هر کلاینت BFF خودش را می‌خواهد.","API Gateway and BFF","One front door, and why each client wants its own BFF.","gateway bff aggregation routing"],
["09","09-discovery.html",0,18,75,"service discovery و توزیع بار","سرویس‌ها چطور همدیگر را پیدا می‌کنند.","Service discovery and load balancing","How services find each other.","discovery consul dns load balancing"],
["10","10-data.html",0,18,85,"داده: هر سرویس، پایگاه‌دادهٔ خودش","و مسئله‌ای که این قانون می‌سازد.","Data: one database per service","And the problem this rule creates.","database per service data ownership"],
["11","11-saga.html",0,18,90,"تراکنش توزیع‌شده: Saga","choreography در برابر orchestration، و جبران.","Distributed transactions: Saga","Choreography versus orchestration, and compensation.","saga distributed transaction compensation"],
["12","12-outbox.html",0,18,80,"الگوی Outbox و تحویل تضمین‌شده","چطور پیام و پایگاه‌داده از هم جدا نیفتند.","The Outbox pattern and guaranteed delivery","How to keep your database and your messages in step.","outbox inbox dual write cdc"],
["13","13-resilience.html",0,18,85,"تاب‌آوری","retry، timeout، circuit breaker، bulkhead.","Resilience","Retries, timeouts, circuit breakers, bulkheads.","retry timeout circuit breaker bulkhead"],
["14","14-idempotency.html",0,18,75,"idempotency و پیام تکراری","شبکه پیام را دو بار می‌رساند. آماده باش.","Idempotency and duplicate messages","The network will deliver twice. Be ready.","idempotency exactly once deduplication"],
["15","15-observability.html",0,18,85,"مشاهده‌پذیری توزیع‌شده","لاگ، متریک و trace با OpenTelemetry.","Distributed observability","Logs, metrics and traces with OpenTelemetry.","tracing opentelemetry jaeger correlation"],
["16","16-versioning.html",0,18,75,"نسخه‌گذاری API و سازگاری","تغییر بدون شکستن کلاینت‌ها.","API versioning and compatibility","Changing without breaking your clients.","versioning backward compatibility contract"],
["17","17-microfrontend.html",0,18,85,"میکروفرانت‌اند","روش‌ها: build-time، run-time، module federation — و trade-offها.","Micro-frontends","Build-time, run-time, module federation — and the trade-offs.","micro frontend module federation shell"],
["18","18-antipatterns.html",0,18,80,"ضدالگوها","مونولیت توزیع‌شده، و بقیهٔ راه‌های شکست.","Anti-patterns","The distributed monolith, and the other ways to fail.","antipattern distributed monolith chatty"],
["19","19-cap1.html",0,5,80,"پروژهٔ ۱ — دو سرویس با REST","تقسیم یک مونولیت کوچک به دو سرویس.","Project 1 — two services over REST","Splitting a small monolith into two services.","capstone rest split",1],
["20","20-cap2.html",0,7,130,"پروژهٔ ۲ — افزودن صف و Saga","یک عملیات چندسرویسه با جبران خطا.","Project 2 — adding a queue and a Saga","A multi-service operation with compensation.","capstone saga queue",2],
["21","21-cap3.html",0,9,200,"پروژهٔ ۳ — سامانهٔ کامل","gateway، رویداد، trace توزیع‌شده و circuit breaker.","Project 3 — the complete system","Gateway, events, distributed tracing and circuit breakers.","capstone gateway tracing",3]
]});

/* ═══════════════ ۰۹ — ‎C#‎ ═══════════════ */
C.push({
  id:"09-csharp", dir:"09-csharp", accent:'#68217A', accentDark:'#B77BCF', cat:"backend",
  ico:'<path d="M9.5 3.5 7.5 20.5M16.5 3.5l-2 17M4 8.6h16M3 15.4h16" stroke-linecap="round"/>',
  fa:{name:"زبان ‎C#‎", desc:"از نوع‌ها و LINQ تا async/await، کارایی و تست — جامع، از مقدماتی تا پیشرفته.",
      intro:"‎C#‎ زبان بزرگی است و بیشتر آموزش‌ها در سطح نحو متوقف می‌شوند. این مسیر تا جایی می‌رود که بدانی پشت async/await چه می‌گذرد، چرا آن LINQ کند است، و کِی struct به‌جای class."},
  en:{name:"C#", desc:"From types and LINQ to async/await, performance and testing — comprehensive, beginner to advanced.",
      intro:"C# is a large language and most tutorials stop at syntax. This track goes far enough that you know what happens behind async/await, why that LINQ query is slow, and when to reach for a struct."},
  ch:[
["01","01-ecosystem.html",0,18,70,"اکوسیستم دات‌نت","‏SDK، runtime، پروژه، و اینکه dotnet build دقیقاً چه می‌کند.","The .NET ecosystem","SDK, runtime, projects, and what dotnet build actually does.","dotnet sdk runtime csproj cli msbuild"],
["02","02-types.html",0,18,80,"نوع‌ها: value و reference","پشته و هیپ، کپی در برابر ارجاع، و boxing.","Types: value and reference","Stack and heap, copy versus reference, and boxing.","value reference stack heap boxing"],
["03","03-nullable.html",0,18,85,"‏nullable reference types","کامپایلری که ‎NullReferenceException‎ را قبل از اجرا می‌گیرد.","Nullable reference types","A compiler that catches NullReferenceException before run time.","nullable annotation warning null-forgiving"],
["04","04-class-record-struct.html",0,18,85,"کلاس، record و struct","سه انتخاب با سه معناشناسی متفاوت — و معیار انتخاب.","Class, record and struct","Three choices with three semantics — and how to pick.","class record struct readonly init"],
["05","05-inheritance.html",0,18,80,"وراثت و interface","‏virtual، abstract، sealed و پیاده‌سازی پیش‌فرض interface.","Inheritance and interfaces","virtual, abstract, sealed, and default interface methods.","inheritance virtual abstract sealed interface"],
["06","06-members.html",0,18,75,"عضو ایستا، const و readonly","تفاوت‌هایی که در زمان کامپایل و اجرا اثر دارند.","Static, const and readonly members","Differences that matter at compile time and at run time.","static const readonly field initializer"],
["07","07-equality.html",0,18,85,"برابری و hash","‏Equals، GetHashCode، ‎==‎ و قرارداد‌هایی که شکستنشان گران است.","Equality and hashing","Equals, GetHashCode, ==, and contracts that are expensive to break.","equals gethashcode comparer icomparable"],
["08","08-operators.html",0,18,75,"عملگر و تبدیل نوع","بارگذاری عملگر، ‎implicit‎ و ‎explicit‎.","Operators and conversions","Operator overloading, implicit and explicit conversions.","operator overload implicit explicit conversion"],
["09","09-generics.html",0,18,85,"‏generic و constraint","نوع به‌عنوان پارامتر، بدون از دست دادن ایمنی یا کارایی.","Generics and constraints","Types as parameters, without losing safety or speed.","generic constraint where new class struct"],
["10","10-variance.html",0,18,80,"‏variance: in و out","چرا ‎List<Derived>‎ یک ‎List<Base>‎ نیست.","Variance: in and out","Why a List<Derived> is not a List<Base>.","covariance contravariance in out variance"],
["11","11-generic-math.html",0,18,80,"‏static abstract و ریاضی عمومی","عضو ایستای انتزاعی در interface — قابلیت تازهٔ زبان.","Static abstract members and generic math","Abstract static interface members — a recent language capability.","static abstract generic math inumber"],
["12","12-collections.html",0,18,85,"مجموعه‌ها","‏List، Dictionary، HashSet، Queue — و پیچیدگی زمانی هرکدام.","Collections","List, Dictionary, HashSet, Queue — and each one's complexity.","list dictionary hashset queue complexity"],
["13","13-iterators.html",0,18,80,"‏iterator و yield","تولید تنبل، و ماشین حالتی که کامپایلر می‌سازد.","Iterators and yield","Lazy sequences, and the state machine the compiler builds.","yield ienumerable iterator lazy state machine"],
["14","14-linq-basics.html",0,18,85,"‏LINQ ۱: مبانی و اجرای معوق","چرا کوئری تو هنوز اجرا نشده است.","LINQ 1: basics and deferred execution","Why your query has not run yet.","linq deferred lazy enumerable query"],
["15","15-linq-advanced.html",0,18,90,"‏LINQ ۲: عملگرهای پیشرفته","‏GroupBy، Join، SelectMany، Aggregate و دام‌های کارایی.","LINQ 2: advanced operators","GroupBy, Join, SelectMany, Aggregate and the performance traps.","groupby join selectmany aggregate performance"],
["16","16-expression-trees.html",0,18,90,"‏expression tree","کد به‌عنوان داده — پایه‌ای که ‎EF Core‎ رویش ساخته شده.","Expression trees","Code as data — the foundation EF Core is built on.","expression tree lambda visitor compile"],
["17","17-delegates.html",0,18,80,"‏delegate، event و lambda","تابع به‌عنوان مقدار، و الگوی رویداد.","Delegates, events and lambdas","Functions as values, and the event pattern.","delegate event func action lambda"],
["18","18-closures.html",0,18,80,"‏closure و دام‌هایش","متغیر ربوده‌شده در حلقه — کلاسیک‌ترین باگ.","Closures and their traps","Captured loop variables — the classic bug.","closure capture loop variable allocation"],
["19","19-pattern-matching.html",0,18,80,"‏pattern matching","‏switch expression، الگوی ویژگی، لیست و رابطه‌ای.","Pattern matching","Switch expressions, property, list and relational patterns.","pattern switch expression property list relational"],
["20","20-exceptions.html",0,18,85,"خطا و exception","کِی بگیر، کِی نگیر، ‎filter‎ و خطای سفارشی.","Exceptions","When to catch, when not to, filters and custom exceptions.","exception filter custom rethrow stacktrace"],
["21","21-disposable.html",0,18,80,"‏IDisposable و IAsyncDisposable","‏using، الگوی dispose و منابعی که GC نمی‌گیرد.","IDisposable and IAsyncDisposable","using, the dispose pattern, and resources the GC will not reclaim.","idisposable using finalizer safehandle"],
["22","22-async-model.html",0,18,95,"‏async/await: مدل ذهنی","‏async یعنی «نخ را نگه ندار»، نه «سریع‌تر».","async/await: the mental model","async means “do not hold the thread”, not “faster”.","async await state machine continuation"],
["23","23-tasks.html",0,18,90,"‏Task و cancellation","‏WhenAll، WhenAny، CancellationToken و مهلت.","Tasks and cancellation","WhenAll, WhenAny, CancellationToken and timeouts.","task whenall cancellation token timeout"],
["24","24-async-pitfalls.html",0,18,90,"دام‌های async","‏async void، بن‌بست، ‎ConfigureAwait‎ و ‎sync over async‎.","Async pitfalls","async void, deadlocks, ConfigureAwait and sync-over-async.","deadlock async void configureawait sync over async"],
["25","25-valuetask.html",0,18,80,"‏ValueTask و IAsyncEnumerable","جریان ناهمگام و کاهش تخصیص.","ValueTask and IAsyncEnumerable","Async streams and reducing allocations.","valuetask iasyncenumerable await foreach"],
["26","26-channels.html",0,18,85,"‏Channel","تولیدکننده و مصرف‌کننده، با فشار برگشتی.","Channels","Producer/consumer with backpressure.","channel producer consumer backpressure bounded"],
["27","27-threading.html",0,18,90,"نخ، قفل و atomic","‏lock، Interlocked، مدل حافظه و مسابقهٔ داده.","Threads, locks and atomics","lock, Interlocked, the memory model and data races.","thread lock interlocked volatile race"],
["28","28-span.html",0,18,90,"‏Span و Memory","کار با حافظه بدون کپی و بدون تخصیص.","Span and Memory","Working with memory without copying or allocating.","span memory stackalloc slice arraypool"],
["29","29-gc.html",0,18,85,"تخصیص و زباله‌روب","نسل‌ها، ‎LOH‎، و اینکه چرا کد تو مکث می‌کند.","Allocation and the GC","Generations, the LOH, and why your code pauses.","gc generation loh allocation pause server gc"],
["30","30-json.html",0,18,85,"‏System.Text.Json","سریال‌سازی، تبدیل‌گر سفارشی و منبع تولید.","System.Text.Json","Serialisation, custom converters and source generation.","json serialize converter polymorphic sourcegen"],
["31","31-datetime.html",0,18,80,"زمان و تاریخ","‏DateTimeOffset، TimeProvider، منطقهٔ زمانی و تقویم فارسی.","Dates and times","DateTimeOffset, TimeProvider, time zones and the Persian calendar.","datetime offset timezone timeprovider persian calendar"],
["32","32-regex.html",0,18,75,"عبارت باقاعده","‏Regex، منبع تولید، و خطر بازگشت فاجعه‌بار.","Regular expressions","Regex, source generation, and catastrophic backtracking.","regex backtracking generated compiled"],
["33","33-reflection.html",0,18,80,"‏reflection و attribute","قدرت زمان اجرا، و هزینه‌اش.","Reflection and attributes","Run-time power, and what it costs.","reflection attribute metadata activator"],
["34","34-source-generators.html",0,18,90,"‏source generator","کد تولید کن به‌جای reflection — سریع‌تر و AOT-پسند.","Source generators","Generate code instead of reflecting — faster and AOT-friendly.","source generator roslyn incremental aot"],
["35","35-analyzers.html",0,18,80,"‏analyzer و قواعد کد","قانون تیمی که کامپایلر اجرایش می‌کند.","Analyzers and code rules","Team rules the compiler enforces for you.","analyzer roslyn editorconfig warning as error"],
["36","36-interop.html",0,18,80,"‏interop و P/Invoke","فراخوانی کد بومی و ‎LibraryImport‎.","Interop and P/Invoke","Calling native code and LibraryImport.","pinvoke interop marshal libraryimport native"],
["37","37-testing.html",0,18,85,"تست با xUnit","‏fixture، تست پارامتری، mock و assertion خوانا.","Testing with xUnit","Fixtures, parameterised tests, mocking and readable assertions.","xunit theory fixture moq fluentassertions"],
["38","38-benchmark.html",0,18,85,"‏benchmark","‏BenchmarkDotNet: اندازه‌گیری قبل از بهینه‌سازی.","Benchmarking","BenchmarkDotNet: measure before you optimise.","benchmarkdotnet memory diagnoser baseline"],
["39","39-project.html",0,18,75,"ساختار پروژه و NuGet","چند پروژه، وابستگی مرکزی و انتشار بسته.","Project structure and NuGet","Multiple projects, central package management and publishing.","solution csproj nuget central package management"],
["40","40-cap1.html",0,5,80,"پروژهٔ ۱ — ابزار خط فرمان","‏CLI واقعی با آرگومان، خطا، لاگ و تست.","Project 1 — a command-line tool","A real CLI with arguments, error handling, logging and tests.","capstone cli",1],
["41","41-cap2.html",0,7,140,"پروژهٔ ۲ — کتابخانهٔ قابل انتشار","‏API تمیز، تست کامل، benchmark و بستهٔ NuGet.","Project 2 — a publishable library","A clean API, full tests, benchmarks and a NuGet package.","capstone library nuget",2],
["42","42-cap3.html",0,9,200,"پروژهٔ ۳ — پردازشگر همروند پرکار","‏Channel، async، cancellation، pooling و کارایی اندازه‌گیری‌شده.","Project 3 — a high-throughput concurrent processor","Channels, async, cancellation, pooling and measured performance.","capstone concurrency performance",3]
]});

/* ═══════════════ ۱۰ — ASP.NET Core ═══════════════ */
C.push({
  id:"10-aspnet-core", dir:"10-aspnet-core", accent:"#512BD4", cat:"backend", pre:["09-csharp"], soft:["05-sql"],
  ico:'<circle cx="12" cy="12" r="9"/><path d="M3.2 9.5h17.6M3.2 14.5h17.6"/><path d="M12 3a15 15 0 0 0 0 18 15 15 0 0 0 0-18z"/>',
  fa:{name:"ASP.NET Core", desc:"از pipeline و DI تا EF Core، احراز هویت، SignalR، تست و استقرار روی لینوکس.",
      intro:"این مسیر فرض می‌کند ‎C#‎ را می‌دانی و می‌خواهی با آن سرویس وب بنویسی — سرویسی که تست دارد، امن است، و روی یک سرور لینوکسی پشت Nginx کار می‌کند."},
  en:{name:"ASP.NET Core", desc:"From the pipeline and DI to EF Core, authentication, SignalR, testing and deploying on Linux.",
      intro:"This track assumes you know C# and want to build web services with it — services that are tested, secure, and running on a Linux server behind Nginx."},
  ch:[
["01","01-mental-model.html",0,18,85,"مدل ذهنی: host، pipeline، DI","سه چیزی که اگر بفهمی، بقیه واضح می‌شود.","The mental model: host, pipeline, DI","Understand these three and the rest follows.","host builder pipeline middleware di"],
["02","02-minimal-vs-mvc.html",0,18,80,"‏Minimal API در برابر Controller","کدام برای کدام پروژه، با معیار روشن.","Minimal APIs versus controllers","Which for which project, with clear criteria.","minimal api controller mvc endpoint"],
["03","03-routing.html",0,18,80,"مسیریابی","الگو، پارامتر، constraint و اولویت تطبیق.","Routing","Patterns, parameters, constraints and match precedence.","routing route constraint parameter precedence"],
["04","04-middleware.html",0,18,85,"‏middleware و ترتیبش","ترتیب اشتباه = خطای بی‌معنی. با نمودار جریان.","Middleware and its order","The wrong order gives a meaningless error. With a flow diagram.","middleware order use run map short-circuit"],
["05","05-filters.html",0,18,80,"فیلتر و endpoint filter","منطق عرضی، بدون تکرار در هر اکشن.","Filters and endpoint filters","Cross-cutting logic without repeating it in every action.","filter action result exception endpoint filter"],
["06","06-di.html",0,18,90,"‏DI و طول عمر","‏singleton، scoped، transient — و باگ وابستگی اسیر.","DI and lifetimes","Singleton, scoped, transient — and the captive dependency bug.","di lifetime singleton scoped transient captive"],
["07","07-options.html",0,18,80,"الگوی Options","‏IOptions، IOptionsSnapshot، اعتبارسنجی پیکربندی.","The Options pattern","IOptions, IOptionsSnapshot and configuration validation.","options ioptions snapshot monitor validate"],
["08","08-config.html",0,18,80,"پیکربندی، محیط و اسرار","‏appsettings، متغیر محیطی، user-secrets و اولویت‌ها.","Configuration, environments and secrets","appsettings, environment variables, user-secrets and precedence.","configuration environment secret keyvault precedence"],
["09","09-binding.html",0,18,80,"‏model binding","از درخواست خام تا شیء — و جایی که بی‌صدا شکست می‌خورد.","Model binding","From raw request to object — and where it silently fails.","binding frombody fromquery custom binder"],
["10","10-validation.html",0,18,80,"اعتبارسنجی با DataAnnotations","اعتبارسنجی داخلی و محدودیت‌هایش.","Validation with DataAnnotations","Built-in validation and its limits.","dataannotation validation modelstate required"],
["11","11-fluentvalidation.html",0,18,90,"‏FluentValidation","قاعده‌های پیچیده، خوانا و تست‌پذیر — جدا از مدل.","FluentValidation","Complex rules, readable and testable — separate from the model.","fluentvalidation validator rule async cascade"],
["12","12-mapping.html",0,18,80,"نگاشت شیء","‏AutoMapper، Mapperly و نگاشت دستی — کدام کِی.","Object mapping","AutoMapper, Mapperly and hand-written mapping — which when.","automapper mapperly dto projection mapping"],
["13","13-efcore-model.html",0,18,90,"‏EF Core ۱: DbContext و مدل","‏entity، رابطه، پیکربندی fluent و قرارداد.","EF Core 1: DbContext and the model","Entities, relationships, fluent configuration and conventions.","efcore dbcontext entity fluent api relationship"],
["14","14-efcore-migrations.html",0,18,85,"‏EF Core ۲: مهاجرت","تغییر شِما به‌صورت نسخه‌بندی‌شده، و مهاجرت در production.","EF Core 2: migrations","Versioned schema change, and migrating in production.","migration add-migration update-database idempotent script"],
["15","15-efcore-query.html",0,18,95,"‏EF Core ۳: کوئری و بارگذاری","‏Include، projection، split query و کوئری سمت کلاینت.","EF Core 3: querying and loading","Include, projections, split queries and client-side evaluation.","include projection split query client evaluation"],
["16","16-efcore-performance.html",0,18,95,"‏EF Core ۴: کارایی و ‎N+1‎","چرا صفحهٔ فهرست تو ۳۰ ثانیه طول می‌کشد.","EF Core 4: performance and N+1","Why your list page takes thirty seconds.","n+1 asnotracking compiled query batching profiling"],
["17","17-efcore-tracking.html",0,18,90,"‏EF Core ۵: tracking، همزمانی، تراکنش","‏change tracker، همزمانی خوش‌بینانه و ‎SaveChanges‎.","EF Core 5: tracking, concurrency, transactions","The change tracker, optimistic concurrency and SaveChanges.","tracking concurrency rowversion transaction savechanges"],
["18","18-efcore-advanced.html",0,18,90,"‏EF Core ۶: پیشرفته","‏SQL خام، view، interceptor، فیلتر سراسری و چند DbContext.","EF Core 6: advanced","Raw SQL, views, interceptors, global filters and multiple contexts.","raw sql interceptor global filter keyless owned"],
["19","19-dapper-basics.html",0,18,85,"‏Dapper ۱: مبانی","‏micro-ORM: کوئری، پارامتر و نگاشت.","Dapper 1: the basics","A micro-ORM: queries, parameters and mapping.","dapper query parameter execute micro orm"],
["20","20-dapper-advanced.html",0,18,90,"‏Dapper ۲: پیشرفته","نگاشت چندگانه، چند نتیجه، ‎bulk‎ و تراکنش.","Dapper 2: advanced","Multi-mapping, multiple result sets, bulk operations and transactions.","dapper multimap querymultiple bulk transaction"],
["21","21-ef-vs-dapper.html",0,18,85,"‏EF Core یا Dapper؟","ماتریس تصمیم، و الگوی استفادهٔ همزمان.","EF Core or Dapper?","A decision matrix, and using both together.","comparison decision hybrid read write"],
["22","22-repository.html",0,18,85,"‏Repository و Unit of Work","کِی لایهٔ مفیدی است و کِی فقط یک لایهٔ اضافه.","Repository and Unit of Work","When it is a useful layer and when it is just another one.","repository unit of work abstraction testability"],
["23","23-cqrs-mediatr.html",0,18,90,"‏CQRS با MediatR","جدا کردن خواندن از نوشتن، و pipeline behavior.","CQRS with MediatR","Separating reads from writes, and pipeline behaviours.","mediatr cqrs handler behavior notification"],
["24","24-openapi.html",0,18,80,"‏OpenAPI و Swagger","مستند زنده‌ای که با کد هماهنگ می‌ماند.","OpenAPI and Swagger","Living documentation that stays in step with the code.","openapi swagger swashbuckle schema example"],
["25","25-versioning.html",0,18,80,"نسخه‌گذاری ‎API‎","تغییر بدون شکستن کلاینت‌های موجود.","API versioning","Changing without breaking existing clients.","versioning header url deprecation sunset"],
["26","26-errors.html",0,18,85,"مدیریت خطای سراسری","‏ProblemDetails، ‎IExceptionHandler‎ و پاسخ یکدست.","Global error handling","ProblemDetails, IExceptionHandler and consistent responses.","problemdetails exception handler middleware rfc7807"],
["27","27-logging.html",0,18,85,"لاگ ساخت‌یافته","‏Serilog، scope، enricher و لاگی که بشود جستجو کرد.","Structured logging","Serilog, scopes, enrichers and logs you can search.","serilog structured scope enricher sink"],
["28","28-telemetry.html",0,18,90,"‏OpenTelemetry","‏trace، متریک و ردیابی یک درخواست در چند سرویس.","OpenTelemetry","Traces, metrics and following one request across services.","opentelemetry trace span metric exporter"],
["29","29-healthchecks.html",0,18,75,"‏health check","تفاوت «بالا هست» و «آمادهٔ ترافیک است».","Health checks","The difference between “it is up” and “it is ready”.","healthcheck liveness readiness probe"],
["30","30-caching.html",0,18,90,"کش","‏memory، distributed با Redis، ‎output cache‎ و باطل‌سازی.","Caching","In-memory, distributed with Redis, output caching and invalidation.","memorycache redis distributed output cache invalidation"],
["31","31-ratelimit.html",0,18,80,"محدودیت نرخ","‏fixed، sliding، token bucket و concurrency.","Rate limiting","Fixed, sliding, token bucket and concurrency limiters.","ratelimit fixed sliding token bucket partition"],
["32","32-authn.html",0,18,95,"احراز هویت: cookie و JWT","چه کسی هستی — و توکن کجا باید بماند.","Authentication: cookies and JWT","Who you are — and where the token should live.","authentication jwt cookie bearer refresh token"],
["33","33-identity.html",0,18,95,"‏ASP.NET Core Identity","کاربر، رمز، تأیید ایمیل، ‎2FA‎ و قفل حساب.","ASP.NET Core Identity","Users, passwords, email confirmation, 2FA and lockout.","identity user password 2fa lockout claims"],
["34","34-oauth-oidc.html",0,18,95,"‏OAuth2 و OIDC","ورود با ارائه‌دهندهٔ بیرونی، و جریان‌های استاندارد.","OAuth2 and OIDC","Logging in with an external provider, and the standard flows.","oauth oidc pkce authorization code identity server"],
["35","35-authz.html",0,18,85,"مجوز","‏policy، role، claim و مجوز مبتنی بر منبع.","Authorisation","Policies, roles, claims and resource-based authorisation.","authorization policy role claim requirement handler"],
["36","36-security.html",0,18,90,"امنیت","‏CORS، HTTPS، antiforgery، هدرهای امنیتی و ده مورد OWASP.","Security","CORS, HTTPS, antiforgery, security headers and the OWASP top ten.","cors https antiforgery csp owasp hsts"],
["37","37-files.html",0,18,80,"آپلود فایل و استریم","فایل حجیم بدون پر کردن حافظه، و ذخیره‌سازی امن.","File uploads and streaming","Large files without filling memory, and safe storage.","upload multipart stream formfile antivirus"],
["38","38-localization.html",0,18,85,"بومی‌سازی","چندزبانگی، منابع، قالب عدد و تاریخ فارسی.","Localisation","Multiple languages, resources, Persian number and date formats.","localization resx culture rtl persian"],
["39","39-background.html",0,18,85,"سرویس پس‌زمینه","‏BackgroundService، صف کار و کار زمان‌بندی‌شده.","Background services","BackgroundService, work queues and scheduled jobs.","backgroundservice hostedservice queue hangfire quartz"],
["40","40-signalr.html",0,18,85,"‏SignalR","ارتباط بی‌درنگ، گروه، و مقیاس افقی با backplane.","SignalR","Real-time communication, groups and scaling out with a backplane.","signalr hub group backplane websocket"],
["41","41-grpc.html",0,18,85,"‏gRPC","قرارداد protobuf، استریم، و کِی از REST بهتر است.","gRPC","Protobuf contracts, streaming, and when it beats REST.","grpc protobuf streaming interceptor"],
["42","42-testing-unit.html",0,18,85,"تست واحد","تست کنترلر، سرویس و اعتبارسنجی — بدون پایگاه‌داده.","Unit testing","Testing controllers, services and validators — without a database.","unit test moq xunit isolation"],
["43","43-testing-integration.html",0,18,95,"تست یکپارچه","‏WebApplicationFactory و پایگاه‌دادهٔ واقعی با Testcontainers.","Integration testing","WebApplicationFactory and a real database with Testcontainers.","webapplicationfactory testcontainers integration respawn"],
["44","44-performance.html",0,18,90,"کارایی و پروفایل","اندازه‌گیری، گلوگاه، تست بار و بهینه‌سازی واقعی.","Performance and profiling","Measure, find the bottleneck, load test, then optimise.","performance profiling load test k6 dotnet-counters"],
["45","45-deploy.html",0,18,90,"استقرار روی لینوکس","داکر، Nginx، ‎systemd‎، health و پیکربندی production.","Deploying on Linux","Docker, Nginx, systemd, health checks and production configuration.","deploy docker nginx systemd kestrel reverse proxy"],
["46","46-cap1.html",0,5,90,"پروژهٔ ۱ — ‎API‎ با پایگاه‌داده","‏CRUD کامل با EF Core، FluentValidation و تست.","Project 1 — an API with a database","Full CRUD with EF Core, FluentValidation and tests.","capstone crud efcore",1],
["47","47-cap2.html",0,7,160,"پروژهٔ ۲ — ‎API‎ امن و لایه‌بندی‌شده","‏Identity، JWT، CQRS، کش، لاگ و تست یکپارچه.","Project 2 — a secured, layered API","Identity, JWT, CQRS, caching, logging and integration tests.","capstone identity cqrs",2],
["48","48-cap3.html",0,9,240,"پروژهٔ ۳ — سرویس production","مشاهده‌پذیری، بی‌درنگ، صف، محدودیت نرخ و استقرار خودکار.","Project 3 — a production service","Observability, real-time features, queues, rate limiting and automated deployment.","capstone production observability",3]
]});

/* ═══════════════ ۱۱ — Go ═══════════════ */
C.push({
  id:"11-go", dir:"11-go", accent:"#00ADD8", cat:"backend",
  ico:'<circle cx="12" cy="12" r="9"/><path d="M7.5 10.5h4M6 13.5h4" stroke-linecap="round"/><circle cx="15.5" cy="12" r="2.8"/>',
  fa:{name:"زبان Go", desc:"همروندی، interface، خطا به‌عنوان مقدار، و باینری تک‌فایلی که هرجا اجرا می‌شود.",
      intro:"Go عمداً کوچک است. کل زبان را در یک هفته یاد می‌گیری؛ سختی‌اش جای دیگری است — در فکر کردن به همروندی و در پذیرفتن اینکه خطا هم یک مقدار عادی است."},
  en:{name:"Go", desc:"Concurrency, interfaces, errors as values, and a single binary that runs anywhere.",
      intro:"Go is deliberately small. You learn the whole language in a week; the difficulty lies elsewhere — in thinking about concurrency and in accepting that an error is just a value."},
  ch:[
["01","01-why.html",0,18,70,"چرا Go؛ نصب و اولین برنامه","فلسفهٔ زبان و ابزار go.","Why Go; setup and first program","The language's philosophy and the go tool.","go install gopath module hello"],
["02","02-types.html",0,18,75,"نوع‌ها، struct و method","بدون کلاس، بدون وراثت.","Types, structs and methods","No classes, no inheritance.","struct method receiver type"],
["03","03-interface.html",0,18,80,"interface — متفاوت از آنچه فکر می‌کنی","پیاده‌سازی ضمنی، و interface کوچک.","Interfaces — not what you expect","Implicit satisfaction, and small interfaces.","interface implicit duck typing"],
["04","04-errors.html",0,18,80,"خطا به‌عنوان مقدار","errors.Is، errors.As، wrap — و چرا panic نه.","Errors as values","errors.Is, errors.As, wrapping — and why not panic.","error wrap errors.is panic recover"],
["05","05-slice-map.html",0,18,80,"slice و map — دام‌های حافظه","append، ظرفیت، و نشتی که کسی انتظارش را ندارد.","Slices and maps — the memory traps","append, capacity, and the leak nobody expects.","slice map append capacity aliasing"],
["06","06-goroutine.html",0,18,85,"goroutine و مدل همروندی","ارزان است، اما رایگان نیست.","Goroutines and the concurrency model","Cheap, but not free.","goroutine concurrency scheduler leak"],
["07","07-channel.html",0,18,85,"channel و select","ارتباط به‌جای اشتراک حافظه.","Channels and select","Communicate instead of sharing memory.","channel select buffered deadlock"],
["08","08-sync.html",0,18,80,"sync، mutex و context","وقتی channel جواب نمی‌دهد، و لغو کار.","sync, mutex and context","When a channel is the wrong tool, and cancelling work.","mutex waitgroup context cancel"],
["09","09-modules.html",0,18,70,"پکیج و ماژول","سازماندهی کد و مدیریت وابستگی.","Packages and modules","Organising code and managing dependencies.","module package import vendor"],
["10","10-testing.html",0,18,80,"تست و benchmark","تست جدولی و اندازه‌گیری واقعی.","Testing and benchmarking","Table-driven tests and real measurement.","test benchmark table driven coverage"],
["11","11-http.html",0,18,85,"HTTP server استاندارد","بدون فریم‌ورک، با کتابخانهٔ استاندارد.","The standard HTTP server","No framework, just the standard library.","http handler mux middleware server"],
["12","12-json.html",0,18,70,"JSON و struct tag","کدگذاری، رمزگشایی و میدان‌های اختیاری.","JSON and struct tags","Encoding, decoding and optional fields.","json marshal unmarshal tag"],
["13","13-db.html",0,18,80,"اتصال به پایگاه‌داده","database/sql، pool و تراکنش.","Talking to a database","database/sql, pooling and transactions.","database sql pool transaction sqlx"],
["14","14-structure.html",0,18,75,"ساختار پروژه در Go","الگوهای رایج، و اینکه چرا ساده‌تر بهتر است.","Project structure in Go","Common layouts, and why simpler is better.","project layout cmd internal pkg"],
["15","15-profiling.html",0,18,80,"پروفایلینگ با pprof","پیدا کردن گلوگاه واقعی.","Profiling with pprof","Finding the real bottleneck.","pprof profile cpu memory trace"],
["16","16-deploy.html",0,18,75,"کامپایل و استقرار","باینری تک‌فایل، کراس‌کامپایل و ایمیج کوچک.","Building and deploying","A single binary, cross-compilation and tiny images.","build cross compile scratch distroless"],
["17","17-cap1.html",0,5,70,"پروژهٔ ۱ — ابزار خط فرمان","خواندن ورودی، پردازش موازی و خروجی تمیز.","Project 1 — a CLI tool","Reading input, parallel processing and clean output.","capstone cli",1],
["18","18-cap2.html",0,7,120,"پروژهٔ ۲ — REST API با پایگاه‌داده","لایه‌بندی، تست و مدیریت خطا.","Project 2 — a REST API with a database","Layering, tests and error handling.","capstone api",2],
["19","19-cap3.html",0,9,180,"پروژهٔ ۳ — سرویس همروند پرکار","worker pool، context، graceful shutdown و پروفایل.","Project 3 — a high-throughput concurrent service","Worker pools, context, graceful shutdown and profiling.","capstone concurrency",3]
]});

/* ═══════════════ ۱۲ — پایتون ═══════════════ */
C.push({
  id:"12-python", dir:"12-python", accent:"#3776AB", cat:"backend",
  ico:'<path d="M12 3c-3 0-4.5 1.2-4.5 3v2.5h4.6M12 3c3 0 4.5 1.2 4.5 3v4c0 1.8-1.5 3-4.5 3H9c-2.5 0-4.5 1.4-4.5 3.5V18c0 1.8 1.5 3 4.5 3"/><path d="M12 21c3 0 4.5-1.2 4.5-3v-2.5h-4.6" /><circle cx="9.6" cy="6.2" r=".6" fill="currentColor"/><circle cx="14.4" cy="17.8" r=".6" fill="currentColor"/>',
  fa:{name:"پایتون", desc:"از محیط مجازی و ساختمان داده تا generator، decorator، type hint و تست.",
      intro:"پایتون آسان شروع می‌شود و همان آسانی، پروژه‌های بزرگ را خراب می‌کند. این مسیر از همان اول عادت‌هایی می‌سازد — محیط مجازی، type hint، تست — که پروژهٔ هزار خطی‌ات را قابل نگهداری نگه می‌دارد."},
  en:{name:"Python", desc:"From virtual environments and data structures to generators, decorators, type hints and testing.",
      intro:"Python starts easy, and that same easiness is what ruins large projects. This track builds the habits — virtual environments, type hints, tests — that keep a thousand-line project maintainable."},
  ch:[
["01","01-setup.html",0,18,70,"نصب، محیط مجازی، pip","چرا هرگز روی پایتون سیستم نصب نکنی.","Setup, virtual environments, pip","Why you never install into the system Python.","venv pip virtualenv requirements"],
["02","02-types.html",0,18,80,"نوع‌ها و ساختمان داده","list، dict، set، tuple — و هزینهٔ هرکدام.","Types and data structures","list, dict, set, tuple — and what each costs.","list dict set tuple mutable"],
["03","03-functions.html",0,18,80,"تابع، آرگومان، scope","آرگومان پیش‌فرض تغییرپذیر: کلاسیک‌ترین دام.","Functions, arguments, scope","Mutable default arguments: the classic trap.","function argument default scope closure"],
["04","04-oop.html",0,18,80,"کلاس و مدل شیءگرا","dunder، property، dataclass.","Classes and the object model","Dunder methods, properties, dataclasses.","class dunder property dataclass"],
["05","05-modules.html",0,18,70,"ماژول و پکیج","import، مسیر، و واردکردن دایره‌ای.","Modules and packages","Imports, paths, and circular imports.","module package import __init__"],
["06","06-comprehension.html",0,18,75,"comprehension و iterator","خوانا نوشتن حلقه.","Comprehensions and iterators","Writing loops readably.","comprehension iterator iterable enumerate zip"],
["07","07-generator.html",0,18,80,"generator و yield","پردازش داده‌ای که در حافظه جا نمی‌شود.","Generators and yield","Processing data that does not fit in memory.","generator yield lazy pipeline"],
["08","08-decorator.html",0,18,85,"decorator","تابعی که تابع را می‌پیچد — و کاربردهای واقعی‌اش.","Decorators","A function that wraps a function — and real uses for it.","decorator wraps closure functools"],
["09","09-context.html",0,18,70,"context manager","with، و آزاد کردن مطمئن منابع.","Context managers","with, and releasing resources reliably.","context manager with contextlib"],
["10","10-errors.html",0,18,75,"خطا و exception","سلسله‌مراتب، خطای سفارشی، و کِی نگیریم.","Errors and exceptions","The hierarchy, custom errors, and when not to catch.","exception raise custom traceback"],
["11","11-typing.html",0,18,80,"type hint و mypy","تایپ اختیاری که باگ‌ها را قبل از اجرا می‌گیرد.","Type hints and mypy","Optional typing that catches bugs before run time.","typing mypy annotation protocol generic"],
["12","12-stdlib.html",0,18,75,"کتابخانهٔ استاندارد مفید","pathlib، collections، itertools، datetime.","The useful standard library","pathlib, collections, itertools, datetime.","pathlib collections itertools datetime"],
["13","13-io.html",0,18,75,"فایل، JSON، CSV","خواندن و نوشتن بدون خراب کردن انکودینگ.","Files, JSON, CSV","Reading and writing without breaking encodings.","file json csv encoding utf8"],
["14","14-async.html",0,18,85,"async در پایتون","asyncio، و کِی اصلاً کمک نمی‌کند.","async in Python","asyncio, and when it does not help at all.","asyncio await coroutine gil"],
["15","15-testing.html",0,18,80,"تست با pytest","fixture، parametrize و mock.","Testing with pytest","Fixtures, parametrize and mocking.","pytest fixture parametrize mock"],
["16","16-packaging.html",0,18,75,"بسته‌بندی و انتشار","pyproject، ساختار پروژه و انتشار روی PyPI.","Packaging and publishing","pyproject, project layout and publishing to PyPI.","pyproject packaging wheel pypi"],
["17","17-cap1.html",0,5,70,"پروژهٔ ۱ — اسکریپت پردازش داده","خواندن CSV، پاک‌سازی و گزارش.","Project 1 — a data-processing script","Read a CSV, clean it, produce a report.","capstone script csv",1],
["18","18-cap2.html",0,7,120,"پروژهٔ ۲ — کتابخانهٔ تست‌شده","API تمیز، type hint کامل و پوشش تست.","Project 2 — a tested library","A clean API, full type hints and test coverage.","capstone library",2],
["19","19-cap3.html",0,9,170,"پروژهٔ ۳ — خط لولهٔ داده","generator، همروندی، لاگ و مدیریت خطا.","Project 3 — a data pipeline","Generators, concurrency, logging and error handling.","capstone pipeline",3]
]});

/* ═══════════════ ۱۳ — جنگو ═══════════════ */
C.push({
  id:"13-django", dir:"13-django", accent:'#0C4B33', accentDark:'#44B78B', cat:"backend", pre:["12-python"], soft:["53-mysql-mariadb"],
  ico:'<path d="M13.5 3v14.5c0 2-1.6 3.2-4 3.2-3 0-5-2.4-5-6s2-6 5-6c.8 0 1.5.1 2 .4"/><path d="M17.8 8v9M17.8 3.6v1.6" stroke-linecap="round"/>',
  fa:{name:"جنگو", desc:"ORM، admin، احراز هویت و REST Framework — از پروژهٔ خالی تا استقرار.",
      intro:"جنگو «باتری‌ها سرجایشان» است: admin، احراز هویت، ORM و migration را از قبل دارد. مهارت واقعی این است که بدانی کدام باتری را استفاده کنی و کِی کنارش بگذاری."},
  en:{name:"Django", desc:"The ORM, admin, authentication and REST Framework — from an empty project to deployment.",
      intro:"Django is batteries-included: admin, auth, ORM and migrations are already there. The real skill is knowing which battery to use and when to set one aside."},
  ch:[
["01","01-architecture.html",0,18,75,"معماری جنگو و اولین پروژه","project، app، و جریان یک درخواست.","Django's architecture and first project","Projects, apps, and the path of a request.","django project app mtv request"],
["02","02-models.html",0,18,85,"model و ORM","تعریف داده، رابطه‌ها و QuerySet.","Models and the ORM","Defining data, relationships and QuerySets.","model orm queryset field relation"],
["03","03-migrations.html",0,18,75,"migration","تغییر شِما بدون از دست دادن داده.","Migrations","Changing the schema without losing data.","migration makemigrations schema"],
["04","04-views.html",0,18,80,"view و URL","function-based و class-based.","Views and URLs","Function-based and class-based views.","view url path cbv fbv"],
["05","05-templates.html",0,18,75,"template","ارث‌بری قالب و context.","Templates","Template inheritance and context.","template jinja context tag filter"],
["06","06-forms.html",0,18,75,"form و اعتبارسنجی","ModelForm و خطاهای قابل‌فهم.","Forms and validation","ModelForms and understandable errors.","form modelform validation clean"],
["07","07-admin.html",0,18,70,"admin","سفارشی‌سازی، و کِی نباید به کاربر نهایی بدهی‌اش.","The admin","Customising it, and when not to give it to end users.","admin modeladmin inline permission"],
["08","08-auth.html",0,18,80,"احراز هویت و مجوز","کاربر سفارشی، گروه و permission.","Authentication and authorisation","Custom users, groups and permissions.","auth user group permission login"],
["09","09-drf-1.html",0,18,85,"DRF ۱: serializer و view","تبدیل مدل به JSON و برعکس.","DRF 1: serializers and views","Turning models into JSON and back.","drf serializer viewset router"],
["10","10-drf-2.html",0,18,80,"DRF ۲: احراز هویت و مجوز","توکن، JWT و permission سفارشی.","DRF 2: authentication and permissions","Tokens, JWT and custom permissions.","drf token jwt permission throttle"],
["11","11-queries.html",0,18,85,"کوئری بهینه","select_related، prefetch_related و N+1.","Optimised queries","select_related, prefetch_related and N+1.","select_related prefetch n+1 explain"],
["12","12-signals.html",0,18,70,"signal و middleware","قدرتمند و خطرناک — کِی استفاده کنیم.","Signals and middleware","Powerful and dangerous — when to use them.","signal middleware hook"],
["13","13-celery.html",0,18,80,"کش و صف با Celery","کار سنگین را از چرخهٔ درخواست بیرون بیاور.","Caching and queues with Celery","Get heavy work out of the request cycle.","celery redis cache task beat"],
["14","14-testing.html",0,18,80,"تست","TestCase، client و fixture.","Testing","TestCase, the test client and fixtures.","test testcase client factory pytest-django"],
["15","15-security.html",0,18,75,"امنیت","CSRF، XSS، SQL injection و تنظیمات production.","Security","CSRF, XSS, SQL injection and production settings.","csrf xss injection security settings"],
["16","16-deploy.html",0,18,85,"استقرار","Gunicorn، Nginx، فایل استاتیک و داکر.","Deployment","Gunicorn, Nginx, static files and Docker.","gunicorn nginx static whitenoise docker"],
["17","17-cap1.html",0,5,80,"پروژهٔ ۱ — وبلاگ با admin","مدل، view، قالب و پنل مدیریت.","Project 1 — a blog with the admin","Models, views, templates and the admin panel.","capstone blog",1],
["18","18-cap2.html",0,7,140,"پروژهٔ ۲ — REST API با DRF","احراز هویت، مجوز، صفحه‌بندی و تست.","Project 2 — a REST API with DRF","Authentication, permissions, pagination and tests.","capstone drf api",2],
["19","19-cap3.html",0,9,200,"پروژهٔ ۳ — اپ کامل با صف و استقرار","کار پس‌زمینه، کش، کوئری بهینه و استقرار با داکر.","Project 3 — a full app with queues and deployment","Background work, caching, optimised queries and a Docker deployment.","capstone celery deploy",3]
]});

/* ═══════════════ ۱۴ — فلسک ═══════════════ */
C.push({
  id:"14-flask", dir:"14-flask", accent:"#5C5C5C", cat:"backend", pre:["12-python"],
  ico:'<path d="M10 3h4M12 3v5.5L7 18.5c-.8 1.5.2 2.5 1.6 2.5h6.8c1.4 0 2.4-1 1.6-2.5L12 8.5"/><path d="M8.6 14h6.8" stroke-linecap="round"/>',
  fa:{name:"فلسک", desc:"میکروفریم‌ورک: blueprint، SQLAlchemy، JWT و ساختاری که با پروژه بزرگ شود.",
      intro:"فلسک تقریباً هیچ تصمیمی برایت نمی‌گیرد. این هم آزادی است هم دام: باید خودت ساختار بسازی. این مسیر ساختاری می‌دهد که از یک فایل تا یک سرویس واقعی مقیاس بگیرد."},
  en:{name:"Flask", desc:"The micro-framework: blueprints, SQLAlchemy, JWT and a structure that grows with the project.",
      intro:"Flask makes almost no decisions for you. That is freedom and a trap: you must build the structure yourself. This track gives you one that scales from a single file to a real service."},
  ch:[
["01","01-vs-django.html",0,18,70,"فلسک در برابر جنگو","کدام مسئله با کدام ابزار.","Flask versus Django","Which problem suits which tool.","flask django comparison micro"],
["02","02-first-app.html",0,18,70,"اولین اپ و routing","از یک فایل شروع کن.","First app and routing","Start from one file.","route app decorator methods"],
["03","03-jinja.html",0,18,75,"قالب با Jinja2","ارث‌بری، فیلتر و ماکرو.","Templates with Jinja2","Inheritance, filters and macros.","jinja template filter macro"],
["04","04-request.html",0,18,75,"request و response","context، فرم، فایل و کوکی.","Requests and responses","Contexts, forms, files and cookies.","request response context cookie session"],
["05","05-blueprint.html",0,18,80,"blueprint و ساختار پروژه","از یک فایل به یک پکیج قابل نگهداری.","Blueprints and project structure","From one file to a maintainable package.","blueprint factory structure config"],
["06","06-sqlalchemy.html",0,18,85,"پایگاه‌داده با SQLAlchemy","مدل، session و رابطه‌ها.","Databases with SQLAlchemy","Models, sessions and relationships.","sqlalchemy model session relationship"],
["07","07-alembic.html",0,18,70,"migration با Alembic","تغییر شِما، کنترل‌شده.","Migrations with Alembic","Schema changes, under control.","alembic migration revision"],
["08","08-forms.html",0,18,70,"فرم و اعتبارسنجی","WTForms و اعتبارسنجی سمت سرور.","Forms and validation","WTForms and server-side validation.","wtforms validation csrf"],
["09","09-rest.html",0,18,80,"REST API","طراحی، serialization و کد وضعیت درست.","REST APIs","Design, serialisation and correct status codes.","rest api marshmallow status"],
["10","10-auth.html",0,18,80,"احراز هویت با JWT","ورود، توکن و محافظت از مسیرها.","Authentication with JWT","Login, tokens and protecting routes.","jwt auth token login"],
["11","11-errors.html",0,18,70,"مدیریت خطا و لاگ","پاسخ خطای یکدست و لاگ قابل جستجو.","Error handling and logging","Consistent error responses and searchable logs.","errorhandler logging abort"],
["12","12-testing.html",0,18,75,"تست","test client، fixture و پایگاه‌دادهٔ تست.","Testing","The test client, fixtures and a test database.","pytest client fixture testing"],
["13","13-config.html",0,18,70,"پیکربندی و محیط","تنظیمات جدا برای توسعه و production.","Configuration and environments","Separate settings for development and production.","config environment dotenv"],
["14","14-deploy.html",0,18,80,"استقرار","Gunicorn، Nginx و داکر.","Deployment","Gunicorn, Nginx and Docker.","gunicorn nginx docker wsgi"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — API کوچک","چند مسیر، اعتبارسنجی و تست.","Project 1 — a small API","A few routes, validation and tests.","capstone api",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — سرویس با پایگاه‌داده و ورود","SQLAlchemy، JWT و ساختار blueprint.","Project 2 — a service with a database and login","SQLAlchemy, JWT and a blueprint structure.","capstone auth db",2],
["17","17-cap3.html",0,9,170,"پروژهٔ ۳ — سرویس آمادهٔ استقرار","مهاجرت، لاگ، تست و داکر.","Project 3 — a deployable service","Migrations, logging, tests and Docker.","capstone deploy",3]
]});

/* ═══════════════ ۱۵ — ری‌اکت ═══════════════ */
C.push({
  id:"15-react", dir:"15-react", accent:"#61DAFB", cat:"frontend", pre:["41-javascript"], soft:["66-html","67-css"],
  ico:'<circle cx="12" cy="12" r="2.1"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)"/>',
  fa:{name:"ری‌اکت", desc:"UI به‌عنوان تابعی از state: هوک‌ها، رندر مجدد، مدیریت state، دریافت داده و کارایی.",
      intro:"بیشتر مشکلات ری‌اکت از یک سوءتفاهم می‌آید: اینکه فکر کنی داری DOM را دستکاری می‌کنی. نمی‌کنی. داری توصیف می‌کنی که UI برای یک state مشخص چه شکلی است. این مسیر روی همان یک جمله بنا شده."},
  en:{name:"React", desc:"UI as a function of state: hooks, re-renders, state management, data fetching and performance.",
      intro:"Most React problems come from one misunderstanding: thinking you are manipulating the DOM. You are not. You are describing what the UI looks like for a given state. This track is built on that one sentence."},
  ch:[
["01","01-mental-model.html",0,18,80,"مدل ذهنی: UI تابعی از state","چرا این جمله همه‌چیز را عوض می‌کند.","The mental model: UI as a function of state","Why that one sentence changes everything.","react mental model declarative state"],
["02","02-jsx.html",0,18,70,"JSX و کامپوننت","JSX چه چیزی واقعاً هست.","JSX and components","What JSX actually compiles to.","jsx component element createelement"],
["03","03-props.html",0,18,75,"props و ترکیب","children، و ترکیب به‌جای پیکربندی.","Props and composition","children, and composition over configuration.","props children composition"],
["04","04-state.html",0,18,80,"state و useState","state چیست و چه چیزی نباید state باشد.","State and useState","What state is, and what should not be state.","usestate state derived"],
["05","05-rerender.html",0,18,85,"رندر مجدد — کِی و چرا","منبع نصف سؤال‌های ری‌اکت.","Re-renders — when and why","The source of half of all React questions.","rerender reconciliation batching"],
["06","06-effect.html",0,18,90,"useEffect","و اینکه اکثر useEffectهایی که می‌نویسی لازم نیستند.","useEffect","And why most of the useEffects you write are unnecessary.","useeffect cleanup dependency sync"],
["07","07-forms.html",0,18,75,"فرم‌ها","controlled، uncontrolled و اعتبارسنجی.","Forms","Controlled, uncontrolled and validation.","form controlled input validation"],
["08","08-lists.html",0,18,70,"لیست و key","چرا index به‌عنوان key باگ می‌سازد.","Lists and keys","Why index-as-key creates bugs.","list key reconciliation"],
["09","09-refs-memo.html",0,18,80,"useRef، useMemo، useCallback","کِی واقعاً لازم‌اند — و معمولاً نیستند.","useRef, useMemo, useCallback","When they are actually needed — usually they are not.","useref usememo usecallback memo"],
["10","10-context.html",0,18,75,"Context","حل prop drilling، و هزینهٔ رندرش.","Context","Solving prop drilling, and its render cost.","context provider drilling"],
["11","11-reducer.html",0,18,80,"useReducer و state پیچیده","وقتی useState کافی نیست.","useReducer and complex state","When useState is not enough.","usereducer reducer action"],
["12","12-global-state.html",0,18,80,"مدیریت state سراسری","Zustand و Redux Toolkit — و کِی هیچ‌کدام.","Global state management","Zustand and Redux Toolkit — and when neither.","zustand redux store global state"],
["13","13-data.html",0,18,90,"دریافت داده","React Query: کش، بی‌اعتبارسازی و وضعیت سرور.","Data fetching","React Query: caching, invalidation and server state.","react query fetch cache swr"],
["14","14-routing.html",0,18,75,"مسیریابی","مسیر تودرتو، پارامتر و محافظت.","Routing","Nested routes, parameters and guards.","router route param guard"],
["15","15-splitting.html",0,18,75,"کد اسپلیت و Suspense","بارگذاری تنبل و مرز خطا.","Code splitting and Suspense","Lazy loading and error boundaries.","lazy suspense error boundary"],
["16","16-testing.html",0,18,80,"تست","Testing Library و تست از دید کاربر.","Testing","Testing Library and testing from the user's point of view.","testing library user event vitest"],
["17","17-performance.html",0,18,85,"کارایی","پروفایلر، لیست بلند و رندر غیرضروری.","Performance","The profiler, long lists and needless renders.","profiler virtualization memo performance"],
["18","18-patterns.html",0,18,80,"الگوها و ضدالگوها","الگوهای کامپوننت که واقعاً کار می‌کنند.","Patterns and anti-patterns","Component patterns that actually hold up.","pattern compound render prop hook"],
["19","19-zustand-redux.html",0,18,90,"حالت سراسری: Zustand و Redux","دو رویکرد به یک مسئله، و معیار انتخاب بینشان.","Global state: Zustand and Redux","Two approaches to one problem, and how to choose.","zustand redux toolkit global store selector"],
["20","20-custom-hooks.html",0,18,85,"‏hook سفارشی","استخراج منطق مشترک، بدون ساختن انتزاع نشتی.","Custom hooks","Extracting shared logic without a leaky abstraction.","custom hook reuse rules of hooks"],
["21","21-concurrent.html",0,18,90,"‏React همروند","‏transition، ‎useDeferredValue‎ و رابطی که هنگام کار سنگین یخ نمی‌زند.","Concurrent React","Transitions, useDeferredValue and a UI that does not freeze under load.","concurrent transition deferred suspense"],
["22","22-rsc.html",0,18,95,"‏Server Component","مرز سرور و کلاینت، و آنچه واقعاً به مرورگر می‌رود.","Server Components","The server/client boundary, and what actually ships to the browser.","rsc server component action boundary"],
["23","23-a11y.html",0,18,85,"دسترس‌پذیری","مدیریت فوکوس، ‎ARIA‎ و کامپوننت قابل استفاده با کیبورد.","Accessibility","Focus management, ARIA and keyboard-usable components.","accessibility focus aria headless keyboard"],
["24","24-forms-advanced.html",0,18,85,"فرم‌های پیچیده","‏react-hook-form، اعتبارسنجی طرح‌محور و فرم چندمرحله‌ای.","Advanced forms","react-hook-form, schema validation and multi-step forms.","react-hook-form zod validation wizard"],
["25","25-cap1.html",0,5,80,"پروژهٔ ۱ — لیست کارها با state واقعی","کامپوننت، فرم، لیست و ماندگاری محلی.","Project 1 — a to-do app with real state","Components, forms, lists and local persistence.","capstone todo",1],
["26","26-cap2.html",0,7,140,"پروژهٔ ۲ — داشبورد با داده از API","دریافت داده، کش، مسیریابی و وضعیت بارگذاری.","Project 2 — a dashboard fed by an API","Data fetching, caching, routing and loading states.","capstone dashboard",2],
["27","27-cap3.html",0,9,200,"پروژهٔ ۳ — اپ کامل با احراز هویت","ورود، مسیر محافظت‌شده، تست و بهینه‌سازی کارایی.","Project 3 — a full app with authentication","Login, protected routes, tests and performance work.","capstone auth spa",3]
]});

/* ═══════════════ ۱۶ — Next.js ═══════════════ */
C.push({
  id:"16-nextjs", dir:"16-nextjs", accent:'#111827', accentDark:'#E6EAF2', cat:"frontend", pre:["15-react"], soft:["42-typescript"],
  ico:'<circle cx="12" cy="12" r="9"/><path d="M9.2 15.8V8.2l5.6 7.6M14.8 8.2v7.6" stroke-linecap="round" stroke-linejoin="round"/>',
  fa:{name:"Next.js", desc:"App Router، Server Component، رندر سمت سرور، Server Action و استقرار خودمیزبان.",
      intro:"Next پاسخ این سؤال است: بخشی از UI را سرور بسازد یا مرورگر؟ App Router این تصمیم را برای هر کامپوننت جداگانه ممکن کرده — و همین، هم قدرتش است هم جایی که همه گیج می‌شوند."},
  en:{name:"Next.js", desc:"App Router, Server Components, server rendering, Server Actions and self-hosted deployment.",
      intro:"Next answers one question: should the server or the browser build this piece of UI? The App Router lets you decide per component — which is both its power and where everyone gets confused."},
  ch:[
["01","01-why.html",0,18,75,"چرا Next و App Router","چه مسئله‌ای را حل می‌کند و چه پیچیدگی‌ای می‌آورد.","Why Next, and the App Router","What it solves and what complexity it brings.","nextjs app router pages router why"],
["02","02-structure.html",0,18,80,"ساختار پروژه و مسیریابی فایل‌محور","پوشه = مسیر، و فایل‌های ویژه‌ای که معنا دارند.","Project structure and file routing","A folder is a route, and the special files that carry meaning.","app directory page layout file convention"],
["03","03-layouts.html",0,18,85,"‏layout، template و route group","‏UI مشترک، و گروه‌بندی بدون اثر روی آدرس.","Layouts, templates and route groups","Shared UI, and grouping without affecting the URL.","layout template route group nested"],
["04","04-dynamic-routes.html",0,18,80,"مسیرهای پویا","پارامتر، ‎catch-all‎ و ‎generateStaticParams‎.","Dynamic routes","Parameters, catch-all segments and generateStaticParams.","dynamic route slug catch-all generatestaticparams"],
["05","05-rsc.html",0,18,95,"‏Server Component در برابر Client Component","مهم‌ترین مفهوم App Router — با نمودار مرز.","Server versus Client Components","The key App Router concept — with a boundary diagram.","rsc server client component boundary"],
["06","06-use-client.html",0,18,90,"مرز ‎use client‎ و سریال‌سازی","چه چیزی می‌تواند از سرور به کلاینت رد شود و چه چیزی نه.","The use client boundary and serialisation","What can cross from server to client, and what cannot.","use client serializable props boundary bundle"],
["07","07-data-fetching.html",0,18,90,"دریافت داده در Server Component","‏fetch روی سرور، بدون ‎useEffect‎ و بدون حالت بارگذاری.","Data fetching in Server Components","Fetching on the server, with no useEffect and no loading state.","fetch server async component data"],
["08","08-caching.html",0,18,100,"چهار لایهٔ کش Next","‏request memoization، data cache، route cache و router cache.","The four caching layers","Request memoisation, data cache, full route cache and router cache.","cache memoization data cache route cache router cache"],
["09","09-revalidation.html",0,18,90,"‏revalidate","زمان‌محور، تگ‌محور و بر حسب تقاضا.","Revalidation","Time-based, tag-based and on-demand.","revalidate revalidatetag revalidatepath isr"],
["10","10-render-modes.html",0,18,90,"‏SSG، SSR و ISR در Next","انتخاب حالت رندر برای هر مسیر، جداگانه.","SSG, SSR and ISR in Next","Choosing a rendering mode per route.","static dynamic force-dynamic ssg ssr isr"],
["11","11-streaming.html",0,18,90,"استریم و Suspense","فرستادن HTML تکه‌تکه، قبل از آماده شدن همهٔ داده.","Streaming and Suspense","Sending HTML in chunks before all the data is ready.","streaming suspense boundary partial prerender"],
["12","12-loading.html",0,18,75,"‏loading و اسکلت","وضعیت بارگذاری که خودکار می‌آید.","Loading UI and skeletons","Loading states that arrive automatically.","loading skeleton suspense fallback"],
["13","13-errors.html",0,18,85,"‏error، not-found و مرز خطا","خطا در سرور، خطا در کلاینت، و بازیابی.","Errors, not-found and error boundaries","Server errors, client errors and recovery.","error boundary not-found global-error reset"],
["14","14-server-actions.html",0,18,95,"‏Server Action: مبانی","فراخوانی تابع سرور از کلاینت، بدون ساختن ‎API‎.","Server Actions: the basics","Calling a server function from the client without building an API.","server action use server mutation"],
["15","15-forms.html",0,18,95,"فرم با Server Action","‏useActionState، اعتبارسنجی، به‌روزرسانی خوش‌بینانه.","Forms with Server Actions","useActionState, validation and optimistic updates.","form useactionstate useoptimistic zod validation"],
["16","16-route-handlers.html",0,18,85,"‏Route Handler","وقتی واقعاً به یک ‎API‎ نیاز داری.","Route Handlers","When you genuinely need an API endpoint.","route handler request response rest webhook"],
["17","17-middleware.html",0,18,85,"‏middleware","اجرا قبل از مسیریابی: تغییر مسیر، هدر و احراز هویت.","Middleware","Running before routing: redirects, headers and auth.","middleware matcher redirect rewrite edge"],
["18","18-parallel-routes.html",0,18,90,"مسیرهای موازی و رهگیر","مودالی که آدرس خودش را دارد.","Parallel and intercepting routes","A modal that has its own URL.","parallel route intercepting slot modal"],
["19","19-auth.html",0,18,95,"احراز هویت","‏Auth.js، ارائه‌دهنده و جریان ورود.","Authentication","Auth.js, providers and the login flow.","authjs nextauth provider oauth credentials"],
["20","20-session.html",0,18,85,"نشست و محافظت از مسیر","کوکی، نشست سمت سرور و مسیر محافظت‌شده.","Sessions and protected routes","Cookies, server-side sessions and route protection.","session cookie jwt protect middleware"],
["21","21-database.html",0,18,85,"اتصال به پایگاه‌داده","‏connection pooling در محیط serverless.","Connecting to a database","Connection pooling in a serverless environment.","database pool serverless connection"],
["22","22-orm.html",0,18,90,"‏ORM: Prisma و Drizzle","مدل، مهاجرت و کوئری نوع‌دار.","ORMs: Prisma and Drizzle","Models, migrations and typed queries.","prisma drizzle schema migration typed"],
["23","23-metadata-seo.html",0,18,90,"‏Metadata API و SEO","عنوان، توضیح، ‎canonical‎، ‎sitemap‎ و ‎robots‎.","The Metadata API and SEO","Titles, descriptions, canonicals, sitemaps and robots.","metadata seo sitemap robots canonical"],
["24","24-og-images.html",0,18,80,"تولید تصویر ‎OG‎","تصویر اشتراک‌گذاری که خودکار ساخته می‌شود.","Generating OG images","Share images generated automatically.","opengraph image imageresponse satori twitter card"],
["25","25-images.html",0,18,85,"بهینه‌سازی تصویر","‏next/image، اندازه، ‎placeholder‎ و ‎CLS‎.","Image optimisation","next/image, sizing, placeholders and CLS.","next image optimization lazy placeholder cls"],
["26","26-fonts.html",0,18,75,"فونت","‏next/font، فونت فارسی و حذف ‎layout shift‎.","Fonts","next/font, Persian fonts and eliminating layout shift.","next font local google subset persian"],
["27","27-i18n.html",0,18,90,"چندزبانگی و ‎RTL‎","مسیر زبان‌دار، ترجمه و راست‌چین فارسی.","Internationalisation and RTL","Locale routing, translations and Persian right-to-left.","i18n locale rtl translation middleware"],
["28","28-styling.html",0,18,80,"استایل","‏CSS Module، Tailwind و ‎CSS-in-JS‎ در ‎RSC‎.","Styling","CSS Modules, Tailwind and CSS-in-JS under RSC.","css module tailwind styled rsc"],
["29","29-client-state.html",0,18,85,"حالت سمت کلاینت","‏Zustand و React Query کنار ‎Server Component‎.","Client-side state","Zustand and React Query alongside Server Components.","zustand react query client state hydration"],
["30","30-runtime.html",0,18,80,"‏runtime: Node یا Edge","تفاوت‌ها، محدودیت‌ها و معیار انتخاب.","Runtimes: Node or Edge","Differences, limits and how to choose.","edge runtime node serverless region"],
["31","31-testing.html",0,18,85,"تست","تست کامپوننت سرور، اکشن و ‎e2e‎ با Playwright.","Testing","Testing server components, actions and e2e with Playwright.","test playwright vitest server component"],
["32","32-performance.html",0,18,90,"کارایی","‏Core Web Vitals، تحلیل باندل و ‎RSC payload‎.","Performance","Core Web Vitals, bundle analysis and the RSC payload.","performance bundle analyzer lcp inp rsc payload"],
["33","33-build.html",0,18,80,"بیلد و ابزار","‏Turbopack، خروجی standalone و متغیرهای محیطی.","Build and tooling","Turbopack, standalone output and environment variables.","turbopack build standalone env analyze"],
["34","34-deploy.html",0,18,90,"استقرار خودمیزبان","داکر، ‎standalone‎، Nginx و کش — بدون Vercel.","Self-hosted deployment","Docker, standalone output, Nginx and caching — without Vercel.","docker standalone selfhost nginx deploy"],
["35","35-cap1.html",0,5,90,"پروژهٔ ۱ — وبلاگ با ‎SSG‎","مسیر پویا، متادیتا، ‎sitemap‎ و ‎OG‎.","Project 1 — a static blog","Dynamic routes, metadata, sitemap and OG images.","capstone blog ssg seo",1],
["36","36-cap2.html",0,7,160,"پروژهٔ ۲ — داشبورد با احراز هویت","‏Auth.js، Server Action، پایگاه‌داده و مسیر محافظت‌شده.","Project 2 — an authenticated dashboard","Auth.js, Server Actions, a database and protected routes.","capstone auth dashboard",2],
["37","37-cap3.html",0,9,240,"پروژهٔ ۳ — فروشگاه کامل","‏ISR، سبد خرید، پرداخت، جستجو، ‎SEO‎ و استقرار با داکر.","Project 3 — a complete storefront","ISR, cart, checkout, search, SEO and Docker deployment.","capstone commerce isr production",3]
]});

/* ═══════════════ ۱۷ — انگولار ═══════════════ */
C.push({
  id:"17-angular", dir:"17-angular", accent:"#DD0031", cat:"frontend", pre:["42-typescript"], soft:["67-css"],
  ico:'<path d="M12 2.6 21 5.8l-1.4 12L12 21.4 4.4 17.8 3 5.8z"/><path d="m8.8 15 3.2-7.6L15.2 15M9.9 12.6h4.2" stroke-linecap="round"/>',
  fa:{name:"انگولار", desc:"کامپوننت، DI، RxJS، signal، فرم reactive و مدیریت state — فریم‌ورک کامل، با ساختار.",
      intro:"انگولار برخلاف ری‌اکت یک فریم‌ورک کامل است: مسیریابی، فرم، HTTP و تزریق وابستگی همه در خودش هستند. سختی‌اش نحو نیست، RxJS است — و این مسیر وقت لازم را رویش می‌گذارد."},
  en:{name:"Angular", desc:"Components, DI, RxJS, signals, reactive forms and state management — a complete, structured framework.",
      intro:"Unlike React, Angular is a complete framework: routing, forms, HTTP and dependency injection are all built in. The hard part is not the syntax, it is RxJS — and this track gives that the time it needs."},
  ch:[
["01","01-architecture.html",0,18,75,"معماری انگولار و CLI","ساختار پروژه و ابزار خط فرمان.","Angular's architecture and the CLI","Project structure and the command-line tool.","angular cli project structure"],
["02","02-components.html",0,18,80,"کامپوننت و template","نحو قالب و چرخهٔ عمر.","Components and templates","Template syntax and lifecycle.","component template lifecycle oninit"],
["03","03-binding.html",0,18,80,"data binding","یک‌طرفه، دوطرفه و رویداد.","Data binding","One-way, two-way and events.","binding interpolation ngmodel event"],
["04","04-directives.html",0,18,75,"directive","ساختاری و صفتی، و ساختن directive خودت.","Directives","Structural and attribute, and writing your own.","directive ngif ngfor structural"],
["05","05-pipes.html",0,18,65,"pipe","تبدیل نمایش، و pipe سفارشی.","Pipes","Transforming what is displayed, and custom pipes.","pipe async date custom"],
["06","06-di.html",0,18,80,"service و تزریق وابستگی","provider، طول عمر و injector.","Services and dependency injection","Providers, lifetimes and injectors.","service di provider injector"],
["07","07-rxjs-1.html",0,18,90,"RxJS ۱: Observable","جریان داده در زمان — مدل ذهنی.","RxJS 1: Observables","Data as a stream over time — the mental model.","rxjs observable subscribe stream"],
["08","08-rxjs-2.html",0,18,90,"RxJS ۲: عملگرها","map، switchMap، combineLatest — و نشتی اشتراک.","RxJS 2: operators","map, switchMap, combineLatest — and subscription leaks.","operator switchmap combinelatest unsubscribe"],
["09","09-signals.html",0,18,80,"signal","مدل واکنشی جدید، در کنار RxJS.","Signals","The new reactivity model, alongside RxJS.","signal computed effect reactivity"],
["10","10-forms.html",0,18,85,"فرم: template-driven و reactive","و اینکه چرا reactive معمولاً درست‌تر است.","Forms: template-driven and reactive","And why reactive is usually the right choice.","form reactive validator formgroup"],
["11","11-http.html",0,18,80,"HttpClient و interceptor","درخواست، خطا و افزودن توکن.","HttpClient and interceptors","Requests, errors and attaching tokens.","httpclient interceptor error retry"],
["12","12-routing.html",0,18,80,"مسیریابی و guard","مسیر تودرتو، پارامتر و محافظت.","Routing and guards","Nested routes, parameters and protection.","router guard resolver param"],
["13","13-lazy.html",0,18,75,"lazy loading","تقسیم باندل و بارگذاری بر حسب نیاز.","Lazy loading","Splitting the bundle and loading on demand.","lazy loading module bundle"],
["14","14-state.html",0,18,80,"مدیریت state","NgRx و گزینه‌های ساده‌تر.","State management","NgRx and the simpler alternatives.","ngrx store effect state"],
["15","15-testing.html",0,18,80,"تست","TestBed، spy و تست کامپوننت.","Testing","TestBed, spies and component tests.","testbed jasmine karma spy"],
["16","16-change-detection.html",0,18,85,"change detection و کارایی","OnPush و اینکه چرا اپت کند شده.","Change detection and performance","OnPush, and why your app got slow.","change detection onpush zone performance"],
["17","17-standalone.html",0,18,75,"standalone component","انگولار بدون NgModule.","Standalone components","Angular without NgModules.","standalone component module import"],
["18","18-deploy.html",0,18,75,"بیلد و استقرار","بهینه‌سازی باندل و سرو کردن با Nginx.","Building and deploying","Bundle optimisation and serving with Nginx.","build production bundle nginx"],
["19","19-cap1.html",0,5,80,"پروژهٔ ۱ — لیست و فرم","کامپوننت، سرویس و فرم reactive.","Project 1 — a list and a form","Components, services and a reactive form.","capstone form list",1],
["20","20-cap2.html",0,7,140,"پروژهٔ ۲ — اپ با API و مسیریابی","HttpClient، interceptor، guard و مدیریت خطا.","Project 2 — an app with an API and routing","HttpClient, interceptors, guards and error handling.","capstone api routing",2],
["21","21-cap3.html",0,9,200,"پروژهٔ ۳ — اپ سازمانی","state سراسری، lazy loading، تست و کارایی.","Project 3 — an enterprise-scale app","Global state, lazy loading, tests and performance.","capstone ngrx enterprise",3]
]});

/* ═══════════════ ۱۸ — فلاتر ═══════════════ */
C.push({
  id:"18-flutter", dir:"18-flutter", accent:"#02569B", cat:"frontend",
  ico:'<path d="M14.6 2.6 5 12.2l3 3 12.6-12.6z"/><path d="m14.6 11.4-4.5 4.5 4.5 4.5h5.5l-4.5-4.5 4.5-4.5z"/>',
  fa:{name:"فلاتر", desc:"از Dart تا انتشار: widget، چیدمان، مدیریت state، شبکه و اپ راست‌به‌چپ فارسی.",
      intro:"در فلاتر همه‌چیز widget است — حتی padding و مرکز‌چین کردن. وقتی این را بپذیری، بقیه‌اش ترکیب است. این مسیر ویژه به چیدمان راست‌به‌چپ و فونت فارسی هم می‌پردازد."},
  en:{name:"Flutter", desc:"From Dart to release: widgets, layout, state management, networking and right-to-left Persian apps.",
      intro:"In Flutter everything is a widget — even padding and centring. Once you accept that, the rest is composition. This track also covers right-to-left layout and Persian typography properly."},
  ch:[
["01","01-dart.html",0,18,85,"Dart در ۹۰ دقیقه","نوع‌ها، null safety، async و کلاس.","Dart in 90 minutes","Types, null safety, async and classes.","dart null safety future class"],
["02","02-first-app.html",0,18,70,"اولین اپ و ساختار پروژه","ابزار، شبیه‌ساز و hot reload.","First app and project structure","Tooling, emulators and hot reload.","flutter create hot reload structure"],
["03","03-widgets.html",0,18,80,"Widget: stateless و stateful","درخت widget و چرخهٔ ساخت.","Widgets: stateless and stateful","The widget tree and the build cycle.","widget stateless stateful build tree"],
["04","04-layout-1.html",0,18,80,"چیدمان: Row، Column، Flex","و خطای overflow که همه می‌گیرند.","Layout: Row, Column, Flex","And the overflow error everyone hits.","row column flex expanded overflow"],
["05","05-layout-2.html",0,18,85,"چیدمان پیشرفته و constraint","قانون: constraint پایین می‌رود، اندازه بالا می‌آید.","Advanced layout and constraints","The rule: constraints go down, sizes come up.","constraint boxconstraints stack layoutbuilder"],
["06","06-navigation.html",0,18,75,"ناوبری","صفحه، آرگومان و مسیریابی نام‌دار.","Navigation","Screens, arguments and named routes.","navigator route push gorouter"],
["07","07-state-1.html",0,18,80,"مدیریت state ۱","setState و InheritedWidget.","State management 1","setState and InheritedWidget.","setstate inherited widget lifting"],
["08","08-state-2.html",0,18,85,"مدیریت state ۲","Provider و Riverpod در عمل.","State management 2","Provider and Riverpod in practice.","provider riverpod bloc state"],
["09","09-forms.html",0,18,75,"فرم و ورودی","اعتبارسنجی و کنترلر.","Forms and input","Validation and controllers.","form textfield validator controller"],
["10","10-lists.html",0,18,80,"لیست و کارایی","ListView.builder و لیست بلند.","Lists and performance","ListView.builder and long lists.","listview builder scroll performance"],
["11","11-network.html",0,18,80,"شبکه و JSON","درخواست، مدل و مدیریت خطا.","Networking and JSON","Requests, models and error handling.","http dio json serialization"],
["12","12-storage.html",0,18,75,"ذخیره‌سازی محلی","preferences، فایل و پایگاه‌دادهٔ محلی.","Local storage","Preferences, files and a local database.","sharedpreferences sqlite hive isar"],
["13","13-animation.html",0,18,80,"انیمیشن","ضمنی، صریح و انتقال بین صفحه‌ها.","Animation","Implicit, explicit and page transitions.","animation controller tween hero"],
["14","14-platform.html",0,18,80,"کد پلتفرم‌محور","کانال بومی و پلاگین.","Platform-specific code","Native channels and plugins.","platform channel plugin native"],
["15","15-rtl.html",0,18,80,"تم، فونت و اپ راست‌به‌چپ","طراحی فارسی که واقعاً درست دربیاید.","Theming, fonts and RTL apps","Persian design that actually comes out right.","rtl locale font theme intl"],
["16","16-testing.html",0,18,75,"تست","تست widget و تست یکپارچه.","Testing","Widget tests and integration tests.","widget test integration golden"],
["17","17-debug.html",0,18,75,"عیب‌یابی و پروفایل","DevTools و پیدا کردن پرش فریم.","Debugging and profiling","DevTools and finding dropped frames.","devtools profile jank inspector"],
["18","18-release.html",0,18,85,"انتشار","امضا، بیلد اندروید و iOS، و اندازهٔ اپ.","Releasing","Signing, Android and iOS builds, and app size.","release signing apk appbundle ipa"],
["19","19-cap1.html",0,5,80,"پروژهٔ ۱ — اپ تک‌صفحه‌ای","چیدمان، لیست و state محلی.","Project 1 — a single-screen app","Layout, lists and local state.","capstone layout",1],
["20","20-cap2.html",0,7,140,"پروژهٔ ۲ — اپ چندصفحه‌ای با API","ناوبری، شبکه، ذخیره‌سازی و حالت خطا.","Project 2 — a multi-screen app with an API","Navigation, networking, storage and error states.","capstone api navigation",2],
["21","21-cap3.html",0,9,220,"پروژهٔ ۳ — اپ کامل فارسی و آمادهٔ انتشار","راست‌به‌چپ، تم، تست، بهینه‌سازی و بیلد امضاشده.","Project 3 — a complete Persian app, ready to ship","RTL, theming, tests, optimisation and a signed build.","capstone rtl release",3]
]});

/* ═══════════════ ۱۹ — الاستیک‌سرچ ═══════════════ */
C.push({
  id:"19-elasticsearch", dir:"19-elasticsearch", accent:"#00A9E5", cat:"data",
  ico:'<circle cx="10.5" cy="10.5" r="6.4"/><path d="m15.2 15.2 5 5" stroke-linecap="round"/><path d="M7.6 9.4h5.8M7.6 12h4" stroke-linecap="round"/>',
  fa:{name:"الاستیک‌سرچ", desc:"جستجوی متنی واقعی: mapping، analyzer فارسی، query DSL، امتیازدهی و aggregation.",
      intro:"‏<code>LIKE '%متن%'</code> جستجو نیست. جستجوی واقعی یعنی ریشه‌یابی کلمه، تحمل غلط املایی، و مرتب‌سازی بر اساس ربط. این مسیر نشان می‌دهد چطور — با توجه ویژه به متن فارسی."},
  en:{name:"Elasticsearch", desc:"Real text search: mappings, Persian analyzers, the query DSL, relevance scoring and aggregations.",
      intro:"<code>LIKE '%text%'</code> is not search. Real search means stemming, tolerating typos, and ordering by relevance. This track shows how — with particular attention to Persian text."},
  ch:[
["01","01-why.html",0,18,75,"چه مسئله‌ای را حل می‌کند","الاستیک در برابر پایگاه‌دادهٔ رابطه‌ای.","What problem it solves","Elasticsearch versus a relational database.","search inverted index vs sql"],
["02","02-concepts.html",0,18,75,"نصب و مفاهیم","index، document، shard و replica.","Setup and concepts","Indices, documents, shards and replicas.","index document shard replica cluster"],
["03","03-mapping.html",0,18,80,"mapping و نوع داده","text در برابر keyword — مهم‌ترین تصمیم.","Mappings and field types","text versus keyword — the decision that matters most.","mapping text keyword dynamic"],
["04","04-analysis.html",0,18,90,"تحلیل متن و زبان فارسی","analyzer، tokenizer، نرمال‌سازی و ریشه‌یابی فارسی.","Text analysis and Persian","Analyzers, tokenizers, normalisation and Persian stemming.","analyzer tokenizer persian normalizer stemmer"],
["05","05-indexing.html",0,18,75,"نمایه‌سازی و به‌روزرسانی","تک‌تک، دسته‌ای و همگام‌سازی.","Indexing and updates","Single documents, bulk, and staying in sync.","index bulk update refresh"],
["06","06-query-1.html",0,18,80,"جستجو ۱: query DSL پایه","match، term و تفاوت حیاتی‌شان.","Search 1: the basic query DSL","match, term, and the crucial difference.","match term query dsl filter"],
["07","07-query-2.html",0,18,85,"جستجو ۲: ترکیبی","bool، fuzzy، phrase و جستجوی چندفیلدی.","Search 2: compound queries","bool, fuzzy, phrase and multi-field search.","bool fuzzy phrase multi_match"],
["08","08-relevance.html",0,18,85,"امتیازدهی و ربط","BM25، boost و اینکه چرا آن نتیجه اول آمده.","Scoring and relevance","BM25, boosting, and why that result came first.","score bm25 boost explain relevance"],
["09","09-aggregation.html",0,18,85,"aggregation","دسته‌بندی، آمار و فیلتر جانبی.","Aggregations","Bucketing, metrics and faceting.","aggregation bucket metric facet"],
["10","10-paging.html",0,18,70,"صفحه‌بندی","from/size، search_after و صفحهٔ عمیق.","Pagination","from/size, search_after and deep paging.","pagination from size search_after scroll"],
["11","11-performance.html",0,18,80,"کارایی و طراحی index","تعداد shard، حافظه و کوئری کند.","Performance and index design","Shard count, memory and slow queries.","performance shard heap slowlog"],
["12","12-kibana.html",0,18,70,"Kibana","کاوش داده و ساخت داشبورد.","Kibana","Exploring data and building dashboards.","kibana dashboard discover visualization"],
["13","13-ops.html",0,18,80,"عملیات","کلاستر، replica، snapshot و بازیابی.","Operations","Clusters, replicas, snapshots and recovery.","cluster snapshot restore health"],
["14","14-clients.html",0,18,80,"اتصال از اپ","کلاینت رسمی در دات‌نت، پایتون و Node.","Connecting from your app","Official clients in .NET, Python and Node.","client dotnet python nodejs"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — جستجوی ساده روی متن فارسی","mapping درست، analyzer فارسی و کوئری match.","Project 1 — simple search over Persian text","A correct mapping, a Persian analyzer and a match query.","capstone persian search",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — جستجوی محصولات با فیلتر","کوئری ترکیبی، facet و مرتب‌سازی.","Project 2 — product search with facets","Compound queries, facets and sorting.","capstone facet filter",2],
["17","17-cap3.html",0,9,180,"پروژهٔ ۳ — موتور جستجوی کامل","تنظیم ربط، خودتکمیل، همگام‌سازی با پایگاه‌داده و پایش.","Project 3 — a complete search engine","Relevance tuning, autocomplete, database sync and monitoring.","capstone autocomplete relevance",3]
]});

/* ═══════════════ ۲۰ — ارتباط بی‌درنگ ═══════════════ */
C.push({
  id:"20-realtime", dir:"20-realtime", accent:"#F59E0B", cat:"data", pre:["41-javascript"], soft:["29-nodejs"],
  ico:'<path d="M4 12a8 8 0 0 1 8-8M20 12a8 8 0 0 1-8 8" stroke-linecap="round"/><circle cx="12" cy="12" r="2.4"/><path d="M7.6 12a4.4 4.4 0 0 1 4.4-4.4M16.4 12a4.4 4.4 0 0 1-4.4 4.4" stroke-linecap="round"/>',
  fa:{name:"WebSocket و ارتباط بی‌درنگ", desc:"از polling تا WebSocket و SSE — سمت سرور و سمت مرورگر، تا مقیاس افقی.",
      intro:"HTTP برای «بپرس و جواب بگیر» ساخته شده. وقتی سرور باید بدون سؤال حرف بزند — چت، اعلان، قیمت زنده — به چیز دیگری نیاز داری. این مسیر هر دو سرِ ماجرا را می‌سازد: بک‌اند و فرانت‌اند."},
  en:{name:"WebSockets & real-time", desc:"From polling to WebSockets and SSE — server side and browser side, all the way to horizontal scale.",
      intro:"HTTP is built for ask-and-answer. When the server must speak unprompted — chat, notifications, live prices — you need something else. This track builds both ends: backend and frontend."},
  ch:[
["01","01-why.html",0,18,75,"چرا HTTP کافی نیست","polling، long-polling، SSE و WebSocket.","Why HTTP is not enough","Polling, long-polling, SSE and WebSockets.","polling sse websocket comparison"],
["02","02-protocol.html",0,18,80,"پروتکل WebSocket","handshake، فریم و اینکه چطور از HTTP جدا می‌شود.","The WebSocket protocol","The handshake, frames, and how it leaves HTTP behind.","websocket handshake upgrade frame"],
["03","03-browser.html",0,18,80,"سمت مرورگر","WebSocket API، رویدادها و مدیریت خطا.","The browser side","The WebSocket API, events and error handling.","websocket api onmessage client"],
["04","04-node.html",0,18,80,"سمت سرور: Node","با ws و Socket.IO.","Server side: Node","With ws and Socket.IO.","node ws socket.io server"],
["05","05-signalr.html",0,18,80,"سمت سرور: SignalR","دات‌نت، hub و fallback خودکار.","Server side: SignalR",". NET, hubs and automatic fallback.","signalr hub dotnet"],
["06","06-python.html",0,18,80,"سمت سرور: پایتون","FastAPI و Django Channels.","Server side: Python","FastAPI and Django Channels.","fastapi channels asgi websocket"],
["07","07-protocol-design.html",0,18,80,"طراحی پروتکل پیام خودت","نوع پیام، نسخه و سازگاری.","Designing your own message protocol","Message types, versioning and compatibility.","message protocol schema versioning"],
["08","08-auth.html",0,18,80,"احراز هویت روی سوکت","توکن، و اینکه چرا هدر Authorization اینجا نیست.","Authenticating a socket","Tokens, and why there is no Authorization header here.","auth token websocket handshake"],
["09","09-rooms.html",0,18,80,"اتاق، کانال و انتشار","ارسال به یک نفر، یک گروه، یا همه.","Rooms, channels and broadcasting","Sending to one, to a group, or to everyone.","room channel broadcast group"],
["10","10-scale.html",0,18,85,"مقیاس افقی","backplane با Redis، و مسئلهٔ چسبندگی اتصال.","Horizontal scale","A Redis backplane, and the sticky-connection problem.","scale redis backplane pubsub sticky"],
["11","11-reconnect.html",0,18,80,"اتصال مجدد و حالت آفلاین","صف پیام محلی و همگام‌سازی پس از بازگشت.","Reconnection and offline state","A local outbox and resyncing after reconnect.","reconnect backoff offline queue"],
["12","12-sse.html",0,18,70,"SSE و کِی بهتر است","یک‌طرفه، ساده‌تر، و اغلب کافی.","SSE and when it is the better choice","One-way, simpler, and often enough.","sse eventsource stream"],
["13","13-debug.html",0,18,75,"عیب‌یابی","ابزار مرورگر، لاگ و ردیابی پیام.","Debugging","Browser tools, logging and tracing messages.","debug devtools frame inspect"],
["14","14-nginx.html",0,18,75,"استقرار پشت Nginx","هدر Upgrade، timeout و TLS.","Deploying behind Nginx","The Upgrade header, timeouts and TLS.","nginx upgrade proxy timeout wss"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — اعلان زنده","سرور یک پیام می‌فرستد، مرورگر نشان می‌دهد.","Project 1 — live notifications","The server pushes, the browser displays.","capstone notification",1],
["16","16-cap2.html",0,7,130,"پروژهٔ ۲ — چت چنداتاقه","اتاق، احراز هویت، تاریخچه و اتصال مجدد.","Project 2 — multi-room chat","Rooms, authentication, history and reconnection.","capstone chat rooms",2],
["17","17-cap3.html",0,9,190,"پروژهٔ ۳ — سامانهٔ بی‌درنگ مقیاس‌پذیر","چند نمونهٔ سرور، Redis، پایش و استقرار پشت Nginx.","Project 3 — a scalable real-time system","Multiple server instances, Redis, monitoring and an Nginx deployment.","capstone scale redis",3]
]});

/* ═══════════════ ۲۱ — پروکسی و VPN ═══════════════ */
C.push({
  id:"21-proxy-vpn", dir:"21-proxy-vpn", accent:"#0891B2", cat:"infra", pre:["25-network-foundations"], soft:["03-linux-network"],
  ico:'<rect x="2.6" y="8.5" width="7" height="7" rx="1.6"/><rect x="14.4" y="8.5" width="7" height="7" rx="1.6"/><path d="M9.6 12h4.8" stroke-linecap="round"/><path d="M12 9.6v4.8" stroke-linecap="round" opacity=".5"/>',
  fa:{name:"پروکسی و VPN", desc:"مهندسی شبکه در عمل: forward و reverse proxy، SOCKS5، تونل، WireGuard و OpenVPN.",
      intro:"پروکسی و VPN هر دو یک کار می‌کنند: ترافیک را از مسیر دیگری عبور می‌دهند. تفاوتشان در لایه‌ای است که در آن کار می‌کنند. این مسیر هر دو را از پایه می‌سازد — با کد، نه فقط با پیکربندی."},
  en:{name:"Proxies & VPNs", desc:"Practical network engineering: forward and reverse proxies, SOCKS5, tunnels, WireGuard and OpenVPN.",
      intro:"Proxies and VPNs do the same thing: send traffic another way. They differ in the layer they operate at. This track builds both from the ground up — with code, not only configuration."},
  ch:[
["01","01-what.html",0,18,75,"پروکسی چیست","forward، reverse و transparent — سه چیز متفاوت با یک اسم.","What a proxy is","Forward, reverse and transparent — three different things, one name.","proxy forward reverse transparent"],
["02","02-http-proxy.html",0,18,80,"HTTP proxy و متد CONNECT","چطور یک درخواست از پروکسی رد می‌شود.","HTTP proxies and the CONNECT method","How a request passes through a proxy.","http proxy connect tunnel header"],
["03","03-socks.html",0,18,80,"SOCKS5","لایهٔ پایین‌تر، انعطاف بیشتر.","SOCKS5","A lower layer, more flexibility.","socks5 socks handshake udp"],
["04","04-build-proxy.html",0,18,90,"ساخت یک پروکسی ساده با کد","سوکت، انتقال دوطرفه و همروندی.","Building a simple proxy in code","Sockets, bidirectional relaying and concurrency.","socket relay proxy implementation"],
["05","05-tls.html",0,18,85,"TLS و termination","رمزنگاری، گواهی و جایی که رمز باز می‌شود.","TLS and termination","Encryption, certificates and where decryption happens.","tls sni termination certificate"],
["06","06-chaining.html",0,18,75,"زنجیره‌کردن پروکسی","چند پرش، و هزینهٔ تأخیرش.","Chaining proxies","Multiple hops, and the latency they cost.","chain upstream hop latency"],
["07","07-vpn-model.html",0,18,80,"VPN چیست: مدل تونل","تفاوت بنیادی با پروکسی، در لایهٔ شبکه.","What a VPN is: the tunnel model","How it fundamentally differs from a proxy, at the network layer.","vpn tunnel tun tap layer3"],
["08","08-wireguard.html",0,18,90,"WireGuard","کلید، peer، و راه‌اندازی از صفر.","WireGuard","Keys, peers, and setting one up from scratch.","wireguard peer key allowedips"],
["09","09-openvpn.html",0,18,85,"OpenVPN","گواهی، پیکربندی و مقایسه با WireGuard.","OpenVPN","Certificates, configuration and a comparison with WireGuard.","openvpn certificate config tls"],
["10","10-routing.html",0,18,85,"مسیریابی و NAT","جدول مسیر، forwarding و masquerade.","Routing and NAT","Routing tables, forwarding and masquerading.","routing nat masquerade forward iptables"],
["11","11-dns.html",0,18,80,"DNS در تونل","نشتی DNS و حل درستش.","DNS inside a tunnel","DNS leaks and how to fix them properly.","dns leak resolver split"],
["12","12-performance.html",0,18,80,"کارایی","MTU، سربار رمزنگاری و اندازه‌گیری واقعی.","Performance","MTU, encryption overhead and real measurement.","mtu throughput overhead benchmark"],
["13","13-monitoring.html",0,18,75,"پایش و لاگ","چه کسی وصل است و چقدر مصرف کرده.","Monitoring and logging","Who is connected and how much they used.","monitoring log metrics connection"],
["14","14-hardening.html",0,18,80,"امنیت و سخت‌سازی","کلیدها، به‌روزرسانی و کمترین دسترسی.","Security and hardening","Keys, updates and least privilege.","hardening key rotation firewall"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — پروکسی HTTP خودت","یک پروکسی کارا در کمتر از ۲۰۰ خط.","Project 1 — your own HTTP proxy","A working proxy in under 200 lines.","capstone proxy code",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — سرور WireGuard","راه‌اندازی، چند peer، مسیریابی و DNS.","Project 2 — a WireGuard server","Setup, multiple peers, routing and DNS.","capstone wireguard",2],
["17","17-cap3.html",0,9,180,"پروژهٔ ۳ — دروازهٔ شبکهٔ کامل","پروکسی، تونل، فایروال، پایش و سخت‌سازی روی یک VPS.","Project 3 — a complete network gateway","Proxy, tunnel, firewall, monitoring and hardening on one VPS.","capstone gateway vps",3]
]});

/* ═══════════════ ۲۲ — مهارت‌های مهندس نرم‌افزار ═══════════════ */
C.push({
  id:"22-skills", dir:"22-skills", accent:"#7C3AED", cat:"career",
  ico:'<circle cx="12" cy="7.5" r="3.4"/><path d="M4.5 20.5c0-3.6 3.4-6.2 7.5-6.2s7.5 2.6 7.5 6.2" stroke-linecap="round"/><path d="M18.5 4.5 20 6l3-3" stroke-linecap="round"/>',
  fa:{name:"مهارت‌های مهندس نرم‌افزار", desc:"خواندن کد دیگران، code review، تخمین، مستندنویسی، ارتباط، مصاحبه و رشد شغلی.",
      intro:"هیچ‌کس به‌خاطر ندانستن یک تابع اخراج نمی‌شود. آدم‌ها به‌خاطر تخمین‌های غلط، کدی که کسی نمی‌تواند نگهداری کند، و نتوانستن توضیح کارشان گیر می‌کنند. این مسیر دربارهٔ همان چیزهاست."},
  en:{name:"Software engineering skills", desc:"Reading other people's code, code review, estimation, technical writing, communication, interviews and career growth.",
      intro:"Nobody gets fired for not knowing a function. People get stuck on bad estimates, on code nobody can maintain, and on being unable to explain their work. This track is about those things."},
  ch:[
["01","01-role.html",0,18,70,"مهندس نرم‌افزار چه کاری می‌کند","کدنویسی کمتر از نصف کار است.","What a software engineer actually does","Writing code is less than half the job.","role responsibility engineering"],
["02","02-reading-code.html",0,18,80,"خواندن کد دیگران","روش سیستماتیک ورود به یک پروژهٔ ناآشنا.","Reading other people's code","A systematic way into an unfamiliar codebase.","reading code onboarding legacy"],
["03","03-writing-code.html",0,18,80,"نوشتن کد قابل نگهداری","نام‌گذاری، اندازهٔ تابع و کامنتی که ارزش دارد.","Writing maintainable code","Naming, function size and comments worth having.","naming readability comment refactor"],
["04","04-review.html",0,18,80,"code review: دادن و گرفتن","نقد کد بدون نقد آدم.","Code review: giving and receiving","Critiquing code without critiquing the person.","review feedback pullrequest"],
["05","05-debugging.html",0,18,85,"اشکال‌زدایی سیستماتیک","فرضیه، آزمایش، حذف — به‌جای حدس زدن.","Systematic debugging","Hypothesise, test, eliminate — instead of guessing.","debugging bisect hypothesis rubber duck"],
["06","06-estimation.html",0,18,80,"تخمین و برنامه‌ریزی","چرا همیشه طولانی‌تر می‌شود، و چه کارش می‌شود کرد.","Estimation and planning","Why it always takes longer, and what to do about it.","estimation planning scope buffer"],
["07","07-writing.html",0,18,80,"نوشتن مستند فنی","RFC، ADR و مستندی که خوانده شود.","Technical writing","RFCs, ADRs and documents people actually read.","documentation rfc adr writing"],
["08","08-communication.html",0,18,75,"ارتباط با غیرفنی‌ها","ترجمهٔ تصمیم فنی به زبان اثر.","Communicating with non-engineers","Translating a technical decision into impact.","communication stakeholder tradeoff"],
["09","09-teamwork.html",0,18,75,"کار تیمی و جریان Git","شاخه، commit خوانا و حل تعارض.","Teamwork and Git workflow","Branches, readable commits and resolving conflicts.","git workflow commit branch team"],
["10","10-interview.html",0,18,85,"مصاحبهٔ فنی","الگوریتم، طراحی سیستم و سؤال رفتاری.","Technical interviews","Algorithms, system design and behavioural questions.","interview algorithm system design behavioral"],
["11","11-resume.html",0,18,75,"رزومه و نمونه‌کار","نوشتن اثر، نه فهرست تکنولوژی.","CV and portfolio","Write impact, not a list of technologies.","resume cv portfolio github"],
["12","12-learning.html",0,18,75,"یادگیری مداوم","چطور یاد بگیری بدون غرق شدن در ابزار جدید.","Continuous learning","How to keep learning without drowning in new tools.","learning depth breadth"],
["13","13-focus.html",0,18,70,"مدیریت زمان و تمرکز","کار عمیق در محیطی پر از وقفه.","Time and focus","Deep work in an interrupt-driven environment.","focus deep work time management"],
["14","14-growth.html",0,18,80,"رشد شغلی: junior تا senior","تفاوت واقعی سطح‌ها چیست.","Career growth: junior to senior","What actually separates the levels.","career growth senior mentoring"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — مستندسازی یک پروژهٔ موجود","README، ADR و راهنمای شروع.","Project 1 — document an existing project","A README, an ADR and a getting-started guide.","capstone documentation",1],
["16","16-cap2.html",0,7,100,"پروژهٔ ۲ — review و بهبود کد دیگران","خواندن، نقد سازنده و refactor.","Project 2 — review and improve someone's code","Reading, constructive critique and refactoring.","capstone review refactor",2],
["17","17-cap3.html",0,9,150,"پروژهٔ ۳ — نمونه‌کار قابل ارائه","پروژه‌ای با مستند، تست، CI و توضیح تصمیم‌ها.","Project 3 — a portfolio piece","A project with docs, tests, CI and explained decisions.","capstone portfolio",3]
]});

/* ═══════════════ ۲۳ — تاریخچهٔ رایانش ═══════════════ */
C.push({
  id:"23-history-computing", dir:"23-history-computing", accent:"#A16207", cat:"roots",
  ico:'<circle cx="12" cy="12" r="9"/><path d="M12 6.6V12l3.6 2.2" stroke-linecap="round"/><path d="M3.4 9.2h3M17.6 9.2h3" stroke-linecap="round" opacity=".5"/>',
  fa:{name:"تاریخچهٔ رایانش", desc:"از چرتکه تا یادگیری ماشین: چرا هر تکنولوژی ساخته شد، چه دردی داشت، و چه چیزی را ممکن کرد.",
      intro:"تاریخ برای حفظ کردن تاریخ نیست. هر ابزاری که امروز استفاده می‌کنی، جواب یک دردِ مشخص در یک زمانِ مشخص بوده. وقتی آن درد را بشناسی، دیگر لازم نیست قاعده‌ها را حفظ کنی — خودت می‌فهمی چرا این‌طورند. این مسیر خط زمانی کامل را با نمودار می‌سازد."},
  en:{name:"A history of computing", desc:"From the abacus to machine learning: why each technology was built, what hurt before it, and what it made possible.",
      intro:"History is not for memorising dates. Every tool you use today answered a specific pain at a specific time. Once you know the pain, you stop memorising rules and start understanding them. This track builds the full timeline, with diagrams."},
  ch:[
["01","01-before.html",0,18,75,"پیش از رایانه","چرتکه، لگاریتم، ماشین تفاضلی بابیج و ایدهٔ آدا لاولیس.","Before the computer","The abacus, logarithms, Babbage's difference engine and Ada Lovelace's idea.","abacus babbage lovelace mechanical تاریخچه"],
["02","02-vacuum.html",0,18,80,"دههٔ ۱۹۴۰: لامپ خلأ و فون‌نویمان","ENIAC، معماری برنامهٔ ذخیره‌شده، و چرا هنوز همان معماری است.","The 1940s: vacuum tubes and von Neumann","ENIAC, the stored-program architecture, and why we still use it.","eniac von neumann vacuum tube architecture"],
["03","03-transistor.html",0,18,75,"ترانزیستور و مدار مجتمع","از اتاقی به اندازهٔ خانه تا تراشه‌ای در کف دست.","The transistor and the integrated circuit","From a room-sized machine to a chip in your palm.","transistor integrated circuit bell labs moore"],
["04","04-unix.html",0,18,80,"دههٔ ۶۰ و ۷۰: مِین‌فریم، یونیکس، C","فلسفه‌ای که هنوز روی هر سروری زنده است.","The 60s and 70s: mainframes, Unix, C","A philosophy still alive on every server today.","unix mainframe c language bell labs philosophy"],
["05","05-pc.html",0,18,80,"انقلاب ریزپردازنده و رایانهٔ شخصی","وقتی رایانه از سازمان به خانه آمد.","The microprocessor and the personal computer","When the computer left the institution and came home.","microprocessor intel 4004 apple ibm pc"],
["06","06-gui.html",0,18,75,"دههٔ ۸۰ و ۹۰: رابط گرافیکی و شبکه","Xerox PARC، مکینتاش، ویندوز، و تولد لینوکس.","The 80s and 90s: the GUI and the network","Xerox PARC, the Macintosh, Windows, and the birth of Linux.","gui xerox parc macintosh windows linux"],
["07","07-internet.html",0,18,80,"اینترنت عمومی و وب","از شبکه‌ای پژوهشی تا زیرساخت جهانی.","The public internet and the web","From a research network to global infrastructure.","internet www browser dotcom"],
["08","08-2000s.html",0,18,80,"دههٔ ۲۰۰۰: موبایل، ابر، متن‌باز","سه تغییری که مدل کسب‌وکار نرم‌افزار را عوض کردند.","The 2000s: mobile, cloud, open source","Three shifts that rewrote the business of software.","mobile cloud aws open source saas"],
["09","09-today.html",0,18,80,"امروز: چندهسته‌ای، GPU، یادگیری ماشین","چرا پردازنده‌ها دیگر سریع‌تر نمی‌شوند و به‌جایش بیشتر می‌شوند.","Today: many cores, GPUs, machine learning","Why processors stopped getting faster and started getting more numerous.","multicore gpu parallel machine learning"],
["10","10-languages.html",0,18,85,"تاریخچهٔ زبان‌های برنامه‌نویسی","از اسمبلی تا Rust — هر زبان جواب چه دردی بود.","A history of programming languages","From assembly to Rust — which pain each language answered.","fortran lisp c java python rust language history"],
["11","11-architecture.html",0,18,85,"تاریخچهٔ معماری نرم‌افزار","مونولیت ← لایه‌ای ← client-server ← SOA ← میکروسرویس ← serverless، و چرخهٔ بازگشتش.","A history of software architecture","Monolith → layered → client-server → SOA → microservices → serverless, and how it loops back.","monolith soa microservice serverless architecture history"],
["12","12-moore.html",0,18,75,"قانون مور و پایان آن","یک مشاهدهٔ تجربی که پنجاه سال صنعت را هدایت کرد.","Moore's law and its end","An empirical observation that steered an industry for fifty years.","moore law dennard scaling limits"],
["13","13-timeline.html",0,18,80,"خط زمانی کامل","یک نمودار بزرگ: سخت‌افزار، زبان، شبکه و معماری کنار هم.","The complete timeline","One large diagram: hardware, languages, networks and architecture side by side.","timeline diagram overview chronology"],
["14","14-cap1.html",0,5,60,"پروژهٔ ۱ — خط زمانی یک تکنولوژی","یک ابزاری که هر روز استفاده می‌کنی را ریشه‌یابی کن.","Project 1 — the timeline of one technology","Trace the roots of a tool you use every day.","capstone timeline research",1],
["15","15-cap2.html",0,7,90,"پروژهٔ ۲ — چرا این تصمیم گرفته شد","یک تصمیم فنی مشهور را تحلیل کن: زمینه، گزینه‌ها، نتیجه.","Project 2 — why that decision was made","Analyse a famous technical decision: context, options, outcome.","capstone analysis decision",2],
["16","16-cap3.html",0,9,120,"پروژهٔ ۳ — نقشهٔ تکامل یک حوزه","تکامل یک حوزهٔ فنی را با نمودار و منابع مستند کن.","Project 3 — mapping the evolution of a field","Document a field's evolution with diagrams and sources.","capstone research diagram",3]
]});

/* ═══════════════ ۲۴ — سخت‌افزار ═══════════════ */
C.push({
  id:"24-hardware", dir:"24-hardware", accent:"#0F766E", cat:"roots",
  ico:'<rect x="6.5" y="6.5" width="11" height="11" rx="1.6"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx=".8"/><path d="M9.5 6.5V3.4M14.5 6.5V3.4M9.5 17.5v3.1M14.5 17.5v3.1M6.5 9.5H3.4M6.5 14.5H3.4M17.5 9.5h3.1M17.5 14.5h3.1" stroke-linecap="round"/>',
  fa:{name:"سخت‌افزار در عمل", desc:"قطعه‌به‌قطعهٔ یک رایانه: CPU، حافظه، ذخیره‌سازی، گذرگاه، GPU، توان و خنک‌سازی — و اینکه هرکدام دقیقاً چه می‌کنند.",
      intro:"نرم‌افزار روی چیزی اجرا می‌شود. اگر ندانی آن چیز چطور کار می‌کند، بعضی مسائل هیچ‌وقت برایت معنا نمی‌دهند: چرا آن حلقه کند است، چرا آن سرور داغ می‌کند، چرا آن دیسک گلوگاه شده. این مسیر سخت‌افزار را از دید کسی توضیح می‌دهد که نرم‌افزار می‌نویسد."},
  en:{name:"Hardware in practice", desc:"Component by component: CPU, memory, storage, buses, GPU, power and cooling — and exactly what each one does.",
      intro:"Software runs on something. If you do not know how that something works, certain problems never make sense: why that loop is slow, why that server runs hot, why that disk became the bottleneck. This track explains hardware from the point of view of someone who writes software."},
  ch:[
["01","01-overview.html",0,18,75,"معماری کلی یک رایانه","مسیر یک دستور، از دکمهٔ روشن تا اجرا.","The overall architecture","The path of one instruction, from power button to execution.","architecture bus cpu memory io overview"],
["02","02-cpu.html",0,18,90,"CPU: هسته، کش، خط لوله","چرا cache miss گران‌تر از یک شاخهٔ اشتباه است.","The CPU: cores, cache, pipeline","Why a cache miss costs more than a mispredicted branch.","cpu core cache pipeline branch prediction isa"],
["03","03-memory.html",0,18,85,"حافظه و سلسله‌مراتبش","رجیستر تا دیسک، و اختلاف ده‌میلیون‌برابری تأخیر.","Memory and its hierarchy","From register to disk, and a ten-million-fold latency gap.","ram ddr latency hierarchy virtual memory"],
["04","04-storage.html",0,18,80,"ذخیره‌سازی: HDD، SSD، NVMe","چرا تصادفی خواندن روی SSD ارزان است و روی HDD نه.","Storage: HDD, SSD, NVMe","Why random reads are cheap on an SSD and expensive on a disk.","hdd ssd nvme iops seek wear"],
["05","05-motherboard.html",0,18,75,"مادربرد، چیپست و گذرگاه","PCIe و اینکه پهنای باند کجا تمام می‌شود.","Motherboard, chipset and buses","PCIe, and where the bandwidth runs out.","motherboard chipset pcie bus lanes"],
["06","06-gpu.html",0,18,80,"GPU و پردازش موازی","چرا کارت گرافیک برای یادگیری ماشین استفاده می‌شود.","GPUs and parallel processing","Why a graphics card ended up training models.","gpu cuda parallel simd vram"],
["07","07-power.html",0,18,70,"منبع تغذیه و توان","وات، راندمان، و محاسبهٔ نیاز واقعی.","Power supply and consumption","Watts, efficiency, and calculating what you actually need.","psu power efficiency watt ups"],
["08","08-cooling.html",0,18,70,"حرارت و خنک‌سازی","throttling: وقتی سخت‌افزار خودش را کند می‌کند.","Heat and cooling","Throttling: when the hardware slows itself down.","cooling thermal throttle tdp fan"],
["09","09-io.html",0,18,75,"کارت شبکه و ورودی/خروجی","وقفه، DMA، و اینکه چرا I/O گران است.","Network cards and I/O","Interrupts, DMA, and why I/O is expensive.","nic dma interrupt io throughput"],
["10","10-server.html",0,18,80,"سرور در برابر دسکتاپ","ECC، RAID، افزونگی — چه چیزی واقعاً فرق دارد.","Servers versus desktops","ECC, RAID, redundancy — what genuinely differs.","server ecc raid redundancy rack"],
["11","11-arm-x86.html",0,18,80,"ARM در برابر x86","دو فلسفهٔ طراحی، و اینکه چرا ایمیج داکر تو روی یکی کار نمی‌کند.","ARM versus x86","Two design philosophies, and why your Docker image fails on one of them.","arm x86 risc cisc architecture multiarch"],
["12","12-choosing.html",0,18,80,"انتخاب سخت‌افزار برای بار کاری","پایگاه‌داده، وب، پردازش — هرکدام گلوگاه متفاوتی دارند.","Choosing hardware for a workload","Databases, web, batch — each has a different bottleneck.","sizing bottleneck workload benchmark"],
["13","13-debug.html",0,18,80,"عیب‌یابی سخت‌افزاری","تشخیص RAM معیوب، دیسک در حال مرگ، و حرارت.","Hardware troubleshooting","Spotting bad RAM, a dying disk, and thermal problems.","smart memtest diagnostics failure"],
["14","14-cap1.html",0,5,60,"پروژهٔ ۱ — تشریح ماشین خودت","هر قطعه را شناسایی و نقشش را مستند کن.","Project 1 — dissect your own machine","Identify every component and document its role.","capstone inventory",1],
["15","15-cap2.html",0,7,90,"پروژهٔ ۲ — پیدا کردن گلوگاه","با اندازه‌گیری ثابت کن کدام قطعه محدودکننده است.","Project 2 — find the bottleneck","Prove by measurement which component is the limit.","capstone benchmark bottleneck",2],
["16","16-cap3.html",0,9,120,"پروژهٔ ۳ — طراحی یک سرور","برای یک بار کاری مشخص، سخت‌افزار انتخاب و توجیه کن.","Project 3 — spec a server","Choose and justify hardware for a defined workload.","capstone sizing design",3]
]});

/* ═══════════════ ۲۵ — بنیان شبکه ═══════════════ */
C.push({
  id:"25-network-foundations", dir:"25-network-foundations", accent:"#1D4ED8", cat:"roots",
  ico:'<circle cx="12" cy="5" r="2.3"/><circle cx="4.8" cy="18" r="2.3"/><circle cx="19.2" cy="18" r="2.3"/><circle cx="12" cy="12" r="2.3"/><path d="M12 7.3v2.4M10.2 13.4 6.4 16.4M13.8 13.4l3.8 3" stroke-linecap="round"/>',
  fa:{name:"بنیان شبکه", desc:"از سیگنال تا HTTP: مدل لایه‌ای، IP، TCP، DNS، TLS — با تاریخچه‌ای که نشان می‌دهد چرا این‌طور شد.",
      intro:"هر بار که چیزی «کار نمی‌کند»، مشکل در یکی از لایه‌هاست. اگر لایه‌ها را بشناسی، عیب‌یابی از حدس زدن به روش تبدیل می‌شود: از پایین شروع کن، هر لایه را ثابت کن، برو بالاتر."},
  en:{name:"Networking foundations", desc:"From signal to HTTP: the layered model, IP, TCP, DNS, TLS — with the history that explains why it turned out this way.",
      intro:"Every time something “does not work”, the problem is in one of the layers. Know the layers and debugging turns from guesswork into method: start at the bottom, prove each layer, move up."},
  ch:[
["01","01-why.html",0,18,75,"چرا شبکه؛ از سیگنال تا پیام","مسئلهٔ بنیادی: چطور معنا را روی سیم بفرستیم.","Why networks; from signal to message","The founding problem: how to send meaning down a wire.","signal encoding bandwidth network basics"],
["02","02-layers.html",0,18,80,"مدل OSI و TCP/IP","چرا لایه‌بندی کردند و کدام لایه‌ها واقعاً وجود دارند.","The OSI and TCP/IP models","Why they layered it, and which layers really exist.","osi tcpip layer model encapsulation"],
["03","03-physical.html",0,18,75,"لایهٔ فیزیکی و کابل","مس، فیبر، و محدودیت‌های فیزیکی واقعی.","The physical layer and cabling","Copper, fibre, and the real physical limits.","cable fiber copper ethernet physical"],
["04","04-ethernet.html",0,18,80,"اترنت و سوییچینگ","MAC، فریم، و کاری که سوییچ واقعاً می‌کند.","Ethernet and switching","MAC addresses, frames, and what a switch really does.","ethernet mac switch vlan arp"],
["05","05-ip.html",0,18,85,"IP، زیرشبکه و مسیریابی","subnet mask بدون حفظ کردن — با منطق.","IP, subnets and routing","Subnet masks by logic, not memorisation.","ip subnet cidr routing gateway ipv6"],
["06","06-tcp-udp.html",0,18,85,"TCP در برابر UDP","تضمین در برابر سرعت، و هزینهٔ هرکدام.","TCP versus UDP","Guarantees versus speed, and what each costs.","tcp udp handshake window retransmit"],
["07","07-dns.html",0,18,80,"DNS","بزرگ‌ترین پایگاه‌دادهٔ توزیع‌شدهٔ دنیا، و چرا کش می‌کند.","DNS","The world's largest distributed database, and why it caches.","dns resolver record ttl cache"],
["08","08-nat.html",0,18,75,"NAT و فایروال","چرا آدرس خصوصی داری و چرا port forwarding لازم است.","NAT and firewalls","Why you have a private address and why port forwarding exists.","nat firewall port forwarding private"],
["09","09-http.html",0,18,75,"HTTP روی لایهٔ انتقال","یک درخواست از مرورگر تا سرور، بایت‌به‌بایت.","HTTP over the transport layer","One browser request to server, byte by byte.","http request response header keepalive"],
["10","10-tls.html",0,18,85,"TLS و رمزنگاری","دست‌دادن، گواهی، و اینکه اعتماد از کجا می‌آید.","TLS and encryption","The handshake, certificates, and where trust comes from.","tls ssl certificate ca handshake pki"],
["11","11-history.html",0,18,80,"تاریخچه: ARPANET تا امروز","چرا اینترنت غیرمتمرکز طراحی شد.","History: ARPANET to now","Why the internet was designed to be decentralised.","arpanet rfc ietf history internet"],
["12","12-wireshark.html",0,18,85,"تحلیل ترافیک با Wireshark","دیدن آنچه واقعاً روی سیم می‌رود.","Traffic analysis with Wireshark","Seeing what actually goes down the wire.","wireshark capture pcap filter analysis"],
["13","13-debug.html",0,18,80,"عیب‌یابی لایه‌به‌لایه","روشی که همیشه جواب می‌دهد: از پایین به بالا.","Layer-by-layer debugging","The method that always works: bottom-up.","troubleshooting ping traceroute mtr method"],
["14","14-cap1.html",0,5,60,"پروژهٔ ۱ — نقشهٔ شبکهٔ خانه","هر دستگاه، آدرس و مسیرش را ترسیم کن.","Project 1 — map your home network","Chart every device, its address and its route.","capstone mapping",1],
["15","15-cap2.html",0,7,100,"پروژهٔ ۲ — تشریح یک درخواست","یک بارگذاری صفحه را از DNS تا TLS تا HTTP ضبط و تحلیل کن.","Project 2 — dissect one request","Capture and analyse a page load from DNS to TLS to HTTP.","capstone wireshark analysis",2],
["16","16-cap3.html",0,9,140,"پروژهٔ ۳ — شبکهٔ چندزیرشبکه‌ای","طراحی، مسیریابی و فایروال یک شبکهٔ کوچک سازمانی.","Project 3 — a multi-subnet network","Design, route and firewall a small organisational network.","capstone subnet design",3]
]});

/* ═══════════════ ۲۶ — وب ═══════════════ */
C.push({
  id:"26-web-foundations", dir:"26-web-foundations", accent:"#E8590C", cat:"roots",
  ico:'<circle cx="12" cy="12" r="9"/><path d="M3.2 9.6h17.6M3.2 14.4h17.6"/><path d="M12 3a15 15 0 0 0 0 18 15 15 0 0 0 0-18z"/>',
  fa:{name:"وب: تاریخچه و بنیان", desc:"از اولین صفحهٔ وب تا HTTP/3، WebAssembly و PWA — و اینکه مرورگر واقعاً چه می‌کند.",
      intro:"وب تنها پلتفرمی است که هیچ‌کس مالکش نیست و همه رویش می‌سازند. این مسیر نشان می‌دهد چطور از یک سند ساده به یک پلتفرم برنامه‌نویسی رسید، و هر لایه‌ای که اضافه شد جواب چه مشکلی بود."},
  en:{name:"The web: history and foundations", desc:"From the first web page to HTTP/3, WebAssembly and PWAs — and what the browser is really doing.",
      intro:"The web is the only platform nobody owns and everybody builds on. This track shows how a simple document format became a programming platform, and which problem each added layer solved."},
  ch:[
["01","01-birth.html",0,18,75,"وب چطور متولد شد","CERN، ابرمتن، و تصمیمی که همه‌چیز را باز نگه داشت.","How the web was born","CERN, hypertext, and the decision that kept it open.","cern berners-lee hypertext history"],
["02","02-url.html",0,18,75,"URL و مسیر یک درخواست","از تایپ آدرس تا رسیدن اولین بایت.","URLs and the path of a request","From typing an address to the first byte arriving.","url dns request navigation"],
["03","03-http-versions.html",0,18,85,"HTTP/1.1، HTTP/2، HTTP/3","هر نسخه کدام گلوگاه را برداشت.","HTTP/1.1, HTTP/2, HTTP/3","Which bottleneck each version removed.","http2 http3 quic multiplexing pipelining"],
["04","04-html.html",0,18,80,"HTML و مدل سند","معناشناسی، DOM، و اینکه چرا تگ درست مهم است.","HTML and the document model","Semantics, the DOM, and why the right tag matters.","html dom semantic accessibility"],
["05","05-css.html",0,18,85,"CSS: از جدول‌چینی تا Grid","سه دههٔ تلاش برای چیدمان.","CSS: from table layout to Grid","Three decades of trying to lay things out.","css layout flexbox grid cascade"],
["06","06-js.html",0,18,85,"جاوااسکریپت: از اسکریپت تا پلتفرم","ده روز طراحی، سی سال پیامد.","JavaScript: from script to platform","Ten days of design, thirty years of consequences.","javascript ecmascript engine v8 history"],
["07","07-rendering.html",0,18,90,"مرورگر چطور صفحه را می‌سازد","parse، style، layout، paint، composite — و اینکه کجا کند می‌شود.","How a browser renders a page","Parse, style, layout, paint, composite — and where it gets slow.","rendering reflow repaint critical path"],
["08","08-security.html",0,18,85,"امنیت وب","same-origin، CORS، CSP، XSS و CSRF.","Web security","Same-origin, CORS, CSP, XSS and CSRF.","cors csp xss csrf same-origin"],
["09","09-state.html",0,18,75,"کوکی، session و storage","حالت روی پروتکلی که بی‌حالت طراحی شده بود.","Cookies, sessions and storage","State on a protocol designed to be stateless.","cookie session localstorage samesite"],
["10","10-apis.html",0,18,85,"API: از SOAP تا REST تا GraphQL","هر سبک جواب چه مشکلی بود.","APIs: SOAP to REST to GraphQL","Which problem each style answered.","soap rest graphql rpc api design"],
["11","11-pwa.html",0,18,80,"PWA و وب آفلاین","service worker و اپی که نصب می‌شود.","PWAs and the offline web","Service workers and a web app you install.","pwa service worker manifest offline"],
["12","12-wasm.html",0,18,80,"WebAssembly","وقتی جاوااسکریپت تنها زبان مرورگر نماند.","WebAssembly","When JavaScript stopped being the browser's only language.","wasm webassembly performance runtime"],
["13","13-timeline.html",0,18,75,"خط زمانی وب","سی سال در یک نمودار.","The web timeline","Thirty years in one diagram.","timeline history web evolution"],
["14","14-cap1.html",0,5,60,"پروژهٔ ۱ — صفحه‌ای بدون فریم‌ورک","HTML معنایی، CSS مدرن، بدون هیچ وابستگی.","Project 1 — a page with no framework","Semantic HTML, modern CSS, zero dependencies.","capstone vanilla",1],
["15","15-cap2.html",0,7,100,"پروژهٔ ۲ — تحلیل کارایی یک سایت واقعی","اندازه‌گیری، تشخیص گلوگاه، و بهبود اندازه‌گیری‌شده.","Project 2 — audit a real site's performance","Measure, find the bottleneck, improve measurably.","capstone performance audit",2],
["16","16-cap3.html",0,9,140,"پروژهٔ ۳ — اپ وب آفلاین‌کار","service worker، کش، همگام‌سازی و نصب‌پذیری.","Project 3 — an offline-capable web app","Service worker, caching, sync and installability.","capstone pwa offline",3]
]});

/* ═══════════════ ۲۷ — شبکه‌های بی‌سیم ═══════════════ */
C.push({
  id:"27-wireless", dir:"27-wireless", accent:"#7E22CE", cat:"roots", soft:["25-network-foundations"],
  ico:'<path d="M4.2 8.4a11 11 0 0 1 15.6 0M7 11.6a7 7 0 0 1 10 0M9.8 14.8a3 3 0 0 1 4.4 0" stroke-linecap="round"/><circle cx="12" cy="18.6" r="1.5"/>',
  fa:{name:"شبکه‌های بی‌سیم و مخابرات", desc:"از موج و فرکانس تا ‎2G‎، ‎3G‎، ‎4G‎، ‎5G‎، وای‌فای، بلوتوث و اینترنت اشیا — با نمودار.",
      intro:"هوا سیم ندارد، پس چطور داده از آن رد می‌شود؟ این مسیر از فیزیک موج شروع می‌کند و لایه‌به‌لایه بالا می‌آید تا برسد به اینکه گوشی‌ات چطور با دکل حرف می‌زند و چرا ‎5G‎ اصلاً ساخته شد."},
  en:{name:"Wireless and telecom networks", desc:"From waves and frequency to 2G, 3G, 4G, 5G, Wi-Fi, Bluetooth and IoT — with diagrams throughout.",
      intro:"Air has no wires, so how does data cross it? This track starts at the physics of a wave and works up, layer by layer, to how your phone talks to a tower and why 5G was built at all."},
  ch:[
["01","01-waves.html",0,18,80,"موج، فرکانس، طیف","چرا طیف فرکانسی کمیاب و گران است.","Waves, frequency, spectrum","Why radio spectrum is scarce and expensive.","wave frequency spectrum hertz wavelength"],
["02","02-modulation.html",0,18,85,"مدولاسیون","چطور صفر و یک را سوار موج می‌کنیم.","Modulation","How ones and zeros get carried on a wave.","modulation am fm qam psk constellation"],
["03","03-antenna.html",0,18,80,"آنتن و انتشار","بهره، جهت‌مندی، افت مسیر و چندمسیری.","Antennas and propagation","Gain, directivity, path loss and multipath.","antenna gain propagation path loss mimo"],
["04","04-access.html",0,18,85,"دسترسی چندگانه","FDMA، TDMA، CDMA، OFDMA — چطور هزاران نفر یک دکل را share می‌کنند.","Multiple access","FDMA, TDMA, CDMA, OFDMA — how thousands share one tower.","fdma tdma cdma ofdma multiple access"],
["05","05-1g-2g.html",0,18,80,"‎1G‎ و ‎2G‎: از صدا تا پیامک","آنالوگ به دیجیتال، و تولد GSM.","1G and 2G: from voice to SMS","Analogue to digital, and the birth of GSM.","1g 2g gsm sms analog digital"],
["06","06-3g.html",0,18,80,"‎3G‎: داده وارد می‌شود","UMTS، و لحظه‌ای که موبایل به اینترنت وصل شد.","3G: data arrives","UMTS, and the moment mobile met the internet.","3g umts wcdma hspa data"],
["07","07-4g.html",0,18,85,"‎4G LTE‎: همه‌چیز IP","چرا شبکهٔ صوتی کنار گذاشته شد.","4G LTE: everything over IP","Why the voice-switched network was abandoned.","4g lte volte ofdm ip core"],
["08","08-5g.html",0,18,90,"‎5G‎: معماری و mmWave","تأخیر پایین، برش شبکه، و اینکه چه چیزی واقعاً تازه است.","5G: architecture and mmWave","Low latency, network slicing, and what is genuinely new.","5g mmwave slicing nr latency massive mimo"],
["09","09-wifi.html",0,18,85,"وای‌فای: ‎802.11‎ از b تا 7","باند، کانال، تداخل و اینکه چرا سرعت واقعی کمتر است.","Wi-Fi: 802.11 from b to 7","Bands, channels, interference, and why real speed is lower.","wifi 802.11 channel band interference wpa"],
["10","10-bluetooth.html",0,18,75,"بلوتوث و شبکه‌های کوتاه‌برد","BLE، profile، و مصرف انرژی.","Bluetooth and short-range networks","BLE, profiles, and power consumption.","bluetooth ble profile pairing zigbee"],
["11","11-iot.html",0,18,80,"LPWAN و اینترنت اشیا","LoRa و NB-IoT: برد زیاد، داده کم، باتری چندساله.","LPWAN and IoT","LoRa and NB-IoT: long range, little data, years of battery.","lora nbiot lpwan iot sigfox"],
["12","12-satellite.html",0,18,75,"ارتباط ماهواره‌ای","GEO، LEO، و تأخیری که فیزیک تحمیل می‌کند.","Satellite communication","GEO, LEO, and the latency physics imposes.","satellite geo leo starlink latency"],
["13","13-security.html",0,18,80,"امنیت بی‌سیم","WPA، رمزنگاری هوایی، و حمله‌های شناخته‌شده.","Wireless security","WPA, over-the-air encryption, and the known attacks.","wpa3 encryption security wireless attack"],
["14","14-measure.html",0,18,80,"اندازه‌گیری و عیب‌یابی سیگنال","RSSI، SNR، و تفسیر درست عددها.","Signal measurement and debugging","RSSI, SNR, and reading the numbers correctly.","rssi snr rsrp measurement survey"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — نقشهٔ پوشش وای‌فای","اندازه‌گیری سیگنال و تحلیل تداخل کانال.","Project 1 — a Wi-Fi coverage map","Measure signal and analyse channel interference.","capstone survey wifi",1],
["16","16-cap2.html",0,7,100,"پروژهٔ ۲ — تحلیل اتصال موبایل","نسل، باند و کیفیت اتصال را ثبت و تفسیر کن.","Project 2 — analyse a mobile connection","Record and interpret generation, band and link quality.","capstone mobile analysis",2],
["17","17-cap3.html",0,9,140,"پروژهٔ ۳ — طراحی پوشش یک ساختمان","انتخاب فرکانس، جای‌گذاری اکسس‌پوینت و توجیه مهندسی.","Project 3 — design coverage for a building","Frequency choice, access-point placement and engineering justification.","capstone design coverage",3]
]});

/* ═══════════════ ۲۸ — Git ═══════════════ */
C.push({
  id:"28-git", dir:"28-git", accent:"#F05033", cat:"basics",
  ico:'<circle cx="6.5" cy="6.5" r="2.4"/><circle cx="6.5" cy="17.5" r="2.4"/><circle cx="17.5" cy="12" r="2.4"/><path d="M6.5 8.9v6.2M8.9 6.9c4 .5 6 2 6.4 4.3M15.3 13.4c-.6 2.1-2.6 3.3-6.3 3.7" stroke-linecap="round"/>',
  fa:{name:"گیت", desc:"از اولین commit تا rebase، bisect و بیرون آمدن از هر دردسری — با مدل ذهنی درست از گراف.",
      intro:"بیشتر آدم‌ها Git را با حفظ کردن پنج دستور یاد می‌گیرند و بعد هر بار که چیزی غیرمنتظره می‌شود، مخزن را پاک می‌کنند و از نو clone می‌گیرند. این مسیر آن پنج دستور را کنار می‌گذارد و از مدل داده شروع می‌کند: Git یک گراف از snapshot‌هاست. وقتی گراف را ببینی، هیچ دستوری دیگر جادو نیست و هیچ خطایی بن‌بست نیست."},
  en:{name:"Git", desc:"From your first commit to rebase, bisect and getting out of any mess — with a correct mental model of the graph.",
      intro:"Most people learn Git by memorising five commands, then delete the repository and re-clone whenever something unexpected happens. This track skips the five commands and starts from the data model: Git is a graph of snapshots. Once you can see the graph, no command is magic and no error is a dead end."},
  ch:[
["01","01-why.html",1,18,70,"مسئله‌ای که Git حل می‌کند","چرا «کپی پوشه با تاریخ» جواب نمی‌دهد، و کنترل نسخه از کجا آمد.","The problem Git solves","Why “copy the folder with today's date” fails, and where version control came from.","git vcs history version control چرا"],
["02","02-model.html",0,18,85,"مدل داده: blob، tree، commit","Git یک پایگاه‌دادهٔ کلید-مقدار است. همه‌چیز از اینجا نتیجه می‌شود.","The data model: blobs, trees, commits","Git is a key-value store. Everything else follows from that.","blob tree commit sha object model plumbing"],
["03","03-basics.html",0,18,75,"سه ناحیه: working، staging، repository","چرا staging وجود دارد و چطور درست ازش استفاده کنیم.","Three areas: working, staging, repository","Why the staging area exists and how to use it properly.","add commit status staging index working tree"],
["04","04-history.html",0,18,80,"خواندن تاریخچه","log، show، diff — و پیدا کردن اینکه چه کسی چه چیزی را کِی عوض کرد.","Reading history","log, show, diff — and finding who changed what, when.","log diff show blame pickaxe"],
["05","05-branch.html",0,18,80,"شاخه: فقط یک اشاره‌گر","چرا ساختن شاخه در Git تقریباً رایگان است.","Branches: just a pointer","Why creating a branch in Git costs almost nothing.","branch checkout switch head pointer"],
["06","06-merge.html",0,18,85,"merge و حل تعارض","fast-forward، merge commit، و اینکه تعارض واقعاً یعنی چه.","Merging and resolving conflicts","Fast-forward, merge commits, and what a conflict actually is.","merge conflict fast-forward three-way"],
["07","07-rebase.html",0,18,90,"rebase","بازنویسی تاریخچه، و قانون طلایی‌اش.","Rebase","Rewriting history, and its golden rule.","rebase interactive squash fixup onto"],
["08","08-remote.html",0,18,80,"مخزن راه دور","fetch در برابر pull، push، و tracking branch.","Remotes","fetch versus pull, push, and tracking branches.","remote fetch pull push origin upstream tracking"],
["09","09-undo.html",0,18,90,"برگرداندن: reset، revert، restore","سه راه «برگرد عقب» که سه کار متفاوت می‌کنند.","Undoing: reset, revert, restore","Three ways to “go back” that do three different things.","reset revert restore hard soft mixed undo"],
["10","10-reflog.html",0,18,80,"reflog: تور نجات","تقریباً هیچ چیزی در Git واقعاً گم نمی‌شود.","reflog: the safety net","Almost nothing in Git is ever truly lost.","reflog recover lost commit dangling"],
["11","11-stash.html",0,18,70,"stash، cherry-pick، tag","سه ابزار کوچک که روزت را نجات می‌دهند.","stash, cherry-pick, tag","Three small tools that save your day.","stash cherry-pick tag annotated"],
["12","12-bisect.html",0,18,80,"bisect: پیدا کردن commit خراب","جستجوی دودویی روی تاریخچه، به‌صورت خودکار.","bisect: finding the bad commit","Binary search over history, automated.","bisect regression debug automate"],
["13","13-workflow.html",0,18,85,"استراتژی شاخه‌بندی","trunk-based، GitHub Flow، Git Flow — کدام برای کدام تیم.","Branching strategies","Trunk-based, GitHub Flow, Git Flow — which for which team.","workflow gitflow trunk based feature branch"],
["14","14-collab.html",0,18,80,"کار تیمی: PR و بازبینی کد","commit خوب، پیام خوب، و PR قابل بازبینی.","Collaboration: PRs and code review","Good commits, good messages, and a reviewable PR.","pull request review conventional commit"],
["15","15-advanced.html",0,18,85,"ابزارهای پیشرفته","worktree، submodule، sparse checkout، hook و LFS.","Advanced tooling","worktree, submodules, sparse checkout, hooks and LFS.","worktree submodule hook lfs sparse"],
["16","16-recovery.html",0,18,85,"وقتی همه‌چیز خراب شد","سناریوهای واقعی فاجعه و راه بیرون آمدن از هرکدام.","When everything goes wrong","Real disaster scenarios and the way out of each.","recovery detached head force push disaster"],
["17","17-cap1.html",0,5,60,"پروژهٔ ۱ — تاریخچهٔ تمیز","یک مجموعه تغییر آشفته را به تاریخچه‌ای خوانا تبدیل کن.","Project 1 — a clean history","Turn a messy set of changes into a readable history.","capstone rebase history",1],
["18","18-cap2.html",0,7,90,"پروژهٔ ۲ — گردش کار تیمی","شاخه، PR، بازبینی و ادغام روی یک مخزن واقعی.","Project 2 — a team workflow","Branch, PR, review and merge on a real repository.","capstone workflow pr",2],
["19","19-cap3.html",0,9,120,"پروژهٔ ۳ — نجات مخزن","یک مخزن به‌هم‌ریخته را بدون از دست دادن کار بازیابی کن.","Project 3 — rescue a repository","Recover a broken repository without losing any work.","capstone recovery reflog",3]
]});

/* ═══════════════ ۲۹ — Node.js ═══════════════ */
C.push({
  id:"29-nodejs", dir:"29-nodejs", accent:"#539E43", cat:"backend", pre:["41-javascript"],
  ico:'<path d="M12 2.6 20.5 7.3v9.4L12 21.4 3.5 16.7V7.3z"/><path d="M9.4 9.2v5.6M9.4 9.2h2.4a1.6 1.6 0 0 1 1.6 1.6v3a1.6 1.6 0 0 1-1.6 1.6" stroke-linecap="round"/>',
  fa:{name:"Node.js", desc:"event loop، ماژول، stream، همروندی و استقرار — پلتفرم، نه فریم‌ورک.",
      intro:"Node یک فریم‌ورک وب نیست؛ یک محیط اجرای جاوااسکریپت است که یک تصمیم بزرگ گرفته: یک نخ، و همه‌چیز غیرمسدودکننده. این مسیر روی همان تصمیم تمرکز می‌کند، چون هر رفتار عجیبی که در Node می‌بینی — از ترتیب لاگ‌ها تا سرور یخ‌زده — نتیجهٔ مستقیم آن است."},
  en:{name:"Node.js", desc:"The event loop, modules, streams, concurrency and deployment — the platform, not a framework.",
      intro:"Node is not a web framework; it is a JavaScript runtime built on one big decision: a single thread, and nothing blocking. This track focuses on that decision, because every strange behaviour you meet in Node — from log ordering to a frozen server — follows directly from it."},
  ch:[
["01","01-what.html",0,18,75,"Node چیست و چه مسئله‌ای را حل کرد","‎C10k‎، ورودی/خروجی غیرمسدودکننده و انتخاب تک‌نخی.","What Node is and what it solved","C10k, non-blocking I/O and the single-threaded choice.","node runtime v8 libuv nonblocking"],
["02","02-modules.html",0,18,75,"ماژول: CommonJS و ESM","دو سیستم ماژول در یک زیست‌بوم، و قواعد همزیستی‌شان.","Modules: CommonJS and ESM","Two module systems in one ecosystem, and the rules for living with both.","commonjs esm require import module"],
["03","03-npm.html",0,18,80,"npm و package.json","وابستگی، نسخه، script و lockfile.","npm and package.json","Dependencies, versions, scripts and the lockfile.","npm package.json lockfile semver script"],
["04","04-eventloop.html",0,18,95,"event loop از نزدیک","فاز‌ها، microtask و macrotask — و ترتیبی که غافلگیرت می‌کند.","The event loop up close","Phases, microtasks and macrotasks — and the ordering that surprises you.","event loop microtask nexttick setimmediate phase"],
["05","05-async.html",0,18,85,"async: از callback تا async/await","سه نسل مدیریت ناهمگامی و چرا هرکدام آمدند.","Async: from callbacks to async/await","Three generations of asynchrony and why each arrived.","callback promise async await hell"],
["06","06-fs-stream.html",0,18,85,"فایل‌سیستم و stream","پردازش فایل یک‌گیگابایتی بدون پر کردن حافظه.","Filesystem and streams","Processing a one-gigabyte file without filling memory.","fs stream pipe backpressure buffer"],
["07","07-http.html",0,18,80,"HTTP خام","سرور بدون فریم‌ورک، تا بدانی فریم‌ورک چه می‌کند.","Raw HTTP","A server with no framework, so you know what a framework does.","http server request response header"],
["08","08-buffer.html",0,18,75,"buffer و داده باینری","کار با بایت، رمزگذاری و فایل‌های دودویی.","Buffers and binary data","Working with bytes, encodings and binary files.","buffer binary encoding typedarray"],
["09","09-workers.html",0,18,85,"worker thread و cluster","وقتی یک نخ کافی نیست.","Worker threads and cluster","When one thread is not enough.","worker thread cluster child process cpu"],
["10","10-errors.html",0,18,80,"خطا و چرخهٔ عمر پروسه","خطای مدیریت‌نشده، سیگنال، و خاموشی تمیز.","Errors and the process lifecycle","Unhandled rejections, signals, and a graceful shutdown.","error uncaught rejection signal graceful shutdown"],
["11","11-debug.html",0,18,80,"دیباگ و پروفایل","inspector، heap snapshot و پیدا کردن نشتی حافظه.","Debugging and profiling","The inspector, heap snapshots and finding a memory leak.","debug inspector profile heap leak flame"],
["12","12-testing.html",0,18,75,"تست","تست‌ران داخلی Node، mock و تست ناهمگام.","Testing","Node's built-in test runner, mocking and async tests.","test node:test vitest jest mock"],
["13","13-security.html",0,18,80,"امنیت","وابستگی‌های آسیب‌پذیر، ورودی نامعتبر و اسرار.","Security","Vulnerable dependencies, untrusted input and secrets.","security audit injection secret supply chain"],
["14","14-deploy.html",0,18,80,"استقرار","داکر، مدیریت پروسه، متغیر محیطی و لاگ.","Deployment","Docker, process management, environment variables and logging.","deploy docker pm2 systemd env"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — ابزار خط فرمان","یک CLI که فایل می‌خواند و گزارش می‌سازد.","Project 1 — a command-line tool","A CLI that reads files and produces a report.","capstone cli",1],
["16","16-cap2.html",0,7,110,"پروژهٔ ۲ — سرور HTTP بدون فریم‌ورک","مسیریابی، بدنهٔ درخواست، فایل استاتیک و خطا — دستی.","Project 2 — an HTTP server with no framework","Routing, request bodies, static files and errors — by hand.","capstone http server",2],
["17","17-cap3.html",0,9,160,"پروژهٔ ۳ — خط لولهٔ پردازش داده","stream، worker، backpressure و اندازه‌گیری کارایی.","Project 3 — a data-processing pipeline","Streams, workers, backpressure and measured throughput.","capstone stream worker performance",3]
]});

/* ═══════════════ ۳۰ — Express ═══════════════ */
C.push({
  id:"30-express", dir:"30-express", accent:"#3F4A55", cat:"backend", pre:["29-nodejs"],
  ico:'<rect x="2.6" y="6" width="18.8" height="12" rx="2.4"/><path d="M6.4 12h11.2M14.4 9.2l3.2 2.8-3.2 2.8" stroke-linecap="round" stroke-linejoin="round"/>',
  fa:{name:"Express", desc:"مدل middleware، مسیریابی، اعتبارسنجی، احراز هویت و ساختار پروژه‌ای که بزرگ شود.",
      intro:"Express عمداً کم‌امکانات است: یک تابع، یک زنجیرهٔ middleware، و بقیه‌اش با تو. این آزادی هم قدرت آن است و هم دام آن. این مسیر ساختار می‌دهد — تا پروژه‌ات در ماه ششم هم قابل خواندن بماند."},
  en:{name:"Express", desc:"The middleware model, routing, validation, authentication and a project structure that scales.",
      intro:"Express is deliberately minimal: one function, one middleware chain, and the rest is up to you. That freedom is both its strength and its trap. This track supplies the structure — so your project is still readable in month six."},
  ch:[
["01","01-model.html",0,18,75,"Express و مدل middleware","همه‌چیز یک تابع با سه آرگومان است.","Express and the middleware model","Everything is one function with three arguments.","express middleware next request response"],
["02","02-routing.html",0,18,75,"مسیریابی","پارامتر، الگو، router و ترتیب تطبیق.","Routing","Parameters, patterns, routers and match order.","route router param wildcard order"],
["03","03-req-res.html",0,18,75,"درخواست و پاسخ","بدنه، هدر، کوکی، آپلود و پاسخ‌های مختلف.","Request and response","Bodies, headers, cookies, uploads and response types.","body parser header cookie multipart"],
["04","04-custom-mw.html",0,18,80,"middleware خودت","لاگ، زمان‌سنجی، احراز هویت — و ترتیبی که مهم است.","Writing your own middleware","Logging, timing, auth — and the order that matters.","middleware custom order error-handling"],
["05","05-static.html",0,18,70,"فایل استاتیک و قالب","سرو کردن دارایی و رندر سمت سرور.","Static files and templates","Serving assets and server-side rendering.","static template ejs pug view"],
["06","06-validation.html",0,18,75,"اعتبارسنجی ورودی","هیچ ورودی‌ای قابل اعتماد نیست.","Input validation","No input is trustworthy.","validation zod joi sanitize schema"],
["07","07-db.html",0,18,85,"اتصال به پایگاه‌داده","Prisma یا کوئری خام، pool و مهاجرت.","Connecting to a database","Prisma or raw queries, pooling and migrations.","prisma sql pool migration orm"],
["08","08-auth.html",0,18,85,"احراز هویت با JWT","ورود، توکن، refresh و نگهداری امن.","Authentication with JWT","Login, tokens, refresh and safe storage.","jwt auth bcrypt session refresh"],
["09","09-errors.html",0,18,75,"مدیریت خطا","middleware خطا، پاسخ یکدست و لاگ.","Error handling","The error middleware, consistent responses and logging.","error handler async wrapper logging"],
["10","10-structure.html",0,18,80,"ساختار پروژه","از یک فایل به لایه‌های با مسئولیت روشن.","Project structure","From one file to layers with clear responsibilities.","structure layer service controller repository"],
["11","11-testing.html",0,18,80,"تست","تست مسیرها با supertest و پایگاه‌دادهٔ تست.","Testing","Route tests with supertest and a test database.","supertest integration test fixture"],
["12","12-security.html",0,18,80,"امنیت","helmet، CORS، rate limit و تزریق.","Security","helmet, CORS, rate limiting and injection.","helmet cors ratelimit injection owasp"],
["13","13-deploy.html",0,18,75,"استقرار","داکر، پروکسی معکوس و پیکربندی production.","Deployment","Docker, a reverse proxy and production configuration.","deploy docker nginx cluster env"],
["14","14-cap1.html",0,5,70,"پروژهٔ ۱ — API یادداشت","CRUD کامل با اعتبارسنجی و تست.","Project 1 — a notes API","Full CRUD with validation and tests.","capstone crud",1],
["15","15-cap2.html",0,7,110,"پروژهٔ ۲ — API با احراز هویت","کاربر، نقش، توکن و مسیرهای محافظت‌شده.","Project 2 — an authenticated API","Users, roles, tokens and protected routes.","capstone auth jwt",2],
["16","16-cap3.html",0,9,160,"پروژهٔ ۳ — سرویس production","لایه‌بندی، کش، صف، مشاهده‌پذیری و استقرار.","Project 3 — a production service","Layering, caching, queues, observability and deployment.","capstone production",3]
]});

/* ═══════════════ ۳۱ — NestJS ═══════════════ */
C.push({
  id:"31-nestjs", dir:"31-nestjs", accent:"#E0234E", cat:"backend", pre:["29-nodejs","42-typescript"], soft:["47-oop"],
  ico:'<path d="M12 2.6 20.5 7.3v9.4L12 21.4 3.5 16.7V7.3z"/><circle cx="12" cy="12" r="2.2"/><path d="M12 4.8v5M12 14.2v5" stroke-linecap="round"/>',
  fa:{name:"NestJS", desc:"معماری ماژولار، DI، guard و interceptor، ORM، میکروسرویس و GraphQL روی Node.",
      intro:"Nest جواب یک سؤال است: اگر بخواهی روی Node پروژه‌ای بنویسی که ده نفر رویش کار کنند و سه سال زنده بماند، ساختارش باید چه باشد. جوابش را از Angular و از دنیای جاوا و دات‌نت گرفته: ماژول، تزریق وابستگی، و مرزهای صریح."},
  en:{name:"NestJS", desc:"Modular architecture, DI, guards and interceptors, ORMs, microservices and GraphQL on Node.",
      intro:"Nest answers one question: if ten people must work on a Node project that has to live three years, what structure does it need? Its answer borrows from Angular and from the Java and .NET worlds: modules, dependency injection, and explicit boundaries."},
  ch:[
["01","01-why.html",0,18,75,"چرا Nest؛ معماری ماژولار","چه چیزی را از Express می‌گیرد و چه چیزی می‌دهد.","Why Nest; modular architecture","What it takes away from Express and what it gives back.","nest architecture module opinionated"],
["02","02-building-blocks.html",0,18,80,"ماژول، کنترلر، سرویس","سه قطعه‌ای که کل فریم‌ورک از آن‌ها ساخته می‌شود.","Modules, controllers, services","The three pieces the whole framework is built from.","module controller service provider"],
["03","03-di.html",0,18,85,"تزریق وابستگی","دامنه، طول عمر و وابستگی دایره‌ای.","Dependency injection","Scopes, lifetimes and circular dependencies.","di inject provider scope circular"],
["04","04-pipes.html",0,18,80,"pipe و اعتبارسنجی","تبدیل و اعتبارسنجی ورودی، به‌صورت اعلانی.","Pipes and validation","Transforming and validating input, declaratively.","pipe validation dto class-validator transform"],
["05","05-guards.html",0,18,85,"guard و احراز هویت","‎JWT‎، نقش و مجوز مبتنی بر متادیتا.","Guards and authentication","JWT, roles and metadata-driven authorisation.","guard jwt passport role authorization"],
["06","06-interceptors.html",0,18,80,"interceptor","لاگ، تبدیل پاسخ، کش و زمان‌سنجی.","Interceptors","Logging, response shaping, caching and timing.","interceptor rxjs transform cache"],
["07","07-filters.html",0,18,75,"exception filter","خطای یکدست در کل برنامه.","Exception filters","One consistent error shape across the app.","exception filter http error"],
["08","08-orm.html",0,18,90,"پایگاه‌داده: TypeORM و Prisma","مدل، رابطه، مهاجرت و تراکنش.","Databases: TypeORM and Prisma","Models, relations, migrations and transactions.","typeorm prisma entity migration transaction"],
["09","09-config.html",0,18,75,"پیکربندی و محیط","ماژول پیکربندی، اعتبارسنجی متغیرها و اسرار.","Configuration and environments","The config module, validated variables and secrets.","config env validation secret"],
["10","10-testing.html",0,18,85,"تست","تست واحد با ماژول تست و تست ‎e2e‎.","Testing","Unit tests with the testing module, and e2e tests.","test e2e supertest mock testing module"],
["11","11-microservices.html",0,18,90,"میکروسرویس در Nest","transport، الگوی پیام و رویداد.","Microservices in Nest","Transports, message patterns and events.","microservice transport tcp rabbitmq pattern"],
["12","12-graphql.html",0,18,85,"GraphQL","schema-first در برابر code-first، resolver و ‎N+1‎.","GraphQL","Schema-first versus code-first, resolvers and N+1.","graphql resolver dataloader schema"],
["13","13-websocket.html",0,18,80,"WebSocket","gateway، اتاق و رویداد بی‌درنگ.","WebSockets","Gateways, rooms and real-time events.","websocket gateway socket.io room"],
["14","14-deploy.html",0,18,80,"استقرار","بیلد، داکر، مانیتورینگ و کارایی.","Deployment","Building, Docker, monitoring and performance.","deploy docker build monitoring"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — ‎API‎ ماژولار","دو ماژول با مرز روشن و تست.","Project 1 — a modular API","Two modules with clear boundaries and tests.","capstone module",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — احراز هویت و مجوز","‎JWT‎، نقش، guard سفارشی و تست ‎e2e‎.","Project 2 — authentication and authorisation","JWT, roles, custom guards and e2e tests.","capstone auth guard",2],
["17","17-cap3.html",0,9,170,"پروژهٔ ۳ — سامانهٔ چندسرویسه","دو سرویس Nest با صف، رویداد و مشاهده‌پذیری.","Project 3 — a multi-service system","Two Nest services with a queue, events and observability.","capstone microservice",3]
]});

/* ═══════════════ ۳۲ — Rust ═══════════════ */
C.push({
  id:"32-rust", dir:"32-rust", accent:"#CE422B", cat:"backend", soft:["43-c"],
  ico:'<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="3.4"/><path d="M12 3.4v2.2M12 18.4v2.2M20.6 12h-2.2M5.6 12H3.4" stroke-linecap="round"/>',
  fa:{name:"Rust", desc:"مالکیت، قرض‌گیری، trait، همروندی بی‌ترس و وب با Axum — از صفر تا سرویس واقعی.",
      intro:"Rust یک معامله پیشنهاد می‌دهد: کامپایلر سخت‌گیری می‌کند، و در عوض کل دسته‌ای از باگ‌ها — نشتی حافظه، اشارهٔ آویزان، مسابقهٔ داده — در زمان اجرا اصلاً ممکن نمی‌شوند. سه هفتهٔ اول با کامپایلر می‌جنگی. بعد از آن، متوجه می‌شوی داشت درست می‌گفت."},
  en:{name:"Rust", desc:"Ownership, borrowing, traits, fearless concurrency and web services with Axum — from zero to production.",
      intro:"Rust offers a trade: the compiler is strict, and in exchange an entire class of bugs — leaks, dangling pointers, data races — becomes impossible at run time. You fight the compiler for three weeks. After that, you realise it was right."},
  ch:[
["01","01-why.html",0,18,75,"چرا Rust","مسئلهٔ ایمنی حافظه بدون زباله‌روب.","Why Rust","Memory safety without a garbage collector.","rust safety performance gc systems"],
["02","02-ownership.html",0,18,95,"مالکیت","تک قاعده‌ای که همه‌چیز از آن می‌آید.","Ownership","The single rule everything else follows from.","ownership move drop scope"],
["03","03-borrowing.html",0,18,95,"قرض‌گیری و طول عمر","مرجع مشترک و انحصاری، و اینکه lifetime چه می‌گوید.","Borrowing and lifetimes","Shared and exclusive references, and what a lifetime states.","borrow reference lifetime mutable aliasing"],
["04","04-types.html",0,18,80,"نوع‌ها: struct و enum","enum در Rust بسیار قوی‌تر از چیزی است که فکر می‌کنی.","Types: structs and enums","Rust's enums are far more powerful than you expect.","struct enum type impl derive"],
["05","05-matching.html",0,18,75,"pattern matching","تطبیق جامع، و کامپایلری که حالت فراموش‌شده را می‌گیرد.","Pattern matching","Exhaustive matching, and a compiler that catches the case you forgot.","match pattern if-let exhaustive"],
["06","06-errors.html",0,18,85,"خطا: Result و Option","بدون exception، بدون null.","Errors: Result and Option","No exceptions, no null.","result option error question mark anyhow"],
["07","07-traits.html",0,18,90,"trait و generic","چندریختی بدون وراثت.","Traits and generics","Polymorphism without inheritance.","trait generic impl dyn bound"],
["08","08-collections.html",0,18,80,"مجموعه‌ها و iterator","Vec، HashMap و زنجیرهٔ iterator بدون هزینه.","Collections and iterators","Vec, HashMap and zero-cost iterator chains.","vec hashmap iterator closure collect"],
["09","09-modules.html",0,18,75,"ماژول و Cargo","ساختار پروژه، crate، feature و workspace.","Modules and Cargo","Project layout, crates, features and workspaces.","cargo crate module workspace feature"],
["10","10-concurrency.html",0,18,95,"همروندی بی‌ترس","چرا مسابقهٔ داده در Rust کامپایل نمی‌شود.","Fearless concurrency","Why a data race does not compile in Rust.","thread send sync arc mutex channel"],
["11","11-async.html",0,18,90,"async و Tokio","future، runtime و تفاوتش با نخ.","async and Tokio","Futures, the runtime, and how it differs from threads.","async await tokio future runtime"],
["12","12-unsafe.html",0,18,80,"unsafe و FFI","کِی لازم است و چطور مهارش کنیم.","unsafe and FFI","When it is necessary and how to contain it.","unsafe ffi raw pointer extern"],
["13","13-testing.html",0,18,80,"تست و benchmark","تست داخلی، تست یکپارچه و اندازه‌گیری.","Testing and benchmarking","Unit tests, integration tests and measurement.","test bench criterion assert"],
["14","14-web.html",0,18,90,"وب با Axum","مسیریابی، حالت مشترک، پایگاه‌داده و ‎JSON‎.","Web with Axum","Routing, shared state, databases and JSON.","axum tower serde sqlx handler"],
["15","15-deploy.html",0,18,75,"بیلد و استقرار","کامپایل بهینه، باینری کوچک و داکر.","Building and deploying","Optimised builds, small binaries and Docker.","release build musl docker static"],
["16","16-cap1.html",0,5,80,"پروژهٔ ۱ — ابزار خط فرمان","پردازش فایل با مدیریت خطای درست.","Project 1 — a CLI tool","File processing with proper error handling.","capstone cli clap",1],
["17","17-cap2.html",0,7,130,"پروژهٔ ۲ — سرویس وب","‎API‎ با پایگاه‌داده، اعتبارسنجی و تست.","Project 2 — a web service","An API with a database, validation and tests.","capstone axum api",2],
["18","18-cap3.html",0,9,190,"پروژهٔ ۳ — سرویس همروند پرکار","async، اشتراک حالت، backpressure و اندازه‌گیری.","Project 3 — a high-throughput concurrent service","async, shared state, backpressure and measurement.","capstone concurrency performance",3]
]});

/* ═══════════════ ۳۳ — Ruby و Rails ═══════════════ */
C.push({
  id:"33-ruby-rails", dir:"33-ruby-rails", accent:"#CC0000", cat:"backend",
  ico:'<path d="M12 3 20.4 8.4 17.4 19H6.6L3.6 8.4z"/><path d="M3.6 8.4h16.8M12 3v16M8 8.4 12 19M16 8.4 12 19" stroke-linecap="round" opacity=".85"/>',
  fa:{name:"Ruby و Rails", desc:"زبان Ruby، سپس Rails: ‎MVC‎، ActiveRecord، ‎API‎، job پس‌زمینه و تست با RSpec.",
      intro:"Rails با یک ادعا آمد: بیشتر برنامه‌های وب شبیه هم‌اند، پس بیایید تصمیم‌های تکراری را پیش‌فرض کنیم. نتیجه‌اش سرعتی است که هنوز کم‌نظیر است — به شرطی که قراردادها را بشناسی. این مسیر اول خود Ruby را می‌دهد، چون Rails بدون Ruby فقط جادوست."},
  en:{name:"Ruby & Rails", desc:"The Ruby language, then Rails: MVC, ActiveRecord, APIs, background jobs and testing with RSpec.",
      intro:"Rails arrived with a claim: most web applications resemble each other, so let us make the repetitive decisions defaults. The result is a speed that is still hard to match — provided you know the conventions. This track teaches Ruby first, because Rails without Ruby is just magic."},
  ch:[
["01","01-ruby.html",0,18,85,"Ruby در ۹۰ دقیقه","نحو، نوع‌ها و فلسفهٔ «همه‌چیز شیء است».","Ruby in ninety minutes","Syntax, types and the everything-is-an-object philosophy.","ruby syntax object irb"],
["02","02-oop.html",0,18,80,"شیءگرایی در Ruby","کلاس، ماژول، mixin و متد گمشده.","Object orientation in Ruby","Classes, modules, mixins and method_missing.","class module mixin metaprogramming"],
["03","03-blocks.html",0,18,80,"block، proc و lambda","الگویی که همهٔ کد Ruby رویش سوار است.","Blocks, procs and lambdas","The pattern all Ruby code rests on.","block proc lambda yield enumerable"],
["04","04-gems.html",0,18,70,"gem و Bundler","وابستگی و نسخه‌بندی.","Gems and Bundler","Dependencies and versioning.","gem bundler gemfile version"],
["05","05-rails.html",0,18,85,"Rails: معماری و قرارداد","‎MVC‎، ساختار پوشه و «قرارداد بر پیکربندی».","Rails: architecture and convention","MVC, the directory structure and convention over configuration.","rails mvc convention generator"],
["06","06-activerecord.html",0,18,90,"ActiveRecord","مدل، رابطه، اعتبارسنجی و callback.","ActiveRecord","Models, associations, validations and callbacks.","activerecord association validation callback"],
["07","07-migration.html",0,18,75,"مهاجرت پایگاه‌داده","تغییر شِما به‌صورت نسخه‌بندی‌شده.","Database migrations","Versioned schema change.","migration schema rollback seed"],
["08","08-routing.html",0,18,80,"مسیریابی و کنترلر","مسیر ‎RESTful‎، پارامتر قوی و فیلتر.","Routing and controllers","RESTful routes, strong parameters and filters.","route controller restful params filter"],
["09","09-views.html",0,18,75,"view و قالب","‎ERB‎، partial، helper و دارایی‌ها.","Views and templates","ERB, partials, helpers and assets.","erb view partial helper asset"],
["10","10-forms.html",0,18,75,"فرم","‎form_with‎، اعتبارسنجی و نمایش خطا.","Forms","form_with, validation and error display.","form validation error nested"],
["11","11-auth.html",0,18,80,"احراز هویت","‎has_secure_password‎ یا Devise.","Authentication","has_secure_password or Devise.","authentication devise session password"],
["12","12-api.html",0,18,80,"Rails به‌عنوان ‎API‎","حالت ‎API-only‎، سریال‌سازی و نسخه‌گذاری.","Rails as an API","API-only mode, serialisation and versioning.","api serializer jbuilder versioning"],
["13","13-jobs.html",0,18,80,"کار پس‌زمینه","‎ActiveJob‎، Sidekiq و صف.","Background jobs","ActiveJob, Sidekiq and queues.","activejob sidekiq queue worker"],
["14","14-testing.html",0,18,85,"تست با RSpec","تست مدل، درخواست و سیستم.","Testing with RSpec","Model, request and system specs.","rspec factory capybara spec"],
["15","15-performance.html",0,18,80,"کارایی","‎N+1‎، کش و ایندکس.","Performance","N+1 queries, caching and indexes.","n+1 cache index bullet"],
["16","16-deploy.html",0,18,80,"استقرار","Puma، داکر، دارایی‌ها و متغیر محیطی.","Deployment","Puma, Docker, assets and environment variables.","puma deploy docker credentials"],
["17","17-cap1.html",0,5,70,"پروژهٔ ۱ — وبلاگ","‎CRUD‎، فرم و اعتبارسنجی.","Project 1 — a blog","CRUD, forms and validation.","capstone crud blog",1],
["18","18-cap2.html",0,7,120,"پروژهٔ ۲ — ‎API‎ با احراز هویت","حالت ‎API-only‎، توکن و تست.","Project 2 — an authenticated API","API-only mode, tokens and tests.","capstone api auth",2],
["19","19-cap3.html",0,9,170,"پروژهٔ ۳ — اپ کامل","کار پس‌زمینه، کش، جستجو و استقرار.","Project 3 — a complete app","Background jobs, caching, search and deployment.","capstone production",3]
]});

/* ═══════════════ ۳۴ — Svelte ═══════════════ */
C.push({
  id:"34-svelte", dir:"34-svelte", accent:"#FF3E00", cat:"frontend", pre:["41-javascript"], soft:["67-css"],
  ico:'<path d="M15.6 4.2 9.2 8.3a4.3 4.3 0 0 0-1.3 5.9 4.3 4.3 0 0 0 6 1.3l6.4-4.1a4.3 4.3 0 0 0 1.3-5.9 4.3 4.3 0 0 0-6-1.3z" opacity=".55"/><path d="M8.4 19.8l6.4-4.1a4.3 4.3 0 0 0 1.3-5.9 4.3 4.3 0 0 0-6-1.3L3.7 12.6a4.3 4.3 0 0 0-1.3 5.9 4.3 4.3 0 0 0 6 1.3z"/>',
  fa:{name:"Svelte", desc:"کامپایلر به‌جای runtime: واکنش‌پذیری، store، SvelteKit و استقرار.",
      intro:"بقیهٔ فریم‌ورک‌ها یک کتابخانه را به مرورگر می‌فرستند تا کار را در زمان اجرا انجام دهد. Svelte همان کار را در زمان کامپایل انجام می‌دهد و جاوااسکریپت خالص تحویل می‌دهد. نتیجه: باندل کوچک‌تر و کد کمتر — به قیمت یک مرحلهٔ بیلد که دیگر اختیاری نیست."},
  en:{name:"Svelte", desc:"A compiler instead of a runtime: reactivity, stores, SvelteKit and deployment.",
      intro:"Other frameworks ship a library to the browser to do the work at run time. Svelte does that work at compile time and ships plain JavaScript. The result is a smaller bundle and less code — at the cost of a build step that is no longer optional."},
  ch:[
["01","01-why.html",0,18,75,"چرا Svelte؛ کامپایلر به‌جای runtime","تفاوت بنیادی با React و Vue، در یک مثال.","Why Svelte; a compiler, not a runtime","The fundamental difference from React and Vue, in one example.","svelte compiler runtime bundle virtual dom"],
["02","02-components.html",0,18,75,"کامپوننت و نحو","یک فایل: نشانه‌گذاری، استایل و منطق.","Components and syntax","One file: markup, style and logic.","component script style markup"],
["03","03-reactivity.html",0,18,85,"واکنش‌پذیری","‎rune‎ و مدل جدید، در برابر ‎$:‎ قدیمی.","Reactivity","Runes and the new model, versus the old $: syntax.","reactivity rune state derived effect"],
["04","04-props.html",0,18,75,"props و رویداد","داده به پایین، رویداد به بالا.","Props and events","Data down, events up.","props event dispatch binding"],
["05","05-slots.html",0,18,70,"slot و ترکیب","کامپوننت‌هایی که محتوا می‌پذیرند.","Slots and composition","Components that accept content.","slot snippet children composition"],
["06","06-lifecycle.html",0,18,70,"چرخهٔ عمر","‎onMount‎، پاکسازی و اثرها.","Lifecycle","onMount, cleanup and effects.","onmount ondestroy tick effect"],
["07","07-stores.html",0,18,80,"store و حالت مشترک","حالت بیرون از کامپوننت.","Stores and shared state","State outside components.","store writable readable derived context"],
["08","08-animation.html",0,18,75,"انیمیشن و گذار","حرکت داخلی فریم‌ورک، بدون کتابخانه.","Animation and transitions","Built-in motion, no library needed.","transition animate motion tween spring"],
["09","09-kit-routing.html",0,18,80,"SvelteKit: مسیریابی","مسیریابی مبتنی بر فایل و layout.","SvelteKit: routing","File-based routing and layouts.","sveltekit route layout param"],
["10","10-kit-load.html",0,18,85,"load و داده","بارگذاری سمت سرور و سمت مرورگر.","load and data","Server-side and client-side loading.","load server universal fetch"],
["11","11-kit-forms.html",0,18,80,"‎form action‎","فرم‌هایی که بدون جاوااسکریپت هم کار می‌کنند.","Form actions","Forms that work without JavaScript.","form action progressive enhancement"],
["12","12-ssr.html",0,18,80,"‎SSR‎، ‎SSG‎ و adapter","انتخاب حالت رندر و مقصد استقرار.","SSR, SSG and adapters","Choosing a render mode and a deployment target.","ssr ssg prerender adapter"],
["13","13-testing.html",0,18,75,"تست","تست کامپوننت و تست ‎e2e‎.","Testing","Component tests and e2e tests.","vitest playwright testing library"],
["14","14-deploy.html",0,18,75,"استقرار","بیلد، adapter نود و داکر.","Deployment","Building, the node adapter and Docker.","deploy adapter node docker static"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — لیست کارها","حالت، رویداد و ماندگاری محلی.","Project 1 — a to-do list","State, events and local persistence.","capstone todo",1],
["16","16-cap2.html",0,7,110,"پروژهٔ ۲ — اپ چندصفحه‌ای با داده","مسیریابی، load، فرم و خطا.","Project 2 — a multi-page data app","Routing, load, forms and errors.","capstone sveltekit",2],
["17","17-cap3.html",0,9,160,"پروژهٔ ۳ — اپ کامل ‎SSR‎","احراز هویت، ‎SSR‎، کارایی و استقرار.","Project 3 — a full SSR app","Authentication, SSR, performance and deployment.","capstone ssr production",3]
]});

/* ═══════════════ ۳۵ — Qwik ═══════════════ */
C.push({
  id:"35-qwik", dir:"35-qwik", accent:"#18B6F6", cat:"frontend", pre:["41-javascript"],
  ico:'<path d="M13.4 2.6 3.6 13.4h6.2l-1 8 9.8-10.8h-6.2z" stroke-linejoin="round"/>',
  fa:{name:"Qwik", desc:"‎resumability‎ به‌جای ‎hydration‎: اپی که تقریباً هیچ جاوااسکریپتی بارگذاری نمی‌کند.",
      intro:"هر فریم‌ورک ‎SSR‎ یک هزینهٔ پنهان دارد: صفحه سریع نمایش داده می‌شود، اما تا وقتی کل جاوااسکریپت دانلود و اجرا نشود، کلیک‌ها کار نمی‌کنند. اسمش ‎hydration‎ است. Qwik این مرحله را کاملاً حذف می‌کند — و این مسیر توضیح می‌دهد چطور، و چه چیزی در عوض می‌دهی."},
  en:{name:"Qwik", desc:"Resumability instead of hydration: an app that loads almost no JavaScript.",
      intro:"Every SSR framework carries a hidden cost: the page paints fast, but clicks do nothing until all the JavaScript has downloaded and run. That step is hydration. Qwik removes it entirely — and this track explains how, and what you give up in return."},
  ch:[
["01","01-hydration.html",0,18,80,"مسئله: hydration","چرا صفحه‌ای که دیده می‌شود هنوز کار نمی‌کند.","The problem: hydration","Why a page you can see still does not respond.","hydration tti interactive ssr cost"],
["02","02-resumability.html",0,18,85,"resumability","به‌جای اجرای دوباره، ادامه دادن از جایی که سرور رها کرد.","Resumability","Continuing where the server left off, instead of re-running.","resumability serialize continue state"],
["03","03-components.html",0,18,75,"کامپوننت و signal","واکنش‌پذیری ریزدانه.","Components and signals","Fine-grained reactivity.","component signal useSignal store"],
["04","04-dollar.html",0,18,85,"‎$‎ و اجرای تنبل","مرز‌هایی که کامپایلر برای بارگذاری تنبل می‌سازد.","The $ sign and lazy execution","The boundaries the compiler creates for lazy loading.","dollar lazy chunk qrl optimizer"],
["05","05-routing.html",0,18,75,"Qwik City: مسیریابی","مسیریابی مبتنی بر فایل و layout.","Qwik City: routing","File-based routing and layouts.","qwik city route layout"],
["06","06-data.html",0,18,80,"routeLoader و routeAction","داده و فرم، سمت سرور.","routeLoader and routeAction","Data and forms on the server.","routeloader routeaction form server"],
["07","07-state.html",0,18,80,"مدیریت حالت","حالت محلی، مشترک و سریال‌سازی‌پذیر.","State management","Local, shared and serialisable state.","state context store serialization"],
["08","08-styling.html",0,18,70,"استایل","‎CSS‎ محدود به کامپوننت و راه‌های دیگر.","Styling","Scoped CSS and the alternatives.","css scoped tailwind style"],
["09","09-integrations.html",0,18,75,"یکپارچگی با کتابخانه‌ها","استفاده از کد React و کتابخانه‌های موجود.","Integrations","Using React code and existing libraries.","integration react qwikify adapter"],
["10","10-performance.html",0,18,80,"کارایی و اندازهٔ باندل","اندازه‌گیری واقعی، نه ادعا.","Performance and bundle size","Real measurement, not claims.","performance bundle lighthouse core web vitals"],
["11","11-render.html",0,18,75,"‎SSR‎ و ‎SSG‎","انتخاب حالت رندر برای هر مسیر.","SSR and SSG","Choosing a render mode per route.","ssr ssg static prerender"],
["12","12-deploy.html",0,18,75,"استقرار","adapter، داکر و لبه.","Deployment","Adapters, Docker and the edge.","deploy adapter docker edge"],
["13","13-cap1.html",0,5,70,"پروژهٔ ۱ — صفحهٔ تعاملی","کامپوننت، signal و رویداد.","Project 1 — an interactive page","Components, signals and events.","capstone signal",1],
["14","14-cap2.html",0,7,110,"پروژهٔ ۲ — اپ داده‌محور","loader، action، فرم و خطا.","Project 2 — a data-driven app","Loaders, actions, forms and errors.","capstone loader action",2],
["15","15-cap3.html",0,9,150,"پروژهٔ ۳ — اپ کامل با اندازه‌گیری کارایی","احراز هویت، استقرار و مقایسهٔ عددی با یک اپ ‎SSR‎ معمولی.","Project 3 — a full app, measured","Authentication, deployment and a numeric comparison with a conventional SSR app.","capstone performance production",3]
]});

/* ═══════════════ ۳۶ — انتشار پکیج ═══════════════ */
C.push({
  id:"36-packaging", dir:"36-packaging", accent:"#0891B2", cat:"publish", pre:["28-git"],
  ico:'<path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7z"/><path d="M3.5 7 12 11.2 20.5 7M12 11.2v10" stroke-linejoin="round"/>',
  fa:{name:"انتشار پکیج و مخزن‌سازی", desc:"‎npm‎، ‎NuGet‎، ‎PyPI‎، ‎crates.io‎، ‎RubyGems‎ و ‎Go modules‎ — به‌علاوهٔ مخزن خصوصی با Nexus و امنیت زنجیرهٔ تأمین.",
      intro:"کدی که فقط در پروژهٔ خودت کار می‌کند، یک فایل است. کدی که دیگران با یک دستور نصبش می‌کنند، یک محصول است. فاصلهٔ این دو، چند قرارداد ساده اما سخت‌گیر است: نسخه‌گذاری، متادیتا، امضا و سازگاری. این مسیر همان فاصله را برای شش زیست‌بوم بزرگ می‌پیماید، و بعد نشان می‌دهد چطور مخزن خصوصی خودت را بالا بیاوری."},
  en:{name:"Publishing packages & running registries", desc:"npm, NuGet, PyPI, crates.io, RubyGems and Go modules — plus private registries with Nexus and supply-chain security.",
      intro:"Code that only works inside your project is a file. Code others install with one command is a product. The distance between them is a handful of simple but unforgiving conventions: versioning, metadata, signing and compatibility. This track walks that distance for six major ecosystems, then shows how to run your own private registry."},
  ch:[
["01","01-why.html",0,18,70,"پکیج چیست و چرا","مرز میان «کد من» و «کدی که دیگران استفاده می‌کنند».","What a package is, and why","The line between “my code” and “code others use”.","package library distribution reuse"],
["02","02-semver.html",0,18,80,"نسخه‌گذاری معنایی","‎major.minor.patch‎ یک قرارداد است، نه یک شماره.","Semantic versioning","major.minor.patch is a contract, not a number.","semver breaking change version range"],
["03","03-npm-basics.html",0,18,85,"‎npm‎: ساخت و انتشار","‎package.json‎، فایل‌های منتشرشده، و اولین ‎publish‎.","npm: building and publishing","package.json, published files, and your first publish.","npm publish package.json files exports"],
["04","04-npm-advanced.html",0,18,85,"‎npm‎ پیشرفته","scope، بسته‌های خصوصی، ‎workspace‎ و ‎monorepo‎.","npm advanced","Scopes, private packages, workspaces and monorepos.","scope workspace monorepo changesets"],
["05","05-nuget.html",0,18,85,"‎NuGet‎: ساخت و انتشار","‎csproj‎، متادیتا، ‎symbol package‎ و ‎nuget.org‎.","NuGet: building and publishing","csproj metadata, symbol packages and nuget.org.","nuget nupkg csproj symbols dotnet pack"],
["06","06-pypi.html",0,18,85,"‎PyPI‎: ‎pyproject‎ و ‎wheel‎","بسته‌بندی مدرن پایتون، از ‎setup.py‎ تا ‎build‎.","PyPI: pyproject and wheels","Modern Python packaging, from setup.py to build.","pypi pyproject wheel sdist twine"],
["07","07-cargo.html",0,18,75,"‎Cargo‎ و ‎crates.io‎","انتشار crate و مستندسازی خودکار.","Cargo and crates.io","Publishing a crate and automatic documentation.","cargo crates.io docs.rs publish"],
["08","08-gems.html",0,18,75,"‎RubyGems‎","‎gemspec‎ و انتشار.","RubyGems","The gemspec and publishing.","gem gemspec rubygems bundler"],
["09","09-go-maven.html",0,18,80,"‎Go modules‎ و ‎Maven‎","دو مدل متفاوت: بدون رجیستری مرکزی، و با آن.","Go modules and Maven","Two different models: without a central registry, and with one.","go module maven gradle proxy sum"],
["10","10-nexus.html",0,18,90,"مخزن خصوصی با Nexus","یک سرور، چند فرمت: ‎npm‎، ‎NuGet‎، ‎PyPI‎ و ‎Maven‎.","A private registry with Nexus","One server, many formats: npm, NuGet, PyPI and Maven.","nexus repository proxy hosted group"],
["11","11-alternatives.html",0,18,80,"گزینه‌های دیگر مخزن","Verdaccio، Artifactory و ‎GitHub Packages‎.","Other registry options","Verdaccio, Artifactory and GitHub Packages.","verdaccio artifactory github packages"],
["12","12-supply-chain.html",0,18,90,"امنیت زنجیرهٔ تأمین","امضا، ‎provenance‎، ‎SBOM‎ و حملهٔ ‎typosquatting‎.","Supply-chain security","Signing, provenance, SBOMs and typosquatting.","sbom provenance sigstore audit typosquatting"],
["13","13-ci-release.html",0,18,85,"انتشار خودکار با ‎CI‎","انتشار روی تگ، بدون رمز روی لپ‌تاپ کسی.","Automated releases with CI","Publish on tag, with no credentials on anyone's laptop.","ci release automation oidc trusted publishing"],
["14","14-docs.html",0,18,75,"مستندسازی و ‎CHANGELOG‎","‎README‎ای که سؤال اول را جواب بدهد.","Documentation and CHANGELOG","A README that answers the first question.","readme changelog keepachangelog docs"],
["15","15-maintenance.html",0,18,80,"نگهداری و منسوخ‌سازی","‎deprecate‎، ‎yank‎ و مسئولیت در برابر کاربران.","Maintenance and deprecation","deprecate, yank, and your duty to users.","deprecate yank maintenance breaking"],
["16","16-cap1.html",0,5,70,"پروژهٔ ۱ — اولین پکیج عمومی","یک کتابخانهٔ کوچک را واقعاً منتشر کن.","Project 1 — your first public package","Actually publish a small library.","capstone publish",1],
["17","17-cap2.html",0,7,110,"پروژهٔ ۲ — مخزن خصوصی","Nexus را بالا بیاور و از آن نصب و به آن منتشر کن.","Project 2 — a private registry","Stand up Nexus, then install from it and publish to it.","capstone nexus private",2],
["18","18-cap3.html",0,9,160,"پروژهٔ ۳ — خط لولهٔ انتشار چندزیست‌بومی","یک ‎monorepo‎ که هم ‎npm‎ و هم ‎NuGet‎ منتشر می‌کند، خودکار و امضاشده.","Project 3 — a multi-ecosystem release pipeline","A monorepo publishing both npm and NuGet, automated and signed.","capstone monorepo pipeline",3]
]});

/* ═══════════════ ۳۷ — انتشار اپلیکیشن موبایل ═══════════════ */
C.push({
  id:"37-mobile-release", dir:"37-mobile-release", accent:"#16A34A", cat:"publish", soft:["18-flutter"],
  ico:'<rect x="6.4" y="2.6" width="11.2" height="18.8" rx="2.4"/><path d="M10.6 5.4h2.8" stroke-linecap="round"/><circle cx="12" cy="18" r="1.1"/>',
  fa:{name:"انتشار اپلیکیشن موبایل", desc:"از کد تا فایل نصبی و بعد تا فروشگاه: امضا، ‎AAB‎ و ‎IPA‎، گوگل پلی، ‎App Store‎، بازار و مایکت.",
      intro:"نوشتن اپ نصف کار است. نیمهٔ دیگر — امضای دیجیتال، متادیتا، بازبینی فروشگاه، انتشار تدریجی و بازگشت نسخه — جایی است که بیشتر تیم‌ها اولین بار گیر می‌کنند، معمولاً یک روز قبل از انتشار. این مسیر همان نیمه است، برای هر چهار فروشگاهی که برای مخاطب ایرانی اهمیت دارند."},
  en:{name:"Shipping mobile apps", desc:"From code to installable to store: signing, AAB and IPA, Google Play, the App Store, Bazaar and Myket.",
      intro:"Writing the app is half the work. The other half — code signing, metadata, store review, staged rollout and rollback — is where most teams get stuck the first time, usually the day before launch. This track is that other half, for all four stores that matter to a Persian-speaking audience."},
  ch:[
["01","01-pipeline.html",0,18,75,"از کد تا فایل نصبی","مسیر بیلد در اندروید و ‎iOS‎، کنار هم.","From code to installable","The build path on Android and iOS, side by side.","build pipeline gradle xcode artifact"],
["02","02-signing.html",0,18,90,"امضای دیجیتال","‎keystore‎، گواهی، و اینکه گم کردنش یعنی چه.","Code signing","Keystores, certificates, and what losing one means.","keystore signing certificate key alias"],
["03","03-android-build.html",0,18,85,"اندروید: ‎APK‎ در برابر ‎AAB‎","چرا گوگل پلی دیگر ‎APK‎ نمی‌پذیرد.","Android: APK versus AAB","Why Google Play no longer accepts APKs.","apk aab bundle split abi"],
["04","04-ios-build.html",0,18,90,"‎iOS‎: گواهی، ‎provisioning‎ و ‎IPA‎","پیچیده‌ترین بخش انتشار موبایل، مرحله‌به‌مرحله.","iOS: certificates, provisioning and IPA","The most intricate part of mobile release, step by step.","certificate provisioning profile ipa xcode"],
["05","05-assets.html",0,18,75,"آیکون، اسپلش و متادیتا","اندازه‌ها، الزامات و اشتباهات رایج.","Icons, splash screens and metadata","Sizes, requirements and common mistakes.","icon splash screenshot metadata adaptive"],
["06","06-versioning.html",0,18,75,"نسخه‌گذاری و ‎build number‎","تفاوت نسخهٔ نمایشی با شمارهٔ بیلد.","Versioning and build numbers","The display version versus the build number.","version code build number semver"],
["07","07-play-console.html",0,18,85,"گوگل پلی: کنسول و انتشار","ایجاد اپ، مسیرهای انتشار و تست بسته.","Google Play: console and release","Creating the app, release tracks and closed testing.","play console track internal alpha beta"],
["08","08-play-policy.html",0,18,85,"گوگل پلی: بازبینی و سیاست‌ها","دلایل رایج رد شدن و انتشار تدریجی.","Google Play: review and policy","Common rejection reasons and staged rollout.","policy review rejection rollout data safety"],
["09","09-appstore.html",0,18,85,"‎App Store Connect‎ و ‎TestFlight‎","توزیع نسخهٔ آزمایشی پیش از انتشار عمومی.","App Store Connect and TestFlight","Distributing a beta before going public.","app store connect testflight beta"],
["10","10-apple-review.html",0,18,80,"بازبینی اپل","راهنمای بازبینی، دلایل رد و پاسخ دادن به آن.","Apple review","The review guidelines, rejection reasons and how to respond.","apple review guideline rejection appeal"],
["11","11-bazaar.html",0,18,80,"کافه‌بازار","الزامات، فرایند انتشار و تفاوت‌ها با پلی.","Cafe Bazaar","Requirements, the publishing flow, and how it differs from Play.","bazaar cafebazaar انتشار فروشگاه"],
["12","12-myket.html",0,18,75,"مایکت","انتشار، به‌روزرسانی و نکات عملی.","Myket","Publishing, updates and practical notes.","myket مایکت انتشار فروشگاه"],
["13","13-updates.html",0,18,80,"به‌روزرسانی و بازگشت","انتشار تدریجی، توقف انتشار و به‌روزرسانی اجباری.","Updates and rollback","Staged rollout, halting a release and forced updates.","rollout halt force update migration"],
["14","14-analytics.html",0,18,80,"آنالیتیکس و گزارش خرابی","دیدن اینکه اپ در دست کاربر واقعی چه می‌کند.","Analytics and crash reporting","Seeing what your app does in real users' hands.","crashlytics analytics anr sentry"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — اولین فایل نصبی امضاشده","یک ‎AAB‎ امضاشده بساز و روی دستگاه واقعی نصب کن.","Project 1 — your first signed build","Produce a signed AAB and install it on a real device.","capstone signing build",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — انتشار در یک فروشگاه","متادیتا، تست بسته و انتشار واقعی.","Project 2 — publish to one store","Metadata, closed testing and a real release.","capstone store release",2],
["17","17-cap3.html",0,9,180,"پروژهٔ ۳ — انتشار خودکار چندفروشگاهی","‎CI‎ که بیلد می‌کند، امضا می‌زند و به چند فروشگاه می‌فرستد.","Project 3 — automated multi-store release","CI that builds, signs and ships to several stores.","capstone ci fastlane automation",3]
]});

/* ═══════════════ ۳۸ — پروژه‌های ترکیبی ═══════════════ */
C.push({
  id:"38-projects", dir:"38-projects", accent:"#7C3AED", cat:"projects", pre:["01-docker","07-architecture"], soft:["08-microservices"],
  ico:'<path d="M4 7.4 12 3l8 4.4v9.2L12 21l-8-4.4z"/><path d="M8 9.6 12 12l4-2.4M12 12v5.4" stroke-linejoin="round"/><circle cx="12" cy="12" r="1"/>',
  fa:{name:"پروژه‌های ترکیبی", desc:"سامانه‌های کامل و مستقل که چند مسیر را به هم وصل می‌کنند: چت بی‌درنگ، ‎ERP‎ سازمانی، میکروسرویس چندپایگاه‌داده و بیشتر.",
      intro:"هر مسیر یک ابزار را عمیق یاد می‌دهد. اما کار واقعی هیچ‌وقت یک ابزار نیست — یک سامانه است که در آن پنج ابزار باید با هم کنار بیایند، و سختی دقیقاً در همان درزهاست. هر فصل اینجا یک پروژهٔ کامل و مستقل است: صورت مسئله، تصمیم‌های معماری با دلیل، پیاده‌سازی، و آنچه می‌شکند."},
  en:{name:"Integration projects", desc:"Complete, self-contained systems that tie several tracks together: real-time chat, an enterprise ERP, multi-database microservices and more.",
      intro:"Each track teaches one tool deeply. But real work is never one tool — it is a system where five tools must get along, and the difficulty lives precisely in those seams. Every chapter here is one complete, standalone project: the problem, the architectural decisions with their reasoning, the implementation, and what breaks."},
  ch:[
["01","01-chat.html",0,18,265,"چت بی‌درنگ","‎WebSocket‎، Redis برای مقیاس افقی، تاریخچهٔ پیام و حضور کاربر.","Real-time chat","WebSockets, Redis for horizontal scale, message history and presence.","chat websocket redis realtime presence"],
["02","02-shop-search.html",0,18,265,"فروشگاه با جستجوی پیشرفته","‎Elasticsearch‎ کنار پایگاه‌دادهٔ رابطه‌ای، و همگام‌سازی بینشان.","A shop with real search","Elasticsearch beside a relational database, and keeping them in sync.","shop elasticsearch sync cdc catalog"],
["03","03-microservices-db.html",0,18,325,"میکروسرویس با چند پایگاه‌داده","هر سرویس، پایگاه‌دادهٔ خودش؛ ‎Saga‎ و ‎Outbox‎ برای سازگاری.","Microservices with multiple databases","One database per service; Saga and Outbox for consistency.","microservice saga outbox polyglot persistence"],
["04","04-microfrontend.html",0,18,265,"میکروفرانت‌اند روی همان سامانه","سه تیم، سه فریم‌ورک، یک صفحه.","Micro-frontends on the same system","Three teams, three frameworks, one page.","micro frontend module federation shell"],
["05","05-erp-design.html",0,18,325,"‎ERP‎ سازمانی — مدل‌سازی و معماری","تحلیل دامنه، مرزبندی ماژول‌ها و تصمیم‌های معماری با دلیل.","Enterprise ERP — modelling and architecture","Domain analysis, module boundaries and reasoned architectural decisions.","erp domain modeling module boundary ddd"],
["06","06-erp-build.html",0,18,385,"‎ERP‎ سازمانی — پیاده‌سازی","انبار، فروش، حسابداری: سه ماژول با مرز واقعی.","Enterprise ERP — implementation","Inventory, sales, accounting: three modules with real boundaries.","erp inventory accounting implementation"],
["07","07-sso.html",0,18,265,"احراز هویت مرکزی و ‎SSO‎","‎OAuth2‎ و ‎OIDC‎: یک ورود برای همهٔ سرویس‌ها.","Central authentication and SSO","OAuth2 and OIDC: one login for every service.","sso oauth oidc keycloak identity"],
["08","08-dashboard.html",0,18,265,"داشبورد تحلیلی بی‌درنگ","جمع‌آوری رویداد، تجمیع و نمایش زنده.","A real-time analytics dashboard","Event collection, aggregation and live display.","dashboard analytics aggregation streaming"],
["09","09-queue.html",0,18,265,"صف کار و پردازش پس‌زمینه","کار طولانی، تلاش مجدد، اولویت و صف مرده.","Job queues and background processing","Long tasks, retries, priorities and dead letters.","queue worker retry priority dlq"],
["10","10-gateway.html",0,18,265,"‎API Gateway‎ خودت","مسیریابی، احراز هویت، محدودیت نرخ و تجمیع.","Build your own API gateway","Routing, authentication, rate limiting and aggregation.","gateway routing ratelimit aggregation"],
["11","11-notifications.html",0,18,265,"سامانهٔ اعلان چندکاناله","ایمیل، پیامک و اعلان درون‌برنامه‌ای با یک ‎API‎.","A multi-channel notification system","Email, SMS and in-app notifications behind one API.","notification email sms push template"],
["12","12-observability.html",0,18,265,"مشاهده‌پذیری کامل","لاگ، متریک و trace برای همهٔ پروژه‌های بالا.","Full observability","Logs, metrics and traces for every project above.","observability tracing metrics logging grafana"],
["13","13-cicd.html",0,18,265,"خط لولهٔ ‎CI/CD‎ مشترک","یک خط لوله که همهٔ این سامانه‌ها را می‌سازد و مستقر می‌کند.","A shared CI/CD pipeline","One pipeline that builds and deploys all of these systems.","cicd pipeline deploy environment"],
["14","14-mobile-backend.html",0,18,325,"اپ موبایل با بک‌اند مشترک","یک ‎API‎، سه کلاینت: وب، اندروید و ‎iOS‎.","A mobile app on a shared backend","One API, three clients: web, Android and iOS.","mobile backend api flutter shared"]
]});





/* ═══════════════ ۴۱ — جاوااسکریپت ═══════════════ */
C.push({
  id:"41-javascript", dir:"41-javascript", accent:'#A88A00', accentDark:'#F7DF1E', cat:"frontend", soft:["66-html","67-css"],
  ico:'<rect x="3" y="3" width="18" height="18" rx="2.4"/><path d="M9.4 9.6v5.2c0 1.1-.7 1.7-1.7 1.7M13 15.6c.5.7 1.2 1 2.1 1 1.2 0 1.9-.6 1.9-1.5 0-2-3.7-1.4-3.7-3.4 0-.9.8-1.5 1.8-1.5.8 0 1.4.3 1.8.9" stroke-linecap="round"/>',
  fa:{name:"جاوااسکریپت", desc:"از نوع‌ها و scope تا prototype، async، ماژول و الگوهای مدرن — زبان، بدون فریم‌ورک.",
      intro:"جاوااسکریپت زبانی است که همه فکر می‌کنند بلدند و کمتر کسی واقعاً می‌داند. `this` چه می‌شود، چرا آن حلقه عدد اشتباه چاپ می‌کند، چرا `0.1 + 0.2` برابر `0.3` نیست — همهٔ اینها قاعده دارند. این مسیر قاعده‌ها را می‌دهد تا دیگر حدس نزنی."},
  en:{name:"JavaScript", desc:"From types and scope to prototypes, async, modules and modern patterns — the language, without a framework.",
      intro:"JavaScript is the language everyone thinks they know and few actually do. What `this` becomes, why that loop logs the wrong number, why `0.1 + 0.2` is not `0.3` — all of it has rules. This track gives you the rules so you stop guessing."},
  ch:[
["01","01-types.html",0,18,80,"نوع‌ها و تبدیل","‏coercion، ‎==‎ در برابر ‎===‎، و ‎NaN‎.","Types and coercion","Coercion, == versus ===, and NaN.","type coercion primitive nan typeof"],
["02","02-scope.html",0,18,85,"‏scope و hoisting","‏var، let، const و چیزی که واقعاً اتفاق می‌افتد.","Scope and hoisting","var, let, const, and what really happens.","scope hoisting tdz closure block"],
["03","03-functions.html",0,18,85,"تابع و closure","تابع مقدار است — و closure طبیعی‌ترین نتیجهٔ آن.","Functions and closures","Functions are values — and closures are the natural consequence.","function closure iife arrow first-class"],
["04","04-this.html",0,18,85,"‏this و bind","چهار قاعده که همهٔ رفتار ‎this‎ را توضیح می‌دهند.","this and binding","Four rules that explain every behaviour of this.","this bind call apply arrow context"],
["05","05-objects.html",0,18,80,"شیء و prototype","وراثت prototypal، که کلاس فقط پوستهٔ آن است.","Objects and prototypes","Prototypal inheritance, of which class is only a shell.","object prototype inheritance descriptor"],
["06","06-classes.html",0,18,80,"‏class و شیءگرایی","‏class، ‎#private‎، static و getter.","Classes and OOP","class, #private fields, static members and getters.","class extends super static private"],
["07","07-arrays.html",0,18,85,"آرایه و متدهایش","‏map، filter، reduce — و اینکه کِی حلقه بهتر است.","Arrays and their methods","map, filter, reduce — and when a plain loop is better.","array map filter reduce spread destructuring"],
["08","08-async-1.html",0,18,90,"ناهمگامی ۱: event loop","‏call stack، صف، و ترتیبی که غافلگیرت می‌کند.","Async 1: the event loop","The call stack, the queues, and the ordering that surprises you.","event loop task microtask stack queue"],
["09","09-async-2.html",0,18,90,"ناهمگامی ۲: Promise و async/await","زنجیره، خطا، و اجرای موازی.","Async 2: Promises and async/await","Chaining, error handling and parallel execution.","promise async await all race settled"],
["10","10-modules.html",0,18,75,"ماژول","‏ESM، import پویا و بارگذاری تنبل.","Modules","ESM, dynamic import and lazy loading.","module esm import export dynamic"],
["11","11-dom.html",0,18,85,"‏DOM و رویداد","انتخاب، تغییر، رویداد، و bubbling.","The DOM and events","Selecting, mutating, events and bubbling.","dom event bubble delegate listener"],
["12","12-fetch.html",0,18,80,"شبکه","‏fetch، JSON، خطا، لغو درخواست و CORS.","Networking","fetch, JSON, errors, aborting requests and CORS.","fetch json abort cors headers"],
["13","13-storage.html",0,18,75,"ذخیره‌سازی در مرورگر","‏localStorage، sessionStorage، IndexedDB و کوکی.","Browser storage","localStorage, sessionStorage, IndexedDB and cookies.","localstorage indexeddb cookie storage"],
["14","14-errors.html",0,18,80,"خطا و اشکال‌زدایی","‏try/catch، خطای سفارشی، و ابزار مرورگر.","Errors and debugging","try/catch, custom errors, and the browser devtools.","error debug devtools breakpoint stack trace"],
["15","15-patterns.html",0,18,85,"الگوهای مدرن","‏optional chaining، nullish، destructuring، generator و Proxy.","Modern patterns","Optional chaining, nullish coalescing, destructuring, generators and Proxy.","optional chaining generator proxy symbol iterator"],
["16","16-performance.html",0,18,80,"کارایی","‏debounce، throttle، حافظه و نشتی.","Performance","Debounce, throttle, memory and leaks.","performance debounce throttle memory leak"],
["17","17-testing.html",0,18,80,"تست","‏Vitest، mock و تست ناهمگام.","Testing","Vitest, mocking and async tests.","test vitest jest mock spy"],
["18","18-cap1.html",0,5,80,"پروژهٔ ۱ — اپ تعاملی بدون فریم‌ورک","‏DOM، رویداد، حالت و ذخیره‌سازی — دستی.","Project 1 — an interactive app, no framework","DOM, events, state and storage — by hand.","capstone vanilla dom",1],
["19","19-cap2.html",0,7,130,"پروژهٔ ۲ — کتابخانهٔ کوچک خودت","‏API تمیز، ماژول، تست و انتشار.","Project 2 — your own small library","A clean API, modules, tests and publishing.","capstone library",2],
["20","20-cap3.html",0,9,180,"پروژهٔ ۳ — کلاینت بی‌درنگ","‏fetch، WebSocket، حالت پیچیده و مدیریت خطا.","Project 3 — a real-time client","fetch, WebSockets, complex state and error handling.","capstone realtime",3]
]});

/* ═══════════════ ۴۲ — TypeScript ═══════════════ */
C.push({
  id:"42-typescript", dir:"42-typescript", accent:"#3178C6", cat:"frontend", pre:["41-javascript"],
  ico:'<rect x="3" y="3" width="18" height="18" rx="2.4"/><path d="M7 10h5M9.5 10v7M14 16.4c.5.5 1.2.8 2 .8 1.1 0 1.9-.6 1.9-1.4 0-1.9-3.6-1.3-3.6-3.2 0-.8.7-1.4 1.7-1.4.7 0 1.3.2 1.7.7" stroke-linecap="round"/>',
  fa:{name:"TypeScript", desc:"سیستم نوع، generic، نوع‌های شرطی و پیکربندی — تا کامپایلر باگ را قبل از کاربر پیدا کند.",
      intro:"‏TypeScript جاوااسکریپت با نوع نیست؛ یک سیستم نوع کامل روی زبانی است که برای نوع طراحی نشده بود. همین باعث می‌شود هم قوی‌تر از چیزی که فکر می‌کنی باشد، هم عجیب‌تر. این مسیر تا جایی می‌رود که بتوانی نوع‌های واقعاً پیچیده را بخوانی و بنویسی."},
  en:{name:"TypeScript", desc:"The type system, generics, conditional types and configuration — so the compiler finds the bug before your user does.",
      intro:"TypeScript is not JavaScript with types; it is a full type system layered onto a language never designed for one. That makes it both more powerful and stranger than you expect. This track goes far enough that you can read and write genuinely complex types."},
  ch:[
["01","01-why.html",0,18,75,"چرا TypeScript","چه چیزی می‌گیرد و چه هزینه‌ای دارد.","Why TypeScript","What it catches and what it costs.","typescript why type safety"],
["02","02-basics.html",0,18,80,"نوع‌های پایه","‏primitive، آرایه، tuple، enum و ‎any‎ که باید ازش بترسی.","Basic types","Primitives, arrays, tuples, enums, and the any you should fear.","type primitive tuple enum any unknown"],
["03","03-interfaces.html",0,18,80,"‏interface و type","تفاوتشان، و اینکه کدام را کِی.","Interfaces and type aliases","The difference, and which to use when.","interface type alias extends intersection"],
["04","04-functions.html",0,18,80,"تابع و overload","پارامتر اختیاری، نوع بازگشتی و امضای چندگانه.","Functions and overloads","Optional parameters, return types and multiple signatures.","function overload parameter return void never"],
["05","05-narrowing.html",0,18,85,"باریک‌سازی نوع","‏typeof، in، instanceof و type guard خودت.","Type narrowing","typeof, in, instanceof and your own type guards.","narrowing guard discriminated union predicate"],
["06","06-generics.html",0,18,90,"‏generic","نوع به‌عنوان پارامتر — سخت‌ترین بخش، با مثال واقعی.","Generics","Types as parameters — the hardest part, with real examples.","generic constraint infer default"],
["07","07-utility.html",0,18,80,"نوع‌های کمکی","‏Partial، Pick، Omit، Record و بقیه.","Utility types","Partial, Pick, Omit, Record and the rest.","utility partial pick omit record readonly"],
["08","08-conditional.html",0,18,90,"نوع‌های شرطی و mapped","برنامه‌نویسی در سطح نوع.","Conditional and mapped types","Programming at the type level.","conditional mapped infer template literal"],
["09","09-modules.html",0,18,75,"ماژول و فایل تعریف","‏.d.ts و کار با کتابخانه‌های بدون نوع.","Modules and declaration files",".d.ts and working with untyped libraries.","declaration dts module ambient namespace"],
["10","10-config.html",0,18,80,"‏tsconfig","‏strict، target، path و گزینه‌هایی که واقعاً مهم‌اند.","tsconfig","strict, target, paths, and the options that actually matter.","tsconfig strict target module paths"],
["11","11-react.html",0,18,85,"‏TypeScript در React","‏props، hook، event و کامپوننت عمومی.","TypeScript with React","Props, hooks, events and generic components.","react props hook event fc generic"],
["12","12-node.html",0,18,80,"‏TypeScript در Node","بیلد، اجرا، و پیکربندی سمت سرور.","TypeScript with Node","Building, running and server-side configuration.","node tsx build esm cjs"],
["13","13-migration.html",0,18,85,"مهاجرت از جاوااسکریپت","تدریجی، بدون توقف پروژه.","Migrating from JavaScript","Incrementally, without stopping the project.","migration allowjs incremental strict"],
["14","14-cap1.html",0,5,80,"پروژهٔ ۱ — نوع‌گذاری یک پروژهٔ موجود","یک کد جاوااسکریپتی را تدریجی نوع‌دار کن.","Project 1 — type an existing project","Incrementally add types to a JavaScript codebase.","capstone migration",1],
["15","15-cap2.html",0,7,130,"پروژهٔ ۲ — کتابخانهٔ نوع‌دار","‏API عمومی با نوع‌های دقیق و ‎.d.ts‎.","Project 2 — a typed library","A public API with precise types and a .d.ts.","capstone library types",2],
["16","16-cap3.html",0,9,170,"پروژهٔ ۳ — نوع‌های پیشرفته","‏client API با نوع‌های استنتاجی از روی schema.","Project 3 — advanced types","An API client with types inferred from a schema.","capstone advanced inference",3]
]});

/* ═══════════════ ۴۳ — C ═══════════════ */
C.push({
  id:"43-c", dir:"43-c", accent:"#5C6BC0", cat:"backend",
  ico:'<path d="M16.8 8.2A5.6 5.6 0 0 0 12 5.6 6.4 6.4 0 0 0 12 18.4a5.6 5.6 0 0 0 4.8-2.6" stroke-linecap="round"/><circle cx="12" cy="12" r="9.4" opacity=".45"/>',
  fa:{name:"زبان C", desc:"اشاره‌گر، حافظه، آرایه و ساختمان داده — زبانی که سیستم‌عامل‌ها با آن نوشته شده‌اند.",
      intro:"‏C کوچک است: بیست‌وچند کلیدواژه و تقریباً هیچ چیز پنهانی. همین باعث می‌شود سخت‌ترین و آموزنده‌ترین زبان برای یادگیری باشد — چون هیچ‌چیز را برایت انجام نمی‌دهد. اگر C را بفهمی، بعد از آن هر زبانی به نظرت یک راحتی لوکس می‌آید، و می‌دانی آن راحتی دقیقاً چه چیزی را پنهان می‌کند."},
  en:{name:"C", desc:"Pointers, memory, arrays and data structures — the language operating systems are written in.",
      intro:"C is small: two dozen keywords and almost nothing hidden. That makes it the hardest and most instructive language to learn, because it does nothing for you. Understand C and every later language feels like a luxury — and you know exactly what that luxury is hiding."},
  ch:[
["01","01-why.html",0,18,75,"چرا هنوز C","کجا استفاده می‌شود و چرا جایگزین نشده.","Why C, still","Where it is used and why nothing replaced it.","c systems history kernel embedded"],
["02","02-basics.html",0,18,80,"نوع، متغیر، عملگر","اندازهٔ نوع‌ها و سرریز.","Types, variables, operators","Type sizes and overflow.","type int char overflow sizeof"],
["03","03-control.html",0,18,75,"کنترل جریان","شرط، حلقه، switch و goto.","Control flow","Conditionals, loops, switch and goto.","if while for switch goto"],
["04","04-functions.html",0,18,80,"تابع و پشته","فراخوانی، بازگشت و frame پشته.","Functions and the stack","Calls, recursion and stack frames.","function stack recursion frame"],
["05","05-pointers.html",0,18,95,"اشاره‌گر","مهم‌ترین فصل. آدرس، مرجع‌گیری و حساب اشاره‌گر.","Pointers","The chapter that matters most. Addresses, dereferencing and pointer arithmetic.","pointer address dereference arithmetic null"],
["06","06-arrays.html",0,18,85,"آرایه و رشته","چرا آرایه در C اشاره‌گر است و رشته پایان‌یافته با صفر.","Arrays and strings","Why an array is a pointer, and null-terminated strings.","array string char decay strlen"],
["07","07-memory.html",0,18,95,"مدیریت حافظه","‏malloc، free، نشتی و استفادهٔ پس از آزادسازی.","Memory management","malloc, free, leaks and use-after-free.","malloc free heap leak valgrind"],
["08","08-structs.html",0,18,80,"‏struct و union","چیدمان حافظه و padding.","Structs and unions","Memory layout and padding.","struct union typedef padding align"],
["09","09-files.html",0,18,75,"فایل و ورودی/خروجی","خواندن، نوشتن و باینری.","Files and I/O","Reading, writing and binary data.","file fopen fread stdin buffer"],
["10","10-preprocessor.html",0,18,75,"پیش‌پردازنده","‏#define، #include و ماکرو.","The preprocessor","#define, #include and macros.","preprocessor macro define include guard"],
["11","11-datastructures.html",0,18,90,"ساختمان داده با اشاره‌گر","لیست پیوندی، درخت و پشته — از صفر.","Data structures with pointers","Linked lists, trees and stacks — from scratch.","linked list tree stack queue"],
["12","12-build.html",0,18,80,"کامپایل و Make","مراحل کامپایل، لینک و Makefile.","Compiling and Make","Compilation stages, linking and Makefiles.","gcc compile link makefile object"],
["13","13-debug.html",0,18,85,"اشکال‌زدایی","‏gdb، valgrind و segfault.","Debugging","gdb, valgrind and segfaults.","gdb valgrind segfault sanitizer"],
["14","14-cap1.html",0,5,90,"پروژهٔ ۱ — ابزار خط فرمان","پردازش فایل با مدیریت حافظهٔ درست.","Project 1 — a CLI tool","File processing with correct memory management.","capstone cli",1],
["15","15-cap2.html",0,7,140,"پروژهٔ ۲ — ساختمان داده","‏hash table کامل با تست.","Project 2 — a data structure","A complete hash table, with tests.","capstone hashtable",2],
["16","16-cap3.html",0,9,200,"پروژهٔ ۳ — مفسر کوچک","‏tokenizer، parser و ارزیاب.","Project 3 — a small interpreter","Tokeniser, parser and evaluator.","capstone interpreter parser",3]
]});

/* ═══════════════ ۴۴ — C++ ═══════════════ */
C.push({
  id:"44-cpp", dir:"44-cpp", accent:"#00599C", cat:"backend", soft:["43-c"],
  ico:'<path d="M14.4 8.6A5 5 0 0 0 10.6 6.8 5.6 5.6 0 0 0 10.6 17.2a5 5 0 0 0 3.8-1.8" stroke-linecap="round"/><path d="M17.4 10v4M15.4 12h4M20.4 10v4M18.4 12h4" stroke-linecap="round" transform="translate(-1.2)"/>',
  fa:{name:"‏++C", desc:"‏RAII، قالب، STL، مالکیت و ‎C++‎ مدرن — قدرت C بدون خطرهایش.",
      intro:"‏‎C++‎ چند زبان است در یک بسته، و بخش زیادی از سردرگمی از همین می‌آید: کدی که در سال ۲۰۰۰ درست بود، امروز اشتباه است. این مسیر فقط ‎C++‎ مدرن را یاد می‌دهد — با اشاره‌گر هوشمند، RAII و کتابخانهٔ استاندارد — و توضیح می‌دهد چرا سبک قدیمی کنار گذاشته شد."},
  en:{name:"C++", desc:"RAII, templates, the STL, ownership and modern C++ — the power of C without its hazards.",
      intro:"C++ is several languages in one package, and much of the confusion comes from that: code that was correct in 2000 is wrong today. This track teaches only modern C++ — smart pointers, RAII, the standard library — and explains why the old style was abandoned."},
  ch:[
["01","01-why.html",0,18,75,"‏++C مدرن","چه چیزی از C گرفت و چه چیزی اضافه کرد.","Modern C++","What it took from C and what it added.","cpp modern standard c++11 c++20"],
["02","02-basics.html",0,18,80,"نوع، مرجع و ‎auto‎","مرجع در برابر اشاره‌گر.","Types, references and auto","References versus pointers.","reference auto const type deduction"],
["03","03-classes.html",0,18,85,"کلاس و چرخهٔ عمر","سازنده، مخرب و قاعدهٔ صفر.","Classes and object lifetime","Constructors, destructors and the rule of zero.","class constructor destructor rule of zero"],
["04","04-raii.html",0,18,90,"‏RAII","مهم‌ترین ایدهٔ ‎C++‎: منبع را به عمر شیء گره بزن.","RAII","The key idea of C++: tie a resource to an object's lifetime.","raii resource scope exception safety"],
["05","05-smart-pointers.html",0,18,90,"اشاره‌گر هوشمند","‏unique_ptr، shared_ptr و مالکیت صریح.","Smart pointers","unique_ptr, shared_ptr and explicit ownership.","unique_ptr shared_ptr weak_ptr ownership"],
["06","06-move.html",0,18,90,"معناشناسی انتقال","‏move، rvalue و اینکه چرا کپی گران است.","Move semantics","move, rvalues, and why copying is expensive.","move rvalue forward copy elision"],
["07","07-templates.html",0,18,95,"قالب","‏generic در زمان کامپایل، و پیام‌های خطای بدنامش.","Templates","Compile-time generics, and their notorious error messages.","template specialization sfinae concept"],
["08","08-stl-containers.html",0,18,85,"‏STL: ظرف‌ها","‏vector، map، set — و هزینهٔ هرکدام.","STL: containers","vector, map, set — and what each costs.","vector map set unordered complexity"],
["09","09-stl-algorithms.html",0,18,85,"‏STL: الگوریتم‌ها","‏sort، find، transform و ranges.","STL: algorithms","sort, find, transform and ranges.","algorithm sort find transform ranges"],
["10","10-errors.html",0,18,80,"خطا","‏exception، noexcept و ایمنی در برابر خطا.","Error handling","Exceptions, noexcept and exception safety.","exception noexcept safety expected"],
["11","11-concurrency.html",0,18,90,"همروندی","‏thread، mutex، atomic و future.","Concurrency","Threads, mutexes, atomics and futures.","thread mutex atomic future async"],
["12","12-build.html",0,18,80,"‏CMake و وابستگی","بیلد چندسکویی و مدیریت کتابخانه.","CMake and dependencies","Cross-platform builds and library management.","cmake vcpkg conan build target"],
["13","13-performance.html",0,18,85,"کارایی","‏cache، تخصیص، و اندازه‌گیری قبل از بهینه‌سازی.","Performance","Cache behaviour, allocation, and measuring before optimising.","performance cache benchmark profile inline"],
["14","14-testing.html",0,18,75,"تست","‏GoogleTest و Catch2.","Testing","GoogleTest and Catch2.","gtest catch2 test fixture"],
["15","15-cap1.html",0,5,90,"پروژهٔ ۱ — کلاس منبع‌محور","‏RAII واقعی با تست چرخهٔ عمر.","Project 1 — a resource-owning class","Real RAII with lifetime tests.","capstone raii",1],
["16","16-cap2.html",0,7,150,"پروژهٔ ۲ — ظرف عمومی","ظرف قالبی خودت با iterator.","Project 2 — a generic container","Your own templated container with iterators.","capstone template container",2],
["17","17-cap3.html",0,9,210,"پروژهٔ ۳ — موتور همروند","‏thread pool با صف بدون قفل و اندازه‌گیری.","Project 3 — a concurrent engine","A thread pool with a lock-free queue and measurements.","capstone concurrency threadpool",3]
]});





/* ═══════════════ ۴۷ — شیءگرایی ═══════════════ */
C.push({
  id:"47-oop", dir:"47-oop", accent:"#DB2777", cat:"arch",
  ico:'<circle cx="7" cy="7" r="3.2"/><circle cx="17" cy="7" r="3.2"/><circle cx="12" cy="17" r="3.2"/><path d="M9.4 9.4 10.8 14M14.6 9.4 13.2 14M10.2 7h3.6" stroke-linecap="round"/>',
  fa:{name:"شیءگرایی با چند زبان", desc:"‏encapsulation، وراثت، چندریختی و ترکیب — با مثال هم‌زمان در ‎C#‎، Java، پایتون و تایپ‌اسکریپت.",
      intro:"شیءگرایی را معمولاً با یک زبان یاد می‌گیرند و بعد فکر می‌کنند قاعده‌های آن زبان، قاعده‌های شیءگرایی‌اند. این مسیر عمداً چهار زبان را کنار هم می‌گذارد تا ببینی کدام بخش ایدهٔ اصلی است و کدام بخش فقط سلیقهٔ آن زبان. همان مثال، چهار بار، با تفاوت‌هایی که آموزنده‌اند."},
  en:{name:"OOP across languages", desc:"Encapsulation, inheritance, polymorphism and composition — demonstrated side by side in C#, Java, Python and TypeScript.",
      intro:"People usually learn OOP in one language and then mistake that language's rules for OOP's rules. This track deliberately places four languages side by side so you can see which part is the idea and which part is just that language's taste. The same example, four times, with instructive differences."},
  ch:[
["01","01-why.html",0,18,80,"شیءگرایی چه مسئله‌ای را حل کرد","قبل از آن چه بود و چه دردی داشت.","What OOP solved","What came before and what hurt about it.","oop history procedural abstraction"],
["02","02-encapsulation.html",0,18,85,"کپسوله‌سازی","حالت خصوصی، و اینکه چهار زبان چهار جور می‌گویند.","Encapsulation","Private state, expressed four different ways.","encapsulation private getter setter property"],
["03","03-classes.html",0,18,80,"کلاس و شیء","سازنده، عضو نمونه‌ای و عضو ایستا.","Classes and objects","Constructors, instance members and static members.","class object constructor static instance"],
["04","04-inheritance.html",0,18,85,"وراثت","‏is-a، بازنویسی متد و مسئلهٔ کلاس پایهٔ شکننده.","Inheritance","is-a, method overriding and the fragile base class problem.","inheritance override virtual base fragile"],
["05","05-polymorphism.html",0,18,85,"چندریختی","‏static و dynamic، و duck typing در پایتون.","Polymorphism","Static and dynamic, and Python's duck typing.","polymorphism dynamic dispatch duck typing"],
["06","06-abstraction.html",0,18,80,"انتزاع و interface","‏abstract در برابر interface، در چهار زبان.","Abstraction and interfaces","Abstract classes versus interfaces, in four languages.","abstract interface protocol contract"],
["07","07-composition.html",0,18,90,"ترکیب در برابر وراثت","چرا ترکیب معمولاً جواب بهتری است.","Composition over inheritance","Why composition is usually the better answer.","composition delegation has-a mixin"],
["08","08-solid.html",0,18,90,"‏SOLID در عمل","پنج اصل، با کد بد و کد اصلاح‌شده.","SOLID in practice","Five principles, with bad code and its fix.","solid srp ocp lsp isp dip"],
["09","09-coupling.html",0,18,80,"وابستگی و انسجام","معیار سنجش طراحی خوب.","Coupling and cohesion","How to measure a good design.","coupling cohesion dependency law of demeter"],
["10","10-patterns.html",0,18,85,"الگوهای پایه","‏Strategy، Factory، Observer — در چهار زبان.","Core patterns","Strategy, Factory, Observer — in four languages.","pattern strategy factory observer"],
["11","11-typing.html",0,18,85,"نوع‌دهی ایستا و پویا","اثرش بر طراحی شیءگرا.","Static and dynamic typing","How it changes object-oriented design.","static dynamic typing generic variance"],
["12","12-testing.html",0,18,80,"تست کد شیءگرا","‏mock، stub و طراحی تست‌پذیر.","Testing object-oriented code","Mocks, stubs and designing for testability.","test mock stub seam injection"],
["13","13-antipatterns.html",0,18,80,"ضدالگوها","‏God object، وراثت عمیق و anemic model.","Anti-patterns","God objects, deep hierarchies and anemic models.","antipattern god object anemic"],
["14","14-cap1.html",0,5,80,"پروژهٔ ۱ — یک دامنه، چهار زبان","همان مدل را در هر چهار زبان پیاده کن.","Project 1 — one domain, four languages","Implement the same model in all four languages.","capstone comparison",1],
["15","15-cap2.html",0,7,130,"پروژهٔ ۲ — بازطراحی با SOLID","کد بدبو را با اصول بازسازی کن.","Project 2 — refactor with SOLID","Rebuild smelly code using the principles.","capstone refactor solid",2],
["16","16-cap3.html",0,9,170,"پروژهٔ ۳ — موتور افزونه‌پذیر","طراحی توسعه‌پذیر با interface و ترکیب.","Project 3 — a pluggable engine","An extensible design using interfaces and composition.","capstone plugin extensible",3]
]});

/* ═══════════════ ۴۸ — مدیریت حالت ═══════════════ */
C.push({
  id:"48-state-management", dir:"48-state-management", accent:"#764ABC", cat:"frontend", pre:["41-javascript"], soft:["15-react"],
  ico:'<circle cx="12" cy="6.4" r="2.6"/><circle cx="5.6" cy="16.6" r="2.6"/><circle cx="18.4" cy="16.6" r="2.6"/><path d="M9.8 7.9 7.2 14.2M14.2 7.9l2.6 6.3M8.2 16.6h7.6" stroke-linecap="round" stroke-dasharray="1 2.2"/>',
  fa:{name:"مدیریت حالت", desc:"‏Redux، Zustand، RxJS، NgRx، Signals و Context — و مهم‌تر از همه، اینکه کِی هیچ‌کدام لازم نیستند.",
      intro:"بیشتر پیچیدگی فرانت‌اند از حالت می‌آید: چه کسی مالک این داده است، چه کسی می‌تواند عوضش کند، و چطور بقیه خبردار می‌شوند. کتابخانه‌های مدیریت حالت جواب‌های متفاوتی به همین سه سؤال‌اند. این مسیر همهٔ جواب‌های رایج را با یک مسئلهٔ واحد پیاده می‌کند تا تفاوتشان را در عمل ببینی، نه در تبلیغاتشان. و از فصل اول تأکید می‌کند که پرکاربردترین جواب درست، «هیچ‌کدام» است."},
  en:{name:"State management", desc:"Redux, Zustand, RxJS, NgRx, Signals and Context — and, above all, when you need none of them.",
      intro:"Most frontend complexity comes from state: who owns this data, who may change it, and how everyone else finds out. State libraries are different answers to those three questions. This track implements one single problem in every common library so you can see the differences in practice rather than in marketing. And from chapter one it insists that the most frequently correct answer is “none of them”."},
  ch:[
["01","01-problem.html",0,18,80,"مسئلهٔ حالت","مالکیت، همگام‌سازی و منبع حقیقت واحد.","The state problem","Ownership, synchronisation and a single source of truth.","state ownership source of truth sync"],
["02","02-local-first.html",0,18,80,"اول حالت محلی","چرا اکثر اپ‌ها به هیچ کتابخانه‌ای نیاز ندارند.","Local state first","Why most apps need no library at all.","local state lifting colocation"],
["03","03-context.html",0,18,80,"‏Context و prop drilling","راه‌حل داخلی React و محدودیت واقعی‌اش.","Context and prop drilling","React's built-in answer and its real limitation.","context provider prop drilling rerender"],
["04","04-reducer.html",0,18,85,"الگوی reducer","‏action، خلوص و تغییر قابل ردیابی.","The reducer pattern","Actions, purity and traceable change.","reducer action dispatch pure immutable"],
["05","05-redux.html",0,18,95,"‏Redux و Redux Toolkit","‏store، slice، و چرا Redux قدیمی بدنام شد.","Redux and Redux Toolkit","The store, slices, and why classic Redux earned its reputation.","redux toolkit slice store devtools"],
["06","06-redux-async.html",0,18,85,"ناهمگامی در Redux","‏thunk، RTK Query و کش سمت کلاینت.","Async in Redux","Thunks, RTK Query and client-side caching.","thunk saga rtk query middleware"],
["07","07-zustand.html",0,18,85,"‏Zustand","کمترین کد ممکن برای حالت سراسری.","Zustand","The least possible code for global state.","zustand store selector shallow persist"],
["08","08-jotai-signals.html",0,18,85,"‏atom و signal","‏Jotai، Signals و واکنش‌پذیری ریزدانه.","Atoms and signals","Jotai, Signals and fine-grained reactivity.","jotai signal atom fine-grained reactive"],
["09","09-rxjs-1.html",0,18,95,"‏RxJS ۱: Observable","جریان به‌جای مقدار — تغییر مدل ذهنی.","RxJS 1: Observables","Streams instead of values — a mental model shift.","rxjs observable subscribe stream cold hot"],
["10","10-rxjs-2.html",0,18,95,"‏RxJS ۲: عملگرها","‏map، switchMap، debounce و ترکیب جریان‌ها.","RxJS 2: operators","map, switchMap, debounce and combining streams.","operator switchmap mergemap debounce combine"],
["11","11-ngrx.html",0,18,95,"‏NgRx","‏Redux برای Angular: store، effect، selector.","NgRx","Redux for Angular: store, effects, selectors.","ngrx effect selector entity angular"],
["12","12-server-state.html",0,18,95,"حالت سرور در برابر حالت کلاینت","‏React Query و TanStack — تفکیکی که همه‌چیز را ساده می‌کند.","Server state versus client state","React Query and TanStack — the distinction that simplifies everything.","react query tanstack cache stale invalidate"],
["13","13-forms.html",0,18,80,"حالت فرم","چرا فرم مسئلهٔ جدایی است.","Form state","Why forms are their own problem.","form state validation controlled uncontrolled"],
["14","14-url-state.html",0,18,80,"حالت در URL","‏URL بهترین ذخیره‌سازی حالتی است که اغلب فراموش می‌شود.","State in the URL","The URL is the best state store, and the most forgotten.","url query param router state share"],
["15","15-persistence.html",0,18,80,"ماندگاری و همگام‌سازی","‏localStorage، همگام‌سازی بین تب و آفلاین.","Persistence and syncing","localStorage, cross-tab sync and offline.","persist localstorage broadcast offline sync"],
["16","16-performance.html",0,18,90,"کارایی","رندر اضافی، selector و memo — با اندازه‌گیری.","Performance","Extra renders, selectors and memoisation — measured.","rerender memo selector profiler performance"],
["17","17-comparison.html",0,18,85,"مقایسه و انتخاب","ماتریس تصمیم بر اساس اندازهٔ تیم و نوع مسئله.","Comparison and choosing","A decision matrix by team size and problem type.","comparison decision tradeoff choose"],
["18","18-cap1.html",0,5,80,"پروژهٔ ۱ — یک مسئله، پنج راه‌حل","همان اپ را با Context، Redux، Zustand، Jotai و RxJS بساز.","Project 1 — one problem, five solutions","Build the same app with Context, Redux, Zustand, Jotai and RxJS.","capstone comparison",1],
["19","19-cap2.html",0,7,140,"پروژهٔ ۲ — داشبورد بی‌درنگ","حالت سرور، حالت کلاینت و به‌روزرسانی زنده.","Project 2 — a real-time dashboard","Server state, client state and live updates.","capstone realtime dashboard",2],
["20","20-cap3.html",0,9,190,"پروژهٔ ۳ — اپ آفلاین‌اول","همگام‌سازی، تعارض و صف تغییرات.","Project 3 — an offline-first app","Syncing, conflicts and a mutation queue.","capstone offline sync conflict",3]
]});

/* ═══════════════ ۴۹ — رندر، PWA و کارایی وب ═══════════════ */
C.push({
  id:"49-rendering-pwa", dir:"49-rendering-pwa", accent:"#0284C7", cat:"frontend", pre:["41-javascript"], soft:["67-css"],
  ico:'<rect x="2.6" y="4" width="18.8" height="13" rx="2.2"/><path d="M8 20.6h8M12 17v3.6" stroke-linecap="round"/><path d="M6.4 9.4h5M6.4 12.4h8" stroke-linecap="round" opacity=".7"/>',
  fa:{name:"رندر، PWA و کارایی وب", desc:"‏CSR، SSR، SSG، ISR، استریم، جزیره‌ها و PWA — و اندازه‌گیری واقعی به‌جای حدس.",
      intro:"«کدام حالت رندر؟» سؤالی است که هر پروژهٔ فرانت‌اند در هفتهٔ اول با آن روبه‌رو می‌شود و معمولاً بر اساس عادت جواب داده می‌شود، نه بر اساس نیاز. این مسیر هر حالت را با همان اپ پیاده می‌کند، عددهایش را اندازه می‌گیرد، و نشان می‌دهد هرکدام چه چیزی را سریع و چه چیزی را کند می‌کنند. مستقل از فریم‌ورک."},
  en:{name:"Rendering, PWAs and web performance", desc:"CSR, SSR, SSG, ISR, streaming, islands and PWAs — with real measurement instead of guesswork.",
      intro:"“Which rendering mode?” is the question every frontend project faces in week one, and it is usually answered by habit rather than need. This track implements the same app in each mode, measures the numbers, and shows what each one makes fast and what it makes slow. Framework-independent."},
  ch:[
["01","01-modes.html",0,18,85,"نقشهٔ حالت‌های رندر","‏CSR، SSR، SSG، ISR — با یک نمودار و یک جدول تصمیم.","The map of rendering modes","CSR, SSR, SSG, ISR — in one diagram and one decision table.","csr ssr ssg isr rendering mode"],
["02","02-csr.html",0,18,80,"‏CSR","سریع‌ترین ناوبری، کندترین بارگذاری اول.","CSR","Fastest navigation, slowest first load.","csr spa bundle hydration first paint"],
["03","03-ssr.html",0,18,85,"‏SSR","‏HTML آماده از سرور، و هزینه‌ای که روی سرور می‌گذارد.","SSR","Ready HTML from the server, and what it costs the server.","ssr server render ttfb streaming"],
["04","04-ssg-isr.html",0,18,85,"‏SSG و ISR","ساخت در زمان بیلد، و بازسازی تدریجی.","SSG and ISR","Building at build time, and incremental regeneration.","ssg static isr revalidate build"],
["05","05-hydration.html",0,18,90,"‏hydration و هزینه‌اش","چرا صفحهٔ دیده‌شده هنوز کلیک نمی‌پذیرد.","Hydration and its cost","Why a visible page still ignores your clicks.","hydration tti interactive partial progressive"],
["06","06-islands.html",0,18,85,"معماری جزیره‌ای و RSC","‏Astro، Server Component و resumability.","Islands architecture and RSC","Astro, Server Components and resumability.","island rsc astro qwik resumable"],
["07","07-metrics.html",0,18,90,"معیارها","‏LCP، INP، CLS و TTFB — و اینکه هرکدام چه می‌گویند.","The metrics","LCP, INP, CLS and TTFB — and what each actually tells you.","core web vitals lcp inp cls ttfb"],
["08","08-measuring.html",0,18,90,"اندازه‌گیری","‏Lighthouse، دادهٔ میدانی و پروفایل مرورگر.","Measuring","Lighthouse, field data and browser profiling.","lighthouse rum profiling devtools trace"],
["09","09-loading.html",0,18,85,"راهبرد بارگذاری","‏preload، prefetch، lazy و مسیر بحرانی.","Loading strategy","preload, prefetch, lazy loading and the critical path.","preload prefetch lazy critical path defer"],
["10","10-images.html",0,18,80,"تصویر و رسانه","فرمت، اندازه، ‎srcset‎ و بارگذاری تنبل.","Images and media","Formats, sizing, srcset and lazy loading.","image webp avif srcset lazy responsive"],
["11","11-caching.html",0,18,85,"کش","‏HTTP cache، ETag، CDN و باطل‌سازی.","Caching","HTTP caching, ETags, CDNs and invalidation.","cache etag cdn immutable stale-while-revalidate"],
["12","12-sw.html",0,18,95,"‏Service Worker","رهگیری درخواست، کش آفلاین و به‌روزرسانی.","Service Workers","Intercepting requests, offline caching and updates.","service worker cache api offline update"],
["13","13-pwa.html",0,18,90,"‏PWA","‏manifest، نصب‌پذیری و تجربهٔ شبه‌بومی.","PWAs","The manifest, installability and a near-native experience.","pwa manifest install standalone icon"],
["14","14-offline.html",0,18,90,"آفلاین و همگام‌سازی","صف تغییرات، تعارض و پس‌زمینه.","Offline and background sync","Mutation queues, conflicts and background sync.","offline background sync indexeddb conflict"],
["15","15-push.html",0,18,80,"اعلان push","‏Web Push، مجوز و پیاده‌سازی سمت سرور.","Push notifications","Web Push, permissions and the server side.","push notification vapid subscription"],
["16","16-seo.html",0,18,85,"‏SEO و رندر","چه چیزی را خزنده می‌بیند و چه چیزی را نه.","SEO and rendering","What a crawler sees and what it does not.","seo crawler meta og structured data"],
["17","17-cap1.html",0,5,80,"پروژهٔ ۱ — یک اپ، چهار حالت رندر","همان صفحه را در CSR، SSR، SSG و ISR بساز و عدد بگیر.","Project 1 — one app, four rendering modes","Build the same page in CSR, SSR, SSG and ISR, then measure.","capstone rendering comparison",1],
["18","18-cap2.html",0,7,140,"پروژهٔ ۲ — تبدیل به PWA","نصب‌پذیر، آفلاین‌کار و با اعلان.","Project 2 — turn it into a PWA","Installable, offline-capable and with notifications.","capstone pwa offline",2],
["19","19-cap3.html",0,9,180,"پروژهٔ ۳ — بودجهٔ کارایی","یک سایت کند را با اندازه‌گیری به هدف برسان.","Project 3 — a performance budget","Take a slow site to target, driven by measurement.","capstone performance budget",3]
]});

/* ═══════════════ ۵۰ — طراحی دامنه‌محور (DDD) ═══════════════ */
C.push({
  id:"50-ddd", dir:"50-ddd", accent:"#B45309", cat:"arch", pre:["07-architecture"], soft:["47-oop"],
  ico:'<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.4"/><path d="M12 3.2v3.4M12 17.4v3.4M3.2 12h3.4M17.4 12h3.4" stroke-linecap="round"/>',
  fa:{name:"طراحی دامنه‌محور", desc:"زبان فراگیر، bounded context، aggregate، رویداد دامنه و event sourcing — با مثال کامل و تست.",
      intro:"‏DDD یک چارچوب یا کتابخانه نیست؛ روشی است برای اینکه کد، همان چیزی را بگوید که کارشناس کسب‌وکار می‌گوید. بیشتر پروژه‌هایی که «‎DDD‎ کار می‌کنند» فقط پوشه‌هایی به نام Domain ساخته‌اند و مدلشان همچنان کم‌خون است. این مسیر از زبان شروع می‌کند، نه از ساختار پوشه — و صادقانه می‌گوید کجا اصلاً به ‎DDD‎ نیاز نداری."},
  en:{name:"Domain-Driven Design", desc:"Ubiquitous language, bounded contexts, aggregates, domain events and event sourcing — with a full worked example and tests.",
      intro:"DDD is not a framework or a library; it is a way of making the code say what the domain expert says. Most projects that “do DDD” have merely created folders named Domain while their model stays anemic. This track starts from language, not folder structure — and is honest about where you do not need DDD at all."},
  ch:[
["01","01-why.html",0,18,80,"‏DDD چه مسئله‌ای را حل می‌کند","وقتی پیچیدگی دامنه است، نه فناوری.","What DDD solves","When the complexity is in the domain, not the technology.","ddd complexity domain why"],
["02","02-ubiquitous-language.html",0,18,85,"زبان فراگیر","یک واژه، یک معنا — بین برنامه‌نویس و کارشناس کسب‌وکار.","Ubiquitous language","One word, one meaning — shared by developers and domain experts.","ubiquitous language glossary vocabulary"],
["03","03-strategic.html",0,18,85,"طراحی راهبردی","نقشهٔ کل دامنه: هسته، پشتیبان، عمومی.","Strategic design","Mapping the whole domain: core, supporting, generic.","strategic core subdomain generic supporting"],
["04","04-bounded-context.html",0,18,95,"‏bounded context","مهم‌ترین مفهوم DDD — مرزی که معنا در آن ثابت است.","Bounded contexts","The central DDD concept — a boundary inside which meaning is stable.","bounded context boundary model integrity"],
["05","05-context-map.html",0,18,90,"نقشهٔ زمینه‌ها","رابطهٔ بین context‌ها: ‎shared kernel‎، ‎ACL‎، ‎conformist‎.","Context maps","Relationships between contexts: shared kernel, ACL, conformist.","context map anticorruption shared kernel upstream"],
["06","06-entities.html",0,18,85,"‏entity","هویت در برابر مقدار، و چرا شناسه مهم است.","Entities","Identity versus value, and why the ID matters.","entity identity lifecycle equality"],
["07","07-value-objects.html",0,18,90,"‏value object","بدون هویت، تغییرناپذیر — و اینکه چرا اینقدر مفید است.","Value objects","No identity, immutable — and why that is so useful.","value object immutable equality money"],
["08","08-aggregates.html",0,18,100,"‏aggregate","سخت‌ترین بخش ‎DDD‎: مرز ثبات و قاعدهٔ تراکنش.","Aggregates","The hardest part of DDD: the consistency boundary and the transaction rule.","aggregate root invariant boundary transaction"],
["09","09-aggregate-design.html",0,18,95,"طراحی ‎aggregate‎","قاعده‌های عملی: کوچک نگه دار، با شناسه ارجاع بده.","Designing aggregates","Practical rules: keep them small, reference by ID.","aggregate design small reference id rules"],
["10","10-domain-events.html",0,18,90,"رویداد دامنه","چیزی که در دامنه اتفاق افتاد، و بقیه باید بدانند.","Domain events","Something that happened in the domain, which others must learn about.","domain event publish handler eventual"],
["11","11-services.html",0,18,80,"‏domain service و application service","منطقی که به هیچ ‎entity‎ تعلق ندارد.","Domain and application services","Logic that belongs to no single entity.","domain service application service orchestration"],
["12","12-repositories.html",0,18,85,"‏repository در ‎DDD‎","مجموعه‌ای از ‎aggregate‎، نه یک لایهٔ پایگاه‌داده.","Repositories in DDD","A collection of aggregates, not a database layer.","repository aggregate collection persistence ignorance"],
["13","13-factories.html",0,18,75,"‏factory","ساختن ‎aggregate‎ معتبر، از همان لحظهٔ اول.","Factories","Creating a valid aggregate from the very first moment.","factory creation invariant construction"],
["14","14-specification.html",0,18,80,"الگوی ‎specification‎","قاعدهٔ کسب‌وکار به‌عنوان یک شیء قابل ترکیب.","The specification pattern","A business rule as a composable object.","specification rule composable query"],
["15","15-anticorruption.html",0,18,85,"لایهٔ ضدفساد","محافظت از مدل خودت در برابر مدل سیستم بیرونی.","The anti-corruption layer","Protecting your model from an external system's model.","anticorruption acl translation legacy integration"],
["16","16-event-sourcing.html",0,18,95,"‏event sourcing","ذخیرهٔ رویدادها به‌جای وضعیت — و هزینهٔ واقعی‌اش.","Event sourcing","Storing events instead of state — and what it really costs.","event sourcing projection replay snapshot"],
["17","17-cqrs-ddd.html",0,18,90,"‏CQRS در کنار ‎DDD‎","مدل نوشتن غنی، مدل خواندن ساده.","CQRS alongside DDD","A rich write model, a simple read model.","cqrs read model projection write model"],
["18","18-persistence.html",0,18,95,"‏DDD و ‎ORM‎","نگاشت ‎aggregate‎ به جدول بدون آلوده کردن دامنه.","DDD and ORMs","Mapping aggregates to tables without polluting the domain.","orm mapping efcore owned type persistence"],
["19","19-testing.html",0,18,85,"تست دامنه","تست قاعده‌های کسب‌وکار، بدون پایگاه‌داده و بدون ‎mock‎.","Testing the domain","Testing business rules with no database and no mocks.","test domain unit given when then"],
["20","20-antipatterns.html",0,18,85,"ضدالگوها","مدل کم‌خون، ‎aggregate‎ غول‌آسا، و ‎DDD‎ کاغذی.","Anti-patterns","Anemic models, giant aggregates, and DDD on paper only.","anemic antipattern god aggregate cargo cult"],
["21","21-when-not.html",0,18,80,"کِی ‎DDD‎ نزن","‏CRUD ساده به ‎DDD‎ نیاز ندارد — و این را باید بپذیری.","When not to use DDD","Simple CRUD does not need DDD — and you must accept that.","yagni crud simple overengineering"],
["22","22-cap1.html",0,5,100,"پروژهٔ ۱ — مدل‌سازی یک دامنه","از گفت‌وگو با کارشناس تا ‎entity‎ و ‎value object‎.","Project 1 — model a domain","From a conversation with an expert to entities and value objects.","capstone modeling",1],
["23","23-cap2.html",0,7,170,"پروژهٔ ۲ — ‎aggregate‎ و رویداد","مرز ثبات، ‎invariant‎ و رویداد دامنه، با تست کامل.","Project 2 — aggregates and events","Consistency boundaries, invariants and domain events, fully tested.","capstone aggregate event",2],
["24","24-cap3.html",0,9,260,"پروژهٔ ۳ — دو ‎bounded context‎","دو زمینه، نقشهٔ رابطه، ‎ACL‎ و سازگاری نهایی.","Project 3 — two bounded contexts","Two contexts, a context map, an ACL and eventual consistency.","capstone bounded context integration",3]
]});


/* ═══════════════ ۵۱ — MongoDB ═══════════════ */
C.push({
  id:"51-mongodb", dir:"51-mongodb", accent:"#13AA52", cat:"data",
  ico:"<path d=\"M12 2.6c3.4 4 5.2 7.2 5.2 10.2 0 3.6-2.4 6.4-5.2 8.6-2.8-2.2-5.2-5-5.2-8.6 0-3 1.8-6.2 5.2-10.2z\"/><path d=\"M12 6.4v13.4\" stroke-linecap=\"round\" opacity=\".6\"/>",
  fa:{name:"MongoDB", desc:"پایگاه‌دادهٔ سندگرا: مدل‌سازی، aggregation، ایندکس، replica set و شاردینگ.",
      intro:"‏MongoDB شِما ندارد — و همین هم بزرگ‌ترین قدرتش است و هم خطرناک‌ترین بخشش. نداشتن شِما یعنی سرعت در شروع، و بی‌نظمی در ماه ششم اگر خودت نظم ندهی. این مسیر بیشتر وقتش را روی مدل‌سازی می‌گذارد، چون در دنیای سندگرا، طراحی سند مهم‌تر از هر کوئری‌ای است."},
  en:{name:"MongoDB", desc:"The document database: modelling, aggregation, indexing, replica sets and sharding.",
      intro:"MongoDB has no schema — which is both its greatest strength and its most dangerous part. No schema means speed at the start and disorder by month six unless you impose order yourself. This track spends most of its time on modelling, because in a document world the shape of your document matters more than any query."},
  ch:[
["01","01-why.html",0,18,80,"چرا سندگرا","در برابر رابطه‌ای: کجا برنده است و کجا نه.","Why documents","Versus relational: where it wins and where it does not.","document nosql relational comparison"],
["02","02-install.html",0,18,70,"نصب و ابزار","‏mongosh، Compass و داکر.","Installation and tooling","mongosh, Compass and Docker.","install mongosh compass docker atlas"],
["03","03-crud.html",0,18,80,"‏CRUD","درج، خواندن، به‌روزرسانی و حذف.","CRUD","Insert, find, update and delete.","insert find update delete bulk"],
["04","04-query.html",0,18,85,"کوئری","عملگرها، پروجکشن، مرتب‌سازی و صفحه‌بندی.","Querying","Operators, projection, sorting and pagination.","query operator projection sort limit skip"],
["05","05-modeling-1.html",0,18,95,"مدل‌سازی ۱: تعبیه یا ارجاع","مهم‌ترین تصمیم در MongoDB.","Modelling 1: embed or reference","The most important decision in MongoDB.","embed reference denormalize modeling"],
["06","06-modeling-2.html",0,18,90,"مدل‌سازی ۲: الگوها","‏bucket، subset، computed و attribute pattern.","Modelling 2: patterns","Bucket, subset, computed and attribute patterns.","pattern bucket subset computed attribute"],
["07","07-schema.html",0,18,80,"اعتبارسنجی شِما","نظم بدون از دست دادن انعطاف.","Schema validation","Order without losing flexibility.","validation jsonschema validator strict"],
["08","08-aggregation-1.html",0,18,95,"‏aggregation ۱","‏pipeline: match، group، project، sort.","Aggregation 1","The pipeline: match, group, project, sort.","aggregation pipeline match group project"],
["09","09-aggregation-2.html",0,18,95,"‏aggregation ۲","‏lookup، unwind، facet و کوئری‌های پیچیده.","Aggregation 2","lookup, unwind, facet and complex queries.","lookup unwind facet bucket window"],
["10","10-indexes.html",0,18,95,"ایندکس","‏single، compound، ترتیب کلید و ‎ESR‎.","Indexes","Single, compound, key order and the ESR rule.","index compound esr covered partial ttl"],
["11","11-explain.html",0,18,90,"‏explain و کارایی","خواندن برنامهٔ اجرا و رفع کوئری کند.","explain and performance","Reading the execution plan and fixing slow queries.","explain plan winning stage collscan"],
["12","12-transactions.html",0,18,80,"تراکنش","چندسندی، و اینکه چرا معمولاً لازم نیست.","Transactions","Multi-document, and why you usually do not need them.","transaction session acid multi-document"],
["13","13-replication.html",0,18,85,"‏replica set","دسترس‌پذیری، انتخاب رهبر و ‎read preference‎.","Replica sets","Availability, elections and read preferences.","replica set primary election oplog"],
["14","14-sharding.html",0,18,90,"شاردینگ","کلید شارد، توزیع و اشتباه‌های گران.","Sharding","Shard keys, distribution and expensive mistakes.","shard key chunk balancer distribution"],
["15","15-security.html",0,18,80,"امنیت","کاربر، نقش، ‎TLS‎ و رمزگذاری.","Security","Users, roles, TLS and encryption.","auth role tls encryption audit"],
["16","16-backup.html",0,18,80,"پشتیبان و بازیابی","‏mongodump، snapshot و بازیابی نقطه‌ای.","Backup and restore","mongodump, snapshots and point-in-time recovery.","backup mongodump restore oplog pitr"],
["17","17-drivers.html",0,18,80,"اتصال از اپ","‏Node، Python و ‎.NET‎: pool و الگوی درست.","Connecting from an app","Node, Python and .NET: pooling and correct patterns.","driver pool connection nodejs python dotnet"],
["18","18-cap1.html",0,5,80,"پروژهٔ ۱ — کاتالوگ محصول","مدل‌سازی، کوئری و ایندکس.","Project 1 — a product catalogue","Modelling, querying and indexing.","capstone catalog",1],
["19","19-cap2.html",0,7,140,"پروژهٔ ۲ — تحلیل با aggregation","گزارش‌های پیچیده روی دادهٔ حجیم.","Project 2 — analytics with aggregation","Complex reports over a large dataset.","capstone aggregation analytics",2],
["20","20-cap3.html",0,9,190,"پروژهٔ ۳ — سامانهٔ مقیاس‌پذیر","‏replica، شارد، پشتیبان و مانیتورینگ.","Project 3 — a scalable system","Replicas, shards, backups and monitoring.","capstone production sharding",3]
]});

/* ═══════════════ ۵۲ — Redis ═══════════════ */
C.push({
  id:"52-redis", dir:"52-redis", accent:"#DC382D", cat:"data",
  ico:"<path d=\"M2.8 7.4 12 4l9.2 3.4L12 10.8z\"/><path d=\"M2.8 12 12 15.4 21.2 12M2.8 16.6 12 20l9.2-3.4\" stroke-linejoin=\"round\"/>",
  fa:{name:"Redis", desc:"کش، صف، قفل توزیع‌شده، pub/sub و ساختمان‌های دادهٔ درون‌حافظه‌ای.",
      intro:"‏Redis را همه به‌عنوان «کش» می‌شناسند و همان‌جا متوقف می‌شوند. اما Redis یک سرور ساختمان دادهٔ درون‌حافظه‌ای است: لیست، مجموعه، مجموعهٔ مرتب، bitmap و stream. وقتی این‌ها را بشناسی، مسائلی که با پایگاه‌دادهٔ رابطه‌ای سخت بودند در چند خط حل می‌شوند — و مسائلی که نباید با Redis حل کنی هم روشن می‌شوند."},
  en:{name:"Redis", desc:"Caching, queues, distributed locks, pub/sub and in-memory data structures.",
      intro:"Everyone knows Redis as “a cache” and stops there. But Redis is an in-memory data-structure server: lists, sets, sorted sets, bitmaps and streams. Once you know them, problems that were hard in a relational database collapse into a few lines — and it also becomes clear which problems you should not solve with Redis."},
  ch:[
["01","01-why.html",0,18,75,"‏Redis چیست","درون‌حافظه‌ای بودن یعنی چه، و چه چیزی را ممکن می‌کند.","What Redis is","What in-memory really means, and what it enables.","redis in-memory keyvalue latency"],
["02","02-strings.html",0,18,75,"رشته و شمارنده","‏SET، GET، INCR و عملیات اتمی.","Strings and counters","SET, GET, INCR and atomic operations.","string incr atomic expire setnx"],
["03","03-hash.html",0,18,75,"‏hash","ذخیرهٔ شیء بدون سریال‌سازی کل آن.","Hashes","Storing objects without serialising the whole thing.","hash hset hget field object"],
["04","04-list.html",0,18,80,"‏list","صف و پشته، و ‎BLPOP‎ برای مصرف‌کننده.","Lists","Queues and stacks, and BLPOP for consumers.","list lpush rpop blpop queue"],
["05","05-set.html",0,18,80,"مجموعه و مجموعهٔ مرتب","عضویت، اشتراک، و جدول امتیاز با ‎ZSET‎.","Sets and sorted sets","Membership, intersection, and leaderboards with ZSET.","set zset leaderboard rank union"],
["06","06-advanced-types.html",0,18,80,"نوع‌های ویژه","‏bitmap، HyperLogLog، geo و stream.","Special types","Bitmaps, HyperLogLog, geo and streams.","bitmap hyperloglog geo stream"],
["07","07-expiry.html",0,18,80,"انقضا و حذف","‏TTL، سیاست‌های ‎eviction‎ و مدیریت حافظه.","Expiry and eviction","TTL, eviction policies and memory management.","ttl expire eviction lru maxmemory"],
["08","08-caching.html",0,18,90,"الگوهای کش","‏cache-aside، write-through و مسئلهٔ باطل‌سازی.","Caching patterns","Cache-aside, write-through and the invalidation problem.","cache aside write through invalidation stampede"],
["09","09-pubsub.html",0,18,80,"‏pub/sub و stream","پیام‌رسانی ساده در برابر جریان ماندگار.","Pub/sub and streams","Simple messaging versus a durable log.","pubsub stream consumer group xadd"],
["10","10-locks.html",0,18,85,"قفل توزیع‌شده","‏SETNX، Redlock و خطرهای واقعی‌اش.","Distributed locks","SETNX, Redlock and its real hazards.","lock setnx redlock fencing token"],
["11","11-scripting.html",0,18,80,"‏Lua و تراکنش","عملیات اتمی مرکب.","Lua scripting and transactions","Compound atomic operations.","lua eval multi exec watch"],
["12","12-persistence.html",0,18,80,"ماندگاری","‏RDB، AOF و اینکه چه چیزی ممکن است گم شود.","Persistence","RDB, AOF, and what can actually be lost.","rdb aof fsync durability snapshot"],
["13","13-cluster.html",0,18,85,"‏replication و cluster","دسترس‌پذیری، Sentinel و توزیع کلید.","Replication and clustering","Availability, Sentinel and key distribution.","replica sentinel cluster slot failover"],
["14","14-monitoring.html",0,18,80,"مانیتورینگ و عیب‌یابی","‏SLOWLOG، INFO و کلید داغ.","Monitoring and debugging","SLOWLOG, INFO and hot keys.","slowlog info latency hotkey memory"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — لایهٔ کش","کش‌کردن یک ‎API‎ کند، با باطل‌سازی درست.","Project 1 — a cache layer","Caching a slow API, with correct invalidation.","capstone cache",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — صف کار و محدودیت نرخ","‏worker، تلاش مجدد و ‎rate limiter‎.","Project 2 — a job queue and rate limiter","Workers, retries and a rate limiter.","capstone queue ratelimit",2],
["17","17-cap3.html",0,9,170,"پروژهٔ ۳ — جدول امتیاز بی‌درنگ","‏ZSET، stream، pub/sub و مقیاس افقی.","Project 3 — a real-time leaderboard","ZSETs, streams, pub/sub and horizontal scale.","capstone leaderboard realtime",3]
]});

/* ═══════════════ ۵۳ — MySQL و MariaDB ═══════════════ */
C.push({
  id:"53-mysql-mariadb", dir:"53-mysql-mariadb", accent:"#00758F", cat:"data",
  ico:"<ellipse cx=\"12\" cy=\"6.2\" rx=\"7.6\" ry=\"3.2\"/><path d=\"M4.4 6.2v11.6c0 1.8 3.4 3.2 7.6 3.2s7.6-1.4 7.6-3.2V6.2\"/><path d=\"M4.4 12c0 1.8 3.4 3.2 7.6 3.2s7.6-1.4 7.6-3.2\" opacity=\".6\"/>",
  fa:{name:"MySQL و MariaDB", desc:"از ‎SELECT‎ تا ایندکس، ‎EXPLAIN‎، تراکنش، replication و بهینه‌سازی کوئری کند.",
      intro:"‏MySQL پرکاربردترین پایگاه‌دادهٔ رابطه‌ای دنیاست و MariaDB شاخهٔ آزاد آن. این مسیر فرض نمی‌کند ‎SQL‎ بلدی — از مدل رابطه‌ای شروع می‌کند — اما خیلی زود می‌رود سراغ چیزی که واقعاً فرق می‌گذارد: اینکه چرا آن کوئری کند است و ایندکس درست کدام است."},
  en:{name:"MySQL & MariaDB", desc:"From SELECT to indexes, EXPLAIN, transactions, replication and fixing slow queries.",
      intro:"MySQL is the most widely deployed relational database in the world, and MariaDB is its free fork. This track does not assume you know SQL — it starts from the relational model — but it moves quickly to what actually matters: why that query is slow and which index is the right one."},
  ch:[
["01","01-relational.html",0,18,75,"مدل رابطه‌ای و نصب","جدول، کلید، و راه‌اندازی با داکر.","The relational model and setup","Tables, keys, and getting started with Docker.","relational install docker workbench"],
["02","02-select.html",0,18,80,"‏SELECT و فیلتر","‏WHERE، ORDER BY، LIMIT و ‎NULL‎.","SELECT and filtering","WHERE, ORDER BY, LIMIT and NULL.","select where order limit null"],
["03","03-joins.html",0,18,85,"‏JOIN","‏inner، left، و اشتباهی که سطرها را تکثیر می‌کند.","JOINs","Inner, left, and the mistake that multiplies rows.","join inner left cross duplicate"],
["04","04-aggregate.html",0,18,80,"تجمیع","‏GROUP BY، HAVING و توابع پنجره‌ای.","Aggregation","GROUP BY, HAVING and window functions.","group having window over"],
["05","05-subquery.html",0,18,80,"زیرکوئری و ‎CTE‎","کوئری خوانا به‌جای تودرتو.","Subqueries and CTEs","Readable queries instead of nested ones.","cte subquery with exists"],
["06","06-dml.html",0,18,75,"تغییر داده","‏INSERT، UPDATE، DELETE، ‎UPSERT‎.","Changing data","INSERT, UPDATE, DELETE and UPSERT.","insert update delete upsert replace"],
["07","07-design.html",0,18,85,"طراحی جدول","نوع داده، کلید، ‎constraint‎ و ‎charset‎ فارسی.","Table design","Data types, keys, constraints and Persian character sets.","datatype key constraint utf8mb4 collation"],
["08","08-normalization.html",0,18,80,"نرمال‌سازی","سه فرم اول، و ‎denormalization‎ آگاهانه.","Normalisation","The first three forms, and deliberate denormalisation.","normalization 1nf 2nf 3nf"],
["09","09-indexes.html",0,18,95,"ایندکس","‏B-tree، ترکیبی، پوششی و ترتیب ستون‌ها.","Indexes","B-trees, composite, covering, and column order.","index btree composite covering prefix"],
["10","10-explain.html",0,18,95,"‏EXPLAIN","خواندن برنامهٔ اجرا و تشخیص ‎full scan‎.","EXPLAIN","Reading the plan and spotting full scans.","explain analyze plan type rows filtered"],
["11","11-transactions.html",0,18,85,"تراکنش و قفل","سطوح ایزوله، ‎deadlock‎ و ‎InnoDB‎.","Transactions and locking","Isolation levels, deadlocks and InnoDB.","transaction isolation deadlock innodb mvcc"],
["12","12-procedures.html",0,18,75,"‏procedure، function، trigger","کِی مفیدند و کِی دردسر.","Procedures, functions, triggers","When they help and when they hurt.","procedure function trigger event"],
["13","13-replication.html",0,18,85,"‏replication","‏master-replica، تأخیر و خواندن از replica.","Replication","Primary/replica, lag, and reading from replicas.","replication binlog lag gtid failover"],
["14","14-backup.html",0,18,80,"پشتیبان و بازیابی","‏mysqldump، binlog و بازیابی نقطه‌ای.","Backup and restore","mysqldump, binlogs and point-in-time recovery.","mysqldump xtrabackup binlog pitr"],
["15","15-security.html",0,18,75,"امنیت","کاربر، ‎GRANT‎، ‎TLS‎ و تزریق ‎SQL‎.","Security","Users, GRANT, TLS and SQL injection.","grant privilege tls injection prepared"],
["16","16-tuning.html",0,18,95,"بهینه‌سازی","‏slow log، buffer pool و کوئری کند واقعی.","Tuning","The slow log, the buffer pool and a genuinely slow query.","slowlog buffer pool tuning optimize"],
["17","17-cap1.html",0,5,80,"پروژهٔ ۱ — طراحی شِما","از نیاز تا جدول، با کلید و ‎constraint‎ درست.","Project 1 — design a schema","From requirements to tables, with proper keys and constraints.","capstone schema",1],
["18","18-cap2.html",0,7,140,"پروژهٔ ۲ — گزارش‌های تحلیلی","کوئری‌های پیچیده و ایندکس‌گذاری.","Project 2 — analytical reports","Complex queries and indexing.","capstone report",2],
["19","19-cap3.html",0,9,190,"پروژهٔ ۳ — از کند به سریع","یک پایگاه‌دادهٔ میلیونی را به زیر یک ثانیه برسان.","Project 3 — from slow to fast","Take a million-row database under one second.","capstone performance",3]
]});

/* ═══════════════ ۵۴ — Cassandra ═══════════════ */
C.push({
  id:"54-cassandra", dir:"54-cassandra", accent:"#1287B1", cat:"data", soft:["53-mysql-mariadb"],
  ico:"<path d=\"M12 2.6 20 7v10l-8 4.4L4 17V7z\"/><path d=\"M12 7.4 16.4 9.8v4.4L12 16.6l-4.4-2.4V9.8z\" opacity=\".65\"/>",
  fa:{name:"Cassandra", desc:"پایگاه‌دادهٔ توزیع‌شدهٔ ستونی: مدل‌سازی کوئری‌محور، partition، ثبات قابل تنظیم.",
      intro:"‏Cassandra قاعده‌ای دارد که برای کسی که با ‎SQL‎ بزرگ شده تکان‌دهنده است: **اول کوئری را بنویس، بعد جدول را طراحی کن.** نرمال‌سازی اینجا اشتباه است و تکرار داده درست. این مسیر آن وارونگی ذهنی را جا می‌اندازد، چون بدون آن هر چیزی که در Cassandra بسازی بالاخره از کار می‌افتد."},
  en:{name:"Cassandra", desc:"The distributed wide-column store: query-first modelling, partitions and tunable consistency.",
      intro:"Cassandra has a rule that shocks anyone raised on SQL: **write the query first, then design the table.** Normalisation is wrong here and duplicating data is right. This track drills that mental inversion, because without it anything you build on Cassandra eventually falls over."},
  ch:[
["01","01-why.html",0,18,80,"چرا Cassandra","مقیاس افقی، بدون نقطهٔ شکست واحد.","Why Cassandra","Horizontal scale with no single point of failure.","cassandra distributed scale availability"],
["02","02-architecture.html",0,18,85,"معماری","حلقه، گره، تکرار و ‎gossip‎.","Architecture","The ring, nodes, replication and gossip.","ring node replication gossip token"],
["03","03-datamodel.html",0,18,95,"مدل داده","‏keyspace، جدول، ستون و انواع.","The data model","Keyspaces, tables, columns and types.","keyspace table column collection udt"],
["04","04-partition.html",0,18,100,"کلید partition","مهم‌ترین تصمیم: توزیع و ‎hot partition‎.","Partition keys","The decisive choice: distribution and hot partitions.","partition key clustering hot large"],
["05","05-query-first.html",0,18,95,"مدل‌سازی کوئری‌محور","اول کوئری، بعد جدول — و تکرار عمدی داده.","Query-first modelling","Query first, table second — and deliberate duplication.","query first denormalize duplicate table per query"],
["06","06-cql.html",0,18,80,"‏CQL","شبیه ‎SQL‎ است، ولی نیست.","CQL","It looks like SQL. It is not.","cql select insert allow filtering"],
["07","07-consistency.html",0,18,95,"ثبات قابل تنظیم","‏ONE، QUORUM، ALL و قضیهٔ ‎CAP‎ در عمل.","Tunable consistency","ONE, QUORUM, ALL and CAP in practice.","consistency quorum cap tunable read repair"],
["08","08-writes.html",0,18,85,"مسیر نوشتن","‏commit log، memtable، SSTable و ‎compaction‎.","The write path","Commit log, memtable, SSTables and compaction.","write path memtable sstable compaction"],
["09","09-deletes.html",0,18,85,"حذف و ‎tombstone‎","چرا حذف در Cassandra گران است.","Deletes and tombstones","Why deleting is expensive in Cassandra.","tombstone delete ttl gc grace"],
["10","10-operations.html",0,18,85,"عملیات","افزودن گره، ‎repair‎ و مانیتورینگ.","Operations","Adding nodes, repair and monitoring.","nodetool repair bootstrap monitoring"],
["11","11-drivers.html",0,18,80,"اتصال از اپ","‏prepared statement، صفحه‌بندی و تلاش مجدد.","Connecting from an app","Prepared statements, paging and retries.","driver prepared paging retry policy"],
["12","12-antipatterns.html",0,18,85,"ضدالگوها","‏ALLOW FILTERING، صف، و مدل رابطه‌ای تحمیلی.","Anti-patterns","ALLOW FILTERING, queues, and forcing a relational model.","antipattern allow filtering queue join"],
["13","13-cap1.html",0,5,80,"پروژهٔ ۱ — مدل‌سازی از روی کوئری","سه کوئری، سه جدول.","Project 1 — model from queries","Three queries, three tables.","capstone modeling",1],
["14","14-cap2.html",0,7,140,"پروژهٔ ۲ — سری زمانی","دادهٔ حسگر با partition زمان‌محور.","Project 2 — time series","Sensor data with time-bucketed partitions.","capstone timeseries",2],
["15","15-cap3.html",0,9,180,"پروژهٔ ۳ — کلاستر چندگره","‏replication، ثبات و تحمل خطا.","Project 3 — a multi-node cluster","Replication, consistency and fault tolerance.","capstone cluster",3]
]});

/* ═══════════════ ۵۵ — Oracle Database ═══════════════ */
C.push({
  id:"55-oracle", dir:"55-oracle", accent:"#C74634", cat:"data", soft:["05-sql"],
  ico:"<ellipse cx=\"12\" cy=\"12\" rx=\"9.4\" ry=\"5.6\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4.6\" ry=\"2.6\" opacity=\".6\"/>",
  fa:{name:"Oracle Database", desc:"‏PL/SQL، ایندکس، برنامهٔ اجرا، پارتیشن‌بندی، ‎AWR‎ و بهینه‌سازی سازمانی.",
      intro:"‏Oracle در بانک‌ها، بیمه‌ها و سازمان‌های بزرگ هنوز حاکم است و احتمالاً تا مدت‌ها می‌ماند. این مسیر برای کسی است که باید با یک پایگاه‌دادهٔ Oracle موجود کار کند: کوئری بنویسد، ‎PL/SQL‎ بخواند، و وقتی چیزی کند شد بتواند بفهمد چرا."},
  en:{name:"Oracle Database", desc:"PL/SQL, indexes, execution plans, partitioning, AWR and enterprise-grade tuning.",
      intro:"Oracle still rules in banking, insurance and large institutions, and will for some time. This track is for someone who has to work with an existing Oracle database: write queries, read PL/SQL, and work out why something got slow."},
  ch:[
["01","01-architecture.html",0,18,85,"معماری Oracle","نمونه، پایگاه‌داده، ‎tablespace‎ و ‎PDB‎.","Oracle architecture","Instances, databases, tablespaces and PDBs.","instance sga tablespace pdb cdb"],
["02","02-setup.html",0,18,75,"راه‌اندازی","‏Oracle XE با داکر و ابزارهای کار.","Getting set up","Oracle XE with Docker and the tooling.","xe docker sqlplus sqldeveloper"],
["03","03-sql.html",0,18,85,"‏SQL در Oracle","تفاوت‌ها با استاندارد و توابع ویژه.","SQL in Oracle","Differences from the standard and Oracle-specific functions.","dual rownum nvl decode sequence"],
["04","04-joins-analytics.html",0,18,90,"‏JOIN و توابع تحلیلی","‏window function و ‎hierarchical query‎.","Joins and analytics","Window functions and hierarchical queries.","analytic window connect by partition"],
["05","05-datatypes.html",0,18,80,"نوع داده","‏VARCHAR2، NUMBER، DATE، CLOB و یونیکد فارسی.","Data types","VARCHAR2, NUMBER, DATE, CLOB and Persian Unicode.","varchar2 number date clob nls unicode"],
["06","06-plsql-1.html",0,18,95,"‏PL/SQL ۱","بلوک، متغیر، شرط، حلقه و ‎cursor‎.","PL/SQL 1","Blocks, variables, control flow and cursors.","plsql block cursor loop record"],
["07","07-plsql-2.html",0,18,95,"‏PL/SQL ۲","‏procedure، function، package و ‎exception‎.","PL/SQL 2","Procedures, functions, packages and exceptions.","procedure function package exception"],
["08","08-plsql-3.html",0,18,90,"‏PL/SQL ۳","‏trigger، ‎bulk collect‎ و ‎FORALL‎.","PL/SQL 3","Triggers, bulk collect and FORALL.","trigger bulk collect forall collection"],
["09","09-indexes.html",0,18,95,"ایندکس","‏B-tree، bitmap، function-based و ‎IOT‎.","Indexes","B-tree, bitmap, function-based and index-organised tables.","index bitmap function based iot"],
["10","10-explain.html",0,18,95,"برنامهٔ اجرا","‏EXPLAIN PLAN، ‎autotrace‎ و آمار.","Execution plans","EXPLAIN PLAN, autotrace and statistics.","explain plan autotrace statistics cardinality"],
["11","11-partitioning.html",0,18,90,"پارتیشن‌بندی","‏range، list، hash و ‎pruning‎.","Partitioning","Range, list, hash and partition pruning.","partition range list hash pruning"],
["12","12-transactions.html",0,18,85,"تراکنش و ثبات","‏undo، ‎read consistency‎ و قفل.","Transactions and consistency","Undo, read consistency and locking.","undo redo consistency lock savepoint"],
["13","13-tuning.html",0,18,95,"بهینه‌سازی","‏AWR، ‎ASH‎، ‎SQL profile‎ و ‎hint‎.","Tuning","AWR, ASH, SQL profiles and hints.","awr ash hint sql tuning advisor"],
["14","14-security.html",0,18,80,"امنیت","کاربر، نقش، ‎VPD‎ و ممیزی.","Security","Users, roles, VPD and auditing.","user role privilege vpd audit tde"],
["15","15-backup.html",0,18,85,"پشتیبان و بازیابی","‏RMAN، ‎data pump‎ و بازیابی نقطه‌ای.","Backup and recovery","RMAN, Data Pump and point-in-time recovery.","rman datapump flashback recovery"],
["16","16-cap1.html",0,5,80,"پروژهٔ ۱ — شِما و ‎PL/SQL‎","طراحی جدول و یک بستهٔ ‎PL/SQL‎ کامل.","Project 1 — schema and PL/SQL","Table design and a complete PL/SQL package.","capstone plsql",1],
["17","17-cap2.html",0,7,150,"پروژهٔ ۲ — گزارش‌های تحلیلی","توابع تحلیلی روی دادهٔ حجیم.","Project 2 — analytical reporting","Analytic functions over large data.","capstone analytics",2],
["18","18-cap3.html",0,9,200,"پروژهٔ ۳ — بهینه‌سازی سازمانی","پارتیشن، ایندکس و ‎AWR‎ روی یک بار کاری واقعی.","Project 3 — enterprise tuning","Partitioning, indexing and AWR against a real workload.","capstone tuning",3]
]});

/* ═══════════════ ۵۶ — FastAPI ═══════════════ */
C.push({
  id:"56-fastapi", dir:"56-fastapi", accent:"#059486", cat:"backend", pre:["12-python"],
  ico:"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12.8 6.4 8.6 12.8h3.4l-.8 4.8 4.2-6.4h-3.4z\" stroke-linejoin=\"round\"/>",
  fa:{name:"FastAPI", desc:"‏API ناهمگام پایتون: Pydantic، تزریق وابستگی، احراز هویت، تست و استقرار.",
      intro:"‏FastAPI یک ایدهٔ ساده را تا انتها برد: اگر نوع‌ها را بنویسی، بقیه‌اش خودکار می‌شود — اعتبارسنجی، مستندسازی، سریال‌سازی. نتیجه‌اش این است که کد کمتری می‌نویسی و خطای کمتری می‌دهی. این مسیر روی همان نوع‌ها تمرکز می‌کند، چون هرچه ‎Pydantic‎ را بهتر بشناسی، ‎FastAPI‎ برایت ساده‌تر می‌شود."},
  en:{name:"FastAPI", desc:"Async Python APIs: Pydantic, dependency injection, authentication, testing and deployment.",
      intro:"FastAPI took one simple idea all the way: write the types and everything else follows — validation, documentation, serialisation. The result is less code and fewer mistakes. This track focuses on those types, because the better you know Pydantic, the simpler FastAPI becomes."},
  ch:[
["01","01-why.html",0,18,75,"چرا FastAPI","در برابر Django و Flask، و نقش ‎async‎.","Why FastAPI","Versus Django and Flask, and the role of async.","fastapi asgi starlette comparison"],
["02","02-first.html",0,18,75,"اولین ‎API‎","مسیر، پارامتر و پاسخ خودکار.","Your first API","Routes, parameters and automatic responses.","path query parameter response uvicorn"],
["03","03-pydantic-1.html",0,18,90,"‏Pydantic ۱","مدل، اعتبارسنجی و تبدیل نوع.","Pydantic 1","Models, validation and coercion.","pydantic model validation field type"],
["04","04-pydantic-2.html",0,18,90,"‏Pydantic ۲","اعتبارسنج سفارشی، مدل تودرتو و ‎settings‎.","Pydantic 2","Custom validators, nested models and settings.","validator nested settings alias serializer"],
["05","05-async.html",0,18,90,"‏async در FastAPI","کِی ‎async def‎ و کِی ‎def‎ — و چرا اشتباهش گران است.","Async in FastAPI","When to use async def and when def — and why getting it wrong costs.","async await threadpool blocking event loop"],
["06","06-dependencies.html",0,18,95,"تزریق وابستگی","‏Depends: قوی‌ترین ویژگی فریم‌ورک.","Dependency injection","Depends: the framework's strongest feature.","depends dependency injection yield scope"],
["07","07-database.html",0,18,95,"پایگاه‌داده","‏SQLAlchemy ناهمگام، نشست و مهاجرت با Alembic.","Databases","Async SQLAlchemy, sessions and Alembic migrations.","sqlalchemy async session alembic pool"],
["08","08-auth.html",0,18,95,"احراز هویت","‏OAuth2 با ‎password flow‎، ‎JWT‎ و نقش.","Authentication","OAuth2 password flow, JWT and roles.","oauth2 jwt password bearer scope"],
["09","09-errors.html",0,18,75,"خطا","‏HTTPException، ‎handler‎ سراسری و پاسخ یکدست.","Error handling","HTTPException, global handlers and consistent responses.","httpexception handler validation error"],
["10","10-middleware.html",0,18,75,"‏middleware و ‎CORS‎","لاگ، زمان‌سنجی و ‎CORS‎.","Middleware and CORS","Logging, timing and CORS.","middleware cors gzip trusted host"],
["11","11-background.html",0,18,80,"کار پس‌زمینه","‏BackgroundTasks و Celery.","Background work","BackgroundTasks and Celery.","background task celery worker redis"],
["12","12-websocket.html",0,18,80,"‏WebSocket","ارتباط بی‌درنگ در FastAPI.","WebSockets","Real-time communication in FastAPI.","websocket connection manager broadcast"],
["13","13-structure.html",0,18,80,"ساختار پروژه","‏router، لایه‌بندی و پروژه‌ای که بزرگ شود.","Project structure","Routers, layering and a project that scales.","router structure layer service repository"],
["14","14-testing.html",0,18,85,"تست","‏TestClient، ‎fixture‎ و پایگاه‌دادهٔ تست.","Testing","TestClient, fixtures and a test database.","pytest testclient fixture httpx async test"],
["15","15-deploy.html",0,18,85,"استقرار","‏Uvicorn، Gunicorn، داکر و Nginx.","Deployment","Uvicorn, Gunicorn, Docker and Nginx.","uvicorn gunicorn docker nginx worker"],
["16","16-cap1.html",0,5,80,"پروژهٔ ۱ — ‎API‎ با پایگاه‌داده","‏CRUD با ‎Pydantic‎ و ‎SQLAlchemy‎.","Project 1 — an API with a database","CRUD with Pydantic and SQLAlchemy.","capstone crud",1],
["17","17-cap2.html",0,7,140,"پروژهٔ ۲ — ‎API‎ امن","‏JWT، نقش، صف و تست کامل.","Project 2 — a secured API","JWT, roles, queues and full tests.","capstone auth",2],
["18","18-cap3.html",0,9,190,"پروژهٔ ۳ — سرویس production","بی‌درنگ، کش، مانیتورینگ و استقرار.","Project 3 — a production service","Real-time features, caching, monitoring and deployment.","capstone production",3]
]});

/* ═══════════════ ۵۷ — نقشه و داده‌های مکانی ═══════════════ */
C.push({
  id:"57-maps", dir:"57-maps", accent:"#199900", cat:"frontend", pre:["41-javascript"],
  ico:"<path d=\"M9 4.2 3.6 6.4v13.4L9 17.6l6 2.2 5.4-2.2V4.2L15 6.4z\"/><path d=\"M9 4.2v13.4M15 6.4v13.4\" stroke-linejoin=\"round\"/>",
  fa:{name:"نقشه و داده‌های مکانی", desc:"‏Leaflet، MapLibre، ‎GeoJSON‎، کاشی، مسیریابی و ‎PostGIS‎ — از نمایش تا تحلیل مکانی.",
      intro:"نقشه فقط یک تصویر نیست؛ یک سیستم مختصات، یک تصویر برداری، و یک پایگاه‌دادهٔ مکانی است. اگر فقط کتابخانه را یاد بگیری، در اولین مسئلهٔ واقعی — «نزدیک‌ترین شعبه کدام است؟» یا «این نقطه داخل کدام محدوده است؟» — گیر می‌کنی. این مسیر از سیستم مختصات شروع می‌کند و تا تحلیل مکانی در پایگاه‌داده می‌رود."},
  en:{name:"Maps & geospatial", desc:"Leaflet, MapLibre, GeoJSON, tiles, routing and PostGIS — from display to spatial analysis.",
      intro:"A map is not just a picture; it is a coordinate system, a vector rendering and a spatial database. Learn only the library and you will stall on the first real question — “which branch is nearest?” or “which zone contains this point?” This track starts from coordinate systems and goes through to spatial analysis in the database."},
  ch:[
["01","01-basics.html",0,18,85,"مبانی مکانی","طول و عرض جغرافیایی، ‎WGS84‎ و تصویر مرکاتور.","Geospatial basics","Latitude and longitude, WGS84 and the Mercator projection.","latitude longitude wgs84 projection mercator srid"],
["02","02-tiles.html",0,18,80,"کاشی و سطح بزرگ‌نمایی","چرا نقشه از مربع‌های ۲۵۶ پیکسلی ساخته می‌شود.","Tiles and zoom levels","Why a map is built from 256-pixel squares.","tile zoom xyz raster vector slippy"],
["03","03-leaflet-basics.html",0,18,80,"‏Leaflet: شروع","نقشه، لایه، نشانگر و رویداد.","Leaflet: getting started","Maps, layers, markers and events.","leaflet map layer marker popup"],
["04","04-leaflet-layers.html",0,18,85,"لایه و کنترل","‏overlay، گروه لایه و کنترل سفارشی.","Layers and controls","Overlays, layer groups and custom controls.","layergroup control overlay tilelayer"],
["05","05-geojson.html",0,18,85,"‏GeoJSON","نقطه، خط، چندضلعی — و استایل‌دهی به آن‌ها.","GeoJSON","Points, lines, polygons — and styling them.","geojson feature geometry polygon style"],
["06","06-interaction.html",0,18,85,"تعامل","رسم، ویرایش، ‎drag‎ و انتخاب ناحیه.","Interaction","Drawing, editing, dragging and area selection.","draw edit interaction geoman handler"],
["07","07-clustering.html",0,18,85,"خوشه‌بندی و کارایی","ده‌هزار نشانگر بدون یخ‌زدن مرورگر.","Clustering and performance","Ten thousand markers without freezing the browser.","cluster marker performance canvas heatmap"],
["08","08-maplibre.html",0,18,90,"‏MapLibre و کاشی برداری","نقشهٔ برداری، استایل ‎JSON‎ و چرخش سه‌بعدی.","MapLibre and vector tiles","Vector maps, JSON styles and 3D tilt.","maplibre mapbox vector tile style pitch"],
["09","09-geocoding.html",0,18,80,"‏geocoding","آدرس به مختصات و برعکس — با Nominatim.","Geocoding","Address to coordinates and back — with Nominatim.","geocoding nominatim reverse address search"],
["10","10-routing.html",0,18,90,"مسیریابی","‏OSRM و ‎GraphHopper‎: مسیر، فاصله و زمان.","Routing","OSRM and GraphHopper: route, distance and duration.","routing osrm graphhopper directions isochrone"],
["11","11-postgis.html",0,18,95,"‏PostGIS","ذخیره و کوئری مکانی: نزدیک‌ترین، درون، تقاطع.","PostGIS","Storing and querying space: nearest, within, intersects.","postgis st_distance st_within gist spatial index"],
["12","12-analysis.html",0,18,90,"تحلیل مکانی","‏buffer، تقاطع، خوشه و ‎heatmap‎.","Spatial analysis","Buffers, intersections, clustering and heatmaps.","buffer intersect cluster heatmap analysis"],
["13","13-selfhost.html",0,18,85,"میزبانی نقشهٔ خودت","سرور کاشی، ‎OSM‎ و کار بدون سرویس بیرونی.","Self-hosting maps","A tile server, OpenStreetMap, and working without external services.","osm tileserver selfhost planet extract"],
["14","14-mobile.html",0,18,80,"نقشه در موبایل","‏Flutter و ‎React Native‎: مکان‌یابی و مجوز.","Maps on mobile","Flutter and React Native: geolocation and permissions.","flutter react native geolocation permission"],
["15","15-cap1.html",0,5,80,"پروژهٔ ۱ — نقشهٔ شعب","نشانگر، ‎popup‎ و جستجو.","Project 1 — a branch locator","Markers, popups and search.","capstone locator",1],
["16","16-cap2.html",0,7,140,"پروژهٔ ۲ — ردیاب زنده","موقعیت بی‌درنگ، مسیر طی‌شده و ‎geofence‎.","Project 2 — a live tracker","Real-time position, travelled path and geofences.","capstone tracking realtime",2],
["17","17-cap3.html",0,9,190,"پروژهٔ ۳ — سامانهٔ مسیریابی","‏PostGIS، مسیریابی، بهینه‌سازی سفر و تحلیل.","Project 3 — a routing system","PostGIS, routing, trip optimisation and analysis.","capstone routing postgis",3]
]});


/* ═══════════════ ۵۸ — الگوریتم و حل مسئله ═══════════════ */
C.push({
  id:"58-algorithms", dir:"58-algorithms", accent:"#7C3AED", cat:"basics",
  ico:"<circle cx=\"6\" cy=\"6\" r=\"2.4\"/><circle cx=\"18\" cy=\"6\" r=\"2.4\"/><circle cx=\"12\" cy=\"12\" r=\"2.4\"/><circle cx=\"6\" cy=\"18\" r=\"2.4\"/><circle cx=\"18\" cy=\"18\" r=\"2.4\"/><path d=\"M7.7 7.7 10.3 10.3M16.3 7.7 13.7 10.3M10.3 13.7 7.7 16.3M13.7 13.7l2.6 2.6\" stroke-linecap=\"round\"/>",
  fa:{name:"الگوریتم و حل مسئله", desc:"ساختمان داده، پیچیدگی، بازگشت، گراف، برنامه‌ریزی پویا و روش سیستماتیک حل مسئله.",
      intro:"الگوریتم برای قبولی در مصاحبه نیست — هرچند آنجا هم به کار می‌آید. برای این است که وقتی کدت روی ده رکورد سریع است و روی ده میلیون رکورد از کار می‌افتد، بدانی چرا و چه کار کنی. این مسیر روی «چطور به جواب رسیدیم» تمرکز می‌کند، نه «جواب چیست»، چون حفظ کردن الگوریتم بی‌فایده است و روشِ رسیدن به آن نیست."},
  en:{name:"Algorithms & problem solving", desc:"Data structures, complexity, recursion, graphs, dynamic programming and a systematic method for solving problems.",
      intro:"Algorithms are not for passing interviews — though they help there too. They are for the moment your code is fast over ten records and collapses over ten million, so you know why and what to do. This track focuses on how we arrived at a solution rather than what the solution is, because memorising algorithms is useless while the method of finding them is not."},
  ch:[
["01","01-method.html",0,18,85,"روش حل مسئله","قبل از کد: بفهم، مثال بزن، ساده کن، تعمیم بده.","A method for solving problems","Before code: understand, exemplify, simplify, generalise.","method polya problem solving approach"],
["02","02-complexity.html",0,18,90,"پیچیدگی زمانی و حافظه","‏Big-O بدون ریاضیات ترسناک — با شهود.","Time and space complexity","Big-O without the frightening maths — by intuition.","bigo complexity amortized asymptotic"],
["03","03-arrays.html",0,18,85,"آرایه و رشته","دو اشاره‌گر، پنجرهٔ لغزان و پیشوند تجمعی.","Arrays and strings","Two pointers, sliding windows and prefix sums.","array string two pointer sliding window prefix"],
["04","04-hashing.html",0,18,85,"‏hash","جدول hash، برخورد، و چرا ‎O(1)‎ همیشه ‎O(1)‎ نیست.","Hashing","Hash tables, collisions, and why O(1) is not always O(1).","hash table collision map set"],
["05","05-linked.html",0,18,80,"لیست پیوندی","‏reverse، تشخیص حلقه و اشاره‌گر سریع و کند.","Linked lists","Reversal, cycle detection and fast/slow pointers.","linked list reverse cycle floyd"],
["06","06-stack-queue.html",0,18,80,"پشته و صف","‏monotonic stack و صف دوسر.","Stacks and queues","Monotonic stacks and deques.","stack queue deque monotonic parenthesis"],
["07","07-recursion.html",0,18,95,"بازگشت","اعتماد به فراخوانی بازگشتی، و درخت فراخوانی.","Recursion","Trusting the recursive call, and the call tree.","recursion base case call tree backtrack"],
["08","08-sorting.html",0,18,90,"مرتب‌سازی","‏merge، quick، heap — و اینکه کِی خودت بنویسی.","Sorting","Merge, quick, heap — and when to write your own.","sort merge quick heap stability"],
["09","09-searching.html",0,18,85,"جستجوی دودویی","ساده به نظر می‌رسد، و بیشتر آدم‌ها اشتباه می‌نویسند.","Binary search","It looks simple, and most people write it wrong.","binary search boundary invariant"],
["10","10-trees.html",0,18,90,"درخت","پیمایش، ‎BST‎ و درخت متوازن.","Trees","Traversal, BSTs and balanced trees.","tree traversal bst avl inorder"],
["11","11-heaps.html",0,18,80,"‏heap و صف اولویت","‏k‎ بزرگ‌ترین، ادغام و زمان‌بندی.","Heaps and priority queues","Top-k, merging and scheduling.","heap priority queue topk"],
["12","12-graphs-1.html",0,18,95,"گراف ۱","نمایش، ‎BFS‎ و ‎DFS‎.","Graphs 1","Representation, BFS and DFS.","graph bfs dfs adjacency component"],
["13","13-graphs-2.html",0,18,95,"گراف ۲","کوتاه‌ترین مسیر: ‎Dijkstra‎ و ‎topological sort‎.","Graphs 2","Shortest paths: Dijkstra and topological sort.","dijkstra topological shortest path dag"],
["14","14-greedy.html",0,18,85,"حریصانه","کِی جواب می‌دهد و چطور ثابت کنیم.","Greedy algorithms","When it works and how to prove it.","greedy exchange argument interval"],
["15","15-dp-1.html",0,18,100,"برنامه‌ریزی پویا ۱","از بازگشت به یادداشت‌برداری، قدم‌به‌قدم.","Dynamic programming 1","From recursion to memoisation, step by step.","dp memoization overlapping subproblem"],
["16","16-dp-2.html",0,18,100,"برنامه‌ریزی پویا ۲","‏knapsack، ‎LCS‎ و بهینه‌سازی حافظه.","Dynamic programming 2","Knapsack, LCS and space optimisation.","dp knapsack lcs tabulation"],
["17","17-backtracking.html",0,18,85,"عقب‌گرد","‏n-queens، جایگشت و هرس فضای جستجو.","Backtracking","N-queens, permutations and pruning the search space.","backtracking permutation pruning nqueens"],
["18","18-strings.html",0,18,85,"الگوریتم رشته","‏KMP، ‎trie‎ و ‎hash‎ غلتان.","String algorithms","KMP, tries and rolling hashes.","kmp trie rolling hash pattern"],
["19","19-practical.html",0,18,85,"الگوریتم در کار روزمره","کجا در کد واقعی به دردت می‌خورد.","Algorithms in daily work","Where this shows up in real code.","practical real world optimization"],
["20","20-interview.html",0,18,85,"مصاحبهٔ الگوریتمی","بلند فکر کردن، و روش رسیدن به جواب زیر فشار.","Algorithm interviews","Thinking aloud, and getting to an answer under pressure.","interview whiteboard communication"],
["21","21-cap1.html",0,5,90,"پروژهٔ ۱ — ساختمان دادهٔ خودت","‏hash map و ‎LRU cache‎ با تست.","Project 1 — build a data structure","A hash map and an LRU cache, with tests.","capstone lru hashmap",1],
["22","22-cap2.html",0,7,150,"پروژهٔ ۲ — موتور جستجوی کوچک","‏trie، رتبه‌بندی و پیشنهاد خودکار.","Project 2 — a small search engine","Tries, ranking and autocomplete.","capstone search trie",2],
["23","23-cap3.html",0,9,200,"پروژهٔ ۳ — مسیریاب","گراف واقعی شهری با ‎Dijkstra‎ و ‎A*‎.","Project 3 — a route planner","A real city graph with Dijkstra and A*.","capstone routing astar",3]
]});

/* ═══════════════ ۵۹ — یادگیری ماشین ═══════════════ */
C.push({
  id:"59-machine-learning", dir:"59-machine-learning", accent:"#F59E0B", cat:"ai", pre:["12-python"], soft:["58-algorithms"],
  ico:"<circle cx=\"5.4\" cy=\"8\" r=\"2\"/><circle cx=\"5.4\" cy=\"16\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"18.6\" cy=\"8\" r=\"2\"/><circle cx=\"18.6\" cy=\"16\" r=\"2\"/><path d=\"M7.2 8.8 10.4 11M7.2 15.2 10.4 13M13.6 11l3.2-2.2M13.6 13l3.2 2.2\" stroke-linecap=\"round\"/>",
  fa:{name:"یادگیری ماشین", desc:"از رگرسیون تا درخت و ‎SVM‎: آماده‌سازی داده، ارزیابی، ‎overfitting‎ و استقرار مدل.",
      intro:"یادگیری ماشین جادو نیست؛ بهینه‌سازی آماری است. مدل چیزی را یاد می‌گیرد که در داده هست — از جمله سوگیری‌هایی که نمی‌خواستی. این مسیر بیشتر وقتش را روی داده و ارزیابی می‌گذارد، نه روی الگوریتم، چون در پروژهٔ واقعی همان‌جاست که کار برنده یا بازنده می‌شود."},
  en:{name:"Machine learning", desc:"From regression to trees and SVMs: data preparation, evaluation, overfitting and deploying a model.",
      intro:"Machine learning is not magic; it is statistical optimisation. A model learns what is in the data — including the biases you did not want. This track spends most of its time on data and evaluation rather than algorithms, because that is where real projects are won or lost."},
  ch:[
["01","01-what.html",0,18,80,"یادگیری ماشین چیست","‏نظارت‌شده، بی‌نظارت، تقویتی — و کِی اصلاً لازم نیست.","What machine learning is","Supervised, unsupervised, reinforcement — and when you do not need any of it.","supervised unsupervised ml when not"],
["02","02-tools.html",0,18,75,"ابزار کار","‏Python، NumPy، pandas و ‎Jupyter‎.","The toolkit","Python, NumPy, pandas and Jupyter.","numpy pandas jupyter scikit matplotlib"],
["03","03-data.html",0,18,95,"داده: مهم‌ترین بخش","پاکسازی، مقدار گمشده، ‎outlier‎ و نشت داده.","Data: the part that matters most","Cleaning, missing values, outliers and data leakage.","cleaning missing outlier leakage eda"],
["04","04-features.html",0,18,95,"مهندسی ویژگی","مقیاس‌دهی، رمزگذاری دسته‌ای و ساخت ویژگی.","Feature engineering","Scaling, categorical encoding and building features.","feature scaling encoding onehot pipeline"],
["05","05-linear.html",0,18,90,"رگرسیون خطی","ساده‌ترین مدل، و اینکه چقدر می‌شود ازش یاد گرفت.","Linear regression","The simplest model, and how much it teaches you.","linear regression gradient descent loss"],
["06","06-logistic.html",0,18,85,"رگرسیون لجستیک","طبقه‌بندی، احتمال و مرز تصمیم.","Logistic regression","Classification, probability and decision boundaries.","logistic classification sigmoid threshold"],
["07","07-evaluation.html",0,18,100,"ارزیابی مدل","‏accuracy کافی نیست: precision، recall، ‎F1‎، ‎ROC‎.","Evaluating a model","Accuracy is not enough: precision, recall, F1, ROC.","precision recall f1 roc confusion matrix"],
["08","08-overfitting.html",0,18,95,"‏overfitting و اعتبارسنجی","‏train/test، ‎cross-validation‎ و منظم‌سازی.","Overfitting and validation","Train/test splits, cross-validation and regularisation.","overfitting crossvalidation regularization bias variance"],
["09","09-trees.html",0,18,90,"درخت تصمیم و جنگل","قابل تفسیر، قوی و پرکاربرد.","Decision trees and forests","Interpretable, strong and widely used.","decision tree random forest feature importance"],
["10","10-boosting.html",0,18,90,"‏boosting","‏XGBoost و ‎LightGBM‎: برندهٔ بیشتر مسائل جدولی.","Boosting","XGBoost and LightGBM: winners of most tabular problems.","xgboost lightgbm gradient boosting"],
["11","11-svm-knn.html",0,18,80,"‏SVM و ‎k-NN‎","مرز و همسایگی.","SVMs and k-NN","Boundaries and neighbourhoods.","svm knn kernel margin distance"],
["12","12-clustering.html",0,18,85,"خوشه‌بندی","‏k-means، ‎DBSCAN‎ و ارزیابی بدون برچسب.","Clustering","k-means, DBSCAN and evaluating without labels.","kmeans dbscan silhouette unsupervised"],
["13","13-dimensionality.html",0,18,80,"کاهش بعد","‏PCA و ‎t-SNE‎ برای دیدن داده.","Dimensionality reduction","PCA and t-SNE for seeing your data.","pca tsne umap dimensionality"],
["14","14-imbalance.html",0,18,85,"دادهٔ نامتوازن","وقتی ۹۹٪ کلاس منفی است.","Imbalanced data","When 99% of the data is the negative class.","imbalance smote resampling class weight"],
["15","15-tuning.html",0,18,85,"تنظیم ابرپارامتر","‏grid، random و ‎Bayesian‎.","Hyperparameter tuning","Grid, random and Bayesian search.","hyperparameter grid random optuna"],
["16","16-pipeline.html",0,18,85,"‏pipeline و بازتولیدپذیری","یک خط لولهٔ کامل، قابل تکرار.","Pipelines and reproducibility","One complete, repeatable pipeline.","pipeline sklearn reproducible seed"],
["17","17-deploy.html",0,18,95,"استقرار مدل","‏API، نسخه‌گذاری مدل، و ‎drift‎.","Deploying a model","APIs, model versioning and drift.","deploy mlflow api drift monitoring"],
["18","18-ethics.html",0,18,80,"سوگیری و اخلاق","مدلی که تبعیض یاد گرفته، و مسئولیت تو.","Bias and ethics","A model that learned to discriminate, and your responsibility.","bias fairness ethics explainability"],
["19","19-cap1.html",0,5,100,"پروژهٔ ۱ — پیش‌بینی قیمت","رگرسیون کامل با ارزیابی درست.","Project 1 — price prediction","A complete regression with proper evaluation.","capstone regression",1],
["20","20-cap2.html",0,7,170,"پروژهٔ ۲ — طبقه‌بندی با دادهٔ کثیف","پاکسازی، ویژگی، نامتوازنی و تفسیر.","Project 2 — classification on messy data","Cleaning, features, imbalance and interpretation.","capstone classification",2],
["21","21-cap3.html",0,9,220,"پروژهٔ ۳ — مدل در production","خط لوله، ‎API‎، مانیتورینگ و بازآموزی.","Project 3 — a model in production","A pipeline, an API, monitoring and retraining.","capstone mlops",3]
]});

/* ═══════════════ ۶۰ — یادگیری عمیق ═══════════════ */
C.push({
  id:"60-deep-learning", dir:"60-deep-learning", accent:"#EF4444", cat:"ai", pre:["59-machine-learning"],
  ico:"<circle cx=\"4.6\" cy=\"12\" r=\"1.8\"/><circle cx=\"11\" cy=\"7\" r=\"1.8\"/><circle cx=\"11\" cy=\"17\" r=\"1.8\"/><circle cx=\"17.4\" cy=\"9.6\" r=\"1.8\"/><circle cx=\"17.4\" cy=\"14.4\" r=\"1.8\"/><path d=\"M6.2 11 9.4 8M6.2 13l3.2 3M12.6 8l3.4 1.2M12.6 16l3.4-1.2\" stroke-linecap=\"round\"/>",
  fa:{name:"یادگیری عمیق", desc:"شبکهٔ عصبی، ‎CNN‎، ‎RNN‎، ترنسفورمر و آموزش مدل — با PyTorch.",
      intro:"یادگیری عمیق یک ایده است که بارها تکرار شده: لایه‌ای بساز، مشتق بگیر، وزن را کمی تغییر بده. همین. پیچیدگی از عمق می‌آید نه از مفهوم. این مسیر از یک نورون شروع می‌کند و تا ترنسفورمر می‌رود، و در هر مرحله اول با ‎NumPy‎ دستی می‌سازد بعد با ‎PyTorch‎ — تا بدانی کتابخانه چه کاری را برایت انجام می‌دهد."},
  en:{name:"Deep learning", desc:"Neural networks, CNNs, RNNs, transformers and training — with PyTorch.",
      intro:"Deep learning is one idea repeated: build a layer, take the derivative, nudge the weights. That is all. The complexity comes from depth, not from the concept. This track starts at a single neuron and works up to transformers, building each stage by hand in NumPy first and then in PyTorch — so you know what the library is doing for you."},
  ch:[
["01","01-neuron.html",0,18,90,"از یک نورون","‏perceptron، وزن و تابع فعال‌سازی.","From a single neuron","The perceptron, weights and activation functions.","perceptron neuron activation weight bias"],
["02","02-backprop.html",0,18,105,"پس‌انتشار","قاعدهٔ زنجیره‌ای — با محاسبهٔ دستی روی یک شبکهٔ کوچک.","Backpropagation","The chain rule — computed by hand on a tiny network.","backpropagation gradient chain rule derivative"],
["03","03-numpy-net.html",0,18,100,"شبکه با ‎NumPy‎","یک شبکهٔ کامل بدون فریم‌ورک.","A network in NumPy","A complete network with no framework.","numpy from scratch forward backward"],
["04","04-pytorch.html",0,18,90,"‏PyTorch","‏tensor، autograd و ‎nn.Module‎.","PyTorch","Tensors, autograd and nn.Module.","pytorch tensor autograd module optimizer"],
["05","05-training.html",0,18,95,"حلقهٔ آموزش","‏loss، بهینه‌ساز، ‎batch‎ و ‎epoch‎.","The training loop","Loss, optimiser, batches and epochs.","training loop loss optimizer batch epoch"],
["06","06-optimization.html",0,18,90,"بهینه‌سازی","‏SGD، Adam، نرخ یادگیری و زمان‌بند.","Optimisation","SGD, Adam, learning rates and schedulers.","sgd adam learning rate scheduler momentum"],
["07","07-regularization.html",0,18,90,"منظم‌سازی","‏dropout، ‎batch norm‎ و ‎early stopping‎.","Regularisation","Dropout, batch norm and early stopping.","dropout batchnorm early stopping augmentation"],
["08","08-cnn.html",0,18,100,"‏CNN","کانولوشن، ‎pooling‎ و بینایی ماشین.","CNNs","Convolution, pooling and computer vision.","cnn convolution pooling kernel vision"],
["09","09-vision.html",0,18,95,"بینایی در عمل","طبقه‌بندی تصویر، ‎transfer learning‎ و ‎fine-tuning‎.","Vision in practice","Image classification, transfer learning and fine-tuning.","transfer learning resnet finetune augmentation"],
["10","10-rnn.html",0,18,95,"‏RNN و ‎LSTM‎","داده‌های دنباله‌ای و مسئلهٔ حافظهٔ بلندمدت.","RNNs and LSTMs","Sequential data and the long-memory problem.","rnn lstm gru sequence vanishing gradient"],
["11","11-attention.html",0,18,105,"‏attention","ایده‌ای که همه‌چیز را عوض کرد.","Attention","The idea that changed everything.","attention query key value softmax"],
["12","12-transformer.html",0,18,110,"ترنسفورمر","معماری کامل، از ‎embedding‎ تا خروجی.","Transformers","The full architecture, from embeddings to output.","transformer encoder decoder positional multihead"],
["13","13-nlp.html",0,18,95,"پردازش زبان","‏tokenization، ‎embedding‎ و فارسی.","Natural language processing","Tokenisation, embeddings and Persian text.","nlp tokenization embedding bert persian"],
["14","14-generative.html",0,18,90,"مدل‌های مولد","‏autoencoder، ‎GAN‎ و ‎diffusion‎ — مرور مفهومی.","Generative models","Autoencoders, GANs and diffusion — a conceptual tour.","gan vae diffusion generative"],
["15","15-training-real.html",0,18,95,"آموزش در عمل","‏GPU، حافظه، ‎mixed precision‎ و ‎checkpoint‎.","Training for real","GPUs, memory, mixed precision and checkpointing.","gpu cuda mixed precision checkpoint oom"],
["16","16-deploy.html",0,18,90,"استقرار مدل","‏ONNX، کوانتیزه‌سازی و استنتاج سریع.","Deploying a model","ONNX, quantisation and fast inference.","onnx quantization inference serving latency"],
["17","17-cap1.html",0,5,110,"پروژهٔ ۱ — طبقه‌بندی تصویر","‏CNN از صفر، بعد با ‎transfer learning‎.","Project 1 — image classification","A CNN from scratch, then with transfer learning.","capstone cnn vision",1],
["18","18-cap2.html",0,7,180,"پروژهٔ ۲ — تحلیل متن فارسی","‏tokenization فارسی، ‎fine-tune‎ و ارزیابی.","Project 2 — Persian text analysis","Persian tokenisation, fine-tuning and evaluation.","capstone nlp persian",2],
["19","19-cap3.html",0,9,240,"پروژهٔ ۳ — ترنسفورمر کوچک از صفر","‏attention، آموزش و تولید متن.","Project 3 — a small transformer from scratch","Attention, training and text generation.","capstone transformer",3]
]});

/* ═══════════════ ۶۱ — مهندسی هوش مصنوعی ═══════════════ */
C.push({
  id:"61-ai-engineering", dir:"61-ai-engineering", accent:"#8B5CF6", cat:"ai", pre:["12-python"],
  ico:"<rect x=\"4.4\" y=\"6.4\" width=\"15.2\" height=\"12\" rx=\"3\"/><circle cx=\"9.2\" cy=\"12.4\" r=\"1.4\"/><circle cx=\"14.8\" cy=\"12.4\" r=\"1.4\"/><path d=\"M12 6.4V3.6M9.6 16h4.8\" stroke-linecap=\"round\"/>",
  fa:{name:"مهندسی هوش مصنوعی", desc:"ساخت محصول با ‎LLM‎: prompt، ‎RAG‎، ‎embedding‎، ابزار، عامل، ارزیابی و هزینه.",
      intro:"مدل زبانی را کسی دیگر آموزش داده؛ کار تو ساختن چیزی است که با آن کار می‌کند و در عمل قابل اعتماد باشد. این مسیر دربارهٔ آموزش مدل نیست — دربارهٔ مهندسی اطراف آن است: چطور داده‌ات را وارد کنی، چطور خروجی را بسنجی، چطور جلوی هزینهٔ بی‌حساب را بگیری، و چه کاری را اصلاً نباید به مدل بسپاری."},
  en:{name:"AI engineering", desc:"Building products with LLMs: prompting, RAG, embeddings, tools, agents, evaluation and cost.",
      intro:"Somebody else trained the model; your job is building something around it that is reliable in practice. This track is not about training models — it is about the engineering around them: how to feed in your data, how to measure the output, how to keep costs from running away, and what you should never hand to a model at all."},
  ch:[
["01","01-landscape.html",0,18,80,"‏LLM چیست و چه نیست","توانایی‌ها، محدودیت‌ها و توهم‌زایی.","What an LLM is and is not","Capabilities, limits and hallucination.","llm token context hallucination capability"],
["02","02-api.html",0,18,80,"کار با ‎API‎ مدل","درخواست، پارامتر، استریم و مدیریت خطا.","Working with a model API","Requests, parameters, streaming and error handling.","api completion streaming temperature retry"],
["03","03-prompting.html",0,18,95,"مهندسی prompt","ساختار، مثال، نقش و خروجی ساخت‌یافته.","Prompt engineering","Structure, examples, roles and structured output.","prompt fewshot system structured json"],
["04","04-structured.html",0,18,85,"خروجی ساخت‌یافته","‏JSON schema، اعتبارسنجی و ‎retry‎ هوشمند.","Structured output","JSON schemas, validation and smart retries.","json schema function calling validation"],
["05","05-embeddings.html",0,18,90,"‏embedding","معنا به‌صورت عدد، و شباهت برداری.","Embeddings","Meaning as numbers, and vector similarity.","embedding vector cosine similarity"],
["06","06-vectordb.html",0,18,90,"پایگاه‌دادهٔ برداری","‏pgvector، Qdrant و جستجوی شباهت.","Vector databases","pgvector, Qdrant and similarity search.","pgvector qdrant faiss ann index"],
["07","07-rag-1.html",0,18,100,"‏RAG ۱","بازیابی و تولید: مدل را با دادهٔ خودت وصل کن.","RAG 1","Retrieval-augmented generation: connecting the model to your data.","rag retrieval chunking context"],
["08","08-rag-2.html",0,18,100,"‏RAG ۲","‏chunking، بازرتبه‌بندی، جستجوی ترکیبی و ارزیابی.","RAG 2","Chunking, reranking, hybrid search and evaluation.","chunking rerank hybrid bm25 evaluation"],
["09","09-tools.html",0,18,90,"ابزار و ‎function calling‎","وقتی مدل باید کاری انجام دهد، نه فقط حرف بزند.","Tools and function calling","When the model must do something, not just talk.","tool function calling schema execution"],
["10","10-agents.html",0,18,95,"عامل","حلقهٔ تصمیم، حافظه و جایی که از کنترل خارج می‌شود.","Agents","The decision loop, memory, and where it runs away.","agent loop memory planning guardrail"],
["11","11-evaluation.html",0,18,100,"ارزیابی","چطور بفهمی خروجی خوب است — بدون حدس.","Evaluation","How to know the output is good — without guessing.","eval golden set llm judge regression"],
["12","12-cost.html",0,18,85,"هزینه و تأخیر","‏token، کش، مدل کوچک‌تر و ‎batch‎.","Cost and latency","Tokens, caching, smaller models and batching.","cost token cache latency batching"],
["13","13-safety.html",0,18,90,"ایمنی و تزریق prompt","ورودی کاربر قابل اعتماد نیست — حتی وقتی مؤدب است.","Safety and prompt injection","User input is untrusted — even when it is polite.","prompt injection jailbreak guardrail moderation"],
["14","14-local.html",0,18,85,"مدل محلی","‏Ollama و اجرای مدل روی سخت‌افزار خودت.","Local models","Ollama and running a model on your own hardware.","ollama local quantization gguf offline"],
["15","15-persian.html",0,18,85,"فارسی و ‎LLM‎","‏tokenization فارسی، کیفیت و راهکارها.","Persian and LLMs","Persian tokenisation, quality and workarounds.","persian farsi tokenization rtl quality"],
["16","16-cap1.html",0,5,90,"پروژهٔ ۱ — دستیار با خروجی ساخت‌یافته","‏API، prompt و اعتبارسنجی خروجی.","Project 1 — an assistant with structured output","API, prompting and output validation.","capstone assistant",1],
["17","17-cap2.html",0,7,170,"پروژهٔ ۲ — ‏RAG روی سند خودت","‏chunking، برداری، بازیابی و ارزیابی.","Project 2 — RAG over your own documents","Chunking, vectors, retrieval and evaluation.","capstone rag",2],
["18","18-cap3.html",0,9,230,"پروژهٔ ۳ — عامل ابزارمند","ابزار، حافظه، حفاظ، ارزیابی و کنترل هزینه.","Project 3 — a tool-using agent","Tools, memory, guardrails, evaluation and cost control.","capstone agent",3]
]});

/* ═══════════════ ۶۲ — ماشین مجازی و توزیع‌ها ═══════════════ */
C.push({
  id:"62-virtualization", dir:"62-virtualization", accent:"#0F766E", cat:"infra",
  ico:"<rect x=\"2.6\" y=\"4.6\" width=\"12\" height=\"9\" rx=\"2\"/><rect x=\"9.4\" y=\"10.4\" width=\"12\" height=\"9\" rx=\"2\"/><path d=\"M6 8h5M12.8 14h5\" stroke-linecap=\"round\"/>",
  fa:{name:"ماشین مجازی و توزیع‌ها", desc:"‏VirtualBox، KVM/QEMU، Proxmox: نصب چند توزیع، شبکه بین آن‌ها و snapshot.",
      intro:"قبل از اینکه روی یک سرور واقعی خطا کنی، بهتر است روی ماشینی خطا کنی که با یک کلیک به حالت قبل برمی‌گردد. آزمایشگاه مجازی همان جاست: چند توزیع لینوکس کنار هم، یک شبکهٔ داخلی بین‌شان، و snapshot که هر اشتباهی را برگشت‌پذیر می‌کند. این مسیر همان آزمایشگاه را می‌سازد — که بعد در مسیرهای لینوکس، شبکه و دواپس رویش کار می‌کنی."},
  en:{name:"Virtual machines & distributions", desc:"VirtualBox, KVM/QEMU, Proxmox: installing several distributions, networking between them and snapshots.",
      intro:"Before you break a real server, it is better to break one that reverts with a click. That is what a virtual lab is for: several Linux distributions side by side, a private network between them, and snapshots that make every mistake reversible. This track builds that lab — the one you will then use throughout the Linux, networking and DevOps tracks."},
  ch:[
["01","01-why.html",0,18,80,"مجازی‌سازی چیست","‏hypervisor نوع ۱ و ۲، و تفاوتش با کانتینر.","What virtualisation is","Type 1 and type 2 hypervisors, and how this differs from containers.","hypervisor type1 type2 container comparison"],
["02","02-virtualbox.html",0,18,80,"‏VirtualBox","نصب، ساخت ماشین و ‎guest additions‎.","VirtualBox","Installing, creating a machine and guest additions.","virtualbox vm guest additions vdi"],
["03","03-kvm.html",0,18,90,"‏KVM و ‎QEMU‎","مجازی‌سازی بومی لینوکس با ‎virt-manager‎.","KVM and QEMU","Native Linux virtualisation with virt-manager.","kvm qemu libvirt virt-manager virsh"],
["04","04-resources.html",0,18,80,"منابع","‏CPU، RAM، دیسک و ‎overcommit‎.","Resources","CPU, RAM, disk and overcommitting.","vcpu ram disk overcommit balloon"],
["05","05-storage.html",0,18,85,"ذخیره‌سازی","‏qcow2، ‎thin provisioning‎ و افزودن دیسک.","Storage","qcow2, thin provisioning and adding disks.","qcow2 raw thin provisioning lvm"],
["06","06-snapshots.html",0,18,80,"‏snapshot و کلون","برگشت به عقب، و کلون سریع برای آزمایش.","Snapshots and clones","Rolling back, and fast clones for experiments.","snapshot clone linked restore"],
["07","07-networking-1.html",0,18,95,"شبکه ۱","‏NAT، bridge، host-only — و کدام برای کدام کار.","Networking 1","NAT, bridged, host-only — and which for what.","nat bridge hostonly internal network mode"],
["08","08-networking-2.html",0,18,95,"شبکه ۲","شبکهٔ داخلی بین چند ماشین، و ‎ping‎ بینشان.","Networking 2","A private network between machines, and pinging across it.","internal network subnet static ip route"],
["09","09-distros.html",0,18,90,"توزیع‌های لینوکس","‏Ubuntu، Debian، Rocky، Arch، Alpine — تفاوت‌های واقعی.","Linux distributions","Ubuntu, Debian, Rocky, Arch, Alpine — the real differences.","ubuntu debian rocky arch alpine package"],
["10","10-install.html",0,18,90,"نصب چند توزیع","نصب دستی، پارتیشن‌بندی و اولین بوت.","Installing several distributions","Manual installation, partitioning and first boot.","install partition bootloader grub iso"],
["11","11-automation.html",0,18,90,"خودکارسازی","‏Vagrant و ‎cloud-init‎: ساخت ماشین با یک فایل.","Automation","Vagrant and cloud-init: a machine from one file.","vagrant cloud-init provisioning box"],
["12","12-proxmox.html",0,18,90,"‏Proxmox","مجازی‌سازی سازمانی، ‎LXC‎ و پشتیبان‌گیری.","Proxmox","Enterprise virtualisation, LXC containers and backups.","proxmox lxc cluster backup ve"],
["13","13-wsl.html",0,18,80,"‏WSL2 و مک","لینوکس روی ویندوز و مک، و محدودیت‌هایش.","WSL2 and macOS","Linux on Windows and macOS, and the limits.","wsl2 hyperv utm multipass"],
["14","14-troubleshoot.html",0,18,80,"عیب‌یابی","بوت نشدن، شبکه نداشتن و کندی.","Troubleshooting","Failure to boot, no network, and slowness.","troubleshoot boot network performance nested"],
["15","15-cap1.html",0,5,80,"پروژهٔ ۱ — اولین ماشین","نصب یک توزیع و دسترسی ‎SSH‎ از میزبان.","Project 1 — your first machine","Install a distribution and reach it over SSH from the host.","capstone vm ssh",1],
["16","16-cap2.html",0,7,140,"پروژهٔ ۲ — آزمایشگاه سه‌ماشینه","سه توزیع، یک شبکهٔ داخلی، ارتباط کامل.","Project 2 — a three-machine lab","Three distributions, one private network, full connectivity.","capstone lab network",2],
["17","17-cap3.html",0,9,190,"پروژهٔ ۳ — آزمایشگاه خودکار","‏Vagrant، ‎cloud-init‎ و بازسازی کامل با یک دستور.","Project 3 — an automated lab","Vagrant, cloud-init and a full rebuild from one command.","capstone vagrant automation",3]
]});

/* ═══════════════ ۶۳ — اسکرام، اجایل و جیرا ═══════════════ */
C.push({
  id:"63-scrum-agile", dir:"63-scrum-agile", accent:"#0EA5E9", cat:"career",
  ico:"<path d=\"M20.4 12a8.4 8.4 0 1 1-3.4-6.7\" stroke-linecap=\"round\"/><path d=\"M20.6 4.4v4.4h-4.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"2.2\"/>",
  fa:{name:"اسکرام، اجایل و جیرا", desc:"چارچوب اسکرام، نقش‌ها، رویدادها، تخمین، ‎backlog‎ و روند واقعی تحویل یک فیچر.",
      intro:"بیشتر تیم‌هایی که می‌گویند «اسکرام کار می‌کنیم» در واقع جلسهٔ روزانهٔ طولانی دارند و ‎backlog‎ی که کسی نگاهش نمی‌کند. اسکرام یک چارچوب کوچک با قواعد کم است، و همان قواعد کم دلیل دارند. این مسیر هم چارچوب را دقیق می‌گوید و هم صادقانه نشان می‌دهد کجا در عمل شکست می‌خورد — و یک فیچر را از ایده تا production دنبال می‌کند."},
  en:{name:"Scrum, agile and Jira", desc:"The Scrum framework, roles, events, estimation, backlogs and the real path a feature takes to delivery.",
      intro:"Most teams that say “we do Scrum” actually have a long daily meeting and a backlog nobody reads. Scrum is a small framework with few rules, and those few rules have reasons. This track states the framework precisely and is honest about where it breaks down in practice — following one feature from idea to production."},
  ch:[
["01","01-agile.html",0,18,80,"اجایل چیست","بیانیه، و چیزی که از آن برداشت غلط شد.","What agile is","The manifesto, and what got misread.","agile manifesto principle waterfall"],
["02","02-scrum-overview.html",0,18,80,"چارچوب اسکرام","سه نقش، پنج رویداد، سه مصنوع.","The Scrum framework","Three roles, five events, three artefacts.","scrum framework role event artifact"],
["03","03-roles.html",0,18,85,"نقش‌ها","‏Product Owner، Scrum Master، تیم توسعه.","The roles","Product Owner, Scrum Master, developers.","product owner scrum master team accountability"],
["04","04-backlog.html",0,18,90,"‏product backlog","اولویت‌بندی، ‎refinement‎ و ‎backlog‎ی که زنده است.","The product backlog","Prioritisation, refinement and a backlog that stays alive.","backlog refinement priority grooming"],
["05","05-user-stories.html",0,18,90,"‏user story","نوشتن داستان خوب و معیار پذیرش.","User stories","Writing a good story and acceptance criteria.","user story acceptance criteria invest"],
["06","06-estimation.html",0,18,90,"تخمین","‏story point، ‎planning poker‎ و چرا تخمین ساعتی خراب می‌شود.","Estimation","Story points, planning poker, and why hour estimates fail.","story point planning poker velocity relative"],
["07","07-sprint-planning.html",0,18,85,"‏sprint planning","هدف اسپرینت، ظرفیت و تعهد.","Sprint planning","The sprint goal, capacity and commitment.","sprint planning goal capacity commitment"],
["08","08-daily.html",0,18,75,"‏daily scrum","پانزده دقیقه، و اینکه چرا معمولاً یک ساعت می‌شود.","The daily scrum","Fifteen minutes, and why it usually becomes an hour.","daily standup impediment sync"],
["09","09-review-retro.html",0,18,85,"‏review و ‎retrospective‎","نمایش کار، و بهبودی که واقعاً اجرا شود.","Review and retrospective","Showing the work, and improvements that actually happen.","review retrospective demo improvement"],
["10","10-dod.html",0,18,80,"‏Definition of Done","تعریفی که جلوی «تقریباً تمام شده» را می‌گیرد.","Definition of Done","The definition that kills “almost done”.","definition of done ready quality gate"],
["11","11-metrics.html",0,18,85,"معیارها","‏velocity، ‎burndown‎، ‎lead time‎ — و سوءاستفاده از آن‌ها.","Metrics","Velocity, burndown, lead time — and how they get abused.","velocity burndown cumulative flow lead time"],
["12","12-kanban.html",0,18,85,"‏Kanban","جریان به‌جای اسپرینت، و ‎WIP limit‎.","Kanban","Flow instead of sprints, and WIP limits.","kanban wip flow pull board"],
["13","13-jira-basics.html",0,18,85,"‏Jira: مبانی","پروژه، ‎issue‎، ‎workflow‎ و ‎board‎.","Jira: the basics","Projects, issues, workflows and boards.","jira issue workflow board sprint"],
["14","14-jira-advanced.html",0,18,90,"‏Jira پیشرفته","‏JQL، خودکارسازی، گزارش و ‎epic‎.","Jira: advanced","JQL, automation, reports and epics.","jql automation report epic filter dashboard"],
["15","15-feature-flow.html",0,18,95,"روند تحویل یک فیچر","از ایده تا production: هر مرحله و هر تحویل‌دادنی.","The path of a feature","From idea to production: every stage and every handover.","feature flow lifecycle handover release"],
["16","16-failures.html",0,18,85,"کجا اسکرام شکست می‌خورد","‏«اسکرام آبشاری»، و نشانه‌هایش.","Where Scrum fails","“Waterfall in sprints”, and how to spot it.","antipattern dark scrum zombie failure"],
["17","17-cap1.html",0,5,80,"پروژهٔ ۱ — ‏backlog و داستان","یک محصول کوچک را به داستان بشکن و تخمین بزن.","Project 1 — backlog and stories","Break a small product into stories and estimate them.","capstone backlog story",1],
["18","18-cap2.html",0,7,130,"پروژهٔ ۲ — یک اسپرینت کامل","برنامه‌ریزی، تابلو، معیارها و ‎retrospective‎.","Project 2 — a complete sprint","Planning, the board, metrics and a retrospective.","capstone sprint",2],
["19","19-cap3.html",0,9,170,"پروژهٔ ۳ — راه‌اندازی جیرا برای یک تیم","‏workflow، خودکارسازی، گزارش و ‎DoD‎.","Project 3 — set up Jira for a team","Workflows, automation, reports and a Definition of Done.","capstone jira setup",3]
]});

/* ═══════════════ ۶۴ — سندنویسی فنی ═══════════════ */
C.push({
  id:"64-docs-writing", dir:"64-docs-writing", accent:"#475569", cat:"career",
  ico:"<path d=\"M6 3.4h8.4L19 8v12.6H6z\"/><path d=\"M14 3.4V8h5M9 12.4h7M9 16h5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  fa:{name:"سندنویسی فنی", desc:"‏SRS، BPMN، ‎ADR‎، مستند ‎API‎، ‎RFC‎ و نمودارهای ‎UML‎ — سندی که خوانده شود.",
      intro:"سند بد از نبودِ سند بدتر است، چون به آن اعتماد می‌کنی و دروغ می‌گوید. نوشتن سند خوب یک مهارت مهندسی است، نه کار اداری: باید بدانی مخاطب کیست، چه تصمیمی می‌خواهد بگیرد، و چه چیزی را می‌شود حذف کرد. این مسیر انواع سند را با نمونهٔ واقعی نشان می‌دهد و در هرکدام می‌گوید چه چیزی را ننویسی."},
  en:{name:"Technical documentation", desc:"SRS, BPMN, ADRs, API docs, RFCs and UML diagrams — documents people actually read.",
      intro:"A bad document is worse than none, because you trust it and it lies. Writing well is an engineering skill, not clerical work: you must know who the reader is, what decision they are making, and what can be left out. This track walks through each document type with a real example and, for each, says what not to write."},
  ch:[
["01","01-why.html",0,18,75,"چرا سند","هزینهٔ ننوشتن، و هزینهٔ زیاد نوشتن.","Why document at all","The cost of not writing, and the cost of writing too much.","documentation cost audience purpose"],
["02","02-audience.html",0,18,80,"مخاطب و هدف","برای که می‌نویسی و او چه تصمیمی دارد.","Audience and purpose","Who you write for and what they must decide.","audience purpose scope decision"],
["03","03-requirements.html",0,18,90,"استخراج نیاز","مصاحبه، سؤال درست و نیاز پنهان.","Eliciting requirements","Interviews, the right questions and hidden needs.","elicitation interview stakeholder requirement"],
["04","04-srs.html",0,18,100,"‏SRS","سند نیازمندی نرم‌افزار: ساختار، نیاز کارکردی و غیرکارکردی.","SRS","A software requirements specification: structure, functional and non-functional needs.","srs requirement functional nonfunctional ieee"],
["05","05-user-stories.html",0,18,80,"داستان و معیار پذیرش","سبک چابک در برابر ‎SRS‎ سنگین.","Stories and acceptance criteria","The agile style versus a heavy SRS.","user story acceptance gherkin criteria"],
["06","06-uml-structure.html",0,18,90,"‏UML ساختاری","نمودار کلاس، مؤلفه و استقرار.","Structural UML","Class, component and deployment diagrams.","uml class component deployment diagram"],
["07","07-uml-behavior.html",0,18,90,"‏UML رفتاری","‏use case، توالی، فعالیت و وضعیت.","Behavioural UML","Use case, sequence, activity and state diagrams.","uml usecase sequence activity state"],
["08","08-bpmn.html",0,18,100,"‏BPMN","مدل‌سازی فرایند کسب‌وکار: رویداد، فعالیت، دروازه و ‎lane‎.","BPMN","Business process modelling: events, activities, gateways and lanes.","bpmn process gateway lane event task"],
["09","09-bpms.html",0,18,85,"‏BPMS","از نمودار تا فرایند اجراشدنی: ‎Camunda‎ و مانند آن.","BPMS","From diagram to executable process: Camunda and friends.","bpms camunda workflow engine executable"],
["10","10-c4-adr.html",0,18,90,"‏C4 و ‎ADR‎","سند معماری: زمینه تا کد، و ثبت تصمیم.","C4 and ADRs","Architecture documentation: context to code, and recording decisions.","c4 adr context container decision record"],
["11","11-api-docs.html",0,18,90,"مستند ‎API‎","‏OpenAPI، مثال، خطا و نسخه.","API documentation","OpenAPI, examples, errors and versioning.","openapi swagger example error reference"],
["12","12-readme.html",0,18,80,"‏README و راهنمای کاربر","اولین سؤال خواننده را اول جواب بده.","READMEs and user guides","Answer the reader's first question first.","readme quickstart tutorial howto diataxis"],
["13","13-rfc.html",0,18,85,"‏RFC و طرح فنی","پیشنهاد تغییر بزرگ، و گرفتن بازخورد قبل از کد.","RFCs and design docs","Proposing a large change and getting feedback before code.","rfc design doc proposal review"],
["14","14-diagrams.html",0,18,85,"نمودار خوب","‏Mermaid، PlantUML و قاعده‌های خوانایی.","Good diagrams","Mermaid, PlantUML and the rules of legibility.","mermaid plantuml diagram legibility"],
["15","15-maintenance.html",0,18,80,"نگه‌داشتن سند زنده","سندی که با کد به‌روز می‌ماند، نه سندی که می‌پوسد.","Keeping docs alive","Documentation that updates with the code instead of rotting.","docs as code review rot changelog"],
["16","16-cap1.html",0,5,90,"پروژهٔ ۱ — ‏SRS یک سامانهٔ کوچک","از مصاحبه تا سند کامل.","Project 1 — an SRS for a small system","From interview to a complete document.","capstone srs",1],
["17","17-cap2.html",0,7,140,"پروژهٔ ۲ — مدل‌سازی فرایند با ‎BPMN‎","یک فرایند سازمانی واقعی.","Project 2 — process modelling with BPMN","A real organisational process.","capstone bpmn",2],
["18","18-cap3.html",0,9,180,"پروژهٔ ۳ — بستهٔ سند معماری","‏C4، ‎ADR‎، مستند ‎API‎ و ‎README‎.","Project 3 — an architecture documentation set","C4, ADRs, API docs and a README.","capstone c4 adr",3]
]});

/* ═══════════════ ۶۵ — ارائه، سخنرانی و رهبری فنی ═══════════════ */
C.push({
  id:"65-presentation", dir:"65-presentation", accent:"#DB2777", cat:"career",
  ico:"<path d=\"M12 3.4a3 3 0 0 1 3 3v4.4a3 3 0 0 1-6 0V6.4a3 3 0 0 1 3-3z\"/><path d=\"M6.4 11.4a5.6 5.6 0 0 0 11.2 0M12 17v3.6M9 20.6h6\" stroke-linecap=\"round\"/>",
  fa:{name:"ارائه، سخنرانی و رهبری فنی", desc:"ساختن ارائهٔ فنی، سخنرانی بدون اضطراب، بازبینی کد محترمانه و رشد به سمت ‎tech lead‎.",
      intro:"در سطحی از کار، کیفیت کدت دیگر تعیین‌کننده نیست — توانایی‌ات در توضیح دادن، متقاعد کردن و هماهنگ کردن آدم‌ها تعیین‌کننده می‌شود. این مهارت‌ها ذاتی نیستند؛ قابل تمرین‌اند، درست مثل الگوریتم. این مسیر آن‌ها را مثل مهارت فنی برخورد می‌کند: با ساختار، تمرین و بازخورد."},
  en:{name:"Presenting, speaking and tech leadership", desc:"Building a technical talk, speaking without dread, reviewing code respectfully, and growing into a tech lead.",
      intro:"Past a certain point, the quality of your code stops being the deciding factor and your ability to explain, persuade and align people takes over. These are not innate traits; they are practisable, exactly like algorithms. This track treats them as technical skills: structure, practice and feedback."},
  ch:[
["01","01-structure.html",0,18,85,"ساختار یک ارائه","پیام اصلی، قوس روایت و آنچه باید حذف شود.","Structuring a talk","The core message, the narrative arc, and what to cut.","structure narrative message outline"],
["02","02-audience.html",0,18,80,"شناخت مخاطب","همان محتوا، برای مدیر و برای مهندس — دو ارائهٔ متفاوت.","Knowing your audience","The same content for a manager and an engineer is two different talks.","audience level context executive"],
["03","03-slides.html",0,18,85,"اسلاید خوب","کمتر متن، بیشتر معنا — و قاعده‌های خوانایی.","Good slides","Less text, more meaning — and the rules of legibility.","slide design contrast font density"],
["04","04-visuals.html",0,18,85,"نمودار در ارائه","نموداری که در ده ثانیه فهمیده شود.","Visuals in a talk","A diagram understood in ten seconds.","diagram chart visual simplify"],
["05","05-demo.html",0,18,80,"دموی زنده","چطور دمو بدهی که خراب نشود — و اگر شد چه کنی.","Live demos","How to demo without it breaking — and what to do when it does.","demo backup recording failure"],
["06","06-delivery.html",0,18,90,"اجرا","صدا، مکث، تماس چشمی و سرعت.","Delivery","Voice, pauses, eye contact and pace.","delivery voice pace pause body language"],
["07","07-anxiety.html",0,18,85,"اضطراب","چیزی که از بین نمی‌رود، ولی مهارش می‌شود.","Stage anxiety","It does not disappear, but it becomes manageable.","anxiety preparation breathing rehearsal"],
["08","08-qa.html",0,18,80,"پرسش و پاسخ","سؤال سخت، سؤال خصمانه، و «نمی‌دانم».","Questions and answers","Hard questions, hostile questions, and “I don't know”.","qa question hostile honest"],
["09","09-writing-persuasive.html",0,18,85,"نوشتن متقاعدکننده","پیشنهاد فنی که پذیرفته شود.","Persuasive writing","A technical proposal that gets accepted.","persuasion proposal argument evidence"],
["10","10-meetings.html",0,18,80,"جلسهٔ مفید","دستور کار، تصمیم و پیگیری.","Useful meetings","Agenda, decisions and follow-up.","meeting agenda decision facilitation"],
["11","11-code-review.html",0,18,90,"بازبینی کد","نقد کد بدون تحقیر آدم — و پذیرش نقد.","Code review","Critiquing code without diminishing the person — and taking criticism.","code review feedback tone nitpick"],
["12","12-mentoring.html",0,18,85,"راهنمایی و آموزش","بزرگ کردن دیگران، به‌جای انجام دادن کارشان.","Mentoring","Growing others instead of doing their work.","mentoring pairing teaching growth"],
["13","13-techlead.html",0,18,95,"‏tech lead شدن","از «بهترین کدنویس» به «کسی که تیم را جلو می‌برد».","Becoming a tech lead","From best coder to the person who moves the team forward.","tech lead responsibility delegation influence"],
["14","14-conflict.html",0,18,85,"اختلاف فنی","وقتی دو نفر هر دو منطق دارند.","Technical disagreement","When two people are both being reasonable.","conflict disagree commit tradeoff"],
["15","15-stakeholders.html",0,18,85,"گفت‌وگو با غیرفنی‌ها","ترجمهٔ ریسک فنی به زبان کسب‌وکار.","Talking to non-technical people","Translating technical risk into business language.","stakeholder business risk translation"],
["16","16-cap1.html",0,5,80,"پروژهٔ ۱ — ارائهٔ پنج‌دقیقه‌ای","یک موضوع فنی، پنج دقیقه، ضبط و بازبینی.","Project 1 — a five-minute talk","One technical topic, five minutes, recorded and reviewed.","capstone lightning talk",1],
["17","17-cap2.html",0,7,130,"پروژهٔ ۲ — طرح فنی و دفاع از آن","بنویس، ارائه بده، به سؤال‌ها جواب بده.","Project 2 — a design doc and its defence","Write it, present it, answer the questions.","capstone design doc",2],
["18","18-cap3.html",0,9,170,"پروژهٔ ۳ — کارگاه فنی","یک موضوع را به دیگران آموزش بده و بازخورد بگیر.","Project 3 — run a technical workshop","Teach a topic to others and collect feedback.","capstone workshop teaching",3]
]});


/* ═══════════════ HTML ═══════════════ */
C.push({
  id:"66-html", dir:"66-html", accent:"#E34F26", cat:"frontend",
  ico:"<path d=\"M4.2 3h15.6l-1.4 15.8L12 21l-6.4-2.2z\"/><path d=\"M8 7.6h8l-.4 4.2H9.4l.2 2.4 2.4.6 2.4-.6.2-1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  fa:{name:"HTML", desc:"سند معنایی، فرم، جدول، رسانه، دسترس‌پذیری و ‎SEO‎ — زبانی که همهٔ وب رویش سوار است.",
      intro:"‏HTML را همه فکر می‌کنند بلدند چون چند تگ می‌شناسند. اما HTML یک زبان نشانه‌گذاری معنایی است، نه فهرستی از تگ‌ها: انتخاب درست تگ تعیین می‌کند صفحه‌خوان چه بخواند، گوگل چه بفهمد، و مرورگر بدون یک خط جاوااسکریپت چه رفتاری بدهد. این مسیر همان معنا را یاد می‌دهد — و در راه، مقدار زیادی جاوااسکریپتِ لازم‌نشده را از تو می‌گیرد."},
  en:{name:"HTML", desc:"Semantic documents, forms, tables, media, accessibility and SEO — the language the whole web rests on.",
      intro:"Everyone thinks they know HTML because they know a few tags. But HTML is a semantic markup language, not a tag list: choosing the right element decides what a screen reader announces, what Google understands, and what the browser does for free without a line of JavaScript. This track teaches that meaning — and along the way removes a great deal of JavaScript you never needed."},
  ch:[
["01","01-document.html",0,18,75,"سند و درخت","‏HTML یک سند است نه بوم نقاشی. ساختار درختی و ‎DOM‎.","The document and its tree","HTML is a document, not a canvas. The tree structure and the DOM.","html document dom tree parse"],
["02","02-anatomy.html",0,18,75,"کالبد یک صفحه","‏doctype، head، meta، charset و ترتیبی که مهم است.","Anatomy of a page","doctype, head, meta, charset, and the order that matters.","doctype head meta charset viewport"],
["03","03-text.html",0,18,80,"متن","عنوان‌بندی، پاراگراف، نقل‌قول، ‎strong‎ در برابر ‎b‎.","Text","Headings, paragraphs, quotations, strong versus b.","heading paragraph strong em blockquote"],
["04","04-semantic.html",0,18,90,"معناشناسی","‏article، section، nav، aside — و اینکه ‎div‎ کِی درست است.","Semantics","article, section, nav, aside — and when a div is genuinely right.","semantic landmark article section outline"],
["05","05-links.html",0,18,80,"پیوند","‏href، هدف، ‎rel‎ و پیوند امن به بیرون.","Links","href, targets, rel, and linking outward safely.","anchor href rel noopener target"],
["06","06-lists.html",0,18,70,"فهرست","‏ul، ol، dl و کاربرد واقعی هرکدام.","Lists","ul, ol, dl and where each genuinely belongs.","list ul ol dl definition"],
["07","07-images.html",0,18,85,"تصویر و رسانه","‏alt، srcset، picture، ویدیو و زیرنویس.","Images and media","alt, srcset, picture, video and captions.","img alt srcset picture video track"],
["08","08-tables.html",0,18,80,"جدول","جدول دادهٔ درست: ‎thead‎، ‎scope‎ و ‎caption‎.","Tables","A correct data table: thead, scope and caption.","table thead scope caption colspan"],
["09","09-forms-1.html",0,18,90,"فرم ۱","‏input، label، نوع‌های ورودی و ‎name‎.","Forms 1","Inputs, labels, input types and name.","form input label type name placeholder"],
["10","10-forms-2.html",0,18,90,"فرم ۲","اعتبارسنجی داخلی مرورگر، بدون جاوااسکریپت.","Forms 2","The browser's built-in validation, with no JavaScript.","validation required pattern constraint novalidate"],
["11","11-forms-3.html",0,18,85,"فرم ۳","‏select، datalist، fieldset، آپلود و ارسال.","Forms 3","select, datalist, fieldset, file upload and submission.","select datalist fieldset file submit"],
["12","12-interactive.html",0,18,80,"عناصر تعاملی","‏details، dialog، progress — رفتار رایگان از مرورگر.","Interactive elements","details, dialog, progress — free behaviour from the browser.","details dialog progress meter popover"],
["13","13-a11y.html",0,18,95,"دسترس‌پذیری","‏ARIA، ترتیب فوکوس، و اینکه HTML درست ۹۰٪ کار را می‌کند.","Accessibility","ARIA, focus order, and how correct HTML does 90% of the work.","aria role focus screen reader tabindex"],
["14","14-seo.html",0,18,85,"‏HTML و SEO","‏title، توضیح، داده‌های ساخت‌یافته و ‎sitemap‎.","HTML and SEO","Titles, descriptions, structured data and sitemaps.","seo title meta schema jsonld canonical"],
["15","15-rtl.html",0,18,80,"فارسی و ‎RTL‎","‏dir، ‎lang‎، متن دوجهته و عدد فارسی.","Persian and RTL","dir, lang, bidirectional text and Persian numerals.","rtl dir lang bidi persian"],
["16","16-embed.html",0,18,75,"جاسازی و امنیت","‏iframe، ‎sandbox‎ و محتوای بیرونی.","Embedding and safety","iframes, sandboxing and third-party content.","iframe sandbox embed csp"],
["17","17-validation.html",0,18,75,"اعتبارسنجی و ابزار","اعتبارسنج ‎W3C‎ و خطاهای رایج ساختاری.","Validation and tooling","The W3C validator and common structural errors.","validator w3c lint nesting error"],
["18","18-cap1.html",0,5,80,"پروژهٔ ۱ — رزومهٔ معنایی","یک صفحهٔ کامل، فقط با ‎HTML‎ درست.","Project 1 — a semantic résumé","One complete page, with correct HTML alone.","capstone semantic resume",1],
["19","19-cap2.html",0,7,130,"پروژهٔ ۲ — فرم چندمرحله‌ای","اعتبارسنجی کامل بدون یک خط جاوااسکریپت.","Project 2 — a multi-step form","Full validation without a line of JavaScript.","capstone form validation",2],
["20","20-cap3.html",0,9,170,"پروژهٔ ۳ — صفحهٔ کاملاً دسترس‌پذیر","تست با صفحه‌خوان، کیبورد و اعتبارسنج.","Project 3 — a fully accessible page","Tested with a screen reader, the keyboard and the validator.","capstone accessibility audit",3]
]});

/* ═══════════════ CSS ═══════════════ */
C.push({
  id:"67-css", dir:"67-css", accent:"#2965F1", cat:"frontend", pre:["66-html"],
  ico:"<path d=\"M4.2 3h15.6l-1.4 15.8L12 21l-6.4-2.2z\"/><path d=\"M15.8 7.6H8.6l.3 3.2h6.6l-.4 3.6-3.1.8-3.1-.8-.2-1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  fa:{name:"CSS", desc:"آبشار، مدل جعبه، Flexbox، Grid، متغیر، انیمیشن، ‎RTL‎ و کارایی رندر.",
      intro:"بیشتر ناامیدی از ‎CSS‎ از یک چیز می‌آید: آدم‌ها خاصیت‌ها را حفظ می‌کنند ولی مدل زیرین را نه. چرا این ‎margin‎ اعمال نشد، چرا آن عنصر وسط نمی‌آید، چرا ‎z-index‎ کار نمی‌کند — همه جواب دقیق دارند، و همه از سه مفهوم می‌آیند: آبشار، جریان، و بافت انباشت. این مسیر آن سه را محکم می‌کند، بعد می‌رود سراغ چیدمان."},
  en:{name:"CSS", desc:"The cascade, the box model, Flexbox, Grid, custom properties, animation, RTL and render performance.",
      intro:"Most frustration with CSS comes from one thing: people memorise properties but not the underlying model. Why that margin did not apply, why the element will not centre, why z-index does nothing — each has an exact answer, and they all come from three ideas: the cascade, flow, and stacking contexts. This track makes those solid, then moves to layout."},
  ch:[
["01","01-cascade.html",0,18,90,"آبشار و ویژگی","منشأ بیشتر «چرا اعمال نمی‌شود؟»","The cascade and specificity","The source of most “why is this not applying?”","cascade specificity inherit important layer"],
["02","02-selectors.html",0,18,85,"انتخابگرها","ترکیبی، شبه‌کلاس، ‎:has()‎ و ‎:is()‎.","Selectors","Combinators, pseudo-classes, :has() and :is().","selector pseudo class has is where nth"],
["03","03-box-model.html",0,18,85,"مدل جعبه","‏margin، padding، border و ‎border-box‎.","The box model","margin, padding, border and border-box.","box model border-box collapse overflow"],
["04","04-flow.html",0,18,85,"جریان سند","‏block، inline، ‎inline-block‎ و ‎BFC‎.","Document flow","block, inline, inline-block and block formatting contexts.","flow block inline bfc float clear"],
["05","05-units.html",0,18,80,"واحدها","‏px، rem، em، ‎%‎، ‎vh‎، ‎ch‎ و ‎clamp()‎.","Units","px, rem, em, %, vh, ch and clamp().","unit rem em vh clamp calc"],
["06","06-color.html",0,18,80,"رنگ","‏hex، ‎hsl‎، ‎oklch‎، شفافیت و ‎color-mix()‎.","Colour","hex, hsl, oklch, alpha and color-mix().","color hsl oklch opacity color-mix contrast"],
["07","07-typography.html",0,18,85,"تایپوگرافی","خط، فاصله، ‎font-face‎ و فونت متغیر.","Typography","Line height, spacing, font-face and variable fonts.","font typography line-height woff2 variable"],
["08","08-flexbox.html",0,18,95,"Flexbox","چیدمان یک‌بعدی — و اینکه هر خاصیت روی کدام محور اثر دارد.","Flexbox","One-dimensional layout — and which axis each property affects.","flex justify align gap basis grow shrink"],
["09","09-grid-1.html",0,18,95,"Grid ۱","ستون، ردیف، ‎fr‎ و ‎gap‎.","Grid 1","Columns, rows, fr units and gap.","grid template columns rows fr gap"],
["10","10-grid-2.html",0,18,95,"Grid ۲","ناحیهٔ نام‌دار، ‎auto-fit‎، ‎minmax‎ و چیدمان زیرشبکه.","Grid 2","Named areas, auto-fit, minmax and subgrid.","grid area autofit minmax subgrid dense"],
["11","11-position.html",0,18,85,"موقعیت و لایه","‏sticky، ‎absolute‎ و بافت انباشت ‎z-index‎.","Positioning and layers","sticky, absolute and the z-index stacking context.","position sticky absolute z-index stacking"],
["12","12-responsive.html",0,18,90,"واکنش‌گرایی","‏media query، ‎container query‎ و طراحی سیال.","Responsive design","Media queries, container queries and fluid design.","responsive media container query breakpoint"],
["13","13-variables.html",0,18,85,"متغیرهای ‎CSS‎","‏custom property، دامنه، و ساخت تم تاریک.","CSS custom properties","Custom properties, scope, and building a dark theme.","variable custom property theme dark scope"],
["14","14-transitions.html",0,18,85,"گذار و انیمیشن","‏transition، ‎keyframes‎ و حرکتی که آزار ندهد.","Transitions and animation","transitions, keyframes and motion that does not annoy.","transition animation keyframes reduced motion"],
["15","15-transforms.html",0,18,80,"تبدیل","‏translate، ‎scale‎، ‎rotate‎ و سه‌بعدی.","Transforms","translate, scale, rotate and 3D.","transform translate scale rotate perspective"],
["16","16-rtl.html",0,18,85,"‏RTL و خاصیت منطقی","‏inline-start به‌جای ‎left‎ — درس اصلی برای فارسی.","RTL and logical properties","inline-start instead of left — the key lesson for Persian.","rtl logical inline-start direction margin-inline"],
["17","17-architecture.html",0,18,85,"معماری ‎CSS‎","‏BEM، لایه‌بندی و کدی که بشود حذفش کرد.","CSS architecture","BEM, layering, and code you can safely delete.","bem architecture layer naming scope"],
["18","18-performance.html",0,18,90,"کارایی رندر","‏reflow، ‎repaint‎، ‎contain‎ و اسکرول روان.","Render performance","Reflow, repaint, contain and smooth scrolling.","reflow repaint contain will-change compositing"],
["19","19-modern.html",0,18,85,"‏CSS مدرن","‏@layer، ‎@container‎، ‎:has()‎، ‎nesting‎ و ‎@supports‎.","Modern CSS","@layer, @container, :has(), nesting and @supports.","layer container has nesting supports"],
["20","20-cap1.html",0,5,80,"پروژهٔ ۱ — چیدمان صفحه","یک صفحهٔ کامل با ‎Grid‎ و ‎Flexbox‎.","Project 1 — a page layout","A full page with Grid and Flexbox.","capstone layout",1],
["21","21-cap2.html",0,7,140,"پروژهٔ ۲ — سیستم تم","توکن، تم روشن و تاریک، و ‎RTL‎.","Project 2 — a theming system","Tokens, light and dark themes, and RTL.","capstone theme tokens",2],
["22","22-cap3.html",0,9,180,"پروژهٔ ۳ — رابط کامل بدون فریم‌ورک","واکنش‌گرا، دسترس‌پذیر و با اسکرول روان.","Project 3 — a complete UI, no framework","Responsive, accessible and smooth-scrolling.","capstone ui performance",3]
]});

/* ═══════════════ Sass ═══════════════ */
C.push({
  id:"68-sass", dir:"68-sass", accent:"#CD6799", cat:"frontend", pre:["67-css"],
  ico:"<path d=\"M3.4 12.4c3-5.4 8.8-7.8 13-7 2.6.5 3.8 2.2 3.2 3.8-1 2.6-5.6 3-8.6 1.6-2.4-1.1-2-3 .4-2.6\" stroke-linecap=\"round\"/><path d=\"M20.6 13.6c-2.6 4.6-7.6 6.8-11.4 6.2\" stroke-linecap=\"round\" opacity=\".75\"/>",
  fa:{name:"Sass", desc:"متغیر، تودرتویی، ‎mixin‎، تابع، ماژول و معماری ‎7-1‎ — ‎CSS‎ در مقیاس.",
      intro:"‏Sass اولین چیزی بود که ‎CSS‎ را قابل مدیریت کرد، و با اینکه ‎CSS‎ امروز خیلی از قابلیت‌هایش را دارد، هنوز جایی می‌ماند که ‎CSS‎ نمی‌رسد: منطق در زمان کامپایل. این مسیر یاد می‌دهد کجا ‎Sass‎ هنوز ارزش دارد و کجا فقط پیچیدگی اضافه است — چون بخش زیادی از ‎Sass‎ی که تیم‌ها می‌نویسند، امروز با ‎CSS‎ خام ساده‌تر است."},
  en:{name:"Sass", desc:"Variables, nesting, mixins, functions, modules and the 7-1 architecture — CSS at scale.",
      intro:"Sass was the first thing that made CSS manageable, and although modern CSS has absorbed many of its features, it still reaches where CSS cannot: logic at compile time. This track shows where Sass still earns its place and where it is now just extra complexity — because much of the Sass teams write today is simpler in plain CSS."},
  ch:[
["01","01-why.html",0,18,75,"چرا ‎Sass‎ آمد","مسئله‌ای که ‎CSS‎ آن زمان نداشت.","Why Sass appeared","The problem CSS did not solve at the time.","sass scss why preprocessor history"],
["02","02-setup.html",0,18,70,"راه‌اندازی","‏dart-sass، ‎watch‎ و یکپارچگی با ابزار بیلد.","Getting set up","dart-sass, watching, and build-tool integration.","install dart sass watch cli vite"],
["03","03-syntax.html",0,18,75,"نحو","‏SCSS در برابر نحو تورفته.","Syntax","SCSS versus the indented syntax.","scss sass syntax indented"],
["04","04-variables.html",0,18,80,"متغیر","متغیر ‎Sass‎ در برابر ‎custom property‎ — تفاوت مهم.","Variables","Sass variables versus CSS custom properties — an important difference.","variable custom property compile runtime"],
["05","05-nesting.html",0,18,80,"تودرتویی","قدرتش، و دامی که ویژگی را منفجر می‌کند.","Nesting","Its power, and the trap that explodes specificity.","nesting ampersand specificity depth"],
["06","06-partials.html",0,18,80,"‏partial و ماژول","‏@use و ‎@forward‎ به‌جای ‎@import‎ منسوخ.","Partials and modules","@use and @forward instead of the deprecated @import.","partial use forward import namespace"],
["07","07-mixins.html",0,18,90,"‎mixin‎","کد قابل استفادهٔ مجدد با پارامتر و بلوک محتوا.","Mixins","Reusable code with parameters and content blocks.","mixin include content parameter default"],
["08","08-functions.html",0,18,85,"تابع","تابع خودت، و توابع داخلی رنگ و ریاضی.","Functions","Your own functions, plus the built-in colour and maths modules.","function return math color module"],
["09","09-control.html",0,18,85,"کنترل جریان","‏@if، ‎@each‎، ‎@for‎ و تولید کلاس.","Control flow","@if, @each, @for and generating classes.","if each for while map list"],
["10","10-maps.html",0,18,85,"‏map","توکن طراحی به‌صورت ساختار داده.","Maps","Design tokens as a data structure.","map get merge keys token"],
["11","11-extend.html",0,18,75,"‎@extend‎","چرا معمولاً باید از ‎mixin‎ استفاده کنی نه این.","@extend","Why you should usually reach for a mixin instead.","extend placeholder selector output"],
["12","12-architecture.html",0,18,90,"معماری ‎7-1‎","ساختار پوشه‌ای که در پروژهٔ بزرگ دوام می‌آورد.","The 7-1 architecture","A folder structure that survives a large project.","7-1 architecture folder abstract layout"],
["13","13-bem.html",0,18,80,"‏BEM با ‎Sass‎","نام‌گذاری منظم و ‎&__element‎.","BEM with Sass","Disciplined naming and &__element.","bem naming block element modifier"],
["14","14-modern-css.html",0,18,85,"‏Sass یا ‎CSS‎ مدرن؟","چه چیزی را دیگر لازم نداری.","Sass or modern CSS?","What you no longer need it for.","nesting variable modern css comparison"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — بازنویسی با ‎Sass‎","یک ‎CSS‎ تکراری را ماژولار کن.","Project 1 — refactor into Sass","Make a repetitive stylesheet modular.","capstone refactor",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — سیستم توکن","‏map، تابع و تولید خودکار کلاس‌ها.","Project 2 — a token system","Maps, functions and generated utility classes.","capstone token map",2],
["17","17-cap3.html",0,9,160,"پروژهٔ ۳ — کتابخانهٔ استایل","ساختار ‎7-1‎، تم، ‎RTL‎ و مستندات.","Project 3 — a style library","7-1 structure, theming, RTL and documentation.","capstone library",3]
]});

/* ═══════════════ Tailwind CSS ═══════════════ */
C.push({
  id:"69-tailwind", dir:"69-tailwind", accent:"#06B6D4", cat:"frontend", pre:["67-css"],
  ico:"<path d=\"M7.4 10.4c.6-2.6 2.3-3.9 5-3.9 4 0 4.5 3 6.6 3.5 1.3.3 2.5-.2 3.5-1.5-.6 2.6-2.3 3.9-5 3.9-4 0-4.5-3-6.6-3.5-1.3-.3-2.5.2-3.5 1.5z\"/><path d=\"M1.5 17c.6-2.6 2.3-3.9 5-3.9 4 0 4.5 3 6.6 3.5 1.3.3 2.5-.2 3.5-1.5-.6 2.6-2.3 3.9-5 3.9-4 0-4.5-3-6.6-3.5-1.3-.3-2.5.2-3.5 1.5z\"/>",
  fa:{name:"Tailwind CSS", desc:"‏utility-first، پیکربندی، توکن طراحی، ‎variant‎، پلاگین، ‎RTL‎ و بهینه‌سازی باندل.",
      intro:"اولین واکنش تقریباً همه به ‎Tailwind‎ این است: «این که همان ‎inline style‎ است.» نیست، و تفاوتش دقیقاً همان چیزی است که ارزشش را می‌سازد — مجموعه‌ای محدود از مقادیر مجاز، یعنی یک سیستم طراحی که رعایتش اجباری است. این مسیر از همان جا شروع می‌کند، و بعد نشان می‌دهد کجا ‎Tailwind‎ واقعاً اذیت می‌کند."},
  en:{name:"Tailwind CSS", desc:"Utility-first, configuration, design tokens, variants, plugins, RTL and bundle optimisation.",
      intro:"Almost everyone's first reaction to Tailwind is: “this is just inline styles.” It is not, and the difference is exactly what makes it valuable — a constrained set of permitted values, which is to say a design system you cannot casually break. This track starts there, then shows honestly where Tailwind does get in the way."},
  ch:[
["01","01-why.html",0,18,80,"‏utility-first","چرا کلاس زیاد در ‎HTML‎ لزوماً بد نیست.","Utility-first","Why many classes in your HTML is not necessarily bad.","utility first atomic inline comparison"],
["02","02-setup.html",0,18,75,"راه‌اندازی","نصب، ‎CLI‎، و یکپارچگی با ‎Vite‎ و فریم‌ورک‌ها.","Getting set up","Installation, the CLI, and integrating with Vite and frameworks.","install cli vite postcss config"],
["03","03-core.html",0,18,85,"کلاس‌های پایه","فاصله، رنگ، متن، حاشیه و اندازه.","The core utilities","Spacing, colour, text, borders and sizing.","spacing color text border sizing scale"],
["04","04-layout.html",0,18,90,"چیدمان","‏Flexbox و ‎Grid‎ با کلاس‌های ‎Tailwind‎.","Layout","Flexbox and Grid the Tailwind way.","flex grid gap container layout"],
["05","05-responsive.html",0,18,85,"واکنش‌گرایی","‏breakpoint‌ها و رویکرد ‎mobile-first‎.","Responsive design","Breakpoints and the mobile-first approach.","responsive breakpoint sm md lg mobile first"],
["06","06-states.html",0,18,85,"حالت‌ها و ‎variant‎","‏hover، focus، ‎group‎، ‎peer‎ و ‎data-*‎.","States and variants","hover, focus, group, peer and data-* variants.","hover focus group peer variant data"],
["07","07-dark.html",0,18,80,"تم تاریک","دو راهبرد، و انتخاب درست.","Dark mode","Two strategies, and choosing correctly.","dark mode class media strategy"],
["08","08-config.html",0,18,95,"پیکربندی","گسترش تم، توکن طراحی و مقیاس سفارشی.","Configuration","Extending the theme, design tokens and custom scales.","config theme extend token scale"],
["09","09-components.html",0,18,90,"کامپوننت","‎@apply‎، تکرار، و اینکه کِی باید انتزاع بسازی.","Components","@apply, repetition, and when to abstract.","apply component extract cva clsx"],
["10","10-plugins.html",0,18,85,"پلاگین","پلاگین رسمی و نوشتن پلاگین خودت.","Plugins","Official plugins and writing your own.","plugin typography forms addutilities"],
["11","11-rtl.html",0,18,85,"‏RTL و فارسی","‏ps/pe به‌جای ‎pl/pr‎، و فونت فارسی.","RTL and Persian","ps/pe instead of pl/pr, and Persian fonts.","rtl logical ps pe direction font"],
["12","12-animation.html",0,18,80,"انیمیشن","‏transition، ‎animate‎ و ‎keyframes‎ سفارشی.","Animation","transition, animate and custom keyframes.","transition animate keyframes motion"],
["13","13-optimization.html",0,18,85,"بهینه‌سازی","چطور باندل نهایی چند کیلوبایت می‌ماند.","Optimisation","How the final bundle stays a few kilobytes.","purge content jit bundle size"],
["14","14-headless.html",0,18,85,"کامپوننت آماده","‏Headless UI، ‎Radix‎ و ‎shadcn‎ در کنار ‎Tailwind‎.","Component libraries","Headless UI, Radix and shadcn alongside Tailwind.","headless radix shadcn accessible component"],
["15","15-tradeoffs.html",0,18,80,"کجا اذیت می‌کند","خوانایی ‎HTML‎، بازبینی کد و تیم بزرگ.","Where it hurts","HTML readability, code review and large teams.","tradeoff readability review criticism"],
["16","16-cap1.html",0,5,70,"پروژهٔ ۱ — صفحهٔ فرود","یک صفحهٔ واکنش‌گرا با ‎Tailwind‎ خالص.","Project 1 — a landing page","A responsive page in pure Tailwind.","capstone landing",1],
["17","17-cap2.html",0,7,130,"پروژهٔ ۲ — تم سفارشی","توکن، تم تاریک، ‎RTL‎ و پلاگین خودت.","Project 2 — a custom theme","Tokens, dark mode, RTL and your own plugin.","capstone theme plugin",2],
["18","18-cap3.html",0,9,170,"پروژهٔ ۳ — داشبورد کامل","کامپوننت‌های تکرارشونده، دسترس‌پذیری و باندل کوچک.","Project 3 — a complete dashboard","Repeatable components, accessibility and a small bundle.","capstone dashboard",3]
]});

/* ═══════════════ Bootstrap ═══════════════ */
C.push({
  id:"70-bootstrap", dir:"70-bootstrap", accent:"#7952B3", cat:"frontend", pre:["67-css"],
  ico:"<rect x=\"2.6\" y=\"2.6\" width=\"18.8\" height=\"18.8\" rx=\"4.4\"/><path d=\"M8.6 17V7h4.2c1.9 0 2.9 1 2.9 2.4 0 1.2-.8 2.1-2 2.3v.1c1.5.1 2.5 1.1 2.5 2.5 0 1.7-1.2 2.7-3.3 2.7z\" stroke-linejoin=\"round\"/>",
  fa:{name:"Bootstrap", desc:"شبکه، کامپوننت آماده، ابزار ‎JavaScript‎، سفارشی‌سازی با ‎Sass‎ و ‎RTL‎.",
      intro:"‏Bootstrap سریع‌ترین راه رسیدن به یک رابط قابل‌قبول است و همین باعث می‌شود هم بی‌جهت تحقیر شود و هم بی‌جهت همه‌جا استفاده شود. برای پنل داخلی، ابزار سازمانی و نمونهٔ اولیه، هنوز انتخاب عاقلانه‌ای است. این مسیر آن را جدی یاد می‌دهد — و مهم‌تر، یاد می‌دهد چطور سفارشی‌اش کنی که شبیه ‎Bootstrap‎ نباشد."},
  en:{name:"Bootstrap", desc:"The grid, ready-made components, JavaScript widgets, Sass customisation and RTL.",
      intro:"Bootstrap is the fastest route to an acceptable interface, which is why it gets both unfair scorn and unwarranted ubiquity. For internal panels, admin tools and prototypes it is still the sensible choice. This track teaches it seriously — and, more importantly, teaches you to customise it so it does not look like Bootstrap."},
  ch:[
["01","01-why.html",0,18,75,"کِی ‎Bootstrap‎","کجا انتخاب درستی است و کجا نه.","When Bootstrap","Where it is the right choice and where it is not.","bootstrap when comparison admin prototype"],
["02","02-setup.html",0,18,70,"راه‌اندازی","‏CDN، ‎npm‎ و ساختار فایل‌ها.","Getting set up","CDN, npm and the file structure.","install cdn npm bundle scss"],
["03","03-layout.html",0,18,85,"‏container و شبکه","‏۱۲ ستون، ‎gutter‎ و ‎breakpoint‎.","Containers and the grid","Twelve columns, gutters and breakpoints.","container row col grid gutter breakpoint"],
["04","04-flex-utils.html",0,18,80,"کلاس‌های کمکی","فاصله، نمایش، ‎Flexbox‎ و متن.","Utility classes","Spacing, display, Flexbox and text.","utility spacing display flex text"],
["05","05-typography.html",0,18,75,"تایپوگرافی و رنگ","مقیاس متن، رنگ‌های معنایی و ‎badge‎.","Typography and colour","The type scale, semantic colours and badges.","typography color badge text muted"],
["06","06-components-1.html",0,18,90,"کامپوننت ۱","دکمه، کارت، ‎navbar‎، ‎alert‎.","Components 1","Buttons, cards, navbars, alerts.","button card navbar alert list group"],
["07","07-components-2.html",0,18,90,"کامپوننت ۲","‏table، ‎pagination‎، ‎breadcrumb‎، ‎spinner‎.","Components 2","Tables, pagination, breadcrumbs, spinners.","table pagination breadcrumb spinner progress"],
["08","08-forms.html",0,18,90,"فرم","ورودی، اعتبارسنجی و چیدمان فرم.","Forms","Inputs, validation and form layout.","form input validation floating label"],
["09","09-js-components.html",0,18,90,"کامپوننت تعاملی","مودال، ‎dropdown‎، ‎tooltip‎، ‎collapse‎، ‎toast‎.","Interactive components","Modals, dropdowns, tooltips, collapse, toasts.","modal dropdown tooltip collapse toast offcanvas"],
["10","10-js-api.html",0,18,80,"‏API جاوااسکریپت","کنترل کامپوننت‌ها از کد، و رویدادهایشان.","The JavaScript API","Controlling components from code, and their events.","javascript api event instance dispose"],
["11","11-customize.html",0,18,95,"سفارشی‌سازی","متغیرهای ‎Sass‎، و اینکه چطور شبیه ‎Bootstrap‎ نباشد.","Customisation","Sass variables, and how to stop looking like Bootstrap.","customize sass variable override theme"],
["12","12-rtl.html",0,18,80,"‏RTL و فارسی","نسخهٔ ‎RTL‎، فونت فارسی و نکات چیدمان.","RTL and Persian","The RTL build, Persian fonts and layout notes.","rtl bootstrap-rtl direction persian"],
["13","13-optimize.html",0,18,80,"بهینه‌سازی","فقط چیزی که لازم داری را وارد کن.","Optimisation","Import only what you use.","import tree shaking bundle size purge"],
["14","14-cap1.html",0,5,70,"پروژهٔ ۱ — پنل مدیریت","شبکه، ‎navbar‎، جدول و فرم.","Project 1 — an admin panel","Grid, navbar, tables and forms.","capstone admin",1],
["15","15-cap2.html",0,7,120,"پروژهٔ ۲ — تم سفارشی","متغیر ‎Sass‎، رنگ برند و ‎RTL‎.","Project 2 — a custom theme","Sass variables, brand colours and RTL.","capstone theme",2],
["16","16-cap3.html",0,9,160,"پروژهٔ ۳ — اپ چندصفحه‌ای","کامپوننت تعاملی، اعتبارسنجی و دسترس‌پذیری.","Project 3 — a multi-page app","Interactive components, validation and accessibility.","capstone app",3]
]});

/* ═══════════════ زبان Java ═══════════════ */
C.push({
  id:"71-java", dir:"71-java", accent:"#E76F00", cat:"backend",
  ico:"<path d=\"M9.4 17.6c-2.6.7-4.2 1.7-1 2.4 4 .9 9.6.5 11-.2M10.4 14.4c-2 .6-3 1.4-.7 2 3 .7 7.6.4 9-.2\" stroke-linecap=\"round\"/><path d=\"M13.6 3.4c1.8 2-2.4 3.4-2.4 5.4 0 1.8 3 2.6 3 4.4\" stroke-linecap=\"round\"/>",
  fa:{name:"زبان Java", desc:"‏JVM، شیءگرایی، ‎generic‎، ‎Stream‎، همروندی، ماژول و ابزار بیلد.",
      intro:"‏Java زبان سازمان‌هاست — نه چون بهترین است، بلکه چون پیش‌بینی‌پذیر است: کدی که امروز می‌نویسی، ده سال دیگر هم کامپایل می‌شود. این پایداری هزینه دارد (پرگویی) و سود دارد (اکوسیستم عظیم و ابزار بالغ). این مسیر ‎Java‎ مدرن را یاد می‌دهد، نه ‎Java‎ی سال ۲۰۰۸: ‎record‎، ‎var‎، ‎switch‎ الگویی و ‎virtual thread‎."},
  en:{name:"Java", desc:"The JVM, object orientation, generics, streams, concurrency, modules and build tooling.",
      intro:"Java is the language of institutions — not because it is the best, but because it is predictable: code you write today still compiles in ten years. That stability has a cost (verbosity) and a payoff (an enormous ecosystem and mature tooling). This track teaches modern Java, not 2008 Java: records, var, pattern-matching switch and virtual threads."},
  ch:[
["01","01-jvm.html",0,18,80,"‏JVM و اولین برنامه","کامپایل، ‎bytecode‎ و اجرا.","The JVM and your first program","Compilation, bytecode and execution.","jvm jdk jre bytecode classpath"],
["02","02-types.html",0,18,80,"نوع‌ها","اولیه در برابر شیء، ‎autoboxing‎ و ‎var‎.","Types","Primitives versus objects, autoboxing and var.","primitive wrapper autoboxing var literal"],
["03","03-oop-1.html",0,18,85,"شیءگرایی ۱","کلاس، سازنده، ‎encapsulation‎.","OOP 1","Classes, constructors and encapsulation.","class constructor field encapsulation"],
["04","04-oop-2.html",0,18,90,"شیءگرایی ۲","وراثت، ‎interface‎، ‎abstract‎ و چندریختی.","OOP 2","Inheritance, interfaces, abstract classes and polymorphism.","inheritance interface abstract polymorphism"],
["05","05-records.html",0,18,80,"‏record و ‎sealed‎","‏Java مدرن: داده بدون پرگویی.","Records and sealed types","Modern Java: data without ceremony.","record sealed immutable equals"],
["06","06-generics.html",0,18,90,"‏generic","‏wildcard، ‎bound‎ و ‎type erasure‎.","Generics","Wildcards, bounds and type erasure.","generic wildcard bound erasure"],
["07","07-collections.html",0,18,90,"مجموعه‌ها","‏List، Map، Set و انتخاب درست.","Collections","List, Map, Set and choosing correctly.","collection list map set comparator"],
["08","08-streams.html",0,18,95,"‏Stream و ‎lambda‎","برنامه‌نویسی تابعی در ‎Java‎.","Streams and lambdas","Functional programming in Java.","stream lambda collector optional map filter"],
["09","09-optional.html",0,18,75,"‏Optional","‏null بدون ‎NullPointerException‎.","Optional","Absence without a NullPointerException.","optional null npe orelse"],
["10","10-exceptions.html",0,18,80,"خطا","‏checked و ‎unchecked‎، و ‎try-with-resources‎.","Exceptions","Checked and unchecked, and try-with-resources.","exception checked try-with-resources finally"],
["11","11-io.html",0,18,80,"فایل و ‎I/O‎","‏NIO، مسیر، خواندن و نوشتن.","Files and I/O","NIO, paths, reading and writing.","nio path files reader stream"],
["12","12-concurrency-1.html",0,18,95,"همروندی ۱","نخ، ‎executor‎ و ‎synchronized‎.","Concurrency 1","Threads, executors and synchronized.","thread executor synchronized runnable"],
["13","13-concurrency-2.html",0,18,95,"همروندی ۲","‏CompletableFuture و ‎virtual thread‎.","Concurrency 2","CompletableFuture and virtual threads.","completablefuture virtual thread loom"],
["14","14-modules.html",0,18,75,"ماژول و پکیج","‏JPMS و سازماندهی کد.","Modules and packages","JPMS and organising code.","module jpms package visibility"],
["15","15-build.html",0,18,85,"‏Maven و ‎Gradle‎","وابستگی، ‎lifecycle‎ و چندماژولی.","Maven and Gradle","Dependencies, lifecycles and multi-module builds.","maven gradle pom dependency lifecycle"],
["16","16-testing.html",0,18,85,"تست","‏JUnit 5، ‎Mockito‎ و ‎assertion‎ خوانا.","Testing","JUnit 5, Mockito and readable assertions.","junit mockito assertj parameterized"],
["17","17-jvm-tuning.html",0,18,85,"‏JVM در عمل","حافظه، ‎GC‎ و پروفایل.","The JVM in practice","Memory, garbage collection and profiling.","heap gc jvm flags profiling jfr"],
["18","18-cap1.html",0,5,90,"پروژهٔ ۱ — ابزار خط فرمان","خواندن فایل، پردازش و تست.","Project 1 — a CLI tool","Reading files, processing and tests.","capstone cli",1],
["19","19-cap2.html",0,7,150,"پروژهٔ ۲ — کتابخانه","‏API تمیز، ‎generic‎ و انتشار ‎Maven‎.","Project 2 — a library","A clean API, generics and Maven publishing.","capstone library",2],
["20","20-cap3.html",0,9,200,"پروژهٔ ۳ — پردازشگر همروند","‏executor، ‎virtual thread‎ و اندازه‌گیری.","Project 3 — a concurrent processor","Executors, virtual threads and measurement.","capstone concurrency",3]
]});

/* ═══════════════ Spring Boot ═══════════════ */
C.push({
  id:"72-spring-boot", dir:"72-spring-boot", accent:"#6DB33F", cat:"backend", pre:["71-java"], soft:["05-sql"],
  ico:"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 14.6c2.6 1.6 5.6 1.2 7-.6 1.6-2 .8-4.6-1.4-5.4-1.8-.7-3.2.4-3 1.8.2 1.3 1.8 1.4 2.6.6\" stroke-linecap=\"round\"/>",
  fa:{name:"Spring Boot", desc:"‏DI، ‎REST‎، ‎JPA‎، امنیت، تست، ‎cache‎، پیام و استقرار — فریم‌ورک غالب دنیای ‎Java‎.",
      intro:"‏Spring پیش از ‎Boot‎ به پیکربندی ‎XML‎ بی‌پایان معروف بود. ‎Boot‎ یک تصمیم گرفت: پیش‌فرض عاقلانه بگذار و فقط چیزی را که فرق دارد بنویس. نتیجه‌اش این است که در پنج دقیقه یک سرویس داری — و در ماه ششم، وقتی باید بفهمی آن پیش‌فرض از کجا آمده، این مسیر به کارت می‌آید."},
  en:{name:"Spring Boot", desc:"DI, REST, JPA, security, testing, caching, messaging and deployment — the dominant Java framework.",
      intro:"Before Boot, Spring was famous for endless XML configuration. Boot made one decision: supply sensible defaults and only write what differs. The result is a running service in five minutes — and in month six, when you need to know where a default came from, this track is what helps."},
  ch:[
["01","01-why.html",0,18,80,"چرا ‎Spring Boot‎","‏auto-configuration و ‎starter‎.","Why Spring Boot","Auto-configuration and starters.","spring boot starter autoconfiguration"],
["02","02-di.html",0,18,95,"تزریق وابستگی","‏bean، ‎context‎، دامنه و چرخهٔ عمر.","Dependency injection","Beans, the context, scopes and lifecycles.","bean context inject component scope"],
["03","03-config.html",0,18,85,"پیکربندی","‏properties، ‎profile‎ و ‎@ConfigurationProperties‎.","Configuration","Properties, profiles and @ConfigurationProperties.","properties yaml profile configurationproperties"],
["04","04-web.html",0,18,85,"‏Spring Web","کنترلر، مسیریابی و ‎REST‎.","Spring Web","Controllers, routing and REST.","controller restcontroller mapping requestbody"],
["05","05-validation.html",0,18,80,"اعتبارسنجی و ‎DTO‎","‏Bean Validation و جدا کردن مدل انتقال.","Validation and DTOs","Bean Validation and separating the transport model.","validation dto mapstruct valid"],
["06","06-errors.html",0,18,80,"مدیریت خطا","‏@ControllerAdvice و پاسخ یکدست.","Error handling","@ControllerAdvice and consistent responses.","exception handler controlleradvice problem"],
["07","07-jpa-1.html",0,18,95,"‏JPA ۱","‏entity، رابطه و ‎repository‎.","JPA 1","Entities, relationships and repositories.","jpa entity repository relation mapping"],
["08","08-jpa-2.html",0,18,100,"‏JPA ۲","‏N+1، ‎fetch‎، ‎lazy‎ و کوئری بهینه.","JPA 2","N+1, fetch strategies, laziness and efficient queries.","n+1 fetch lazy join entitygraph"],
["09","09-migrations.html",0,18,75,"مهاجرت پایگاه‌داده","‏Flyway و ‎Liquibase‎.","Database migrations","Flyway and Liquibase.","flyway liquibase migration versioning"],
["10","10-security-1.html",0,18,95,"‏Spring Security ۱","زنجیرهٔ فیلتر، احراز هویت و ‎UserDetails‎.","Spring Security 1","The filter chain, authentication and UserDetails.","security filter chain authentication userdetails"],
["11","11-security-2.html",0,18,95,"‏Spring Security ۲","‏JWT، ‎OAuth2‎ و مجوز روش‌محور.","Spring Security 2","JWT, OAuth2 and method-level authorisation.","jwt oauth2 preauthorize resource server"],
["12","12-testing.html",0,18,95,"تست","‏slice test، ‎MockMvc‎ و ‎Testcontainers‎.","Testing","Slice tests, MockMvc and Testcontainers.","springboottest mockmvc testcontainers slice"],
["13","13-caching.html",0,18,80,"کش","‎@Cacheable‎ و ‎Redis‎.","Caching","@Cacheable and Redis.","cache cacheable redis eviction"],
["14","14-async.html",0,18,85,"کار ناهمگام","‎@Async‎، ‎@Scheduled‎ و صف.","Async work","@Async, @Scheduled and queues.","async scheduled executor rabbitmq kafka"],
["15","15-observability.html",0,18,85,"مشاهده‌پذیری","‏Actuator، ‎Micrometer‎ و ‎trace‎.","Observability","Actuator, Micrometer and tracing.","actuator micrometer prometheus tracing"],
["16","16-deploy.html",0,18,85,"استقرار","‏JAR اجرایی، داکر و پیکربندی ‎production‎.","Deployment","Executable JARs, Docker and production configuration.","jar docker native image profile"],
["17","17-cap1.html",0,5,90,"پروژهٔ ۱ — ‎REST API‎","‏CRUD با ‎JPA‎ و اعتبارسنجی.","Project 1 — a REST API","CRUD with JPA and validation.","capstone crud",1],
["18","18-cap2.html",0,7,160,"پروژهٔ ۲ — سرویس امن","‏JWT، نقش و تست یکپارچه.","Project 2 — a secured service","JWT, roles and integration tests.","capstone security",2],
["19","19-cap3.html",0,9,220,"پروژهٔ ۳ — سرویس ‎production‎","کش، صف، مشاهده‌پذیری و استقرار خودکار.","Project 3 — a production service","Caching, queues, observability and automated deployment.","capstone production",3]
]});

/* ═══════════════ زبان PHP ═══════════════ */
C.push({
  id:"73-php", dir:"73-php", accent:"#777BB4", cat:"backend",
  ico:"<ellipse cx=\"12\" cy=\"12\" rx=\"9.6\" ry=\"5.6\"/><path d=\"M7.4 14.6 8.8 9h2.2c1 0 1.5.6 1.3 1.6-.2 1-.9 1.6-1.9 1.6H9M13.6 14.6 15 9h2.2c1 0 1.5.6 1.3 1.6-.2 1-.9 1.6-1.9 1.6h-1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  fa:{name:"زبان PHP", desc:"‏PHP 8: نوع، ‎enum‎، شیءگرایی، ‎Composer‎، ‎PSR‎، تست و امنیت.",
      intro:"بدنامی ‎PHP‎ مال پانزده سال پیش است و منصفانه هم بود. اما ‎PHP 8‎ زبان دیگری است: نوع‌دار، سریع، با ‎JIT‎ و اکوسیستمی منظم که ‎Composer‎ و استانداردهای ‎PSR‎ ساخته‌اند. این مسیر از ‎PHP‎ امروز شروع می‌کند، نه از آنچه در ذهن‌ها مانده — و روی نوشتن ‎PHP‎ی تأکید دارد که بشود تست و نگهداری‌اش کرد."},
  en:{name:"PHP", desc:"PHP 8: types, enums, object orientation, Composer, PSRs, testing and security.",
      intro:"PHP's bad reputation was earned fifteen years ago, and fairly. But PHP 8 is a different language: typed, fast, JIT-compiled, with an orderly ecosystem built by Composer and the PSR standards. This track starts from PHP as it is today, not as it is remembered — and insists on PHP you can test and maintain."},
  ch:[
["01","01-modern.html",0,18,80,"‏PHP امروز","چه چیزی از ‎5‎ به ‎8‎ عوض شد و چرا مهم است.","PHP today","What changed from 5 to 8, and why it matters.","php8 jit performance history"],
["02","02-basics.html",0,18,80,"مبانی","متغیر، آرایه، رشته و عملگرها.","The basics","Variables, arrays, strings and operators.","variable array string operator"],
["03","03-types.html",0,18,85,"نوع‌ها","اعلان نوع، ‎union‎، ‎nullable‎ و ‎strict_types‎.","Types","Type declarations, unions, nullables and strict_types.","type union nullable strict declare"],
["04","04-functions.html",0,18,80,"تابع","آرگومان نام‌دار، ‎spread‎، ‎closure‎ و ‎arrow fn‎.","Functions","Named arguments, spread, closures and arrow functions.","function named argument closure arrow"],
["05","05-oop-1.html",0,18,90,"شیءگرایی ۱","کلاس، سازنده ارتقایافته، ‎readonly‎.","OOP 1","Classes, constructor promotion and readonly.","class constructor promotion readonly property"],
["06","06-oop-2.html",0,18,90,"شیءگرایی ۲","‏interface، ‎trait‎، ‎abstract‎ و ‎enum‎.","OOP 2","Interfaces, traits, abstract classes and enums.","interface trait abstract enum static"],
["07","07-errors.html",0,18,80,"خطا","‏exception، ‎error‎ و ‎try/catch/finally‎.","Errors","Exceptions, errors and try/catch/finally.","exception error throwable finally"],
["08","08-arrays.html",0,18,85,"آرایه و تابع‌های آن","‏map، ‎filter‎، ‎reduce‎ و ‎spread‎.","Arrays and their functions","map, filter, reduce and spread.","array map filter reduce usort"],
["09","09-composer.html",0,18,80,"‏Composer و ‎PSR‎","وابستگی، ‎autoload‎ و استانداردها.","Composer and PSRs","Dependencies, autoloading and the standards.","composer autoload psr4 packagist"],
["10","10-http.html",0,18,85,"‏PHP و ‎HTTP‎","درخواست، پاسخ، ‎session‎ و کوکی.","PHP and HTTP","Requests, responses, sessions and cookies.","request response session cookie superglobal"],
["11","11-database.html",0,18,90,"پایگاه‌داده","‏PDO، ‎prepared statement‎ و تراکنش.","Databases","PDO, prepared statements and transactions.","pdo prepared transaction mysql"],
["12","12-security.html",0,18,95,"امنیت","تزریق ‎SQL‎، ‎XSS‎، ‎CSRF‎ و رمز عبور.","Security","SQL injection, XSS, CSRF and password hashing.","injection xss csrf password_hash sanitize"],
["13","13-files.html",0,18,75,"فایل و آپلود","خواندن، نوشتن و آپلود امن.","Files and uploads","Reading, writing and safe uploads.","file upload stream mime validation"],
["14","14-testing.html",0,18,85,"تست","‏PHPUnit، ‎Pest‎ و کد تست‌پذیر.","Testing","PHPUnit, Pest and testable code.","phpunit pest mock coverage"],
["15","15-tooling.html",0,18,80,"ابزار کیفیت","‏PHPStan، ‎Rector‎ و ‎CS Fixer‎.","Quality tooling","PHPStan, Rector and CS Fixer.","phpstan psalm rector cs-fixer static analysis"],
["16","16-cap1.html",0,5,80,"پروژهٔ ۱ — ابزار خط فرمان","پردازش فایل با نوع‌دهی کامل.","Project 1 — a CLI tool","File processing with full typing.","capstone cli",1],
["17","17-cap2.html",0,7,140,"پروژهٔ ۲ — ‎API‎ بدون فریم‌ورک","مسیریابی، ‎PDO‎ و تست — دستی.","Project 2 — an API with no framework","Routing, PDO and tests — by hand.","capstone api vanilla",2],
["18","18-cap3.html",0,9,180,"پروژهٔ ۳ — کتابخانهٔ ‎Composer‎","‏PSR، تست، تحلیل ایستا و انتشار.","Project 3 — a Composer library","PSRs, tests, static analysis and publishing.","capstone package",3]
]});

/* ═══════════════ Laravel ═══════════════ */
C.push({
  id:"74-laravel", dir:"74-laravel", accent:"#FF2D20", cat:"backend", pre:["73-php"], soft:["53-mysql-mariadb"],
  ico:"<path d=\"M3 7.4 8.2 4.6l5.2 2.8v5.4l5.2 2.8-5.2 2.8-5.2-2.8V10.2z\" stroke-linejoin=\"round\"/><path d=\"M8.2 10.2 13.4 7.4M8.2 10.2v5.4\" stroke-linejoin=\"round\" opacity=\".6\"/>",
  fa:{name:"Laravel", desc:"‏Eloquent، مسیریابی، احراز هویت، صف، رویداد، تست و استقرار — با اکوسیستم کاملش.",
      intro:"‏Laravel چیزی را ساخت که کمتر فریم‌ورکی دارد: یک اکوسیستم کامل که همه‌چیزش با هم جور است — از صف و زمان‌بند تا احراز هویت و تست. قیمتش این است که باید «راه ‎Laravel‎» را بپذیری. این مسیر آن راه را دقیق نشان می‌دهد و توضیح می‌دهد پشت هر جادویی چه می‌گذرد، تا وقتی چیزی خراب شد بدانی کجا را نگاه کنی."},
  en:{name:"Laravel", desc:"Eloquent, routing, authentication, queues, events, testing and deployment — with its full ecosystem.",
      intro:"Laravel built something few frameworks have: a complete ecosystem where everything fits together — queues, schedulers, auth, testing. The price is accepting “the Laravel way”. This track shows that way precisely and explains what sits behind each piece of magic, so that when something breaks you know where to look."},
  ch:[
["01","01-architecture.html",0,18,85,"معماری و چرخهٔ درخواست","از ‎index.php‎ تا پاسخ، مرحله‌به‌مرحله.","Architecture and the request lifecycle","From index.php to the response, step by step.","lifecycle kernel container provider bootstrap"],
["02","02-container.html",0,18,90,"‏service container","تزریق وابستگی و ‎binding‎ — قلب ‎Laravel‎.","The service container","Dependency injection and binding — the heart of Laravel.","container binding singleton resolve provider"],
["03","03-routing.html",0,18,80,"مسیریابی","مسیر، گروه، ‎middleware‎ و ‎model binding‎.","Routing","Routes, groups, middleware and model binding.","route group middleware binding resource"],
["04","04-controllers.html",0,18,80,"کنترلر و درخواست","‏Form Request و اعتبارسنجی.","Controllers and requests","Form Requests and validation.","controller formrequest validation invokable"],
["05","05-eloquent-1.html",0,18,95,"‏Eloquent ۱","مدل، ‎cast‎، ‎scope‎ و ‎accessor‎.","Eloquent 1","Models, casts, scopes and accessors.","eloquent model cast scope accessor mutator"],
["06","06-eloquent-2.html",0,18,100,"‏Eloquent ۲","رابطه‌ها، ‎eager loading‎ و ‎N+1‎.","Eloquent 2","Relationships, eager loading and N+1.","relationship hasmany belongsto eager n+1"],
["07","07-migrations.html",0,18,80,"مهاجرت، ‎seeder‎ و ‎factory‎","شِمای نسخه‌بندی‌شده و دادهٔ آزمایشی.","Migrations, seeders and factories","Versioned schema and test data.","migration seeder factory faker schema"],
["08","08-blade.html",0,18,80,"‏Blade","قالب، ‎component‎ و ‎slot‎.","Blade","Templates, components and slots.","blade component slot directive layout"],
["09","09-auth.html",0,18,95,"احراز هویت","‏Breeze، ‎Sanctum‎، ‎guard‎ و نشست.","Authentication","Breeze, Sanctum, guards and sessions.","auth breeze sanctum guard session"],
["10","10-authorization.html",0,18,85,"مجوز","‏policy، ‎gate‎ و نقش.","Authorisation","Policies, gates and roles.","policy gate authorize role permission"],
["11","11-api.html",0,18,85,"‏API","‏API resource، نسخه‌گذاری و ‎rate limit‎.","APIs","API resources, versioning and rate limiting.","api resource collection versioning throttle"],
["12","12-queues.html",0,18,95,"صف و کار پس‌زمینه","‏job، ‎worker‎، ‎Horizon‎ و تلاش مجدد.","Queues and background jobs","Jobs, workers, Horizon and retries.","queue job horizon retry failed batch"],
["13","13-events.html",0,18,85,"رویداد و ‎listener‎","جدا کردن اثرات جانبی از منطق اصلی.","Events and listeners","Separating side effects from core logic.","event listener observer broadcast"],
["14","14-scheduling.html",0,18,75,"زمان‌بندی","‏scheduler و کار دوره‌ای.","Scheduling","The scheduler and recurring work.","schedule cron task withoutoverlapping"],
["15","15-cache.html",0,18,80,"کش و جلسه","‏Redis، ‎tag‎ و باطل‌سازی.","Caching and sessions","Redis, tags and invalidation.","cache redis tag session store"],
["16","16-testing.html",0,18,95,"تست","‏Pest، تست ویژگی، ‎factory‎ و پایگاه‌دادهٔ تست.","Testing","Pest, feature tests, factories and a test database.","pest phpunit feature refreshdatabase mock"],
["17","17-performance.html",0,18,85,"کارایی","‏N+1، ایندکس، ‎cache‎ و ‎Octane‎.","Performance","N+1, indexes, caching and Octane.","performance octane debugbar telescope"],
["18","18-deploy.html",0,18,85,"استقرار","‏Nginx، ‎PHP-FPM‎، داکر و ‎queue worker‎.","Deployment","Nginx, PHP-FPM, Docker and queue workers.","deploy nginx fpm docker supervisor envoyer"],
["19","19-cap1.html",0,5,90,"پروژهٔ ۱ — وبلاگ","‏CRUD، احراز هویت و آپلود.","Project 1 — a blog","CRUD, authentication and uploads.","capstone blog",1],
["20","20-cap2.html",0,7,160,"پروژهٔ ۲ — ‎API‎ فروشگاه","سبد، سفارش، صف، رویداد و اعلان.","Project 2 — a shop API","Cart, orders, queues, events and notifications.","capstone shop",2],
["21","21-cap3.html",0,9,220,"پروژهٔ ۳ — سامانهٔ چندمستأجری","مجوز پیچیده، کش، صف و استقرار کامل.","Project 3 — a multi-tenant system","Complex authorisation, caching, queues and full deployment.","capstone multitenant",3]
]});

})();
