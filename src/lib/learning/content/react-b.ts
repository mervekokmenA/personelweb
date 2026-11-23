import type { ModuleContent } from "./types";

type Bodies = ModuleContent["bodies"];

export const reactBodiesB: Bodies = {
  rest: {
    body: `## REST nedir?

Kaynaklar (resources) URL ile adreslenir; işlemler HTTP yöntemleriyle ifade edilir.

| İşlem | İstek | Başarı yanıtı |
|---|---|---|
| Listele | \`GET /api/products?page=1&pageSize=20&search=kablo\` | 200 |
| Oku | \`GET /api/products/p-1\` | 200 / 404 |
| Oluştur | \`POST /api/products\` | 201 + oluşan kaynak |
| Güncelle | \`PATCH /api/products/p-1\` | 200 |
| Sil | \`DELETE /api/products/p-1\` | 204 |

## Liste sözleşmesi

\`\`\`json
{ "items": [], "page": 1, "pageSize": 20, "total": 120 }
\`\`\`

## Hata modeli

\`\`\`json
{ "status": 422, "code": "VALIDATION_ERROR", "message": "Geçersiz istek", "details": { "price": "0'dan küçük olamaz" }, "requestId": "..." }
\`\`\`
Tek tip hata modeli arayüzde anlamlı mesaj göstermeyi kolaylaştırır.

## Tasarım kuralları
- URL'de çoğul isim, fiil yok (\`/orders\`, \`/orders/:id\`).
- Fiyatı **istemciden kabul etme**; sunucu güncel fiyatı DB'den okur.
- Sayfalama, filtre, sıralama query parametreleriyle.
- Kırıcı değişikliklerde sürüm veya geçiş dönemi.

## Alıştırma
\`/api/products\` ve \`/api/orders\` için sözleşmeyi (OpenAPI/YAML) yaz; \`price → unitPrice\` alan adı değişikliği için geçiş planı ekle.`,
    verification: `**Kaynak:** [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP). Durum kodu ve yöntem semantiği HTTP spesifikasyonu (RFC 9110) ile uyumludur; REST tasarım kuralları yaygın pratiklerdir, tek bir resmi standart değildir.`,
  },
  "axios-query": {
    body: `## TanStack Query ile server state

\`\`\`tsx
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (p: ProductListParams) => [...productKeys.lists(), p] as const,
  detail: (id: string) => [...productKeys.all, "detail", id] as const,
};

export function useProducts(params: ProductListParams) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => productApi.list(params),
    staleTime: 30_000,
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: productApi.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: productKeys.lists() }),
  });
}
\`\`\`

## Kavramlar
- **staleTime**: Veri ne kadar süre "taze" sayılır (bu sürede yeniden istek atılmaz).
- **gcTime**: Kullanılmayan veri önbellekte ne kadar kalır.
- **invalidate**: Mutasyondan sonra ilgili sorguları bayat işaretleyip yeniden çek.
- **Optimistic update**: Sunucu yanıtı gelmeden arayüzü güncelle, hata olursa geri al.

## Durumlar
\`isPending\`, \`isError\`, boş liste, kısmi veri — hepsini tasarla (yükleme iskeleti, hata + tekrar dene, boş durum).

## Alıştırma
productKeys fabrikası, useProducts/useCreateProduct/useUpdateProduct yaz; ürün oluşturunca listenin otomatik yenilendiğini göster.`,
    verification: `**Kaynak:** [TanStack Query dokümantasyonu](https://tanstack.com/query/latest). \`isPending\` ve \`gcTime\` adlandırması v5'tir (v4'te \`isLoading\`/\`cacheTime\`); kullandığın sürümü kontrol et.`,
  },
  "client-state": {
    body: `## Client/UI state

Yalnızca **arayüze ait** küçük global durumlar: sidebar, modal, tablo yoğunluğu, tema.

\`\`\`ts
import { create } from "zustand";

type UiState = { sidebarOpen: boolean; toggleSidebar: () => void };
export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));

// Sadece gereken parçayı seç:
const sidebarOpen = useUiStore((s) => s.sidebarOpen);
\`\`\`

## Yapılmaması gereken

\`\`\`ts
// YANLIŞ: sunucu verisini store'a kopyalamak
const products = useProductStore((s) => s.products);
\`\`\`
Doğrusu: \`const { data } = useProducts(filters);\`

## Context vs Zustand
Seyrek değişen, ağaçta yayılan değer (tema, kullanıcı) → Context. Sık güncellenen veya birçok yerden okunan UI durumu → Zustand gibi seçici abonelik sunan kütüphane.

## Alıştırma
Sidebar ve modal durumunu Zustand'a taşı; render sayısını Profiler ile karşılaştır.`,
    verification: `**Kaynak:** [Zustand dokümantasyonu](https://zustand.docs.pmnd.rs). "Server state'i kopyalama" TanStack Query'nin resmi önerisidir.`,
  },
  msw: {
    body: `## MSW (Mock Service Worker)

Ağ isteklerini **HTTP seviyesinde** yakalayıp sahte yanıt döner; kodun gerçek API ile aynı yolu izler (Component → hook → Axios → \`/api/...\`).

\`\`\`ts
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/products", () =>
    HttpResponse.json({ items: [{ id: "p-1", name: "Klavye", price: 1200 }], page: 1, pageSize: 20, total: 1 }),
  ),
  http.post("/api/products", async ({ request }) => {
    const body = (await request.json()) as { name: string };
    if (!body.name) return HttpResponse.json({ code: "VALIDATION_ERROR" }, { status: 422 });
    return HttpResponse.json({ id: "p-2", ...body }, { status: 201 });
  }),
];
\`\`\`

## Kullanım alanları
- Backend hazır değilken geliştirme.
- Testlerde (Vitest + RTL) ağ katmanını gerçekçi taklit.
- Hata/gecikme senaryoları (\`HttpResponse.error()\`, \`delay()\`).

## Alıştırma
Ürün listesi için başarı, boş liste, 500 hatası ve yavaş ağ senaryolarını MSW ile kur; arayüzün hepsini doğru gösterdiğini doğrula.`,
    verification: `**Kaynak:** [Mock Service Worker](https://mswjs.io). \`http\` ve \`HttpResponse\` adları MSW v2 API'sidir; v1'de \`rest\` ve \`res(ctx...)\` kullanılırdı.`,
  },
  "node-express": {
    body: `## Katmanlı Express API

\`\`\`text
server/src/
  routes/        # URL → controller
  controllers/   # HTTP girdi/çıktı
  services/      # iş kuralları
  repositories/  # veritabanı
  middleware/    # auth, hata, doğrulama
\`\`\`

\`\`\`ts
import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

const createProduct = z.object({ name: z.string().min(2), price: z.number().nonnegative() });

app.post("/api/products", async (req, res, next) => {
  try {
    const parsed = createProduct.safeParse(req.body);
    if (!parsed.success) return res.status(422).json({ code: "VALIDATION_ERROR", details: parsed.error.flatten() });
    const product = await productService.create(parsed.data);
    res.status(201).json(product);
  } catch (e) { next(e); }
});

// merkezi hata yakalayıcı (4 parametreli)
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ code: "INTERNAL", message: "Sunucu hatası" });
});
\`\`\`

## Kurallar
- Doğru HTTP kodları (201, 204, 404, 409, 422).
- Girdiyi **sunucuda doğrula**, istemciye güvenme.
- Ortam değişkenleri \`.env\`'de; secret'ı koda gömme.
- Express 5 async hatalarını otomatik iletir (sürüme göre \`try/catch\` gerekebilir).

## Alıştırma
Ürün ve sipariş için CRUD uçlarını yaz; her ucu Vitest/Supertest ile test et.`,
    verification: `**Kaynak:** [Express rehberi](https://expressjs.com), [Node.js Learn](https://nodejs.org/en/learn). Express 5'te async hata iletimi davranışı Express 4'ten farklıdır; kullandığın sürümü kontrol et.`,
  },
  sql: {
    body: `## İlişkisel model

\`\`\`sql
CREATE TABLE customers (id uuid PRIMARY KEY, company_name text NOT NULL, email text UNIQUE NOT NULL);
CREATE TABLE products  (id uuid PRIMARY KEY, sku text UNIQUE NOT NULL, name text NOT NULL, price_cents integer NOT NULL CHECK (price_cents >= 0), stock integer NOT NULL CHECK (stock >= 0));
CREATE TABLE orders    (id uuid PRIMARY KEY, customer_id uuid NOT NULL REFERENCES customers(id), status text NOT NULL DEFAULT 'DRAFT', created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE order_items (id uuid PRIMARY KEY, order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE, product_id uuid NOT NULL REFERENCES products(id), quantity integer NOT NULL CHECK (quantity > 0), unit_price_cents integer NOT NULL);
\`\`\`

## Sorgu

\`\`\`sql
SELECT o.id, c.company_name, SUM(i.quantity * i.unit_price_cents) AS total_cents
FROM orders o
JOIN customers c ON c.id = o.customer_id
JOIN order_items i ON i.order_id = o.id
WHERE o.status = $1
GROUP BY o.id, c.company_name
ORDER BY o.created_at DESC
LIMIT 20 OFFSET 0;
\`\`\`

## Transaction

\`\`\`sql
BEGIN;
UPDATE products SET stock = stock - 3 WHERE id = $1 AND stock >= 3;  -- 0 satır ise stok yetersiz
INSERT INTO order_items (...) VALUES (...);
COMMIT;
\`\`\`

## İpuçları
- Parayı **kuruş (tamsayı)** olarak sakla.
- Sık filtrelenen/JOIN edilen sütunlara indeks ekle; gereksiz indeks yazmayı yavaşlatır.
- Toplamı sunucuda yeniden hesapla.

## Alıştırma
Şemayı kur; stok düşümünü eşzamanlı iki istekle dene ve negatif stok oluşmadığını doğrula.`,
    verification: `**Kaynak:** [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html), [Use The Index, Luke](https://use-the-index-luke.com). SQL standart PostgreSQL sözdizimidir.`,
  },
  orm: {
    body: `## Prisma

Şema dosyasından tip güvenli istemci üretir ve migrasyon yönetir.

\`\`\`prisma
model Product {
  id     String @id @default(cuid())
  sku    String @unique
  name   String
  price  Int          // kuruş
  stock  Int
  items  OrderItem[]
}
\`\`\`

\`\`\`ts
const orders = await prisma.order.findMany({
  where: { status: "CONFIRMED" },
  include: { customer: true, items: true },
  orderBy: { createdAt: "desc" },
  take: 20,
});
\`\`\`

## Dikkat
- **N+1 sorgu**: Listede her satır için ayrı sorgu atma; \`include\`/\`select\` ile tek seferde çek.
- Migrasyonu gözden geçir (\`prisma migrate dev\` → SQL dosyası).
- Üretimde \`prisma migrate deploy\`.

## Bu sitenin şeması
Bu repodaki \`prisma/schema.prisma\` dosyasını oku: \`CostProduct\`/\`CostItem\` ilişkisini, \`LearningProgress\` modelini ve migrasyonlarını incele.

## Alıştırma
Yeni bir model ekle (örn. Customer), migrasyon üret ve bir server action ile CRUD yaz.`,
    verification: `**Kaynak:** [Prisma dokümantasyonu](https://www.prisma.io/docs). Prisma 7 ile istemci/yapılandırma biçimi önceki sürümlerden farklıdır (bu repoda \`prisma.config.ts\` kullanılır); güncel dokümana bak.`,
  },
  auth: {
    body: `## Token stratejisi

\`\`\`text
Browser
  ├─ access token: bellekte (kısa ömürlü)
  └─ refresh token: HttpOnly + Secure + SameSite çerez
\`\`\`
\`localStorage\` içinde uzun ömürlü token tutmak, XSS durumunda çalınma riskini artırır.

## Axios interceptor ve refresh kuyruğu

\`\`\`ts
let accessToken: string | null = null;
let refreshPromise: Promise<string> | null = null;

async function refresh() {
  refreshPromise ??= api.post<{ accessToken: string }>("/auth/refresh")
    .then(({ data }) => (accessToken = data.accessToken))
    .finally(() => { refreshPromise = null; });
  return refreshPromise;
}

api.interceptors.request.use((c) => { if (accessToken) c.headers.Authorization = \`Bearer \${accessToken}\`; return c; });
api.interceptors.response.use(undefined, async (err) => {
  const original = err.config;
  if (err.response?.status !== 401 || original._retry) throw err;
  original._retry = true;
  const token = await refresh();             // 10 istek 401 alsa da tek refresh
  original.headers.Authorization = \`Bearer \${token}\`;
  return api(original);
});
\`\`\`

## RBAC

| Rol | Yetki |
|---|---|
| ADMIN | Ürün CRUD + Sipariş CRUD |
| SALES | Ürün okuma + Sipariş oluştur/güncelle |
| OPERATIONS | Sipariş durum güncelleme |
| VIEWER | Salt okunur |

**Kritik:** Arayüz yetki kontrolü UX içindir; asıl yetkilendirme **backend**'de yapılır.

## Alıştırma
Refresh akışını uygula; eşzamanlı 3 isteğin tek refresh çağrısı yaptığını test et; refresh başarısızsa oturumu kapat.`,
    verification: `**Kaynak:** [OWASP Cheat Sheet Series — Session Management / JWT](https://cheatsheetseries.owasp.org). Bellekte access + HttpOnly refresh çerezi yaklaşımı yaygın bir öneridir; her mimaride CSRF stratejisi ayrıca düşünülmelidir.`,
  },
  "sec-xss": {
    body: `## XSS (Cross-Site Scripting)

Saldırgan girdisinin **HTML/JS olarak çalıştırılması**.

React JSX değerleri varsayılan olarak **kaçışlar**:

\`\`\`tsx
const input = "<script>alert('XSS')</script>";
<p>{input}</p>   // metin olarak gösterilir, çalışmaz
\`\`\`

## Tehlikeli kalıplar

\`\`\`tsx
<div dangerouslySetInnerHTML={{ __html: userInput }} />   // XSS riski!
<a href={userUrl}>link</a>                                // javascript: URL riski
\`\`\`

## Savunma
1. Kullanıcı girdisini HTML olarak render etme.
2. HTML gerekiyorsa **sanitizer** (DOMPurify).
3. URL'leri doğrula (\`https:\`/\`http:\`).
4. **CSP** başlığı uygula.
5. Hassas token'ı \`localStorage\`'da tutma.

## Laboratuvar (yalnızca kendi yerel uygulamanda)
Aynı girdiyi güvenli (\`{input}\`) ve güvensiz (\`dangerouslySetInnerHTML\`) olarak render et; farkı gözlemle ve düzelt.`,
    verification: `**Kaynak:** [OWASP — XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), [OWASP Top 10](https://owasp.org/www-project-top-ten/).`,
  },
  "sec-csrf-cors": {
    body: `## CSRF

Tarayıcı, çerezleri hedef siteye **otomatik** gönderir. Saldırgan, kullanıcıyı farkında olmadan oturum çerezli bir istek yapmaya zorlayabilir.

**Savunma:**
- \`SameSite=Lax/Strict\` çerezler (çoğu CSRF'i engeller).
- \`Secure\`, \`HttpOnly\`.
- Durum değiştiren isteklerde **CSRF token** (özellikle çerez tabanlı kimlik doğrulamada).
- \`Origin\`/\`Referer\` kontrolü.
- Bearer token (Authorization başlığı) kullanan API'ler tarayıcı tarafından otomatik gönderilmediği için klasik CSRF'e daha az açıktır; ancak XSS riski ayrı konudur.

## CORS

Tarayıcının "başka origin'den gelen yanıtı okuma" politikası. **Sunucu**, izin verdiği origin'leri açıkça belirtir:

\`\`\`ts
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
\`\`\`
\`origin: "*"\` ile \`credentials: true\` birlikte kullanılamaz; ayrıca CORS bir **kimlik doğrulama** mekanizması değildir.

## Laboratuvar
5173 (frontend) ↔ 3000 (backend) arasında yalnızca gerekli origin'e izin veren CORS kur; farklı bir origin'den isteğin tarayıcıda engellendiğini göster.`,
    verification: `**Kaynak:** [OWASP — CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html), [MDN — CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).`,
  },
  "sec-sqli": {
    body: `## SQL Injection

Kullanıcı girdisi SQL'e **string birleştirmeyle** eklenirse sorgunun yapısı değişebilir.

\`\`\`js
// GÜVENSİZ
const q = \`SELECT * FROM users WHERE email = '\${email}'\`;
// email = ' OR '1'='1  →  tüm kullanıcılar
\`\`\`

\`\`\`js
// GÜVENLİ: parametreli sorgu
const r = await db.query("SELECT * FROM users WHERE email = $1", [email]);
\`\`\`

## Savunma
1. **Parametreli sorgu / hazır ifade** (veya ORM).
2. Girdi doğrulama (Zod) — ek katman, birincil savunma değil.
3. En az yetkili veritabanı kullanıcısı.
4. Hata mesajlarında SQL detayı sızdırma.

## İstemciye güvenmeme
Sipariş oluştururken **fiyatı istemciden alma**; ürünü DB'den bul, güncel fiyatla hesapla, stok kontrolü yap, yetkiyi doğrula, transaction kullan.

## Laboratuvar (yalnızca yerel)
\`/api/lab/insecure-login\` ve \`/api/lab/secure-login\` uçlarını yaz; aynı girdiyle farkı gözlemle ve README'ye nedenini yaz.`,
    verification: `**Kaynak:** [OWASP — SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).`,
  },
  "test-unit": {
    body: `## Test piramidi

\`\`\`text
      E2E (az, kritik akışlar)
    Integration
  Component   Unit (çok)
\`\`\`

## Vitest — iş mantığı

\`\`\`ts
import { describe, expect, it } from "vitest";
import { calculateOrderTotal } from "./order-total";

describe("calculateOrderTotal", () => {
  it("kalem toplamını hesaplar", () => {
    expect(calculateOrderTotal([{ id: "1", productId: "p1", productName: "Klavye", quantity: 2, unitPrice: 100 }])).toBe(200);
  });
});
\`\`\`

## React Testing Library — davranış

\`\`\`tsx
test("ürün ekleme formu doğrulama hatası gösterir", async () => {
  const user = userEvent.setup();
  render(<ProductForm onSubmit={vi.fn()} />);
  await user.click(screen.getByRole("button", { name: /kaydet/i }));
  expect(await screen.findByRole("alert")).toHaveTextContent(/en az 2 karakter/i);
});
\`\`\`
Kullanıcının yaptığını test et; \`getByRole\` öncelikli, \`getByTestId\` son çare.

## Ne test edilmez?
Uygulama detayları (state adı, iç fonksiyon çağrıları). Kırılgan testler refactor'u yavaşlatır.

## Alıştırma
order-utils için testleri yaz; ürün formu ve "sipariş oluştur" mutation akışı için MSW ile bileşen testi ekle.`,
    verification: `**Kaynak:** [Vitest](https://vitest.dev/guide/), [Testing Library](https://testing-library.com/docs/react-testing-library/intro/).`,
  },
  "test-e2e": {
    body: `## Playwright

Gerçek tarayıcıda (Chromium, Firefox, WebKit) uçtan uca akış testi.

\`\`\`ts
import { test, expect } from "@playwright/test";

test("satış kullanıcısı sipariş oluşturur", async ({ page }) => {
  await page.goto("/orders/new");
  await page.getByLabel("Müşteri").selectOption("c-1");
  await page.getByRole("button", { name: "Ürün ekle" }).click();
  await page.getByRole("button", { name: "Siparişi oluştur" }).click();
  await expect(page).toHaveURL(/\\/orders\\/ord-/);
});
\`\`\`

## Çok tarayıcı ve viewport
\`playwright.config.ts\` içinde \`projects\` ile üç tarayıcı; viewport'lar: 360×800, 768×1024, 1280×800, 1440×900.

## İyi uygulamalar
- Rol/etiket seçicileri kullan (\`getByRole\`, \`getByLabel\`).
- Testler birbirinden **bağımsız** olsun; veriyi her testte hazırla.
- Yalnızca kritik iş akışlarını E2E'ye koy (yavaş ve pahalı).
- Başarısızlıklarda trace/screenshot sakla.

## Alıştırma
3 kritik akış (giriş, ürün oluştur, sipariş oluştur) için E2E yaz; 3 tarayıcıda koştur.`,
    verification: `**Kaynak:** [Playwright dokümantasyonu](https://playwright.dev/docs/intro).`,
  },
  quality: {
    body: `## Kod kalitesi araçları

- **ESLint** (flat config): hataları ve riskli kalıpları yakalar.
- **Prettier**: biçim tartışmasını bitirir.
- **TypeScript strict**: derleme zamanı güvenlik.
- **Husky + lint-staged**: commit öncesi yalnızca değişen dosyaları kontrol.

\`\`\`json
{
  "scripts": { "lint": "eslint .", "test": "vitest run", "build": "tsc -b && vite build" },
  "lint-staged": { "*.{ts,tsx}": ["eslint --fix", "prettier --write"] }
}
\`\`\`

## CI (GitHub Actions)

\`\`\`yaml
name: ci
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
\`\`\`

## Tanım: "Bitti" (Definition of Done)
TS hatasız, lint temiz, ilgili testler var, loading/error/empty durumları, yetki kontrolü, anlamlı hata mesajı, production build başarılı.

## Alıştırma
Projene CI ekle; bir PR'da lint hatası bırakıp CI'ın engellemesini gör.`,
    verification: `**Kaynak:** [GitHub Actions dokümantasyonu](https://docs.github.com/actions). Eylem sürümleri (\`@v4\`) zamanla güncellenir; güncel sürümü kontrol et.`,
  },
  perf: {
    body: `## Ölç → optimize et → tekrar ölç

**Core Web Vitals:** LCP (yükleme), INP (etkileşim), CLS (görsel kayma).

## Sık kazanımlar

1. **Kod bölme**: rota bazlı \`lazy\`.
2. **Görsel optimizasyonu**: doğru boyut/format (WebP/AVIF), \`loading="lazy"\`, genişlik/yükseklik belirt (CLS).
3. **Önbellek**: TanStack Query \`staleTime\`; HTTP önbellek başlıkları.
4. **Liste**: sayfalama; çok büyükte sanallaştırma.
5. **Bundle analizi**: ağır bağımlılıkları bul (visualizer eklentisi).
6. **Gereksiz global state / yeniden render**: Profiler ile bul.

## Araçlar
Lighthouse, Chrome DevTools Performance/Network, React Profiler, web.dev rehberleri.

## Alıştırma
Bir sayfanın Lighthouse skorunu al; üç iyileştirme uygula; "önce/sonra" tablosunu README'ye yaz (sayılarla).`,
    verification: `**Kaynak:** [web.dev — Learn Performance](https://web.dev/learn/performance), [Core Web Vitals](https://web.dev/articles/vitals). Metrik eşikleri Google tarafından zamanla güncellenebilir; güncel tanımı kaynakta kontrol et.`,
  },
  "next-app": {
    body: `## App Router ve Server Components

Next.js App Router'da bileşenler **varsayılan olarak sunucuda** çalışır.

\`\`\`tsx
// app/maliyet/page.tsx — Server Component
export default async function Page() {
  const products = await prisma.costProduct.findMany();   // doğrudan veritabanı
  return <ProductList items={products} />;
}
\`\`\`

\`"use client"\` yalnızca etkileşim (state, event, tarayıcı API) gereken yaprak bileşenlerde kullanılır.

## Bu sitedeki örnek akış
\`src/app/maliyet\` klasörü: sayfa (server) → form → **server action** (\`actions.ts\`) → Prisma → \`revalidatePath\`.

## Önemli
Bu depo **güncel Next.js sürümünü** kullanır; sürümler arası kırıcı değişiklikler olabilir. Kod yazmadan önce \`node_modules/next/dist/docs/\` altındaki ilgili rehbere bak. (Örneğin bu sürümde \`params\` ve \`searchParams\` **Promise**'tir ve \`await\` edilir.)

## Alıştırma
\`src/app/maliyet\` sayfasını satır satır oku; hangi bileşenin sunucu, hangisinin istemci olduğunu işaretle; revalidasyonun ne zaman tetiklendiğini açıkla.`,
    verification: `**Kaynak:** Kendi repondaki \`node_modules/next/dist/docs/\` ve [Next.js dokümantasyonu](https://nextjs.org/docs). \`params\`/\`searchParams\` Promise davranışı bu repodaki sayfalarda görülebilir (\`await params\`).`,
  },
  "next-data": {
    body: `## Server Actions

\`\`\`ts
"use server";
export async function addProduct(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return;
  await prisma.costProduct.create({ data: { name } });
  revalidatePath("/maliyet");
}
\`\`\`

\`\`\`tsx
<form action={addProduct}><input name="name" required /><button>Ekle</button></form>
\`\`\`

## Güvenlik
Server action'lar **herkese açık HTTP uç noktalarıdır**; yetki kontrolü ve girdi doğrulamasını action içinde yap.

## Veri tutarlılığı
- Mutasyondan sonra \`revalidatePath\` / \`revalidateTag\`.
- Formda bekleme durumu: \`useFormStatus\`, \`useTransition\`.
- Hata: doğrulama sonucu döndür veya hata sınırını kullan.

## Alıştırma
Bir formu hem sunucu doğrulamasıyla hem \`useActionState\` ile hata mesajı gösterecek şekilde dönüştür.`,
    verification: `**Kaynak:** [Next.js — Server Actions ve veri mutasyonu](https://nextjs.org/docs). Server action'ların açık uç nokta gibi ele alınması gerektiği resmi güvenlik rehberlerinde belirtilir.`,
  },
  deploy: {
    body: `## Yayınlama akışı (Vercel + Postgres örneği)

1. Depoyu Vercel'e bağla; \`main\` her push'ta production'a, dallar **preview** URL'ine dağıtılır.
2. **Ortam değişkenleri**: \`DATABASE_URL\` gibi secret'lar Vercel panelinde; koda veya repoya koyma.
3. **Veritabanı migrasyonu**: Şema değişince \`prisma migrate deploy\` production veritabanına uygulanmalı (build adımına ekleyebilir veya elle çalıştırabilirsin). **Migrasyon uygulanmadan yeni tablo kullanan sayfa 500 verir.**
4. **Gözlemlenebilirlik**: Vercel runtime logları; hata izleme (Sentry vb.).

## Kontrol listesi
- [ ] Build yerelde geçiyor
- [ ] Env değişkenleri production'da tanımlı
- [ ] Migrasyon uygulandı
- [ ] Önizleme dağıtımında akış test edildi
- [ ] Hata ve log izleme açık

## Alıştırma
Bu sitenin (\`personelweb\`) bir şema değişikliği için migrasyon → push → production sırasını yaz ve her adımın başarısızlık belirtisini listele.`,
    verification: `**Kaynak:** [Vercel dokümantasyonu](https://vercel.com/docs), [Prisma — migrate deploy](https://www.prisma.io/docs). Bu sitedeki "migrasyon uygulanmadan sayfa 500 verir" gözlemi bu projede yaşandı (maliyet tabloları).`,
  },
  git: {
    body: `## Git akışı

\`\`\`text
main
 └─ develop
     ├─ feature/products
     ├─ feature/orders
     └─ fix/order-total
\`\`\`

## Conventional commits

\`\`\`text
feat(products): ürün listesi
fix(orders): toplam hesabı düzeltildi
refactor(auth): token servisi ayrıştırıldı
test(products): CRUD testleri
docs(api): sipariş uçları
\`\`\`

## Pull Request kontrol listesi
- [ ] TypeScript temiz · ESLint temiz · testler geçiyor
- [ ] \`console.log\` yok
- [ ] Güvenlik gözden geçirildi (girdi doğrulama, yetki)
- [ ] Responsive ve erişilebilirlik kontrol edildi
- [ ] API sözleşmesi güncellendi
- [ ] Loading/error/empty durumları

## Kod incelemesi yapmak
Davranışı, test kapsamını, güvenliği ve okunabilirliği incele; **kişiyi değil kodu** eleştir; soru sorarak öner.

## Çatışma çözme
\`git merge main\` veya \`git rebase main\`; çakışan dosyada iki tarafı da anla, yalnızca birini körü körüne seçme.

## Alıştırma
Bir feature dalı aç, 3 anlamlı commit yap, PR açıklaması yaz ve kendi PR'ını kontrol listesiyle incele.`,
    verification: `**Kaynak:** [Pro Git (Türkçe)](https://git-scm.com/book/tr/v2), [Conventional Commits](https://www.conventionalcommits.org).`,
  },
  integration: {
    body: `## Kırıcı değişiklik senaryosu

Backend ekibi bir alanı **\`price → unitPrice\`** olarak yeniden adlandırdı. Ne olur?

1. **Tespit**: Zod şeması parse hatası verir; veya E2E/sözleşme testi kırılır.
2. **Tip modelini güncelle**: \`Product\` tipi ve şema.
3. **Adapter**: Eski ve yeni biçimi tek iç modele çeviren katman, geçiş döneminde ikisini de kabul eder:

\`\`\`ts
const raw = productSchemaV2.or(productSchemaV1).parse(json);
const price = "unitPrice" in raw ? raw.unitPrice : raw.price;
\`\`\`

4. **Testleri güncelle** (MSW handler'ları dahil).
5. **PR notu**: Neyin değiştiği, geçiş stratejisi, geri alma planı.

## Önlemler
- Sözleşmeyi (OpenAPI) kod olarak versiyonla ve CI'da doğrula.
- Alan kaldırmayı önce **deprecated** işaretle, sonra kaldır.
- Ekipler arasında değişiklik duyurusu ve takvim.

## Alıştırma
Bu senaryoyu kendi mini API'nde uygula; eski ve yeni biçimin birlikte çalıştığı bir geçiş dönemi tasarla.`,
    verification: `Bu ders bir **uygulama senaryosudur**; belirli bir kaynak iddiası içermez. Yüklediğin "Enterprise React 19 + Vite" rehberinin 3I bölümü ile uyumludur.`,
  },
  senior: {
    body: `## Kıdemli düzeyde ayrım yaratan beceriler

1. **Trade-off düşünme**: "En iyi teknoloji" yoktur; bağlama göre ödünleşimler vardır. Kararı yazıya dök (ADR).
2. **Sadelik**: Gereksiz soyutlama ve teknolojiden kaçın; sınırları net tut.
3. **Hata ve gözlemlenebilirlik**: İstek kimliği, yapılandırılmış log, hata izleme, gecikme ölçümü.
4. **Teknik borç yönetimi**: Borcu görünür kıl (liste), kasıtlı ödünleri belgele, refactor'u küçük ve test korumalı yap.
5. **İletişim**: Kod incelemesi, tasarım dokümanı (RFC), net PR açıklamaları.
6. **Güvenlik ve veri**: Yetkilendirme backend'de; sır yönetimi; veri modelini yanlış yönlendirmeden tasarla.

## Okuma
- *Refactoring* (Martin Fowler) — güvenli yeniden düzenleme.
- *Designing Data-Intensive Applications* (Martin Kleppmann) — veri sistemleri mimarisi.

## Beş yıl sonunda
Küçük bir ekibin teknik kararlarını sahiplenebilir, başkasının kodunu gerekçeleriyle değerlendirebilir, üretimde çıkan sorunu ölçerek teşhis edebilirsin.

## Alıştırma
Kendi projenden 5 mimari kararı ADR olarak yaz; her birinde alternatifleri ve neden seçmediğini belirt.`,
    verification: `Bu bölüm, sektör kaynaklarında (Fowler, Kleppmann) yaygın önerilerin özetidir; belirli bir olgusal iddia içermez.`,
  },
};
