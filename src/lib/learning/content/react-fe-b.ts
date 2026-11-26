import type { ModuleContent } from "./types";
import { lessonBody as L } from "./md";

type Bodies = ModuleContent["bodies"];

export const reactFeBodiesB: Bodies = {
  "fe-render-perf": L(
    `## Önce ölç
**Core Web Vitals** (kullanıcı deneyimini ölçen üç temel metrik):

| Metrik | Neyi ölçer? | "İyi" eşiği |
|---|---|---|
| **LCP** (Largest Contentful Paint) | En büyük içeriğin görünme süresi | ≤ 2,5 sn |
| **INP** (Interaction to Next Paint) | Etkileşime yanıt süresi | ≤ 200 ms |
| **CLS** (Cumulative Layout Shift) | Beklenmedik yerleşim kayması | ≤ 0,1 |

Araçlar: Lighthouse (laboratuvar verisi), PageSpeed Insights / CrUX (gerçek kullanıcı verisi), DevTools Performance.

~~~svg Core Web Vitals eşikleri
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 170' font-family='system-ui,sans-serif' font-size='12'><rect width='480' height='170' fill='white'/><text x='200' y='20' text-anchor='middle' fill='#444' font-weight='600'>İyi</text><text x='310' y='20' text-anchor='middle' fill='#444' font-weight='600'>Geliştirilmeli</text><text x='420' y='20' text-anchor='middle' fill='#444' font-weight='600'>Kötü</text><text x='8' y='60' fill='#222'>LCP (en büyük içerik)</text><rect x='150' y='36' width='100' height='34' rx='6' fill='#22a559'/><text x='200' y='58' text-anchor='middle' fill='white' font-weight='600'>≤ 2,5 sn</text><rect x='260' y='36' width='100' height='34' rx='6' fill='#f2b01e'/><text x='310' y='58' text-anchor='middle' fill='white' font-weight='600'>2,5–4 sn</text><rect x='370' y='36' width='100' height='34' rx='6' fill='#e0483e'/><text x='420' y='58' text-anchor='middle' fill='white' font-weight='600'>> 4 sn</text><text x='8' y='104' fill='#222'>INP (etkileşim)</text><rect x='150' y='80' width='100' height='34' rx='6' fill='#22a559'/><text x='200' y='102' text-anchor='middle' fill='white' font-weight='600'>≤ 200 ms</text><rect x='260' y='80' width='100' height='34' rx='6' fill='#f2b01e'/><text x='310' y='102' text-anchor='middle' fill='white' font-weight='600'>200–500 ms</text><rect x='370' y='80' width='100' height='34' rx='6' fill='#e0483e'/><text x='420' y='102' text-anchor='middle' fill='white' font-weight='600'>> 500 ms</text><text x='8' y='148' fill='#222'>CLS (kayma)</text><rect x='150' y='124' width='100' height='34' rx='6' fill='#22a559'/><text x='200' y='146' text-anchor='middle' fill='white' font-weight='600'>≤ 0,1</text><rect x='260' y='124' width='100' height='34' rx='6' fill='#f2b01e'/><text x='310' y='146' text-anchor='middle' fill='white' font-weight='600'>0,1–0,25</text><rect x='370' y='124' width='100' height='34' rx='6' fill='#e0483e'/><text x='420' y='146' text-anchor='middle' fill='white' font-weight='600'>> 0,25</text></svg>
~~~

## Sık nedenler ve çözümler
- **Yavaş LCP**: Büyük hero görsel → modern format (WebP/AVIF), doğru boyut, ¦fetchpriority="high"¦; yavaş sunucu (TTFB) → önbellek/CDN; render-engelleyici CSS/JS.
- **Kötü INP**: Uzun JS görevleri (>50 ms) ana iş parçacığını kilitler → işi böl, ağır hesabı ertele/worker'a taşı, gereksiz render'ı azalt.
- **CLS**: Boyutsuz görsel/iframe, geç yüklenen font, üstüne eklenen reklam → ¦width/height¦ veya ¦aspect-ratio¦, ¦font-display¦, yer ayır.

## Tarayıcı render süreci özeti
Render-engelleyici kaynakları azalt, kritik CSS'i erken ver, JS'i ¦defer¦ et, görselleri tembel yükle (görünüm alanı dışındakiler).

## React'e özgü
- Gereksiz yeniden render'ı **Profiler** ile bul; ¦React.memo¦/¦useMemo¦ yalnızca ölçümle.
- Uzun listeler için sanallaştırma (¦@tanstack/react-virtual¦).
- Next.js'te: ¦next/image¦, ¦next/font¦, Server Components ve akış (streaming) ilk yüklemeyi hafifletir.

## Alıştırma
Kendi sitende Lighthouse raporu al; en kötü metrik için bir hipotez yaz, bir değişiklik yap, tekrar ölç. Önce/sonra değerleri tabloya koy.`,
    `**Kaynaklar:** [web.dev — Core Web Vitals](https://web.dev/articles/vitals), [web.dev — Performans](https://web.dev/learn/performance), [MDN — Kritik render yolu](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path). Eşik değerleri (LCP 2,5 sn, INP 200 ms, CLS 0,1) web.dev'in "iyi" sınırlarıdır; Google bunları zaman içinde güncelleyebilir.`
  ),
  "fe-lazy": L(
    `## Fikir
Kullanıcının **şimdi gerekmeyen** kodu/kaynağı ilk yüklemede göndermemek.

## Kod bölme (code splitting)
~~~tsx
import { lazy, Suspense } from "react";
const Grafik = lazy(() => import("./Grafik"));   // ayrı parça (chunk)

export function Rapor() {
  return (
    <Suspense fallback={<p>Grafik yükleniyor…</p>}>
      <Grafik />
    </Suspense>
  );
}
~~~

## Next.js'te
~~~tsx
import dynamic from "next/dynamic";
const Harita = dynamic(() => import("./Harita"), { ssr: false, loading: () => <p>Harita…</p> });
~~~
- Next.js zaten **rota bazında** kod böler; her sayfa kendi paketini yükler.
- Server Components'te kullanılan kütüphaneler istemci paketine **girmez** (örn. tarih/markdown işleyicileri).
- ¦dynamic¦ ile ¦ssr: false¦ yalnızca istemci bileşenlerde ve tarayıcıya özel (¦window¦ kullanan) kütüphanelerde mantıklıdır.

## Tembel yükleme (lazy loading)
- Görsel: ¦<img loading="lazy">¦ veya ¦next/image¦ (varsayılan tembel; ilk ekran görseli için ¦priority¦).
- İçerik: Görünüm alanına girince yükle (IntersectionObserver), modal içeriği açılınca yükle.

## Dikkat
- Her şeyi bölmek **çok sayıda küçük istek** demektir; kritik yol üzerindekileri bölme.
- Tembel yüklenen bileşen için boyut ayır (CLS).
- Bölme sonrası **ölç**: paket analizi ile (örn. ¦@next/bundle-analyzer¦ veya ¦next experimental-analyze¦ — sürüm dokümanını kontrol et) gerçek kazancı gör.

## Alıştırma
Ağır bir kütüphaneyi (grafik, editör) yalnızca açıldığında yükleyen bir bileşen yaz; önce/sonra ilk yük boyutunu (First Load JS) karşılaştır.`,
    `**Kaynaklar:** [React — lazy](https://react.dev/reference/react/lazy), Next.js dokümanı "Lazy Loading" rehberi (¦node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md¦). Paket analiz aracının adı ve bayrakları sürüme göre değişebilir; güncel dokümana bak.`
  ),
  "fe-graphql": L(
    `## GraphQL nedir?
İstemcinin **tam olarak hangi alanları istediğini** tek bir uçtan (¦/graphql¦) belirttiği sorgu dili ve çalışma zamanı.

~~~graphql
query Urun($id: ID!) {
  urun(id: $id) {
    ad
    fiyat
    kategori { ad }
  }
}
~~~

## REST ile karşılaştırma
| | REST | GraphQL |
|---|---|---|
| Uç nokta | Çok (¦/urunler¦, ¦/siparisler¦) | Tek |
| Veri miktarı | Sabit yanıt (fazla/eksik veri olabilir) | İstemci seçer |
| Önbellek | HTTP önbelleği doğal | İstemci önbelleği (Apollo/urql) gerekir |
| Şema | OpenAPI ile tanımlanabilir | **Tür sistemi şemanın kendisidir** |
| Zorluk | Çoklu istek (waterfall) | N+1 sorgu, karmaşık sorgu maliyeti, yetkilendirme |

## Kavramlar
- **Query** (oku), **Mutation** (değiştir), **Subscription** (canlı).
- **Schema** ve **resolver**: Her alan bir fonksiyonla çözülür.
- **N+1 sorunu**: Liste için bir, her eleman için ayrı sorgu. Çözüm: DataLoader ile toplu (batch) yükleme.

## React'te
~~~tsx
const { data, loading, error } = useQuery(URUN, { variables: { id } });
~~~
Apollo Client normalize edilmiş önbellek tutar; mutasyon sonrası önbelleği güncellemek ayrı bir konudur.

## Ne zaman GraphQL?
Çok sayıda istemci (web + mobil) farklı veri şekilleri istiyorsa veya birçok kaynaktan veri birleştiriliyorsa. Tek istemcili, basit CRUD'da REST + Zod + TanStack Query genelde daha sade.

## Güvenlik
Sorgu derinliği/karmaşıklığı sınırı, hız sınırlama ve **alan düzeyinde yetkilendirme**; introspection'ı üretimde sınırlamayı düşün.

## Alıştırma
Herkese açık bir GraphQL API'ye (ör. kendi kurduğun Apollo Server) üç alanlı bir sorgu at; aynı veriyi REST ile çekmek için kaç istek gerektiğini say.`,
    `**Kaynaklar:** [GraphQL — Öğren](https://graphql.org/learn/), [Apollo Client](https://www.apollographql.com/docs/react). REST/GraphQL karşılaştırması genel kabul gören tasarım farklarıdır.`
  ),
  "fe-firebase": L(
    `## Firebase nedir?
Google'ın "Backend-as-a-Service" platformu: **Authentication**, **Cloud Firestore** (NoSQL belge veritabanı), **Realtime Database**, **Storage**, **Hosting**, **Cloud Functions**.

## Temel akış (web, modüler SDK)
~~~ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const app = initializeApp({ /* firebaseConfig */ });
const db = getFirestore(app);

await addDoc(collection(db, "gorevler"), { baslik: "Ders çalış", bitti: false });
const snap = await getDocs(collection(db, "gorevler"));
const gorevler = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
~~~

## Kimlik doğrulama
E-posta/şifre, Google ile giriş vb. Oturum açıkken ¦request.auth.uid¦ güvenlik kurallarında kullanılabilir.

## Güvenlik kuralları (en kritik konu)
İstemci doğrudan veritabanına yazdığı için **koruma kurallarda** olur:

~~~text
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /gorevler/{id} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.sahip;
    }
  }
}
~~~
"Test modu" (herkese açık okuma/yazma) ile yayına çıkmak sık görülen ve tehlikeli bir hatadır.

## Ne zaman? Ne zaman değil?
| Uygun | Uygun değil |
|---|---|
| Prototip, küçük uygulama, gerçek zamanlı eşzamanlama | Karmaşık ilişkisel sorgular, raporlama, karmaşık transaction |
| Mobil + web ortak backend | Sağlayıcıya bağımlılık istemediğin projeler |

Bu sitede kullanılan Neon (PostgreSQL) + Prisma, ilişkisel veri için daha uygun bir tercihtir.

## Alıştırma
Firestore'da bir koleksiyon oluştur, yalnızca sahibinin okuyup yazabildiği bir kural yaz ve Firebase Emulator ile iki farklı kullanıcıyla dene.`,
    `**Kaynak:** [Firebase dokümantasyonu](https://firebase.google.com/docs). SDK ve kural sözdizimi örnekleri resmi dokümanın temel akışına dayanır; sürüm farkı olabileceğinden kurulumda güncel "Get started" sayfasını izle. Ücret ve kota bilgileri sık değiştiği için yazılmadı.`
  ),
  "fe-jest": L(
    `## Test yapısı (AAA)
**Arrange** (hazırla) → **Act** (çalıştır) → **Assert** (doğrula).

~~~ts
import { toplamTutar } from "./siparis";

describe("toplamTutar", () => {
  it("kalemleri toplar", () => {
    const kalemler = [{ adet: 2, fiyat: 100 }, { adet: 1, fiyat: 50 }];
    expect(toplamTutar(kalemler)).toBe(250);
  });
  it("boş listede 0 döner", () => {
    expect(toplamTutar([])).toBe(0);
  });
});
~~~

## Jest özellikleri
¦describe/it/expect¦, **mock** (¦jest.fn()¦, ¦jest.mock()¦), zamanlayıcı sahteleme (¦jest.useFakeTimers()¦), snapshot (dikkatli kullan), kapsam raporu (¦--coverage¦).

## React Testing Library
Kullanıcının gördüğü gibi test et: rol, etiket, metin.

~~~tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("sepete ekler", async () => {
  render(<Urun ad="Klavye" />);
  await userEvent.click(screen.getByRole("button", { name: /sepete ekle/i }));
  expect(screen.getByText("Sepette: 1")).toBeInTheDocument();
});
~~~
Sorgu önceliği: ¦getByRole¦ → ¦getByLabelText¦ → ¦getByText¦ → (son çare) ¦getByTestId¦.

## Jest mi, Vitest mi?
Vitest, Jest ile benzer API sunar ve Vite/ESM ile hızlı çalışır; mevcut kurumsal projelerde Jest hâlâ yaygındır. Kavramlar aynıdır.

## Neyi test etmeli?
İş kuralları (hesaplama, doğrulama), kritik bileşen davranışları, hata durumları. Uygulama ayrıntısını (iç state adını) değil davranışı test et.

## Alıştırma
Bir sepet toplamı fonksiyonu için 5 birim testi, bir "Sepete ekle" butonu için 2 bileşen testi yaz; bir hatayı bilerek koyup testin yakaladığını göster.`,
    `**Kaynaklar:** [Jest](https://jestjs.io/docs/getting-started), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Sorgu önceliği Testing Library'nin resmi önerisidir.`
  ),
  "fe-cypress": L(
    `## Uçtan uca (E2E) test nedir?
Gerçek tarayıcıda, kullanıcı gibi akışı baştan sona dener: giriş → ürün ekle → ödeme.

## Cypress örneği
~~~ts
describe("giriş", () => {
  it("geçerli bilgiyle panele gider", () => {
    cy.visit("/giris");
    cy.get("[name=eposta]").type("test@ornek.com");
    cy.get("[name=sifre]").type("gizli123");
    cy.contains("button", "Giriş yap").click();
    cy.url().should("include", "/panel");
    cy.contains("Hoş geldin");
  });
});
~~~

## İyi pratikler
- **Seçici stratejisi**: Rol/metin veya ¦data-cy¦ öznitelikleri; CSS sınıfına bağlanma.
- **Sabit bekleme yok**: ¦cy.wait(2000)¦ yerine bir koşulu bekle (Cypress, ¦should¦ ile otomatik yeniden dener).
- **Ağ kontrolü**: ¦cy.intercept()¦ ile yanıtı sahtele veya beklenen isteği doğrula.
- **Veri yalıtımı**: Her test kendi verisini kursun/temizlesin; testler birbirine bağımlı olmasın.
- **Az ama kritik**: Test piramidinin tepesi dar olmalı; hepsini E2E yapma.

## Cypress mi, Playwright mı?
| | Cypress | Playwright |
|---|---|---|
| Çalışma modeli | Tarayıcı içinde çalışır, gelişmiş test arayüzü | Tarayıcıyı dışarıdan sürer; çoklu sekme/bağlam |
| Tarayıcılar | Chromium, Firefox, WebKit (deneysel) | Chromium, Firefox, WebKit |
| Paralel koşu | Bulut/ücretli paralelleştirme ile kolaylaşır | Yerleşik paralel çalışma |

Bu depoda E2E için Playwright kullanılıyor; kavramlar iki araçta da aynıdır.

## Alıştırma
Kritik bir akış için (ör. kayıt ol → giriş yap) bir E2E testi yaz; ağ yanıtını ¦intercept¦ ile sahteleyen bir hata senaryosu ekle.`,
    `**Kaynaklar:** [Cypress dokümantasyonu](https://docs.cypress.io/app/get-started/why-cypress), [Playwright](https://playwright.dev/docs/intro). Tablodaki karşılaştırma genel mimari farkları anlatır; destek ve fiyatlandırma ayrıntıları değişebilir, güncel dokümanı kontrol et.`
  ),
  "fe-cors": L(
    `## Origin nedir?
**Origin = şema + alan adı + port.** ¦https://a.com:443¦ ve ¦https://api.a.com¦ farklı origin'dir.

## Same-Origin Politikası
Bir origin'in script'i, başka bir origin'in **yanıtını okuyamaz**. Bu, kötü bir sitenin bankanın sayfasını okumasını önler.

## CORS ne yapar?
Sunucu, başka bir origin'in yanıtı okumasına **izin verir**: ¦Access-Control-Allow-Origin: https://uygulama.com¦.

### Basit istek
¦GET/POST¦ + sınırlı başlıklar: tarayıcı isteği gönderir; yanıtta izin başlığı yoksa **JS yanıtı okuyamaz**.

### Preflight (ön kontrol)
¦PUT/DELETE¦, ¦application/json¦ veya özel başlık varsa tarayıcı önce ¦OPTIONS¦ gönderir:
~~~http
OPTIONS /api/urunler
Origin: https://uygulama.com
Access-Control-Request-Method: PATCH
Access-Control-Request-Headers: content-type

200
Access-Control-Allow-Origin: https://uygulama.com
Access-Control-Allow-Methods: GET, PATCH
Access-Control-Allow-Headers: content-type
Access-Control-Max-Age: 600
~~~

### Çerezli (credentials) istekler
¦fetch(url, { credentials: "include" })¦ → sunucu ¦Access-Control-Allow-Credentials: true¦ vermeli ve ¦Allow-Origin¦ **joker (*) olmamalı**.

![Basit CORS isteği — Görsel: MDN Web Docs (CC BY-SA)](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

![Preflight (ön kontrol) isteği — Görsel: MDN Web Docs (CC BY-SA)](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

![Kimlik bilgili (credentials) CORS isteği — Görsel: MDN Web Docs (CC BY-SA)](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

## Sık yanılgılar
- **CORS bir kimlik doğrulama/koruma mekanizması değildir**; tarayıcıyı kısıtlar, ¦curl¦ veya sunucu isteğini engellemez.
- ¦Access-Control-Allow-Origin: *¦ ile çerezli istek çalışmaz.
- CORS hatası çoğu zaman sunucunun hata verdiğini **gizler**; Network sekmesinde gerçek yanıtı kontrol et.

## Next.js'te
Aynı origin'deki ¦/api¦ ve Server Actions için CORS gerekmez. Farklı origin'den kullanılacak Route Handler'a başlıkları kendin eklersin (veya ¦proxy.ts¦ ile).

## Alıştırma
İki farklı porttaki küçük Express uygulamasıyla bir CORS hatası üret; sonra izin başlıklarını yalnızca gereken origin ve yöntem için ekle.`,
    `**Kaynak:** [MDN — CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS). Preflight koşulları ve ¦credentials¦ kuralları MDN'deki tanımlarla uyumludur.`
  ),
  "fe-xss-csrf": L(
    `## XSS (Cross-Site Scripting)
Saldırgan, sayfana **kendi JavaScript'ini** çalıştırtır → çerez/oturum çalar, kullanıcı adına işlem yapar.

| Tür | Nasıl? |
|---|---|
| **Stored** | Kötü içerik veritabanına kaydedilir (yorum, profil) ve herkese gösterilir |
| **Reflected** | URL parametresi sayfaya kaçışsız yansıtılır |
| **DOM-based** | İstemci kodu ¦innerHTML¦ gibi tehlikeli bir "sink"e girdi yazar |

### Savunma
- **Çıktıyı kaçışla**: React JSX değerleri varsayılan olarak kaçışlar. Tehlike: ¦dangerouslySetInnerHTML¦, ¦href={kullaniciGirdisi}¦ (¦javascript:¦ URL'si), ¦eval¦.
- HTML göstermen **gerekiyorsa**: güvenilir bir sanitizer (DOMPurify gibi) kullan.
- **CSP** (Content-Security-Policy): Hangi kaynaklardan script çalışabileceğini sınırlar (nonce tabanlı).
- Çerezlere ¦HttpOnly¦ ekle: script oturum çerezini okuyamaz.

## CSRF (Cross-Site Request Forgery)
Kullanıcı oturumluyken, kötü bir site tarayıcının **çerezi otomatik göndermesini** kullanarak onun adına istek yaptırır.

### Savunma
- Çerez: ¦SameSite=Lax¦ (veya ¦Strict¦). Modern tarayıcılarda varsayılan ¦Lax¦'tir ama açıkça yaz.
- **CSRF token** veya özel başlık doğrulaması; durum değiştiren işlemler için ¦GET¦ kullanma.
- Origin/Referer kontrolü.
- Next.js Server Actions yalnızca ¦POST¦ ile çağrılır ve ¦Origin¦ ile ¦Host¦ başlıklarını karşılaştırarak CSRF riskini azaltır; yine de her action'da yetki kontrolü gerekir.

~~~mermaid CSRF: tarayıcı çerezi otomatik gönderir
sequenceDiagram
  participant K as Kullanıcı (giriş yapmış)
  participant Z as Kötü site
  participant B as Banka
  K->>Z: kötü siteyi ziyaret eder
  Z-->>K: gizli form / istek
  K->>B: POST /havale (oturum çerezi otomatik eklenir)
  B-->>K: işlem yapıldı!
  Note over B: Savunma: SameSite çerez, CSRF token, Origin kontrolü
~~~

## Çerez öznitelikleri özeti
¦HttpOnly¦ (JS okuyamaz), ¦Secure¦ (yalnızca HTTPS), ¦SameSite¦ (siteler arası gönderim), ¦Path/Domain/Max-Age¦.

## Alıştırma (yalnızca kendi yerel uygulamanda)
Bir yorum alanına ¦<img src=x onerror=alert(1)>¦ yaz; React ile metin olarak gösterildiğinde çalışmadığını, ¦dangerouslySetInnerHTML¦ ile çalıştığını gör ve ardından sanitizer ile engelle.`,
    `**Kaynaklar:** [MDN — XSS](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS), [MDN — CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP), [OWASP XSS Önleme](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), [OWASP CSRF Önleme](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html). Server Actions'ın Origin/Host karşılaştırması Next.js veri güvenliği rehberinde anlatılır (¦node_modules/next/dist/docs/01-app/02-guides/data-security.md¦). Alıştırma yalnızca kendi yerel ortamın içindir.`
  ),
  "fe-pwa": L(
    `## PWA nedir?
Web uygulamasını **kurulabilir**, **çevrimdışı çalışabilir** ve **bildirim alabilir** yapan teknikler bütünü; mağaza gerektirmez.

## Üç bileşen
1. **HTTPS**
2. **Web App Manifest** (¦manifest.webmanifest¦): ad, ikonlar, ¦start_url¦, ¦display: "standalone"¦, tema rengi
3. **Service Worker**: Ağ isteklerini araya giren, önbellekleyen arka plan script'i

~~~json
{
  "name": "Kişisel Panel",
  "short_name": "Panel",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#111812",
  "icons": [{ "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" }]
}
~~~

## Service worker temel akışı
~~~js
self.addEventListener("install", (e) => e.waitUntil(caches.open("v1").then((c) => c.addAll(["/", "/offline"]))));
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
~~~

## Önbellek stratejileri
| Strateji | Ne zaman |
|---|---|
| Cache First | Değişmeyen statik dosyalar |
| Network First | Güncel olması gereken veri |
| Stale-While-Revalidate | Hızlı göster, arkadan tazele |

## Next.js'te
Next.js 16 dokümanında PWA rehberi var (¦progressive-web-apps.md¦): manifest dosyası (¦app/manifest.ts¦), service worker, push bildirimi örneği. Bu sitedeki ¦manifest.webmanifest¦ ve proxy eşleştirmesi (statik varlıklar kimlik kapısı dışında) gerçek bir örnektir.

## Dikkat
Service worker hataları "eski sürümde takılı kalma" yaratır; sürümleme ve temizleme stratejisi şart.

## Alıştırma
Uygulamana manifest ekle, Lighthouse "Installable" kontrolünü geçir; çevrimdışı sayfa göster.`,
    `**Kaynaklar:** [MDN — PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), [web.dev — PWA Öğren](https://web.dev/learn/pwa); Next.js dokümanı ¦node_modules/next/dist/docs/01-app/02-guides/progressive-web-apps.md¦. Tarayıcı/platform kurulabilirlik ölçütleri zamanla değişir; Lighthouse sonucuna bak.`
  ),
  "fe-ssr": L(
    `## Render stratejileri

| Strateji | HTML nerede/ne zaman üretilir? | İyi olduğu yer |
|---|---|---|
| **CSR** (istemci) | Tarayıcıda, JS çalışınca | Giriş gerektiren panel, SEO önemsiz |
| **SSR** (sunucu) | **Her istekte** sunucuda | Kişiselleştirilmiş, güncel + SEO gerekli sayfa |
| **SSG** (statik) | Derleme zamanında | Blog, dokümantasyon |
| **ISR / yeniden doğrulama** | Statik + arka planda belirli aralıkla/etikete göre yenilenir | Ürün sayfaları |
| **Streaming SSR** | Sayfa parça parça (Suspense) gelir | Yavaş veri parçaları olan sayfa |

~~~mermaid CSR ve SSR: kullanıcı ne zaman içeriği görür?
flowchart TB
  subgraph CSR["CSR"]
    A1["boş HTML"] --> A2["JS iner"] --> A3["JS çalışır, veri çekilir"] --> A4["içerik görünür"]
  end
  subgraph SSR["SSR"]
    B1["sunucu HTML üretir"] --> B2["içerik görünür"] --> B3["JS iner, hydrate"] --> B4["etkileşimli"]
  end
~~~

## Hydration
Sunucudan gelen HTML görünür (hızlı ilk boyama), sonra React JS yüklenip olay işleyicilerini bağlar → **etkileşimli** olur. Server ve Client çıktısı farklıysa **hydration uyuşmazlığı** hatası alırsın (¦Date.now()¦, ¦Math.random()¦, ¦window¦ kullanımı tipik nedenler).

## Next.js 16'da düşünme biçimi
Artık "sayfa SSR mi SSG mi?" yerine **bileşen düzeyinde** düşünürsün: Server Components varsayılan; statik kabuk + Suspense ile akan dinamik parçalar; ¦"use cache"¦ ile önbelleğe alınan parçalar (Cache Components açıksa). Ayrıntı: **Next.js Uzmanlığı** izi.

## Karar ağacı
1. Giriş gerekiyor mu, SEO önemli mi? → Gerekiyor/değil: CSR de olur; SEO önemliyse SSR/SSG.
2. İçerik herkese aynı mı? → Statik/önbellekli.
3. Kişiye özel mi? → İstek zamanı render (Suspense ile akış).

## Alıştırma
Aynı sayfayı üç yöntemle düşün (CSR/SSR/statik); her biri için ilk bayt süresini, SEO'yu ve sunucu maliyetini tabloya yaz. Sonra hydration uyuşmazlığı üreten küçük bir bileşen yaz ve düzelt.`,
    `**Kaynaklar:** [web.dev — Web'de render etme](https://web.dev/articles/rendering-on-the-web), Next.js dokümanı (¦01-getting-started/05-server-and-client-components.md¦, ¦08-caching.md¦). Hydration uyuşmazlığı nedenleri React dokümanında da listelenir.`
  ),
};
