"use client";

import { usePrefs } from "@/context/PrefsContext";
import { SunIcon, MoonIcon } from "@/components/ui/Icons";
import s from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const { theme, toggleTheme, lang, ready } = usePrefs();
  const dark = theme === "dark";

  const label = lang === "fa"
    ? dark ? "تم روشن" : "تم تاریک"
    : dark ? "Light theme" : "Dark theme";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={label}
      title={label}
      /* تا وقتی ترجیح از حافظه خوانده نشده، دستگیره نباید بپرد */
      className={[s.sw, ready && dark ? s.on : ""].filter(Boolean).join(" ")}
      onClick={toggleTheme}
    >
      <span className={s.rail} aria-hidden>
        <SunIcon size={14} />
        <MoonIcon size={14} />
      </span>
      <span className={s.knob} aria-hidden>
        {dark ? <MoonIcon size={14} /> : <SunIcon size={14} />}
      </span>
    </button>
  );
}
