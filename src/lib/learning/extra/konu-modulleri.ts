import { extraModule } from "./builder";
import { qz, web, book } from "../helpers";

/** Yüklenen kitaplarda eksik kalan konular için internetten doğrulanarak hazırlanan ek modüller. */

export const hermeticaModule = extraModule({
  id: "ek-hermetica-zumrut-tablet",
  title: "Hermetica ve Zümrüt Tablet: Kaynak Tarihi",
  tagline: "Corpus Hermeticum'un çevirisi ve tarihlenmesi; Zümrüt Tablet'in bilinen en eski (Arapça) kaynağı",
  description:
    "Kitaplarda sık anılan Hermes Trismegistos geleneğinin neye dayandığını internet kaynaklarıyla doğrulayarak anlatan konu modülü. Yüklenen kitaplarda (Cockren, Basick Magick, Lévi vb.) geçen Zümrüt Tablet ve 'Hermetik' atıflarını tarihsel kaynak açısından denetlemeyi öğretir.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "Çeşitli ansiklopedik/akademik kaynaklar", language: "İngilizce kaynaklardan Türkçe özet", readNote: "1. ünite internet arama sonuçları (özet düzeyi); 2. ünite Copenhaver çevirisinin (Cambridge, 1992) archive.org tam metninden Poimandres §1–26 okundu. Mead çevirisi ve CH XIII okunmadı." },
  resources: [
    web("Wikipedia — Emerald Tablet", "https://en.wikipedia.org/wiki/Emerald_Tablet", "Zümrüt Tablet'in Arapça kaynakları ve Latince geçişi."),
    web("Encyclopedia.com — Hermetism", "https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/hermetism"),
    book("Hermetica", "Brian P. Copenhaver", "Corpus Hermeticum'un akademik İngilizce çevirisi ve notları."),
    web("Hermetica (Copenhaver) — archive.org kaydı", "https://archive.org/details/hermetica-the-greek-corpus-hermeticum-and-the-latin-asclepius", "Poimandres'in okunan çevirisi (ödünç alınabilir kopya)."),
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
    {
      id: "h2",
      title: "Birincil Metin: Poimandres (Corpus Hermeticum I)",
      description: "Copenhaver çevirisinin §1–26 bölümleri okunarak hazırlandı.",
      lessons: [
        {
          id: "hm-poimandres",
          title: "Poimandres: vahiy, yaratılış, insanın inişi ve yükselişi",
          summary: "Corpus Hermeticum'un ilk risalesinin anlatı akışı (§1–26).",
          minutes: 25,
          body: `## Metin hakkında
**Poimandres**, Corpus Hermeticum'un **birinci risalesidir** (Yunanca, geç antik dönem). Bu derste **Brian P. Copenhaver'ın çevirisinin** (*Hermetica*, Cambridge University Press, 1992) **§1–26** bölümleri okunarak anlatı akışı çıkarıldı. Kısa alıntılar tırnak içinde ve çeviriden verilmiştir; geri kalanı Türkçe özettir.

## Anlatı akışı
1. **Vahiy (§1–2):** Hermes'e sınırsız büyüklükte bir varlık görünür ve öğretmeyi önerir. Kendini tanıtır: "**Ben Poimandres'im, egemenlik aklı**" (§2).
2. **İlk görü (§4–5):** Işık görülür; sonra karanlık iner ve nemli bir doğaya dönüşür; ondan ateş yükselir, toprak ile su ayrılır.
3. **Kendini açıklaması (§6):** Poimandres, "**Gördüğün ışık benim: akıl, senin tanrın**" der (§6); "ışık veren söz"ün tanrının oğlu olduğunu söyler.
4. **Kozmosun oluşması (§8–11):** Kozmos bir arketipe göre biçimlenir; ikinci bir akıl (zanaatkâr) **yedi yönetici** yapar; bunların yönetimi **kader** (heimarmene) adını alır.
5. **İnsanın doğuşu ve inişi (§12–14):** Baba, kendine benzer bir **İnsan** doğurur; İnsan zanaatkârın küresine girer, çemberleri aşar ve suda kendi yansımasını görür. "**Doğa, onu görünce sevgiden gülümsedi**" (§14); İnsan doğayla birleşir.
6. **İki katmanlı insan (§15):** İnsan bedeniyle ölümlü, özüyle ölümsüzdür; kader altında kalır ve uykuya dalar.
7. **Yedi androjen insan (§16–17):** Doğa, yöneticilere benzeyen yedi androjen varlık doğurur.
8. **Bölünme ve çoğalma (§18–19):** Androjenler ikiye ayrılır ve çoğalmaları söylenir: "**Artarak artın, çoğalarak çoğalın**" (§18). Kendini tanıyan iyiye ulaşır; bedeni sevense karanlıkta kalır.
9. **Ölüm ve ödül (§20–23):** Bilgisizlik ölüme götürür; akıl kutsanmışları kabul eder, kötüleri bir intikamcı cin'e bırakır.
10. **Yükseliş (§24–26):** Ruh, **yedi bölgede yeteneklerinden sıyrılır**, sekizinci katmana (**ogdoad**) varır, babayı ilahilerle över ve bir güç olarak tanrıya girer. Metnin vardığı hedef: "**Bilgi alanlar için son iyi budur: tanrılaşmak**" (§26).

## Metnin temaları
- **İki tür doğa:** ölümlü beden – ölümsüz öz; ikisinin birleşimi insanı "çifte" yapar.
- **Kader ve kurtuluş:** Kader yedi yöneticiye bağlıdır; kurtuluş **kendini tanıma (gnosis)** ile mümkündür.
- Astroloji bağı: yedi yönetici, geleneksel **yedi gezegen** olarak okunur (genel yorum).

## Okuma notu
Bu **Gnostik/Platoncu renkli** bir metindir ve dinî bir anlatıdır; tarihsel olarak **Mısır'dan gelen "binlerce yıllık" bir öğreti** olarak okunması bu modülün 1. ünitesindeki tarihleme bilgisiyle çelişir.

## Çalışma
Anlatıdaki "iniş" ve "yükseliş" aşamalarını yan yana iki sütunda yaz; ruhun yedi bölgede sıyrılan yeteneklerini kendi cümlenle yorumla (metin bunları bölgelerle eşleştirir; ayrıntı için çevirinin kendisine bak).`,
          verification: `**Okunan:** Copenhaver, *Hermetica* (Cambridge UP, 1992; ilk basım 1992, 1995 ciltsiz) — archive.org tam metin OCR'ı; **Poimandres §1–26 kelimesi kelimesine okundu.** Tırnak içi kısa alıntılar bu çeviriden serbest Türkçe verilmiştir. **Okunmayan/doğrulanmayan:** §27–32 (kapanış vaazı ve ilahi) — yalnızca özetler görüldü ve bu özetler birbiriyle çelişti, bu yüzden yazılmadı; Mead çevirisi okunmadı; CH XIII ("yeniden doğuş") okunmadı. Yedi yöneticinin gezegenlerle özdeşliği genel yorumdur (Belirsiz).`,
        },
      ],
      quiz: [
        qz("Poimandres kendini nasıl tanıtır?", ["Egemenlik aklı", "Yeraltı tanrısı", "Gezegen yöneticisi", "Ay tanrıçası"], 0),
        qz("Metne göre kozmosun yönetimini kimler üstlenir?", ["Zanaatkâr aklın yaptığı yedi yönetici", "On iki burç", "Üç ilke", "Dört unsur"], 0),
        qz("İnsan'ın aşağıya inişi sırasında doğa ne yapar?", ["Onu görünce sevgiyle gülümser ve onunla birleşir", "Onu yok eder", "Onu reddeder", "Yer değiştirir"], 0),
        qz("Ruh, yükselişte yedi bölgede neye uğrar?", ["Yeteneklerinden sıyrılır", "Yeni yetenekler kazanır", "Kaybolur", "Burç değiştirir"], 0),
        qz("Metnin vardığı son hedef nedir?", ["Tanrılaşmak (bilgi alanlar için)", "Servet", "Ölümsüz beden", "Kral olmak"], 0),
        qz("Bu derste Poimandres'in hangi bölümleri kelimesi kelimesine okundu?", ["§1–26", "Tamamı §1–32", "Yalnızca §1–5", "Hiçbiri"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Poimandres §27–32 ve CH XIII (yeniden doğuş), diğer Corpus Hermeticum risaleleri:** Okunamadı ya da okunan özetler birbiriyle çelişti; yazılmadı. Mead çevirisi de okunmadı.
- **Poimandres'in gezegen/bölge eşleştirmelerinin ayrıntısı:** Özetlenmedi; çevirinin kendisine bakılması önerilir.
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
  tagline: "Yedi çakralı modelin Leadbeater (1927) ve Woodroffe (önsöz 1918, ilk baskı 1919) üzerinden yolculuğu",
  description:
    "Powell, Butler, Burger ve Lirvian notlarında geçen 'çakra/enerji merkezi' anlatımının nereden geldiğini internet kaynaklarıyla açıklayan konu modülü. Batı'da yaygın yedi çakra şemasının doğrudan antik Tantra aktarımı olmadığını gösterir.",
  source: { file: "İnternet kaynakları (kitap yüklemesi yok)", author: "Wikipedia, Theosophical Society (Quest) ve Kurt Leland'ın 'Rainbow Body' özeti", language: "İngilizce kaynaklardan Türkçe özet", readNote: "1. ünite ikincil kaynak özetleri; 2. ünite Woodroffe'un The Serpent Power kitabının archive.org tam metninden (Şat-Çakra-Nirupana, ayet 1–55 ve ilgili açıklamalar) okundu. Leadbeater okunmadı." },
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
          title: "Woodroffe (önsöz 1918, baskı 1919) ve Leadbeater (1927)",
          summary: "Shat Chakra Nirupana çevirisi ve 'The Chakras'ın klerovyans iddiası.",
          body: `## Kronoloji (kaynaklara göre)
- **1880'ler:** Blavatsky ve diğer teosofistler.
- **~1910:** Leadbeater *The Inner Life*'ta çakralardan söz eder.
- **1918–1919:** Sir **John Woodroffe (Arthur Avalon)** *The Serpent Power*'ı yayımlar; içinde 16. yüzyıla ait ***Shat Chakra Nirupana*** ("Altı Çakranın Tarifi") çevirisi vardır. Kitabın tam metni okundu: **önsöz 20 Eylül 1918 tarihlidir (Ranchi)**; Dover baskısının künyesine göre **ilk baskı 1919'da Luzac & Co. (Londra)** tarafından yapıldı. "1918 mi 1919 mu?" farkı bu yüzden: önsöz 1918, basım 1919. Şat-Çakra-Nirupana bağımsız bir eser değil, Pūrṇānanda'nın **Śrī-tattva-cintāmaṇi** adlı eserinin **altıncı bölümüdür** (2. üniteye bakın).
- **1927:** **C. W. Leadbeater**, *The Chakras*: Batılı okur için ilk açıklamalardan biri; çizimleri **klerovyans gözlemine** dayandırdığını söyler.

## Sonuç
Powell'ın *Eterik Çift* kitabındaki yedi merkez (Teosofi derlemesi) bu **Teosofi çizgisinin** ürünüdür; Burger/Lirvian gibi modern kaynaklar da onu devralır. Bu, bir yapının "yanlış" olduğu anlamına gelmez; **tarihsel olarak aktarım zincirinin Teosofi'den geçtiği** anlamına gelir.

## Woodroffe (*Şat-Çakra-Nirupana*, 1919) ile Leadbeater (*The Chakras*, 1927) karşılaştırması
| Çakra | Yaprak (her iki kaynakta) | Woodroffe (tantrik kaynak) | Leadbeater (Teosofik) |
|---|---|---|---|
| Muladhara | 4 | element **toprak**, sarı kare | renk **kırmızı** |
| Svadhisthana | 6 | element **su**, beyaz hilal | renk **turuncu** |
| Manipura | 10 | element **ateş**, kırmızı üçgen | renk **sarı** |
| Anahata | 12 | element **hava**, duman rengi altıgen | renk **yeşil** |
| Vishuddha | 16 | element **eter**, beyaz daire | renk **mavi** |
| Ajna | 2 | (ay/zihin merkezi) | 96 yapraklı, **çivit/indigo** |

**Ortak:** Sanskrit adlar, yaprak sayıları (Ajna dışında) ve bedendeki sıra. **Farklı:** "gökkuşağı renkleri" 20. yy. Teosofik bir sistemdir, Woodroffe'un tantrik kaynağında yoktur; element ve geometrik yantra (şekil) tantrik kaynaktandır.

## Çalışma
Aşağıdaki karşılaştırma tablosunu kullanarak hangi özelliklerin (renk, yaprak sayısı, element) ortak, hangilerinin farklı olduğunu kendi cümlelerinle yaz.`,
          verification: `**Kaynak:** [Wikipedia — Chakra](https://en.wikipedia.org/wiki/Chakra), [Quest — Rainbow Body](https://www.theosophical.org/publications/quest-magazine/the-rainbow-body-how-the-western-chakra-system-came-to-be). Woodroffe tarihleri tam metinden (önsöz tarihi) ve Dover künyesinden doğrulandı. Leadbeater'ın kitabı okunmadı.`,
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
    {
      id: "c2",
      title: "Birincil Metin: Şat-Çakra-Nirupana (Woodroffe çevirisi)",
      description: "The Serpent Power tam metninden: ayet 1–55 ve açıklamalar okundu.",
      lessons: [
        {
          id: "sc-yapi",
          title: "Metnin kimliği: Pūrṇānanda, Şat-Çakra-Nirupana ve Woodroffe",
          summary: "Kim, ne zaman, hangi eserin bölümü; kaç ayet; Woodroffe'un yorum çerçevesi.",
          minutes: 20,
          body: `## Kitap
Sir John Woodroffe (**Arthur Avalon** takma adıyla), *The Serpent Power: Being the Ṣaṭ-cakra-nirūpaṇa and Pādukā-pañcaka* kitabında **iki Sanskritçe metni** çevirip uzun açıklamalarla yayımladı. Kitabın ilk **sayfaları "giriş" (Introduction)** olup yedi bölümden oluşur: giriş, bedensiz bilinç, bedenli bilinç (jivatma), mantra, **merkezler/lotuslar (çakra, padma)**, uygulama (yoga: laya-krama) ve bu yoganın kuramsal dayanakları.

## Yazar ve tarih
- Şat-Çakra-Nirupana ("Altı Merkezin İncelenmesi") **Pūrṇānanda-Svāmī**'ye aittir. Woodroffe'un notuna göre bağımsız bir eser değildir; Pūrṇānanda'nın **Śrī-tattva-cintāmaṇi** adlı eserinin **altıncı bölümüdür** (patala). Bu eser **Śaka 1499 (MS 1577)** tarihlidir.
- Woodroffe'un Pūrṇānanda hakkında topladığı bilgiler **torunlarının anlatımına** dayanır (Bengal; Mymensingh çevresi); dünyevi yaşamı hakkında "az şey bilinir" der.
- **Önsöz tarihi: 20 Eylül 1918 (Ranchi)**; ilk baskı **Luzac & Co., Londra, 1919** (Dover baskısının künyesi).

## Metnin biçimi
Şat-Çakra-Nirupana **55 ayetten** oluşur. Woodroffe her ayetin Sanskritçesini, İngilizce çevirisini ve **yorumlayıcılar Kālīcaraṇa ve Śaṅkara'nın** (felsefeci Śaṅkarācārya değil) açıklamalarını verir; ayrıca kendi notlarını ekler.

## Woodroffe'un yorum çerçevesi
Woodroffe merkezleri **"ince (subtle) boyutta bilincin ifadeleri"** olarak sunar ve sinir sistemiyle ilişkilendirir: tarif ettiği merkezlerin kaba bedende üreme, boşaltım, sindirim, kalp ve solunum organlarıyla "aracı iletkenler" üzerinden ilişkili olduğunu söyler. Bu, **1918 tarihli bir yorumdur**; modern sinirbilimiyle doğrulanmış bir eşleşme **değildir**. 1. ünitedeki "Teosofi çizgisi" dersiyle birlikte okunmalıdır: pleksus eşleşmeleri Woodroffe'da da görülür.

## Çalışma
Giriş bölümlerinin başlıklarını (yedi bölüm) kendi cümlelerinle bir sayfaya özetle.`,
          verification: `**Okunan:** Woodroffe, *The Serpent Power* (Dover 1974 baskısı; archive.org tam metin OCR'ı): yayın künyesi, önsöz (20 Eylül 1918), Pūrṇānanda notu, giriş içindekiler listesi, ayet 1–55 ve ilgili açıklamaların büyük bölümü. **Okunmayan/yapılmayan:** Sanskrit asıl metin; Pādukā-pañcaka; girişin tamamı satır satır okunmadı (yalnızca ilgili bölümler tarandı). OCR hataları olabileceğinden harf düzeyindeki ayrıntılar (örn. Sanskrit yazımları) güvenilir kabul edilmedi; Türkçe metinde sadeleştirilmiş yazım kullanıldı. [Kitabın archive.org kaydı](https://archive.org/details/x-the-serpent-power).`,
        },
        {
          id: "sc-cakralar",
          title: "Altı merkez ve Sahasrara: metnin kendi tarifi",
          summary: "Konum, yaprak sayısı, unsur ve tanrısal figürler — yalnızca metnin dediği kadarıyla.",
          minutes: 30,
          body: `Aşağıdaki tablo **metnin ayet çevirisinde** (Woodroffe) geçen betimlemeleri özetler. Bunlar **dinî-sembolik tariflerdir**; fiziksel organ ya da ölçülebilir yapı olarak doğrulanmış değildir.

| Merkez | Ayet | Konum (metne göre) | Yaprak | Metindeki unsur/imgeler |
|---|---|---|---|---|
| **Mūlādhāra** | 4–13 | Cinsel organın altı, makatın üstü | 4 (kızıl; altın rengi harfler) | Sarı **kare** (Prithvi/toprak bölgesi); fil üzerinde figür; yaratıcı çocuk; **Ḍākinī**; üçgen *Kāmarūpa*; **Svayambhu-linga**; üzerinde uyuyan **Kundalini** |
| **Svādhiṣṭhāna** | 14–18 | Cinsel organın kökü | 6 (al renkli) | Beyaz, **yarım ay** biçimli su bölgesi (Varuṇa); makara üzerinde bija; **Hari**; **Rākinī** |
| **Maṇipūra** | 19–21 | Göbek kökü | 10 (yağmur bulutu rengi) | Üçgen **ateş** bölgesi (üç svastika işareti); koç üzerinde bija; **Rudra**; **Lākinī** |
| **Anāhata** | 22–27 | Kalp | 12 (bandhuka çiçeği renginde) | Altı köşeli **hava (Vāyu)** bölgesi, duman rengi; kara antilop üzerinde bija; **Kākinī**; **Bāṇa-linga**; hamsa |
| **Viśuddha** | 28–31 | Boğaz | 16 (ünlü harfler) | Dolunay gibi beyaz daire: **eter (akasha)** bölgesi; beyaz fil üzerinde bija; **Sadā-Śiva**; **Śākinī** |
| **Ājñā** | 32–38 | Okunan ayet çevirisinde konum belirtilmiyor | 2 (beyaz; harfler Ha ve Kṣa) | **Hākinī** (altı yüzlü); **Itara-linga**; zihin (*manas*); **Praṇava (Om)** |
| **Sahasrāra** | 40–49 | Başın tepesi, "Boşluk"un içi | **1000** (beyaz, aşağı bakar) | Dolunay; içinde üçgen ve "Büyük Boşluk"; **Parama-Śiva**; ***Amā-kalā***, ***Nirvāṇa-kalā***, ***Nirvāṇa-śakti*** |

## Metnin kendi "faydalar" iddiaları
Her merkezin tarifinin ardından metin, ona odaklanan kişi için faydalar sayar: konuşma yeteneği, hastalıklardan kurtulma, başkasının bedenine girme (ayet 27, 34) vb. Bunlar **metnin dinî-edebî iddialarıdır**; hiçbiri bağımsız olarak doğrulanmamıştır ve bu derste **öğreti olarak sunulmaz**.

## Dikkat
- Her merkezin **bija harfleri ve renkleri** yorumcular arasında ve Batı'daki popüler çakra tablolarında **farklılaşır**; popüler "yedi renk" (gökkuşağı) şeması bu metinde yoktur. Metin **altı merkez + Sahasrara** der.
- Ayet 14'te "Ba'dan **Puraṃdara**'ya kadar" harfler denir; bu, geleneksel olarak Sanskrit alfabesinde La harfini gösterir (genel bilgi, (Belirsiz): OCR'da doğrulanmadı).

## Çalışma
1. Tabloyu Powell ve Burger notlarındaki çakra listeleriyle karşılaştır: yaprak sayıları ve unsurlar birebir aynı mı?
2. Metindeki "faydalar" cümlelerinden birini seç ve "bu iddiayı neyle sınarım?" sorusuna iki cümleyle cevap ver.`,
          verification: `**Okunan:** Şat-Çakra-Nirupana ayet 4–38 ve 40–49 çevirileri (Woodroffe), archive.org OCR metninden. Tablo, ayet çevirilerindeki kelimelerle karşılaştırıldı. **Doğrulanamayan/eksik:** Ājñā konumunun ayrıntısı (metin ayet 32'de konum vermez; yorum bölümü ayrıca ele alınır — bu derste yazılmadı), Sahasrara ayet 40 sonrası harf düzeni ayrıntıları, bija hecelerinin metin içi yazımı (OCR hataları nedeniyle özellikle verilmedi). Sanskrit asıl metin okunmadı.`,
        },
        {
          id: "sc-kundalini",
          title: "Kundalini anlatısı: uyku, yükseliş, dönüş",
          summary: "Metindeki anlatının aşamaları (ayet 10–11, 50–53) — betimleme düzeyinde.",
          minutes: 20,
          body: `## Anlatı akışı (metne göre)
1. **Uyuyan Kundalini** (ayet 10–11): Mūlādhāra'da, Svayambhu-linga'yı **üç buçuk kez saran** yılan biçiminde; ağzıyla **Brahma-dvāra** (Brahma kapısı) girişini kapatır; "dünyayı şaşırtan"dır; soluk alıp vermeyle varlıkları yaşatan güç olarak anılır.
2. **Susumna kanalı** (ayet 1–3): Omurga boyunca iki yan kanal (*Idā* sol/ay, *Piṅgalā* sağ/güneş) ve ortadaki **Suṣumnā**; içinde **Vajra**, onun içinde **Citrinī**, en içte **Brahma-nāḍī**.
3. **Uyanma ve yükselme** (ayet 50–51): Anlatıya göre uygulayıcı, gurusundan öğrendiği yöntemle "Hūṃ" sesiyle Kundalini'yi uyandırır; Kundalini **üç linga'yı deler**, merkezlere ulaşır ve **Sahasrara'ya** varır.
4. **Birleşme** (ayet 52): Kundalini, **Para-Śiva** ile birleşir; "ruh (jiva) ile birlikte" yüce Śiva'ya götürülür.
5. **Dönüş** (ayet 53): Kundalini oradan akan "kızıl nektarı" içip **yeniden Mūlādhāra'ya** döner.

## Metnin kendi uyarısı
Giriş ayetinin yorumunda: merkezlerin iç ilkelerini, **gurunun lütfu olmadan** en bilgili kişinin bile açıklayamayacağı söylenir. Yani metin kendini **uygulama kılavuzu olarak değil, öğretmen aktarımına bağlı bir tarif** olarak sunar.

## Bu modülde yazılmayanlar
Uyandırma teknikleri, nefes/bandha uygulamaları ve süreler **yazılmadı**: (1) bu derslerin amacı kaynak okumaktır; (2) bu uygulamaların etkisi ve güvenliği **bilimsel olarak doğrulanmamıştır**; (3) metin bile uygulamayı öğretmene bağlar.

## Çalışma
Anlatının beş aşamasını kendi çizimine dök; "yükseliş" ve "dönüş" arasındaki farkı iki cümleyle yaz.`,
          verification: `**Okunan:** Ayet 1–3, 10–11, 50–53 ve ilgili yorum notları (Woodroffe çevirisi, OCR). Bu bölümde Woodroffe'un girişteki "Laya-yoga" uygulama bölümü (VI) ve Pādukā-pañcaka okunmadı.`,
        },
      ],
      quiz: [
        qz("Şat-Çakra-Nirupana kimin eserinden alınmıştır?", ["Pūrṇānanda'nın Śrī-tattva-cintāmaṇi adlı eserinin altıncı bölümü", "Leadbeater'ın The Chakras kitabı", "Patanjali'nin Yoga Sutraları", "Corpus Hermeticum"], 0),
        qz("Woodroffe'un kitabında önsöz hangi tarihtedir ve ilk baskı ne zaman yapılmıştır?", ["Önsöz Eylül 1918, ilk baskı 1919", "Önsöz 1527, baskı 1577", "Önsöz 1927, baskı 1959", "Önsöz 1880, baskı 1900"], 0),
        qz("Metne göre Mūlādhāra'nın yaprak sayısı kaçtır?", ["4", "6", "10", "16"], 0),
        qz("Viśuddha merkezinde kaç yaprak vardır ve neyi simgeler?", ["16; ünlü harfler / eter bölgesi", "10; ateş", "12; hava", "2; zihin"], 0),
        qz("Sahasrara için doğru ifade hangisidir?", ["1000 yapraklı, beyaz, başı aşağıya dönük lotus", "Kalpte 12 yapraklı lotus", "Boğazda 16 yapraklı lotus", "Göbekte 10 yapraklı lotus"], 0),
        qz("Ayet 10–11'e göre Kundalini Mūlādhāra'da ne yapar?", ["Svayambhu-linga'yı üç buçuk kez sarar", "Başın tepesinde parlar", "Kalpte dans eder", "Yoktur"], 0),
        qz("Woodroffe'un girişinde merkezlerin sinir sistemiyle ilişkilendirilmesi için hangisi doğrudur?", ["1918 tarihli bir yorumdur; modern sinirbilimiyle doğrulanmış bir eşleşme değildir", "Modern tıp bunu kanıtlamıştır", "Metinde hiç geçmez", "Yalnızca Leadbeater yapmıştır"], 0),
        qz("Metin, merkezlerin iç ilkelerinin açıklanmasını neye bağlar?", ["Gurunun lütfuna (öğretmen aktarımına)", "Matematiksel hesaba", "Burç haritasına", "Tarot açılımına"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Çakraların 'işlevleri, renkleri, sağlık etkileri':** Doğrulanmamış iddialar; yalnızca tarihçe verildi.
- **Tantrik metinlerin ayrıntılı çakra sistemleri (Kubjika, Hatha Yoga Pradipika vb.):** Bu aramada ele alınmadı.
- **Leadbeater'ın klerovyans iddiasının sınanması:** Kitap okunmadı; ayrıca iddia bağımsız olarak doğrulanamaz.
- **Woodroffe çevirisinin Sanskritçeyle karşılaştırılması:** Yapılmadı; Sanskrit asıl metin okunmadı, yalnızca İngilizce çeviri ve açıklamalar okundu.
- **Kundalini uyandırma uygulamaları ve nefes/ilk adım yöntemleri:** Yazılmadı; metin de uygulamanın bir guru (öğretmen) eşliğinde yapılması gerektiğini belirtir ve bu uygulamanın güvenliği/etkisi doğrulanamaz.
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
    {
      id: "a2",
      title: "Birincil Metin: Batlamyus, Tetrabiblos (Kitap I)",
      description: "Robbins (Loeb, 1940) çevirisinin 1–20. bölümleri okunarak hazırlandı.",
      lessons: [
        {
          id: "tb-yapi",
          title: "Tetrabiblos'un yapısı ve Batlamyus'un temkinli tutumu",
          summary: "Dört kitap; tahminin sınırlarını kendisi çizen bir giriş.",
          minutes: 20,
          body: `## Kitabın yapısı (içindekiler okundu)
- **I. Kitap (24 bölüm):** giriş, tahminin mümkünlüğü ve yararı, gezegenlerin ve burçların nitelikleri, bakışlar (açılar), evler, üçgenler, yücelmeler, sınırlar.
- **II. Kitap (13 bölüm):** ülkeler ve halklar, genel (mundan) tahminler, tutulmalar, kuyruklu yıldızlar, yılın Yeni Ay'ı, hava durumu.
- **III. Kitap (14 bölüm):** doğum haritası: ebeveynler, kardeşler, ikizler, ömür uzunluğu, beden yapısı, hastalıklar, ruhun niteliği.
- **IV. Kitap (10 bölüm):** maddi talih, itibar, meslek, evlilik, çocuklar, dostlar-düşmanlar, yolculuk, ölümün niteliği, zaman bölümleri.

> Bu derste yalnızca **I. Kitap 1–20. bölümler** metinden okundu; II–IV. kitaplar ve I. kitap 21–24. bölümler **okunmadı** (aşağıdaki "Eklenmeyenler" notuna bakın).

## İki yöntem
Batlamyus astrolojik bilgiyi ikiye ayırır: (1) gök cisimlerinin hareketlerinin **astronomik** bilimi (bunu *Almagest*'te işlemiştir) ve (2) bu hareketlerin **yeryüzü üzerindeki etkilerinin** incelenmesi — Tetrabiblos'un konusu ikincisidir.

## Tahminin sınırları (2.–3. bölüm)
Batlamyus tahminin **mümkün** olduğunu savunur, ama kapsamını bilerek dar tutar:
- Doğrudan bildirim: niteliğe dair her bilgi "**tahmine dayalıdır ve kesin olarak ileri sürülemez**" (2. bölüm; Robbins çevirisinden serbest Türkçe).
- Tahminler bazen tutmaz; nedenini ise sanatın kendisinde değil, **örneklerin birbirine benzememesinde** ve uygulayıcıların hatasında arar.
- "Mümkün olanı memnuniyetle karşılamalı ve yeterli saymalıyız" (2. bölüm).
- Etkiler **genel konulara** ve bedenin ile ruhun **doğuştan yatkınlıklarına** (özgün donanım) ilişkindir; tekil olayların ayrıntısı daha az öngörülebilirdir (3. bölüm).
- Bazı şeylerin, etkin nedenleri çok ve güçlü olduğu için **kaçınılmaz** olduğunu da söyler (3. bölüm).
- Yararı: ruhu hazırlamak ve tıpta ön bilgi sağlamak (3. bölüm).

## Neden önemli?
Tetrabiblos'un en çok alıntılanan yönü, astrolojiyi **doğal nedensellik** (ısı, nem, soğuk, kuruluk) üzerinden açıklamaya çalışmasıdır. Bu, **bilimsel olarak doğrulanmış bir açıklama değildir**; antik doğa felsefesinin bir kuramıdır. Modern kontrollü çalışmalar astrolojik tahminlerin tutarlı biçimde başarılı olduğunu göstermemiştir (Carlson 1985, *Nature*; genel bilgi, bu derste yeniden doğrulanmadı).`,
          verification: `**Okunan:** Robbins (Loeb, 1940) çevirisinin LacusCurtius baskısı — içindekiler (tüm kitaplar) ve I. Kitap 1–20. bölümler: [Tetrabiblos](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ptolemy/Tetrabiblos/home.html). Alıntılar kısa tutuldu ve serbest Türkçe verildi. **Okunmayan:** II–IV. kitaplar, I. kitap 21–24. bölümler. Sitenin çevirinin kamu malı olduğu iddiası doğrulanmadı (Belirsiz). Carlson çalışması bu derste yeniden okunmadı; genel bilgi olarak belirtildi.`,
        },
        {
          id: "tb-gezegen",
          title: "Gezegenlerin nitelikleri, yardımcı/zararlı ayrımı ve sect",
          summary: "Isı–nem–kuruluk üzerinden gezegen karakterleri (I. Kitap 4–7).",
          minutes: 20,
          body: `## Gezegenlerin güçleri (4. bölüm)
Batlamyus her gezegenin gücünü dört niteliğe (sıcak, soğuk, kuru, nemli) bağlar:
| Gezegen | Metindeki nitelik (özet) |
|---|---|
| **Güneş** | ısıtır ve bir ölçüde kurutur |
| **Ay** | gücünün çoğu **nemlendirmekten** oluşur |
| **Satürn** | esas olarak soğutur, ılımlı biçimde kurutur |
| **Mars** | esas olarak kurutur ve yakar |
| **Jüpiter** | ılımlı, etkin bir güç; hem ısıtır hem nemlendirir |
| **Venüs** | esas olarak nemlendirir (Jüpiter'e benzer ama karşıt yönde) |
| **Merkür** | kimi zaman kurutucu, kimi zaman nemlendirici |

## Yardımcı ve zararlı (5. bölüm)
- **Yardımcı:** Jüpiter, Venüs, Ay.
- **Zararlı:** Satürn, Mars.
- **Güneş ve Merkür** birlikte olduğu gezegenin karakterini alır.

## Eril – dişil (6. bölüm)
Ay ve Venüs dişil; Güneş, Satürn, Jüpiter, Mars eril; **Merkür ortak**dır.

## Gündüz – gece grubu, "sect" (7. bölüm)
- **Gündüz:** Güneş, Jüpiter. **Gece:** Ay, Venüs.
- **Merkür** konumuna göre değişir (sabah yıldızı iken gündüz, akşam yıldızı iken gece).
- **Satürn** gündüz grubuna, **Mars** gece grubuna atanır.

## Not
Bu atamalar Batlamyus'un **kendi sisteminin** tanımıdır; sonraki yazarlar bazı noktalarda ayrıldı. Bu modül yalnızca okunan metni aktarır; tarihsel olarak "bütün astrolojinin böyle olduğu" anlamına gelmez.`,
          verification: `**Okunan:** Tetrabiblos I.4–I.7, Robbins çevirisi, LacusCurtius. Nitelikler metinden özetlendi; ayrıntılı sect tartışması ve sonraki geleneklerle farklar okunmadı.`,
        },
        {
          id: "tb-burc",
          title: "Burç sınıfları, bakışlar, üçgenler, evler ve yücelmeler",
          summary: "Dört açı, dört üçgen ve gezegen–burç atamaları (I. Kitap 11–19).",
          minutes: 25,
          body: `## Burç sınıfları (11. bölüm)
- **Gündönümü (solstitial):** Yengeç, Oğlak.
- **Ekinoks (equinoctial):** Koç, Terazi.
- **Katı (solid):** Boğa, Aslan, Akrep, Kova.
- **Çift gövdeli (bicorporeal):** İkizler, Başak, Yay, Balık.

## Eril – dişil burçlar (12. bölüm)
Altı eril/gündüz ve altı dişil/gece burç **sırayla dönüşümlüdür**; Koç ve Terazi erildir.

## Bakışlar (13. bölüm)
- Karşıt **180°**, üçgen **120°**, kare **90°**, altmışlık **60°**.
- Üçgen ve altmışlık **uyumlu**, kare ve karşıt **uyumsuz** sayılır.

## Üçgenler (18. bölüm)
| Üçgen | Burçlar | Atanan gezegenler |
|---|---|---|
| 1 | Koç–Aslan–Yay | Güneş, Jüpiter |
| 2 | Boğa–Başak–Oğlak | Ay, Venüs |
| 3 | İkizler–Terazi–Kova | Satürn, Merkür |
| 4 | Yengeç–Akrep–Balık | Mars (Ay ve Venüs eş yönetici olarak anılır) |

## Evler — gezegenin burç sahipliği (17. bölüm)
Ay–Yengeç; Güneş–Aslan; Satürn–Oğlak ve Kova; Jüpiter–Yay ve Balık; Mars–Akrep ve Koç; Venüs–Terazi ve Boğa; Merkür–İkizler ve Başak.

## Yücelmeler (19. bölüm)
Güneş–Koç; Ay–Boğa; Satürn–Terazi; Jüpiter–Yengeç; Mars–Oğlak; Venüs–Balık; Merkür–Başak.

## Dikkat: "ev" iki anlama gelir
Burada "ev" gezegenin **burç sahipliği**dir (modern anlamıyla "yönetici"). Haritadaki 12 **mekân/ev** bölümü ayrı bir konudur ve bu bölümlerde ele alınmaz.

## Çalışma
Yukarıdaki tabloları ezberlemek yerine, modern ders kitaplarındaki yönetici/yücelme tablosuyla karşılaştır; farkları not al.`,
          verification: `**Okunan:** Tetrabiblos I.11–I.19, Robbins çevirisi, LacusCurtius; ev ve yücelme atamaları metnin kelimesi kelimesine bölümleriyle karşılaştırıldı. Sitedeki ikincil özet bazı atamalarda (Venüs, Mars evleri) metinden saptı; yalnızca kelimesi kelimesine okunan metin kullanıldı. 4. üçgendeki Ay–Venüs eş yönetimi ayrıntısı özetten alındı (Belirsiz). Terim ve sınırlar (20. bölüm), Keldani yöntemi (21.) ve sonrası okunmadı.`,
        },
      ],
      quiz: [
        qz("Batlamyus, Tetrabiblos'ta astrolojik tahminin kapsamını nasıl çizer?", ["Genel konular ve doğuştan yatkınlıklarla sınırlı", "Her tekil olayı kesin biçimde bildirir", "Yalnızca hava durumunu", "Tahminin imkânsız olduğunu savunur"], 0),
        qz("Gök hareketlerinin astronomik bilimini Batlamyus hangi eserde işlemiştir?", ["Almagest", "Anthology", "Corpus Hermeticum", "Picatrix"], 0),
        qz("Metne göre hangi gezegenler 'yardımcı' sayılır?", ["Jüpiter, Venüs, Ay", "Satürn, Mars", "Güneş, Merkür", "Yalnızca Güneş"], 0),
        qz("Tetrabiblos I.17'ye göre Satürn'ün burç sahipliği hangileridir?", ["Oğlak ve Kova", "Yay ve Balık", "Akrep ve Koç", "Terazi ve Boğa"], 0),
        qz("Yücelme (I.19): Güneş hangi burçta yüceltilir?", ["Koç", "Aslan", "Terazi", "Yengeç"], 0),
        qz("Hangi bakış açısı uyumsuz sayılır?", ["Kare (90°)", "Üçgen (120°)", "Altmışlık (60°)", "Hiçbiri"], 0),
        qz("Koç–Aslan–Yay üçgenine hangi gezegenler atanır?", ["Güneş ve Jüpiter", "Ay ve Venüs", "Satürn ve Merkür", "Mars ve Ay"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Tetrabiblos II–IV. kitaplar ve I. kitap 21–24. bölümler:** Metin okuma sırasında alınamadı; içindekiler dışında hiçbir ayrıntı yazılmadı.
- **Sınırlar (terms), yüzler, arabalar, uygulamalar–ayrılmalar:** Okunmadı.
- **Whole sign evler, sect uygulamaları, lots, zodiacal releasing vb. Helenistik teknikler:** Bu aramada kaynak bulunamadı; kesin bilgi olarak yazılmadı.
- **Tetrabiblos'un tahmin kuralları (doğum haritasından ömür, meslek, evlilik vb.):** Okunmadı; ayrıca bilimsel doğrulaması yoktur.
- **Anthology'nin içeriği:** Birincil metin okunmadı.
- **Dorotheus, Manilius, Paulus Alexandrinus ayrıntıları:** Aramada ele alınmadı.
- **Modern Helenistik canlanmanın (Robert Schmidt, Chris Brennan vb.) tarihi:** Doğrulanmadı.`,
});
