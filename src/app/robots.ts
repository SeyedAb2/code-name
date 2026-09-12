import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* صفحهٔ علاقه‌مندی‌ها فقط با دادهٔ مرورگر خود کاربر معنا دارد */
        disallow: ["/bookmarks"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
