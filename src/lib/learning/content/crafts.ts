import type { ModuleContent } from "./types";
import { qz } from "../helpers";
import { craftsBodies } from "./crafts-bodies";

export const craftsContent: ModuleContent = {
  bodies: craftsBodies,
  quizzes: {
    b1: [
      qz("Kuru çimento tozuyla çalışırken hangi koruma gerekir?", ["Toz maskesi, gözlük ve eldiven", "Yalnızca önlük", "Hiçbiri", "Sadece şapka"], 0),
      qz("Çimentolu atık suyu nereye dökülmemelidir?", ["Lavaboya (tıkanıklık yapar)", "Kovaya", "Çöp poşetine kurutulup", "Hiçbir yer"], 0),
      qz("Karışım/su oranını belirlerken en güvenilir referans nedir?", ["Ürün etiketi/üretici talimatı", "Rastgele bir video", "Komşu tavsiyesi", "Gözle tahmin"], 0),
      qz("Numune plakası ne işe yarar?", ["Gerçek ürüne geçmeden oran/pigment/ayırıcı etkisini denemek", "Süslemek", "Kalıp ölçmek", "Fiyat belirlemek"], 0),
      qz("Mumu ısıtırken doğru yöntem hangisidir?", ["Çift cidarlı (benmari) ısıtma", "Doğrudan açık alev", "Mikrodalgada kapalı kap", "Fırında kapaksız"], 0),
    ],
    b2: [
      qz("Kalıp ayırıcının amacı nedir?", ["Betonun kalıba yapışmasını önlemek", "Rengi değiştirmek", "Mumu eritmek", "Dayanıklılığı artırmak"], 0),
      qz("Hava kabarcıklarını azaltmak için ne yapılır?", ["İnce katmanlarla doldurup kalıbı hafifçe titreştirmek", "Kalıbı kapatıp beklemek", "Daha fazla su eklemek", "Kalıbı dondurmak"], 0),
      qz("Fazla su betona ne yapar?", ["Dayanıklılığı düşürür", "Dayanıklılığı artırır", "Etkisi yoktur", "Rengi koyulaştırır"], 0),
      qz("Mum dökmeden önce beton kap nasıl olmalıdır?", ["Tamamen kuru", "Hâlâ nemli", "Islak", "Sıcak"], 0),
      qz("Kürleme sırasında çok hızlı kuruma neye yol açabilir?", ["Çatlağa", "Daha parlak yüzeye", "Daha hafif ürüne", "Hiçbir şeye"], 0),
      qz("Kuruluğu anlamak için bu eğitimde önerilen kendi ölçüm yöntemi nedir?", ["Ağırlığı birkaç gün ölçüp sabitlenmesini beklemek", "Rengine bakmak", "Koklamak", "Dokunup tahmin etmek"], 0),
    ],
    b3: [
      qz("İç yüzey neden kaplanır?", ["Betonun gözeneklerine mum/yağ işlemesini azaltmak için", "Daha ağır olması için", "Rengi açmak için", "Yasal zorunluluk"], 0),
      qz("Contalayıcı seçerken neye bakılmalıdır?", ["Üreticinin mumla temas ve ısı uygunluk bilgisine", "Fiyatına", "Ambalajına", "Kokusuna"], 0),
      qz("Tabana keçe/mantar pul yapıştırmanın amacı nedir?", ["Masayı çizmemek ve kayma/sallanmayı önlemek", "Mumu ısıtmak", "Rengi korumak", "Ağırlığı artırmak"], 0),
      qz("Zımparada doğru sıra hangisidir?", ["Kaba → ince gren", "İnce → kaba", "Sadece kaba", "Zımpara kullanılmaz"], 0),
      qz("3 farklı iç yüzeyi denemenin amacı nedir?", ["Sızdırma/yapışma performansını karşılaştırmak", "Süs", "Hız", "Ambalaj"], 0),
    ],
    b4: [
      qz("Fitil seçiminin doğruluğunu ne gösterir?", ["Yanma testi", "Fitil tablosu tek başına", "Fiyat", "Renk"], 0),
      qz("Mumun teknik değerleri (erime noktası, koku yükü) nereden alınmalıdır?", ["Kullanılan ürünün tedarikçi teknik sayfasından", "Genel bir tablodan", "Tahminle", "Rastgele forumdan"], 0),
      qz("Yanma testi sırasında güvenlik açısından ne yapılmalıdır?", ["Gözetimsiz bırakmamak ve yanıcı olmayan yüzeyde yapmak", "Odayı kilitlemek", "Perde yakınına koymak", "Çocuklara bırakmak"], 0),
      qz("Mum–kap ayrılmasını (ıslak nokta) azaltmak için hangisi denenebilir?", ["Kabı hafifçe ısıtmak ve ortamı sabit tutmak", "Kabı dondurmak", "Mumu çok soğuk dökmek", "Fitili uzatmak"], 0),
      qz("Kürleme (dinlendirme) süresi nasıl belirlenir?", ["Aynı mumu farklı günlerde yakıp kendi testinle karşılaştırarak", "Herkes için 24 saattir", "Hiç gerekmez", "Sadece renge bakarak"], 0),
      qz("Her döküm için kayıt tablosuna hangi bilgiler yazılmalıdır?", ["Mum tipi, döküm sıcaklığı, kap sıcaklığı, koku %, fitil", "Sadece tarih", "Sadece fiyat", "Hiçbiri"], 0),
    ],
    b5: [
      qz("Sorun gidermede neden tek değişken değiştirilir?", ["Nedenin hangi değişiklikten geldiğini ayırt edebilmek için", "Zaman kazanmak için", "Maliyet için", "Estetik için"], 0),
      qz("Buzlanma (frosting) nedir?", ["Bitkisel mumlarda görülen beyaz kristal görünüm (çoğunlukla estetik)", "Fitil sorunu", "Beton çatlağı", "Koku kaybı"], 0),
      qz("Tünelleme çoğunlukla neyden kaynaklanır?", ["İlk yakışta yetersiz erime havuzu / küçük fitil", "Çok büyük fitil", "Fazla boya", "Soğuk oda"], 0),
      qz("Betonda çatlağın yaygın nedeni hangisidir?", ["Çok hızlı kuruma veya fazla su", "Çok yavaş kuruma", "Fazla pigment", "Zımpara"], 0),
      qz("Beton yüzeyde toz bırakma neyi işaret edebilir?", ["Yetersiz yüzey kaplaması veya zayıf karışım", "Mükemmel kürleme", "Güçlü karışım", "Fazla ısı"], 0),
    ],
    b6: [
      qz("Birim maliyete hangisi dahil edilmelidir?", ["Malzeme, işçilik süresi, fire ve ambalaj", "Sadece malzeme", "Sadece ambalaj", "Sadece kâr"], 0),
      qz("Mum etiketi/güvenliğiyle ilgili referans standartlar nelerdir?", ["ASTM F2058 ve F2417 (ABD kaynaklı, ücretli)", "ISO 9001 yalnızca", "Standart yoktur", "TS EN 1 tek başına"], 0, "Bu eğitim standardın içeriğini özetlemez; yalnızca varlığını ve kapsamını bildirir."),
      qz("Türkiye'de satış için yasal gereklilikler nasıl doğrulanmalıdır?", ["Resmi kaynaklardan ve gerekirse uzmandan", "Yabancı bloglardan", "Sosyal medyadan", "Doğrulama gerekmez"], 0),
      qz("Kırılgan beton ürünün kargosunda önemli olan nedir?", ["Köşe/sarsıntıya karşı dolgu ve sağlam koli", "Hiçbir paketleme", "İnce poşet", "Sadece etiket"], 0),
      qz("Maliyet Hesaplama sayfasında fire neden eklenir?", ["Başarısız dökümler gerçek maliyeti artırır", "Vergi içindir", "Zorunlu değildir", "Süs"], 0),
    ],
    d1: [
      qz("Hangisi damgalama/şekillendirme için genelde uygun deridir?", ["Bitkisel tabaklı", "Krom tabaklı", "Sentetik", "Hepsi eşit"], 0),
      qz("Başlangıç alet setinde hangisi bulunur?", ["Kesim matı, metal cetvel, delgi, iğne, mumlu iplik, kenar parlatıcı (burnisher)", "Sadece makas", "Dikiş makinesi şart", "Hiçbiri"], 0),
      qz("Kalınlık seçerken kapak için neye dikkat edilir?", ["Çok kalın deri katlamayı ve dikişi zorlaştırır", "Kalın daha iyidir", "Önemi yoktur", "İnce daha dayanıklıdır"], 0),
      qz("Deri alırken tedarikçiye ne sorulmalıdır?", ["Kalınlık ve tabaklama türü", "Rengin adı yalnızca", "Fiyatın dışında hiçbir şey", "Hiçbiri"], 0),
      qz("Keskin bıçak neden önemlidir?", ["Kör bıçak kenarı yırtar", "Daha pahalıdır", "Hız önemlidir", "Sebep yok"], 0),
    ],
    d2: [
      qz("Deriyi kesmeden önce ne yapılır?", ["Karton/ince plastikten prototip denenir", "Doğrudan kesilir", "Boyanır", "Dikilir"], 0),
      qz("Kapağın açık ölçüsü yaklaşık nasıl bulunur?", ["İki kapak genişliği + sırt kalınlığı + pay", "Sadece defter genişliği", "Yükseklik × 2", "Tahmin"], 0),
      qz("Her ek parça (cep, tutacak) neyi etkiler?", ["Kalınlığı ve dikiş sırasını", "Sadece rengi", "Hiçbir şeyi", "Sadece fiyatı"], 0),
      qz("Dikiş sırası planlanırken genel kural nedir?", ["İçte kalan parçalar önce, dış kapak sonra", "Rastgele", "Dış önce", "Hepsi aynı anda"], 0),
      qz("Kalıba hangi pay işlenmelidir?", ["Dikiş payı ve ek parçalar", "Hiçbiri", "Sadece boya payı", "Sadece kenar"], 0),
    ],
    d3: [
      qz("Deri inceltme (skiving) ne işe yarar?", ["Katlama/dikiş bölgelerinde deriyi inceltmek", "Boyamak", "Parlatmak", "Delmek"], 0),
      qz("Köşeleri yuvarlamak için ne kullanılır?", ["Şablon", "Gözle kesim", "Çekiç", "Zımpara yalnızca"], 0),
      qz("Boyamadan önce neden deneme parçası kullanılır?", ["Renk deride farklı görünür", "Zaman kaybı", "Gerek yoktur", "Dayanıklılık için"], 0),
      qz("Damgalamadan önce bitkisel tabaklı deriye ne yapılır?", ["Hafifçe nemlendirilir", "Kurutulur", "Dondurulur", "Yağlanır"], 0),
      qz("Kesim sırasında doğru teknik hangisidir?", ["Tek hamle, keskin bıçak, cetvel", "Testere gibi ileri-geri", "Makas yalnızca", "Elle yırtma"], 0),
    ],
    d4: [
      qz("Eyer dikişinin (saddle stitch) avantajı nedir?", ["Bir iplik kopsa bile dikiş tamamen çözülmez", "Daha hızlıdır", "Makine gerektirir", "İp gerekmez"], 0),
      qz("İplik boyu için pratik kural nedir?", ["Dikiş uzunluğunun yaklaşık ≥3 katı (kalın deride daha fazla)", "1 katı", "Yarısı", "Sabit 10 cm"], 0),
      qz("Dikiş delgisi (pricking iron) nasıl tutulmalıdır?", ["Dik, delikler hizalı ve adım sabit", "Eğik", "Rastgele", "Hızlı"], 0),
      qz("Dikişte gerginlik nasıl olmalıdır?", ["Tutarlı; fazla çekmek deriyi buruşturur", "Mümkün olduğunca sıkı", "Gevşek", "Önemsiz"], 0),
      qz("Dikişin sonunda ne yapılır?", ["Geri dikiş ile sabitlenir", "Düğüm atılmaz, bırakılır", "Yapıştırılır yalnızca", "Kesilir"], 0),
      qz("Delikleri neden kenardan sabit mesafede açarız?", ["Düzgün ve dayanıklı bir dikiş sırası için", "Estetik değil", "Hızlı olsun diye", "Rastgele"], 0),
    ],
    d5: [
      qz("Kenar bitirmenin doğru sırası hangisidir?", ["Zımpara → nem → kenar parlatıcı (burnisher) ile parlatma", "Parlatma → zımpara", "Sadece boya", "Hiç"], 0),
      qz("Kenar boyası ne zaman kullanılır?", ["İsteğe bağlı olarak bitirmede", "Her zaman zorunlu", "Hiç", "Dikişten önce"], 0),
      qz("Bitmiş üründe kalite kontrol neleri içerir?", ["Defter yerleşimi, dikiş ve kenar kontrolü, temizlik", "Sadece fotoğraf", "Sadece fiyat", "Hiçbiri"], 0),
      qz("Müşteriye bakım talimatında hangisi bulunur?", ["Suyla uzun temastan kaçınma, kuru/gölgede saklama", "Yıkama makinesi", "Güneşte kurutma", "Sıcak ütü"], 0),
      qz("3 yöntemi karşılaştırmanın amacı nedir?", ["Kendi standartını seçmek", "Zaman geçirmek", "Maliyet düşürmek", "Zorunluluk"], 0),
    ],
    d6: [
      qz("Deri maliyetinde hangi birim kullanılır?", ["dm² veya cm²", "Litre", "Kilogram yalnızca", "Adet yalnızca"], 0),
      qz("Fire neden ayrıca hesaplanır?", ["Doğal deride damar/delik ve kesim artığı kaçınılmazdır", "Vergi", "Gereksizdir", "Süs"], 0),
      qz("Seri üretimde her model için ne hazırlanır?", ["Kalıp, malzeme listesi, iş akışı kartı, süre/maliyet", "Sadece fotoğraf", "Hiçbir şey", "Sadece fiyat"], 0),
      qz("Gerçek saatlik kazancı hesaplamak için ne ölçülür?", ["Çalışma süresi", "Deri rengi", "Kutu sayısı", "Hiç"], 0),
      qz("Baş harf damgası gibi kişiselleştirme neden önceden tanımlanır?", ["Süre ve fiyatı etkilediği için", "Süs", "Zorunlu olduğu için", "Hiç"], 0),
    ],
  },
  notIncluded: `## Bu modülde yer almayan veya sınırlı tutulan konular

Bu bölüm **kasıtlıdır**; doğrulayamadığım bilgiyi "kesin" diye vermedim. **Düzenle** ile kendi deneyimini ekleyebilirsin.

### Sabit sayısal değerler
- **Beton karışım/su oranı**: Kaynaklar farklı oranlar öneriyor (ör. farklı kum/çimento oranları); doğru olan **ürün etiketine** göre değişir. Tek bir oran yazmadım.
- **Kalıptan çıkarma / tam kürleme süreleri**: Kaynaklarda yalnızca genel aralıklar var; ürüne ve sıcaklığa bağlı. Kesin süre vermedim, ağırlık testi önerdim (bu **benim önerdiğim bir ölçüm yöntemidir**, kaynaklı bir standart değil).
- **Mum döküm sıcaklığı, koku yükü yüzdesi, fitil numarası**: Her mum/koku/fitil üreticisinde farklı; tedarikçi teknik sayfasına yönlendirdim.
- **Mum dinlendirme (kürleme) süreleri**: Kaynaklarda farklı ve genelde "yaklaşık"; kesin süre yazmadım.

### Doğrulanamayanlar
- **Betonun mumla temas eden iç yüzeyine hangi contalayıcının güvenli ve uyumlu olduğu**: Marka bazlı doğrulanmış bir kaynak bulamadım; marka önermedim.
- **Betonun içine dökülen mumun yapışma/ayrılma performansı** için bağımsız, ölçümlü bir kaynak bulamadım.
- **ASTM F2058 / F2417 standartlarının içeriği**: Ücretli olduğu için okuyamadım; yalnızca varlığını/kapsamını belirttim.
- **Türkiye'de mum satışı için yasal etiketleme/güvenlik zorunlulukları**: Resmi bir kaynaktan doğrulayamadım; yazmadım. Satmadan önce resmi kaynaklara bak.
- **Deri kalınlığı için "doğru" aralık**: Kaynaklarda genel bir bant geçiyor (1,2–2,0 mm civarı); bu bir standart değildir.

### Kapsam dışı
- **Deri tabaklama süreci**, **makine dikişi**, **kalıp/damga üretimi**, **kapaklı/ciltli defter yapımı (book binding)**: Ayrı öğrenme yolları gerektirir; bu modülün kapsamı hazır defter için kılıf.
- **Kimyasal karışımlar/pigment formülleri**: Güvenlik ve doğrulama nedeniyle eklenmedi.

### Doğrulama durumu
Kaynaklar eğitim amaçlı proje yazıları ve tedarikçi rehberleridir (Make, Instructables, CandleScience, Candle Shack, Craftybase, Michaels, Dodson Designs, Tandy, We All Sew). Bunlar **akademik/standart kaynak değildir**; atölye pratiği olarak ele alındı. Her ders sonundaki **Doğrulama** notunda neyin kaynaklı, neyin genel pratik olduğu belirtildi.`,
};
