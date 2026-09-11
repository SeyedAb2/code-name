/* ============================================================================
   آیکون‌های رابط

   همه روی یک شبکهٔ ‎۲۴×۲۴‎ کشیده شده‌اند و رنگشان currentColor است، پس با
   رنگ متنِ والد هماهنگ می‌شوند و نیازی به نسخهٔ روشن و تاریک ندارند.
   ========================================================================== */

type P = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  className,
});

export const SearchIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const StarIcon = ({ size = 18, className, filled = false }: P & { filled?: boolean }) => (
  <svg {...base(size, className)} strokeWidth={1.9} fill={filled ? "currentColor" : "none"}>
    <path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85z" />
  </svg>
);

export const ShareIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={1.9}>
    <circle cx="17.5" cy="6" r="2.6" />
    <circle cx="6.5" cy="12" r="2.6" />
    <circle cx="17.5" cy="18" r="2.6" />
    <path d="m8.9 10.7 6.2-3.4M8.9 13.3l6.2 3.4" />
  </svg>
);

export const CodeIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
  </svg>
);

export const DotsIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={0} fill="currentColor" stroke="none">
    <circle cx="5.5" cy="12" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="18.5" cy="12" r="1.7" />
  </svg>
);

export const BarsIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const ListIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="M8 7h12M8 12h12M8 17h9" />
    <circle cx="4.3" cy="7" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="4.3" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="4.3" cy="17" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const GridIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={1.9}>
    <rect x="3.2" y="3.2" width="7.4" height="7.4" rx="1.6" />
    <rect x="13.4" y="3.2" width="7.4" height="7.4" rx="1.6" />
    <rect x="3.2" y="13.4" width="7.4" height="7.4" rx="1.6" />
    <rect x="13.4" y="13.4" width="7.4" height="7.4" rx="1.6" />
  </svg>
);

export const CloseIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const SunIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2.2}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </svg>
);

export const MoonIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2.2}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const BookIcon = ({ size = 16, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="M4 5h16M4 12h16M4 19h10" />
  </svg>
);

export const ClockIcon = ({ size = 16, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CheckBoxIcon = ({ size = 16, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="m9 11 2 2 4-4" />
    <rect x="3" y="4" width="18" height="16" rx="3" />
  </svg>
);

export const FlagIcon = ({ size = 16, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="M5 21V4M5 4h12l-2.4 3.6L17 11H5" />
  </svg>
);

export const ChevronIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2.2}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const HeartIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={1.9}>
    <path d="M12 20.4 4.6 13a4.6 4.6 0 1 1 7.4-5.3A4.6 4.6 0 1 1 19.4 13z" />
  </svg>
);

export const DownloadIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14" />
  </svg>
);

export const UploadIcon = ({ size = 18, className }: P) => (
  <svg {...base(size, className)} strokeWidth={2}>
    <path d="M12 20V9M7.5 13.5 12 9l4.5 4.5M5 4h14" />
  </svg>
);
