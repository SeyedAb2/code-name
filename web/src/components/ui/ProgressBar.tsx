import s from "./ProgressBar.module.scss";

interface Props {
  /** ۰ تا ۱۰۰ */
  value: number;
  small?: boolean;
  /** برچسبی که صفحه‌خوان می‌خواند */
  label?: string;
}

export default function ProgressBar({ value, small, label }: Props) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      className={[s.bar, small ? s.sm : "", v >= 100 ? s.done : ""].filter(Boolean).join(" ")}
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <i className={s.fill} style={{ width: `${v}%` }} />
    </div>
  );
}
