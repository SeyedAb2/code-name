"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrefs } from "@/context/PrefsContext";
import { t } from "@/lib/i18n";
import Modal from "@/components/ui/Modal";
import { SearchIcon } from "@/components/ui/Icons";
import s from "./SearchDialog.module.scss";

/** یک ردیف نمایهٔ جستجو. کوتاه نگه داشته شده چون ۱۳۸۹ تاست. */
interface Row {
  /** عنوان فارسی و انگلیسی */
  tf: string; te: string;
  /** نام مسیر */
  nf: string; ne: string;
  /** نشانی */
  u: string;
  /** آماده است؟ */
  r: 0 | 1;
  /** متن قابل جستجو، از قبل کوچک‌شده */
  h: string;
}

export default function SearchDialog({
  open, onClose,
}: { open: boolean; onClose: () => void }) {
  const { lang } = usePrefs();
  const router = useRouter();
  const [rows, setRows] = useState<Row[] | null>(null);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  /* نمایه تنبل است: تا اولین باز شدن جستجو دانلود نمی‌شود.
     چند صد کیلوبایت را نباید به کسی تحمیل کرد که فقط یک فصل می‌خواند. */
  useEffect(() => {
    if (!open || rows) return;
    let alive = true;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((d: Row[]) => { if (alive) setRows(d); })
      .catch(() => { if (alive) setRows([]); });
    return () => { alive = false; };
  }, [open, rows]);

  useEffect(() => { if (open) { setQ(""); setSel(0); } }, [open]);

  const hits = useMemo(() => {
    if (!rows) return [];
    const term = q.trim().toLowerCase();
    if (!term) return rows.slice(0, 12);
    return rows.filter((r) => r.h.includes(term)).slice(0, 30);
  }, [rows, q]);

  useEffect(() => { setSel(0); }, [q]);

  const go = (r: Row) => { onClose(); router.push(r.u); };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((i) => Math.min(i + 1, hits.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && hits[sel]) { e.preventDefault(); go(hits[sel]); }
  };

  /* نتیجهٔ انتخاب‌شده باید همیشه در دید بماند */
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-i="${sel}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  /** واژهٔ جستجو را داخل عنوان برجسته می‌کند. */
  const mark = (text: string) => {
    const term = q.trim();
    if (!term) return text;
    const i = text.toLowerCase().indexOf(term.toLowerCase());
    if (i < 0) return text;
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, i + term.length)}</mark>
        {text.slice(i + term.length)}
      </>
    );
  };

  return (
    <Modal open={open} onClose={onClose} label={t("search", lang)}>
      <div style={{ margin: -16 }}>
        <div className={s.field}>
          <SearchIcon />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t("searchPlaceholder", lang)}
            autoComplete="off"
            spellCheck={false}
            aria-label={t("search", lang)}
          />
        </div>

        <div className={s.results} ref={listRef}>
          {rows === null && <div className={s.empty}>…</div>}
          {rows !== null && hits.length === 0 && (
            <div className={s.empty}>{t("noResults", lang)}</div>
          )}
          {hits.map((r, i) => (
            <a
              key={r.u + i}
              href={r.u}
              data-i={i}
              className={[s.item, i === sel ? s.selected : "", r.r ? "" : s.soon]
                .filter(Boolean).join(" ")}
              onClick={(e) => { e.preventDefault(); go(r); }}
              onMouseEnter={() => setSel(i)}
            >
              {mark(lang === "fa" ? r.tf : r.te)}
              <small>{lang === "fa" ? r.nf : r.ne}</small>
            </a>
          ))}
        </div>

        <div className={s.foot}>
          <span><kbd>↑</kbd> <kbd>↓</kbd> {lang === "fa" ? "حرکت" : "navigate"}</span>
          <span><kbd>Enter</kbd> {lang === "fa" ? "باز کردن" : "open"}</span>
          <span><kbd>Esc</kbd> {lang === "fa" ? "بستن" : "close"}</span>
        </div>
      </div>
    </Modal>
  );
}
