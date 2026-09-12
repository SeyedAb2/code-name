/* ============================================================================
   برجسته‌کردن واژهٔ جستجو داخل متن

   چرا کامپوننت جدا: هم در فهرست نتایج جستجو لازم است، هم در کارت مسیر وقتی
   کاربر در صفحهٔ اصلی فیلتر می‌کند. یک پیاده‌سازی، یک رفتار.

   نکته: با `dangerouslySetInnerHTML` نوشته نشده. متن از دادهٔ خودمان می‌آید
   ولی واژهٔ جستجو را کاربر تایپ می‌کند — تکه‌تکه کردن رشته امن‌تر است و
   کاراکترهای خاص را هم خودبه‌خود درست نشان می‌دهد.
   ========================================================================== */
import { Fragment } from "react";
import s from "./Highlight.module.scss";

export default function Highlight({ text, term }: { text: string; term: string }) {
  const q = term.trim();
  if (!q) return <>{text}</>;

  const lower = text.toLowerCase();
  const needle = q.toLowerCase();
  const parts: React.ReactNode[] = [];

  let from = 0;
  let at = lower.indexOf(needle);
  let key = 0;

  while (at !== -1) {
    if (at > from) parts.push(<Fragment key={key++}>{text.slice(from, at)}</Fragment>);
    parts.push(<mark key={key++} className={s.mark}>{text.slice(at, at + q.length)}</mark>);
    from = at + q.length;
    at = lower.indexOf(needle, from);
  }
  if (from < text.length) parts.push(<Fragment key={key++}>{text.slice(from)}</Fragment>);

  return <>{parts}</>;
}
