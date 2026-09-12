"use client";

import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { useProgress } from "@/context/ProgressContext";
import { t, num } from "@/lib/i18n";
import Modal from "@/components/ui/Modal";
import IconButton from "@/components/ui/IconButton";
import ThemeSwitch from "./ThemeSwitch";
import LangSwitch from "./LangSwitch";
import {
  SearchIcon, StarIcon, ShareIcon, CodeIcon, HeartIcon, CloseIcon, MapIcon,
} from "@/components/ui/Icons";
import s from "./MobileMenu.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onShare: () => void;
}

export default function MobileMenu({
  open, onClose, onOpenSearch, onOpenAbout, onShare,
}: Props) {
  const { lang } = usePrefs();
  const { bookmarks } = useProgress();

  return (
    <Modal open={open} onClose={onClose} variant="sheet" label={t("menu", lang)}>
      <div className={s.head}>
        <span>{t("menu", lang)}</span>
        <IconButton label={t("close", lang)} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <nav className={s.body}>
        <button type="button" className={s.item} onClick={onOpenSearch}>
          <SearchIcon /> {t("search", lang)}
        </button>

        <Link href="/bookmarks" className={s.item} onClick={onClose}>
          <StarIcon /> {t("bookmarks", lang)}
          {bookmarks.length > 0 && (
            <span className={s.badge}>{num(bookmarks.length, lang)}</span>
          )}
        </Link>

        <Link href="/roadmap" className={s.item} onClick={onClose}>
          <MapIcon /> {t("roadmaps", lang)}
        </Link>

        <button type="button" className={s.item} onClick={() => { onClose(); onShare(); }}>
          <ShareIcon /> {t("share", lang)}
        </button>

        <Link href="/contributing" className={s.item} onClick={onClose}>
          <CodeIcon /> {t("contribute", lang)}
        </Link>

        <button type="button" className={s.item} onClick={onOpenAbout}>
          <HeartIcon /> {lang === "fa" ? "دربارهٔ پروژه و حمایت" : "About & support"}
        </button>

        <div className={s.row}>
          <span>{t("language", lang)}</span>
          <LangSwitch />
        </div>
        <div className={s.row}>
          <span>{t("theme", lang)}</span>
          <ThemeSwitch />
        </div>
      </nav>
    </Modal>
  );
}
