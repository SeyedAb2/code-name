# بازطراحی دورهٔ ASP.NET Core

## ممیزی وضع موجود

مسیر دوره `10-aspnet-core` است. فهرست قدیمی ۴۸ عنوان دارد، اما هیچ‌کدام از فایل‌های محتوای متناظر در `content/10-aspnet-core/` وجود ندارد؛ بنابراین «فصل موجود» فعلاً فقط metadata است، نه محتوای قابل مطالعه. فصل‌های قدیمی چندین مسیر یادگیری جدا را در عنوان‌های فشرده جا داده بودند:

- HTTP تقریباً پیش‌نیاز نشده بود و خواننده پیش از دیدن request/response مستقیماً وارد مفاهیم ASP.NET می‌شد.
- DI، middleware، routing، model binding و validation هرکدام بیش از حد فشرده بودند.
- FluentValidation یک فصل کوتاه داشت و روش خودکار قدیمی آن می‌توانست به‌عنوان الگوی امروز برداشت شود.
- Mapster اصلاً محور دوره نبود؛ فهرست قدیمی AutoMapper و Mapperly را هم‌سطح معرفی می‌کرد.
- EF Core در شش فصل، طراحی مدل، رابطه‌ها، migration، ترجمهٔ query، loading، tracking، concurrency، performance و عملیات production را فشرده می‌کرد.
- Dapper در دو فصل تمام می‌شد و dynamic SQL امن، streaming، چند نتیجه و سنجش منصفانه جای روشنی نداشت.
- خطا، لاگ، trace، health، امنیت مرورگر و استقرار به فصل‌های کلی تبدیل شده بودند؛ مسیر مشاهدهٔ evidence از request تا SQL و production دیده نمی‌شد.
- background worker از job ماندگار، WebSocket از SignalR، و آماده‌بودن یک replica از مقیاس چند replica تفکیک نشده بودند.
- سه پروژه بیشتر فهرست فناوری بودند تا مأموریت‌هایی با معیار پذیرش، failure drill و شواهد تحویل.

## تصمیم‌های طراحی

- فرض می‌کنیم هنرجو C# را می‌داند. دوره با HTTP قابل‌مشاهده شروع می‌شود و یک CodeNames Shop API را تدریجی رشد می‌دهد.
- اندازهٔ مقصد ۹۰ فصل است. این عدد با سه پروژه و arcهای مستقل HTTP، host/pipeline، validation/mapping، EF Core، Dapper، امنیت، تست و عملیات توجیه می‌شود؛ فصل‌های ریزِ صرفاً اسمی اضافه نمی‌شوند.
- از فصل اول تا آخر، الگو این است: مسئلهٔ واقعی، حدس، اجرای درخواست/کد، شواهد، تفسیر، شکست کنترل‌شده، تشخیص و اصلاح.
- هر فصل عادی باید تمرین‌های اجرایی (معمولاً ۱۴ تا ۱۸ مورد، نه quota اجباری) و پاسخ‌هایی داشته باشد که کد و evidence را توضیح دهند. سه پروژه شمارش تمرین فصل را به ارث نمی‌برند.
- ابتدا migrationهای امن و قابل‌بازبینی تدریس می‌شوند؛ اجرای خودکار migration روی همهٔ replicaها به‌عنوان راه‌حل پیش‌فرض production معرفی نمی‌شود.
- ASP.NET Core، .NET و EF Core بر مبنای .NET 10 LTS انتخاب می‌شوند. کتابخانه‌های بیرونی در زمان نوشتن فصل مربوطه جداگانه از منبع رسمی بررسی و نسخه‌شان ثبت می‌شود.
- Metadata باید با متن واقعی هماهنگ باشد. فصلِ بدون فایل کامل دو‌زبانه `ready: false` می‌ماند؛ title در فهرست معادل مجوز مطالعه نیست.

## فهرست مقصد و نگاشت ۴۸ عنوان قبلی

| قدیم | مقصد تازه |
|---|---|
| 01 مدل ذهنی | 08–12 host، چرخهٔ request و middleware |
| 02 Minimal API / Controller | 15 |
| 03 Routing | 13–14 |
| 04 Middleware | 09–12 |
| 05 Filters | 16 |
| 06 DI | 17–19 |
| 07–08 Options و config | 20–22 |
| 09–10 Binding و DataAnnotations | 23–24 |
| 11 FluentValidation | 25–26 |
| 12 Mapping | 27–28 (Mapster، projection و نگاشت دستی) |
| 13–18 EF Core | 36–52 |
| 19–20 Dapper | 53–58 |
| 21 EF یا Dapper | 59 |
| 22 Repository / Unit of Work | 60 |
| 23 CQRS / MediatR | 61 |
| 24 OpenAPI، 25 Versioning، 26 Errors | 33–34 و 32 |
| 27–29 Logging، OpenTelemetry، Health | 64–66 |
| 30–31 Cache و Rate limiting | 67–68 |
| 32–36 Authentication تا Security | 69–74 |
| 37 File upload | 75–76 |
| 38 Localization | 82 |
| 39 Background service | 77–78 |
| 40 SignalR | 79–80 |
| 41 gRPC | 81 |
| 42–43 Unit و Integration testing | 83–84 |
| 44 Performance | 86 |
| 45 Linux deployment | 87 |
| 46–48 Projects | 88–90 |

### فهرست نهایی ۹۰ فصل

**HTTP و ورود به وب**

۱. درخواست HTTP؛ از مرورگر تا سرور · ۲. پاسخ HTTP؛ status، header و body · ۳. معنای GET و POST و PUT و PATCH · ۴. URL، مسیر و query string · ۵. Headerها، Content-Type و Accept · ۶. Cookie، redirect و cache در HTTP · ۷. HTTP/1.1 تا HTTP/3، HTTPS و reverse proxy

**Host، چرخهٔ درخواست و endpointها**

۸. Host و شروع برنامه در ASP.NET Core · ۹. چرخهٔ عمر یک درخواست · ۱۰. middleware؛ قبل و بعد از next · ۱۱. توقف زودهنگام و شاخه‌های pipeline · ۱۲. ترتیب middleware و خطاهای پنهانش · ۱۳. مسیریابی؛ الگو تا endpoint · ۱۴. Route group، اولویت و تولید لینک · ۱۵. یک قابلیت، دو سبک: Minimal API و Controller · ۱۶. فیلترها و endpoint filterها در جای درست

**وابستگی، پیکربندی و ورودی**

۱۷. DI؛ composition root و ثبت وابستگی‌ها · ۱۸. Singleton و Scoped و Transient در عمل · ۱۹. Factory، چند پیاده‌سازی و keyed services · ۲۰. منابع پیکربندی و اینکه کدام مقدار برنده است · ۲۱. Options؛ bind، validate و reload · ۲۲. اسرار در توسعه، container و production · ۲۳. Model binding از route، query، header و body · ۲۴. DataAnnotations و رفتار اعتبارسنجی API · ۲۵. FluentValidation؛ قاعده‌هایی بیرون از DTO · ۲۶. Validatorهای تو‌در‌تو، async و تست‌پذیر · ۲۷. نگاشت دستی و Mapster؛ DTO با Entity یکی نیست · ۲۸. Mapster projection و EF Core

**قرارداد API و معماری**

۲۹. قرارداد API؛ منابع، method و status code · ۳۰. فهرست API؛ صفحه‌بندی، مرتب‌سازی و جست‌وجو · ۳۱. تکرار درخواست، Idempotency و ETag · ۳۲. ProblemDetails و قرارداد خطای قابل‌اعتماد · ۳۳. OpenAPI در ASP.NET Core امروز · ۳۴. نسخه‌گذاری API بدون شکستن مشتری‌ها · ۳۵. ساختار backend؛ از feature folder تا modular monolith

**EF Core**

۳۶. EF Core؛ DbContext چه چیزی را هماهنگ می‌کند؟ · ۳۷. Entity، کلید و مقدار تولیدشده · ۳۸. Convention، Fluent API و نوع‌های پیچیده · ۳۹. رابطه‌ها و رفتار حذف در EF Core · ۴۰. عمر DbContext، اتصال و تست‌پذیری · ۴۱. Migration؛ تغییر schema با سابقهٔ قابل‌بررسی · ۴۲. Migration در production؛ SQL و ترتیب rollout · ۴۳. IQueryable و مسیر ترجمهٔ LINQ · ۴۴. از LINQ به SQL؛ پارامتر و plan · ۴۵. Projection و صفحه‌بندی در پایگاه‌داده · ۴۶. Include، projection و loading رابطه‌ها · ۴۷. N+1 و cartesian explosion را با مدرک پیدا کن · ۴۸. Change tracker و به‌روزرسانی امن · ۴۹. Transaction و مرز SaveChanges · ۵۰. هم‌زمانی خوش‌بینانه و درخواست متعارض · ۵۱. کارایی EF Core؛ اندازه‌گیری پیش از بهینه‌سازی · ۵۲. SQL خام، filter و interceptor در EF Core

**Dapper و انتخاب مرز داده**

۵۳. Dapper؛ اجرای SQL با کنترل مستقیم · ۵۴. پارامترها و query امن در Dapper · ۵۵. Mapping، multi-mapping و چند نتیجه · ۵۶. فیلتر پویا بدون تزریق SQL · ۵۷. Transaction و عملیات چندمرحله‌ای در Dapper · ۵۸. Streaming و سنجش منصفانهٔ Dapper · ۵۹. EF Core و Dapper کنار هم؛ فقط وقتی دلیل داریم · ۶۰. Repository و Unit of Work؛ چه وقت ارزش دارد؟ · ۶۱. CQRS و MediatR با هزینه‌های واقعی‌اش

**ارتباط سرویس و عملیات**

۶۲. ارتباط خروجی با HttpClientFactory · ۶۳. Timeout و retry و circuit breaker برای درخواست خروجی · ۶۴. لاگ ساخت‌یافته؛ از متن تا مدرک عملیاتی · ۶۵. Trace و metric؛ دنبال‌کردن یک درخواست · ۶۶. Health check؛ زنده بودن با آماده بودن فرق دارد · ۶۷. کش؛ پاسخ سریع و مسئلهٔ باطل‌سازی · ۶۸. Rate limiting و پاسخ 429

**هویت و امنیت**

۶۹. احراز هویت؛ Cookie و Bearer چه مسئله‌ای حل می‌کنند؟ · ۷۰. ASP.NET Core Identity و چرخهٔ عمر حساب · ۷۱. OAuth2 و OIDC؛ نقش‌ها و جریان ورود · ۷۲. مجوز policy و مالکیت منبع · ۷۳. CORS و CSRF؛ دو مسئلهٔ متفاوت · ۷۴. HTTPS، Data Protection و اعتماد به proxy

**قابلیت‌های برنامه و نگهداری**

۷۵. آپلود امن؛ فایل را از نام و پسوندش قضاوت نکن · ۷۶. فایل حجیم؛ buffering، streaming و download · ۷۷. کار پس‌زمینه و shutdown تمیز · ۷۸. صف درون‌حافظه‌ای یا job ماندگار؟ · ۷۹. WebSocket و SignalR؛ ارتباط دوطرفه · ۸۰. گروه و مقیاس‌دهی SignalR · ۸۱. gRPC و streaming برای ارتباط سرویس‌ها · ۸۲. Localization؛ زبان با timezone یکی نیست · ۸۳. تست واحد برای منطق، validator و policy · ۸۴. تست یکپارچه؛ request تا state پایگاه‌داده · ۸۵. از localhost تا سه replica؛ چه چیزی می‌شکند؟ · ۸۶. اندازه‌گیری latency و گلوگاه backend · ۸۷. استقرار ASP.NET Core پشت Nginx روی Linux

**پروژه‌ها**

۸۸. پروژهٔ ۱ — API فروشگاه با قرارداد و دیتابیس · ۸۹. پروژهٔ ۲ — سرویس امن و وابستگی‌های بیرونی · ۹۰. پروژهٔ ۳ — اولین backend production تو

## نسخه‌ها و اسناد بررسی‌شده

نسخهٔ مرجع دوره .NET 10 LTS / ASP.NET Core 10 / EF Core 10 است؛ .NET 10 تا ۱۵ نوامبر ۲۰۲۸ در پشتیبانی است و EF Core 10 در نوامبر ۲۰۲۵ منتشر شده و تا ۱۰ نوامبر ۲۰۲۸ پشتیبانی می‌شود. در هر فصل، نسخهٔ دقیق packageهای ثالث هنگام نگارش همان فصل دوباره ثبت می‌شود؛ این گزارش جایگزین بررسی package version نیست.

- [چرخهٔ پشتیبانی .NET](https://learn.microsoft.com/en-us/lifecycle/products/microsoft-net-and-net-core)
- [What's new in EF Core 10](https://learn.microsoft.com/en-us/ef/core/what-is-new/ef-core-10.0/whatsnew)
- [راهنمای FluentValidation برای ASP.NET](https://docs.fluentvalidation.net/en/latest/aspnet.html) — integration خودکار pipeline به‌عنوان روش توصیه‌شده معرفی نمی‌شود؛ مسیر async و مرز اجرای validator باید عمداً انتخاب شود.
- [OpenAPI در ASP.NET Core 10](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/aspnetcore-openapi?view=aspnetcore-10.0) — تولید سند با package رسمی؛ UI ابزار ثالث و تصمیم جداگانه است.
- [ترتیب middleware در ASP.NET Core 10](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0)
- [Mapster](https://github.com/MapsterMapper/Mapster) — `Adapt`، DI و `ProjectToType` در منبع پروژه بررسی شده‌اند؛ benchmark ادعای برتری عمومی نیست.

## وضعیت اجرا

این فایل، ممیزی و معماری مقصد را ثبت می‌کند. هنوز هیچ‌یک از ۹۰ فصل محتوای کامل ندارد و نباید در manifest به‌عنوان آماده نشان داده شود. بازتولید کامل یعنی نوشتن هر فصل در `content/10-aspnet-core/<slug>.html`، آزمون route/manifest، و تازه پس از editorial و technical QA تغییر readiness همان فصل به ۱.
