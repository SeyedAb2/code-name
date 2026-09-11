/* ============================================================================
   docs-fa — لایهٔ رفتاری مشترک
   بدون وابستگی، بدون build. روی file:// هم کامل کار می‌کند.

   مسئولیت‌ها:
     تم روشن/تاریک · سوییچ فارسی/انگلیسی · دکمهٔ کپی · فهرست خودکار فصل ·
     ردیابی بخش فعال · ستون کناری فصل‌ها · ناوبری بعدی/قبلی ·
     پیشرفت مطالعه و تمرین · جستجو
   ========================================================================== */
(function () {
  "use strict";

  var D = document, R = D.documentElement;
  var body = D.body;
  var COURSE_ID = body.getAttribute("data-course") || "";
  var CHAPTER_N = body.getAttribute("data-chapter") || "";
  var PAGE = body.getAttribute("data-page") || ""; // home | course | chapter

  /* مسیر ریشه نسبت به این صفحه */
  var ROOT = PAGE === "chapter" ? "../../" : (PAGE === "course" ? "../" : "");

  /* ---------------------------------------------------------------- ذخیره‌سازی
     روی file:// ممکن است localStorage پرتاب کند. همیشه با پشتیبان حافظه‌ای. */
  var mem = {};

  /* ‏localStorage تنها جای نگهداری نیست. دو نسخه نگه می‌داریم:
       ۱) localStorage — جای اصلی، سریع و همگام
       ۲) IndexedDB    — نسخهٔ دوم؛ بعضی پاک‌کردن‌های مرورگر فقط یکی را می‌برند

     چیزی که این‌ها را از بین *نمی‌برد*: عوض شدن IP، ری‌استارت، به‌روزرسانی مرورگر.
     چیزی که می‌برد: پاک کردن دادهٔ سایت، حالت ناشناس، مرورگر یا دستگاه دیگر.
     برای آن حالت‌ها راه واقعی فقط پشتیبان‌گیری است — پایین‌تر، exportBackup. */
  var idb = null;
  try {
    var rq = indexedDB.open("codenameh", 1);
    rq.onupgradeneeded = function (e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains("kv")) db.createObjectStore("kv");
    };
    rq.onsuccess = function (e) { idb = e.target.result; mirrorAll(); };
  } catch (e) { /* مرورگر قدیمی یا حالت محدود */ }

  function idbPut(k, v) {
    if (!idb) return;
    try { idb.transaction("kv", "readwrite").objectStore("kv").put(v, k); } catch (e) {}
  }
  function idbDel(k) {
    if (!idb) return;
    try { idb.transaction("kv", "readwrite").objectStore("kv").delete(k); } catch (e) {}
  }
  /* اگر localStorage خالی بود ولی IndexedDB داده داشت، برگردانش — یعنی
     دادهٔ کاربر از یک پاک‌شدن ناقص نجات پیدا می‌کند. */
  function mirrorAll() {
    if (!idb) return;
    try {
      var st = idb.transaction("kv", "readonly").objectStore("kv");
      var all = st.getAllKeys();
      all.onsuccess = function () {
        all.result.forEach(function (k) {
          if (String(k).indexOf("docsfa:") !== 0) return;
          var g = idb.transaction("kv", "readonly").objectStore("kv").get(k);
          g.onsuccess = function () {
            var restored = g.result;
            if (restored == null) return;
            var cur = null;
            try { cur = localStorage.getItem(k); } catch (e) {}
            if (cur === null) {
              mem[k] = restored;
              try { localStorage.setItem(k, restored); } catch (e) {}
              if (k.indexOf("docsfa:p:") === 0 || k === "docsfa:bm") RESTORED = true;
            }
          };
        });
        setTimeout(function () { if (RESTORED) paintProgress(); }, 120);
      };
    } catch (e) {}
  }
  var RESTORED = false;

  var store = {
    get: function (k) {
      try { var v = localStorage.getItem(k); return v === null ? (k in mem ? mem[k] : null) : v; }
      catch (e) { return k in mem ? mem[k] : null; }
    },
    set: function (k, v) {
      mem[k] = v;
      try { localStorage.setItem(k, v); } catch (e) { /* حالت خصوصی مرورگر */ }
      idbPut(k, v);
    },
    del: function (k) {
      delete mem[k];
      try { localStorage.removeItem(k); } catch (e) {}
      idbDel(k);
    },
    keys: function () {
      var out = [];
      try { for (var i = 0; i < localStorage.length; i++) out.push(localStorage.key(i)); }
      catch (e) { for (var k in mem) out.push(k); }
      for (var m in mem) if (out.indexOf(m) === -1) out.push(m);
      return out;
    }
  };
  var K_THEME = "docsfa:theme", K_LANG = "docsfa:lang",
      K_PROG = "docsfa:p:", K_LAST = "docsfa:last:";

  function json(k, fallback) {
    var raw = store.get(k);
    if (!raw) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
  }

  /* ------------------------------------------------------------------ کمکی‌ها */
  /* هر مرحلهٔ راه‌اندازی جدا اجرا می‌شود. اگر یکی خطا بدهد، بقیه — از جمله
     تم، زبان و جستجو — باید سرِ جایشان کار کنند. قبلاً یک خطای کوچک در
     ساخت یک بخش، کل اسکریپت را از کار می‌انداخت. */
  function safe(label, fn) {
    try { fn(); }
    catch (e) {
      if (window.console && console.warn) console.warn("[docs-fa] " + label + " →", e);
    }
  }

  function $(s, c) { return (c || D).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); }
  function el(tag, cls, txt) {
    var n = D.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
  var FA_DIGITS = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
  function faNum(n) {
    return String(n).replace(/\d/g, function (d) { return FA_DIGITS[+d]; });
  }
  function isFa() { return R.getAttribute("data-lang") !== "en"; }
  /* عدد بر اساس زبان جاری: فارسی → ۱۲ ، انگلیسی → 12 */
  function num(n) { return isFa() ? faNum(n) : String(n); }

  var COURSES = window.COURSES || [];

  /* مانیفست فشرده را به شیء باز می‌کند. ترتیب آرایه در tracks.js توضیح داده شده.
     ‏tracks.js فقط فصل‌های آمادهٔ هر مسیر را دارد (برای محاسبهٔ پیشرفت در صفحهٔ اصلی).
     فهرست کامل فصل‌های یک مسیر جداگانه در assets/ch/<id>.js می‌آید و فقط در
     صفحه‌های همان مسیر بارگذاری می‌شود — این تفاوت ۷۲ کیلوبایت و ۳ کیلوبایت است. */
  function expand(c) {
    c.chapters = (c.ch || []).map(function (a) {
      return {
        n: a[0], file: a[1], ready: !!a[2], ex: a[3], mins: a[4],
        fa: { t: a[5], d: a[6] },
        en: { t: a[7], d: a[8] },
        kw: a[9] || "",
        cap: a[10] || 0
      };
    });
    c.ready = c.chapters.some(function (x) { return x.ready; });
  }
  COURSES.forEach(expand);

  function course(id) {
    for (var i = 0; i < COURSES.length; i++) if (COURSES[i].id === id) return COURSES[i];
    return null;
  }

  /* فصل‌های کامل این مسیر، اگر صفحه بارگذاری‌شان کرده باشد */
  (function attachChapters() {
    var d = window.CHAPTERS;
    if (!d || !d.id) return;
    var c = course(d.id);
    if (!c) return;
    c.ch = d.ch;
    c.full = true;
    expand(c);
  })();

  /* آمار کل هر مسیر از پیش محاسبه شده تا به فهرست کامل فصل‌ها نیاز نباشد */
  function nCh(c)   { return c.nCh   != null ? c.nCh   : (c.chapters || []).length; }
  function nEx(c)   { return c.nEx   != null ? c.nEx   : (c.chapters || []).reduce(function (s, x) { return s + (x.ex || 0); }, 0); }
  function nHour(c) { return c.hours != null ? c.hours : Math.round((c.chapters || []).reduce(function (s, x) { return s + (x.mins || 0); }, 0) / 60); }

  /* ============================================================== ۱) تم */
  function applyTheme(v) {
    if (v === "dark" || v === "light") R.setAttribute("data-theme", v);
    else R.removeAttribute("data-theme"); // پیروی از سیستم
    $$(".js-theme").forEach(function (b) {
      var dark = v === "dark" || (!v && matchMedia("(prefers-color-scheme:dark)").matches);
      b.setAttribute("aria-label", dark ? "روشن" : "تاریک");
      /* سوییچ تازه: وضعیت با کلاس و aria-checked نشان داده می‌شود */
      b.classList.toggle("on", dark);
      if (b.hasAttribute("role")) b.setAttribute("aria-checked", String(dark));
      /* دکمهٔ قدیمی (اگر جایی مانده باشد) */
      var s = $(".ico-sun", b), m = $(".ico-moon", b);
      if (s) s.style.display = dark ? "block" : "none";
      if (m) m.style.display = dark ? "none" : "block";
    });
  }
  safe("applyTheme", function () { applyTheme(store.get(K_THEME)); });

  function initTheme() {
    $$(".js-theme").forEach(function (b) {
      b.addEventListener("click", function () {
        var cur = R.getAttribute("data-theme");
        if (!cur) cur = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
        var next = cur === "dark" ? "light" : "dark";
        /* ترنزیشن‌ها را یک لحظه خاموش کن: وگرنه مرورگر رنگ صدها عنصر را
           همزمان انیمیت می‌کند و تعویض تم کند و پرش‌دار می‌شود. */
        R.classList.add("theme-switching");
        store.set(K_THEME, next);
        applyTheme(next);
        /* دو فریم صبر تا استایل تازه اعمال شود، بعد ترنزیشن‌ها برگردند */
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { R.classList.remove("theme-switching"); });
        });
      });
    });
  }

  /* =========================================================== ۲) زبان */
  var T = {
    copy:      { fa: "کپی",  en: "Copy" },
    copied:    { fa: "کپی شد ✓", en: "Copied ✓" },
    done:      { fa: "انجام شد", en: "Done" },
    inChapter: { fa: "در این فصل", en: "On this page" },
    chapters:  { fa: "فصل‌های دوره", en: "Chapters" },
    progress:  { fa: "پیشرفت این فصل", en: "Chapter progress" },
    prev:      { fa: "فصل قبل", en: "Previous" },
    next:      { fa: "فصل بعد", en: "Next" },
    menu:      { fa: "فهرست مطالب", en: "Contents" },
    search:    { fa: "جستجو در همهٔ دوره‌ها…", en: "Search all tracks…" },
    noRes:     { fa: "چیزی پیدا نشد.", en: "No matches." },
    exDone:    { fa: "تمرین حل‌شده", en: "exercises solved" },
    soon:      { fa: "به‌زودی", en: "Soon" }
  };
  function t(key) { return T[key][isFa() ? "fa" : "en"]; }

  function applyLang(v) {
    var fa = v !== "en";
    R.setAttribute("data-lang", fa ? "fa" : "en");
    R.setAttribute("lang", fa ? "fa" : "en");
    R.setAttribute("dir", fa ? "rtl" : "ltr");
    $$(".lang-sw button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-l") === (fa ? "fa" : "en")));
    });
    /* نام سایت در عنوان برگه هم با زبان عوض شود */
    try {
      D.title = fa
        ? D.title.replace(/Codenameh/g, "کدنامه")
        : D.title.replace(/کدنامه/g, "Codenameh");
    } catch (e) {}
    relabel();
  }
  /* برچسب‌هایی که JS ساخته و باید با زبان عوض شوند.
     هر تکه جداگانه، تا خطای یکی بقیه را نخواباند. */
  function relabel() {
    safe("relabel:text", function () {
      $$(".copy").forEach(function (b) { if (!b.classList.contains("ok")) b.textContent = t("copy"); });
      $$(".js-t").forEach(function (n) { n.textContent = t(n.getAttribute("data-t")); });
      $$(".ex-done span").forEach(function (n) { n.textContent = t("done"); });
      var si = $(".sbox input"); if (si) si.placeholder = t("search");
    });
    safe("relabel:rail",    buildRail);
    safe("relabel:head",    buildCourseHead);
    safe("relabel:grid",    buildCourseHome);
    safe("relabel:pager",   buildPager);
    safe("relabel:resume",  buildResumeButtons);
    safe("relabel:cstats",  initCourseStats);
    safe("relabel:hstats",  initHomeStats);
    safe("relabel:bm",      paintBookmarks);
    safe("relabel:progress", paintProgress);
  }
  safe("applyLang", function () { applyLang(store.get(K_LANG)); });

  function initLang() {
    $$(".lang-sw button").forEach(function (b) {
      b.addEventListener("click", function () {
        var l = b.getAttribute("data-l");
        store.set(K_LANG, l);
        applyLang(l);
      });
    });
  }

  /* ====================================================== ۳) دکمهٔ کپی
     روی file:// معمولاً navigator.clipboard در دسترس نیست → پشتیبان execCommand. */
  function copyText(txt) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(txt).catch(fallback);
    }
    return Promise.resolve(fallback());
    function fallback() {
      var ta = el("textarea");
      ta.value = txt;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
      D.body.appendChild(ta);
      ta.select();
      try { D.execCommand("copy"); } catch (e) {}
      D.body.removeChild(ta);
    }
  }
  function initCopy() {
    /* کپی متن ساده — مثل شمارهٔ کارت: <button data-copy="…"> */
    D.addEventListener("click", function (e) {
      var n = e.target.closest ? e.target.closest("[data-copy]") : null;
      if (!n) return;
      copyText(n.getAttribute("data-copy"));
      var lbl = $(".cp-lbl", n) || n;
      var old = lbl.textContent;
      n.classList.add("ok");
      lbl.textContent = t("copied");
      /* پیام صریح، چون خود دکمه کوچک است و تغییرش ممکن است دیده نشود */
      toast(n.hasAttribute("data-copy-msg")
        ? n.getAttribute("data-copy-msg")
        : (isFa() ? "کپی شد" : "Copied"), "ok");
      clearTimeout(n._tm);
      n._tm = setTimeout(function () {
        n.classList.remove("ok");
        lbl.textContent = old;
      }, 3000);
    });

    D.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".copy") : null;
      if (!b) return;
      var box = b.closest(".term, .code");
      var pre = box && $("pre", box);
      if (!pre) return;
      /* پرامپت‌های غیرقابل کپی (.d) از متن حذف می‌شوند */
      var clone = pre.cloneNode(true);
      $$(".d", clone).forEach(function (n) { n.parentNode.removeChild(n); });
      copyText(clone.textContent.replace(/\n{3,}/g, "\n\n").trim());
      b.classList.add("ok");
      b.textContent = t("copied");
      clearTimeout(b._tm);
      b._tm = setTimeout(function () {
        b.classList.remove("ok");
        b.textContent = t("copy");
      }, 1600);
    });
  }

  /* ================================================ ۴) پیشرفت — مدل داده
     برای هر فصل: { s:[id بخش‌های دیده‌شده], e:[id تمرین‌های حل‌شده], t:کل بخش, x:کل تمرین } */
  function progKey(cid, ch) { return K_PROG + cid + ":" + ch; }
  function readProg(cid, ch) {
    var p = json(progKey(cid, ch), null);
    if (!p || typeof p !== "object") p = { s: [], e: [], t: 0, x: 0 };
    if (!Array.isArray(p.s)) p.s = [];
    if (!Array.isArray(p.e)) p.e = [];
    return p;
  }
  function writeProg(cid, ch, p) { store.set(progKey(cid, ch), JSON.stringify(p)); }

  /* درصد یک فصل: ۵۵٪ مطالعهٔ بخش‌ها + ۴۵٪ تمرین‌های حل‌شده */
  function chapterPct(cid, chMeta) {
    var p = readProg(cid, chMeta.n);
    var totS = p.t || 0, totX = p.x != null ? p.x : (chMeta.ex || 0);
    var read = totS ? Math.min(p.s.length / totS, 1) : 0;
    var solved = totX ? Math.min(p.e.length / totX, 1) : 0;
    if (!totS && !p.e.length) return 0;
    if (!totX) return Math.round(read * 100);
    return Math.round((read * 0.55 + solved * 0.45) * 100);
  }
  function coursePct(c) {
    var chs = (c.chapters || []).filter(function (x) { return x.ready; });
    if (!chs.length) return 0;
    var sum = 0;
    chs.forEach(function (ch) { sum += chapterPct(c.id, ch); });
    return Math.round(sum / chs.length);
  }

  /* ================================================ ۵) ستون کناری */
  function buildRail() {
    var rail = $(".rail-body");
    if (!rail) return;
    rail.innerHTML = "";

    /* سرِ کشو — CSS فقط در حالت موبایل نشانش می‌دهد */
    var rh = el("div", "rail-head");
    rh.appendChild(el("b", null, t("menu")));
    var rx = el("button", "rail-close");
    rx.type = "button";
    rx.setAttribute("aria-label", isFa() ? "بستن" : "Close");
    rx.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    rh.appendChild(rx);
    rail.appendChild(rh);

    /* الف) فهرست بخش‌های همین فصل (از خود صفحه ساخته می‌شود، نه از فایل دیگر) */
    var secs = $$(".content section[id]").filter(function (s) { return $("h2", s); });
    if (secs.length) {
      var box = el("div", "rail-sec");
      var h = el("p", "rail-h js-t"); h.setAttribute("data-t", "inChapter"); h.textContent = t("inChapter");
      var ul = el("ul", "toc");
      secs.forEach(function (s, i) {
        var h2 = $("h2", s);
        var vis = $("[lang]", h2) ? null : h2;
        var li = el("li");
        var a = el("a");
        a.href = "#" + s.id;
        var nn = el("span", "toc-num", num(i + 1));
        a.appendChild(nn);
        a.appendChild(D.createTextNode(headText(h2)));
        li.appendChild(a);
        ul.appendChild(li);
      });
      box.appendChild(h); box.appendChild(ul);
      rail.appendChild(box);
      void vis;
    }

    /* ب) پیشرفت این فصل */
    if (PAGE === "chapter" && COURSE_ID) {
      var pb = el("div", "rail-sec");
      var card = el("div", "rail-prog");
      var lbl = el("div", "lbl");
      var lt = el("span", "js-t"); lt.setAttribute("data-t", "progress"); lt.textContent = t("progress");
      var lp = el("span", "pct js-chpct"); lp.textContent = "۰٪";
      lbl.appendChild(lt); lbl.appendChild(lp);
      var bar = el("div", "pbar"); bar.appendChild(el("i"));
      bar.classList.add("js-chbar");
      card.appendChild(lbl); card.appendChild(bar);
      pb.appendChild(card);
      rail.appendChild(pb);
    }

    /* ج) فهرست فصل‌های دوره از مانیفست */
    var c = course(COURSE_ID);
    if (c && c.chapters.length) {
      var box2 = el("div", "rail-sec");
      var h2b = el("p", "rail-h js-t"); h2b.setAttribute("data-t", "chapters"); h2b.textContent = t("chapters");
      var ul2 = el("ul", "chlist");
      c.chapters.forEach(function (ch) {
        var li = el("li");
        var a = el("a");
        var here = ch.n === CHAPTER_N;
        a.href = ch.ready ? (PAGE === "chapter" ? ch.file : "ch/" + ch.file) : "#";
        a.className = (here ? "cur " : "") + (ch.ready ? "" : "soon ") + (chapterPct(c.id, ch) >= 100 ? "done" : "");
        if (!ch.ready) a.setAttribute("aria-disabled", "true");
        a.appendChild(el("span", "n", num(parseInt(ch.n, 10))));
        a.appendChild(el("span", "t", (isFa() ? ch.fa : ch.en).t));
        li.appendChild(a);
        ul2.appendChild(li);
      });
      box2.appendChild(h2b); box2.appendChild(ul2);
      rail.appendChild(box2);
    }
    spy();
  }
  /* متن تیتر با توجه به زبان فعال */
  function headText(h) {
    var pick = $('[lang="' + (isFa() ? "fa" : "en") + '"]', h);
    return (pick || h).textContent.trim();
  }

  /* کشوی فهرست روی موبایل: باز/بسته، قفل اسکرول، بستن با پرده و Esc */
  /* ‏position:fixed نسبت به هر جدّی که transform / filter / contain داشته باشد
     محاسبه می‌شود، نه نسبت به پنجره. کشوها را می‌بریم مستقیم زیر <body> تا
     هیچ‌وقت داخل چنین بافتی گیر نکنند — علت «کشوی خالی بعد از اسکرول». */
  function liftPanels() {
    /* مودال‌ها و کشوها مستقیم زیر body می‌روند. برای .rail-body یک پردهٔ
       واقعی هم می‌سازیم، چون پردهٔ قبلی .rail::before بود و با جابه‌جایی
       پنل بی‌اثر می‌شد. */
    $$(".js-menu-dim, .sdim, .mdim").forEach(function (n) {
      if (n.parentNode !== D.body) D.body.appendChild(n);
    });
    var rb = $(".rail-body");
    if (rb && rb.parentNode !== D.body) {
      var scrim = el("div", "rail-scrim");
      scrim.setAttribute("aria-hidden", "true");
      D.body.appendChild(scrim);
      D.body.appendChild(rb);
    }
  }

  function initRailToggle() {
    var rail = $(".rail"), btn = $(".rail-toggle");
    if (!rail || !btn) return;

    var panel = $(".rail-body"), scrim = $(".rail-scrim");
    function setOpen(on) {
      rail.classList.toggle("open", on);
      if (panel) panel.classList.toggle("open", on);
      if (scrim) scrim.classList.toggle("open", on);
      btn.setAttribute("aria-expanded", String(on));
      body.classList.toggle("rail-lock", on && innerWidth < 1040);
      /* محتوای فهرست را همان لحظهٔ باز شدن تازه می‌سازیم تا هیچ‌وقت
         خالی یا کهنه نباشد. */
      if (on) safe("rail:rebuild", buildRail);
    }
    function close() { setOpen(false); }

    btn.addEventListener("click", function () {
      setOpen(!rail.classList.contains("open"));
    });

    if (scrim) scrim.addEventListener("click", close);
    D.addEventListener("click", function (e) {
      if (!e.target.closest) return;
      if (e.target.closest(".rail-close")) { close(); return; }
      /* انتخاب یک بخش از فهرست: ببند و بگذار مرورگر به لنگر برود */
      if (e.target.closest(".rail-body a") && innerWidth < 1040) close();
    });

    D.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.key === "Esc") && rail.classList.contains("open")) close();
    });

    /* اگر کاربر به دسکتاپ بزرگ کرد، قفل اسکرول نباید بماند */
    addEventListener("resize", function () {
      if (innerWidth >= 1040) { rail.classList.remove("open"); body.classList.remove("rail-lock"); }
    });
  }

  /* =============================================== ۶) بخش فعال + مطالعه */
  var seen = null;
  function spy() {
    var links = $$(".toc a");
    if (!links.length) return;
    var secs = $$(".content section[id]");
    if (!secs.length) return;

    if (spy._io) spy._io.disconnect();
    spy._io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
        markSeen(id);
      });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
    secs.forEach(function (s) { spy._io.observe(s); });
  }

  function markSeen(id) {
    if (PAGE !== "chapter" || !COURSE_ID) return;
    var p = readProg(COURSE_ID, CHAPTER_N);
    if (p.s.indexOf(id) !== -1) return;
    p.s.push(id);
    p.t = $$(".content section[id]").length;
    p.x = $$(".ex").length;
    writeProg(COURSE_ID, CHAPTER_N, p);
    paintProgress();
  }

  /* ================================================= ۷) تمرین‌ها */
  function initExercises() {
    var exs = $$(".ex");
    if (!exs.length) return;
    var p = readProg(COURSE_ID, CHAPTER_N);
    p.x = exs.length;
    p.t = p.t || $$(".content section[id]").length;
    writeProg(COURSE_ID, CHAPTER_N, p);

    exs.forEach(function (ex, i) {
      var id = ex.id || ("ex-" + i);
      var head = $(".ex-h", ex);
      if (!head || $(".ex-done", head)) return;
      var lab = el("label", "ex-done");
      var cb = el("input");
      cb.type = "checkbox";
      cb.checked = readProg(COURSE_ID, CHAPTER_N).e.indexOf(id) !== -1;
      lab.appendChild(cb);
      lab.appendChild(el("span", null, t("done")));
      lab.classList.toggle("on", cb.checked);
      ex.classList.toggle("solved", cb.checked);
      cb.addEventListener("change", function () {
        var pr = readProg(COURSE_ID, CHAPTER_N);
        var k = pr.e.indexOf(id);
        if (cb.checked && k === -1) pr.e.push(id);
        if (!cb.checked && k !== -1) pr.e.splice(k, 1);
        pr.x = exs.length;
        writeProg(COURSE_ID, CHAPTER_N, pr);
        lab.classList.toggle("on", cb.checked);
        ex.classList.toggle("solved", cb.checked);
        paintProgress();
      });
      head.appendChild(lab);
    });
  }

  /* ============================================ ۸) رسم همهٔ نوارها */
  function setBar(bar, pct) {
    if (!bar) return;
    var i = bar.querySelector("i") || bar.appendChild(el("i"));
    i.style.width = Math.max(0, Math.min(100, pct)) + "%";
    bar.classList.toggle("done", pct >= 100);
  }

  function paintProgress() {
    /* الف) نوار فصل جاری در ستون کناری */
    if (PAGE === "chapter" && COURSE_ID) {
      var c0 = course(COURSE_ID);
      var meta = c0 && c0.chapters.filter(function (x) { return x.n === CHAPTER_N; })[0];
      if (meta) {
        var pct = chapterPct(COURSE_ID, meta);
        setBar($(".js-chbar"), pct);
        var lp = $(".js-chpct");
        if (lp) lp.textContent = num(pct) + "٪";
      }
      /* شمارندهٔ تمرین‌ها */
      var st = $(".ex-stat");
      if (st) {
        var pr = readProg(COURSE_ID, CHAPTER_N);
        var tot = $$(".ex").length;
        var b = $("b", st);
        if (b) b.textContent = num(pr.e.length) + " / " + num(tot);
        setBar($(".pbar", st), tot ? (pr.e.length / tot) * 100 : 0);
      }
    }

    /* ب) کارت هر دوره در صفحهٔ اصلی */
    $$("[data-prog-course]").forEach(function (node) {
      var c = course(node.getAttribute("data-prog-course"));
      if (!c) return;
      var pct = coursePct(c);
      setBar($(".pbar", node), pct);
      var lbl = $("b", node);
      if (lbl) lbl.textContent = num(pct) + "٪";
    });

    /* ج) کارت هر فصل در صفحهٔ خانهٔ دوره */
    $$("[data-prog-ch]").forEach(function (node) {
      var c = course(COURSE_ID);
      if (!c) return;
      var n = node.getAttribute("data-prog-ch");
      var meta = c.chapters.filter(function (x) { return x.n === n; })[0];
      if (!meta) return;
      var pct = chapterPct(COURSE_ID, meta);
      setBar($(".pbar", node), pct);
      node.classList.toggle("done", pct >= 100);
      var lbl = $(".js-pct", node);
      if (lbl) lbl.textContent = num(pct) + "٪";
    });

    /* د) پیشرفت کل دوره در صفحهٔ خانهٔ دوره */
    var oc = $("[data-prog-overall]");
    if (oc) {
      var cc = course(oc.getAttribute("data-prog-overall") || COURSE_ID);
      if (cc) {
        var p2 = coursePct(cc);
        setBar($(".pbar", oc), p2);
        var l2 = $(".js-pct", oc);
        if (l2) l2.textContent = num(p2) + "٪";
      }
    }
  }

  /* ============================================ ۹) ناوبری بعدی/قبلی */
  function buildPager() {
    var pg = $(".pager");
    if (!pg || PAGE !== "chapter") return;
    var c = course(COURSE_ID);
    if (!c) return;
    var idx = -1;
    c.chapters.forEach(function (ch, i) { if (ch.n === CHAPTER_N) idx = i; });
    if (idx < 0) return;
    pg.innerHTML = "";
    [["prev", c.chapters[idx - 1]], ["next", c.chapters[idx + 1]]].forEach(function (pair) {
      var dir = pair[0], ch = pair[1];
      var a = el("a", dir === "next" ? "nx" : "pv");
      if (!ch) {
        a.className += " empty";
        a.href = "#";
        a.appendChild(el("span", "dir", "—"));
        a.appendChild(el("span", "ttl", ""));
      } else {
        a.href = ch.ready ? ch.file : "#";
        if (!ch.ready) a.className += " empty";
        var d = el("span", "dir", t(dir === "next" ? "next" : "prev") + " · " + num(parseInt(ch.n, 10)));
        a.appendChild(d);
        a.appendChild(el("span", "ttl", (isFa() ? ch.fa : ch.en).t + (ch.ready ? "" : " (" + t("soon") + ")")));
      }
      pg.appendChild(a);
    });
  }

  /* ================================================= ۱۰) نوار خواندن */
  function initReadbar() {
    var bar = $(".readbar");
    if (!bar) return;
    var tick = false;
    function upd() {
      var h = D.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      tick = false;
    }
    addEventListener("scroll", function () {
      if (!tick) { tick = true; requestAnimationFrame(upd); }
    }, { passive: true });
    upd();
  }

  /* ===================================================== ۱۱) جستجو */
  /* نمایهٔ جستجو تنبل است: تا اولین باز شدن جستجو، بارگذاری نمی‌شود.
     ردیف‌ها فشرده‌اند: [مسیر, شماره, فایل, آماده, عنوانFA, توضیحFA, عنوانEN, توضیحEN, کلیدواژه] */
  var searchState = 0; // ۰ نیامده · ۱ در راه · ۲ آماده
  function loadSearch(cb) {
    if (searchState === 2) return cb();
    if (searchState === 1) return;
    searchState = 1;
    var s = D.createElement("script");
    s.src = ROOT + "assets/search.js";
    s.onload = s.onerror = function () { searchState = 2; cb(); };
    D.head.appendChild(s);
  }

  function searchIndex() {
    var out = [], rows = window.SEARCH_ROWS || [];
    rows.forEach(function (r) {
      var c = course(r[0]);
      if (!c || c.locked) return;
      var CL = isFa() ? c.fa : c.en;
      var t = isFa() ? r[4] : r[6], d = isFa() ? r[5] : r[7];
      out.push({
        title: t,
        sub: CL.name + " · " + (isFa() ? "فصل " : "Ch. ") + num(parseInt(r[1], 10)),
        hay: (t + " " + d + " " + (r[8] || "") + " " + CL.name).toLowerCase(),
        href: r[3] ? ROOT + c.dir + "/ch/" + r[2] : ROOT + c.dir + "/index.html",
        ready: !!r[3]
      });
    });
    /* بخش‌های همین صفحه هم قابل جستجو باشند */
    $$(".content section[id]").forEach(function (s) {
      var h = $("h2", s);
      if (!h) return;
      var tx = headText(h);
      out.push({ title: tx, sub: isFa() ? "در همین فصل" : "On this page", hay: tx.toLowerCase(), href: "#" + s.id, ready: true });
    });
    return out;
  }

  function initSearch() {
    var dim = $(".sdim");
    if (!dim) return;
    var input = $("input", dim), res = $(".sres", dim), idx = [], sel = 0;

    function open() {
      dim.classList.add("open");
      input.value = "";
      idx = searchIndex();
      render("");
      input.focus();
      /* نمایه هنوز نیامده؟ باز کن، بعد که رسید دوباره رندر کن */
      loadSearch(function () {
        if (!dim.classList.contains("open")) return;
        idx = searchIndex();
        render(input.value);
      });
    }
    function close() { dim.classList.remove("open"); }

    function render(q) {
      q = q.trim().toLowerCase();
      var list = q
        ? idx.filter(function (x) { return x.hay.indexOf(q) !== -1; }).slice(0, 24)
        : idx.slice(0, 12);
      res.innerHTML = "";
      sel = 0;
      if (!list.length) {
        res.appendChild(el("div", "none", t("noRes")));
        return;
      }
      list.forEach(function (x, i) {
        var a = el("a");
        a.href = x.href;
        if (i === 0) a.className = "sel";
        a.appendChild(D.createTextNode(x.title + (x.ready ? "" : " · " + t("soon"))));
        a.appendChild(el("small", null, x.sub));
        res.appendChild(a);
      });
    }
    function move(d) {
      var items = $$("a", res);
      if (!items.length) return;
      items[sel].classList.remove("sel");
      sel = (sel + d + items.length) % items.length;
      items[sel].classList.add("sel");
      items[sel].scrollIntoView({ block: "nearest" });
    }

    input.addEventListener("input", function () { render(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") {
        var a = $("a.sel", res);
        if (a) { e.preventDefault(); location.href = a.href; close(); }
      } else if (e.key === "Escape") close();
    });
    dim.addEventListener("click", function (e) { if (e.target === dim) close(); });
    $$(".js-search").forEach(function (b) { b.addEventListener("click", open); });

    D.addEventListener("keydown", function (e) {
      var ae = D.activeElement, key = e.key || "";
      var typing = !!ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName || "");
      if ((e.ctrlKey || e.metaKey) && key.toLowerCase() === "k") { e.preventDefault(); open(); }
      else if (key === "/" && !typing && !dim.classList.contains("open")) { e.preventDefault(); open(); }
      else if (key === "Escape") close();
    });
  }

  /* ================================================= ۱۱٫۵) مودال «دربارهٔ پروژه» */
  /* ───────────────────────────── منوی موبایل ─────────────────────────────
     دکمه‌های نوار بالا زیر ۷۲۰px در یک کشو جمع می‌شوند. دکمه‌های داخل کشو
     همان کلاس‌های js-* را دارند، پس handlerهای موجود خودشان کار می‌کنند؛
     اینجا فقط باز و بسته شدن کشو را مدیریت می‌کنیم. */
  function initMenu() {
    var dim = $(".js-menu-dim");
    if (!dim) return;
    var openBtn = $(".js-menu");

    function open() {
      dim.classList.add("open");
      if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    }
    function close() {
      dim.classList.remove("open");
      if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    }

    if (openBtn) openBtn.addEventListener("click", open);
    $$(".js-menu-close").forEach(function (b) { b.addEventListener("click", close); });
    dim.addEventListener("click", function (e) { if (e.target === dim) close(); });
    /* هر انتخابی داخل کشو، کشو را می‌بندد — وگرنه مودال زیرش باز می‌شود
       و کاربر دو لایه روی هم می‌بیند. */
    dim.addEventListener("click", function (e) {
      if (e.target.closest(".sheet-i")) setTimeout(close, 10);
    });
    D.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && dim.classList.contains("open")) close();
    });
  }

  function initAbout() {
    var dim = $(".js-about-dim");
    if (!dim) return;
    function open() { dim.classList.add("open"); D.body.style.overflow = "hidden"; }
    function close() { dim.classList.remove("open"); D.body.style.overflow = ""; }

    $$(".js-about").forEach(function (b) { b.addEventListener("click", open); });
    $$(".js-modal-close", dim).forEach(function (b) { b.addEventListener("click", close); });
    dim.addEventListener("click", function (e) { if (e.target === dim) close(); });
    D.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && dim.classList.contains("open")) close();
    });

    /* زبانه‌ها */
    $$(".modal-tabs button", dim).forEach(function (tab) {
      tab.addEventListener("click", function () {
        var k = tab.getAttribute("data-tab");
        $$(".modal-tabs button", dim).forEach(function (t) { t.classList.toggle("on", t === tab); });
        $$("[data-pane]", dim).forEach(function (p) {
          p.classList.toggle("on", p.getAttribute("data-pane") === k);
        });
      });
    });

    /* لینک راهنمای مشارکت باید نسبت به عمق صفحه درست باشد */
    $$(".js-contrib-link", dim).forEach(function (a) { a.href = ROOT + "contributing.html"; });

    /* کپی شمارهٔ کارت */
    $$(".js-copy-card", dim).forEach(function (b) {
      b.addEventListener("click", function () {
        copyText(b.getAttribute("data-card") || "");
        b.classList.add("ok");
        var s = $("span:not([hidden])", b);
        clearTimeout(b._t);
        b._t = setTimeout(function () { b.classList.remove("ok"); }, 1600);
        void s;
      });
    });
  }

  /* ─────────────────────────────── پیام کوتاه (toast) ───────────────────────
     یک عنصر مشترک؛ هر جای برنامه می‌تواند صدایش بزند. */
  var toastEl = null, toastT = 0;
  function toast(msg, kind) {
    if (!toastEl) {
      toastEl = el("div", "toast");
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      D.body.appendChild(toastEl);
    }
    toastEl.className = "toast" + (kind ? " " + kind : "");
    toastEl.textContent = msg;
    /* دوباره راه‌انداختن انیمیشن وقتی پیام پشت سر هم می‌آید */
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("show"); }, 3000);
  }

  /* ===================================================== ۱۱٫۶) اشتراک‌گذاری */
  function initShare() {
    $$(".js-share").forEach(function (b) {
      b.addEventListener("click", function () {
        var url = location.href;
        /* ‏navigator.share فقط با http(s) کار می‌کند. روی file:// کروم کل
           رِندرر را می‌کشد (RESULT_CODE_KILLED_BAD_MESSAGE) — پس اصلاً صدایش نمی‌زنیم. */
        var shareable = /^https?:$/.test(location.protocol);
        if (shareable && navigator.share) {
          try {
            navigator.share({ title: D.title, url: url }).catch(function () {});
            return;
          } catch (e) { /* می‌افتد روی کپی */ }
        }
        copyText(url);
        toast(isFa() ? "لینک این صفحه کپی شد" : "Page link copied", "ok");
      });
    });
  }

  /* ======================================================== ۱۱٫۷) بوکمارک
     فهرست مسیرهای نشان‌شده در localStorage. صفحهٔ bookmarks.html از همین می‌خواند. */
  var K_BM = "docsfa:bm";
  function bmList() { return json(K_BM, []) || []; }
  function bmHas(id) { return bmList().indexOf(id) !== -1; }
  function bmToggle(id) {
    var l = bmList(), i = l.indexOf(id);
    if (i === -1) l.push(id); else l.splice(i, 1);
    store.set(K_BM, JSON.stringify(l));
    paintBookmarks();
    return i === -1;
  }

  var STAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85z"/></svg>';

  function initBookmarks() {
    /* دکمه روی هر کارت دوره در صفحهٔ اصلی */
    $$("[data-prog-course]").forEach(function (node) {
      var card = node.closest(".course");
      if (!card || $(".bm-btn", card)) return;
      addBmBtn(card, node.getAttribute("data-prog-course"));
    });
    /* دکمه در سربرگ خانهٔ دوره */
    if (PAGE === "course" && COURSE_ID) {
      var host = $("[data-resume='" + COURSE_ID + "']");
      if (host && !$(".bm-btn", host.parentNode)) addBmBtn(host, COURSE_ID, true);
    }
    paintBookmarks();
  }

  function addBmBtn(host, id, inline) {
    var b = el("button", "bm-btn");
    b.type = "button";
    b.setAttribute("data-bm", id);
    b.innerHTML = STAR + '<span></span>';
    b.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var added = bmToggle(id);
      var c = course(id);
      var nm = c ? (isFa() ? c.fa.name : c.en.name) : "";
      toast(isFa()
        ? (added ? "«" + nm + "» به علاقه‌مندی‌ها اضافه شد" : "«" + nm + "» از علاقه‌مندی‌ها برداشته شد")
        : (added ? "“" + nm + "” added to bookmarks" : "“" + nm + "” removed from bookmarks"),
        added ? "ok" : "");
    });
    if (inline) host.appendChild(b); else host.appendChild(b);
  }

  function paintBookmarks() {
    var l = bmList();
    $$("[data-bm]").forEach(function (b) {
      var on = l.indexOf(b.getAttribute("data-bm")) !== -1;
      b.classList.toggle("on", on);
      var s = $("span", b);
      if (s) s.textContent = on
        ? (isFa() ? "ذخیره شد" : "Saved")
        : (isFa() ? "ذخیره" : "Save");
      b.setAttribute("aria-pressed", String(on));
    });
    $$(".bm-count").forEach(function (n) {
      n.textContent = num(l.length);
      n.hidden = l.length === 0;
    });
    $$(".js-bm-open").forEach(function (a) { a.classList.toggle("on", l.length > 0); });
    buildBookmarkPage();
  }

  /* صفحهٔ علاقه‌مندی‌ها */
  function buildBookmarkPage() {
    var grid = $("[data-bmgrid]");
    if (!grid) return;
    var l = bmList();
    grid.innerHTML = "";
    if (!l.length) {
      var e = el("div", "bm-empty");
      e.innerHTML = STAR + "<p>" +
        (isFa() ? "هنوز دوره‌ای ذخیره نکرده‌ای. روی ستارهٔ هر دوره بزن تا اینجا بیاید."
                : "No saved tracks yet. Star a track and it will appear here.") + "</p>";
      grid.appendChild(e);
      return;
    }
    l.forEach(function (id) {
      var c = course(id);
      if (!c) return;
      var L = isFa() ? c.fa : c.en;
      var a = el("a", "ch-card");
      a.href = ROOT + c.dir + "/index.html";
      a.setAttribute("data-prog-course", c.id);
      a.appendChild(el("span", "n", num(parseInt(c.id, 10))));
      var b = el("div", "b");
      b.appendChild(el("h3", null, L.name));
      b.appendChild(el("p", null, L.desc));
      var pr = el("div", "course-prog");
      var bar = el("div", "pbar sm"); bar.appendChild(el("i"));
      pr.appendChild(bar); pr.appendChild(el("b", null, "۰٪"));
      b.appendChild(pr);
      a.appendChild(b);
      grid.appendChild(a);
    });
    paintProgress();
  }

  /* =============================================== ۱۲) صفر کردن پیشرفت */
  /* ─────────────────── پشتیبان‌گیری از پیشرفت و علاقه‌مندی‌ها ───────────────────
     تنها راهی که دادهٔ تو از عوض شدن مرورگر یا دستگاه جان سالم به در می‌برد.
     یک فایل JSON کوچک؛ نگهش دار، هر وقت خواستی برگردانش. */
  function collectData() {
    var out = {};
    store.keys().forEach(function (k) {
      if (String(k).indexOf("docsfa:") === 0) out[k] = store.get(k);
    });
    return out;
  }

  function exportBackup() {
    var data = collectData();
    var n = Object.keys(data).filter(function (k) { return k.indexOf("docsfa:p:") === 0; }).length;
    var blob = new Blob([JSON.stringify({
      app: "codenameh", version: 1,
      savedAt: new Date().toISOString(),
      chapters: n,
      data: data
    }, null, 2)], { type: "application/json" });
    var a = D.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "codenameh-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    D.body.appendChild(a); a.click(); D.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function importBackup(file, done) {
    var r = new FileReader();
    r.onload = function () {
      var parsed;
      try { parsed = JSON.parse(r.result); } catch (e) { return done(false, "فایل خوانا نیست"); }
      if (!parsed || parsed.app !== "codenameh" || !parsed.data)
        return done(false, isFa() ? "این فایل پشتیبان کدنامه نیست" : "Not a Codenameh backup");
      var n = 0;
      Object.keys(parsed.data).forEach(function (k) {
        if (String(k).indexOf("docsfa:") !== 0) return;   /* فقط کلیدهای خودمان */
        store.set(k, parsed.data[k]);
        n++;
      });
      done(true, n);
    };
    r.onerror = function () { done(false, "خواندن فایل شکست خورد"); };
    r.readAsText(file);
  }

  function initBackup() {
    $$(".js-export").forEach(function (b) {
      b.addEventListener("click", function () { exportBackup(); });
    });
    $$(".js-import").forEach(function (b) {
      b.addEventListener("click", function () {
        var inp = D.createElement("input");
        inp.type = "file";
        inp.accept = "application/json,.json";
        inp.addEventListener("change", function () {
          if (!inp.files || !inp.files[0]) return;
          importBackup(inp.files[0], function (ok, info) {
            if (!ok) { alert(info); return; }
            alert(isFa()
              ? "بازیابی شد: " + num(info) + " مورد. صفحه تازه می‌شود."
              : "Restored " + info + " entries. Reloading.");
            location.reload();
          });
        });
        inp.click();
      });
    });
  }

  function initReset() {
    $$(".js-reset").forEach(function (b) {
      b.addEventListener("click", function () {
        var scope = b.getAttribute("data-scope") || COURSE_ID;
        var msg = isFa()
          ? "پیشرفت ذخیره‌شده پاک شود؟ این کار برگشت‌پذیر نیست."
          : "Clear saved progress? This cannot be undone.";
        if (!confirm(msg)) return;
        store.keys().forEach(function (k) {
          if (k.indexOf(K_PROG + (scope === "*" ? "" : scope)) === 0) store.del(k);
        });
        location.reload();
      });
    });
  }

  /* ================== ۱۲٫۵) سربرگ خانهٔ دوره، از روی مانیفست
     تا نام و توضیح دوره در یک جا (courses.js) بماند و در ۲۲ فایل تکرار نشود. */
  function buildCourseHead() {
    var c = course(COURSE_ID);
    if (!c || PAGE !== "course") return;
    var L = isFa() ? c.fa : c.en;
    $$("[data-chead]").forEach(function (n) {
      var k = n.getAttribute("data-chead");
      if (k === "name")  n.textContent = L.name;
      if (k === "desc")  n.textContent = L.desc;
      /* intro در tracks.js نیست (فقط همین صفحه لازمش دارد و در HTML نوشته شده)؛
         اگر نبود، متن خود صفحه دست‌نخورده می‌ماند. */
      if (k === "intro" && L.intro) n.textContent = L.intro;
    });
  }

  /* ========================================= ۱۳) شبکهٔ فصل‌ها در خانهٔ دوره */
  function buildCourseHome() {
    var grid = $("[data-chgrid]");
    if (!grid) return;
    var c = course(COURSE_ID);
    if (!c) return;
    grid.innerHTML = "";
    c.chapters.forEach(function (ch) {
      var L = isFa() ? ch.fa : ch.en;
      var a = el("a", "ch-card" + (ch.ready ? "" : " soon"));
      a.href = ch.ready ? "ch/" + ch.file : "#";
      if (ch.ready) a.setAttribute("data-prog-ch", ch.n);
      a.appendChild(el("span", "n", num(parseInt(ch.n, 10))));

      var b = el("div", "b");
      var h = el("h3", null, L.t);
      if (ch.cap) {
        var lv = ["", isFa() ? "ساده" : "Easy", isFa() ? "متوسط" : "Medium", isFa() ? "پیچیده" : "Hard"][ch.cap];
        var tag = el("span", "tag cap cap-" + ch.cap, (isFa() ? "پروژه · " : "Project · ") + lv);
        tag.style.marginInlineStart = "8px";
        h.appendChild(tag);
      }
      b.appendChild(h);
      b.appendChild(el("p", null, L.d));

      if (ch.ready) {
        var pr = el("div", "course-prog");
        var bar = el("div", "pbar sm"); bar.appendChild(el("i"));
        pr.appendChild(bar);
        pr.appendChild(el("b", "js-pct", "۰٪"));
        b.appendChild(pr);
      } else {
        b.appendChild(el("span", "tag", t("soon")));
      }
      a.appendChild(b);
      grid.appendChild(a);
    });
    paintProgress();
  }

  /* ============================ ۱۳٫۵) دکمهٔ «شروع» / «ادامه» برای هر دوره
     آخرین فصلی که باز کرده‌ای ذخیره می‌شود تا بتوانی از همان‌جا ادامه بدهی. */
  function rememberLast() {
    if (PAGE === "chapter" && COURSE_ID && CHAPTER_N) store.set(K_LAST + COURSE_ID, CHAPTER_N);
  }

  /* اولین فصل آمادهٔ نخوانده، وگرنه آخرین فصلِ بازشده، وگرنه اولین فصل آماده */
  function resumeTarget(c) {
    if (!c) return null;
    var ready = (c.chapters || []).filter(function (x) { return x.ready; });
    if (!ready.length) return null;
    var last = store.get(K_LAST + c.id);
    var started = ready.some(function (x) { return chapterPct(c.id, x) > 0; });
    if (!started) return { ch: ready[0], fresh: true };
    var unfinished = ready.filter(function (x) { return chapterPct(c.id, x) < 100; })[0];
    var byLast = ready.filter(function (x) { return x.n === last; })[0];
    return { ch: unfinished || byLast || ready[ready.length - 1], fresh: false };
  }

  function buildResumeButtons() {
    $$("[data-resume]").forEach(function (host) {
      var c = course(host.getAttribute("data-resume"));
      host.innerHTML = "";
      var t0 = resumeTarget(c);
      if (!t0) {
        var soon = el("span", "btn btn-ghost is-off", isFa() ? "هنوز آماده نیست" : "Not ready yet");
        host.appendChild(soon);
        return;
      }
      var base = PAGE === "home" ? c.dir + "/ch/" : "ch/";
      var a = el("a", "btn btn-primary");
      a.href = base + t0.ch.file;
      a.appendChild(el("span", null, t0.fresh
        ? (isFa() ? "شروع دوره" : "Start the track")
        : (isFa() ? "ادامه از فصل " + num(parseInt(t0.ch.n, 10)) : "Resume from ch. " + num(parseInt(t0.ch.n, 10)))));
      a.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="btn-ico"><path d="m9 6 6 6-6 6"/></svg>');
      host.appendChild(a);
    });
  }

  /* ===================================== ۱۴) آمار هر دوره، از روی مانیفست
     تا عددهای صفحه هرگز با فهرست فصل‌ها ناهماهنگ نشوند.
     نحو: <span data-cstat="01-docker:chapters|ex|hours"></span> */
  function initCourseStats() {
    $$("[data-cstat]").forEach(function (n) {
      var p = (n.getAttribute("data-cstat") || "").split(":");
      var c = course(p[0]);
      if (!c) return;
      if (p[1] === "chapters") { n.textContent = num(nCh(c));   return; }
      if (p[1] === "ex")       { n.textContent = num(nEx(c));   return; }
      if (p[1] === "hours")    { n.textContent = num(nHour(c)); }
    });
  }

  /* ================================================= ۱۵) آمار صفحهٔ اصلی */
  function initHomeStats() {
    var total = 0, ready = 0, exs = 0, caps = 0;
    COURSES.forEach(function (c) {
      total += nCh(c);
      exs   += nEx(c);
      caps  += (c.nCap != null ? c.nCap : 0);
      (c.chapters || []).forEach(function (ch) { if (ch.ready) ready++; });
    });
    var set = function (sel, v) { var n = $(sel); if (n) n.textContent = num(v); };
    set("[data-stat-chapters]", total);
    set("[data-stat-ready]", ready);
    set("[data-stat-tracks]", COURSES.length);
    set("[data-stat-ex]", exs);
    set("[data-stat-caps]", caps);
  }

  /* ============================== ۱۶) لودینگ اولیه و گذار بین صفحه‌ها
     لودر در CSS خودش را پنهان می‌کند؛ این فقط زودتر برش می‌دارد و گره
     نمی‌ماند حتی اگر JS شکست بخورد. */
  var REDUCED = false;
  try { REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  function initLoader() {
    var l = $(".loader");
    if (!l) return;
    function done() {
      l.classList.add("gone");
      setTimeout(function () { if (l.parentNode) l.parentNode.removeChild(l); }, 600);
    }
    if (D.readyState === "complete") setTimeout(done, REDUCED ? 0 : 260);
    else addEventListener("load", function () { setTimeout(done, REDUCED ? 0 : 260); });
  }

  function initTransitions() {
    R.classList.add("is-in");
    if (REDUCED) return;
    D.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a") : null;
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var href = a.getAttribute("href") || "";
      if (!href || href.charAt(0) === "#" || a.target === "_blank" || /^(https?:|mailto:|tel:)/i.test(href)) return;
      if (a.classList.contains("is-off") || a.getAttribute("aria-disabled") === "true") return;
      e.preventDefault();
      R.classList.add("is-out");
      setTimeout(function () { location.href = href; }, 190);
    });
    /* برگشت با دکمهٔ back نباید صفحه را محو نگه دارد */
    addEventListener("pageshow", function () { R.classList.remove("is-out"); });
  }

  /* ======================================================= راه‌اندازی */
  /* کنترل‌های همیشگی اول — تم، زبان، جستجو، کپی.
     این‌ها نباید به رندر شدن محتوا وابسته باشند. */
  safe("theme",       initTheme);
  safe("lang",        initLang);
  safe("search",      initSearch);
  safe("copy",        initCopy);
  safe("railToggle",  initRailToggle);
  safe("loader",      initLoader);
  safe("transitions", initTransitions);

  /* بعد محتوا */
  safe("exercises",   initExercises);
  safe("rail",        buildRail);
  safe("courseHead",  buildCourseHead);
  safe("courseHome",  buildCourseHome);
  safe("pager",       buildPager);
  safe("readbar",     initReadbar);
  safe("reset",       initReset);
  safe("backup",      initBackup);
  safe("about",       initAbout);
  safe("menu",        initMenu);
  safe("share",       initShare);
  safe("bookmarks",   initBookmarks);
  safe("courseStats", initCourseStats);
  safe("homeStats",   initHomeStats);
  safe("rememberLast", rememberLast);
  safe("resume",      buildResumeButtons);
  safe("progress",    paintProgress);

  /* اگر تم سیستمی بود، با تغییر سیستم هم عوض شود */
  try {
    matchMedia("(prefers-color-scheme:dark)").addEventListener("change", function () {
      if (!store.get(K_THEME)) applyTheme(null);
    });
  } catch (e) {}
})();
