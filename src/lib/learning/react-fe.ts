import type { Track } from "./types";
import { lesson, web, book, tool } from "./helpers";
import { BOEN } from "./boen";

/**
 * React modülüne eklenen iki iz:
 *  1) "Front-End Mühendisliği": BT Akademi "Sıfırdan Front-End (Web Arayüz) Mühendisi & Uzmanı Yetiştirme" programının
 *     (395 saat) front-end konuları; mevcut ana müfredatta olmayan veya yüzeysel kalanlar derinleştirildi.
 *  2) "Next.js Uzmanlığı": hedef yazılım mühendisliği olduğu için Next.js 16 (App Router) ayrıntılı işlendi.
 * Program kaynağı: https://www.btakademi.com/egitim/sifirdan-front-end-web-arayuz-muhendisi-uzmani-yetistirme-ve-gelistirme-programi-2943
 */
const mdn = web("MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Learn_web_development");
const mdnHttp = web("MDN — HTTP'ye Genel Bakış", "https://developer.mozilla.org/en-US/docs/Web/HTTP");
const mdnCors = web("MDN — CORS", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS");
const mdnRender = web("MDN — Kritik Render Yolu", "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path");
const mdnPwa = web("MDN — Progressive Web Apps", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps");
const mdnXss = web("MDN — Cross-site scripting (XSS)", "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS");
const mdnCsp = web("MDN — İçerik Güvenlik Politikası (CSP)", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP");
const mdnCss = web("MDN — CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS");
const webdevPerf = web("web.dev — Performans", "https://web.dev/learn/performance");
const webdevVitals = web("web.dev — Core Web Vitals", "https://web.dev/articles/vitals");
const webdevPwa = web("web.dev — PWA Öğren", "https://web.dev/learn/pwa");
const webdevCss = web("web.dev — CSS Öğren", "https://web.dev/learn/css");
const webdevRendering = web("web.dev — Web'de Render Etme", "https://web.dev/articles/rendering-on-the-web");
const nextDocs = web("Next.js Dokümantasyonu (App Router)", "https://nextjs.org/docs/app");
const nextLearn = web("Next.js Learn — Dashboard uygulaması kursu", "https://nextjs.org/learn/dashboard-app", "Resmi, adım adım full-stack kurs.");
const reactThinking = web("React — React'te Düşünmek", "https://react.dev/learn/thinking-in-react");
const reactLazy = web("React — lazy ve Suspense", "https://react.dev/reference/react/lazy");
const tsHandbook = web("TypeScript El Kitabı", "https://www.typescriptlang.org/docs/handbook/intro.html");
const vue = web("Vue.js Rehberi", "https://vuejs.org/guide/introduction.html");
const pinia = web("Pinia (Vue durum yönetimi)", "https://pinia.vuejs.org");
const vueRouter = web("Vue Router", "https://router.vuejs.org");
const angular = web("Angular Dokümantasyonu", "https://angular.dev");
const rxjs = web("RxJS", "https://rxjs.dev");
const npmDocs = web("npm Dokümantasyonu", "https://docs.npmjs.com");
const semver = web("Anlamsal Sürümleme (Semantic Versioning)", "https://semver.org/lang/tr/");
const webpack = web("Webpack Kavramlar", "https://webpack.js.org/concepts/");
const babel = web("Babel Dokümantasyonu", "https://babeljs.io/docs/");
const vite = web("Vite Rehberi", "https://vite.dev/guide/");
const graphqlLearn = web("GraphQL — Öğren", "https://graphql.org/learn/");
const apollo = web("Apollo Client Dokümantasyonu", "https://www.apollographql.com/docs/react");
const firebase = web("Firebase Dokümantasyonu", "https://firebase.google.com/docs");
const jest = web("Jest Dokümantasyonu", "https://jestjs.io/docs/getting-started");
const rtl = web("React Testing Library", "https://testing-library.com/docs/react-testing-library/intro/");
const cypress = web("Cypress Dokümantasyonu", "https://docs.cypress.io/app/get-started/why-cypress");
const playwright = web("Playwright Dokümantasyonu", "https://playwright.dev/docs/intro");
const owaspXss = web("OWASP — XSS Önleme Rehberi", "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html");
const owaspCsrf = web("OWASP — CSRF Önleme Rehberi", "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html");
const bem = web("BEM — Blok, Eleman, Değiştirici", "https://getbem.com/introduction/");
const styled = web("styled-components", "https://styled-components.com/docs");
const emotion = web("Emotion", "https://emotion.sh/docs/introduction");
const tailwind = web("Tailwind CSS", "https://tailwindcss.com/docs");
const refactoringUi = book("Refactoring UI", "Adam Wathan, Steve Schoger", "Geliştiriciler için görsel tasarım: renk, aralık, hiyerarşi.", "https://www.refactoringui.com");
const nielsen = web("Nielsen Norman Group — 10 Kullanılabilirlik Sezgisi", "https://www.nngroup.com/articles/ten-usability-heuristics/");
const wcagContrast = web("WebAIM — Kontrast Denetleyici", "https://webaim.org/resources/contrastchecker/");
const mdnTypography = web("MDN — Web Yazı Tipleri ve Metin Biçimlendirme", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling");
const materialType = web("Material Design — Tipografi", "https://m3.material.io/styles/typography/overview");
const figmaLearn = tool("Figma — Öğrenme Merkezi", "https://help.figma.com/hc/en-us/categories/360002051613-Get-started", "Tasarım dosyasından kod çıkarmayı bilmek için.");
const proGit = web("Pro Git (Türkçe)", "https://git-scm.com/book/tr/v2");
const devtools = tool("Chrome DevTools", "https://developer.chrome.com/docs/devtools");
const vercelDocs = web("Vercel Dokümantasyonu", "https://vercel.com/docs");
const prisma = web("Prisma Dokümantasyonu", "https://www.prisma.io/docs");
const authjs = web("Auth.js", "https://authjs.dev");

export const reactFrontendTracks: Track[] = [
  {
    id: "fe",
    title: "Front-End Mühendisliği (BT Akademi Front-End programı)",
    description:
      "BT Akademi'nin 395 saatlik Front-End (Web Arayüz) Mühendisi programındaki konular: web'in işleyişi, tasarım temelleri, CSS mimarisi, framework karşılaştırması (React/Vue/Angular), derleme araçları, performans, GraphQL/Firebase, test, güvenlik, PWA ve SSR. İş analizi, Scrum ve kariyer konuları 'Yazılım Mühendisi Yol Haritası' modülündedir. Bu izdeki dersler ana müfredatta olmayan veya yüzeysel kalan konuları tamamlar.",
    units: [
      {
        id: "fe1",
        title: "F1. Web nasıl çalışır: İnternet, tarayıcı, araçlar",
        description: "Bir adres yazıldığında ne olur? Tarayıcı sayfayı nasıl çizer? Günlük araç kutusu.",
        lessons: [
          lesson("fe-internet", "İnternet nasıl çalışır: IP, DNS, HTTP, TLS, CDN", "Bir URL'den ekrandaki sayfaya uzanan yolculuk.", { minutes: 60, resources: [mdnHttp, BOEN.programlama] }),
          lesson("fe-tarayici", "Tarayıcılar nasıl çalışır: DOM'dan piksele", "Ayrıştırma, DOM/CSSOM, layout, paint, composite; JS'in rolü.", { minutes: 60, resources: [mdnRender, webdevRendering] }),
          lesson("fe-arac", "Editör, DevTools ve terminal: günlük iş akışı", "VS Code ayarları, DevTools sekmeleri, terminal temel komutları, Git'in en sık kullanılan 10 komutu.", { minutes: 60, resources: [devtools, proGit] }),
        ],
      },
      {
        id: "fe2",
        title: "F2. Web tasarım temelleri: renk, tipografi, UX/UI",
        description: "Tasarımcı olmadan da düzgün arayüz: renk kuramı, yazı tipi, boşluk, kullanılabilirlik.",
        lessons: [
          lesson("fe-renk", "Renk kuramı ve erişilebilir kontrast", "Renk çarkı, HSL, tonlama, marka paleti, WCAG kontrast oranları.", { minutes: 60, resources: [wcagContrast, refactoringUi] }),
          lesson("fe-tipo", "Tipografi: yazı tipi, ölçek, okunabilirlik", "Font aileleri, tip ölçeği, satır yüksekliği, satır uzunluğu, web fontları.", { minutes: 60, resources: [mdnTypography, materialType] }),
          lesson("fe-uxui", "UX ve UI: kullanılabilirlik ilkeleri ve tasarımdan koda geçiş", "Nielsen sezgileri, hiyerarşi, boşluk, bileşen durumları, Figma'dan koda aktarım.", { minutes: 75, resources: [nielsen, figmaLearn, refactoringUi, BOEN.tasarimDusunme] }),
        ],
      },
      {
        id: "fe3",
        title: "F3. CSS mimarisi ve CSS-in-JS",
        description: "Büyük projede CSS'in dağılmaması için isimlendirme, kapsam ve araç seçimi.",
        lessons: [
          lesson("fe-css-mimari", "CSS mimarileri: BEM, OOCSS, utility-first, CSS Modules", "Özgüllük sorunları, isimlendirme kuralları, kapsamlı stil, cascade layers.", { minutes: 75, resources: [bem, mdnCss, webdevCss, BOEN.css, BOEN.bootstrap] }),
          lesson("fe-cssinjs", "CSS-in-JS: styled-components, Emotion ve alternatifler", "Çalışma zamanı maliyeti, Server Components ile uyum, sıfır çalışma zamanlı seçenekler, Tailwind ile karşılaştırma.", { minutes: 75, resources: [styled, emotion, tailwind] }),
        ],
      },
      {
        id: "fe4",
        title: "F4. Modern framework'ler: React, Vue, Angular",
        description: "React'i derin bil; Vue ve Angular'ı tanı ki iş ilanlarında ve ekip değiştirirken yabancılık çekme.",
        lessons: [
          lesson("fe-react-ts", "React + TypeScript: bileşen, props, state, hook'lar (özet ve köprü)", "Tipli props, olay tipleri, generic bileşenler; ana müfredattaki derslere bağlantı.", { minutes: 60, resources: [reactThinking, tsHandbook] }),
          lesson("fe-vue", "Vue 3: bileşenler, Composition API, Vue Router, Pinia", "Vuex'ten Pinia'ya geçiş, SFC yapısı, reaktivite; React ile eşleştirme.", { minutes: 90, resources: [vue, vueRouter, pinia] }),
          lesson("fe-angular", "Angular: modüller/bileşenler, servisler ve bağımlılık enjeksiyonu", "TypeScript'in zorunlu olduğu, kurallı framework; RxJS'e giriş; React ile eşleştirme.", { minutes: 90, resources: [angular, rxjs] }),
        ],
      },
      {
        id: "fe5",
        title: "F5. Paket yöneticileri ve derleme araçları",
        description: "Kodun tarayıcıya gelene kadarki yolu: npm/Yarn/pnpm, Webpack, Babel, Vite, SWC/Turbopack.",
        lessons: [
          lesson("fe-npm", "npm, Yarn ve pnpm: package.json, sürümleme, kilit dosyası", "Semver aralıkları, lockfile, scripts, audit, monorepo'ya giriş.", { minutes: 60, resources: [npmDocs, semver] }),
          lesson("fe-bundler", "Webpack, Babel ve yeni nesil araçlar (Vite, Turbopack)", "Modül paketleme, transpile, tree shaking, kod bölme, geliştirme sunucusu.", { minutes: 75, resources: [webpack, babel, vite] }),
        ],
      },
      {
        id: "fe6",
        title: "F6. Performans ve optimizasyon",
        description: "Ölç → iyileştir → yeniden ölç: tarayıcı render süreci, tembel yükleme, kod bölme.",
        lessons: [
          lesson("fe-render-perf", "Tarayıcı render süreci ve Core Web Vitals", "Kritik render yolu, LCP/INP/CLS, render-engelleyici kaynaklar, görsel optimizasyonu.", { minutes: 75, resources: [mdnRender, webdevVitals, webdevPerf] }),
          lesson("fe-lazy", "Lazy loading ve code splitting", "dynamic import(), React.lazy + Suspense, next/dynamic, route bazlı bölme, paket analizi.", { minutes: 60, resources: [reactLazy, nextDocs, webdevPerf] }),
        ],
      },
      {
        id: "fe7",
        title: "F7. API ve dış servisler: GraphQL, Firebase",
        description: "REST ana müfredatta var; burada GraphQL ve hazır backend servisi (Firebase).",
        lessons: [
          lesson("fe-graphql", "GraphQL: şema, sorgu, mutasyon ve React istemcisi", "REST ile farkı, over/under-fetching, Apollo Client, önbellek ve N+1 uyarıları.", { minutes: 90, resources: [graphqlLearn, apollo] }),
          lesson("fe-firebase", "Firebase: kimlik doğrulama, Firestore, güvenlik kuralları", "Hazır backend ne zaman uygun, ne zaman değil; kural yazmadan yayına çıkma riski.", { minutes: 75, resources: [firebase] }),
        ],
      },
      {
        id: "fe8",
        title: "F8. Test ve kalite: Jest, Testing Library, Cypress",
        description: "Birim testinden uçtan uca teste; araç seçimi ve ne zaman hangisi.",
        lessons: [
          lesson("fe-jest", "Jest ve React Testing Library", "Test yapısı, mock, async testler, kullanıcı gözüyle sorgular; Vitest ile farkı.", { minutes: 75, resources: [jest, rtl] }),
          lesson("fe-cypress", "Cypress ile uçtan uca test (ve Playwright ile karşılaştırma)", "Komut zinciri, seçici stratejisi, ağ yakalama, kırılgan testlerden kaçınma.", { minutes: 75, resources: [cypress, playwright] }),
        ],
      },
      {
        id: "fe9",
        title: "F9. Web güvenliği: CORS, XSS, CSRF",
        description: "Ana müfredattaki güvenlik ünitesinin derinleştirilmesi: tarayıcı güvenlik modeli.",
        lessons: [
          lesson("fe-cors", "Same-origin politikası ve CORS (preflight dahil)", "Origin nedir, basit/preflight istek, kimlik bilgili istekler, yaygın hatalar.", { minutes: 60, resources: [mdnCors] }),
          lesson("fe-xss-csrf", "XSS ve CSRF: türler, savunmalar, CSP ve çerez öznitelikleri", "Stored/Reflected/DOM XSS, SameSite, CSRF token, Content-Security-Policy.", { minutes: 75, resources: [mdnXss, mdnCsp, owaspXss, owaspCsrf] }),
        ],
      },
      {
        id: "fe10",
        title: "F10. Gelişmiş konular: PWA ve SSR",
        description: "Kurulabilir, çevrimdışı çalışan uygulamalar ve sunucuda render stratejileri.",
        lessons: [
          lesson("fe-pwa", "Progressive Web Apps: manifest, service worker, çevrimdışı", "Kurulabilirlik, önbellek stratejileri, push bildirimleri, Next.js'te PWA.", { minutes: 75, resources: [mdnPwa, webdevPwa] }),
          lesson("fe-ssr", "Render stratejileri: CSR, SSR, SSG, ISR, streaming ve hydration", "Hangi sayfa hangi stratejiyle; SEO, hız ve maliyet dengesi.", { minutes: 75, resources: [webdevRendering, nextDocs] }),
        ],
      },
    ],
  },
  {
    id: "next",
    title: "Next.js Uzmanlığı (App Router, Next.js 16)",
    description:
      "Nihai hedef yazılım mühendisliği olduğu için Next.js ayrıntılı işlendi. Dersler bu repodaki Next.js 16 sürümünün resmî dokümanlarına (node_modules/next/dist/docs) göre yazıldı. Eski Pages Router bilgisi bu sürümde doğrudan geçerli değildir.",
    units: [
      {
        id: "nx1",
        title: "N1. Mimari ve bileşen modeli",
        description: "Dosya konvansiyonları, Server/Client Components ve veri çekme.",
        lessons: [
          lesson("nx-mimari", "App Router mimarisi: layout, page, dinamik rotalar, async params", "Klasör = rota; layouts, route groups, PageProps/LayoutProps yardımcıları, Link ve gezinme.", { minutes: 90, resources: [nextDocs, nextLearn] }),
          lesson("nx-rsc", "Server ve Client Components derinlemesine", "Sunucu varsayılan; 'use client' sınırı, serileştirilebilir props, context sağlayıcıları, üçüncü taraf bileşenler, 'server-only'.", { minutes: 90, resources: [nextDocs] }),
          lesson("nx-data", "Veri çekme: sunucuda fetch/ORM, streaming, Suspense, paralel/ardışık", "loading.tsx, Suspense sınırları, waterfall'dan kaçınma, React.cache, istemcide use() ile veri.", { minutes: 90, resources: [nextDocs, prisma] }),
        ],
      },
      {
        id: "nx2",
        title: "N2. Önbellek ve veri değiştirme",
        description: "Cache Components, 'use cache', yeniden doğrulama ve Server Actions.",
        lessons: [
          lesson("nx-cache", "Önbellekleme: Cache Components, 'use cache', cacheLife, cacheTag", "Statik kabuk, dinamik delikler (Suspense), çalışma zamanı API'leri ve önbellek anahtarları.", { minutes: 90, resources: [nextDocs] }),
          lesson("nx-revalidate", "Yeniden doğrulama: revalidateTag, updateTag, revalidatePath, refresh", "Hangi araç ne zaman; 'kendi yazdığını hemen gör' (read-your-own-writes).", { minutes: 60, resources: [nextDocs] }),
          lesson("nx-mutate", "Server Functions/Actions: formlar, useActionState, pending, yönlendirme", "Form → action → doğrulama → revalidate → redirect akışı; güvenlik: her action'da yetki kontrolü.", { minutes: 90, resources: [nextDocs] }),
        ],
      },
      {
        id: "nx3",
        title: "N3. Sunucu katmanı ve güvenlik",
        description: "Route Handlers, proxy.ts, kimlik doğrulama ve veri erişim katmanı.",
        lessons: [
          lesson("nx-route", "Route Handlers ve proxy.ts (eski adıyla middleware)", "REST uçları, RouteContext, önbellek davranışı; proxy ile yönlendirme/başlık/optimistik yetki kontrolü.", { minutes: 75, resources: [nextDocs] }),
          lesson("nx-auth", "Kimlik doğrulama ve yetkilendirme: oturum, çerez, DAL", "Oturum yönetimi, Veri Erişim Katmanı (DAL), Server Component/Action/Route Handler'da kontrol, Auth.js seçeneği.", { minutes: 90, resources: [nextDocs, authjs] }),
        ],
      },
      {
        id: "nx4",
        title: "N4. Üretime hazırlık",
        description: "Hata yönetimi, SEO, görsel/font, test, yayın ve bitirme projesi.",
        lessons: [
          lesson("nx-hata", "Hata yönetimi: error.tsx, not-found.tsx, global-error, beklenen hatalar", "Beklenen hata ≠ istisna; Server Action'da dönüş değeriyle hata; sınırlar ve sıfırlama.", { minutes: 60, resources: [nextDocs] }),
          lesson("nx-seo", "Metadata, Open Graph, next/image ve next/font", "Statik/dinamik metadata, generateMetadata, görsel boyutları ve CLS, font optimizasyonu.", { minutes: 60, resources: [nextDocs, webdevVitals] }),
          lesson("nx-prod", "Üretim kontrol listesi, test ve yayınlama (Vercel / self-hosting)", "Ortam değişkenleri, güvenlik başlıkları, gözlemlenebilirlik, Docker ile self-host, E2E test.", { minutes: 90, resources: [nextDocs, vercelDocs, playwright] }),
          lesson("nx-proje", "Bitirme: Next.js 16 ile uçtan uca ürün (plan ve ölçütler)", "Gereksinimden yayına tam bir proje; BT Akademi 'Proje 1–4' mantığına karşılık gelen dört aşamalı plan.", { minutes: 240, resources: [nextLearn, nextDocs] }),
        ],
      },
    ],
  },
];
