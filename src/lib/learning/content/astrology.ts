import type { ModuleContent } from "./types";
import { qz } from "../helpers";

export const astrologyContent: ModuleContent = {
  bodies: {
    "ay-gunlugu": {
      body: `## Neden Ay günlüğü?

Ay döngüsünü kitaptan öğrenmek yerine **kendi gözlemlerinle** görmek, hem astronomik gerçeği hem de "Ay'ın etkisi" iddialarını sağlam bir temele oturtur. Hedef: 13 sinodik ay (yaklaşık 384 gün) boyunca her gün kayıt.

## Tablo sütunları

| Tarih | Ay evresi (8 faz) | Ay'ın burcu ve derecesi | VOC var mı? | Gökyüzü gözlemi | Ruh hali / uyku / rüya |

## Astronomik zemin

- **Sinodik ay** (yeni aydan yeni aya) ortalama **29,53 gün**.
- Ay her gün yaklaşık 12–13° ilerler ve yaklaşık **2,5 günde bir burç** değiştirir.
- Evre, Güneş–Ay arasındaki **görünür açısal uzaklığa (elongasyon)** bağlıdır.

## Dürüst veri tutma

Duygu durumunu Ay evresiyle ilişkilendirirken **önyargı** riski yüksektir: Dolunayda kötü bir günü hatırlar, diğerlerini unutursun. Bu yüzden her gün aynı saatte, **evreyi bilmeden önce** ruh halini yaz; ay sonunda eşleştir.

## Çalışma
- 1 ay boyunca günlüğü tut; ay sonunda ruh halini evrelere göre ortalamayla grafikle.
- Veride gerçek bir örüntü var mı, yoksa rastlantı mı? Yorumunu yaz.`,
      verification: `**Doğrulandı:** Sinodik ayın ortalama 29,53 gün olduğu ve Ay'ın evrelerinin Güneş–Ay açısına bağlı olduğu astronomi temel bilgisidir. Ay evresi ve ruh hali ilişkisi için **kanıtlanmış bir bağ olduğu iddia edilmez**; ders bunu kişisel gözlem deneyi olarak sunar. Veri kaynağı: [timeanddate.com — Ay evreleri](https://www.timeanddate.com/moon/phases/).`,
    },
    "ay-faz-hesap": {
      body: `## Elongasyon ile faz

Ay'ın ekliptik boylamı − Güneş'in boylamı = **elongasyon** (0–360°). Yeni aydan itibaren:

| Elongasyon | Evre |
|---|---|
| 0° | Yeni Ay |
| 0–90° | Büyüyen (hilal → ilk dördün) |
| 90° | İlk Dördün |
| 90–180° | Şişkin Ay |
| 180° | Dolunay |
| 180–270° | Küçülen |
| 270° | Son Dördün |
| 270–360° | Balsamik (karanlığa yaklaşan hilal) |

Astrologlar sık sık 8 eşit dilimli kullanım yapar (her biri 45°).

## Adım adım örnek

1. [Astro.com](https://www.astro.com) efemerisinden bir tarihin Güneş ve Ay boylamını al (örn. Güneş 12° Başak = 162°, Ay 24° Oğlak = 294°).
2. Elongasyon = 294 − 162 = **132°** → Şişkin Ay evresi (90–180° aralığı), dolunaya yaklaşan.
3. Ay'ın bulunduğu burç: boylamın 30'a bölümü (294/30 = 9,8 → 10. burç = Oğlak).

## Doğrulama

Hesabını bir Ay takvimi sitesiyle karşılaştır; ±1 gün sapma normaldir (saat dilimi, yuvarlama).

## Çalışma
5 farklı tarih için hesabı el ile yap, Astro.com ve timeanddate ile karşılaştır; hata payını yaz.`,
      verification: `**Doğrulandı:** Elongasyon–faz ilişkisi (0° yeni ay, 90° ilk dördün, 180° dolunay, 270° son dördün) astronomi temel bilgisidir; 8 eşit dilimli kullanım astrolojide yaygın bir kuraldır (tek bir standart yoktur). Bu örnekteki sayılar kurgusaldır, gerçek bir tarihe ait değildir.`,
    },
    voc: {
      body: `## Void-of-Course (VOC) Ay

Ay bir burçta **son majör (Batlamyus) açısını** yaptıktan sonra o burcu terk edip yenisine girene kadar geçen süreye "boşta Ay" denir. Süre dakikalardan 2 gün kadar olabilir.

## Geleneksel yorum

Klasik horary ve elektif astrolojide (Lilly, *Christian Astrology*, 1647) VOC Ay, **"bir şey çıkmaz"** olarak yorumlanır: bu aralıkta başlatılan işlerin sonuçsuz kalacağı düşünülür. Modern astrologlar bu kurala **çok farklı** yaklaşır (bazıları kesin uygular, bazıları tamamen reddeder). Gerekçe sembolik/gelenekseldir; ampirik kanıt yoktur.

## Nasıl tespit edilir?

1. Efemerisinde Ay'ın son açısının saatini bul.
2. Ay'ın burç değiştirdiği saati bul.
3. Aradaki aralık VOC'tur. Modern yazılımlar (Astro.com, astro-hesaplamalar) bunu otomatik gösterir; "hangi gezegenler sayılıyor" ve "orb" ayarı sonucu değiştirir.

## Çalışma
Bir ay boyunca tüm VOC aralıklarını işaretle. Bu aralıklarda başlattığın küçük işlerin (e-posta, proje başlangıcı, yeni alışkanlık) sonucunu günlüğe yaz. Ay sonunda kendi verinle değerlendir.`,
      verification: `**Doğrulandı:** VOC tanımı, klasik astrolojide kötü ya da etkisiz zaman olarak görülmesi ve Lilly'nin *Christian Astrology*'sinin (1647) kaynak olması astroloji tarihçesinde yaygın bilgidir. "Kanıtlanmış etki yoktur" ifadesi, bu konuda kontrollü çalışma bulunmadığına dayalı olarak yazıldı (ders bunu "gelenek" olarak sunar). Detaylı kural karşılaştırması bu çalışmada web ile yeniden doğrulanmadı.`,
    },
    "gezegen-saatleri": {
      body: `## Fikir

Gezegen saatleri sisteminde **gündüz** gün doğumundan gün batımına **12**, **gece** gün batımından ertesi gün doğumuna **12** eşit olmayan saate bölünür. Bu yüzden bir "gezegen saati" 60 dakika değildir; yazın gündüz saatleri uzun, gece saatleri kısadır.

## Kural 1: Gün yöneticisi

Gün, gün doğumunda başlar ve ilk saat **günün gezegenine** aittir.

| Gün | Gezegen |
|---|---|
| Pazar | Güneş |
| Pazartesi | Ay |
| Salı | Mars |
| Çarşamba | Merkür |
| Perşembe | Jüpiter |
| Cuma | Venüs |
| Cumartesi | Satürn |

## Kural 2: Kaldee (Chaldean) sırası

Saatler, yavaştan hızlıya gezegen sırasıyla ilerler:
**Satürn → Jüpiter → Mars → Güneş → Venüs → Merkür → Ay → (tekrar Satürn …)**

24 saat / 7 gezegen = 3 kalan olduğundan, ertesi günün ilk saati bu sırada 3 adım ileridedir; bu da gün sırasını (Güneş → Ay → Mars → …) açıklar.

## Hesap

- Gündüz saat süresi = (gün batımı − gün doğumu) / 12
- Gece saat süresi = (ertesi gün doğumu − gün batımı) / 12

### Örnek (kurgusal sayılar)
Gün doğumu 07:00, gün batımı 19:00 ise gündüz saati 60 dk. Pazartesi günü 1. saat Ay; 2. saat Satürn (Ay'dan sonra sıra Satürn'e döner); 3. Jüpiter; 4. Mars; 5. Güneş; 6. Venüs; 7. Merkür; 8. Ay …

## Köken ve sınırlar

Sıranın "Kaldee" adı modern bir terimdir; Babil kökenine dair doğrudan kanıt yoktur ve sistem Helenistik dönemde gelişmiş görünür. Gezegen saatinin ritüel/eylem **sonucuna** etkisi için kanıt yoktur.

## Çalışma
Kendi şehrin için bugünün gün doğumu/batımını al; 24 saatlik tabloyu el ile çıkar ve bir elektronik tabloyla doğrula.`,
      verification: `**Doğrulandı:** Gezegen sırası (Satürn, Jüpiter, Mars, Güneş, Venüs, Merkür, Ay), ilk saatin günün gezegenine ait olması, 24 mod 7 = 3 kalan açıklaması; "Chaldean" teriminin modern ve kökenin tartışmalı olduğu; Helenistik çağda geliştiği görüşü. Kaynak: [Wikipedia — Planetary hours](https://en.wikipedia.org/wiki/Planetary_hours), [Renaissance Astrology — giriş](https://renaissanceastrology.com/planetaryhoursarticle.html). Örnek sayılar kurgusaldır.`,
    },
    konaklar: {
      body: `## Ay konakları (Lunar mansions)

Ay'ın zodyak boyunca günlük yolculuğu farklı geleneklerde küçük bölümlere ayrılmıştır:

- **Arap geleneği (manazil al-qamar)**: 28 konak (her biri ≈ 12°51'). Orta Çağ ve Rönesans talisman literatüründe (ör. *Picatrix*, Agrippa) kullanılır.
- **Hint (nakshatra)**: 27 bölüm (her biri 13°20'); bunların kendi yöneticileri ve mitolojileri vardır; bazı sistemlerde 28. (Abhijit) eklenir.
- **Çin (xiu)**: 28 "gece konağı".

Sistemleri **birbirinin aynısı** gibi sunmak yanlıştır; adları, başlangıç noktaları ve anlamları farklıdır.

## Bir konağı bulmak

Tropikal zodyakta konak = Ay'ın boylamı / 12,857°; sidereal sistemlerde ayanamsa farkı hesaba katılır. Birçok astroloji yazılımı konak hesabını otomatik yapar.

## Çalışma
- Doğum Ay'ının hangi Arap konağında ve hangi nakshatra'da olduğunu bul; geleneksel yorumları **iki ayrı kaynakta** karşılaştır.
- Aynı konak için Agrippa'nın veya Esoteric Archives'daki metnin yorumunu oku; modern uygulamalarla farklarını yaz.`,
      verification: `**Kaynak durumu:** Arap 28, Hint 27 ve Çin 28 bölümlü sistemler ile konakların talisman literatüründe kullanıldığı genel alan bilgisidir; ders metni (Ders 36) bu sistemlerin karıştırılmaması gerektiğini vurgular. Ayrıntılı derece değerleri (12°51', 13°20') matematiksel bölme sonucudur (360/28, 360/27). Konak yorumları için birincil kaynak olarak Esoteric Archives ve Agrippa kullanılmalıdır.`,
    },
    eleksiyon: {
      body: `## Eleksiyon (seçilmiş zaman) astrolojisi

Elektif astroloji, bir eylemin **başlangıcı için uygun zamanı** seçme tekniğidir (evlilik, yolculuk, iş başlangıcı, ritüel). Geleneksel kural: Haritada eylemi temsil eden ev(ler), yöneticisi ve Ay iyi durumda olmalı.

## Kontrol listesi (öğrenme amaçlı)

1. **Ay**: Uygun evrede mi (yeni başlangıç için büyüyen, tamamlama için küçülen)? VOC değil mi? Kötü açıları (Mars/Satürn karesi–karşıtı) var mı?
2. **Yükselen ve yöneticisi**: Yükselen burç/ev yöneticisi güçlü mü (dignity)? Retrograd, yanık (combust) mu?
3. **Gezegen günü ve saati**: Eylemin doğasına uygun gezegen mi? (örn. öğrenme/yazı → Merkür; sınır koyma/yapı → Satürn)
4. **Retrograd/tutulma**: Önemli gezegenler retrograd mı; tutulma yakın mı?
5. **Pratik koşullar**: Astroloji uygun saat gösterse bile **pratik koşullar** (bütçe, hazırlık, insan) belirleyicidir.

## Sınır

Elektif astrolojinin **sonuç üzerindeki etkisi kanıtlanmamıştır**. Bu, bir planlama ve niyet çerçevesidir; astrolojik zaman seçimi iyi hazırlığın yerine geçmez.

## Çalışma
Gelecek 30 gün için 3 farklı amaç seç; her biri için 3 tarih/saat adayı belirle ve **kontrol listesine göre gerekçeni** yaz.`,
      verification: `**Kaynak durumu:** Elektif astrolojinin tanımı ve geleneksel kriterleri (Ay'ın durumu, yükselen yöneticisi, gezegen günü/saati) astroloji tarihçesinde ve Lilly/Bonatti geleneğinde yer alır. Bu derste ayrı bir web doğrulaması yapılmadı; "etki kanıtlanmamıştır" notu bilinçli olarak eklendi.`,
    },
    tutulma: {
      body: `## Tutulmalar ve Düğümler

- **Ay Düğümleri**: Ay'ın yörüngesinin ekliptiği kestiği noktalar. Düğüm ekseni yaklaşık **18,6 yılda** zodyakı geriye doğru dolaşır.
- **Tutulma**: Yeni ay (Güneş tutulması) veya dolunay (Ay tutulması) bir düğüm yakınında olduğunda olur.
- **Saros döngüsü**: Aynı geometrinin tekrarladığı yaklaşık **18 yıl 11 gün 8 saat** (6585,32 gün) döngüsü; tutulma "aileleri" bu döngüyle izlenir.

## Astrolojik gelenek

Geleneksel astrolojide tutulmalar **güçlü işaretler** sayılır; etkisi, tutulma derecesinin natal harita noktalarıyla ilişkisine göre yorumlanır ve etkisinin uzun sürdüğü söylenir. Bu yorumların ampirik doğruluğu gösterilmemiştir.

## Çalışma
- Önümüzdeki 2 yıldaki tutulma tarihlerini ve burçlarını listele.
- Natal haritandaki hangi nokta/gezegene yakın düştüğünü kontrol et ve **çıkarımlarından birini 1 yıl sonra** sınamak üzere not al.`,
      verification: `**Doğrulandı (astronomi):** Ay düğüm eksenin ~18,6 yıllık döngüsü ve Saros'un ≈ 18 yıl 11 gün 8 saat olması standart astronomi bilgisidir. Astrolojik yorum kısımları gelenek olarak sunuldu; bu ders için ayrıca web doğrulaması çalıştırılmadı.`,
    },
    transit: {
      body: `## Transit

Transit, **güncel gezegen konumlarının doğum haritasındaki noktalarla** yaptığı açılardır (örn. transit Satürn natal Güneş'e kare yapıyor). Zamanlama tekniklerinin en yaygınıdır.

## Dönüş döngüleri

| Gezegen | Yaklaşık yörünge/dönüş |
|---|---|
| Jüpiter | 11,86 yıl |
| Satürn | 29,5 yıl (Satürn dönüşü) |
| Uranüs | 84 yıl |
| Neptün | 165 yıl |
| Plüton | 248 yıl |

## Yöntem

1. Önce **yavaş** gezegen transitlerine bak (Jüpiter ve ötesi) — uzun dönemli temalar.
2. Natal haritada transit gezegenin **ev** ve **hakimiyet** bağlantısına bak.
3. Açıları **orb** içinde ve **kesinleşme tarihleriyle** (retrograd nedeniyle üç kez) takip et.
4. Yorumları geleneksel kaynaklardan (Hand, *Planets in Transit*) ve kendi hayatındaki olaylarla karşılaştır.

## Değerlendirme

Geçmişi seçici hatırlamak ("uydu") kolaydır. Bu yüzden **geriye dönük** analizi **önceden yazılmış** tahminlerle birlikte yap: tahmini tarihli not al, sonucu sonra kontrol et.

## Çalışma
Son 5 yılının önemli olaylarını transitlerle eşleştir; neyin tutup neyin tutmadığını **dürüstçe** yaz.`,
      verification: `**Doğrulandı (astronomi):** Gezegenlerin yaklaşık dönüş süreleri (Jüpiter ≈ 11,86 yıl, Satürn ≈ 29,5, Uranüs ≈ 84, Neptün ≈ 165, Plüton ≈ 248) NASA/astronomi referansları ile uyumlu bilinen değerlerdir. Transit yorum kuralları astrolojik gelenektir; bu derste kanıtlanmış nedensellik iddia edilmez.`,
    },
    progressions: {
      body: `## İkincil ilerletme (secondary progressions)

"Bir gün = bir yıl" ilkesiyle, doğumdan sonraki **N. günün** gökyüzü, **N. yaşın** sembolik haritası sayılır. En çok izlenenler: **ilerletilmiş Ay** (yaklaşık 2,5 yılda bir burç değiştirir; 27–28 yılda zodyakı döner), ilerletilmiş Güneş ve Ascendant.

## Solar return (Güneş dönüşü)

Güneş'in natal konumuna her yıl geri döndüğü an için çıkarılan haritadır. Yıl boyunca tema olarak yorumlanır; **yer** (doğum yeri mi, o an bulunduğun yer mi) tartışmalı bir tercihtir.

## Kullanım

1. Natal + ilerletme + transit + solar return **birlikte** değerlendirilir; tek bir teknikten sonuca varmak zayıf bir yöntemdir.
2. Öncelik: ilerletilmiş Ay evresi; ilerletilmiş açılar; solar return Asc/MC.

## Çalışma
Yaşındaki ilerletilmiş Ay'ı ve onun natal gezegenlerle açılarını çıkar; geçmiş yıllarla karşılaştır. Güneş dönüşü haritanı en az üç yıl için çıkarıp yıl sonu değerlendirme yaz.`,
      verification: `**Kaynak durumu:** "Bir gün = bir yıl" ilkesi ve solar return tanımı astroloji temel bilgisidir. İlerletilmiş Ay'ın zodyakı dönme süresi (~27,3 yıl) Ay'ın sideral dönem süresi (27,3 gün) ile uyumludur. Yorum yöntemleri gelenektir; kanıt iddiası yoktur.`,
    },
    synastry: {
      body: `## Sinastri

İki kişinin doğum haritasının **karşılaştırılması**. Teknikler: gezegen–gezegen açıları (özellikle Ay, Güneş, Venüs, Mars, Satürn), bir kişinin gezegenlerinin diğerinin evlerine düşmesi, **kompozit harita** (iki haritanın orta noktalarıyla oluşturulan tek harita).

## Etik ve sınırlar

- Sinastri **bir ilişkinin başarısını belirlemez**; doğrulanmış bir öngörü gücü yoktur.
- Karşı tarafın **izni olmadan** haritayı kullanma; sonuçları kararlarda belirleyici yapma.
- "Uyumlu/uyumsuz" dili bağımlılık yaratabilir; bunun yerine **etkileşim kalıplarını** tanımla.

## Çalışma
İzinle iki harita çıkar; 5 temel etkileşimi (ör. Ay–Satürn açısı) tanımla; her biri için **olumlu ve zorlayıcı yorum** yaz, yorum yazmadan önce beklentilerini not al.`,
      verification: `**Kaynak durumu:** Sinastri ve kompozit harita tanımları astroloji standart terimleridir. Etik uyarı, bu müfredatın kendi önerisidir; bir kaynak iddiası değildir.`,
    },
    horary: {
      body: `## Horary (saatler) astrolojisi

Soruyu sorduğun **anın haritasından** yanıt aramayı öneren dal. En bilinen kaynak William Lilly'nin *Christian Astrology*'sidir (1647); öncesinde Guido Bonatti gibi Orta Çağ astrologları vardır.

## Temel mantık

1. **Okunabilirlik (radicality) kontrolleri**: Yükselen çok erken/geç dereceler, Ay VOC gibi durumlar sorunun "sorulmaya hazır olmadığı" anlamına gelir (gelenek).
2. **Önemli figürler**: Soran (yükselen yöneticisi), sorulan şey (ilgili evin yöneticisi), Ay (ortak göstergen).
3. **Sonuç**: İki figür arasındaki açılar ve "çevirme/toplama" gibi tekniklerle yorumlanır.

## Doğruluk sorunu

Kontrollü çalışmalar horary'nin tahmin gücünü göstermemiştir; bu nedenle ders **tarihsel ve yöntem öğrenme** amaçlıdır. Kitaplığındaki *Saatler Astrolojisi ile Kehanet Sanatı* (Metin Kiraz) Türkçe bir kaynak olarak kullanılabilir.

## Çalışma
Net, gerçek bir soru sor ("X işe başvurunun sonucu olumlu mu?"); haritayı kur, yorumunu **önceden** yaz, sonucu öğrenince değerlendir. Bu pratiği 5 soruyla yap.`,
      verification: `**Doğrulandı (tarihsel):** Lilly'nin *Christian Astrology*'sinin 1647 tarihi ve horary geleneğinin Bonatti gibi öncüllerle bağı astroloji tarihçesinde yaygındır. "Kontrollü çalışmalar yarar göstermemiştir" ifadesi genel astroloji araştırmaları (ör. Carlson 1985, Nature) bağlamında yazıldı; bu derste ayrıca web doğrulaması çalıştırılmadı, kaynağını kontrol etmen önerilir.`,
    },
    hellenistic: {
      body: `## Helenistik astroloji

MÖ 1. yüzyıl–MS 7. yüzyıl arasında İskenderiye merkezli gelişen, bugünkü Batı astrolojisinin köklerini oluşturan gelenek. Ana metinler: **Vettius Valens** (*Anthology*), **Dorotheus**, **Firmicus Maternus**, **Batlamyus** (*Tetrabiblos*, MS 2. yüzyıl).

## Öne çıkan teknikler

- **Whole Sign evler**: Her burç bir ev.
- **Yıllık profeksiyon**: Doğumdan itibaren her yıl bir ev ilerler (0 yaş = 1. ev, 1 yaş = 2. ev …); o evin burcunun yöneticisi **"yılın gezegeni"dir**.
- **Zodiacal releasing**: Valens'e dayanan, ömür boyu zaman dilimlerini gösteren bir sistem.
- **Sect (gündüz/gece haritası)**: Gezegenlerin gündüz-gece grubu ile "yardımcı/zararlı" nitelikleri değişir.

## Modern ilgi

Chris Brennan'ın *Hellenistic Astrology* kitabı ve podcast'i bu geleneği yeniden popülerleştirdi.

## Çalışma
Profeksiyon tablosunu 0–24 yaş için çıkar; her yaşın gezegenini bul ve o yıl kendi yaşadıklarınla **karşılaştırarak** not düş.`,
      verification: `**Kaynak durumu:** Helenistik astrolojinin yazarları (Valens, Dorotheus, Firmicus, Batlamyus) ve temel tekniklerinin (profeksiyon, zodiacal releasing, sect) adları astroloji tarihçesinde standarttır. Batlamyus'un *Tetrabiblos*'u MS 2. yüzyıl metnidir. Ders kitaplardaki tanımları özetler, birebir alıntı yoktur; yöntem ayrıntıları için Brennan'ın kitabı kullanılmalıdır. Bu ders için ayrıca web doğrulaması çalıştırılmadı.`,
    },
    vedic: {
      body: `## Jyotish (Hint astrolojisi) kısaca

- **Sideral zodyak**: Burç sınırları gerçek yıldız arka planına göre sabitlenir; tropikal zodyaktan **ayanamsa** (yaklaşık 24°) kadar farklıdır.
- **Rashi (burç) ve Nakshatra (27 Ay konağı)**.
- **Dasha sistemleri**: En yaygını **Vimshottari** (120 yıllık döngü; Ay'ın nakshatra'sına göre başlar).
- **Graha**: 9 gezegen (Güneş, Ay, Mars, Merkür, Jüpiter, Venüs, Satürn, Rahu, Ketu — son ikisi Ay düğümleri).

## Batı astrolojisiyle ilişki

İkisi tarihsel olarak Helenistik astrolojiyle ilişkili olsa da farklı teknik, zodyak ve yorum gelenekleri geliştirdi. Frawley'in *Kahinlerin Astrolojisi* (kitaplığında) bu karşılaştırmayı Batı okuyucuya anlatır.

## Çalışma
Aynı doğum verisini hem tropikal hem sideral zodyakta çıkar; Güneş, Ay ve Yükselen'in hangi burçlara düştüğünü karşılaştır ve **neden** değiştiğini yaz.`,
      verification: `**Kaynak durumu:** Sideral zodyak, ayanamsa kavramı, 27 nakshatra, Vimshottari dasha (120 yıl) ve 9 graha Jyotish'in standart öğeleridir. Ayanamsa değeri zamanla değişir (yaklaşık 24° güncel değerdir). Bu derste ayrı web doğrulaması çalıştırılmadı.`,
    },
    "harita-gunlugu": {
      body: `## 30 harita pratiği

Bilgi, sürekli uygulamayla pekişir. 30 haritayı **aynı şablonla** yorumlamak 5 yıllık deneyimin çekirdeği olabilir: kendi haritan, yakınların (izinle), biyografisi iyi bilinen kişiler.

## Şablon

1. **Veri**: Doğum yeri/saati/kaynağı, ev sistemi, zodyak türü
2. **Büyük Üçlü ve ışıklar**: Güneş, Ay, Yükselen
3. **Element/nitelik dengesi**, baskın gezegen
4. **Ev yöneticileri ve dispositor zinciri**
5. **Majör açılar ve kalıplar**
6. **Zamanlama** (transit/ilerletme, biyografiyle eşleştirme)
7. **Ezoterik not**: Bailey/karmık ek katman (ayrı başlık, **klasik yorumdan sonra**)
8. **Güven notu**: Hangi yorum güçlü, hangisi spekülatif?

## Önyargı kontrolü

Biyografi bilinen kişide **önce** haritadan tahmin yaz, sonra biyografiyi oku. Yorumun yaşam ile ne kadar örtüştüğünü kayda geç (Barnum etkisi riskine karşı).

## Çalışma
İlk 5 harita için tüm şablonu doldur; 5. haritadan sonra kendi yorum kalitende hangi katmanların zayıf kaldığını belirle.`,
      verification: `Bu bölüm bir çalışma yöntemi şablonudur; olgusal iddia içermez. "Barnum etkisi" (genel ifadelerin kişiye özel sanılması) psikolojide iyi belgelenmiş bir olgudur.`,
    },
  },
  quizzes: {
    m1: [
      qz("Haritanın dört temel unsuru ve işlevleri doğru eşleşmiş hangisidir?", ["Burç=nasıl, gezegen=ne/kim, ev=nerede, açı=ilişki", "Burç=nerede, gezegen=nasıl, ev=ne, açı=kim", "Burç=ilişki, ev=nasıl, açı=nerede, gezegen=kim", "Hepsi aynı"], 0),
      qz("Zodyak kaç derecedir ve her burç kaç derecedir?", ["360°, 30°", "180°, 15°", "360°, 12°", "720°, 60°"], 0),
      qz("Burç ile takımyıldız için doğru ifade hangisidir?", ["Aynı şeydir", "Aynı şey değildir; burç ekliptiği 30°'lik bölümlere ayıran bir sistemdir", "Takımyıldız tropikal zodyağa denktir", "Burçlar yalnızca Güneş'e bağlıdır"], 1),
      qz("Büyük Üçlü neyi ifade eder?", ["Güneş, Ay, Yükselen", "Merkür, Venüs, Mars", "Jüpiter, Satürn, Plüton", "MC, IC, Asc"], 0),
      qz("Doğum saati neden kritik kabul edilir?", ["Yükselen ve evlerin hesabını belirlediği için", "Güneş burcunu değiştirdiği için", "Gezegen sayısını değiştirdiği için", "Önemli değildir"], 0),
      qz("Tropikal ile sidereal zodyak farkı ne üretir?", ["Aynı veri için farklı burç konumları", "Farklı doğum saatleri", "Farklı ev sayısı", "Farklı gezegenler"], 0),
    ],
    m2: [
      qz("Hava elementinin burçları hangileridir?", ["İkizler–Terazi–Kova", "Koç–Aslan–Yay", "Boğa–Başak–Oğlak", "Yengeç–Akrep–Balık"], 0),
      qz("Üç nitelik hangisidir?", ["Öncü–Sabit–Değişken", "Ateş–Toprak–Hava", "Gündüz–Gece–Alacakaranlık", "Yönetici–Yüceltilen–Düşen"], 0),
      qz("Karşıt burç çiftlerinden hangisi doğrudur?", ["Koç–Terazi", "Boğa–Yengeç", "İkizler–Aslan", "Başak–Yay"], 0),
      qz("Toprak elementi neyi temsil eder (derste)?", ["Somutlaştırma ve güvenlik", "İlham ve irade", "Düşünce ve ilişki", "Duygu ve sezgi"], 0),
      qz("'Gezegen kim, burç nasıl' formülünü bir örnekle uygula: Koç'ta Mars", ["Eylemciliğin doğrudan, atılgan biçimde ifadesi", "Düşünceyi yavaş aktarma", "Duyguyu geri çekme", "Maddeye bağlanma"], 0),
    ],
    m3: [
      qz("Haritada kaç ev vardır?", ["8", "10", "12", "14"], 2),
      qz("Açısal evler hangileridir?", ["1, 4, 7, 10", "2, 5, 8, 11", "3, 6, 9, 12", "1, 2, 3, 4"], 0),
      qz("Whole Sign ve Placidus arasındaki temel fark nedir?", ["Whole Sign her burcu tam bir ev yapar; Placidus zaman temelli ev sınırları kullanır", "Hiçbir fark yok", "Placidus 30° kullanır", "Whole Sign doğum saatini kullanmaz"], 0),
      qz("Stellium nedir?", ["Bir burç veya evde yoğunlaşmış birkaç gezegen", "İki gezegenin karşıtlığı", "Retrograd gezegen", "Açısal ev"], 0),
      qz("Dispositor zinciri neyi izler?", ["Bir gezegenin bulunduğu burcun yöneticisini ve onun yöneticisini", "Gezegenin hızını", "Evin boyutunu", "Gezegen saatini"], 0),
    ],
    m4: [
      qz("Majör açılar ve dereceleri hangi seçenekte doğru?", ["Kavuşum 0°, sekstil 60°, kare 90°, üçgen 120°, karşıt 180°", "Kavuşum 30°, kare 45°", "Sekstil 45°, üçgen 90°", "Karşıt 360°"], 0),
      qz("T-kare kalıbı nasıl oluşur?", ["İki gezegen karşıt, üçüncüsü ikisine kare", "Üç gezegen üçgen", "Dört gezegen kare", "Üç gezegen kavuşum"], 0),
      qz("Domicile (hükümranlık) ve detriment ilişkisi nedir?", ["Detriment, domicile'ın karşıt burcudur", "Aynı burçtadır", "Exaltation'a eşittir", "Fall ile aynı"], 0),
      qz("Retrograd gezegen için doğru ifade hangisidir?", ["Dünya'dan bakıldığında gezegenin gökyüzünde geri gidiyor görünmesi", "Gezegenin gerçekten geri hareket etmesi", "Her zaman kötü", "Yalnızca Mars için geçerli"], 0),
      qz("Yeni Ay'dan sonraki ilk dördün için Güneş–Ay elongasyonu yaklaşık kaçtır?", ["90°", "0°", "180°", "270°"], 0),
      qz("Dignities sistemi neyi değerlendirir?", ["Gezegenin teknik gücünü/işleyiş kapasitesini", "Gezegenin fiziksel boyutunu", "Gezegenin rengini", "Doğum saatini"], 0),
    ],
    m5: [
      qz("Merkür hangi temaları temsil eder?", ["Zihin, dil, algı", "Zaman ve sorumluluk", "Genişleme ve anlam", "Güç ve dönüşüm"], 0),
      qz("Venüs hangi temaları temsil eder?", ["Değer, ilişki, çekim", "Kriz ve güç", "Yapı ve sınır", "İrade ve çatışma"], 0),
      qz("Mars için doğru anahtar sözcük hangisidir?", ["İrade, enerji, çatışma", "İnanç, genişleme", "Sınır, zaman", "İmgelem"], 0),
      qz("Jüpiter hangi temayla ilişkilidir?", ["Genişleme, anlam ve inanç", "Yoksunluk", "Yalnızca para", "Yalnızca hastalık"], 0),
      qz("Satürn için hangisi doğru bir yorum yaklaşımıdır?", ["Zaman, sınır ve sorumluluk; 'kötü gezegen' etiketi ile sınırlanmaz", "Her zaman uğursuz", "Yalnızca yaşlılık", "Yalnızca eğlence"], 0),
    ],
    m6: [
      qz("Uranüs'ün Güneş çevresindeki yaklaşık yörünge süresi nedir?", ["~84 yıl", "~29 yıl", "~165 yıl", "~248 yıl"], 0),
      qz("Plüton'un yaklaşık yörünge süresi nedir?", ["~84 yıl", "~165 yıl", "~248 yıl", "~29 yıl"], 0),
      qz("Modern astrolojide Kova'nın çağdaş yöneticisi hangi gezegendir?", ["Uranüs", "Neptün", "Plüton", "Satürn"], 0),
      qz("Neptün için hangi tema uygundur?", ["İmgelem, sınırların erimesi, belirsizlik", "Disiplin", "Hız", "Pratik hesap"], 0),
      qz("Dış gezegenlerin nesil etkisi yorumları neden sınırlıdır?", ["Aynı yıl doğan herkeste aynı burçtalar; kişiselleştirme için ev ve açılar gerekir", "Çünkü görünmezler", "Çünkü yavaşlar ve etkisiz", "Çünkü modern değil"], 0),
    ],
    m7: [
      qz("Şiron hangi yılda keşfedildi (yaklaşık)?", ["1977", "1877", "1777", "2007"], 0),
      qz("Ay düğüm ekseninin zodyakı dolaşma süresi yaklaşık nedir?", ["18,6 yıl", "7 yıl", "29,5 yıl", "84 yıl"], 0),
      qz("Karma kavramı bu derste nasıl ele alınır?", ["Astrolojik bir model olarak; bilimsel olarak doğrulanmış mekanizma olmadan", "Bilimsel yasa olarak", "Fiziksel kuvvet olarak", "Haritadan çıkarılmış kesin geçmiş hayat"], 0),
      qz("Sabit yıldız yorumlarında hangi tür orb kullanılır?", ["Dar orb", "Geniş orb", "Orb yok", "180°"], 0),
      qz("Satürn–Ay ilişkisi hangi alanı yorumlar?", ["Duygusal yapı ve güvenlik", "Para", "Kariyer", "Sağlık tahmini"], 0),
    ],
    m8: [
      qz("Bailey çizgisinde yedi ışın neyi anlatır?", ["Kozmik enerji niteliklerini (Teosofik bir model)", "Gökkuşağı renkleri", "Haritadaki yedi gezegeni", "Haftanın günlerini"], 0),
      qz("Ezoterik yöneticilikler klasik yöneticilikleri nasıl etkiler?", ["Yerine geçmez; ikinci katman olarak eklenir", "Tamamen siler", "Yalnızca ev yöneticilerini değiştirir", "Hiçbir etkisi yok"], 0),
      qz("Üç evrimsel haç hangisi değildir?", ["Gündüz Haçı", "Değişken Haç", "Sabit Haç", "Öncü Haç"], 0),
      qz("Bailey sistemi kaynakta Koç'un ezoterik yöneticisi olarak hangi gezegeni verir?", ["Merkür", "Mars", "Venüs", "Güneş"], 0),
      qz("Bu modülde ezoterik/okült iddialar bilimsel olarak ne durumdadır?", ["Doğrulanmış kabul edilmez; öğreti olarak sunulur", "Kanıtlanmıştır", "Test edilmiştir ve tutmuştur", "Tıbbi ilkedir"], 0),
    ],
    m9: [
      qz("Kaynak metnin okült modelinde Ay, Hayat Ağacı'nda hangi Sephira ile ilişkilendirilir?", ["Yesod", "Kether", "Tiphareth", "Geburah"], 0),
      qz("Gezegen saati 60 dakika mıdır?", ["Hayır; gün doğumu–batımı arası 12'ye bölünür", "Evet", "Yalnızca gece", "Yalnızca Pazar"], 0),
      qz("Chaldean sırası hangisidir?", ["Satürn, Jüpiter, Mars, Güneş, Venüs, Merkür, Ay", "Güneş, Ay, Mars, Merkür, Jüpiter, Venüs, Satürn", "Ay, Merkür, Venüs, Güneş, Mars, Jüpiter, Satürn", "Alfabetik"], 0),
      qz("Pazartesi gününün ilk gezegen saati hangi gezegene aittir?", ["Ay", "Mars", "Satürn", "Güneş"], 0),
      qz("Ay konakları için doğru ifade hangisi?", ["Farklı geleneklerde farklı sayıda ve adda bölümler vardır (28, 27 vb.)", "Tüm kültürlerde 28 ve aynıdır", "Yalnızca Çin'de vardır", "Gezegen saati ile aynıdır"], 0),
    ],
    m10: [
      qz("'Yukarıda ne varsa aşağıda da' ilkesi bu bağlamda ne anlatır?", ["Sembolik analoji (makrokozmos–mikrokozmos)", "Bilimsel fiziksel nedensellik", "Yerçekimi", "Takvim"], 0),
      qz("Correspondence sistemi nedir?", ["Gezegen–metal–renk–bitki–Sephira gibi karşılık tabloları", "Mektuplaşma", "Yorumlar arası çatışma", "Efemeris"], 0),
      qz("Hayat Ağacı'nda Satürn hangi Sephira ile (GD) ilişkilendirilir?", ["Binah", "Chesed", "Hod", "Malkuth"], 0),
      qz("Eleksiyon astrolojisinin amacı nedir?", ["Bir eylemin başlangıcı için uygun zamanı seçmek", "Doğum saatini düzeltmek", "Ev sistemini belirlemek", "Gezegen hızını ölçmek"], 0),
      qz("Altın Şafak karşılık tablosunda Ay hangi Sephira ile ilişkilendirilir?", ["Yesod", "Binah", "Geburah", "Kether"], 0),
    ],
    m11: [
      qz("Schulman'ın karmik astrolojisi hangi gösterge etrafında yoğunlaşır?", ["Ay düğümleri ve ilgili göstergeler", "Yalnızca Güneş", "Yalnızca Merkür", "Yalnızca Mars"], 0),
      qz("Karmik hikâye kurarken en önemli kural nedir?", ["Hipotez olarak sunmak, kanıtlanmış gerçek gibi sunmamak", "Kesin geçmiş hayat iddiası", "Başkasına tahmin yürütmek", "Tarihsel kayıtları reddetmek"], 0),
      qz("12. ev genelde hangi temayla ilişkilendirilir?", ["Kapanışlar, bilinçdışı, gizli olan", "Para", "Kardeşler", "Kariyer"], 0),
      qz("Bailey'nin Esoteric Astrology'si hangi eserler dizisinin parçasıdır?", ["A Treatise on the Seven Rays", "Yeni Ahit", "Corpus Hermeticum", "Zohar"], 0),
      qz("Batı astrolojisinde Kuzey Ay Düğümü'nün geleneksel Latince adı nedir?", ["Caput Draconis (Ejderhanın Başı)", "Cauda Pavonis", "Pars Fortunae", "Medium Coeli"], 0),
    ],
    m12: [
      qz("Natal haritayı baştan sona okuma sırası hangi yaklaşıma uygundur?", ["Veri/ev sistemi → ışıklar → denge → yöneticiler → açılar → zamanlama → sentez", "Önce sadece Güneş burcu", "Yalnızca açılar", "Rastgele"], 0),
      qz("Bir yorumun 'aşırı yorum' olup olmadığını nasıl sınarsın?", ["Dayanak göstergeleri ve alternatif açıklamaları kontrol ederek", "Daha heyecanlı yazarak", "Daha uzun yazarak", "Başkasına sorarak"], 0),
      qz("Final sentezinde klasik ve ezoterik katmanların sırası nedir?", ["Önce klasik, sonra ezoterik ek katman", "Önce ezoterik", "Sadece ezoterik", "Fark etmez"], 0),
      qz("Harita yorumunda birbiriyle çelişen göstergelerle karşılaşırsan ne yaparsın?", ["İkisini de not edip gerilimi açıkça belirtirim; tek yönlü kesin hüküm vermem", "Birini yok sayarım", "Daha uzun bir metin yazarım", "Haritayı değiştiririm"], 0),
      qz("Okuma sonunda 'sentez' neden yazılır?", ["Dağınık göstergeleri birkaç ana tema altında toplamak için", "Gezegen sayısını artırmak için", "Süslemek için", "Zorunlu bir kural olduğu için"], 0),
    ],
    w1: [
      qz("Sinodik ay ortalama kaç gündür?", ["29,53", "27,32", "30,44", "28,00"], 0),
      qz("Elongasyon 180° ise Ay evresi nedir?", ["Dolunay", "Yeni Ay", "İlk dördün", "Son dördün"], 0),
      qz("VOC Ay'ın geleneksel yorumu nedir?", ["Yeni iş başlatmak için uygun olmayan 'boşta' zaman", "En güçlü zaman", "Tutulma", "Retrograd"], 0),
      qz("Gündüz gezegen saati süresi nasıl hesaplanır?", ["(gün batımı − gün doğumu) / 12", "60 dakika", "(gece süresi) / 24", "Sabit"], 0),
      qz("Saat sırası Satürn'den sonra hangisidir?", ["Jüpiter", "Ay", "Mars", "Güneş"], 0),
      qz("Saros döngüsü yaklaşık ne kadardır?", ["18 yıl 11 gün", "29 yıl", "84 yıl", "1 yıl"], 0),
      qz("Eleksiyon için doğru bir uyarı hangisidir?", ["Pratik koşulların yerini tutmaz; etkisi kanıtlanmış değildir", "Kesin başarı sağlar", "Hiç gerekmez", "Sadece Pazar yapılır"], 0),
    ],
    w2: [
      qz("İkincil ilerletmede ilke nedir?", ["Bir gün = bir yıl", "Bir saat = bir yıl", "Bir ay = bir yıl", "Bir yıl = bir gün"], 0),
      qz("Satürn dönüşü yaklaşık hangi yaşlarda gerçekleşir?", ["29–30", "12", "84", "7"], 0),
      qz("Horary astrolojisinin klasik kaynağı hangisidir?", ["William Lilly — Christian Astrology (1647)", "Ptolemy — Almagest", "Jung — Psychology and Alchemy", "Crowley — 777"], 0),
      qz("Yıllık profeksiyonda 0 yaş hangi eve karşılık gelir?", ["1. ev", "7. ev", "10. ev", "12. ev"], 0),
      qz("Jyotish'te hangi zodyak kullanılır?", ["Sideral", "Tropikal", "Karma", "Hiçbiri"], 0),
      qz("Sinastride en önemli etik ilke nedir?", ["İzin ve sonuçları belirleyici yapmama", "Başkasına sonuç bildirmek", "Karşı tarafın verisini paylaşmak", "Kesin 'uyumlu/uyumsuz' kararı"], 0),
    ],
  },
  notIncluded: `## Bu modülde bilinçli olarak eklenmeyenler ve nedenleri

**Yöntem:** 49 derslik çekirdek kitap (yüklediğin dosya) olduğu gibi kullanıldı; ek atölye dersleri doğrulanabilir astronomi/tarih bilgisi ve **gelenek olarak** sunulan yorumlardan oluşur. Astrolojinin yorum iddiaları bilimsel olarak doğrulanmış sayılmadı; ders metinleri bunu belirtir.

### Eklenmeyenler
- **Astro-tıp ve diyet takvimleri** (Ay takvimleri webinarı: "burçlar ve beden bölümleri", "besinler ve diyetler", "şifa takvimi") — **Neden:** Sağlık/şifa iddialarının klinik kanıtı yok; yanlış yönlendirme riski. Kaynak, tarihsel/kültürel ilgi için kütüphanede duruyor.
- **Ay döngüsünün ruh hali/doğum/ekim üzerindeki gerçek etkisi iddiaları** — **Neden:** Kontrollü çalışmalarda tutarlı kanıt yok; ders bunu kişisel gözlem deneyi olarak çerçeveledi.
- **Homeopatik anayasa ve element–hastalık eşleşmeleri** (*Dört Astrolojik Element ve Homeopatik Anayasalar*) — **Neden:** Tıbbi iddia; bağımsız kanıt yok.
- **Kesin kader/olay tahminleri** (tutulma sonuçları, transit "olacaklar") — **Neden:** Tahmin gücü gösterilmemiş; yorum yöntemleri öğretildi, kehanet iddiası edilmedi.
- **Karmik/geçmiş yaşam iddiaları** (kesin hikâyeler) — **Neden:** Doğrulama imkânı yok; yalnızca hipotez/model olarak (md kitabındaki çerçeveyle) ele alındı.
- **Crowley'in astrolojik yazılarının içeriği** — **Neden:** Yüklenen PDF'nin (250 s.) içeriği bu çalışmada doğrulanmadı; kütüphanede duruyor.
- **Planetary Magick (661 s.) ve Aysel Öztürk, *Temel Astrolojik Yapı*** — **Neden:** İçerikleri satır satır doğrulanmadı; harita hesaplama için Öztürk'ün kitabı pratik kaynak olarak önerilir, ders metnine alıntı yapılmadı.

### Henüz doğrulanmayan (genel alan bilgisi) başlıklar
Bazı atölye dersleri (VOC kuralları, horary, Helenistik teknikler, Jyotish özeti, transit/ilerletme) standart astroloji/astronomi bilgisini özetler; bu çalışmada web ile ayrıca doğrulanmadı. Bu durum ilgili derslerin "Doğrulama notu"nda belirtildi. Doğrulanan başlıklar: gezegen saatleri sırası ve kuralları (Wikipedia/Renaissance Astrology), sinodik ay ve düğüm döngüsü astronomi bilgileri.

*Bu notları aşağıdan düzenleyebilirsin.*`,
};
