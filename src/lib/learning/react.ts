import type { LearningModule } from "./types";
import { lesson, web, book, video, tool, own } from "./helpers";

const reactDocs = web("React Resmi Dokümantasyon (Learn)", "https://react.dev/learn", "Hook'lar, durum yönetimi, efektler; resmi ve güncel.");
const reactRef = web("React API Referansı", "https://react.dev/reference/react");
const mdn = web("MDN Web Docs — Web Geliştirme Öğren", "https://developer.mozilla.org/en-US/docs/Learn_web_development");
const jsinfo = web("Modern JavaScript Eğitimi (The Modern JavaScript Tutorial)", "https://javascript.info", "Derinlemesine, alıştırmalı JS anlatımı.");
const tsHandbook = web("TypeScript El Kitabı (TypeScript Handbook)", "https://www.typescriptlang.org/docs/handbook/intro.html");
const tanstack = web("TanStack Query Dokümantasyonu", "https://tanstack.com/query/latest");
const rrouter = web("React Router Dokümantasyonu", "https://reactrouter.com");
const nextDocs = web("Next.js Dokümantasyonu", "https://nextjs.org/docs");
const nodeLearn = web("Node.js — Learn", "https://nodejs.org/en/learn");
const express = web("Express Rehberi", "https://expressjs.com");
const pgDocs = web("PostgreSQL Resmi Eğitim", "https://www.postgresql.org/docs/current/tutorial.html");
const prismaDocs = web("Prisma Dokümantasyonu", "https://www.prisma.io/docs");
const owasp = web("OWASP Cheat Sheet Serisi", "https://cheatsheetseries.owasp.org", "XSS, CSRF, SQLi, oturum yönetimi için pratik rehberler.");
const owaspTop10 = web("OWASP Top 10", "https://owasp.org/www-project-top-ten/");
const webdev = web("web.dev Learn", "https://web.dev/learn", "Performans, erişilebilirlik, responsive tasarım.");
const playwright = web("Playwright Dokümantasyonu", "https://playwright.dev/docs/intro");
const vitest = web("Vitest Rehberi", "https://vitest.dev/guide/");
const rtl = web("React Testing Library", "https://testing-library.com/docs/react-testing-library/intro/");
const proGit = web("Pro Git (Türkçe çeviri dahil)", "https://git-scm.com/book/tr/v2", "Git'in standart kitabı, ücretsiz.");
const vercelDocs = web("Vercel Dokümantasyonu", "https://vercel.com/docs");
const zod = web("Zod", "https://zod.dev");
const rhf = web("React Hook Form", "https://react-hook-form.com");
const tailwind = web("Tailwind CSS Dokümantasyonu", "https://tailwindcss.com/docs");
const a11y = web("W3C WAI — Erişilebilirlik Temelleri", "https://www.w3.org/WAI/fundamentals/accessibility-intro/");
const apg = web("WAI-ARIA Yazım Uygulamaları (WAI-ARIA Authoring Practices)", "https://www.w3.org/WAI/ARIA/apg/");
const eloquent = book("Akıcı JavaScript (Eloquent JavaScript)", "Marijn Haverbeke", "Ücretsiz çevrimiçi sürümü var.", "https://eloquentjavascript.net", true);
const ydkjs = book("JS'i Henüz Bilmiyorsun (You Don't Know JS Yet)", "Kyle Simpson", "Kapanışlar, kapsam, this, prototip — derin JS.", "https://github.com/getify/You-Dont-Know-JS", true);
const ddia = book("Veri Yoğun Uygulamalar Tasarlamak (Designing Data-Intensive Applications)", "Martin Kleppmann", "Backend/veri mimarisi için referans kitap.");
const refactoring = book("Yeniden Düzenleme (Refactoring) — 2. baskı", "Martin Fowler", "Kod kalitesi ve güvenli yeniden düzenleme.");
const roadmap = web("roadmap.sh — React Yol Haritası", "https://roadmap.sh/react", "Konu eksiklerini kontrol etmek için.");

export const reactModule: LearningModule = {
  id: "react",
  title: "React ve Arka Plan",
  tagline: "Web temellerinden full-stack üretime — 2026 ekosistemi",
  description:
    "HTML/CSS/JavaScript temelinden başlayıp React 19, TypeScript, Node.js/SQL arka plan, güvenlik, test ve yayınlamaya uzanan; her aşamada gerçek proje üreten kapsamlı müfredat. Yüklediğin 'Enterprise React 19 + Vite' rehberindeki 84 saatlik ACME MVP planı bu müfredatın kurumsal projesi olarak yer alıyor.",
  icon: "code",
  competencies: [
    "Sıfırdan bir React 19 + TypeScript uygulamasını mimarisini kurarak (feature-driven yapı) ayağa kaldırabilirim.",
    "Server state (TanStack Query) ile client/UI state'i ayırır, gereksiz global state kullanmam.",
    "Formları (React Hook Form + Zod) erişilebilir ve doğrulamalı şekilde yazarım.",
    "REST API tasarlar, Node.js/Express veya Next.js route handler/server action ile PostgreSQL üzerinde uygularım.",
    "Kimlik doğrulama (JWT access/refresh veya oturum çerezi), RBAC ve temel güvenlik açıklarını (XSS, CSRF, SQLi, CORS) kavrar ve önlerim.",
    "Performans sorunlarını ölçerek (React Profiler, Lighthouse, bundle analizi) bulur, kanıta dayalı optimize ederim.",
    "Birim, bileşen ve E2E testleri yazar; CI'da çalıştırırım.",
    "Git akışı, kod incelemesi (PR) ve sürümleme konusunda ekip içinde çalışabilirim.",
    "Uygulamayı Vercel/Docker üzerinde yayınlar, hata izleme ve günlükleme kurarım.",
    "Başkasının kodunu okuyup mimari kararlarını gerekçeleriyle değerlendirebilir (ADR yazabilir) ve teknik borcu yönetebilirim.",
  ],
  tracks: [
    {
      id: "main",
      title: "Ana Müfredat",
      units: [
        {
          id: "u1",
          title: "1. Web Temelleri: HTML5, CSS3, JavaScript ES6+",
          description: "Framework'ten önce platformu öğren: semantik HTML, modern CSS yerleşimi ve JavaScript'in çekirdek davranışı.",
          lessons: [
            lesson("html-semantik", "Semantik HTML ve formlar", "header/nav/main/section/form/table; label–input bağlama; klavye ile gezinme. Ürün tablosunu React'siz saf HTML ile kur.", {
              objectives: ["Doğru semantik elementi seçmek", "Erişilebilir form etiketi yazmak", "Tablo ve liste yapılarını anlamlı kurmak"],
              tasks: ["Ürün listesi + arama formu sayfasını yalnızca HTML ile yaz.", "Ekran okuyucu/klavye ile (Tab, Enter, Space) tüm sayfayı gezin."],
              resources: [mdn, a11y],
            }),
            lesson("css-layout", "CSS3: Flexbox, Grid, responsive tasarım", "Mobile-first yaklaşım; 360 / 768 / 1280 / 1440 px kırılımları; custom properties; erişilebilir odak stilleri.", {
              tasks: ["Aynı ürün sayfasını 3 kırılımda düzenle: masaüstünde kenar çubuğu+tablo, mobilde çekmece+kart.", "CSS değişkenleriyle açık/koyu tema yaz."],
              resources: [webdev, mdn],
            }),
            lesson("js-core", "JavaScript çekirdeği: kapsam, kapanış, this, prototip", "Değer/referans, hoisting, closure, event loop. Çoğu React hatası aslında JS hatasıdır.", {
              tasks: ["Closure ve event loop için 10 'çıktı tahmin et' sorusu yaz ve çöz.", "Basit bir debounce ve memoize fonksiyonu yaz."],
              resources: [jsinfo, ydkjs, eloquent],
            }),
            lesson("js-es6", "ES6+: modüller, destructuring, spread, optional chaining", "map/filter/reduce, immutability, async/await, fetch, hata yönetimi. Sipariş hesap fonksiyonlarını (subtotal, vergi, indirim, durum gruplama) yaz.", {
              tasks: ["order-utils.ts: calculateSubtotal/Tax/GrandTotal/Discount/groupOrdersByStatus yaz.", "Her fonksiyon için Vitest testi ekle (sonraki dersle birlikte)."],
              resources: [jsinfo, mdn],
            }),
            lesson("dom-http", "DOM, olaylar ve HTTP temelleri", "DOM API, olay yayılımı, fetch, HTTP metotları, durum kodları (200/201/204, 400/401/403/404/409/422/429/500), başlıklar, çerezler.", {
              tasks: ["Framework kullanmadan bir fetch + DOM liste/filtre uygulaması yaz.", "Tarayıcı Network sekmesinde istek/yanıt başlıklarını incele."],
              resources: [mdn],
            }),
          ],
        },
        {
          id: "u2",
          title: "2. TypeScript",
          description: "Strict TypeScript ile güvenli kod; React ve API sınırlarında tip güvenliği.",
          lessons: [
            lesson("ts-basics", "Tipler, arayüzler, birleşim/kesişim tipleri", "type vs interface, union, literal tipler, narrowing, unknown/any farkı, `any` yasağı.", {
              tasks: ["strict + noUncheckedIndexedAccess açıkken küçük bir kütüphane (kuyruk, event emitter) yaz."],
              resources: [tsHandbook],
            }),
            lesson("ts-generics", "Generic'ler ve yardımcı tipler", "Generic fonksiyon/bileşen, Partial/Pick/Omit/Record, mapped/conditional tipler, `satisfies`.", {
              tasks: ["Tip güvenli bir `fetchJson<T>()` ve generic `Table<T>` bileşeni yaz."],
              resources: [tsHandbook],
            }),
            lesson("ts-react", "React + TypeScript kalıpları", "Props tipleri, olay tipleri, ref, generic bileşenler, discriminated union ile durum modelleme.", {
              resources: [reactDocs, web("React TypeScript Kopya Kâğıdı (React TypeScript Cheatsheet)", "https://react-typescript-cheatsheet.netlify.app")],
            }),
            lesson("ts-runtime", "Çalışma zamanı doğrulama: Zod ve tip çıkarımı", "API yanıtlarına güvenmeden doğrula: `z.infer`, parse vs safeParse, form ve API şemalarının paylaşımı.", {
              tasks: ["Bir API yanıtını Zod şemasıyla doğrulayıp sapma durumunda anlamlı hata üret."],
              resources: [zod],
            }),
          ],
        },
        {
          id: "u3",
          title: "3. React 19 Çekirdeği",
          description: "Bileşen modeli, durum, efektler, formlar ve React 19'un yeni özellikleri.",
          lessons: [
            lesson("react-thinking", "React'te düşünmek: bileşen, props, durum", "UI'ı bileşen ağacına böl; tek yönlü veri akışı; durumu doğru yere kaldır (lifting state).", {
              tasks: ["react.dev 'Thinking in React' örneğini kendi alanında (ürün listesi) tekrar kur."],
              resources: [reactDocs],
            }),
            lesson("react-state", "useState/useReducer ve durum tasarımı", "Türetilmiş veriyi durumda tutmama, reducer ile karmaşık geçişler, durum yapısını sadeleştirme.", {
              resources: [reactDocs],
            }),
            lesson("react-effects", "Efektler, ref'ler ve 'efekte ihtiyacın olmayabilir'", "useEffect'in ne zaman gerektiği, temizleme, bağımlılıklar, useRef, senkronizasyon vs olay işleyici.", {
              tasks: ["Bir bileşende gereksiz efektleri bulup olay işleyiciye veya türetilmiş değere dönüştür."],
              resources: [web("Bir Efekte İhtiyacın Olmayabilir (You Might Not Need an Effect)", "https://react.dev/learn/you-might-not-need-an-effect")],
            }),
            lesson("react-hooks-custom", "Özel hook'lar ve bileşen kompozisyonu", "Mantığı hook'a çıkar; compound components, render props yerine hook'lar; context'in doğru kullanımı.", {
              tasks: ["useLocalStorage, useDebounce, useMediaQuery hook'larını yaz ve test et."],
              resources: [reactDocs],
            }),
            lesson("react-forms", "Formlar: React Hook Form + Zod + React 19 Actions", "Kontrollü/kontrolsüz girdiler, doğrulama, hata ilişkilendirme (aria), useActionState/useFormStatus/useOptimistic.", {
              tasks: ["Ürün oluşturma formu: Zod şeması, hata mesajları, erişilebilir etiketler, gönderim durumu."],
              resources: [rhf, zod, reactRef],
            }),
            lesson("react-suspense", "Suspense, lazy, Error Boundary ve use()", "Kod bölme, yükleme/hata durumları, `use` ile promise okuma, geçişler (useTransition).", {
              resources: [reactRef],
            }),
            lesson("react-perf-basics", "Render modeli ve React Profiler", "Ne zaman yeniden render olur, memo/useMemo/useCallback'in doğru yeri, React Compiler'ın etkisi. Önce ölç, sonra optimize et.", {
              tasks: ["10.000 satırlık listede önce/sonra ölçüm yap; pagination ve (gerekirse) virtualization uygula."],
              resources: [reactDocs, webdev],
            }),
          ],
        },
        {
          id: "u4",
          title: "4. Yönlendirme, Stil ve Arayüz Kütüphaneleri",
          description: "Uygulama mimarisi, yönlendirme ve tutarlı arayüz.",
          lessons: [
            lesson("routing", "React Router: rotalar, gömülü düzenler, koruma", "URL durumu (filtre/sayfa), dinamik rotalar, lazy route, korumalı rota ve yetki sayfaları (403/404).", {
              tasks: ["Filtre ve sayfa bilgisini URL'de tut (`/orders?status=CONFIRMED&page=2`)."],
              resources: [rrouter],
            }),
            lesson("architecture", "Feature-driven mimari ve sınırlar", "features/ klasörleri, API katmanı, UI primitive ≠ iş bileşeni, bağımlılık yönü. ADR yazma pratiği.", {
              tasks: ["Projeni `features/products`, `features/orders`, `features/auth` olarak yeniden düzenle; 3 ADR yaz."],
              resources: [roadmap],
            }),
            lesson("styling", "Tailwind CSS 4, shadcn/ui ve tasarım sistemi", "Utility-first yaklaşım, tasarım token'ları, Radix primitive'leri, cn() yardımcı fonksiyonu.", {
              resources: [tailwind, web("shadcn/ui", "https://ui.shadcn.com")],
            }),
            lesson("a11y", "Erişilebilirlik (a11y)", "Semantik, klavye, odak yönetimi, ARIA'nın doğru kullanımı, modal odak tuzağı, renk kontrastı, aria-live.", {
              tasks: ["Uygulamayı yalnızca klavye ile kullan; axe veya Lighthouse a11y raporundaki hataları gider."],
              resources: [a11y, apg, webdev],
            }),
          ],
        },
        {
          id: "u5",
          title: "5. Veri ve API Katmanı",
          description: "Server state, REST sözleşmeleri ve mock'lama.",
          lessons: [
            lesson("rest", "REST API tasarımı ve HTTP sözleşmesi", "Kaynak odaklı URL'ler, sayfalama/filtre/sıralama, hata modeli, versiyonlama, idempotency.", {
              tasks: ["`/api/products` ve `/api/orders` için OpenAPI/YAML sözleşmesi yaz (alan adı değişikliği senaryosu dahil)."],
              resources: [web("MDN — HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP")],
            }),
            lesson("axios-query", "Axios + TanStack Query", "Query key fabrikası, staleTime/gcTime, invalidation, mutation yaşam döngüsü, optimistic update, hata/yükleme/boş durumları.", {
              tasks: ["productKeys fabrikası, useProducts/useCreateProduct hook'ları; server state'i Zustand'a kopyalama."],
              resources: [tanstack],
            }),
            lesson("client-state", "Client state: Zustand ve Context", "Yalnızca UI durumu için küçük global store; neyin global olmaması gerektiği.", {
              resources: [web("Zustand", "https://zustand.docs.pmnd.rs")],
            }),
            lesson("msw", "MSW ile API mock'lama", "Gerçek HTTP sınırını koruyan geliştirme/test mock'ları; handler yazımı; hata ve gecikme senaryoları.", {
              resources: [web("Mock Service Worker", "https://mswjs.io")],
            }),
          ],
        },
        {
          id: "u6",
          title: "6. Arka Plan: Node.js, SQL ve Kimlik Doğrulama",
          description: "İlanlarda beklenen 'en az bir backend teknolojisi'ni gerçek bir API ile öğren.",
          lessons: [
            lesson("node-express", "Node.js + Express mini REST API", "Katmanlar (route/controller/service/repository), ara yazılımlar, hata yönetimi, ortam değişkenleri, Zod ile istek doğrulama.", {
              tasks: ["Ürün ve sipariş CRUD uçları; doğru HTTP kodları (201/204/404/409/422)."],
              resources: [nodeLearn, express],
            }),
            lesson("sql", "SQL ve PostgreSQL", "Tablolar, ilişkiler, JOIN, indeksler, transaction, sipariş toplamının sunucuda hesaplanması, migrasyonlar.", {
              tasks: ["customers/products/orders/order_items şemasını tasarla; stok düşüşünü transaction ile yap."],
              resources: [pgDocs, book("SQL Performansı Açıklandı (SQL Performance Explained)", "Markus Winand", "İndeks mantığı için kısa, çok iyi kitap (use-the-index-luke.com).", "https://use-the-index-luke.com", true)],
            }),
            lesson("orm", "Prisma (ORM) ve veri modelleme", "Şema, migrasyon, ilişkili sorgular, N+1, seed. Bu sitenin kendi Prisma şemasını okuyup incele.", {
              tasks: ["Bu repodaki prisma/schema.prisma dosyasını oku; yeni bir model + migrasyon ekle."],
              resources: [prismaDocs],
            }),
            lesson("auth", "Kimlik doğrulama: JWT access/refresh ve oturum çerezleri", "Access token bellekte, refresh token HttpOnly çerezde; Axios interceptor ve eşzamanlı 401 kuyruğu; çıkış; RBAC (ADMIN/SALES/OPERATIONS/VIEWER).", {
              tasks: ["Refresh akışını uygula: 401 → tek refresh isteği → orijinal isteği tekrarla; başarısızsa çıkış."],
              resources: [owasp],
            }),
          ],
        },
        {
          id: "u7",
          title: "7. Web Güvenliği",
          description: "Güvenlik laboratuvarları yalnızca kendi yerel uygulamanda yapılır.",
          lessons: [
            lesson("sec-xss", "XSS", "React'in kaçışlama davranışı, dangerouslySetInnerHTML riski, sanitizasyon (DOMPurify), CSP.", {
              tasks: ["`<script>alert(1)</script>` girdisini hem güvenli hem güvensiz render ederek farkı göster; düzelt."],
              resources: [owasp, owaspTop10],
            }),
            lesson("sec-csrf-cors", "CSRF ve CORS", "SameSite/HttpOnly/Secure çerezler, CSRF token ne zaman gerekir, origin kontrolü, kontrollü CORS izin listesi.", {
              tasks: ["localhost:5173 ↔ localhost:3000 arasında yalnızca gerekli origin'e izin veren CORS kur."],
              resources: [owasp],
            }),
            lesson("sec-sqli", "SQL Injection ve girdi doğrulama", "Parametreli sorgular; güvensiz/güvenli login uçlarıyla laboratuvar; sunucuda tekrar doğrulama; fiyatı istemciden kabul etmeme.", {
              tasks: ["insecure-login ve secure-login uçlarını yaz, farkı README'de açıkla."],
              resources: [owasp, owaspTop10],
            }),
          ],
        },
        {
          id: "u8",
          title: "8. Test, Kalite ve Performans",
          description: "Kanıtlanmış kalite: testler, lint, ölçüm.",
          lessons: [
            lesson("test-unit", "Birim ve bileşen testleri: Vitest + RTL", "Saf iş mantığı ve kullanıcı davranışı testleri; getByRole öncelikli; mutation testleri.", {
              tasks: ["order-utils ve ürün formu için test yaz; kritik mutation (sipariş oluştur) testi ekle."],
              resources: [vitest, rtl],
            }),
            lesson("test-e2e", "E2E: Playwright ve çok tarayıcılı test", "Chromium/Firefox/WebKit, 4 viewport, kritik iş akışı senaryosu (satış kullanıcısı sipariş oluşturur).", {
              resources: [playwright],
            }),
            lesson("quality", "ESLint, Prettier, Husky, CI", "Flat config, lint-staged, pre-commit, GitHub Actions ile lint+test+build.", {
              resources: [web("GitHub Actions", "https://docs.github.com/actions")],
            }),
            lesson("perf", "Performans mühendisliği", "Kod bölme, lazy route, görsel optimizasyonu, bundle analizi, Core Web Vitals, önbellek. Önce/sonra sonuçlarını README'ye yaz.", {
              resources: [webdev],
            }),
          ],
        },
        {
          id: "u9",
          title: "9. Next.js ve Full-Stack",
          description: "Bu sitenin kendisi gibi: App Router, Server Components, server actions, Prisma.",
          lessons: [
            lesson("next-app", "Next.js App Router ve Server Components", "Sunucu/istemci bileşen sınırı, veri çekme, önbellekleme ve yeniden doğrulama, dinamik rotalar, loading/error dosyaları.", {
              tasks: ["Bu repoda `src/app/maliyet` sayfasını oku: server component + server action + revalidatePath akışını açıkla."],
              resources: [nextDocs],
            }),
            lesson("next-data", "Server actions, form akışı ve veri tutarlılığı", "FormData ile mutasyon, doğrulama, revalidation, optimistik arayüz, hata yönetimi.", {
              resources: [nextDocs],
            }),
            lesson("deploy", "Yayınlama: Vercel, ortam değişkenleri, veritabanı migrasyonları", "Önizleme dağıtımları, env yönetimi, migrate deploy, gözlemlenebilirlik (günlükler, hata izleme).", {
              resources: [vercelDocs],
            }),
          ],
        },
        {
          id: "u10",
          title: "10. Ekip, Git ve Kıdemli Düzey",
          description: "5 yıllık deneyimi ayıran şey: karar kalitesi, iletişim ve sürdürülebilirlik.",
          lessons: [
            lesson("git", "Git akışı, PR ve kod incelemesi", "Dal stratejisi, conventional commits, PR kontrol listesi, çakışma çözme, rebase vs merge, kod incelemesi yapma.", {
              resources: [proGit],
            }),
            lesson("integration", "Ekipler arası entegrasyon ve kırıcı değişiklikler", "API sözleşmesi; `price → unitPrice` senaryosu: kırıcı değişikliği bulma, adapter yazma, testleri güncelleme, PR notu.", {}),
            lesson("senior", "Mimari kararlar, teknik borç ve gözlemlenebilirlik", "ADR, trade-off analizi, ölçeklenebilirlik, hata izleme, istek kimliği, metrik; büyük kod tabanında refactor stratejisi.", {
              resources: [refactoring, ddia],
            }),
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "kanban",
      title: "Görev Panosu (Kanban)",
      level: "Başlangıç",
      hours: 12,
      description: "Sürükle-bırak sütunlarla görev yönetimi; bileşen mimarisi ve durum yönetimini oturtur.",
      features: ["Sütun/kart ekle-sil-düzenle", "Sürükle-bırak ile taşıma", "localStorage kalıcılığı", "Arama ve etiket filtresi", "Klavye ile erişilebilir taşıma"],
      skills: ["useReducer", "kompozisyon", "özel hook'lar", "a11y"],
      steps: ["Veri modelini TypeScript ile tanımla", "Reducer + context ile durumu kur", "Kart/sütun bileşenlerini yaz", "Sürükle-bırak ekle (dnd-kit)", "Kalıcılık ve testler"],
      done: ["Sayfa yenilense de veri duruyor", "Tüm eylemler klavyeyle yapılabiliyor", "Reducer'a ait testler geçiyor"],
    },
    {
      id: "hava",
      title: "Hava Durumu ve Şehir Arama",
      level: "Başlangıç",
      hours: 10,
      description: "Harici API tüketimi, debounce, yükleme/hata/boş durumları.",
      features: ["Debounced şehir araması", "5 günlük tahmin kartları", "Favori şehirler", "Çevrimdışı/hata durumları"],
      skills: ["fetch/Axios", "TanStack Query", "debounce", "hata yönetimi"],
      steps: ["Açık bir hava API'si seç (ör. Open-Meteo)", "Query hook'larını yaz", "Arama + sonuç listesi", "Önbellek ve yeniden deneme ayarları", "Birim/bileşen testleri (MSW ile)"],
    },
    {
      id: "finans",
      title: "Kişisel Finans Takipçisi",
      level: "Orta",
      hours: 30,
      description: "Formlar, grafikler ve gerçek bir Node/PostgreSQL API ile CRUD.",
      features: ["Gelir/gider CRUD", "Kategori ve aylık özet grafikleri", "RHF + Zod formları", "CSV dışa aktarım", "JWT ile kullanıcı hesabı"],
      skills: ["REST", "SQL", "auth", "form doğrulama", "grafik"],
      steps: ["Şemayı tasarla (users, categories, transactions)", "Express API + Zod doğrulama", "JWT access/refresh akışı", "React arayüzü (TanStack Query)", "E2E senaryosu (Playwright)"],
      done: ["Yetkisiz kullanıcı başkasının verisine erişemiyor", "Para alanları ondalık hatası üretmiyor", "CI'da testler geçiyor"],
    },
    {
      id: "acme",
      title: "ACME Distribution — Ürün ve Sipariş Yönetimi (84 saatlik MVP)",
      level: "İleri",
      hours: 84,
      description: "Yüklediğin 'Enterprise React 19 + Vite' rehberindeki kurumsal proje: roller, ürün CRUD, sipariş akışı, güvenlik laboratuvarları, testler ve production build.",
      features: ["Kimlik doğrulama + JWT refresh + RBAC (ADMIN/SALES/OPERATIONS/VIEWER)", "Ürün CRUD (arama, kategori, aktif/pasif, stok, fiyat)", "Sipariş oluşturma, durum değiştirme, sayfalama/filtre", "XSS/CSRF/SQLi/CORS laboratuvarları", "Responsive + çok tarayıcılı test matrisi", "Unit + component + E2E testleri"],
      skills: ["mimari", "TanStack Query", "Node/SQL", "güvenlik", "test", "performans"],
      steps: ["Gün 1–2: HTML/CSS/JS temelleri ve repo", "Gün 3–5: React + TS + Router + Axios", "Gün 6–8: Node API, SQL, ürün/sipariş CRUD", "Gün 9–10: Auth, RBAC, güvenlik lab'ı", "Gün 11–12: Performans, responsive, a11y", "Gün 13–14: Testler, Git/PR akışı, production build"],
      done: ["Definition of Done maddelerinin tamamı sağlanıyor (strict TS, lint temiz, testler, loading/error/empty durumları, izin kontrolü)", "Final demo akışı kesintisiz çalışıyor"],
    },
    {
      id: "blog",
      title: "Blog / Mini CMS (Next.js + Prisma)",
      level: "Orta",
      hours: 35,
      description: "App Router, server actions ve veritabanı ile içerik yönetimi.",
      features: ["Markdown editörü ve önizleme", "Etiket ve arama", "Taslak/yayın durumu", "ISR/revalidation", "Yönetici oturumu"],
      skills: ["Next.js", "Prisma", "server actions", "SEO"],
      steps: ["Şema ve seed", "Liste/detay rotaları", "Yönetim formları (server actions)", "Önbellek stratejisi", "Vercel'e yayınla"],
    },
    {
      id: "chat",
      title: "Gerçek Zamanlı Sohbet",
      level: "İleri",
      hours: 30,
      description: "WebSocket/SSE ile canlı mesajlaşma; bağlantı yaşam döngüsü ve ölçekleme sorunları.",
      features: ["Odalar ve çevrimiçi durum", "Mesaj geçmişi + sayfalama", "Yeniden bağlanma ve çevrimdışı kuyruk", "Hız sınırlama"],
      skills: ["WebSocket", "Node", "state senkronizasyonu", "dayanıklılık"],
      steps: ["Protokol/mesaj şemasını tasarla", "Sunucuyu yaz (ws/socket.io)", "İstemci hook'u: bağlantı + yeniden bağlanma", "Optimistik mesaj gösterimi", "Yük ve hata testleri"],
    },
    {
      id: "eticaret",
      title: "Mini E-ticaret",
      level: "İleri",
      hours: 45,
      description: "Sepet, ödeme (test modu), sipariş e-postası ve stok tutarlılığı.",
      features: ["Ürün listesi/filtre", "Sepet ve ödeme akışı (Stripe test modu)", "Webhook ile sipariş onayı", "Stok rezervasyonu (transaction)", "Yönetici paneli"],
      skills: ["Next.js", "transaction", "webhook", "güvenlik"],
      steps: ["Katalog ve sepet", "Ödeme oturumu + webhook doğrulama", "Stok tutarlılığı (yarış durumları)", "Yönetici paneli ve yetki", "Test ve gözlemlenebilirlik"],
    },
    {
      id: "design-system",
      title: "Tasarım Sistemi / Bileşen Kütüphanesi",
      level: "İleri",
      hours: 40,
      description: "Yeniden kullanılabilir, erişilebilir bileşenler; belgeleme ve sürümleme.",
      features: ["Token tabanlı tema (açık/koyu)", "10+ erişilebilir bileşen (Dialog, Select, Tabs…)", "Storybook dokümantasyonu", "Görsel regresyon/a11y testleri", "npm paketi olarak yayın"],
      skills: ["API tasarımı", "a11y", "paketleme", "dokümantasyon"],
      steps: ["Token ve tipografi sistemi", "Radix üzerine bileşenler", "Storybook + etkileşim testleri", "Paketleme (tsup/Vite library mode)", "Sürümleme ve changelog"],
    },
  ],
  library: [
    own("Enterprise React 19 + Vite — Kurumsal Frontend Mimarisi ve MVP Rehberi (iş ilanına uyumlu sürüm)", "REACT_ENTERPRISE_GUIDE_JOB_ALIGNED1.md", "84 saatlik ACME Distribution MVP planı, güvenlik/performans laboratuvarları, yetkinlik kontrol listesi (bu müfredatın 4. projesi)"),
  ],
  resources: [reactDocs, reactRef, roadmap, eloquent, ydkjs, video("Josh Comeau — React'in Keyfi (The Joy of React) — kurs", "https://www.joyofreact.com", "Ücretli kurs; React iç yapısını sezgisel anlatır.", "Josh Comeau"), tool("Chrome DevTools & Lighthouse", "https://developer.chrome.com/docs/devtools", "Profil, ağ ve performans ölçümü."), tool("React Developer Tools", "https://react.dev/learn/react-developer-tools")],
};
