import type { ModuleContent } from "./types";
import { lessonBody as L } from "./md";

type Bodies = ModuleContent["bodies"];

export const muhendisBodiesC: Bodies = {
  "se-an1": L(
    `## Analistin misyonu
Analist, **iş ihtiyacını** (neden?) anlayıp **çözüm gereksinimine** (ne?) çevirir ve geliştiricilerin **doğru şeyi doğru yapmasını** sağlar. Kod yazmaz; belirsizliği azaltır.

## Temel kavramlar
- **Analiz**: Bütünü parçalara ayırıp ilişkilerini anlama. **Sistem**: Amaç için birlikte çalışan bileşenler (insanlar, süreçler, yazılım).
- **İş analizi**: İşin kendisini (süreç, kural, hedef) anlama. **Sistem analizi**: Yazılımın ne yapacağını belirleme.
- **Gereksinim**: Bir paydaşın bir hedefe ulaşması için çözümün sağlaması gereken yetenek veya koşul.
- **Gereksinim kaynakları**: Paydaşlar, mevcut sistem/belgeler, mevzuat, rakipler, kullanıcı gözlemi, veri.

## Gereksinim tipleri
| Tip | Örnek |
|---|---|
| **İş gereksinimi** | "Randevu iptalleri %30 azalsın" |
| **Paydaş/kullanıcı gereksinimi** | "Müşteri randevusunu iptal edebilmeli" |
| **Fonksiyonel** | "Sistem iptalde müşteriye e-posta gönderir" |
| **Fonksiyonel olmayan** | "İptal ekranı 2 sn'den hızlı açılır; KVKK'ya uygun" |
| **Kısıt / varsayım** | "Mevcut ödeme sağlayıcısı kullanılacak" |

## Analistler için temel kavramlar
- **Müşteri, paydaş, iş birimi**: İşi isteyen, etkilenen ve kullanan farklı kişiler olabilir.
- **Amaç ve hedef**: "Neden yapıyoruz?" cevabı olmayan iş yönlendirilemez; hedefleri **ölçülebilir** yaz.
- **Risk** (olabilecek olumsuz olay), **kısıt** (değiştiremeyeceğin sınır: bütçe, süre, mevzuat), **varsayım** (doğru kabul ettiğin ama doğrulanmamış bilgi): üçünü **kayıt altına al**; çoğu proje bunların gizli kalmasıyla batar.
- **Yönetim**: Müşteri beklentisini, gereksinim değişimini ve geliştirici iletişimini yönetmek analistin işidir.
- **Etkinlik ve verimlilik**: Doğru işi yapmak (etkinlik) ve işi doğru/kaynak harcamadan yapmak (verimlilik).

## Alıştırma
"Okulda kantin siparişi uygulaması" talebini al; paydaşları, hedefleri, 5 fonksiyonel + 3 fonksiyonel olmayan gereksinimi, 3 risk, 3 kısıt ve 3 varsayımı listele.`,
    `**Kaynak:** BT Akademi programındaki "İş ve Sistem Analizi ile Tanışma" konu başlıklarına göre hazırlanmış genel bir özettir; tanımlar BABOK/IIBA ve yaygın analiz literatürüyle uyumludur. Ek okuma: [UML (Wikipedia)](https://en.wikipedia.org/wiki/Unified_Modeling_Language). Ücretsiz eğitim bağlantıları (BOEN) ders ücretsiz, sertifika ücretlidir.`
  ),
  "se-an2": L(
    `## Gereksinim analizi sürecinin genel akışı
1. **Talebin oluşumu** → 2. **Talebin anlaşılması** → 3. **Analiz stratejisi** → 4. **Kapsam belirleme ve mutabakat** → 5. **İş analizi** → 6. **Gereksinim analizi ve fonksiyonel çözüm tasarımı** → 7. **Dokümantasyon** → 8. **Doğrulama** → 9. **Onay** → 10. **Değişiklik yönetimi**.

Sürece "çağlayan" gibi bakma; **döngüsel** ilerler (yeni bilgi önceki adımı günceller).

## Temel analiz teknikleri
| Teknik | Ne zaman? | İpucu |
|---|---|---|
| **Toplantı** | Birden çok paydaşla karar/bilgi toplama | Gündem, süre, çıktı ve aksiyon listesi belirle |
| **Mülakat (birebir)** | Derin bilgi, hassas konular | Açık uçlu sorular ("Bunu nasıl yapıyorsunuz?") |
| **Rehberli çalıştay** | Çok paydaşla hızlı ortak karar | Tarafsız kolaylaştırıcı, görünür çıktı (beyaz tahta) |
| **Gözlem** | Anlatılanla yapılanı karşılaştırma | İşi yapan kişiyi izle; yönlendirme |
| **Anket** | Çok sayıda/uzaktaki kullanıcı | Kısa, tarafsız, test edilmiş sorular |
| **Odak grup** | Belirsizlik/kararsızlık, kullanıcı algısı | Baskın kişiyi dengele |
| **Prototipleme** | Arayüz/akış kararsızlığını önleme | Düşük doğruluklu ekran taslağı → hızlı geri bildirim |

## Etkin toplantı ipuçları
Önceden gündem gönder; kimlerin katılması gerektiğini sınırla; kararı ve aksiyonu not al; toplantıdan sonra **tutanağı 24 saatte** paylaş.

## İyi mülakat soruları
"Bugün bu işi nasıl yapıyorsunuz?", "En çok zaman kaybettiren adım hangisi?", "Hata olursa ne olur?", "Başarıyı nasıl ölçersiniz?" — "evet/hayır" sorularından kaçın, "peki istisnalar?" diye sor.

## Alıştırma
Kantin uygulaması için bir mülakat rehberi (10 soru) ve bir kağıt prototip (3 ekran) hazırla; bir arkadaşını "kantin sorumlusu" olarak mülakat edip yeni üç gereksinim bul.`,
    `**Kaynak:** BT Akademi programı konu başlıkları (Gereksinim Analizi Süreci, Temel Analiz Teknikleri) ve yaygın analiz pratikleri (BABOK). Tablodaki ipuçları genel önerilerdir. İlgili BOEN dersleri: Toplantı Yönetimi, Etkili İletişim (ders ücretsiz, sertifika ücretli).`
  ),
  "se-an3": L(
    `## Adım 1 — Talebin anlaşılması
- Talebi **tanımla**: Kim, neden, ne istiyor? Arkasındaki **iş problemi** nedir? ("Rapor ekranı istiyoruz" → asıl problem: kararlar geç alınıyor.)
- **Etki analizi**: Hangi paydaşlar, süreçler, sistemler etkilenir?
- **Varsayım, kısıt, risk**: Kayıt altına al.

## Adım 2 — Analiz stratejisi ve planlama
Gereksinim kaynaklarını belirle; analiz faaliyetlerini sırala; analiz çalışmasının **kısıt/varsayım/risklerini** yaz; **döngüsel** çalış (kısa turlar, geri bildirim); **efor ve süre** tahmin et (belirsizlik varsa aralık ver).

## Adım 3 — Kapsam belirleme ve mutabakat

### Kullanıcı hikâyesi
~~~text
Bir <rol> olarak, <amaç> istiyorum ki <fayda>.
Kabul ölçütleri:
- Verilen: ... Yapıldığında: ... Beklenen: ...
~~~
Örnek: "Bir müşteri olarak randevumu iptal etmek istiyorum ki ücret ödemeyeyim." İyi hikâye **INVEST**: bağımsız, tartışılabilir, değerli, tahmin edilebilir, küçük, test edilebilir.

### Kullanım vakası (use case) ve UML diyagramı
Aktör + hedef + ana akış + alternatif akışlar.
~~~mermaid
flowchart LR
  Musteri((Müşteri)) --> RandevuAl[Randevu al]
  Musteri --> Iptal[Randevu iptal]
  Yonetici((Yönetici)) --> Takvim[Takvimi yönet]
~~~

### Bağlam (ortam) şeması
Sistem tek kutu; dışındaki aktörler/sistemler ve aralarındaki veri akışı (kapsamı netleştirir).

### Fonksiyonel olmayan gereksinimler
Performans, güvenlik, erişilebilirlik, kullanılabilirlik, yedekleme, KVKK/mevzuat — **ölçülebilir** yaz ("95. yüzdelik yanıt süresi < 500 ms").

### Kapsam mutabakatı
Müşteri, teknik ekip, test ve proje yönetimi **aynı belgeyi** onaylar; onaylı kapsam **temel çizgi (baseline)** olur, sonraki değişiklikler **değişiklik yönetimi** ile ilerler.

## Alıştırma
Kantin uygulaması için 8 kullanıcı hikâyesi + kabul ölçütleri, bir kullanım vakası şeması ve bir bağlam şeması çiz (Mermaid ile). Kapsam dışı 5 şeyi açıkça yaz.`,
    `**Kaynaklar:** [Atlassian — Kullanıcı hikâyeleri](https://www.atlassian.com/agile/project-management/user-stories), [Mountain Goat — User Stories](https://www.mountaingoatsoftware.com/agile/user-stories), [Fowler — Use Case](https://martinfowler.com/bliki/UseCase.html), [Mermaid](https://mermaid.js.org), [UML (Wikipedia)](https://en.wikipedia.org/wiki/Unified_Modeling_Language). INVEST kısaltması Bill Wake'e aittir.`
  ),
  "se-an4": L(
    `## Adım 4 — İş analizi
- **İş kuralları**: "Randevu başlangıcından 2 saat önceye kadar ücretsiz iptal edilebilir." Kuralları **numaralandır**, kaynağını yaz.
- **İş terminolojisi ve veri sözlüğü**: Terimin tek anlamı; alan adı, tip, zorunluluk, örnek.
- **İş kısıtları**: Mevzuat, bütçe, çalışma saatleri.
- **İş alanı modeli** (UML sınıf şeması):
~~~mermaid
classDiagram
  class Musteri { +id +ad +eposta }
  class Randevu { +baslangic +durum }
  class Hizmet { +ad +sureDk +fiyat }
  Musteri "1" --> "*" Randevu
  Randevu "*" --> "1" Hizmet
~~~
- **Varlık durum geçişleri**:
~~~mermaid
stateDiagram-v2
  [*] --> Bekliyor
  Bekliyor --> Onaylandi
  Bekliyor --> IptalEdildi
  Onaylandi --> Tamamlandi
  Onaylandi --> IptalEdildi
~~~
- **Karar noktaları ve karar ağaçları / tabloları**: Birden fazla koşula bağlı kurallar için.
- **Hesaplamalar**: Formül, yuvarlama, kaynak ("KDV = tutar × 0,20").
- **İş süreçleri**: BPMN/akış şeması ile "mevcut" ve "olması gereken" süreç.

## Adım 5 — Gereksinim analizi ve fonksiyonel çözüm tasarımı
- **Kullanım vakası** ile gereksinim: ad, aktör, ön koşul, **ana akış**, **alternatif/istisna akışlar**, son koşul.
- **Ekran etkileşim gereksinimleri**: alanlar, doğrulama, hata mesajı, butonların davranışı.
- **Rapor etkileşim gereksinimleri**: filtreler, sütunlar, sıralama, dışa aktarma.
- **Entegrasyon gereksinimleri**: Hangi dış sistem, hangi veri, yön, sıklık, hata durumu.
- **Zaman ayarlı servis gereksinimleri**: "Her gece 02:00'de iptal edilmemiş geçmiş randevular tamamlandı olarak işaretlenir."

## Adım 6 — Analiz çalışmasını sonlandırma
1. Gereksinim ve fonksiyonel tasarım **belgesini** tamamla (izlenebilirlik: hikâye → kural → test).
2. **Doğrula**: Tutarlı, eksiksiz, test edilebilir mi? (Tester ile gözden geçir.)
3. **Teknik uzmanlardan** uygulanabilirlik görüşü al.
4. **Müşteriye aktar, onay al**; onaydan sonraki değişiklikler değişiklik yönetimiyle.

## Alıştırma
Kantin uygulamasının "sipariş ver" kullanım vakasını tam akışlarıyla (ana + 3 alternatif), durum geçiş diyagramını ve veri sözlüğünü yaz; bir arkadaşından "belirsiz bir cümle" bulmasını iste ve düzelt.`,
    `**Kaynaklar:** [UML (Wikipedia)](https://en.wikipedia.org/wiki/Unified_Modeling_Language), [Mermaid](https://mermaid.js.org), [Fowler — Use Case](https://martinfowler.com/bliki/UseCase.html). Adım numaralandırması BT Akademi programının "İş ve Sistem Analizi" başlıklarını izler; içerik genel analiz uygulamalarıdır.`
  ),
  "se-agile": L(
    `## Çevik (Agile) yaklaşımın tarihçesi ve manifesto
Geleneksel **çağlayan** modelde gereksinim, tasarım, kodlama, test aşamaları sırayla ilerler; değişim pahalıdır. 2001'de 17 yazılımcı **Çevik Yazılım Geliştirme Manifestosu**'nu yayımladı.

Dört değer: **Süreç ve araçlardan çok bireyler ve etkileşim; kapsamlı dokümantasyondan çok çalışan yazılım; sözleşme pazarlığından çok müşteriyle işbirliği; plana uymaktan çok değişime yanıt verme.** (Sağdaki maddeler de değerlidir; soldakiler daha çok değerlidir.)

Manifestonun **12 ilkesi** arasında: değerli yazılımı erken ve sürekli teslim, değişen gereksinimi kabul, sık teslim, günlük iş birliği, motive bireyler, yüz yüze iletişim, çalışan yazılım ilerleme ölçüsü, sürdürülebilir tempo, teknik mükemmellik, sadelik, kendi kendini yöneten ekipler, düzenli iyileştirme.

~~~mermaid Scrum döngüsü
flowchart LR
  PB["Product Backlog"] --> SP["Sprint Planlama"]
  SP --> SB["Sprint Backlog"]
  SB --> G["Sprint (1–4 hafta)<br/>Günlük Scrum"]
  G --> A["Artım (Increment)"]
  A --> SR["Sprint Gözden Geçirme"]
  SR --> RT["Retrospektif"]
  RT --> PB
~~~

## Çeviklik hakkında yaygın yanlışlar
"Plan yok", "dokümantasyon yok", "her şey sonradan değişir", "Scrum = hızlı çalışmak" doğru değildir. Çeviklik **disiplinli** bir adaptasyondur.

## Scrum çerçevesi (Scrum Kılavuzu)
| Öğe | İçerik |
|---|---|
| **Roller** | Ürün Sahibi (ne? öncelik), Geliştiriciler (nasıl? yapım), Scrum Master (süreci kolaylaştırır) |
| **Olaylar** | **Sprint** (1–4 hafta), Sprint Planlama, Günlük Scrum (15 dk), Sprint Gözden Geçirme, Sprint Retrospektifi |
| **Artefaktlar** | Ürün Backlog'u (Ürün Hedefi), Sprint Backlog'u (Sprint Hedefi), Artım (Increment) — her biri bir taahhütle ilişkili |

## Scrum'da kapsam, tasarım, raporlama
- **Kapsam**: Backlog sürekli düzenlenir (refinement); sprint içinde sprint hedefi sabit, kapsam pazarlığa açıktır.
- **Tasarım ve geliştirme**: Her sprint sonunda **kullanılabilir artım**; sürekli entegrasyon, otomatik test.
- **Raporlama ve hız (velocity)**: Sprintte tamamlanan hikâye puanı toplamı; planlama için ortalama kullanılır. Hız **bir performans karşılaştırma ölçütü değildir**, kapasite tahmin aracıdır.

## Çevik sözleşme yönetimi
Sabit kapsam/sabit fiyat yerine **sabit zaman + esnek kapsam**, aşamalı ödeme, her sprint sonunda çıkış noktası içeren sözleşmeler tartışılır.

## Alıştırma
Kendi çalışma düzenini 2 haftalık sprintlerle yönet: bir ürün hedefi koy, 10 maddelik backlog yaz, haftalık planlama + günlük kısa not + sprint sonu gözden geçirme/retro yap.`,
    `**Kaynaklar:** [Çevik Manifesto (Türkçe)](https://agilemanifesto.org/iso/tr/manifesto.html), [Manifesto ilkeleri](https://agilemanifesto.org/principles.html), [Scrum Kılavuzu](https://scrumguides.org/scrum-guide.html), [Atlassian — Scrum](https://www.atlassian.com/agile/scrum), [Scrum rolleri](https://www.atlassian.com/agile/scrum/roles). Sprint süresi ve olay isimleri Scrum Kılavuzu'nun güncel sürümüne göre kontrol edilmelidir.`
  ),
  "se-scrum-uyg": L(
    `Bu ders **uygulama**dır; her adımı gerçekten yap.

## 1) Product Backlog hazırlama
- Ürün hedefini tek cümleyle yaz.
- Maddeleri (hikâye, hata, teknik iş) **değerine göre sırala**; en üstte netleşmiş küçük maddeler, altta büyük/belirsizler olsun.
- Her madde: başlık, hikâye, kabul ölçütleri, tahmin.

## 2) Kullanıcı hikâyesi yazma
Şablon: "Bir ⟨rol⟩ olarak ⟨amaç⟩ istiyorum ki ⟨fayda⟩." **Büyük hikâyeyi (epic) böl**: dikey dilimler (küçük ama uçtan uca çalışan parça).

## 3) Planning Poker
Ekip her hikâyeye **gizlice** puan seçer (Fibonacci: 1, 2, 3, 5, 8, 13...), aynı anda açar, en yüksek/düşük gerekçesini anlatır, yeniden oylar. Amaç doğru sayı değil, **ortak anlayış**dır. Tek kişiysen geçmiş işlerle **göreli** kıyasla.

## 4) Kaizen ve hız
**Kaizen** = sürekli küçük iyileştirme. Her sprint sonunda retrospektifte: Ne iyi gitti? Ne kötü gitti? Bir sonraki sprint için **tek bir** somut iyileştirme seç. **Hız** = sprintte "bitti" kriterini sağlayan hikâyelerin puan toplamı; son 3 sprintin ortalaması planlama için yol gösterir.

## 5) Sprint oyunu (simülasyon)
Küçük bir görev (ör. kâğıttan uçak) etrafında 2 sprint oyna: planla, üret, gözden geçir, iyileştir. Çıkarım: işi parçalamak ve geri bildirim döngüsünün kısalığı kaliteyi artırır.

## 6) Burndown grafiği
Sprint boyunca kalan iş (puan) günlük çizilir; **ideal çizgi** ile gerçek karşılaştırılır. Düz kalan bir çizgi: iş büyük/engel var; sonda ani düşüş: işler geç "bitiyor".
~~~svg Örnek burndown grafiği: gerçek çizgi ideal çizgiyi izler
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 240' font-family='system-ui,sans-serif' font-size='11'><rect width='460' height='240' fill='white'/><line x1='46' y1='16' x2='46' y2='206' stroke='#555'/><line x1='46' y1='206' x2='444' y2='206' stroke='#555'/><text x='40' y='210.0' text-anchor='end' fill='#555'>0</text><line x1='46' x2='444' y1='206.0' y2='206.0' stroke='#eee'/><text x='40' y='162.5' text-anchor='end' fill='#555'>5</text><line x1='46' x2='444' y1='158.5' y2='158.5' stroke='#eee'/><text x='40' y='115.0' text-anchor='end' fill='#555'>10</text><line x1='46' x2='444' y1='111.0' y2='111.0' stroke='#eee'/><text x='40' y='67.5' text-anchor='end' fill='#555'>15</text><line x1='46' x2='444' y1='63.5' y2='63.5' stroke='#eee'/><text x='40' y='20.0' text-anchor='end' fill='#555'>20</text><line x1='46' x2='444' y1='16.0' y2='16.0' stroke='#eee'/><text x='46.0' y='220' text-anchor='middle' fill='#555'>G1</text><text x='90.22222222222223' y='220' text-anchor='middle' fill='#555'>G2</text><text x='134.44444444444446' y='220' text-anchor='middle' fill='#555'>G3</text><text x='178.66666666666666' y='220' text-anchor='middle' fill='#555'>G4</text><text x='222.88888888888889' y='220' text-anchor='middle' fill='#555'>G5</text><text x='267.1111111111111' y='220' text-anchor='middle' fill='#555'>G6</text><text x='311.3333333333333' y='220' text-anchor='middle' fill='#555'>G7</text><text x='355.55555555555554' y='220' text-anchor='middle' fill='#555'>G8</text><text x='399.77777777777777' y='220' text-anchor='middle' fill='#555'>G9</text><text x='444.0' y='220' text-anchor='middle' fill='#555'>G10</text><line x1='46.0' y1='16.0' x2='444.0' y2='206.0' stroke='#999' stroke-dasharray='5 4' stroke-width='2'/><polyline fill='none' stroke='#dc2626' stroke-width='2.4' points='46.0,16.0 90.2,25.5 134.4,44.5 178.7,44.5 222.9,63.5 267.1,92.0 311.3,101.5 355.6,130.0 399.8,168.0 444.0,206.0'/><circle cx='46.0' cy='16.0' r='3' fill='#dc2626'/><circle cx='90.2' cy='25.5' r='3' fill='#dc2626'/><circle cx='134.4' cy='44.5' r='3' fill='#dc2626'/><circle cx='178.7' cy='44.5' r='3' fill='#dc2626'/><circle cx='222.9' cy='63.5' r='3' fill='#dc2626'/><circle cx='267.1' cy='92.0' r='3' fill='#dc2626'/><circle cx='311.3' cy='101.5' r='3' fill='#dc2626'/><circle cx='355.6' cy='130.0' r='3' fill='#dc2626'/><circle cx='399.8' cy='168.0' r='3' fill='#dc2626'/><circle cx='444.0' cy='206.0' r='3' fill='#dc2626'/><text x='440' y='30' text-anchor='end' fill='#999'>- - ideal</text><text x='440' y='44' text-anchor='end' fill='#dc2626'>— gerçek</text><text x='245.0' y='234' text-anchor='middle' fill='#444'>Sprint günleri · kalan puan</text></svg>
~~~

~~~text
Kalan puan
20 |*
15 |   *   *
10 |        *
 5 |            *
 0 +----------------
     G1 G2 G3 G4 ...
~~~

## Alıştırma
2 haftalık bir sprint kur: backlog (10 madde), planning poker (kendin için ağırlıklandır), günlük ilerlemeyi bir tabloya yaz, burndown çiz, retrospektif notu al. Sprint sonunda hız değerini hesapla.`,
    `**Kaynaklar:** [Atlassian — Backlog](https://www.atlassian.com/agile/scrum/backlogs), [Planning Poker](https://www.mountaingoatsoftware.com/agile/planning-poker), [Tahmin](https://www.atlassian.com/agile/project-management/estimation), [Sprint](https://www.atlassian.com/agile/scrum/sprints), [Burndown](https://www.atlassian.com/agile/tutorials/burndown-charts), [Kanban](https://www.atlassian.com/agile/kanban).`
  ),
  "se-cv": L(
    `## Kariyer hedefi belirle
"Nereye?" sorusu CV'nin her cümlesini yönlendirir. Örnek: "Junior Frontend Developer (React/Next.js), ürün odaklı bir takımda". Hedefi bir cümleye indirgeyemiyorsan CV dağınık olur.

## Tek sayfalık CV (yazılımcı için)
1. **Başlık**: Ad, hedef rol, e-posta, LinkedIn, GitHub, canlı portföy.
2. **Özet (2–3 cümle)**: Hedef + güçlü yön + kanıt.
3. **Beceriler**: Gruplanmış (Dil/Framework/Araç); yalnızca gerçekten kullandıkların.
4. **Projeler**: 2–4 proje; her biri **ne yaptığın + teknoloji + etki/ölçü + bağlantı**. ("Randevu uygulaması — Next.js 16/Prisma; LCP 1,8 sn; 40 testle %85 kapsam; canlı: ...")
5. **Deneyim/staj**, **eğitim**, **sertifika** (yalnızca anlamlı olanlar).
- **Eylem fiilleri** ve **sayılar** kullan; "sorumluydum" yerine "geliştirdim, azalttım, otomatikleştirdim".
- **ATS** (aday takip sistemleri) için sade biçim: tablo/görsel yok, standart başlıklar, PDF.
- Fotoğraf, doğum yeri gibi konular ülke/şirket normuna göre değişir.

## LinkedIn
Net başlık ("Frontend Developer | React · Next.js · TypeScript"), profil fotoğrafı, özet, öne çıkan projeler, beceri doğrulamaları, düzenli ve değerli paylaşımlar; yalnızca iş arayanlara değil işe alım uzmanlarına da hitap et. Bağlantı isteklerini kişiselleştir.

## GitHub ve portföy
- Pinli 4–6 depo: açıklayıcı ¦README¦ (ne, nasıl çalıştırılır, ekran görüntüsü, canlı bağlantı, mimari kararlar).
- Anlamlı commit geçmişi, test ve CI rozeti.
- Tek bir "mükemmel" proje, on yarım projeden iyidir.

## Alıştırma
CV'ni yaz, bir meslektaşına/yazılımcı arkadaşına "6 saniye testi" yaptır (ne kaldı aklında?). Ardından aynı ilana hem genel hem **ilana özel uyarlanmış** CV hazırla ve farkı not et.`,
    `**Kaynaklar:** [Tech Interview Handbook — CV](https://www.techinterviewhandbook.org/resume/). BOEN "CV Hazırlama" ve "LinkedIn Yönetimi" dersleri ücretsizdir, sertifikaları ücretlidir. "6 saniye testi" işe alımcıların CV'ye çok kısa bakmasına dayanan yaygın bir pratiktir.`
  ),
  "se-mulakat": L(
    `## Mülakat türleri
1. **Tanışma/İK**: Motivasyon, beklenti, kültür uyumu.
2. **Teknik**: Temel bilgi, kod yazma, algoritma, sistem tasarımı (kıdeme göre).
3. **Davranışsal**: Geçmiş davranışlardan çıkarım ("Zor bir takım arkadaşıyla nasıl çalıştın?").
4. **Ev ödevi / canlı kodlama**.

## Sık sorular ve ideal cevap yapısı
- **"Kendinden bahset"**: 60–90 sn: şimdiki durum → ilgili geçmiş → neden bu rol. (Asansör konuşması.)
- **"Neden bu şirket/rol?"**: Şirketi araştırdığını gösteren somut neden.
- **"Zayıf yönün?"**: Gerçek, üzerinde çalıştığın ve ilerleme kanıtı olan bir şey; klişe ("mükemmeliyetçiyim") değil.
- **STAR yöntemi** (davranışsal): **S**ituation (durum), **T**ask (görev), **A**ction (yaptığın), **R**esult (sonuç, mümkünse sayıyla).

## Teknik hazırlık
- Temeller: JS/TS, React, HTTP, tarayıcı, CSS yerleşimi; açıklama yapabil (neden/nasıl).
- Algoritma: Diziler, string, hash map, ağaç, ikili arama; her gün 1–2 soru; yüksek sesle düşün.
- Kod yazarken: Önce soruyu netleştir, örnekle, yaklaşımı söyle, kodla, test et, karmaşıklığı belirt.
- Bilmediğinde: "Emin değilim ama şöyle düşünüyorum..." de; uydurma.

## Mülakat sırasında dikkat edilecekler
Zamanında ol, kısa ve net konuş, soruyu dinle, takıldığında sessiz kalma, kendi sorularını sor ("Takım nasıl çalışıyor? İlk 90 günde başarı ne olur? Kod incelemesi nasıl yapılıyor?"), sonunda teşekkür e-postası.

## Mülakatlarda sorulmaması gereken sorular (işveren tarafı)
Yaş, medeni durum, hamilelik/çocuk planı, din, etnik köken, siyasi görüş, sağlık durumu gibi **ayrımcılığa yol açabilecek** konular iş ile ilgili değildir; çalışan hakları ve KVKK açısından sorulmamalıdır. Bu tür bir soruyla karşılaşırsan: nazikçe işe odaklı yanıt ver veya konuyu role ilgili yeteneğe yönlendir.

## Maaş görüşmesi
Piyasa verisini araştır, aralık ver, toplam paketi (yan haklar, eğitim bütçesi, uzaktan çalışma) birlikte değerlendir; ilk teklifi hemen kabul etme zorunluluğu yoktur.

## Alıştırma
Bir arkadaşınla (veya kayıt alarak) 30 dakikalık sahte mülakat yap: 3 davranışsal soru (STAR), 1 kodlama, 1 sistem sorusu; kaydı izleyip alışkanlıkları (dolgu sözcükleri, belirsizlik) not al.`,
    `**Kaynaklar:** [Tech Interview Handbook](https://www.techinterviewhandbook.org), [Davranışsal mülakat](https://www.techinterviewhandbook.org/behavioral-interview/), [NeetCode yol haritası](https://neetcode.io/roadmap). Mülakatlarda sorulmaması gereken konular ülkenin iş ve ayrımcılık yasaklarına bağlıdır; yasal tavsiye değildir, kendi ülkenin mevzuatını kontrol et. STAR yöntemi yaygın bir davranışsal mülakat çerçevesidir.`
  ),
  "se-kariyer": L(
    `## Asansör konuşması (elevator pitch)
30–60 saniyede **kimsin, ne yapıyorsun, ne arıyorsun, seni farklı kılan ne** sorularını cevaplar.

~~~text
Merhaba, ben ⟨ad⟩. ⟨Alan⟩ üzerine ⟨kaç⟩ yıldır çalışıyorum; en son ⟨somut proje/sonuç⟩ yaptım.
Şu an ⟨hedef rol⟩ rolünde ⟨değer/alan⟩ ile ilgili fırsatlar arıyorum. ⟨Seni merak ettiren/farklı kılan⟩.
~~~
Aynada ve kayıtla çalış; farklı muhataplara (teknik/İK) göre iki sürüm hazırla.

## İş yaşamında psikolojik sağlamlık (dayanıklılık)
- **Uyku, hareket, mola** temeldir; sürekli "acil" modda performans düşer.
- **Sınır koy**: Mesai dışı bildirimler, "hayır" demeyi öğren.
- **Hata = veri**: Suçlamasız geriye bakış (retrospektif) kültürü.
- **Karşılaştırma tuzağı** ve **sahtekâr sendromu** yazılımda çok yaygındır; ilerlemeni yaz (başarı günlüğü).
- **Destek ağı**: Mentör, meslektaşlar, topluluk.
- Tükenmişlik belirtileri (sürekli yorgunluk, ilgisizlik, verim düşüşü) sürerse bir uzmandan destek al.

## Mentörlük ve koçluk
- **Mentör**: Deneyimli, yol gösteren kişi. **Koç**: Soru sorarak seni kendi cevabına götürür.
- Mentora gelirken **hazırlıklı ol**: somut soru, deneyeceğin şey, geri bildirim iste; zamanına saygı göster.
- Bir gün sen de başkasına mentör ol: öğretmek en iyi öğrenme yoludur.

## Öğrenme ve kariyer planı
1. **Hedef**: 12 ay sonra nerede olmak istiyorsun?
2. **Boşluk analizi**: İlan taraması → eksik beceriler.
3. **Üç aylık plan**: 1 ana beceri + 1 proje + 1 görünürlük (yazı/sunum/açık kaynak).
4. **Ölç**: Aylık gözden geçirme (hangi proje bitti, neyi öğrendim?).
5. **Ağ kur**: Meetup, konferans, açık kaynak, LinkedIn.

## Zaman yönetimi
Önceliklendirme (Eisenhower: acil/önemli), derin çalışma blokları, haftalık planlama, tek seferde tek iş.

## Alıştırma
Asansör konuşmanı yaz ve kaydet; sonra 12 aylık kariyer planını (hedef, 3 beceri, 2 proje, aylık kontrol noktaları) bir sayfaya çıkar ve bu sitenin "Rutin & Hedefler" bölümüne ekle.`,
    `**Kaynaklar:** [Tech Interview Handbook](https://www.techinterviewhandbook.org) (kariyer ve mülakat), BOEN dersleri (ders ücretsiz, sertifika ücretli): Zaman Yönetimi, Stres Yönetimi, Stratejik Düşünme. Psikolojik sağlık konusunda bu ders genel bilgidir, tıbbi/psikolojik tavsiye değildir; sürekli sıkıntıda bir uzmana başvur.`
  ),
  "se-proje": L(
    `## Bitirme projeleri (programdaki "Proje 1–4" karşılığı)
Öğrenmeyi kalıcı yapan şey proje yapmaktır. Bu modülde dört proje önerildi (**Projeler** sekmesinde ayrıntılı):

| Proje | Odak | Süre (yaklaşık) |
|---|---|---|
| **Proje 1** — Kütüphane yönetimi (konsol) | Algoritma, OOP, koleksiyonlar, hata yönetimi, dosya kalıcılığı | 20 saat |
| **Proje 2** — Sipariş sistemi veritabanı | Normalizasyon, JOIN, transaction, MongoDB karşılaştırması | 25 saat |
| **Proje 3** — Randevu API'si (Node.js) | Katmanlı mimari, doğrulama, auth, test, OpenAPI | 35 saat |
| **Proje 4** — Full-stack bitirme (Next.js 16) | Analiz, Scrum, geliştirme, test, yayın | 80 saat |

## Çalışma biçimi
- Her proje için önce **analiz çıktıları** (hikâye, kabul ölçütü, ER/sınıf diyagramı).
- **Sprintlerle** ilerle; sprint sonunda çalışan bir artım.
- **Git**: Dal, anlamlı commit, PR, kendi kendine kod incelemesi.
- **Test** ve **README**: Başkası senin projeni çalıştırabilmeli.

## Next.js tarafı
Proje 4'te kullanılacak Next.js 16 konuları (App Router, Server Components, Server Actions, önbellek, auth, test, yayın) **React ve Arka Plan** modülündeki "Next.js Uzmanlığı" izinde ayrıntılı anlatılır; bitirme planı orada ¦nx-proje¦ dersindedir.

## Bitirme ölçütleri
- Canlı adres ve kısa tanıtım.
- Kritik akışlar testle korunuyor.
- Mimari kararlar ve riskler belgelenmiş.
- Kendi CV'ne bu projeleri ölçülebilir sonuçlarla ekledin.

## Alıştırma
Projeler sekmesinden Proje 1'i seç; bu hafta için bir sprint planı (backlog, tahmin, hedef) yaz ve ilk sınıfı yazarak başla.`,
    `**Kaynaklar:** [Next.js Learn](https://nextjs.org/learn/dashboard-app), [CS50 Web](https://cs50.harvard.edu/web/), [The Odin Project](https://www.theodinproject.com). Süre tahminleri yaklaşık önerilerdir.`
  ),
};
