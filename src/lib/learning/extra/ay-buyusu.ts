import { extraModule } from "./builder";
import { qz } from "../helpers";

export const ayBuyusuModule = extraModule({
  id: "ek-ay-buyusu",
  title: "Ay Büyüsü: Ay'ın Mistik Enerjisi İçin Tam Rehber (Diane Ahlquist)",
  tagline: "Popüler bir Ay-ritüeli kitabının haritası: neyin bilimsel, neyin gelenek, neyin kişisel inanç olduğunu ayırmak",
  description:
    "Yüklediğin 'Ay Büyüsü — Ay'ın Mistik Enerjisinden Yararlanmak İçin Tam Rehberiniz' (Diane Ahlquist, Simon & Schuster e-kitap, Türkçe makine çevirisi) için ek modül. 21 bölümlük, 4 parçalı kitabın içeriğini haritalar; Ay evresi–insan davranışı, tıbbi prosedür zamanlaması ve manifest iddialarını bilimsel kanıtla karşılaştırır; ritüel/tarif talimatı vermez.",
  source: {
    file: "Ay_Bu_yu_su__-_Ay_n_Mistik_Enerjisinden_Yararlanmak_I_c_in_Tam_Rehberiniz.pdf",
    author: "Diane Ahlquist (Simon & Schuster; Türkçe makine çevirisi)",
    language: "Türkçe (makine çevirisi)",
    pages: 300,
    readNote: "İçindekiler, giriş, 3. bölümün başı (Ay'ın Dünya ve insan üzerindeki etkisi) ve 6. bölümün tıbbi zamanlama kısmı okundu. Meditasyon, tarif ve içki bölümleri derse konmadı.",
  },
  units: [
    {
      id: "y1",
      title: "1. Kitabın Yapısı ve Temel Savları",
      description: "Dört parça, 21 bölüm.",
      lessons: [
        {
          id: "ab-yapi",
          title: "Dört parça, 21 bölüm: haritası",
          summary: "Ay'ın gücü; pozitif enerjiden yararlanma; meditasyonlar; ileri Ay büyüsü (burç, sunak, bahçe, yemek).",
          body: `## Künye
*Ay Büyüsü: Ay'ın Mistik Enerjisinden Yararlanmak İçin Tam Rehberiniz* — **Diane Ahlquist** (kitabın "Yazar hakkında" sayfasında: yazar, konuşmacı ve yirmi beş yılı aşkın deneyimli bir ... ), **Simon & Schuster** e-kitabı; PDF Türkçe makine çevirisidir.

## Parça 1 — Ay Büyüsünün Gücü
1. **Ayın evreleri** (Yeni, Ağdalı/büyüyen, Dolunay, Küçülen, Karanlık Ay; evreleri takip etme)
2. **Ay hakkında eski inanışlar** (aylara göre Kızılderili dolunay adları, eski hava tahminleri, "ay'ı kötülük için kullanmak", kadın ve erkek olarak Ay)
3. **Ay bizi nasıl etkiliyor?** (gezegen üzerindeki etki; evrelerin insanlara etkisi; hayvanlar üzerinde)
4. **Enerji temelleri** (farklı enerji türleri, Ay'ın "aura"ları)

## Parça 2 — Ay'ın Pozitif Enerjisinden Yararlanmak
5. Ay büyüsü ne zaman yapılmalı (evre + haftanın günü)
6. Ay evrelerine göre **şifa** (tıbbi prosedürlerin planlanması, Merkür retrogradı, doğum)
7. **Meditasyon**
8. **Niyet belirleme** · 9. Niyetleri **tezahür ettirmek** (6 adım) · 10. **Vizyon panoları**

## Parça 3 — Meditasyonlar
12. Ağdalı Ay meditasyonları · 13. Sezgi için Dolunay meditasyonu · 14. Küçülen Ay (bırakma) · 15. **Mavi Ay, Kızıl Ay, tutulmalar** · 16. Ayı günlük uygulamalara katmak.

## Parça 4 — İleri Ay Büyüsü
17. **Burçları takip edin: astroloji** · 18. **Ay sunağı** · 19. Bitkisel **Ay bahçeciliği** · 20. **Ay yemeği tarifleri** · 21. **Ay içecekleri ve karışımları** (alkollü/alkolsüz) · Sonuç, kaynakça, dizin.

## Çalışma
Her parçayı "tarihsel/kültürel bilgi", "bilimsel gerçek", "kişisel pratik/inanç" olarak etiketle ve bu üç etiketi sayfa kenarı notu olarak kullan.`,
          verification: `İçindekiler, giriş ve yazar sayfası PDF'ten okundu. Kitabın yazarı metinde Diane Ahlquist olarak geçer; bağımsız biyografik doğrulama yapılmadı. Bölüm numaraları makine çevirisinde kaymış olabilir (11. bölüm başlığı okunamadı).`,
        },
      ],
      quiz: [
        qz("Kitabın yazarı kimdir (PDF'e göre)?", ["Diane Ahlquist", "Aleister Crowley", "Dion Fortune", "Michelle Heron"], 0),
        qz("Kitap kaç parçadan oluşur?", ["4", "2", "7", "12"], 0),
        qz("Kitapta 'meditasyon' bölümleri hangi parçadadır?", ["Parça 3 (ve 7. bölüm)", "Yalnızca ek", "Yalnızca sonuç", "Yok"], 0),
        qz("'Ay yaşamının bir parçası olarak' bahçecilik ve tarifler kitabın hangi kısmındadır?", ["Parça 4 (İleri Ay Büyüsü)", "Parça 1", "Parça 2", "Parça 3"], 0),
      ],
    },
    {
      id: "y2",
      title: "2. Ay Etkisi İddiaları ve Bilimsel Kanıt",
      description: "Doğru olanlar, tartışmalı olanlar ve doğrulanmamış olanlar.",
      lessons: [
        {
          id: "ab-bilim",
          title: "Ay gerçekten ne yapar? Gelgit, davranış, tıbbi zamanlama",
          summary: "3. bölüm ve 6. bölümdeki iddiaların kanıt durumuyla karşılaştırılması.",
          body: `## 3. bölümün iddiaları
Kitap "mevcut bilimsel düşünceye göre" Ay'ın: iklimi ılıman tutması, Dünya'nın **eksen eğikliğini dengelemesi**, dönüşü yavaşlatması, **gelgitleri** oluşturması ve bazı deniz canlılarının **yumurtlamasını** tetiklemesi gibi etkilerini sayar.

## Değerlendirme
| İddia | Durum |
|---|---|
| **Gelgitler** Ay (ve Güneş) çekimiyle oluşur | **Doğru**, iyi kanıtlanmış |
| Bazı deniz canlılarının üremesinin Ay evresiyle senkronize olması | Bazı türler için **belgelenmiş** (ör. bazı mercanlar); genelleme yapılamaz |
| Ay'ın "eksen eğikliğini dengelemesi" | Sıkça tekrarlanır; **ayrıntıları tartışmalı** (bu derste ayrıca doğrulanmadı) |
| "**Dolunayda insanlar daha dengesiz/kazaya eğilimli**" | **Bilimsel kanıt yok**: Rotton & Kelly (1985) meta-analizi (37 çalışma), Ay evrelerinin "delilik" göstergelerindeki değişimin **en fazla %1'ini** açıkladığını buldu; 2015 *Nursing Research* incelemesi de dolunayın hastane başvurularını etkilediğine kanıt bulmadı |
| "**Tıbbi prosedürleri Ay evresine göre planlayın**" (6. bölüm: ameliyat için dolunaydan 3–5 gün önce/sonra gibi öneriler) | **Kanıta dayalı değil**; tıbbi karar için **hekime başvurun**, takvimi hekimin önerisine göre belirleyin |
| **Ay evresi–ruh hali** anekdotları | **Doğrulama yanlılığı** (dolunayda yaşananları daha çok hatırlama) açıklayabilir |

## Ne yapmalı?
Ay evresiyle ilgili deneyimini **kendi verinle** sına: Astroloji modülü Atölye 1'deki **Ay günlüğü** yöntemiyle 3 ay boyunca her gün aynı saatte ruh hali/uyku kaydı tut, evreyi **sonradan** ekle. Bu sitedeki **Ay Takvimi** sayfası evreleri sağlar.

## Çalışma
Kitaptaki bir iddia seç; "kim ölçmüş, nasıl, hangi örneklem" sorularıyla kanıt ara.`,
          verification: `**Kaynak:** [Scientific American — Lunacy and the Full Moon](https://www.scientificamerican.com/article/lunacy-and-the-full-moon/), [Wikipedia — Lunar effect](https://www.wikipedia.org/wiki/Lunar_effect), [Rotton & Kelly 1985 — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC1316181/). 3. ve 6. bölüm girişleri PDF'ten okundu. Eksen eğikliği iddiasının güncel durumu doğrulanamadı; ameliyat zamanlaması için tek bir güvenilir çalışma bulunamadı (ikincil kaynakta zayıf bir Barselona korelasyonu anılıyor, orijinali okunmadı).`,
        },
      ],
      quiz: [
        qz("Gelgitler neyin sonucudur?", ["Ay ve Güneş'in çekim etkisi", "Rüzgâr", "Burçlar", "Deprem"], 0),
        qz("Rotton & Kelly (1985) meta-analizi ne buldu?", ["Ay evresi 'delilik' göstergelerindeki değişimin en fazla %1'ini açıklıyor", "Dolunay suçu %50 artırır", "Ay evresi etkisizdir ve gelgit yoktur", "Sadece kadınları etkiler"], 0),
        qz("Tıbbi prosedürleri Ay evresine göre planlamak için doğru yaklaşım nedir?", ["Hekimin önerisine göre belirlemek; Ay takvimi kanıta dayalı değildir", "Dolunayı beklemek", "Hekimsiz karar vermek", "Merkür retrogradını beklemek"], 0),
        qz("'Dolunayda herkes dengesiz olur' anekdotlarını ne açıklayabilir?", ["Doğrulama yanlılığı", "Yerçekimi", "Hava durumu", "Müzik"], 0),
        qz("Ay evresi–ruh hali ilişkisini sınamak için en iyi yöntem nedir?", ["Evreyi bilmeden günlük tutup sonradan karşılaştırmak", "Sadece hatırlamak", "Sosyal medyaya bakmak", "Burç yorumu okumak"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Meditasyon, niyet/tezahür ve ritüel metinleri (Parça 3, 8–10, 12–16, 18):** Uygulama talimatı niteliğinde; 'tezahür' iddialarının etkisi doğrulanmamıştır.
- **Tarifler ve içkiler (20–21. bölüm):** Okült/ritüel içerik taşımıyor, alkollü içecek tarifleri bu eğitimin kapsamı dışında.
- **Ay bahçeciliği (19. bölüm):** Ay evresine göre dikim iddiaları için güvenilir bir kanıt bu derste bulunamadı; eklenmedi.
- **Ay'ın 'enerji aura'ları ve 'enerji türleri' (4. bölüm), Ay sunağı kristal/tütsü önerileri:** Doğrulama yok.
- **Mavi Ay/Kızıl Ay/tutulma bölümü:** Astronomik tanımlar standarttır ama bu kitaptan ayrıca doğrulanmadı; astronomi için Astroloji modülü Atölye 1'e bakınız.
- **PDF'in makine çevirisi hataları:** Bazı bölüm numaraları/başlıkları kayıp olduğundan bölüm haritası kısmen tahminidir.`,
});
