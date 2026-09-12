"use client";

import { usePrefs } from "@/context/PrefsContext";
import type { SkillStatus } from "@/lib/roadmaps/types";
import s from "./StatusButtons.module.scss";

const LABEL: Record<SkillStatus, { fa: string; en: string }> = {
  doing: { fa: "در حال یادگیری", en: "Learning" },
  done: { fa: "یاد گرفتم", en: "Learned" },
  skip: { fa: "رد می‌کنم", en: "Skip" },
};

export const statusLabel = (st: SkillStatus, lang: "fa" | "en") => LABEL[st][lang];

interface Props {
  value?: SkillStatus;
  onChange: (st: SkillStatus) => void;
  small?: boolean;
}

/** سه دکمهٔ وضعیت. زدن دوبارهٔ دکمهٔ فعال، وضعیت را پاک می‌کند. */
export default function StatusButtons({ value, onChange, small }: Props) {
  const { lang } = usePrefs();
  return (
    <div className={[s.group, small ? s.sm : ""].filter(Boolean).join(" ")} role="group">
      {(Object.keys(LABEL) as SkillStatus[]).map((k) => (
        <button
          key={k}
          type="button"
          aria-pressed={value === k}
          className={[s.btn, s[k], value === k ? s.on : ""].filter(Boolean).join(" ")}
          onClick={() => onChange(k)}
        >
          {LABEL[k][lang]}
        </button>
      ))}
    </div>
  );
}
