"use client";

import { useRef } from "react";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { exportBackup, importBackup } from "@/lib/storage";
import type { TrackSummary } from "@/lib/view";
import AppShell from "@/components/layout/AppShell";
import TrackCard from "@/components/track/TrackCard";
import Button from "@/components/ui/Button";
import { DownloadIcon, UploadIcon } from "@/components/ui/Icons";
import s from "./BookmarksView.module.scss";

export default function BookmarksView({ tracks }: { tracks: TrackSummary[] }) {
  const { lang } = usePrefs();
  const { bookmarks } = useProgress();
  const fileRef = useRef<HTMLInputElement>(null);
  const fa = lang === "fa";

  const saved = tracks.filter((t) => bookmarks.includes(t.id));

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const res = await importBackup(file);
    if (res.ok) {
      alert(fa ? `بازیابی شد: ${res.count} مورد. صفحه تازه می‌شود.` : `Restored ${res.count} entries. Reloading.`);
      location.reload();
    } else {
      alert(res.reason === "wrong-file"
        ? (fa ? "این فایل پشتیبان کدنامه نیست." : "That is not a Codenameh backup.")
        : (fa ? "فایل خوانا نیست." : "The file could not be read."));
    }
    e.target.value = "";
  };

  /* هر ردیف: آیا این اتفاق دادهٔ کاربر را از بین می‌برد؟ */
  const rows: [string, string, boolean][] = [
    ["\u200FIP یا شبکه‌ات عوض شود", "Your IP or network changes", true],
    ["مرورگر یا سیستم را ری‌استارت کنی", "You restart the browser or machine", true],
    ["مرورگر به‌روزرسانی شود", "The browser updates", true],
    ["کش را پاک کنی، بدون «دادهٔ سایت»", "You clear the cache but not site data", true],
    ["«دادهٔ سایت» را پاک کنی", "You clear site data", false],
    ["مرورگر یا دستگاه دیگری باز کنی", "You open another browser or device", false],
    ["حالت ناشناس", "Private browsing", false],
  ];

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: "علاقه‌مندی‌ها", en: "Bookmarks" } },
    ]}>
      <header className={s.head}>
        <h1>{fa ? "علاقه‌مندی‌ها" : "Bookmarks"}</h1>
        <p>
          {fa
            ? "هر مسیری که ستاره بزنی اینجا می‌آید، همراه با درصد پیشرفتت. همه‌چیز داخل مرورگر خودت می‌ماند و به هیچ سروری نمی‌رود."
            : "Every track you star appears here with your progress. It all stays in your own browser and reaches no server."}
        </p>
      </header>

      {saved.length ? (
        <div className={s.grid}>
          {saved.map((tr, i) => <TrackCard key={tr.id} track={tr} index={i} />)}
        </div>
      ) : (
        <div className={s.empty}>
          <p>{fa ? "هنوز چیزی ذخیره نکرده‌ای. روی ستارهٔ هر مسیر بزن." : "Nothing saved yet. Tap the star on any track."}</p>
          <Button href="/">{fa ? "دیدن مسیرها" : "Browse tracks"}</Button>
        </div>
      )}

      <section className={s.section}>
        <h2>{fa ? "پشتیبان‌گیری" : "Backup"}</h2>
        <div className={s.note}>
          <p>
            {fa
              ? "پیشرفت و علاقه‌مندی‌هایت در دو جای مرورگر خودت ذخیره می‌شود — localStorage و IndexedDB — تا اگر یکی پاک شد، از دیگری برگردد."
              : "Your progress and bookmarks are stored in two places in your own browser — localStorage and IndexedDB — so if one is cleared it comes back from the other."}
          </p>

          <table className={s.table}>
            <thead>
              <tr>
                <th>{fa ? "این اتفاق" : "If this happens"}</th>
                <th>{fa ? "دادهٔ تو" : "Your data"}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([f, e, survives]) => (
                <tr key={e}>
                  <td>{fa ? f : e}</td>
                  <td className={survives ? s.yes : s.no}>
                    {survives
                      ? (fa ? "سالم می‌ماند" : "Survives")
                      : (fa ? "از بین می‌رود" : "Lost")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            {fa
              ? "برای آن سه ردیف قرمز، تنها راه واقعی پشتیبان‌گیری است. کدنامه سرور ندارد، پس همگام‌سازی خودکار بین دستگاه‌ها ممکن نیست؛ این جایگزین صادقانه‌اش است."
              : "For those three red rows the only real answer is a backup. Codenameh has no server, so automatic cross-device sync is impossible; this is the honest substitute."}
          </p>

          <div className={s.actions}>
            <Button onClick={exportBackup}>
              <DownloadIcon size={16} />
              {fa ? "گرفتن فایل پشتیبان" : "Download a backup"}
            </Button>
            <Button variant="ghost" onClick={() => fileRef.current?.click()}>
              <UploadIcon size={16} />
              {fa ? "بازیابی از فایل" : "Restore from a file"}
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              onChange={onFile}
              hidden
            />
          </div>
        </div>
      </section>
    </AppShell>
  );
}
