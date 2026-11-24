import { extraModule } from "./builder";
import { qz } from "../helpers";

export const butlerMagicianModule = extraModule({
  id: "ek-butler-magician",
  title: "The Magician: His Training and Work (W. E. Butler, 1959)",
  tagline: "Dion Fortune çevresinden bir öğretmenin klasik eğitim kitabı: yapı, tehlikeler bölümü ve eleştirel okuma",
  description:
    "Yüklediğin taranmış 'The Magician: His Training and Work' (W. E. Butler, ilk basım 1959) kitabının ek modülü. PDF görüntü olduğundan OCR ile okundu. Modül kitabın dört bölümlü eğitim planını, yazarın 'neden yazıldı' ve 'tehlikeler' bölümlerini ve Tree of Life'ı 'Rosetta Taşı' olarak sunuşunu haritalar; ritüel/egzersiz talimatı vermez.",
  source: {
    file: "w-e-butler-the-magician-his-training-and-work.pdf",
    author: "W. E. Butler (ilk basım 1959; ABD baskısı Wilshire/Shire Book Company)",
    language: "İngilizce (taranmış görüntü PDF, OCR ile okundu)",
    pages: 170,
    readNote: "Künye, önsöz, içindekiler, 1. bölüm (Neden yazıldı: tehlikeler kısmı) ve 3. bölümün (Tree of Life) başı OCR ile okundu. Eğitim bölümlerinin metinleri ve ritüel örnekleri derse konmadı.",
  },
  units: [
    {
      id: "b1",
      title: "1. Kitap, Yazar ve Tutum",
      description: "Künye, önsöz, gizlilik ve inisiyasyon sözlerine bakış.",
      lessons: [
        {
          id: "bu-kunye",
          title: "Künye, önsöz ve içindekiler",
          summary: "1959, dört kısım; yazarın öğretmenleri ve 'acele öğretilmiş bilgi' karşıtlığı.",
          body: `## Künye
*The Magician: His Training and Work* — **W. E. Butler**; **ilk basım 1959**, ikinci–dördüncü baskılar 1963, 1967, 1969; ABD baskısı Melvin Powers / Shire Book Company (North Hollywood). Aynı yazarın diğer kitapları: *Magic: Its Ritual, Power and Purpose*, *Apprenticed to Magic*, *How to Develop Clairvoyance*.

## Önsöz
Butler, kitabın önceki kitabının "daha ayrıntılı devamı" olduğunu söyler ve kendini **Éliphas Lévi, Dion Fortune, Israel Regardie** gibi "büyüsel gökyüzünün tanınmış yıldızları"nın seviyesinde görmediğini belirtir. Yazar, **kırk yıllık** büyüsel çalışmada kendine yardım edenleri anar: Katolik rahipler, serbest kilise papazları, Doğu ve Batı geleneklerinin okültistleri, doktorlar ve psikologlar; "ilk öğretmeni" **Piskopos Robert King**. Ayrıca "özetlenmiş (tabloid) bilgiden" hoşlanmadığını, okuyucunun **kendi yapıcı düşüncesini** kullanmasını beklediğini yazar.

## İçindekiler (OCR'dan)
**Kısım I — Genel:** Kitap neden yazıldı · Büyünün temeli · Yaşam Ağacı.
**Kısım II — Büyücünün eğitimi:** Ön notlar · Astral ışık · Görünmez beden · Görselleştirme ve işitme · Güç sözleri (sesin büyüsel kullanımı) · Büyüsel çalışmada sözler ve adlar · Parlayan renkler · Giysiler · Bilinçaltı · Örülü ışık.
**Kısım III — Büyüsel anahtarlar:** Manyetizma · Tattvik gelgitler · Işık bedeni · Büyüsel kişilik.
**Kısım IV — Büyüsel ritler:** Formların yapımı ve kullanımı · Ritüel kurma · Tılsım büyüsü · Büyüsel kazanıma giden yol · Envoi.
**Ekler:** A Gevşeme ve nefes egzersizleri · B Banishing ritüeli · C Orta Sütun egzersizleri · Kaynakça.

## Çalışma
İçindekileri bu sitedeki Okültizm modülünün 6–7. ünitesiyle (Altın Şafak, enerji modelleri) eşle; hangi başlıklar ortak?`,
          verification: `Künye, önsöz ve içindekiler OCR ile okundu (taranmış PDF; OCR hataları olabilir). Butler'ın biyografisi (Fortune ile bağlantısı) bu PDF'ten değil, aynı yazarın *How to Read the Aura* kitabının tanıtımı ve genel bilgiden gelir.`,
        },
        {
          id: "bu-gizlilik",
          title: "Gizlilik ve 'inisiyasyon yemini' tartışması",
          summary: "Butler'ın ezoterik gizlilik eleştirisi ve Crowley'e atfı.",
          body: `## Bölüm 1 — Neden yazıldı?
Butler, "neden bir büyü kitabı daha?" sorusuna şöyle cevap verir: **büyü uzun süre hurafe, cehalet ve korku bulutunun altında kaldı** ve ayrıca **gizlilik perdesiyle** örtüldü; birinci elden anlatabilecek kişiler **ağır sır yeminleriyle** susturuldu. Bazıları yemini bozdu ama çoğu zaman **kendi güçlerini artırmak için**; "anahtarları" yine saklayarak başka gizli gruplar kurdular.

- **Yemin ve onur:** Yemin bozmak ciddi bir meseledir; ama gizlilik gerekmeyen yerde gizlilik istemek **de onursuzluktur**.
- **Crowley atfı:** Butler, Crowley'in "inisiyasyon yeminiyle susturulduğunu, sonra Yahudi alfabesinin ve gezegen adlarının öğretildiğini" acı biçimde yazdığını anar (bu, *777* girişindeki şikâyetin bir yankısıdır).
- **Büyüsel bilginin iki grubu:** (1) ortalama "okült örgütün" **kitaplarda zaten bulunan** ritüel ve uygulamaları (Kutsal Kitap, *Sefer Yetzirah* "Formation Kitabı", İbrani bilgelik edebiyatı, Gnostik parçalar); (2) bunun ötesi.
- **Kaynaklar:** Dion Fortune'dan aktarma: Batı geleneği "Ofir'den altın, Lübnan'dan sedir" alabilir; Doğu kaynakları olarak Rama Prasad'ın *Nature's Finer Forces* ve Sir John Woodroffe'un (Arthur Avalon) *The Serpent Power*'ı anılır; ayrıca Elizabeth dönemi astrolog John Dee'ye değinilir.

## Eleştirel not
Butler gizlilik karşıtı bir duruş sergiler ama kendisi de **adını vermediği bir "Usta"ya** dayanır (önsözde); bu, bilgi kaynağını denetlenemez kılar.

## Çalışma
Dersteki "iki grup" ayrımını kendi okuma planına uygula: okuduğun bir kitabın hangi bölümleri "zaten kamuya açık" kaynaklara, hangileri iddiaya dayanıyor?`,
          verification: `1. bölümün giriş sayfaları OCR ile okundu; ifadeler özetlendi. Crowley atfı Butler'a aittir; *777* girişiyle benzerliği ek modül *777*'den doğrulanabilir. Kaynak adları (Rama Prasad, Woodroffe) metinde geçen atıflardır.`,
        },
      ],
      quiz: [
        qz("Kitabın ilk basım yılı nedir?", ["1959", "1925", "1971", "1904"], 0),
        qz("Butler kendisini hangi isimlerle kıyaslar?", ["Lévi, Fortune, Regardie", "Aristoteles, Platon", "Newton, Einstein", "Tolstoy, Dostoyevski"], 0),
        qz("Butler'ın 'neden bir büyü kitabı daha' cevabının özü nedir?", ["Büyü hurafe ve gizlilik bulutuyla örtülmüş; açık bir anlatım gerekli", "Daha çok para kazanmak", "Kitap sayısı az", "Yasal zorunluluk"], 0),
        qz("Butler'a göre gizlilik gerekmeyen yerde gizlilik istemek nedir?", ["Onursuzluk", "Erdem", "Yasa", "Bilgelik"], 0),
        qz("Butler'ın ilk öğretmeni olarak anılan kişi kimdir?", ["Piskopos Robert King", "Eliphas Lévi", "Crowley", "Israel Regardie"], 0),
      ],
    },
    {
      id: "b2",
      title: "2. Tehlikeler, Ağaç ve Eğitim Haritası",
      description: "Üç tehlike türü, Tree of Life'ın 'Rosetta Taşı' benzetmesi ve kitabın eğitim planı.",
      lessons: [
        {
          id: "bu-tehlike",
          title: "Büyüsel çalışmanın tehlikeleri: ruhsal, zihinsel-duygusal, psiko-fiziksel",
          summary: "Butler'ın üçlü sınıflaması ve eleştirel okuma (kanıt ve güvenlik).",
          body: `## Butler'ın sınıflaması (1. bölüm)

1. **Ruhsal tehlike:** "Şeytani gurur", **ego şişkinliği**: öğrenci ritüeller yoğunlaştıkça kendini üstün hissetmeye başlar; Butler **büyüsel sanatın tek haklı gerekçesinin "hizmet etmek"** olduğunu söyler ("Hizmet için bilmek isterim"). "İnsanlardan kendini yalıtanın ruhsal bir felaketle karşılaşacağını" belirtir.
2. **Zihinsel-duygusal tehlike:** Kişilik yıllar içinde plansız örülmüş bir yapıdır; "evrenin güçlerini bu yapıya çekince" bastırılmış kompleksler basınç hisseder. Yetenekli bir öğretmenle bu **katarsis (arınma)** olabilir; olmazsa **zihnin dağılması** olabilir. Butler, bunun **çok nadir** olduğunu ve "psikopatolojinin zaten orada olduğunu, büyünün yalnız ortaya çıkardığını" söyler.
3. **Psiko-fiziksel tehlike:** Vitalitede artış ve **endokrin bezler/sinir pleksusları** arasındaki ilişki; merkezlere aşırı konsantrasyon "aşırı hormon salınımı"na yol açabilir; çözümü kitabın eğitim bölümünde verir.

## Basın önyargısı anekdotu
Butler, "kırk bin spiritüalist akıl hastanesinde" iddiasını yapan **Dr. Forbes-Winslow**'un araştırmadan sonra bunu geri çektiğini, ama geri çekmenin basında yer almadığını söyler; okuyucuya uyarıların "kaynağını" sormasını önerir. *(Bu anekdot bağımsız doğrulanmadı.)*

## Eleştirel not
- "Psikopatoloji önceden vardı, büyü yalnız ortaya çıkardı" savı **kanıtlanmış değildir**; yoğun ritüel, uykusuzluk ve inanç sistemi **gerçekten de** bazı kişilerde belirtileri başlatabilir veya şiddetlendirebilir.
- Endokrin/hormon açıklamaları **popüler biyomedikal dil**dir; klinik kanıtla desteklenmiş bir mekanizma değildir.
- Güvenli yaklaşım: **ruh sağlığı uzmanıyla çalışma**, uykuyu koruma, belirtilerde (panik, gerçeklik algısı değişimi) ara verme.

## Çalışma
Butler'ın üç tehlikesinin her biri için "erken uyarı işaretleri" ve "kime başvurulur" listesi çıkar.`,
          verification: `1. bölümün tehlikeler kısmı OCR ile okundu. Dr. Forbes-Winslow anekdotu Butler'ın anlatımıdır; bağımsız doğrulanmadı. Eleştirel notlar ders yazarına aittir (klinik doğrulama iddiası yoktur).`,
        },
        {
          id: "bu-agac",
          title: "Yaşam Ağacı: 'okült Rosetta Taşı' ve eğitim haritası",
          summary: "Ağaç bir harita değil, ilişkiler diyagramı; kitabın IV kısımlı eğitim planı.",
          body: `## 3. bölümün ana fikri
Butler Yaşam Ağacı'nı **"okült bir Rosetta Taşı"** olarak sunar: Ağaç üzerindeki İbranice adların anlamını bulunca "başka herhangi bir felsefe sistemini Ağaç üzerine yerleştirebilir" ve nasıl işlediğini görebilirsin. Ağaç, Batı geleneğinin (**Yunan, Mısır, Keldani, İsrail**) **bileşik** mirasını taşıyan mandala benzeri bir diyagramdır.

**Önemli uyarı (Butler):** Ağaç, ruhun veya evrenin "keşfedilmemiş bir ülkesinin haritası" değildir; **temel güçlerin karşılıklı ilişkisinin diyagramıdır**. Orta Çağ büyüsünün arka planı olan felsefenin "sakatlanmış parçaları" bu mirastan kalmıştır.

## Eğitim planı (kısımlar)
- **II. Kısım** egzersizleri (astral ışık, görünmez beden, görselleştirme, ses/isimler, renkler, giysi, bilinçaltı, örülü ışık): *tekniklerin adlarıdır*, bu modül uygulama öğretmez.
- **III. Kısım**: manyetizma, tattvik gelgitler (Hint tattva sistemi), **Işık Bedeni**, **Büyüsel Kişilik** (Magical Personality).
- **IV. Kısım**: formlar, ritüel kurma, tılsım büyüsü, "büyüsel kazanım yolu".
- **Ekler:** gevşeme/nefes, banishing, **Orta Sütun** egzersizleri.

## Karşılaştırma
Orta Sütun ve banishing için aynı geleneğin farklı anlatımları: Regardie (Okültizm 6. ünite), Basick Magick (ek modül), Fortune (Okültizm 12. ünite).

## Çalışma
"Rosetta Taşı" benzetmesini eleştir: farklı sistemleri Ağaç'a yerleştirmek **doğru çeviri midir, yoksa zorlama mı**? İki sistemde bir örnek dene (ör. gezegenler ve Yunan tanrıları).`,
          verification: `3. bölümün başı ve içindekiler OCR ile okundu. "Rosetta Taşı" benzetmesi ve "harita değil diyagram" uyarısı metinde geçer. Eğitim bölümleri ve ekler başlık düzeyinde haritalandı.`,
        },
      ],
      quiz: [
        qz("Butler'ın tehlike sınıflamasında ilk tür hangisidir?", ["Ruhsal (gurur/ego şişkinliği)", "Hukuki", "Finansal", "Coğrafi"], 0),
        qz("Butler Yaşam Ağacı'nı neye benzetir?", ["Okült bir Rosetta Taşı", "Bir kale", "Bir saat", "Bir pusula"], 0),
        qz("Butler'a göre Ağaç nedir?", ["Temel güçlerin karşılıklı ilişkisinin diyagramı", "Ruhun coğrafi haritası", "Dünya haritası", "Takvim"], 0),
        qz("'Psikopatoloji zaten vardı' savı için doğru değerlendirme nedir?", ["Kanıtlanmış değildir; yoğun ritüel belirtileri başlatabilir/şiddetlendirebilir", "Kesin bilimsel gerçek", "Resmî tanı", "Yasal ilke"], 0),
        qz("Butler'a göre büyüsel çalışmanın tek haklı gerekçesi nedir?", ["İnsanlara hizmet etmek", "Güç kazanmak", "Zengin olmak", "Ünlü olmak"], 0),
        qz("Belirtilerde (panik, gerçeklik algısı değişimi) güvenli adım nedir?", ["Ara verip ruh sağlığı uzmanına başvurmak", "Çalışmayı artırmak", "Kimseye söylememek", "Ritüeli değiştirmek"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Eğitim bölümlerinin metinleri (astral ışık, görünmez beden, görselleştirme, güç sözleri, renkler, giysiler, ritüel kurma, tılsım büyüsü, ekler):** Talimat niteliğinde; ayrıca taranmış PDF olduğundan tamamının OCR'ı yapılmadı.
- **Dr. Forbes-Winslow anekdotu:** Bağımsız doğrulanamadı; Butler'ın anlatımı olarak etiketlendi.
- **Endokrin/hormon–çakra bağlantısı iddiaları:** Klinik kanıt yok; yazarın modeli.
- **Butler'ın biyografisi ve Fortune ile ilişkisi:** Bu PDF'ten tam doğrulanmadı; genel bilgi olarak kaldı.
- **OCR hataları:** Taranmış metinde sayı ve ad hataları olabilir; alıntılar kısa tutuldu.`,
});
