import type { ModuleContent } from "./types";

type Bodies = ModuleContent["bodies"];

// Bu dosya, kaynaklarda (Make, Instructables, CandleScience, Candle Shack, Craftybase,
// Michaels, Dodson Designs, Tandy, We All Sew) tutarlı biçimde geçen genel pratikleri özetler.
// Kesin oran/süre/sıcaklık değerleri ÜRETİCİ TALİMATINA bağlıdır; burada sabit değer verilmez.

export const craftsBodies: Bodies = {
  /* ---------------- BETON MUM ---------------- */
  "b-guvenlik": {
    body: `## Neden önce güvenlik?

Kuru çimento ve beton tozu **solunum, göz ve cilt** için tahriş edicidir; ıslak çimento da cildi yakabilir (alkalidir). Mum üretimi ise **yanık ve yangın** riski taşır. İki iş bir arada yapıldığında risk toplanır.

## Kontrol listesi

| Alan | Önlem |
|---|---|
| Toz | Toz maskesi (FFP2/FFP3 sınıfı), gözlük, açık alanda veya iyi havalanan yerde karıştırma |
| Cilt | Nitril/kauçuk eldiven; ıslak karışım ciltte kalırsa bol suyla yıka |
| Atık su | Çimentolu suyu lavaboya dökme (tıkanıklık); kabı kovaya silip bekleterek kuruyan katıyı çöpe at |
| Mum | Çift cidarlı ısıtma (benmari); doğrudan alevde ısıtma yok; yağ yangını için kapak/söndürücü hazır |
| Zemin | Tezgâhı örtüyle koru; kayganlık ve sıçrama riskine karşı düzenli ol |
| Çocuk/hayvan | Atölye alanı erişilemez olsun |

## Alıştırma
Kendi atölyen için 1 sayfalık kontrol listesi yaz: havalandırma, söndürücü yeri, eldiven/maske stoğu, atık yönetimi. Kullanacağın çimentonun **güvenlik bilgi formunu (SDS/MSDS)** üreticiden bul ve oku.`,
    verification: `**Kaynak:** [Make: Concrete Candleholder](https://makezine.com/article/craft/make-projects-concrete-candleholder/), [Instructables — Cement Candle Holders](https://www.instructables.com/How-to-Make-Cement-Candle-Holders). Maske/eldiven önerisi bu kaynaklarda ve genel iş güvenliği pratiğinde yaygındır. Bölgendeki kesin yasal/iş güvenliği gereklilikleri için yerel mevzuata bak.`,
  },
  "b-malzeme": {
    body: `## Malzeme seçimi

- **İnce taneli çimento bazlı karışımlar** dekoratif döküm için tercih edilir; iri kum/çakıl küçük kaplarda pürüz ve zayıf nokta yaratır.
- **Karışım/su oranı** ürünün **etiketine** göre belirlenir. Eğitim kaynakları farklı oranlar önerir; bu yüzden tek bir "doğru oran" yazmıyorum (bkz. "Eklenmeyenler").
- **Pigment**: Çimento bazlı karışıma uygun toz/sıvı pigmentler; her partide aynı oran ve aynı karıştırma süresi renk tutarlılığı için önemlidir.
- **Katkılar** (akışkanlaştırıcı vb.): Etkisi ürüne özgüdür; küçük numunede dene.

## Numune plakası yöntemi

Gerçek ürüne geçmeden **küçük plakalar** dök: farklı su oranı, pigment miktarı, ayırıcı. Her plakayı etiketle (tarih, oran, notlar) ve kuruyunca karşılaştır.

## Alıştırma
3 farklı su oranıyla numune plakası dök; yüzey sertliği, gözeneklilik ve renk farkını tabloya yaz. **Hangi oranın en iyi olduğu üreticinin aralığı içinde senin gözleminle belirlenir.**`,
    verification: `**Kaynak:** [Instructables — Concrete Tea Light Holder](https://www.instructables.com/DIY-Concrete-Tea-Light-Candle-Holder/), [Make](https://makezine.com/article/craft/make-projects-concrete-candleholder/). Kaynaklar farklı karışım oranları verir; bu nedenle sabit oran yazılmadı.`,
  },
  "b-kalip": {
    body: `## Kalıp seçenekleri

| Kalıp | Artı | Eksi |
|---|---|---|
| Plastik kap / şişe | Ucuz, bulması kolay | Kalıptan çıkarma bazen kalıbı keser |
| PVC boru (dış) + iç kalıp | Düzgün silindir | İç kalıp merkezleme gerekir |
| Silikon kalıp | Tekrar kullanılabilir, kolay çıkış | Pahalı olabilir, şekli esner |
| 3B baskı kalıp | Özgün geometri | Yüzey çizgileri betona geçer |

## Ayırıcı

Beton kalıba yapışabilir; **kalıp ayırıcı** veya ince bir yağ/pişirme spreyi tabakası çıkışı kolaylaştırır. Fazla sürme, yüzeyde leke ve kabarcık bırakabilir.

## İç kalıp ve duvar kalınlığı

İç kalıp (mumun duracağı boşluğu oluşturur) **merkezde** durmalı; duvar kalınlığı eşit olmazsa ince kısım çatlar. Mum için gerekli boşluk hacmini önceden hesapla.

## Alıştırma
2 kalıp tasarla (silindir, geometrik). Dış çap, iç çap, duvar kalınlığı ve yükseklik ölçülerini çizip tabloya yaz.`,
    verification: `**Kaynak:** [Make](https://makezine.com/article/craft/make-projects-concrete-candleholder/), [Instructables](https://www.instructables.com/How-to-Make-Cement-Candle-Holders). Belirli bir ayırıcı ürün önerilmedi; ürün seçimini üretici bilgisine göre yap.`,
  },
  "b-dokum": {
    body: `## Karışım ve döküm adımları

1. Kuru karışımı ve pigmenti **önce kuru** birleştir (toz riskine karşı maske).
2. Suyu **kademeli** ekle; çok su dayanıklılığı düşürür, çok az su karışımı kuru ve zor yapar.
3. Hedef kıvam: üretici etiketinin tarif ettiği kıvam (ör. pürüzsüz, akışkan bir macun).
4. Kalıba **ince katmanlarla** doldur; her katmanda kalıbı hafifçe titreştir (vurma/silkeleme) ve hava kabarcıklarının çıkmasını bekle.
5. İç kalıbı yerleştir, merkezlemeyi kontrol et.

## Hava kabarcığı

Kabarcıklar yüzeyde delik bırakır. Titreştirme, ince karışım ve yavaş doldurma azaltır.

## Alıştırma
Aynı kalıpla 3 döküm yap; her seferinde yalnızca **bir** değişkeni değiştir (su oranı / titreştirme / ayırıcı). Sonuçları kayda geçir.`,
    verification: `**Kaynak:** [Make](https://makezine.com/article/craft/make-projects-concrete-candleholder/), [Instructables](https://www.instructables.com/DIY-Concrete-Tea-Light-Candle-Holder/). Bu adımlar kaynaklarda ortak geçen genel sıradır; kesin su oranı ve kıvam ürüne göre değişir.`,
  },
  "b-kurleme": {
    body: `## Kürleme

Çimento **kuruyarak değil, su ile kimyasal tepkimeyle** sertleşir. Çok hızlı kuruma çatlağa yol açar; bu yüzden nem kaybını yavaşlatmak (örtü, plastik) yaygın bir pratiktir.

- **Kalıptan çıkarma**: Kaynaklarda çoğunlukla ~1–2 gün civarı geçer; **kesin süre ürüne ve ortam sıcaklığına bağlıdır** — üretici talimatına bak.
- **Tam kürleme/kuruma**: Daha uzun sürer. Beton gözenekli olduğundan, mum dökmeden önce **tamamen kuru** olmalı.
- **Kuruluk testi**: Aynı parçayı birkaç gün üst üste tart; ağırlık sabitlenince nem çıkışı bitmiştir.

## Alıştırma
Her partiyi tarih ve ağırlıkla etiketle; 3–7 gün boyunca ağırlığı kaydet. Ağırlık kaybının durduğu gün senin için "kuru" kriteridir.`,
    verification: `**Kaynak:** [Make](https://makezine.com/article/craft/make-projects-concrete-candleholder/). Süreler kaynakta genel aralıktır; "kuruluk için ağırlık testi" bu eğitimde önerilen **kendi ölçüm yöntemindir**, standart bir tavsiye olarak sunulmamıştır.`,
  },
  "b-yuzey": {
    body: `## Yüzey bitirme

1. **Zımpara**: Kaba → ince gren sırasıyla; ıslak zımpara tozu azaltır.
2. **Renk/koruma**: Dış yüzey için su bazlı mat vernik veya mum/sealer.
3. **İç yüzey**: Mumun temas edeceği yüzeye, **ısıya ve mumla temasa uygun** olduğunu üreticinin belirttiği bir contalayıcı kullan.

## Neden iç yüzey kaplanır?

Beton gözenekli; mum veya yağ gözeneklere işleyip dış yüzeyde leke yapabilir. Kaplama bunu azaltır. Kaplamanın mumla uyumu ürüne bağlıdır.

## Alıştırma
3 farklı iç yüzey (kaplamasız, contalayıcı, çift kat) ile mum dök; 24 saat sonra dış yüzeyde yağ lekesi/sızdırma var mı gözle ve fotoğrafla.`,
    verification: `**Kaynak:** [Instructables — Concrete Tea Light Holder](https://www.instructables.com/DIY-Concrete-Tea-Light-Candle-Holder/). Belirli bir contalayıcı markasının mumla uyumunu doğrulayamadım; bu nedenle marka önerilmedi.`,
  },
  "b-taban": {
    body: `## Taban

Beton kaplar **ağırdır ve pürüzlüdür**; masaya çizik bırakabilir.

- Tabana **keçe**, mantar veya silikon pul yapıştır.
- Tabanı düz zımparala; kap sallanmasın.
- Pulu yerleştirirken kapı ters çevirip yapıştırıcının kuruma süresini bekle.

## Alıştırma
Aynı kaba 3 tür pul dene (keçe, mantar, silikon); kayma ve çizilme açısından masada test et.`,
    verification: `Bu ders genel atölye pratiğidir; belirli bir kaynak iddiası içermez.`,
  },
  "b-wax": {
    body: `## Mum türleri

| Mum | Özellik |
|---|---|
| Parafin | Petrol türevi; farklı erime noktası/sertlik sınıfları; koku taşıma yeteneği genelde iyi |
| Soya | Bitkisel; kaplı mum için yaygın; frosting ve ıslak nokta sorunları görülebilir |
| Stearin | Sert/yağ asidi; parafine eklenince sertlik ve parlaklık artabilir |
| Karışımlar | Üretici tarafından tasarlanmış karışımlar; kaplı mum veya sütun için farklı ürünler |

## Tedarikçi verisi

Her mumun **erime noktası, önerilen döküm sıcaklığı ve maksimum koku yükü** farklıdır. Bu değerleri **kullandığın ürünün teknik sayfasından** al; genel tablo değerlerine güvenme.

## Alıştırma
Kullanacağın mumun teknik sayfasını bul; erime noktası, döküm sıcaklığı ve önerilen koku yüzdesini bir tabloya yaz. Bulamadığın alanı "bilinmiyor" olarak bırak ve tedarikçiye sor.`,
    verification: `**Kaynak:** [CandleScience — Wax Guide](https://www.candlescience.com/learning/wax-guide/). Sayısal değerler ürüne göre değiştiği için derse yazılmadı.`,
  },
  "b-fitil": {
    body: `## Fitil seçimi

Fitil boyutu **kap çapına, mum türüne ve koku/boya yüküne** göre seçilir. Tek bir doğru fitil yoktur; tedarikçinin fitil tablosu **başlangıç noktasıdır**, doğruluğu **yanma testi** gösterir.

## Basit yanma testi (özet)

1. Kabı ve mumu hazırla, partiyi etiketle.
2. Fitili kısalt, mumu yak ve belli aralıklarla (örn. saatte bir) gözle: alev boyu, erime havuzunun çapı/derinliği, mantarlaşma, is, kap dış sıcaklığı.
3. Havuz kenarlara ulaşıyorsa fitil yeterli olabilir; çok küçük havuz → tünelleme riski; çok büyük alev/sıcak kap → fitil fazla büyük olabilir.
4. Sonuçları kaydet; fitili bir boy küçült/büyüt ve tekrarla.

**Güvenlik:** Yanma testini gözetimsiz bırakma, yanıcı olmayan yüzeyde yap.

## Alıştırma
Aynı kap ve mumla 3 fitil boyutunu yanma testine sok; sonuç tablosu hazırla.`,
    verification: `**Kaynak:** [Craftybase — Basit Mum Yanma Testi](https://craftybase.com/blog/how-to-conduct-a-simple-candle-burn-test), [Candle Shack — Container Candle Tips](https://candle-shack.com/pages/container-candle-tips-and-tricks). Bu bir **standart test** değildir (bkz. ASTM notu); yalnızca kendi ürününü ayarlamak için pratik bir yöntemdir.`,
  },
  "b-dokum-mum": {
    body: `## Isıtma ve döküm

- Mumu **çift cidarlı kapta** (benmari / mum eritme potu) ısıt; doğrudan alev kullanma.
- Renk ve koku **mum üreticisinin önerdiği sıcaklıkta** eklenir; karıştırma süresi sabit olsun.
- Kabı döküm öncesi hafifçe ısıtmak, mum–kap ayrılmasını (ıslak nokta) azaltabilir.
- Döküm sıcaklığı, soğuma hızı ve ortam sıcaklığı yüzey görünümünü etkiler.

## Kayıt tablosu

| Tarih | Mum tipi | Döküm °C | Kap sıcaklığı | Koku % | Fitil | Not |
|---|---|---|---|---|---|---|

## Alıştırma
5 döküm yap; her birinin kaydını tabloya gir. Yalnızca bir değişkeni değiştirdiğinde sonuç farkını ayırt edersin.`,
    verification: `**Kaynak:** [Candle Shack — Container Candle Tips](https://candle-shack.com/pages/container-candle-tips-and-tricks), [CandleScience — Soy Wax Troubleshooting](https://candlescience.com/wax/soy-wax-trouble-shooting-guide/). Sıcaklık değerleri ürüne göre değiştiği için sabit sayı verilmedi.`,
  },
  "b-kurleme-mum": {
    body: `## Mum kürlemesi

Mum döküldükten sonra koku ve yanma performansı bir süre **dinlendirilerek** oturur. Süre mum tipine göre değişir; kaynaklar parafin için günler, soya için yaklaşık 1–2 hafta gibi aralıklar verir, ancak **kesin süre ürüne bağlıdır**. En güvenilir yol, **aynı mumu farklı gün sayılarında** yakıp koku performansını kendin karşılaştırmaktır.

## Etiketleme

Etikette genelde şunlar bulunur: ürün adı, içerik/koku, uyarılar (gözetimsiz yakma, çocuk/hayvan, yanıcı yüzey), yanma süresi, parti no. **Zorunlu içerik ülkeye göre değişir** (bkz. "Etiket, güvenlik ve mevzuat").

## Alıştırma
Aynı partiden 3 mum: 3, 7 ve 14 gün dinlendir; koku yoğunluğunu kör testle (başkasına yaktır) karşılaştır.`,
    verification: `**Kaynak:** [CandleScience — Soy Wax Troubleshooting](https://candlescience.com/wax/soy-wax-trouble-shooting-guide/). Kürleme süreleri üreticiye göre farklıdır; kesin bir süre iddiası yapılmadı.`,
  },
  "b-sorun": {
    body: `## Sık mum sorunları

| Belirti | Olası neden | Dene |
|---|---|---|
| **Frosting** (beyaz kristal görünüm, özellikle bitkisel mumlarda) | Düşük döküm sıcaklığı, hızlı veya düzensiz soğuma | Döküm sıcaklığını/soğutmayı ayarla; estetik bir sorun |
| **Islak nokta** (mum–kap ayrılması) | Soğuk kap, hızlı soğuma | Kabı ısıt, ortamı sabit tut |
| **Tünelleme** | İlk yakışta yetersiz erime havuzu, küçük fitil | İlk yakışta havuzun kenarlara ulaşmasını bekle; fitili büyüt |
| **Çökme/çukur** | Soğurken büzülme | İkinci "ısıl düzeltme" dökümü |
| **Mantarlaşma / is** | Fitil çok büyük/uzun | Fitili kısalt veya küçült |

## Yöntem
Bir sorun gördüğünde **tek değişken** değiştir, sonucu kaydet. Birden fazla şeyi aynı anda değiştirirsen nedenini bulamazsın.

## Alıştırma
5 sorunun her biri için "belirti → olası neden → denediğin değişiklik → sonuç" tablosu doldur.`,
    verification: `**Kaynak:** [CandleScience — Soy Wax Troubleshooting](https://candlescience.com/wax/soy-wax-trouble-shooting-guide/), [Candle Shack](https://candle-shack.com/pages/container-candle-tips-and-tricks). Çözümler üretici ve atölyeler arasında farklılık gösterir; hepsi deneme gerektirir.`,
  },
  "b-concrete-sorun": {
    body: `## Beton hataları

| Belirti | Olası neden | Dene |
|---|---|---|
| **Çatlak** | Çok hızlı kuruma, fazla su, ince duvar | Nemli/örtülü kürleme, duvarı kalınlaştır, su oranını düşür |
| **Toz bırakma** | Yetersiz/yok yüzey kaplaması, zayıf karışım | Contalayıcı uygula, karışımı gözden geçir |
| **Renk lekesi** | Eşit olmayan pigment dağılımı, nem farkı | Pigmenti kuru karışıma iyice kat, kürlemeyi eşitle |
| **Hava kabarcığı** | Yetersiz titreştirme, kalın karışım | Daha akışkan karışım, ince katmanlar, titreştirme |
| **Kalıba yapışma** | Ayırıcı eksik | Ayırıcıyı ince ve eşit sür |

## Üretim kaydı neden önemli?
Hatayı yalnızca partinin reçetesi ve kürleme kaydı varsa nedenine bağlayabilirsin.

## Alıştırma
Bilinçli olarak 3 hata üret (çok su, ayırıcı yok, hızlı kuruma) ve belirtileri fotoğrafla.`,
    verification: `**Kaynak:** [Instructables](https://www.instructables.com/How-to-Make-Cement-Candle-Holders), [Make](https://makezine.com/article/craft/make-projects-concrete-candleholder/) ve genel beton uygulaması. Nedenler genel eğilimlerdir; tek bir hatanın tek bir sebebi olmayabilir.`,
  },
  "b-maliyet": {
    body: `## Birim maliyet

Her ürün için kalemleri ekle: çimento, pigment, kalıp aşınması, mum, fitil, koku, boya, ambalaj, etiket, enerji ve **işçilik süresi × saat ücreti**. **Fire**'yi (başarısız dökümler) ayrıca ekle.

## Bu sitede
**Maliyet** sayfasına ürün olarak kaydet; kalemleri gir. Kâr oranı ve (varsa) platform komisyonuna göre satış fiyatı çıkar.

## Fiyat stratejisi
Üç kâr oranında satış fiyatı çıkar; benzer ürünlerin fiyatıyla karşılaştır ve **işçilik dahil** gerçek saatlik kazancını hesapla.

## Alıştırma
2 modelin maliyetini kaydet; fireyi %10 ve %25 varsayımıyla karşılaştır.`,
    verification: `Bu ders hesaplama yöntemidir; dış kaynak iddiası içermez. [Maliyet sayfası](/maliyet) bu sitenin aracıdır.`,
  },
  "b-yasal": {
    body: `## Etiket ve güvenlik

Mum için yaygın referans standartlar: **ASTM F2058** (mum etiketi/uyarıları) ve **ASTM F2417** (kaplı mumda yangın güvenliği) — bunlar ABD kaynaklıdır ve **ücretlidir**. Bu standartların içeriğini burada özetlemiyorum (bkz. "Eklenmeyenler").

## Türkiye için
Satış yapacaksan **ürün güvenliği ve etiketleme** düzenlemelerini (ilgili bakanlık, standart kurumu, e-ticaret platformlarının kuralları) **resmi kaynaklardan** kontrol et.

## Genel iyi uygulama
- Uyarılar: gözetimsiz yakma, çocuk/hayvan, yanıcı yüzeyden uzak tut.
- Parti numarası ve üretim tarihi.
- Test kaydı (yanma testi) dosyada dursun.

## Alıştırma
Satmayı düşündüğün ürün için bir etiket taslağı hazırla ve "hangi yasal gereklilik eksik olabilir?" listesi çıkar; bu listeyi bir uzmana/resmi kaynağa danışarak doğrula.`,
    verification: `**Kaynak:** [ANSI — Candle Safety Standards](https://webstore.ansi.org/industry/safety-standards/consumer-products/candles). Standartların **adı** doğrulanabilir; **içeriği ücretli olduğundan okunmadı**. Türkiye mevzuatı doğrulanamadı → bilinçli olarak yazılmadı.`,
  },
  "b-fotograf": {
    body: `## Ürün fotoğrafı
- Yumuşak, dolaylı ışık; sert gölgeden kaçın.
- Sade arka plan; ölçü için yanına tanıdık bir nesne koy.
- Yakın çekimde doku (beton), geniş çekimde kullanım görüntüsü.

## Ambalaj
Beton ağırdır ve **kırılgandır**: kâğıt dolgu/kolilerle sarsıntı ve köşe darbesine karşı koru; mumun sıcakta erimesini düşün (yaz kargosu).

## Ürün kartı
Boyut, ağırlık, yanma süresi, bakım ve güvenlik uyarıları.

## Alıştırma
3 ürün için aynı arka planla fotoğraf seti çek ve bir ürün kartı yaz.`,
    verification: `Bu ders genel pratiktir; dış kaynak iddiası içermez.`,
  },

  /* ---------------- DERİ DEFTER KILIFI ---------------- */
  "d-deri": {
    body: `## Deri türleri

| Tür | Özellik | Kullanım |
|---|---|---|
| **Bitkisel tabaklı** | Sert, işlenebilir; ıslatılıp şekillendirilir, damga alır, zamanla patine kazanır | Deri defter kapağı için yaygın |
| **Krom tabaklı** | Yumuşak, esnek | Çanta/giysi; damgalama/şekillendirmeye genelde uygun değil |

## Kalınlık
Kapak için pratikte **orta kalınlık** sık kullanılır (kaynaklarda genelde 1,2–2,0 mm bandı); çok kalın deri katlamayı ve dikişi zorlaştırır.

## Seçim
Yüzey, damar izi ve izin verilen fireyi gözle kontrol et. Tedarikçiden kalınlık ve tabaklama bilgisini sor.

## Alıştırma
3 farklı deri parçasında kesim, kenar, boyama, ıslatma ve bükülme farkını karşılaştır.`,
    verification: `**Kaynak:** [Tandy Leather](https://tandyleather.com), [Michaels — Leather Journal Cover](https://www.michaels.com/class/vod/leather-journal-cover-1081916843). Kalınlık bandı kaynaklarda **genel bir aralık**tır, bir standart değildir.`,
  },
  "d-alet": {
    body: `## Temel alet seti

- Kesim matı, döner veya maket bıçağı, **metal cetvel**
- **Pricking iron / delgi** (dikiş delikleri) ve çekiç (veya maul)
- 2 iğne, **mumlu iplik**
- **Burnisher** (kenar parlatıcı), zımpara
- **Skiver** (deri inceltme)
- Kenar boyası (isteğe bağlı)

## Başlangıç
Küçük bir setle başla; keskin bıçak ve düzgün hizalanmış delgi, pahalı alet çokluğundan önemlidir.

## Alıştırma
Alet listeni ve toplam bütçeni çıkar; "şimdi şart / sonra" olarak ikiye böl.`,
    verification: `**Kaynak:** [Michaels sınıfı](https://www.michaels.com/class/vod/leather-journal-cover-1081916843), [Dodson Designs](https://dodson-designs.com/?p=1424). Aletler kaynaklarda ortak geçenlerdir.`,
  },
  "d-olcu": {
    body: `## Ölçü alma

1. Defterin **yükseklik, genişlik ve kalınlığını** ölç.
2. Kapağın **açık ölçüsü** ≈ iki kapak genişliği + sırt kalınlığı + katlama/taşma payı.
3. Önce **karton veya ince plastikten prototip** yap; kapanma ve esnekliği dene — deriyi kesmeden önce.

## Kalıp
Kalıba **dikiş payını** ve varsa ek parçaları (kalem tutacağı, kart cebi) işle.

## Alıştırma
A5 ve Field Notes boyutu için kâğıt prototip yap; kapanma payını ve defterin giriş-çıkışını kontrol et.`,
    verification: `**Kaynak:** [Dodson Designs — Leather Journal Tutorial](https://dodson-designs.com/?p=1424), [Instructables — Field Notes Leather Cover](https://instructables.com/Field-Notes-Leather-Cover). Pay değerleri sabit verilmedi; defter kalınlığına göre değişir.`,
  },
  "d-tasarim": {
    body: `## Kapak tasarımı

- **Kalem tutacağı**, **kart cebi**, **elastik bağlantı**: her ek parça kalınlığı ve dikiş sırasını etkiler.
- Dikiş sırasını planla: içte kalan parçalar önce, dış kapak sonra.
- Fazla katman → şişkin kapak ve zor delme.

## Alıştırma
Bir kapak için tek sayfalık çizim yap: parçalar, kat sayısı, dikiş çizgileri, dikiş sırası.`,
    verification: `**Kaynak:** [Tandy Blog — Trifold Journal Cover](https://tandyleather.com/blogs/tandy-blog/gift-idea-trifold-leather-journal-cover-with-theoldpinkhouse), [Instructables](https://instructables.com/Field-Notes-Leather-Cover).`,
  },
  "d-kesim": {
    body: `## Kesim

- **Keskin bıçak**, metal cetvel, **tek hamle**; kör bıçak kenarı yırtar.
- Köşeleri **şablonla yuvarla**.
- **Skiving**: Katlama ve dikiş olan bölgelerde deriyi incelt; kenarın kalın kalmasını önler.
- Kesimden önce **hurda deriyle** dene.

## Alıştırma
Aynı parçayı 10 kez kes; kenar dikliğini ve boyut sapmasını ölç.`,
    verification: `**Kaynak:** [We All Sew](https://weallsew.com/how-to-make-a-leather-notebook-cover/), [Michaels sınıfı](https://www.michaels.com/class/vod/leather-journal-cover-1081916843).`,
  },
  "d-boya": {
    body: `## Boyama ve damga

- Damgalamadan önce deriyi **hafifçe nemlendir** (bitkisel tabaklı deri).
- Boyayı **deneme parçasında** test et; renk deride farklı görünür.
- İnce katmanlar halinde uygula, kurumasını bekle.
- **Koruyucu** (balmumu bazlı veya uygun bir bitirici) uygula.

## Alıştırma
Aynı boyayı 3 farklı nem düzeyinde dene (kuru, hafif nemli, ıslak) ve sonucu fotoğrafla.`,
    verification: `**Kaynak:** [Michaels sınıfı](https://www.michaels.com/class/vod/leather-journal-cover-1081916843). Ürün/marka önerisi yapılmadı; boya ve bitirici ürün üreticisinin talimatına uy.`,
  },
  "d-delik": {
    body: `## Dikiş çizgisi

1. Kenardan **sabit mesafede** çizgi çiz (genelde birkaç milimetre; derinin kalınlığına göre).
2. **Pricking iron'u** dik tut; her sırada delikler **hizalı** ve adım **sabit** olmalı.
3. Köşelerde adımı yeniden ayarla (dönüşü kapatacak şekilde).

## Alıştırma
Hurda deride 20 cm'lik bir sıra delik aç; adım aralıklarını cetvelle ölç ve sapmayı kaydet.`,
    verification: `**Kaynak:** [Dodson Designs](https://dodson-designs.com/?p=1424), [Instructables — Leather Stitching](https://www.instructables.com/Leather-Stitching-How-To-Three-Ways/).`,
  },
  "d-saddle": {
    body: `## Saddle stitch

Her iki uca birer **iğne** takılır; aynı delikten **karşılıklı** geçilir. Böylece bir iplik kopsa bile dikiş tamamen çözülmez.

## İplik boyu
Kaynaklarda genel kural: **dikiş uzunluğunun yaklaşık ≥3 katı**; kalın deride daha fazla. Kısa kalırsa ortada ipi bitirmek zorunda kalırsın.

## Kural
- Her delikte **iğne sırası aynı** olsun (üstte hep aynı iplik).
- Gerginlik **tutarlı**; fazla çekersen deri buruşur.
- Sonda **geri dikiş** ile sabitle ve fazla ipi kes.

## Alıştırma
Aynı dikişi 5 kez tekrarla; ön ve arka yüzün eşitliğini ve gerginliğini değerlendir.`,
    verification: `**Kaynak:** [Instructables — Leather Stitching: Three Ways](https://www.instructables.com/Leather-Stitching-How-To-Three-Ways/), [Instructables — Hand Stitched Notebook Cover](https://www.instructables.com/Hand-Stitched-Leather-Notebook-Cover), [Dodson Designs](https://dodson-designs.com/?p=1424). İplik boyu çarpanı kaynaklardaki **pratik kuraldır**, standart değildir.`,
  },
  "d-kenar": {
    body: `## Kenar bitirme

1. Kenarı **kademeli zımparala** (kaba → ince).
2. **Hafifçe nemlendir**.
3. **Burnisher** ile sürterek parlat/kapat.
4. İstersen **kenar boyası** uygula.

Düzgün kenar, profesyonel görünümü en çok belirleyen kısımdır.

## Alıştırma
3 yöntemi karşılaştır: yalnızca zımpara, nem+parlatma, kenar boyası; kendi standardını seç.`,
    verification: `**Kaynak:** [Instructables — Field Notes Leather Cover](https://instructables.com/Field-Notes-Leather-Cover), [Michaels sınıfı](https://www.michaels.com/class/vod/leather-journal-cover-1081916843).`,
  },
  "d-final": {
    body: `## Montaj ve kalite kontrol

- Defter **rahat girer-çıkar** mı? Kapak kapanıyor mu?
- Dikiş **kopuk/gevşek** yer var mı? Kenar **pürüzsüz** mü?
- Yüzey temiz ve lekesiz mi?

## Bakım talimatı (müşteriye)
Suyla uzun temastan kaçınma, kuru ve gölgede saklama, gerekirse uygun deri bakım ürünü. **Marka/ürün önermeden** genel bakım tarif et.

## Alıştırma
Bir "bitiş kontrol listesi" (10 madde) ve bir bakım kartı yaz.`,
    verification: `**Kaynak:** [Tandy Blog](https://tandyleather.com/blogs/tandy-blog/gift-idea-trifold-leather-journal-cover-with-theoldpinkhouse). Bakım önerisi genel pratiktir.`,
  },
  "d-maliyet": {
    body: `## Maliyet

Kalemler: **deri (dm² veya cm² × fiyat)**, iplik, hırdavat (elastik, düğme), boya/bitirici, **işçilik süresi × saat ücreti**, **fire**.

## Bu sitede
**Maliyet** sayfasında her model için ayrı ürün oluştur; kalemleri gir.

## Fire
Deri doğal bir malzeme: damar, delik, yara. Kalıp yerleşimi ve fireyi ayrıca hesaba kat.

## Alıştırma
Her model için gerçek çalışma süresini kronometreyle ölç; saat ücretini maliyete ekle.`,
    verification: `Bu ders hesaplama yöntemidir; dış kaynak iddiası içermez. [Maliyet sayfası](/maliyet) bu sitenin aracıdır.`,
  },
  "d-seri": {
    body: `## Seri üretim

En az 3 model (A5 sade, kalem tutacaklı, kart cepli). **Her model için**:
- Kalıp ve **malzeme listesi**
- **Adım adım iş akışı kartı**
- Süre ve maliyet
- Kontrol listesi

**Kişiselleştirme**: baş harf damgası gibi, süreyi ve fiyatı etkileyen seçenekleri önceden tanımla.

## Alıştırma
3 model için iş akışı kartı yaz; hangi adımın darboğaz olduğunu (süre) bul.`,
    verification: `Bu ders süreç tasarımıdır; dış kaynak iddiası içermez.`,
  },
};
