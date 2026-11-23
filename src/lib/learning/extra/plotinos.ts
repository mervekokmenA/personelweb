import { extraModule } from "./builder";
import { qz } from "../helpers";

export const plotinosModule = extraModule({
  id: "ek-plotinos",
  title: "Plotinos: Enneadlar'dan Seçmeler (Zeki Özcan, 1996)",
  tagline: "Bir, Zekâ ve Ruh: Yeni-Platoncu sudûr (türüm) öğretisinin kaynak metinlerle okunması",
  description:
    "Yüklediğin 'Plotinus — Enneadlar' PDF'inin (Asa Kitabevi, Bursa, 1996) ek modülü. Çeviri Fransızca (Bréhier) aracılığıyla yapıldığı için iki aşamalı bir çeviri zincirini ve seçilen dokuz risalenin düşünsel haritasını öğretir; Plotinos'un 'Bir–Zekâ–Ruh' öğretisini kendi kaynak metniyle ilişkilendirir.",
  source: {
    file: "plotinus-enneadlar.pdf",
    author: "Plotinos (çev. Zeki Özcan, Asa Kitabevi 1996)",
    language: "Türkçe (Fransızca aracılığıyla çeviri)",
    pages: 47,
    readNote: "Künye, içindekiler ve 'Giriş' bölümü okundu. Risalelerin gövde metinleri derse konmadı; hangilerinin seçildiği başlık düzeyinde haritalandı.",
  },
  units: [
    {
      id: "p1",
      title: "1. Plotinos, Enneadlar ve Bu Çeviri",
      description: "Kimdi, Enneadlar nasıl derlendi, elimizdeki çeviri hangi zincirden geliyor?",
      lessons: [
        {
          id: "pl-enneadlar",
          title: "Plotinos ve Enneadlar'ın derlenişi",
          summary: "204/5–270; Porphyrios'un düzenlemesi; 6×9 yapısı; üç ilke.",
          body: `## Plotinos
**Plotinos** (MS yaklaşık 204/5 – 270), genellikle **Yeni-Platonculuğun kurucusu** sayılır. Stanford Felsefe Ansiklopedisi'ne göre Porphyrios Roma'ya 263'te geldiğinde Plotinos'un ilk 21 risalesi yazılmıştı; kalan risaleler ömrünün son yedi-sekiz yılında yazıldı.

## Enneadlar
Yazıları **öğrencisi Porphyrios** düzenledi. "**Enneadlar**" adı, yazıların **altı gruba, her biri dokuz risaleden oluşacak biçimde** bölünmesinden gelir (Yunanca "ennea" = dokuz). Bu bölüm "biraz yapay"dır: bazı risaleler Porphyrios tarafından ayrı numaralı parçalara bölünmüştür, bu yüzden **54'ten biraz az** gerçek risale vardır. Porphyrios'un dizilişi **konusal**dır; yazılış sırası ise ayrı verilir ve ikisi örtüşmez. Bu yüzden Enneadlar atıfları iki sistemle verilir: *Ennead.risale* (ör. V.2) ve köşeli parantezde kronolojik sıra ([11]).

## Üç ilke (SEP özeti)
Plotinos'un metafiziği üç temel ilkeye dayanır: **Bir** (veya **İyi**), **Zekâ (Nous)** ve **Ruh**.

## Çalışma
Elindeki PDF'in içindekiler listesindeki her başlığın yanındaki "V, II (2)"-tipi atıfları bir tabloya yaz; hangi Ennead ve kronolojik numaraya karşılık geldiklerini belirle.`,
          verification: `**Kaynak:** [Stanford Encyclopedia of Philosophy — Plotinus (arşiv sürümleri)](https://plato.stanford.edu/archives/fall2005/entries/plotinus/). SEP arşiv sürümlerinden alınmıştır; güncel sürümle ayrıntılar farklılaşabilir. Atıf biçimi PDF içindekilerinden okundu.`,
        },
        {
          id: "pl-ceviri",
          title: "Bu çeviri neyi garanti eder? İki aşamalı çeviri",
          summary: "Yunanca → Fransızca (Bréhier 1956) → Türkçe (Özcan 1996); seçki ve yöntem.",
          body: `## Çevirmenin girişinden
- Çeviri, çevirmenin **yüksek lisans dersi** için metin sağlamak amacıyla yapılmış bir **seçkidir**.
- Seçimde amaç, Plotinos doktrininin temelini, yani **sudûr (türüm) teorisini**, **düşünülür ve duyusal varlıklar hiyerarşisini** ve bu hiyerarşinin unsurlarının ilişkilerini yansıtmaktır.
- **Kaynak dil Fransızcadır**: Émile Bréhier'nin Yunanca metinle birlikte yayımladığı *Les Belles Lettres* (Budé) baskısı (1956). Bréhier'nin Fransızcaya çevirirken Yunanca metne bağlı kalmayı Fransızcanın olanaklarından daha çok düşündüğü; bu nedenle çevirmen de aynı ilkeyi benimsemiştir.
- Metin zaman zaman eliptik cümleler içerir; çevirmen "okuyucuyu tereddüde düşürmeyecek yerlerde" metni olduğu gibi çevirmeye çalışmıştır.

## Seçilen risaleler (içindekilerden)
V.2 *Bir'den sonra gelen nesnelerin türemesi ve düzeni* · V.9 *Zekâ, idealar ve varlık* · V.4 *Bir'den sonra gelenler Bir'den nasıl çıkar* · V.6 *Varlığın ötesindeki düşünmez…* · V.3 *Bilen üç unsur ve varlığın ötesindeki ilke* · VI.9 *İyi ya da Bir üzerine* · VI.4–5 *Bir ile özdeş olan aynı zamanda her yerde olabilir (iki kitap)* · I.2 *Erdemler üzerine* (kitapta "Erdemler üzerine" ve "Karma İndeks" ekleri).

## Kritik not
İki aşamalı çeviri **kavram kaymalarına** yol açabilir (ör. Yunanca *hypostasis*, *nous* terimlerinin Fransızca ve Türkçe karşılıkları). Ciddi bir çalışma için Yunanca/İngilizce eleştirel baskıya (ör. Armstrong'un Loeb baskısı) bakılmalı.

## Çalışma
"Bir", "Zekâ", "Ruh" kavramlarının Türkçe çevirisindeki karşılıklarını çıkar; bir de İngilizce kaynakta hangi terimle geçtiğini ara.`,
          verification: `Çevirmenin girişi ve içindekiler PDF'ten okundu. Risalelerin Ennead numaraları PDF içindekilerinde geçen atıflara göre verilmiştir; atıf numaraları OCR hatalarına açıktı (bazı satırlar bozuktu) ve kaynak metinle tek tek doğrulanmadı. Armstrong baskısı önerisi genel bilgidir.`,
        },
      ],
      quiz: [
        qz("Enneadlar'ı düzenleyen kimdir?", ["Porphyrios", "Platon", "Aristoteles", "Proklos"], 0),
        qz("'Enneadlar' adı neden verilmiştir?", ["Altı grup, her biri dokuz risaleden oluşacak şekilde düzenlendiği için", "Dokuz kitaptan oluştuğu için", "Dokuz yazar olduğu için", "Dokuz ilke anlattığı için"], 0),
        qz("Plotinos'un üç temel ilkesi hangileridir?", ["Bir, Zekâ (Nous), Ruh", "Ateş, Su, Hava", "Beden, Ruh, Zihin", "İyi, Kötü, Tarafsız"], 0),
        qz("Bu Türkçe çeviri hangi dil aracılığıyla yapılmıştır?", ["Fransızca (Bréhier)", "İngilizce", "Almanca", "Arapça"], 0),
        qz("Çevirmenin seçkideki amacı nedir?", ["Sudûr teorisi ve varlık hiyerarşisini yansıtmak", "Tüm Enneadlar'ı çevirmek", "Tıbbi bilgi aktarmak", "Şiir çevirmek"], 0),
        qz("İki aşamalı çevirinin riski nedir?", ["Kavram kaymaları", "Daha ucuz olması", "Daha uzun olması", "Resim eksikliği"], 0),
      ],
    },
    {
      id: "p2",
      title: "2. Bir, Zekâ, Ruh: Sudûr Öğretisinin Haritası",
      description: "Seçilen risalelerin düşünsel yapısı: türüm, hiyerarşi ve erdem.",
      lessons: [
        {
          id: "pl-sudur",
          title: "Sudûr (türüm) öğretisi: kaynak başlıklarından okuma",
          summary: "V.2, V.4, V.9: Bir'den Zekâ'ya, Zekâ'dan Ruh'a türüm; düşünmeyen Bir.",
          body: `## İçindekilerin gösterdiği ana soru kümeleri

1. **Türüm ve düzen (V.2, V.4):** "Bir'den sonra gelenler Bir'den nasıl çıkar?" — Plotinos'un cevabı **sudûr**: Bir, kendinden eksilmeden "taşar"; bu taşma bir sonraki düzeyi (Zekâ) üretir.
2. **Zekâ, idealar, varlık (V.9):** Zekâ düşünülür dünyanın (İdeaların) yeridir; düşünme ile düşünülür arasında özdeşlik vardır.
3. **Bir üstündür ve düşünmez (V.6, V.3):** "Varlığın ötesindeki **düşünmez**." Bilen üç unsurdan (Zekâ, Ruh vb.) farklı olarak Bir, "varlığın ötesindeki ilke"dir; düşünme bir ikilik gerektirdiğinden Bir düşünmez.
4. **Bir ya da İyi (VI.9):** Bir, aynı zamanda İyi'dir; ruh onunla birleşmeyi arar.
5. **Bir hem Bir'dir hem her yerdedir (VI.4–5):** Bölünmez olan nasıl her yerde "bütün olarak" bulunabilir?
6. **Erdemler (I.2):** Ruhun arınması ve benzeşmesi.

## Bu bölümün sınırı
Yukarıdaki cümleler **risale başlıklarından ve Plotinos'un iyi bilinen öğretisinden** (SEP özeti) çıkarılmış genel haritadır; metinlerin ayrıntılı argümanları ders dışında bırakıldı. Kaynak metni mutlaka kendin oku.

## Neden okültizm çalışmasında önemli?
Yeni-Platonculuk, Rönesans Hermetizmi'ni (Ficino), Kabalacılık ve teurji anlayışlarını etkiledi. Bu yüzden Plotinos, "okült" literatürdeki **emanasyon (sudûr)** fikrinin klasik felsefi kaynaklarından biridir.

## Çalışma
Bu bölümdeki altı soru kümesinden birini seç; PDF'te ilgili risaleyi bul, bir sayfalık okuma notu yaz.`,
          verification: `İçindekiler PDF'ten, üç ilke ve temel öğreti [SEP](https://plato.stanford.edu/archives/fall2005/entries/plotinus/) özetinden. Risale gövdeleri okunmadı; bu yüzden ayrıntılı argümanlar derse yazılmadı. Yeni-Platonculuğun Ficino ve Hermetik geleneğe etkisi genel bilgidir (Okültizm modülü 3. ünite).`,
        },
      ],
      quiz: [
        qz("Sudûr (türüm) öğretisine göre Bir'den ilk sudûr eden nedir?", ["Zekâ (Nous)", "Madde", "Ateş", "Beden"], 0),
        qz("Plotinos'a göre Bir neden düşünmez?", ["Düşünme bir ikilik (özne–nesne) gerektirir, Bir ise tam birliktir", "Çünkü aptaldır", "Çünkü maddedir", "Çünkü ruhu yoktur"], 0),
        qz("VI.9 hangi konuyu işler?", ["İyi ya da Bir", "Erdemler", "Zekâ ve idealar", "Doğa"], 0),
        qz("Plotinos'un okültizme etkisi nasıl ifade edilebilir?", ["Emanasyon fikriyle Rönesans Hermetizmi ve Kabalacılığı etkilemiştir", "Tarot'u icat etmiştir", "Simya kitabı yazmıştır", "Astroloji hesaplamıştır"], 0),
        qz("Bu bölümdeki genel harita neye dayanır?", ["Risale başlıkları ve iyi bilinen öğreti özeti", "Metnin tamamının kendi okuması", "Laboratuvar verisi", "Rüya yorumu"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Risalelerin ayrıntılı argümanları ve alıntıları:** Gövde metinleri taranmadı/okunmadı; yalnızca başlıklar ve çevirmenin girişi işlendi.
- **Atıf numaralarının (V, II (2) vb.) kesin eşleşmesi:** PDF'te içindekiler bozuk taranmış; numaralar tek tek doğrulanmadı.
- **Çevirinin Yunanca orijinale sadakati:** Çeviri Fransızca aracılığıyla yapıldığından doğrudan karşılaştırma yapılmadı.
- **Plotinos'un hayatına dair anekdotlar (Porphyrios'un biyografisi):** Okunmadığı için eklenmedi.
- **Plotinos–okültizm bağlantılarının tarihî ayrıntıları (Ficino, Pico vb.):** Genel çerçeve verildi; ayrıntılı kaynakça Okültizm modülü 3. ünitede.`,
});
