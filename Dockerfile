# ============================================================================
#  کدنامه — ساخت و اجرای سایت
#
#  سایت یک اپ Next.js است که همهٔ صفحه‌هایش در زمان build ساخته می‌شوند.
#  ایمیج سه مرحله دارد تا نسخهٔ نهایی نه SDK داشته باشد نه کد منبع:
#     deps  → فقط نصب وابستگی‌ها (لایه‌ای که کمتر عوض می‌شود)
#     build → ساخت خروجی standalone
#     run   → فقط همان خروجی، روی یک Node کوچک
#
#  ساخت و اجرا:
#     docker build -t codenameh .
#     docker run -d --name codenameh -p 8080:3000 codenameh
#     مرورگر → http://localhost:8080
# ============================================================================

FROM node:22-alpine AS deps
WORKDIR /app
# فقط این دو فایل: تا وقتی وابستگی‌ها عوض نشوند، این لایه از کش می‌آید
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS run
WORKDIR /app

LABEL org.opencontainers.image.title="Codenameh"
LABEL org.opencontainers.image.description="Persian software-engineering references"
LABEL org.opencontainers.image.authors="Seyed Abbas Mousavi Asl <abbas.mossavi1378@gmail.com>"
LABEL org.opencontainers.image.licenses="CC-BY-SA-4.0"

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# کاربر غیر root — یکی از ساده‌ترین و مؤثرترین کارهای امنیتی ایمیج
RUN addgroup -g 1001 -S nodejs && adduser -S -u 1001 -G nodejs nextjs

# خروجی standalone خودش node_modules لازم را کنارش دارد
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# کانتینری که «بالا هست» لزوماً کار نمی‌کند
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
