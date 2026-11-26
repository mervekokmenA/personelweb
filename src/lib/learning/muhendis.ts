import type { LearningModule } from "./types";
import { lesson, web, book, tool } from "./helpers";
import { BOEN } from "./boen";

/**
 * Yazılım Mühendisi Yol Haritası — BT Akademi "Sıfırdan Yazılım Mühendisi & Uzmanı Yetiştirme ve Geliştirme Programı"
 * (540 saat) konularına göre. Kaynak program:
 * https://www.btakademi.com/egitim/sifirdan-yazilim-muhendisi-uzmani-yetistirme-ve-gelistirme-programi-2928
 * Program C#/.NET/SQL Server/Angular ağırlıklıdır; burada aynı konular JavaScript/TypeScript, Node.js ve PostgreSQL ile
 * (React/Next.js hedefine uygun) işlendi; C#/.NET isteğe bağlı kaynaklarla bağlandı.
 */
const mdn = web("MDN Web Docs — Öğren", "https://developer.mozilla.org/en-US/docs/Learn_web_development");
const mdnJsGuide = web("MDN — JavaScript Kılavuzu: Denetim akışı ve hata yönetimi", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling");
const mdnClasses = web("MDN — JavaScript Sınıfları", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes");
const mdnPrivate = web("MDN — Özel (#private) öğeler", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements");
const mdnCollections = web("MDN — Anahtarlı koleksiyonlar (Map, Set)", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections");
const mdnClosures = web("MDN — Closures", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures");
const mdnThis = web("MDN — this", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this");
const mdnPromise = web("MDN — Promise kullanımı", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises");
const mdnModules = web("MDN — JavaScript Modülleri", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules");
const mdnWebApi = web("MDN — Web API'leri", "https://developer.mozilla.org/en-US/docs/Web/API");
const mdnCanvas = web("MDN — Canvas API", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API");
const mdnSvg = web("MDN — SVG", "https://developer.mozilla.org/en-US/docs/Web/SVG");
const mdnGeo = web("MDN — Geolocation API", "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API");
const mdnVideo = web("MDN — <video> elemanı", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video");
const mdnAudio = web("MDN — <audio> elemanı", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio");
const mdnGrid = web("MDN — CSS Grid", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout");
const mdnFlex = web("MDN — CSS Flexbox", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout");
const mdnAnim = web("MDN — CSS Animasyonları", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations");
const mdnTransform = web("MDN — CSS Dönüşümleri", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms");
const mdnMedia = web("MDN — Medya sorguları", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries");
const mdnStorage = web("MDN — Web Storage API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API");
const mdnFetch = web("MDN — Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API");
const jsinfo = web("Modern JavaScript Eğitimi", "https://javascript.info");
const tsClasses = web("TypeScript — Sınıflar", "https://www.typescriptlang.org/docs/handbook/2/classes.html");
const tsObjects = web("TypeScript — Nesne tipleri ve arayüzler", "https://www.typescriptlang.org/docs/handbook/2/objects.html");
const tsEveryday = web("TypeScript — Günlük tipler", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html");
const tsEnums = web("TypeScript — Enum'lar", "https://www.typescriptlang.org/docs/handbook/enums.html");
const tsModules = web("TypeScript — Modüller", "https://www.typescriptlang.org/docs/handbook/modules/introduction.html");
const tsHandbook = web("TypeScript El Kitabı", "https://www.typescriptlang.org/docs/handbook/intro.html");
const csharp = web("C# Turu (Microsoft Learn) — isteğe bağlı", "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/", "Programın C# kısmını da öğrenmek istersen; kavramlar TypeScript ile örtüşür.");
const cs50 = web("CS50x — Bilgisayar Bilimine Giriş (Harvard)", "https://cs50.harvard.edu/x/", "Algoritma düşüncesi ve temel kavramlar için en iyi ücretsiz kurslardan biri.");
const visualgo = tool("VisuAlgo — algoritma görselleştirme", "https://visualgo.net");
const bigO = web("Big-O Hile Kâğıdı", "https://www.bigocheatsheet.com");
const neetcode = web("NeetCode Yol Haritası", "https://neetcode.io/roadmap", "Algoritma/veri yapısı sorularını konuya göre sıralar.");
const roadmapFull = web("roadmap.sh — Full Stack", "https://roadmap.sh/full-stack");
const roadmapBackend = web("roadmap.sh — Backend", "https://roadmap.sh/backend");
const roadmapSql = web("roadmap.sh — SQL", "https://roadmap.sh/sql");
const roadmapMongo = web("roadmap.sh — MongoDB", "https://roadmap.sh/mongodb");
const roadmapNode = web("roadmap.sh — Node.js", "https://roadmap.sh/nodejs");
const roadmapDesign = web("roadmap.sh — Yazılım Tasarımı ve Mimarisi", "https://roadmap.sh/software-design-architecture");
const refactoringGuru = web("Refactoring.Guru — Tasarım Desenleri", "https://refactoring.guru/design-patterns", "Her desen için şema ve çok dilli (TS dahil) örnek.");
const solid = web("Wikipedia — SOLID", "https://en.wikipedia.org/wiki/SOLID");
const pgTutorial = web("PostgreSQL — Eğitim", "https://www.postgresql.org/docs/current/tutorial.html");
const pgQueries = web("PostgreSQL — Sorgular", "https://www.postgresql.org/docs/current/queries.html");
const pgFunctions = web("PostgreSQL — Fonksiyonlar ve Operatörler", "https://www.postgresql.org/docs/current/functions.html");
const pgJoin = web("PostgreSQL — JOIN", "https://www.postgresql.org/docs/current/tutorial-join.html");
const pgViews = web("PostgreSQL — View", "https://www.postgresql.org/docs/current/tutorial-views.html");
const pgSqlFunc = web("PostgreSQL — SQL fonksiyonları", "https://www.postgresql.org/docs/current/xfunc-sql.html");
const pgTrigger = web("PostgreSQL — Trigger (PL/pgSQL)", "https://www.postgresql.org/docs/current/plpgsql-trigger.html");
const pgTx = web("PostgreSQL — İşlemler (Transaction)", "https://www.postgresql.org/docs/current/tutorial-transactions.html");
const pgIndex = web("PostgreSQL — İndeksler", "https://www.postgresql.org/docs/current/indexes.html");
const pgBackup = web("PostgreSQL — Yedekleme (pg_dump)", "https://www.postgresql.org/docs/current/backup-dump.html");
const pgRestore = web("PostgreSQL — pg_restore", "https://www.postgresql.org/docs/current/app-pgrestore.html");
const pgRoles = web("PostgreSQL — Kullanıcı ve rol yönetimi", "https://www.postgresql.org/docs/current/user-manag.html");
const pgGrant = web("PostgreSQL — GRANT", "https://www.postgresql.org/docs/current/sql-grant.html");
const pgConstraints = web("PostgreSQL — Kısıtlar", "https://www.postgresql.org/docs/current/ddl-constraints.html");
const sqlbolt = tool("SQLBolt — etkileşimli SQL dersleri", "https://sqlbolt.com");
const pgexercises = tool("PG Exercises — PostgreSQL alıştırmaları", "https://pgexercises.com");
const sqlTut = web("PostgreSQL Tutorial", "https://www.postgresqltutorial.com");
const normWiki = web("Wikipedia — Veritabanı normalleştirme", "https://en.wikipedia.org/wiki/Database_normalization");
const normMs = web("Microsoft — Veritabanı normalleştirme açıklaması", "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description");
const mongoManual = web("MongoDB Kılavuzu", "https://www.mongodb.com/docs/manual/");
const mongoCrud = web("MongoDB — CRUD", "https://www.mongodb.com/docs/manual/crud/");
const mongoOps = web("MongoDB — Sorgu operatörleri", "https://www.mongodb.com/docs/manual/reference/operator/query/");
const mongoAgg = web("MongoDB — Aggregation", "https://www.mongodb.com/docs/manual/aggregation/");
const mongoModel = web("MongoDB — Veri modellemeye giriş", "https://www.mongodb.com/docs/manual/core/data-modeling-introduction/");
const mongoUni = web("MongoDB Üniversitesi (Learn)", "https://learn.mongodb.com");
const jqueryApi = web("jQuery API", "https://api.jquery.com");
const noJq = web("You Might Not Need jQuery", "https://youmightnotneedjquery.com", "jQuery kalıplarının modern JS karşılıkları.");
const nodeApi = web("Node.js API Dokümantasyonu", "https://nodejs.org/docs/latest/api/");
const nodeFs = web("Node.js — fs (dosya sistemi)", "https://nodejs.org/api/fs.html");
const nodeHttp = web("Node.js — http", "https://nodejs.org/api/http.html");
const nodeTest = web("Node.js — yerleşik test çalıştırıcı", "https://nodejs.org/api/test.html");
const nodeLearn = web("Node.js — Learn", "https://nodejs.org/en/learn");
const expressRouting = web("Express — Yönlendirme", "https://expressjs.com/en/guide/routing.html");
const socketio = web("Socket.IO Dokümantasyonu", "https://socket.io/docs/v4/");
const restful = web("RESTful API Rehberi", "https://restfulapi.net");
const rfc9110 = web("RFC 9110 — HTTP Anlambilimi", "https://www.rfc-editor.org/rfc/rfc9110");
const openapi = web("OpenAPI Girişi", "https://swagger.io/docs/specification/about/");
const prismaCrud = web("Prisma — CRUD sorguları", "https://www.prisma.io/docs/orm/prisma-client/queries/crud");
const prismaRel = web("Prisma — İlişkiler", "https://www.prisma.io/docs/orm/prisma-schema/data-model/relations");
const zod = web("Zod", "https://zod.dev");
const fowlerDdd = web("Martin Fowler — Domain Driven Design", "https://martinfowler.com/bliki/DomainDrivenDesign.html");
const fowlerLayer = web("Martin Fowler — Presentation/Domain/Data katmanları", "https://martinfowler.com/bliki/PresentationDomainDataLayering.html");
const fowlerMicro = web("Martin Fowler — Mikroservisler", "https://martinfowler.com/articles/microservices.html");
const testPyramid = web("Martin Fowler — Pratik Test Piramidi", "https://martinfowler.com/articles/practical-test-pyramid.html");
const twelve = web("Twelve-Factor App (Türkçe)", "https://12factor.net/tr/");
const gitAtlassian = web("Atlassian — Git Eğitimleri", "https://www.atlassian.com/git/tutorials");
const gitBranching = tool("Learn Git Branching", "https://learngitbranching.js.org");
const odin = web("The Odin Project", "https://www.theodinproject.com", "Ücretsiz, proje tabanlı full-stack müfredat.");
const cs50web = web("CS50 Web Programlama", "https://cs50.harvard.edu/web/");
const uml = web("Wikipedia — UML", "https://en.wikipedia.org/wiki/Unified_Modeling_Language");
const mermaid = tool("Mermaid — metinden diyagram", "https://mermaid.js.org", "UML/akış/sıra diyagramlarını kodla çizmek için.");
const userStories = web("Atlassian — Kullanıcı Hikâyeleri", "https://www.atlassian.com/agile/project-management/user-stories");
const mgUserStories = web("Mountain Goat — Kullanıcı Hikâyeleri", "https://www.mountaingoatsoftware.com/agile/user-stories");
const useCase = web("Martin Fowler — Use Case", "https://martinfowler.com/bliki/UseCase.html");
const agileManifesto = web("Çevik Yazılım Manifestosu (Türkçe)", "https://agilemanifesto.org/iso/tr/manifesto.html");
const agilePrinciples = web("Çevik Manifesto İlkeleri", "https://agilemanifesto.org/principles.html");
const scrumGuide = web("Scrum Kılavuzu", "https://scrumguides.org/scrum-guide.html");
const atlScrum = web("Atlassian — Scrum", "https://www.atlassian.com/agile/scrum");
const atlRoles = web("Atlassian — Scrum rolleri", "https://www.atlassian.com/agile/scrum/roles");
const atlSprints = web("Atlassian — Sprint", "https://www.atlassian.com/agile/scrum/sprints");
const atlBacklog = web("Atlassian — Backlog", "https://www.atlassian.com/agile/scrum/backlogs");
const atlBurndown = web("Atlassian — Burndown grafiği", "https://www.atlassian.com/agile/tutorials/burndown-charts");
const atlEstimation = web("Atlassian — Tahmin (estimation)", "https://www.atlassian.com/agile/project-management/estimation");
const atlKanban = web("Atlassian — Kanban", "https://www.atlassian.com/agile/kanban");
const planningPoker = web("Mountain Goat — Planning Poker", "https://www.mountaingoatsoftware.com/agile/planning-poker");
const interviewHandbook = web("Tech Interview Handbook", "https://www.techinterviewhandbook.org");
const resume = web("Tech Interview Handbook — CV", "https://www.techinterviewhandbook.org/resume/");
const behavioral = web("Tech Interview Handbook — Davranışsal mülakat", "https://www.techinterviewhandbook.org/behavioral-interview/");
const nextDocs = web("Next.js Dokümantasyonu", "https://nextjs.org/docs/app");
const vercelDocs = web("Vercel Dokümantasyonu", "https://vercel.com/docs");
const playwright = web("Playwright", "https://playwright.dev/docs/intro");
const patterns = book("Tasarım Desenleri (Design Patterns)", "Gamma, Helm, Johnson, Vlissides", "Klasik 23 desen; Refactoring.Guru ile birlikte oku.");
const cleanCode = book("Temiz Kod (Clean Code)", "Robert C. Martin", "Okunabilir kod ve isimlendirme.");
const ddia = book("Veri Yoğun Uygulamalar Tasarlamak", "Martin Kleppmann", "Veritabanı ve dağıtık sistemler için referans.");
const pragmatic = book("Pragmatik Programcı", "Hunt, Thomas", "Mesleki alışkanlıklar.");

export const muhendisModule: LearningModule = {
  id: "muhendis",
  title: "Yazılım Mühendisi Yol Haritası",
  tagline: "BT Akademi 540 saatlik programının konuları — JavaScript/TypeScript yığınıyla",
  description:
    "BT Akademi'nin \"Sıfırdan Yazılım Mühendisi & Uzmanı Yetiştirme ve Geliştirme Programı\" (540 saat) müfredatı: programlamaya giriş ve algoritma, nesneye dayalı programlama, SQL ve NoSQL veritabanları, web (HTML/CSS/JS/TypeScript), Node.js ve Web API, iş/sistem analizi, Agile/Scrum ve kariyer eğitimleri. Programdaki C#/.NET/SQL Server/Angular başlıkları, nihai hedefin (React ve Next.js ile full-stack yazılım mühendisliği) gerektirdiği JavaScript/TypeScript, Node.js ve PostgreSQL karşılıklarıyla işlendi. React ve Next.js ayrıntıları 'React ve Arka Plan' modülünde.",
  icon: "code",
  group: "ana",
  competencies: [
    "Bir problemi algoritmaya dökebilir, karmaşıklığını (Big-O) tahmin edebilir ve TypeScript ile çözebilirim.",
    "Nesneye dayalı tasarım ilkelerini (kapsülleme, kalıtım/kompozisyon, SOLID) ve temel tasarım desenlerini kodda uygulayabilirim.",
    "İlişkisel bir veritabanını normalleştirerek tasarlar; JOIN, alt sorgu, görünüm, transaction ve indeksleri kullanır, yedekleme ve yetkilendirme yapabilirim.",
    "Belge (NoSQL) veritabanı ile SQL arasında amaca göre seçim yapar, MongoDB'de CRUD ve aggregation yazabilirim.",
    "Web standartlarını (HTML5 API'leri, CSS3, modern JavaScript, TypeScript) derinlemesine bilir ve jQuery'li eski kodu okuyabilirim.",
    "Node.js ile REST API tasarlar, katmanlı mimari ve bağımlılık enjeksiyonu ile test edilebilir şekilde kurar, versiyonlar ve dağıtabilirim.",
    "Bir iş talebini analiz eder; kullanıcı hikâyeleri, kullanım vakaları ve UML diyagramlarıyla gereksinim belgeleyebilirim.",
    "Scrum ekibinde çalışabilir; backlog hazırlar, planning poker ile tahmin yapar, sprint ve burndown'u yorumlayabilirim.",
    "CV, LinkedIn ve mülakat sürecini yönetebilir; öğrenme ve kariyer planı yapabilirim.",
  ],
  tracks: [
    {
      id: "program",
      title: "Program Müfredatı (BT Akademi 540 saat)",
      description:
        "Programdaki 27 başlık (yazılım eğitimleri, iş/sistem analizi, Agile/Scrum, CV/mülakat/kariyer) on bir ünitede toplandı; her ünitenin başlığında programdaki karşılığı yazıyor. Proje 1–4 başlığı bitirme projeleri olarak eklendi. Dersler 'BOEN' gibi bazı ücretsiz kaynaklara da bağlanır; BOEN'de dersler ücretsiz, sertifika ücretlidir.",
      units: [
        {
          id: "se1",
          title: "M1. Yazılıma giriş ve programlama temelleri (programda 1–2: Giriş ve C# ile Programlama)",
          description: "Algoritma mantığı, yazılımcı gibi düşünme, sektör rolleri, geliştirme ortamı; değişkenler, operatörler, karar yapıları, döngüler, koleksiyonlar, metotlar, hata yönetimi.",
          lessons: [
            lesson("se-algo", "Algoritma mantığı ve yazılımcı gibi düşünmek", "Problemi parçalama, sözde kod, akış şeması, test örnekleri, Big-O'ya giriş.", { minutes: 90, resources: [cs50, bigO, visualgo, BOEN.programlama] }),
            lesson("se-sektor", "Yazılım sektörü, roller ve geliştirme ortamı", "İş analisti, tester ve developer farkı; kariyer yolları; VS Code, Node.js, Git kurulumu.", { minutes: 60, resources: [roadmapFull, gitAtlassian, odin] }),
            lesson("se-degisken", "Değişkenler, tipler, operatörler, karar yapıları ve döngüler", "Değer/referans tipler, boxing kavramı ve JS karşılığı, `if/switch`, `for/while/do-while`.", { minutes: 90, resources: [mdnJsGuide, tsEveryday, jsinfo, csharp, BOEN.programlama] }),
            lesson("se-koleksiyon", "Diziler, koleksiyonlar, metotlar ve generic yapılar", "Array/Map/Set, ForEach ve dizi metotları, metot aşırı yükleme (overload), List/Dictionary karşılıkları.", { minutes: 90, resources: [mdnCollections, tsEveryday, jsinfo] }),
            lesson("se-hata", "Hata yönetimi ve hata ayıklama", "try/catch/finally, özel hata sınıfları, hata mesajı tasarımı, hata ayıklayıcı kullanımı.", { minutes: 60, resources: [mdnJsGuide, nodeLearn] }),
          ],
        },
        {
          id: "se2",
          title: "M2. Nesneye dayalı programlama (programda 3: OOP)",
          description: "Sınıf/nesne, erişim belirleyiciler, enum/struct karşılıkları, kalıtım, arayüz, soyut sınıf, static; SOLID ve tasarım desenleri.",
          lessons: [
            lesson("se-oop1", "OOP nedir? Sınıf, nesne, erişim belirleyiciler ve static", "Kapsülleme, `public/private/protected`, `#private`, `static`, getter/setter.", { minutes: 75, resources: [mdnClasses, mdnPrivate, tsClasses] }),
            lesson("se-oop2", "Kalıtım, arayüz, soyut sınıf, enum ve struct karşılıkları", "`extends`, `implements`, `abstract`, birleşim tipleri, `readonly`, kompozisyon > kalıtım.", { minutes: 75, resources: [tsClasses, tsObjects, tsEnums] }),
            lesson("se-solid", "SOLID ve temel tasarım desenleri", "S-O-L-I-D ilkeleri; Strategy, Factory, Observer, Repository, Adapter örnekleri.", { minutes: 90, resources: [refactoringGuru, solid, patterns, cleanCode, roadmapDesign] }),
          ],
        },
        {
          id: "se3",
          title: "M3. SQL ve ilişkisel veritabanı (programda 4–5: SQL Server → PostgreSQL)",
          description: "Veri modelleme, normalizasyon, T-SQL/SQL sorguları, JOIN, alt sorgu, view, fonksiyon/prosedür, trigger, transaction, indeks, yedekleme, yetkilendirme.",
          lessons: [
            lesson("se-sql-temel", "Veritabanı kavramları, ilişkisel model ve normalizasyon", "Tablo, anahtar, ilişki türleri; 1NF–3NF; ER diyagramı; kısıtlar.", { minutes: 90, resources: [pgTutorial, normMs, normWiki, pgConstraints, sqlbolt] }),
            lesson("se-sql-sorgu", "Sorgu oluşturma: WHERE, ORDER BY, IN, LIKE, NULL, GROUP BY, HAVING, agregasyon", "SELECT temelleri, filtreleme, gruplama, `COUNT/SUM/AVG`, metinsel ve matematiksel fonksiyonlar.", { minutes: 90, resources: [pgQueries, pgFunctions, sqlbolt, pgexercises] }),
            lesson("se-sql-join", "JOIN, alt sorgular ve görünümler (view)", "INNER/LEFT/RIGHT/FULL JOIN, `EXISTS/IN` alt sorgusu, CTE, view.", { minutes: 90, resources: [pgJoin, pgViews, pgexercises, sqlTut] }),
            lesson("se-sql-ileri", "Fonksiyonlar, saklı prosedürler, trigger, transaction ve indeks", "SQL/PLpgSQL fonksiyon, trigger, ACID, izolasyon, `EXPLAIN`, indeks seçimi.", { minutes: 120, resources: [pgSqlFunc, pgTrigger, pgTx, pgIndex, ddia] }),
            lesson("se-sql-yonetim", "Yedekleme, geri yükleme, kullanıcı/yetki yönetimi ve veri göçü", "`pg_dump/pg_restore`, roller ve `GRANT`, en az yetki ilkesi, farklı veritabanları arasında veri taşıma.", { minutes: 75, resources: [pgBackup, pgRestore, pgRoles, pgGrant] }),
          ],
        },
        {
          id: "se4",
          title: "M4. NoSQL: MongoDB (programda 6)",
          description: "NoSQL'e giriş, belge modeli, CRUD, sorgu operatörleri, aggregation; SQL ile karşılaştırma.",
          lessons: [
            lesson("se-mongo1", "NoSQL'e giriş, MongoDB ve CRUD", "Koleksiyon, belge, alan; veri tabanı tasarımı; ekle/oku/güncelle/sil.", { minutes: 90, resources: [mongoManual, mongoCrud, mongoModel, mongoUni, roadmapMongo] }),
            lesson("se-mongo2", "Sorgu operatörleri, aggregation ve SQL/NoSQL seçimi", "`$gt/$in/$regex`, `$match/$group/$lookup` boru hattı, gömme (embed) vs referans.", { minutes: 90, resources: [mongoOps, mongoAgg, mongoModel] }),
          ],
        },
        {
          id: "se5",
          title: "M5. Web teknolojileri derinleşme (programda 9–10: HTML5, CSS3, JavaScript, jQuery)",
          description: "HTML5 API'leri (SVG, Canvas, ses/video, konum), CSS3 (animasyon, dönüşüm, Grid/Flex, medya sorguları), jQuery'nin yeri ve ileri JavaScript.",
          lessons: [
            lesson("se-html5", "HTML5: semantik etiketler, multimedya, SVG, Canvas ve Geolocation", "`<audio>/<video>`, SVG çizimi, Canvas ile 2B çizim, Geolocation API ve izinler.", { minutes: 90, resources: [mdnVideo, mdnAudio, mdnSvg, mdnCanvas, mdnGeo, BOEN.html] }),
            lesson("se-css3", "CSS3: kutu modeli, geçiş/animasyon, dönüşüm, Flex/Grid ve responsive tasarım", "Çoklu arka plan, gölge/kenarlık, `transition/animation/transform`, Flexbox, Grid, medya sorguları.", { minutes: 90, resources: [mdnFlex, mdnGrid, mdnAnim, mdnTransform, mdnMedia, BOEN.css, BOEN.bootstrap] }),
            lesson("se-jquery", "jQuery: seçiciler, olaylar, animasyon, AJAX ve modern karşılıkları", "Eski projelerde jQuery'yi okumak; `querySelector`, `fetch`, `classList` karşılıkları; React/Next'te neden gerekmez.", { minutes: 75, resources: [jqueryApi, noJq, mdnFetch] }),
            lesson("se-js-ileri", "JavaScript ileri: closure, scope, this, Promise, async/await, modüller, Web API", "Okunabilirlik ipuçları, ES6+, sınıflar, modüller, Storage/Fetch gibi tarayıcı API'leri.", { minutes: 120, resources: [mdnClosures, mdnThis, mdnPromise, mdnModules, mdnWebApi, mdnStorage, BOEN.js] }),
          ],
        },
        {
          id: "se6",
          title: "M6. TypeScript derinleşme (programda 11)",
          description: "Arayüzler, tür işlemleri, modüller, ES6 ile ilişki, tasarım desenleri, hata ayıklama ve test. Angular kısmı React modülündeki 'Front-End Mühendisliği' izinde (Vue/Angular dersi).",
          lessons: [
            lesson("se-ts1", "TypeScript: tipler, arayüzler, birleşim/kesişim tipleri ve modüller", "`interface/type`, `union/intersection`, `generic`, `keyof/mapped/conditional` tipleri, modül sistemi.", { minutes: 90, resources: [tsHandbook, tsObjects, tsModules, tsEveryday] }),
            lesson("se-ts2", "TypeScript'te tasarım desenleri, hata ayıklama ve test", "Tip güvenli Repository/Strategy, kaynak haritası ile hata ayıklama, birim test (Vitest/Node test).", { minutes: 90, resources: [tsHandbook, nodeTest, testPyramid, refactoringGuru] }),
          ],
        },
        {
          id: "se7",
          title: "M7. Node.js, dosya işlemleri ve Web API (programda 7–8, 12–14: Node, ASP.NET Core/Web API karşılıkları)",
          description: "Node.js, dosya/klasör işlemleri, HTTP sunucusu, Express, veritabanı bağlantısı, Socket.io, REST, katmanlı mimari, ORM, DDD, test ve dağıtım. ASP.NET Core MVC/EF Core/Web API kavramları Node/Next.js/Prisma ile eşlenir.",
          lessons: [
            lesson("se-node", "Node.js: kurulum, dosya/klasör işlemleri, HTTP sunucusu, modüller ve paketler", "`fs` ile okuma/yazma/yönetim, `http` sunucusu, npm paket yönetimi; masaüstü uygulama alternatifleri (Electron/Tauri) hakkında not.", { minutes: 90, resources: [nodeApi, nodeFs, nodeHttp, nodeLearn, roadmapNode] }),
            lesson("se-express", "Express, MVC ve katmanlı mimari (N-tier)", "Yönlendirme, middleware, controller–service–repository katmanları, veritabanı bağlantısı, ortam yapılandırması.", { minutes: 90, resources: [expressRouting, fowlerLayer, roadmapBackend] }),
            lesson("se-api", "REST, HTTP, doğrulama, versiyonlama, DI/IoC ve kimlik doğrulama", "Model binding/validation (Zod), API versiyonlama, bağımlılık enjeksiyonu, authentication/authorization, hata modeli, OpenAPI.", { minutes: 120, resources: [restful, rfc9110, openapi, zod] }),
            lesson("se-socket", "Gerçek zamanlı iletişim: Socket.IO / WebSocket", "Olay tabanlı mesajlaşma, odalar, yeniden bağlanma, ölçekleme sorunları.", { minutes: 75, resources: [socketio] }),
            lesson("se-orm", "ORM: Entity Framework Core → Prisma; LINQ → dizi metotları ve Prisma sorguları", "Code-first/DB-first, ilişki yönetimi, migrasyon, N+1.", { minutes: 90, resources: [prismaCrud, prismaRel] }),
            lesson("se-ddd", "Domain Driven Design, test ve dağıtım", "Varlık/değer nesnesi/aggregate, bağlı bağlam (bounded context), birim/entegrasyon testi, 12-faktör ilkeleri, dağıtım yöntemleri.", { minutes: 90, resources: [fowlerDdd, fowlerMicro, twelve, testPyramid] }),
          ],
        },
        {
          id: "se8",
          title: "M8. İş ve sistem analizi (programda 15–25)",
          description: "Analistin rolü, gereksinim analizi süreci ve teknikleri; altı adım: talebi anlama, strateji/planlama, kapsam, iş analizi, fonksiyonel tasarım, sonlandırma.",
          lessons: [
            lesson("se-an1", "Analistin misyonu ve temel kavramlar", "Analiz, sistem, iş vs sistem analizi, gereksinim tipleri; paydaş, risk, kısıt, varsayım; müşteri ve gereksinim yönetimi.", { minutes: 75, resources: [BOEN.iletisim, BOEN.toplanti, uml] }),
            lesson("se-an2", "Gereksinim analizi süreci ve temel analiz teknikleri", "Talebin oluşumundan onaya süreç; toplantı, mülakat, çalıştay, gözlem, anket, odak grup, prototipleme.", { minutes: 90, resources: [BOEN.toplanti, BOEN.iletisim, BOEN.tasarimDusunme] }),
            lesson("se-an3", "Adım 1–3: talebi anlama, strateji/planlama ve kapsam belirleme", "Etki analizi, varsayım/kısıt/risk, efor tahmini; kullanıcı hikâyeleri, kullanım vakaları, UML use-case, bağlam şeması, fonksiyonel olmayan gereksinimler.", { minutes: 120, resources: [userStories, mgUserStories, useCase, uml, mermaid] }),
            lesson("se-an4", "Adım 4–6: iş analizi, fonksiyonel tasarım ve sonlandırma", "İş kuralları, veri sözlüğü, UML sınıf şeması, durum geçişleri, karar ağaçları; ekran/rapor/entegrasyon/zamanlı servis gereksinimleri; doğrulama ve onay.", { minutes: 120, resources: [uml, mermaid, useCase, BOEN.arge] }),
          ],
        },
        {
          id: "se9",
          title: "M9. Agile proje yönetimi ve Scrum (programda 26–27)",
          description: "Çeviklik tarihçesi, manifesto, ilkeler, Scrum süreci ve uygulamalar: backlog, hikâye, planning poker, kaizen/hız, sprint oyunu, burndown.",
          lessons: [
            lesson("se-agile", "Çevik yaklaşım ve Scrum: manifesto, ilkeler, roller, olaylar, artefaktlar", "Çevik yazılım geliştirme teknikleri, sözleşme yönetimi, Scrum'da kapsam, tasarım, raporlama ve hız.", { minutes: 90, resources: [agileManifesto, agilePrinciples, scrumGuide, atlScrum, atlRoles, BOEN.takim] }),
            lesson("se-scrum-uyg", "Uygulamalar: product backlog, kullanıcı hikâyesi, planning poker, kaizen, sprint oyunu, burndown", "Küçük bir ekiple (veya tek başına) bir sprint simülasyonu.", { minutes: 120, resources: [atlBacklog, planningPoker, atlEstimation, atlSprints, atlBurndown, atlKanban] }),
          ],
        },
        {
          id: "se10",
          title: "M10. Kariyer: CV, mülakat, mentörlük (programda CV / Mülakat / Kariyer Koçluğu)",
          description: "CV ve LinkedIn, GitHub portföyü, teknik ve davranışsal mülakat, asansör konuşması, dayanıklılık, mentörlük.",
          lessons: [
            lesson("se-cv", "CV hazırlama, LinkedIn ve portföy", "Kariyer hedefi, tek sayfa CV, ATS uyumu, LinkedIn stratejisi, GitHub profili ve proje vitrini.", { minutes: 75, resources: [resume, BOEN.cv, BOEN.linkedin] }),
            lesson("se-mulakat", "Mülakat teknikleri", "Sık sorular ve iyi cevap yapısı (STAR), sorulmaması gereken sorular, mülakat sırasında dikkat edilecekler, teknik mülakat hazırlığı.", { minutes: 90, resources: [interviewHandbook, behavioral, neetcode, BOEN.sunum] }),
            lesson("se-kariyer", "Kariyer koçluğu ve mentörlük: asansör konuşması, dayanıklılık, öğrenme planı", "30 saniyelik tanıtım, psikolojik sağlamlık, zaman yönetimi, mentör bulma ve kullanma.", { minutes: 60, resources: [BOEN.zaman, BOEN.stres, BOEN.stratejik, BOEN.uzaktan, pragmatic] }),
          ],
        },
        {
          id: "se11",
          title: "M11. Bitirme projeleri (programda 'Proje 1–4')",
          description: "Öğrendiklerini uçtan uca bir ürüne dönüştür.",
          lessons: [
            lesson("se-proje", "Bitirme projeleri: dört aşamalı plan", "Analiz → veri/çekirdek → API ve arayüz → test ve yayın. React/Next.js tarafı için 'React ve Arka Plan' modülündeki Next.js izine bak.", { minutes: 240, resources: [nextDocs, vercelDocs, playwright, cs50web, odin] }),
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "proje-konsol",
      title: "Proje 1 — Algoritma ve OOP: Kütüphane Yönetimi (konsol, TypeScript)",
      level: "Başlangıç",
      hours: 20,
      description: "Sınıflar, arayüzler, koleksiyonlar ve hata yönetimiyle kitap/üye/ödünç sistemi; dosyada kalıcılık.",
      features: ["Kitap, üye, ödünç alma sınıfları", "Arama ve filtreleme", "Gecikme cezası hesaplama", "JSON dosyasına kalıcılık", "Birim testleri"],
      skills: ["OOP", "koleksiyonlar", "hata yönetimi", "test"],
      steps: ["Sınıf diyagramını çiz", "Sınıfları ve arayüzleri yaz", "Depo (Repository) katmanını ekle", "Dosya okuma/yazma", "Test ve hata durumları"],
      done: ["Tüm iş kuralları testle korunuyor", "SOLID açısından kısa bir öz değerlendirme yazıldı"],
    },
    {
      id: "proje-veritabani",
      title: "Proje 2 — Veritabanı Tasarımı: Sipariş Sistemi (PostgreSQL + MongoDB)",
      level: "Orta",
      hours: 25,
      description: "Aynı alanı hem ilişkisel (3NF) hem belge modeliyle tasarla; sorgu ve raporlarla karşılaştır.",
      features: ["ER diyagramı ve 3NF şema", "JOIN'li raporlar ve view", "Transaction ile sipariş oluşturma", "Aynı verinin MongoDB modeli ve aggregation raporu", "Yedek al/geri yükle denemesi"],
      skills: ["SQL", "normalizasyon", "transaction", "NoSQL"],
      steps: ["İş kurallarını yaz", "ER diyagramı + şema", "Örnek veri ve raporlar", "MongoDB modeli", "Karşılaştırma raporu"],
    },
    {
      id: "proje-api",
      title: "Proje 3 — REST API: Randevu Servisi (Node.js + PostgreSQL)",
      level: "Orta",
      hours: 35,
      description: "Katmanlı mimaride, doğrulama, kimlik doğrulama ve testlerle tam bir API.",
      features: ["Controller–service–repository katmanları", "Zod ile girdi doğrulama", "JWT/oturum ile kimlik doğrulama", "Çakışan randevu önleme (transaction)", "OpenAPI belgesi ve entegrasyon testleri"],
      skills: ["Node.js", "REST", "katmanlı mimari", "test"],
      steps: ["Gereksinimleri kullanıcı hikâyesi olarak yaz", "Şema ve migrasyon", "Katmanları ve uç noktaları yaz", "Auth ve yetki", "Test ve belge"],
    },
    {
      id: "proje-full",
      title: "Proje 4 — Full-Stack Bitirme: Next.js 16 ile ürün",
      level: "İleri",
      hours: 80,
      description: "Gereksinim analizi, Scrum ile planlama, Next.js 16 + Prisma + PostgreSQL ile geliştirme, test ve yayın.",
      features: ["Analiz belgeleri (hikâyeler, use-case, ER)", "Sprint planı ve burndown", "Next.js 16 uygulaması", "E2E testleri", "Vercel'e canlı yayın ve README"],
      skills: ["analiz", "Scrum", "Next.js", "Prisma", "test", "yayın"],
      steps: ["Backlog ve kapsam", "Veri modeli", "Sprint 1–3: çekirdek özellikler", "Sprint 4: kalite ve güvenlik", "Yayın ve retrospektif"],
      done: ["Canlı adres çalışıyor", "Kritik akışlar E2E testle korunuyor", "Mimari kararlar belgelenmiş"],
    },
  ],
  library: [],
  resources: [roadmapFull, roadmapBackend, cs50, odin, ddia, cleanCode, patterns],
  notIncluded: "",
};
