"use client";

import { usePrefs } from "@/context/PrefsContext";
import { pct } from "@/lib/i18n";
import s from "./ProgressBar.module.scss";

interface Props {
  /** ۰ تا ۱۰۰ */
  value: number;
  small?: boolean;
  /** برچسبی که صفحه‌خوان می‌خواند */
  label?: string;
  /** درصد را کنار نوار نشان بده */
  showValue?: boolean;
}

export default function ProgressBar({ value, small, label, showValue = true }: Props) {
  const { lang } = usePrefs();
  const v = Math.max(0, Math.min(100, Math.round(value)));
  const complete = v >= 100;

  const bar = (
    <div
      className={[s.bar, small ? s.sm : "", complete ? s.done : ""].filter(Boolean).join(" ")}
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <i className={s.fill} style={{ width: `${v}%` }} />
    </div>
  );

  if (!showValue) return bar;

  return (
    <div className={s.row}>
      {bar}
      <span className={[s.value, complete ? s.complete : ""].filter(Boolean).join(" ")}>
        {pct(v, lang)}
      </span>
    </div>
  );
}
