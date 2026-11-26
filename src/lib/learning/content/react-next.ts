import type { ModuleContent } from "./types";
import { lessonBody as L } from "./md";

type Bodies = ModuleContent["bodies"];

const DOC = "Bu ders, bu repodaki Next.js 16.2 sürümünün kendi dokümanına göre yazıldı (¦node_modules/next/dist/docs/¦). ";

export const reactNextBodies: Bodies = {
  "nx-mimari": L(
    `## Klasör = rota
~~~text
src/app/
  layout.tsx            ← kök layout (zorunlu; <html> ve <body> burada)
  page.tsx              ← "/" sayfası
  urunler/
    page.tsx            ← "/urunler"
    [id]/page.tsx       ← "/urunler/123" (dinamik segment)
  (pazarlama)/hakkimizda/page.tsx   ← parantezli klasör URL'e girmez (route group)
  api/saglik/route.ts   ← GET /api/saglik (Route Handler)
~~~
Özel dosyalar: ¦layout¦, ¦page¦, ¦loading¦, ¦error¦, ¦not-found¦, ¦template¦, ¦route¦. Klasör, içinde ¦page¦ veya ¦route¦ olmadıkça **herkese açık rota olmaz**; bileşenleri rota klasörüne yan yana koyabilirsin (colocation).

~~~mermaid Klasörlerden rotalara
flowchart TB
  A["app/layout.tsx<br/>kök layout"] --> P["app/page.tsx → /"]
  A --> U["app/urunler/page.tsx → /urunler"]
  U --> I["app/urunler/[id]/page.tsx → /urunler/123"]
  A --> G["(pazarlama)/hakkimizda/page.tsx → /hakkimizda"]
  A --> API["app/api/saglik/route.ts → GET /api/saglik"]
~~~

## Layout ve sayfa
- **Layout** gezinmede yeniden render edilmez, durumunu korur; ¦children¦ alır. İç içe geçebilir.
- **Sayfa** bir rotanın benzersiz arayüzüdür.

## Next.js 16'da params ve searchParams **Promise**'tir
~~~tsx
export default async function Sayfa({ params, searchParams }: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ sayfa?: string }>;
}) {
  const { id } = await params;
  const { sayfa } = await searchParams;
  return <h1>Ürün {id}, sayfa {sayfa ?? "1"}</h1>;
}
~~~
Tip yardımcıları: ¦PageProps<'/urunler/[id]'>¦, ¦LayoutProps<'/dashboard'>¦ ve Route Handler'larda ¦RouteContext<'/users/[id]'>¦ **global**dir (import gerekmez); ¦next dev¦, ¦next build¦ veya ¦next typegen¦ çalışınca üretilir.

## Gezinme
- ¦<Link href="/urunler">¦: **prefetch** (görünüm alanına girince arka planda yükler) ve istemci tarafı geçiş.
- ¦useRouter¦, ¦usePathname¦, ¦useSearchParams¦ yalnızca **istemci** bileşenlerinde.
- ¦redirect()¦, ¦notFound()¦ sunucuda çağrılır.

## Kısıt
Aynı URL'ye çözülen iki sayfa (ör. iki farklı ¦(grup)/page.tsx¦ ¦/¦ olursa) derleme hatası verir.

## Alıştırma
Bir ürün listesi (¦/urunler¦), detay (¦/urunler/[id]¦) ve ortak bir ¦layout¦ ile menü kur; ¦searchParams¦ ile arama kutusunu çalıştır; olmayan id için ¦notFound()¦ çağır.`,
    DOC + `İlgili dosyalar: ¦01-getting-started/03-layouts-and-pages.md¦, ¦02-project-structure.md¦, ¦04-linking-and-navigating.md¦. ¦params¦/¦searchParams¦ nesnelerinin Promise olması ve ¦PageProps¦ yardımcısı bu dokümanlarda anlatılır. Kaynak: [Next.js App Router](https://nextjs.org/docs/app).`
  ),
  "nx-rsc": L(
    `## İki tür bileşen
| | **Server Component** (varsayılan) | **Client Component** (¦"use client"¦) |
|---|---|---|
| Çalıştığı yer | Sunucu (derlemede veya istekte) | Önce sunucuda HTML, sonra tarayıcıda hydrate |
| Yapabilir | DB/dosya/gizli anahtar erişimi, async/await | ¦useState¦, ¦useEffect¦, olay işleyici, tarayıcı API'leri |
| Yapamaz | State, efekt, olay işleyici | Doğrudan DB/gizli anahtar kullanamaz (kullanma!) |
| JS paketi | İstemciye **gönderilmez** | Gönderilir |

## Kural: ¦"use client"¦ bir **sınır**dır
Dosyanın tepesine yazılınca o dosya ve **içe aktardıkları** istemci paketine girer. Bu yüzden sınırı **mümkün olduğunca yaprağa** it:

~~~tsx
// urun/page.tsx (Server)
import BegenButonu from "./begen-butonu";   // "use client" burada
export default async function Sayfa() {
  const urun = await urunGetir();
  return (<article><h1>{urun.ad}</h1><BegenButonu id={urun.id} /></article>);
}
~~~

~~~mermaid Bileşen ağacı: sunucu varsayılan, 'use client' yaprağa iner
flowchart TB
  L["Layout (Server)"] --> P["Sayfa (Server)<br/>veritabanından veri çeker"]
  P --> H["Başlık (Server)"]
  P --> BG["BegenButonu (Client)<br/>useState, onClick"]
  P --> L2["Liste (Server)"]
  classDef srv fill:#dbeafe,stroke:#1d4ed8,color:#111
  classDef cli fill:#ffedd5,stroke:#c2410c,color:#111
  class L,P,H,L2 srv
  class BG cli
~~~

## Server → Client veri aktarma
Props **serileştirilebilir** olmalı: string, number, plain object, array, Date, Map/Set, Promise (ve ¦use¦ ile okuma) olabilir; **fonksiyon, sınıf örneği** olamaz (Server Action fonksiyonları hariç).

## İç içe geçirme: children deseni
Client Component'in içine Server Component'i **children/prop olarak** geçirebilirsin; client dosyası onu import etmediği sürece sunucuda kalır.

## Context sağlayıcıları
Context yalnızca client'ta çalışır: ¦ThemeProvider¦ ayrı bir ¦"use client"¦ dosyada olsun ve ¦{children}¦ sarsın; **mümkün olduğunca ağacın derininde** kullan.

## Üçüncü taraf bileşenler
Client özellikleri kullanan ama ¦"use client"¦ içermeyen kütüphaneleri kendi client dosyanda sarmala.

## Ortam zehirlenmesi (environment poisoning)
Sunucuya özel kodun (DB, gizli anahtar) yanlışlıkla client'a girmesini önlemek için dosyanın başına ¦import "server-only"¦ ekle; ortam değişkenlerinde yalnızca ¦NEXT_PUBLIC_¦ ön ekliler tarayıcıya gider.

## Hydration
Sunucudan gelen HTML görünür; React JS yüklenince olayları bağlar. Server ve client çıktısı farklıysa hata alırsın.

## Alıştırma
Ürün sayfasında yalnızca "Beğen" butonu client olsun; paket boyutunu (¦next build¦ çıktısındaki First Load JS) tüm sayfayı ¦"use client"¦ yaptığın haliyle karşılaştır.`,
    DOC + `İlgili dosya: ¦01-getting-started/05-server-and-client-components.md¦ (when to use, RSC payload, hydration, context providers, third-party components, environment poisoning). Serileştirme listesi React dokümanında: [use server — serializable values](https://react.dev/reference/react/use-server#serializable-parameters-and-return-values).`
  ),
  "nx-data": L(
    `## Sunucuda veri çekme
Server Component ¦async¦ olabilir:

~~~tsx
import { prisma } from "@/lib/prisma";

export default async function Urunler() {
  const urunler = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return <ul>{urunler.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
~~~
- ORM/DB'yi **doğrudan** çağırabilirsin; API katmanı şart değil.
- ¦fetch¦ ile dış API çağrılabilir. Önbellek davranışı kullandığın modele (Cache Components açık/kapalı) göre değişir → sonraki ders.

## Streaming ve yükleme durumları
Yavaş veriyi sayfanın geri kalanını bloklamadan akıt:

~~~tsx
import { Suspense } from "react";
export default function Sayfa() {
  return (
    <>
      <h1>Panel</h1>
      <Suspense fallback={<p>Yükleniyor…</p>}>
        <YavasKart />   {/* kendi içinde await ediyor */}
      </Suspense>
    </>
  );
}
~~~
- ¦loading.tsx¦ rota segmenti için **otomatik Suspense** sınırıdır.
- Anlamlı iskelet (skeleton) göster; boş "Yükleniyor" yetmez.

## Ardışık (waterfall) ve paralel çekme
~~~tsx
// Kötü: ikinci istek birinciyi bekler
const kullanici = await kullaniciGetir(id);
const siparisler = await siparisGetir(id);

// İyi: bağımsız ise paralel
const [kullanici, siparisler] = await Promise.all([kullaniciGetir(id), siparisGetir(id)]);
~~~
Gerçekten bağımlıysa (birinin sonucu diğerine lazım) ardışık yazılır; mümkünse parçaları ayrı Suspense sınırlarına böl.

~~~svg Ardışık ve paralel veri çekme süresi (örnek değerler)
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 210' font-family='system-ui,sans-serif' font-size='12'><rect width='480' height='210' fill='white'/><text x='8' y='18' font-weight='600' fill='#222'>Ardışık (waterfall) ≈ 600 ms</text><rect x='8' y='28' width='120' height='22' rx='4' fill='#4f7be8'/><text x='68' y='44' text-anchor='middle' fill='white'>kullanıcı 200</text><rect x='128' y='54' width='180' height='22' rx='4' fill='#e0483e'/><text x='218' y='70' text-anchor='middle' fill='white'>siparişler 300</text><rect x='308' y='80' width='60' height='22' rx='4' fill='#f2b01e'/><text x='338' y='96' text-anchor='middle' fill='#222'>100</text><text x='8' y='130' font-weight='600' fill='#222'>Paralel (Promise.all) ≈ 300 ms</text><rect x='8' y='140' width='120' height='22' rx='4' fill='#4f7be8'/><text x='68' y='156' text-anchor='middle' fill='white'>kullanıcı 200</text><rect x='8' y='166' width='180' height='22' rx='4' fill='#e0483e'/><text x='98' y='182' text-anchor='middle' fill='white'>siparişler 300</text><rect x='8' y='192' width='60' height='14' rx='4' fill='#f2b01e'/><line x1='188' y1='134' x2='188' y2='208' stroke='#777' stroke-dasharray='4 3'/><text x='194' y='204' fill='#555'>toplam = en yavaşı</text></svg>
~~~

## Aynı veriyi birden çok bileşende kullanmak
¦React.cache¦ ile **aynı istek içinde** tekrarlı çağrıları tekilleştir:

~~~ts
import { cache } from "react";
export const kullaniciGetir = cache(async (id: string) => prisma.user.findUnique({ where: { id } }));
~~~

## İstemci bileşenlerinde veri
- Server'dan ¦Promise¦ prop olarak geçir, client'ta ¦use(promise)¦ ile oku (Suspense gerekir).
- Veya TanStack Query / SWR (etkileşimli, tekrar çekmeli veri için).

## Alıştırma
Bir panele üç kart koy (hızlı, orta, yavaş sorgu). Önce hepsini ardışık await et, sonra paralel + ayrı Suspense ile akıt; tarayıcıda ilk içeriğin ne zaman göründüğünü karşılaştır.`,
    DOC + `İlgili dosya: ¦01-getting-started/06-fetching-data.md¦ (sunucuda fetch/ORM, streaming, loading.js, Suspense, ardışık/paralel, React.cache, use API). Bu sitede (¦src/app/page.tsx¦) birçok Prisma sorgusu ¦Promise.all¦ ile paralel çalışır.`
  ),
  "nx-cache": L(
    `## Önemli: iki model var
Next.js 16'da önbellekleme **iki ayrı modelde** anlatılır:

| | **Cache Components** (yeni; ¦cacheComponents: true¦) | **Önceki model** |
|---|---|---|
| Açma | ¦next.config.ts¦ içinde bayrak | Varsayılan |
| Mantık | ¦"use cache"¦ ile **açıkça** önbelleğe al | ¦fetch¦ seçenekleri, ¦unstable_cache¦, rota ayar sabitleri |
| Dinamik parça | Suspense ile akar, statik kabuk hazırlanır | Sayfa dinamik/statik olarak belirlenir |

Bu sitenin ¦next.config.ts¦ dosyasında bayrak **kapalı**dır (önceki model). Yeni projede Cache Components'i denemek istersen bayrağı açarsın.

## ¦"use cache"¦ (Cache Components açıkken)
~~~ts
import { cacheLife, cacheTag } from "next/cache";

export async function urunleriGetir() {
  "use cache";
  cacheLife("hours");        // profil: stale 5 dk, revalidate 1 saat, expire 1 gün
  cacheTag("urunler");       // sonradan etikete göre geçersiz kılmak için
  return prisma.product.findMany();
}
~~~
- Seviye: **fonksiyon** (veri), **bileşen/sayfa** (UI) veya **dosya** (tüm export'lar async olmalı).
- **Önbellek anahtarı**: argümanlar ve kapanışla yakalanan değerler anahtara dahildir.
- Değerler **serileştirilebilir** olmalı.
- **Çalışma zamanı API'lerini** (¦cookies()¦, ¦headers()¦, ¦searchParams¦) önbellekli kapsam **içinde** okuyamazsın; dışarıda oku, argüman olarak geçir.

## ¦cacheLife¦ profilleri
| Profil | stale | revalidate | expire |
|---|---|---|---|
| ¦default¦ | 5 dk | 15 dk | süresiz |
| ¦seconds¦ | 30 sn | 1 sn | 1 dk |
| ¦minutes¦ | 5 dk | 1 dk | 1 saat |
| ¦hours¦ | 5 dk | 1 saat | 1 gün |
| ¦days¦ | 5 dk | 1 gün | 1 hafta |
| ¦weeks¦ | 5 dk | 1 hafta | 30 gün |
| ¦max¦ | 5 dk | 30 gün | 1 yıl |

- **stale**: istemci, sunucuya sormadan kullanabilir; **revalidate**: sonrasında ilk istek arka planda tazelemeyi tetikler; **expire**: istek gelmeden bu süre geçerse bir sonraki istek taze içeriği **bekler**.
- ¦expire¦, ¦revalidate¦'den büyük olmalıdır.

~~~svg cacheLife: taze → bayat → süresi doldu
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 150' font-family='system-ui,sans-serif' font-size='12'><rect width='480' height='150' fill='white'/><rect x='10' y='40' width='150' height='34' fill='#22a559'/><text x='85' y='62' text-anchor='middle' fill='white'>taze: önbellekten</text><rect x='160' y='40' width='170' height='34' fill='#f2b01e'/><text x='245' y='62' text-anchor='middle' fill='#222'>bayat: ver + arkada yenile</text><rect x='330' y='40' width='140' height='34' fill='#e0483e'/><text x='400' y='62' text-anchor='middle' fill='white'>süresi doldu: bekle</text><line x1='10' y1='96' x2='470' y2='96' stroke='#555'/><text x='10' y='114' fill='#444'>0</text><line x1='160' y1='80' x2='160' y2='100' stroke='#555'/><text x='160' y='116' text-anchor='middle' fill='#444'>revalidate</text><line x1='330' y1='80' x2='330' y2='100' stroke='#555'/><text x='330' y='116' text-anchor='middle' fill='#444'>expire</text><text x='240' y='20' text-anchor='middle' fill='#222' font-weight='600'>cacheLife zaman çizgisi</text><text x='240' y='140' text-anchor='middle' fill='#666'>stale: istemci yönlendiricisinin sunucuya sormadan kullanabildiği süre (ayrı ayar)</text></svg>
~~~

## Dinamik içerik: Suspense
Her istekte taze olması gereken parçaya ¦"use cache"¦ koyma; **Suspense** ile sar, statik kabuk anında gelsin.

## Önceki modelde
¦fetch(url, { cache: "force-cache" })¦ ile tek tek isteği önbelleğe al (varsayılan **önbelleksiz**); ¦revalidatePath/Tag¦ ile geçersiz kıl.

## Serverless uyarısı
¦"use cache"¦ varsayılan olarak bellekte tutulur; sunucusuz ortamda isteklerarası kalıcı olmayabilir. Üretimde platform desteğini kontrol et.

## Alıştırma
Bir test projesinde ¦cacheComponents: true¦ aç; ürün listesini ¦"use cache"¦ + ¦cacheLife("minutes")¦ ile önbelleğe al; log yazdırarak kaç kez gerçekten çalıştığını gözle.`,
    DOC + `İlgili dosyalar: ¦01-getting-started/08-caching.md¦, ¦02-guides/caching-without-cache-components.md¦, ¦03-api-reference/01-directives/use-cache.md¦ (v16.0.0'da Cache Components ile etkin), ¦04-functions/cacheLife.md¦ (profil tablosu), ¦cacheTag.md¦. Önbellek ayrıntıları sürümlerle hızla değişir; kullandığın sürümün dokümanına bak.`
  ),
  "nx-revalidate": L(
    `## Neden yeniden doğrulama?
Veri değiştiğinde önbellekteki eski sürümü yenilemen gerekir.

## Dört araç
| Araç | Nerede çağrılır | Davranış |
|---|---|---|
| ¦revalidatePath("/urunler")¦ | Server Action, Route Handler | Yola ait önbelleği geçersiz kılar |
| ¦revalidateTag("urunler", ...)¦ | Server Action, Route Handler | Etikete göre **stale-while-revalidate**: eski içerik sunulurken arkada yenilenir |
| ¦updateTag("urunler")¦ | **Yalnızca** Server Action | Önbelleği **hemen** süresi dolmuş sayar; kullanıcı kendi yazdığını anında görür (read-your-own-writes) |
| ¦refresh()¦ | **Yalnızca** Server Action | İstemci yönlendiricisini yeniler (önbelleksiz/dinamik veriyi tazeler) |

Tag tabanlı yöntemi, yol tabanlıdan tercih et: daha hassastır, gereğinden fazla geçersiz kılmaz.

## Örnek
~~~ts
"use server";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function gonderiOlustur(formData: FormData) {
  const gonderi = await prisma.post.create({ data: { baslik: String(formData.get("baslik")) } });
  updateTag("gonderiler");            // kullanıcı listeyi hemen güncel görür
  redirect("/gonderiler/" + gonderi.id);
}
~~~

## Hangisini seçmeli?
- Formdan sonra kullanıcı sonucu **hemen** görmeli → ¦updateTag¦ (Cache Components) veya ¦revalidatePath¦.
- Arka plan tazeleme yeterli (webhook, cron) → ¦revalidateTag¦ (Route Handler'dan çağrılabilir).
- Yalnızca ekranı yenile → ¦refresh()¦.

## Bu sitedeki pratik
Bu repo önceki modeli kullanır: Server Action'lar veritabanını yazdıktan sonra ¦revalidatePath¦ çağırır.

## Alıştırma
Bir "yazı ekle" formunda ¦revalidatePath¦ ile ¦updateTag¦ davranışını (Cache Components açık test projesinde) karşılaştır; ikisinde de liste ne zaman güncelleniyor, not al.`,
    DOC + `İlgili dosyalar: ¦01-getting-started/09-revalidating.md¦ (cacheLife, cacheTag, revalidateTag, updateTag, revalidatePath), ¦03-api-reference/04-functions/refresh.md¦ ("yalnızca Server Action'larda"). ¦revalidateTag¦ imzası sürümde değişmiş olabilir; ikinci argümanı dokümandan kontrol et.`
  ),
  "nx-mutate": L(
    `## Server Functions ve Server Actions
**Server Function**: Sunucuda çalışan ve istemciden çağrılabilen asenkron fonksiyon (¦"use server"¦). **Server Action**: Form gönderimi/mutasyon için kullanılan Server Function.

~~~ts
// app/gonderiler/actions.ts
"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const sema = z.object({ baslik: z.string().min(3).max(120) });

export type Durum = { hata?: string; basarili?: boolean };

export async function gonderiOlustur(onceki: Durum, formData: FormData): Promise<Durum> {
  const oturum = await oturumuDogrula();                 // 1) yetki
  if (!oturum) return { hata: "Giriş gerekli" };
  const sonuc = sema.safeParse({ baslik: formData.get("baslik") });   // 2) girdi doğrulama
  if (!sonuc.success) return { hata: "Başlık 3–120 karakter olmalı" };
  await prisma.post.create({ data: { baslik: sonuc.data.baslik, sahibi: oturum.userId } });
  revalidatePath("/gonderiler");                          // 3) önbellek
  return { basarili: true };
}
~~~

## Formda kullanım: ¦useActionState¦
~~~tsx
"use client";
import { useActionState } from "react";
import { gonderiOlustur } from "./actions";

export function Form() {
  const [durum, eylem, bekliyor] = useActionState(gonderiOlustur, {});
  return (
    <form action={eylem}>
      <input name="baslik" required />
      <button disabled={bekliyor}>{bekliyor ? "Kaydediliyor…" : "Kaydet"}</button>
      {durum.hata && <p role="alert">{durum.hata}</p>}
    </form>
  );
}
~~~
- Sunucu bileşeninde ¦<form action={serverAction}>¦ **JS yüklenmeden de** çalışır (progressive enhancement).
- ¦useFormStatus¦ alt bileşende bekleme durumunu verir.
- Olay işleyicide de çağırabilirsin; ancak istemci çağrıları sırayla işlenir.

~~~mermaid Form → Server Action → veri → ekran
sequenceDiagram
  participant F as Form (tarayıcı)
  participant A as Server Action
  participant DB as Veritabanı
  F->>A: POST (FormData)
  A->>A: 1) yetki kontrolü
  A->>A: 2) Zod ile doğrulama
  A->>DB: kayıt oluştur
  A->>A: 3) revalidatePath / updateTag
  A-->>F: yeni durum + güncel arayüz
~~~

## Güvenlik (en kritik kısım)
> Server Function'lar doğrudan **POST isteğiyle** de çağrılabilir; yalnızca arayüzdeki butona güvenme.

1. **Her action içinde** kimlik doğrulama + yetki kontrolü yap.
2. **Girdiyi sunucuda doğrula** (Zod); FormData tip güvencesi vermez.
3. Kullanıcıya **gereğinden fazla veri döndürme** (hassas alanları ayıkla).
4. Yerleşik korumalar: şifrelenmiş action kimlikleri, **Origin/Host karşılaştırması** (CSRF), **1 MB gövde sınırı** (¦serverActions.bodySizeLimit¦ ile değiştirilir).
5. Hız sınırlama ve kötüye kullanım koruması gerekiyorsa kendin ekle.
6. Render sırasında yan etki (yazma) yapma.

## Yönlendirme ve sonuç
¦redirect()¦ action içinde çağrılır ve işlemi sonlandırır (try/catch dışında çağır). Beklenen hataları **dönüş değeri** olarak ver; istisna fırlatma.

## Alıştırma
"Yorum ekle" action'ı yaz: oturum kontrolü, Zod doğrulama, kayıt, ¦revalidatePath¦, hata durumunda formda mesaj. Ardından ¦curl¦ ile (oturumsuz) doğrudan çağırmayı dene ve reddedildiğini doğrula (yalnızca yerel ortamında).`,
    DOC + `İlgili dosyalar: ¦01-getting-started/07-mutating-data.md¦, ¦02-guides/server-actions.md¦ (CSRF kontrolü, 1MB sınırı), ¦02-guides/data-security.md¦ (doğrulama, yetki, DAL, dönüş değerlerini kontrol). Kod örneği öğretim amaçlıdır; ¦oturumuDogrula¦ projene özgü bir fonksiyondur.`
  ),
  "nx-route": L(
    `## Route Handlers
¦route.ts¦ dosyası bir **HTTP uç noktası** tanımlar (¦app/api/saglik/route.ts¦):

~~~ts
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  return NextResponse.json({ q, zaman: Date.now() });
}

export async function POST(req: NextRequest) {
  const govde = await req.json();
  return NextResponse.json({ alindi: govde }, { status: 201 });
}

// app/api/urunler/[id]/route.ts içinde: bağlam tipi global RouteContext yardımcısıyla gelir
export async function GET(_: NextRequest, ctx: RouteContext<"/api/urunler/[id]">) {
  const { id } = await ctx.params;
  return NextResponse.json({ id });
}
~~~
Desteklenen yöntemler: ¦GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS¦. Aynı yolda ¦page.tsx¦ ve ¦route.ts¦ birlikte olamaz.

### Ne zaman Route Handler, ne zaman Server Action?
| | Server Action | Route Handler |
|---|---|---|
| Kimin çağırdığı | Kendi arayüzün (form/buton) | Üçüncü taraf, mobil uygulama, webhook, dış sistem |
| Dönüş | React ağacı/değer | HTTP yanıtı (JSON, dosya, akış) |
| Önbellek | İlgisiz | GET davranışı kullandığın önbellek modeline bağlı |

### Örnek kullanım alanları
Webhook alıcısı (ödeme sağlayıcısı), dosya indirme, RSS/sitemap, dış istemcilere API.

## proxy.ts (eski adıyla middleware)
Next.js 16'da **Middleware, Proxy** olarak yeniden adlandırıldı: ¦proxy.ts¦ (kök veya ¦src/¦).

~~~ts
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (!request.cookies.get("oturum")) {
    return NextResponse.redirect(new URL("/giris", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/panel/:path*"] };
~~~
- Kullanım: yönlendirme, başlık ekleme, **iyimser (optimistic) yetki kontrolü**, A/B yönlendirmesi.
- **Yavaş veri çekme için değildir.** Proxy'de ¦fetch¦ önbellek seçenekleri etkisizdir.
- Tek bir ¦proxy.ts¦ dosyası desteklenir; mantığı modüllere böl.
- Basit yönlendirmeler için önce ¦next.config¦ ¦redirects¦'i düşün.
- ¦matcher¦ ile statik dosyaları dışarıda bırak (bu sitenin kimlik kapısı bunu yapıyor).

~~~mermaid İstek yolu: proxy → rota
flowchart LR
  R["İstek"] --> PX{"proxy.ts<br/>matcher eşleşiyor mu?"}
  PX -- "evet: yönlendir / başlık ekle" --> OUT["Yanıt ya da devam"]
  PX -- "hayır" --> RT["page.tsx / route.ts"]
  OUT --> RT
  RT --> DAL["DAL: asıl yetki kontrolü"]
~~~

## Backend-for-Frontend (BFF)
Next.js'i, tarayıcı ile asıl API'ler arasında ince bir katman olarak kullanmak: gizli anahtarlar sunucuda kalır, yanıtlar arayüze göre biçimlenir.

## Alıştırma
Bir webhook uç noktası yaz (imza başlığını doğrula, geçersizse 401), ardından ¦proxy.ts¦ ile ¦/panel¦ altını oturumsuzken ¦/giris¦'e yönlendir; proxy'nin yalnızca iyimser kontrol olduğunu, asıl yetkinin sayfada/DAL'de verildiğini not et.`,
    DOC + `İlgili dosyalar: ¦01-getting-started/15-route-handlers.md¦, ¦16-proxy.md¦ ("Starting with Next.js 16, Middleware is now called Proxy"), ¦02-guides/backend-for-frontend.md¦. Not: son örnek ayrı bir dosyadadır (¦app/api/urunler/[id]/route.ts¦); aynı dosyada iki ¦GET¦ tanımlanamaz.`
  ),
  "nx-auth": L(
    `## Üç kavram
1. **Kimlik doğrulama (authentication)**: Kullanıcı kim? (giriş)
2. **Oturum yönetimi (session)**: Girişten sonra kimliği istekler boyunca korumak.
3. **Yetkilendirme (authorization)**: Bu kullanıcı bunu yapabilir mi?

## Oturum türleri
| | Stateless (çerezde şifreli/imzalı) | Veritabanı oturumu |
|---|---|---|
| Nerede? | Çerez içinde (JWT/imzalı) | DB'de kayıt, çerezde yalnızca kimlik |
| Artı | Hızlı, DB sorgusu yok | Anında iptal edilebilir |
| Eksi | İptali zor | Her istekte sorgu |

Çerez önerileri: ¦httpOnly¦, ¦secure¦ (üretimde), ¦sameSite: "lax"¦, makul bir bitiş süresi, ¦path: "/"¦.

## Şifreler
Asla düz metin saklama; **argon2 / bcrypt / scrypt** gibi yavaş, tuzlu özet kullan. Giriş hatasında "e-posta mı şifre mi yanlış" bilgisini sızdırma.

## Yetki kontrolü nerede yapılır?
- **Proxy**: iyimser kontrol (çerez var mı?) — hızlı, ama **asıl koruma değildir**.
- **Veri Erişim Katmanı (DAL)**: Veriyi okuyan/yazan **tek yer**; her fonksiyon önce oturumu doğrular.
- **Server Component / Server Action / Route Handler**: her birinde ayrı kontrol.
- **Layout'ta kontrol yetmez**: Layout, gezinmede yeniden render edilmez; alt sayfaların veri erişimi kendi kontrolünü yapmalı.

~~~ts
// lib/dal.ts
import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";

export const oturumuDogrula = cache(async () => {
  const cerez = (await cookies()).get("oturum")?.value;
  const oturum = await oturumuCoz(cerez);
  if (!oturum) return null;
  return { userId: oturum.userId, rol: oturum.rol };
});

export async function kendiSiparislerim() {
  const o = await oturumuDogrula();
  if (!o) return [];
  return prisma.order.findMany({ where: { userId: o.userId } });
}
~~~

~~~mermaid Her istekte yetki kontrolü: DAL
sequenceDiagram
  participant K as Tarayıcı
  participant S as Sayfa (Server Component)
  participant D as DAL
  participant V as Veritabanı
  K->>S: GET /siparislerim
  S->>D: kendiSiparislerim()
  D->>D: oturumu doğrula (çerez)
  alt oturum yok
    D-->>S: boş / yönlendir
  else oturum var
    D->>V: WHERE userId = oturum.userId
    V-->>D: kayıtlar
    D-->>S: DTO (yalnızca gereken alanlar)
  end
  S-->>K: HTML
~~~

## DTO (Data Transfer Object)
Veritabanı kaydını olduğu gibi döndürme; arayüzün ihtiyaç duyduğu alanları (şifre özeti, iç notlar olmadan) seçip döndür.

## Hazır çözümler
Kendin yazmak yerine **Auth.js**, Clerk, Better Auth gibi kütüphaneleri değerlendir; yine de oturum/yetki mantığını anlaman gerekir.

## Alıştırma
Çerez tabanlı basit bir giriş yaz: kayıt (argon2/bcrypt), giriş, çıkış, ¦oturumuDogrula¦ DAL fonksiyonu ve rolü ¦ADMIN¦ olanlara özel bir sayfa; yetkisiz erişimde ¦forbidden/unauthorized¦ davranışını dene.`,
    DOC + `İlgili dosya: ¦02-guides/authentication.md¦ (kimlik doğrulama, stateless/DB oturumu, proxy ile iyimser kontrol, DAL, DTO, "Layouts and auth checks"), ¦data-security.md¦. Şifre özetleme önerileri OWASP Password Storage rehberine dayanır. Kaynak: [Auth.js](https://authjs.dev). Bu sitenin kimlik kapısı basit bir paylaşılan-parola + HMAC çerez örneğidir (¦src/lib/site-auth.ts¦, ¦src/proxy.ts¦).`
  ),
  "nx-hata": L(
    `## İki tür hata
1. **Beklenen hata**: Doğrulama, "kullanıcı bulunamadı". Bunlar **dönüş değeri** olarak ele alınır (özel durum fırlatma).
2. **Beklenmeyen hata (istisna)**: Hata sınırlarına (error boundary) yakalatılır.

## Server Action'da beklenen hata
~~~ts
export async function kaydol(onceki: unknown, fd: FormData) {
  const eposta = String(fd.get("eposta"));
  if (await kullaniciVarMi(eposta)) return { hata: "Bu e-posta kayıtlı" };
  /* ... */
  return { basarili: true };
}
~~~
Formda ¦useActionState¦ ile göster.

## error.tsx (route segmenti hata sınırı)
~~~tsx
"use client";
export default function Hata({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div role="alert">
      <h2>Bir şeyler ters gitti</h2>
      <button onClick={() => reset()}>Tekrar dene</button>
    </div>
  );
}
~~~
- ¦error.tsx¦ bir **Client Component**tir; hatayı en yakın sınır yakalar, bu yüzden iç içe yerleştirilebilir.
- ¦digest¦ üretimde hassas mesajı sızdırmadan sunucu günlüğüyle eşleştirmeye yarar.
- Kök layout hatası için ¦global-error.tsx¦ (kendi ¦<html>¦ ve ¦<body>¦ etiketlerini içerir).

## not-found
~~~tsx
import { notFound } from "next/navigation";
const urun = await urunGetir(id);
if (!urun) notFound();     // en yakın not-found.tsx gösterilir, 404 döner
~~~

## İyi pratikler
- Kullanıcıya **eyleme dönük** mesaj ver, teknik detayı değil.
- Hataları günlüğe/izleme servisine gönder (¦instrumentation¦ ve Sentry benzeri araçlar).
- Hata durumunu **test et**: bilerek hata fırlatan bir sayfa yaz.

## Alıştırma
Bir sayfada veritabanı hatasını simüle et; ¦error.tsx¦ ile "Tekrar dene" göster. Olmayan kaynak için ¦notFound()¦ ve özel ¦not-found.tsx¦ yaz.`,
    DOC + `İlgili dosya: ¦01-getting-started/10-error-handling.md¦ (beklenen hatalar, Server Functions, not found, iç içe error boundary, global errors). Hata izleme için bkz. ¦02-guides/instrumentation.md¦ ve ¦open-telemetry.md¦.`
  ),
  "nx-seo": L(
    `## Metadata API
~~~tsx
// app/urunler/[id]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const urun = await urunGetir(id);
  return {
    title: urun.ad + " | Mağaza",
    description: urun.ozet,
    openGraph: { title: urun.ad, images: [urun.gorsel] },
    alternates: { canonical: "/urunler/" + id },
  };
}
~~~
Statik sayfada ¦export const metadata = { ... }¦ yeter. ¦layout¦ içindeki metadata alt sayfalara miras kalır; ¦title.template¦ ile ortak ek tanımlanır.

## Dosya konvansiyonları
¦app/sitemap.ts¦, ¦app/robots.ts¦, ¦app/manifest.ts¦, ¦opengraph-image.tsx¦, ¦icon.png¦: kod veya statik dosya olarak üretilir.

## Görseller: ¦next/image¦
~~~tsx
import Image from "next/image";
<Image src="/hero.jpg" alt="Ürün fotoğrafı" width={1200} height={630} priority />
~~~
- Otomatik boyutlandırma ve modern formatlar, **tembel yükleme**, ¦width/height¦ ile CLS'i önleme.
- Ekran üstü ana görsele ¦priority¦ ver.
- Uzak görseller için izinli kaynakları yapılandır (¦remotePatterns¦).
- ¦alt¦ metni zorunludur (erişilebilirlik).

## Fontlar: ¦next/font¦
~~~tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });
// <body className={inter.className}>
~~~
Fontlar derleme zamanında indirilip kendi alan adından sunulur (ek istek ve yerleşim kayması azalır). Türkçe karakterler için ¦latin-ext¦ alt kümesini unutma.

## SEO kontrol listesi
Anlamlı ¦title¦/¦description¦, tek ¦h1¦, semantik HTML, kanonik URL, sitemap, yapısal veri (JSON-LD), hızlı sayfa (Core Web Vitals), mobil uyumluluk.

## Alıştırma
Ürün detay sayfasına dinamik metadata, Open Graph görseli ve ¦sitemap.ts¦ ekle; Lighthouse SEO ve Performans skorlarını önce/sonra karşılaştır.`,
    DOC + `İlgili dosyalar: ¦01-getting-started/14-metadata-and-og-images.md¦, ¦12-images.md¦, ¦13-fonts.md¦, ¦02-guides/json-ld.md¦. Alt kümeler (¦latin-ext¦) Google Fonts'un standart alt küme adlarıdır.`
  ),
  "nx-prod": L(
    `## Üretim kontrol listesi (Next.js dokümanının özeti)
**Varsayılan olarak gelenler**: Server Components, rota bazlı kod bölme, bağlantı **prefetch**'i, ön-render, önbellekleme.

**Sen yapacaksın:**
- **Rota/render**: Layout'larda gezinmede state kaybetmeni anla; dinamik API (¦cookies¦, ¦headers¦) kullanan sayfalar dinamik olur.
- **Veri**: İstemciye giden veriyi küçük tut; waterfall'dan kaçın; Suspense ile akıt.
- **Güvenlik**: Tüm Server Action/Route Handler'da yetki + girdi doğrulaması; gizli anahtarlar yalnızca sunucu ortam değişkeninde; ¦import "server-only"¦; güvenlik başlıkları ve CSP.
- **Metadata/SEO**: Başlık, açıklama, OG görseli, sitemap, robots.
- **Tip güvenliği**: ¦strict¦ TypeScript, ¦next typegen¦.
- **Erişilebilirlik**: ¦eslint-plugin-jsx-a11y¦ (Next ESLint yapılandırmasıyla gelen kurallar), klavye gezinmesi.
- **Core Web Vitals**: Lighthouse'u **üretim** derlemesinde, gizli pencerede çalıştır.
- **Paket analizi**: Gereksiz büyük bağımlılıkları bul.

## Test
Üç katman: **birim** (Vitest/Jest), **bileşen** (Testing Library), **E2E** (Playwright/Cypress). Server Component'ler için async bileşen testleri sınırlıdır; kritik akışı **E2E** ile doğrula. Dokümanda Vitest, Jest, Playwright, Cypress kurulumları ayrı rehberlerdir (¦02-guides/testing/¦).

## Yayınlama seçenekleri
| Seçenek | Not |
|---|---|
| **Vercel** | Next.js'in geliştiricisi; git push → önizleme + üretim dağıtımı |
| **Node.js sunucusu** (¦next start¦) | Tüm özellikler; kendi sunucunda/VM'de |
| **Docker** | Aynı imajı herhangi bir bulut/Kubernetes'te çalıştır |
| **Statik dışa aktarım** (¦output: "export"¦) | Sunucu özellikleri olmadan; yalnızca statik içerik |
| **Adaptörler** | Diğer platformlar için resmi yol; platform desteğini kontrol et |

Self-hosting'de: ters vekil (reverse proxy), ¦X-Forwarded-*¦ başlıkları, **önbellek/ISR yönetimi** (çoklu örnekte paylaşılan önbellek), görsel optimizasyonu için ¦sharp¦, ortam değişkenleri ve sağlık kontrolleri düşünülmelidir.

## Ortam değişkenleri
¦.env.local¦ yalnızca yerelde; üretimde platformun gizli yönetimi. ¦NEXT_PUBLIC_¦ ön ekli değişkenler **derleme anında koda gömülür** ve herkese görünür.

## Veritabanı geçişleri
Yeni tabloyu kullanan kod yayına gitmeden **önce** ¦prisma migrate deploy¦ (veya eşdeğeri) üretim veritabanında çalışmalı; eklemeli (additive) değişiklik güvenlidir.

## Gözlemlenebilirlik
Yapısal günlük, hata izleme, ¦instrumentation¦ + OpenTelemetry, ¦useReportWebVitals¦ ile gerçek kullanıcı metrikleri.

## Alıştırma
Kendi projen için kontrol listesini kopyala, her maddeyi "Tamam / Yapılmadı / Gerekmiyor" olarak işaretle; yapılmayanlar için bir bilet aç. Ardından aynı projeyi Docker imajı olarak derle ve yerelde çalıştır.`,
    DOC + `İlgili dosyalar: ¦02-guides/production-checklist.md¦, ¦self-hosting.md¦, ¦01-getting-started/17-deploying.md¦, ¦02-guides/testing/¦, ¦environment-variables.md¦, ¦instrumentation.md¦. Kaynaklar: [Vercel dokümantasyonu](https://vercel.com/docs), [Playwright](https://playwright.dev/docs/intro).`
  ),
  "nx-proje": L(
    `## Hedef
Bir **gereksinim → tasarım → kod → test → yayın** döngüsünü Next.js 16 ile uçtan uca yaşamak. Bu ders, bir proje planıdır; dört aşama, BT Akademi'nin "Proje 1–4" mantığına karşılık gelir ve Yazılım Mühendisi modülündeki analiz/Scrum dersleriyle birleşir.

## Önerilen proje: "Randevu ve Müşteri Yönetimi" (veya kendi fikrin)
Bir işletme (berber, klinik, atölye) için randevu alma + yönetici paneli.

### Aşama 1 — Analiz ve tasarım (Proje 1)
- 10 kullanıcı hikâyesi yaz ve kabul ölçütleriyle birlikte **Product Backlog**'a koy.
- Bir kullanım vakası diyagramı (kullanıcı, yönetici) ve veri modeli (ER diyagramı) çiz.
- Wireframe: ana sayfa, randevu formu, yönetici takvimi.
- Fonksiyonel olmayan gereksinimler: performans (LCP < 2,5 sn), erişilebilirlik, güvenlik.

### Aşama 2 — Veri ve çekirdek (Proje 2)
- Next.js 16 + TypeScript + Prisma + PostgreSQL (Neon).
- Şema: ¦User¦, ¦Service¦, ¦Appointment¦ (çakışma kontrolü için benzersiz kısıt/transaction).
- Server Component'lerle listeleme, dinamik rotalar, ¦loading.tsx¦.

### Aşama 3 — Etkileşim ve güvenlik (Proje 3)
- Server Action ile randevu oluşturma (Zod doğrulama, yetki, ¦useActionState¦).
- Kimlik doğrulama + rol (müşteri/yönetici), DAL, ¦proxy.ts¦ iyimser koruma.
- E-posta bildirimi (ör. Route Handler/webhook veya kuyruk).

### Aşama 4 — Kalite ve yayın (Proje 4)
- Birim + bileşen + E2E testleri (kayıt → randevu → iptal akışı).
- Core Web Vitals ölçümü, erişilebilirlik denetimi, SEO.
- Vercel'e yayın, ortam değişkenleri, üretim veritabanı geçişi, hata izleme.
- ¦README¦: kurulum, mimari kararlar (ADR), ekran görüntüleri.

## Bitirme ölçütleri (Definition of Done)
- Tüm kritik akışlar E2E testle korunuyor.
- Yetkisiz kullanıcı başka kullanıcının randevusuna erişemiyor (test var).
- ¦strict¦ TypeScript, lint temiz, CI'da testler geçiyor.
- Lighthouse: Performans ve Erişilebilirlik ≥ 90 (ölçülmüş).
- Canlı adres + kısa tanıtım videosu/GIF.

## Çalışma biçimi
Scrum'ı küçük ölçekte uygula: 1 haftalık sprintler, sprint sonunda demo, retro notları. Her aşama sonunda **kendi kendine kod incelemesi** (PR aç, kontrol listesiyle gözden geçir).

## Alıştırma
Fikri seç, Aşama 1 çıktılarını (backlog + ER diyagramı + wireframe) tamamla; ancak sonra kod yazmaya başla.`,
    `**Kaynaklar:** [Next.js Learn — Dashboard uygulaması](https://nextjs.org/learn/dashboard-app) (resmi kurs; aşama 2–4 için yol gösterir), [Next.js dokümantasyonu](https://nextjs.org/docs/app). Proje fikri ve ölçütler önerilerdir; hedef/eşik değerleri kendi ihtiyacına göre ayarla.`
  ),
};
