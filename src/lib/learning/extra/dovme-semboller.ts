import { extraModule } from "./builder";
import { qz } from "../helpers";

export const dovmeModule = extraModule({
  id: "ek-dovme-semboller",
  title: "Dövme, Semboller ve Anadolu Dövme Geleneği",
  tagline: "Kısa 'Dövmeler ve Semboller' notları ile Şermin Seval'in yüksek lisans tezi: iddiaları kaynakla sınamak",
  description:
    "Yüklediğin iki dövme kaynağının ek modülü: 'Dövmeler ve Semboller' (47 sayfa, kısa notlar) ve Şermin Seval'in 'Anadolu Kültüründe Simge, Anlam ve Sağaltım Boyutlarıyla Dövme' (Işık Üniversitesi, Resim Ana Sanat Dalı, Yüksek Lisans Tezi). Modül tarihsel iddiaları (en eski dövme, mumyalar) arkeoloji kaynaklarıyla doğrular, tezin bölüm yapısını verir ve kısa notlardaki tavsiye türü ifadeleri (vücut bölgesi, element dövmesi vb.) 'kanıtsız kişisel öğreti' olarak işaretler.",
  source: {
    file: "dovmeler-ve-semboller.pdf; Anadolu_Kulturunde_Simge_Anlam_Ve_Sagaltim_Boyutlariyla_Dovme_PDF.pdf",
    author: "Belirtilmemiş (kısa notlar); Şermin Seval (Işık Üniversitesi, tez danışmanı Prof. Balkan Naci İslimyeli)",
    language: "Türkçe",
    pages: 163,
    readNote: "Kısa notların girişi ve tezin özet, içindekiler ve bölüm başlıkları okundu. Tezin bölüm gövdeleri ve motif katalogları derse konmadı.",
  },
  units: [
    {
      id: "d1",
      title: "1. 'Dövmeler ve Semboller' Notlarının Denetimi",
      description: "Tarihsel iddialar ve tavsiye türü ifadeler.",
      lessons: [
        {
          id: "dv-notlar",
          title: "Notlardaki tarih iddiaları: Ötzi ve 'bıyık dövmeli mumya'",
          summary: "5200 yıllık İtalya–Avusturya mumyası doğru; '7200 yıllık bıyık dövmeli mumya' bilinen bir tarihleme hatasıdır.",
          body: `## Notlarda yazanlar
- "Milyonlarca yıldır insanlar bedenlerine dövme yaptırmıştır." (Tarihsel olarak **abartıdır**: en eski doğrulanmış dövmeler birkaç bin yıl öncesine aittir.)
- "Arkeologların bulduğu **5200 yıl öncesine ait İtalya–Avusturya sınırındaki bir mumyada** görülmüş."
- "**7200 yıl önce** bir mumyada **bıyık şeklinde** çizilmiş bir dövmeye rastlanmış."

## Doğrulama
- **Ötzi (Buz Adam)** Alp dağlarındaki buzulda bulunan, yaklaşık **5.300 yıl** önce (≈ MÖ 3250) ölmüş mumyadır; **61 dövme** taşır. Smithsonian ve bilimsel makaleler dünyanın **bilinen en eski korunmuş dövmeleri** olduğunu belirtir (kaynaklarda yaş 5.000–5.300 arası farklı verilir).
- **Bıyık dövmeli mumya**, Şili'deki **Chinchorro** mumyasıdır (1983'te bulundu). Eskiden Ötzi'den daha yaşlı sanıldı çünkü **radyokarbon tarihi "3.830 BP" yanlışlıkla "MÖ 3.830" diye okundu** ve yaş yaklaşık 4.000 yıl şişti. Düzeltilmiş aralık **MÖ 2563–1972** civarıdır; yani **Ötzi'den çok daha genç**tir. "7200 yıl" bilgisi **bir yayın hatasının yayılmış hâlidir**.
- **Eski Mısır'da Hathor sembolünün iç bacağa doğurganlık için çizilmesi** notu: Mısır'da dövmeli mumya buluntuları vardır (kadın mumyalarında); işlevleri tartışmalıdır (Belirsiz) ve "doğurganlık" gibi kesin işlev iddiaları **yorumdur**.

## Ders
"Her yaygın istatistik/tarih bilgisi" için kaynağı ve **orijinal ölçümü** kontrol et; bir yanlış (3.830 BP / BC) yıllarca kopyalanabilir.

## Çalışma
Notlardaki üç tarihsel iddiayı "doğrulandı / düzeltildi / yorum" olarak etiketle.`,
          verification: `**Kaynak:** [Smithsonian — Ancient Ink: Iceman Ötzi](https://si.edu/stories/ancient-ink-iceman-otzi-has-worlds-oldest-tattoos), [Deter-Wolf ve ark. 2016 (halshs)](https://halshs.archives-ouvertes.fr/halshs-01227846v1/file/OldestTattoos.pdf), [National Geographic — tattoo history](https://www.nationalgeographic.com/history/article/tattoo-history), [Science News — Iceman](https://www.sciencenews.org/article/iceman-has-worlds-oldest-tattoos). Chinchorro tarihleme düzeltmesi National Geographic ve Deter-Wolf makalesi özetinden. Hathor dövmesi iddiası bu derste doğrulanmadı.`,
        },
        {
          id: "dv-tavsiye",
          title: "'Dövme tavsiyeleri': kişisel öğreti ve kanıt",
          summary: "Notlardaki beden bölgesi, element ve melek sembolü önerileri ve sağduyulu ilkeler.",
          body: `## Notlardaki ifadeler (örnek)
- "Dövme yaptırırken **akıl ve kalp birlikte karar vermeli**; aklına gelen sembol için **en az 1 ay bekle**, ona yakın sembolleri üzerinde taşıyıp etkisine bak."
- "**Sağ taraf neşe, sol taraf hüzündür.**"
- "**Element dövmesi yaptırma**; elementi taş veya aksesuar olarak kullan."
- "Melek sembolleri **ruhla bağlantılı yerlere** yaptırılabilir ama **ağır gelebilir**."
- "**Omuzda** yaptırırsan gölge yanını omuzunda daha çok taşırsın."
- "Herkese 'evet' derseniz taşıdığınız yükten dolayı **dizlerde su, belde fıtık** olabilir."
- Burca göre seçim ("balık ise gölgesi kurban olma psikolojisidir").

## Değerlendirme
| İfade | Durum |
|---|---|
| "En az 1 ay bekle" | **Sağduyulu ve yaygın bir tavsiye**: kalıcı bir dövmede ani karar riskini azaltır |
| Sağ=neşe, sol=hüzün; omuz=gölge; element dövmesi yaptırma; melek–beden bölgesi eşleşmeleri | **Kanıtsız kişisel/ezoterik öğreti**; bilimsel veya tarihsel dayanak gösterilmemiş |
| "Evet demek diz suyu/bel fıtığı yapar" | **Tıbbi iddia**; kanıtlanmamış; sağlık sorunları için hekime başvur |
| Burç temelli seçim | Astrolojik yorumdur (Astroloji modülü) |

## Güvenlik ve sağlık
Dövme **kalıcı bir cilt işlemidir**: lisanslı/hijyenik stüdyo, steril ekipman, alerji ve enfeksiyon riski, kaldırmanın zorluğu gibi **pratik riskler** vardır; sembol seçimi kadar bunlar da önemlidir.

## Çalışma
Kendi dövme/sembol fikrin için 1 ay sürecek bir "deneme dönemi" planı yaz: sembolün kökeni, farklı kültürlerdeki anlamı, olumsuz çağrışımlar ve hijyen/sağlık kontrol listesi.`,
          verification: `Notların ilgili ifadeleri PDF'ten okundu. "En az 1 ay bekleme" tavsiyesi sağduyuya dayanır; diğer ifadelerin dayanağı notlarda gösterilmemiştir. Dövme güvenliği genel halk sağlığı bilgisidir (lisanslı/hijyenik stüdyo).`,
        },
      ],
      quiz: [
        qz("Bilinen en eski korunmuş dövmeler kimin üzerindedir?", ["Ötzi (Buz Adam)", "Firavun Tutankhamun", "Chinchorro mumyası", "Roma imparatoru"], 0),
        qz("'7200 yıllık bıyık dövmeli mumya' bilgisinin kaynağı nedir?", ["Radyokarbon tarihinin yanlış okunması (3.830 BP → MÖ 3.830)", "Kesin arkeolojik gerçek", "Bir roman", "Bir yasa"], 0),
        qz("Notlardaki 'en az 1 ay bekle' tavsiyesi nasıl değerlendirilir?", ["Sağduyulu ve yaygın bir öneri", "Kanıtlanmış tıbbi kural", "Yasal zorunluluk", "Tarihî kayıt"], 0),
        qz("'Sağ taraf neşe, sol taraf hüzün' ifadesi için doğru ifade hangisidir?", ["Kanıtsız kişisel öğreti", "Bilimsel bulgu", "Tıbbi tanı", "Hukuk kuralı"], 0),
        qz("Dövme için hangisi pratik sağlık önlemidir?", ["Lisanslı, hijyenik stüdyo ve steril ekipman", "Ucuz mürekkep", "Evde kendin yapma", "Alerji testini atlama"], 0),
      ],
    },
    {
      id: "d2",
      title: "2. Seval Tezi: Anadolu'da Dövme",
      description: "Akademik bir kaynağın yapısı ve motif kategorileri.",
      lessons: [
        {
          id: "dv-tez",
          title: "Tezin yapısı ve ana savı",
          summary: "Beden, büyü, ikonografik kökenler, dünyada ve Anadolu'da dövme; astrolojik semboller, çadır, tamga, tarak, ok–yay, koç, nazar.",
          body: `## Künye
**Şermin Seval**, *Anadolu Kültüründe Simge, Anlam ve Sağaltım Boyutlarıyla "Dövme"*, **Işık Üniversitesi, Sosyal Bilimler Enstitüsü, Resim Ana Sanat Dalı, Yüksek Lisans Tezi**; danışman **Prof. Balkan Naci İslimyeli**.

## Özet'in savları
- Beden, sanatta anlatılan temel unsurlardan biridir; "bedene kazınan semboller, izler… sözcüklerle dile getirilemeyendir".
- İlkel dönemlerde bireyin bedenini "dileklerini gerçekleştirme arzusunun nesnesi" olarak kullandığı büyüsel ritüeller; "görünmeyeni anlamak için görünür temsiller".
- **Doğu ve Güneydoğu Anadolu**'da dövme geleneği: **kadınlarda** zarafet, soyluluk, güzellik; **erkeklerde** güç ve iktidar sembolü; motif ve anlam benzerliği **ortak kültür yapısının** ürünü; kına, sürme, doğum–ölüm törenleri, büyüsel ritüeller, tütsüler, altın diş gibi uygulamalarla iç içe.

## Bölüm yapısı (içindekiler)
1. **Anadolu kültüründe simge, anlam ve sağaltım** (1.1 Beden, Deri)
2. **Beden ve büyü**
3. **Dövmenin ikonografik kökenleri**
4. **Dünyada dövme**
5. **Anadolu'da dövmenin kaynakları ve çok yönlü anlamları:** 5.1 **Astrolojik semboller**, 5.2 **Çadır**, 5.3 **Tamga**, 5.5 **İnsan**, 5.6 **Tarak**, 5.7 **Ok–yay**, 5.8 **Koç**, 5.9 **Dilek, temenni ve nazar dövmeleri**
6. **Çevre coğrafyalarda dövme:** 6.1 Kuzey Afrika, 6.2 Ortadoğu, 6.3 Balkanlar
7. **İslamiyet'te beden, dövme, yazı ve sembol**
8. **Anadolu coğrafyasında din, mezhep ve tarikatlarda dövme**
9. **Kentlere göç sürecinde dövmenin uğradığı değişim**

## Neden değerli?
Bu, **akademik** bir kaynak: saha ve literatür taramasıyla dövmeyi **antropoloji/sanat tarihi** çerçevesinde ele alır; "sembol → anlam" iddialarını **kültürel bağlam** içinde okur (Okültizm modülü 9. ünite).

## Çalışma
Bir motif seç (ör. koç, tarak, çadır); tezin ilgili bölümünü oku, motifin **hangi bölgede, hangi toplulukta, hangi anlamla** geçtiğini tabloya yaz ve kendi sembol listenle karşılaştır.`,
          verification: `Tezin özet ve içindekiler bölümleri PDF'ten doğrudan okundu. Bölüm gövdeleri (motif katalogları, saha bulguları) bu derste okunmadı; tezin bilimsel niteliği (hakemli bir yüksek lisans tezi olması) kapak/künyeden görülür, içeriğin doğruluğu bağımsız olarak değerlendirilmedi.`,
        },
      ],
      quiz: [
        qz("Tez hangi ana sanat dalında yazılmıştır?", ["Resim", "Tıp", "Hukuk", "Mimarlık"], 0),
        qz("Tezde Anadolu'da dövmenin kadın ve erkekler için anlamı nedir?", ["Kadınlar için zarafet/güzellik, erkekler için güç ve iktidar", "Hep aynı anlam", "Hiç anlamı yok", "Sadece tedavi"], 0),
        qz("Tezde hangi başlık 'dilek ve nazar' ile ilgilidir?", ["5.9 Dilek, temenni ve nazar dövmeleri", "6.1 Kuzey Afrika", "7. İslamiyet", "9. Göç"], 0),
        qz("Tezin 7. bölümü neyi inceler?", ["İslamiyet'te beden, dövme, yazı ve sembol", "Tarot", "Astroloji", "Simya"], 0),
        qz("Bu tez neden 'akademik kaynak' sayılır?", ["Yüksek lisans tezi olarak literatür ve saha taramasına dayanır", "Reklam metnidir", "Sosyal medya paylaşımıdır", "Roman"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **'Dövmeler ve Semboller' notlarının geri kalanı (hayvan, çiçek, melek, burç sembollerinin 'anlamları'):** Kaynak gösterilmemiş kişisel yorumlar; doğrulanamadı.
- **Tezin bölüm gövdeleri ve motif katalogları (çadır, tamga, tarak, koç, nazar vb.):** Hacimli; okunmadı. Motif araştırması için tezi doğrudan oku.
- **Hathor sembolünün iç bacağa doğurganlık için çizilmesi iddiası:** Bağımsız olarak doğrulanamadı.
- **Borneo kabileleri ve diğer etnografik örnekler (notlarda):** Doğrulanmadı.
- **Dövmenin 'enerjetik/ruhsal etkileri' (bölge–gölge, melek–ruh bağları):** Bilimsel dayanak yok.`,
});
