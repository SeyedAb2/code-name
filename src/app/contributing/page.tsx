import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import ContributingView from "@/components/contributing/ContributingView";

export const metadata: Metadata = {
  title: "راهنمای مشارکت",
  description:
    "چطور در کدنامه مشارکت کنی: نوشتن فصل تازه، اصلاح خطا، بهبود سایت — با قالب فصل، معیار کیفیت و راه‌اندازی محلی پروژه.",
  alternates: { canonical: `${SITE.url}/contributing` },
};

export default function Page() {
  return <ContributingView />;
}
