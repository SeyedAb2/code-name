"use client";

import Link from "next/link";
import Image from "next/image";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { SITE } from "@/lib/site";
import { t } from "@/lib/i18n";
import IconButton from "@/components/ui/IconButton";
import ThemeSwitch from "./ThemeSwitch";
import LangSwitch from "./LangSwitch";
import {
  SearchIcon, StarIcon, ShareIcon, CodeIcon, DotsIcon, BarsIcon,
} from "@/components/ui/Icons";
import s from "./TopBar.module.scss";

export interface Crumb {
  label: { fa: string; en: string };
  href?: string;
}

interface Props {
  crumbs?: Crumb[];
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenAbout: () => void;
  onShare: () => void;
}

export default function TopBar({
  crumbs = [], onOpenSearch, onOpenMenu, onOpenAbout, onShare,
}: Props) {
  const { lang } = usePrefs();
  const { bookmarks } = useProgress();

  return (
    <header className={s.bar}>
      <Link href="/" className={s.brand}>
        <span className={s.mark}>
          <Image
            src="/assets/images/logo-64.png"
            alt=""
            width={30}
            height={30}
            priority
          />
        </span>
        <span className={s.brandText}>
          <b>{SITE.name[lang]}</b>
          <i>{SITE.tagline[lang]}</i>
        </span>
      </Link>

      {crumbs.length > 0 && (
        <nav className={s.crumbs} aria-label={lang === "fa" ? "مسیر" : "Breadcrumb"}>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: "contents" }}>
              {i > 0 && <span className={s.sep}>/</span>}
              {c.href
                ? <Link href={c.href}>{c.label[lang]}</Link>
                : <span className={s.current}>{c.label[lang]}</span>}
            </span>
          ))}
        </nav>
      )}

      <div className={s.tools}>
        <IconButton label={t("search", lang)} onClick={onOpenSearch}>
          <SearchIcon />
        </IconButton>

        <IconButton
          label={t("bookmarks", lang)}
          href="/bookmarks"
          count={bookmarks.length}
        >
          <StarIcon />
        </IconButton>

        <IconButton label={t("share", lang)} onClick={onShare}>
          <ShareIcon />
        </IconButton>

        <IconButton label={t("contribute", lang)} href="/contributing">
          <CodeIcon />
        </IconButton>

        <LangSwitch />
        <ThemeSwitch />

        <IconButton label={t("about", lang)} onClick={onOpenAbout}>
          <DotsIcon />
        </IconButton>
      </div>

      {/* روی موبایل هفت دکمه جا نمی‌شود — یک دکمه، بقیه در کشو */}
      <IconButton
        label={t("menu", lang)}
        onClick={onOpenMenu}
        className={s.menuButton}
      >
        <BarsIcon />
      </IconButton>
    </header>
  );
}
