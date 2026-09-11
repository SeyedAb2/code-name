/* ============================================================================
   نشان یک مسیر یا دسته

   آیکون‌ها در مانیفست به‌صورت رشتهٔ درونیِ SVG ذخیره شده‌اند (مثل
   ‏`<circle …/><path …/>`). این‌ها دادهٔ خودِ پروژه‌اند و در زمان بیلد
   تولید می‌شوند — ورودی کاربر نیستند — پس تزریق مستقیمشان بی‌خطر است.
   ‏tools/check-icons.js هم بررسی می‌کند از کادر ۲۴×۲۴ بیرون نزنند.
   ========================================================================== */

interface Props {
  /** محتویات داخل ‎<svg>‎ */
  glyph: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export default function GlyphIcon({
  glyph,
  size = 24,
  strokeWidth = 1.7,
  className,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      className={className}
      dangerouslySetInnerHTML={{ __html: glyph }}
    />
  );
}
