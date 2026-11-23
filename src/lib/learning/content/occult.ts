import type { ModuleContent } from "./types";
import { qz } from "../helpers";
import { occultBodiesA } from "./occult-a";
import { occultBodiesB } from "./occult-b";
import { occultBodiesC } from "./occult-c";

export const occultContent: ModuleContent = {
  bodies: { ...occultBodiesA, ...occultBodiesB, ...occultBodiesC },
  quizzes: {
    u1: [
      qz("Pisagor topluluğunun yerleştiği Güney İtalya kenti hangisidir?", ["Syrakusa", "Krotone", "Napoli", "Pompei"], 1, "Pisagor'un Krotone'de topluluk kurduğu kaynaklarda (SEP, Britannica) yer alır."),
      qz("Akusmatikoi ile mathematikoi ayrımı ne anlatır?", ["Biri Mısır, öbürü Yunan kökenlidir", "Dinleyenler (sözleri kabul eden) ve öğrenenler (bilimsel araştırma yapan)", "Biri kadınlar, öbürü erkekler", "Biri rahipler, öbürü askerler"], 1, "Akusmatikoi sözleri kabul eden dinleyenlerdir; mathematikoi aritmetik, müzik, astronomi araştıranlardır."),
      qz("Tetraktys neyi simgeler ve neden sayılır?", ["Kare bir sembol, 4 element", "10 noktalı, 1+2+3+4 = 10 olan bir şekil", "Üç köşeli bir çember", "Haç şekli"], 1),
      qz("Platon'un 'Mağara alegorisi' hangi eserde geçer?", ["Timaios", "Symposium", "Devlet (VII. kitap)", "Kratylos"], 2),
      qz("Corpus Hermeticum için bugünkü akademik görüş hangisidir?", ["Musa'dan önceki Mısır metinleri", "MS 1.–3. yy. Yunanca felsefi-dinsel metinler", "Ortaçağ Arap simya risaleleri", "19. yüzyıl Teosofik metinleri"], 1, "Casaubon 1614'te metinlerin Hristiyanlık sonrası olduğunu gösterdi."),
      qz("Ficino, Corpus Hermeticum'u hangi yılda Latinceye çevirmiş (tamamlamış) kabul edilir?", ["1263", "1463", "1563", "1663"], 1, "1463'te tamamlandı; ilk basım 1471'dir."),
      qz("Nag Hammadi buluntusu hangi alanla ilgilidir?", ["Hermetik simya el yazmaları", "Gnostik metinler", "Kabala'nın Zohar nüshası", "Grimuarlar"], 1),
      qz("Iamblichus'un teurji anlayışı neyi vurgular?", ["Yalnızca felsefi düşünceyle kurtuluş", "Kutsal ritüeller ve sembollerle ruhun yükselişi", "Maddenin reddi", "Astrolojiden kaçınma"], 1),
    ],
    u2: [
      qz("Agrippa'nın *De occulta philosophia*'sının üç dünyası hangileridir?", ["Maddi, ahlaki, siyasi", "Elementer, göksel, entelektüel", "Dünya, ay, güneş", "Doğa, ruh, tanrı"], 1),
      qz("Eserin üç kitabı hangi yıllarda tamamlanmış hâliyle yayımlandı?", ["1486", "1510", "1533", "1614"], 2, "İlk kitap 1531, üç kitabın tamamı 1533."),
      qz("Ficino'nun *De vita libri tres*'i hangi yılda yayımlandı?", ["1389", "1489", "1589", "1689"], 1),
      qz("Pico'nun Kabala ile ilgili yaklaşımı hangi geleneğin başlangıcı sayılır?", ["Hermetik Altın Şafak", "Hristiyan Kabalası", "Teosofi", "Gnostisizm"], 1),
      qz("Goetia hangi eserin ilk kitabıdır?", ["Picatrix", "Lemegeton", "Clavicula Salomonis", "Enochian Tabletleri"], 1),
      qz("Mathers ve Crowley'in Goetia baskısı hangi yılda yayımlandı?", ["1704", "1804", "1904", "1954"], 2),
      qz("Grimuarlar için en önemli kaynak eleştirisi sorusu hangisidir?", ["Kapağı güzel mi?", "Hangi el yazmasına dayanıyor ve metin nasıl değişmiş?", "Kaç sayfa?", "Kimin okuduğu"], 1),
    ],
    u3: [
      qz("Hermetik Qabalah ile tarihsel Yahudi Kabalası arasındaki doğru ifade hangisidir?", ["Aynı şeydir", "Farklı geleneklerdir; Hermetik Qabalah 19. yy. Batı okült sentezidir", "Hermetik daha eskidir", "Yahudi Kabalası Hıristiyandır"], 1),
      qz("Sefer Yetzirah için kaynaklarda verilen genel dönem aralığı nedir?", ["MÖ 5. yy.", "MS 2.–6. yy. (tartışmalı)", "MS 15. yy.", "MS 19. yy."], 1),
      qz("Zohar'ın dolaşıma girdiği dönem ve yer kabul gören görüşe göre nedir?", ["13. yüzyıl sonu İspanya", "MS 2. yüzyıl Babil", "16. yüzyıl Floransa", "19. yüzyıl Londra"], 0),
      qz("Mathers'ın *The Kabbalah Unveiled*'i hangi metinden çevrilmiştir?", ["Aramice Zohar orijinalinden doğrudan", "Rosenroth'un Latince Kabbala Denudata çevirisinden", "İbranice Sefer Yetzirah'tan", "Fransızca Lévi'den"], 1),
      qz("Hayat Ağacı'ndaki Sephira sayısı ve yol sayısı nedir?", ["7 ve 12", "10 ve 22", "12 ve 10", "22 ve 10"], 1),
      qz("Altın Şafak düzeninde Tiphareth hangi gezegenle eşleşir?", ["Satürn", "Güneş", "Venüs", "Ay"], 1),
      qz("Fortune'un *The Mystical Qabalah* hangi yıl yayımlandı?", ["1875", "1905", "1935", "1965"], 2),
    ],
    u4: [
      qz("Lévi'nin *Dogme et Rituel de la Haute Magie* eseri hangi yıllarda yayımlandı?", ["1754–1756", "1854–1856", "1954–1956", "1654–1656"], 1),
      qz("Waite'in Lévi çevirisi hangi adla yayımlandı?", ["Transcendental Magic", "The Kabbalah Unveiled", "Western Esotericism", "The Golden Dawn"], 0),
      qz("Altın Şafak Hermetik Düzeni hangi yılda ve nerede kuruldu?", ["1788, Paris", "1888, Londra", "1938, Chicago", "1988, New York"], 1),
      qz("Altın Şafak'ın kurucu üçlüsü hangisidir?", ["Crowley–Fortune–Regardie", "Westcott–Woodman–Mathers", "Blavatsky–Olcott–Judge", "Waite–Yeats–Farr"], 1),
      qz("Regardie *The Golden Dawn*'ı yaklaşık hangi yıllarda yayımladı?", ["1887–1890", "1937–1940", "1977–1980", "1997–2000"], 1),
      qz("Theosophical Society kaç yılında kuruldu?", ["1775", "1875", "1975", "1675"], 1),
      qz("Blavatsky'nin 1888'de yayımlanan eseri hangisidir?", ["Isis Unveiled", "The Secret Doctrine", "Psychic Self-Defence", "Liber AL"], 1),
      qz("Fohat kavramı hangi gelenekte geçer ve fizikteki elektrikle eşitlenebilir mi?", ["Teosofi'de geçer; fizikle eşitlenemez, tarihsel kavramdır", "Simya'da geçer; eşitlenir", "Kabala'da geçer; eşitlenir", "Gnostisizm'de geçer; eşitlenir"], 0),
    ],
    u5: [
      qz("Günlük tutarken gözlem ile yorumu neden ayırmalısın?", ["Daha uzun görünsün", "Yorumun gözlemi saptırmasını önlemek ve sonradan değerlendirebilmek için", "Zorunluluk olduğu için", "Hiçbir fark yok"], 1),
      qz("LBRP'nin bilimsel koruma etkisi için doğru ifade hangisidir?", ["Kanıtlanmıştır", "Bağımsız kanıt yoktur; psikolojik/dikkat toplama işlevi olabilir", "Tıbbi tedavidir", "Yalnızca gece işe yarar"], 1),
      qz("*The Middle Pillar* hangi yıl yayımlandı?", ["1738", "1838", "1938", "2038"], 2),
      qz("Tarot'un kökeni için tarihsel olarak belgelenen bilgi hangisidir?", ["Kadim Mısır kitabıdır", "15. yy. kuzey İtalya'da oyun kartı olarak ortaya çıktı", "Çin kökenli", "Altın Şafak icadı"], 1),
      qz("Rider–Waite–Smith destesinin çıkış yılı yaklaşık hangisidir?", ["1809", "1909", "2009", "1709"], 1),
      qz("Güvenli ritüel tasarımında hangi amaç seçimi önerilir?", ["Başkasının iradesini etkilemek", "Kendi iç dünyana dönük, ölçülebilir amaçlar", "Hastalık tedavisi", "Hukuki dava sonucu"], 1),
    ],
    u6: [
      qz("Dört element fikrini ilk ifade eden filozof kimdir?", ["Sokrates", "Empedokles", "Platon", "Herakleitos"], 1),
      qz("Aristoteles'e göre Ateş hangi niteliklerin birleşimidir?", ["Sıcak + kuru", "Soğuk + ıslak", "Sıcak + ıslak", "Soğuk + kuru"], 0),
      qz("Hangisi doğrudur?", ["Dört element modern kimyada geçerli modeldir", "Dört element tarihsel/sembolik bir sınıflandırmadır", "Elementler Mendeleev'in cetvelidir", "Elementler yalnızca Hint kaynaklıdır"], 1),
      qz("Modern Pagan cadılık (Wicca) için kabul gören tarihsel köken hangisidir?", ["Antik Roma", "20. yüzyıl ortası (Gardner çevresi)", "Ortaçağ", "Paleolitik"], 1),
      qz("Zodyakta ateş elementine ait burç dizisi hangisidir?", ["Koç–Aslan–Yay", "Boğa–Başak–Oğlak", "İkizler–Terazi–Kova", "Yengeç–Akrep–Balık"], 0),
    ],
    u7: [
      qz("Simyanın klasik üç aşaması hangileridir?", ["Nigredo–Albedo–Rubedo", "Alpha–Beta–Gamma", "Solve–Fixe–Coagula", "Kether–Chokmah–Binah"], 0),
      qz("Paracelsus'un simya alanındaki rolü nedir?", ["Simyayı tıp (iatrokimya) yönüne taşıdı", "Simyayı yasakladı", "Zümrüt Tablet'i yazdı", "Altın Şafak'ı kurdu"], 0),
      qz("Jung'un simya yorumu ne söyler?", ["Simya yalnızca kimyaydı", "Simya bireyleşme sürecinin sembolik yansımasıdır", "Simya Teosofi'ye aittir", "Simya sahte bir bilimdir"], 1),
      qz("Zümrüt Tablet'in bilinen en eski metinleri hangi dildedir?", ["Latince", "Arapça", "Yunanca", "İbranice"], 1),
      qz("Spagirik çalışmada bu müfredatın güvenli çerçevesi hangisidir?", ["Sağlık amaçlı ilaç yapmak", "Kayıtlı, gözlemsel, tüketilmeyen basit bitkisel deney", "Mineral/ağır metal işleme", "Yüksek ısıda alev altında damıtma"], 1),
    ],
    u8: [
      qz("*The Etheric Double* hangi yıl yayımlandı?", ["1825", "1925", "1975", "1625"], 1),
      qz("Eterik beden kavramı hangi gelenekle ilişkili olarak anlatılır?", ["Teosofi", "Stoacılık", "Hermetik tıp", "Rönesans Platonculuğu"], 0),
      qz("Kirlian fotoğrafının görüntüleri nasıl açıklanır?", ["Aura kanıtı", "Nem/basınç ve elektriksel korona boşalmasıyla", "Ruhsal enerji sızıntısı", "Çakra aktivasyonu"], 1),
      qz("Meridyenlerin bilimsel durumu hakkında hangisi doğrudur?", ["Anatomik karşılığı gösterilmiştir", "Anatomik karşılığı gösterilememiştir", "MR ile görüntülenir", "DNA'da yer alır"], 1),
      qz("Burger'ın *Esoteric Anatomy* kitabı hakkında hangisi doğrudur?", ["Kadim tek bir sistemi aktarır", "Farklı gelenekleri birleştiren çağdaş Batı sentezidir", "Tıp ders kitabıdır", "Simya gravürleri kataloğudur"], 1),
    ],
    u9: [
      qz("Sembol ve işaret arasındaki fark nedir?", ["Hiçbiri", "İşaretin anlamı sabit; sembol çok katmanlı ve bağlama göre değişir", "İşaret dinîdir", "Sembol yalnızca dövmede kullanılır"], 1),
      qz("Dövme seçiminde hangi öneri sağduyuludur?", ["Hemen yaptır", "Bir sembolü bir ay veya daha uzun süre bekleyip araştır", "Bir kültürden kopyala, anlamına bakma", "Sembolü rastgele değiştir"], 1),
      qz("Ötzi hangi alanla ilişkili bir bulgudur?", ["Yazının icadı", "Bilinen en eski dövme örneklerinden biri", "Tarot kartları", "Simya laboratuvarı"], 1),
      qz("Eliade hangi çifti temel alır?", ["Doğru–yanlış", "Kutsal–profan", "İyi–kötü", "Ruh–beden"], 1),
      qz("Bir sembolün anlamını doğru değerlendirmek için ilk ne yapılmalıdır?", ["Bağlamını (kültür, dönem, kullanım) araştırmak", "En popüler yorumu almak", "Rengine bakmak", "Anlamı kendiliğinden uydurmak"], 0),
      qz("Jung'un 'arketip' kavramı sembol okumasında ne işe yarar?", ["Ortak insani imge kalıplarını düşünmek için bir çerçeve sunar; kesin kanıt değildir", "Sembolün tek doğru anlamını belirler", "Tarihî doğrulama sağlar", "Dövme tekniğini anlatır"], 0),
    ],
    u10: [
      qz("Faivre'e göre ezoterik düşüncenin temel özelliklerinden biri hangisidir?", ["Karşılıklar (correspondences)", "Şiddetli ateizm", "Mutlak materyalizm", "Sadece sözlü aktarım"], 0),
      qz("Hanegraaff'ın 'reddedilmiş bilgi' kavramı neyi anlatır?", ["Ezoterizmin bilimce kanıtlandığını", "Ezoterizmin akademik ve kilise kültüründe dışlanmış bir bilgi alanı olarak ele alınmasını", "Gizli bilgilerin satıldığını", "Dinlerin birleşmesini"], 1),
      qz("'Uydurulmuş gelenek' ne demektir?", ["Eski bir geleneğin tarihi", "Yeni bir pratiğin eskiymiş gibi sunulması", "Dilsel çeviri hatası", "Bir sembolün anlamı"], 1),
      qz("Otorite bağımlılığına işaret eden kırmızı bayrak hangisidir?", ["Kitap okuma", "Lider kontrolü, para ve ayrılmayı engelleme", "Günlük tutma", "Meditasyon"], 1),
      qz("Yoğun çalışma sırasında panik veya dissosiyasyon belirirse ne yapmalı?", ["Çalışmayı artırmak", "Ara vermek ve uzmandan destek almak", "Başkalarına anlatmamak", "İlaç kullanmak"], 1),
      qz("Sprengel yazışmaları hakkında doğru ifade hangisidir?", ["Tüm tarihçilerce doğrulanmıştır", "Gerçekliği tartışmalıdır", "Fransızca yazılmıştır", "Crowley'e aittir"], 1),
    ],
    u12: [
      qz("Dion Fortune'un doğum adı nedir?", ["Violet Mary Firth", "Mina Mathers", "Annie Besant", "Florence Farr"], 0),
      qz("Fortune'un kurduğu topluluk sonradan hangi adı almıştır?", ["Society of the Inner Light", "Hermetic Order of the Golden Dawn", "Ordo Templi Orientis", "Theosophical Society"], 0),
      qz("Fortune'a göre Hayat Ağacı nedir? (The Mystical Qabalah, Foreword)", ["Batı Esoterik Geleneği'nin plan şeması", "Yalnızca bir takvim", "Tarot kartlarının listesi", "Simya reçetesi"], 0),
      qz("Fortune'un 'simgeden simgeye akıl yürütme' için kullandığı benzetme nedir?", ["Cebir", "Müzik", "Resim", "Mimari"], 0, "3. bölümde sembolün cebirdeki gibi bilinmeyene ulaşmak için kullanıldığını söyler."),
      qz("Psychic Self-Defence'te vurgulanan temel kural hangisidir?", ["Tanı tedaviden önce gelmelidir", "Saldırıya saldırıyla karşılık verilmelidir", "Her rahatsızlık psişik saldırıdır", "Hiç tanı konmamalıdır"], 0),
      qz("Kitabın 9. bölümü hangi ayrımı yapar?", ["Objektif psişik saldırı ile öznel psişik rahatsızlık", "Parafin ile soya mumu", "Kabala ile simya", "Gece ile gündüz"], 0),
      qz("Kaygı, uykusuzluk ve benzeri belirtilerde bu modülün önerdiği ilk adım nedir?", ["Ruh sağlığı uzmanına başvurmak", "Hemen bir ritüel yapmak", "Kimseye anlatmamak", "Kitabı bırakmak"], 0),
    ],
    u11: [
      qz("5 yıllık yol haritasında ilk yıl neyi hedefler?", ["Ustalık", "Temel okuma ve 365 günlük pratik kaydı", "Grup kurmak", "Kitap yayımlamak"], 1),
      qz("Astroloji modülü hangi yılın çalışmalarıyla entegre edilir?", ["Yıl 1", "Yıl 3", "Yıl 5", "Hiçbiri"], 1),
      qz("Yıl 5'in çıktısı nedir?", ["Dövme", "Kaynakçalı bir başlangıç rehberi", "Grimuar kopyası", "Ritüel gösterisi"], 1),
      qz("Beş yıllık planın ana işlevi nedir?", ["Okuma, pratik ve eleştiriyi yıllara yayarak ilerlemeyi ölçülebilir kılmak", "Hızlıca derece almak", "Tüm kitapları bir yılda bitirmek", "Grup üyeliği kazanmak"], 0),
      qz("Yıl 4'ün teması nedir?", ["Simya ve enerji modelleri", "Yalnızca tarot", "Dövme", "Grup kurmak"], 0),
    ],
  },
  notIncluded: `## Bu modülde bilinçli olarak eklenmeyenler ve nedenleri

**Yöntem:** Bir bilgi, güvenilir bir kaynakta (akademik/ansiklopedik, birincil metin veya yüklediğin kitaplar) doğrulanamıyorsa ders metnine **olgu olarak** eklenmedi. Gelenek iddiaları "gelenek şöyle anlatır" kalıbıyla, doğrulanmış tarihsel olgulardan ayrı sunuldu.

**Güncelleme (kaynak politikası):** Okültizm ve astrolojide her iddiayı internetten doğrulamak mümkün olmayabilir; bu yüzden tanınmış yazarların (Crowley, Dion Fortune, Lévi, Butler vb.) ve yüklediğin kitapların öğretileri **"yazara göre"** diye atfedilerek öğretilir. Tarihsel olgular ayrıca doğrulama notlarıyla işaretlenir.

**Dion Fortune (12. ünite):** Yalnızca çevrimiçi tam metinde doğrudan okunabilen bölümlerden ders yazıldı. *Mystical Qabalah* bölüm 5–27 ve *Psychic Self-Defence* bölüm 2–20'nin **içeriği** okunmadığı için derse konmadı (yalnızca başlıklar); *Psychic Self-Defence*'in "savunma yöntemleri" talimat olarak verilmedi. *Cosmic Doctrine* ve diğer kitaplar için doğrulanmış bir metin okunmadığından ders yok.

### Eklenmeyenler

- **Psişik fenomenler** (levitasyon, materyalizasyon/demateryalizasyon, prekognisyon, astral projeksiyon, ektoplazma) — *Lirvian notlarında ve bazı kitaplarda yer alıyor.* **Neden:** Kontrollü deneylerde tekrarlanabilir kanıt yok; tarihsel/kültürel anlatı olarak anılır, öğretilen bilgi olarak verilmez.
- **"Okült elektrik / Fohat" ile fizikteki elektriği eşitleme, "kuantum ezoterizmi"** (dalga–parçacık, dolanıklık, gözlemci etkisi ile okült kavramların eşleştirilmesi) — **Neden:** Bu eşleştirmeler fiziksel kuramın yanlış ölçekte kullanımıdır; güvenilir kaynak yok. Fohat yalnızca Teosofik bir kavram olarak anıldı.
- **"Gerçek isim doktrini" ve EMET ile ilgili okült yorumlar (Lirvian notları)** — **Neden:** Birincil kaynak/akademik doğrulama bulunamadı; sadece İbranice "emet"in "hakikat" anlamı bilinen bir sözcüktür, ötesindeki sembolik iddialar kaynaksız.
- **Aura renklerinin kişilik/sağlık yorumları, psişik vampirizm, eterik sızıntı** — **Neden:** Bağımsız kanıt yok; yalnızca tarihsel/Teosofik model olarak anıldı.
- **Çakra/meridyen/Polarity Therapy'nin sağlık-şifa iddiaları** (Randolph Stone, *The Body Meridians*, Burger) — **Neden:** Klinik kanıt yetersiz; tıbbi tavsiye verilmez. Kitaplar tarihsel/kültürel kaynak olarak listelendi.
- **Goetia/evokasyon uygulama talimatları** — **Neden:** Güvenlik ve etik; müfredat grimuarları tarihsel ve edebî metin olarak inceler.
- **Başkalarına yönelik bağlama/aşk/zarar büyüleri** — **Neden:** Etik; öğretilmez.
- **Crowley'in kişisel/siyasi iddiaları, "çağ" kehanetleri** — **Neden:** Bağımsız doğrulama yok; eleştirel biyografi önerildi. *Ay Çocuk* bir romandır, öğreti kaynağı değildir.
- **"Kybalion" ve "7 Hermetik İlke"** (kitaplığında yok) — **Neden:** 1908'de "Üç İnisiye" adıyla yayımlanan modern bir metindir; antik Hermetica ile karıştırılması yaygındır, burada Corpus Hermeticum esas alındı.
- **Modern pratik kılavuzların içerikleri** (*Ars Vercanus*, *Basick Magick*, *Planetary Magick*, *Practical Occultism*) — **Neden:** Bu yüklenen kaynakların iddiaları bu çalışmada bağımsız olarak doğrulanmadı; kütüphane listesinde yer alıyor, ders metnine alıntı yapılmadı.

### Henüz doğrulama yapılmayan (genel alan bilgisi) başlıklar
Bazı derslerde ("Tarot tarihi", "Simya tarihi", "Aura/Kirlian", "Faivre ve Hanegraaff", "Ötzi") verilen tarihler standart ansiklopedik bilgidir; bu çalışmada web ile ayrıca doğrulanmadı ve bu durum ilgili dersin "Doğrulama notu"nda belirtildi. Önemli kararlar için birincil/akademik kaynağa bak.

*Bu notları sağdaki düzenleme alanından değiştirebilirsin.*`,
};
