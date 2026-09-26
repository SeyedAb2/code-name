"use client";

/* ============================================================================
   ترجیحات کاربر: تم و زبان

   چرا context و نه فقط localStorage: هر دو روی <html> اثر می‌گذارند و چند
   کامپوننت باید همزمان بدانند تغییر کرده. با context، سوییچ زبان بدون
   بارگذاری دوبارهٔ صفحه اتفاق می‌افتد و حالت بقیهٔ اپ دست‌نخورده می‌ماند.

   نکتهٔ SSR: سرور نمی‌داند کاربر چه تمی دارد. اگر بعد از mount تصمیم
   بگیریم، یک لحظه تم اشتباه دیده می‌شود. برای همین یک اسکریپت کوچک در
   ‏<head> قبل از رنگ‌آمیزی، صفت‌ها را می‌گذارد — پایین در themeScript.
   ========================================================================== */

import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from "react";
import type { Lang, Theme } from "@/lib/types";
import { read, write } from "@/lib/storage";

type ThemeChoice = Theme | "system";

interface Prefs {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;

  /** انتخاب کاربر — ممکن است «سیستم» باشد */
  themeChoice: ThemeChoice;
  /** تمی که واقعاً دیده می‌شود */
  theme: Theme;
  setTheme: (t: ThemeChoice) => void;
  toggleTheme: () => void;

  /** تا وقتی false است، مقدارها هنوز از حافظه خوانده نشده‌اند */
  ready: boolean;
}

const PrefsContext = createContext<Prefs | null>(null);

const K_LANG = "lang";
const K_THEME = "theme";

function systemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function PrefsProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>("dark");
  const [sysTheme, setSysTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  /* خواندن اولیه — فقط روی کلاینت */
  useEffect(() => {
    const savedLang = read(K_LANG);
    if (savedLang === "fa" || savedLang === "en") setLangState(savedLang);

    const savedTheme = read(K_THEME);
    if (savedTheme === "dark" || savedTheme === "light") setThemeChoice(savedTheme);
    else setThemeChoice("dark");

    setSysTheme(systemTheme());
    setReady(true);
  }, []);

  /* دنبال کردن تم سیستم، تا وقتی کاربر صریحاً چیزی انتخاب نکرده */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSysTheme(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const theme: Theme = themeChoice === "system" ? sysTheme : themeChoice;

  /* بازتاب روی <html> — چون CSS از همین صفت‌ها می‌خواند */
  useEffect(() => {
    if (!ready) return;
    const el = document.documentElement;
    el.setAttribute("lang", lang);
    el.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    el.setAttribute("data-lang", lang);
    if (themeChoice === "system") el.removeAttribute("data-theme");
    else el.setAttribute("data-theme", themeChoice);
  }, [lang, themeChoice, ready]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    write(K_LANG, l);
  }, []);

  const setTheme = useCallback((t: ThemeChoice) => {
    setThemeChoice(t);
    if (t === "system") {
      /* پاک کردنش یعنی «دوباره از سیستم پیروی کن» */
      write(K_THEME, "");
    } else {
      write(K_THEME, t);
    }
  }, []);

  const value = useMemo<Prefs>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === "fa" ? "en" : "fa"),
      themeChoice,
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      ready,
    }),
    [lang, setLang, themeChoice, theme, setTheme, ready],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs(): Prefs {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs باید داخل PrefsProvider استفاده شود");
  return ctx;
}

/**
 * قبل از اولین رنگ‌آمیزی اجرا می‌شود تا تم درست از همان فریم اول اعمال شود.
 * بدون این، صفحه یک لحظه روشن می‌آید و بعد تاریک می‌شود.
 * عمداً کوچک و بدون وابستگی است و در <head> می‌نشیند.
 */
export const themeScript = `
(function(){try{
  var p='codenameh:';
  var t=localStorage.getItem(p+'theme')||'dark';
  var l=localStorage.getItem(p+'lang')||'fa';
  var e=document.documentElement;
  if(t==='dark'||t==='light')e.setAttribute('data-theme',t);
  e.setAttribute('lang',l);
  e.setAttribute('dir',l==='fa'?'rtl':'ltr');
  e.setAttribute('data-lang',l);
}catch(e){}})();
`.trim();
