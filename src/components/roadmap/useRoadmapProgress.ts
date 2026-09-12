"use client";

import { useCallback, useEffect, useState } from "react";
import { useProgress } from "@/context/ProgressContext";
import { readJson, remove, writeJson } from "@/lib/storage";
import { progressKey } from "@/lib/roadmaps/helpers";
import type { SkillStatus } from "@/lib/roadmaps/types";

export type StatusMap = Record<string, SkillStatus>;

/**
 * وضعیت مهارت‌های یک رودمپ، در همان حافظهٔ دولایه‌ای که پیشرفت فصل‌ها
 * هست — پس در فایل پشتیبان هم می‌آید.
 */
export function useRoadmapProgress(roadmapId: string) {
  /* تا بازیابی از IndexedDB تمام نشده نخوان، وگرنه نسخهٔ خالی را می‌بینیم */
  const { ready } = useProgress();
  const key = progressKey(roadmapId);
  const [map, setMap] = useState<StatusMap>({});

  useEffect(() => {
    if (ready) setMap(readJson<StatusMap>(key, {}));
  }, [key, ready]);

  /** زدن دوبارهٔ همان وضعیت، پاکش می‌کند */
  const toggle = useCallback(
    (skillId: string, status: SkillStatus) => {
      setMap((prev) => {
        const next = { ...prev };
        if (prev[skillId] === status) delete next[skillId];
        else next[skillId] = status;
        writeJson(key, next);
        return next;
      });
    },
    [key],
  );

  const reset = useCallback(() => {
    remove(key);
    setMap({});
  }, [key]);

  return { map, toggle, reset, ready };
}
