import { extraModule } from "./builder";
import { qz } from "../helpers";

export const basickMagickModule = extraModule({
  id: "ek-basick-magick",
  title: "Basick Magick: Temel Magick El Kitabı (Mountain Temple, 2007)",
  tagline: "30 bölümlük bir derlemenin haritası: temel ilkeler, pratik başlıkları ve kritik okuma",
  description:
    "Yüklediğin 'Basick Magick' kitabının ek modülü. Kitap kamuya açık kaynaklardan derlenmiş bir başlangıç el kitabıdır; modül, kitabın yapısını, kullandığı kavramları ve her bölümün hangi geleneğe dayandığını öğretir.",
  source: {
    file: "basick-magick.pdf",
    author: "Fra. Petros Xristos Magister (ed.) — Mountain Center Pubs., 2. gözden geçirilmiş baskı 2007",
    language: "İngilizce",
    pages: 130,
    readNote: "İçindekiler, 1. bölüm (Magick nedir?) ve giriş notları okundu; diğer bölümler başlık düzeyinde haritalandı.",
  },
  units: [
    {
      id: "b1",
      title: "1. Kitabın Yaklaşımı ve Temeller",
      description: "Tanımlar, öğretmen–öğrenci ilişkisi, günlük tutma.",
      lessons: [
        {
          id: "bm-tanim",
          title: "Magick nedir? Kitabın tanımları",
          summary: "'Sanat, bilim ve zanaat' tanımı; yüksek ve alçak magick ayrımı; inisiyasyon ve dereceler.",
          body: `## Kitap hakkında

*Basick Magick: Your Path to Self Knowledge and Power* (2. gözden geçirilmiş baskı, 2007), **Mountain Center Pubs.** (Phoenix, ABD) yayını; editör "Fra. Petros Xristos Magister". Kitap kendisini "**çok çeşitli kamuya açık (public domain) kaynaklardan** derlenmiş bir el kitabı" olarak tanıtır.

## 1. bölümün temel savları
- Magick, "**ruhsal gücün eyleme geçmesi**"dir; bir **sanat** (yaratıcılık), **bilim** (tutarlı ilkeler) ve **zanaat** (uygulama) olarak tanımlanır.
- "Magick, bilinci ve dünyanı gerçekten istediğini daha iyi yansıtacak şekilde değiştirme sanat, bilim ve zanaatıdır."
- **Alçak magick/büyücülük:** ruhsallık olmadan dışa güç yansıtma (aşk, para vb.). **Yüksek magick:** ruhsallık + magick, iç gelişim için dışa güç yansıtma.
- **İnisiyasyon:** "yolun üzerine adım attığını biçimsel olarak kabul etmek"; çoğu büyücünün **kendini inisiye ettiği** söylenir.
- Gayriresmî seviyeler: **Öğrenci, Usta-Adept, Master** (adeptler öğrencilere, master'lar adeptlere öğretir).

## "Neden K?"
Kitap, Crowley'in "magick" yazımını ilk kullanan modern isim olduğunu, bunun sahne sihirbazlığından ayrım ve 11 sayısıyla ilgili olduğunu söyler. (Crowley'in yazımı benimsediği yaygın bilinir; ancak "ilk kullanan" ve sayı gerekçeleri kitabın beyanıdır.)

## Eleştirel not
"Dünyadaki her şey iç bilincini yansıtır" savı kitabın felsefi varsayımıdır, kanıtlanmış bir olgu değildir.

## Çalışma
Üç seviyeyi (öğrenci/adept/master) dersteki tarife göre tablolaştır; kendi gelişimini hangi ölçütlerle gözlemleyeceğini yaz.`,
          verification: `Giriş bölümü PDF'ten doğrudan okundu; alıntılar özetlenmiştir. "K yazımı" gerekçeleri kitabın beyanıdır; Crowley'in yazımı benimsediği genel bilgidir (Wikipedia: Magick).`,
        },
        {
          id: "bm-temeller",
          title: "Temel uygulama ilkeleri: öğretmen, günlük, denge",
          summary: "2–6. bölümler: öğretmen–öğrenci, genel kurallar, günlük, dengeli yol, Sfenks'in güçleri.",
          body: `## Bölüm haritası

| Bölüm | Başlık |
|---|---|
| 2 | Teacher and Student (Öğretmen ve Öğrenci) |
| 3 | General Practice Guidelines (Genel uygulama ilkeleri) |
| 4 | Keeping a Magickal Journal (Magickal günlük) |
| 5 | A Balanced Path (Dengeli bir yol) |
| 6 | Powers of the Sphinx (Sfenks'in güçleri) |

## Öne çıkan fikir: öğretmen gerekli mi?
Kitap, "magick öğrenmek için dış bir öğretmene ihtiyaç olmadığını" söyler; yine de küçük grup veya bire bir rehberliği faydalı bulur.

## Günlük tutmanın yeri
Günlük, modül boyunca önerdiğimiz yöntemin (kayıt + eleştirel inceleme) kitaptaki karşılığıdır. Ayrıntıları için bu sitedeki **Okültizm modülü** 1. ünite günlük çalışmasına bak.

## Çalışma
Kendi "genel uygulama kuralların" için bir sayfalık taslak yaz; hangilerinin bu kitapla, hangilerinin diğer okuduğun kaynaklarla örtüştüğünü işaretle.`,
          verification: `İçindekiler PDF'ten okundu; 2–6. bölümlerin ayrıntı metni ders metnine konmadı (bkz. "Eklenmeyenler").`,
        },
      ],
      quiz: [
        qz("Kitabın kendi tanımına göre magick nedir?", ["Ruhsal gücün eyleme geçmesi; sanat, bilim ve zanaat", "Sadece sahne gösterisi", "Bir din", "Bir tıp dalı"], 0),
        qz("Kitabın 'yüksek magick' tanımı nedir?", ["Ruhsallık ile magick'in birleşmesi", "Sadece para büyüsü", "Sahne gösterisi", "Simya"], 0),
        qz("Kitaba göre çoğu büyücü nasıl inisiye olur?", ["Kendini inisiye ederek", "Devlet belgesiyle", "Kilise onayıyla", "Mezuniyetle"], 0),
        qz("'Basick Magick' kitabı kendini nasıl tanımlar?", ["Kamuya açık kaynaklardan derlenmiş bir el kitabı", "Akademik tez", "Roman", "Tarihî el yazması"], 0),
        qz("Kitaptaki 'K' yazımının gerekçeleri nasıl değerlendirilmelidir?", ["Kitabın beyanı olarak", "Kanıtlanmış tarihsel olgu olarak", "Hukuki kural olarak", "Matematik teoremi olarak"], 0),
      ],
    },
    {
      id: "b2",
      title: "2. Uygulama ve Sistem Başlıkları",
      description: "Ritüeller, araçlar, karşılık sanatları, kehanet sistemleri ve gelenekler.",
      lessons: [
        {
          id: "bm-ritueller",
          title: "Ritüel başlıkları ve araçlar (7–16)",
          summary: "Zümrüt Tablet, elementler/gunalar/tattvalar, arınma, Orta Sütun, adorasyonlar, Hayat Ağacı ritüeli, araçlar, grup ritüeli.",
          body: `## Bölüm haritası

| Bölüm | Başlık | Kökeni (kitabın sunumuna göre) |
|---|---|---|
| 7 | Emerald Tablet of Hermes | Hermetik metin |
| 8 | Elements, Gunas, Tattvas | Batı elementleri + Hint kavramları |
| 9 | Purification: Pentagram & Hexagram | Altın Şafak tipi arınma |
| 10 | Middle Pillar: Bringing down the Light | Kabalistik meditasyon (Regardie/Altın Şafak geleneği) |
| 11–12 | Dört kez günlük Güneş adorasyonu; Evrenin Kaynağına adorasyon | Crowley/Thelema etkisinde adorasyonlar |
| 13 | Tree of Life Ritual | Hayat Ağacı ritüeli |
| 14 | Magickal Tools | Araçlar |
| 15–16 | Basic Group Circle Ritual; Consecration Ritual | Grup ve kutsama ritüelleri |

*Not:* "Kökeni" sütunu bu dersin yazarının **sınıflandırmasıdır**; kitap kaynak adlarını belirtir ama tam atıf için kendin kontrol et.

## Bu modülün sınırı
Ritüel metinleri ve adımları verilmez. Orta Sütun ve Pentagram/Hexagram arınmasının tarihî kökenleri için Okültizm modülü 6. ünite (Altın Şafak) dersine bak.

## Çalışma
Dersteki ritüel listesinde her ritüelin hangi **kaynak geleneğe** (Altın Şafak, Hermetik, Enochian vb.) ait olduğunu tabloda işaretle; belirsizleri "(Belirsiz)" yaz.`,
          verification: `Başlıklar PDF içindekilerinden. "Kökeni" sütunu genel bilgiyle yapılmış tahmini sınıflandırmadır; kitabın kendisinden doğrulanmadı.`,
        },
        {
          id: "bm-sistemler",
          title: "Karşılık sanatları, kehanet ve gelenekler (17–30)",
          summary: "Mum, renk, yağ, kristal, bitki, astroloji, numeroloji, Tarot, Qabalah, rün, şamanizm, kundalini, yılın çarkı, tanrılar.",
          body: `## Haritası

- **Karşılık sanatları:** Candle Magick (17), Color Magick (18), Oil and Essence Magick (19), Crystal Magick (20), Our Plant Allies (21).
- **Sistemler:** Astrology (22), Numerology (23), Tarot (24), Qabalah (25), Runes (26).
- **Geleneksel/popüler alanlar:** Shamanism: the Oldest Magick (27), Kundalini: Magick Serpent Power (28), Holidays: The Wheel of the Year (29), Gods of Our Folk (30).
- **Ek:** Mountain Temple tarihçesi ve seçilmiş bibliyografya.

## Tarihsel not (ders yazarından)
- "Yılın Çarkı" bayramları modern Neo-Pagan (Wicca) geleneğinin yapısıdır; **Ronald Hutton**'ın *Triumph of the Moon* kitabı bu geleneğin 20. yüzyılda şekillendiğini gösterir (Okültizm modülü 10. ünitede kaynak olarak yer alır).
- Kristal ve bitki "özelliklerinin" çoğu **geleneksel iddialardır**, bağımsız bilimsel doğrulama yoktur.
- "Kundalini" Hint kökenli bir kavramdır; kitapta Batı magick'iyle birleştirilmesi **derleme yaklaşımıdır**.

## Çalışma
Bu 14 bölümden iki tanesini seç; her biri için "kaynak geleneği – kitabın ele alışı – senin kaynakça eleştirin" üç sütunlu bir tablo yap.`,
          verification: `Başlıklar PDF içindekilerinden. Tarihsel not [Okültizm modülü 10. ünite] kaynaklarına dayanır; kristal/bitki iddiaları için bağımsız doğrulama bulunmuyor ve açıkça belirtildi.`,
        },
      ],
      quiz: [
        qz("Kitapta 'Middle Pillar' hangi bölümdedir?", ["10", "5", "22", "30"], 0),
        qz("Yılın Çarkı bayramları hangi gelenekle ilişkilidir?", ["Modern Neo-Pagan (Wicca) geleneği", "Antik Yunan mistik okulları", "Mısır rahipleri", "Orta Çağ simyası"], 0),
        qz("Kitabın Tarot ve Qabalah bölümleri hangi gruptadır?", ["Sistemler (22–26)", "Araçlar", "Ek", "Ritüeller"], 0),
        qz("Kristal/bitki 'özellikleri' için doğru değerlendirme nedir?", ["Geleneksel iddialardır; bağımsız doğrulama yoktur", "Bilimsel olarak kanıtlanmıştır", "Tıbbi onaylıdır", "Yasal zorunluluktur"], 0),
        qz("Bu modül hangi içeriği vermez?", ["Ritüel metin ve adımlarını", "Bölüm haritasını", "Eleştirel notları", "Kaynak bilgisini"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Ritüel metinleri ve adımları (9–16. bölümler):** Uygulama talimatı olarak verilmedi; kaynak geleneklerin tarihî dersleri Okültizm modülünde var.
- **Mum/renk/yağ/kristal/bitki karşılık tabloları:** Her satır geleneksel iddiadır; bağımsız doğrulanamaz.
- **Astroloji, numeroloji, Tarot, Qabalah, rün bölümlerinin ayrıntıları:** Bu konular için daha güvenilir dersler ana Okültizm ve Astroloji modüllerinde ele alındı; burada tekrarlanmadı.
- **Mountain Temple tarihçesi (ek):** Bağımsız doğrulanamadı.
- **"Magick = bilinci değiştirme" iddiasının bilimsel doğruluğu:** Kitabın felsefi varsayımıdır.`,
});
