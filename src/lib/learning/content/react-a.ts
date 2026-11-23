import type { ModuleContent } from "./types";

type Bodies = ModuleContent["bodies"];

export const reactBodiesA: Bodies = {
  "html-semantik": {
    body: `## Semantik HTML neden önemli?

Tarayıcı, arama motoru ve ekran okuyucu sayfanın **anlamını** elementlerden okur. \`<div>\` yerine doğru element kullanmak erişilebilirliği, SEO'yu ve klavye davranışını ücretsiz verir.

## Sayfa iskeleti

\`\`\`html
<header>
  <nav aria-label="Ana menü">
    <a href="/">Ürünler</a>
    <a href="/siparisler">Siparişler</a>
  </nav>
</header>
<main>
  <h1>Ürünler</h1>
  <section aria-labelledby="filtre-baslik">
    <h2 id="filtre-baslik">Filtre</h2>
    <form>
      <label for="ara">Ara</label>
      <input id="ara" name="q" type="search" />
      <button type="submit">Ara</button>
    </form>
  </section>
  <table>
    <caption>Ürün listesi</caption>
    <thead><tr><th scope="col">Ad</th><th scope="col">Fiyat</th></tr></thead>
    <tbody><tr><td>Klavye</td><td>1.200 TL</td></tr></tbody>
  </table>
</main>
\`\`\`

## Kurallar

1. Sayfada **tek** \`<h1>\`; başlık seviyeleri atlamadan ilerler.
2. Her form alanının bir \`<label>\`'ı vardır (\`for\`/\`id\` ile).
3. Tıklanabilir şey: gezinme için \`<a>\`, eylem için \`<button>\`. \`<div onclick>\` klavye ile çalışmaz.
4. Tablo veri içindir; yerleşim için kullanılmaz.

## Alıştırma
Ürün listesi + arama formu sayfasını yalnızca HTML ile yaz. Sonra fareyi bırakıp sadece **Tab, Shift+Tab, Enter, Space** ile bütün sayfayı kullan.`,
    verification: `**Kaynak:** MDN Web Docs ve W3C WAI erişilebilirlik rehberleri ([MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development), [W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/)). Bu ders bu kaynakların yaygın önerilerini özetler; sürüme bağlı bir iddia içermez.`,
  },
  "css-layout": {
    body: `## Mobile-first yaklaşım

Önce en dar ekran için CSS yaz, sonra \`min-width\` medya sorgularıyla genişlet.

\`\`\`css
:root { --gap: 1rem; --bg: #fff; --fg: #111; }
@media (prefers-color-scheme: dark) { :root { --bg: #111; --fg: #eee; } }

.layout { display: grid; gap: var(--gap); padding: var(--gap); }
@media (min-width: 768px) { .layout { grid-template-columns: 220px 1fr; } }

.cards { display: grid; gap: var(--gap); grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); }
\`\`\`

## Flexbox mı, Grid mi?

- **Flexbox**: Tek eksende hizalama (nav çubuğu, buton grubu).
- **Grid**: İki eksenli yerleşim (sayfa iskeleti, kart ızgarası).

## Odak stili

Klavye kullanıcıları için \`:focus-visible\` stilini **silme**, belirgin yap:

\`\`\`css
:focus-visible { outline: 3px solid #4f8; outline-offset: 2px; }
\`\`\`

## Test kırılımları

360 · 768 · 1280 · 1440 px. Yatay kaydırma çıkıyorsa genelde sabit genişlikli bir element vardır (\`max-width: 100%\` ve \`min-width: 0\` kontrol et).

## Alıştırma
Masaüstünde kenar çubuğu + tablo, mobilde çekmece + kart şeklinde değişen bir ürün sayfası yap.`,
    verification: `**Kaynak:** [MDN CSS Grid / Flexbox rehberleri](https://developer.mozilla.org/en-US/docs/Learn_web_development) ve [web.dev Learn CSS](https://web.dev/learn). Kod örnekleri standart CSS'tir.`,
  },
  "js-core": {
    body: `## Neden JS çekirdeği?

React hatalarının çoğu aslında JavaScript kavramlarından gelir: kapsam, referans/değer, kapanış, \`this\`, event loop.

## Kapanış (closure)

\`\`\`js
function sayac() {
  let n = 0;
  return () => ++n;
}
const a = sayac();
a(); a(); // 2
\`\`\`
İç fonksiyon, tanımlandığı kapsamdaki \`n\`'i "hatırlar". React'te bir olay işleyicisinin **eski** bir durumu görmesinin (stale closure) sebebi budur.

## Referans ve değer

\`\`\`js
const a = { x: 1 };
const b = a;      // aynı nesneye referans
b.x = 2;          // a.x de 2 olur
const c = { ...a }; // kopya (sığ)
\`\`\`
React durumunu **değiştirme (mutate)**, yeni nesne üret.

## Event loop

\`\`\`js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
// 1, 4, 3, 2
\`\`\`
Mikro görevler (Promise) makro görevlerden (setTimeout) önce çalışır.

## Prototip ve \`this\`
Sınıflar prototip zincirinin sözdizimi şekeridir; ok fonksiyonlar \`this\`'i kapsamdan alır, normal fonksiyonlar çağrılış biçiminden.

## Alıştırma
10 "çıktıyı tahmin et" sorusu yaz (closure, event loop, referans); sonra çalıştırıp doğrula. Bir \`debounce\` ve bir \`memoize\` fonksiyonu yaz.`,
    verification: `**Kaynak:** [javascript.info](https://javascript.info), [MDN — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Kod çıktıları ECMAScript davranışıdır (mikro görev önceliği HTML/ECMAScript spesifikasyonunda tanımlıdır).`,
  },
  "js-es6": {
    body: `## Sık kullanılan ES6+ özellikleri

\`\`\`js
// destructuring + varsayılan değer
const { id, name, price = 0 } = product;
const [first, ...rest] = list;

// spread (değişmez güncelleme)
const updated = { ...product, price: 250 };
const added = [...list, newItem];

// optional chaining + nullish coalescing
const city = customer?.address?.city ?? "Bilinmiyor";
const stock = product.stock ?? 0; // 0 geçerli değerdir; || kullanma!

// dizi yöntemleri
const active = products.filter((p) => p.active);
const total = products.reduce((sum, p) => sum + p.price, 0);
const byStatus = Object.groupBy(orders, (o) => o.status); // yeni ortamlarda
\`\`\`

## async/await

\`\`\`js
async function getProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`); // fetch 4xx/5xx'te fırlatmaz!
  return res.json();
}
\`\`\`

## Modüller
\`export\`/\`import\` ile dosyaları bağla; varsayılan ve isimli export farkını bil.

## Alıştırma: sipariş yardımcıları
\`order-utils.ts\` yaz: \`calculateSubtotal\`, \`calculateTax\`, \`calculateGrandTotal\`, \`calculateDiscount\`, \`groupOrdersByStatus\`. Para için ondalık hatalarına dikkat: kuruş (minor unit) tamsayı kullan.`,
    verification: `**Kaynak:** [MDN — JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [javascript.info](https://javascript.info). \`Object.groupBy\` yeni bir özelliktir (ES2024); hedef tarayıcı/Node sürümünü kontrol et.`,
  },
  "dom-http": {
    body: `## DOM ve olaylar

\`\`\`js
const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");   // olay delegasyonu
  if (li) console.log(li.dataset.id);
});
\`\`\`
Olaylar **yukarı kabarcıklanır (bubbling)**; tek dinleyiciyle çok eleman yönetilir.

## HTTP temelleri

| Kod | Anlam |
|---|---|
| 200 | Başarılı |
| 201 | Oluşturuldu |
| 204 | İçerik yok (silme) |
| 400 | Hatalı istek |
| 401 | Kimlik doğrulanmadı |
| 403 | Yetkisiz |
| 404 | Bulunamadı |
| 409 | Çakışma |
| 422 | Doğrulama hatası |
| 429 | Çok fazla istek |
| 500 | Sunucu hatası |

Yöntemler: GET (oku), POST (oluştur), PUT/PATCH (güncelle), DELETE (sil). GET **güvenli ve idempotent** olmalıdır.

## Alıştırma
Framework kullanmadan fetch ile ürün listesi çek, filtrele ve DOM'a bas. Tarayıcı **Network** sekmesinde isteğin başlıklarını, durum kodunu ve yanıt gövdesini incele.`,
    verification: `**Kaynak:** [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) durum kodları ve yöntem semantiği.`,
  },
  "ts-basics": {
    body: `## Temel tipler

\`\`\`ts
type Role = "ADMIN" | "SALES" | "VIEWER";     // literal birleşim
interface User { id: string; name: string; role: Role; email?: string }

function greet(u: User) { return \`Merhaba \${u.name}\`; }
\`\`\`

## unknown vs any

\`any\` tip denetimini kapatır; **yasak** kabul et. Dışarıdan gelen veri için \`unknown\` kullan ve daralt:

\`\`\`ts
function parse(x: unknown) {
  if (typeof x === "string") return x.toUpperCase();
  if (Array.isArray(x)) return x.length;
  throw new Error("Desteklenmeyen tip");
}
\`\`\`

## Daraltma (narrowing)

\`\`\`ts
type Result = { ok: true; data: string } | { ok: false; error: string };
function show(r: Result) {
  if (r.ok) return r.data;   // burada r.data var
  return r.error;
}
\`\`\`

## tsconfig

\`strict: true\`, \`noUncheckedIndexedAccess: true\` (dizi/obje erişimi \`undefined\` olabilir) önerilir.

## Alıştırma
strict + noUncheckedIndexedAccess açıkken küçük bir kuyruk (Queue<T>) sınıfı ve tipli bir event emitter yaz.`,
    verification: `**Kaynak:** [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html). \`noUncheckedIndexedAccess\` TypeScript 4.1'den beri bulunan bir derleyici seçeneğidir.`,
  },
  "ts-generics": {
    body: `## Generic'ler

\`\`\`ts
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  return res.json() as Promise<T>;   // dikkat: çalışma zamanı doğrulaması yok
}
const products = await fetchJson<Product[]>("/api/products");
\`\`\`

## Yardımcı tipler

\`\`\`ts
type CreateProduct = Omit<Product, "id" | "createdAt">;
type UpdateProduct = Partial<CreateProduct>;
type Dict = Record<string, number>;
\`\`\`

## Generic bileşen

\`\`\`tsx
type Column<T> = { header: string; cell: (row: T) => React.ReactNode };
function Table<T extends { id: string }>({ rows, columns }: { rows: T[]; columns: Column<T>[] }) {
  return (
    <table>
      <thead><tr>{columns.map((c) => <th key={c.header}>{c.header}</th>)}</tr></thead>
      <tbody>{rows.map((r) => <tr key={r.id}>{columns.map((c) => <td key={c.header}>{c.cell(r)}</td>)}</tr>)}</tbody>
    </table>
  );
}
\`\`\`

## Uyarı
\`as Promise<T>\` bir **iddiadır**, doğrulama değildir. Güvenilmeyen veri için Zod (sonraki ders) kullan.

## Alıştırma
Generic \`Table<T>\` bileşenini ürün ve sipariş listelerinde yeniden kullan.`,
    verification: `**Kaynak:** [TypeScript Handbook — Generics, Utility Types](https://www.typescriptlang.org/docs/handbook/2/generics.html).`,
  },
  "ts-react": {
    body: `## Props ve olaylar

\`\`\`tsx
type ButtonProps = {
  variant?: "primary" | "ghost";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};
export function Button({ variant = "primary", ...rest }: ButtonProps) {
  return <button data-variant={variant} {...rest} />;
}
\`\`\`

## Native elementi genişletme

\`\`\`tsx
type InputProps = React.ComponentPropsWithoutRef<"input"> & { label: string };
\`\`\`

## Durumu birleşim tipiyle modelle

\`\`\`ts
type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: Product[] };
\`\`\`
Böylece "loading iken data var" gibi imkânsız durumlar tipte ifade edilemez.

## Ref

\`\`\`tsx
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();
\`\`\`

## Alıştırma
Bir Button, Input ve Select bileşeni yaz; hepsi native props'u kabul etsin ve erişilebilir etiket zorunlu olsun.`,
    verification: `**Kaynak:** [React — TypeScript ile kullanım](https://react.dev/learn/typescript), [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app).`,
  },
  "ts-runtime": {
    body: `## Tip ≠ doğrulama

TypeScript tipleri **derleme zamanıdır**; sunucudan gelen JSON'u doğrulamaz. Zod ile şema yaz, tipi şemadan türet:

\`\`\`ts
import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string().trim().min(2).max(120),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
});
export type Product = z.infer<typeof productSchema>;

const result = productSchema.safeParse(json);
if (!result.success) {
  console.error(result.error.flatten());
} else {
  const product: Product = result.data;
}
\`\`\`

## Nerede kullanılır?

1. **Form girdileri** (React Hook Form ile resolver).
2. **API yanıtları** (güvenmediğin sınır).
3. **Sunucuda istek gövdesi** (backend'de de tekrar doğrula).

## Alıştırma
Bir API yanıtını Zod ile doğrula; alan adı değiştiğinde (örn. \`price → unitPrice\`) uygulamanın anlamlı bir hata verdiğini göster.`,
    verification: `**Kaynak:** [Zod dokümantasyonu](https://zod.dev) — \`z.infer\`, \`safeParse\`.`,
  },
  "react-thinking": {
    body: `## React'te düşünmek (5 adım)

1. **UI'ı bileşen hiyerarşisine böl** (tek sorumluluk).
2. **Statik sürüm yaz** (durum olmadan, props ile).
3. **Minimal durum** belirle (türetilebilen veriyi durumda tutma).
4. **Durumun sahibini seç** (ortak üst bileşen — "lifting state up").
5. **Ters veri akışı** ekle (alt bileşen olayla üste haber verir).

## Örnek

\`\`\`tsx
function ProductPage({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [onlyActive, setOnlyActive] = useState(false);

  // Türetilmiş değer: durumda tutma, render sırasında hesapla.
  const visible = products.filter(
    (p) => p.name.toLowerCase().includes(query.toLowerCase()) && (!onlyActive || p.active),
  );

  return (
    <>
      <Filters query={query} onQuery={setQuery} onlyActive={onlyActive} onOnlyActive={setOnlyActive} />
      <ProductTable rows={visible} />
    </>
  );
}
\`\`\`

## Kurallar
- Props **salt okunurdur**.
- Render **saf** olmalıdır: aynı props/state → aynı çıktı; render içinde veri çekme veya DOM değiştirme yok.
- Listede \`key\` kalıcı ve benzersiz kimlik olmalı (dizi indeksi değil).

## Alıştırma
react.dev "Thinking in React" örneğini kendi alanında (ürün listesi) baştan kur.`,
    verification: `**Kaynak:** [react.dev — Thinking in React](https://react.dev/learn/thinking-in-react). Adımlar resmi dokümantasyondan özetlenmiştir.`,
  },
  "react-state": {
    body: `## useState

\`\`\`tsx
const [count, setCount] = useState(0);
setCount((c) => c + 1);   // önceki değere bağlıysa fonksiyonel güncelleme
\`\`\`

## Durum tasarımı ilkeleri
1. Aynı bilgiyi **iki yerde** tutma.
2. Türetilebilen değeri durumda tutma.
3. Çelişen durumları (isLoading + isError aynı anda) birleşim tipiyle önle.
4. Derin iç içe nesne yerine düz yapı.

## useReducer

Birbirine bağlı çok geçişli durumda reducer daha okunur ve test edilebilirdir:

\`\`\`tsx
type Action = { type: "add"; item: Item } | { type: "remove"; id: string } | { type: "clear" };
function reducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "add": return [...state, action.item];
    case "remove": return state.filter((i) => i.id !== action.id);
    case "clear": return [];
  }
}
const [items, dispatch] = useReducer(reducer, []);
\`\`\`

## Değişmezlik
\`state.push(x)\` yapma; yeni dizi/nesne üret. Aksi hâlde React değişikliği fark etmeyebilir.

## Alıştırma
Sepet mantığını (ekle, çıkar, adet değiştir, temizle) reducer olarak yaz ve Vitest ile test et.`,
    verification: `**Kaynak:** [react.dev — State: A Component's Memory](https://react.dev/learn/state-a-components-memory) ve [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer).`,
  },
  "react-effects": {
    body: `## Efekt nedir?

\`useEffect\`, React **dışındaki** bir sistemle (tarayıcı API'si, ağ, zamanlayıcı, üçüncü parti widget) senkronizasyon içindir.

\`\`\`tsx
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);   // temizleme
}, []);
\`\`\`

## "Efekte ihtiyacın olmayabilir"

Şu durumlarda efekt **yanlıştır**:
- Prop/state'ten türetilen veri → render sırasında hesapla.
- Kullanıcı olayına tepki → olay işleyicide yap.
- State'i prop değişince sıfırlamak → \`key\` ver.

\`\`\`tsx
// KÖTÜ
useEffect(() => { setFullName(first + " " + last); }, [first, last]);
// İYİ
const fullName = first + " " + last;
\`\`\`

## Veri çekme
Elle \`useEffect + fetch\` yarış durumlarına (race condition) açıktır; TanStack Query veya framework veri katmanını kullan.

## Strict Mode
Geliştirmede efektler iki kez çalışabilir; temizlemesi doğru yazılmış efekt bundan etkilenmez.

## Alıştırma
Bir bileşendeki gereksiz efektleri bul; olay işleyiciye veya türetilmiş değere dönüştür.`,
    verification: `**Kaynak:** [react.dev — You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) ve [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects).`,
  },
  "react-hooks-custom": {
    body: `## Özel hook

"use" ile başlayan, başka hook'ları kullanan fonksiyon. Mantığı bileşenden ayırır, paylaşılabilir ve test edilebilir yapar.

\`\`\`tsx
function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
\`\`\`

## Kompozisyon

Props'u derinlere taşımak yerine **children** ve bileşen kompozisyonu kullan:

\`\`\`tsx
<Card>
  <Card.Header>Başlık</Card.Header>
  <Card.Body>İçerik</Card.Body>
</Card>
\`\`\`

## Context ne zaman?
Tema, oturum kullanıcısı, dil gibi **seyrek değişen** ve çok bileşenin okuduğu veriler için. Sık değişen sunucu verisi için Context yerine veri kütüphanesi kullan.

## Alıştırma
\`useLocalStorage\`, \`useDebounce\`, \`useMediaQuery\` hook'larını yaz ve React Testing Library \`renderHook\` ile test et.`,
    verification: `**Kaynak:** [react.dev — Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) ve [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context).`,
  },
  "react-forms": {
    body: `## React Hook Form + Zod

\`\`\`tsx
const schema = z.object({
  name: z.string().min(2, "En az 2 karakter"),
  price: z.coerce.number().nonnegative(),
});
type Values = z.infer<typeof schema>;

function ProductForm({ onSubmit }: { onSubmit: (v: Values) => void }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<Values>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name">Ad</label>
      <input id="name" aria-invalid={!!errors.name} aria-describedby="name-err" {...register("name")} />
      <p id="name-err" role="alert">{errors.name?.message}</p>
      <button disabled={isSubmitting}>Kaydet</button>
    </form>
  );
}
\`\`\`

## React 19 form eylemleri

\`\`\`tsx
function Rename({ action }: { action: (fd: FormData) => Promise<void> }) {
  const [state, formAction, pending] = useActionState(async (_prev: string | null, fd: FormData) => {
    try { await action(fd); return null; } catch { return "Kaydedilemedi"; }
  }, null);
  return (
    <form action={formAction}>
      <input name="title" />
      <button disabled={pending}>Kaydet</button>
      {state && <p role="alert">{state}</p>}
    </form>
  );
}
\`\`\`
\`useOptimistic\` ile sunucu yanıtı gelmeden arayüzü iyimser güncelleyebilirsin.

## Erişilebilirlik
Etiket, hata mesajı ilişkisi (\`aria-describedby\`), \`role="alert"\`, klavye ile gönderim.

## Alıştırma
Ürün oluşturma formu: Zod şeması, hata mesajları, erişilebilir etiketler, gönderim durumu.`,
    verification: `**Kaynak:** [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev), [react.dev — useActionState](https://react.dev/reference/react/useActionState), [useOptimistic](https://react.dev/reference/react/useOptimistic). Bu API'ler React 19'da stabildir; sürümünü kontrol et.`,
  },
  "react-suspense": {
    body: `## Suspense ve lazy

\`\`\`tsx
const Reports = lazy(() => import("./Reports"));

<Suspense fallback={<Skeleton />}>
  <Reports />
</Suspense>
\`\`\`
Rota veya ağır bileşenleri lazy yükleyerek ilk paketi küçültürsün.

## Error Boundary

Render sırasında fırlatılan hatayı yakalar (olay işleyici ve async hatalar hariç):

\`\`\`tsx
<ErrorBoundary fallback={<p>Bir şeyler ters gitti.</p>}>
  <Reports />
</ErrorBoundary>
\`\`\`
(\`react-error-boundary\` paketi yaygındır.)

## use()

React 19'da \`use(promise)\` bir Promise'i render içinde okur; Suspense ile birlikte çalışır. Promise'i render içinde **yeniden oluşturma** — üst bileşenden/önbellekten ver.

## Geçişler

\`\`\`tsx
const [isPending, startTransition] = useTransition();
startTransition(() => setTab("raporlar")); // acil olmayan güncelleme
\`\`\`
Arayüz donmadan yeni ekran hazırlanır.

## Alıştırma
Raporlar rotasını lazy yükle; fallback skeleton + hata sınırı ekle; ağ yavaşlatma ile deneyimi test et.`,
    verification: `**Kaynak:** [react.dev — Suspense](https://react.dev/reference/react/Suspense), [lazy](https://react.dev/reference/react/lazy), [use](https://react.dev/reference/react/use), [useTransition](https://react.dev/reference/react/useTransition).`,
  },
  "react-perf-basics": {
    body: `## Önce ölç

React DevTools **Profiler** ve tarayıcı Performance sekmesi ile "yavaş" olanı bul; tahminle optimize etme.

## Neden yeniden render olur?
Bir bileşen render olur: kendi durumu değişince, ebeveyni render olunca, kullandığı context değişince.

## Araçlar

- **memo / useMemo / useCallback**: Yalnızca ölçülmüş bir sorun varsa. Yanlış kullanımda karmaşıklık artar, kazanç yok.
- **React Compiler**: Bileşenleri derleme zamanında otomatik memoize edebilen derleyici; kodu doğru "saf" yazmak onun ön koşuludur.
- **Liste**: Sayfalama; çok büyük listede sanallaştırma (ör. TanStack Virtual).
- **Debounce**: Arama girdisinde istek sayısını azalt.

## Deney
Ürün listesini 100 → 1.000 → 10.000 satırla test et:
1. Önce: Profiler çıktısı, ilk render ve yazma gecikmesi.
2. Sayfalama + debounce + query cache.
3. Gerekirse sanallaştırma.
4. Sonra: aynı ölçümler; README'ye önce/sonra yaz.

## Alıştırma
Yukarıdaki deneyi yap; **sayısal** sonuç tablosu çıkar.`,
    verification: `**Kaynak:** [react.dev — Profiler](https://react.dev/reference/react/Profiler), [React Compiler](https://react.dev/learn/react-compiler), [web.dev — Performance](https://web.dev/learn/performance). React Compiler'ın kararlı sürüm durumu ve kurulumu için resmi dokümantasyona bak.`,
  },
  routing: {
    body: `## React Router

\`\`\`tsx
const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [
    { index: true, element: <Dashboard /> },
    { path: "products", element: <ProductsPage /> },
    { path: "products/:id", element: <ProductDetail /> },
    { path: "orders", lazy: () => import("./orders/routes") },
  ]},
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);
\`\`\`

## URL = durum

Filtre ve sayfa bilgisini URL'de tut: yenilemede korunur, link paylaşılır, geri/ileri çalışır.

\`\`\`tsx
const [params, setParams] = useSearchParams();
const status = params.get("status") ?? "ALL";
const page = Number(params.get("page") ?? 1);
\`\`\`

## Koruma

\`\`\`tsx
function RequirePermission({ permission, children }: { permission: string; children: React.ReactNode }) {
  const user = useAuthUser();
  if (!user) return <Navigate to="/login" replace />;
  if (!user.permissions.includes(permission)) return <Navigate to="/403" replace />;
  return children;
}
\`\`\`
**Güvenlik uyarısı:** Arayüz koruması bir güvenlik sınırı değildir; asıl yetkilendirme API'de yapılır.

## Alıştırma
Sipariş listesinde \`?status=CONFIRMED&page=2\` filtresini URL ile senkronize et; 403 ve 404 sayfaları ekle.`,
    verification: `**Kaynak:** [React Router dokümantasyonu](https://reactrouter.com). Rota tanımı API'leri sürümler arasında değişebilir (v6/v7); kullandığın sürümün dokümanını esas al.`,
  },
  architecture: {
    body: `## Feature-driven yapı

\`\`\`text
src/
  app/            # provider'lar, router
  components/     # gerçekten ortak UI
  features/
    products/
      api/ components/ hooks/ schemas/ pages/ types.ts
    orders/
    auth/
  lib/            # axios, query client, yardımcılar
\`\`\`

**Neden?** Alan (domain) sınırları korunur; bir feature'daki iş kuralı diğerine sızmaz.

## Katmanlar ve bağımlılık yönü

\`\`\`text
UI → Page → Feature component/hook → Query hook → API servisi → Axios → Backend
\`\`\`
Üst katman alt katmanı bilir; tersi olmaz. UI bileşeni doğrudan \`axios\` çağırmaz.

## Server state ve client state

- **Server state** (ürün listesi, siparişler): TanStack Query.
- **UI state** (sidebar açık mı, modal): useState/Zustand.
- Server verisini Zustand'a **kopyalama**.

## ADR (Mimari Karar Kaydı)

Her önemli karar için kısa kayıt:
\`\`\`text
ADR-001: Server state için TanStack Query
Karar: ...  Neden: önbellek, yeniden deneme, invalidation  Sonuç: ...
\`\`\`

## Alıştırma
Projeni features/ yapısına geçir; 3 ADR yaz (state yönetimi, rota stratejisi, form kütüphanesi).`,
    verification: `Bu ders kurumsal mimari **uygulamalarından derlenmiş bir öneridir**; tek bir resmi standart değildir. Yüklediğin "Enterprise React 19 + Vite" rehberindeki feature-driven yapı ile uyumludur.`,
  },
  styling: {
    body: `## Tailwind CSS

Utility sınıflarıyla stil. Avantaj: tasarım token'larıyla tutarlılık, ölü CSS yok.

\`\`\`tsx
<button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80 focus-visible:outline-2">
  Kaydet
</button>
\`\`\`

## Koşullu sınıflar

\`\`\`ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...a: Parameters<typeof clsx>) => twMerge(clsx(a));
\`\`\`

## shadcn/ui yaklaşımı

Bileşenleri bir bağımlılık olarak değil, **kendi kod tabanına kopyalayarak** (Radix primitive'leri üzerine) sahiplenirsin; özelleştirmek kolaydır, ama bakımı sana aittir.

## Tasarım sistemi katmanları

1. **Token**: renk, boşluk, tipografi, gölge.
2. **Primitive**: Button, Input, Dialog (erişilebilir davranış).
3. **Bileşen**: Feature'a özgü (ProductTable).

## Alıştırma
Token'lardan (CSS değişkenleri) türeyen açık/koyu tema yap; 5 primitive bileşen oluştur.`,
    verification: `**Kaynak:** [Tailwind CSS dokümantasyonu](https://tailwindcss.com/docs), [shadcn/ui](https://ui.shadcn.com). Tailwind sürümüne göre yapılandırma farklıdır (v4'te CSS tabanlı ayar); kullandığın sürümün dokümanına bak.`,
  },
  a11y: {
    body: `## Erişilebilirlik (a11y) temelleri

1. **Semantik HTML** (button, nav, main, label).
2. **Klavye**: Her şey Tab/Enter/Space/Escape ile kullanılabilir; odak sırası mantıklı; **odak görünür**.
3. **İsimlendirme**: Her etkileşimli elemanın erişilebilir adı vardır (\`aria-label\` ancak görünür metin yoksa).
4. **Renk kontrastı**: Metin için WCAG AA ≥ 4,5:1 (büyük metin ≥ 3:1). Yalnızca renkle durum bildirme.
5. **Modal**: Odak içeri alınır, Escape ile kapanır, kapanınca tetikleyiciye döner (Radix/Headless UI bunu yönetir).
6. **Asenkron geri bildirim**: Toast/yükleme için \`aria-live\`.

## ARIA kuralı
"ARIA kullanmanın ilk kuralı: yerel HTML elemanı varsa onu kullan." Yanlış ARIA, hiç ARIA'dan kötüdür.

## Araçlar
Lighthouse, axe DevTools, ekran okuyucu (NVDA/VoiceOver), yalnızca klavye testi.

## Alıştırma
Uygulamanı yalnızca klavyeyle kullan; bulduğun 5 sorunu düzelt ve axe raporunu "önce/sonra" kaydet.`,
    verification: `**Kaynak:** [W3C WAI — Accessibility Fundamentals](https://www.w3.org/WAI/fundamentals/accessibility-intro/), [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/). WCAG kontrast eşikleri (AA: 4,5:1 / 3:1) WCAG 2.x standardındadır.`,
  },
};
