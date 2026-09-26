"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrefs } from "@/context/PrefsContext";
import Modal from "@/components/ui/Modal";
import { DownloadIcon } from "@/components/ui/Icons";
import s from "./UpdateNotice.module.scss";

type WaitingWorker = ServiceWorker | null;

export default function UpdateNotice() {
  const pathname = usePathname();
  const { lang } = usePrefs();
  const [open, setOpen] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [waiting, setWaiting] = useState<WaitingWorker>(null);
  const [version, setVersion] = useState<string | null>(null);

  const inspectVersion = useCallback(async () => {
    try {
      const response = await fetch(`/app-version.json?check=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) return;
      const { version } = await response.json() as { version?: string };
      if (!version) return;
      setVersion(version);
      const known = localStorage.getItem("codenameh:app-version");
      if (!known) localStorage.setItem("codenameh:app-version", version);
      else if (known !== version) setOpen(true);
    } catch { /* نسخه‌سنجی در حالت آفلاین انجام نمی‌شود. */ }
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") return;
    let alive = true;
    let timer = 0;
    let activeRegistration: ServiceWorkerRegistration | null = null;
    let onFocus: (() => void) | undefined;
    let onFound: (() => void) | undefined;
    const setup = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
        if (!alive) return;
        activeRegistration = reg;
        setRegistration(reg);
        const checkWaiting = () => {
          if (reg.waiting && navigator.serviceWorker.controller) {
            setWaiting(reg.waiting);
            setOpen(true);
          }
        };
        checkWaiting();
        onFound = () => {
          const worker = reg.installing;
          worker?.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) checkWaiting();
          });
        };
        reg.addEventListener("updatefound", onFound);
        timer = window.setInterval(() => { void reg.update(); void inspectVersion(); }, 60_000);
        onFocus = () => { void reg.update(); void inspectVersion(); };
        window.addEventListener("focus", onFocus);
      } catch { /* دسترسی آفلاین بدون نصب PWA هم برقرار است. */ }
    };
    void setup();
    void inspectVersion();
    return () => {
      alive = false;
      window.clearInterval(timer);
      if (onFocus) window.removeEventListener("focus", onFocus);
      if (onFound && activeRegistration) activeRegistration.removeEventListener("updatefound", onFound);
    };
  }, [inspectVersion]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    const cacheVisitedPage = () => navigator.serviceWorker.controller?.postMessage({ type: "CACHE_PAGE", url: location.href });
    navigator.serviceWorker.addEventListener("controllerchange", cacheVisitedPage);
    cacheVisitedPage();
    return () => navigator.serviceWorker.removeEventListener("controllerchange", cacheVisitedPage);
  }, [pathname]);

  const refresh = () => {
    if (version) localStorage.setItem("codenameh:app-version", version);
    if (waiting) {
      waiting.postMessage({ type: "SKIP_WAITING" });
      navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload(), { once: true });
    } else {
      void registration?.update();
      window.location.reload();
    }
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} title={lang === "fa" ? "نسخهٔ تازه آماده است" : "A new version is ready"}>
      <div className={s.content}>
        <span className={s.icon}><DownloadIcon size={25} /></span>
        <p>{lang === "fa" ? "برای دریافت تغییرات تازه، صفحه را به‌روزرسانی کن. پیشرفت و علاقه‌مندی‌های ذخیره‌شده‌ات باقی می‌مانند." : "Refresh to load the latest changes. Your saved progress and bookmarks will remain."}</p>
        <button type="button" className={s.action} onClick={refresh}>{lang === "fa" ? "به‌روزرسانی و ادامه" : "Update and continue"}</button>
      </div>
    </Modal>
  );
}
