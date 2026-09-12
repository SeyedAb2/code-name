"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { CloseIcon } from "./Icons";
import IconButton from "./IconButton";
import { usePrefs } from "@/context/PrefsContext";
import { t } from "@/lib/i18n";
import s from "./Modal.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  /** کشوی کناری به‌جای جعبهٔ وسط — برای منوی موبایل */
  variant?: "center" | "sheet";
  /** برچسبی برای صفحه‌خوان وقتی عنوان دیداری نداریم */
  label?: string;
}

export default function Modal({
  open, onClose, title, children, variant = "center", label,
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);

  /* Esc می‌بندد، و تا وقتی باز است صفحهٔ زیر نباید اسکرول شود */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /* فوکوس را به داخل مودال ببر، وگرنه کاربر کیبورد پشت پرده گیر می‌کند */
    const first = boxRef.current?.querySelector<HTMLElement>(
      'input, button, [href], [tabindex]:not([tabindex="-1"])',
    );
    first?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const { lang } = usePrefs();
  if (!open) return null;

  const sheet = variant === "sheet";

  return (
    <div
      className={sheet ? s.sheetDim : s.dim}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={label ?? title}
    >
      <div className={sheet ? s.sheet : s.box} ref={boxRef}>
        {title !== undefined && (
          <div className={s.head}>
            <h2>{title}</h2>
            <IconButton label={t("close", lang)} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        )}
        {sheet ? children : <div className={s.body}>{children}</div>}
      </div>
    </div>
  );
}
