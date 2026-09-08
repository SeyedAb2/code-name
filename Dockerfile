# ============================================================================
#  کدنامه — سرو کردن مستندها
#
#  عمداً ساده نگه داشته شده: این پروژه HTML ساکن است، پس نه بیلد لازم دارد،
#  نه Node در ایمیج نهایی. همان چیزی که فصل ۵ داکر دربارهٔ ایمیج کوچک می‌گوید.
#
#  ساخت و اجرا:
#     docker build -t codenameh .
#     docker run -d --name codenameh -p 8080:80 codenameh
#     مرورگر → http://localhost:8080
# ============================================================================
FROM nginx:1.27-alpine

# نسخهٔ صریح، نه latest — دلیلش در فصل ۱ داکر، بخش «دام‌ها» آمده است.
LABEL org.opencontainers.image.title="Codenameh"
LABEL org.opencontainers.image.description="Persian software-engineering references"
LABEL org.opencontainers.image.authors="Seyed Abbas Mousavi Asl <abbas.mossavi1378@gmail.com>"
LABEL org.opencontainers.image.licenses="CC-BY-SA-4.0"

# پیکربندی: فشرده‌سازی، کش دارایی‌ها، و کش‌نکردن خودِ HTML
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# خودِ مستندها
COPY docs-fa/ /usr/share/nginx/html/

# کانتینری که «بالا هست» لزوماً کار نمی‌کند — فصل ۱۰ داکر
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

EXPOSE 80
