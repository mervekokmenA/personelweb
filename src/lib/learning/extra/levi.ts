import { extraModule } from "./builder";
import { qz } from "../helpers";

export const leviModule = extraModule({
  id: "ek-levi",
  title: "Éliphas Lévi: Yüksek Büyünün Öğretisi ve Ritüeli",
  tagline: "Lévi'nin 22 bölümlü Dogme et Rituel'i: yazar, kaynaklar, yapı ve iki Türkçe baskının karşılaştırması",
  description:
    "Yüklediğin üç Lévi dosyasının ek modülü: Greer'in tanıtımıyla yeni çeviri (480 sayfa) ve Mavi Kalem'in 'Metafizik Maji Öğretisi ve Ritüeli' Cilt 1 ve Cilt 2'si. Modül Lévi'nin yaşamını, kitabın yapısını (22 bölümlük Doktrin + 22 bölümlük Ritüel + ek), düşünsel kaynaklarını ve iki baskı arasındaki farkları öğretir; ritüel uygulama talimatı vermez.",
  source: {
    file: "yuksek-buyu-oretisi-ve-ritueli-yeni-bir-ceviri-eliphas-levii.pdf; metafizik-maji-retisi-ve-riteli-cilt-1/2_compress.pdf",
    author: "Éliphas Lévi (Alphonse Louis Constant) — tanıtım: John Michael Greer; çev. Faruk Gültekin (Mavi Kalem)",
    language: "Türkçe (çeviri)",
    pages: 480,
    readNote: "Greer'in genel tanıtımı, her iki baskının içindekiler ve Mavi Kalem Cilt 1'in 'Eliphas Lévi kimdi?' bölümü okundu. 22+22 bölümün gövde metinleri derse konmadı.",
  },
  units: [
    {
      id: "l1",
      title: "1. Yazar ve Kitabın Doğuşu",
      description: "Alphonse Louis Constant'tan Éliphas Lévi'ye; 1854–1856 yayınları.",
      lessons: [
        {
          id: "lv-hayat",
          title: "Lévi kimdi? İki baskının anlatımı",
          summary: "Greer'in tanıtımı ve Mavi Kalem'in kısa biyografisi: kesişen ve çelişen noktalar.",
          body: `## Ortak çekirdek

- Gerçek adı **Alphonse Louis Constant**; **1810'da Paris'te** bir kunduracının oğlu olarak doğdu (Mavi Kalem: 8 Şubat 1810).
- Katolik rahiplik eğitimi aldı; **diyakoz** oldu, ancak rahipliğe geçmeden seminerden ayrıldı (kız öğrencilere ilmihal öğretirken âşık olması).
- **1841'de *La Bible de la Liberté*/Özgürlük İncili** yüzünden tutuklandı ve hapis cezası aldı.
- **Józef Maria Hoëné-Wroński** (Polonyalı matematikçi-filozof) ile **1853'te** tanıştı; Wroński'nin Kabala'dan türeyen düşünce sistemi ona okült yazıların "romantik merak değil, bir yaşam felsefesi" olduğunu gösterdi (Greer).
- Mahlas: kendi adının İbranice'ye gevşek çevirisi: **Éliphas Lévi (Zahed)**.
- **Dogme de la haute magie (1854)** ve **Rituel de la haute magie (1855)**; ikisi birlikte tek ciltte **1856**. Sonraki kitaplar: *Histoire de la magie* (1860), *La Clef des grands mystères* (1861), *Fables et symboles* (1862), *La Science des esprits* (1865). **1875'te** öldü.

## İki baskının farkları (ders için en öğretici kısım)
| Konu | Greer'in tanıtımı | Mavi Kalem biyografisi |
|---|---|---|
| Hapis süresi | 11 ay | 8 ay |
| Evlilik | 1846'da Noémie Cadiot; evlilik başarısızlıkla 1853'te sona erdi | Marie-Neomi Cadiot ile 1846 (yaşı "18" yazılıyor); ayrılık 7. yıl |
| Tarih/olgu iddiaları | Daha kayıtlı bir tarih anlatısı | Bazı iddialar "kesinlik taşımıyor" notuyla (ör. mason locası üyeliği) |

Farklılık, **ikincil biyografilerin kendi içinde tutarsız olabildiğini** gösterir; bunları **birincil kayıtlarla** (nüfus kaydı, yargı kayıtları) kontrol etmek gerekir.

## Çalışma
İki biyografide çelişen her olguyu işaretle; hangi bilgi için bağımsız kaynak arayacağını yaz.`,
          verification: `Greer'in tanıtımı (Genel Tanıtım) ve Mavi Kalem Cilt 1'in "Eliphas Lévi kimdi?" bölümü PDF'lerden doğrudan okundu; farklar tablosu iki metnin karşılaştırmasıdır. Her iki metindeki ayrıntıların (hapis süresi, evlilik) doğrusu ayrıca birincil kaynakla doğrulanmadı.`,
        },
        {
          id: "lv-kaynaklar",
          title: "Lévi'nin düşünsel kaynakları (Greer'e göre)",
          summary: "Vico'nun mit yorumu, Schopenhauer'in iradesi ve Kabalacı Wroński: Lévi'nin sentezi.",
          body: `## Greer'in çerçevesi

Greer, Lévi'nin "isimsiz kaynaklarını" açar:

1. **Giambattista Vico** (*Yeni Bilim*): Mitoloji aptalca bir hata değildir; toplumların "gençlik dönemindeki" somut imgelerle düşünme biçimidir. Lévi'ye göre mit, **gerçekleri iletmenin modern insana yabancı bir yöntemidir**.
2. **Arthur Schopenhauer**: Dünyanın "irade ve tasarım" olarak anlaşılması; Lévi'nin iradeyi merkeze alan büyü anlayışıyla ilişkilendirilir.
3. **Wroński:** Kabala'dan türeyen karmaşık bir düşünce sistemi.
4. **Rönesans kaynakları:** Mitin aktardığı bilginin "olağanın ötesindeki" bir şeyle ilgili olduğu fikri Rönesans geleneğinden gelir.

Greer'e göre Lévi, **eski büyü öğretilerini modern dille yeniden ifade edip kitlesel bir pazara sunabileceğini** ilk gösteren yazarlardandır; Yeats gibi sonraki yazarlar Lévi'nin etkisindeki bir çevrede büyümüştür.

## Eleştirel not
Bu bağlantılar **Greer'in yorumudur**. Lévi bu isimleri her zaman anmaz; bağların kanıtı çoğunlukla metinsel benzerliktir. Ayrıca "Lévi'nin etkisi" için sayılan dönemsel alıntılar (Yeats anısı) edebî tanıklıktır.

## Çalışma
Greer'in dört kaynağından birini seç (Vico ya da Schopenhauer); Lévi'ye etkisini sorgulayan 5 soru yaz.`,
          verification: `Greer'in tanıtımının ilgili bölümleri PDF'ten okundu (Vico ve Schopenhauer başlıkları, Wroński bilgisi, Yeats anısı); özetlenmiştir. Kaynakların Lévi'ye gerçek etkisi bağımsız olarak doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("Lévi'nin gerçek adı nedir?", ["Alphonse Louis Constant", "Arthur Waite", "Edward Bulwer-Lytton", "Papus"], 0),
        qz("Lévi'nin Wroński ile tanıştığı yıl hangisidir?", ["1853", "1810", "1875", "1904"], 0),
        qz("Dogme et Rituel de la haute magie hangi yıllarda yayımlandı?", ["1854 ve 1855 (tek cilt 1856)", "1800–1801", "1909", "1935"], 0),
        qz("İki Türkçe baskıda çelişen olgulardan biri hangisidir?", ["Hapis süresi (11 ay / 8 ay)", "Doğum şehri", "Ölüm yılı", "Kitabın adı"], 0),
        qz("Greer'e göre Vico'dan Lévi'ye geçen fikir nedir?", ["Mit, gerçeği iletmenin farklı bir yöntemidir", "Mit yalnızca yalandır", "Mit tarih kitabıdır", "Mit bir ilaçtır"], 0),
      ],
    },
    {
      id: "l2",
      title: "2. Kitabın Yapısı ve Okuma Yöntemi",
      description: "22 + 22 bölüm, Tarot/İbrani harfi bağı ve ekler.",
      lessons: [
        {
          id: "lv-yapi",
          title: "Doktrin (22) ve Ritüel (22): bölüm haritası",
          summary: "Birinci kitap (öğreti) ile ikinci kitap (ritüel) paralel 22 bölümdür; ekler: Nuctemeron ve cevaplar.",
          body: `## Genel yapı

Kitap iki ana parçadır: **Birinci Bölüm — Yüksek Büyü Öğretisi (Doktrin)** ve **İkinci Bölüm — Yüksek Büyü Ritüeli**. Her ikisi **22 bölüme** ayrılır (Greer baskısı: "Giriş + 22"); 22, İbrani alfabesindeki harf sayısıdır ve Lévi bölümleri Tarot'un Büyük Arkana'sı ve İbrani harfleriyle ilişkilendirir (Mavi Kalem içindekileri her bölümün başında harfi verir: A, B, G, D, H, V, Z, Ch… ve Latince anahtar kelimeler).

## Doktrin bölüm başlıkları (Greer baskısı)
Giriş · 1 İnisiye (Namzet) · 2 Tapınağın Sütunları · 3 Süleyman'ın Üçgeni · 4 Tetragrammaton · 5 Pentagram · 6 Sihirli Denge · 7 Alevli Kılıç · 8 Gerçekleştirme · 9 Başlatma · 10 Kabala · 11 Sihirli Zincir · 12 Büyük Eser · 13 Ölü Çağırma · 14 Dönüşümler · 15 Kara Büyü · 16 Büyüler · 17 Astroloji · 18 İksirler ve Büyüler · 19 Filozofların Taşı · 20 Evrensel Tıp · 21 Kehanet · 22 Dört Gizli Bilimin Özeti ve Genel Anahtarı.

## Ritüel bölüm başlıkları (Greer baskısı)
Giriş · 1 Hazırlıklar · 2 Sihirli Denge · 3 Tılsım Üçgeni · 4 Dörtün Çağrısı · 5 Alevli Pentagram · 6 Ortam ve Arabulucu · 7 Tılsımların Septenary'si · 8 Akılsızlara Bir Uyarı · 9 İnisiyelerin Seremonisi · 10 Okültizmin Anahtarı · 11 Üçlü Zincir · 12 Büyük Eser · 13 Ölü Çağırma · 14 Dönüşümler · 15 Büyücülerin Şabat Günü · 16 Büyüler ve Büyüler · 17 Yıldızların Yazılması · 18 İksirler ve Manyetizma · 19 Güneşin Büyüsü · 20 Thaumaturgy · 21 Peygamberlerin Bilimi · 22 Hermes Kitabı.

## Ekler
**Tyanalı Apollonius'un Nuctemeron'u**, "Köy Büyüsü ve Çobanların Büyüsü" ve bazı soru-eleştirilere cevaplar (Greer baskısı).

## Baskılar
Greer baskısı **tek ciltte iki kitabı** birleştirir; Mavi Kalem baskısı iki cilde ayırır: **Cilt 1 — Metafizik Maji Öğretisi**, **Cilt 2 — Metafizik Maji Ritüeli**. Başlık çevirileri farklıdır (örn. "Tılsım Üçgeni / Pantacle Üçgeni").

## Çalışma
İki baskının içindekilerinden bir bölüm başlığını eşleştir; çeviri farkını (terim seçimi) not et.`,
          verification: `İçindekiler iki baskıdan okundu (Greer baskısında satır karışması olan taranmış içindekiler düzenlendi). Bölüm gövdeleri ders metnine konmadı. İlişkilendirme (22 harf/Tarot) Mavi Kalem içindekileri ve Lévi geleneğiyle uyumludur; ayrıntı doğrulaması için bölüm metinleri okunmalıdır.`,
        },
        {
          id: "lv-okuma",
          title: "Lévi'yi nasıl okumalı? Tarih ve etki",
          summary: "Crowley'in notu, Altın Şafak ile ilişki ve eleştirel okuma ilkeleri.",
          body: `## Etki
- Greer'e göre modern okültizmin çok sayıda akarsuyu Lévi'ye kadar izlenebilir; okült edebiyat Avrupa ve Amerika'da 1856'dan Birinci Dünya Savaşı'na kadar güçlü bir varlıktı.
- **Crowley**, *777*'nin girişinde "Eliphaz Levi'nin gerçek karşılıkları bildiği ama onları kullanması yasak edildiği" iddiasını yazar (bu bir **iddiadır**; bkz. ek modül *777*).
- Altın Şafak Tarot karşılıkları Lévi'den farklıdır; bu fark, geleneklerin birbirinden nasıl ayrıldığını gösterir (bu derste ayrıntılandırılmadı).

## Okuma ilkeleri
1. **Tarihsel metin olarak:** Lévi 19. yüzyıl Fransız Romantizmi ve sosyal düşüncesiyle konuşur.
2. **Retorik üslup:** Lévi, iddialarını **edebî ve şiirsel** biçimde sunar; kesin sonuçlara götüren deneysel bir yöntem sunmaz.
3. **Tarihsel iddialar:** Antik büyücüler, tapınakçılar vb. hakkındaki iddialar akademik tarihle karşılaştırılmalıdır (Okültizm modülü 10. ünite).
4. **Ritüel tarifleri:** Bu modül uygulama öğretmez.

## Çalışma
Kitaptan seçtiğin tek bir iddiayı (ör. bir "tarihsel olgu") alıp iki bağımsız kaynakla doğrulamayı dene; sonucu "doğrulandı/kısmen/doğrulanamadı" diye yaz.`,
          verification: `Greer'in tanıtımı ve *777* girişi PDF'ten okundu. "Altın Şafak karşılıkları Lévi'den farklıdır" ifadesi genel bilgidir; bu derste kanıtlanmadı ve ayrıntılandırılmadı.`,
        },
      ],
      quiz: [
        qz("Kitap kaç bölümlük iki ana kısımdan oluşur?", ["22 + 22", "12 + 12", "7 + 7", "10 + 10"], 0),
        qz("Doktrin'in 1. bölümünün adı nedir?", ["İnisiye (Namzet)", "Pentagram", "Kabala", "Kehanet"], 0),
        qz("Mavi Kalem baskısı kitabı kaç cilde ayırır?", ["2", "1", "5", "10"], 0),
        qz("Lévi'nin üslubu için doğru ifade hangisidir?", ["Edebî ve retorik; deneysel yöntem sunmaz", "Laboratuvar raporu", "Takvim", "Yasa metni"], 0),
        qz("Kitabın eki olarak hangi metin anılır?", ["Tyanalı Apollonius'un Nuctemeron'u", "Zohar", "Kybalion", "Şems'in Kitabı"], 0),
        qz("İki Türkçe baskıdaki bölüm adı farkı neyi gösterir?", ["Çeviri tercihleri farklıdır; orijinale bakmak gerekir", "Kitabın iki ayrı eser olduğunu", "Yanlış baskı olduğunu", "Hukuki sorunu"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **22 + 22 bölümün gövde metinleri (ritüel, çağrılar, büyüler, "ölü çağırma", "kara büyü", "şabat" vb.):** Uygulama talimatı olarak verilmedi; ayrıca bu bölümler çeviri farklarıyla yoğun. Başlık haritası verildi.
- **Lévi'nin tarihsel iddiaları (antik büyücüler, tapınakçılar, Hermes kitabı vb.):** Akademik kaynaklarla doğrulanmadı; Okültizm modülünün 10. ünitesindeki kaynak eleştirisi yöntemiyle okunmalı.
- **Greer ile Mavi Kalem biyografilerindeki çelişen ayrıntılar (hapis süresi, evlilik):** Bağımsız birincil kaynakla doğrulanamadı; iki iddia da etiketli şekilde verildi.
- **Greer baskısındaki dipnotlar (590+):** Taranmadı.
- **Tarot–İbrani harfi eşleşmelerinin tablosu:** Bu derste çıkarılmadı; iki baskıda başlık düzeyinde belirtildi.`,
});
