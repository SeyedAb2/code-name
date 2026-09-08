# آزمایشگاه فصل ۱

فایل‌های آمادهٔ پروژهٔ پایان فصل ۱ («دفترچهٔ اولین کانتینر»).

```
lab/ch01/
  site/index.html   ← صفحه‌ای که Nginx باید سرو کند؛ اسم خودت را در آن بگذار
  logbook.md        ← دفترچه‌ای که باید پرش کنی
  README.md         ← همین فایل
```

## راه‌اندازی سریع

از داخل همین پوشه (`lab/ch01/`) این‌ها را به ترتیب بزن:

```bash
docker run -d --name ch01-site -p 8080:80 nginx:1.27-alpine
docker cp site/index.html ch01-site:/usr/share/nginx/html/index.html
curl -s http://localhost:8080 | head -n 1
```

روی ویندوز، به‌جای `curl` می‌توانی صفحه را در مرورگر باز کنی:
`http://localhost:8080`

## تمیزکاری

```bash
docker rm -f ch01-site
```

این دستور کانتینر را متوقف و حذف می‌کند. ایمیج `nginx:1.27-alpine` روی دیسک
می‌ماند تا فصل بعد؛ اگر آن را هم می‌خواهی پاک کنی:

```bash
docker rmi nginx:1.27-alpine
```

## اگر پورت ۸۰۸۰ اشغال بود

خطای `port is already allocated` می‌گیری. فقط پورت میزبان را عوض کن — پورت
داخل کانتینر باید ۸۰ بماند:

```bash
docker run -d --name ch01-site -p 8090:80 nginx:1.27-alpine
```
