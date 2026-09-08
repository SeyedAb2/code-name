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
["01","01-intro.html",1,12,55,"مسئله‌ای که داکر حل می‌کند","درد محیط‌های ناهمگون، و مدل ذهنی درست از image / container / volume.","The problem Docker solves","Environment drift, and a correct mental model of image / container / volume.","container image volume registry namespace cgroup vm کانتینر ایمیج لایه"],
["02","02-install.html",0,12,40,"نصب روی ویندوز، لینوکس و WSL2","Engine در برابر Desktop، راه‌اندازی WSL2 و رفع خطاهای رایج نصب.","Installing on Windows, Linux and WSL2","Engine vs Desktop, WSL2 setup, and the usual installation failures.","install wsl2 desktop engine systemd نصب"],
["03","03-run.html",0,12,50,"اجرا، لاگ، exec و پورت","چرخهٔ کامل کار با یک کانتینر زنده: run، ps، logs، exec، stop، rm.","Run, logs, exec and ports","The full loop with a live container: run, ps, logs, exec, stop, rm.","run ps logs exec stop rm port publish detach tty"],
["04","04-dockerfile.html",0,12,60,"نوشتن Dockerfile؛ لایه‌ها و کش","هر دستور یک لایه است. ترتیب دستورها یعنی تفاوت بیلد ۲ ثانیه‌ای و ۲ دقیقه‌ای.","Writing a Dockerfile; layers and cache","Every instruction is a layer. Order is the difference between a 2-second and a 2-minute build.","dockerfile from run copy cmd entrypoint layer cache dockerignore"],
["05","05-multistage.html",0,12,50,"multi-stage build و کوچک‌کردن ایمیج","جدا کردن محیط بیلد از محیط اجرا؛ از ۹۰۰ مگابایت به ۸۰ مگابایت.","Multi-stage builds and slim images","Separating build-time from run-time; from 900 MB down to 80 MB.","multi-stage builder alpine distroless slim size"],
["06","06-data.html",0,12,55,"داده: volume، bind mount، پشتیبان‌گیری","کانتینر فناپذیر است، داده نباید باشد. سه راه نگه‌داشتن داده و یکی که درست است.","Data: volumes, bind mounts, backups","Containers are disposable; your data must not be. Three ways to persist, one that is right.","volume bind mount tmpfs backup restore دیتا"],
["07","07-network.html",0,12,55,"شبکه: bridge، DNS داخلی، publish","چرا localhost داخل کانتینر خودِ کانتینر است، و کانتینرها چطور همدیگر را پیدا می‌کنند.","Networking: bridge, internal DNS, publish","Why localhost inside a container is the container, and how containers find each other.","network bridge host dns publish expose port mapping"],
["08","08-compose.html",0,12,65,"Docker Compose","چند سرویس، یک فایل، یک دستور. از توسعه تا production.","Docker Compose","Many services, one file, one command — from development to production.","compose yaml services depends_on profiles override"],
["09","09-env-secrets.html",0,12,45,"متغیر محیطی و secret","پیکربندی بیرون از ایمیج بماند؛ رمز هرگز داخل ایمیج نرود.","Environment variables and secrets","Configuration stays outside the image; secrets never go inside it.","env environment secret dotenv config"],
["10","10-health.html",0,12,45,"healthcheck، restart policy، لاگ","کانتینری که بالا است اما کار نمی‌کند؛ و چطور داکر خودش بفهمد.","Healthchecks, restart policies, logging","A container that is up but not working — and how Docker can tell.","healthcheck restart unless-stopped log driver rotation"],
["11","11-registry.html",0,12,45,"registry و push","تگ‌گذاری معنادار، push به Docker Hub و registry خصوصی.","Registries and pushing","Meaningful tagging, pushing to Docker Hub and to a private registry.","registry push pull tag login digest"],
["12","12-debug.html",0,12,55,"عیب‌یابی: exit code، OOM، پر شدن دیسک","کانتینر مُرد. حالا چه؟ روش سیستماتیک خواندن نشانه‌ها.","Troubleshooting: exit codes, OOM, disk","The container died. Now what? A systematic way to read the symptoms.","exit code 137 oom prune disk inspect events"],
["13","13-security.html",0,12,50,"امنیت: non-root، read-only، محدودیت منابع","کانتینر ماشین مجازی نیست. مرزها را خودت باید بکشی.","Security: non-root, read-only, resource limits","A container is not a VM. You draw the boundaries yourself.","non-root user cap-drop read-only seccomp memory cpu limit"],
["14","14-deploy.html",0,12,60,"استقرار روی VPS","از لپ‌تاپ تا سرور واقعی: انتقال ایمیج، reverse proxy، به‌روزرسانی بدون قطعی.","Deploying to a VPS","Laptop to real server: shipping the image, reverse proxy, zero-downtime updates.","vps deploy ssh proxy nginx tls update rollback"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — یک سرویس، یک ایمیج","یک اپ ساده را خودت بسته‌بندی کن و روی پورت دلخواه بالا بیاور.","Project 1 — one service, one image","Package a simple app yourself and bring it up on a port of your choosing.","capstone project simple",1],
["16","16-cap2.html",0,7,90,"پروژهٔ ۲ — اپ + پایگاه‌داده با Compose","دو سرویس، یک شبکهٔ داخلی، والیوم ماندگار و پیکربندی از بیرون.","Project 2 — app + database with Compose","Two services, an internal network, a persistent volume and external configuration.","capstone compose postgres volume",2],
["17","17-cap3.html",0,9,150,"پروژهٔ ۳ — استقرار سه‌سرویسه روی سرور واقعی","اپ، پایگاه‌داده و پروکسی با healthcheck، پشتیبان‌گیری شبانه و به‌روزرسانی بدون قطعی.","Project 3 — three-service deployment on a real server","App, database and proxy with healthchecks, nightly backups and zero-downtime updates.","capstone production backup proxy healthcheck",3]
]});

/* ═══════════════ ۰۲ — Nginx ═══════════════ */
C.push({
  id:"02-nginx", dir:"02-nginx", accent:"#009639", cat:"infra",
  ico:'<path d="M12 2.4 20.5 7v10L12 21.6 3.5 17V7z"/><path d="M9 16V9l6 6.4V9" stroke-linecap="round"/>',
  fa:{name:"انجین‌ایکس", desc:"از سرو کردن یک فایل استاتیک تا gateway کامل: منطق location، reverse proxy، TLS، کش و rate limiting.",
      intro:"Nginx ساده به نظر می‌رسد تا وقتی اولین location را بنویسی و کار نکند. این مسیر منطق واقعی پیکربندی را باز می‌کند: چه چیزی به چه چیزی می‌رسد، با چه اولویتی، و آن ۵۰۲ از کجا می‌آید."},
  en:{name:"Nginx", desc:"From serving one static file to a full gateway: location matching, reverse proxy, TLS, caching and rate limiting.",
      intro:"Nginx looks simple until your first location block does not match. This track opens up the real configuration logic: what matches what, in which order, and where that 502 comes from."},
  ch:[
["01","01-install.html",0,12,40,"نصب و ساختار فایل‌ها","کجا نصب می‌شود و کدام فایل را باید دست بزنی.","Installation and file layout","Where it installs and which file you are meant to edit.","nginx install conf.d sites-available"],
["02","02-syntax.html",0,12,45,"دستور زبان کانفیگ و context‌ها","directive، block، و وراثت بین context‌ها.","Config syntax and contexts","Directives, blocks, and inheritance between contexts.","directive context http server location inheritance"],
["03","03-server-block.html",0,12,45,"server block و virtual host","چند سایت روی یک IP و یک پورت.","Server blocks and virtual hosts","Many sites on one IP and one port.","server_name virtual host default_server sni"],
["04","04-location.html",0,12,55,"منطق location و اولویت‌ها","پیچیده‌ترین بخش Nginx، با جدول تصمیم.","Location matching and priority","The trickiest part of Nginx, with a decision table.","location regex prefix priority try_files"],
["05","05-static.html",0,12,45,"فایل استاتیک، کش مرورگر، فشرده‌سازی","gzip، brotli و هدرهای کش.","Static files, browser cache, compression","gzip, brotli and cache headers.","gzip brotli expires cache-control root alias"],
["06","06-proxy.html",0,12,55,"reverse proxy و هدرها","X-Forwarded-For و چیزهایی که اپ پشت پروکسی از دست می‌دهد.","Reverse proxy and headers","X-Forwarded-For and what your app loses behind a proxy.","proxy_pass proxy_set_header x-forwarded-for upstream"],
["07","07-lb.html",0,12,50,"load balancing و upstream","round-robin، least_conn، health و sticky session.","Load balancing and upstreams","round-robin, least_conn, health checks and sticky sessions.","upstream least_conn ip_hash keepalive"],
["08","08-tls.html",0,12,55,"HTTPS، Let's Encrypt، تمدید خودکار","گواهی واقعی در پنج دقیقه و تمدید بی‌دردسر.","HTTPS, Let's Encrypt, auto-renewal","A real certificate in five minutes and painless renewal.","ssl tls certbot letsencrypt hsts redirect"],
["09","09-ratelimit.html",0,12,45,"rate limiting و محافظت","limit_req، limit_conn و محافظت از فرم ورود.","Rate limiting and protection","limit_req, limit_conn and protecting a login form.","limit_req limit_conn burst nodelay"],
["10","10-logs.html",0,12,40,"لاگ و آنالیز","فرمت سفارشی، چرخش، و پیدا کردن کندترین مسیر.","Logs and analysis","Custom formats, rotation, and finding the slowest route.","access_log error_log log_format logrotate"],
["11","11-ws-upload.html",0,12,45,"WebSocket و آپلود حجیم","هدر Upgrade و client_max_body_size.","WebSockets and large uploads","The Upgrade header and client_max_body_size.","websocket upgrade client_max_body_size buffering"],
["12","12-tuning.html",0,12,50,"tuning: worker، buffer، timeout","عددهایی که واقعاً باید عوض شوند و آن‌هایی که نباید.","Tuning: workers, buffers, timeouts","The numbers worth changing and the ones that are not.","worker_processes worker_connections buffer timeout sendfile"],
["13","13-debug.html",0,12,50,"عیب‌یابی ۴۰۳/۵۰۲/۵۰۴","هر کد خطا یک علت مشخص دارد.","Debugging 403/502/504","Each status code points at a specific cause.","403 502 504 permission upstream timeout selinux"],
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
["01","01-shell.html",0,12,50,"شل و فایل‌سیستم","مسیر، ناوبری، و اینکه هر چیزی فایل است.","The shell and the filesystem","Paths, navigation, and everything-is-a-file.","bash ls cd path fhs"],
["02","02-perms.html",0,12,50,"کاربر، گروه، مجوز","chmod، chown و اینکه ۷۵۵ یعنی چه.","Users, groups, permissions","chmod, chown, and what 755 actually means.","chmod chown umask sudo group"],
["03","03-systemd.html",0,12,55,"پردازه و سرویس (systemd)","unit، سرویس خودت، و چرا بالا نمی‌آید.","Processes and services (systemd)","Units, your own service, and why it will not start.","systemd systemctl unit service journal"],
["04","04-packages.html",0,12,40,"بسته و ریپازیتوری","apt و dnf بدون خراب کردن سیستم.","Packages and repositories","apt and dnf without breaking the system.","apt dnf repository gpg key"],
["05","05-text.html",0,12,55,"ابزار متن: grep، awk، sed","استخراج جواب از لاگ در یک خط.","Text tools: grep, awk, sed","Pulling answers out of a log in one line.","grep awk sed cut sort uniq pipe"],
["06","06-bash.html",0,12,55,"اسکریپت‌نویسی bash","اسکریپتی که وقتی خطا داد، متوقف شود.","Bash scripting","Scripts that stop when something goes wrong.","bash set euo pipefail function trap"],
["07","07-net.html",0,12,55,"مدل شبکه در عمل: ip، route، DNS","آدرس، مسیر، نام — سه لایه‌ای که همیشه یکی‌شان خراب است.","Networking in practice: ip, route, DNS","Address, route, name — one of the three is always the problem.","ip route dns resolv netplan"],
["08","08-netdebug.html",0,12,55,"عیب‌یابی: ping، traceroute، ss، tcpdump","از «کار نمی‌کند» تا «این پورت بسته است».","Debugging: ping, traceroute, ss, tcpdump","From “it does not work” to “that port is closed”.","ping traceroute ss netstat tcpdump mtr dig"],
["09","09-firewall.html",0,12,50,"فایروال: nftables / ufw","قانون بنویس، خودت را بیرون نیانداز.","Firewalls: nftables / ufw","Write rules without locking yourself out.","ufw nftables iptables firewall rule"],
["10","10-ssh.html",0,12,50,"SSH، کلید، tunnel، ssh/config","ورود بی‌رمز، تونل، و پیکربندی تمیز.","SSH, keys, tunnels, ssh/config","Passwordless login, tunnels, and a clean config.","ssh key tunnel port forward config agent"],
["11","11-logs.html",0,12,40,"لاگ و journald","journalctl و لاگ‌های ماندگار.","Logs and journald","journalctl and persistent logs.","journalctl syslog rsyslog logrotate"],
["12","12-monitor.html",0,12,45,"مانیتورینگ منابع و دیسک","CPU، RAM، I/O و دیسکی که پر شد.","Resource and disk monitoring","CPU, RAM, I/O and the disk that filled up.","top htop df du iostat free"],
["13","13-cron.html",0,12,40,"cron و زمان‌بندی","cron و systemd timer، و چرا اجرا نشد.","cron and scheduling","cron and systemd timers, and why it did not run.","cron crontab timer at"],
["14","14-hardening.html",0,12,55,"سخت‌سازی سرور","حداقل کارهایی که قبل از production باید کرد.","Server hardening","The minimum you must do before production.","hardening fail2ban ssh root sysctl"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — کاربر، سرویس، فایروال","یک سرویس کوچک بساز، با کاربر اختصاصی اجرا کن و پورتش را باز کن.","Project 1 — user, service, firewall","Build a small service, run it as its own user and open its port.","capstone service",1],
["16","16-cap2.html",0,7,90,"پروژهٔ ۲ — اسکریپت پشتیبان‌گیری زمان‌بندی‌شده","اسکریپت مقاوم، لاگ‌گیری، چرخش نسخه‌ها و اجرای شبانه.","Project 2 — a scheduled backup script","A resilient script with logging, rotation and a nightly run.","capstone backup cron",2],
["17","17-cap3.html",0,9,150,"پروژهٔ ۳ — آماده‌سازی کامل یک VPS تازه","از سرور خام تا سروری سخت‌شده و آمادهٔ production.","Project 3 — preparing a fresh VPS","From a raw server to a hardened, production-ready one.","capstone vps hardening",3]
]});

/* ═══════════════ ۰۴ — دواپس ═══════════════ */
C.push({
  id:"04-devops", dir:"04-devops", accent:"#8B5CF6", cat:"infra",
  ico:'<path d="M8.2 12c0 2.2-1.5 4-3.3 4S1.5 14.2 1.5 12s1.5-4 3.4-4c2.7 0 4.2 8 6.9 8 1.9 0 3.4-1.8 3.4-4s-1.5-4-3.4-4c-1.3 0-2.4.9-3 2.2" stroke-linecap="round"/><path d="M18 8h4.5M20.2 5.8V10" stroke-linecap="round" opacity=".85"/>',
  fa:{name:"دواپس و CI/CD", desc:"Git، CI/CD، Terraform، Ansible، Prometheus و انتشار بدون قطعی — و postmortem وقتی خراب شد.",
      intro:"این مسیر دربارهٔ ابزار نیست، دربارهٔ فاصلهٔ بین «کد نوشتم» و «کاربر دارد ازش استفاده می‌کند» است. هر فصل یک تکه از آن فاصله را خودکار می‌کند."},
  en:{name:"DevOps & CI/CD", desc:"Git, CI/CD, Terraform, Ansible, Prometheus and zero-downtime releases — plus the postmortem when it breaks.",
      intro:"This track is not about tools; it is about the gap between “I wrote the code” and “a user is using it”. Each chapter automates one piece of that gap."},
  ch:[
["01","01-what.html",0,12,40,"DevOps چیست و چه چیزی نیست","نه یک سِمَت، نه یک ابزار.","What DevOps is and is not","Not a job title, not a tool.","devops culture sre"],
["02","02-git.html",0,12,60,"Git در عمل: branch، merge، rebase","استراتژی شاخه‌بندی و بیرون آمدن از دردسر.","Git in practice: branch, merge, rebase","Branching strategy and getting out of trouble.","git branch merge rebase conflict reflog"],
["03","03-ci.html",0,12,60,"CI: تست خودکار، lint، build","GitHub Actions از صفر.","CI: automated tests, lint, build","GitHub Actions from zero.","ci github actions workflow matrix cache"],
["04","04-cd.html",0,12,55,"CD و محیط‌ها","staging، production و تأیید دستی.","CD and environments","Staging, production and manual approval.","cd deploy environment approval"],
["05","05-artifacts.html",0,12,45,"ساخت artifact و نسخه‌گذاری","semver و اینکه چه چیزی را باید نگه داشت.","Artifacts and versioning","Semver and what is worth keeping.","artifact semver release tag"],
["06","06-terraform.html",0,12,65,"IaC با Terraform","state، plan، apply و اینکه چرا state مقدس است.","IaC with Terraform","State, plan, apply — and why state is sacred.","terraform state plan apply module"],
["07","07-ansible.html",0,12,55,"Ansible","playbook، inventory و idempotency.","Ansible","Playbooks, inventories and idempotency.","ansible playbook inventory role idempotent"],
["08","08-monitoring.html",0,12,60,"مانیتورینگ: Prometheus + Grafana","متریک، scrape، و داشبوردی که به درد بخورد.","Monitoring: Prometheus + Grafana","Metrics, scraping, and a dashboard worth looking at.","prometheus grafana metrics promql exporter"],
["09","09-logging.html",0,12,50,"لاگ متمرکز","جمع‌آوری، ساختاردهی و جستجو.","Centralised logging","Collection, structure and search.","loki elastic fluentbit structured logging"],
["10","10-alerting.html",0,12,45,"alert و on-call","هشداری که نصف شب بیدارت کند باید ارزشش را داشته باشد.","Alerting and on-call","An alert that wakes you at 3am had better be worth it.","alert alertmanager oncall slo"],
["11","11-release.html",0,12,55,"blue-green، canary، rollback","انتشار بدون قطعی و راه برگشت.","Blue-green, canary, rollback","Releasing without downtime, and the way back.","blue-green canary rollback feature flag"],
["12","12-secrets.html",0,12,45,"مدیریت secret","Vault، sealed secret و چیزهایی که نباید در Git باشند.","Secret management","Vault, sealed secrets, and what must never be in Git.","vault secret sops kms"],
["13","13-backup.html",0,12,50,"backup و disaster recovery","پشتیبانی که تست نشده، پشتیبان نیست.","Backup and disaster recovery","An untested backup is not a backup.","backup restore rpo rto dr"],
["14","14-postmortem.html",0,12,40,"postmortem","بدون مقصر، با درس.","Postmortems","Blameless, with an actual lesson.","postmortem incident blameless timeline"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — اولین خط لولهٔ CI","تست و lint خودکار روی هر push.","Project 1 — your first CI pipeline","Automated tests and linting on every push.","capstone ci",1],
["16","16-cap2.html",0,7,90,"پروژهٔ ۲ — استقرار خودکار به staging","بیلد ایمیج، انتشار و استقرار با تأیید دستی.","Project 2 — automated deploy to staging","Build the image, publish it and deploy behind a manual approval.","capstone cd staging",2],
["17","17-cap3.html",0,9,180,"پروژهٔ ۳ — از commit تا production با rollback خودکار","خط لولهٔ کامل با canary، مانیتورینگ و برگشت خودکار روی خطا.","Project 3 — commit to production with automatic rollback","A full pipeline with canary releases, monitoring and automatic rollback on failure.","capstone pipeline canary rollback",3]
]});

/* ═══════════════ ۰۵ — SQL و SQL Server ═══════════════ */
C.push({
  id:"05-sql", dir:"05-sql", accent:"#DC2626", cat:"data",
  ico:'<ellipse cx="12" cy="6" rx="7.5" ry="3.2"/><path d="M4.5 6v6c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V6"/><path d="M4.5 12v6c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2v-6"/>',
  fa:{name:"SQL و SQL Server", desc:"از SELECT تا خواندن execution plan و درمان کوئری کند — با تمرین روی دادهٔ واقعی.",
      intro:"نوشتن کوئری که جواب بدهد آسان است. نوشتن کوئری که روی ده میلیون سطر هم جواب بدهد، مهارت دیگری است. این مسیر هر دو را می‌دهد و بیشتر وقتش را روی دومی می‌گذارد."},
  en:{name:"SQL & SQL Server", desc:"From SELECT to reading an execution plan and fixing a slow query — practised on real data.",
      intro:"Writing a query that returns the right answer is easy. Writing one that still answers over ten million rows is a different skill. This track teaches both and spends most of its time on the second."},
  ch:[
["01","01-relational.html",0,12,50,"مدل رابطه‌ای و نصب","جدول، سطر، کلید؛ نصب SQL Server و SSMS.","The relational model and setup","Tables, rows, keys; installing SQL Server and SSMS.","relational table row key install ssms"],
["02","02-select.html",0,12,50,"SELECT، فیلتر، مرتب‌سازی","WHERE، ORDER BY، و NULL که همه‌چیز را خراب می‌کند.","SELECT, filtering, sorting","WHERE, ORDER BY, and the NULL that ruins everything.","select where order by null top offset"],
["03","03-joins.html",0,12,60,"JOIN‌ها با نمودار","inner، left، و اشتباهی که سطرها را تکثیر می‌کند.","JOINs, with diagrams","Inner, left, and the mistake that multiplies your rows.","join inner left right full cross"],
["04","04-aggregate.html",0,12,50,"تجمیع و GROUP BY","HAVING در برابر WHERE.","Aggregation and GROUP BY","HAVING versus WHERE.","group by having count sum avg"],
["05","05-cte.html",0,12,50,"زیرکوئری و CTE","کوئری خوانا به‌جای کوئری تودرتو.","Subqueries and CTEs","Readable queries instead of nested ones.","cte subquery with recursive exists"],
["06","06-window.html",0,12,60,"window function","رتبه، مجموع تجمعی، مقایسه با سطر قبل.","Window functions","Ranking, running totals, comparing to the previous row.","window over partition row_number lag lead"],
["07","07-dml.html",0,12,50,"INSERT / UPDATE / DELETE / MERGE","تغییر داده بدون فاجعه.","INSERT / UPDATE / DELETE / MERGE","Changing data without a disaster.","insert update delete merge output"],
["08","08-design.html",0,12,55,"طراحی جدول، نوع داده، constraint","نوع درست، کلید درست، از همان اول.","Table design, data types, constraints","The right type and the right key, from day one.","datatype primary key foreign check constraint identity"],
["09","09-normalization.html",0,12,50,"نرمال‌سازی و کِی نقضش کنیم","سه فرم اول، و denormalization آگاهانه.","Normalisation and when to break it","The first three forms, and deliberate denormalisation.","normalization 1nf 2nf 3nf denormalization"],
["10","10-index.html",0,12,60,"index: clustered، nonclustered، covering","چرا ایندکس اضافه کوئری را کند می‌کند.","Indexes: clustered, nonclustered, covering","Why an extra index can make a query slower.","index clustered nonclustered covering include fillfactor"],
["11","11-plan.html",0,12,60,"خواندن execution plan","scan در برابر seek، و تخمین اشتباه.","Reading an execution plan","Scan versus seek, and bad estimates.","execution plan seek scan estimate statistics"],
["12","12-transaction.html",0,12,55,"تراکنش، ایزوله، deadlock","ACID در عمل و باز کردن گره قفل.","Transactions, isolation, deadlocks","ACID in practice and untangling locks.","transaction isolation deadlock lock snapshot"],
["13","13-procs.html",0,12,50,"stored procedure، function، trigger","کِی مفیدند و کِی دردسر.","Stored procedures, functions, triggers","When they help and when they hurt.","procedure function trigger scalar table-valued"],
["14","14-tsql.html",0,12,50,"T-SQL: متغیر، حلقه، خطا","TRY/CATCH و برنامه‌نویسی داخل پایگاه‌داده.","T-SQL: variables, loops, errors","TRY/CATCH and programming inside the database.","tsql declare while try catch throw"],
["15","15-backup.html",0,12,50,"backup/restore و نگهداری","full، differential، log و بازیابی نقطه‌ای.","Backup/restore and maintenance","Full, differential, log and point-in-time recovery.","backup restore recovery model maintenance"],
["16","16-security.html",0,12,45,"امنیت و مجوز","login، user، role و اصل کمترین دسترسی.","Security and permissions","Logins, users, roles and least privilege.","login user role grant permission tde"],
["17","17-tuning.html",0,12,60,"بهینه‌سازی کوئری کند","روش سیستماتیک: اندازه‌گیری، تشخیص، درمان.","Fixing a slow query","A systematic method: measure, diagnose, treat.","tuning slow query store wait stats"],
["18","18-cap1.html",0,5,60,"پروژهٔ ۱ — طراحی یک شمای کوچک","از نیاز تا جدول، با کلید و constraint درست.","Project 1 — design a small schema","From requirements to tables, with the right keys and constraints.","capstone schema design",1],
["19","19-cap2.html",0,7,100,"پروژهٔ ۲ — گزارش‌های تحلیلی","کوئری‌های تجمیعی و window روی دادهٔ واقعی.","Project 2 — analytical reports","Aggregate and window queries over real data.","capstone report analytics",2],
["20","20-cap3.html",0,9,180,"پروژهٔ ۳ — پایگاه‌دادهٔ فروش با دادهٔ حجیم","طراحی، بارگذاری میلیون‌ها سطر، و بهینه‌سازی تا زیر یک ثانیه.","Project 3 — a sales database at scale","Design it, load millions of rows, and tune it to under a second.","capstone performance tuning",3]
]});

/* ═══════════════ ۰۶ — کوبرنتیز ═══════════════ */
C.push({
  id:"06-kubernetes", dir:"06-kubernetes", accent:"#326CE5", cat:"infra",
  ico:'<path d="M12 2.6 20 7v10l-8 4.4L4 17V7z"/><circle cx="12" cy="12" r="2.6"/><path d="M12 4.6v4.8M12 14.6v4.8M6.4 8.8l4 2.2M13.6 13l4 2.2M17.6 8.8l-4 2.2M10.4 13l-4 2.2" stroke-linecap="round"/>',
  fa:{name:"کوبرنتیز", desc:"وقتی چند کانتینر روی چند سرور می‌شوند: Pod، Deployment، Service، Ingress، مقیاس‌پذیری و عیب‌یابی.",
      intro:"داکر به تو می‌گوید یک کانتینر را چطور اجرا کنی. کوبرنتیز جواب سؤال بعدی است: پنجاه کانتینر روی ده سرور را چه کسی زنده نگه می‌دارد، چه کسی جایگزینشان می‌کند وقتی می‌میرند، و چه کسی ترافیک را بینشان پخش می‌کند."},
  en:{name:"Kubernetes", desc:"When containers become many across many servers: Pods, Deployments, Services, Ingress, scaling and debugging.",
      intro:"Docker tells you how to run one container. Kubernetes answers the next question: who keeps fifty containers alive across ten servers, who replaces them when they die, and who spreads traffic between them."},
  ch:[
["01","01-why.html",0,12,50,"چرا کوبرنتیز؛ مسئله‌ای که داکر تنها حل نمی‌کند","کِی لازم است و — مهم‌تر — کِی لازم نیست.","Why Kubernetes; what Docker alone cannot do","When you need it and — more importantly — when you do not.","kubernetes orchestration why scale"],
["02","02-architecture.html",0,12,55,"معماری کلاستر","control plane، node، etcd، scheduler و kubelet.","Cluster architecture","Control plane, nodes, etcd, scheduler and kubelet.","control plane etcd scheduler kubelet node"],
["03","03-pod.html",0,12,50,"Pod: کوچک‌ترین واحد","چرا واحد اجرا Pod است و نه کانتینر.","Pods: the smallest unit","Why the unit of execution is a Pod and not a container.","pod sidecar init container"],
["04","04-kubectl.html",0,12,50,"kubectl در عمل","get، describe، logs، exec، apply — و خواندن YAML.","kubectl in practice","get, describe, logs, exec, apply — and reading YAML.","kubectl apply describe logs context"],
["05","05-deployment.html",0,12,55,"Deployment و ReplicaSet","اعلام وضعیت مطلوب، و به‌روزرسانی تدریجی.","Deployments and ReplicaSets","Declaring desired state, and rolling updates.","deployment replicaset rollout strategy"],
["06","06-service.html",0,12,55,"Service و انواعش","ClusterIP، NodePort، LoadBalancer و DNS داخلی.","Services and their types","ClusterIP, NodePort, LoadBalancer and internal DNS.","service clusterip nodeport loadbalancer dns"],
["07","07-ingress.html",0,12,55,"Ingress و مسیریابی HTTP","یک نقطهٔ ورود برای چند سرویس، با TLS.","Ingress and HTTP routing","One entry point for many services, with TLS.","ingress controller tls host path"],
["08","08-config.html",0,12,45,"ConfigMap و Secret","پیکربندی بیرون از ایمیج، در سطح کلاستر.","ConfigMaps and Secrets","Configuration outside the image, at cluster level.","configmap secret env volume mount"],
["09","09-storage.html",0,12,55,"دادهٔ ماندگار: PV، PVC، StorageClass","وقتی Pod می‌میرد، داده نباید بمیرد.","Persistent data: PV, PVC, StorageClass","When a Pod dies, the data must not.","persistentvolume pvc storageclass"],
["10","10-resources.html",0,12,50,"منابع: request، limit و QoS","چرا Pod تو Pending مانده و چرا آن یکی کشته شد.","Resources: requests, limits and QoS","Why your Pod is Pending and why that other one got killed.","request limit qos oom pending"],
["11","11-scaling.html",0,12,50,"مقیاس‌پذیری خودکار","HPA بر اساس CPU و متریک سفارشی.","Autoscaling","HPA on CPU and on custom metrics.","hpa autoscale metrics server"],
["12","12-rbac.html",0,12,50,"Namespace، RBAC و ServiceAccount","چه کسی اجازهٔ چه کاری را دارد.","Namespaces, RBAC and ServiceAccounts","Who is allowed to do what.","namespace rbac role binding serviceaccount"],
["13","13-probes.html",0,12,45,"Probe: liveness، readiness، startup","تفاوت «بالا هست» و «آمادهٔ ترافیک است».","Probes: liveness, readiness, startup","The difference between “it is up” and “it is ready for traffic”.","liveness readiness startup probe"],
["14","14-workloads.html",0,12,55,"StatefulSet، DaemonSet، Job و CronJob","وقتی Deployment جواب نمی‌دهد.","StatefulSets, DaemonSets, Jobs and CronJobs","When a Deployment is the wrong shape.","statefulset daemonset job cronjob"],
["15","15-helm.html",0,12,55,"Helm","بسته‌بندی و پیکربندی چند محیط با یک chart.","Helm","Packaging and configuring many environments from one chart.","helm chart values template release"],
["16","16-debug.html",0,12,60,"عیب‌یابی: CrashLoopBackOff، Pending، ImagePullBackOff","هر وضعیت یک علت مشخص دارد.","Debugging: CrashLoopBackOff, Pending, ImagePullBackOff","Each status points at a specific cause.","crashloopbackoff imagepullbackoff pending evicted"],
["17","17-cap1.html",0,5,70,"پروژهٔ ۱ — اولین اپ روی کلاستر","یک Deployment و یک Service، با کلاستر محلی.","Project 1 — your first app on a cluster","One Deployment and one Service on a local cluster.","capstone kind minikube",1],
["18","18-cap2.html",0,7,110,"پروژهٔ ۲ — اپ سه‌سرویسه با Ingress","سه سرویس، پیکربندی، دادهٔ ماندگار و یک نقطهٔ ورود.","Project 2 — three services behind an Ingress","Three services, configuration, persistent data and one entry point.","capstone ingress configmap",2],
["19","19-cap3.html",0,9,180,"پروژهٔ ۳ — کلاستر آمادهٔ production","با HPA، RBAC، probe، منابع محدود و مانیتورینگ.","Project 3 — a production-ready cluster","With HPA, RBAC, probes, resource limits and monitoring.","capstone production hpa rbac",3]
]});

/* ═══════════════ ۰۷ — معماری نرم‌افزار ═══════════════ */
C.push({
  id:"07-architecture", dir:"07-architecture", accent:"#0EA5A5", cat:"arch",
  ico:'<path d="M3 20h18M5 20V9l7-5 7 5v11"/><path d="M9.5 20v-5.5h5V20"/><path d="M9.5 11h5" stroke-linecap="round"/>',
  fa:{name:"معماری نرم‌افزار و تحلیل سیستم", desc:"SOLID، الگوهای طراحی، معماری لایه‌ای، شش‌ضلعی و Clean، DDD مقدماتی و هرم تست — با مثال در چند زبان.",
      intro:"معماری یعنی تصمیم‌هایی که عوض کردنشان بعداً گران است. این مسیر یادت می‌دهد کدام تصمیم‌ها این‌طورند، چطور بگیری‌شان، و چطور کدی بنویسی که شش ماه بعد هم بشود عوضش کرد. مثال‌ها در ‎C#‎، پایتون، تایپ‌اسکریپت و Go می‌آیند."},
  en:{name:"Software architecture & system analysis", desc:"SOLID, design patterns, layered/hexagonal/clean architecture, introductory DDD and the test pyramid — with examples in several languages.",
      intro:"Architecture is the set of decisions that are expensive to change later. This track teaches you which decisions those are, how to make them, and how to write code you can still change in six months. Examples come in C#, Python, TypeScript and Go."},
  ch:[
["01","01-what.html",0,12,50,"معماری چیست و کدام تصمیم معماری است","تفاوت تصمیم معماری با تصمیم پیاده‌سازی.","What architecture is, and which decisions count","Architectural decisions versus implementation decisions.","architecture decision significant tradeoff"],
["02","02-analysis.html",0,12,60,"تحلیل سیستم: از نیاز تا مدل","استخراج نیاز، use case، و مدل دامنه.","System analysis: from requirement to model","Eliciting requirements, use cases, and a domain model.","analysis requirement usecase domain model"],
["03","03-qualities.html",0,12,55,"کیفیت‌ها و trade-off","تغییرپذیری، تست‌پذیری، کارایی — نمی‌شود همه را با هم داشت.","Quality attributes and trade-offs","Changeability, testability, performance — you cannot have them all.","quality attribute tradeoff nfr"],
["04","04-coupling.html",0,12,60,"وابستگی و جهت آن — قلب همه‌چیز","coupling، cohesion، و اینکه چرا جهت وابستگی مهم‌تر از وجودش است.","Coupling and its direction — the heart of it","Coupling, cohesion, and why the direction of a dependency matters more than its existence.","coupling cohesion dependency direction"],
["05","05-solid-1.html",0,12,60,"SOLID ۱: SRP و OCP","با کد واقعی، نه مثال شکل و مربع.","SOLID 1: SRP and OCP","With real code, not shapes and squares.","solid srp ocp single responsibility open closed"],
["06","06-solid-2.html",0,12,60,"SOLID ۲: LSP، ISP، DIP","و اینکه DIP چطور کل معماری را می‌چرخاند.","SOLID 2: LSP, ISP, DIP","And how DIP turns an entire architecture around.","solid lsp isp dip liskov inversion"],
["07","07-layered.html",0,12,55,"معماری لایه‌ای کلاسیک","کجا جواب می‌دهد و کجا به گِل می‌نشیند.","Classic layered architecture","Where it works and where it sinks.","layered n-tier presentation domain data"],
["08","08-hexagonal.html",0,12,60,"معماری شش‌ضلعی (ports & adapters)","دامنه در مرکز، همه‌چیز دیگر افزونه.","Hexagonal architecture (ports & adapters)","Domain at the centre, everything else a plug-in.","hexagonal ports adapters"],
["09","09-clean.html",0,12,60,"Clean Architecture و Onion","قانون وابستگی، و هزینهٔ واقعی‌اش.","Clean and Onion architecture","The dependency rule, and what it really costs.","clean onion architecture usecase entity"],
["10","10-creational.html",0,12,55,"الگوهای ساختنی","Factory، Builder، Prototype — و چرا Singleton معمولاً دام است.","Creational patterns","Factory, Builder, Prototype — and why Singleton is usually a trap.","factory builder singleton prototype pattern"],
["11","11-structural.html",0,12,60,"الگوهای ساختاری","Adapter، Decorator، Facade، Proxy، Composite.","Structural patterns","Adapter, Decorator, Facade, Proxy, Composite.","adapter decorator facade proxy composite"],
["12","12-behavioral-1.html",0,12,60,"الگوهای رفتاری ۱","Strategy، Observer، Command.","Behavioural patterns 1","Strategy, Observer, Command.","strategy observer command pattern"],
["13","13-behavioral-2.html",0,12,60,"الگوهای رفتاری ۲","State، Template Method، Chain of Responsibility، Mediator.","Behavioural patterns 2","State, Template Method, Chain of Responsibility, Mediator.","state template method chain mediator"],
["14","14-repository.html",0,12,55,"Repository و Unit of Work","کِی مفیدند و کِی فقط یک لایهٔ اضافه‌اند.","Repository and Unit of Work","When they help and when they are just another layer.","repository unit of work persistence"],
["15","15-ddd.html",0,12,65,"DDD مقدماتی","entity، value object، aggregate و bounded context.","Introductory DDD","Entities, value objects, aggregates and bounded contexts.","ddd entity value object aggregate bounded context"],
["16","16-cqrs.html",0,12,55,"CQRS و کِی واقعاً لازم است","جدا کردن خواندن از نوشتن، با هزینه‌هایش.","CQRS and when it is actually needed","Separating reads from writes, with its costs.","cqrs command query read model"],
["17","17-events.html",0,12,55,"معماری رویدادمحور","event، message، و تفاوتشان با فراخوانی مستقیم.","Event-driven architecture","Events, messages, and how they differ from a direct call.","event driven message eventual consistency"],
["18","18-testing.html",0,12,60,"هرم تست: unit، integration، contract","تستی که به تو اجازهٔ تغییر بدهد، نه تستی که جلویش را بگیرد.","The test pyramid: unit, integration, contract","Tests that let you change code, not tests that prevent it.","test pyramid unit integration contract mock"],
["19","19-refactoring.html",0,12,60,"refactoring به‌سمت الگو","از کد موجود شروع کن، نه از دیاگرام.","Refactoring towards patterns","Start from the code you have, not from a diagram.","refactoring smell extract legacy"],
["20","20-documenting.html",0,12,50,"مستندسازی معماری: C4 و ADR","تصمیم را بنویس، نه فقط نتیجه را.","Documenting architecture: C4 and ADR","Record the decision, not only the outcome.","c4 adr diagram documentation"],
["21","21-cap1.html",0,5,80,"پروژهٔ ۱ — بازطراحی یک CRUD به لایه‌ای","از یک فایل هزارخطی به لایه‌های با مسئولیت روشن.","Project 1 — refactor a CRUD into layers","From one thousand-line file to layers with clear responsibilities.","capstone layered refactor",1],
["22","22-cap2.html",0,7,120,"پروژهٔ ۲ — همان سیستم، شش‌ضلعی و تست‌پذیر","دامنه را از پایگاه‌داده و وب جدا کن و تست بنویس.","Project 2 — the same system, hexagonal and testable","Separate the domain from the database and the web, then test it.","capstone hexagonal test",2],
["23","23-cap3.html",0,9,200,"پروژهٔ ۳ — سیستم رویدادمحور با CQRS","مدل خواندن و نوشتن جدا، رویدادها، و سازگاری نهایی.","Project 3 — an event-driven system with CQRS","Separate read and write models, events, and eventual consistency.","capstone cqrs event",3]
]});

/* ═══════════════ ۰۸ — میکروسرویس‌ها ═══════════════ */
C.push({
  id:"08-microservices", dir:"08-microservices", accent:"#E11D74", cat:"arch",
  ico:'<circle cx="12" cy="5" r="2.6"/><circle cx="5" cy="18" r="2.6"/><circle cx="19" cy="18" r="2.6"/><path d="M10.4 7.1 6.4 15.6M13.6 7.1l4 8.5M7.6 18h8.8" stroke-linecap="round"/>',
  fa:{name:"میکروسرویس و میکروفرانت‌اند", desc:"مرزبندی سرویس، REST و gRPC، صف و رویداد، Saga، تاب‌آوری، مشاهده‌پذیری و میکروفرانت‌اند.",
      intro:"میکروسرویس یک ارتقا نیست؛ یک معامله است. پیچیدگی داخل کد را کم می‌کنی و به شبکه منتقلش می‌کنی. این مسیر هر دو طرف معامله را نشان می‌دهد و بیشترین وقتش را روی سخت‌ترین بخش می‌گذارد: اینکه سرویس‌ها چطور با هم حرف بزنند."},
  en:{name:"Microservices & micro-frontends", desc:"Service boundaries, REST and gRPC, queues and events, Saga, resilience, observability and micro-frontends.",
      intro:"Microservices are not an upgrade; they are a trade. You move complexity out of your code and into the network. This track shows both sides of that trade and spends most of its time on the hardest part: how services talk to each other."},
  ch:[
["01","01-when.html",0,12,50,"مونولیت بد نیست — کِی میکروسرویس","نشانه‌های واقعی نیاز، و هزینه‌ای که می‌پذیری.","A monolith is not bad — when to split","The real signals, and the cost you accept.","monolith microservice when tradeoff"],
["02","02-boundaries.html",0,12,60,"مرزبندی سرویس‌ها","bounded context، و اشتباه مرزبندی بر اساس جدول.","Drawing service boundaries","Bounded contexts, and the mistake of splitting by table.","bounded context boundary decomposition"],
["03","03-rest.html",0,12,55,"ارتباط همگام ۱: REST","طراحی API، نسخه، و هزینهٔ فراخوانی زنجیره‌ای.","Synchronous 1: REST","API design, versioning, and the cost of call chains.","rest http api sync"],
["04","04-grpc.html",0,12,60,"ارتباط همگام ۲: gRPC","protobuf، استریم، و کِی از REST بهتر است.","Synchronous 2: gRPC","Protobuf, streaming, and when it beats REST.","grpc protobuf stream rpc"],
["05","05-queue.html",0,12,60,"ارتباط ناهمگام ۱: صف پیام","RabbitMQ، تحویل، تأیید و صف مرده.","Asynchronous 1: message queues","RabbitMQ, delivery, acknowledgements and dead letters.","rabbitmq queue amqp ack dlq"],
["06","06-stream.html",0,12,60,"ارتباط ناهمگام ۲: جریان رویداد","Kafka، partition، consumer group و ترتیب.","Asynchronous 2: event streams","Kafka, partitions, consumer groups and ordering.","kafka partition consumer group offset"],
["07","07-compare.html",0,12,50,"مقایسهٔ روش‌های ارتباط","ماتریس تصمیم: کدام روش برای کدام مسئله.","Comparing the communication styles","A decision matrix: which style for which problem.","sync async comparison decision matrix"],
["08","08-gateway.html",0,12,55,"API Gateway و BFF","یک درِ ورودی، و اینکه چرا هر کلاینت BFF خودش را می‌خواهد.","API Gateway and BFF","One front door, and why each client wants its own BFF.","gateway bff aggregation routing"],
["09","09-discovery.html",0,12,50,"service discovery و توزیع بار","سرویس‌ها چطور همدیگر را پیدا می‌کنند.","Service discovery and load balancing","How services find each other.","discovery consul dns load balancing"],
["10","10-data.html",0,12,60,"داده: هر سرویس، پایگاه‌دادهٔ خودش","و مسئله‌ای که این قانون می‌سازد.","Data: one database per service","And the problem this rule creates.","database per service data ownership"],
["11","11-saga.html",0,12,65,"تراکنش توزیع‌شده: Saga","choreography در برابر orchestration، و جبران.","Distributed transactions: Saga","Choreography versus orchestration, and compensation.","saga distributed transaction compensation"],
["12","12-outbox.html",0,12,55,"الگوی Outbox و تحویل تضمین‌شده","چطور پیام و پایگاه‌داده از هم جدا نیفتند.","The Outbox pattern and guaranteed delivery","How to keep your database and your messages in step.","outbox inbox dual write cdc"],
["13","13-resilience.html",0,12,60,"تاب‌آوری","retry، timeout، circuit breaker، bulkhead.","Resilience","Retries, timeouts, circuit breakers, bulkheads.","retry timeout circuit breaker bulkhead"],
["14","14-idempotency.html",0,12,50,"idempotency و پیام تکراری","شبکه پیام را دو بار می‌رساند. آماده باش.","Idempotency and duplicate messages","The network will deliver twice. Be ready.","idempotency exactly once deduplication"],
["15","15-observability.html",0,12,60,"مشاهده‌پذیری توزیع‌شده","لاگ، متریک و trace با OpenTelemetry.","Distributed observability","Logs, metrics and traces with OpenTelemetry.","tracing opentelemetry jaeger correlation"],
["16","16-versioning.html",0,12,50,"نسخه‌گذاری API و سازگاری","تغییر بدون شکستن کلاینت‌ها.","API versioning and compatibility","Changing without breaking your clients.","versioning backward compatibility contract"],
["17","17-microfrontend.html",0,12,60,"میکروفرانت‌اند","روش‌ها: build-time، run-time، module federation — و trade-offها.","Micro-frontends","Build-time, run-time, module federation — and the trade-offs.","micro frontend module federation shell"],
["18","18-antipatterns.html",0,12,55,"ضدالگوها","مونولیت توزیع‌شده، و بقیهٔ راه‌های شکست.","Anti-patterns","The distributed monolith, and the other ways to fail.","antipattern distributed monolith chatty"],
["19","19-cap1.html",0,5,80,"پروژهٔ ۱ — دو سرویس با REST","تقسیم یک مونولیت کوچک به دو سرویس.","Project 1 — two services over REST","Splitting a small monolith into two services.","capstone rest split",1],
["20","20-cap2.html",0,7,130,"پروژهٔ ۲ — افزودن صف و Saga","یک عملیات چندسرویسه با جبران خطا.","Project 2 — adding a queue and a Saga","A multi-service operation with compensation.","capstone saga queue",2],
["21","21-cap3.html",0,9,200,"پروژهٔ ۳ — سامانهٔ کامل","gateway، رویداد، trace توزیع‌شده و circuit breaker.","Project 3 — the complete system","Gateway, events, distributed tracing and circuit breakers.","capstone gateway tracing",3]
]});

/* ═══════════════ ۰۹ — ‎C#‎ ═══════════════ */
C.push({
  id:"09-csharp", dir:"09-csharp", accent:"#68217A", cat:"backend",
  ico:'<path d="M9.5 3.5 7.5 20.5M16.5 3.5l-2 17M4 8.6h16M3 15.4h16" stroke-linecap="round"/>',
  fa:{name:"زبان ‎C#‎", desc:"از نوع‌ها و LINQ تا async/await، کارایی و تست — جامع، از مقدماتی تا پیشرفته.",
      intro:"‎C#‎ زبان بزرگی است و بیشتر آموزش‌ها در سطح نحو متوقف می‌شوند. این مسیر تا جایی می‌رود که بدانی پشت async/await چه می‌گذرد، چرا آن LINQ کند است، و کِی struct به‌جای class."},
  en:{name:"C#", desc:"From types and LINQ to async/await, performance and testing — comprehensive, beginner to advanced.",
      intro:"C# is a large language and most tutorials stop at syntax. This track goes far enough that you know what happens behind async/await, why that LINQ query is slow, and when to reach for a struct."},
  ch:[
["01","01-ecosystem.html",0,12,45,"اکوسیستم .NET و اولین برنامه","SDK، runtime، پروژه و ساختار فایل‌ها.","The .NET ecosystem and your first program","SDK, runtime, projects and file layout.","dotnet sdk runtime csproj cli"],
["02","02-types.html",0,12,55,"نوع‌ها: value و reference","و nullable که نصف باگ‌ها را می‌گیرد.","Types: value and reference","And nullable reference types, which catch half your bugs.","value reference nullable stack heap"],
["03","03-class-record.html",0,12,55,"کلاس، رکورد، struct — کدام کجا","سه انتخاب با سه رفتار متفاوت.","Class, record, struct — which and when","Three choices with three different behaviours.","class record struct immutable equality"],
["04","04-oop.html",0,12,55,"وراثت، interface، polymorphism","و اینکه چرا ترکیب معمولاً بهتر از وراثت است.","Inheritance, interfaces, polymorphism","And why composition usually beats inheritance.","inheritance interface polymorphism composition"],
["05","05-generics.html",0,12,55,"generic و constraint","نوع‌های عمومی بدون از دست دادن ایمنی.","Generics and constraints","Generic code without losing type safety.","generic constraint variance"],
["06","06-collections.html",0,12,55,"مجموعه‌ها و انتخاب درست","List، Dictionary، HashSet — و هزینهٔ هرکدام.","Collections and choosing correctly","List, Dictionary, HashSet — and what each costs.","list dictionary hashset span complexity"],
["07","07-linq-1.html",0,12,60,"LINQ ۱: مبانی و اجرای معوق","چرا کوئری تو هنوز اجرا نشده است.","LINQ 1: basics and deferred execution","Why your query has not run yet.","linq deferred lazy iterator"],
["08","08-linq-2.html",0,12,60,"LINQ ۲: پیشرفته و کارایی","group، join، و دام‌های حافظه و تکرار.","LINQ 2: advanced and performance","Grouping, joining, and the memory and iteration traps.","linq group join performance allocation"],
["09","09-delegates.html",0,12,50,"delegate، event، lambda","تابع به‌عنوان مقدار، و closure.","Delegates, events, lambdas","Functions as values, and closures.","delegate event lambda closure func action"],
["10","10-async.html",0,12,65,"async/await — مدل ذهنی درست","async یعنی «منتظر نمان»، نه «سریع‌تر».","async/await — the correct mental model","async means “do not block”, not “faster”.","async await task deadlock synchronizationcontext"],
["11","11-tasks.html",0,12,60,"Task، cancellation و موازی‌سازی","CancellationToken و Parallel، با هزینه‌هایشان.","Tasks, cancellation and parallelism","CancellationToken and Parallel, with their costs.","task cancellation parallel plinq"],
["12","12-errors.html",0,12,50,"مدیریت خطا","exception، کِی بگیر و کِی نگیر، و نوع سفارشی.","Error handling","Exceptions, when to catch and when not, and custom types.","exception try catch finally custom"],
["13","13-disposable.html",0,12,50,"IDisposable و مدیریت منابع","using، GC، و نشتی که GC نمی‌گیرد.","IDisposable and resource management","using, the GC, and the leaks the GC will not catch.","idisposable using gc finalizer leak"],
["14","14-reflection.html",0,12,50,"reflection و attribute","قدرت زیاد، هزینهٔ زیاد.","Reflection and attributes","Much power, much cost.","reflection attribute metadata emit"],
["15","15-performance.html",0,12,60,"کارایی: Span، Memory، تخصیص","اندازه‌گیری قبل از بهینه‌سازی.","Performance: Span, Memory, allocations","Measure before you optimise.","span memory allocation benchmark gc"],
["16","16-pattern-matching.html",0,12,50,"pattern matching و switch expression","کد شرطی خواناتر.","Pattern matching and switch expressions","More readable conditional code.","pattern matching switch expression deconstruct"],
["17","17-source-gen.html",0,12,55,"source generator","کد تولید کن به‌جای reflection در زمان اجرا.","Source generators","Generate code instead of reflecting at run time.","source generator roslyn analyzer"],
["18","18-testing.html",0,12,55,"تست با xUnit","تست واحد، mock و تست‌های خوانا.","Testing with xUnit","Unit tests, mocking and readable assertions.","xunit moq fluentassertions test"],
["19","19-packaging.html",0,12,45,"NuGet و ساختار پروژه","چند پروژه، وابستگی و انتشار بسته.","NuGet and project structure","Multiple projects, dependencies and publishing a package.","nuget solution project package"],
["20","20-advanced.html",0,12,60,"نکات پیشرفته","ValueTask، pooling، DI دستی و مدیریت حافظه.","Advanced topics","ValueTask, pooling, hand-rolled DI and memory management.","valuetask pooling arraypool advanced"],
["21","21-cap1.html",0,5,70,"پروژهٔ ۱ — ابزار خط فرمان","یک CLI واقعی با آرگومان، خطا و تست.","Project 1 — a command-line tool","A real CLI with arguments, error handling and tests.","capstone cli",1],
["22","22-cap2.html",0,7,120,"پروژهٔ ۲ — کتابخانهٔ قابل انتشار","API تمیز، تست کامل و بستهٔ NuGet.","Project 2 — a publishable library","A clean API, full tests and a NuGet package.","capstone library nuget",2],
["23","23-cap3.html",0,9,180,"پروژهٔ ۳ — پردازشگر همروند پرکار","async، cancellation، pooling و اندازه‌گیری کارایی.","Project 3 — a high-throughput concurrent processor","async, cancellation, pooling and measured performance.","capstone concurrency performance",3]
]});

/* ═══════════════ ۱۰ — ASP.NET Core ═══════════════ */
C.push({
  id:"10-aspnet-core", dir:"10-aspnet-core", accent:"#512BD4", cat:"backend",
  ico:'<circle cx="12" cy="12" r="9"/><path d="M3.2 9.5h17.6M3.2 14.5h17.6"/><path d="M12 3a15 15 0 0 0 0 18 15 15 0 0 0 0-18z"/>',
  fa:{name:"ASP.NET Core", desc:"از pipeline و DI تا EF Core، احراز هویت، SignalR، تست و استقرار روی لینوکس.",
      intro:"این مسیر فرض می‌کند ‎C#‎ را می‌دانی و می‌خواهی با آن سرویس وب بنویسی — سرویسی که تست دارد، امن است، و روی یک سرور لینوکسی پشت Nginx کار می‌کند."},
  en:{name:"ASP.NET Core", desc:"From the pipeline and DI to EF Core, authentication, SignalR, testing and deploying on Linux.",
      intro:"This track assumes you know C# and want to build web services with it — services that are tested, secure, and running on a Linux server behind Nginx."},
  ch:[
["01","01-mental-model.html",0,12,55,"مدل ذهنی: host، pipeline، DI","سه چیزی که اگر بفهمی، بقیه واضح می‌شود.","The mental model: host, pipeline, DI","Understand these three and the rest follows.","host pipeline middleware di startup"],
["02","02-minimal-vs-mvc.html",0,12,50,"Minimal API در برابر Controller","کدام برای کدام پروژه.","Minimal APIs versus Controllers","Which one for which project.","minimal api controller mvc endpoint"],
["03","03-routing.html",0,12,50,"مسیریابی","الگو، پارامتر، constraint و اولویت.","Routing","Patterns, parameters, constraints and precedence.","routing route constraint parameter"],
["04","04-middleware.html",0,12,55,"middleware و ترتیبش","ترتیب اشتباه = خطای بی‌معنی.","Middleware and its order","The wrong order gives you a meaningless error.","middleware order pipeline usemiddleware"],
["05","05-di.html",0,12,55,"Dependency Injection و طول عمر","singleton، scoped، transient — و باگ کلاسیک ترکیبشان.","Dependency Injection and lifetimes","Singleton, scoped, transient — and the classic captive-dependency bug.","di lifetime singleton scoped transient"],
["06","06-config.html",0,12,45,"پیکربندی و محیط‌ها","appsettings، متغیر محیطی، secret و اولویت‌ها.","Configuration and environments","appsettings, environment variables, secrets and precedence.","configuration appsettings environment secret"],
["07","07-binding.html",0,12,50,"model binding و اعتبارسنجی","از درخواست خام تا شیء معتبر.","Model binding and validation","From a raw request to a validated object.","model binding validation dataannotation fluentvalidation"],
["08","08-efcore-1.html",0,12,60,"EF Core ۱: مدل و migration","DbContext، رابطه‌ها و مهاجرت‌ها.","EF Core 1: model and migrations","DbContext, relationships and migrations.","efcore dbcontext migration relationship"],
["09","09-efcore-2.html",0,12,65,"EF Core ۲: کوئری و کارایی","N+1، tracking، و کوئری‌ای که ۳۰ ثانیه طول می‌کشد.","EF Core 2: querying and performance","N+1, change tracking, and the query that takes 30 seconds.","efcore n+1 tracking include split query"],
["10","10-authn.html",0,12,60,"احراز هویت: cookie و JWT","چه کسی هستی — و اینکه توکن کجا باید بماند.","Authentication: cookies and JWT","Who you are — and where the token should live.","authentication jwt cookie identity token"],
["11","11-authz.html",0,12,55,"مجوز: policy و role","اجازهٔ چه کاری را داری.","Authorisation: policies and roles","What you are allowed to do.","authorization policy role claim requirement"],
["12","12-errors.html",0,12,50,"مدیریت خطای سراسری","ProblemDetails و پاسخ خطای یکدست.","Global error handling","ProblemDetails and consistent error responses.","exception handler problemdetails middleware"],
["13","13-logging.html",0,12,50,"لاگ ساخت‌یافته","Serilog، scope و لاگی که بشود جستجو کرد.","Structured logging","Serilog, scopes and logs you can actually search.","serilog structured logging scope sink"],
["14","14-caching.html",0,12,55,"کش: memory، توزیع‌شده، پاسخ","و مسئلهٔ باطل‌سازی.","Caching: memory, distributed, response","And the invalidation problem.","cache memorycache redis response output"],
["15","15-background.html",0,12,50,"سرویس پس‌زمینه","BackgroundService، کار زمان‌بندی‌شده و صف.","Background services","BackgroundService, scheduled work and queues.","backgroundservice hostedservice worker channel"],
["16","16-signalr.html",0,12,55,"SignalR","ارتباط بی‌درنگ در دات‌نت.","SignalR","Real-time communication in .NET.","signalr hub websocket realtime"],
["17","17-testing.html",0,12,60,"تست: واحد و یکپارچه","WebApplicationFactory و تست روی پایگاه‌دادهٔ واقعی.","Testing: unit and integration","WebApplicationFactory and testing against a real database.","test webapplicationfactory testcontainers integration"],
["18","18-security.html",0,12,60,"امنیت","CORS، HTTPS، rate limit، و ده مورد اول OWASP.","Security","CORS, HTTPS, rate limiting, and the OWASP top ten.","cors https ratelimit owasp antiforgery"],
["19","19-performance.html",0,12,55,"کارایی و پروفایلینگ","اندازه‌گیری، گلوگاه و بهینه‌سازی واقعی.","Performance and profiling","Measure, find the bottleneck, then optimise.","performance profiling benchmark load test"],
["20","20-deploy.html",0,12,60,"استقرار روی لینوکس","داکر، Nginx، systemd و پیکربندی production.","Deploying on Linux","Docker, Nginx, systemd and production configuration.","deploy linux docker nginx systemd kestrel"],
["21","21-cap1.html",0,5,80,"پروژهٔ ۱ — API ساده با پایگاه‌داده","CRUD کامل با اعتبارسنجی و تست.","Project 1 — a simple API with a database","Full CRUD with validation and tests.","capstone crud api",1],
["22","22-cap2.html",0,7,140,"پروژهٔ ۲ — API امن با احراز هویت","JWT، مجوز مبتنی بر policy، لاگ و کش.","Project 2 — a secured API with authentication","JWT, policy-based authorisation, logging and caching.","capstone jwt auth",2],
["23","23-cap3.html",0,9,220,"پروژهٔ ۳ — سرویس production","تست یکپارچه، مشاهده‌پذیری، بی‌درنگ و استقرار خودکار.","Project 3 — a production service","Integration tests, observability, real-time features and automated deployment.","capstone production deploy",3]
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
["01","01-why.html",0,12,45,"چرا Go؛ نصب و اولین برنامه","فلسفهٔ زبان و ابزار go.","Why Go; setup and first program","The language's philosophy and the go tool.","go install gopath module hello"],
["02","02-types.html",0,12,50,"نوع‌ها، struct و method","بدون کلاس، بدون وراثت.","Types, structs and methods","No classes, no inheritance.","struct method receiver type"],
["03","03-interface.html",0,12,55,"interface — متفاوت از آنچه فکر می‌کنی","پیاده‌سازی ضمنی، و interface کوچک.","Interfaces — not what you expect","Implicit satisfaction, and small interfaces.","interface implicit duck typing"],
["04","04-errors.html",0,12,55,"خطا به‌عنوان مقدار","errors.Is، errors.As، wrap — و چرا panic نه.","Errors as values","errors.Is, errors.As, wrapping — and why not panic.","error wrap errors.is panic recover"],
["05","05-slice-map.html",0,12,55,"slice و map — دام‌های حافظه","append، ظرفیت، و نشتی که کسی انتظارش را ندارد.","Slices and maps — the memory traps","append, capacity, and the leak nobody expects.","slice map append capacity aliasing"],
["06","06-goroutine.html",0,12,60,"goroutine و مدل همروندی","ارزان است، اما رایگان نیست.","Goroutines and the concurrency model","Cheap, but not free.","goroutine concurrency scheduler leak"],
["07","07-channel.html",0,12,60,"channel و select","ارتباط به‌جای اشتراک حافظه.","Channels and select","Communicate instead of sharing memory.","channel select buffered deadlock"],
["08","08-sync.html",0,12,55,"sync، mutex و context","وقتی channel جواب نمی‌دهد، و لغو کار.","sync, mutex and context","When a channel is the wrong tool, and cancelling work.","mutex waitgroup context cancel"],
["09","09-modules.html",0,12,45,"پکیج و ماژول","سازماندهی کد و مدیریت وابستگی.","Packages and modules","Organising code and managing dependencies.","module package import vendor"],
["10","10-testing.html",0,12,55,"تست و benchmark","تست جدولی و اندازه‌گیری واقعی.","Testing and benchmarking","Table-driven tests and real measurement.","test benchmark table driven coverage"],
["11","11-http.html",0,12,60,"HTTP server استاندارد","بدون فریم‌ورک، با کتابخانهٔ استاندارد.","The standard HTTP server","No framework, just the standard library.","http handler mux middleware server"],
["12","12-json.html",0,12,45,"JSON و struct tag","کدگذاری، رمزگشایی و میدان‌های اختیاری.","JSON and struct tags","Encoding, decoding and optional fields.","json marshal unmarshal tag"],
["13","13-db.html",0,12,55,"اتصال به پایگاه‌داده","database/sql، pool و تراکنش.","Talking to a database","database/sql, pooling and transactions.","database sql pool transaction sqlx"],
["14","14-structure.html",0,12,50,"ساختار پروژه در Go","الگوهای رایج، و اینکه چرا ساده‌تر بهتر است.","Project structure in Go","Common layouts, and why simpler is better.","project layout cmd internal pkg"],
["15","15-profiling.html",0,12,55,"پروفایلینگ با pprof","پیدا کردن گلوگاه واقعی.","Profiling with pprof","Finding the real bottleneck.","pprof profile cpu memory trace"],
["16","16-deploy.html",0,12,50,"کامپایل و استقرار","باینری تک‌فایل، کراس‌کامپایل و ایمیج کوچک.","Building and deploying","A single binary, cross-compilation and tiny images.","build cross compile scratch distroless"],
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
["01","01-setup.html",0,12,45,"نصب، محیط مجازی، pip","چرا هرگز روی پایتون سیستم نصب نکنی.","Setup, virtual environments, pip","Why you never install into the system Python.","venv pip virtualenv requirements"],
["02","02-types.html",0,12,55,"نوع‌ها و ساختمان داده","list، dict، set، tuple — و هزینهٔ هرکدام.","Types and data structures","list, dict, set, tuple — and what each costs.","list dict set tuple mutable"],
["03","03-functions.html",0,12,55,"تابع، آرگومان، scope","آرگومان پیش‌فرض تغییرپذیر: کلاسیک‌ترین دام.","Functions, arguments, scope","Mutable default arguments: the classic trap.","function argument default scope closure"],
["04","04-oop.html",0,12,55,"کلاس و مدل شیءگرا","dunder، property، dataclass.","Classes and the object model","Dunder methods, properties, dataclasses.","class dunder property dataclass"],
["05","05-modules.html",0,12,45,"ماژول و پکیج","import، مسیر، و واردکردن دایره‌ای.","Modules and packages","Imports, paths, and circular imports.","module package import __init__"],
["06","06-comprehension.html",0,12,50,"comprehension و iterator","خوانا نوشتن حلقه.","Comprehensions and iterators","Writing loops readably.","comprehension iterator iterable enumerate zip"],
["07","07-generator.html",0,12,55,"generator و yield","پردازش داده‌ای که در حافظه جا نمی‌شود.","Generators and yield","Processing data that does not fit in memory.","generator yield lazy pipeline"],
["08","08-decorator.html",0,12,60,"decorator","تابعی که تابع را می‌پیچد — و کاربردهای واقعی‌اش.","Decorators","A function that wraps a function — and real uses for it.","decorator wraps closure functools"],
["09","09-context.html",0,12,45,"context manager","with، و آزاد کردن مطمئن منابع.","Context managers","with, and releasing resources reliably.","context manager with contextlib"],
["10","10-errors.html",0,12,50,"خطا و exception","سلسله‌مراتب، خطای سفارشی، و کِی نگیریم.","Errors and exceptions","The hierarchy, custom errors, and when not to catch.","exception raise custom traceback"],
["11","11-typing.html",0,12,55,"type hint و mypy","تایپ اختیاری که باگ‌ها را قبل از اجرا می‌گیرد.","Type hints and mypy","Optional typing that catches bugs before run time.","typing mypy annotation protocol generic"],
["12","12-stdlib.html",0,12,50,"کتابخانهٔ استاندارد مفید","pathlib، collections، itertools، datetime.","The useful standard library","pathlib, collections, itertools, datetime.","pathlib collections itertools datetime"],
["13","13-io.html",0,12,50,"فایل، JSON، CSV","خواندن و نوشتن بدون خراب کردن انکودینگ.","Files, JSON, CSV","Reading and writing without breaking encodings.","file json csv encoding utf8"],
["14","14-async.html",0,12,60,"async در پایتون","asyncio، و کِی اصلاً کمک نمی‌کند.","async in Python","asyncio, and when it does not help at all.","asyncio await coroutine gil"],
["15","15-testing.html",0,12,55,"تست با pytest","fixture، parametrize و mock.","Testing with pytest","Fixtures, parametrize and mocking.","pytest fixture parametrize mock"],
["16","16-packaging.html",0,12,50,"بسته‌بندی و انتشار","pyproject، ساختار پروژه و انتشار روی PyPI.","Packaging and publishing","pyproject, project layout and publishing to PyPI.","pyproject packaging wheel pypi"],
["17","17-cap1.html",0,5,70,"پروژهٔ ۱ — اسکریپت پردازش داده","خواندن CSV، پاک‌سازی و گزارش.","Project 1 — a data-processing script","Read a CSV, clean it, produce a report.","capstone script csv",1],
["18","18-cap2.html",0,7,120,"پروژهٔ ۲ — کتابخانهٔ تست‌شده","API تمیز، type hint کامل و پوشش تست.","Project 2 — a tested library","A clean API, full type hints and test coverage.","capstone library",2],
["19","19-cap3.html",0,9,170,"پروژهٔ ۳ — خط لولهٔ داده","generator، همروندی، لاگ و مدیریت خطا.","Project 3 — a data pipeline","Generators, concurrency, logging and error handling.","capstone pipeline",3]
]});

/* ═══════════════ ۱۳ — جنگو ═══════════════ */
C.push({
  id:"13-django", dir:"13-django", accent:"#0C4B33", cat:"backend",
  ico:'<path d="M13.5 3v14.5c0 2-1.6 3.2-4 3.2-3 0-5-2.4-5-6s2-6 5-6c.8 0 1.5.1 2 .4"/><path d="M17.8 8v9M17.8 3.6v1.6" stroke-linecap="round"/>',
  fa:{name:"جنگو", desc:"ORM، admin، احراز هویت و REST Framework — از پروژهٔ خالی تا استقرار.",
      intro:"جنگو «باتری‌ها سرجایشان» است: admin، احراز هویت، ORM و migration را از قبل دارد. مهارت واقعی این است که بدانی کدام باتری را استفاده کنی و کِی کنارش بگذاری."},
  en:{name:"Django", desc:"The ORM, admin, authentication and REST Framework — from an empty project to deployment.",
      intro:"Django is batteries-included: admin, auth, ORM and migrations are already there. The real skill is knowing which battery to use and when to set one aside."},
  ch:[
["01","01-architecture.html",0,12,50,"معماری جنگو و اولین پروژه","project، app، و جریان یک درخواست.","Django's architecture and first project","Projects, apps, and the path of a request.","django project app mtv request"],
["02","02-models.html",0,12,60,"model و ORM","تعریف داده، رابطه‌ها و QuerySet.","Models and the ORM","Defining data, relationships and QuerySets.","model orm queryset field relation"],
["03","03-migrations.html",0,12,50,"migration","تغییر شِما بدون از دست دادن داده.","Migrations","Changing the schema without losing data.","migration makemigrations schema"],
["04","04-views.html",0,12,55,"view و URL","function-based و class-based.","Views and URLs","Function-based and class-based views.","view url path cbv fbv"],
["05","05-templates.html",0,12,50,"template","ارث‌بری قالب و context.","Templates","Template inheritance and context.","template jinja context tag filter"],
["06","06-forms.html",0,12,50,"form و اعتبارسنجی","ModelForm و خطاهای قابل‌فهم.","Forms and validation","ModelForms and understandable errors.","form modelform validation clean"],
["07","07-admin.html",0,12,45,"admin","سفارشی‌سازی، و کِی نباید به کاربر نهایی بدهی‌اش.","The admin","Customising it, and when not to give it to end users.","admin modeladmin inline permission"],
["08","08-auth.html",0,12,55,"احراز هویت و مجوز","کاربر سفارشی، گروه و permission.","Authentication and authorisation","Custom users, groups and permissions.","auth user group permission login"],
["09","09-drf-1.html",0,12,60,"DRF ۱: serializer و view","تبدیل مدل به JSON و برعکس.","DRF 1: serializers and views","Turning models into JSON and back.","drf serializer viewset router"],
["10","10-drf-2.html",0,12,55,"DRF ۲: احراز هویت و مجوز","توکن، JWT و permission سفارشی.","DRF 2: authentication and permissions","Tokens, JWT and custom permissions.","drf token jwt permission throttle"],
["11","11-queries.html",0,12,60,"کوئری بهینه","select_related، prefetch_related و N+1.","Optimised queries","select_related, prefetch_related and N+1.","select_related prefetch n+1 explain"],
["12","12-signals.html",0,12,45,"signal و middleware","قدرتمند و خطرناک — کِی استفاده کنیم.","Signals and middleware","Powerful and dangerous — when to use them.","signal middleware hook"],
["13","13-celery.html",0,12,55,"کش و صف با Celery","کار سنگین را از چرخهٔ درخواست بیرون بیاور.","Caching and queues with Celery","Get heavy work out of the request cycle.","celery redis cache task beat"],
["14","14-testing.html",0,12,55,"تست","TestCase، client و fixture.","Testing","TestCase, the test client and fixtures.","test testcase client factory pytest-django"],
["15","15-security.html",0,12,50,"امنیت","CSRF، XSS، SQL injection و تنظیمات production.","Security","CSRF, XSS, SQL injection and production settings.","csrf xss injection security settings"],
["16","16-deploy.html",0,12,60,"استقرار","Gunicorn، Nginx، فایل استاتیک و داکر.","Deployment","Gunicorn, Nginx, static files and Docker.","gunicorn nginx static whitenoise docker"],
["17","17-cap1.html",0,5,80,"پروژهٔ ۱ — وبلاگ با admin","مدل، view، قالب و پنل مدیریت.","Project 1 — a blog with the admin","Models, views, templates and the admin panel.","capstone blog",1],
["18","18-cap2.html",0,7,140,"پروژهٔ ۲ — REST API با DRF","احراز هویت، مجوز، صفحه‌بندی و تست.","Project 2 — a REST API with DRF","Authentication, permissions, pagination and tests.","capstone drf api",2],
["19","19-cap3.html",0,9,200,"پروژهٔ ۳ — اپ کامل با صف و استقرار","کار پس‌زمینه، کش، کوئری بهینه و استقرار با داکر.","Project 3 — a full app with queues and deployment","Background work, caching, optimised queries and a Docker deployment.","capstone celery deploy",3]
]});

/* ═══════════════ ۱۴ — فلسک ═══════════════ */
C.push({
  id:"14-flask", dir:"14-flask", accent:"#5C5C5C", cat:"backend",
  ico:'<path d="M10 3h4M12 3v5.5L7 18.5c-.8 1.5.2 2.5 1.6 2.5h6.8c1.4 0 2.4-1 1.6-2.5L12 8.5"/><path d="M8.6 14h6.8" stroke-linecap="round"/>',
  fa:{name:"فلسک", desc:"میکروفریم‌ورک: blueprint، SQLAlchemy، JWT و ساختاری که با پروژه بزرگ شود.",
      intro:"فلسک تقریباً هیچ تصمیمی برایت نمی‌گیرد. این هم آزادی است هم دام: باید خودت ساختار بسازی. این مسیر ساختاری می‌دهد که از یک فایل تا یک سرویس واقعی مقیاس بگیرد."},
  en:{name:"Flask", desc:"The micro-framework: blueprints, SQLAlchemy, JWT and a structure that grows with the project.",
      intro:"Flask makes almost no decisions for you. That is freedom and a trap: you must build the structure yourself. This track gives you one that scales from a single file to a real service."},
  ch:[
["01","01-vs-django.html",0,12,45,"فلسک در برابر جنگو","کدام مسئله با کدام ابزار.","Flask versus Django","Which problem suits which tool.","flask django comparison micro"],
["02","02-first-app.html",0,12,45,"اولین اپ و routing","از یک فایل شروع کن.","First app and routing","Start from one file.","route app decorator methods"],
["03","03-jinja.html",0,12,50,"قالب با Jinja2","ارث‌بری، فیلتر و ماکرو.","Templates with Jinja2","Inheritance, filters and macros.","jinja template filter macro"],
["04","04-request.html",0,12,50,"request و response","context، فرم، فایل و کوکی.","Requests and responses","Contexts, forms, files and cookies.","request response context cookie session"],
["05","05-blueprint.html",0,12,55,"blueprint و ساختار پروژه","از یک فایل به یک پکیج قابل نگهداری.","Blueprints and project structure","From one file to a maintainable package.","blueprint factory structure config"],
["06","06-sqlalchemy.html",0,12,60,"پایگاه‌داده با SQLAlchemy","مدل، session و رابطه‌ها.","Databases with SQLAlchemy","Models, sessions and relationships.","sqlalchemy model session relationship"],
["07","07-alembic.html",0,12,45,"migration با Alembic","تغییر شِما، کنترل‌شده.","Migrations with Alembic","Schema changes, under control.","alembic migration revision"],
["08","08-forms.html",0,12,45,"فرم و اعتبارسنجی","WTForms و اعتبارسنجی سمت سرور.","Forms and validation","WTForms and server-side validation.","wtforms validation csrf"],
["09","09-rest.html",0,12,55,"REST API","طراحی، serialization و کد وضعیت درست.","REST APIs","Design, serialisation and correct status codes.","rest api marshmallow status"],
["10","10-auth.html",0,12,55,"احراز هویت با JWT","ورود، توکن و محافظت از مسیرها.","Authentication with JWT","Login, tokens and protecting routes.","jwt auth token login"],
["11","11-errors.html",0,12,45,"مدیریت خطا و لاگ","پاسخ خطای یکدست و لاگ قابل جستجو.","Error handling and logging","Consistent error responses and searchable logs.","errorhandler logging abort"],
["12","12-testing.html",0,12,50,"تست","test client، fixture و پایگاه‌دادهٔ تست.","Testing","The test client, fixtures and a test database.","pytest client fixture testing"],
["13","13-config.html",0,12,45,"پیکربندی و محیط","تنظیمات جدا برای توسعه و production.","Configuration and environments","Separate settings for development and production.","config environment dotenv"],
["14","14-deploy.html",0,12,55,"استقرار","Gunicorn، Nginx و داکر.","Deployment","Gunicorn, Nginx and Docker.","gunicorn nginx docker wsgi"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — API کوچک","چند مسیر، اعتبارسنجی و تست.","Project 1 — a small API","A few routes, validation and tests.","capstone api",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — سرویس با پایگاه‌داده و ورود","SQLAlchemy، JWT و ساختار blueprint.","Project 2 — a service with a database and login","SQLAlchemy, JWT and a blueprint structure.","capstone auth db",2],
["17","17-cap3.html",0,9,170,"پروژهٔ ۳ — سرویس آمادهٔ استقرار","مهاجرت، لاگ، تست و داکر.","Project 3 — a deployable service","Migrations, logging, tests and Docker.","capstone deploy",3]
]});

/* ═══════════════ ۱۵ — ری‌اکت ═══════════════ */
C.push({
  id:"15-react", dir:"15-react", accent:"#61DAFB", cat:"frontend",
  ico:'<circle cx="12" cy="12" r="2.1"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)"/>',
  fa:{name:"ری‌اکت", desc:"UI به‌عنوان تابعی از state: هوک‌ها، رندر مجدد، مدیریت state، دریافت داده و کارایی.",
      intro:"بیشتر مشکلات ری‌اکت از یک سوءتفاهم می‌آید: اینکه فکر کنی داری DOM را دستکاری می‌کنی. نمی‌کنی. داری توصیف می‌کنی که UI برای یک state مشخص چه شکلی است. این مسیر روی همان یک جمله بنا شده."},
  en:{name:"React", desc:"UI as a function of state: hooks, re-renders, state management, data fetching and performance.",
      intro:"Most React problems come from one misunderstanding: thinking you are manipulating the DOM. You are not. You are describing what the UI looks like for a given state. This track is built on that one sentence."},
  ch:[
["01","01-mental-model.html",0,12,55,"مدل ذهنی: UI تابعی از state","چرا این جمله همه‌چیز را عوض می‌کند.","The mental model: UI as a function of state","Why that one sentence changes everything.","react mental model declarative state"],
["02","02-jsx.html",0,12,45,"JSX و کامپوننت","JSX چه چیزی واقعاً هست.","JSX and components","What JSX actually compiles to.","jsx component element createelement"],
["03","03-props.html",0,12,50,"props و ترکیب","children، و ترکیب به‌جای پیکربندی.","Props and composition","children, and composition over configuration.","props children composition"],
["04","04-state.html",0,12,55,"state و useState","state چیست و چه چیزی نباید state باشد.","State and useState","What state is, and what should not be state.","usestate state derived"],
["05","05-rerender.html",0,12,60,"رندر مجدد — کِی و چرا","منبع نصف سؤال‌های ری‌اکت.","Re-renders — when and why","The source of half of all React questions.","rerender reconciliation batching"],
["06","06-effect.html",0,12,65,"useEffect","و اینکه اکثر useEffectهایی که می‌نویسی لازم نیستند.","useEffect","And why most of the useEffects you write are unnecessary.","useeffect cleanup dependency sync"],
["07","07-forms.html",0,12,50,"فرم‌ها","controlled، uncontrolled و اعتبارسنجی.","Forms","Controlled, uncontrolled and validation.","form controlled input validation"],
["08","08-lists.html",0,12,45,"لیست و key","چرا index به‌عنوان key باگ می‌سازد.","Lists and keys","Why index-as-key creates bugs.","list key reconciliation"],
["09","09-refs-memo.html",0,12,55,"useRef، useMemo، useCallback","کِی واقعاً لازم‌اند — و معمولاً نیستند.","useRef, useMemo, useCallback","When they are actually needed — usually they are not.","useref usememo usecallback memo"],
["10","10-context.html",0,12,50,"Context","حل prop drilling، و هزینهٔ رندرش.","Context","Solving prop drilling, and its render cost.","context provider drilling"],
["11","11-reducer.html",0,12,55,"useReducer و state پیچیده","وقتی useState کافی نیست.","useReducer and complex state","When useState is not enough.","usereducer reducer action"],
["12","12-global-state.html",0,12,55,"مدیریت state سراسری","Zustand و Redux Toolkit — و کِی هیچ‌کدام.","Global state management","Zustand and Redux Toolkit — and when neither.","zustand redux store global state"],
["13","13-data.html",0,12,65,"دریافت داده","React Query: کش، بی‌اعتبارسازی و وضعیت سرور.","Data fetching","React Query: caching, invalidation and server state.","react query fetch cache swr"],
["14","14-routing.html",0,12,50,"مسیریابی","مسیر تودرتو، پارامتر و محافظت.","Routing","Nested routes, parameters and guards.","router route param guard"],
["15","15-splitting.html",0,12,50,"کد اسپلیت و Suspense","بارگذاری تنبل و مرز خطا.","Code splitting and Suspense","Lazy loading and error boundaries.","lazy suspense error boundary"],
["16","16-testing.html",0,12,55,"تست","Testing Library و تست از دید کاربر.","Testing","Testing Library and testing from the user's point of view.","testing library user event vitest"],
["17","17-performance.html",0,12,60,"کارایی","پروفایلر، لیست بلند و رندر غیرضروری.","Performance","The profiler, long lists and needless renders.","profiler virtualization memo performance"],
["18","18-patterns.html",0,12,55,"الگوها و ضدالگوها","الگوهای کامپوننت که واقعاً کار می‌کنند.","Patterns and anti-patterns","Component patterns that actually hold up.","pattern compound render prop hook"],
["19","19-cap1.html",0,5,80,"پروژهٔ ۱ — لیست کارها با state واقعی","کامپوننت، فرم، لیست و ماندگاری محلی.","Project 1 — a to-do app with real state","Components, forms, lists and local persistence.","capstone todo",1],
["20","20-cap2.html",0,7,140,"پروژهٔ ۲ — داشبورد با داده از API","دریافت داده، کش، مسیریابی و وضعیت بارگذاری.","Project 2 — a dashboard fed by an API","Data fetching, caching, routing and loading states.","capstone dashboard",2],
["21","21-cap3.html",0,9,200,"پروژهٔ ۳ — اپ کامل با احراز هویت","ورود، مسیر محافظت‌شده، تست و بهینه‌سازی کارایی.","Project 3 — a full app with authentication","Login, protected routes, tests and performance work.","capstone auth spa",3]
]});

/* ═══════════════ ۱۶ — Next.js ═══════════════ */
C.push({
  id:"16-nextjs", dir:"16-nextjs", accent:"#111827", cat:"frontend",
  ico:'<circle cx="12" cy="12" r="9"/><path d="M9 16V9l7.5 9.6M15.2 9v6" stroke-linecap="round"/>',
  fa:{name:"Next.js", desc:"App Router، Server Component، رندر سمت سرور، Server Action و استقرار خودمیزبان.",
      intro:"Next پاسخ این سؤال است: بخشی از UI را سرور بسازد یا مرورگر؟ App Router این تصمیم را برای هر کامپوننت جداگانه ممکن کرده — و همین، هم قدرتش است هم جایی که همه گیج می‌شوند."},
  en:{name:"Next.js", desc:"App Router, Server Components, server rendering, Server Actions and self-hosted deployment.",
      intro:"Next answers one question: should the server or the browser build this piece of UI? The App Router lets you decide per component — which is both its power and where everyone gets confused."},
  ch:[
["01","01-why.html",0,12,50,"چرا Next؛ App Router","مسئله‌ای که SPA خالی حل نمی‌کند.","Why Next; the App Router","The problem a plain SPA does not solve.","nextjs app router why ssr"],
["02","02-rendering.html",0,12,60,"مدل‌های رندر","SSR، SSG، ISR، CSR — و انتخاب درست.","Rendering models","SSR, SSG, ISR, CSR — and choosing correctly.","ssr ssg isr csr prerender"],
["03","03-server-components.html",0,12,65,"Server Component در برابر Client Component","مرز بین این دو، و خطاهایی که از عبور از آن می‌آید.","Server versus Client Components","The boundary between them, and the errors crossing it causes.","server component client use client boundary"],
["04","04-routing.html",0,12,55,"مسیریابی و layout","مسیر تودرتو، گروه و layout مشترک.","Routing and layouts","Nested routes, groups and shared layouts.","routing layout group dynamic segment"],
["05","05-data.html",0,12,60,"دریافت داده و کش","fetch، revalidate و لایه‌های کش.","Data fetching and caching","fetch, revalidate and the caching layers.","fetch cache revalidate tag"],
["06","06-actions.html",0,12,60,"Server Action و فرم","جهش داده بدون نوشتن API.","Server Actions and forms","Mutating data without writing an API.","server action form mutation revalidate"],
["07","07-route-handlers.html",0,12,50,"Route Handler","وقتی واقعاً به یک endpoint نیاز داری.","Route handlers","When you genuinely need an endpoint.","route handler api rest"],
["08","08-middleware.html",0,12,50,"middleware","تغییر مسیر، هدر و بررسی پیش از رندر.","Middleware","Redirects, headers and pre-render checks.","middleware edge redirect matcher"],
["09","09-auth.html",0,12,60,"احراز هویت","session، کوکی و محافظت از مسیر.","Authentication","Sessions, cookies and protecting routes.","auth session cookie nextauth"],
["10","10-assets.html",0,12,50,"تصویر، فونت و بهینه‌سازی","و فونت فارسی بدون درخواست بیرونی.","Images, fonts and optimisation","Including Persian fonts with no external request.","image font optimization lcp"],
["11","11-seo.html",0,12,45,"SEO و متادیتا","متادیتای پویا و sitemap.","SEO and metadata","Dynamic metadata and sitemaps.","seo metadata opengraph sitemap"],
["12","12-streaming.html",0,12,55,"استریم و loading","نمایش تدریجی به‌جای صفحهٔ سفید.","Streaming and loading states","Progressive rendering instead of a blank page.","streaming suspense loading skeleton"],
["13","13-db.html",0,12,55,"اتصال به پایگاه‌داده","کوئری امن از Server Component.","Talking to a database","Querying safely from a Server Component.","database prisma drizzle orm"],
["14","14-errors.html",0,12,45,"خطا و not-found","مرز خطا در هر سطح.","Errors and not-found","Error boundaries at every level.","error boundary notfound"],
["15","15-testing.html",0,12,50,"تست","تست کامپوننت و تست end-to-end.","Testing","Component tests and end-to-end tests.","test playwright vitest e2e"],
["16","16-deploy.html",0,12,60,"استقرار خودمیزبان","با داکر و Nginx، بدون وابستگی به یک ارائه‌دهنده.","Self-hosted deployment","With Docker and Nginx, tied to no single provider.","deploy docker standalone nginx"],
["17","17-cap1.html",0,5,80,"پروژهٔ ۱ — سایت محتوایی استاتیک","مسیر پویا، متادیتا و بهینه‌سازی تصویر.","Project 1 — a static content site","Dynamic routes, metadata and image optimisation.","capstone static blog",1],
["18","18-cap2.html",0,7,140,"پروژهٔ ۲ — اپ با پایگاه‌داده و فرم","Server Action، اعتبارسنجی و بازاعتبارسنجی کش.","Project 2 — an app with a database and forms","Server Actions, validation and cache revalidation.","capstone form database",2],
["19","19-cap3.html",0,9,200,"پروژهٔ ۳ — اپ کامل با احراز هویت و استقرار","ورود، مسیر محافظت‌شده، استریم و استقرار با داکر.","Project 3 — a full app with auth and deployment","Login, protected routes, streaming and a Docker deployment.","capstone auth deploy",3]
]});

/* ═══════════════ ۱۷ — انگولار ═══════════════ */
C.push({
  id:"17-angular", dir:"17-angular", accent:"#DD0031", cat:"frontend",
  ico:'<path d="M12 2.6 21 5.8l-1.4 12L12 21.4 4.4 17.8 3 5.8z"/><path d="m8.8 15 3.2-7.6L15.2 15M9.9 12.6h4.2" stroke-linecap="round"/>',
  fa:{name:"انگولار", desc:"کامپوننت، DI، RxJS، signal، فرم reactive و مدیریت state — فریم‌ورک کامل، با ساختار.",
      intro:"انگولار برخلاف ری‌اکت یک فریم‌ورک کامل است: مسیریابی، فرم، HTTP و تزریق وابستگی همه در خودش هستند. سختی‌اش نحو نیست، RxJS است — و این مسیر وقت لازم را رویش می‌گذارد."},
  en:{name:"Angular", desc:"Components, DI, RxJS, signals, reactive forms and state management — a complete, structured framework.",
      intro:"Unlike React, Angular is a complete framework: routing, forms, HTTP and dependency injection are all built in. The hard part is not the syntax, it is RxJS — and this track gives that the time it needs."},
  ch:[
["01","01-architecture.html",0,12,50,"معماری انگولار و CLI","ساختار پروژه و ابزار خط فرمان.","Angular's architecture and the CLI","Project structure and the command-line tool.","angular cli project structure"],
["02","02-components.html",0,12,55,"کامپوننت و template","نحو قالب و چرخهٔ عمر.","Components and templates","Template syntax and lifecycle.","component template lifecycle oninit"],
["03","03-binding.html",0,12,55,"data binding","یک‌طرفه، دوطرفه و رویداد.","Data binding","One-way, two-way and events.","binding interpolation ngmodel event"],
["04","04-directives.html",0,12,50,"directive","ساختاری و صفتی، و ساختن directive خودت.","Directives","Structural and attribute, and writing your own.","directive ngif ngfor structural"],
["05","05-pipes.html",0,12,40,"pipe","تبدیل نمایش، و pipe سفارشی.","Pipes","Transforming what is displayed, and custom pipes.","pipe async date custom"],
["06","06-di.html",0,12,55,"service و تزریق وابستگی","provider، طول عمر و injector.","Services and dependency injection","Providers, lifetimes and injectors.","service di provider injector"],
["07","07-rxjs-1.html",0,12,65,"RxJS ۱: Observable","جریان داده در زمان — مدل ذهنی.","RxJS 1: Observables","Data as a stream over time — the mental model.","rxjs observable subscribe stream"],
["08","08-rxjs-2.html",0,12,65,"RxJS ۲: عملگرها","map، switchMap، combineLatest — و نشتی اشتراک.","RxJS 2: operators","map, switchMap, combineLatest — and subscription leaks.","operator switchmap combinelatest unsubscribe"],
["09","09-signals.html",0,12,55,"signal","مدل واکنشی جدید، در کنار RxJS.","Signals","The new reactivity model, alongside RxJS.","signal computed effect reactivity"],
["10","10-forms.html",0,12,60,"فرم: template-driven و reactive","و اینکه چرا reactive معمولاً درست‌تر است.","Forms: template-driven and reactive","And why reactive is usually the right choice.","form reactive validator formgroup"],
["11","11-http.html",0,12,55,"HttpClient و interceptor","درخواست، خطا و افزودن توکن.","HttpClient and interceptors","Requests, errors and attaching tokens.","httpclient interceptor error retry"],
["12","12-routing.html",0,12,55,"مسیریابی و guard","مسیر تودرتو، پارامتر و محافظت.","Routing and guards","Nested routes, parameters and protection.","router guard resolver param"],
["13","13-lazy.html",0,12,50,"lazy loading","تقسیم باندل و بارگذاری بر حسب نیاز.","Lazy loading","Splitting the bundle and loading on demand.","lazy loading module bundle"],
["14","14-state.html",0,12,55,"مدیریت state","NgRx و گزینه‌های ساده‌تر.","State management","NgRx and the simpler alternatives.","ngrx store effect state"],
["15","15-testing.html",0,12,55,"تست","TestBed، spy و تست کامپوننت.","Testing","TestBed, spies and component tests.","testbed jasmine karma spy"],
["16","16-change-detection.html",0,12,60,"change detection و کارایی","OnPush و اینکه چرا اپت کند شده.","Change detection and performance","OnPush, and why your app got slow.","change detection onpush zone performance"],
["17","17-standalone.html",0,12,50,"standalone component","انگولار بدون NgModule.","Standalone components","Angular without NgModules.","standalone component module import"],
["18","18-deploy.html",0,12,50,"بیلد و استقرار","بهینه‌سازی باندل و سرو کردن با Nginx.","Building and deploying","Bundle optimisation and serving with Nginx.","build production bundle nginx"],
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
["01","01-dart.html",0,12,60,"Dart در ۹۰ دقیقه","نوع‌ها، null safety، async و کلاس.","Dart in 90 minutes","Types, null safety, async and classes.","dart null safety future class"],
["02","02-first-app.html",0,12,45,"اولین اپ و ساختار پروژه","ابزار، شبیه‌ساز و hot reload.","First app and project structure","Tooling, emulators and hot reload.","flutter create hot reload structure"],
["03","03-widgets.html",0,12,55,"Widget: stateless و stateful","درخت widget و چرخهٔ ساخت.","Widgets: stateless and stateful","The widget tree and the build cycle.","widget stateless stateful build tree"],
["04","04-layout-1.html",0,12,55,"چیدمان: Row، Column، Flex","و خطای overflow که همه می‌گیرند.","Layout: Row, Column, Flex","And the overflow error everyone hits.","row column flex expanded overflow"],
["05","05-layout-2.html",0,12,60,"چیدمان پیشرفته و constraint","قانون: constraint پایین می‌رود، اندازه بالا می‌آید.","Advanced layout and constraints","The rule: constraints go down, sizes come up.","constraint boxconstraints stack layoutbuilder"],
["06","06-navigation.html",0,12,50,"ناوبری","صفحه، آرگومان و مسیریابی نام‌دار.","Navigation","Screens, arguments and named routes.","navigator route push gorouter"],
["07","07-state-1.html",0,12,55,"مدیریت state ۱","setState و InheritedWidget.","State management 1","setState and InheritedWidget.","setstate inherited widget lifting"],
["08","08-state-2.html",0,12,60,"مدیریت state ۲","Provider و Riverpod در عمل.","State management 2","Provider and Riverpod in practice.","provider riverpod bloc state"],
["09","09-forms.html",0,12,50,"فرم و ورودی","اعتبارسنجی و کنترلر.","Forms and input","Validation and controllers.","form textfield validator controller"],
["10","10-lists.html",0,12,55,"لیست و کارایی","ListView.builder و لیست بلند.","Lists and performance","ListView.builder and long lists.","listview builder scroll performance"],
["11","11-network.html",0,12,55,"شبکه و JSON","درخواست، مدل و مدیریت خطا.","Networking and JSON","Requests, models and error handling.","http dio json serialization"],
["12","12-storage.html",0,12,50,"ذخیره‌سازی محلی","preferences، فایل و پایگاه‌دادهٔ محلی.","Local storage","Preferences, files and a local database.","sharedpreferences sqlite hive isar"],
["13","13-animation.html",0,12,55,"انیمیشن","ضمنی، صریح و انتقال بین صفحه‌ها.","Animation","Implicit, explicit and page transitions.","animation controller tween hero"],
["14","14-platform.html",0,12,55,"کد پلتفرم‌محور","کانال بومی و پلاگین.","Platform-specific code","Native channels and plugins.","platform channel plugin native"],
["15","15-rtl.html",0,12,55,"تم، فونت و اپ راست‌به‌چپ","طراحی فارسی که واقعاً درست دربیاید.","Theming, fonts and RTL apps","Persian design that actually comes out right.","rtl locale font theme intl"],
["16","16-testing.html",0,12,50,"تست","تست widget و تست یکپارچه.","Testing","Widget tests and integration tests.","widget test integration golden"],
["17","17-debug.html",0,12,50,"عیب‌یابی و پروفایل","DevTools و پیدا کردن پرش فریم.","Debugging and profiling","DevTools and finding dropped frames.","devtools profile jank inspector"],
["18","18-release.html",0,12,60,"انتشار","امضا، بیلد اندروید و iOS، و اندازهٔ اپ.","Releasing","Signing, Android and iOS builds, and app size.","release signing apk appbundle ipa"],
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
["01","01-why.html",0,12,50,"چه مسئله‌ای را حل می‌کند","الاستیک در برابر پایگاه‌دادهٔ رابطه‌ای.","What problem it solves","Elasticsearch versus a relational database.","search inverted index vs sql"],
["02","02-concepts.html",0,12,50,"نصب و مفاهیم","index، document، shard و replica.","Setup and concepts","Indices, documents, shards and replicas.","index document shard replica cluster"],
["03","03-mapping.html",0,12,55,"mapping و نوع داده","text در برابر keyword — مهم‌ترین تصمیم.","Mappings and field types","text versus keyword — the decision that matters most.","mapping text keyword dynamic"],
["04","04-analysis.html",0,12,65,"تحلیل متن و زبان فارسی","analyzer، tokenizer، نرمال‌سازی و ریشه‌یابی فارسی.","Text analysis and Persian","Analyzers, tokenizers, normalisation and Persian stemming.","analyzer tokenizer persian normalizer stemmer"],
["05","05-indexing.html",0,12,50,"نمایه‌سازی و به‌روزرسانی","تک‌تک، دسته‌ای و همگام‌سازی.","Indexing and updates","Single documents, bulk, and staying in sync.","index bulk update refresh"],
["06","06-query-1.html",0,12,55,"جستجو ۱: query DSL پایه","match، term و تفاوت حیاتی‌شان.","Search 1: the basic query DSL","match, term, and the crucial difference.","match term query dsl filter"],
["07","07-query-2.html",0,12,60,"جستجو ۲: ترکیبی","bool، fuzzy، phrase و جستجوی چندفیلدی.","Search 2: compound queries","bool, fuzzy, phrase and multi-field search.","bool fuzzy phrase multi_match"],
["08","08-relevance.html",0,12,60,"امتیازدهی و ربط","BM25، boost و اینکه چرا آن نتیجه اول آمده.","Scoring and relevance","BM25, boosting, and why that result came first.","score bm25 boost explain relevance"],
["09","09-aggregation.html",0,12,60,"aggregation","دسته‌بندی، آمار و فیلتر جانبی.","Aggregations","Bucketing, metrics and faceting.","aggregation bucket metric facet"],
["10","10-paging.html",0,12,45,"صفحه‌بندی","from/size، search_after و صفحهٔ عمیق.","Pagination","from/size, search_after and deep paging.","pagination from size search_after scroll"],
["11","11-performance.html",0,12,55,"کارایی و طراحی index","تعداد shard، حافظه و کوئری کند.","Performance and index design","Shard count, memory and slow queries.","performance shard heap slowlog"],
["12","12-kibana.html",0,12,45,"Kibana","کاوش داده و ساخت داشبورد.","Kibana","Exploring data and building dashboards.","kibana dashboard discover visualization"],
["13","13-ops.html",0,12,55,"عملیات","کلاستر، replica، snapshot و بازیابی.","Operations","Clusters, replicas, snapshots and recovery.","cluster snapshot restore health"],
["14","14-clients.html",0,12,55,"اتصال از اپ","کلاینت رسمی در دات‌نت، پایتون و Node.","Connecting from your app","Official clients in .NET, Python and Node.","client dotnet python nodejs"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — جستجوی ساده روی متن فارسی","mapping درست، analyzer فارسی و کوئری match.","Project 1 — simple search over Persian text","A correct mapping, a Persian analyzer and a match query.","capstone persian search",1],
["16","16-cap2.html",0,7,120,"پروژهٔ ۲ — جستجوی محصولات با فیلتر","کوئری ترکیبی، facet و مرتب‌سازی.","Project 2 — product search with facets","Compound queries, facets and sorting.","capstone facet filter",2],
["17","17-cap3.html",0,9,180,"پروژهٔ ۳ — موتور جستجوی کامل","تنظیم ربط، خودتکمیل، همگام‌سازی با پایگاه‌داده و پایش.","Project 3 — a complete search engine","Relevance tuning, autocomplete, database sync and monitoring.","capstone autocomplete relevance",3]
]});

/* ═══════════════ ۲۰ — ارتباط بی‌درنگ ═══════════════ */
C.push({
  id:"20-realtime", dir:"20-realtime", accent:"#F59E0B", cat:"data",
  ico:'<path d="M4 12a8 8 0 0 1 8-8M20 12a8 8 0 0 1-8 8" stroke-linecap="round"/><circle cx="12" cy="12" r="2.4"/><path d="M7.6 12a4.4 4.4 0 0 1 4.4-4.4M16.4 12a4.4 4.4 0 0 1-4.4 4.4" stroke-linecap="round"/>',
  fa:{name:"WebSocket و ارتباط بی‌درنگ", desc:"از polling تا WebSocket و SSE — سمت سرور و سمت مرورگر، تا مقیاس افقی.",
      intro:"HTTP برای «بپرس و جواب بگیر» ساخته شده. وقتی سرور باید بدون سؤال حرف بزند — چت، اعلان، قیمت زنده — به چیز دیگری نیاز داری. این مسیر هر دو سرِ ماجرا را می‌سازد: بک‌اند و فرانت‌اند."},
  en:{name:"WebSockets & real-time", desc:"From polling to WebSockets and SSE — server side and browser side, all the way to horizontal scale.",
      intro:"HTTP is built for ask-and-answer. When the server must speak unprompted — chat, notifications, live prices — you need something else. This track builds both ends: backend and frontend."},
  ch:[
["01","01-why.html",0,12,50,"چرا HTTP کافی نیست","polling، long-polling، SSE و WebSocket.","Why HTTP is not enough","Polling, long-polling, SSE and WebSockets.","polling sse websocket comparison"],
["02","02-protocol.html",0,12,55,"پروتکل WebSocket","handshake، فریم و اینکه چطور از HTTP جدا می‌شود.","The WebSocket protocol","The handshake, frames, and how it leaves HTTP behind.","websocket handshake upgrade frame"],
["03","03-browser.html",0,12,55,"سمت مرورگر","WebSocket API، رویدادها و مدیریت خطا.","The browser side","The WebSocket API, events and error handling.","websocket api onmessage client"],
["04","04-node.html",0,12,55,"سمت سرور: Node","با ws و Socket.IO.","Server side: Node","With ws and Socket.IO.","node ws socket.io server"],
["05","05-signalr.html",0,12,55,"سمت سرور: SignalR","دات‌نت، hub و fallback خودکار.","Server side: SignalR",". NET, hubs and automatic fallback.","signalr hub dotnet"],
["06","06-python.html",0,12,55,"سمت سرور: پایتون","FastAPI و Django Channels.","Server side: Python","FastAPI and Django Channels.","fastapi channels asgi websocket"],
["07","07-protocol-design.html",0,12,55,"طراحی پروتکل پیام خودت","نوع پیام، نسخه و سازگاری.","Designing your own message protocol","Message types, versioning and compatibility.","message protocol schema versioning"],
["08","08-auth.html",0,12,55,"احراز هویت روی سوکت","توکن، و اینکه چرا هدر Authorization اینجا نیست.","Authenticating a socket","Tokens, and why there is no Authorization header here.","auth token websocket handshake"],
["09","09-rooms.html",0,12,55,"اتاق، کانال و انتشار","ارسال به یک نفر، یک گروه، یا همه.","Rooms, channels and broadcasting","Sending to one, to a group, or to everyone.","room channel broadcast group"],
["10","10-scale.html",0,12,60,"مقیاس افقی","backplane با Redis، و مسئلهٔ چسبندگی اتصال.","Horizontal scale","A Redis backplane, and the sticky-connection problem.","scale redis backplane pubsub sticky"],
["11","11-reconnect.html",0,12,55,"اتصال مجدد و حالت آفلاین","صف پیام محلی و همگام‌سازی پس از بازگشت.","Reconnection and offline state","A local outbox and resyncing after reconnect.","reconnect backoff offline queue"],
["12","12-sse.html",0,12,45,"SSE و کِی بهتر است","یک‌طرفه، ساده‌تر، و اغلب کافی.","SSE and when it is the better choice","One-way, simpler, and often enough.","sse eventsource stream"],
["13","13-debug.html",0,12,50,"عیب‌یابی","ابزار مرورگر، لاگ و ردیابی پیام.","Debugging","Browser tools, logging and tracing messages.","debug devtools frame inspect"],
["14","14-nginx.html",0,12,50,"استقرار پشت Nginx","هدر Upgrade، timeout و TLS.","Deploying behind Nginx","The Upgrade header, timeouts and TLS.","nginx upgrade proxy timeout wss"],
["15","15-cap1.html",0,5,70,"پروژهٔ ۱ — اعلان زنده","سرور یک پیام می‌فرستد، مرورگر نشان می‌دهد.","Project 1 — live notifications","The server pushes, the browser displays.","capstone notification",1],
["16","16-cap2.html",0,7,130,"پروژهٔ ۲ — چت چنداتاقه","اتاق، احراز هویت، تاریخچه و اتصال مجدد.","Project 2 — multi-room chat","Rooms, authentication, history and reconnection.","capstone chat rooms",2],
["17","17-cap3.html",0,9,190,"پروژهٔ ۳ — سامانهٔ بی‌درنگ مقیاس‌پذیر","چند نمونهٔ سرور، Redis، پایش و استقرار پشت Nginx.","Project 3 — a scalable real-time system","Multiple server instances, Redis, monitoring and an Nginx deployment.","capstone scale redis",3]
]});

/* ═══════════════ ۲۱ — پروکسی و VPN ═══════════════ */
C.push({
  id:"21-proxy-vpn", dir:"21-proxy-vpn", accent:"#0891B2", cat:"infra",
  ico:'<rect x="2.6" y="8.5" width="7" height="7" rx="1.6"/><rect x="14.4" y="8.5" width="7" height="7" rx="1.6"/><path d="M9.6 12h4.8" stroke-linecap="round"/><path d="M12 9.6v4.8" stroke-linecap="round" opacity=".5"/>',
  fa:{name:"پروکسی و VPN", desc:"مهندسی شبکه در عمل: forward و reverse proxy، SOCKS5، تونل، WireGuard و OpenVPN.",
      intro:"پروکسی و VPN هر دو یک کار می‌کنند: ترافیک را از مسیر دیگری عبور می‌دهند. تفاوتشان در لایه‌ای است که در آن کار می‌کنند. این مسیر هر دو را از پایه می‌سازد — با کد، نه فقط با پیکربندی."},
  en:{name:"Proxies & VPNs", desc:"Practical network engineering: forward and reverse proxies, SOCKS5, tunnels, WireGuard and OpenVPN.",
      intro:"Proxies and VPNs do the same thing: send traffic another way. They differ in the layer they operate at. This track builds both from the ground up — with code, not only configuration."},
  ch:[
["01","01-what.html",0,12,50,"پروکسی چیست","forward، reverse و transparent — سه چیز متفاوت با یک اسم.","What a proxy is","Forward, reverse and transparent — three different things, one name.","proxy forward reverse transparent"],
["02","02-http-proxy.html",0,12,55,"HTTP proxy و متد CONNECT","چطور یک درخواست از پروکسی رد می‌شود.","HTTP proxies and the CONNECT method","How a request passes through a proxy.","http proxy connect tunnel header"],
["03","03-socks.html",0,12,55,"SOCKS5","لایهٔ پایین‌تر، انعطاف بیشتر.","SOCKS5","A lower layer, more flexibility.","socks5 socks handshake udp"],
["04","04-build-proxy.html",0,12,65,"ساخت یک پروکسی ساده با کد","سوکت، انتقال دوطرفه و همروندی.","Building a simple proxy in code","Sockets, bidirectional relaying and concurrency.","socket relay proxy implementation"],
["05","05-tls.html",0,12,60,"TLS و termination","رمزنگاری، گواهی و جایی که رمز باز می‌شود.","TLS and termination","Encryption, certificates and where decryption happens.","tls sni termination certificate"],
["06","06-chaining.html",0,12,50,"زنجیره‌کردن پروکسی","چند پرش، و هزینهٔ تأخیرش.","Chaining proxies","Multiple hops, and the latency they cost.","chain upstream hop latency"],
["07","07-vpn-model.html",0,12,55,"VPN چیست: مدل تونل","تفاوت بنیادی با پروکسی، در لایهٔ شبکه.","What a VPN is: the tunnel model","How it fundamentally differs from a proxy, at the network layer.","vpn tunnel tun tap layer3"],
["08","08-wireguard.html",0,12,65,"WireGuard","کلید، peer، و راه‌اندازی از صفر.","WireGuard","Keys, peers, and setting one up from scratch.","wireguard peer key allowedips"],
["09","09-openvpn.html",0,12,60,"OpenVPN","گواهی، پیکربندی و مقایسه با WireGuard.","OpenVPN","Certificates, configuration and a comparison with WireGuard.","openvpn certificate config tls"],
["10","10-routing.html",0,12,60,"مسیریابی و NAT","جدول مسیر، forwarding و masquerade.","Routing and NAT","Routing tables, forwarding and masquerading.","routing nat masquerade forward iptables"],
["11","11-dns.html",0,12,55,"DNS در تونل","نشتی DNS و حل درستش.","DNS inside a tunnel","DNS leaks and how to fix them properly.","dns leak resolver split"],
["12","12-performance.html",0,12,55,"کارایی","MTU، سربار رمزنگاری و اندازه‌گیری واقعی.","Performance","MTU, encryption overhead and real measurement.","mtu throughput overhead benchmark"],
["13","13-monitoring.html",0,12,50,"پایش و لاگ","چه کسی وصل است و چقدر مصرف کرده.","Monitoring and logging","Who is connected and how much they used.","monitoring log metrics connection"],
["14","14-hardening.html",0,12,55,"امنیت و سخت‌سازی","کلیدها، به‌روزرسانی و کمترین دسترسی.","Security and hardening","Keys, updates and least privilege.","hardening key rotation firewall"],
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
["01","01-role.html",0,12,45,"مهندس نرم‌افزار چه کاری می‌کند","کدنویسی کمتر از نصف کار است.","What a software engineer actually does","Writing code is less than half the job.","role responsibility engineering"],
["02","02-reading-code.html",0,12,55,"خواندن کد دیگران","روش سیستماتیک ورود به یک پروژهٔ ناآشنا.","Reading other people's code","A systematic way into an unfamiliar codebase.","reading code onboarding legacy"],
["03","03-writing-code.html",0,12,55,"نوشتن کد قابل نگهداری","نام‌گذاری، اندازهٔ تابع و کامنتی که ارزش دارد.","Writing maintainable code","Naming, function size and comments worth having.","naming readability comment refactor"],
["04","04-review.html",0,12,55,"code review: دادن و گرفتن","نقد کد بدون نقد آدم.","Code review: giving and receiving","Critiquing code without critiquing the person.","review feedback pullrequest"],
["05","05-debugging.html",0,12,60,"اشکال‌زدایی سیستماتیک","فرضیه، آزمایش، حذف — به‌جای حدس زدن.","Systematic debugging","Hypothesise, test, eliminate — instead of guessing.","debugging bisect hypothesis rubber duck"],
["06","06-estimation.html",0,12,55,"تخمین و برنامه‌ریزی","چرا همیشه طولانی‌تر می‌شود، و چه کارش می‌شود کرد.","Estimation and planning","Why it always takes longer, and what to do about it.","estimation planning scope buffer"],
["07","07-writing.html",0,12,55,"نوشتن مستند فنی","RFC، ADR و مستندی که خوانده شود.","Technical writing","RFCs, ADRs and documents people actually read.","documentation rfc adr writing"],
["08","08-communication.html",0,12,50,"ارتباط با غیرفنی‌ها","ترجمهٔ تصمیم فنی به زبان اثر.","Communicating with non-engineers","Translating a technical decision into impact.","communication stakeholder tradeoff"],
["09","09-teamwork.html",0,12,50,"کار تیمی و جریان Git","شاخه، commit خوانا و حل تعارض.","Teamwork and Git workflow","Branches, readable commits and resolving conflicts.","git workflow commit branch team"],
["10","10-interview.html",0,12,60,"مصاحبهٔ فنی","الگوریتم، طراحی سیستم و سؤال رفتاری.","Technical interviews","Algorithms, system design and behavioural questions.","interview algorithm system design behavioral"],
["11","11-resume.html",0,12,50,"رزومه و نمونه‌کار","نوشتن اثر، نه فهرست تکنولوژی.","CV and portfolio","Write impact, not a list of technologies.","resume cv portfolio github"],
["12","12-learning.html",0,12,50,"یادگیری مداوم","چطور یاد بگیری بدون غرق شدن در ابزار جدید.","Continuous learning","How to keep learning without drowning in new tools.","learning depth breadth"],
["13","13-focus.html",0,12,45,"مدیریت زمان و تمرکز","کار عمیق در محیطی پر از وقفه.","Time and focus","Deep work in an interrupt-driven environment.","focus deep work time management"],
["14","14-growth.html",0,12,55,"رشد شغلی: junior تا senior","تفاوت واقعی سطح‌ها چیست.","Career growth: junior to senior","What actually separates the levels.","career growth senior mentoring"],
["15","15-cap1.html",0,5,60,"پروژهٔ ۱ — مستندسازی یک پروژهٔ موجود","README، ADR و راهنمای شروع.","Project 1 — document an existing project","A README, an ADR and a getting-started guide.","capstone documentation",1],
["16","16-cap2.html",0,7,100,"پروژهٔ ۲ — review و بهبود کد دیگران","خواندن، نقد سازنده و refactor.","Project 2 — review and improve someone's code","Reading, constructive critique and refactoring.","capstone review refactor",2],
["17","17-cap3.html",0,9,150,"پروژهٔ ۳ — نمونه‌کار قابل ارائه","پروژه‌ای با مستند، تست، CI و توضیح تصمیم‌ها.","Project 3 — a portfolio piece","A project with docs, tests, CI and explained decisions.","capstone portfolio",3]
]});

})();
