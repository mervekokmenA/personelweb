import { extraModule } from "./builder";
import { qz } from "../helpers";

export const kabbalahUnveiledModule = extraModule({
  id: "ek-kabbalah-unveiled",
  title: "The Kabbalah Unveiled (Mathers, 1887)",
  tagline: "Zohar'dan üç kısa kitabın Latince'den İngilizce çevirisi: yapı, bağlam ve eleştirel okuma",
  description:
    "Yüklediğin 'kabbalah-unveiled.pdf' (S. L. MacGregor Mathers, 1887) için ek modül. Kitabın nasıl ortaya çıktığını, içindeki üç Zohar bölümünü, çevirmenin giriş makalesini ve kitabın akademik açıdan nasıl okunması gerektiğini anlatır.",
  source: {
    file: "kabbalah-unveiled.pdf",
    author: "S. L. MacGregor Mathers (çev.)",
    language: "İngilizce",
    pages: 377,
    readNote: "Künye, içindekiler ve çevirmenin giriş makalesinin başı (alfabe tablosu, gematria, Ginsburg alıntısı) okundu. Üç Zohar bölümünün ana metinleri derse konmadı.",
  },
  units: [
    {
      id: "k1",
      title: "1. Kitap, Kaynak ve Bağlam",
      description: "Kabbala Denudata, Mathers'in çevirisi ve içindeki üç bölüm.",
      lessons: [
        {
          id: "ku-kitap",
          title: "Kitabın kimliği ve kaynağı",
          summary: "1887, George Redway; Latince Kabbala Denudata'dan; dedikasyon ve içindekiler.",
          body: `## Künye
**The Kabbalah Unveiled** (*Kabbala Denudata*): **S. L. "MacGregor" Mathers**, ilk basım **Londra, George Redway, 1887**. PDF ise Celephaïs Press'in (2003) sacred-texts tarayışına dayanan elektronik sürümüdür.

## Kaynak zinciri
Başlık sayfası kitabı şöyle tanımlar: "**Knorr von Rosenroth'un Latince versiyonundan İngilizceye çevrilmiş ve özgün Keldani ve İbranice metinle karşılaştırılmış**". Yani:
1. Zohar'ın bazı bölümleri (Aramice).
2. → **Christian Knorr von Rosenroth**'un *Kabbala Denudata*'sındaki Latince çeviri (17. yy.).
3. → Mathers'in İngilizcesi (1887).

Bu üç basamaklı zincir, çevirinin **doğrudan Aramice'den yapılmadığı** anlamına gelir (Mathers "karşılaştırdığını" söyler; bunun ne ölçüde olduğu bu dersin kaynaklarıyla doğrulanamadı).

## İçerik (içindekiler)
Kitap **Zohar'ın üç kitabını** içerir:
- **Siphra Dtzeniouthah** — *Gizli Gizem Kitabı* (Book of Concealed Mystery), 5 bölüm
- **Idra Rabba Qadisha** — *Büyük Kutsal Meclis*
- **Idra Zuta Qadisha** — *Küçük Kutsal Meclis*

Mathers kitabı, *The Perfect Way*'in yazarları **Anna Kingsford ve Edward Maitland**'a ithaf eder — yani Teosofi/Hermetik çevreyle bağlantısı çevirinin tonunu belirler.

## Çalışma
Başlık sayfası ve içindekilerden "çeviri zinciri" şemasını kendi elinle çiz.`,
          verification: `**Kaynak:** [Wikipedia — Christian Knorr von Rosenroth](https://en.wikipedia.org/wiki/Christian_Knorr_von_Rosenroth), [Sacred Texts / yayın kaydı](https://www.universalfreemasonry.org/en/library/the-kabbalah-unveiled/title-page). Başlık sayfası ve içindekiler PDF'ten okundu. Çevirinin doğruluğu üzerine akademik değerlendirme bu derse konmadı (bkz. "Eklenmeyenler").`,
        },
        {
          id: "ku-giris",
          title: "Mathers'in giriş makalesi: harfler, gematria, Ginsburg",
          summary: "İbrani alfabesi tablosu, 'her kelime bir sayıdır' ilkesi ve Hıristiyan Kabalacıların listesi.",
          body: `## Giriş makalesinin içeriği (başı)

1. **Kitabın savı:** Mathers, Kabala'yı Kitab-ı Mukaddes'in "anahtarı" olarak sunar; Eski Ahit'i anlamayanın Yeni Ahit'i de anlayamayacağını savunur.
2. **Alfabe tablosu:** 22 harfin İngilizce karşılığı, sayı değeri (Aleph = 1 … Tau = 400; sonda yazılan harflerin 500–900 değerleri) ve adları: Aleph—öküz, Beth—ev, Gimel—deve, Daleth—kapı, Yod—el, Qoph—ense, Shin—diş vb.
3. **Gematria:** İbranice ve Keldanice'de ayrı sayı rakamı olmadığı için "her kelime bir sayı, her sayı bir kelimedir"; Vahiy'deki "canavarın sayısı"na gönderme yapar. Gematria "gerçek (literal) Kabala'nın birinci bölümü" olarak tanıtılır.
4. **Yazım:** "Qabalah" yazımını İbranice yazıma daha uygun bulduğu için seçer.
5. **Ginsburg alıntısı:** Kabala'yı "teosofi" olarak niteleyen **C. D. Ginsburg**'un denemesinden alıntı yapar ve Kabala'dan etkilenen Hıristiyan düşünürleri sayar: Raymond Lully, Johannes Reuchlin, Pico della Mirandola, Agrippa, J. B. van Helmont, Robert Fludd, Henry More.

## Dikkat
Bu liste **tarihsel ilgiyi** gösterir; her ismin Kabala'yı hangi biçimde ve ne ölçüde benimsediği ayrı çalışma ister.

## Çalışma
22 harfin adını ve sayı değerini kendi elinle tabloya yaz; "Mum", "Ay" gibi kelimelerin İbranice gematria değerini hesaplamayı dene (İbranice karakterle).`,
          verification: `Giriş makalesinin ilk bölümü (alfabe tablosu, gematria, Ginsburg alıntısı) PDF'ten doğrudan okundu. İsimlerin listesi Ginsburg alıntısında geçtiği şekilde verildi; kişilerin Kabala'ya yaklaşımları bu derste ayrıntılandırılmadı.`,
        },
      ],
      quiz: [
        qz("Kitabın ilk basım yılı ve yayıncısı nedir?", ["1887, George Redway", "1904, Boleskine", "1909, Walter Scott", "1935, Williams & Norgate"], 0),
        qz("Mathers çeviriyi hangi kaynak metinden yaptığını söyler?", ["Knorr von Rosenroth'un Latince versiyonundan (özgün metinle karşılaştırarak)", "Doğrudan Aramice el yazmasından", "Fransızca çeviriden", "Almanca çeviriden"], 0),
        qz("Kitapta hangi üç Zohar bölümü yer alır?", ["Siphra Dtzeniouthah, Idra Rabba, Idra Zuta", "Sefer Yetzirah, Bahir, Zohar", "Corpus Hermeticum, Asclepius, Poimandres", "Genesis, Exodus, Leviticus"], 0),
        qz("Gematria nedir?", ["Harflerin sayı değerine dayalı yorum", "Takvim hesabı", "Bir müzik sistemi", "Bir ilaç"], 0),
        qz("Mathers kitabı kime ithaf eder?", ["Anna Kingsford ve Edward Maitland", "Aleister Crowley", "Eliphas Lévi", "Dion Fortune"], 0),
        qz("Mathers'in kitabı için doğru değerlendirme hangisidir?", ["Zohar'ın doğrudan değil, Latince aracılığıyla çevirisidir", "Zohar'ın tam çevirisidir", "Sefer Yetzirah çevirisidir", "Akademik bir eleştirel baskıdır"], 0),
      ],
    },
    {
      id: "k2",
      title: "2. İçerik Haritası ve Eleştirel Okuma",
      description: "Üç kitabın başlıkları ve bu çevirinin bugünkü yeri.",
      lessons: [
        {
          id: "ku-harita",
          title: "Idra Rabba'nın başlık haritası: 'Uzun Yüz' ve 'Küçük Yüz'",
          summary: "Macroprosopus ve Microprosopus'un bölümleri: başlıklara göre içerik haritası.",
          body: `## İçindekiler nasıl okunur?

**Idra Rabba Qadisha**'nın içindekileri, ilâhî bir "**yüz**"ün **anatomik betimlemeleri** olarak sıralanır:

- **Macroprosopus ("Uzun Yüz", Kadim Olan):** kafatası, beyin zarı, saç, alın, **gözler**, burun, **sakal** (13 bölüm halinde ayrıntılı), Macroprosopus'un sonucu.
- **Microprosopus ("Küçük Yüz"):** kafatası, beyin, saç, alın, gözler, burun, kulaklar, **sakal** ve bölümleri…
- Arada **"Edomlu Krallar"** başlığı yer alır.
- Metin, başlıkların gösterdiği gibi, ilâhî olanın **insan suretinde simgesel** anlatımıdır.

Kitabın sonraki bölümleri (Idra Zuta, "Küçük Kutsal Meclis") aynı sembolizmin devamını içerir.

## Nasıl okunur?
Bu başlıklar Hayat Ağacı'ndaki üst ve alt sephirot (Kether–Chokmah–Binah ile Tiphareth çevresindeki "altı")'yla ilişkilendirilmiştir (Mathers/Altın Şafak yorumu). **Bu bağın orijinal Zohar'da nasıl kurulduğu** akademik tartışma konusudur; Mathers'in notları Altın Şafak'a özgü bir okuma getirir.

## Çalışma
İçindekilerden Macroprosopus ve Microprosopus bölümlerini yan yana tabloya koy; benzerlikleri ve farkları not et.`,
          verification: `İçindekiler PDF'ten okundu (bölüm başlıkları). Başlıkların Hayat Ağacı'ndaki sephirot ile ilişkisi Altın Şafak geleneğinin okumasıdır; akademik kabalistik literatürle (ör. Scholem) karşılaştırılması gerekir. Bölüm metinleri bu derse konmadı.`,
        },
        {
          id: "ku-elestiri",
          title: "Bu çeviri bugün nasıl okunmalı?",
          summary: "Tarihsel bir belge; akademik kaynaklarla birlikte.",
          body: `## Üç katman
1. **Zohar (Aramice, ortaçağ)** — Kabala'nın temel metinlerinden biri.
2. **Knorr von Rosenroth'un Latince çevirisi (17. yy.)** — Hıristiyan Kabala çevresinin ürünü; Zohar'ın seçilmiş kısımlarını Avrupa'ya taşıdı.
3. **Mathers (1887)** — Teosofi/Hermetik bir çevirmenin İngilizcesi; Altın Şafak'ın Kabala anlayışının kaynaklarından biri.

## Sonuç
Bu kitap **Zohar'ın güvenilir bir akademik çevirisi değil**, Batı okültizminin Kabala'yı nasıl aldığını gösteren **tarihsel bir belgedir**. Okuyucuların ilgisi için bir okur yorumu, Gershom Scholem ve Moshe Idel gibi akademik kaynakların kullanılmasını önerir (bu yorum bireysel bir görüştür).

## Çalışma
Okültizm modülü 5. ünitedeki Scholem kaynağını (Major Trends in Jewish Mysticism) bu kitapla yan yana okumak için bir plan yaz.`,
          verification: `**Kaynak:** [Wikipedia — Christian Knorr von Rosenroth](https://en.wikipedia.org/wiki/Christian_Knorr_von_Rosenroth). "Akademik çeviri değildir" değerlendirmesi, kitabın aracılı (Latince) kaynak zincirinden çıkarılmış bir sonuçtur; Mathers çevirisinin doğruluğu üzerine hakem denetimli bir çalışma bu derste okunmadı.`,
        },
      ],
      quiz: [
        qz("Idra Rabba'da 'Macroprosopus' neyi simgeler?", ["İlâhî olanın 'Uzun Yüzü' (Kadim Olan)", "Bir gezegeni", "Bir şehri", "Bir nehri"], 0),
        qz("Bu kitap bugün nasıl okunmalıdır?", ["Batı okültizminin Kabala'yı alışını gösteren tarihsel bir belge olarak", "Zohar'ın kesin çevirisi olarak", "Bilimsel makale olarak", "Tıbbi bilgi olarak"], 0),
        qz("Kitabın çeviri zinciri hangisidir?", ["Zohar (Aramice) → Latince → Mathers İngilizcesi", "İbranice → Almanca → İngilizce", "Arapça → İngilizce", "Yunanca → İngilizce"], 0),
        qz("Kitabın içindekilerinde hangi başlık geçer?", ["The Edomite Kings", "The Emerald Tablet", "The Lesser Key", "The Book of the Law"], 0),
        qz("Akademik Kabala için hangi isimler önerilir?", ["Gershom Scholem ve Moshe Idel", "Aleister Crowley", "Dion Fortune", "Éliphas Lévi"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Üç Zohar bölümünün ana metinleri:** Hacimli, sembolik ve yoruma açık; doğru anlatmak için akademik rehberlik (Scholem vb.) gerektiriyor. Başlık haritası verildi.
- **Mathers çevirisinin Latince ve Aramice orijinale göre doğruluğu:** Hakemli bir inceleme bu derste okunmadığı için iddia edilmedi.
- **Mathers'in tüm dipnotlarının/Altın Şafak yorumlarının listesi:** Taranmadı.
- **Giriş makalesinin tamamı:** Yalnızca başı okundu; kalan kısımlar derse konmadı.`,
});
