import { extraModule } from "./builder";
import { qz } from "../helpers";

export const bedenEnerjiModule = extraModule({
  id: "ek-beden-enerji",
  title: "Beden–Enerji Modelleri: Polarite (Stone), Ezoterik Anatomi (Burger), Meridyenler",
  tagline: "Üç kaynak, üç model: iddiaları ayırmayı ve eleştirel okumayı öğren",
  description:
    "Yüklediğin üç dosyanın ek modülü: Randolph Stone'un Toplu Eserleri Cilt 2'si (Polarity Therapy), Bruce Burger'in 'Ezoterik Anatomi: Bilinç Olarak Beden' kitabı (Türkçe makine çevirisi) ve 'The Body Meridians' çizelgeleri. Modül bunları sağlık bilgisi olarak değil, tarihsel-kültürel modeller olarak ve kanıt durumuyla birlikte ele alır; tedavi veya teşhis talimatı vermez.",
  source: {
    file: "randolph-stone-polarity-therapy-collected-works-vol-2.pdf; ezoterik-anatomi-bilinc-olarak-beden.pdf; the-body-meridians.pdf",
    author: "Randolph Stone; Bruce Burger; Natural-health-zone.com",
    language: "İngilizce / Türkçe (makine çevirisi) / İngilizce",
    pages: 232,
    readNote: "Stone cildinin arka kapağı/tanıtımı ve içindekiler, Burger kitabının künye ve bölüm düzeni, Meridyen kitapçığının içindekiler listesi okundu. Ayrıntılı tedavi/protokol içeriği derse konmadı.",
  },
  units: [
    {
      id: "e1",
      title: "1. Polarite Terapisi (Randolph Stone)",
      description: "Stone kimdir, Cilt 2'de hangi eserler var, kanıt durumu ne?",
      lessons: [
        {
          id: "be-stone",
          title: "Stone ve Toplu Eserler Cilt 2",
          summary: "Dört eser: The Mysterious Sacrum, Vitality Balance, Evolutionary Energy Charts, Polarity Therapy Principles and Practice.",
          body: `## Yazar (kaynaklarda)
**Randolph Stone** (26 Şubat 1890 – 9 Aralık 1981): Avusturya doğumlu Amerikalı **osteopat, kiropraktör ve naturopat**; **polarite terapisi**'nin kurucusu (1940'larda geliştirdiği söylenir). Arka kapaktaki tanıtım, onu "60 yılı aşkın uygulama yapmış, birçok beslenme, egzersiz ve tedavi yöntemini denemiş" biri olarak anlatır (yayıncı tanıtımıdır).

## Cilt 2'nin içeriği (yayıncının listesi)
*Polarity Therapy: The Complete Collected Works — Volume Two* (CRCS Wellness Books) şu özgün eserleri içerir:
1. **The Mysterious Sacrum**
2. **Vitality Balance**
3. **Evolutionary Energy Charts**
4. **Polarity Therapy: Principles and Practice**

Tanıtım metni polarite terapisini "**yaşayan enerji alanlarına dayanan bir iyileştirme bilimi**" olarak sunar; beden, zihin, duygu ve ruh boyutlarının hepsini kapsadığını, Doğu ve Batı geleneklerinden yararlandığını söyler. Bu **tanıtım iddiasıdır**.

## Kanıt durumu (bağımsız kaynaklar)
- Healthline: polarite dengelemenin belirli bir hastalığı tedavi ettiğini gösteren **bilimsel kanıt çok azdır**.
- Tüketici kaynaklarına göre insanlarda etkiler **yeterince incelenmemiştir**.
- Vikipedi'ye aktarılan Amerikan Kanser Derneği ifadesi: mevcut bilimsel kanıt, polarite terapisinin kanser veya başka herhangi bir durumu tedavide etkili olduğu iddialarını **desteklemiyor**.
- Küçük bir deneyde gruplar arasında istatistiksel olarak anlamlı bir fark çıkmadı.

## Sonuç
Polarite terapisi **teorik bir enerji modeli ve el temasına dayalı bir uygulama geleneğidir**; **tıbbi tedavi değildir**. Sağlık sorunlarında doktora başvurun.

## Çalışma
Yayıncı tanıtımındaki üç cümleyi "iddia" olarak işaretle ve her biri için bağımsız kanıt ara.`,
          verification: `**Kaynak:** [Wikipedia — Randolph Stone](https://en.wikipedia.org/wiki/Randolph_Stone), [Healthline — Polarity Balancing](https://www.healthline.com/health/polarity-balancing). Cilt 2'nin tanıtım metni ve içindekiler PDF'ten okundu. Kanıt durumu özetleri ikincil kaynaklardan; her biri için birincil araştırma bu derste okunmadı.`,
        },
      ],
      quiz: [
        qz("Polarite terapisinin kurucusu kimdir?", ["Randolph Stone", "Bruce Burger", "Aleister Crowley", "Éliphas Lévi"], 0),
        qz("Cilt 2'deki eserlerden biri hangisidir?", ["The Mysterious Sacrum", "The Kybalion", "The Book of the Law", "The Golden Dawn"], 0),
        qz("Polarite terapisi için kaynakların ortak sonucu nedir?", ["Hastalıkları tedavi ettiğine dair kanıt yetersizdir", "Klinik olarak kanıtlanmıştır", "FDA onaylı ilaçtır", "Cerrahi yöntemdir"], 0),
        qz("Yayıncı tanıtım metinlerini nasıl okumalıyız?", ["Tanıtım iddiası olarak, bağımsız kanıt gerektiren ifadeler olarak", "Bilimsel makale olarak", "Yasal belge olarak", "Tıbbi rapor olarak"], 0),
        qz("Polarite terapisi sağlık sorunlarında doktorun yerini tutar mı?", ["Hayır; tıbbi tedavi değildir", "Evet, tamamen tutar", "Yalnızca kanserde tutar", "Yasal olarak zorunludur"], 0),
      ],
    },
    {
      id: "e2",
      title: "2. Ezoterik Anatomi (Burger) ve Meridyenler",
      description: "Burger'in kitabının düzeni ve meridyen sisteminin haritası.",
      lessons: [
        {
          id: "be-burger",
          title: "Ezoterik Anatomi: Bilinç Olarak Beden",
          summary: "Bruce Burger (1998, North Atlantic Books); polarite öğretisinin derlemesi ve somatik psikoloji bölümü.",
          body: `## Künye
**Esoteric Anatomy: The Body as Consciousness** — **Bruce Burger** (d. 1942), **North Atlantic Books**, Berkeley, **1998**; kayıt konuları: *Polarite terapisi; Zihin ve beden*. PDF **makine çevirisi** (onlinedoctranslator) olduğundan metin hataları içerebilir.

## Kitabın düzeni (içindekilerden)
- **Bölüm I — Sevgi dolu eller şifa veren ellerdir.**
- **Bölüm II — Ezoterik anatomi üzerine denemeler.**
- **Bölüm III — Somatik psikoloji uygulaması.**
- **Bölüm IV — Polarite terapisi uygulaması için kaynaklar.**

## Notlar
- Burger, **Stone'un** yazılarına kitap numarası ve kısaltmalarla atıf yapar (Kitap I *Energy*, Kitap II *Human Wireless Anatomy*, Kitap III *Polarity Therapy*, Kitap IV *Mysterious Sacrum*, Kitap V *Vitality Balance*, AET, ET, PN, HB…); yani kitap, Stone'un öğretisinin **yorumlu bir derlemesidir**.
- Kitabın önsöz sayfalarında açık bir uyarı vardır: "**öğretilen materyal sağlığın geliştirilmesine yöneliktir ve hiçbir şekilde insan hastalığını teşhis veya tedavi etmeye hak kazandırmaz**."

## Çalışma
Bu uyarıyı kendi çalışma notuna yaz ve kitaptan alacağın her "enerji/şifa" iddiasının yanına "model/iddia" etiketi koy.`,
          verification: `Künye, kitap düzeni ve uyarı notu PDF'ten okundu. Kitabın 700+ sayfalık içeriğinin geri kalanı taranmadı. Makine çevirisi olduğundan alıntı yapılmadı, özetlendi.`,
        },
        {
          id: "be-meridyen",
          title: "Meridyen sistemi: harita ve eleştirel not",
          summary: "12 çift ana meridyen, 2 orta meridyen ve meridyen saati: içindekiler haritası.",
          body: `## Kitapçığın düzeni
*The Body Meridians: Meridian Flows and Acu-Point Charts* (natural-health-zone.com): "**vücudun enerji ağı**", **12 birincil çift meridyen** ve **2 tek orta meridyen**, ardından her meridyen için bir tanıtım ve **akupunktur noktası listesi**.

| Grup | Meridyenler |
|---|---|
| 12 çift ana meridyen | Mide · Dalak · Kalp · İnce Bağırsak · Mesane · Böbrek · Perikard · Üçlü Isıtıcı · Safra Kesesi · Karaciğer · Akciğer · Kalın Bağırsak |
| 2 orta meridyen | Governing Vessel (Du) · Conception Vessel (Ren) |
| Ek | Meridyen Saati (Meridian Clock) ve zaman genel bakışı |

## Eleştirel not
- Meridyenler **Geleneksel Çin Tıbbı (GÇT)** kavramlarıdır; bilinen bir **anatomik yapı olarak gösterilmiş değildir** (genel bilgi; bu derste bağımsız kaynağa bağlanmadı).
- Akupunktur ile ilgili klinik araştırmaların sonuçları durum bazında farklılık gösterir; "bu nokta şu hastalığa iyi gelir" tarzı iddialar **tıbbi tavsiye değildir**.
- Kitapçık, çizelgeleri bir bilgi referansı olarak sunar; **nokta listelerinin doğruluğu** (isimlendirme, konum) ders kapsamında doğrulanmadı.

## Akupunktur için klinik kanıt: genel tablo (resmi sağlık kurumlarının özet değerlendirmeleri)
- **Daha tutarlı olumlu sonuç:** Kronik ağrı türlerinde (bel ağrısı, boyun ağrısı, diz osteoartriti), gerilim tipi baş ağrısı ve migren önlemede çalışmalar akupunkturun **bakım/plasebo karşılaştırmasında fayda gösterebildiğini** bildirir.
- **Karışık veya yetersiz kanıt:** Birçok başka durum için sonuçlar tutarsızdır ya da çalışmalar düşük kalitelidir.
- **Plasebo sorunu:** "Sahte" akupunktur (iğnenin yanlış noktaya veya yüzeysel batırılması) bile çoğu çalışmada belirgin etki gösterir; bu, etkinin bir kısmının **beklenti ve temas gibi özgül olmayan etkenlerden** gelebileceğini düşündürür.
- **Güvenlik:** Eğitimli uygulayıcı ve steril tek kullanımlık iğnelerle ciddi yan etkiler nadirdir; hijyen veya yanlış uygulamada enfeksiyon/organ zedelenmesi riski vardır.
- **"Meridyen/Qi" kavramları** anatomik olarak gösterilememiş geleneksel kavramlardır; kanıt, kavramın doğruluğunu değil, uygulamanın bazı durumlardaki etkisini inceler.

> Bu bir genel özettir; ayrıntı ve güncellik için sağlık kurumlarının güncel kılavuzlarına bak.

## Çalışma
Yukarıdaki kanıt özetini kullanarak GÇT (akupunktur) için kendi 5 maddelik "ne biliyoruz / ne bilmiyoruz" özetini yaz.`,
          verification: `İçindekiler PDF'ten okundu (meridyen adları, orta meridyenler, meridyen saati). "Anatomik yapı gösterilmemiştir" ifadesi genel bilgidir; bu derste bir kaynak URL'sine bağlanmadı (bkz. "Eklenmeyenler").`,
        },
      ],
      quiz: [
        qz("Meridyen sisteminde kaç çift ana meridyen sayılır?", ["12", "7", "22", "5"], 0),
        qz("Orta meridyenler hangileridir?", ["Governing Vessel ve Conception Vessel", "Mide ve Dalak", "Kalp ve Akciğer", "Böbrek ve Karaciğer"], 0),
        qz("Burger'in kitabında hangi bölüm 'Somatik psikoloji uygulaması'dır?", ["III", "I", "II", "IV"], 0),
        qz("Burger'in kitabındaki uyarı ne söyler?", ["Materyal sağlığı geliştirmeye yöneliktir; hastalık teşhis/tedavi etmez", "Hastalıkları tedavi eder", "İlaç yerine geçer", "Cerrahi alternatifidir"], 0),
        qz("Meridyen için doğru ifade hangisidir?", ["Geleneksel Çin tıbbı kavramıdır; anatomik yapı olarak gösterilmemiştir", "Damar sistemidir", "Sinir sistemidir", "Lenf sistemidir"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Tedavi, dokunuş ve beslenme protokolleri (Stone'un 'purifying diet', 'easy stretching postures' vb.), akupunktur noktası listeleri:** Sağlık iddiaları ve uygulama talimatı niteliğinde; tıbbi tavsiye yerine geçemez ve bağımsız olarak doğrulanmadı.
- **Burger kitabının ayrıntılı bölümleri:** 747 sayfalık Türkçe makine çevirisi metnin yalnızca düzeni okundu.
- **Stone'un 'enerji alanları' ve 'Kutuplar' teorisinin ayrıntıları:** Bilimsel doğrulama yoktur; yazar iddiası olarak kaldı.
- **GÇT meridyenlerinin anatomik karşılığı ve akupunktur klinik kanıtları:** Bu derste kaynağa bağlanmadı; NCCIH gibi bir resmi kaynakla ayrıca araştırılmalıdır.
- **Stone biyografisinin ayrıntıları ('Rudolph Bautsch' adı vb.):** Doğrulanmadı.`,
});
