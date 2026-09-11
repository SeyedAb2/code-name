import Link from "next/link";
import type { ReactNode } from "react";
import s from "./Button.module.scss";

interface Common {
  children: ReactNode;
  variant?: "primary" | "ghost";
  disabled?: boolean;
  className?: string;
}

type Props =
  | (Common & { href: string; onClick?: never; type?: never })
  | (Common & { href?: never; onClick?: () => void; type?: "button" | "submit" });

export default function Button(props: Props) {
  const { children, variant = "primary", disabled, className } = props;
  const cls = [
    s.btn,
    variant === "primary" ? s.primary : s.ghost,
    disabled ? s.disabled : "",
    className,
  ].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    return <Link href={props.href} className={cls}>{children}</Link>;
  }
  return (
    <button type={props.type ?? "button"} className={cls} onClick={props.onClick} disabled={disabled}>
      {children}
    </button>
  );
}

/** فلش «برو» که در RTL خودش برعکس می‌شود. */
export const GoArrow = () => (
  <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
