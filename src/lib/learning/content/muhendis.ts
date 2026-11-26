import type { ModuleContent } from "./types";
import { qz } from "../helpers";
import { muhendisBodiesA } from "./muhendis-a";
import { muhendisBodiesB } from "./muhendis-b";
import { muhendisBodiesC } from "./muhendis-c";

export const muhendisContent: ModuleContent = {
  bodies: { ...muhendisBodiesA, ...muhendisBodiesB, ...muhendisBodiesC },
  quizzes: {
    se1: [
      qz("Algoritmanın tanımı hangisidir?", ["Bir problemi çözmek için sonlu, açık ve sıralı adımlar dizisi", "Bir programlama dili", "Bir veritabanı türü", "Bir tasarım aracı"], 0),
      qz("Aşağıdakilerden hangisi O(n) karmaşıklığa örnektir?", ["Bir listeyi baştan sona bir kez dolaşmak", "Dizide indeksle erişim", "İkili arama", "İç içe iki döngü"], 0),
      qz("JavaScript'te `a == b` yerine genelde hangisi tercih edilir?", ["a === b", "a = b", "a != b", "a <> b"], 0, "=== tip dönüşümü yapmadan karşılaştırır."),
      qz("Primitive (değer) tiplerde atama sonrası ne olur?", ["Değer kopyalanır", "Referans paylaşılır", "Nesne klonlanır", "Hata oluşur"], 0),
      qz("Dizideki sayıları artan sıralamak için doğru kullanım hangisidir?", ["dizi.sort((a, b) => a - b)", "dizi.sort()", "dizi.order()", "sort(dizi)"], 0, "Varsayılan sort metin sırasıdır."),
      qz("try/catch'te boş bir catch bloğu neden kötü bir pratiktir?", ["Hataları gizler, sorunları bulmayı zorlaştırır", "Derleme hatası verir", "Performansı artırır", "Güvenlik sağlar"], 0),
    ],
    se2: [
      qz("Kapsülleme (encapsulation) nedir?", ["İç durumu gizleyip kuralları metotlar üzerinden zorlamak", "Her şeyi public yapmak", "Çoklu kalıtım", "Kodu sıkıştırmak"], 0),
      qz("Hangisi 'kompozisyonu kalıtıma tercih et' ilkesinin gerekçesidir?", ["Derin kalıtım hiyerarşileri kırılgandır", "Kalıtım yasaktır", "Kompozisyon daha yavaştır", "Sınıf kullanılamaz"], 0),
      qz("TypeScript'te gerçek çalışma zamanı gizliliği sağlayan söz dizimi hangisidir?", ["#alan", "private anahtar sözcüğü tek başına", "_alan", "protected"], 0, "private yalnızca derleme zamanı kontroldür."),
      qz("SOLID'de 'D' neyi ifade eder?", ["Bağımlılığın tersine çevrilmesi (soyutlamaya bağlan)", "Veri tabanı", "Dinamik tip", "Dağıtım"], 0),
      qz("Strategy deseni ne işe yarar?", ["Algoritmayı değiştirilebilir yapmak", "Nesne klonlamak", "Tek örnek (singleton) üretmek", "Veritabanı bağlamak"], 0),
    ],
    se3: [
      qz("WHERE ile HAVING farkı nedir?", ["WHERE satırları, HAVING grupları süzer", "Aynıdırlar", "HAVING önce çalışır", "WHERE yalnızca sayılarda"], 0),
      qz("NULL kontrolü için doğru ifade hangisidir?", ["telefon IS NULL", "telefon = NULL", "telefon == NULL", "telefon EQUALS NULL"], 0),
      qz("Siparişi olmayan müşterileri bulmak için en uygun yaklaşım?", ["LEFT JOIN + WHERE siparis.id IS NULL", "INNER JOIN", "CROSS JOIN", "GROUP BY"], 0),
      qz("3NF'in temel amacı nedir?", ["Geçişli bağımlılıkları kaldırıp tekrarı/tutarsızlığı azaltmak", "Sorguları yavaşlatmak", "Tüm tabloları birleştirmek", "Şifreleme"], 0),
      qz("ACID'de 'A' neyi ifade eder?", ["Atomiklik (ya hep ya hiç)", "Anahtar", "Arşiv", "Aralık"], 0),
      qz("Yedeğin güvenilirliği için en önemli adım hangisidir?", ["Geri yüklemeyi düzenli test etmek", "Yedeği sıkıştırmak", "Yedeği aynı sunucuda tutmak", "Hiçbiri"], 0),
      qz("Uygulama kullanıcısına neden DELETE/DROP yetkisi verilmeyebilir?", ["En az yetki ilkesi: hata/saldırı etkisini sınırlar", "SQL desteklemez", "Hız için", "Zorunlu değil"], 0),
    ],
    se4: [
      qz("MongoDB'de SQL'deki 'satır'ın karşılığı nedir?", ["Document (belge)", "Collection", "Field", "Index"], 0),
      qz("Belgeyi komple değiştirmeden bir alanı güncellemek için hangi operatör kullanılır?", ["$set", "$find", "$group", "$lookup"], 0),
      qz("Aggregation'da SQL'deki WHERE'in karşılığı hangi aşamadır?", ["$match", "$group", "$sort", "$unwind"], 0),
      qz("Sürekli büyüyen bir alt veriyi (milyonlarca kayıt) belge içine gömmek neden sorunludur?", ["Belge boyut sınırı ve performans sorunları; referans tercih edilir", "Gömme yasaktır", "Hızlıdır", "İndeks gerekmez"], 0),
      qz("Karmaşık ilişkisel raporlama ve çok tablolu transaction gerekiyorsa genelde hangisi daha uygundur?", ["İlişkisel veritabanı (PostgreSQL)", "Her zaman MongoDB", "Düz metin dosyası", "Tarayıcı çerezi"], 0),
    ],
    se5: [
      qz("Geolocation API ile konum almak için hangisi gereklidir?", ["Kullanıcı izni ve güvenli bağlam (HTTPS)", "Sunucuda cookie", "Flash", "Hiçbiri"], 0),
      qz("Hangisi ucuz animasyon özelliğidir?", ["transform", "width", "left", "margin"], 0),
      qz("Flexbox ve Grid için en doğru ayrım hangisidir?", ["Flex tek eksen, Grid iki boyutlu yerleşim", "İkisi aynıdır", "Grid yalnızca mobilde", "Flex yalnızca tablo için"], 0),
      qz("Closure nedir?", ["Fonksiyonun tanımlandığı kapsamdaki değişkenlere erişimini sürdürmesi", "Döngüyü bitirme", "Dosya kapatma", "Sınıf gizleme"], 0),
      qz("Promise.all ne yapar?", ["Hepsini paralel bekler; biri reddedilirse reddedilir", "Sırayla çalıştırır", "İlk bitende durur", "Hata yutar"], 0),
      qz("Yeni projelerde jQuery yerine ne tercih edilir?", ["Modern tarayıcı API'leri ve framework'ler", "Flash", "VBScript", "Hiçbiri"], 0),
    ],
    se6: [
      qz("TypeScript tipleri çalışma zamanında doğrulama yapar mı?", ["Hayır; tipler silinir, dış veri için Zod gibi doğrulama gerekir", "Evet, her zaman", "Yalnızca Node'da", "Yalnızca production'da"], 0),
      qz("Ayrımcı birleşim (discriminated union) neyi kolaylaştırır?", ["Durumlara göre tip daraltmayı ve kapsamlılık kontrolünü", "Kod çalıştırmayı", "CSS yazmayı", "Veritabanı bağlamayı"], 0),
      qz("`Partial<T>` ne yapar?", ["T'nin özelliklerini isteğe bağlı yapar", "Hepsini zorunlu yapar", "Siler", "Diziye çevirir"], 0),
      qz("Hangisi test piramidi açısından doğrudur?", ["Çok birim, az entegrasyon, çok az E2E", "Çok E2E, az birim", "Yalnızca manuel test", "Hepsi eşit"], 0),
    ],
    se7: [
      qz("Katmanlı mimaride iş kuralları nerede olmalıdır?", ["Service katmanında", "Controller'da SQL ile", "CSS'te", "Tarayıcıda"], 0),
      qz("Doğrulama için geçersiz gövdede genelde hangi durum kodu kullanılır?", ["422 (veya 400)", "200", "301", "500"], 0),
      qz("Bağımlılık enjeksiyonunun faydası nedir?", ["Bağımlılığı dışarıdan vererek test ve değişimi kolaylaştırmak", "Kodu şifrelemek", "Hızı artırmak", "Veritabanı kurmak"], 0),
      qz("Prisma'da üretim veritabanına migrasyon uygulamak için hangi komut kullanılır?", ["prisma migrate deploy", "prisma migrate dev", "prisma generate", "prisma studio"], 0),
      qz("N+1 sorgu problemi nedir?", ["Liste için 1 sorgu + her eleman için ayrı sorgu", "N tane tablo", "Tek yavaş indeks", "Migrasyon hatası"], 0),
      qz("Sunucusuz (serverless) platformlarda kalıcı WebSocket sunucusu için ne yapılır?", ["Ayrı bir servis veya yönetilen gerçek zamanlı hizmet kullanılır", "Hiç çalışmaz, çözümü yok", "Cookie kullanılır", "CSS kullanılır"], 0),
      qz("DDD'de 'bounded context' nedir?", ["Bir modelin geçerli olduğu sınır", "Veritabanı türü", "Test aracı", "Dağıtım yöntemi"], 0),
    ],
    se8: [
      qz("Fonksiyonel olmayan gereksinime hangisi örnektir?", ["Sayfa 2 saniyeden hızlı açılmalı", "Kullanıcı sipariş verebilmeli", "Yönetici rapor görebilmeli", "Sistem e-posta gönderir"], 0),
      qz("İyi bir kullanıcı hikâyesi şablonu hangisidir?", ["Bir <rol> olarak <amaç> istiyorum ki <fayda>", "Sistem şunu yapar", "Veritabanı tablosu", "Hata günlüğü"], 0),
      qz("Varsayım nedir?", ["Doğru kabul edilen ama doğrulanmamış bilgi", "Değiştirilemeyen sınır", "Olabilecek olumsuz olay", "Test sonucu"], 0),
      qz("Kapsam mutabakatı sonrası onaylanan belge neye dönüşür?", ["Temel çizgi (baseline)", "Taslak", "Hata raporu", "Backlog'dan silinen madde"], 0),
      qz("Gözlem tekniği neden kullanılır?", ["Anlatılanla yapılanı karşılaştırmak için", "Anket doldurtmak için", "Kod yazmak için", "Toplantı kısaltmak için"], 0),
    ],
    se9: [
      qz("Scrum'da 'ne yapılacağını/önceliği' belirleyen rol hangisidir?", ["Ürün Sahibi", "Scrum Master", "Tester", "Yönetim kurulu"], 0),
      qz("Planning Poker'in asıl amacı nedir?", ["Ekip arasında ortak anlayış yaratan göreli tahmin", "Kesin süre vermek", "Kimin hızlı olduğunu ölçmek", "Bahis oynamak"], 0),
      qz("Burndown grafiği neyi gösterir?", ["Zaman içinde kalan işi", "Tamamlanan iş sayısını", "Hata sayısını", "Ekip büyüklüğünü"], 0),
      qz("Çevik Manifesto'nun değerlerinden biri hangisidir?", ["Plana uymaktan çok değişime yanıt vermek", "Dokümantasyonu tamamen kaldırmak", "Müşteriyle işbirliğinden çok sözleşme pazarlığı", "Bireylerden çok süreç"], 0),
      qz("Retrospektifin amacı nedir?", ["Ekibin çalışma biçimini geliştirmek için bir sonraki sprintte uygulanacak iyileştirme seçmek", "Müşteriye demo yapmak", "Backlog'u silmek", "İnsanları suçlamak"], 0),
    ],
    se10: [
      qz("Davranışsal mülakatta STAR yönteminde 'R' neyi ifade eder?", ["Result (sonuç)", "Role", "Risk", "Report"], 0),
      qz("CV'de projeyi anlatırken en etkili yaklaşım hangisidir?", ["Ne yaptığın + teknoloji + ölçülebilir etki + bağlantı", "Sadece proje adı", "Uzun paragraf", "Hiç proje koymamak"], 0),
      qz("Bir mülakatta bilmediğin bir soruyla karşılaşırsan en iyi yaklaşım nedir?", ["Dürüstçe bilmediğini söyleyip nasıl düşündüğünü anlatmak", "Uydurmak", "Sessiz kalmak", "Konuyu değiştirmek"], 0),
      qz("Asansör konuşması kaç saniye sürer?", ["Yaklaşık 30–60 saniye", "10 dakika", "5 saniye", "30 dakika"], 0),
    ],
    se11: [
      qz("Bitirme projesinde analizden önce kod yazmanın riski nedir?", ["Yanlış şeyi iyi yapmak; gereksinimler belirsiz kalır", "Hiçbir riski yok", "Sadece hız kaybı", "Derleme hatası"], 0),
      qz("Proje 4'te Next.js ile ilgili ayrıntılı dersler hangi modülde?", ["React ve Arka Plan modülü (Next.js Uzmanlığı izi)", "Zanaatlar", "Astroloji", "Yabancı Dil"], 0),
    ],
  },
  notIncluded: `## Bu modülde yer almayan veya farklı işlenen konular

Bu modül, BT Akademi'nin 540 saatlik programının **konu başlıklarını** izler; fakat bilinçli olarak şu farkları içerir:

### Teknoloji uyarlamaları
- **C# / .NET / ASP.NET Core MVC / Entity Framework Core / Web API / Windows Forms**: Programda bu teknolojilerle işleniyor. Hedefin React ve Next.js olduğu için bu kavramlar **TypeScript, Node.js/Next.js, Prisma** ile işlendi (ör. LINQ → dizi metotları, EF Core → Prisma, DI kavramı → enjeksiyon/composition root). C#'ı ayrıca öğrenmek istersen Microsoft Learn'deki C# Turu isteğe bağlı kaynak olarak derslerde verilmiştir.
- **MS SQL Server / T-SQL**: Yerine **PostgreSQL** kullanıldı; sözdizimi büyük ölçüde ortaktır, farklar dersin notlarında belirtildi.
- **Angular**: React modülündeki "Front-End Mühendisliği" izinde Vue/Angular dersi olarak, React ile eşleştirilerek işlendi.
- **Windows Forms (masaüstü)**: Web odaklı hedef nedeniyle derinleşilmedi; Electron/Tauri notu Node.js dersinde var.

### İçerik sınırları
- Programın saat/ders sayısı, sertifikasyonları ve eğitmen anlatımı kopyalanmadı; yalnızca **konu başlıkları** referans alınıp içerik açık kaynaklardan ve resmi dokümanlardan özgün biçimde yazıldı.
- Kariyer, psikolojik sağlamlık ve mülakat dersleri **genel rehberliktir**; hukuki, tıbbi veya psikolojik tavsiye değildir.
- Fiyat/ücret bilgileri (ör. sertifika bedelleri) değişebildiği için derslere yazılmadı; ilgili sayfada kontrol et.

### Ücretsiz eğitim bağlantıları (BOEN)
BOEN Enstitü'deki bazı dersler "ücretsiz" olarak sunuluyor; ancak **sertifika ücretlidir** (sayfalarda dijital sertifika için 750 TL, basılı+dijital için 999 TL yazıyor; fiyat değişebilir). Bu yüzden bağlantılar "ders ücretsiz, sertifika ücretli" notuyla verildi; ücretsiz sertifika vaat edilmedi.`,
};
