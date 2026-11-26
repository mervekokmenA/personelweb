import type { ModuleContent } from "./types";
import { lessonBody as L } from "./md";

type Bodies = ModuleContent["bodies"];

export const muhendisBodiesA: Bodies = {
  "se-algo": L(
    `## Algoritma nedir?
Bir problemi çözmek için **sonlu, açık, sıralı adımlar** dizisi. Yazılım yazmadan önce algoritmayı anlatabilmelisin.

## Yazılımcı gibi düşünmek: 5 adım
1. **Problemi anla**: Girdi, çıktı, kısıt. ("En büyük sayıyı bul" → liste boş olabilir mi?)
2. **Örnekle**: 3–4 elle çözülmüş örnek (kenar durumlar dahil).
3. **Parçala**: Büyük problemi küçük alt problemlere böl.
4. **Sözde kod yaz**, sonra koda dök.
5. **Test et ve iyileştir**.

## Sözde kod örneği
~~~text
fonksiyon enBuyuk(liste):
    eğer liste boşsa → hata ver
    en = liste[0]
    her x için liste içinde:
        eğer x > en ise: en = x
    en değerini döndür
~~~

~~~ts
function enBuyuk(liste: number[]): number {
  if (liste.length === 0) throw new Error("Liste boş olamaz");
  let en = liste[0];
  for (const x of liste) if (x > en) en = x;
  return en;
}
~~~

## Karmaşıklık: Big-O'ya giriş
İşlem sayısının girdi boyutu n ile nasıl büyüdüğü.
| Gösterim | Örnek |
|---|---|
| O(1) | Dizide indeksle erişim |
| O(log n) | İkili arama |
| O(n) | Listeyi bir kez dolaşmak |
| O(n log n) | İyi sıralama algoritmaları |
| O(n²) | İç içe iki döngü |

~~~svg Büyüme hızı karşılaştırması: girdi büyüdükçe işlem sayısı
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 260' font-family='system-ui,sans-serif' font-size='11'><rect width='460' height='260' fill='white'/><line x1='46' y1='16' x2='46' y2='230' stroke='#555'/><line x1='46' y1='230' x2='444' y2='230' stroke='#555'/><text x='245.0' y='252' text-anchor='middle' fill='#444'>girdi boyutu (n)</text><text x='12' y='123.0' fill='#444' transform='rotate(-90 12 123.0)' text-anchor='middle'>işlem sayısı</text><polyline points='46.0,208.6 56.0,208.6 65.9,208.6 75.8,208.6 85.8,208.6 95.8,208.6 105.7,208.6 115.6,208.6 125.6,208.6 135.6,208.6 145.5,208.6 155.4,208.6 165.4,208.6 175.3,208.6 185.3,208.6 195.2,208.6 205.2,208.6 215.2,208.6 225.1,208.6 235.0,208.6 245.0,208.6 255.0,208.6 264.9,208.6 274.9,208.6 284.8,208.6 294.8,208.6 304.7,208.6 314.7,208.6 324.6,208.6 334.6,208.6 344.5,208.6 354.4,208.6 364.4,208.6 374.3,208.6 384.3,208.6 394.2,208.6 404.2,208.6 414.2,208.6 424.1,208.6 434.1,208.6 444.0,208.6' fill='none' stroke='#16a34a' stroke-width='2.2'/><polyline points='46.0,230.0 56.0,230.0 65.9,230.0 75.8,230.0 85.8,230.0 95.8,223.1 105.7,217.5 115.6,212.7 125.6,208.6 135.6,205.0 145.5,201.7 155.4,198.8 165.4,196.1 175.3,193.6 185.3,191.3 195.2,189.2 205.2,187.2 215.2,185.3 225.1,183.6 235.0,181.9 245.0,180.3 255.0,178.8 264.9,177.4 274.9,176.0 284.8,174.7 294.8,173.4 304.7,172.2 314.7,171.0 324.6,169.9 334.6,168.8 344.5,167.8 354.4,166.8 364.4,165.8 374.3,164.8 384.3,163.9 394.2,163.0 404.2,162.2 414.2,161.3 424.1,160.5 434.1,159.7 444.0,158.9' fill='none' stroke='#0ea5e9' stroke-width='2.2'/><polyline points='46.0,230.0 56.0,224.7 65.9,219.3 75.8,213.9 85.8,208.6 95.8,203.2 105.7,197.9 115.6,192.6 125.6,187.2 135.6,181.8 145.5,176.5 155.4,171.2 165.4,165.8 175.3,160.4 185.3,155.1 195.2,149.8 205.2,144.4 215.2,139.1 225.1,133.7 235.0,128.4 245.0,123.0 255.0,117.6 264.9,112.3 274.9,107.0 284.8,101.6 294.8,96.2 304.7,90.9 314.7,85.5 324.6,80.2 334.6,74.8 344.5,69.5 354.4,64.2 364.4,58.8 374.3,53.5 384.3,48.1 394.2,42.8 404.2,37.4 414.2,32.0 424.1,26.7 434.1,21.3 444.0,16.0' fill='none' stroke='#eab308' stroke-width='2.2'/><polyline points='46.0,230.0 56.0,230.0 65.9,230.0 75.8,230.0 85.8,230.0 95.8,227.4 105.7,224.3 115.6,220.8 125.6,217.0 135.6,212.9 145.5,208.6 155.4,204.0 165.4,199.2 175.3,194.2 185.3,189.0 195.2,183.6 205.2,178.1 215.2,172.5 225.1,166.7 235.0,160.8 245.0,154.7 255.0,148.6 264.9,142.3 274.9,135.9 284.8,129.4 294.8,122.8 304.7,116.2 314.7,109.4 324.6,102.6 334.6,95.6 344.5,88.6 354.4,81.5 364.4,74.4 374.3,67.1 384.3,59.8 394.2,52.4 404.2,45.0 414.2,37.5 424.1,29.9 434.1,22.3 444.0,16.0' fill='none' stroke='#f97316' stroke-width='2.2'/><polyline points='46.0,230.0 56.0,229.9 65.9,229.5 75.8,228.8 85.8,227.9 95.8,226.7 105.7,225.2 115.6,223.4 125.6,221.4 135.6,219.2 145.5,216.6 155.4,213.8 165.4,210.7 175.3,207.4 185.3,203.8 195.2,199.9 205.2,195.8 215.2,191.3 225.1,186.7 235.0,181.7 245.0,176.5 255.0,171.0 264.9,165.3 274.9,159.2 284.8,153.0 294.8,146.4 304.7,139.6 314.7,132.5 324.6,125.1 334.6,117.5 344.5,109.6 354.4,101.5 364.4,93.0 374.3,84.3 384.3,75.4 394.2,66.2 404.2,56.7 414.2,46.9 424.1,36.9 434.1,26.6 444.0,16.0' fill='none' stroke='#dc2626' stroke-width='2.2'/><rect x='56' y='14' width='12' height='4' fill='#16a34a'/><text x='74' y='20' fill='#333'>O(1)</text><rect x='56' y='29' width='12' height='4' fill='#0ea5e9'/><text x='74' y='35' fill='#333'>O(log n)</text><rect x='56' y='44' width='12' height='4' fill='#eab308'/><text x='74' y='50' fill='#333'>O(n)</text><rect x='56' y='59' width='12' height='4' fill='#f97316'/><text x='74' y='65' fill='#333'>O(n log n)</text><rect x='56' y='74' width='12' height='4' fill='#dc2626'/><text x='74' y='80' fill='#333'>O(n²)</text></svg>
~~~

## Temel veri yapıları ve algoritmalar (yol haritası)
Dizi, bağlı liste, yığın/kuyruk, hash tablosu (Map), ağaç, graf; sıralama, arama, özyineleme. Görselleştirmek için VisuAlgo harika.

## Alıştırma
Şunları önce sözde kodla, sonra TypeScript ile yaz: (1) bir metnin palindrom olup olmadığı, (2) bir dizideki tekrar eden elemanlar, (3) iki sıralı listeyi birleştirme. Her biri için Big-O'yu yaz.`,
    `**Kaynaklar:** [CS50x](https://cs50.harvard.edu/x/), [Big-O Cheat Sheet](https://www.bigocheatsheet.com), [VisuAlgo](https://visualgo.net). Karmaşıklık tablosu standart özet değerlerdir.`
  ),
  "se-sektor": L(
    `## Yazılım takımında roller
| Rol | Ne yapar? |
|---|---|
| **İş analisti** | İş ihtiyacını anlar, gereksinimi yazar, paydaşlarla geliştirici arasında köprü olur |
| **Geliştirici (developer)** | Gereksinimi koda çevirir, kod incelemesi yapar |
| **Tester / QA** | Test senaryosu yazar, hataları bulur, otomasyon kurar |
| **Ürün sahibi (Product Owner)** | Önceliği belirler, backlog'u yönetir |
| **Scrum Master** | Süreci kolaylaştırır, engelleri kaldırır |
| **DevOps / SRE** | Dağıtım, altyapı, izleme |
| **UX/UI tasarımcı** | Kullanıcı deneyimi ve arayüz |

Küçük ekiplerde bir kişi birden çok rolü üstlenir.

## Kariyer basamakları (genel)
Stajyer → Junior → Mid → Senior → Lead/Staff/Principal veya yöneticilik yolu. Basamağı unvan değil, **bağımsız çözebildiğin problem büyüklüğü** belirler.

## Geliştirme ortamı hazırlığı
1. **Node.js (LTS)** kur: ¦node -v¦, ¦npm -v¦.
2. **Git** kur ve yapılandır: ¦git config --global user.name "..."¦, ¦user.email¦.
3. **VS Code** + eklentiler: ESLint, Prettier, GitLens.
4. **Terminal** alışkanlığı: ¦cd¦, ¦ls¦, ¦mkdir¦, ¦npm run¦.
5. **GitHub hesabı** ve SSH anahtarı.
6. (Veritabanı için) **PostgreSQL** veya Docker.

## Programdaki "C#" kısmı hakkında
BT Akademi programı C#/.NET kullanır. Bu modül aynı kavramları **TypeScript** ile işler çünkü hedef React/Next.js. İstersen C# Turu'nu (Microsoft Learn) isteğe bağlı oku; sınıf, arayüz, generic, LINQ kavramları örtüşür.

## Alıştırma
Bir ilanda (ör. "Junior Frontend Developer") istenen becerileri listele; bu müfredatın hangi ünitesinin hangisini karşıladığını eşleştir ve eksikleri not et.`,
    `**Kaynaklar:** [roadmap.sh — Full Stack](https://roadmap.sh/full-stack), [Atlassian Git eğitimleri](https://www.atlassian.com/git/tutorials), [The Odin Project](https://www.theodinproject.com). Roller ve basamaklar şirketten şirkete değişir; tablo genel bir özettir.`
  ),
  "se-degisken": L(
    `## Değişkenler ve tipler (TypeScript)
~~~ts
const ad: string = "Merve";
let yas: number = 30;
let aktif: boolean = true;
let bos: null = null;
let tanimsiz: undefined;
const liste: number[] = [1, 2, 3];
~~~
- **¦const¦** yeniden atamayı engeller, **¦let¦** engellemez; ¦var¦ kullanma.
- Tipler çalışma zamanında silinir; derleme sırasında hata yakalar.

## Değer ve referans tipler
| | Primitive (değer) | Nesne (referans) |
|---|---|---|
| Örnek | ¦number, string, boolean¦ | ¦{}, [], function¦ |
| Atama | **Kopyalanır** | **Referans** kopyalanır |

~~~ts
let a = 1; let b = a; b = 2;       // a hâlâ 1
const x = { n: 1 }; const y = x; y.n = 2;   // x.n de 2!
~~~
**Boxing/unboxing** (C#): Değer tipi ↔ nesne dönüşümü. JavaScript'te primitive'ler gerektiğinde otomatik "sarılır" (¦"abc".length¦), ayrıca ayrıntı yönetmen gerekmez.

## Operatörler
Aritmetik (¦+ - * / % **¦), karşılaştırma (¦=== !== < >¦; her zaman **¦===¦**), mantıksal (¦&& || !¦), ¦??¦ (null birleştirme), ¦?.¦ (isteğe bağlı zincir).

## Karar yapıları
~~~ts
if (puan >= 90) not = "AA";
else if (puan >= 80) not = "BA";
else not = "BB";

switch (rol) {
  case "admin": yetki = 3; break;
  case "editor": yetki = 2; break;
  default: yetki = 1;
}
~~~

## Döngüler
~~~ts
for (let i = 0; i < 5; i++) { }
for (const x of liste) { }          // değerler
for (const k in nesne) { }          // anahtarlar (nesne için)
while (kosul) { }
do { /* en az bir kez */ } while (kosul);
~~~

## Alıştırma
FizzBuzz (1–100: 3'e bölünene "Fizz", 5'e "Buzz", ikisine "FizzBuzz"), asal sayı bulma ve not hesaplama programı yaz; ¦==¦ ile ¦===¦ farkını gösteren üç örnek bul.`,
    `**Kaynaklar:** [MDN — Denetim akışı](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling), [TypeScript günlük tipler](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [C# Turu](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/) (karşılaştırma için). Boxing JS'te C#'taki gibi açık bir kavram değildir; bu ders onu yaklaşık karşılığıyla anlatır.`
  ),
  "se-koleksiyon": L(
    `## Diziler
~~~ts
const sayilar = [5, 2, 9];
sayilar.push(7);            // sona ekle
sayilar.sort((a, b) => a - b);
for (const s of sayilar) console.log(s);          // foreach karşılığı
sayilar.forEach((s, i) => console.log(i, s));
~~~
**Dikkat:** ¦sort()¦ varsayılan olarak **metin sırası** kullanır; sayılar için karşılaştırma fonksiyonu ver.

## Dizi metotları (LINQ karşılığı)
| C# LINQ | JavaScript |
|---|---|
| ¦Select¦ | ¦map¦ |
| ¦Where¦ | ¦filter¦ |
| ¦Aggregate¦ | ¦reduce¦ |
| ¦Any / All¦ | ¦some / every¦ |
| ¦First¦ | ¦find¦ |

## Koleksiyonlar
- **¦Array¦** = ArrayList/List
- **¦Map<K,V>¦** = Dictionary (anahtar tipi serbest, ekleme sırası korunur)
- **¦Set<T>¦** = HashSet (tekrarsız)
- **¦Record<string, T>¦** = basit sözlük tipi

~~~ts
const stok = new Map<string, number>([["klavye", 5]]);
stok.set("fare", 12);
stok.get("fare");     // 12
const benzersiz = new Set([1, 1, 2]);   // {1, 2}
~~~

## Metotlar (fonksiyonlar)
~~~ts
function topla(a: number, b: number): number { return a + b; }       // değer döndüren
function logla(mesaj: string): void { console.log(mesaj); }          // döndürmeyen
function selamla(ad = "Ziyaretçi") { return "Merhaba " + ad; }       // varsayılan parametre
~~~
**Overload (aşırı yükleme)** TypeScript'te imza düzeyinde tanımlanır:
~~~ts
function bicimle(x: number): string;
function bicimle(x: Date): string;
function bicimle(x: number | Date): string { return String(x); }
~~~

## Generic yapılar
~~~ts
function ilk<T>(liste: T[]): T | undefined { return liste[0]; }
const n = ilk([1, 2]);        // number | undefined
const s = ilk(["a"]);         // string | undefined
~~~

## Alıştırma
Bir sipariş listesinden (id, müşteri, tutar) şunları hesapla: toplam tutar (¦reduce¦), 500 TL üstü siparişler (¦filter¦), müşteri başına toplam (¦Map¦).`,
    `**Kaynaklar:** [MDN — Anahtarlı koleksiyonlar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections), [TypeScript günlük tipler](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [javascript.info](https://javascript.info). LINQ tablosu en yakın karşılıkları gösterir.`
  ),
  "se-hata": L(
    `## try / catch / finally
~~~ts
try {
  const veri = JSON.parse(metin);
  islemYap(veri);
} catch (hata) {
  if (hata instanceof SyntaxError) console.error("Geçersiz JSON");
  else throw hata;                     // bilmediğin hatayı yutma
} finally {
  kaynaklariKapat();                   // her durumda çalışır
}
~~~
- **¦catch¦ içindeki ¦hata¦ tipi ¦unknown¦ olabilir**; kullanmadan önce daralt (¦instanceof¦).
- Hatayı yutma (boş ¦catch¦ bloğu) → sorunları gizler.

## Özel hata sınıfları
~~~ts
class DogrulamaHatasi extends Error {
  constructor(public alan: string, mesaj: string) {
    super(mesaj);
    this.name = "DogrulamaHatasi";
  }
}
throw new DogrulamaHatasi("eposta", "Geçersiz e-posta");
~~~

## İyi hata yönetimi ilkeleri
1. **Beklenen** durumu (doğrulama) normal akışla, **beklenmeyen** durumu istisnayla ele al.
2. Hatayı **uygun katmanda** yakala (UI'da kullanıcıya, servis katmanında günlüğe).
3. Kullanıcıya **eyleme dönük** mesaj ver; teknik ayrıntıyı günlüğe yaz.
4. Asenkron kodda ¦await¦ ile ¦try/catch¦ ya da ¦.catch()¦ kullan; yakalanmayan Promise hataları sürece zarar verir.

## Hata ayıklama
- **Tarayıcı/VS Code hata ayıklayıcısı**: kesme noktası (breakpoint), adım adım ilerleme, değişken izleme.
- ¦console.log¦ ilk adımdır ama kalıcı çözüm değildir; yapısal günlük kullan.
- Hata mesajını **baştan sona oku**; çoğu zaman cevap ilk iki satırdadır.
- Hatayı **küçük bir örnekle yeniden üret** (minimal reproducible example).

## Alıştırma
Bir "para birimi çevirici" yaz: geçersiz girdi için özel hata sınıfı fırlat, ana programda yakala ve kullanıcıya anlamlı mesaj ver; bir kesme noktası koyup değişkenleri izleyerek hatayı adım adım takip et.`,
    `**Kaynaklar:** [MDN — Denetim akışı ve hata yönetimi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling), [Node.js — Learn](https://nodejs.org/en/learn). ¦useUnknownInCatchVariables¦ TypeScript ¦strict¦ modunda açıktır.`
  ),
  "se-oop1": L(
    `## OOP nedir? Neden?
Kodu **veri + davranış** birlikte olan nesnelerle modelleme. Faydası: yeniden kullanım, bakım kolaylığı, gerçek dünya kavramlarıyla eşleşme. Dört temel ilke: **kapsülleme, soyutlama, kalıtım, çok biçimlilik**.

## Sınıf ve nesne
~~~ts
class HesapMakinesi {
  private gecmis: number[] = [];
  constructor(public readonly ad: string) {}

  topla(a: number, b: number): number {
    const sonuc = a + b;
    this.gecmis.push(sonuc);
    return sonuc;
  }
  get sonIslem(): number | undefined { return this.gecmis.at(-1); }
}
const hm = new HesapMakinesi("Casio");     // nesne (örnek)
hm.topla(2, 3);
~~~

## Erişim belirleyiciler
| C# | TypeScript | Anlamı |
|---|---|---|
| ¦public¦ | ¦public¦ (varsayılan) | Her yerden erişim |
| ¦private¦ | ¦private¦ (derleme zamanı) / ¦#alan¦ (çalışma zamanı gerçek gizlilik) | Yalnızca sınıf içi |
| ¦protected¦ | ¦protected¦ | Sınıf ve alt sınıflar |
| ¦internal¦ | (modül düzeyinde: ¦export¦ edilmeyen) | Aynı modül/paket |

¦private¦ TypeScript'te yalnızca **derleme zamanı** kontroldür; gerçek çalışma zamanı gizliliği için ¦#alan¦ kullan.

## Static
Sınıfa ait (örneğe değil) üyeler: ¦static¦ alan ve metotlar.
~~~ts
class Matematik { static readonly PI = 3.14159; static kare(x: number) { return x * x; } }
Matematik.kare(4);
~~~
Yardımcı fonksiyonlar için çoğu zaman sınıf yerine **modül + fonksiyon** daha doğaldır.

## Kapsülleme neden önemli?
İç durumu (ör. bakiye) dışarıdan doğrudan değiştirtmeyip kuralları (negatif olamaz) metot içinde zorlarsın.

## Alıştırma
Banka hesabı sınıfı yaz: ¦private bakiye¦, ¦yatir¦ ve ¦cek¦ metotları, yetersiz bakiyede özel hata; ¦#bakiye¦ ile ¦private¦ farkını bir deneyle göster.`,
    `**Kaynaklar:** [MDN — Sınıflar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [MDN — Özel öğeler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements), [TypeScript — Sınıflar](https://www.typescriptlang.org/docs/handbook/2/classes.html). C# ↔ TS erişim tablosu yaklaşık karşılıktır (¦internal¦ karşılığı birebir değildir).`
  ),
  "se-oop2": L(
    `## Kalıtım
~~~ts
class Hayvan {
  constructor(protected ad: string) {}
  sesCikar(): string { return "..."; }
}
class Kedi extends Hayvan {
  override sesCikar() { return this.ad + ": miyav"; }
}
~~~
- **Çok biçimlilik**: ¦Hayvan[]¦ listesinde her nesnenin kendi ¦sesCikar¦'ı çalışır.
- **Kalıtım sığ tutulmalı**: Derin hiyerarşi kırılgandır. Genel ilke: **kompozisyonu kalıtıma tercih et** ("is-a" yerine "has-a").

~~~mermaid Kalıtım: Kedi bir Hayvan'dır
classDiagram
  class Hayvan {
    #ad: string
    +sesCikar() string
  }
  class Kedi {
    +sesCikar() string
  }
  class Kopek {
    +sesCikar() string
  }
  Hayvan <|-- Kedi
  Hayvan <|-- Kopek
~~~

## Arayüz (interface)
Sözleşme: ne yapılacağını söyler, nasıl yapılacağını söylemez.
~~~ts
interface Odeme { ode(tutar: number): Promise<boolean>; }
class KartOdeme implements Odeme { async ode(t: number) { /* ... */ return true; } }
class HavaleOdeme implements Odeme { async ode(t: number) { /* ... */ return true; } }
async function tahsil(o: Odeme, t: number) { return o.ode(t); }   // ödeme türünü bilmez
~~~
TypeScript tipleri **yapısal**dır: ¦implements¦ yazmasan da şekil uyuyorsa nesne arayüzü karşılar.

## Soyut sınıf
~~~ts
abstract class Rapor {
  abstract baslik(): string;                    // alt sınıf doldurmalı
  yazdir() { console.log("=== " + this.baslik() + " ==="); }  // ortak davranış
}
~~~
Soyut sınıftan nesne üretilemez.

## Enum ve struct karşılıkları
- **Enum**: ¦enum Rol { Admin, Editor }¦ yerine çoğu zaman **birleşim tipi** daha hafiftir: ¦type Rol = "admin" | "editor"¦.
- **Struct** (C# değer tipi) JS'te yoktur; küçük veri taşıyıcıları için **¦readonly¦ nesne/tip** kullan:
~~~ts
type Nokta = Readonly<{ x: number; y: number }>;
~~~

## Alıştırma
Bir "Bildirim" sistemi tasarla: ¦Bildirim¦ arayüzü, ¦EpostaBildirim¦ ve ¦SmsBildirim¦ sınıfları; bildirimi gönderen fonksiyon yalnızca arayüzü bilsin. Sonra aynısını kalıtım yerine kompozisyonla yeniden yaz ve karşılaştır.`,
    `**Kaynaklar:** [TypeScript — Sınıflar](https://www.typescriptlang.org/docs/handbook/2/classes.html), [Nesne tipleri ve arayüzler](https://www.typescriptlang.org/docs/handbook/2/objects.html), [Enum'lar](https://www.typescriptlang.org/docs/handbook/enums.html). "Kompozisyon > kalıtım" yaygın kabul gören bir tasarım ilkesidir (Gang of Four).`
  ),
  "se-solid": L(
    `## SOLID
| Harf | İlke | Kısaca |
|---|---|---|
| **S** | Tek sorumluluk | Bir sınıfın değişmesi için **tek** nedeni olmalı |
| **O** | Açık/kapalı | Genişlemeye açık, değişikliğe kapalı (yeni davranış = yeni sınıf, eskiyi bozma) |
| **L** | Liskov yerine geçme | Alt tip, üst tipin yerine kullanılınca beklentiyi bozmamalı |
| **I** | Arayüz ayrımı | Büyük arayüz yerine küçük, amaca özel arayüzler |
| **D** | Bağımlılığın tersine çevrilmesi | Üst düzey modül, somut sınıfa değil **soyutlamaya** bağlı olsun |

## Örnek: D ilkesi (bağımlılık enjeksiyonu)
~~~ts
interface SiparisDeposu { kaydet(s: Siparis): Promise<void>; }

class SiparisServisi {
  constructor(private depo: SiparisDeposu) {}      // somut sınıfı bilmez
  async olustur(s: Siparis) { /* kurallar */ await this.depo.kaydet(s); }
}
// Üretimde: new SiparisServisi(new PrismaSiparisDeposu())
// Testte:   new SiparisServisi(new BellekSiparisDeposu())
~~~

## Temel tasarım desenleri
| Desen | Ne işe yarar? |
|---|---|
| **Strategy** | Algoritmayı değiştirilebilir yapmak (kargo hesaplama yöntemleri) |
| **Factory** | Nesne üretimini tek yerde toplamak |
| **Observer** | Bir olayı birden çok dinleyiciye duyurmak (¦addEventListener¦, React state abonelikleri) |
| **Repository** | Veri erişimini soyutlamak |
| **Adapter** | Uyumsuz arayüzü uyumlu hale getirmek (eski API'yi sarmak) |
| **Decorator** | Davranışı sarmalayarak eklemek (middleware zinciri) |

## Dikkat
Desenler **problem varken** uygulanır; her yere desen yapıştırmak aşırı mühendisliktir. Önce basit yaz, değişim ihtiyacı doğunca refactor et.

## Alıştırma
Sipariş toplamında "indirim" kuralını (yüzde, sabit tutar, kupon) ¦if-else¦ zinciriyle yaz; sonra **Strategy** ile yeniden yaz ve yeni bir kural eklemenin mevcut kodu değiştirip değiştirmediğini gözle.`,
    `**Kaynaklar:** [Refactoring.Guru — Tasarım Desenleri](https://refactoring.guru/design-patterns), [Wikipedia — SOLID](https://en.wikipedia.org/wiki/SOLID); kitap: Design Patterns (Gamma ve ark.), Clean Code (R. C. Martin). Örnek kod öğretim amaçlıdır.`
  ),
  "se-sql-temel": L(
    `## Veri ve veritabanı
**Veri** işlenmemiş gerçekler; **veritabanı** düzenli, sorgulanabilir, kalıcı saklama; **DBMS** (PostgreSQL, MySQL, SQL Server) onu yöneten yazılım.

## İlişkisel model
- **Tablo** (varlık), **satır** (kayıt), **sütun** (alan).
- **Birincil anahtar (PK)**: Satırı benzersiz tanımlar.
- **Yabancı anahtar (FK)**: Başka tablonun PK'sine referans → **ilişki**.
- İlişki türleri: **1–1**, **1–N** (müşteri–sipariş), **N–N** (öğrenci–ders; ara tablo gerekir).

## Kurulum notu
Bu modül **PostgreSQL** kullanır (SQL Server ile sözdizimi büyük ölçüde ortaktır). Yerelde Docker veya doğrudan kurulumla, bulutta Neon gibi bir servisle çalışabilirsin.

~~~mermaid ER diyagramı: bir müşterinin birden çok siparişi olabilir (1–N)
erDiagram
  MUSTERI ||--o{ SIPARIS : verir
  SIPARIS ||--|{ SIPARIS_KALEMI : icerir
  URUN ||--o{ SIPARIS_KALEMI : "satilir"
  MUSTERI {
    int id PK
    string ad
    string eposta
  }
  SIPARIS {
    int id PK
    int musteri_id FK
    numeric tutar
  }
  URUN {
    int id PK
    string ad
    numeric fiyat
  }
~~~

## Kısıtlar
¦PRIMARY KEY¦, ¦FOREIGN KEY¦, ¦UNIQUE¦, ¦NOT NULL¦, ¦CHECK¦, ¦DEFAULT¦: kuralları **veritabanında** zorla; yalnızca uygulamaya güvenme.

~~~sql
CREATE TABLE musteri (
  id        SERIAL PRIMARY KEY,
  ad        TEXT NOT NULL,
  eposta    TEXT NOT NULL UNIQUE
);
CREATE TABLE siparis (
  id          SERIAL PRIMARY KEY,
  musteri_id  INT NOT NULL REFERENCES musteri(id),
  tutar       NUMERIC(10,2) NOT NULL CHECK (tutar >= 0),
  olusturma   TIMESTAMPTZ NOT NULL DEFAULT now()
);
~~~

## Normalizasyon
Tekrarı ve tutarsızlığı azaltmak için tabloyu bölme.
- **1NF**: Her hücre tek değer (liste yok), tekrar eden sütun grupları yok.
- **2NF**: 1NF + bileşik anahtarın **bir kısmına** bağlı alan yok.
- **3NF**: 2NF + **geçişli bağımlılık** yok (alan, anahtar dışı bir alana bağlı olmasın).

Örnek: ¦siparis(id, musteri_adi, musteri_sehri)¦ → müşteri bilgisini ayrı tabloya al, siparişte ¦musteri_id¦ tut. Performans gerekçesiyle bilinçli **denormalizasyon** sonradan yapılabilir, ama önce normalize et.

## Alıştırma
Bir okul için ¦ogrenci¦, ¦ders¦, ¦kayit¦ (N–N) tablolarını ER diyagramıyla tasarla, kısıtlarıyla birlikte ¦CREATE TABLE¦ yaz; 3NF'e uyduğunu gerekçelendir.`,
    `**Kaynaklar:** [PostgreSQL — Eğitim](https://www.postgresql.org/docs/current/tutorial.html), [Kısıtlar](https://www.postgresql.org/docs/current/ddl-constraints.html), [Microsoft — normalleştirme açıklaması](https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description), [SQLBolt](https://sqlbolt.com). SQL Server ↔ PostgreSQL farkı: ¦IDENTITY¦ yerine ¦SERIAL/GENERATED¦, ¦GETDATE()¦ yerine ¦now()¦.`
  ),
  "se-sql-sorgu": L(
    `## SELECT iskeleti
~~~sql
SELECT   sutunlar
FROM     tablo
WHERE    satir_filtresi
GROUP BY gruplama_sutunlari
HAVING   grup_filtresi
ORDER BY siralama
LIMIT    10;
~~~
Mantıksal çalışma sırası: ¦FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT¦.

## Filtreleme
~~~sql
SELECT * FROM urun WHERE fiyat BETWEEN 100 AND 500;
SELECT * FROM urun WHERE kategori IN ('klavye', 'fare');
SELECT * FROM urun WHERE kategori NOT IN ('kablo');
SELECT * FROM musteri WHERE ad LIKE 'Ay%';        -- 'Ay' ile başlayan
SELECT * FROM musteri WHERE telefon IS NULL;      -- NULL için '= NULL' ÇALIŞMAZ
SELECT * FROM musteri WHERE telefon IS NOT NULL;
~~~
**NULL** "bilinmiyor" demektir; ¦NULL = NULL¦ doğru değildir, ¦IS NULL¦ kullan.

## Toplama (aggregate) ve gruplama
~~~sql
SELECT kategori,
       COUNT(*)      AS adet,
       SUM(fiyat)    AS toplam,
       AVG(fiyat)    AS ortalama
FROM urun
GROUP BY kategori
HAVING COUNT(*) > 5          -- gruplar üzerinde filtre (WHERE satırlarda)
ORDER BY toplam DESC;
~~~
**WHERE satırı, HAVING grubu süzer.**

## Hazır fonksiyonlar
- Matematik: ¦ROUND(x, 2)¦, ¦CEIL¦, ¦FLOOR¦, ¦ABS¦, ¦MOD¦.
- Metin: ¦LENGTH¦, ¦UPPER/LOWER¦, ¦TRIM¦, ¦SUBSTRING¦, ¦CONCAT¦ veya ¦||¦.
- Tarih: ¦now()¦, ¦date_trunc('month', t)¦, ¦EXTRACT¦.
- ¦COALESCE(x, 0)¦: NULL ise yedek değer.

## Alıştırma
Sipariş tablosunda: (1) son 30 günün toplam cirosu, (2) en çok sipariş veren 5 müşteri, (3) ortalaması 300 TL üstü kategoriler sorgularını yaz. SQLBolt ve PG Exercises'ta ilgili alıştırmaları çöz.`,
    `**Kaynaklar:** [PostgreSQL — Sorgular](https://www.postgresql.org/docs/current/queries.html), [Fonksiyonlar ve operatörler](https://www.postgresql.org/docs/current/functions.html), [SQLBolt](https://sqlbolt.com), [PG Exercises](https://pgexercises.com). SQL Server'daki ¦TOP 10¦ PostgreSQL'de ¦LIMIT 10¦ olur.`
  ),
  "se-sql-join": L(
    `## JOIN türleri
~~~sql
-- Sadece eşleşenler
SELECT s.id, m.ad, s.tutar
FROM siparis s
INNER JOIN musteri m ON m.id = s.musteri_id;

-- Soldaki tüm satırlar, eşleşme yoksa NULL (siparişi olmayan müşteriler de gelir)
SELECT m.ad, s.id
FROM musteri m
LEFT JOIN siparis s ON s.musteri_id = m.id;
~~~
| Tür | Sonuç |
|---|---|
| ¦INNER¦ | Her iki tabloda eşleşenler |
| ¦LEFT¦ | Soldaki hepsi + eşleşen sağ |
| ¦RIGHT¦ | Sağdaki hepsi + eşleşen sol |
| ¦FULL¦ | İkisinin birleşimi |
| ¦CROSS¦ | Kartezyen çarpım (dikkat!) |

"Hiç siparişi olmayan müşteriler": ¦LEFT JOIN ... WHERE s.id IS NULL¦.

~~~svg INNER JOIN — yalnızca iki tabloda da eşleşenler (A ∩ B)
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 150' font-family='system-ui,sans-serif' font-size='12'><rect width='260' height='150' fill='white'/><defs><clipPath id='a'><circle cx='95' cy='70' r='55'/></clipPath><clipPath id='b'><circle cx='165' cy='70' r='55'/></clipPath></defs><circle cx='165' cy='70' r='55' fill='#4f7be8' opacity='.75' clip-path='url(#a)'/><circle cx='95' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><circle cx='165' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><text x='67' y='74' text-anchor='middle' fill='#111'>A</text><text x='193' y='74' text-anchor='middle' fill='#111'>B</text></svg>
~~~

~~~svg LEFT JOIN — soldaki hepsi + eşleşen sağdakiler
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 150' font-family='system-ui,sans-serif' font-size='12'><rect width='260' height='150' fill='white'/><defs><clipPath id='a'><circle cx='95' cy='70' r='55'/></clipPath><clipPath id='b'><circle cx='165' cy='70' r='55'/></clipPath></defs><circle cx='95' cy='70' r='55' fill='#4f7be8' opacity='.55'/><circle cx='95' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><circle cx='165' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><text x='67' y='74' text-anchor='middle' fill='#111'>A</text><text x='193' y='74' text-anchor='middle' fill='#111'>B</text></svg>
~~~

~~~svg RIGHT JOIN — sağdaki hepsi + eşleşen soldakiler
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 150' font-family='system-ui,sans-serif' font-size='12'><rect width='260' height='150' fill='white'/><defs><clipPath id='a'><circle cx='95' cy='70' r='55'/></clipPath><clipPath id='b'><circle cx='165' cy='70' r='55'/></clipPath></defs><circle cx='165' cy='70' r='55' fill='#4f7be8' opacity='.55'/><circle cx='95' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><circle cx='165' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><text x='67' y='74' text-anchor='middle' fill='#111'>A</text><text x='193' y='74' text-anchor='middle' fill='#111'>B</text></svg>
~~~

~~~svg FULL JOIN — ikisinin birleşimi
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 150' font-family='system-ui,sans-serif' font-size='12'><rect width='260' height='150' fill='white'/><defs><clipPath id='a'><circle cx='95' cy='70' r='55'/></clipPath><clipPath id='b'><circle cx='165' cy='70' r='55'/></clipPath></defs><circle cx='95' cy='70' r='55' fill='#4f7be8' opacity='.55'/><circle cx='165' cy='70' r='55' fill='#4f7be8' opacity='.55'/><circle cx='95' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><circle cx='165' cy='70' r='55' fill='none' stroke='#333' stroke-width='1.5'/><text x='67' y='74' text-anchor='middle' fill='#111'>A</text><text x='193' y='74' text-anchor='middle' fill='#111'>B</text></svg>
~~~

## Alt sorgular (subquery)
~~~sql
SELECT ad FROM musteri
WHERE id IN (SELECT musteri_id FROM siparis WHERE tutar > 1000);

SELECT ad FROM musteri m
WHERE EXISTS (SELECT 1 FROM siparis s WHERE s.musteri_id = m.id);
~~~
**CTE** (¦WITH¦) okunabilirliği artırır:
~~~sql
WITH toplam AS (
  SELECT musteri_id, SUM(tutar) AS t FROM siparis GROUP BY musteri_id
)
SELECT m.ad, toplam.t FROM toplam JOIN musteri m ON m.id = toplam.musteri_id ORDER BY t DESC;
~~~

## Görünüm (VIEW)
Kayıtlı sorgu; karmaşık birleşimleri tek tablo gibi sunar, yetki daraltmada da kullanılır.
~~~sql
CREATE VIEW musteri_ozet AS
SELECT m.id, m.ad, COUNT(s.id) AS siparis_sayisi, COALESCE(SUM(s.tutar), 0) AS toplam
FROM musteri m LEFT JOIN siparis s ON s.musteri_id = m.id
GROUP BY m.id, m.ad;
~~~
(Materialized view, sonucu fiziksel olarak saklar; yenilemek gerekir.)

## Alıştırma
Üç tablolu (müşteri–sipariş–sipariş_kalemi–ürün) bir şemada "her müşterinin en pahalı ürünü" sorgusunu önce alt sorguyla, sonra CTE ile yaz.`,
    `**Kaynaklar:** [PostgreSQL — JOIN](https://www.postgresql.org/docs/current/tutorial-join.html), [View](https://www.postgresql.org/docs/current/tutorial-views.html), [PG Exercises](https://pgexercises.com), [PostgreSQL Tutorial](https://www.postgresqltutorial.com).`
  ),
  "se-sql-ileri": L(
    `## Fonksiyon (SQL / PL/pgSQL)
~~~sql
CREATE FUNCTION kdv_dahil(tutar NUMERIC, oran NUMERIC DEFAULT 0.20)
RETURNS NUMERIC LANGUAGE SQL IMMUTABLE AS $$ SELECT tutar * (1 + oran) $$;

SELECT kdv_dahil(100);   -- 120
~~~
**Saklı prosedür** (SQL Server'daki ¦CREATE PROCEDURE¦) PostgreSQL'de ¦CREATE PROCEDURE ... CALL¦ ile (11+) veya fonksiyonla yazılır. İş mantığını veritabanına taşımak hızlandırabilir ama test/sürümlemesi zorlaşır; çoğu modern projede iş mantığı uygulamada tutulur.

## Trigger
Bir olayda (INSERT/UPDATE/DELETE) otomatik çalışan fonksiyon.
~~~sql
CREATE FUNCTION guncelleme_zamani() RETURNS trigger AS $$
BEGIN NEW.guncelleme := now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_urun_guncelleme BEFORE UPDATE ON urun
FOR EACH ROW EXECUTE FUNCTION guncelleme_zamani();
~~~
Sihirli davranış yaratır; az ve belgeli kullan.

## Transaction ve ACID
~~~sql
BEGIN;
UPDATE hesap SET bakiye = bakiye - 100 WHERE id = 1;
UPDATE hesap SET bakiye = bakiye + 100 WHERE id = 2;
COMMIT;      -- hata olursa ROLLBACK
~~~
- **A**tomiklik (ya hep ya hiç), **C**tutarlılık, **I**zolasyon, **D**ayanıklılık.
- İzolasyon seviyeleri: ¦READ COMMITTED¦ (PostgreSQL varsayılanı), ¦REPEATABLE READ¦, ¦SERIALIZABLE¦.
- Stok düşümünde ¦UPDATE ... WHERE stok >= n¦ ile yarış durumunu önle.

## İndeks
Aramayı hızlandırır, yazmayı yavaşlatır, yer kaplar.
~~~sql
CREATE INDEX idx_siparis_musteri ON siparis (musteri_id);
EXPLAIN ANALYZE SELECT * FROM siparis WHERE musteri_id = 42;   -- plan ve süre
~~~
- Yabancı anahtar, sık filtrelenen/sıralanan sütunlar iyi adaydır.
- Sorgu planında **Seq Scan** (tüm tablo) yerine **Index Scan** görmeyi hedefle; küçük tablolarda indeks gerekmeyebilir.

## Alıştırma
Hesaplar arası havale için transaction yaz; ortada bir hata fırlatarak ROLLBACK'i dene. Büyük bir tabloda indeksten önce/sonra ¦EXPLAIN ANALYZE¦ süresini karşılaştır.`,
    `**Kaynaklar:** [SQL fonksiyonları](https://www.postgresql.org/docs/current/xfunc-sql.html), [Trigger](https://www.postgresql.org/docs/current/plpgsql-trigger.html), [Transaction](https://www.postgresql.org/docs/current/tutorial-transactions.html), [İndeksler](https://www.postgresql.org/docs/current/indexes.html); kitap: Designing Data-Intensive Applications. SQL Server ↔ PostgreSQL sözdizimi farkları vardır; kodlar PostgreSQL içindir.`
  ),
  "se-sql-yonetim": L(
    `## Yedekleme ve geri yükleme
~~~bash
# Mantıksal yedek (özel biçim, sıkıştırmalı)
pg_dump -Fc -d veritabani -f yedek.dump

# Geri yükleme
pg_restore -d yeni_veritabani --clean --if-exists yedek.dump
~~~
- **Mantıksal** (¦pg_dump¦) taşınabilir; **fiziksel/sürekli arşiv** (WAL, PITR) belirli ana dönmeye izin verir.
- **3-2-1 kuralı**: 3 kopya, 2 farklı ortam, 1 uzak konum.
- **Geri yüklemeyi test etmeyen yedek, yedek sayılmaz.**
- Bulut servislerinde (Neon, vb.) dahili geri alma/dal özellikleri vardır; kendi planının sınırlarını kontrol et.

## Kullanıcı ve yetki yönetimi
~~~sql
CREATE ROLE uygulama LOGIN PASSWORD '...';          -- parolayı koda koyma
GRANT CONNECT ON DATABASE veritabani TO uygulama;
GRANT SELECT, INSERT, UPDATE ON urun TO uygulama;   -- DELETE yok
REVOKE ALL ON hassas_tablo FROM PUBLIC;
~~~
- **En az yetki ilkesi**: Uygulama kullanıcısı tablo silemesin, şemayı değiştirmesin; migrasyon için ayrı yetkili rol.
- Parolaları ortam değişkeni/gizli yönetimi ile ver; repoya koyma.
- Gerektiğinde **satır düzeyinde güvenlik** (RLS).

## Veri modelleme ve ilişkiler (özet)
Tasarımı kavramsal (ER) → mantıksal (tablolar, anahtarlar) → fiziksel (indeks, bölümleme) aşamalarında düşün. N–N ilişkide ara tablo, "silinince ne olur" için ¦ON DELETE CASCADE / RESTRICT / SET NULL¦ seç.

## Veri göçü (farklı veritabanları arasında)
1. Kaynağı ve hedefi eşle (tip uyumsuzlukları: tarih, ondalık, metin kodlaması).
2. Önce **şemayı**, sonra veriyi taşı; **doğrulama** sorguları ile satır sayısı ve toplamları karşılaştır.
3. Küçük parçalar halinde, geri dönüş planıyla uygula.
4. SQL ↔ MongoDB göçünde belge yapısına dönüştürme (gömme/referans) kararı gerekir.

## Alıştırma
Bir yedeği alıp **başka bir veritabanına** geri yükle ve satır sayılarını karşılaştır; yalnızca ¦SELECT¦ yetkili bir rol oluşturup ¦INSERT¦'ün reddedildiğini göster.`,
    `**Kaynaklar:** [pg_dump / yedekleme](https://www.postgresql.org/docs/current/backup-dump.html), [pg_restore](https://www.postgresql.org/docs/current/app-pgrestore.html), [Rol yönetimi](https://www.postgresql.org/docs/current/user-manag.html), [GRANT](https://www.postgresql.org/docs/current/sql-grant.html). 3-2-1 kuralı yaygın bir yedekleme önerisidir.`
  ),
  "se-mongo1": L(
    `## NoSQL nedir?
"Yalnızca SQL değil": ilişkisel olmayan veri modelleri. Türleri: **belge** (MongoDB), **anahtar–değer** (Redis), **sütun ailesi** (Cassandra), **graf** (Neo4j).

## MongoDB temel kavramlar
| SQL | MongoDB |
|---|---|
| Veritabanı | Database |
| Tablo | **Collection** |
| Satır | **Document** (BSON/JSON benzeri) |
| Sütun | **Field** |
| Birincil anahtar | ¦_id¦ (otomatik ¦ObjectId¦) |

~~~js
// mongosh
use dukkan
db.urunler.insertOne({ ad: "Klavye", fiyat: 1200, etiketler: ["usb", "mekanik"] })
~~~
Belgelerin şeması **esnek**tir; ama uygulama düzeyinde (veya şema doğrulama ile) yapıyı kontrol etmelisin.

## CRUD
~~~js
db.urunler.insertMany([{ ad: "Fare", fiyat: 400 }, { ad: "Kablo", fiyat: 50 }])

db.urunler.find({ fiyat: { $gt: 100 } })            // oku
db.urunler.findOne({ ad: "Fare" })

db.urunler.updateOne({ ad: "Fare" }, { $set: { fiyat: 450 } })      // güncelle
db.urunler.updateMany({}, { $inc: { stok: 1 } })

db.urunler.deleteOne({ ad: "Kablo" })               // sil
~~~
Güncelleme **operatörleriyle** yapılır (¦$set¦, ¦$inc¦, ¦$push¦, ¦$unset¦); belgeyi komple değiştirmek yerine alan düzeyinde güncelle.

## Veri modelleme: gömme mi, referans mı?
- **Gömme (embed)**: Sık birlikte okunan, alt veri sınırlı (sipariş içinde kalemler).
- **Referans**: Büyüyen, paylaşılan veri (kullanıcıya ait milyonlarca kayıt).
- Belge **16 MB** sınırı vardır; sınırsız büyüyen diziyi gömme.

## Node.js'ten bağlanma
Resmi sürücü ¦mongodb¦ veya ODM olarak ¦Mongoose¦. Bağlantı dizesini ortam değişkeninde tut.

## Alıştırma
Bir blog için (yazı, yorum, etiket) hem gömme hem referans modelini çiz; hangi sorguların hangisinde kolay olduğunu yaz. Yerel veya Atlas ücretsiz katmanında koleksiyonu oluşturup CRUD'u dene.`,
    `**Kaynaklar:** [MongoDB Kılavuzu](https://www.mongodb.com/docs/manual/), [CRUD](https://www.mongodb.com/docs/manual/crud/), [Veri modelleme](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/), [MongoDB Learn](https://learn.mongodb.com). 16 MB belge sınırı MongoDB sınırlar sayfasında belirtilir; güncel değeri kontrol et.`
  ),
  "se-mongo2": L(
    `## Sorgu operatörleri
~~~js
db.urunler.find({ fiyat: { $gte: 100, $lte: 500 } })        // aralık
db.urunler.find({ kategori: { $in: ["klavye", "fare"] } })
db.urunler.find({ $or: [{ stok: 0 }, { aktif: false }] })
db.urunler.find({ ad: { $regex: "^kla", $options: "i" } })
db.urunler.find({ "adres.sehir": "Ankara" })                  // iç içe alan
db.urunler.find({ etiketler: "usb" })                         // dizi içinde eşleşme
~~~
Eşleştirme: ¦$eq $ne $gt $gte $lt $lte $in $nin¦; mantık: ¦$and $or $not $nor¦; dizi: ¦$all $size $elemMatch¦. **Projeksiyon**, **sıralama**, **sayfalama**: ¦.find(filtre, { ad: 1 }).sort({ fiyat: -1 }).limit(10)¦.

## Aggregation (boru hattı)
Aşamalar sırayla belgeleri dönüştürür.
~~~js
db.siparisler.aggregate([
  { $match: { durum: "tamamlandi" } },
  { $unwind: "$kalemler" },
  { $group: { _id: "$kalemler.urun", adet: { $sum: "$kalemler.adet" }, ciro: { $sum: { $multiply: ["$kalemler.adet", "$kalemler.fiyat"] } } } },
  { $sort: { ciro: -1 } },
  { $limit: 5 },
  { $lookup: { from: "urunler", localField: "_id", foreignField: "_id", as: "urun" } }
])
~~~
- ¦$match¦ = WHERE, ¦$group¦ = GROUP BY, ¦$lookup¦ = LEFT JOIN, ¦$project¦ = SELECT.
- Filtreyi (¦$match¦) boru hattının **başına** koy; indeksten yararlanır.

## İndeks
¦db.urunler.createIndex({ kategori: 1, fiyat: -1 })¦; ¦explain()¦ ile kontrol et.

## SQL mi, NoSQL mi?
| Kriter | SQL (PostgreSQL) | MongoDB |
|---|---|---|
| Veri yapısı | İlişkili, kurallı | Esnek, iç içe belgeler |
| İşlem bütünlüğü | Güçlü, çok tablolu transaction doğal | Belge içi atomik; çok belgeli transaction mümkün ama maliyetli |
| Raporlama/JOIN | Güçlü | ¦$lookup¦ sınırlı |
| Şema değişimi | Migrasyon gerekir | Kolay, ama disiplin ister |

Şüphedeysen **PostgreSQL** ile başla (JSONB ile esnek alan da tutabilir).

## Alıştırma
Siparişlerden "kategori başına ciro ve sipariş sayısı" raporunu aggregation ile yaz; aynısını SQL ile yazıp ikisini karşılaştır.`,
    `**Kaynaklar:** [Sorgu operatörleri](https://www.mongodb.com/docs/manual/reference/operator/query/), [Aggregation](https://www.mongodb.com/docs/manual/aggregation/), [Veri modelleme](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/). SQL/NoSQL tablosu genel eğilimleri özetler; sürüm ve yapılandırmaya göre değişebilir.`
  ),
};
