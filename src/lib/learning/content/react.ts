import type { ModuleContent } from "./types";
import { qz } from "../helpers";
import { reactBodiesA } from "./react-a";
import { reactBodiesB } from "./react-b";
import { reactAtolyeBodies, reactAtolyeQuizzes } from "./react-atolye";
import { reactFeBodiesA } from "./react-fe-a";
import { reactFeBodiesB } from "./react-fe-b";
import { reactNextBodies } from "./react-next";
import { reactFeQuizzes } from "./react-fe-quiz";

export const reactContent: ModuleContent = {
  bodies: { ...reactBodiesA, ...reactBodiesB, ...reactAtolyeBodies, ...reactFeBodiesA, ...reactFeBodiesB, ...reactNextBodies },
  quizzes: {
    ...reactAtolyeQuizzes,
    ...reactFeQuizzes,
    u1: [
      qz("Bir form alanını ekran okuyucu ve tıklama için doğru bağlamanın yolu hangisidir?", ["<label for=\"id\"> ile input id'sini eşleştirmek", "Yanına bir <div> koymak", "placeholder yazmak yeterlidir", "title özniteliği tek başına yeterlidir"], 0, "label–input bağlantısı hem erişilebilirlik hem tıklama alanı sağlar; placeholder label'ın yerini tutmaz."),
      qz("Hangisi semantik bir sayfa iskeletidir?", ["header, nav, main, footer", "div, div, div, div", "span, span, b, i", "table, tr, td"], 0),
      qz("Flexbox ile Grid için en doğru ayrım hangisidir?", ["Flexbox tek eksen (satır veya sütun), Grid iki boyutlu yerleşim içindir", "İkisi aynıdır", "Grid yalnızca yazılar içindir", "Flexbox yalnızca mobilde çalışır"], 0),
      qz("Mobile-first yaklaşımda medya sorguları genelde nasıl yazılır?", ["min-width ile büyüyen ekranlar için ekleme yapılır", "Yalnızca max-width kullanılır", "Medya sorgusu kullanılmaz", "Masaüstü stili yazılır, sonra silinir"], 0),
      qz("Closure (kapanış) nedir?", ["Bir fonksiyonun tanımlandığı kapsamdaki değişkenlere erişimini sürdürmesi", "Bir döngünün bitmesi", "Dosyanın kapatılması", "Sınıfın private alanı"], 0),
      qz("`const` ile tanımlanan bir nesnenin özelliği değiştirilebilir mi?", ["Evet; const yeniden atamayı engeller, nesnenin içeriğini dondurmaz", "Hayır, hiçbir şey değişmez", "Yalnızca sayılarda", "Yalnızca dizilerde"], 0),
      qz("Olay yayılımında (event bubbling) olay hangi yönde ilerler?", ["Hedef elemandan üst atalara doğru", "Üstten hedefe doğru yalnızca", "Yalnızca kardeşlere", "Hiç ilerlemez"], 0, "Yakalama (capture) aşaması ise yukarıdan hedefe iner; varsayılan dinleyiciler bubbling aşamasındadır."),
    ],
    u2: [
      qz("TypeScript'te `unknown` ile `any` arasındaki temel fark nedir?", ["unknown kullanılmadan önce daraltma (narrowing) ister, any tür kontrolünü kapatır", "Aynıdırlar", "any daha güvenlidir", "unknown yalnızca sayılar içindir"], 0),
      qz("`Partial<T>` ne yapar?", ["T'nin tüm özelliklerini isteğe bağlı yapar", "T'nin tüm özelliklerini zorunlu yapar", "T'yi diziye çevirir", "T'nin özelliklerini siler"], 0),
      qz("Generic fonksiyon neden kullanılır?", ["Tipi korurken farklı türlerle yeniden kullanılabilir kod yazmak için", "Kodu hızlandırmak için", "Çalışma zamanında tip kontrolü için", "Yorum eklemek için"], 0),
      qz("TypeScript tipleri çalışma zamanında doğrulama yapar mı?", ["Hayır; tipler derleme sonrası silinir, harici veri için Zod gibi doğrulama gerekir", "Evet, her zaman", "Yalnızca Node'da", "Yalnızca production'da"], 0),
      qz("React'te bir butonun onClick olay tipi için doğru kalıp hangisidir?", ["React.MouseEvent<HTMLButtonElement>", "Event", "string", "HTMLElement[]"], 0),
      qz("Zod ile `z.infer<typeof schema>` ne sağlar?", ["Şemadan TypeScript tipini türetir", "Şemayı JSON'a çevirir", "Veriyi şifreler", "Sunucuya istek atar"], 0),
    ],
    u3: [
      qz("React'te state'i doğrudan değiştirmek (örn. dizi.push) neden sorunludur?", ["React yeni referans görmediği için yeniden render tetiklemeyebilir; değişmezlik gerekir", "Performansı artırır", "Hiç sorun yoktur", "Yalnızca TypeScript hata verir"], 0),
      qz("Türetilebilen bir değeri (örn. toplam fiyat) state'te tutmak neden önerilmez?", ["Senkron dışı kalma riski yaratır; render sırasında hesaplanmalıdır", "State sayı tutamaz", "Performansı bozar", "Hook kuralına aykırıdır"], 0),
      qz("useEffect'in bağımlılık dizisi boş ([]) ise efekt ne zaman çalışır?", ["Bileşen bağlandığında bir kez (Strict Mode geliştirmede iki kez deneyebilir)", "Her render'da", "Hiç çalışmaz", "Yalnızca sunucuda"], 0),
      qz("'Efekte ihtiyacın olmayabilir' ilkesi neyi önerir?", ["Türetilebilir veya olay işleyicide yapılabilecek işleri efektten çıkarmayı", "Efektleri her zaman kullanmayı", "Hook'ları yasaklamayı", "State'i global yapmayı"], 0),
      qz("Hook'lar için temel kural hangisidir?", ["Yalnızca bileşen/hook'un en üst düzeyinde ve koşulsuz çağrılır", "Döngü içinde çağrılabilir", "Koşullu çağrılabilir", "Sınıf metodlarında çağrılabilir"], 0),
      qz("Listelerde `key` neden gerekir?", ["Öğelerin kimliğini koruyarak doğru güncelleme sağlamak için", "Stil vermek için", "Sıralama için", "Erişilebilirlik için"], 0),
      qz("React Hook Form + Zod birlikteyken doğrulama şeması neyi sağlar?", ["Tek kaynaktan hem doğrulama kuralları hem tip", "Yalnızca stil", "Sunucu render", "Önbellekleme"], 0),
    ],
    u4: [
      qz("React Router'da 'korumalı rota' için tipik yaklaşım nedir?", ["Yetkisizse yönlendiren bir sarmalayıcı/layout rota", "Linki gizlemek yeterlidir", "Sadece CSS ile gizlemek", "localStorage'a bakmadan geçirmek"], 0, "Yetki UX içindir; asıl yetkilendirme backend'de yapılır."),
      qz("Feature-driven mimaride temel fikir nedir?", ["Kod, teknik katmana değil özelliğe (features/products vb.) göre gruplanır", "Tüm dosyalar tek klasörde", "Her bileşen ayrı repoda", "Yalnızca utils klasörü"], 0),
      qz("Hangisi erişilebilir bir etkileşimdir?", ["Buton için <button> kullanmak ve klavye ile odaklanabilmek", "Tıklanabilir <div> kullanmak", "Odak çerçevesini kaldırmak", "Yalnızca renkle bilgi vermek"], 0),
      qz("Renk kontrastı neden önemlidir?", ["Düşük görme/aydınlık koşullarında okunabilirlik için", "Yalnızca estetik içindir", "SEO için zorunludur", "Hız artırır"], 0),
      qz("Utility-first CSS (Tailwind) yaklaşımında tasarım tutarlılığını ne sağlar?", ["Ortak tasarım belirteçleri (tema/ölçek) ve bileşen soyutlamaları", "Satır içi stil", "!important kullanımı", "Rastgele değerler"], 0),
      qz("Modal açıldığında odak yönetimi nasıl olmalıdır?", ["Odak modala taşınır, kapanınca tetikleyiciye döner", "Odak sayfa başında kalır", "Odak kaybolur", "Hiç önemli değil"], 0),
    ],
    u5: [
      qz("Yeni bir kaynak oluşturan POST isteği başarıyla tamamlandığında genelde hangi durum kodu döner?", ["201 Created", "204 No Content", "301", "404"], 0),
      qz("Sunucu durumu (sunucu durumu (server state)) için hangisi uygun bir araçtır?", ["TanStack Query", "Yalnızca useState", "CSS değişkenleri", "localStorage"], 0),
      qz("TanStack Query'de `staleTime` neyi belirler?", ["Verinin ne kadar süre taze sayılacağını", "Önbellekte kalma süresini", "İstek zaman aşımını", "Yeniden deneme sayısını"], 0, "Önbellekte kalma süresi gcTime'dır (v5)."),
      qz("Mutasyondan sonra liste neden `invalidateQueries` ile yenilenir?", ["Eski veriyi bayat işaretleyip güncel veriyi çekmek için", "Sayfayı kapatmak için", "State'i sıfırlamak için", "Cookie silmek için"], 0),
      qz("Sunucudan gelen listeyi Zustand store'a kopyalamak neden kötü bir fikirdir?", ["İkinci bir doğruluk kaynağı oluşur, senkron dışı kalır", "Zustand listeleri desteklemez", "Daha hızlıdır", "Güvenlik açığı oluşturur"], 0),
      qz("MSW'nin avantajı nedir?", ["Ağ isteklerini HTTP seviyesinde yakalayıp gerçek akışa yakın test/geliştirme sağlar", "Veritabanını değiştirir", "Derleme hızlandırır", "Stil üretir"], 0),
    ],
    u6: [
      qz("Express'te hata yakalayıcı middleware kaç parametre alır?", ["4 (err, req, res, next)", "1", "2", "3"], 0),
      qz("Parayı neden kuruş (tamsayı) olarak saklamak önerilir?", ["Kayan nokta yuvarlama hatalarını önlemek için", "Daha az yer kaplar", "SQL zorunlu kılar", "Görsel nedenlerle"], 0),
      qz("SQL'de `JOIN` ne yapar?", ["İlişkili tabloların satırlarını bir anahtara göre birleştirir", "Tabloyu siler", "İndeks oluşturur", "Yedek alır"], 0),
      qz("Stok düşümünde `UPDATE ... WHERE stock >= n` koşulu neden önemlidir?", ["Eşzamanlı isteklerde negatif stok oluşmasını önler", "Sorguyu yavaşlatır", "Gerekli değildir", "Yalnızca okuma içindir"], 0),
      qz("ORM kullanırken 'N+1 sorgu' problemi nedir?", ["Liste için 1 sorgu + her satır için ayrı sorgu atılması", "N tane tablo", "Tek bir yavaş indeks", "Migrasyon hatası"], 0),
      qz("Access token'ı bellekte, refresh token'ı HttpOnly çerezde tutmanın amacı nedir?", ["XSS ile uzun ömürlü token çalınma riskini azaltmak", "Hızı artırmak", "Çerez boyutunu küçültmek", "CORS'u kapatmak"], 0),
      qz("Rol tabanlı yetkilendirme (RBAC) asıl olarak nerede uygulanmalıdır?", ["Backend'de; arayüz yalnızca UX içindir", "Yalnızca arayüzde", "CSS'te", "localStorage'da"], 0),
    ],
    u7: [
      qz("React JSX'te `{kullaniciGirdisi}` neden varsayılan olarak XSS'e karşı korur?", ["Değeri metin olarak kaçışlar (escape eder)", "Hiç render etmez", "Sunucuda siler", "Şifreler"], 0),
      qz("Hangisi XSS riski taşıyan kalıptır?", ["dangerouslySetInnerHTML ile işlenmemiş girdi", "{text}", "<p>sabit metin</p>", "className"], 0),
      qz("CSRF'e karşı hangisi etkili bir savunmadır?", ["SameSite çerezler ve CSRF token", "Yalnızca HTTPS", "Yalnızca CORS", "Sayfayı küçültmek"], 0),
      qz("CORS için doğru ifade hangisidir?", ["Tarayıcının farklı origin yanıtını okuma politikasıdır; kimlik doğrulama değildir", "Sunucuyu saldırıdan korur", "Veritabanı kuralıdır", "Şifreleme yöntemidir"], 0),
      qz("SQL injection'a karşı birincil savunma nedir?", ["Parametreli sorgu / hazır ifade", "Girdiyi büyük harfe çevirmek", "Sorguyu gizlemek", "Hata mesajını uzatmak"], 0),
      qz("Sipariş oluştururken fiyatı neden istemciden almamalıyız?", ["İstemci verisi manipüle edilebilir; sunucu fiyatı DB'den okumalıdır", "Fiyat sunucuda yoktur", "Hız için", "Yasal zorunluluk"], 0),
    ],
    u8: [
      qz("Test piramidinde en çok sayıda olması önerilen test türü hangisidir?", ["Birim testleri", "E2E testleri", "Manuel testler", "Yük testleri"], 0),
      qz("React Testing Library'de öncelikli sorgu hangisidir?", ["getByRole", "getByTestId", "querySelector", "getByClassName"], 0),
      qz("E2E testlerinde hangi akışlar tercih edilir?", ["Kritik iş akışları (giriş, sipariş vb.)", "Her küçük fonksiyon", "Yalnızca stil", "Hiçbiri"], 0),
      qz("CI hattında tipik adım sırası hangisidir?", ["Kurulum → lint → test → build", "Build → silme", "Deploy → test", "Yalnızca deploy"], 0),
      qz("Hangisi bir Core Web Vitals metriğidir?", ["LCP", "RAM", "FPS-sunucu", "TTL"], 0, "LCP, INP ve CLS temel metriklerdir."),
      qz("Performans iyileştirmede doğru sıra hangisidir?", ["Ölç → iyileştir → tekrar ölç", "Tahmin et → uygula", "Önce her şeyi memoize et", "Yalnızca bundle küçült"], 0),
    ],
    u9: [
      qz("Next.js App Router'da bileşenler varsayılan olarak nerede çalışır?", ["Sunucuda (Server Component)", "Tarayıcıda", "Edge'de yalnızca", "Worker'da"], 0),
      qz("`\"use client\"` ne zaman kullanılır?", ["State, olay işleyici veya tarayıcı API'si gereken bileşenlerde", "Her dosyada", "Yalnızca sayfalarda", "Veritabanı erişiminde"], 0),
      qz("Server action'lar güvenlik açısından nasıl ele alınmalıdır?", ["Açık uç nokta gibi; yetki ve girdi doğrulaması içinde yapılmalıdır", "Gizlidir, kontrol gerekmez", "Yalnızca CSS ile korunur", "Sadece istemcide doğrulanır"], 0),
      qz("Mutasyondan sonra sayfa verisini tazelemek için ne kullanılır?", ["revalidatePath / revalidateTag", "window.reload", "setTimeout", "localStorage"], 0),
      qz("Yeni tabloyu kullanan kod production'a gitmeden önce ne yapılmalıdır?", ["Migrasyon production veritabanına uygulanmalıdır", "Hiçbir şey", "Tabloyu elle silmek", "Cache temizlemek"], 0),
      qz("Secret'lar (DATABASE_URL vb.) nerede tutulmalıdır?", ["Platformun ortam değişkenlerinde, repoda değil", "Kaynak kodda", "README'de", "Public klasörde"], 0),
    ],
    u10: [
      qz("Conventional commit örneği hangisidir?", ["fix(orders): toplam hesabı düzeltildi", "düzeltme yaptım", "asdf", "update"], 0),
      qz("Kod incelemesinde yaklaşım nasıl olmalıdır?", ["Kişiyi değil kodu eleştirmek, soru sorarak önermek", "Kişiyi eleştirmek", "Hiç yorum yapmamak", "Sadece onaylamak"], 0),
      qz("Bir API alanının adı değiştiğinde güvenli geçiş için ne yapılır?", ["Geçiş döneminde eski ve yeni biçimi kabul eden adapter + deprecation", "Anında eskiyi silmek", "Hiç haber vermemek", "Frontend'i dondurmak"], 0),
      qz("ADR (Architecture Decision Record) neden yazılır?", ["Mimari kararı, alternatifleri ve gerekçeyi kayda geçirmek için", "Kodu hızlandırmak", "Test yazmak", "Lisans için"], 0),
      qz("Teknik borçla ilgili sağlıklı yaklaşım hangisidir?", ["Borcu görünür kılmak, kasıtlı ödünleri belgelemek, küçük ve test korumalı refactor", "Yok saymak", "Hepsini bir gecede yeniden yazmak", "Sadece suçlu aramak"], 0),
    ],
  },
  notIncluded: `## Bu modülde yer almayan veya sınırlı tutulan konular

Bu bölüm **kasıtlıdır**. Doğrulayamadığım ya da hızla eskiyen bilgileri müfredata "kesin bilgi" olarak koymadım. Aşağıdaki listeyi **Düzenle** ile genişletebilirsin.

### Sürüm/numara iddiaları
- Yüklediğin Enterprise rehberindeki **"React 19.3 / Vite 8 / belirli kütüphane sürümleri"** gibi kesin sürüm ifadelerini doğrulayamadım; sürüm numaraları hızla değişir. Derslerde sürüm yerine *kavram* ve *resmi dokümana yönlendirme* verdim. Kurulumda \`npm view <paket> version\` ile güncel sürümü kontrol et.
- Next.js'in **bu repodaki sürümüne** özgü ayrıntılar için \`node_modules/next/dist/docs/\` esas alınmalıdır; genel bilgi eski sürümle çelişebilir.

### Kapsam dışı bırakılanlar
- **React Native / mobil**: Ayrı bir öğrenme yolu gerektirir; bu modülün hedefi web.
- **GraphQL, WebSocket/gerçek zamanlı mimari, mikroservis, Kubernetes**: İleri konular; doğrulanmış, uygulamalı kaynak olmadan yüzeysel anlatmak yanıltıcı olurdu.
- **Belirli bulut sağlayıcıların fiyat/limitleri**: Sık değişir; resmi sayfadan kontrol et.
- **"X kütüphanesi öldü / Y standart oldu" tarzı eğilim iddiaları**: Doğrulanabilir bir kaynağa bağlayamadığım için yazmadım.

### Güvenlik laboratuvarları
- Yalnızca **kendi yerel uygulaman** üzerinde, savunma amaçlı örnekler verildi. Gerçek sistemlere saldırı adımları bilerek eklenmedi.

### Doğrulama durumu
- Kod örnekleri, MDN/resmi dokümantasyon ve OWASP rehberlerindeki yaygın kalıplara dayanır; her derste **"Doğrulama"** notunda kaynak bağlantısı verildi.
- Örnekleri kendi ortamında çalıştırmadan "doğru" kabul etme; her alıştırma bunun için vardır.`,
};
