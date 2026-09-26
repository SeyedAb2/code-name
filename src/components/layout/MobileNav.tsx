"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { t, num } from "@/lib/i18n";
import { HomeIcon, SearchIcon, StarIcon, MapIcon, CodeIcon } from "@/components/ui/Icons";
import s from "./MobileNav.module.scss";

export default function MobileNav({ onSearch }: { onSearch: () => void }) {
  const path = usePathname();
  const { lang } = usePrefs();
  const { bookmarks } = useProgress();
  const home = path === "/";

  return (
    <nav className={s.nav} aria-label={lang === "fa" ? "ناوبری اصلی" : "Main navigation"}>
      <Link href="/bookmarks" className={s.item} aria-current={path === "/bookmarks" ? "page" : undefined}>
        <span className={s.icon}><StarIcon size={21} /></span>
        <span>{t("bookmarks", lang)}</span>
        {bookmarks.length > 0 && <i className={s.badge}>{num(bookmarks.length, lang)}</i>}
      </Link>
      <button type="button" className={s.item} onClick={onSearch}>
        <span className={s.icon}><SearchIcon size={21} /></span>
        <span>{t("search", lang)}</span>
      </button>
      <Link href="/" className={[s.item, s.home, home ? s.active : ""].filter(Boolean).join(" ")} aria-current={home ? "page" : undefined}>
        <span className={s.homeIcon}><HomeIcon size={23} /></span>
        <span>{lang === "fa" ? "خانه" : "Home"}</span>
      </Link>
      <Link href="/roadmap" className={s.item} aria-current={path.startsWith("/roadmap") ? "page" : undefined}>
        <span className={s.icon}><MapIcon size={21} /></span>
        <span>{t("roadmaps", lang)}</span>
      </Link>
      <Link href="/contributing" className={s.item} aria-current={path === "/contributing" ? "page" : undefined}>
        <span className={s.icon}><CodeIcon size={21} /></span>
        <span>{lang === "fa" ? "مشارکت" : "Contribute"}</span>
      </Link>
    </nav>
  );
}
