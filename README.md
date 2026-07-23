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
- **/astroloji** — Seçtiğin günün sidereal (Lahiri) transit haritası ve
  (env değişkenleri tanımlıysa) natal haritanla karşılaştırması, açı listesi.
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
3. Build komutu `package.json`'daki `build` script'i sayesinde otomatik
   olarak `prisma generate && prisma migrate deploy && next build` çalıştırır
   — yani her deploy'da migration'lar otomatik uygulanır.

## Astroloji verisi ve gizlilik

Doğum bilgilerin (`NATAL_BIRTH_DATE`, `NATAL_BIRTH_TIME`, `NATAL_UTC_OFFSET`,
`NATAL_LATITUDE`, `NATAL_LONGITUDE`) sadece ortam değişkeni olarak tutulur:

- Repoya asla commit edilmez (`.env` gitignore'da).
- Arayüzde ham olarak hiçbir zaman gösterilmez — sadece hesaplanan
  gezegen/burç sonuçları render edilir.
- Sunucu tarafında (`src/lib/astro/natal.ts`) okunur, istemciye gönderilmez.

Hesaplama `astronomy-engine` ile geocentrik ekliptik boylamlar bulunup Lahiri
ayanamsa yaklaşımıyla sidereale çevrilir. Profesyonel yazılımların (Swiss
Ephemeris) "true" Lahiri hesabından saniye mertebesinde farklılık gösterebilir.

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
