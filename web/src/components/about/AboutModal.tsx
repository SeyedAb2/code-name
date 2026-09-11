"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePrefs } from "@/context/PrefsContext";
import { SITE } from "@/lib/site";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import s from "./AboutModal.module.scss";

type Tab = "dev" | "contribute" | "donate";

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.9" strokeLinejoin="round" aria-hidden>
    <rect x="2.5" y="5" width="19" height="14" rx="2.4" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.57h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.3c0-1.27-.02-2.9-1.8-2.9-1.8 0-2.08 1.38-2.08 2.8V21h-4z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.9" strokeLinejoin="round" aria-hidden>
    <path d="M6.5 3h3l1.5 4.5L9 9.5a12 12 0 0 0 5.5 5.5l2-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
  </svg>
);
const CodeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
  </svg>
);

export default function AboutModal({
  open, onClose,
}: { open: boolean; onClose: () => void }) {
  const { lang } = usePrefs();
  const [tab, setTab] = useState<Tab>("dev");
  const [copied, setCopied] = useState(false);
  const fa = lang === "fa";

  const copyCard = async () => {
    try {
      await navigator.clipboard.writeText(SITE.donate.cardRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* بدون دسترسی کلیپ‌بورد — شماره روی کارت خواناست */
    }
  };

  const tabs: { id: Tab; fa: string; en: string }[] = [
    { id: "dev", fa: "توسعه‌دهنده", en: "Developer" },
    { id: "contribute", fa: "مشارکت", en: "Contribute" },
    { id: "donate", fa: "حمایت", en: "Support" },
  ];

  return (
    <Modal open={open} onClose={onClose} title={fa ? "دربارهٔ کدنامه" : "About Codenameh"}>
      <div style={{ margin: -16 }}>
        <div className={s.tabs} role="tablist">
          {tabs.map((x) => (
            <button
              key={x.id}
              role="tab"
              type="button"
              aria-selected={tab === x.id}
              onClick={() => setTab(x.id)}
            >
              {fa ? x.fa : x.en}
            </button>
          ))}
        </div>

        {tab === "dev" && (
          <div className={s.pane} role="tabpanel">
            <div className={s.dev}>
              <span className={s.avatar}>
                <Image src="/assets/images/logo-128.png" alt="" width={52} height={52} />
              </span>
              <div className={s.name}>
                <h3>{fa ? SITE.author.name : SITE.author.nameEn}</h3>
                <span>{fa ? "توسعه‌دهنده و نویسندهٔ کدنامه" : "Developer and author of Codenameh"}</span>
              </div>
            </div>
            <p className={s.note}>
              {fa
                ? "این مجموعه را نوشتم چون خودم وقتی شروع کردم، چنین چیزی به فارسی نبود. متن‌باز است — اگر فصلی نوشتی یا غلطی دیدی، خوشحال می‌شوم مشارکت کنی."
                : "I wrote this because when I started, nothing like it existed in Persian. It is open source — if you write a chapter or spot a mistake, contributions are welcome."}
            </p>
            <ul className={s.links}>
              <li>
                <a href={`mailto:${SITE.author.email}`}>
                  <MailIcon /> {fa ? "ایمیل" : "Email"}
                  <i>{SITE.author.email}</i>
                </a>
              </li>
              <li>
                <a href={SITE.author.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> GitHub <i>@{SITE.author.githubHandle}</i>
                </a>
              </li>
              <li>
                <a href={SITE.author.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon /> LinkedIn <i>abbas-mossavi</i>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.author.phoneIntl}`}>
                  <PhoneIcon /> {fa ? "تلفن" : "Phone"} <i>{SITE.author.phone}</i>
                </a>
              </li>
            </ul>
          </div>
        )}

        {tab === "contribute" && (
          <div className={s.pane} role="tabpanel">
            <p className={s.note}>
              {fa
                ? "کدنامه متن‌باز است. می‌توانی فصلی بنویسی، غلطی را درست کنی، یا فقط بگویی کجا نامفهوم بوده. راهنمای مشارکت دقیقاً می‌گوید از کجا شروع کنی."
                : "Codenameh is open source. You can write a chapter, fix a mistake, or simply point out where something was unclear. The contributing guide tells you exactly where to start."}
            </p>
            <ul className={s.links}>
              <li>
                <Link href="/contributing" onClick={onClose}>
                  <CodeIcon /> {fa ? "راهنمای مشارکت" : "Contributing guide"}
                </Link>
              </li>
              <li>
                <a href={SITE.repo} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> {fa ? "مخزن پروژه" : "The repository"}
                  <i>SeyedAb2/code-name</i>
                </a>
              </li>
            </ul>
          </div>
        )}

        {tab === "donate" && (
          <div className={s.pane} role="tabpanel">
            <p className={s.note}>
              {fa
                ? "کدنامه رایگان است و رایگان می‌ماند — نه تبلیغ دارد، نه اشتراک، نه ردیاب. اگر به کارت آمد و خواستی حمایت کنی، فعلاً فقط کارت‌به‌کارت ممکن است. هیچ اجباری نیست و هیچ بخشی از محتوا پشت پرداخت نمی‌رود."
                : "Codenameh is free and will stay free — no ads, no subscription, no tracking. If it helped and you would like to support it, a direct card transfer is the only option for now. Nothing is required, and no content is ever put behind a paywall."}
            </p>

            <div className={s.card}>
              <div className={s.cardTop}>
                <span>{fa ? "بلوبانک" : "Blu Bank"}</span>
                <span className={s.chip} aria-hidden />
              </div>
              <div className={s.cardNum}>{SITE.donate.card}</div>
              <div className={s.cardFoot}>
                <span>{fa ? SITE.donate.holder.fa : SITE.donate.holder.en}</span>
                <span>{fa ? SITE.donate.bank.fa : SITE.donate.bank.en}</span>
              </div>
            </div>

            <div className={s.copyRow}>
              <Button onClick={copyCard} variant={copied ? "ghost" : "primary"}>
                {copied
                  ? (fa ? "کپی شد ✓" : "Copied ✓")
                  : (fa ? "کپی شمارهٔ کارت" : "Copy card number")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
