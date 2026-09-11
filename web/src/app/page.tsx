import { TRACKS, CATEGORIES } from "@/lib/courses.data";
import HomeView from "@/components/home/HomeView";
import { toSummaries } from "@/lib/view";

/* صفحهٔ اصلی ایستا ساخته می‌شود: داده در زمان بیلد ثابت است و هیچ چیزی
   برای هر بازدید تغییر نمی‌کند. پیشرفت کاربر سمت کلاینت اضافه می‌شود. */
export default function Page() {
  return <HomeView tracks={toSummaries(TRACKS)} categories={CATEGORIES} />;
}
