import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* خروجی standalone: یک پوشهٔ کوچک که فقط با `node server.js` اجرا می‌شود و
     node_modules لازمش را کنار خودش دارد. Dockerfile دقیقاً همین را کپی
     می‌کند، برای همین ایمیج نهایی نه SDK دارد نه کد منبع. */
  output: "standalone",
  experimental: {
    cpus: 2,
    staticGenerationMaxConcurrency: 2,
    staticGenerationMinPagesPerWorker: 20,
  },
};

export default nextConfig;
