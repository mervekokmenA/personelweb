/**
 * Okültizm modülü: "şunu oku" diyen görevlerin okuma içeriği doğrudan derse taşındı.
 * Her kayıt, dersin "## Çalışma" bölümünden önce eklenen "Okuma metni" ve sayfa içinde yapılabilen yeni çalışmadır.
 * İçerik özgün Türkçe anlatım ve özettir; birincil metinlerden yalnızca kısa, kamu malı alıntılar/yaklaşık aktarımlar kullanılır.
 */
export const OCCULT_READING: Record<string, { reading: string; work: string }> = {
  pisagor: {
    reading: `## Okuma metni 1: Lirvian notlarındaki Pisagor bölümü

Aşağıdaki özet, notlardaki bölümün sırasını izler; her ifade bu modülün kaynak etiketiyle işaretlidir: **[K]** klasik kaynakta (Aristoteles, Diogenes Laertios, Porphyrios, Iamblichus) karşılığı var, **[?]** kaynağı geç/tartışmalı, **[Y]** antik kaynakta yok, modern yorum.

**1. Okulun yapısı**
- Krotone'de (Güney İtalya) MÖ 6. yüzyılın sonunda kurulan topluluk; felsefe, matematik, ibadet ve yaşam disiplinini bir arada yürüttü. **[K]**
- Kadınların da kabul edildiği ve mülkiyetin ortak olduğu (*koinonia*) anlatılır. **[?]** Bu ayrıntılar Iamblichus'tan (MS 3.–4. yy.) gelir; yaklaşık 800 yıl sonrasının biyografisidir.
- Adaya **sınama** uygulanır: yürüyüşü, gülüşü, oturup kalkışı, yüz hatları incelenir; geveze ve sabırsızlar elenir. **[?]** (Iamblichus; "fizyognomi" ayrıntısı geç bir anlatıdır.)
- **Akousmatikoi** ("dinleyenler"): ilk aşama. Notlar 3–5 yıl mutlak sessizlik (*echemythia*) ve perde arkasından ders anlatır. **[?]** Diogenes Laertios beş yıl sessizlikten söz eder; "perde" ve "Pisagor'un görünmemesi" geç ve efsanevi bir ayrıntıdır.
- **Mathematikoi** ("öğrenenler"): iç çember; geometri, sayı kuramı, müzik oranları (monokord), ruh göçü. **[?]** İki grup ayrımının Pisagor'un kendi döneminden mi sonradan mı çıktığı tartışmalıdır.

**2. Felsefi temeller**
- *"Sayılar evrenin özüdür."* **[K]** Aristoteles (Metafizik I.5) Pisagorcuların "şeylerin sayılar olduğunu veya sayılara öykündüğünü" söylediğini aktarır. Notlardaki "yaşayan arketipsel enerjiler" ifadesi ise **[Y]**'dir.
- 1 Monad (köken), 2 Dyad (karşıtlık/kutupluluk), 3 Triad (başlangıç-orta-son), 4 Tetrad (kare, dört element). **[K/?]** Bu anlamlar sonraki Pisagorcu/Yeni-Platoncu aktarımlarda görülür; "adalet" gibi eşleştirmeler kaynağa göre değişir.
- **Tetraktys** 1+2+3+4=10; üzerine ant içildiği anlatılır. **[?]** (Sonraki kaynaklar bir "Tetraktys yemini" aktarır; tarihselliği belirsizdir.)
- **Kürelerin müziği** (*musica universalis*): gezegen mesafelerinin müzikal oranlara karşılık geldiği fikri. **[K]** Platon (Devlet X, Timaios) ve Aristoteles (*Gök Üzerine* II.9, eleştirel) tarafından anılır; fiziksel bir ses değil, **felsefi** bir fikirdir. "Astral dalgalanmaları tedavi eden simya aracı" **[Y]**.
- **Metempsikoz** (ruh göçü), vejetaryenlik, bakla yasağı. **[K/?]** Ruh göçü ve bakla yasağı kaynaklarda anılır; hangi ilkenin ilk Pisagorculara ait olduğu ve bakla yasağının nedeni. "Kan akıtılmaz" gibi genellemeler Porphyrios'tan gelen geç yorumdur.

**3. Yürüyüş çalışmaları**
- **Sabah yalnızlık yürüyüşü**: gün doğmadan kalkış, kimseyle konuşmadan tapınak bahçesi/koru/akarsu kenarına çıkış, günün problemi üzerine sakin düşünme. **[?]** Iamblichus (*Pisagor Yaşamı*, bölüm 96–100 civarı) böyle bir günlük düzen anlatır.
- **Akşam grup yürüyüşü**: iki-üç kişilik küçük gruplarla, dedikodu değil öğrenilenlerin konuşulduğu yavaş yürüyüş. **[?]** (Aynı kaynak.)
- **Gece hesabı** (geriye dönük hafıza taraması): *"Bugün neyi yanlış yaptım? Ne yaptım? Hangi görevi aksattım?"* **[K]** Bu üç soru *Altın Dizeler*'in (Pisagorcu atfı olan şiir) 40–44. dizelerine yakındır; Diogenes Laertios ve Porphyrios da benzer bir akşam sorgulaması aktarır. "Günü tersten film şeridi gibi oynatma" ayrıntısı daha geç/modern bir yöntemdir **[?]**.
- "**Biyoelektrik dengeleme**" ve "**doğal prana**" ifadeleri **[Y]**: Pisagor'un kaynaklarında yoktur; "prana" Hint kavramıdır, "biyoelektrik" modern bir terimdir.

## Okuma metni 2: antik kaynaklarda Pisagor (birincil kaynak karşılaştırması)

- **Kimden geliyor?** Pisagor yazmadı. En eski tanıklıklar **Aristoteles** (MÖ 4. yy., Pisagorcular hakkındaki parçalar) ve Platon'un çevresidir; biyografik bütün anlatılar çok geç: **Diogenes Laertios** (MS 3. yy., Kitap VIII), **Porphyrios** (3. yy.), **Iamblichus** (3.–4. yy.). Üçü de Yeni-Platoncu bir süzgeçten geçer; Pisagor'u yer yer ilahi bir bilge olarak resmeder.
- **Akousmata (sözlü kurallar)** — Iamblichus'un aktardığı kısa yasaklardan örnekler; anlamları **tartışmalıdır**: *"Ateşi demirle karıştırma"*, *"Bir ölçek (choinix) üstüne oturma"*, *"Baklagillerden uzak dur"*. Eski yorumcular bunları simgesel (öfkeyi tahrik etme, tembelliğe karşı uyanık ol vb.) okur.
- **Aristoteles'in aktardığı "on karşıt":** Pisagorcular (veya Aristoteles'in "aynı okuldan bazıları" dediği grup) ilkeleri iki sütunda on çift olarak sıralar: **sınır–sınırsız, tek–çift, bir–çok, sağ–sol, erkek–dişi, durgun–hareketli, doğru–eğri, ışık–karanlık, iyi–kötü, kare–dikdörtgen.** Bu liste Pisagorcu düşüncenin en sağlam kaynaklı örneklerinden biridir.
- **Müzik oranları:** oktav **2:1**, beşli **3:2**, dörtlü **4:3**, tam ses **9:8**. Bunlar gerçek akustik oranlardır (aynı gerilimdeki telin uzunluğu oranı). *Demirci çekiçleri hikâyesi* (çekiç ağırlıklarının oktav-beşli-dörtlü verdiği anlatısı) ise **fiziksel olarak yanlıştır**; ağırlık değil tel uzunluğu/gerilim işe yarar.
- **Tetraktys yemini** (sonraki kaynaklarda): *"Ruhumuza tetraktysi veren, doğanın sürekli akan köklerini taşıyan hakkı için…"* — yaklaşık aktarımdır; tarihselliği belirsizdir.`,
    work: `## Çalışma (sayfa içi)
1. Yukarıdaki **[K]/[?]/[Y]** etiketlerini kullanarak bir tablo yap: sütunlar *ifade / etiket / hangi antik yazar* . En az 8 satır.
2. Tetraktys'i çiz (4-3-2-1 noktadan oluşan üçgen) ve ilk 4 sayının her satırını bir oran ile eşle: 2:1, 3:2, 4:3.
3. 1 metre uzunluğunda gergin bir tel varsa oktav için **50 cm**, beşli için **66,7 cm**, dörtlü için **75 cm** uzunluğu hesapla; neden "uzunluk oranı" ile "frekans oranının" tersine çalıştığını yaz.
4. Tablodan çıkan sonucu iki cümleyle yaz: *Notlardaki Pisagor anlatımının ne kadarı Aristoteles dönemine, ne kadarı Yeni-Platoncu eklemelere ait?*`,
  },

  platon: {
    reading: `## Okuma metni: üç metnin özeti ve temel pasajları

### 1. Mağara alegorisi (Devlet VII, 514a–518b)
1. **Zincirli insanlar**: Doğuştan bir mağarada, yalnızca karşı duvarı görecek biçimde bağlanmışlardır. Arkalarında yanan bir ateş ile onunla aralarında bir yol vardır; yoldan geçen insanların taşıdığı nesnelerin **gölgeleri** duvara düşer. Mahkûmlar gölgeleri gerçek sanır, onları adlandırıp ödüllendirirler.
2. **Kurtuluş ve acı**: Biri çözülüp ayağa kalkar, ateşe bakar; gözü acır, gölgeleri "daha gerçek" sanmaya devam etmek ister.
3. **Yukarı çıkış**: Zorla mağaranın dışına sürüklenir; önce gölgeleri ve yansımaları, sonra nesneleri, en sonunda **Güneş'in kendisini** görür.
4. **Geri dönüş**: İçeri döndüğünde gözü karanlığa alışamaz; mahkûmlar onunla alay eder ve onu yukarı çıkarmaya kalkanı öldürürler (517a).
5. **Yorum** (Platon'un kendisi): Güneş = **İyi'nin İdeası**; mağara = görünür dünya. Eğitim, gözü karanlıktan ışığa **çevirmektir** (518c–d); bilgi "göze görme koymak" değildir.

Bu alegorinin öncesinde **Güneş benzetmesi** ve **bölünmüş çizgi** (509d–511e) vardır: Çizgi dört kesittir — **eikasia** (hayal/gölge), **pistis** (inanç, duyusal nesneler), **dianoia** (matematiksel düşünce), **noesis** (idealara doğrudan akıl yoluyla bakış).

### 2. Symposium: Diotima'nın konuşması (201d–212c)
- **Eros** bir tanrı değil, **daimon**dur (202d–e): ölümlü ile ölümsüz arasında aracı. Annesi Penia (yoksulluk), babası Poros (çare).
- Aşkın **yükseliş basamakları** (210a–211b):
  1. Bir güzel beden
  2. Bütün güzel bedenlerin ortak güzelliği
  3. Ruhların güzelliği
  4. Yasa ve kurumların güzelliği
  5. Bilgilerin güzelliği
  6. **Güzel'in kendisi**: "ne doğar ne ölür, ne artar ne azalır… her yönden aynı" (211a)
- Hedef: "ölümsüzü doğurmak" — erdemi ve bilgeliği.

### 3. Timaios
- **Demiurgos** iyidir ve kıskançlık duymaz; evreni olabildiğince kendisi gibi iyi yapmak ister (29e). Örnek olarak **ebedi olana** bakar (28a–29a).
- Evren **canlı, akıllı bir varlıktır**; **dünya ruhu** (34b–36d) gövdeyi sarar.
- **Zaman**, ebediyetin "devinen bir görüntüsüdür" (37d).
- Dört element düzgün çokyüzlülerle eşleşir (53c–56c): **ateş = tetrahedron, hava = oktahedron, su = ikosahedron, toprak = küp**; **dodekahedron** bütün evren için kullanılır (55c). Bu, Pisagorcu geometrinin Platon'a etkisinin gösterildiği yerdir.
- **Khora/alıcı** (48e–52d): oluşun içinde gerçekleştiği "mekân".

**Ezoterik gelenekle bağlantı:** Mağaradan çıkış inisiyasyonla, Diotima'nın merdiveni Hermetik "yükseliş"le, Timaios'un dünya ruhu *anima mundi* ile eşleştirildi. Bunlar Platon'un kendi niyetinden çok sonraki **yorumlardır**.`,
    work: `## Çalışma (sayfa içi)
1. Mağara alegorisinin 5 adımını, yukarıdaki sırayla, kendi hayatından bir "gölge" örneğiyle yeniden yaz (ör. yalnızca sosyal medyadan bildiğin bir konu).
2. **Bölünmüş çizgi** için dört kesitli bir tablo çiz: kesit / nesne / zihinsel tutum / senin örneğin.
3. Diotima'nın 6 basamağını yazıp her biri için "o basamakta neyi sevmeyi öğreniyorsun?" cümlesi ekle.
4. Timaios'taki dört elementi ve çokyüzlüleri bir tabloda eşle (ateş–tetrahedron…). Bunu Pisagor dersindeki "sayı = düzen" fikriyle bir cümlede bağla.`,
  },

  hermetizm: {
    reading: `## Okuma metni 1: Poimandres (Corpus Hermeticum I) — özet aktarım

Metin, bir vizyon anlatısıdır; konuşan "ben", Hermes'e atfedilir. Adımlar:

1. **Vizyon**: Anlatıcı düşüncelere dalmışken bedensel duyuları durur; sınırsız büyüklükte bir varlık adını söyleyerek ona seslenir: *"Ne duymak, ne görmek, ne öğrenip bilmek istiyorsun?"* Varlık kendini tanıtır: **Poimandres, Mutlak Güç'ün Nous'u (Aklı).**
2. **Işık ve karanlık**: Anlatıcı sonsuz, neşeli bir **ışık** görür; ardından aşağıda dönen, ıslak, kıvrılan bir **karanlık/doğa** belirir.
3. **Logos**: Işıktan **kutsal bir söz (Logos)** doğaya iner; Poimandres, görünen ışığın "Nous'un oğlu Logos" olduğunu söyler.
4. **Demiurgos**: Nous, **yaratıcı Zekâ'yı** (Demiurgos) doğurur; o, ateş ve nefesin tanrısı olarak **yedi yönetici** yaratır; bunlar duyulur dünyayı çevreler. Yazgı (*heimarmene*) bu yöneticilere bağlıdır.
5. **İnsan (Anthropos)**: Nous, kendisine eş bir **İnsan** doğurur; İnsan baba'nın biçiminde, yönetim yetkisiyle yaratılmıştır. İnsan yedi yöneticinin çemberini aşar, aşağıdaki **doğaya eğilir**; doğa onun yansımasına aşık olur ve ona sarılır.
6. **Düşüş**: Bu yüzden insan **çifte** bir varlıktır: bedeni ölümlü, "öz insanı" ölümsüzdür. Başlangıçta androjendir (hem eril hem dişil); sonra cinsler ayrılır.
7. **Öğüt**: *"Kendini tanıyan, kendinde olan iyiye gider."* Poimandres, kurtuluşu **gnosis** (bilgi) ve Nous'un yönetimine dönüşle ilişkilendirir.
8. **Yükseliş**: Ölümde beden çözülür; ruh yedi "bölgeden" geçerken her gezegenin ona verdiği güç/kusurdan sırayla kurtulur — **büyüme ve azalma gücü (Ay), kötü hileler (Merkür), arzu hilesi (Venüs), egemen kibir (Güneş), saygısız cüret (Mars), kötü yoldan zenginlik hırsı (Jüpiter), tuzak yalan (Satürn)**. Sekizinci küreye (*ogdoad*) ulaşır, **Güçler'le** birlikte ilahi olana (Tanrı'ya) varır.
9. **Misyon**: Anlatıcı bu bilgiyi öğretmek üzere gönderilir ve insanlara "ölümden hayata" geçişi bildirir.

> Not: Bu bir kamusal alan çevirisinin (G.R.S. Mead) yapısına dayanan özet aktarımdır. Ayrıntı farkları çeviriden çeviriye değişir.

## Okuma metni 2: Zümrüt Tablet'in üç farklı sürümü

Metnin kilit cümlesi farklı çevirilerde şöyle geçer:

1. **Latince (Ortaçağ Vulgata sürümü):** *"Quod est inferius est sicut quod est superius, et quod est superius est sicut quod est inferius, ad perpetranda miracula rei unius."*
2. **Isaac Newton'un İngilizce çevirisi (yaklaşık 1680; kamu malı):** *"That which is below is like that which is above & that which is above is like that which is below to do the miracles of one only thing."*
3. **Bu derste Türkçe çeviri:** *"Aşağıda olan yukarıda olana benzer, yukarıda olan da aşağıda olana benzer; yalnızca bir şeyin mucizelerini gerçekleştirmek için."*

**Newton sürümünün devamı (özet Türkçe çeviri):** Tüm şeyler Bir'den ve Bir'in aracılığıyla doğmuştur; bu "Bir şey"in babası **Güneş**, annesi **Ay**'dır, rüzgâr onu karnında taşımıştır, **toprak** onu besler. Kuvveti, toprağa dönüştürülürse tamamdır. **Toprağı ateşten, inceyi kabadan** özenle ayır; yerden göğe çıkar, yeniden yere iner ve alttakinin üsttekinin gücünü alır; böylece tüm dünyanın **görkemini** elde edersin. En ince şeyi yener, her katı şeye işler. Yazar kendini *Hermes Trismegistos* diye anar: "dünyanın felsefesinin üç parçasına" sahiptir.

**Karşılaştırma ipuçları:**
- *"rei unius"* (Latince) / *"one only thing"* (Newton): "tek şey" → simyada çoğu yorumcu için **Prima materia/taş**; felsefi okumada **birlik ilkesi**.
- *"Sicut" / "like"* tüm çevirilerde benzerlik ilişkisidir, **nedensel bir eşitlik** değil; "aynı" demez.
- En eski bilinen metinler Arapçadır (8.–9. yy., tarih yaklaşık); Latince çeviriler 12. yy.'dan sonra yaygınlaştı.`,
    work: `## Çalışma (sayfa içi)
1. Poimandres'in yaratılış anlatısını yukarıdaki 9 adımdan **10 maddelik** kendi özetine dönüştür (adım adım, kendi cümlelerinle).
2. Yedi "bölge" tablosunu yap: gezegen / bırakılan kusur. Bunu astroloji modülündeki gezegen anahtar kelimeleriyle karşılaştır.
3. Zümrüt Tablet'in üç sürümünü yan yana koy; her sürümde **farklı olan sözcükleri** işaretle ve "benzer" ile "aynı" arasındaki farkı iki cümleyle açıkla.`,
  },

  agrippa: {
    reading: `## Okuma metni: De occulta philosophia'dan (Kitap I–II) seçmeler

### Kitap I — Doğal büyü: elementer dünya
Agrippa'ya göre evren üç dünyadan oluşur: **elementer** (dünyevi), **göksel** (gezegenler/yıldızlar) ve **entelektüel** (melekler, akıllar). Kitap I, elementer dünyayı anlatır. Dört element ve nitelikleri, klasik doğa felsefesinden gelir:

| Element | Nitelik çifti | Not |
|---|---|---|
| **Ateş** | sıcak + kuru | en ince; yukarı yönelir |
| **Hava** | sıcak + nemli | yaşam ve nefesle ilişkilendirilir |
| **Su** | soğuk + nemli | |
| **Toprak** | soğuk + kuru | en kaba, en ağır |

Her elementin "üç derece" taşıdığı; her derecede **elementlerin birbirine dönüşebildiği** ve beşinci bir "öz" (*quinta essentia*) kavramı vardır. Bu anlayış Aristoteles/Galen geleneğine dayanır.

### Kitap II — Göksel büyü: sayılar ve gezegenler
Agrippa, 1–12 arasındaki sayıların **kozmik ve dinsel anlamlarını** sıralar (bölüm IV–XIV civarı):

| Sayı | Agrippa geleneğinde simgesi (özet) |
|---|---|
| **1** | Birlik, köken, Tanrı |
| **2** | İkilik, karşıtlık, madde |
| **3** | Üçlü; ruh-akıl-beden, teslis |
| **4** | Dört element, Tetragrammaton, dört yön |
| **5** | Beş duyu, beşinci öz (*quinta essentia*) |
| **6** | "Tam" sayı (1+2+3=6), yaratılışın altı günü |
| **7** | Yedi gezegen, hafta |
| **8** | Sekizinci küre (sabit yıldızlar), yeniden doğuş |
| **9** | Dokuz melek korosu, dokuz ilham perisi |
| **10** | Tamlık (Pisagorcu Dekad) |
| **11** | Aşma, kural çiğneme (negatif anlam) |
| **12** | Burçlar, kabileler, havariler |

**Gezegen kareleri (magic squares)** — Agrippa'nın verdiği yedi kare:

| Gezegen | Kare | Satır toplamı | Hücre toplamı |
|---|---|---|---|
| Satürn | 3×3 | 15 | 45 |
| Jüpiter | 4×4 | 34 | 136 |
| Mars | 5×5 | 65 | 325 |
| Güneş | 6×6 | 111 | 666 |
| Venüs | 7×7 | 175 | 1225 |
| Merkür | 8×8 | 260 | 2080 |
| Ay | 9×9 | 369 | 3321 |

**Gezegen–metal eşleşmeleri** (geleneksel): Satürn–kurşun, Jüpiter–kalay, Mars–demir, Güneş–altın, Venüs–bakır, Merkür–cıva, Ay–gümüş.

### Agrippa'nın çelişkisi
Aynı yazar 1530'da *De incertitudine et vanitate scientiarum* ("Bilimlerin belirsizliği ve boşluğu") yazarak okült bilimleri de eleştirdi. Bu, kendisi hakkında "inandı mı, ironi mi?" tartışmasının merkezidir.

> Not: Sayı yorumları Agrippa'nın metninin özetidir; aynı sayı için farklı yorumlarla çelişen kaynaklar bulunabilir. Gezegen karelerinin toplamları matematiksel olarak doğrulanabilir (ör. 3×3 karenin 1–9 toplamı 45).`,
    work: `## Çalışma (sayfa içi)
1. Yukarıdaki iki tabloyu (elementler ve 1–12 sayıları) **kendi tablona** yeniden yaz ve her satıra "bu bir gözlem mi, sembol mü?" diye not düş.
2. Gezegen karelerinin hücre toplamlarını hesapla: n×n karede 1'den n² 'ye toplam = n²(n²+1)/2; satır toplamı = n(n²+1)/2. Tablodaki değerlerin doğru olduğunu kendin göster.
3. Agrippa'nın 1530 tarihli *De vanitate* eseri ile okült felsefe üç kitabını **iki sütunda** karşılaştır: *Ne savunuyor? Ne reddediyor?* (Yukarıdaki "Agrippa'nın çelişkisi" bölümünü kullan.)`,
  },

  grimuar: {
    reading: `## Okuma metni: dört grimuarın kısa tarihçesi

| Grimuar | Tahmini dönem / dil | Kısa tarihçe | Modern baskı |
|---|---|---|---|
| **Süleyman'ın Anahtarı** (*Clavicula Salomonis*) | 14.–15. yy. (İtalyanca/Latince el yazmaları; İbranice/Yunanca sürümler daha geç) | Süleyman'a atfedilir; tılsım, çember ve araç hazırlama bölümleri içerir. | **S. L. M. Mathers, 1889** — British Museum (bugünkü British Library) el yazmalarına dayanır; kullanılan tam nüsha listesi bu derste doğrulanmadı |
| **Ars Goetia** (*Lemegeton*'un birinci kitabı) | 17. yy. el yazmaları (ör. Sloane 2731, 3825) | 72 ruh listesi; Johann Weyer'in *Pseudomonarchia Daemonum* (1577) listesinden türer (69 ruh). | **Mathers/Crowley, 1904** (*The Book of the Goetia of Solomon the King*) |
| **Picatrix** (*Ghayat al-Hakim*) | 10.–11. yy. Arapça; Kral Alfonso X için 1256 civarı İspanyolca/Latince çeviri | Yıldız ve tılsım büyüsü; gezegen ruhları, imgeler ve tütsüler. Yazarın kimliği (Maslama el-Mecriti atfı) **tartışmalıdır**. | Pingree, 1986 (Latince eleştirel basım) |
| **Enochian sistem** | 1581–1584, John Dee & Edward Kelley | "Melek dili" ve 19 çağrı; Dee'nin günlükleri **A True & Faithful Relation** adıyla 1659'da (Meric Casaubon) yayımlandı. | Çeşitli; Golden Dawn ve Crowley sonrası popülerleşti |

### Bir grimuar nasıl okunur? (kontrol listesi)
1. **El yazması mı, baskı mı?** Sonraki baskılar çoğu kez *seçmedir*; eksik/yeniden yazılmıştır.
2. **Atıf**: Süleyman, Hermes, Honorius gibi adlar çoğu zaman **sahte atıftır** (pseudepigrapha).
3. **Çeviri zinciri**: Arapça→Latince→İngilizce→Türkçe gibi her halka hata ekler.
4. **Dönemin bağlamı**: Grimuarlar ritüel uygulama kayıtları değil, çoğu kez **kitapçı/kopyacı** işidir.

> Bu ders, grimuarlardaki ritüelleri **uygulama talimatı olarak vermez**; yalnızca tarihçe ve kaynak eleştirisidir.`,
    work: `## Çalışma (sayfa içi)
1. Yukarıdaki tabloyu **kendi tablona** al ve ek sütunlar ekle: *en eski el yazması / baskıya esas el yazması / çeviri zinciri*.
2. Süleyman'ın Anahtarı için bir **zaman çizelgesi** çiz: 14.–15. yy. el yazmaları → 1889 Mathers baskısı.
3. Bir grimuar için kontrol listesindeki 4 soruyu yanıtla ve "bu metin ne kadar güvenilir bir **tarihsel belge**?" cümlesini yaz.`,
  },

  "kabala-unveiled": {
    reading: `## Okuma metni: Mathers'ın Giriş bölümü ve eleştirisi

**Mathers'ın (1887) girişi neler diyor?**
- Giriş bölümü soruyla başlar: *Kabala nedir? Yazarı kim? Alt bölümleri neler? Genel öğretileri neler? Bugün neden bir çeviriye gerek var?*
- Kabala'yı "**ezoterik Yahudi öğretisi**" diye tanımlar; İbranice **QBLH**, kökü **QBL** "almak, kabul etmek": bilginin sözlü aktarımla devredilmesi, "gelenek" anlamı.
- "Zamanın okült düşünce dalgası" ve Kutsal Kitap'ın "anahtarsız anlaşılamayacak" pasajlarının Kabala ile çözüleceği iddiasını öne sürer.
- Zohar'ın "daha önce hiçbir modern Avrupa diline çevrilmediğini" söyler (bu, Mathers'ın kendi bilgisi dahilinde; sonradan çok daha eksiksiz çeviriler yapıldı).

**Mathers neye dayandı?**
- Kitap, **Christian Knorr von Rosenroth**'un *Kabbala Denudata* (1677–1684) adlı **Latince** derlemesinden çevrilmiştir (bu derste Aramice orijinalden değil, **Latince'den**). Dolayısıyla çeviri zinciri: **Aramice → Latince → İngilizce**.
- Üç metin: **Siphra Dtzenioutha** (Gizli Gizem Kitabı), **İdra Rabba** (Büyük Meclis), **İdra Zuta** (Küçük Meclis).

**Bugün hangi eleştirilere uğruyor?**
1. **Çeviri zinciri** (Aramice → Latince → İngilizce): Her çeviri anlam kaybı ve yorum katar. Rosenroth'un derlemesi Hristiyan Kabalası bakışıyla hazırlanmıştır.
2. **Zohar'ın tarihi**: Akademik görüşe göre (Gershom Scholem ve sonrası) Zohar 13. yy. sonunda **Moşe de León** çevresinde dolaşıma girdi; geleneksel "Şimon bar Yohay (MS 2. yy.)" atfı tarihsel olarak desteklenmez.
3. **Mathers'ın yorumları**: Dipnotları, kendi sonraki Altın Şafak sistemini Kabala'ya yazar; metin ile yorum ayrılmalıdır.
4. **Tarihsel Yahudi Kabalası ile Hermetik Qabalah ayrı geleneklerdir** (bkz. 3. ünite).

**Neden yine de okunuyor?** Batı okült geleneğinin temel kaynaklarından biri olduğu, Altın Şafak'ın Kabala sözlüğünü bu kitaptan beslendiği için tarihsel öneme sahiptir.`,
    work: `## Çalışma (sayfa içi)
1. Mathers'ın "ne iddia ediyor / dayandığı kaynak ne / benim değerlendirmem" tablosunu (3 satır: Kabala'nın tanımı, Zohar'ın yaşı, çeviri güvenilirliği) doldur.
2. Çeviri zincirini çiz: Aramice Zohar → Rosenroth Latince → Mathers İngilizce → Türkçe. Her halkada hangi hata türü olabilir, bir cümleyle yaz.
3. "Ezoterik Yahudi öğretisi" tanımını, tarihsel Kabala ve Hermetik Qabalah ayrımı açısından yeniden yaz.`,
  },

  arinma: {
    reading: `## Okuma metni: LBRP'nin yapısı (tarihsel ve betimleyici anlatım)

Küçük Pentagram Arınma Ritüeli (*Lesser Banishing Ritual of the Pentagram*), Altın Şafak sistemi içinde bir **ritüel öncesi/sonrası arınma** uygulamasıdır; Israel Regardie'nin *Golden Dawn* kitabında yayımlandıktan sonra yaygınlaştı. Aşağıdaki, ritüelin **yapısal tarifi**dir; amacı kaynağı tanıtmaktır, uygulama talimatı değildir.

1. **Kabalistik Haç**: İbranice formül *Ateh* ("Sen") – *Malkuth* ("Krallık") – *ve-Geburah* ("ve Güç") – *ve-Gedulah* ("ve Görkem/Büyüklük") – *le-Olam* ("sonsuza dek") – *Amin*. Alın, göğüs, omuzlar ve ellerin birleşimiyle bir haçın çizilmesi; kişiyi "ekseninde" konumlamak için anlatılır.
2. **Pentagramlar ve kutsal isimler**: Dört yönde (doğu, güney, batı, kuzey) pentagram çizilir; her yöne bir İbranice isim bağlanır: **YHVH** (doğu), **ADNI** (Adonai, güney), **AHIH** (Eheieh, batı), **AGLA** (kuzey).
3. **Dört arkanjel**: Çevrede **Rafael** (doğu/hava), **Gabriel** (batı/su), **Mikail** (güney/ateş), **Uriel** (kuzey/toprak) imgelenir ("önümde Rafael, arkamda Gabriel, sağımda Mikail, solumda Uriel").
4. **Kabalistik Haç tekrarı**: Kapanış.

**Yapı mantığı:** Haç (merkez/ayrılma) → dört yön ve dört element (alanın sınırı) → dört yönün koruyucu figürleri → merkez. Aynı yapı Hayat Ağacı ve dört elementin dört yönle eşleşmesi üzerine kuruludur.

## Nasıl okumalı?
- Gelenek için ritüel "kötü etkileri uzaklaştırır"; **bunun bilimsel kanıtı yoktur**.
- Psikolojik olarak: dikkat toplama, sınır koyma, çalışma öncesi/sonrası geçiş alışkanlığı sağlayabilir. Bu **olası bir mekanizma**dır, kanıtlanmış bir sonuç değil.
- Korku odaklı, aşırı sık "temizlik" kaygıyı besleyebilir; kaygı sorunları için ruh sağlığı uzmanına başvurulmalıdır.`,
    work: `## Çalışma (sayfa içi)
1. Yukarıdaki dört adımın her biri için **"bu adım neyi yapar (sembolik amaç)?"** cümlesini kendi sözlerinle yaz.
2. Dört yönü, dört elementi, dört arkanjeli ve dört kutsal ismi **bir tabloda** eşle.
3. İsteğe bağlı gözlem: Bir hafta boyunca günlüğüne "çalışmaya başlamadan önce 1–10 arası zihinsel sakinlik" puanı yaz; ritüelden bağımsız olarak, **dikkat toplama alışkanlığının** etkisini kendin gözle. Sonuçları yorumlarken tek başına kanıt sayma.`,
  },

  "fortune-hayat": {
    reading: `## Okuma metni: Dion Fortune'un kitapları (yayın yılı, konu, hedef kitle)

| Yıl | Eser | Konu | Hedef kitle / tür |
|---|---|---|---|
| 1922 | *The Machinery of the Mind* | Psikoloji (Violet Firth adıyla) | Genel okur, psikoloji ilgilileri |
| 1926 | *The Secrets of Dr. Taverner* | Okült vaka öyküleri (kurgu) | Genel okur, kurgu |
| 1927 | *The Demon Lover* | Okült romanı | Genel okur, kurgu |
| 1928 | *Esoteric Orders and Their Work* | Okült grupların işleyişi | İnisiyasyon arayanlar |
| 1930 | *The Training and Work of an Initiate* | Okült eğitim ve çalışma | Okült öğrenciler |
| 1929 | *Sane Occultism* | Sağduyulu okültizm | Meraklı genel okur |
| 1930 | *Psychic Self-Defence* | Psişik saldırı iddiaları ve savunma | Okült uygulayıcıları |
| 1932 | *Through the Gates of Death* | Ölüm ve sonrası | Genel okur |
| 1935 | *The Mystical Qabalah* | Hayat Ağacı sistemi | İleri düzey okült öğrenciler |
| 1938 | *The Sea Priestess* | Okült roman (kurgu) | Genel okur, kurgu |
| 1949 | *The Cosmic Doctrine* | Kozmik sistem (ölümünden sonra yayımlandı) | İleri düzey okült öğrenciler |

> Not: Yayın yıllarının bir kısmı (1926–1929, 1932, 1938, 1949) yaygın bibliyografyalardan aktarıldı; bu derste tek tek yayıncı sayfalarında doğrulanmadı. Bu dersin başında doğrulanan tarihler: 1922, 1930 (*Psychic Self-Defence*) ve 1935 (*Mystical Qabalah*).

**Okuma sırası önerisi:** Önce kısa ve eleştirel okumaya uygun bir metin (*Sane Occultism*), sonra sistematik uzun metin (*The Mystical Qabalah*).`,
    work: `## Çalışma (sayfa içi)
1. Tabloya **kendi sütunlarını** ekle: "Kurgu mu? Kuramsal mı? Uygulamalı mı?"
2. İki-üç kitabı seç ve okuma planını yaz: hangi sırayla, hangi gerekçeyle.
3. Kaynak eleştirisi: Biyografi yazarlarının (Richardson, Knight, Graf) hangisini önce seçersin ve neden?`,
  },

  "fortune-kabala": {
    reading: `## Okuma metni: Hayat Ağacı'nın klasik karşılık tablosu (Altın Şafak / Fortune geleneği)

Fortune'un *Mystical Qabalah* kitabı, Altın Şafak karşılık sistemini izler; aşağıdaki tablo bu geleneğin standart eşleşmelerinin özetidir (renkler "Kraliçe ölçeği" olarak bilinir). Crowley'in *777* tablosuyla küçük farklar olabilir.

| Sephira | Anlamı | Gezegen / küre | Renk (Kraliçe ölçeği) |
|---|---|---|---|
| **1. Kether** | Taç | Primum Mobile (ilk hareket) | Beyaz |
| **2. Chokmah** | Bilgelik | Zodyak (sabit yıldızlar) | Gri |
| **3. Binah** | Anlayış | Satürn | Siyah |
| **4. Chesed** | Merhamet | Jüpiter | Mavi |
| **5. Geburah** | Güç | Mars | Kırmızı |
| **6. Tiphareth** | Güzellik | Güneş | Sarı (altın) |
| **7. Netzach** | Zafer | Venüs | Yeşil |
| **8. Hod** | Görkem | Merkür | Turuncu |
| **9. Yesod** | Temel | Ay | Mor (menekşe) |
| **10. Malkuth** | Krallık | Dünya (elementler) | Limon sarısı, zeytin yeşili, kızıl-kahve, siyah (dört bölüm) |

**Üç sütun:** Merhamet (Chokmah, Chesed, Netzach), Şiddet/Severity (Binah, Geburah, Hod), Denge (Kether, Tiphareth, Yesod, Malkuth). **Üç üçlü:** Yüce (Kether-Chokmah-Binah), Ahlaki (Chesed-Geburah-Tiphareth), Astral (Netzach-Hod-Yesod); Malkuth tek başına. **22 yol** İbrani harfleriyle ve Tarot Büyük Arkana ile eşleşir.

**Kitabın 27 bölümünün yapısı** bu dersin üstündeki "Bölüm haritası" tablosundadır: *yöntem (1–4) → Ağaç'ın yapısı (5–14) → tek tek Sephiroth (15–27)*.

**Eleştirel not:** Bu eşleşmeler **19. yy. Hermetik Qabalah** sentezidir; tarihsel Yahudi Kabalası aynı karşılıkları (özellikle Tarot, gezegen renkleri) taşımaz.`,
    work: `## Çalışma (sayfa içi)
1. Hayat Ağacı'nı elle çiz (10 daire, üç sütun, 22 yol) ve her Sephira için **isim / gezegen / renk** yaz; tablodaki karşılıklarla kendi çizimini kıyasla.
2. Bölüm haritasını 3 gruba ayır (yöntem / yapı / Sephiroth) ve her gruptan **tek paragraf** özet yaz: bu kitap neyi, hangi sırayla öğretiyor?
3. Fortune'un bir Sephirah karşılığını Crowley'in *777*'sindeki karşılıkla yan yana koy; farkları iki cümleyle not et.`,
  },

  "fortune-psisik": {
    reading: `## Okuma metni: "Objektif saldırı" ile "öznel rahatsızlık" ayrımı ve başvuru ölçütleri

Fortune'un kitabının 9. bölümü (*Distinction Between Objective Psychic Attack and Subjective Psychic Disturbance*), kitabın kendi çerçevesinde bile **her şikâyetin psişik saldırı olmadığı** fikrini taşır. Bu derste bölümün içeriği okunmadığı için ayrıntı verilmez; yalnızca başlığın ima ettiği ayrım kullanılır:

- **"Objektif" iddia**: Belirtilerin dış bir etkenden (başka birinin kasıtlı eyleminden) kaynaklandığı savı.
- **"Öznel" rahatsızlık**: Aynı belirtilerin kişinin kendi ruhsal/bedensel durumundan kaynaklandığı açıklama.

### Sıradan açıklamaları önce ele alma (tıbbi/psikolojik/çevresel)
| Belirti | Sık sıradan açıklamalar |
|---|---|
| Uykusuzluk, kâbus | Stres, kafein/alkol, düzensiz uyku, sağlık sorunları, ilaç yan etkisi |
| Ani yorgunluk | Kansızlık, tiroid, depresyon, bakım yükü |
| Yoğun korku/huzursuzluk | Anksiyete bozuklukları, panik atak, travma |
| "Varlık hissi", işitsel/görsel algılar | Uyku felci, aşırı yorgunluk, ilaç/madde etkisi, psikotik bozukluk gibi ciddi durumlar |
| Ev/oda kötü hissi | Havalandırma, küf, karbonmonoksit, ses/titreşim kaynakları |

### Ne zaman uzman yardımı gerekir?
Aşağıdakilerden biri varsa **ruh sağlığı uzmanına veya doktora başvur** (bu bir okült yorum meselesi değildir):
- Haftalarca süren uykusuzluk veya yeme/iş yapma bozukluğu,
- Kendine/başkasına zarar verme düşünceleri,
- Olmayan ses/görüntü algısı veya "izleniyorum/etkileniyorum" inancının günlük işleyişi bozması,
- Yoğun panik veya dayanılmaz kaygı,
- Madde/ilaç kullanımıyla başlayan belirtiler.

Acil durumda yerel acil numarasını ara.`,
    work: `## Çalışma (sayfa içi)
1. Yukarıdaki tabloya **kendi örneklerini** ekle: bir "garip" deneyimini yaz ve her biri için en az 2 sıradan açıklama ve 1 uzmana başvuru kriteri bul.
2. Fortune'un "tanı tedaviden önce gelir" ilkesini bir cümleyle kendi günlüğüne uygula: bir sorunu yorumlamadan önce hangi basit açıklamaları ele alırsın?
3. "Ne zaman uzmana başvurulur?" listesini kendi sözlerinle yeniden yaz ve yakınlarına gösterilebilecek kısa bir not hâline getir.`,
  },
};
