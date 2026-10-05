"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { num, t } from "@/lib/i18n";
import type { Category } from "@/lib/types";
import type { TrackSummary } from "@/lib/view";
import AppShell from "@/components/layout/AppShell";
import TrackCard from "@/components/track/TrackCard";
import GlyphIcon from "@/components/ui/GlyphIcon";
import { SearchIcon, CloseIcon, ListIcon, GridIcon } from "@/components/ui/Icons";
import s from "./HomeView.module.scss";

type View = "list" | "tiles";
type ContentStatus = "all" | "complete" | "in-progress" | "not-started";

interface Props {
  tracks: TrackSummary[];
  categories: Category[];
}

export default function HomeView({ tracks, categories }: Props) {
  const { lang } = usePrefs();
  const fa = lang === "fa";
  /* هر بار که صفحه باز یا رفرش می‌شود از دسته‌ها شروع می‌کنیم؛ انتخاب کاربر
     فقط تا وقتی روی همین صفحه است می‌ماند و ذخیره نمی‌شود. */
  const [view, setView] = useState<View>("tiles");
  const [q, setQ] = useState("");
  const [contentStatus, setContentStatus] = useState<ContentStatus>("all");

  const pick = (v: View) => setView(v);

  const term = q.trim().toLowerCase();
  const matches = useMemo(() => tracks.filter((tr) => {
    const searchText = [tr.fa.name, tr.en.name, tr.fa.desc, tr.en.desc].join(" ").toLowerCase();
    const searchMatch = !term || searchText.includes(term);
    const { chapters, ready } = tr.stats;
    const statusMatch =
      contentStatus === "all" ||
      (contentStatus === "complete" && chapters > 0 && ready >= chapters) ||
      (contentStatus === "in-progress" && ready > 0 && ready < chapters) ||
      (contentStatus === "not-started" && ready === 0);
    return searchMatch && statusMatch;
  }), [tracks, term, contentStatus]);

  const totals = useMemo(() => ({
    tracks: tracks.length,
    chapters: tracks.reduce((a, x) => a + x.stats.chapters, 0),
    exercises: tracks.reduce((a, x) => a + x.stats.exercises, 0),
    ready: tracks.reduce((a, x) => a + x.stats.ready, 0),
  }), [tracks]);

  /* با جست‌وجو یا فیلتر وضعیت، مسیرهای منطبق را مستقیم نشان می‌دهیم. */
  const searching = term.length > 0;
  const filtering = searching || contentStatus !== "all";

  return (
    <AppShell bare>
      <section className={s.hero}>
        <h1>
          {fa ? <>از <em>هیچ‌چی نمی‌دانم</em> تا سروری که<br />خودت نگهش می‌داری</>
              : <>From <em>knowing nothing</em> to running<br />the server yourself</>}
        </h1>
        <p>
          {fa
            ? "این‌ها دورهٔ ویدیویی نیستند. مستند مرجع‌اند — با مثال خودمانی، تمرین با پاسخ کامل، و پروژهٔ واقعی در پایان هر فصل."
            : "These are not video courses. They are reference documents — with worked examples, exercises that ship with full solutions, and a real project at the end of every chapter."}
        </p>
        <div className={s.stats}>
          <div><b>{num(totals.tracks, lang)}</b><span>{fa ? "مسیر یادگیری" : "learning tracks"}</span></div>
          <div><b>{num(totals.chapters, lang)}</b><span>{fa ? "فصل در نقشهٔ راه" : "chapters mapped"}</span></div>
          <div><b>{num(totals.exercises, lang)}</b><span>{fa ? "تمرین با پاسخ" : "solved exercises"}</span></div>
          <div><b>{num(totals.ready, lang)}</b><span>{fa ? "فصل آمادهٔ مطالعه" : "chapters ready"}</span></div>
        </div>
      </section>

      <div className={s.content}>
        <div className={s.toolbar}>
          <div className={s.filter}>
            <SearchIcon size={17} />
            <input
              type="search"
              value={q}
              onChange={(e) => { setQ(e.target.value); setView("list"); }}
              placeholder={fa ? "جستجو در نام و توضیح مسیرها…" : "Filter tracks by name or description…"}
              aria-label={fa ? "فیلتر مسیرها" : "Filter tracks"}
            />
            {q && (
              <button type="button" onClick={() => setQ("")} aria-label={t("close", lang)}>
                <CloseIcon size={15} />
              </button>
            )}
          </div>

          <label className={s.statusFilter}>
            <span>{fa ? "وضعیت نگارش" : "Content status"}</span>
            <select
              value={contentStatus}
              onChange={(e) => {
                setContentStatus(e.target.value as ContentStatus);
                setView("list");
              }}
              aria-label={fa ? "فیلتر وضعیت نگارش دوره‌ها" : "Filter courses by writing status"}
            >
              <option value="all">{fa ? "همهٔ دوره‌ها" : "All courses"}</option>
              <option value="complete">{fa ? "کامل" : "Complete"}</option>
              <option value="in-progress">{fa ? "در حال نگارش" : "In progress"}</option>
              <option value="not-started">{fa ? "هنوز نوشته نشده" : "Not written yet"}</option>
            </select>
          </label>

          <div className={s.viewSwitch} role="group" aria-label={fa ? "نحوهٔ نمایش" : "View"}>
            <button type="button" aria-pressed={view === "list"} onClick={() => pick("list")}>
              <ListIcon size={15} /> {t("allTracks", lang)}
            </button>
            <button type="button" aria-pressed={view === "tiles"} onClick={() => pick("tiles")} disabled={filtering}>
              <GridIcon size={15} /> {t("categories", lang)}
            </button>
          </div>
        </div>

        {/* نمای کاشی — فقط عنوان دسته‌ها */}
        {view === "tiles" && !filtering && (
          <div className={s.tiles}>
            {categories.map((c) => {
              const list = tracks.filter((x) => x.cat === c.id);
              if (!list.length) return null;
              const chs = list.reduce((a, x) => a + x.stats.chapters, 0);
              return (
                <Link key={c.id} href={`/category/${c.id}`} className={s.tile}>
                  <span className={s.tileIcon}><GlyphIcon glyph={c.ico} size={24} /></span>
                  <h3>{c[lang].name}</h3>
                  <span>
                    {num(list.length, lang)} {t("tracks", lang)} · {num(chs, lang)} {t("chapters", lang)}
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        {/* نمای فهرست — مسیرها زیر سرفصل دستهٔ خودشان */}
        {(view === "list" || filtering) && (
          filtering ? (
            matches.length ? (
              <div className={s.grid}>
                {matches.map((tr, i) => <TrackCard key={tr.id} track={tr} index={i} term={q} />)}
              </div>
            ) : (
              <p className={s.noHits}>{t("noResults", lang)}</p>
            )
          ) : (
            categories.map((c) => {
              const list = tracks.filter((x) => x.cat === c.id);
              if (!list.length) return null;
              const chs = list.reduce((a, x) => a + x.stats.chapters, 0);
              return (
                <section key={c.id} className={s.catBlock} id={`cat-${c.id}`}>
                  <header className={s.catHead}>
                    <div className={s.catTitle}>
                      <h2><Link href={`/category/${c.id}`}>{c[lang].name}</Link></h2>
                      <p>{c[lang].desc}</p>
                    </div>
                    <span className={s.catCount}>
                      <b>{num(list.length, lang)}</b>
                      {t("tracks", lang)}
                      <i>{num(chs, lang)} {t("chapters", lang)}</i>
                    </span>
                  </header>
                  <div className={s.grid}>
                    {list.map((tr, i) => <TrackCard key={tr.id} track={tr} index={i} />)}
                  </div>
                </section>
              );
            })
          )
        )}
      </div>
    </AppShell>
  );
}
