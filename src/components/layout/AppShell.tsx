"use client";

import { useCallback, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePrefs } from "@/context/PrefsContext";
import { SITE } from "@/lib/site";
import TopBar, { type Crumb } from "./TopBar";
import Loader from "./Loader";
import SearchDialog from "@/components/search/SearchDialog";
import MobileMenu from "./MobileMenu";
import MobileNav from "./MobileNav";
import UpdateNotice from "./UpdateNotice";
import AboutModal from "@/components/about/AboutModal";
import s from "./AppShell.module.scss";

interface Props {
  children: ReactNode;
  crumbs?: Crumb[];
  /** صفحه‌هایی که خودشان عرض کامل می‌خواهند (مثل صفحهٔ اصلی) */
  bare?: boolean;
}

/**
 * چهارچوب مشترک همهٔ صفحه‌ها: نوار بالا، کشوی موبایل، جستجو، مودال دربارهٔ
 * پروژه و پاورقی.
 *
 * وضعیت مودال‌ها اینجا نگه داشته می‌شود نه در هر صفحه، چون هر صفحه‌ای باید
 * بتواند بازشان کند و بین ناوبری‌ها بسته بمانند.
 */
export default function AppShell({ children, crumbs, bare }: Props) {
  const { lang } = usePrefs();
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);

  const share = useCallback(async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const title = document.title;

    /* روی موبایل برگهٔ اشتراک سیستم بهتر از کپی کردن است */
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* کاربر لغو کرد — به کپی برنگرد، کار تمام است */
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      alert(lang === "fa" ? "نشانی کپی شد" : "Link copied");
    } catch {
      /* دسترسی کلیپ‌بورد نداریم */
    }
  }, [lang]);

  return (
    <>
      <Loader />
      <TopBar
        crumbs={crumbs}
        onOpenSearch={() => setSearch(true)}
        onOpenMenu={() => setMenu(true)}
        onOpenAbout={() => setAbout(true)}
        onShare={share}
      />

      <main>{bare ? children : <div className={s.shell}>{children}</div>}</main>

      <MobileNav onSearch={() => setSearch(true)} />

      <footer className={s.footer}>
        <div className={s.footerInner}>
          <span className={s.footerBrand}>
            <Image src="/assets/images/logo-64.png" alt="" width={28} height={28} />
            <span>
              <Link href="/">{SITE.name[lang]}</Link>
              {" · "}
              <Link href="/contributing">
                {lang === "fa" ? "راهنمای مشارکت" : "Contributing"}
              </Link>
            </span>
          </span>
          <span>
            {lang === "fa" ? "ساختهٔ " : "Built by "}
            {lang === "fa" ? SITE.author.name : SITE.author.nameEn}
          </span>
        </div>
      </footer>

      <SearchDialog open={search} onClose={() => setSearch(false)} />
      <MobileMenu
        open={menu}
        onClose={() => setMenu(false)}
        onOpenSearch={() => { setMenu(false); setSearch(true); }}
        onOpenAbout={() => { setMenu(false); setAbout(true); }}
        onShare={share}
      />
      <AboutModal open={about} onClose={() => setAbout(false)} />
      <UpdateNotice />
    </>
  );
}
