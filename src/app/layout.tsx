import type { Metadata, Viewport } from "next";
import { PrefsProvider, themeScript } from "@/context/PrefsContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { SITE } from "@/lib/site";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name.fa} — ${SITE.tagline.fa}`,
    template: `%s — ${SITE.name.fa}`,
  },
  description: SITE.description.fa,
  applicationName: SITE.name.fa,
  authors: [{ name: SITE.author.name, url: SITE.author.github }],
  icons: {
    icon: [
      { url: "/assets/images/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/logo-128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/images/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/images/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/assets/images/logo-256.png", sizes: "256x256" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: SITE.name.fa,
    locale: "fa_IR",
    alternateLocale: "en_US",
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#080C16" },
    { media: "(prefers-color-scheme: dark)", color: "#080C16" },
  ],
  colorScheme: "dark light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* lang و dir را اسکریپت زیر قبل از رنگ‌آمیزی می‌گذارد. مقدار اینجا فقط
       چیزی است که سرور می‌فرستد و بلافاصله اصلاح می‌شود. */
    <html lang="fa" dir="rtl" data-lang="fa" suppressHydrationWarning>
      <head>
        {/* قبل از اولین رنگ‌آمیزی اجرا می‌شود تا صفحه یک لحظه با تم اشتباه دیده نشود */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="preload"
          href="/assets/fonts/Vazirmatn-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <PrefsProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </PrefsProvider>
      </body>
    </html>
  );
}
