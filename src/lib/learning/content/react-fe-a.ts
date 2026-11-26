import type { ModuleContent } from "./types";
import { lessonBody as L } from "./md";

type Bodies = ModuleContent["bodies"];

export const reactFeBodiesA: Bodies = {
  "fe-internet": L(
    `## Bir adres yazdığında ne olur?

1. **DNS**: ¦ornek.com¦ → IP adresi (ör. ¦203.0.113.10¦). Tarayıcı, işletim sistemi ve DNS sağlayıcısı önbelleklerine bakar.
2. **TCP/QUIC bağlantısı**: İstemci–sunucu arasında bağlantı kurulur. HTTP/3, QUIC (UDP üstünde) kullanır.
3. **TLS el sıkışması**: HTTPS'te sertifika doğrulanır, şifreleme anahtarları üretilir.
4. **HTTP isteği**: ¦GET /urunler HTTP/1.1¦ + başlıklar (¦Host¦, ¦Accept¦, ¦Cookie¦).
5. **Yanıt**: durum kodu + başlıklar + gövde (HTML). Tarayıcı HTML'i okurken CSS/JS/görsel için yeni istekler başlatır.

## HTTP'nin iskeleti

| Parça | Örnek | Anlamı |
|---|---|---|
| Yöntem | ¦GET¦, ¦POST¦, ¦PATCH¦, ¦DELETE¦ | Ne yapılmak isteniyor |
| Durum kodu | ¦200¦, ¦301¦, ¦404¦, ¦500¦ | 2xx başarı, 3xx yönlendirme, 4xx istemci hatası, 5xx sunucu hatası |
| Önemli başlıklar | ¦Content-Type¦, ¦Cache-Control¦, ¦Set-Cookie¦ | Biçim, önbellek, oturum |

## CDN
Statik dosyaları kullanıcıya yakın sunuculardan verir; gecikmeyi (latency) azaltır. Vercel gibi platformlar bunu otomatik yapar.

## Alıştırma
1. DevTools → Network sekmesini aç, bir siteyi yenile. Bir isteğin **Headers** ve **Timing** bölümünü incele; DNS/bağlantı/TLS/ilk bayt (TTFB) sürelerini bul.
2. ¦curl -I https://example.com¦ ile yalnızca başlıkları görüntüle.
3. Aynı dosyanın ikinci yüklemede neden ¦304¦ veya "disk cache" gösterdiğini ¦Cache-Control¦ başlığına bakarak açıkla.`,
    `**Kaynak:** [MDN — HTTP'ye Genel Bakış](https://developer.mozilla.org/en-US/docs/Web/HTTP). Süreç adımları MDN'nin "Web nasıl çalışır" anlatımıyla uyumlu bir özettir; HTTP/3'ün QUIC kullanması standart bilgidir.`
  ),
  "fe-tarayici": L(
    `## Render hattı (kritik render yolu)

~~~text
HTML  → ayrıştır → DOM
CSS   → ayrıştır → CSSOM
DOM + CSSOM → Render Tree → Layout (yerleşim) → Paint (boyama) → Composite (katman birleştirme)
~~~

- **Render-engelleyici kaynaklar**: ¦<head>¦ içindeki CSS ve senkron ¦<script>¦ sayfanın ilk çizimini geciktirir. Çözüm: kritik CSS'i küçük tut, script'lere ¦defer¦ veya ¦type="module"¦ ekle.
- **JavaScript** DOM'u değiştirdiğinde tarayıcı gerekirse yeniden layout/paint yapar.
- **Layout thrashing**: Döngüde önce ölçüp (¦offsetHeight¦) sonra yazmak (¦style.height¦) her turda zorla yerleşim hesaplatır. Önce hepsini oku, sonra yaz.
- **Ucuz animasyon**: ¦transform¦ ve ¦opacity¦ çoğunlukla yalnızca composite aşamasını etkiler; ¦width/top¦ animasyonu layout tetikler.

## React'le bağlantı
React sanal bir ağaç kurar, farkı hesaplar ve DOM'u küçük parçalar halinde günceller. Yine de her güncelleme sonunda tarayıcı bu hattı çalıştırır; ağır bileşen ağaçları ve büyük DOM (binlerce düğüm) yavaşlığın tipik nedenidir.

## Alıştırma
1. DevTools → Performance sekmesinde kısa bir kayıt al; "Recalculate Style", "Layout", "Paint" bloklarını bul.
2. Bir kutuyu önce ¦left¦, sonra ¦transform: translateX¦ ile animasyonla; Performance'ta farkı karşılaştır.`,
    `**Kaynak:** [MDN — Kritik render yolu](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path) ve [web.dev — Web'de render etme](https://web.dev/articles/rendering-on-the-web). Hat adımları ve render-engelleyici kaynak kavramı bu kaynaklarla uyumludur.`
  ),
  "fe-arac": L(
    `## Editör: VS Code ayarları
- **Biçimlendirici**: Prettier ile "kaydederken biçimlendir"; **linter**: ESLint (React/Next kuralları hazır gelir).
- Yararlı kısayollar: ¦Ctrl/Cmd+P¦ dosya aç, ¦Ctrl/Cmd+Shift+P¦ komut paleti, ¦F2¦ sembol yeniden adlandır, ¦Alt+↑/↓¦ satır taşı.

## DevTools sekmeleri
| Sekme | Ne için? |
|---|---|
| Elements | DOM/CSS'i canlı incele ve değiştir |
| Console | Hata/log, hızlı deneme |
| Network | İstekler, boyut, süre, önbellek |
| Performance | Render/JS maliyeti |
| Application | Çerez, localStorage, service worker |
| Lighthouse | Performans/erişilebilirlik raporu |

## Terminal: günlük komutlar
¦cd¦, ¦ls¦, ¦mkdir¦, ¦cat¦, ¦grep¦, ¦npm run dev¦, ¦git status¦.

## Git: en sık 10 komut
¦git status¦, ¦git add -p¦, ¦git commit -m "..."¦, ¦git switch -c dal¦, ¦git log --oneline¦, ¦git diff¦, ¦git pull --rebase¦, ¦git push¦, ¦git stash¦, ¦git restore¦.

Ayrıntı için ana müfredattaki **Git akışı, PR ve kod incelemesi** dersine bak.

## Alıştırma
Bir repoyu klonla, dal aç, tek satır değiştir, anlamlı bir commit mesajı yaz (¦fix(ui): buton odak çerçevesi¦) ve geçmişte nasıl göründüğünü ¦git log --oneline¦ ile kontrol et.`,
    `**Kaynaklar:** [Pro Git](https://git-scm.com/book/tr/v2), [Chrome DevTools](https://developer.chrome.com/docs/devtools). Komutlar Pro Git'teki standart komutlardır.`
  ),
  "fe-renk": L(
    `## Renk kuramı

- **Renk çarkı**: Birincil/ikincil renkler; tamamlayıcı (karşıt), benzer (komşu) ve üçlü (triad) uyumlar.
- **HSL** web'de düşünmeyi kolaylaştırır: ¦hsl(220 70% 50%)¦ → ton (hue), doygunluk (saturation), açıklık (lightness). Bir rengin açık/koyu tonlarını yalnızca açıklığı değiştirerek üretirsin.
- **Palet kuralı**: 1 marka rengi + 1 vurgu + nötr gri ölçeği (9–10 ton) + durum renkleri (başarı, uyarı, hata). Fazla renk, tutarsız arayüz demektir.
- **60-30-10**: %60 nötr zemin, %30 ikincil, %10 vurgu.

## Erişilebilir kontrast (WCAG)
| Metin | Asgari kontrast (AA) |
|---|---|
| Normal metin | 4,5 : 1 |
| Büyük metin (≈24px veya 19px kalın) | 3 : 1 |
| Arayüz bileşenleri/ikonlar | 3 : 1 |

Yalnızca renkle bilgi verme (ör. kırmızı = hata); ikon veya metin ekle. Karanlık temada saf siyah/beyaz yerine hafif tonlar yorgunluğu azaltır.

## CSS'te tema
~~~css
:root { --bg: hsl(0 0% 100%); --fg: hsl(222 20% 12%); --brand: hsl(220 80% 48%); }
@media (prefers-color-scheme: dark) {
  :root { --bg: hsl(222 20% 10%); --fg: hsl(0 0% 94%); --brand: hsl(220 90% 66%); }
}
~~~

## Alıştırma
Kendi projen için palet üret; tüm metin/zemin çiftlerini WebAIM kontrast denetleyicisiyle doğrula ve tabloya yaz.`,
    `**Kaynaklar:** [WebAIM kontrast denetleyici](https://webaim.org/resources/contrastchecker/), WCAG 2.x başarı ölçütü 1.4.3 (metin için 4,5:1; büyük metin için 3:1) ve 1.4.11 (arayüz bileşenleri için 3:1). 60-30-10 pratik bir tasarım kuralıdır, standart değildir.`
  ),
  "fe-tipo": L(
    `## Temel kavramlar
- **Font ailesi**: Serif (tırnaklı, uzun metinde klasik), sans-serif (arayüzde yaygın), monospace (kod).
- **Tip ölçeği**: Boyutları rastgele değil oranla seç: ¦12 · 14 · 16 · 20 · 24 · 32 · 48¦ gibi. Gövde metni genelde **16px** (¦1rem¦).
- **Satır yüksekliği**: Gövdede ¦1.5–1.7¦; başlıklarda ¦1.1–1.3¦.
- **Satır uzunluğu**: Paragrafta yaklaşık **45–75 karakter** okunabilirlik için iyidir (¦max-width: 65ch¦).
- **Ağırlık**: Hiyerarşiyi boyut kadar kalınlık ve renk de kurar; en fazla 2–3 ağırlık kullan.

## Web fontları
~~~css
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter.woff2") format("woff2");
  font-display: swap;
}
body { font-family: Inter, system-ui, sans-serif; font-size: 1rem; line-height: 1.6; }
~~~
- ¦font-display: swap¦ metnin font inmeden de görünmesini sağlar; ama yerleşim kaymasına yol açabilir (CLS). Next.js'te ¦next/font¦ bunu otomatik yönetir.
- ¦system-ui¦ yığını yüklemesiz ve hızlıdır.

## Akıcı (fluid) tipografi
~~~css
h1 { font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem); }
~~~

## Alıştırma
Bir makale sayfasını yalnızca tipografiyle (renk ve görsel olmadan) okunaklı hale getir: ölçek, satır yüksekliği, satır uzunluğu. Önce/sonra ekran görüntüsü al.`,
    `**Kaynaklar:** [MDN — Metin biçimlendirme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling), [Material Design tipografi](https://m3.material.io/styles/typography/overview). Karakter aralığı ve satır yüksekliği değerleri yaygın pratik önerilerdir; kesin kural değildir.`
  ),
  "fe-uxui": L(
    `## UX ≠ UI
- **UX (kullanıcı deneyimi)**: Kullanıcı hedefine kolay, hızlı, hatasız ulaşıyor mu?
- **UI (arayüz)**: Düğmeler, renkler, yerleşim — görünen yüz.

## Nielsen'in 10 kullanılabilirlik sezgisi (kısaca)
1. Sistem durumunun görünürlüğü (yükleniyor, kaydedildi)
2. Sistem ile gerçek dünya uyumu (kullanıcının dili)
3. Kullanıcı kontrolü ve özgürlüğü (geri al, iptal)
4. Tutarlılık ve standartlar
5. Hata önleme
6. Hatırlamak yerine tanıma
7. Esneklik ve kullanım verimi (kısayollar)
8. Estetik ve minimal tasarım
9. Kullanıcıların hataları tanıması, teşhis etmesi ve düzeltmesi
10. Yardım ve dokümantasyon

## Geliştirici için pratik kurallar
- **Hiyerarşi**: Önemli olan büyük/koyu/yakın; önemsiz olan küçük/soluk. Her ekranda tek bir birincil eylem.
- **Boşluk**: 4 veya 8 px tabanlı aralık ölçeği; gruplanan şeyler birbirine yakın, gruplar arası daha geniş.
- **Bileşen durumları**: varsayılan, hover, odak, aktif, devre dışı, yükleniyor, hata, boş. Çoğu amatör arayüz yalnızca varsayılanı tasarlar.
- **Dokunma hedefi**: Mobilde etkileşimli öğeler en az ~44×44 px (WCAG 2.2 AA için 24×24 px asgari).

## Tasarımdan koda
Figma'da **Auto Layout** = Flexbox, **Variables/Styles** = CSS değişkenleri/tasarım belirteçleri (tokens), **Component/Variant** = React bileşeni + prop. Tasarımcıyla ortak sözlük kur: aynı isimlerle token ve bileşen.

## Alıştırma
Bir giriş formunun 8 durumunu (boş, odakta, dolu, hatalı, gönderiliyor, başarılı, sunucu hatası, devre dışı) çiz ve kodla.`,
    `**Kaynaklar:** [Nielsen Norman Group — 10 kullanılabilirlik sezgisi](https://www.nngroup.com/articles/ten-usability-heuristics/), [Refactoring UI](https://www.refactoringui.com). Hedef boyutu: Apple/Material önerileri (≈44/48 px) ve WCAG 2.2 "Target Size (Minimum)" 24×24 px ölçütü.`
  ),
  "fe-css-mimari": L(
    `## Sorun: CSS global ve çakışır
Büyük projede aynı sınıf adı, özgüllük (specificity) savaşları ve silinemeyen "ölü" CSS birikir. Çözüm: **isimlendirme kuralı** veya **kapsamlı stil**.

## BEM (Block__Element--Modifier)
~~~css
.kart { }                 /* blok */
.kart__baslik { }         /* eleman */
.kart--vurgulu { }        /* değiştirici */
~~~
- Yalnızca sınıf seçicisi kullan, iç içe seçici yazma → düşük ve düz özgüllük.

## OOCSS (Nesne Yönelimli CSS)
- **Yapıyı görünümden ayır**: ¦.buton¦ (yapı) + ¦.buton-birincil¦ (görünüm).
- **Kabı içerikten ayır**: Bileşen, bulunduğu yere bağımlı olmasın.

## Diğer yaklaşımlar
| Yaklaşım | Fikir | Not |
|---|---|---|
| **CSS Modules** | Dosya bazlı kapsam, sınıf adları derlemede benzersiz olur | Next.js'te yerleşik (¦*.module.css¦) |
| **Utility-first (Tailwind)** | Küçük, tek amaçlı sınıflar | Tasarım belirteçleri ile tutarlılık |
| **Cascade Layers** | ¦@layer¦ ile kaskad sırasını açıkça belirle | Üçüncü taraf CSS'i ezmek kolaylaşır |
| **Özel özellikler** | ¦--renk¦ değişkenleri | Tema ve token için temel |

## Özgüllük kuralları
¦inline > #id > .sınıf/[öznitelik]/:sözde-sınıf > etiket¦. ¦!important¦ son çaredir; kullandıysan neden gerektiğini yorumla.

## Alıştırma
Aynı kart bileşenini (1) BEM, (2) CSS Modules, (3) Tailwind ile yaz; avantaj/dezavantajları üç cümleyle karşılaştır.`,
    `**Kaynaklar:** [BEM](https://getbem.com/introduction/), [MDN — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [web.dev — CSS](https://web.dev/learn/css). OOCSS ilkeleri (yapı/görünüm ayrımı, kap/içerik ayrımı) Nicole Sullivan'ın önerisidir.`
  ),
  "fe-cssinjs": L(
    `## CSS-in-JS nedir?
Stilleri JavaScript/TypeScript içinde, bileşenle birlikte yazma: **styled-components**, **Emotion**, **vanilla-extract**, **Panda CSS**, **Linaria**.

~~~tsx
const Dugme = styled.button<{ $birincil?: boolean }>(
  "padding: .5rem 1rem; border-radius: .5rem;" +
  "background: var(--gri);"
);
~~~
(Gerçek sözdizimi kütüphaneye göre değişir; kavram: stil = bileşenin parçası.)

## Artılar ve eksiler
| | Artı | Eksi |
|---|---|---|
| **Çalışma zamanlı** (styled-components, Emotion) | Prop'a göre dinamik stil, kapsam otomatik | Tarayıcıda ek JS ve hesaplama maliyeti |
| **Sıfır çalışma zamanlı** (vanilla-extract, Panda, Linaria) | Derleme zamanında CSS çıkar, hızlı | Kurulum/derleyici bağımlılığı |
| **Utility (Tailwind)** | Çalışma zamanı maliyeti yok, token tutarlılığı | Uzun sınıf listeleri |

## React Server Components ile uyum
Çalışma zamanlı CSS-in-JS kütüphaneleri çoğunlukla React context/hook'a dayanır; **Server Components'te doğrudan kullanılamaz** ve istemci sınırı gerektirir. Next.js 16 dokümanı bu konuda ayrı bir rehber sunar (¦css-in-js¦). Yeni projelerde CSS Modules, Tailwind veya sıfır çalışma zamanlı çözüm daha az sürtünme yaratır.

## Karar rehberi
- Prop'a bağlı çok dinamik stil + istemci ağırlıklı uygulama → styled-components/Emotion kabul edilebilir.
- App Router + sunucu bileşenleri ağırlıklı → CSS Modules/Tailwind/sıfır çalışma zamanlı.

## Alıştırma
Bir "Rozet" bileşenini hem CSS Modules hem Tailwind ile yaz; ¦variant="basari|uyari|hata"¦ prop'unu ikisinde de uygula.`,
    `**Kaynaklar:** [styled-components](https://styled-components.com/docs), [Emotion](https://emotion.sh/docs/introduction), [Tailwind](https://tailwindcss.com/docs); Next.js dokümanında "CSS-in-JS" ve "CSS" sayfaları (¦node_modules/next/dist/docs/01-app/02-guides/css-in-js.md¦, ¦01-getting-started/11-css.md¦). Kütüphanelerin RSC desteği hızla değişir; kurulumdan önce güncel dokümanı kontrol et.`
  ),
  "fe-react-ts": L(
    `Bu ders köprüdür; ayrıntılar ana müfredatta (Ünite 2 ve 3).

## Tipli bileşen
~~~tsx
type KartProps = {
  baslik: string;
  etiket?: string;
  onSec?: (id: string) => void;
  children: React.ReactNode;
};

export function Kart({ baslik, etiket, onSec, children }: KartProps) {
  return <section aria-label={baslik}>{children}</section>;
}
~~~

## State ve olaylar
~~~tsx
const [urunler, setUrunler] = useState<Urun[]>([]);
function onChange(e: React.ChangeEvent<HTMLInputElement>) { setAd(e.target.value); }
~~~

## Generic bileşen
~~~tsx
type TabloProps<T extends { id: string }> = { satirlar: T[]; kolonlar: { baslik: string; goster: (s: T) => React.ReactNode }[] };
export function Tablo<T extends { id: string }>({ satirlar, kolonlar }: TabloProps<T>) { /* ... */ }
~~~

## Hook'lar hatırlatma
¦useState¦, ¦useReducer¦ (karmaşık durum), ¦useEffect¦ (yalnızca dış sistemle senkron), ¦useMemo/useCallback¦ (ölç, sonra kullan), ¦useRef¦, ¦useContext¦, ¦useId¦, React 19'da ¦use¦ ve ¦useActionState¦.

## Bu izdeki sonraki dersler ne ekliyor?
Vue ve Angular'ı React ile eşleştirerek öğrenirsin: aynı kavramlar (bileşen, durum, yönlendirme, bağımlılık yönetimi) farklı isimlerle.

## Alıştırma
Ana müfredattaki ürün tablosunu ¦Tablo<T>¦ generic bileşenine dönüştür.`,
    `**Kaynaklar:** [React — React'te Düşünmek](https://react.dev/learn/thinking-in-react), [TypeScript El Kitabı](https://www.typescriptlang.org/docs/handbook/intro.html). ¦use¦ ve ¦useActionState¦ React 19 API'leridir.`
  ),
  "fe-vue": L(
    `## Vue 3 kavram haritası (React karşılıklarıyla)

| Vue | React karşılığı |
|---|---|
| Tek dosya bileşeni (¦.vue¦: template + script + style) | JSX bileşen dosyası |
| ¦ref()¦, ¦reactive()¦ | ¦useState¦ (ama değişim **doğrudan** atamayla) |
| ¦computed()¦ | ¦useMemo¦ / render sırasında hesap |
| ¦watch()¦ / ¦watchEffect()¦ | ¦useEffect¦ |
| ¦props¦ / ¦emit¦ | props / geri çağırma prop'ları |
| ¦v-if¦, ¦v-for¦, ¦v-model¦ | ¦&&¦, ¦map¦, kontrollü input |
| Vue Router | React Router / Next.js yönlendirmesi |
| Pinia (eski: Vuex) | Zustand / Context |

## Örnek (Composition API, ¦<script setup>¦)
~~~vue
<script setup lang="ts">
import { ref, computed } from "vue";
const adet = ref(0);
const cift = computed(() => adet.value * 2);
</script>

<template>
  <button @click="adet++">{{ adet }} (çift: {{ cift }})</button>
</template>
~~~

## Fark: reaktivite
Vue, değeri değiştirdiğinde hangi bileşenin kullandığını **izleyerek** (proxy) günceller; React ise state değişince bileşeni yeniden çalıştırır ve farkı hesaplar. Bu yüzden Vue'da bağımlılık dizisi yazmazsın.

## Vuex → Pinia
Resmi öneri artık **Pinia**'dır; mutation kavramı yoktur, TypeScript desteği daha iyidir. Eski projelerde Vuex görebilirsin.

## Alıştırma
Sayaç + yapılacaklar listesini Vue 3 ile yaz, sonra aynısını React ile; kod uzunluğunu ve zihinsel modeli kıyasla.`,
    `**Kaynaklar:** [Vue.js Rehberi](https://vuejs.org/guide/introduction.html), [Vue Router](https://router.vuejs.org), [Pinia](https://pinia.vuejs.org). Pinia'nın resmi durum yönetimi önerisi olması Vue dokümanlarında belirtilmiştir. Eşleştirme tablosu öğrenme kolaylığı için yaklaşık karşılıklardır; birebir aynı değildir.`
  ),
  "fe-angular": L(
    `## Angular'ın felsefesi
Tam donanımlı, görüşlü (opinionated) bir framework: yönlendirme, form, HTTP, bağımlılık enjeksiyonu, test aracı hazır gelir. **TypeScript zorunludur.** Büyük kurumsal ekiplerde yaygındır.

## Kavram eşleştirme

| Angular | React/Next karşılığı |
|---|---|
| Component (sınıf + şablon) | Fonksiyon bileşen |
| NgModule / standalone component | ES modülü (¦import/export¦) |
| Servis + **Dependency Injection** | Modül fonksiyonları, Context |
| Directive (¦*ngIf¦, ¦*ngFor¦, yeni: ¦@if¦, ¦@for¦) | ¦&&¦, ¦map¦ |
| Pipe (¦date¦, ¦currency¦) | Biçimleyici fonksiyon / ¦Intl¦ |
| RxJS Observable | Promise + TanStack Query (akış gerekirse RxJS) |
| Reactive Forms | React Hook Form + Zod |
| Router + lazy loading | Next.js dosya tabanlı rota + dinamik import |
| Jasmine + Karma | Jest/Vitest + Testing Library |

## Bağımlılık enjeksiyonu (DI)
Bileşen, ihtiyaç duyduğu servisi kendisi üretmez; framework **verir**. Test sırasında sahte (mock) servis vermek kolaylaşır:

~~~ts
@Injectable({ providedIn: "root" })
export class UrunServisi {
  constructor(private http: HttpClient) {}
  listele() { return this.http.get<Urun[]>("/api/urunler"); }
}
~~~

## RxJS'e kısa giriş
Observable = zamanla gelen değerler akışı. ¦map¦, ¦filter¦, ¦switchMap¦ (yeni istek eskisini iptal eder) gibi operatörlerle birleştirilir. Arama kutusu (debounce + iptal) örneğinde parlar.

## Alıştırma
Angular CLI ile ¦ng new¦ yapıp tek bileşen + tek servis yaz; ardından aynı ekranı React'te kur ve DI'nin React'teki karşılığının ne olduğunu not et.`,
    `**Kaynaklar:** [Angular dokümantasyonu](https://angular.dev), [RxJS](https://rxjs.dev). Angular'ın yeni kontrol akışı sözdizimi (¦@if¦, ¦@for¦) ve standalone bileşenler güncel sürümlerde standarttır; eski ¦*ngIf¦ ve NgModule projelerde hâlâ görülür.`
  ),
  "fe-npm": L(
    `## package.json
~~~json
{
  "name": "uygulama",
  "scripts": { "dev": "next dev", "build": "next build", "test": "vitest" },
  "dependencies": { "next": "^16.0.0" },
  "devDependencies": { "typescript": "^5.0.0" }
}
~~~
- **dependencies**: çalışma zamanında gerekir; **devDependencies**: yalnızca geliştirme/derleme.

## Semver (anlamsal sürümleme): MAJOR.MINOR.PATCH
- **PATCH**: hata düzeltmesi, **MINOR**: geriye uyumlu özellik, **MAJOR**: kırıcı değişiklik.
- ¦^1.4.2¦ → ¦1.x.x¦ (MAJOR sabit), ¦~1.4.2¦ → ¦1.4.x¦, ¦1.4.2¦ → tam sürüm.

## Kilit dosyası (lockfile)
¦package-lock.json¦ / ¦yarn.lock¦ / ¦pnpm-lock.yaml¦: **tam** sürüm ağacını sabitler. Repoya eklenir; CI'da ¦npm ci¦ kullan (kilit dosyasına birebir uyar, hızlıdır).

## npm, Yarn, pnpm
| | Not |
|---|---|
| **npm** | Node ile gelir, varsayılan |
| **Yarn** | Workspaces ve Plug'n'Play gibi özellikleri ile bilinir |
| **pnpm** | Disk tasarrufu (içerik adreslemeli ortak depo), sıkı bağımlılık yapısı |

## Güvenlik ve bakım
- ¦npm audit¦ ile bilinen açıkları denetle; körü körüne ¦--force¦ kullanma.
- Bir paket eklemeden önce: son yayın tarihi, indirme sayısı, bakımcı sayısı, lisans, boyut (bundlephobia benzeri araçlar).
- ¦npx¦ ile tek seferlik komut çalıştır; yerel olmayan kodu çalıştırmadan önce kaynağını sorgula.

## Alıştırma
Yeni bir projede ¦npm ls¦ ile bağımlılık ağacına bak; bir bağımlılığın neden kurulduğunu ¦npm explain <paket>¦ ile bul.`,
    `**Kaynaklar:** [npm dokümantasyonu](https://docs.npmjs.com), [Semantic Versioning](https://semver.org/lang/tr/). ¦npm ci¦, ¦npm audit¦, ¦npm explain¦ resmi npm komutlarıdır.`
  ),
  "fe-bundler": L(
    `## Neden paketleyici (bundler)?
Tarayıcıya yüzlerce modül dosyası yerine **optimize edilmiş birkaç paket** (bundle) göndermek; TypeScript/JSX'i dönüştürmek; CSS/görsel işlemek; kullanılmayan kodu atmak.

## Ana araçlar

| Araç | Rol |
|---|---|
| **Webpack** | Yapılandırılabilir, loader/plugin ekosistemi; eski/ kurumsal projelerde yaygın |
| **Babel** | Yeni JS/JSX/TS sözdizimini eski hedeflere **dönüştürür** (transpile) |
| **Vite** | Geliştirmede yerel ES modülleri + hızlı HMR; üretimde Rollup/Rolldown tabanlı paketleme |
| **SWC** | Rust ile yazılmış hızlı derleyici (Babel alternatifi) |
| **Turbopack** | Next.js'in Rust tabanlı paketleyicisi; Next.js 16'da varsayılan |

## Kavramlar
- **Giriş noktası (entry)** ve **bağımlılık grafiği**.
- **Tree shaking**: Kullanılmayan ES modülü dışa aktarımlarını çıkarma; ¦import { a } from "lib"¦ ve yan etkisiz paketler gerekir.
- **Code splitting**: Dinamik ¦import()¦ ile ayrı parçalar (chunk).
- **Source map**: Paketlenmiş kodun hatasını özgün satıra eşler.
- **Hedef tarayıcılar**: ¦browserslist¦ ile hangi sözdiziminin dönüştürüleceği belirlenir.

## Minimal Webpack fikri
~~~js
module.exports = {
  entry: "./src/index.tsx",
  module: { rules: [{ test: /\\.tsx?$/, use: "babel-loader" }] },
  output: { filename: "[name].[contenthash].js" },
};
~~~
¦contenthash¦ dosya adına içerik özeti ekler → uzun süreli önbellek.

## Pratikte
Yeni projede çoğunlukla bunu kendin yapılandırmazsın: Next.js (Turbopack/SWC) veya Vite hazır gelir. Yine de bir hatada "paketleyici ne yapıyor?" sorusunu cevaplayabilmen beklenir.

## Alıştırma
Next.js veya Vite projesinde üretim derlemesi al; çıktıdaki paket boyutlarını ve parça (chunk) sayısını incele.`,
    `**Kaynaklar:** [Webpack kavramları](https://webpack.js.org/concepts/), [Babel](https://babeljs.io/docs/), [Vite rehberi](https://vite.dev/guide/). Turbopack'in Next.js 16'da varsayılan olması bu repodaki Next.js dokümanında ve sürüm notlarında yer alır; doğrulamak için ¦node_modules/next/dist/docs¦ içinde "turbopack" ara.`
  ),
};
