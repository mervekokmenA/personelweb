import { extraModule } from "./builder";
import { qz } from "../helpers";

export const ceyhanModule = extraModule({
  id: "ek-ceyhan-ezoterik-astroloji",
  title: "Ezoterik Astroloji (Oğuzhan Ceyhan, Destek Yayınları 2021)",
  tagline: "Kitabın girişindeki iddiaların kaynak denetimi: Einstein 'alıntısı', Kepler Akademisi ve yedi ışın modeli",
  description:
    "Yüklediğin 'Ezoterik Astroloji' (Oğuzhan Ceyhan; Destek Yayınları, Ekim 2021) PDF'inin ek modülü. Kitabın amacını, girişteki eğitim/akademi anlatısını, Einstein alıntısını ve 'yedi ışın' modelini kaynakla karşılaştırır. Yorum ve harita tekniği öğretmez; astroloji modülünün ezoterik katman dersleriyle birlikte okunur.",
  source: {
    file: "ezoterik-astroloji_o_uzhan_ceyhan.pdf",
    author: "Oğuzhan Ceyhan (Destek Yayınları, Ekim 2021)",
    language: "Türkçe",
    pages: 98,
    readNote: "Künye, önsöz, giriş, 'Yeni Astroloji' bölümü ve 'Yedi Işın / enerji kavramları' girişi okundu. Burçların ve evlerin ayrıntılı yorumları derse konmadı.",
  },
  units: [
    {
      id: "z1",
      title: "1. Kitabın Amacı ve Girişteki İddialar",
      description: "Önsöz, giriş, akademi anlatısı ve Einstein alıntısı.",
      lessons: [
        {
          id: "cz-onsoz",
          title: "Önsöz: kitap kime yazılmış?",
          summary: "'Giriş kitabı değil' vurgusu; ön koşullar; gizli cemiyet ritüelleri kapsam dışı.",
          body: `## Künye
*Ezoterik Astroloji* — **Oğuzhan Ceyhan**, **Destek Yayınları** ("Araştırma: 340"), Ekim 2021; editör **Erhan Altunay**; yayıncı sertifika ve ISBN kitapta yer alır.

## Önsöz'ün ana noktaları
- Ezoterik astroloji "**Yukarıda olan aşağıda olanın aynısıdır…**" ilkesine dayanan ama "bildiğimiz astrolojiden daha farklı açılımlar taşıyan bir disiplin"dir.
- Yazar bunun bir **"giriş" kitabı olmadığını** söyler: okuyucudan **temel astroloji bilgisi** ve **temel ezoterizm bilgisi** beklenir; kitap, **her iki disiplini bilen** ve "nerelerde etkileştiklerini, tarih boyunca nasıl olduğunu merak eden" okuyucuya **araştırmalar için bir anahtar** olarak tasarlanmıştır.
- **Gizli cemiyetlerin özel ritüelleri ve bilgileri** kapsam dışındadır; "önce temelin kavranması" esas alınmıştır.

## Eleştirel not
Önsöz, kitabı kendi iddialarıyla (araştırma anahtarı) çerçeveler. Böyle kitapları okurken: (1) **kaynakça var mı?** (2) **iddialar atıflı mı?** (3) **tarihsel olgular ile gelenek yorumları ayrılmış mı?** sorularını sor. Bu PDF'te yoğun kaynak atfı bulunmuyor (Bailey, Blavatsky gibi isimler az geçiyor; yedi ışın modelinin kaynağı açıkça verilmiyor — bkz. 3. ders).

## Çalışma
Önsözdeki üç iddiayı "ölçülebilir / tanımsal / amaç beyanı" olarak sınıflandır.`,
          verification: `Künye, önsöz ve giriş PDF'ten doğrudan okundu. Kitabın kaynakça yapısı bu derste taranmadı; 'atıfın az olduğu' gözlemi okunan bölümlere dayanır.`,
        },
        {
          id: "cz-giris",
          title: "Girişteki iddiaların kaynak denetimi",
          summary: "Astroloji eğitimi, Kepler Akademisi, Sophia Centre, 'dolunayda cinayet' ve Einstein 'alıntısı'.",
          body: `## Girişteki anlatı
Yazar astrolojinin dünyada **birçok üniversitede okutulduğunu**, **Kepler Akademisi (Seattle)'nin dünyanın en büyük psikolojik astroloji akademisi** olduğunu, İngiltere'de **Sophia Centre** (Galler Üniversitesi), **London School of Astrology** ve **Faculty of Astrological Studies** gibi kurumların bulunduğunu, bu okullarda "**dolunay günlerinde cinayetlerin ve kazaların neden arttığı**" gibi konuların incelendiğini söyler; Moskova ve Çin akademilerini sayar ve metni **Einstein'ın astroloji hakkındaki görüşü** diye bir alıntıyla bitirir ("Astroloji, kendi başına bir bilimdir ve aydınlatıcı bir bilgi yığını ihtiva eder…").

## Denetim sonucu
| İddia | Durum |
|---|---|
| Kepler Akademisi/College Seattle'da | Gerçek bir kurum; ancak 2000'de **geçici devlet yetkisi** alıp 2010'da akreditasyonu tamamlayamadığı için **artık derece veren bir kurum değil**, **sertifika/diploma programı** olarak çalışır (Wikipedia). "Dünyanın en büyük akademisi" ifadesi doğrulanamadı |
| "Dolunayda cinayet ve kazalar artar" | **Kanıt yok**: Rotton & Kelly (1985) meta-analizi ve sonraki incelemeler (bkz. ek modül *Ay Büyüsü*) |
| **Einstein alıntısı** | **Uydurmadır**: *Nature* ve *Skeptical Inquirer*'e göre metin, astrolog **Werner Hirsig**'in 1950 tarihli *Manuel d'astrologie* kitabının önsözünden (veya benzer bir astrolojik kaynaktan) gelir; Einstein'a ait olduğuna dair kanıt yok ve Einstein'ın bilinen tek astroloji yorumu onu **sözde bilim** olarak niteler |
| Moskova/Çin akademileri | Bu derste doğrulanamadı |
| Kuantum mekaniğinin astrolojiyi desteklemesi | **Mantık sıçraması**: kuantum mekaniği astrolojiyi desteklemez (bkz. ek modül *Lirvian*) |

## Dersin amacı
Bir kitabın girişindeki **otorite çağrışımlı** ifadeleri (kurum, ünlü isim) tek tek denetleme alışkanlığı kazanmak.

## Çalışma
Başka bir kitabın girişinden iki "otorite alıntısı" seç ve aynı yöntemle (kim, nerede, ne zaman söyledi?) doğrula.`,
          verification: `**Kaynak:** [Wikipedia — Kepler College](https://en.wikipedia.org/wiki/Kepler_College), [Nature — Einstein astrology hoax özeti](https://www.nature.com/articles/d41586-018-05004-4), [History.com — Things Einstein never said](https://www.history.com/news/here-are-6-things-albert-einstein-never-said), [Scientific American — Lunacy and the Full Moon](https://www.scientificamerican.com/article/lunacy-and-the-full-moon/). Sophia Centre ve London School of Astrology bilgileri bu aramada doğrulanmadı. Giriş metni PDF'ten okundu.`,
        },
      ],
      quiz: [
        qz("Kitabın önsözüne göre okuyucudan ne beklenir?", ["Temel astroloji ve temel ezoterizm bilgisi", "Hiçbir ön bilgi", "Yalnızca matematik", "Tıp eğitimi"], 0),
        qz("Girişteki Einstein 'alıntısı' için doğru değerlendirme hangisidir?", ["Uydurma/atfı doğrulanamayan bir alıntıdır", "Einstein'ın kitabından kesin alıntıdır", "Nobel konuşmasıdır", "Mahkeme kaydıdır"], 0),
        qz("Kepler College'ın bugünkü durumu nedir?", ["Sertifika/diploma programı olarak çalışır (derece vermez)", "Dünyanın en büyük üniversitesidir", "Kapanmıştır ve hiç var olmamıştır", "Tıp fakültesidir"], 0),
        qz("'Dolunayda cinayetler artar' iddiası için en iyi cevap nedir?", ["Meta-analizler bu etkiyi göstermedi", "Kesinlikle doğrudur", "Yalnızca Türkiye'de doğrudur", "Yasal olarak kanıtlanmıştır"], 0),
        qz("Önsöze göre kitapta hangi konu kapsam dışıdır?", ["Gizli cemiyetlerin özel ritüelleri ve bilgileri", "Gezegenler", "Burçlar", "Ezoterik sembolizm"], 0),
      ],
    },
    {
      id: "z2",
      title: "2. Yedi Işın ve 'Yeni Astroloji' Modeli",
      description: "Kitabın 'yeni astroloji' anlatısı ve yedi ışın şemasının kökeni.",
      lessons: [
        {
          id: "cz-isin",
          title: "'Yeni Astroloji' ve yedi ışın modeli",
          summary: "Güneş Sistemi 'canlı organizma', yedi ışın ve çakra benzetmesi; modelin kaynağı ve sınırları.",
          body: `## Kitabın anlatısı
- "**Yeni Astroloji**" bölümü astrolojiyi **Mısır, Mezopotamya ve Hindistan tapınaklarına** bağlar; **Stonehenge ve Karnak'ı "astrolojik tapınaklar"** diye anar; **Kova Çağı**'na girerken "ezoterik astroloji"nin "yeni astroloji" demek daha isabetli olacağını söyler.
- **Yedi ışın**: (1) İrade ve Güç, (2) Sevgi ve Bilgelik, (3) Aktif Zekâ, (4) Çatışma Yoluyla Uyum, (5) Sağlam Temelli Bilim, (6) Adanmışlık ve İdealizm, (7) Törensel Düzen.
- **Temel kavramlar**: Tüm Güneş Sistemi canlı bir organizma; gezegenler Güneş Sistemi'nin "çakraları"; **Solar Logos**; yedi enerjinin Küçükayı takımyıldızı üzerinden Güneş'e, oradan Zodyak–gezegen–Dünya–insana (çakralarda en düşük dirençli noktalarda) ulaştığı; 2.160 yıllık çağlar ve **25.920 yıllık Büyük Yıl**.

## Kaynak ve değerlendirme
- Yedi ışın modeli **Teosofi ve Alice A. Bailey** geleneğinin (Bailey, *Esoteric Astrology*, *A Treatise on the Seven Rays*) karakteristik bir öğretisidir; bu PDF'te Bailey adı geçmez — modelin kaynağı verilmemiştir. (Okültizm/Astroloji modülünde Bailey'nin kitabı kaynak listesindedir.)
- **25.920 yıl** gerçek bir **presesyon periyodu**dur (Dünya ekseninin presesyonu yaklaşık 25.800–26.000 yıl); astronomik temel doğru, **astrolojik "çağ" yorumu** ise geleneksel/modern bir kurgudur.
- **Stonehenge ve Karnak'ın astronomik hizalanmaları** gerçektir (gün dönümü ve ay hizaları); onları "astrolojik tapınak" diye adlandırmak **yorumdur**.
- **Büyük Piramit'in 4500 yıl önce gökyüzü gözlemleri doğrultusunda inşa edildiği** iddiası tartışmalıdır; yaşı yaklaşık 4500 yıl olması doğrudur, "astroloji içeriyordu" ise kanıtsızdır.
- "Güneş Sistemi canlı bir organizma / gezegen tanrıları" **felsefi-dinsel bir görüştür**; bilimsel iddia değildir.

## Çalışma
Yedi ışını Astroloji modülü 1. ünitedeki gezegen nitelikleriyle eşleştirmeye çalış; hangi eşleşmeler kitapta açıkça verilmiş, hangileri senin yorumun?`,
          verification: `Yedi ışın listesi ve temel kavramlar PDF'ten okundu. Bailey ve Teosofi kaynağı genel okültizm tarihi bilgisidir (Astroloji modülü kaynak listesinde Bailey vardır; bu derste URL ile doğrulanmadı). Presesyon periyodu astronomi bilgisidir (yaklaşık 25.800 yıl). Stonehenge/Karnak hizalanmaları genel arkeoastronomi bilgisidir; bu derste kaynak URL'si eklenmedi.`,
        },
      ],
      quiz: [
        qz("Yedi ışın modeli hangi geleneğin karakteristik öğretisidir?", ["Teosofi / Alice Bailey", "Antik Yunan atomculuğu", "Hint Ayurveda", "Modern fizik"], 0),
        qz("25.920 yıllık 'Büyük Yıl' neyle ilişkilidir?", ["Dünya ekseninin presesyonu", "Güneş lekeleri", "Ay döngüsü", "Plüton'un yörüngesi"], 0),
        qz("Kitabın birinci ışını nedir?", ["İrade ve Güç", "Sevgi ve Bilgelik", "Aktif Zekâ", "Törensel Düzen"], 0),
        qz("'Güneş Sistemi canlı bir organizmadır' görüşü nasıl değerlendirilmelidir?", ["Felsefi/dinsel görüş; bilimsel iddia değildir", "Kanıtlanmış biyoloji", "Tıbbi teori", "Fizik yasası"], 0),
        qz("Kitapta yedi ışın modeli için hangi sorun vardır?", ["Modelin kaynağı açıkça verilmemiştir", "Çok kısa olması", "İngilizce olması", "Resim bulunması"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Burç, ev ve gezegen yorumlarının ayrıntıları (ışın–burç–gezegen eşleşmeleri):** Bağımsız doğrulama yok; yorum.
- **Sophia Centre, London School of Astrology, Moskova/Çin akademileri:** Bu aramada doğrulanamadı; kesin bilgi olarak yazılmadı.
- **Karma/ruhsal dönüşüm iddiaları, 'Solar Logos' kavramı:** Doğrulanamayan doktrin.
- **Kitabın tüm bölümleri:** 98 sayfalık PDF'in yalnızca giriş kısımları ve yedi ışın başlığı okundu.
- **Piramit ve Stonehenge'in 'astrolojik tapınak' olduğu iddiası:** Kanıt yok; yorum olarak işaretlendi.`,
});
