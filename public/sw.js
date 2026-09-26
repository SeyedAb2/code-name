/* Offline reading for pages the learner has opened, plus safe runtime asset caching. */
const CACHE_PREFIX = "codenameh-pwa-";
const CACHE_NAME = `${CACHE_PREFIX}shell-v1`;
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([OFFLINE_URL, "/", "/manifest.webmanifest", "/assets/images/logo-128.png", "/assets/images/logo-192.png"]);
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
  if (event.data?.type === "CACHE_PAGE" && typeof event.data.url === "string") {
    event.waitUntil(cachePage(event.data.url));
  }
});

async function cachePage(rawUrl) {
  const url = new URL(rawUrl, self.location.origin);
  if (url.origin !== self.location.origin) return;
  try {
    const response = await fetch(url.href, { headers: { Accept: "text/html" }, cache: "no-store" });
    if (response.ok && response.headers.get("content-type")?.includes("text/html")) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(url.href, response.clone());
    }
  } catch { /* A page already in cache remains available offline. */ }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request.url, response.clone());
        }
        return response;
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return await cache.match(request.url)
          || await cache.match(new URL(url.pathname, self.location.origin).href)
          || await cache.match(OFFLINE_URL);
      }
    })());
    return;
  }

  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/assets/")) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })());
  }
});
