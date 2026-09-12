/* ============================================================================
   ابزارهای کوچک رودمپ — بدون داده

   این فایل عمداً هیچ رودمپی را وارد نمی‌کند، تا کامپوننت‌های کلاینت
   بتوانند از آن استفاده کنند بدون اینکه کل محتوای رودمپ‌ها در bundle
   مرورگر بیاید.
   ========================================================================== */
import { num } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import type { Skill, SkillLevel, Stage } from "./types";

/**
 * شناسهٔ پایدار هر مهارت، برای ذخیرهٔ وضعیتش در مرورگر.
 * از نام انگلیسی ساخته می‌شود نه از جایگاهش، تا اگر ترتیب مهارت‌ها عوض
 * شد، تیک کاربر به مهارت دیگری نچسبد.
 */
export function skillId(stage: Pick<Stage, "id">, skill: Pick<Skill, "en">): string {
  const slug = skill.en
    .toLowerCase()
    .replace(/[^a-z0-9#+]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${stage.id}:${slug}`;
}

/** کلید ذخیرهٔ وضعیت مهارت‌های یک رودمپ */
export const progressKey = (roadmapId: string) => `rm:${roadmapId}`;

export const levelOf = (s: Pick<Skill, "level">): SkillLevel => s.level ?? "core";

/**
 * بازهٔ ماه. در فارسی «۸ تا ۱۴» می‌نویسیم نه «۸–۱۴»: خط تیره بین دو عدد
 * در متن راست‌به‌چپ جابه‌جا نمایش داده می‌شود و «۱۴–۸» خوانده می‌شود.
 */
export function monthRange([lo, hi]: [number, number], lang: Lang): string {
  if (lo === hi) return num(lo, lang);
  return lang === "fa" ? `${num(lo, "fa")} تا ${num(hi, "fa")}` : `${lo}–${hi}`;
}
