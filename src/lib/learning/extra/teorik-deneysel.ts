import { extraModule } from "./builder";
import { qz, web } from "../helpers";

/**
 * Ritüel, çağırma, şifa, lanet, tarif ve tıbbi iddialar için "teorik ve deneysel çerçeve".
 * Talimat vermez; bu iddiaların nasıl anlaşıldığını, hangi çalışmalarda sınandığını ve nasıl sınanabileceğini anlatır.
 */
export const teorikDeneyselModule = extraModule({
  id: "ek-teorik-deneysel",
  title: "Okült İddiaları Sınamak: Teorik ve Deneysel Çerçeve",
  tagline: "Ritüel, çağırma, şifa, lanet, tarif ve tıbbi iddialar — talimatsız, kanıt odaklı bir çerçeve",
  description:
    "Yüklenen kitaplarda (Goetia, Basick Magick, Ay Büyüsü, Simya kitapları, enerji/beden kitapları vb.) geçen ritüel, çağırma, şifa, lanet, tarif ve tıbbi protokol iddialarını uygulama talimatı vermeden ele alan konu modülü: bu iddialar kuramsal olarak nasıl yorumlanır, hangi çalışmalarda sınanmıştır ve kendi deneyimini kayıt altına alarak nasıl eleştirel biçimde değerlendirebilirsin.",
  source: {
    file: "İnternet kaynakları (kitap yüklemesi yok) + modüllerdeki kitaplar",
    author: "Faraday, Cannon, Rosa ve ark., Benson ve ark., Carlson, Cochrane yazarları",
    language: "İngilizce kaynaklardan Türkçe özet",
    readNote:
      "Her çalışmanın künyesi ve ana sonucu internette (özet/ikincil kaynak düzeyinde) doğrulandı; makalelerin tam metinleri satır satır okunmadı. Ritüel, çağırma, şifa, lanet, tarif ve tıbbi protokol TALİMATLARI bilerek verilmedi.",
  },
  resources: [
    web("Rosa ve ark. (1998), A Close Look at Therapeutic Touch — JAMA", "https://library.stlawu.edu/system/files/2020-12/rosa_close_look_at_therapeutic_touch.pdf"),
    web("Benson ve ark. (2006), STEP çalışması — PubMed", "https://pubmed.ncbi.nlm.nih.gov/16569567/"),
    web("Carlson (1985), A double-blind test of astrology — Nature (özet)", "https://ui.adsabs.harvard.edu/abs/1985Natur.318..419C/abstract"),
    web("Cannon (1942), \"Voodoo\" Death — AJPH yeniden basımı", "https://pmc.ncbi.nlm.nih.gov/articles/PMC1447285"),
    web("Cochrane — Placebo interventions for all clinical conditions", "https://www.cochrane.org/CD003974/placebo-interventions-all-clinical-conditions"),
    web("Wikipedia — Table-turning", "https://en.wikipedia.org/wiki/Table-turning"),
  ],
  units: [
    {
      id: "t1",
      title: "Ritüel ve Çağırma: Nasıl Yorumlanır, Nasıl Sınanır?",
      description: "Kuramsal modeller, beklenti/telkin etkileri ve kendini sınama tasarımı.",
      lessons: [
        {
          id: "te-modeller",
          title: "Ritüel deneyimini açıklayan üç model",
          summary: "Gelenek içi (gerçekçi), psikolojik (Crowley) ve beklenti/telkin açıklaması.",
          minutes: 25,
          body: `Ritüel ve çağırma metinleri bu sitedeki kitaplarda **uygulama talimatı olarak değil, inceleme konusu olarak** ele alınır. Bu ders, bu tür deneyimlerin **nasıl açıklanabileceğini** anlatır.

## 1. Gelenek içi (gerçekçi) model
Grimuarların kendi çerçevesi: ruhlar, melekler ya da cinler **dış varlıklardır** ve ritüel onlarla ilişki kurma yöntemidir. Bu, **inanç temelli** bir çerçevedir; bağımsız bir gözlemle doğrulanmış değildir. Goetia modülünde de görüldüğü gibi metinler kendi iddialarını kanıtlamaz, yalnızca ileri sürer.

## 2. Psikolojik model (Crowley'in yorumu)
Crowley, *Goetia* girişinde (1904) ritüelin **duyusal girdiler yoluyla beyin durumunu değiştirdiğini** ve "ruhların" insan beyninin parçaları olduğunu savunur (Goetia ek modülünde ayrıntısı). Bu, **kişisel bir yorumdur**; ölçülebilir bir hipotez sunmaz ve sinirbilimce doğrulanmış değildir.

## 3. Beklenti, telkin ve ideomotor açıklaması
Bir ritüelin içinde şu etkenler bir arada bulunur: karanlık ya da loş ışık, tütsü, tekrarlanan söz, uzun bekleme, güçlü beklenti. Bunların her biri **algıyı ve beden tepkisini etkileyebilir**.
- **Michael Faraday'ın 1853 masa döndürme (table-turning) incelemesi** bunun tarihsel örneğidir: Faraday, masanın hareketinin katılımcıların **farkında olmadan kullandığı kas gücünden** geldiğini, basit bir düzenekle (iki tahta ve arasındaki cam makaralar) ölçerek gösterdi; katılımcılar parmaklarının masayı ittiğini öğrenince olay genellikle sona erdi. Bu sonuç, dokunmadan hareket iddialarını açıklamaz (sınırı).
- "**İdeomotor etki**" terimi sonradan William Carpenter'a atfedilir; terimin ilk kullanım yılı kaynaklarda **1852 / 1888 olarak tutarsızdır**.

## Üç modelin karşılaştırılması
| | Gelenek içi | Crowley | Beklenti/telkin |
|---|---|---|---|
| Deneyim gerçek mi? | Evet, dışsal | Evet, zihinsel | Evet, zihinsel/bedensel |
| Sınanabilir mi? | Doğrudan değil | Kısmen (beyin etkisi) | Evet (kontrollü deney) |
| Bu sitedeki durum | Doğrulanmadı | Doğrulanmadı | En iyi desteklenen genel mekanizma (genel bilgi) |

## Çalışma
Bir kitaptaki ritüel anlatımını seç; üç modelin her biri onu nasıl açıklardı, ikişer cümleyle yaz. Hangi açıklamayı hangi veriyle ayırt ederdin?`,
          verification: `**Kaynak:** Faraday 1853: [Wikipedia — Table-turning](https://en.wikipedia.org/wiki/Table-turning), [SPR Psi Encyclopedia — Table turning](https://psi-encyclopedia.spr.ac.uk/articles/table-turning) (arama sonuçları düzeyinde; Faraday'ın düzeneği ve sonucu kaynaklarda tutarlı). Crowley yorumu Goetia ek modülünde PDF'den okundu. "İdeomotor" teriminin ilk yılı kaynaklarda tutarsız. Tabloda "beklenti/telkin en iyi desteklenen mekanizmadır" ifadesi genel bilgidir; bu derste ayrı bir sistematik derleme okunmadı.`,
        },
        {
          id: "te-sinama",
          title: "Kendi deneyimini eleştirel kaydetmek: tasarım ilkeleri",
          summary: "Hipotezi önceden yaz, kayıt tut, kör karşılaştırma, taban oranı; etik sınırlar.",
          minutes: 25,
          body: `Bir deneyimin **ne anlama geldiğini** bilmek için önce **ne olduğunu** dürüstçe kaydetmek gerekir. Bu ders bir uygulama değil, bir **kayıt ve değerlendirme çerçevesidir**.

## Beş ilke
1. **Hipotezi önceden yaz.** Deneyimden *önce* "ne olursa bunu 'etki' sayacağım?" sorusunu cümleyle yaz. Sonradan yorumlanan sonuçlar, her zaman "tuttu" gibi görünür.
2. **Taban oranını bil.** Sıradan bir olayın (örneğin bir rüya, bir telefon, bir rastlantı) kendiliğinden ne sıklıkla olduğunu bir hafta not ederek öğren.
3. **Kayıt günlüğü tut.** Tarih, koşullar (uyku, ruh hali, ortam), beklentin ve sonucu aynı gün yaz. Hatırlama, sonucu çarpıtır.
4. **Kör karşılaştırma.** Mümkünse sonucu değerlendiren kişi, hangi koşulun "gerçek" hangisinin "kontrol" olduğunu bilmesin (aşağıdaki Rosa örneği gibi).
5. **Birden çok olasılığı birlikte tut.** Aynı sonucu "dışsal etki", "beklenti" ve "rastlantı" açıklayabilir; veri bu üçünü ayırmıyorsa yargı vermemek de bir sonuçtur.

## Sınırlar (güvenlik ve etik)
- **Başka bir kişiye zarar verme, onun rızası olmadan "etki deneme" ya da korkutma içeren hiçbir tasarım** bu çerçevenin parçası değildir.
- Uykusuzluk, açlık, kaygı ya da gerçeklik algısında değişim yaşıyorsan **ruh sağlığı uzmanıyla konuşmadan** yoğun deneyimlere girişme.
- Bu modül **ritüel, çağırma veya benzeri uygulamaların adımlarını öğretmez**; çerçeve yalnızca değerlendirme içindir.

## Örnek kayıt biçimi (tablo)
| Tarih | Koşul | Önceden yazdığım ölçüt | Ne oldu | Başka açıklamalar |
|---|---|---|---|---|
| ... | ... | ... | ... | beklenti? rastlantı? |

## Çalışma
Bir hafta boyunca "taban oranı" günlüğü tut: seçtiğin bir olayın (ör. bir rüya konusunun gerçek hayatta karşılığı) kaç kez kendiliğinden olduğunu say.`,
          verification: `Bu bölüm yöntem önerisidir; olgusal iddia içermez. Kör karşılaştırma örneği için bkz. 2. ünite (Rosa ve ark., JAMA 1998). Genel yöntem ilkeleri (önceden kayıt, taban oranı) bilimsel yöntemin standart bilgisidir; bu derste ayrı bir kaynak okunmadı.`,
        },
      ],
      quiz: [
        qz("Faraday'ın 1853 masa döndürme incelemesinin ana sonucu nedir?", ["Hareketin katılımcıların farkında olmadan kullandığı kas gücünden geldiği", "Masanın elektrikle hareket ettiği", "Ruhların masayı itmesi", "Hareketin hiç olmadığı"], 0),
        qz("Faraday düzeneğinin bir sınırı nedir?", ["Dokunmadan hareket iddialarını açıklamaz", "Hiç ölçüm yapmaz", "Yalnızca gece çalışır", "Elektrik gerektirir"], 0),
        qz("Crowley'in Goetia girişindeki yorumu için doğru ifade hangisidir?", ["Ritüelin beyin durumunu değiştirdiğini savunan kişisel bir yorumdur", "Sinirbilimce kanıtlanmış bir modeldir", "Kilisenin resmî görüşüdür", "Matematiksel bir ispattır"], 0),
        qz("Kendini sınama çerçevesinde ilk ilke nedir?", ["Hipotezi deneyimden önce yazmak", "Sonucu hatırlayıp yorumlamak", "Yalnızca olumlu sonuçları kaydetmek", "Başkasını denemek"], 0),
        qz("Taban oranı neden önemlidir?", ["Bir olayın kendiliğinden ne sıklıkla olduğunu bilmeden 'etki' yargısı verilemez", "Olayı süslemek için", "Renk seçmek için", "Hiç önemi yoktur"], 0),
        qz("Bu modülün sınırı hangisidir?", ["Ritüel/çağırma adımlarını öğretmez; yalnızca değerlendirme çerçevesi verir", "Tarihten söz etmez", "Faraday'ı anlatmaz", "Yazar adı vermez"], 0),
      ],
    },
    {
      id: "t2",
      title: "Şifa, Lanet ve Tıbbi İddialar: Hangi Çalışmalar Ne Gösterdi?",
      description: "Terapötik dokunuş, uzaktan dua, plasebo, lanet/nocebo ve astroloji denemeleri.",
      lessons: [
        {
          id: "te-sifa",
          title: "Enerji şifası ve uzaktan şifa iddiaları: sınanmış örnekler",
          summary: "Rosa ve ark. 1998 (terapötik dokunuş), STEP 2006 (aracılık duası) ve plasebo derlemesi.",
          minutes: 25,
          body: `Bu sitedeki beden/enerji kitapları (aura, eterik çift, meridyen, çakra anlatımları) **"enerji alanı"** ve **şifa** iddialarından söz eder. Bu iddialar için **tıbbi protokol verilmez**; yerine, sınanmış çalışmalar özetlenir.

## 1) Terapötik Dokunuş sınavı (Rosa ve ark., JAMA 1998)
- 21 terapötik dokunuş uygulayıcısı, bir perdenin arkasında, değerlendiricinin elini **hangi elinin üstünde tuttuğunu** söylemeye çalıştı.
- **280 denemenin 123'ünde (%44)** doğru yanıt verdiler; bu, **rastgele tahmin (~%50)** düzeyidir.
- Yazarlar, iddia edilen insan enerji alanı için **deneysel dayanak bulunmadığını** belirtti. Çalışmaya yöneltilen eleştiriler de vardır: gerçek bir seansı değil yalnızca "alanı hissetme" adımını sınadığı ve yazarların tarafsızlığı tartışılmıştır.
- Çalışma, ilk tasarımını 9 yaşındaki **Emily Rosa'nın** okul projesi olarak yapmasıyla bilinir (yaş bilgisi kaynaklarda değişir, bu derste önemsenmedi).

## 2) Aracılık duası: STEP çalışması (Benson ve ark., 2006)
- Koroner baypas ameliyatı geçiren **1.802 hasta** üç gruba ayrıldı.
- Dua edildiğinden emin olmayan gruplarda 30 günlük komplikasyon oranı **%52 (dua edilen) ve %51 (dua edilmeyen)** bulundu; fark yok.
- Dua edildiğinden **emin olan** grupta komplikasyon oranı daha yüksekti (**%59**); yazarlar bunu açıklayamadı ve "dua etkisi yok" sonucuna vardı.
- Bu, **tek bir uzaktan şifa türünün tek bir klinik ortamda** sınanmasıdır; tüm uzaktan şifa iddialarını kapsamaz.

## 3) Plasebo ne yapar?
Cochrane derlemesi "Placebo interventions for all clinical conditions" (Hróbjartsson ve Gøtzsche) plasebonun **büyük sağlık yararı sağlamadığını**, ancak hastanın kendi bildirdiği sonuçlarda (örn. ağrı) **ılımlı** etkiler görülebildiğini bildirir. Derlemenin sürümleri arasında sayılar değişir (2022 güncellemesinde ağrı için küçük bir etki bildirilir). Yani "iyi hissetme" gerçek olabilir ama bu, bir müdahalenin **hastalığı tedavi ettiğini** göstermez.

## Bu derste verilmeyenler
Şifa uygulama adımları, "enerji temizleme" yordamları ve herhangi bir hastalık için tıbbi protokol yazılmadı: doğrulanmış yararı yoktur ve **hastalığın tıbbi tedaviden vazgeçilmesi ciddi zarar verebilir**. Sağlık sorununda bir hekime başvur.

## Çalışma
Bir kitaptaki şifa iddiasını seç; "bunu ölçen kör, kontrollü bir çalışma var mı?" sorusunu cevaplamak için Cochrane'de arama yap ve sonucu bir paragrafla yaz.`,
          verification: `**Kaynak:** Rosa ve ark. 1998 [PDF](https://library.stlawu.edu/system/files/2020-12/rosa_close_look_at_therapeutic_touch.pdf) ve [Wikipedia — Therapeutic touch](https://en.wikipedia.org/wiki/Therapeutic_touch) (21 uygulayıcı, 280 deneme, 123 doğru = %44: arama sonuçlarında doğrulandı; makalenin tam metni satır satır okunmadı). STEP: [PubMed 16569567](https://pubmed.ncbi.nlm.nih.gov/16569567/) (1.802 hasta; %52 / %51 / %59 — özet düzeyinde doğrulandı; ikincil özetlerde %58,6 olarak da geçer). Plasebo: [Cochrane CD003974](https://www.cochrane.org/CD003974/placebo-interventions-all-clinical-conditions) — sürümler arasında bulgular farklı özetleniyor; ayrıntılı sayı verilmedi.`,
        },
        {
          id: "te-lanet-nocebo",
          title: "Lanet iddiaları: nocebo, \"vudu ölümü\" ve sınırları",
          summary: "Cannon 1942: beklentinin bedensel sonuçları; kanıtın zayıflıkları.",
          minutes: 20,
          body: `Kitaplarda geçen **lanet ve zarar verme** anlatımları için **uygulama talimatı verilmez**. Yerine, bu tür inançların *neden etkili göründüğüne* dair kuramsal ve bilimsel çerçeve verilir.

## Cannon'ın "Vudu ölümü" makalesi (1942)
- Fizyolog **Walter Cannon**, *American Anthropologist*'te (1942) kimi geleneksel toplumlarda, lanetlendiğine ya da büyülendiğine **kesin inanan** kişilerin kısa sürede öldüğü anlatılarını derledi.
- Önerdiği mekanizma: yoğun korku, **sempatik-adrenal sistemin aşırı tepkisine** ve dolaşımın çökmesine yol açabilir.
- Eleştiriler: kanıtların büyük bölümü **anekdottur**; Cannon bile zehir ihtimalinin önce dışlanması gerektiğini söyler; Harry Eastwell (1982) gibi yazarlar bu ölümlerin başka nedenleri olduğunu savunur.

## Nocebo
Beklentinin **olumsuz** bedensel sonuç doğurması "nocebo" adını alır (terim 1961'de Walter Kennedy'ye atfedilir). Günümüzde "vudu ölümü" yerine **psikojenik ölüm, aşırı stres tepkisi ve nocebo** terimleri tercih edilir.

## Sonuç
- Lanet inancının **bedensel/psikolojik sonuçları** (kaygı, uykusuzluk, korku) gerçek olabilir; bu, bir **dış büyüsel nedenin** kanıtı değildir.
- Bu nedenle **korkutma, tehdit ya da "lanet attım" demek** karşı tarafa gerçek zarar verebilir; bu yüzden etik olarak kabul edilemez ve bu modülde bir tasarım olarak bulunmaz.

## Çalışma
"Korkunun bedene etkisi" ile "dış nedenli lanet" arasındaki farkı üç cümleyle yaz; hangi veri bu ikisini ayırt ederdi?`,
          verification: `**Kaynak:** [Cannon (1942), AJPH yeniden basımı — PMC1447285](https://pmc.ncbi.nlm.nih.gov/articles/PMC1447285), [Wikipedia — Voodoo death](https://en.wikipedia.org/wiki/Voodoo_death), arama özetleri. Bir Taylor & Francis özeti makaleyi 1957 olarak veriyordu; diğer kaynaklarla çeliştiği için 1942 alındı. "Nocebo" teriminin 1961 / Kennedy atfı ikincil kaynaktan; Eastwell (1982) eleştirisi arama özetinden. Makalenin tam metni okunmadı.`,
        },
        {
          id: "te-astroloji-test",
          title: "Astroloji de sınandı: Carlson (1985)",
          summary: "Çift kör sınama ve sonucun tartışması.",
          minutes: 15,
          body: `Astroloji ve benzeri "tahmin" sanatları, gerçek bir **sınanabilir iddia** içerdikleri için kontrollü denemelere konu olmuştur.

## Carlson (1985), *Nature*
- **Shawn Carlson**, *Nature*'da (Aralık 1985, cilt 318) "A double-blind test of astrology" makalesini yayımladı.
- Katılan astrologlar **National Council for Geocosmic Research** tarafından önerildi ve sınanacak önermeyi astrologlar kendileri belirlemeye katıldı.
- Ana bulgu: astrologlar doğum haritalarını kişilik testi sonuçlarıyla **şansın üzerinde eşleştiremedi**.
- **Tartışma:** Bazı eleştirmenler çalışmanın astrolojinin "doğrulandığı" sonucunu çıkarmaya yetmediğini ama olumsuz yargıyı da tek başına sağlam kılmadığını savunur; bu görüş tartışmalıdır.

## Okuma notu
Bu, bir astrolojik iddianın (haritadan kişilik eşleştirme) **kör test edilebildiğini** gösterir; astrolojinin **kültürel, sembolik ve tarihsel** değeri bu sonuçtan ayrıdır. Bu sitedeki astroloji dersleri, sonuçları "bilimsel doğrulama" olarak değil, **yazara göre** ve **tarihsel** bilgi olarak sunar.

## Çalışma
Carlson'un çalışmasındaki "kör"lüğün neresinde olduğunu bul (kim neyi bilmiyordu?) ve kendi günlüğünde benzer bir kör düzen tasarla.`,
          verification: `**Kaynak:** [ADS — A double-blind test of astrology](https://ui.adsabs.harvard.edu/abs/1985Natur.318..419C/abstract), [Wikipedia — Shawn Carlson](https://en.wikipedia.org/wiki/Shawn_Carlson). Yayın bilgisi arama sonuçlarında tutarlı; tam eşleştirme oranı ("üçte bir" gibi) aramada doğrulanamadığı için yazılmadı. Tam metin okunmadı.`,
        },
      ],
      quiz: [
        qz("Rosa ve ark. (1998) çalışmasında uygulayıcılar kaç denemenin kaçında doğru elin yerini bildi?", ["280'in 123'ünde (%44)", "280'in 250'sinde", "280'in 10'unda", "Hepsinde"], 0),
        qz("Bu sonuç neyi gösterir?", ["Rastgele tahmin düzeyini; iddia edilen alan için deneysel dayanak çıkmadığını", "Alanın ölçüldüğünü", "Çalışmanın hile olduğunu", "Hiçbir şeyi"], 0),
        qz("STEP çalışmasında aracılık duasının komplikasyonlara etkisi nasıl bulundu?", ["Dua edilen/edilmeyen gruplarda fark yok", "Büyük azalma", "Büyük artış", "Ölüm yok"], 0),
        qz("STEP'te dua edildiğinden emin olan grupta ne görüldü?", ["Daha yüksek komplikasyon oranı (yaklaşık %59)", "Hiç komplikasyon yok", "Aynı oran", "Veri yok"], 0),
        qz("Cannon'ın 'vudu ölümü' kanıtları için doğru değerlendirme hangisidir?", ["Büyük ölçüde anekdottur", "Randomize kontrollü çalışmadır", "Laboratuvar deneyidir", "Çift kör çalışmadır"], 0),
        qz("'Nocebo' nedir?", ["Beklentinin olumsuz bedensel sonuç doğurması", "Bir ilaç türü", "Bir burç", "Bir ritüel"], 0),
        qz("Carlson (1985) hangi dergide yayımlandı?", ["Nature", "JAMA", "Science", "Lancet"], 0),
        qz("Bu modül şifa ve lanet için hangi içeriği vermez?", ["Uygulama adımları ve tıbbi protokol", "Sınanmış çalışma özetleri", "Etik uyarılar", "Kaynak bağlantıları"], 0),
      ],
    },
    {
      id: "t3",
      title: "Tarifler ve Maddeler: Simya, Bitki ve Tıbbi İddialar",
      description: "Tarif içeren kitapları güvenle okumak ve iddiaları değerlendirmek.",
      lessons: [
        {
          id: "te-tarif",
          title: "Tarif içeren metinleri nasıl okumalı? (simya, bitki, \"iksir\")",
          summary: "Tarihsel değer, risk ve değerlendirme ölçütleri — tarif verilmeden.",
          minutes: 20,
          body: `Cockren, Heron, Hanswille ve benzeri kitaplarda **tarifler, hazırlama yöntemleri ve "iksir"** anlatımları bulunabilir. Bu sitede **bu tarifler yazılmaz**; çünkü:
1. **Güvenlik:** Tarihsel simya ve halk tıbbı metinleri cıva, kurşun, antimon gibi **zehirli maddelerden** ya da dozu belirsiz bitkilerden söz edebilir. Bu maddelerin doz belirtilmeden kullanılması ciddi zarar verebilir.
2. **Doğrulanamama:** Tariflerde vaat edilen yararlar için kontrollü kanıt yoktur.
3. **Tarihsel değer ayrıdır:** Bu metinler **kimya, eczacılık ve laboratuvar tekniklerinin** (damıtma, çözme, kristallendirme gibi) gelişim tarihini gösterir; bu bilgi tariflerin uygulanmasını gerektirmez.

## Bir tarif iddiasını değerlendirme ölçütleri
| Soru | Neden |
|---|---|
| Madde adı bugün hangi bileşiğe karşılık geliyor? | Eski adlar belirsizdir (örn. aynı ad farklı maddeleri anabilir). |
| Doz ve süre verilmiş mi? | Verilmemişse güvenli kullanım bilgisi yoktur. |
| İddia edilen yarar için kontrollü çalışma var mı? | Yoksa "kanıt yok" demek dürüsttür. |
| Kaynak düzenleyici kurum / sistematik derleme var mı? | Resmî bir tıbbi kullanım bilgisi mi, folklor mu? |
| Alternatif tıbbi tedavi var mı? | Tıbbi tedavinin yerine geçmemeli. |

## Örnek: homeopati
Dört element/homeopati ek modülünde de görüldüğü gibi, homeopatik ürünler için Avustralya Ulusal Sağlık ve Tıbbi Araştırma Konseyi'nin (NHMRC) derlemesi **sağlık durumları için etkililiğe dair güvenilir kanıt bulmadığı** sonucuna varmıştır (daha önce bu sitede doğrulandı; bu derste yeniden okunmadı).

## Çalışma
Elindeki bir kitaptan bir "iksir" betimlemesi seç; tabloyu cevaplayarak "güvenli ve doğrulanabilir mi?" sorusuna karar ver. Tarifi uygulama.`,
          verification: `Bu bölümde yeni olgusal bir çalışma sunulmadı; güvenlik gerekçesi genel bilgidir (cıva, kurşun, antimon toksisitesi). NHMRC homeopati sonucu bu sitede önceki derste doğrulanmıştı; burada yeniden kaynaklandırılmadı. Madde adlarının eski/yeni karşılıkları için ayrı bir kaynak okunmadı.`,
        },
      ],
      quiz: [
        qz("Bu sitede tarifler neden yazılmaz?", ["Güvenlik riski ve vaat edilen yararların doğrulanamaması", "Kimse ilgilenmediği için", "Tarifler yoktur", "Telif hakkı nedeniyle"], 0),
        qz("Tarih açısından bu metinlerin değeri nedir?", ["Kimya ve eczacılık tekniklerinin gelişimini gösterir", "Hiçbir değeri yoktur", "Modern tıbbın yerini alır", "Yalnızca dinîdir"], 0),
        qz("Eski bir tarifte madde adı neden sorun olabilir?", ["Eski adlar farklı maddelere karşılık gelebilir", "Adlar hep aynıdır", "Adlar yoktur", "Tarif hiç madde içermez"], 0),
        qz("Bir iksir iddiasını değerlendirirken ilk bakılacak şey hangisidir?", ["Kontrollü kanıt var mı ve doz/güvenlik bilgisi var mı", "Rengi", "Fiyatı", "Adının güzelliği"], 0),
        qz("Tarihsel simya metni tıbbi tedavinin yerini alabilir mi?", ["Hayır", "Evet", "Bazen zorunludur", "Her zaman"], 0),
      ],
    },
  ],
  notIncluded: `## Bu konu modülünde eklenmeyenler ve nedenleri

- **Ritüel, çağırma, tütsü, mühür çizimi ve sözlü formül adımları:** Güvenilir bir kaynakta yararı doğrulanamaz; ayrıca psikolojik risk taşıyabilir. Yalnızca kuramsal yorum modelleri ve sınama çerçevesi verildi.
- **Şifa uygulamaları (enerji şifası, uzaktan şifa vb.) ve tıbbi protokoller:** Yararı kanıtlanmamıştır ve tıbbi tedaviden uzaklaşmaya yol açabilir; sınanmış çalışmalar özetlendi.
- **Lanet, bağlama, zarar verme yöntemleri:** Başkasına zarar verme riski nedeniyle yazılmadı; yalnızca nocebo/Cannon bağlamı verildi.
- **Simya ve halk tıbbı tarifleri (madde, oran, doz, süre):** Zehirli madde ve doz belirsizliği riski nedeniyle yazılmadı.
- **Her çalışmanın tam metni:** Künyeler ve ana sonuçlar internette doğrulandı; makaleler satır satır okunmadı.
- **Modern psi/parapsikoloji araştırmalarının tamamı:** Bu aramada ele alınmadı.`,
});
