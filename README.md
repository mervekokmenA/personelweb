# Kişisel Panel

Next.js 16 ile geliştirilmiş kişisel üretkenlik uygulaması: günlük program,
içerik fikirleri, eğitim takibi ve Vedik astroloji.

## Bölümler

- **/gunluk** — Günlük saat planı, rutin checklist'i, yapılacaklar listesi,
  not günlüğü ve "Çalışmalar-Hobiler" odak alanları. `/gunluk/alanlar`
  sayfasından odak alanlarını ve rutin şablonlarını (parametreleri)
  düzenleyebilirsin.
- **/icerik** — 200 seed içerik fikri + istediğin zaman yeni fikir ekleme,
  durum işaretleme (Yapılmadı / Yapılıyor / Yapıldı), kategori/durum filtresi.
- **/egitimler** — Aldığın/almayı planladığın eğitimlerin listesi, her
  eğitimin kendi sayfasında ders notları tutabileceğin bir alan.
- **/astroloji** — Seçtiğin günün sidereal (Lahiri) transit haritası, natal
  haritanla whole-sign ev bazında karşılaştırması, transit→natal açı listesi
  ve günün öne çıkan temalarını/dikkat noktalarını özetleyen otomatik metin.
- **/ayarlar** — GitHub Actions üzerinden APK derlemeyi tetikleme ve son
  derlemeyi indirme.

## Yerel geliştirme

```bash
npm install
npx prisma migrate deploy   # veya lokal bir Postgres'e `migrate dev`
npm run db:seed             # 200 içerik fikri + eğitim listesi + rutin şablonları
npm run dev
```

`.env.example` dosyasını `.env` olarak kopyala ve kendi değerlerini gir.
`.env` git'e commit edilmez.

## Veritabanı

Neon (Postgres) veya Vercel Postgres kullanılabilir — standart bağlantı
dizesini `DATABASE_URL` olarak ekle. Prisma, `@prisma/adapter-pg` (node-postgres)
sürücüsüyle çalışır; bu Neon'un normal (pooled) bağlantısıyla da, yerel bir
Postgres ile de sorunsuz çalışır.

## Vercel'e deploy

1. Repoyu Vercel'e bağla, framework preset "Next.js" otomatik algılanır.
2. Environment Variables kısmına `.env.example`'daki değişkenleri gir
   (özellikle `DATABASE_URL`, `NEXT_PUBLIC_APP_URL`).
3. Build komutu sadece `prisma generate && next build` çalıştırır — bilinçli
   olarak migration içermez, çünkü `DATABASE_URL` henüz yokken build'in
   kırılmaması gerekir. Veritabanını ilk kurarken migration'ları bir kere
   kendin uygulaman gerekiyor: `npm run db:migrate` (yerelden, `DATABASE_URL`
   canlı veritabanını gösterecek şekilde) veya Neon'un web SQL Editor'ünde
   `prisma/migrations/*/migration.sql` dosyalarını sırayla çalıştırarak.
   Ardından `npm run db:seed` ile başlangıç verisini ekle.
4. `DATABASE_URL` veya `GH_PAT`/`GH_REPO` henüz girilmemişse site yine de
   açılır — ilgili sayfalar sadece bir kurulum uyarısı gösterir, çökmez.

## Astroloji verisi ve gizlilik

**Natal harita** `NATAL_CHART_JSON` ortam değişkeninden okunur (bkz.
`.env.example` için şekli):

- Repoya asla commit edilmez (`.env` gitignore'da).
- Arayüzde ham doğum bilgisi (tarih/saat/yer) hiçbir zaman gösterilmez —
  sadece burç/derece/ev sonuçları render edilir.
- Sunucu tarafında (`src/lib/astro/natal.ts`) okunur, istemciye gönderilmez.

Natal harita, kendi ephemeris hesaplamamız yerine **doğrulanmış bir referans
kaynaktan** (ör. astro-seek.com'un sidereal/Lahiri, whole-sign hesabı) alınan
burç/derece/ev bilgisini doğrudan tutar. Bunun nedeni: Yükselen/ev hesabı
hassas bir gözlemci-geometrisi problemi olduğu için kendi hesaplamamızla
astro-seek.com referansı arasında birkaç gezegende (özellikle Yükselen)
karşılaştırmalı testlerde tutarsızlık bulundu — bu yüzden natal harita için
kendi kodumuza değil, doğrulanmış dış kaynağa güvenmek daha güvenilir.

**Günlük transit** ise `astronomy-engine` ile canlı hesaplanır (geocentrik
ekliptik boylamlar + Lahiri ayanamsa yaklaşımı); bu kısım gezegen konumları
için NASA JPL Horizons ile karşılaştırılıp doğrulandı.

## APK derleme (Ayarlar sayfası)

APK, uygulamanın **native bir WebView kabuğudur** — içinde sabit veri
taşımaz, her açılışta canlı Vercel sitesini yükler (`capacitor.config.ts` →
`server.url`). Bu sayede APK'yı yeniden derlemeden de güncel verilerin
görünür; derleme sadece telefona kurulabilir bir paket üretir.

Kurulum:

1. GitHub'da **Settings → Secrets and variables → Actions → Variables**
   kısmına `CAPACITOR_SERVER_URL` adında bir repository variable ekle
   (örn. `https://senin-projen.vercel.app`).
2. `repo` + `workflow` izinli bir GitHub Personal Access Token oluştur,
   Vercel'de `GH_PAT` olarak ekle.
3. Vercel'de `GH_REPO` değişkenini `kullanici-adi/repo-adi` formatında ekle.
4. Ayarlar sayfasından **APK Oluştur**'a bas — GitHub Actions
   (`.github/workflows/build-apk.yml`) tetiklenir, ~3-5 dakikada derler ve
   `apk-latest` adlı GitHub Release'e yükler. Ayarlar sayfasındaki
   "Son APK'yı indir" bağlantısı hep bu release'i gösterir.

## Notlar

- 9 eğitim (Behruz Hüseyinzade + hibrit uzmanlaşma listesi) seed olarak
  eklendi; bağlantılar orijinal sohbette URL olarak paylaşılmadığı için
  boş bırakıldı, Eğitimler sayfasından düzenleyerek ekleyebilirsin.
