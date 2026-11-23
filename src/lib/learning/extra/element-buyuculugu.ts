import { extraModule } from "./builder";
import { qz } from "../helpers";

export const elementBuyuculuguModule = extraModule({
  id: "ek-elemental-witchcraft",
  title: "Elemental Witchcraft: Element Büyücülüğü (Heron Michelle, 2021)",
  tagline: "Modern cadılık geleneğinde dört element + ruh yolu: kitabın haritası ve eleştirel okuma",
  description:
    "Yüklediğin 'element-buyuculuu-heron-michelle.pdf' (Llewellyn, 2021, 'Pentacle Path' serisi 1. kitap; Türkçe makine çevirisi) için ek modül. Kitabın üç kısmını, her elementin 'yolunu' ve kitabın hangi geleneklere (Hermetizm, Wicca/modern cadılık, Jungcu psikoloji) dayandığını haritalar; ritüel/büyü talimatı vermez.",
  source: {
    file: "element-buyuculuu-heron-michelle.pdf",
    author: "Heron Michelle (Llewellyn Publications, 2021; Türkçe makine çevirisi)",
    language: "Türkçe (makine çevirisi, İngilizce kaynaktan)",
    pages: 536,
    readNote: "Künye, yazar bilgisi, içindekiler ve alıştırma/ritüel dizini okundu. Bölüm gövdeleri derse konmadı.",
  },
  units: [
    {
      id: "m1",
      title: "1. Kitap, Yazar ve Yapı",
      description: "Künye ve üç kısım.",
      lessons: [
        {
          id: "em-kitap",
          title: "Künye ve yazar",
          summary: "Llewellyn 2021; 'The Pentacle Path' serisi; yazar tanıtımı.",
          body: `## Künye
*Elemental Witchcraft: A Guide to Living a Magical Life Through the Elements* — **Heron Michelle**, **Llewellyn Publications** (Woodbury, Minnesota), **2021**; seri: ***The Pentacle Path*, 1. kitap**. Kitabın yayıncı özeti: elemental müttefikler ve tanrılarla ortaklık, dört klasik elementle çalışma ve **kendi astral tapınağını inşa etme** için ritüeller, meditasyonlar, büyüler ve günlük yansımalar sunar; ayrıca **Hermetizm ilkeleri, beş beden ve Yılın Çarkı** üzerinden "güç, hakikat, sevgi, egemenlik ve tamamlanma yolları"nı işler.

## Yazar (kitaba göre)
Heron Michelle (Greenville, N.C.) "bir cadı, rahibe, sanatçı ve anne"; **Sojo Circle Coven**'ın kurucu baş rahibesi; 2010'dan beri halka açık "Modern Cadılık" eğitim programı; metafizik dükkân sahibi, **Reiki ustası, tarot okuyucusu ve durugörü uzmanı**; *Witch on Fire* blogunu Patheos Pagan'da yazar. Bu bilgiler **kitabın yazar tanıtımıdır**; bağımsız olarak doğrulanmadı.

## Yöntem notu
PDF **makine çevirisidir**; terimler (ör. "Tealoji" = *Thealogy*) bozulmuş olabilir. Bu modül yalnızca okunabilir başlık ve düzen bilgisini kullanır.

## Çalışma
Kitabın künye sayfasından "yayıncı özeti"ndeki beş yolu (güç, hakikat, sevgi, egemenlik, tamamlanma) bir tabloya yaz; her biri hangi elementle eşleşiyor?`,
          verification: `Künye, yazar bilgisi ve içindekiler PDF'ten okundu. Yazarın mesleki beyanları (rahibelik, Reiki ustalığı vb.) bağımsız kaynakla doğrulanmadı.`,
        },
        {
          id: "em-yapi",
          title: "Üç kısım ve 17 bölüm",
          summary: "Kısım 1: temeller; Kısım 2: araçlar ve tapınak; Kısım 3: beş yolun element bölümleri.",
          body: `## Kısım 1 — Temeller
1. Yirmi Birinci Yüzyıl için Büyücülük
2. Hermetik Temeller
3. Tealoji (Thealogy: tanrıça odaklı teoloji) ve ...
4. Astrolojik Zamanlama ve Büyük Magick Çalışması

## Kısım 2 — Araçlar ve Alan
5. Element Temelleri · 6. (başlık makine çevirisinde kayıp) · 7. **Enerji Bedeni ve Pentacle Benliği** · 8. **Elemental Araçlar** · 9. (başlık kayıp) · 10. **Cadı Tapınağı** · 11. (başlık kayıp)

## Kısım 3 — Beş yol
12. **Toprak ve Egemenlik Yolu** · 13. **Hava ve Hakikat Yolu** · 14. **Ateş ve Güç Yolu** · 15. **Su ve Sevgi Yolu** · 16. **Ruhun Özü ve Tamamlanma Yolu** · 17. **Dönüş Yolu** · Sonuç.

## Kitabın içindeki alıştırma türleri (dizinden)
Meditasyonlar (ör. "Zihninizin içindeki meditasyon odası", "Axis Mundi ağacı"), **Ritüeller** (kişisel sunak, "Cadı Tapınağı", her element için bir "tapınak ritüeli"), **Alıştırmalar** (egemenlik haritalama, "bilişsel uyumsuzluğa yanıt", "kontrol odağını içselleştirme", "Satürn dönüşü"), **büyüler**, **günlük yansımaları**. *Bazı alıştırmalar psikolojik kavramlar kullanır (bilişsel uyumsuzluk, kontrol odağı) — kitap büyüyü psikolojik gelişimle birleştirir.*

## Çalışma
Beş yolun her biri için kitaptaki bir "alıştırma" başlığını seç ve bunun hangi psikolojik beceriyi hedeflediğini yaz; ritüeli yapmadan "kuramsal" incele.`,
          verification: `İçindekiler ve alıştırma/ritüel dizini PDF'ten okundu. Makine çevirisinde bazı bölüm başlıkları bozuk olduğu için "kayıp" olarak işaretlendi. Alıştırmaların içeriği derse konmadı.`,
        },
      ],
      quiz: [
        qz("Kitabın yayıncısı ve yılı nedir?", ["Llewellyn, 2021", "Weiser, 1935", "Hermes, 2015", "Mitra, 2008"], 0),
        qz("Kitap hangi seridir?", ["The Pentacle Path (1. kitap)", "The Golden Dawn", "Magical Philosophy", "Equinox"], 0),
        qz("Toprak elementine kitap hangi 'yolu' bağlar?", ["Egemenlik", "Hakikat", "Güç", "Sevgi"], 0),
        qz("Su elementi hangi yolla eşleşir?", ["Sevgi", "Güç", "Hakikat", "Egemenlik"], 0),
        qz("Kitap hangi psikolojik kavramları alıştırmalarında kullanır?", ["Bilişsel uyumsuzluk ve kontrol odağı", "Rorschach testi", "Ödipus kompleksi", "Pavlov şartlanması"], 0),
        qz("PDF için doğru uyarı nedir?", ["Makine çevirisi; terimler ve başlıklar bozulmuş olabilir", "Yunanca yazılmıştır", "Akademik tezdir", "Resmî kayıttır"], 0),
      ],
    },
    {
      id: "m2",
      title: "2. Elemental Pratikleri Eleştirel Okumak",
      description: "Kaynak gelenekler, tarihsel sınırlar ve güvenli pratik.",
      lessons: [
        {
          id: "em-elestiri",
          title: "Kitap hangi geleneklere dayanıyor? Nasıl değerlendirilir?",
          summary: "Modern cadılık, Hermetizm, Yılın Çarkı ve 'gezegen büyüsü' bileşenleri; tarihsel eleştiri.",
          body: `## Kitabın bileşenleri
- **Modern cadılık/Wicca geleneği:** Yılın Çarkı, tanrıça–tanrı çifti, tapınak/daire çalışmaları.
- **Hermetizm ve Altın Şafak mirası:** dört element, pentagram, "beş beden", astral tapınak (kitabın 2. bölümünün başlığı "Hermetik Temeller").
- **Gezegensel büyü:** Hava tütsüsü–Merkür, Ateş tütsüsü–Mars ve Güneş, Su tütsüsü–Ay (alıştırma başlıklarından).
- **Jungcu/psikolojik dil:** Anima–animus, "Tanrıça-Anima'nın güçlendirilmesi", "Tanrı-Animus'un güçlendirilmesi".

## Tarihsel eleştiri
- Modern cadılığın ve Yılın Çarkı'nın **20. yüzyıl kökenli** olduğu (Hutton, *The Triumph of the Moon*) tarihçilerce gösterilmiştir (Okültizm modülü 10. ünite). "Antik cadı geleneği" anlatıları **uydurulmuş gelenek** eleştirisiyle okunmalıdır.
- Dört elementin Empedokles'ten, "beşinci"nin (aether/ruh) Aristoteles ve sonrası geleneklerden geldiği bilinen felsefe tarihidir (Okültizm 2. ünite).

## Güvenli pratik
Alıştırmalar tütsü, yağ ve mum içerir: **yangın, alerji ve havalandırma** önlemleri alın; "duygusal arınma banyosu" gibi pratikleri **psikoterapinin yerine koymayın**.

## Çalışma
Kitaptaki "Ben Büyüyüm" büyüsü gibi bir başlık için "psikolojik amaç / ritüel biçimi / gelenek kaynağı" üç sütunlu analiz yaz (uygulamadan).`,
          verification: `Bileşenler ve alıştırma başlıkları PDF'ten. Modern cadılığın tarihi için [Hutton, *The Triumph of the Moon*](https://global.oup.com/academic/product/the-triumph-of-the-moon-9780192854490) (Okültizm modülü 10. ünite kaynağı); bu derste kitabın içeriği tek tek tarihsel olarak doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("Kitabın Yılın Çarkı bileşeni hangi geleneğe aittir?", ["Modern cadılık/Wicca", "Eski Mısır tapınakları", "Antik Yunan tıbbı", "Rönesans simyası"], 0),
        qz("Ruh (spirit) elementinin yolu nedir?", ["Tamamlanma", "Egemenlik", "Hakikat", "Sevgi"], 0),
        qz("Tarihçilere göre Yılın Çarkı nerede şekillenmiştir?", ["20. yüzyıl modern Pagan geleneğinde", "Antik Roma'da", "Orta Çağ manastırlarında", "Eski Mısır'da"], 0),
        qz("Güvenli pratik için ilk önlem nedir?", ["Yangın, alerji ve havalandırma önlemleri", "Daha çok mum yakmak", "Pencereyi kapatmak", "Gece yalnız yapmak"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Ritüel, büyü ve alıştırma metinleri (tapınak ritüelleri, tütsü/yağ/mum formülleri, 'Mars Kalkanı' vb.):** Uygulama talimatı olarak verilmedi; formüllerin etkisi bağımsız doğrulanamaz.
- **Bölüm gövdeleri (Hermetik temeller, tealoji, astrolojik zamanlama):** 536 sayfalık makine çevirisi taranmadı.
- **Yazarın mesleki beyanları (rahibelik, Reiki ustalığı, durugörü):** Bağımsız doğrulanamadı.
- **Bazı bölüm başlıkları:** Makine çevirisinde bozuk olduğu için "kayıp" bırakıldı.
- **Kitabın psikolojik iddiaları (anima/animus çalışmaları):** Jungcu kavramlar kitabın ritüel çerçevesinde kullanılıyor; klinik psikoloji değildir.`,
});
