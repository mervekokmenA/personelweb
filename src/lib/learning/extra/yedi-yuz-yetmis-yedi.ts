import { extraModule } from "./builder";
import { qz } from "../helpers";

export const m777Module = extraModule({
  id: "ek-777",
  title: "777 Revised: Karşılık Tablolarının Sözlüğü (Crowley)",
  tagline: "Hayat Ağacı karşılık tablolarını okumayı, kullanmayı ve eleştirmeyi öğren",
  description:
    "Yüklediğin 'Crowley — 777 Revised' kitabının ek modülü. Kitabın yapısını, giriş makalesindeki amacını, tabloların nasıl okunduğunu ve 'Qabalah nedir?' tanımlarını öğretir; kitabın ayrıntılı tablolarını ezberletmek yerine nasıl kullanılacağını gösterir.",
  source: {
    file: "acrowley-777-revised.pdf",
    author: "Aleister Crowley (ed. Gerald Yorke — 1955 baskısı)",
    language: "İngilizce",
    pages: 167,
    readNote: "İçindekiler, editör önsözü, giriş makalesi, Tablo I'in sütun yapısı ve 'Qabalah nedir?' bölümü okundu. Altı tablonun tüm satırları ve 'Explanations of the Attributions' bölümü ders metnine konmadı.",
  },
  units: [
    {
      id: "a1",
      title: "1. Kitabı Tanımak",
      description: "Ne zaman, kim için, hangi kaynaklardan yazıldı?",
      lessons: [
        {
          id: "a-kitap",
          title: "777'nin kimliği: 1909 ve 1955",
          summary: "Kitabın tam adı, yayın tarihi, Golden Dawn ile ilişkisi ve editör önsözünün iddiaları.",
          body: `## Kitap

*Liber DCCLXXVII — Vel Prolegomena Symbolica Ad Systemam Sceptico-Mysticae Viae Explicandae…* Kısaca **777**. İlk basım **1909** (Walter Scott Publishing Co.); bu PDF ise **1955 *777 Revised*** baskısının elektronik yeniden dizgisidir (Celephaïs Press, 2003/2019). Üzerinde "Equinox"tan alıntılanmış iki tanıtım cümlesi var: biri onu "sistematik bir dikkate değer karşılık tablosu", diğeri "okültizmin Webster/Murray sözlüğü" diye tanımlar.

## Editör önsözünün iddiaları (1955)
- 777, ritüel büyü, doğu mistisizmi, karşılaştırmalı din ve sembolizm için bir **Kabalistik sözlüktür**.
- Crowley'in onu **Bournemouth'ta bir haftada, kaynak kitaba bakmadan** yazdığını *kendisinin iddia ettiği* belirtilir.
- Önsöz, **İbranice karşılıkların, dört renk ölçeğinin ve Tarot koz sıralamasının "yüzde doksanının"** Altın Şafak Düzeni'nde öğretildiği gibi olduğunu söyler.
- Önsözün Gerald Yorke tarafından yazıldığı **tahmin edilir** (çevirmen notu).

## Neden önemli?
Bu kitap, Hayat Ağacı karşılıklarının en çok atıf alan modern tablosudur; Dion Fortune'un *Mistik Kabala*'sı ile birlikte okununca iki farklı gelenek yorumu karşılaştırılabilir.

## Çalışma
Önsözdeki üç iddiayı "kanıtlanmış / kendi beyanı / tahmin" olarak etiketle.`,
          verification: `Önsöz ve künye PDF'ten doğrudan okundu. "Bir haftada yazıldı" ve "yüzde doksan Golden Dawn" ifadeleri kitabın kendi iddialarıdır; bağımsız olarak doğrulanmadı. Yayın yılları (1909 ve 1955) kitabın künyesinde geçer.`,
        },
        {
          id: "a-giris",
          title: "Giriş makalesi: amaç ve yöntem",
          summary: "Crowley'in niçin böyle bir tablo yaptığını nasıl savunduğu ve kaynak listesi.",
          body: `## Crowley'in gerekçesi

Girişte Crowley şu fikirleri ileri sürer:

- Mezhep ayrılıklarının nedeni **düşünce değil, dil ayrılığıdır**: "Japonun Hachiman'ı ve Boer'in Orduların Efendisi'ni düşünmesi iki düşünce değil, birdir."
- Bu yüzden karşılaştırmalı bir **sözlük/tablo** gerekir.
- Önceki girişimler (Agrippa, Lull, Blavatsky, Frazer, Altın Şafak) ya çok hacimli ya da tablosuzdur.
- Kendi tabloları için kaynak olarak şu isimleri sayar: Pietro d'Abano, William Lilly, Eliphas Lévi, Richard Burton, Vivekananda, Hint–Budist–Çin klasikleri, Kur'an ve yorumcuları, Ölüler Kitabı ve "özgün araştırma".
- **Gizlilik tutumu:** Sır tutmayı "çok saçma" bulur; öğretilebilen şey öğretilmelidir.

## Dikkat
Girişin dili **polemik ve hakaret doludur** (özellikle belirli yazarlara ve mezheplere); bu üslup bilimsel bir yöntem değil, kişisel bir sestir. Ayrıca "ilk kez Çin, Hint, Müslüman ve Mısır sistemlerini Kabala ile hizaya soktuğunu" söylemesi bir **beyandır**, doğrulanmamıştır.

## Çalışma
Giriş makalesinden bir paragraf seç; "iddia – kanıt – üslup" olarak üç sütuna ayır.`,
          verification: `Giriş metni PDF'ten doğrudan okundu. Alıntılar özetlenmiştir. Crowley'in kaynak listesi ve "ilk kez bağdaştırdım" iddiası kendi beyanıdır; bağımsız kaynakla doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("PDF hangi baskıya aittir?", ["777 Revised (1955)", "İlk basım (1909) tıpkıbasımı", "Equinox sayısı", "Golden Dawn el yazması"], 0),
        qz("Editör önsözü kitabı nasıl tanımlar?", ["Kabalistik bir sözlük ve karşılaştırmalı din/sembolizm kitabı", "Bir roman", "Bir tıp kitabı", "Bir takvim"], 0),
        qz("Crowley'e göre mezhep ayrılıklarının nedeni nedir?", ["Düşünce değil, dil ayrılığı", "Ekonomik çıkar", "Coğrafya", "Irk"], 0),
        qz("Önsöz hangi örgütün kitabın büyük bölümüne kaynak olduğunu söyler?", ["Altın Şafak Düzeni", "Teosofi Cemiyeti", "Masonlar", "Rosicrucian Vakfı"], 0),
        qz("'Bir haftada yazıldı' iddiası nasıl değerlendirilir?", ["Crowley'in kendi beyanı olarak", "Kesin tarihî olgu olarak", "Resmî kayıt olarak", "Yalan olarak"], 0),
      ],
    },
    {
      id: "a2",
      title: "2. Tabloları Kullanmak ve Eleştirmek",
      description: "Altı tablo, Qabalah tanımı ve karşılıkların keyfîliği.",
      lessons: [
        {
          id: "a-tablolar",
          title: "Tablolar nasıl okunur?",
          summary: "İçindekiler haritası: Tablo I–VI, çeşitli düzenlemeler, notlar, I Ching eki.",
          body: `## Kitabın düzeni

| Bölüm | Konu |
|---|---|
| **Tablo I** | "Bütün ölçek": 0 (Ain, Ain Soph, Ain Soph Aur) + 1–10 Sephiroth + 11–32 yollar (İbrani harfleri) ve sütunlar |
| Tablo II | Elementler |
| Tablo III | Gezegenler |
| Tablo IV | Sephiroth |
| Tablo V | Zodyak |
| Tablo VI | Yollar |
| Various Arrangements | Çeşitli düzenlemeler |
| Notes | Tablolara notlar |
| Appendix | **Yi King** (I Ching) |
| Explanations | Karşılıkların açıklamaları (777 Revised'e eklendi) |
| Magical Alphabet / Primes / Qabalah / Number | Yeni eklenen kısa denemeler |

## Tablo I'in sütunları (örnek)
Her satır bir sayıya karşılık gelir: İbranice ad ve harf, İngilizce karşılığı, "Assiah'taki Tanrı adı", adeptin bilinci vb. Örneğin 1 → **Kether (Taç)**, 6 → **Tiphareth (Güzellik)**, 10 → **Malkuth (Krallık)**; 11–32 satırları harfleri ve anlamlarını verir (Aleph—öküz, Beth—ev, Gimel—deve…).

## Nasıl kullanılır?
Tablo bir **sözlük** gibi çalışır: bir sembolden (ör. bir gezegen ya da renk) başlayıp aynı satırdaki diğer karşılıklara gidersin. Bu, karşılıkların "gerçek" olduğunu değil, **bir sistemin tutarlılığını** gösterir.

## Çalışma
Tablo I'den 3 Sephirah seç; karşılıklarını kendi tablonda toplayıp Fortune'un *Mistik Kabala*'sındaki anlatımla karşılaştır.`,
          verification: `İçindekiler ve Tablo I'in ilk satırları PDF'ten okundu (sütun ve satır yapısı). Her satırın tüm karşılıkları (renk ölçekleri, Tarot, bitkiler, kokular vb.) ders metnine konmadı; PDF'ten kendin oku.`,
        },
        {
          id: "a-qabalah",
          title: "'Qabalah nedir?' — yedi tanım",
          summary: "Crowley'in Kabala'yı dil, sınıflama ve cebir benzetmeleriyle tanımlayışı.",
          body: `## Kitabın kendi tanımı

*What is Qabalah?* bölümünde Crowley, Kabala'nın şunlar olduğunu söyler:

1. Belirli olguları anlatmak için uygun bir **dil** (kimyanın terminolojisi gibi).
2. Mezhep-dışı, esnek bir **terminoloji**; farklı kültürlerin zihinsel süreçlerini eşler.
3. Düşünceyi kesin biçimde formüle eden bir **sembol sistemi** (cebirsel semboller gibi).
4. Anlamı unutulmuş sembolleri yorumlamak için bir **araç**.
5. Fikirleri düzenleyip ilişkilendiren bir **sınıflama sistemi**.
6. Bilinenden bilinmeyene gitmek için, matematikteki gibi bir **araç** (√-1 benzetmesi).
7. Karşılıkların doğruluğunu **tutarlılık ölçütleriyle** sınamak için bir kıstas sistemi.

## "Sayı" denemesi
Kitap ayrıca *The Book of the Law* I:4 ("Her sayı sonsuzdur") üzerine bir deneme içerir; sayının "bir seri içindeki terim" değil **kendi başına bir şey** olduğunu savunur. Bu deneme, çevirmen notuna göre Regardie'nin yayımladığı *The Law is for All*'da yer almaz.

## Değerlendirme
Tanımlar Kabala'yı **sembolik bir dil/sınıflama aracı** olarak ele alır; Yahudi Kabala geleneğinin dinî/kutsal metin boyutunu (Zohar vb.) kapsamaz. Bu iki yaklaşımı ayırmak önemli.

## Çalışma
Yedi tanımı Fortune'un Kabala tarifiyle (ör. "en iyi meditasyon simgesi") yan yana koyup farkları yaz.`,
          verification: `"Qabalah nedir?" ve "Sayı" bölümleri PDF'ten doğrudan okundu; maddeler özetlenmiştir. Çevirmen notu (Regardie'nin baskısında bulunmadığı bilgisi) PDF'te yer alır.`,
        },
        {
          id: "a-elestiri",
          title: "Karşılıkların keyfîliği ve eleştirel kullanım",
          summary: "Crowley'in kendi itirafı, kaynak sorunu ve kendi tablonu kurma yöntemi.",
          body: `## Kitabın kendi itirafı

Girişteki bir dipnotta Crowley şunu yazar: sembolizmin **nihayetinde keyfî** olabileceğini; "anne" fikriyle "ma" sesi arasında zorunlu bir ilişki olmadığını. Aynı bölümde harflerin sayı değerlerinin ve alfabelerin kökenlerinin de "keyfî ve çözülmez" olduğunu söyler. Yani yazar, karşılıkların **kesin kozmik gerçekler değil, kullanışlı bir şema** olduğunu kabul eder.

## Eleştirel kullanım yöntemi
1. **Kaynağı izle:** Karşılığın Golden Dawn'dan mı (önsöze göre %90), Crowley'in kendi araştırmasından mı geldiğini sor.
2. **Karşılaştır:** Aynı Sephirah'yı 777, Fortune ve Agrippa'da incele.
3. **Tutarlılık testi:** Bir karşılık, tablodaki diğer karşılıklarla çelişiyor mu?
4. **Kendi tablonu kur:** 10 Sephirah için 5 sütunlu bir tablo (gezegen, renk, harf/yol, sembol, kişisel çağrışım) çıkar; hangi hücrelerde dayanak bulduğunu işaretle.

## Sınır
Bu kitap kişisel gözlemleri "doğruluyor" izlenimi verebilir; **uyum bulmak** (her şeyi birbirine bağlayabilmek), kanıt değildir.

## Çalışma
Kendi 5 sütunlu tablonu hazırla; "kaynaklı/kaynaksız" hücrelerini renkle işaretle.`,
          verification: `Dipnot ve giriş metni PDF'ten okundu. "Uyum bulmak kanıt değildir" notu ders yazarının eleştirel yorumudur, kitap iddiası değildir.`,
        },
      ],
      quiz: [
        qz("Tablo I neyi içerir?", ["Bütün ölçeği: 0, 1–10 Sephiroth, 11–32 yollar", "Yalnızca elementleri", "Yalnızca Tarot kartlarını", "Burçların tarihini"], 0),
        qz("Crowley'in Kabala tanımlarından biri hangisidir?", ["Düşünceyi kesin formüle eden bir sembol sistemi", "Bir tıp tedavisi", "Bir yemek kitabı", "Bir takvim"], 0),
        qz("Kitapta Yi King nerede yer alır?", ["Ek (Appendix)", "Giriş", "Tablo II", "Önsöz"], 0),
        qz("Crowley sembolizmin 'keyfî' olabileceğini nerede kabul eder?", ["Girişteki dipnotta", "Kapakta", "İçindekilerde", "Tablo V'te"], 0),
        qz("'Uyum bulmak' neden kanıt sayılmaz?", ["Her şey birbirine bağlanabilir", "Çünkü tablo yanlıştır", "Çünkü yasaktır", "Çünkü eski bir kitaptır"], 0),
        qz("1955 baskısının ekleri arasında hangisi vardır?", ["Magical Alphabet üzerine deneme", "Mutfak tarifleri", "Harita", "Şiir seçkisi"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Tablo I–VI'nın tüm satırları (renkler, Tarot, bitkiler, kokular, taşlar, tanrılar vb.):** Hacimli ve her hücre kitabın iddiasıdır; bağımsız doğrulanamaz. Tabloyu PDF'ten kendin oku; kendi notlarını "Düzenle" ile ekleyebilirsin.
- **'Explanations of the Attributions' bölümü:** Taranmadı; kitabın uzun bölümü, ayrıca okunmalı.
- **Yi King eki:** Yalnızca varlığı belirtildi; içeriği öğretilmedi.
- **Crowley'in giriş makalesindeki hakaret ve polemikler:** Öğretim değeri taşımadığı için aktarılmadı; yalnızca bilgi içeren argümanlar özetlendi.
- **'Altın Şafak %90' ve 'bir haftada yazıldı' gibi iddiaların doğruluğu:** Bağımsız kaynakla doğrulanamadı; kitabın beyanı olarak işaretlendi.`,
});
