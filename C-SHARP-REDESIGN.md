# بازطراحی دورهٔ C# / C# course redesign

## تصمیم‌های اصلی

- مسیر واقعی دوره در کاتالوگ `09-csharp` است و فایل‌های درس در `content/09-csharp/` قرار می‌گیرند.
- ساختار ۴۲ فصلی قبلی حفظ نمی‌شود. نسخهٔ بازطراحی‌شده ۶۷ درس دارد: ۶۴ فصل آموزشیِ کوتاه‌تر و سه پروژهٔ پایانی.
- هدف نسخهٔ این مسیر `.NET 10` و `C# 14` است. هر API وابسته به نسخه باید در فصل مربوط علامت بخورد؛ ویژگی‌های آینده یا preview به‌عنوان قابلیت پایدار آموزش داده نمی‌شوند.
- مسیر آموزشی از صفر است و ASP.NET Core را جایگزین یا دوباره‌گویی نمی‌کند؛ این مسیر روی زبان و کتابخانهٔ پایه متمرکز می‌ماند.
- مثال‌های پیوسته از سفارش، قیمت‌گذاری، فایل و پردازش پیام استفاده می‌کنند. تمرین‌ها باید کد قابل‌اجرا، تست، خروجی قابل‌مشاهده یا اندازه‌گیری تولید کنند.

## پیشرفت و جابه‌جایی محتوا

1. **شروع و مدل اجرا (۱–۳):** اکوسیستم و مسیر source→IL→runtime→JIT؛ اولین برنامه؛ پروژه و تنظیمات build.
2. **زبان پایه (۴–۱۲):** متغیر و scope؛ اعداد و سرریز؛ عبارت و عملگر؛ شرط و حلقه؛ متد و پارامتر؛ متن؛ آرایه/tuple/range؛ semantics کپی؛ nullability.
3. **نوع‌ها و طراحی شیءگرا (۱۳–۲۱):** کلاس و شیء؛ سازنده و property؛ دسترسی و static؛ class/struct/record؛ composition و interface؛ وراثت و چندریختی؛ equality و hashing؛ عملگرها؛ extension methods.
4. **نوع‌های عمومی و داده (۲۲–۳۲):** generics و constraint؛ variance؛ generic math؛ قرارداد مجموعه‌ها؛ ساختارهای مجموعه در سه گروه؛ iterator؛ LINQ از فیلتر تا join؛ اجرا و کارایی LINQ.
5. **رفتار و منابع (۳۳–۴۵):** delegate/lambda؛ closure/event؛ pattern matching؛ exception؛ عمر منابع و disposal؛ فایل/stream؛ فشرده‌سازی/XML؛ JSON؛ زمان؛ regex؛ HTTP؛ TCP؛ process و diagnostics.
6. **ناهمگامی و کارایی (۴۶–۵۶):** مدل async؛ Task/cancellation؛ failure modeها؛ ValueTask/async streams؛ نخ و ThreadPool؛ همگام‌سازی؛ TPL؛ Channel/backpressure؛ Span/Memory؛ pooling/sequences؛ GC و allocation.
7. **کیفیت و قابلیت انتشار (۵۷–۶۴):** xUnit؛ BenchmarkDotNet؛ solution/NuGet/publish؛ اسمبلی و plugin loading؛ reflection/dynamic؛ generator/analyzer؛ رمزنگاری مسئولانه؛ interop/unsafe.
8. **سه مأموریت پایانی (۶۵–۶۷):** CLI واقعی؛ کتابخانهٔ قابل انتشار؛ پردازشگر concurrent با backpressure.

## ادغام و اصلاح نسبت به فهرست قبلی

- فصل‌های بسیار فشردهٔ `class/record/struct`، وراثت/interface، مجموعه‌ها، LINQ، delegate/event و threading به چند درس مستقل تقسیم شدند.
- basics زبان، آرایه/tuple/range، extension methods، stream و I/O، XML، HTTP/TCP، diagnostics/process، cryptography، و AssemblyLoadContext که غایب یا کم‌رنگ بودند اضافه شدند.
- LINQ از «فهرست operatorها» به سه تجربهٔ مرتبط تبدیل شد: فیلتر/projection، گروه‌بندی و join، سپس execution/performance.
- async پیش از threading می‌آید تا I/O و زمان‌بندی نخ با هم اشتباه نشوند؛ parallelism و synchronization بعدتر و جداگانه می‌آیند.
- advanced runtime topics پس از پایه و ابزار اندازه‌گیری قرار گرفتند. pooling/Span قرار نیست پیش از شواهد allocation بهینه‌سازی شوند.
- سه پروژه به مأموریت‌های build-and-prove تبدیل می‌شوند؛ هیچ‌کدام فصل سخنرانی یا فهرست تمرین نیست.

## سیاست نگارش و آماده‌سازی

- هر درس ابتدا باید runnable baseline، دلیل آزمایش، اجرای نمونه، تفسیر نتیجه و حد چیزی که نتیجه ثابت نمی‌کند را داشته باشد.
- تمرین مفهومی در صورت امکان باید به کد، تست، خطای بازتولیدپذیر، benchmark یا خروجی قابل‌مشاهده ختم شود.
- هر فایل با `lang="fa"` و `lang="en"` هم‌عمق نوشته می‌شود. کد LTR است. SVGها باید از نظر viewBox، padding، متن داخل node و overflow بررسی شوند.
- route فقط وقتی آماده اعلام می‌شود که HTML واقعی وجود داشته باشد و در build/manifest خوانده شود. وجود عنوان در catalog به‌تنهایی به معنی درس آماده نیست.
- Build/static route قرارداد جاری Next.js 16 رعایت می‌شود: صفحهٔ فصل از دادهٔ کاتالوگ مسیرهای آماده را می‌سازد و HTML هر فصل از `content/<track>/<slug>.html` خوانده می‌شود.

## منابع نسخه

- .NET 10 / C# 14: [What's new in C# 14](https://learn.microsoft.com/dotnet/csharp/whats-new/csharp-14)
- نگاشت نسخهٔ SDK و زبان: [Configure C# language version](https://learn.microsoft.com/dotnet/csharp/language-reference/configure-language-version)
- راهنمای APIهای route برای مخزن Next.js از `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/` خوانده می‌شود.

این گزارش، syllabus جدید را ثبت می‌کند؛ جایگزین محتوای درس‌ها نیست. فصل‌های آماده باید در manifest از وضعیت در صف به وضعیت آماده منتقل شوند.
