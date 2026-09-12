"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import s from "./IconButton.module.scss";

interface Common {
  children: ReactNode;
  label: string;
  /** عددی که گوشهٔ دکمه نشان داده می‌شود؛ صفر پنهان می‌ماند */
  count?: number;
  active?: boolean;
  className?: string;
}

type Props =
  | (Common & { href: string; onClick?: never; pressed?: never })
  | (Common & { href?: never; onClick: () => void; pressed?: boolean });

/**
 * دکمهٔ آیکونی نوار بالا. اگر href بدهی لینک می‌شود، وگرنه دکمه.
 * ‏label همیشه لازم است: آیکون تنها برای صفحه‌خوان معنا ندارد.
 */
export default function IconButton(props: Props) {
  const { children, label, count, active, className } = props;
  const cls = [s.btn, active ? s.active : "", className].filter(Boolean).join(" ");

  const inner = (
    <>
      {children}
      {count ? <span className={s.count}>{count}</span> : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls} aria-label={label} title={label}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      aria-label={label}
      title={label}
      aria-pressed={props.pressed}
      onClick={props.onClick}
    >
      {inner}
    </button>
  );
}
