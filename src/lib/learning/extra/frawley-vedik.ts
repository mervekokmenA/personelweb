import { extraModule } from "./builder";
import { qz } from "../helpers";

export const frawleyModule = extraModule({
  id: "ek-frawley-vedik",
  title: "Kahinlerin Astrolojisi: Vedik/Hindu Astroloji Rehberi (David Frawley)",
  tagline: "Tropikal ve sidereal zodyak, ayanamsha, gezegenler, vargalar ve dashalar: sitedeki Vedik harita sayfasının kuramsal arka planı",
  description:
    "Yüklediğin 'Kahinlerin Astrolojisi' (David Frawley, Astrology of the Seers; Türkçe makine çevirisi, 93 sayfa) için ek modül. Kitabın içindekiler haritasını, iki zodyak tartışmasını ve ayanamsha farklarını öğretir; bu sitenin Astroloji sayfasındaki sidereal (Lahiri) hesapla somut bir karşılaştırma yapar. Yorum önerileri, tıbbi astroloji ve Ayurveda eşleşmeleri doğrulanmamış olarak işaretlenir.",
  source: {
    file: "kahinlerin-astrolojisi-vedikhindu-astrolojisi-rehberi.pdf",
    author: "David Frawley (Türkçe makine çevirisi)",
    language: "Türkçe (makine çevirisi, İngilizce kaynaktan)",
    pages: 93,
    readNote: "İçindekiler (tamamı), 'İki zodyak arasındaki tartışma' bölümü ve ayanamsha tablosu okundu. Gezegen/burç yorum bölümleri ve tıbbi astroloji derse konmadı.",
  },
  units: [
    {
      id: "v1",
      title: "1. İki Zodyak ve Ayanamsha",
      description: "Tropikal–sidereal farkı, tartışma ve hesabın temeli.",
      lessons: [
        {
          id: "fv-iki-zodyak",
          title: "İki zodyak tartışması",
          summary: "Frawley'in tarafsız çerçevesi: iki sistem iki farklı gökyüzü bölme yöntemidir.",
          body: `## Frawley'in savı (PDF'ten)

- İki zodyak kullanıldığında doğal olarak bir tartışma çıkar: kimi birine "gerçek" der, kimi ikisini farklı derecelerde geçerli sayar, kimi birlikte kullanır. Yazar **tarafsız** durur: "her iki sistemle de iyi ve kötü okuma örnekleri bulunabilir; bu **sistemden çok uygulayıcıya** bağlı olabilir."
- "Tropikal Batı için, Sidereal Doğu için" ayrımına itiraz eder: yıldızların etkisini **coğrafyaya bağlayamayız**.
- **Kavram karışıklığı:** Bir tropikal astrolog "Güneş Kova'da" derken Güneş'in **Kova takımyıldızında** olduğunu kastetmez; **ilkbahar ekinoksundan itibaren zodyağın on iki bölümünün on birincisinde** olduğunu söyler. Sidereal astrolog aynı sözü söylerken **sabit yıldızlara göre** konumu anlatır. Aynı terim, **gökyüzünü bölmenin iki farklı yoluna** atıf yapar.
- Vedik astroloji **sideral** olduğu için burç adları tropikal haritadan farklı çıkar (Boğa Güneşi, Vedik haritada Koç'ta olabilir). Vedik sistem **Yükselen ve Ay'ı Güneş'ten daha önemli** görür.
- Yazar "sideral zodyağın tarihsel olarak **orijinal** olduğunu, çünkü gözlemlenebilir olduğunu" söyler.

## Değerlendirme
- "Tropikal = mevsimlere bağlı, sidereal = sabit yıldızlara bağlı" ayrımı **doğrudur**.
- **Tarihsel not:** Babil zodyağı (MÖ 5. yy.) sabit yıldızlara bağlıydı; tropikal ölçüm Helenistik dönemde (Hipparkhos/Ptolemaios çizgisi) yerleşti. Bu nedenle "sidereal tarihsel olarak önce" savı **kısmen doğrudur**; ayrıntılar tartışmalıdır (Astroloji modülü 1. ünite).
- "Okuma doğruluğunun uygulayıcıya bağlı olduğu" iddiası bilimsel olarak **sınanmamıştır**; astrolojinin kestirim başarısını destekleyen kontrollü kanıt yoktur (Astroloji modülü, epistemoloji dersi).

## Çalışma
Kendi doğum haritanı Astroloji sayfasında (Vedik) ve bir tropikal kaynakta karşılaştır; Güneş/Ay/Yükselen burçlarını yan yana yaz.`,
          verification: `"İki burç arasındaki tartışma" bölümü PDF'ten doğrudan okundu (makine çevirisi; özetlendi). Babil/Helenistik zodyak tarihi astroloji tarihi genel bilgisidir (Astroloji modülü). Astrolojinin kestirim başarısını destekleyen kontrollü kanıt bulunmadığı genel bilimsel konsensüstür.`,
        },
        {
          id: "fv-ayanamsha",
          title: "Ayanamsha: nedir, ne kadar?",
          summary: "Presesyon ve ayanamsha; Frawley'in tablosu ile bu sitedeki hesabın karşılaştırması.",
          body: `## Ayanamsha nedir?
Dünya'nın ekseni **presesyon** yaptığı için ekinoks noktası yıldızlara göre yılda yaklaşık **50 yay saniyesi** kayar. **Ayanamsha**, tropikal ve sidereal zodyaklar arasındaki bu açısal farktır. Sidereal bir konum = tropikal konum − ayanamsha.

## Frawley'in 1950 tablosu (PDF'ten)
| Ayanamsha sistemi | 1950 değeri |
|---|---|
| **Lahiri (Hindistan hükümeti)** | 23° 10′ |
| B. V. Raman | 21° 42′ |
| Sri Yukteswar | 21° 46′ |
| J. N. Bhasin | 22° 03′ |
| Fagan–Bradley (Amerikan sideral) | 24° 02′ |

**Önemi:** "Sidereal" tek bir sayı değil, **seçilen ayanamsha'ya bağlı** bir sistemdir; 2° fark bile Ay'ın burcunu veya nakshatrasını değiştirebilir.

## Bu sitede
Astroloji sayfası **Lahiri** ayanamsha kullanır. Sitenin kendi hesabına göre: **1950 → ≈ 23° 09′** (Frawley'in 23° 10′'iyle uyumlu), **2000 → ≈ 23° 51′**, **23 Kasım 2026 → ≈ 24° 14′**. (Değerler sitenin \`lahiriAyanamsa\` fonksiyonundan hesaplandı.)

## Çalışma
Bir doğum tarihi için tropikal Ay boylamını (Astroloji sayfası) 24° düşerek sideral konumu elle hesapla; Astroloji sayfasındaki sidereal konumla karşılaştır.`,
          verification: `Tablo PDF'ten (ayanamsha tablosu) okundu. Sitenin Lahiri hesabı yerel olarak çalıştırılarak doğrulandı (1950: 23.155°, 2000: 23.853°, 2026-11-23: 24.228°). Presesyon hızının yaklaşık 50″/yıl olması astronomi bilgisidir. Ayanamsha seçimi astrologlar arasında gerçekten tartışmalıdır.`,
        },
      ],
      quiz: [
        qz("Ayanamsha nedir?", ["Tropikal ve sidereal zodyak arasındaki açısal fark", "Gezegenin yörünge hızı", "Bir burç adı", "Bir ev sistemi"], 0),
        qz("Vedik astroloji hangi zodyağı kullanır?", ["Sidereal", "Tropikal", "Her ikisini birden", "Hiçbirini"], 0),
        qz("Frawley'in tablosunda Lahiri ayanamsha (1950) kaçtır?", ["23° 10′", "21° 42′", "24° 02′", "0°"], 0),
        qz("Vedik sistem hangi göstergeleri vurgular?", ["Yükselen ve Ay", "Yalnızca Güneş", "Yalnızca Mars", "Yalnızca Satürn"], 0),
        qz("'Tropikal Güneş Kova'da' ne demektir?", ["Güneş ilkbahar ekinoksundan sonraki 11. 30°'lik bölümdedir", "Güneş Kova takımyıldızındadır", "Güneş batmıştır", "Yüzük şeklinde görünür"], 0),
        qz("Astrolojinin kestirim başarısı için ne söylenebilir?", ["Destekleyen kontrollü kanıt yoktur", "Laboratuvarda kanıtlanmıştır", "Tıp onaylamıştır", "Yasa gereğidir"], 0),
      ],
    },
    {
      id: "v2",
      title: "2. Kitabın Kapsamı: Gezegenlerden Dashalara",
      description: "İçindekiler haritası ve neyin neden eklenmediği.",
      lessons: [
        {
          id: "fv-harita",
          title: "İçindekiler haritası: 9 grahalardan Şadbala'ya",
          summary: "Gezegen tanımları, burçlar, yönler/açılar, yogalar, Şadbala, harmonik haritalar, dashalar, saatlik ve tıbbi astroloji.",
          body: `## Bölüm grupları (PDF içindekilerinden)

1. **Giriş:** Doğu–Batı astrolojisi, iki zodyak, ayanamsha, **Vedik haritanın hesaplanması** ve örnek tablo.
2. **Gezegenler:** Büyük kozmik göstergeler, sıra, numeroloji, **doğa özellikleri, elementler, ana göstergeler**; Güneş, Ay, Mars, Merkür, Jüpiter, Venüs, Satürn; **Ay düğümleri (Rahu–Ketu)**; Uranüs, Neptün, Plüton.
3. **Burçlar:** yönetici gezegenler, tek/çift, **nitelikler (Kardinal/Sabit/Değişken)**, elementler, her burcun ayrıntısı.
4. **Yönler/açılar:** *Sambandha*, kavuşum, **açılar (Vedik 'drishti' sistemi)**, **yanma (combustion)**, **gezegen savaşı**, gerileme.
5. **Yogalar:** Ay yogası, **Mahapurusha yogaları**, **Kuja Dosha**.
6. **Şadbala:** altı güç (konumsal, yönsel, zamansal, hareket, doğal, görünüş).
7. **Harmonik haritalar (Vargalar):** Hora, Drekkana, Chaturtamsha, Saptamsha, **Navamsha (D9)**, Dashamsha… Shashtiamsha ve her biri için anlam/kullanım.
8. **Dönemler:** gezegen dönemlerinin belirlenmesi ve kullanımı, **geçişler**, uygun zaman seçimi (muhurta), **gezegen saatleri**, saatlik (horary) astroloji.
9. **Tıp astrolojisi:** **Ayurveda** ve astroloji, üç doşa (mizah), tipler.

## Sitedeki karşılığı
Bu sitedeki Astroloji sayfası Vedik hesap altyapısını kullanır: **sidereal Lahiri**, **whole sign evler**, **Rahu/Ketu** (ortalama düğüm), **nakshatralar**. Kitabın 'Harmonik haritalar', 'Şadbala' ve 'Dasha' bölümleri sitede **uygulanmış değildir**.

## Çalışma
Kitabın içindekilerinden "sitede olan / olmayan" iki sütunlu bir liste çıkar; hangi eksik özelliği hesaplayabilmek için hangi veri gerektiğini (ör. Vimshottari dasha için Ay'ın nakshatra derecesi) yaz.`,
          verification: `İçindekiler PDF'ten okundu. Sitenin özellikleri (sidereal Lahiri, whole sign, Rahu/Ketu, nakshatra) proje kodunda doğrulandı. Her bölümün içeriği derse konmadı.`,
        },
        {
          id: "fv-tip",
          title: "Tıp astrolojisi ve Ayurveda: neden içerik verilmedi?",
          summary: "Üç doşa–burç/gezegen eşleşmeleri ve sağlık iddialarının kanıt durumu.",
          body: `## Kitabın son bölümü
"Tıp Astrolojisi" başlığı altında **Ayurveda ve astroloji**, **üç mizah (doşa), yerleri ve işlevleri** ve karakteristik tipler yer alır.

## Neden öğretmiyoruz?
- **Sağlık iddiaları:** Gezegen/burç–organ–hastalık eşleşmeleri **geleneksel astro-tıp** (melothesia) iddialarıdır; klinik kanıtla desteklenmez.
- **Ayurveda:** Köklü bir geleneksel tıp sistemidir; ancak **doşa tipolojileri** ve tedavi iddiaları modern klinik standartlarla sınanmamış veya sınırlı kanıtlıdır. İlaç/bitki kullanımı **etkileşim ve toksisite** riski taşır.
- **Karar:** Bu bölüm modülde yalnızca **başlık düzeyinde** anılır; sağlık kararlarını doktorlara bırak.

## Çalışma
Ayurveda hakkında NCCIH (ABD) veya benzer bir resmi kurumun genel bilgi sayfasını oku ve kendi 5 maddelik güvenlik notunu yaz.`,
          verification: `İçindekiler PDF'ten okundu (tıp astrolojisi başlıkları). Kanıt durumu değerlendirmesi genel bilgiye dayanır; bu derste URL kaynağı eklenmedi (bkz. "Eklenmeyenler").`,
        },
      ],
      quiz: [
        qz("Vedik astrolojide Ay düğümlerinin adı nedir?", ["Rahu ve Ketu", "Mars ve Venüs", "Surya ve Chandra", "Brahma ve Vishnu"], 0),
        qz("Navamsha (D9) neyi ifade eder?", ["Harmonik (varga) haritalardan 9'uncu", "Bir gezegen adı", "Bir ev", "Bir takvim"], 0),
        qz("Bu sitedeki Vedik haritada kullanılan ev sistemi hangisidir?", ["Whole sign", "Placidus", "Koch", "Campanus"], 0),
        qz("Şadbala nedir?", ["Gezegenlerin altı tür gücünün ölçümü", "Bir ritüel", "Bir yemek", "Bir takvim"], 0),
        qz("Tıp astrolojisi bölümü için doğru yaklaşım nedir?", ["Başlık düzeyinde anıp sağlık kararlarını doktora bırakmak", "Tedavi planı yapmak", "İlaç kullanmak", "Hekimi bırakmak"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Gezegen, burç, yoga, Şadbala ve harmonik harita yorumları:** Yorumlar geleneksel iddialardır; bağımsız doğrulama yok; ayrıntılar derse konmadı.
- **Dasha (gezegen dönemleri) hesapları:** Ay'ın nakshatrasına bağlı hesap sitede uygulanmadı; ayrıca yazılması gereken bir özelliktir.
- **Tıbbi astroloji ve Ayurveda tavsiyeleri:** Sağlık iddiası; kanıt yok/sınırlı.
- **Ayanamsha seçimi için 'doğru' değer:** Tartışmalıdır; yalnızca farklar gösterildi.
- **PDF'in makine çevirisi hataları:** Bazı terimler (ör. 'Merkür' yerine 'Merküre') bozulmuş olabilir.`,
});
