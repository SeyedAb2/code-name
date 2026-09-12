/* ============================================================================
   ذخیره‌سازی محلی — کدنامه

   چیزی روی سرور نگه نمی‌داریم، پس پیشرفت و علاقه‌مندی‌ها در مرورگر خود
   کاربر می‌مانند. دو نسخه نگه می‌داریم:

     ۱) localStorage — جای اصلی، همگام و سریع
     ۲) IndexedDB    — نسخهٔ دوم؛ بعضی پاک‌کردن‌های مرورگر فقط یکی را می‌برند

   چه چیزی دادهٔ کاربر را از بین *نمی‌برد*: عوض شدن IP، ری‌استارت، به‌روزرسانی
   مرورگر. چه چیزی می‌برد: پاک کردن «دادهٔ سایت»، حالت ناشناس، مرورگر دیگر.
   برای آن حالت‌ها تنها راه واقعی، فایل پشتیبان است — exportBackup پایین.
   ========================================================================== */

const PREFIX = "codenameh:";
const DB_NAME = "codenameh";
const STORE = "kv";

/* روی سرور window نداریم؛ هر تابع باید بی‌صدا رد شود. */
const canUseDom = () => typeof window !== "undefined";

/* ── لایهٔ IndexedDB ──────────────────────────────────────────────────────── */
let dbPromise: Promise<IDBDatabase | null> | null = null;

function openDb(): Promise<IDBDatabase | null> {
  if (!canUseDom() || !("indexedDB" in window)) return Promise.resolve(null);
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve) => {
    try {
      const rq = indexedDB.open(DB_NAME, 1);
      rq.onupgradeneeded = () => {
        const db = rq.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      };
      rq.onsuccess = () => resolve(rq.result);
      rq.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  return dbPromise;
}

async function idbSet(key: string, value: string) {
  const db = await openDb();
  if (!db) return;
  try {
    db.transaction(STORE, "readwrite").objectStore(STORE).put(value, key);
  } catch {
    /* سهمیه پر است یا دسترسی نداریم — localStorage همچنان کار می‌کند */
  }
}

async function idbDelete(key: string) {
  const db = await openDb();
  if (!db) return;
  try {
    db.transaction(STORE, "readwrite").objectStore(STORE).delete(key);
  } catch {}
}

async function idbEntries(): Promise<Record<string, string>> {
  const db = await openDb();
  if (!db) return {};
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readonly").objectStore(STORE);
      const keys = tx.getAllKeys();
      const vals = tx.getAll();
      const out: Record<string, string> = {};
      keys.onsuccess = () => {
        vals.onsuccess = () => {
          (keys.result as IDBValidKey[]).forEach((k, i) => {
            if (typeof k === "string" && k.startsWith(PREFIX)) {
              out[k] = String(vals.result[i]);
            }
          });
          resolve(out);
        };
      };
      tx.transaction.onerror = () => resolve({});
    } catch {
      resolve({});
    }
  });
}

/* ── API اصلی ────────────────────────────────────────────────────────────── */

export function read(key: string): string | null {
  if (!canUseDom()) return null;
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null; /* حالت خصوصی یا دسترسی مسدود */
  }
}

export function write(key: string, value: string): void {
  if (!canUseDom()) return;
  try {
    localStorage.setItem(PREFIX + key, value);
  } catch {}
  void idbSet(PREFIX + key, value);
}

export function remove(key: string): void {
  if (!canUseDom()) return;
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {}
  void idbDelete(PREFIX + key);
}

export function readJson<T>(key: string, fallback: T): T {
  const raw = read(key);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJson(key: string, value: unknown): void {
  write(key, JSON.stringify(value));
}

/** همهٔ کلیدهای ما، بدون پیشوند. */
export function keys(): string[] {
  if (!canUseDom()) return [];
  const out: string[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(PREFIX)) out.push(k.slice(PREFIX.length));
    }
  } catch {}
  return out;
}

/**
 * اگر localStorage خالی است ولی IndexedDB داده دارد، برگردانش.
 * این همان چیزی است که دادهٔ کاربر را از یک پاک‌شدن ناقص نجات می‌دهد.
 * برمی‌گرداند: چند کلید بازیابی شد.
 */
export async function restoreFromMirror(): Promise<number> {
  if (!canUseDom()) return 0;
  const mirror = await idbEntries();
  let restored = 0;
  for (const [fullKey, value] of Object.entries(mirror)) {
    try {
      if (localStorage.getItem(fullKey) === null) {
        localStorage.setItem(fullKey, value);
        restored++;
      }
    } catch {}
  }
  return restored;
}

/* ── پشتیبان‌گیری ────────────────────────────────────────────────────────── */

export interface Backup {
  app: "codenameh";
  version: 1;
  savedAt: string;
  data: Record<string, string>;
}

export function collect(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of keys()) {
    const v = read(k);
    if (v !== null) out[k] = v;
  }
  return out;
}

export function exportBackup(): void {
  if (!canUseDom()) return;
  const payload: Backup = {
    app: "codenameh",
    version: 1,
    savedAt: new Date().toISOString(),
    data: collect(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `codenameh-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export type ImportResult =
  | { ok: true; count: number }
  | { ok: false; reason: "unreadable" | "wrong-file" };

export async function importBackup(file: File): Promise<ImportResult> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(await file.text());
  } catch {
    return { ok: false, reason: "unreadable" };
  }

  const b = parsed as Partial<Backup>;
  if (!b || b.app !== "codenameh" || typeof b.data !== "object" || !b.data) {
    return { ok: false, reason: "wrong-file" };
  }

  let count = 0;
  for (const [k, v] of Object.entries(b.data)) {
    if (typeof v !== "string") continue;
    write(k, v);
    count++;
  }
  return { ok: true, count };
}
