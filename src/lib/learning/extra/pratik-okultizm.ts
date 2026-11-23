import { extraModule } from "./builder";
import { qz } from "../helpers";

export const pratikOkultizmModule = extraModule({
  id: "ek-pratik-okultizm",
  title: "Günlük Yaşamda Pratik Okültizm (Dion Fortune)",
  tagline: "Fortune'un 1930'lardaki halk için yazdığı okült rehber: konular, ilkeler ve eleştirel okuma",
  description:
    "Yüklediğin 'Pratik Okültizm: Günlük Yaşamda Uygulamalı Gizli Bilimler' (Hermes Yayınları, çev. Anita Tatlıer) Dion Fortune'un Practical Occultism in Daily Life kitabıdır. Bu ek modül, kitabın 12 bölümünü Türkçe metinden okuyarak haritalar; reenkarnasyon/karma gibi öğretileri yazarın doktrini olarak atfeder.",
  source: {
    file: "pratik-okltizm-gnlk-yaamda-uygulamal-gizli-bilimler_compress.pdf",
    author: "Dion Fortune (Violet Firth) — Hermes Yayınları, çev. Anita Tatlıer",
    language: "Türkçe",
    pages: 73,
    readNote: "Çevirmen/editör önsözü ve her bölümün ilk paragrafları okundu; bölüm metinlerinin tamamı derse konmadı.",
  },
  units: [
    {
      id: "f1",
      title: "1. Kitap ve Temel İlkeler",
      description: "Yayın bilgisi, 1–3. bölümler: sorunlara okült yaklaşım, suptil planlar, çevrenin kontrolü.",
      lessons: [
        {
          id: "po-kitap",
          title: "Kitabın kimliği ve önsöz",
          summary: "1933–34 tefrika, 1935 kitap; Türkçe baskı ve editörün terim açıklamaları.",
          body: `## Künye
*Practical Occultism in Daily Life*'ın Türkçesi: **Günlük Yaşamda Pratik Okültizm**, Hermes Yayınları (4. baskı 2019), çeviri **Anita Tatlıer**. Editörün önsözüne göre kitap, **Dion Fortune (doğum adı Violet Firth)** tarafından önce **1933–1934 arasında bir dergide tefrika** edilmiş, **1935'te kitap olarak** yayımlanmıştır ve yazarın okült bilgileri halka yayma çabasının parçasıdır.

## Editörün terim açıklamaları (önsözden)
- **Okült:** Latincede "gizli"; günümüz Türkçesinde "gizli bilimler".
- **Ezoterik / egzoterik:** Türkçesi "içrek/dışrak" (Osmanlıca batıni/zahiri). Serge Hutin'den alıntıyla ezoterizm "sembolik olarak saklı hakikati ortaya çıkarmak" olarak anılır.
- **Suptil planlar ve bedenler:** Okültistlere göre her plana karşılık insanda bir beden vardır; eterik, astral, zihinsel, kozal planlar; Fortune "üst planlar" yerine "**iç planlar**" demeyi tercih ederdi (çünkü planlar "pasta dilimleri gibi üst üste değil, iç içedir").
- **Plansal iniş ve yükseliş yasası:** İrade → zihinsel kavram → astral-eterik kalıp → fiziksel tezahür.

## Eleştirel not
Önsözdeki "fizikçiler artık kara madde, paralel evrenleri hipotez saymıyor, bu da okült planları destekler" çizgisindeki ifadeler **editörün yorumudur**; fizikteki hipotezler okült "planlar"ı doğrulamaz. Planlar ve bedenler **okült doktrindir**, bilimsel olgu değildir.

## Çalışma
Önsözdeki dört terim açıklamasını kendi cümlelerinle yaz ve "doktrin/ölçülebilir gerçek" olarak etiketle.`,
          verification: `Önsöz Türkçe PDF'ten doğrudan okundu (tefrika yılları, kitap yılı, terim açıklamaları). Fizikle ilişkilendirme editörün yorumudur; doğrulanmış bir bağ değildir. Fortune'un biyografisi için [Wikipedia](https://en.wikipedia.org/wiki/Dion_Fortune).`,
        },
        {
          id: "po-ilkeler",
          title: "1–3. bölümler: ilkeler, suptil planlar, çevrenin kontrolü",
          summary: "Bölüm 1–2'nin sorun yaklaşımı; Bölüm 3'ün 'özdenetim önce' ilkesi.",
          body: `## Bölüm 1 — Günlük yaşamda pratik okültizm
Fortune, **İç Işık Cemiyeti**'ne gelen mektupların büyük bölümünün okült güçlerin günlük sorunlara uygulanmasıyla ilgili olduğunu söyler. **Musallat olma, hayalet ve okült saldırı nispeten azdır; sorgulandığında çoğu "sağlıksız hayal" çıkar.** Sürekli kötü şans, doktorların teşhis edemediği sağlık bozulması, sağlıksız psişik gelişim yöntemlerinin yol açtığı rahatsızlıklar ve evlerdeki kötü etkiler ise sürekli konulardır.

## Bölüm 2 — devam
İnsan ruhunda varoluşun daha sübtil planlarına karşılık gelen güçler vardır; planlar "kaya tabakaları gibi üst üste yatmaz", aynı alanı aynı anda kaplayan farklı varoluş biçimleridir. Okültist, maddî neden-sonuç zincirine sığmayan "gel-gitleri" inceleyip yasalar çıkarmaya çalışır (yazarın iddiası).

## Bölüm 3 — Çevrenin kontrolü
- Çevrenin kontrolü **özdenetimle başlar**; çevre bizim için önemini yitirdiği ölçüde zihinsel yolla değiştirebiliriz ("çelişkili biçimde").
- **Meditasyon** her zaman eylemden önce gelir ve çözülecek sorun üzerine değil, **ruhsal gelişim ve en yüksek ideal** üzerine olmalıdır.

## Nasıl okunmalı?
Fortune'un ilk bölümdeki gözlemi (çoğu "musallat" olayının psikolojik çıkması) bu sitedeki **Psychic Self-Defence** dersinin (Okültizm 12. ünite) **tanı önce gelir** ilkesiyle uyumludur.

## Çalışma
Bölüm 1'deki dört sorun kategorisini (kötü şans, açıklanamayan sağlık sorunu, sağlıksız psişik gelişim, evde kötü etki) yazıp her biri için **önce sıradan açıklamalar** listesi çıkar.`,
          verification: `Bölüm 1–3'ün giriş paragrafları Türkçe PDF'ten doğrudan okundu; ifadeler özetlenmiştir. Sağlık/ekonomik sorunların "okült" nedenleri yazarın görüşüdür; bu derste tıbbi tavsiye değil, **önce tıbbi/psikolojik değerlendirme** önerilir.`,
        },
      ],
      quiz: [
        qz("Önsöze göre kitap ilk kez ne zaman tefrika edilmiştir?", ["1933–1934", "1900–1901", "1950–1951", "1977"], 0),
        qz("Fortune'un doğum adı nedir?", ["Violet Firth", "Moina Mathers", "Annie Besant", "Florence Farr"], 0),
        qz("Fortune 'üst planlar' yerine hangi ifadeyi tercih ederdi?", ["İç planlar", "Dış planlar", "Alt planlar", "Yan planlar"], 0),
        qz("Bölüm 1'e göre musallat olma ve hayalet iddiaları sorgulandığında çoğu nasıl çıkar?", ["Sağlıksız hayaller olarak", "Gerçek hayaletler olarak", "Resmî kayıt olarak", "Yazılı belge olarak"], 0),
        qz("Bölüm 3'e göre çevrenin kontrolü nereden başlar?", ["Özdenetimden", "Büyü aletlerinden", "Mekân değiştirmekten", "Başkalarını yönlendirmekten"], 0),
        qz("'Plansal iniş ve yükseliş' sıralaması hangisidir?", ["İrade → zihinsel kavram → astral-eterik kalıp → fiziksel tezahür", "Fiziksel → astral → zihin", "Zihin → fiziksel", "Eterik → ruh"], 0),
      ],
    },
    {
      id: "f2",
      title: "2. Karma, Kehanet, Zihin Gücü ve Eterik Manyetizma",
      description: "4–12. bölümlerin ana fikirleri ve eleştirel notlar.",
      lessons: [
        {
          id: "po-karma",
          title: "4–7. bölümler: geçmiş enkarnasyonlar ve karma (yazarın doktrini)",
          summary: "Reenkarnasyon ve karma, Fortune'un okült doktrini olarak; kitabın sınırlama ve uyarıları.",
          body: `## Fortune'un çerçevesi

**Bölüm 4–5:** İnsanların reenkarnasyon ilkesini öğrendiğinde **geçmiş kayıtlarının izini sürmek istediğini**, bu arzunun "boş merak veya kibir" içerebildiğini, ancak geçmiş yaşamlara dair fikrin **ikinci elden değil, ilk elden** olmasının değerli olduğunu söyler: durugörür bir kişinin okuması işe yarasa da kişinin kendisi için ortaya çıkardığı "en ufak bölüm" daha büyük değer taşır. Uyku bilinci planlar arası geçişe uygun görülür.

**Bölüm 6–7 (Karmayı çözmek):** Karmanın **karakteri belirlediğini**, karakterin çevreyle ilişki biçimini ve dolayısıyla "iyi–kötü şansı" şekillendirdiğini anlatır. Ayrıca "alınyazısı" olarak adlandırdığı **ikinci bir faktör** vardır: yaşamda yolun belirli bir yönde ilerlemesi ve bu yolu hangi ruhla karşıladığımızın mutluluk/sağlığı belirlemesi.

## Önemli
Reenkarnasyon, karma ve "yansıtıcı eterden okunan kayıt" **doktrinel öğretidir**; tarihsel/bilimsel doğrulaması yoktur. Başkasının size "geçmiş yaşamınızı okuması" iddiası **doğrulanamaz**; bu sitedeki astroloji modülündeki "karmik hikâye hipotezdir" ilkesiyle aynı temkinle okunmalıdır.

## Çalışma
Bölüm 4'teki "ilk el / ikinci el" ayrımını kendi günlüğünde (rüya, imge) nasıl uygulayacağını yaz; hangi iddiaların doğrulanamaz olduğunu işaretle.`,
          verification: `Bölüm 4, 5 ve 7'nin giriş paragrafları PDF'ten okundu. Bölüm 6'nın metni okunmadı. Reenkarnasyon/karma yazarın doktrinidir; bağımsız kanıt iddia edilmedi.`,
        },
        {
          id: "po-kehanet",
          title: "8–9. bölümler: kehanet ve zihin gücü: kullanım ve suistimal",
          summary: "Kehanetin rüzgârgülü benzetmesi; zihin gücü ticareti ve ahlaki sınır.",
          body: `## Bölüm 8 — Kehanetin kullanımı ve sınırları
- **Kehanet, "spiritüel bir teşhis"tir**; işlerimizde hangi sübtil etkilerin işlediğini göstermeye yarar.
- **Rüzgârgülü benzetmesi:** Rüzgârın yönünü gösterir; geminin rotasını belirlemez, yelkenlerin nasıl açılacağına yardım eder.
- Yanlış yapılırsa "moral bozucu imalar ve dayanaksız şüphelerle" zarar verebilir.
- **İki tür kehanet:** (1) tamamen psişik (vizyon, kristal, mürekkep çanağı); (2) **keyfî sembollere** dayanan (oyun kartları, remil noktaları) kural-temelli kehanet.

## Bölüm 9 — Zihin gücünün kullanılması ve suiistimali
- Sınırı belirlemek "hiç kolay değil"; sağduyu ve dürüstlük mihenk taşıdır.
- Bir uç, **"istediğinizi elde edin" kurslarının** reklamlarıdır (Fortune bunların ödeme yaparak "aptallar" bulduğunu ima eden sert bir dille eleştirir); öteki uç ise "bir inisiyenin okült güçleri **hiçbir kişisel amaçla** kullanamayacağı" doktrinidir. Fortune orta yolu arar.

## Güncel okuma
Fortune'un reklam eleştirisi, bugünün "manifestasyon kursları" için de uygulanabilir bir **tüketici savunmasıdır**: büyük vaat + belirsiz yöntem + yüksek ücret.

## Çalışma
Fortune'un "rüzgârgülü" ölçütüyle kendi kullandığın bir kehanet yöntemini (Tarot, burç yorumu) değerlendir: bu yöntem karar mı veriyor, yoksa seçenekleri mi aydınlatıyor?`,
          verification: `Bölüm 8 ve 9'un giriş metni Türkçe PDF'ten okundu; benzetmeler ve ayrımlar özetlenmiştir. "Manifestasyon kursları" karşılaştırması ders yazarının yorumudur.`,
        },
        {
          id: "po-manyetizma",
          title: "10–12. bölümler: eterik manyetizma ve kutuplaşma sorunu (eleştirel)",
          summary: "Cinsiyetler arası 'eterik manyetizma' savı, 'Saflık Sorunu' atfı ve kitabın dönemsel sınırları.",
          body: `## Fortune'un savı
Fortune, cinsiyetler arasındaki ilişkinin yalnızca fiziksel ve duygusal değil, aynı zamanda **eterik** olduğunu ve bu faktörün başka türlü açıklanamayan çok şeyi açıkladığını savunur. Bir kadın grubu erkeklerle bağlantısından tamamen koparılırsa "tuhaf bir zihinsel ortam", yozlaşma ve nevrotik belirtiler oluşacağını; erkeklerde aynı bozulmanın oluşmadığını yazar (Bölüm 11).

**Bölüm 12 — Kutuplaşmama sorunu:** Eşi olmayan kişi sorusuna cevap olarak, bu sorunun psikolojik ve fizyolojik yönlerini **"Saflık Sorunu"** (*The Problem of Purity*) adlı kitabında ele aldığını söyler ve dönemin tabularının gevşediğini belirtir.

## Eleştirel uyarı
Bu savlar **1930'lar toplumunun cinsiyet ve evlilik varsayımlarını** taşır; genellemeler ("kadınlarda yozlaşma, erkeklerde yok") bugün bilimsel bir dayanağa sahip değildir ve ayrımcı okunabilir. "Eterik manyetizma" bir **okült model**dir; ölçülmüş bir olgu değildir. Bu bölümü tarihsel belge ve doktrin olarak okuyun, ilişki veya sağlık kararlarında rehber almayın.

## Çalışma
Bu bölümdeki üç genellemeyi bul; her biri için "dönemin toplumsal varsayımı mı, okült doktrin mi, ölçülebilir iddia mı?" diye sınıflandır.`,
          verification: `Bölüm 11 ve 12'nin giriş paragrafları Türkçe PDF'ten okundu; "Saflık Sorunu" atfı metindeki ifadedir. Bilimsel doğrulama yoktur; eleştirel uyarı ders yazarına aittir.`,
        },
      ],
      quiz: [
        qz("Fortune kehaneti hangi benzetmeyle anlatır?", ["Rüzgârgülü", "Pusula", "Harita", "Çapa"], 0),
        qz("Bölüm 9'daki iki aşırı uç nedir?", ["'İstediğinizi elde edin' kursları ile inisiyenin kişisel amaçla güç kullanamayacağı doktrini", "Bilim ve din", "Kadın ve erkek", "Gün ve gece"], 0),
        qz("Fortune'a göre karmanın yanında etkili ikinci faktör nedir?", ["Alınyazısı (yaşam yolunun yönü)", "Burç", "Gezegen", "Rüya"], 0),
        qz("Bölüm 4–5'te 'ilk el' bilgi neden değerlidir?", ["Kişinin kendi deneyimi başkasının okumasından daha değerli sayılır", "Daha ucuzdur", "Daha hızlıdır", "Yasal olarak zorunludur"], 0),
        qz("Reenkarnasyon ve karma için doğru değerlendirme hangisidir?", ["Yazarın okült doktrinidir; bilimsel kanıtı yoktur", "Bilimsel olarak kanıtlanmıştır", "Tarihsel kayıttır", "Tıbbi bulgudur"], 0),
        qz("'Eterik manyetizma' bölümüne yaklaşım nasıl olmalıdır?", ["Dönemsel bir okült model ve genellemelerle dolu tarihsel belge olarak", "Güncel ilişki tavsiyesi olarak", "Tıbbi tedavi olarak", "Yasal kural olarak"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Bölüm 6, 10 ve bölüm içi ayrıntılar:** Bölüm 6'nın metni ve 10. bölümün ayrıntıları okunmadı; yalnızca başlıkları verildi.
- **Triad Grubu 'Özet ve Yorum' bölümü:** Taranmadı.
- **Uygulama alıştırmaları ve meditasyon talimatları:** Bu modül talimat vermez; kitabı kendin oku.
- **Reenkarnasyon, karma, eterik manyetizma iddialarının doğruluğu:** Bağımsız doğrulama bulunmuyor; yazarın doktrini olarak atfedildi.
- **Fortune'un diğer kitaplarına (Saflık Sorunu vb.) ait içerik:** Okunmadı.
- **Editör önsözündeki fizik–okültizm bağlantısı:** Doğrulanabilir bir bilimsel kaynağa dayanmıyor; açıkça editörün yorumu olarak işaretlendi.`,
});
