"use client";

import type { CSSProperties } from "react";
import { usePrefs } from "@/context/PrefsContext";
import { num } from "@/lib/i18n";
import { levelOf, monthRange, skillId } from "@/lib/roadmaps/helpers";
import type { Roadmap, Skill, Stage } from "@/lib/roadmaps/types";
import { CheckIcon, FlagIcon } from "@/components/ui/Icons";
import { statusLabel } from "./StatusButtons";
import type { StatusMap } from "./useRoadmapProgress";
import s from "./RoadmapChart.module.scss";

interface Props {
  roadmap: Roadmap;
  status: StatusMap;
  onStage: (stage: number) => void;
  onSkill: (stage: number, skill: number) => void;
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/**
 * نمودار درختی رودمپ، از بالا به پایین.
 *
 * هر مرحله یک ردیف است: گرهٔ مرحله روی ستون وسط، مهارت‌هایش دو طرف.
 * نیمهٔ اول مهارت‌ها سمت شروع متن می‌نشیند (راست در فارسی) تا ترتیب
 * خواندن با جهت زبان یکی باشد. در DOM گرهٔ مرحله اول می‌آید تا صفحه‌خوان
 * هم مرحله را قبل از مهارت‌هایش بخواند؛ جای دیداری را grid تعیین می‌کند.
 */
export default function RoadmapChart({ roadmap: r, status, onStage, onSkill }: Props) {
  const { lang } = usePrefs();
  const fa = lang === "fa";

  const node = (st: Stage, i: number, sk: Skill, j: number) => {
    const id = skillId(st, sk);
    const state = status[id];
    return (
      <li key={id}>
        <button
          type="button"
          className={cx(s.node, s[levelOf(sk)], sk.kind === "soft" && s.soft, state && s[state])}
          onClick={() => onSkill(i, j)}
        >
          <span className={s.nodeT}>{sk[lang]}</span>
          {sk.kind === "soft" && <span className={s.softTag}>{fa ? "نرم" : "soft"}</span>}
          {state && (
            <span className={s.mark}>
              {state === "done" && <CheckIcon size={11} />}
              <span className="sr-only">{statusLabel(state, lang)}</span>
            </span>
          )}
        </button>
      </li>
    );
  };

  return (
    <div className={s.chart} style={{ ["--acc" as string]: r.accent } as CSSProperties}>
      <div className={cx(s.row, s.capTop)}>
        <div className={s.hub}>
          <span className={s.cap}>{r[lang].name}</span>
        </div>
      </div>

      {r.stages.map((st, i) => {
        const half = Math.ceil(st.skills.length / 2);
        const a = st.skills.slice(0, half);
        const b = st.skills.slice(half);
        const ids = st.skills.map((k) => skillId(st, k));
        const doneN = ids.filter((id) => status[id] === "done").length;

        return (
          <div
            key={st.id}
            className={s.row}
            style={{ ["--i" as string]: Math.min(i, 8) } as CSSProperties}
          >
            <div className={s.hub}>
              <button type="button" className={s.stage} onClick={() => onStage(i)}>
                <span className={s.stageN}>{num(i + 1, lang)}</span>
                <span className={s.stageBody}>
                  <span className={s.stageT}>{st[lang]}</span>
                  <span className={s.stageM}>
                    {monthRange(st.months, lang)} {fa ? "ماه" : "mo"}
                    {" · "}
                    {fa
                      ? `${num(doneN, "fa")} از ${num(ids.length, "fa")}`
                      : `${doneN}/${ids.length}`}
                  </span>
                </span>
              </button>
            </div>

            {a.length > 0 && (
              <ul className={cx(s.side, s.sideA)}>
                {a.map((sk, j) => node(st, i, sk, j))}
              </ul>
            )}
            {b.length > 0 && (
              <ul className={cx(s.side, s.sideB)}>
                {b.map((sk, j) => node(st, i, sk, half + j))}
              </ul>
            )}
          </div>
        );
      })}

      <div className={cx(s.row, s.capEnd)}>
        <div className={s.hub}>
          <span className={cx(s.cap, s.goal)}>
            <FlagIcon size={15} />
            {r[lang].role}
          </span>
        </div>
      </div>
    </div>
  );
}
