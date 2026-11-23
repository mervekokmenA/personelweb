import { extraModule } from "./builder";
import { qz, web, book } from "../helpers";

/** Yüklenen kitaplarda eksik kalan konular için internetten doğrulanarak hazırlanan ek modüller. */

export const hermeticaModule = extraModule({
  id: "ek-hermetica-zumrut-tablet",
  title: "Hermetica ve Zümrüt Tablet: Kaynak Tarihi",
  tagline: "Corpus Hermeticum'un çevirisi ve tarihlenmesi; Zümrüt Tablet'in bilinen en eski (Arapça) kaynağı",
  description:
    "Kitaplarda sık anılan Hermes Trismegistos geleneğinin neye dayandığını internet kaynaklarıyla doğrulayarak anlatan konu modülü. Yüklenen kitaplarda (Cockren, Basick Magick, Lévi vb.) geçen Zümrüt Tablet ve 'Hermetik' atıflarını tarihsel kaynak açısından denetlemeyi öğretir.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "Çeşitli ansiklopedik/akademik kaynaklar", language: "İngilizce kaynaklardan Türkçe özet", readNote: "Yalnızca internet arama sonuçları (özet düzeyi) kullanıldı; birincil metinler okunmadı." },
  resources: [
    web("Wikipedia — Emerald Tablet", "https://en.wikipedia.org/wiki/Emerald_Tablet", "Zümrüt Tablet'in Arapça kaynakları ve Latince geçişi."),
    web("Encyclopedia.com — Hermetism", "https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/hermetism"),
    book("Hermetica", "Brian P. Copenhaver", "Corpus Hermeticum'un akademik İngilizce çevirisi ve notları."),
  ],
  units: [
    {
      id: "h1",
      title: "Hermes Metinleri ve Zümrüt Tablet",
      description: "Tarih, çeviri ve dönemleme.",
      lessons: [
        {
          id: "hm-corpus",
          title: "Corpus Hermeticum: Ficino ve Casaubon",
          summary: "Rönesans'ta çeviri (Ficino) ve 17. yy.'da tarihlendirme (Casaubon): 'Mısır bilgeliği' efsanesinin çözülmesi.",
          body: `## Çeviri
- **Marsilio Ficino**, Corpus Hermeticum'un ilk **14 risalesini** *Pimander* adıyla Latinceye çevirdi. Kaynaklara göre çeviri **1463'te tamamlandı** (Cosimo'ya mektup bu tarihlidir) ancak **1471'de yayımlandı** (Belirsiz: bazı kaynaklar çeviriyi 1471 olarak verir); tarih farkı "tamamlama" ile "basım" arasındaki farktan gelir.

## Tarihleme
- **Isaac Casaubon (1614)**, Hermetik metinlerin eski Mısır kaynaklı olmadığını, **MS 2.–3. yüzyıla** ait Helenistik metinler olduğunu savundu. (Kaynaklar, bu görüşün tek başına onun olmadığını, bazı yazarların önce benzer şüpheleri dile getirdiğini ve **Ralph Cudworth'un (1678)** Casaubon'un argümanındaki kusurları gösterdiğini not eder (Belirsiz).)
- Modern çalışma **Hermetizm**'i geç antik dönem **Mısır–Yunan** harmanı olarak okur; "Hermes Trismegistos" gelenekte sonradan **Thoth–Hermes** özdeşleşmesiyle oluşmuş bir figürdür.

## Okuma notu
Kitaplarda geçen "**binlerce yıllık Mısır Hermetik bilgeliği**" cümlesi, bu bilimsel tarihlemeyle **çelişir**: Corpus Hermeticum metinleri **MS 100–300** aralığında yazılmış Yunanca eserlerdir.

## Çalışma
Elindeki bir kitapta "Hermes" atfı olan üç cümle bul ve her biri için "hangi metin? hangi dönem?" sorusunu cevapla.`,
          verification: `**Kaynak:** [Encyclopedia.com — Hermetism](https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/hermetism), [NYU ders notları — Hermetic Corpus](https://research.engineering.nyu.edu/~jbain/mms/lectures/05.HermeticCorp.pdf), [Faculty UMB — Hermeticism](https://www.faculty.umb.edu/gary_zabel/Courses/Phil%20281b/Philosophy%20of%20Magic/Primavera/hermeticism.html). Kaynaklar 1463/1471 ve Casaubon'un özgünlüğü konusunda ayrışır; bu farklar belirtildi. Birincil metinler okunmadı.`,
        },
        {
          id: "hm-zumrut",
          title: "Zümrüt Tablet'in bilinen en eski kaynağı",
          summary: "Arapça Sirr al-Khaliqa (8.–9. yy.) ve Latince geçiş (12. yy.).",
          body: `## Bilinen en eski biçimler
- **Zümrüt Tablet'in bilinen en eski biçimleri Arapçadır**; Arapça kaynaklardaki dört nüsha mistik ve simya incelemelerinde korunmuştur (ör. *Sirr al-Asrar*).
- Wikipedia'ya göre **en eski nüsha**, **"Sırr al-Khaliqa"** (*Yaratılışın Sırrı Kitabı*) adlı eserin A nüshasıdır; metnin **8. yy. sonu–9. yy. başında Arapça derlendiği** düşünülür ve kendisini **Tyanalı Apollonius**'a ait bir eserin çevirisi olarak sunar (**Pseudo-Apollonius** atfı).
- Batı'da **Latince** *Tabula Smaragdina* versiyonlarının en eskileri **12. yüzyıla** gider.

## Sonuç
Zümrüt Tablet **Eski Mısır'dan gelen bir yazıt değildir**; bilinen en eski belgeleri **İslam dünyasındaki simya yazını**dır. "Aşağıdaki yukarıdakiyle aynıdır" öğretisinin Hermetik/simya ve astrolojik gelenekte geç antik veya erken ortaçağ kökenli olması muhtemeldir (Belirsiz); kesin köken **tartışmalıdır** (Belirsiz).

## Cockren kitabıyla bağ
Cockren'in kitabı Zümrüt Tablet ile başlar (ek modül *Simya Sanatı ve Simyacılar*); metnin Türkçe sürümü bu arkaplan **bilgisi olmadan** okunursa tarihî kökeni yanlış anlaşılabilir.

## Çalışma
Wikipedia'daki Zümrüt Tablet makalesinde nüshaların tablosunu bul; hangi nüshanın hangi dilde ve yüzyılda olduğunu tabloya yaz.`,
          verification: `**Kaynak:** [Wikipedia — Emerald Tablet](https://en.wikipedia.org/wiki/Emerald_Tablet), [Timeline of Hermeticism (t3dy)](https://t3dy.github.io/HermeticDB/timeline.html). Arama sonuçlarında bu zaman çizelgesindeki bazı tarihler tutarsızdı; yalnızca Wikipedia ile uyumlu bilgiler kullanıldı. Kitab Sirr al-Asrar ile Sirr al-Khaliqa'nın ilişkisi bu derste kesin olarak ayrıştırılmadı.`,
        },
      ],
      quiz: [
        qz("Corpus Hermeticum'un ilk 14 risalesini Latinceye çeviren kimdir?", ["Marsilio Ficino", "Isaac Casaubon", "Paracelsus", "Agrippa"], 0),
        qz("Casaubon (1614) Hermetik metinleri hangi döneme tarihledi?", ["MS 2.–3. yüzyıl", "MÖ 3000", "MS 15. yüzyıl", "MS 19. yüzyıl"], 0),
        qz("Zümrüt Tablet'in bilinen en eski nüshaları hangi dildedir?", ["Arapça", "Eski Mısırca", "Sanskritçe", "İbranice"], 0),
        qz("Zümrüt Tablet'in en eski Arapça metni hangi dönemde derlenmiştir?", ["8. yy. sonu – 9. yy. başı", "MÖ 5. yy.", "MS 15. yy.", "MS 20. yy."], 0),
        qz("'Binlerce yıllık Mısır Hermetik bilgeliği' ifadesi neden eleştirilir?", ["Corpus Hermeticum MS 100–300 dolayında yazılmış Yunanca metinlerdir", "Çünkü Hermes yoktur", "Çünkü metinler yoktur", "Çünkü Latince yazılmıştır"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Corpus Hermeticum risalelerinin içeriği (Poimandres vb.):** Yalnızca tarihçe verildi; birincil metin okunmadı.
- **Asclepius ve Stobaeus parçaları, teknik Hermetika (astroloji, simya, büyü):** Bu aramada ele alınmadı.
- **Zümrüt Tablet'in metninin yorumu:** Gelenek yorumları çok farklıdır; doğrulanabilir tek bir yorum yoktur.
- **1463/1471 ayrımının kesin açıklaması:** Kaynaklar arası tutarsızlık sürüyor.`,
});

export const tarotTarihiModule = extraModule({
  id: "ek-tarot-tarihi",
  title: "Tarot Tarihi: Oyun Kartından Okült Araca",
  tagline: "15. yy. Milano oyun kartları, 18. yy. okült yorum ve 1909 Waite–Smith destesi",
  description:
    "Yüklenen kitaplarda sık geçen Tarot'un tarihini internet kaynaklarıyla doğrulayan konu modülü: 'antik Mısır kitabı' efsanesi ile belgelenmiş tarih arasındaki ayrımı gösterir.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "National Geographic, Victoria & Albert Müzesi ve akademik kaynak özetleri", language: "İngilizce kaynaklardan Türkçe özet", readNote: "Arama sonuçları düzeyinde; birincil tarihsel belgeler okunmadı." },
  resources: [
    web("National Geographic — Tarot tarihi", "https://www.nationalgeographic.com/history/article/tarot-cards-history-fortune-telling"),
    web("V&A — Tarot cards", "https://www.vam.ac.uk/articles/tarot-cards"),
    web("World of Playing Cards — Perspectives on the History of Tarot", "https://wopc.co.uk/tarot"),
  ],
  units: [
    {
      id: "t1",
      title: "Belgelenmiş Tarot Tarihi",
      description: "Oyun, okült yorum ve modern desteler.",
      lessons: [
        {
          id: "tt-oyun",
          title: "Oyun olarak Tarot: Visconti–Sforza",
          summary: "En eski korunmuş desteler 15. yüzyıl İtalyası'nda 'tarocchi' oyunu için yapıldı.",
          body: `## Kaynaklara göre
- **Tarot'un belgelenmiş ilk kullanımı bir kâğıt oyunudur**: Kuzey İtalya'da (Milano) **15. yüzyılın ortalarında** hazırlanan el boyaması **Visconti–Sforza** desteleri, **tarocchi** adlı bir "koz oyunu" (*trick-taking*) içindir.
- Kaynaklar Visconti–Sforza destesinin tarihini **1440'lar–1460'lar** arasında verir (Belirsiz); bazı kaynaklar tek tek komisyon sahiplerini farklı gösterir (Francesco Sforza / Bianca Maria Visconti (Belirsiz)). **1422** gibi daha eski bir tarih **şüphelidir**.
- Tarot, **ilk dönemde kehanet aracı değildir**; "Antik Mısır kitabı/Thoth Kitabı" anlatısı sonradan çıkmıştır.

## Çalışma
Visconti–Sforza destesinin görsellerini çevrimiçi bir müze/arşiv kaynağında incele; kartların oyun işlevini (koz sırası) araştır.`,
          verification: `**Kaynak:** [National Geographic — Tarot history](https://www.nationalgeographic.com/history/article/tarot-cards-history-fortune-telling), [World of Playing Cards — Visconti-Sforza](https://www.wopc.co.uk/italy/visconti), [V&A — Tarot](https://www.vam.ac.uk/articles/tarot-cards). Kaynaklar tarih ve sipariş sahibi konusunda farklılaşır.`,
        },
        {
          id: "tt-okult",
          title: "Okült Tarot: Etteilla, Lévi, Altın Şafak ve Waite–Smith (1909)",
          summary: "18. yy.'dan itibaren kehanet ve okült semboller kartlara eklendi.",
          body: `## Kaynaklara göre
- Tarot'a **okült anlamlar 1780'lerde** yüklenmiştir. **Etteilla (Jean-Baptiste Alliette)** kehanet için tasarlanmış ilk deste olarak anılır; astroloji ve simya sembolizmi ekledi ve **kartomansi** terimini ortaya attı (bazı kaynaklar onu "ilk profesyonel Tarot okuyucusu" sayar; bu **tartışmalıdır** (Belirsiz)).
- **Court de Gébelin'in 1781 tarihli çalışması** (Tarot'un Mısır kökenli olduğu savı) bu aramada ayrıntılı doğrulanmadı (Belirsiz).
- **Éliphas Lévi** ve Altın Şafak, Tarot'u **İbrani harfleri ve Hayat Ağacı** ile eşledi (bkz. ek modüller *Lévi* ve *777*).
- **Rider–Waite–Smith** destesi **1909'da Londra'da Rider tarafından** yayımlandı; **A. E. Waite** Büyük Arkana için ayrıntılı yönergeler verdi, **Pamela Colman Smith** küçük arkanayı **ilk kez tamamen resimli** olarak çizdi; ikisi de Altın Şafak üyesiydi.

## Okuma notu
"Tarot Eski Mısır'dandır" anlatısı **belgelenmemiştir**; belgelenmiş tarih oyun kartı → okült kullanım yönündedir.

## Çalışma
Altın Şafak'ın Tarot–harf eşleşmelerini Lévi'ninkiyle karşılaştıran bir tablo hazırlamaya başla (kaynaklar: ek modüller).`,
          verification: `**Kaynak:** [National Geographic — Tarot](https://www.nationalgeographic.com/history/article/tarot-cards-history-fortune-telling), [V&A — Tarot](https://www.vam.ac.uk/articles/tarot-cards). Court de Gébelin ve Etteilla'nın rolü ayrıntılı doğrulanamadı; Waite–Smith ayrıntıları arama özetinden.`,
        },
      ],
      quiz: [
        qz("Belgelenmiş en eski Tarot desteleri neden yapılmıştır?", ["Tarocchi adlı kâğıt oyunu için", "Kehanet için", "Simya için", "Astroloji için"], 0),
        qz("Visconti–Sforza desteleri hangi şehirle ilişkilidir?", ["Milano", "Paris", "Londra", "Atina"], 0),
        qz("Rider–Waite–Smith destesi hangi yıl yayımlandı?", ["1909", "1459", "1781", "1950"], 0),
        qz("Küçük arkanayı ilk kez tamamen resimli çizen kimdir?", ["Pamela Colman Smith", "A. E. Waite", "Etteilla", "Lévi"], 0),
        qz("'Tarot Eski Mısır kitabıdır' anlatısı için doğru ifade hangisidir?", ["Belgelenmemiştir; sonradan çıkmış bir anlatıdır", "Kesin tarihtir", "Mısır'da bulunan yazıtlarla kanıtlanmıştır", "Bilimsel olarak ispatlanmıştır"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Kart anlamları ve kehanet yöntemleri:** Doğrulanabilir bir 'doğru anlam' yok; gelenekler arası farklar büyük.
- **Court de Gébelin ve Etteilla'nın ayrıntılı tarihi:** Aramada doğrudan doğrulanamadı.
- **Marsilya, Thoth (Crowley–Harris) ve diğer desteler:** Bu modülün kapsamı dışında.
- **'Tarot'un kökeni Çingeneler/Mısır/Kabala' anlatıları:** Belgeye dayanmadığı için eklenmedi.`,
});

export const cakraTarihiModule = extraModule({
  id: "ek-cakra-modeli-tarihi",
  title: "Batı'daki Çakra Modelinin Tarihi: Tantra'dan Teosofi'ye",
  tagline: "Yedi çakralı modelin Leadbeater (1927) ve Woodroffe (1918/1919 — Belirsiz) üzerinden yolculuğu",
  description:
    "Powell, Butler, Burger ve Lirvian notlarında geçen 'çakra/enerji merkezi' anlatımının nereden geldiğini internet kaynaklarıyla açıklayan konu modülü. Batı'da yaygın yedi çakra şemasının doğrudan antik Tantra aktarımı olmadığını gösterir.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "Wikipedia, Theosophical Society (Quest) ve Kurt Leland'ın 'Rainbow Body' özeti", language: "İngilizce kaynaklardan Türkçe özet", readNote: "İkincil kaynak özetleri; birincil metinler (Woodroffe, Leadbeater) okunmadı." },
  resources: [
    web("Wikipedia — Chakra", "https://en.wikipedia.org/wiki/Chakra"),
    web("Quest — The Rainbow Body: How the Western Chakra System Came to Be", "https://www.theosophical.org/publications/quest-magazine/the-rainbow-body-how-the-western-chakra-system-came-to-be"),
    book("Rainbow Body: A History of the Western Chakra System", "Kurt Leland", "Blavatsky'den Brennan'a Batı çakra sisteminin tarihi."),
  ],
  units: [
    {
      id: "c1",
      title: "Çakra Modelinin Aşamalı Doğuşu",
      description: "Tantrik kökenler ve Batı sentezi.",
      lessons: [
        {
          id: "ck-kokler",
          title: "Tantrik kökenler ve 'yedi' sayısı",
          summary: "Orta Çağ Hindu/Budist metinlerinde 'dört veya daha fazla' merkez; yedili şema sonradan yerleşti.",
          body: `## Kaynaklara göre
- **Çakra** kavramı orta çağ Hindu ve Budist metinlerinde "**dört veya daha fazla** yaşamsal enerji merkezi" olarak geçer; yaygın **yedili liste** sonraki bir **sentezdir**.
- Baskın "altı çakra + taç" modeli **gelenek ve yakın tarihli icat karışımı** olarak nitelenir.
- Kurt Leland'a göre Batı sistemi **1880 dolaylarında (Bengal ve Teosofi çevresinde)** başlar; bileşenler zamanla eklenir: **yedi çakra tabanı ve sinir pleksusu eşleşmeleri (1880'ler)**, **yerel adlar (1920'ler)**; Batı sistemi "teosofistler, Jungcu/insan potansiyeli psikologları ve bazı Hintli yogiler arasında **istemsiz bir işbirliği**"dir.

## Kritik not
Dolayısıyla "**kadim Hint öğretisi: yedi çakra**" ifadesi tarihsel olarak **fazla basittir**.

## Çalışma
Burger, Powell ve Lirvian notlarındaki çakra listelerini karşılaştır: hangi merkezler ortak, hangileri farklı?`,
          verification: `**Kaynak:** [Wikipedia — Chakra](https://en.wikipedia.org/wiki/Chakra), [Quest — The Rainbow Body](https://www.theosophical.org/publications/quest-magazine/the-rainbow-body-how-the-western-chakra-system-came-to-be). Kaynaklar ikincil/popüler; Leland özeti Teosofi Cemiyeti yayınındandır.`,
        },
        {
          id: "ck-batida",
          title: "Woodroffe (1918/1919 — Belirsiz) ve Leadbeater (1927)",
          summary: "Shat Chakra Nirupana çevirisi ve 'The Chakras'ın klerovyans iddiası.",
          body: `## Kronoloji (kaynaklara göre)
- **1880'ler:** Blavatsky ve diğer teosofistler.
- **~1910:** Leadbeater *The Inner Life*'ta çakralardan söz eder.
- **1918–1919 (Belirsiz):** Sir **John Woodroffe (Arthur Avalon)** *The Serpent Power*'ı yayımlar; içinde 16. yüzyıla ait ***Shat Chakra Nirupana*** ("Altı Çakranın Tarifi") çevirisi vardır; bazı yorumlara göre bu, daha büyük bir metnin **yalnızca bir bölümüdür**. Tarihler kaynaklara göre bir yıl oynar (çeviri 1918, kitap 1919 (Belirsiz)).
- **1927:** **C. W. Leadbeater**, *The Chakras*: Batılı okur için ilk açıklamalardan biri; çizimleri **klerovyans gözlemine** dayandırdığını söyler.

## Sonuç
Powell'ın *Eterik Çift* kitabındaki yedi merkez (Teosofi derlemesi) bu **Teosofi çizgisinin** ürünüdür; Burger/Lirvian gibi modern kaynaklar da onu devralır. Bu, bir yapının "yanlış" olduğu anlamına gelmez; **tarihsel olarak aktarım zincirinin Teosofi'den geçtiği** anlamına gelir.

## Çalışma
*The Chakras* PDF'ini (archive.org'da halka açık) ve Woodroffe'un *Shat Chakra Nirupana* çevirisini yan yana okuyup hangi özelliklerin (renk, yaprak sayısı, element) ortak olduğunu tabloya yaz.`,
          verification: `**Kaynak:** [Wikipedia — Chakra](https://en.wikipedia.org/wiki/Chakra), [Quest — Rainbow Body](https://www.theosophical.org/publications/quest-magazine/the-rainbow-body-how-the-western-chakra-system-came-to-be). Kaynaklar Woodroffe çevirisinin tarihlerinde farklılaşır (1918/1919). Birincil metinler okunmadı.`,
        },
      ],
      quiz: [
        qz("Batı'daki yedi çakra sistemi için doğru ifade hangisidir?", ["Teosofi çizgisinden geçen, aşamalı bir sentezdir", "Doğrudan antik Tantra aktarımıdır", "Modern tıbbın bulgusudur", "Eski Mısır sistemidir"], 0),
        qz("'The Serpent Power' kitabının yazarı kimdir?", ["John Woodroffe (Arthur Avalon)", "C. W. Leadbeater", "A. E. Powell", "Aleister Crowley"], 0),
        qz("Leadbeater'ın 'The Chakras' kitabı hangi yılda yayımlandı?", ["1927", "1887", "1959", "2004"], 0),
        qz("Shat Chakra Nirupana neyi anlatır?", ["Altı çakranın tarifini (16. yy. Hint metni)", "Burçları", "Zümrüt Tablet'i", "Tarot kartlarını"], 0),
        qz("Orta çağ Hint metinlerinde çakra sayısı için doğru ifade nedir?", ["Dört veya daha fazla; yedili şema sonradan yerleşti", "Hep yedi", "Hep on iki", "Hiç yok"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Çakraların 'işlevleri, renkleri, sağlık etkileri':** Doğrulanmamış iddialar; yalnızca tarihçe verildi.
- **Tantrik metinlerin ayrıntılı çakra sistemleri (Kubjika, Hatha Yoga Pradipika vb.):** Bu aramada ele alınmadı.
- **Woodroffe çevirisinin doğruluğu ve Leadbeater'ın klerovyans iddiasının sınanması:** Birincil metinler okunmadı.
- **Chinese Qi/meridyen sistemi ile çakraların eşleştirilmesi:** Doğrulanmadı.`,
});

export const kybalionModule = extraModule({
  id: "ek-kybalion",
  title: "Kybalion: Yazarlık ve Kaynak Sorunu",
  tagline: "'Yedi Hermetik İlke' antik mi, 1908 tarihli bir Yeni Düşünce kitabı mı?",
  description:
    "Okültizm modülünün 'Eklenmeyenler' notunda Kybalion'un neden öğretilmediğini açıklayan konu modülü: kitabın 1908 Chicago kaynağını, yazarlık tartışmasını ve 'antik Hermetik' iddiasının sınırlarını internet kaynaklarıyla gösterir. Yedi ilkeyi öğretmez, kaynak eleştirisini öğretir.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "Wikipedia, Mitch Horowitz yazısı, yayınevi bilgileri", language: "İngilizce kaynaklardan Türkçe özet", readNote: "İkincil kaynak özetleri; kitabın tam metni okunmadı." },
  resources: [
    web("Wikipedia — The Kybalion", "https://en.wikipedia.org/wiki/The_Kybalion"),
    web("Mitch Horowitz — The Kybalion Without Tears", "https://mitchhorowitz.substack.com/p/the-kybalion-without-tears"),
  ],
  units: [
    {
      id: "k1",
      title: "Kybalion'un Kaynağı",
      description: "Yayın, yazarlık ve içerik iddiaları.",
      lessons: [
        {
          id: "ky-yazarlik",
          title: "1908 Chicago: Üç İnisiye ve William Walker Atkinson",
          summary: "Yogi Publication Society, yazarlık tartışması ve 'kayıp metin yorumu' kurgusu.",
          body: `## Kaynaklara göre
- Kitap **"Üç İnisiye" (Three Initiates)** imzasıyla **1908'de Chicago'da Yogi Publication Society** tarafından yayımlandı.
- Yazarlık için en çok **William Walker Atkinson (1862–1932)** gösterilir (Belirsiz); **Mitch Horowitz**, belge ve bağlam kanıtlarının çoğunun Atkinson'un **tek başına** yazdığını gösterdiğini, ayrıca Atkinson'un **1912 Who's Who in America** kaydında kendisini yazar olarak bildirdiğini söyler. **Wikipedia** onu "muhtemel yazar" olarak listeler; Macmillan tanıtımı "yazarlardan biri veya tek yazar" diye verir.
- **Paul Foster Case** üçüncü isim olarak söylentiye karışır (Belirsiz); bir kaynak bunun zaman çizelgesiyle (Case 1908'de Chicago'ya yeni gelmişti) **uyuşmadığını** ileri sürer.
- Kitap kendisini **eski, gizli bir Hermetik eserin yorumu** olarak sunar; o eserin "aforizmaları" yalnızca alıntılanır. Bir değerlendirmeye göre içerik, **antik bir dille yeniden yazılmış Yeni Düşünce (New Thought)** ilkelerini andırır.
- Yedi ilke: **Zihincilik, Karşılıklılık (Correspondence), Titreşim, Kutupluluk, Ritim, Neden–Sonuç, Cinsiyet**.

## Sonuç
Kybalion **antik bir Mısır–Hermetik kaynak değil**, 1908 tarihli, büyük olasılıkla Atkinson'a ait bir **modern yorum kitabıdır**; "kayıp bir metin yorumu" kurgusu edebî bir çerçevedir. "Yukarıdaki gibi aşağıda" cümlesi ise **Zümrüt Tablet**'ten (Arapça kaynaklı) gelir (bkz. ek modül *Hermetica*).

## Çalışma
Kybalion'dan alıntı yapan bir kitaptaki üç cümleyi bul; hangi ilkeye, hangi gerçek (antik/ortaçağ) kaynağa dayandığını araştır.`,
          verification: `**Kaynak:** [Wikipedia — The Kybalion](https://en.wikipedia.org/wiki/The_Kybalion), [Mitch Horowitz — The Kybalion Without Tears](https://mitchhorowitz.substack.com/p/the-kybalion-without-tears), [Boing Boing](https://boingboing.net/2009/10/09/the-kybalion-by-thre.html), [Penguin Random House](https://www.penguinrandomhouse.com/books/530627/the-kybalion-by-william-walker-atkinson/9781585428748/). "Antik değildir" sonucu kaynakların yazarlık ve 1908 yayın bilgisinden çıkarılmıştır; "iddiaları tek tek tarih dışı" demek için ayrı bir akademik kaynak aranmadı.`,
        },
      ],
      quiz: [
        qz("Kybalion hangi yıl ve nerede yayımlandı?", ["1908, Chicago (Yogi Publication Society)", "1887, Londra", "1935, Londra", "2004, İstanbul"], 0),
        qz("Kitabın en çok gösterilen yazarı kimdir?", ["William Walker Atkinson", "Hermes Trismegistos", "Eliphas Lévi", "Dion Fortune"], 0),
        qz("Kitap kendisini nasıl sunar?", ["Eski, gizli bir Hermetik eserin yorumu olarak", "Bilimsel makale olarak", "Roman olarak", "Resmî rapor olarak"], 0),
        qz("Kybalion için doğru değerlendirme hangisidir?", ["Antik kaynak değil, 1908 tarihli modern bir yorum kitabıdır", "Mısır tapınaklarından gelen metindir", "Zümrüt Tablet'in orijinalidir", "Ortaçağ simya el yazmasıdır"], 0),
        qz("Kybalion yedi ilkesinden biri hangisidir?", ["Kutupluluk (Polarity)", "Tetraktys", "Sudûr", "Gematria"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Yedi ilkenin ayrıntılı anlatımı ve 'titreşim', 'kutupluluk' iddiaları:** Fizik terimleriyle yapılan benzetmeler bilimsel olarak doğrulanmamıştır; ilkeler yalnızca adlandırıldı.
- **Kitabın 'antik Hermetik' iddiasının tam akademik analizi:** Aramada doğrudan akademik kaynak bulunamadı; sonuç yazarlık ve yayın bilgisinden çıkarıldı.
- **Case ve diğer adayların yazarlık tartışmasının tamamı:** İkincil kaynaklardan özet verildi.`,
});

export const helenistikAstrolojiModule = extraModule({
  id: "ek-helenistik-astroloji",
  title: "Helenistik Astroloji: Valens, Batlamyus ve Aktarım",
  tagline: "Batı astrolojisinin kökleri: Babil'den Helenistik Mısır'a, İslam dünyasından Rönesans'a",
  description:
    "Astroloji modülünün tarih derslerini tamamlayan konu modülü: Helenistik astrolojinin kökenleri, Vettius Valens ve Batlamyus, İslam dünyası aracılığıyla aktarım ve Project Hindsight'ın modern canlandırması. Ev sistemi tartışmaları ve ayrıntılı teknikler kapsam dışıdır.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "Internet Encyclopedia of Philosophy, Britannica, Wikipedia", language: "İngilizce kaynaklardan Türkçe özet", readNote: "Arama sonuçları düzeyinde; Tetrabiblos ve Anthology metinleri okunmadı." },
  resources: [
    web("IEP — Hellenistic Astrology", "https://iep.utm.edu/hellenistic-astrology/"),
    web("Britannica — Astrology after the Hellenistic period", "https://www.britannica.com/topic/astrology/Astrology-after-the-Hellenistic-period"),
    web("Wikipedia — Vettius Valens", "https://www.wikipedia.org/wiki/Vettius_Valens"),
  ],
  units: [
    {
      id: "a1",
      title: "Helenistik Astroloji ve Aktarım",
      description: "Köken, ana metinler ve yol.",
      lessons: [
        {
          id: "ha-kokenler",
          title: "Köken ve ana metinler",
          summary: "Babil + Mısır + Yunan felsefesi sentezi; Valens'in Anthology'si.",
          body: `## Kaynaklara göre
- Helenistik astroloji **Babil geleneklerine**, **Mısır** katkısına ve **Yunan felsefesine** dayanır. **MÖ 2. yüzyıla** gelindiğinde Babil teknikleri **Mısır takvimleri ve dinî uygulamaları, Hermetizm, Pisagorcu kutsal matematik ve Stoacı/Orta Platoncu felsefe** ile birleşmişti.
- Birçok yazar en eski malzemesini **eski ve yarı efsanevi otoritelere** (ör. Hermes, Nechepso–Petosiris) atfederek meşruiyet kazandırmaya çalıştı.
- **Vettius Valens (120–yaklaşık 175)**: *Anthology* (Yunanca, **10 kitap**, yaklaşık 150–175) **bugüne ulaşan en uzun ve ayrıntılı antik astroloji incelemesidir**; Stoacı eğilimleri olduğu belirtilir. **Batlamyus** (Ptolemaios) Valens'in biraz **daha yaşlı çağdaşıdır** ve Helenistik yazarlar arasında anılır.
- **Aktarım:** Astroloji **8.–9. yüzyılda İslam uygarlığına** üç akımla (Helenistik, Hint, Sasani) girdi; **Pehlevi çevirileri** arasında Sidonlu Dorotheus, Vettius Valens ve Hermes vardır. Latin dünyasındaki "yeni astroloji", **İslam astrolojisinin** bir uzantısı olarak kaldı ve Helenistik özgün metinleri ancak **15.–16. yüzyılda** yeterince temsil edebildi.
- **Modern canlanma:** **Project Hindsight** (Helenistik astroloji odaklı tarih/dil çalışması) çeviriler yayımladı; Valens'in bir cildi (Greek Track, cilt VIII) **1994**'te çıktı.

## Not
Bu aramada **Manilius, Paulus Alexandrinus, Whole Sign ev sistemi** ve Helenistik canlanmanın ayrıntıları ele alınmadı; ek araştırma gerektirir. Bu sitedeki **whole sign** ev kullanımı (Vedik Astroloji sayfası) tarihsel olarak Helenistik ve Hint geleneklerinde yaygın bir sistemdir (genel bilgi).

## Çalışma
Astroloji modülü 1. ünitedeki tarih derslerini bu modülle birleştirip tek bir zaman çizelgesi (MÖ 5. yy. Babil → MS 2. yy. Valens/Batlamyus → 8.–9. yy. İslam → 15.–16. yy. Avrupa) çiz.`,
          verification: `**Kaynak:** [IEP — Hellenistic Astrology](https://iep.utm.edu/hellenistic-astrology/), [Britannica — Astrology after the Hellenistic period](https://www.britannica.com/topic/astrology/Astrology-after-the-Hellenistic-period), [Wikipedia — Vettius Valens](https://www.wikipedia.org/wiki/Vettius_Valens). Whole sign ev sisteminin tarihçesi bu aramada doğrulanmadı; genel bilgi olarak belirtildi.`,
        },
      ],
      quiz: [
        qz("Vettius Valens'in ana eseri hangisidir?", ["Anthology", "Tetrabiblos", "Christian Astrology", "Liber 536"], 0),
        qz("Valens'in eseri kaç kitaptan oluşur?", ["10", "4", "22", "78"], 0),
        qz("Astroloji İslam dünyasına hangi yüzyıllarda girdi?", ["8.–9. yüzyıl", "MÖ 5. yüzyıl", "15. yüzyıl", "19. yüzyıl"], 0),
        qz("Project Hindsight neye odaklanır?", ["Helenistik astrolojinin çeviri ve tarihi", "Modern psikolojik astroloji", "Vedik astroloji", "Tarot"], 0),
        qz("Helenistik astrolojinin kaynaklarından biri hangisidir?", ["Babil gelenekleri", "Orta Çağ simyası", "Rönesans ressamları", "Modern kuantum fiziği"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Whole sign evler, sect, lots, zodiacal releasing vb. Helenistik teknikler:** Bu aramada kaynak bulunamadı; kesin bilgi olarak yazılmadı.
- **Tetrabiblos ve Anthology'nin içerikleri:** Birincil metinler okunmadı.
- **Dorotheus, Manilius, Paulus Alexandrinus ayrıntıları:** Aramada ele alınmadı.
- **Modern Helenistik canlanmanın (Robert Schmidt, Chris Brennan vb.) tarihi:** Doğrulanmadı.`,
});
