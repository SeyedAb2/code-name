"use client";

import { usePrefs } from "@/context/PrefsContext";
import s from "./LangSwitch.module.scss";

export default function LangSwitch() {
  const { lang, setLang } = usePrefs();

  return (
    <div className={s.sw} role="group" aria-label={lang === "fa" ? "زبان" : "Language"}>
      <button type="button" aria-pressed={lang === "fa"} onClick={() => setLang("fa")}>
        FA
      </button>
      <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}
