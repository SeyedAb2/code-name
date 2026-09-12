"use client";

import { useCallback, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { num } from "@/lib/i18n";
import { read, write } from "@/lib/storage";
import { levelOf, monthRange, skillId } from "@/lib/roadmaps/helpers";
import type { NamedRef, Roadmap, RoadmapStats, Skill, SkillLevel } from "@/lib/roadmaps/types";
import AppShell from "@/components/layout/AppShell";
import GlyphIcon from "@/components/ui/GlyphIcon";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import {
  BookIcon, ClockIcon, CodeIcon, LayersIcon, ListIcon, TreeIcon, UsersIcon,
} from "@/components/ui/Icons";
import RoadmapChart from "./RoadmapChart";
import StatusButtons from "./StatusButtons";
import { useRoadmapProgress } from "./useRoadmapProgress";
import s from "./RoadmapDetail.module.scss";

interface Props {
  roadmap: Roadmap;
  stats: RoadmapStats;
  /** نام مسیرهایی که مهارت‌ها به آن‌ها ارجاع می‌دهند */
  trackNames: NamedRef[];
  prereqs: NamedRef[];
  nexts: NamedRef[];
}

type View = "chart" | "list";
type Sel = { stage: number; skill?: number } | null;

const VIEW_KEY = "rm-view";

const LEVEL: Record<SkillLevel, { fa: string; en: string }> = {
  core: { fa: "مسیر پیشنهادی", en: "Recommended" },
  alt: { fa: "جایگزین — یکی کافی است", en: "Alternative — pick one" },
  opt: { fa: "اختیاری — هر وقت لازم شد", en: "Optional — when needed" },
};

function Fact({ icon, tone, value, unit, label }: {
  icon: ReactNode; tone: string; value: string; unit?: string; label: string;
}) {
  return (
    <div className={s.fact} style={{ ["--fc" as string]: tone } as CSSProperties}>
      <span className={s.factIcon}>{icon}</span>
      <b>{value}{unit && <i>{unit}</i>}</b>
      <span>{label}</span>
    </div>
  );
}

export default function RoadmapDetail({ roadmap: r, stats, trackNames, prereqs, nexts }: Props) {
  const { lang } = usePrefs();
  const fa = lang === "fa";
  const { map, toggle, reset } = useRoadmapProgress(r.id);
  const [view, setView] = useState<View>("chart");
  const [sel, setSel] = useState<Sel>(null);

  useEffect(() => {
    const v = read(VIEW_KEY);
    if (v === "chart" || v === "list") setView(v);
  }, []);

  const choose = (v: View) => {
    setView(v);
    write(VIEW_KEY, v);
  };

  /* همهٔ مهارت‌ها پشت سر هم — برای «قبلی/بعدی» در کشو و شمارش پیشرفت */
  const flat = useMemo(
    () => r.stages.flatMap((st, i) =>
      st.skills.map((sk, j) => ({ stage: i, skill: j, id: skillId(st, sk) }))),
    [r],
  );

  /* فقط شناسه‌هایی که هنوز در رودمپ هستند شمرده می‌شوند؛ اگر مهارتی
     تغییر نام داده، تیک قدیمی‌اش آمار را خراب نمی‌کند */
  let done = 0, skipped = 0, doing = 0;
  for (const f of flat) {
    const st = map[f.id];
    if (st === "done") done++;
    else if (st === "skip") skipped++;
    else if (st === "doing") doing++;
  }
  const counted = flat.length - skipped;
  const progress = counted > 0 ? (done / counted) * 100 : 0;

  const nameOf = (id: string) => trackNames.find((t) => t.id === id);
  const close = useCallback(() => setSel(null), []);

  const stage = sel ? r.stages[sel.stage] : null;
  const skill: Skill | null = sel && stage && sel.skill !== undefined ? stage.skills[sel.skill] : null;
  const pos = skill ? flat.findIndex((f) => f.stage === sel!.stage && f.skill === sel!.skill) : -1;
  const go = (d: number) => {
    const f = flat[pos + d];
    if (f) setSel({ stage: f.stage, skill: f.skill });
  };

  const tracksOf = (sk: Skill) =>
    sk.tracks?.length ? (
      <div className={s.trackLinks}>
        {sk.tracks.map((id) => {
          const n = nameOf(id);
          return n ? <Link key={id} href={`/track/${id}`}>{fa ? n.fa : n.en}</Link> : null;
        })}
      </div>
    ) : null;

  const itemsOf = (sk: Skill) =>
    sk.items?.length ? (
      <ul className={s.items}>
        {sk.items.map((x) => <li key={x} dir="auto">{x}</li>)}
      </ul>
    ) : null;

  const badges = (sk: Skill) => (
    <>
      <span className={[s.kind, sk.kind === "hard" ? s.hard : s.soft].join(" ")}>
        {sk.kind === "hard" ? (fa ? "مهارت فنی" : "hard skill") : (fa ? "مهارت نرم" : "soft skill")}
      </span>
      <span className={[s.level, s[`lv_${levelOf(sk)}`]].join(" ")}>{LEVEL[levelOf(sk)][lang]}</span>
    </>
  );

  return (
    <AppShell crumbs={[
      { label: { fa: "خانه", en: "Home" }, href: "/" },
      { label: { fa: "رودمپ‌ها", en: "Roadmaps" }, href: "/roadmap" },
      { label: { fa: r.fa.name, en: r.en.name } },
    ]}>
      <div className={s.page} style={{ ["--acc" as string]: r.accent } as CSSProperties}>
        <header className={s.head}>
          <div className={s.headTop}>
            <span className={s.icon}><GlyphIcon glyph={r.ico} size={30} /></span>
            <div className={s.titles}>
              <h1>{r[lang].name}</h1>
              <span>{r[lang].role}</span>
            </div>
          </div>

          <p className={s.intro}>{r[lang].intro}</p>

          <div className={s.facts}>
            <Fact icon={<LayersIcon size={15} />} tone="var(--blue)"
              value={num(stats.stages, lang)} label={fa ? "مرحله" : "stages"} />
            <Fact icon={<CodeIcon size={15} />} tone="var(--violet)"
              value={num(stats.hard, lang)} label={fa ? "مهارت فنی" : "hard skills"} />
            <Fact icon={<UsersIcon size={15} />} tone="var(--safe)"
              value={num(stats.soft, lang)} label={fa ? "مهارت نرم" : "soft skills"} />
            {stats.topics > 0 && (
              <Fact icon={<BookIcon size={15} />} tone="var(--a)"
                value={num(stats.topics, lang)} label={fa ? "موضوع برای یادگیری" : "topics to learn"} />
            )}
            <Fact icon={<ClockIcon size={15} />} tone="var(--warn)"
              value={monthRange(stats.months, lang)} unit={fa ? "ماه" : "months"}
              label={fa ? "با هفته‌ای ۱۰ تا ۱۵ ساعت" : "at 10–15 hours a week"} />
          </div>

          {prereqs.length > 0 && (
            <p className={s.prereq}>
              {fa ? "بهتر است قبلش این را رفته باشی: " : "Best taken after: "}
              {prereqs.map((p, i) => (
                <span key={p.id}>
                  {i > 0 && (fa ? "، " : ", ")}
                  <Link href={`/roadmap/${p.id}`}>{fa ? p.fa : p.en}</Link>
                </span>
              ))}
            </p>
          )}
        </header>

        <section className={s.progress} aria-label={fa ? "پیشرفت تو" : "Your progress"}>
          <div className={s.progressTop}>
            <h2>{fa ? "پیشرفت تو" : "Your progress"}</h2>
            <span className={s.progressCount}>
              {fa
                ? `${num(done, "fa")} از ${num(counted, "fa")} مهارت`
                : `${done} of ${counted} skills`}
              {doing > 0 && (fa ? ` · ${num(doing, "fa")} در حال یادگیری` : ` · ${doing} in progress`)}
            </span>
            {done + doing + skipped > 0 && (
              <Button variant="ghost" onClick={reset}>{fa ? "صفر کن" : "Reset"}</Button>
            )}
          </div>
          <ProgressBar value={progress} label={r[lang].name} />
          <p className={s.hint}>
            {fa
              ? "روی هر گره بزن تا بدانی چرا لازم است، چه موضوع‌هایی زیرش است و کدام مسیر کدنامه درسش می‌دهد — و وضعیتش را علامت بزن. همه‌چیز در مرورگر خودت می‌ماند."
              : "Tap any node to see why it matters, what topics sit under it and which Codenameh track teaches it — then mark your status. Everything stays in your own browser."}
          </p>
        </section>

        <div className={s.toolbar}>
          <div className={s.switch} role="tablist" aria-label={fa ? "نوع نمایش" : "View"}>
            <button type="button" role="tab" aria-selected={view === "chart"} onClick={() => choose("chart")}>
              <TreeIcon size={16} />{fa ? "نمودار درختی" : "Tree chart"}
            </button>
            <button type="button" role="tab" aria-selected={view === "list"} onClick={() => choose("list")}>
              <ListIcon size={16} />{fa ? "فهرست کامل" : "Full list"}
            </button>
          </div>

          <ul className={s.legend}>
            <li><i className={s.lgCore} />{LEVEL.core[lang]}</li>
            <li><i className={s.lgAlt} />{LEVEL.alt[lang]}</li>
            <li><i className={s.lgOpt} />{LEVEL.opt[lang]}</li>
            <li><i className={s.lgSoft} />{fa ? "مهارت نرم" : "Soft skill"}</li>
            <li><i className={s.lgDone} />{fa ? "یاد گرفتم" : "Learned"}</li>
          </ul>
        </div>

        {view === "chart" ? (
          <RoadmapChart
            roadmap={r}
            status={map}
            onStage={(i) => setSel({ stage: i })}
            onSkill={(i, j) => setSel({ stage: i, skill: j })}
          />
        ) : (
          <div className={s.list}>
            {r.stages.map((st, i) => (
              <section key={st.id} className={s.stage}>
                <span className={s.stageNum}>{num(i + 1, lang)}</span>

                <div className={s.stageHead}>
                  <h2>{st[lang]}</h2>
                  <span className={s.months}>
                    {monthRange(st.months, lang)} {fa ? "ماه" : "months"}
                  </span>
                </div>

                <p className={s.outcome}>{fa ? st.outcomeFa : st.outcomeEn}</p>

                <div className={s.skills}>
                  {st.skills.map((sk) => {
                    const id = skillId(st, sk);
                    return (
                      <article
                        key={id}
                        className={[s.skill, map[id] ? s[`st_${map[id]}`] : ""].filter(Boolean).join(" ")}
                      >
                        <div className={s.skillHead}>
                          <h3>{sk[lang]}</h3>
                          {badges(sk)}
                        </div>
                        <p className={s.why}>{fa ? sk.whyFa : sk.whyEn}</p>
                        {itemsOf(sk)}
                        {tracksOf(sk)}
                        <div className={s.skillFoot}>
                          <StatusButtons small value={map[id]} onChange={(v) => toggle(id, v)} />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {nexts.length > 0 && (
          <section className={s.nextBox}>
            <h2>{fa ? "قدم بعدی" : "Where to go next"}</h2>
            <div>
              {nexts.map((n) => (
                <Link key={n.id} href={`/roadmap/${n.id}`}>{fa ? n.fa : n.en}</Link>
              ))}
            </div>
          </section>
        )}

        <Modal
          open={!!sel}
          onClose={close}
          variant="sheet"
          title={skill ? skill[lang] : stage ? stage[lang] : ""}
        >
          {stage && (
            <div className={s.sheet}>
              {skill ? (
                <>
                  <div className={s.badges}>
                    <button type="button" className={s.stageChip} onClick={() => setSel({ stage: sel!.stage })}>
                      {fa ? `مرحلهٔ ${num(sel!.stage + 1, "fa")}` : `Stage ${sel!.stage + 1}`} · {stage[lang]}
                    </button>
                    {badges(skill)}
                  </div>

                  <p className={s.sheetWhy}>{fa ? skill.whyFa : skill.whyEn}</p>

                  {skill.items?.length ? (
                    <>
                      <h3>{fa ? "موضوع‌هایی که باید بشناسی" : "Topics to know"}</h3>
                      {itemsOf(skill)}
                    </>
                  ) : null}

                  {skill.tracks?.length ? (
                    <>
                      <h3>{fa ? "در کدنامه بخوان" : "Learn it on Codenameh"}</h3>
                      {tracksOf(skill)}
                    </>
                  ) : null}

                  <h3>{fa ? "وضعیت تو" : "Your status"}</h3>
                  <StatusButtons
                    value={map[flat[pos].id]}
                    onChange={(v) => toggle(flat[pos].id, v)}
                  />

                  <div className={s.sheetNav}>
                    <button type="button" disabled={pos <= 0} onClick={() => go(-1)}>
                      {fa ? "→ قبلی" : "← Previous"}
                    </button>
                    <span>{num(pos + 1, lang)} / {num(flat.length, lang)}</span>
                    <button type="button" disabled={pos >= flat.length - 1} onClick={() => go(1)}>
                      {fa ? "بعدی ←" : "Next →"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className={s.months}>
                    {fa ? `مرحلهٔ ${num(sel!.stage + 1, "fa")}` : `Stage ${sel!.stage + 1}`}
                    {" · "}
                    {monthRange(stage.months, lang)} {fa ? "ماه" : "months"}
                  </span>
                  <p className={s.sheetWhy}>{fa ? stage.outcomeFa : stage.outcomeEn}</p>

                  <h3>{fa ? "مهارت‌های این مرحله" : "Skills in this stage"}</h3>
                  <ul className={s.stageSkills}>
                    {stage.skills.map((sk, j) => {
                      const id = skillId(stage, sk);
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            className={map[id] ? s[`st_${map[id]}`] : undefined}
                            onClick={() => setSel({ stage: sel!.stage, skill: j })}
                          >
                            <span>{sk[lang]}</span>
                            <small>{sk.kind === "soft" ? (fa ? "نرم" : "soft") : LEVEL[levelOf(sk)][lang].split(" — ")[0]}</small>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          )}
        </Modal>
      </div>
    </AppShell>
  );
}
