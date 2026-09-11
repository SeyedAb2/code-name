import type { Metadata } from "next";
import { TRACKS } from "@/lib/courses.data";
import { toSummaries } from "@/lib/view";
import BookmarksView from "@/components/bookmarks/BookmarksView";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها",
  description: "مسیرهای ذخیره‌شده و پشتیبان‌گیری از پیشرفت خواندن.",
  robots: { index: false },   /* صفحهٔ شخصی کاربر — نمایه شدنش معنا ندارد */
};

export default function Page() {
  return <BookmarksView tracks={toSummaries(TRACKS)} />;
}
