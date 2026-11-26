import type { ModuleContent } from "./types";
import { lessonBody as L } from "./md";

type Bodies = ModuleContent["bodies"];

export const muhendisBodiesB: Bodies = {
  "se-html5": L(
    `## Semantik HTML5 hatırlatma
¦header, nav, main, section, article, aside, footer, figure, time¦: anlam taşıyan etiketler; erişilebilirlik ve SEO için temel.

## Ses ve video
~~~html
<video controls width="640" poster="kapak.jpg">
  <source src="tanitim.webm" type="video/webm" />
  <source src="tanitim.mp4" type="video/mp4" />
  <track kind="captions" src="altyazi.vtt" srclang="tr" label="Türkçe" />
  Tarayıcın video etiketini desteklemiyor.
</video>
<audio controls src="muzik.mp3"></audio>
~~~
- Otomatik oynatma tarayıcılarca çoğunlukla **sessiz** ve kullanıcı etkileşimi ile sınırlıdır.
- Altyazı (¦track¦) erişilebilirlik içindir.

## SVG
Vektör grafik; ölçeklenir, CSS/JS ile biçimlendirilir.
~~~html
<svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="Daire">
  <circle cx="60" cy="60" r="50" fill="#3b82f6" />
</svg>
~~~
İkonlar ve basit çizimler için idealdir.

## Canvas (2B çizim)
Piksel tabanlı, JS ile çizilir (oyun, grafik, görüntü işleme).
~~~js
const ctx = document.querySelector("canvas").getContext("2d");
ctx.fillStyle = "tomato";
ctx.fillRect(10, 10, 100, 60);
~~~
SVG = az nesne, sorgulanabilir; Canvas = çok nesne/animasyon, piksel.

## Geolocation API
~~~js
navigator.geolocation.getCurrentPosition(
  (poz) => console.log(poz.coords.latitude, poz.coords.longitude),
  (hata) => console.warn("Konum alınamadı:", hata.message),
  { enableHighAccuracy: false, timeout: 8000 }
);
~~~
**Gizlilik**: Kullanıcıdan izin ister, yalnızca **HTTPS**'te çalışır; reddedilme durumunu mutlaka ele al.

## Alıştırma
Canvas'ta hareket eden bir top animasyonu (¦requestAnimationFrame¦), aynı topun SVG sürümü ve Geolocation ile "yakınımdaki" butonu yap; izin reddedildiğinde alternatif (şehir seçimi) sun.`,
    `**Kaynaklar:** MDN: [video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). Otomatik oynatma ve izin davranışları tarayıcıya göre değişir.`
  ),
  "se-css3": L(
    `## Kutu modeli ve görünüm
~~~css
*, *::before, *::after { box-sizing: border-box; }   /* width padding+border'ı içerir */
.kart {
  padding: 1rem; border: 1px solid #ddd; border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / .08);
  background: url(a.png) top left / 40px no-repeat, linear-gradient(#fff, #f6f6f6);   /* çoklu arka plan */
}
~~~

## Geçiş ve animasyon
~~~css
.btn { transition: transform .2s ease, background-color .2s; }
.btn:hover { transform: translateY(-2px); }

@keyframes nabiz { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
.bildirim { animation: nabiz 1.2s infinite; }

@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
~~~
**Performans**: ¦transform¦ ve ¦opacity¦ animasyonu ucuzdur. Hareket hassasiyeti olanlar için ¦prefers-reduced-motion¦'a saygı göster.

## Dönüşümler
¦translate, rotate, scale, skew¦; ¦transform-origin¦; 3B için ¦perspective¦.

## Flexbox (tek eksen) ve Grid (iki boyut)
~~~css
.menu { display: flex; gap: 1rem; justify-content: space-between; align-items: center; }
.galeri { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
~~~
Kural: **içerik akışı → flex**, **sayfa/ızgara yerleşimi → grid**.

## Responsive tasarım
~~~css
.sayfa { padding: 1rem; }
@media (min-width: 768px)  { .sayfa { padding: 2rem; display: grid; grid-template-columns: 240px 1fr; } }
~~~
**Mobile-first**: Küçük ekran stili varsayılan, büyüklere ¦min-width¦ ile ekle. ¦<meta name="viewport" content="width=device-width, initial-scale=1">¦ şart. Birimler: ¦rem¦, ¦%¦, ¦vw¦, ¦clamp()¦.

## "Kenar çubuğu" (sidebar) örneği
Grid ile iki sütunlu düzen: ¦grid-template-columns: 240px 1fr¦; mobilde tek sütun.

## Alıştırma
Bir ürün kartı galerisi yap: 3 kırılımda (1, 2, 4 sütun), kart üzerine gelince yükselme animasyonu, ¦prefers-reduced-motion¦ desteği.`,
    `**Kaynaklar:** MDN: [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout), [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout), [Animasyonlar](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations), [Dönüşümler](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms), [Medya sorguları](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).`
  ),
  "se-jquery": L(
    `## jQuery nedir? Neden öğrenmeli?
2000'lerin sonunda tarayıcılar arası farkları kapatıp DOM işlemlerini kolaylaştırdı. Bugün tarayıcı API'leri iyileştiği ve React/Vue gibi framework'ler yaygınlaştığı için **yeni projelerde gerekmez**; ama **eski kod tabanlarında** (WordPress temaları, kurumsal sistemler) çok karşına çıkar.

## Seçiciler ve manipülasyon
| jQuery | Modern JavaScript |
|---|---|
| ¦$(".kart")¦ | ¦document.querySelectorAll(".kart")¦ |
| ¦$("#a").addClass("x")¦ | ¦el.classList.add("x")¦ |
| ¦$("#a").text("Merhaba")¦ | ¦el.textContent = "Merhaba"¦ |
| ¦$("#a").on("click", f)¦ | ¦el.addEventListener("click", f)¦ |
| ¦$("#a").hide() / .fadeOut()¦ | ¦el.hidden = true¦ / CSS geçişi |

## AJAX ve JSON
~~~js
// jQuery
$.getJSON("/api/urunler", function (veri) { render(veri); });

// Modern
const veri = await (await fetch("/api/urunler")).json();
~~~

## jQuery UI ve eklentiler
Tarih seçici, sürükle-bırak, sekme gibi bileşenler sağlar; bugün bunların yerine erişilebilir, bakımı yapılan kütüphaneler (Radix, dnd-kit) tercih edilir.

## Framework'lerle birlikte kullanım
React/Vue/Angular DOM'u **kendileri yönetir**; aynı elemanı jQuery ile değiştirmek durumu bozar. Gerekirse jQuery eklentisini yalnızca bileşen **içindeki bir ref** ile ve temizleyerek kullan; mümkünse modern bir alternatif seç.

## Alıştırma
Bir jQuery'li "yapılacaklar listesi" kodunu (ekle/sil/işaretle + AJAX kaydet) oku ve aynı davranışı sade JavaScript ile yeniden yaz; ardından React'e taşı. Kod miktarını ve zihinsel modeli karşılaştır.`,
    `**Kaynaklar:** [jQuery API](https://api.jquery.com), [You Might Not Need jQuery](https://youmightnotneedjquery.com), [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). "Yeni projelerde gerekmez" değerlendirmesi, tarayıcı API'lerinin ve framework'lerin gelişimine dayanan yaygın bir görüştür.`
  ),
  "se-js-ileri": L(
    `## Scope ve closure
~~~js
function sayac() {
  let n = 0;                 // dışarıdan erişilemez
  return () => ++n;          // closure: n'i hatırlar
}
const s = sayac(); s(); s();   // 2
~~~
Closure: Fonksiyonun, tanımlandığı kapsamdaki değişkenlere erişimini sürdürmesi. Kullanım: gizli durum, fabrika fonksiyonları, olay işleyicileri, React hook'larının çalışma mantığı.

## this
- Metot çağrısında (¦nesne.f()¦) ¦this = nesne¦.
- Yalın fonksiyon çağrısında ¦this¦ ¦undefined¦ (strict) / global.
- **Ok fonksiyonu** kendi ¦this¦'ini taşımaz, tanımlandığı yerden alır.
- ¦call/apply/bind¦ ile açıkça belirlenir.

## Promise ve async/await
~~~js
async function yukle() {
  try {
    const [a, b] = await Promise.all([fetch("/a"), fetch("/b")]);   // paralel
    return [await a.json(), await b.json()];
  } catch (hata) {
    console.error(hata);
    throw hata;
  }
}
~~~
- ¦Promise.all¦ (hepsi, biri hata verirse reddedilir), ¦allSettled¦ (hepsinin sonucu), ¦race¦ (ilk biten).
- Döngüde sırayla beklemek istemiyorsan ¦await¦'i döngüye koyma.
- **Event loop**: Tek iş parçacığı; mikro görevler (Promise) makro görevlerden (¦setTimeout¦) önce işlenir.

## Sınıflar ve modüller
~~~js
// matematik.js
export const PI = 3.14159;
export default function topla(a, b) { return a + b; }
// uygulama.js
import topla, { PI } from "./matematik.js";
~~~
ES modülleri durağan (static) analizle **tree shaking**'e izin verir; ¦import()¦ dinamik yüklemedir.

## Okunabilirlik ve yazılabilirlik ipuçları
Anlamlı isimler, küçük fonksiyonlar, erken dönüş (guard clause), değişmezlik (¦const¦, ¦map¦ yerine yerinde değiştirme yok), sihirli sayıları sabite çıkar, yorum "neden"i anlatsın.

## Web API'ları
¦fetch¦, ¦localStorage/sessionStorage¦, ¦URL/URLSearchParams¦, ¦IntersectionObserver¦, ¦ResizeObserver¦, ¦Clipboard¦, ¦History¦, ¦Web Workers¦. Storage'a **hassas veri koyma** (XSS ile okunur).

## Alıştırma
Bir "arama kutusu" yap: ¦debounce¦ (closure ile), ¦fetch¦ ile iptal edilebilir (¦AbortController¦) istek, sonuçları ¦async/await¦ ile göster, son aramayı ¦localStorage¦'a yaz.`,
    `**Kaynaklar:** MDN: [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [Promise kullanımı](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises), [Modüller](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), [javascript.info](https://javascript.info).`
  ),
  "se-ts1": L(
    `## Arayüz ve tip takma adı
~~~ts
interface Kullanici { id: string; ad: string; eposta?: string }       // isteğe bağlı alan
type Rol = "admin" | "editor" | "okuyucu";                            // birleşim (union)
type YoneticiKullanici = Kullanici & { rol: Rol };                    // kesişim (intersection)
~~~
- **¦interface¦**: nesne şekilleri, genişletilebilir (¦extends¦), sınıflarla ¦implements¦.
- **¦type¦**: birleşim, kesişim, demet (tuple), koşullu tipler dahil her şey.
- Pratik kural: nesne için ¦interface¦, geri kalan için ¦type¦; ekip tutarlı olsun.

## Daraltma (narrowing)
~~~ts
function yaz(x: string | number | null) {
  if (x === null) return "-";
  if (typeof x === "string") return x.toUpperCase();
  return x.toFixed(2);
}
// Ayrımcı birleşim
type Sonuc = { ok: true; veri: string } | { ok: false; hata: string };
function isle(s: Sonuc) { return s.ok ? s.veri : s.hata; }
~~~

## Yardımcı tipler
¦Partial<T>¦, ¦Required<T>¦, ¦Pick<T, K>¦, ¦Omit<T, K>¦, ¦Record<K, V>¦, ¦ReturnType<F>¦, ¦Awaited<T>¦. Mapped ve koşullu tipler:
~~~ts
type Salt<T> = { readonly [K in keyof T]: T[K] };
type Elemani<T> = T extends (infer U)[] ? U : never;
~~~

## Modüller ve ES6
¦import/export¦ (ES modülleri) kullan; eski "namespace" yerine modül tercih edilir. ¦tsconfig.json¦'da ¦strict: true¦, ¦moduleResolution¦, ¦paths¦ takma adları.

## TypeScript çalışma zamanında yoktur
Tipler derlemede silinir; dış veri (API, form) **Zod** gibi çalışma zamanı doğrulamasıyla kontrol edilir.
~~~ts
const Sema = z.object({ id: z.string(), fiyat: z.number().positive() });
type Urun = z.infer<typeof Sema>;
~~~

## Alıştırma
Bir API yanıtı için ayrımcı birleşim tipi (¦yukleniyor | basarili | hata¦) tanımla; ¦switch¦'te tüm durumları kapsadığını (¦never¦ ile kapsamlılık kontrolü) göster.`,
    `**Kaynaklar:** [TypeScript El Kitabı](https://www.typescriptlang.org/docs/handbook/intro.html), [Nesne tipleri](https://www.typescriptlang.org/docs/handbook/2/objects.html), [Modüller](https://www.typescriptlang.org/docs/handbook/modules/introduction.html), [Zod](https://zod.dev).`
  ),
  "se-ts2": L(
    `## Tasarım desenleri TypeScript ile
~~~ts
// Strategy: davranış bir arayüzle verilir
interface IndirimKurali { uygula(tutar: number): number }
const yuzde = (o: number): IndirimKurali => ({ uygula: (t) => t * (1 - o) });
const sabit = (m: number): IndirimKurali => ({ uygula: (t) => Math.max(0, t - m) });

// Factory
function kuralOlustur(tur: "yuzde" | "sabit", deger: number): IndirimKurali {
  return tur === "yuzde" ? yuzde(deger) : sabit(deger);
}

// Repository (arayüz + iki gerçekleme)
interface UrunDeposu { bul(id: string): Promise<Urun | undefined> }
~~~
- **Tipler sayesinde** desenler daha güvenli: yeni bir ¦tur¦ eklenince derleyici eksik durumları gösterir.
- Fonksiyonel dilde çoğu desen **fonksiyon + closure** ile daha sadedir.

## Hata ayıklama
- ¦tsconfig¦'te ¦sourceMap: true¦; hata ayıklayıcı TS satırında durur.
- VS Code: **JavaScript Debug Terminal**, ¦launch.json¦, kesme noktaları.
- ¦tsc --noEmit¦ ile tipleri CI'da denetle.
- ¦any¦ yerine ¦unknown¦ + daraltma; ¦as¦ ile tip zorlamayı azalt.

## Test
~~~ts
import { describe, it, expect } from "vitest";
describe("sabit indirim", () => {
  it("negatife düşmez", () => expect(sabit(500).uygula(100)).toBe(0));
});
~~~
Seçenekler: **Vitest** (Vite uyumlu, hızlı), **Jest**, Node'un yerleşik ¦node:test¦ koşucusu. Test piramidi: çok birim, az entegrasyon, çok az E2E.

## İyi pratikler
Tip uyarılarını susturma (¦// @ts-ignore¦ son çare); ortak tipleri tek yerde tut; ¦enum¦ yerine birleşim tipi düşün; public API'de açık dönüş tipi yaz.

## Alıştırma
Bir "bildirim gönderici" için Strategy deseni yaz; yeni kanal (WhatsApp) eklerken yalnızca yeni dosya eklendiğini göster; her strateji için birim test yaz.`,
    `**Kaynaklar:** [TypeScript El Kitabı](https://www.typescriptlang.org/docs/handbook/intro.html), [Node.js test çalıştırıcı](https://nodejs.org/api/test.html), [Pratik Test Piramidi (Fowler)](https://martinfowler.com/articles/practical-test-pyramid.html), [Refactoring.Guru](https://refactoring.guru/design-patterns).`
  ),
  "se-node": L(
    `## Node.js nedir?
Chrome'un V8 motoruyla JavaScript'i **tarayıcı dışında** çalıştıran çalışma zamanı. Tek iş parçacıklı, olay döngülü, **asenkron G/Ç** için güçlüdür (API'ler, gerçek zamanlı uygulamalar). CPU yoğun işlerde worker/ayrı servis düşün.

## Kurulum ve ilk program
LTS sürümü kur (¦node -v¦). ¦node uygulama.js¦ ile çalıştır. ¦npm init -y¦ ile ¦package.json¦ oluştur.

## Dosya ve klasör işlemleri
~~~js
import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";

await mkdir("veri", { recursive: true });
await writeFile("veri/notlar.json", JSON.stringify([{ id: 1 }], null, 2), "utf8");
const icerik = JSON.parse(await readFile("veri/notlar.json", "utf8"));
console.log(await readdir("veri"));
~~~
- Yolları ¦node:path¦ ile birleştir (¦path.join¦).
- **Büyük dosyalar** için akış (¦createReadStream¦) kullan, hepsini belleğe alma.
- Kullanıcıdan gelen dosya adlarını **doğrula** (path traversal: ¦../../etc/passwd¦).

## HTTP sunucusu (çıplak)
~~~js
import http from "node:http";
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ merhaba: "dünya" }));
}).listen(3000);
~~~
Gerçek projede Express/Fastify/Next.js kullanılır; bu örnek temeli gösterir.

## Modüller ve paketler
ES modülleri (¦"type": "module"¦ veya ¦.mjs¦) ve CommonJS (¦require¦) bir arada görülür. Paket kurarken bakım durumu, lisans ve güvenlik denetimine bak (¦npm audit¦).

## Masaüstü uygulama notu
Programdaki **Windows Forms** başlığı masaüstü içindir. JavaScript dünyasında karşılığı **Electron** veya **Tauri** ile web teknolojisinden masaüstü uygulaması yapmaktır; hedefin web olduğu için burada derinleşilmez.

## Alıştırma
Komut satırından çalışan bir "not defteri" yaz: ¦node notlar.js ekle "metin"¦ komutları, JSON dosyasında saklama, hata durumları.`,
    `**Kaynaklar:** [Node.js API](https://nodejs.org/docs/latest/api/), [fs](https://nodejs.org/api/fs.html), [http](https://nodejs.org/api/http.html), [Node.js Learn](https://nodejs.org/en/learn), [roadmap.sh — Node.js](https://roadmap.sh/nodejs).`
  ),
  "se-express": L(
    `## Express temel
~~~ts
import express from "express";
const app = express();
app.use(express.json());                              // middleware: gövdeyi ayrıştır

app.get("/api/urunler/:id", async (req, res, next) => {
  try {
    const urun = await urunServisi.bul(req.params.id);
    if (!urun) return res.status(404).json({ kod: "BULUNAMADI" });
    res.json(urun);
  } catch (e) { next(e); }                            // hata yakalayıcıya ilet
});

app.use((err, _req, res, _next) => res.status(500).json({ kod: "SUNUCU_HATASI" }));  // 4 parametre
app.listen(3000);
~~~
**Middleware** zinciri: günlükleme, kimlik doğrulama, doğrulama, hata yakalama sırayla çalışır.

## MVC ve katmanlı (N-tier) mimari
~~~text
İstek → Controller (HTTP: girdi/çıktı)
          → Service (iş kuralları)
              → Repository (veri erişimi) → Veritabanı
~~~
| Katman | Sorumluluk | Bilmemesi gereken |
|---|---|---|
| Controller/Route | HTTP, doğrulama, durum kodu | İş kuralı, SQL |
| Service | İş kuralları, transaction sınırı | HTTP nesneleri |
| Repository | Veri erişimi | HTTP, iş kuralı |

Bağımlılıklar **içeri** doğru akar; her katman test edilebilir. Aşırı katmanlama küçük projeyi şişirir: ihtiyaçla büyüt.

## Veritabanı bağlantısı
- Bağlantı **havuzu** (pool) kullan; her istekte yeni bağlantı açma.
- Bağlantı dizesini **ortam değişkeninden** oku.
- Parametreli sorgu/ORM kullan (SQL injection'ı önler).

## Yapılandırma
¦.env¦ dosyaları yalnızca yerelde; üretimde platform gizli yönetimi. Yapılandırmayı tek modülde doğrula (Zod).

## Alıştırma
¦/api/gorevler¦ için CRUD API yaz: route → service → repository ayrımı, hata yakalayıcı, bellek içi depo; sonra depoyu PostgreSQL ile değiştir ve service/controller'ın değişmediğini göster.`,
    `**Kaynaklar:** [Express — Yönlendirme](https://expressjs.com/en/guide/routing.html), [Fowler — Katmanlama](https://martinfowler.com/bliki/PresentationDomainDataLayering.html), [roadmap.sh — Backend](https://roadmap.sh/backend).`
  ),
  "se-api": L(
    `## REST ve HTTP
- Kaynaklar URL ile adreslenir: ¦/siparisler/42¦; işlem HTTP yöntemiyle: ¦GET, POST, PUT/PATCH, DELETE¦.
- Durum kodları: ¦200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500¦.
- ¦GET¦ güvenli ve idempotent olmalı; ¦PUT/DELETE¦ idempotent.

## Model bağlama ve doğrulama
~~~ts
const SiparisGirdi = z.object({
  musteriId: z.string().uuid(),
  kalemler: z.array(z.object({ urunId: z.string(), adet: z.number().int().positive() })).min(1),
});
app.post("/api/siparisler", async (req, res) => {
  const s = SiparisGirdi.safeParse(req.body);
  if (!s.success) return res.status(422).json({ kod: "DOGRULAMA", detay: s.error.flatten() });
  const siparis = await siparisServisi.olustur(s.data);
  res.status(201).json(siparis);
});
~~~
**Fiyatı istemciden alma**; sunucu DB'den okur.

## Bağımlılık enjeksiyonu (DI) ve IoC
Bağımlılıkları kendin ¦new¦'lemek yerine **dışarıdan ver**: constructor enjeksiyonu. ASP.NET'te hazır bir IoC kapsayıcısı vardır; Node'da çoğu zaman **elle** (composition root'ta) veya hafif kütüphanelerle yapılır:
~~~ts
const depo = new PrismaSiparisDeposu(prisma);
const servis = new SiparisServisi(depo);
const kontrol = new SiparisKontrol(servis);
~~~

## Versiyonlama
- URL: ¦/v1/siparisler¦ (basit, yaygın).
- Başlık/medya türü ile (daha temiz, daha az görünür).
- Kırıcı olmayan değişiklikleri (yeni alan) sürümsüz yap; kırıcıları yeni sürüme taşı ve eskiyi kullanımdan kaldırma takvimi ver.

## Kimlik doğrulama ve yetkilendirme
Oturum çerezi veya JWT; **yetki her uç noktada** sunucuda kontrol edilir (RBAC). ¦401¦ = kimlik yok, ¦403¦ = kimlik var ama izin yok.

## Hata modeli ve belge
Tek tip hata gövdesi; **OpenAPI** ile sözleşmeyi yaz (istemci kodu ve test üretimi kolaylaşır).

## Alıştırma
Sipariş API'si için OpenAPI belgesi yaz; ¦POST¦ uç noktasını doğrulama + 201/422/409 yanıtlarıyla uygula; sürüm 2'de bir alanın adını değiştir ve geçiş stratejini yaz.`,
    `**Kaynaklar:** [RESTful API Rehberi](https://restfulapi.net), [RFC 9110 — HTTP Anlambilimi](https://www.rfc-editor.org/rfc/rfc9110), [OpenAPI](https://swagger.io/docs/specification/about/), [Zod](https://zod.dev). Durum kodu seçimleri (409/422) projeye göre standardize edilir.`
  ),
  "se-socket": L(
    `## Neden gerçek zamanlı?
Sohbet, bildirim, canlı pano, oyun, ortak düzenleme: sunucunun **kendiliğinden** istemciye veri göndermesi gerekir.

## Seçenekler
| Teknik | Yön | Not |
|---|---|---|
| Polling | İstemci sorar | Basit, verimsiz |
| **SSE** (Server-Sent Events) | Sunucu → istemci | Tek yönlü, basit, HTTP üzerinde |
| **WebSocket** | Çift yönlü | Kalıcı bağlantı |
| **Socket.IO** | Çift yönlü + yeniden bağlanma, odalar, yedek taşıma | WebSocket üstünde kütüphane |

## Socket.IO örneği
~~~ts
// sunucu
import { Server } from "socket.io";
const io = new Server(3001, { cors: { origin: "https://uygulama.com" } });
io.on("connection", (soket) => {
  soket.on("odaya-katil", (oda: string) => soket.join(oda));
  soket.on("mesaj", ({ oda, metin }) => io.to(oda).emit("mesaj", { metin, zaman: Date.now() }));
});

// istemci
import { io } from "socket.io-client";
const soket = io("https://sunucu.com");
soket.emit("odaya-katil", "genel");
soket.on("mesaj", (m) => ekle(m));
~~~

## Üretim konuları
- **Kimlik doğrulama**: Bağlanırken token doğrula; oda yetkisini sunucuda kontrol et.
- **Yeniden bağlanma ve kayıp mesaj**: İstemci son mesaj kimliğini gönderip eksikleri alsın.
- **Ölçekleme**: Birden çok sunucu örneğinde ortak bir aracı (Redis adapter gibi) gerekir; yapışkan oturum (sticky session) kuralları.
- **Hız sınırlama** ve mesaj boyutu limiti.
- Sunucusuz platformlarda (Vercel Functions) kalıcı WebSocket sunucusu çalıştırılamaz; ayrı bir servis veya yönetilen bir gerçek zamanlı hizmet kullanılır.

## Alıştırma
Odalı bir sohbet yap: kullanıcı adı, katılma/ayrılma bildirimi, yazıyor göstergesi. Ağ bağlantısını kesip yeniden bağla; mesajların kaybolmadığını göster.`,
    `**Kaynaklar:** [Socket.IO dokümantasyonu](https://socket.io/docs/v4/). Sunucusuz ortamlarda WebSocket kısıtı platformdan platforma değişir; kullandığın platformun dokümanına bak.`
  ),
  "se-orm": L(
    `## ORM nedir?
Nesne–ilişkisel eşleme: tabloları kod nesneleriyle ilişkilendirir. ASP.NET'teki **Entity Framework Core**, JavaScript dünyasında **Prisma**, **Drizzle**, **TypeORM** gibi araçlarla karşılanır. Bu repo **Prisma 7 + PostgreSQL** kullanır.

## Prisma şeması (code-first)
~~~prisma
model Musteri {
  id        String    @id @default(cuid())
  ad        String
  siparisler Siparis[]
}
model Siparis {
  id         String   @id @default(cuid())
  tutar      Decimal  @db.Decimal(10, 2)
  musteri    Musteri  @relation(fields: [musteriId], references: [id])
  musteriId  String
  @@index([musteriId])
}
~~~
- **Code-first**: Önce şemayı yaz, **migrasyon** üret/uygula (¦prisma migrate dev¦, üretimde ¦migrate deploy¦).
- **DB-first**: Var olan veritabanından şema çıkar (¦prisma db pull¦).

## Sorgular (LINQ karşılığı)
~~~ts
const oz = await prisma.musteri.findMany({
  where: { siparisler: { some: { tutar: { gt: 1000 } } } },
  include: { siparisler: { orderBy: { tutar: "desc" }, take: 3 } },
  orderBy: { ad: "asc" },
});
const toplam = await prisma.siparis.aggregate({ _sum: { tutar: true }, where: { musteriId } });
~~~
| LINQ | Prisma / JS |
|---|---|
| ¦Where¦ | ¦where¦ |
| ¦Include¦ | ¦include¦ |
| ¦Select¦ | ¦select¦ |
| ¦OrderBy¦ | ¦orderBy¦ |
| ¦GroupBy¦ | ¦groupBy¦ veya ham SQL / dizi ¦reduce¦ |

## İlişki yönetimi
¦1–N¦, ¦N–N¦ (örtük/açık ara tablo), silme davranışı (¦onDelete¦). Transaction: ¦prisma.$transaction([...])¦.

## N+1 sorunu
Listede her eleman için ayrı sorgu atmak. Çözüm: ¦include¦/¦select¦ ile tek seferde getir veya toplu sorgu.

## Ne zaman ham SQL?
Karmaşık rapor/performans kritik sorgularda ¦$queryRaw¦ (parametreli, SQL injection'a dikkat).

## Alıştırma
Müşteri–sipariş–ürün şemasını Prisma ile yaz, migrasyon uygula, "en çok harcayan 5 müşteri" sorgusunu hem Prisma ile hem ham SQL ile yaz; sorgu sayısını günlüğe bakarak karşılaştır.`,
    `**Kaynaklar:** [Prisma — CRUD](https://www.prisma.io/docs/orm/prisma-client/queries/crud), [Prisma — İlişkiler](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations). LINQ ↔ Prisma eşleştirmesi öğrenme kolaylığı için yaklaşık karşılıkları gösterir.`
  ),
  "se-ddd": L(
    `## Domain Driven Design (DDD) — kısaca
İş alanının (domain) diliyle ve modeliyle yazılım tasarlama yaklaşımı.

| Kavram | Anlamı |
|---|---|
| **Ortak dil (ubiquitous language)** | Geliştirici ve iş birimi aynı terimleri kullanır |
| **Bağlı bağlam (bounded context)** | Bir modelin geçerli olduğu sınır (Sipariş'teki "Ürün" ≠ Depo'daki "Ürün") |
| **Varlık (entity)** | Kimliği olan nesne (Müşteri#42) |
| **Değer nesnesi** | Kimliği olmayan, değiştirilemez (Para, Adres) |
| **Aggregate** | Tutarlılık sınırı; dışarıdan yalnızca kökü ile erişilir (Sipariş + kalemleri) |
| **Repository** | Aggregate'i saklama/çağırma soyutlaması |
| **Domain servisi / olayı** | Tek varlığa sığmayan kural / "Sipariş verildi" gibi olay |

Karmaşık iş kuralı olan sistemlerde değerlidir; basit CRUD'da gereksiz mimari yükü getirir.

## Test
- **Birim**: saf iş kuralları (çok sayıda, hızlı).
- **Entegrasyon**: API + gerçek/sahte veritabanı.
- **E2E**: kritik kullanıcı yolculukları.
- Hata ayıklama: kesme noktaları, yapısal günlük, istek kimliği (correlation id).

## Dağıtım yöntemleri
| Yöntem | Not |
|---|---|
| Platform (Vercel, Render, Fly) | git push → otomatik dağıtım |
| Container (Docker) | Aynı imaj her yerde; Kubernetes/ECS'e geçiş yolu |
| Sanal makine/VPS | Tam kontrol, bakım sende |

**12-faktör uygulama ilkeleri**: tek kod tabanı, bağımlılıkları belirt, yapılandırmayı ortamdan al, günlükleri akış olarak ele al, yönetim işlerini tek seferlik süreç olarak çalıştır.

## Mikroservis uyarısı
Başlangıçta **modüler monolit** çoğu ekip için daha az risklidir; servis sınırlarını gerçek ihtiyaç doğurunca çıkar.

## Alıştırma
Bir "randevu" alanı için bounded context'leri, aggregate'leri ve olayları (¦RandevuOlusturuldu¦, ¦RandevuIptalEdildi¦) kâğıt üzerinde modelle; ardından yalnızca bir aggregate'i (¦Randevu¦) kodla ve kuralları (çakışma olmaması) birim testle koru.`,
    `**Kaynaklar:** [Fowler — Domain Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html), [Mikroservisler](https://martinfowler.com/articles/microservices.html), [Twelve-Factor App](https://12factor.net/tr/), [Pratik Test Piramidi](https://martinfowler.com/articles/practical-test-pyramid.html).`
  ),
};
