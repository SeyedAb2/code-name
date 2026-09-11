"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";
import s from "./Loader.module.scss";

/** چند میلی‌ثانیه لودینگ دیده شود، حتی اگر صفحه زودتر آماده باشد. */
const HOLD = 2200;
const FADE = 420;

/**
 * لودینگ اولیه — فقط در اولین بارگذاری هر نشست، نه بین ناوبری‌ها.
 *
 * چرا عمداً نگه می‌داریم: اگر صفحه در ۳۰۰ میلی‌ثانیه آماده شود، لودینگ
 * فقط یک پرش می‌شود و حس بی‌نظمی می‌دهد. نگه داشتنش تا حدود دو ثانیه،
 * شروع را آرام و عمدی نشان می‌دهد.
 *
 * چرا فقط یک بار: دیدن همان انیمیشن در هر ناوبری، آزاردهنده می‌شود.
 * ‏sessionStorage یعنی با ریلود دوباره دیده می‌شود ولی با کلیک روی لینک نه.
 */
export default function Loader() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("codenameh:splash") === "1";
    } catch {
      /* حالت خصوصی — لودینگ را نشان بده، ضرری ندارد */
    }
    if (seen) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setLeaving(true), HOLD);
    const t2 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      try { sessionStorage.setItem("codenameh:splash", "1"); } catch {}
    }, HOLD + FADE);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className={[s.wrap, leaving ? s.out : ""].filter(Boolean).join(" ")} aria-hidden>
      <div className={s.inner}>
        <div className={s.badge}>
          <svg className={s.ring} viewBox="0 0 150 150">
            <defs>
              <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4F6BF5" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <circle className={s.ringTrack} cx="75" cy="75" r="70" />
            <circle className={s.ringHead} cx="75" cy="75" r="70" />
          </svg>

          <Image
            className={s.logo}
            src="/assets/images/logo-256.png"
            alt=""
            width={96}
            height={96}
            priority
          />
        </div>

        <div className={s.name}>
          <b>{SITE.name.fa}</b>
          <i>{SITE.name.en}</i>
        </div>
      </div>
    </div>
  );
}
