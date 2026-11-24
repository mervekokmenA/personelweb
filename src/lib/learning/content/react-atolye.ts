import { qz } from "../helpers";
import type { QuizQuestion } from "../types";

/** Proje Atölyesi: referans projede (Finans Takipçisi) çalıştırılıp doğrulanmış kodlardan üretildi. */
export const reactAtolyeBodies: Record<string, { body: string; verification?: string }> = {
  "at-plan": {
    body: `## Hedef
Kod yazmadan önce **ne yapacağını** netleştir: kullanıcı hikâyeleri, veri modeli ve klasör yapısı. Gerçek projelerde en pahalı hata, yanlış anlaşılan gereksinimdir.

## Proje: Finans Takipçisi
Bir kullanıcı kayıt olur, gelir/gider işlemlerini kategorilere göre kaydeder, ay bazında özet görür, filtreler ve CSV olarak indirir. Başkasının verisini asla göremez.

## Kullanıcı hikâyeleri (kabul ölçütleriyle)
| Hikâye | Kabul ölçütü |
|---|---|
| Kayıt olurum | Geçersiz e-posta/kısa parola Türkçe hata verir; hata sonrası yazdıklarım silinmez |
| Giriş yaparım | Hatalı girişte "E-posta veya parola hatalı" (hangisinin yanlış olduğunu sızdırmaz) |
| İşlem eklerim | Tutar \`1.250,50\` biçiminde girilir; geçersizse hata; kaydedince listede görünür |
| Listeyi filtrelerim | Ay/tür/kategori URL'de durur (paylaşılabilir); sayfalama çalışır |
| Aylık özet görürüm | Gelir, gider, bakiye ve kategori dağılımı; renk dışında metinle de okunur |
| CSV indiririm | Yalnızca kendi kayıtlarım; Excel formül enjeksiyonuna karşı korumalı |
| Başkasının verisine erişemem | Her sorgu kullanıcıya bağlı; test ile kanıtlı |

## Veri modeli (3 tablo)
- **User**: \`email\` (benzersiz), \`passwordHash\`.
- **Category**: \`name\`, kullanıcıya ait; \`(userId, name)\` benzersiz.
- **Transaction**: \`type\` (INCOME/EXPENSE), **\`amountKurus\` (tam sayı)**, \`date\`, \`note\`, kategori ve kullanıcı ilişkisi.

> **Karar (ADR): para = kuruş cinsinden tam sayı.** Ondalıklı sayılar ikili tabanda tam gösterilemez (\`0.1 + 0.2 !== 0.3\`). Finansal veride bu hata kabul edilemez; bu yüzden saklarken ve hesaplarken kuruş, yalnızca ekranda TL.

## Klasör yapısı
\`\`\`text
src/
  app/                 # sayfalar, sunucu eylemleri (actions.ts), API rotaları
    giris/ kayit/ islemler/ kategoriler/ api/disa-aktar/
  components/          # küçük, yeniden kullanılabilir arayüz parçaları
  lib/                 # saf mantık + sunucu yardımcıları (money, validation, csv, session, dal, queries, prisma)
  proxy.ts             # iyimser yönlendirme
prisma/schema.prisma
tests/                 # birim testleri (Vitest)
e2e/smoke.mjs          # uçtan uca duman testi (Playwright)
\`\`\`

**Kural:** saf mantık (\`money\`, \`validation\`, \`csv\`) hiçbir framework'e bağımlı değildir → hızlı test edilir. Veritabanına dokunan her şey \`lib/queries.ts\` ve \`app/actions.ts\` içindedir.

## Görevin
1. Kabul ölçütlerini kendi defterine **kendi cümlelerinle** yeniden yaz.
2. Şemaya bir alan eklemen gerekse (ör. "tekrarlayan işlem") hangi tabloya, neden eklerdin? Üç cümleyle yaz.

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Hikâyeleri ve kabul ölçütlerini açıklayabiliyorum.
- [ ] "Neden kuruş?" sorusuna cevap verebiliyorum.
- [ ] Klasör yapısında hangi dosyanın nereye gideceğini söyleyebiliyorum.`,
    verification: `Bu ders bir planlama dersidir; olgusal iddiası yoktur. Verilen şema ve klasör yapısı referans projede **uygulanıp çalıştırılmıştır**.`,
  },
  "at-kurulum": {
    body: `## Hedef
Boş bir klasörden **çalışan, tipli, testli, veritabanına bağlı** bir iskelet kurmak.

## 1) Next.js uygulamasını oluştur
\`\`\`bash
npx create-next-app@16.2.11 fintrack --ts --tailwind --eslint --app --src-dir --use-npm --import-alias "@/*"
cd fintrack
\`\`\`

> **Neden sürümü sabitledik?** Next.js 16'da \`middleware\` yerine \`proxy\`, \`params\`/\`searchParams\` ve \`cookies()\` artık **Promise** döner. Eski eğitimlerdeki kod bu yüzden çalışmayabilir; her zaman kullandığın sürümün dokümanına bak (\`node_modules/next/dist/docs\`).

## 2) Bağımlılıklar
\`\`\`bash
npm i prisma@^7 @prisma/client@^7 @prisma/adapter-pg@^7 pg zod jose bcryptjs server-only dotenv
npm i -D @types/node@^22 vitest @types/pg playwright
\`\`\`

- **\`prisma@^7\` (sürüm sabit!)**: sürüm yazmadan \`npm i prisma\` yazdığımızda bu eğitimin hazırlandığı gün npm \`latest\` etiketi **Prisma 8 ön sürümünü (rc)** getirdi ve \`defineConfig\` / üretilen istemci uyumsuzluğu yüzünden proje derlenmedi. Bu eğitim **Prisma 7** içindir; ana sürümü her zaman sabitle.
- **@types/node@^22**: Vitest 5 bu sürüm aralığını ister; create-next-app'in koyduğu \`^20\` ile \`npm\` **ERESOLVE** hatası verir (bunu referans projeyi kurarken gerçekten yaşadık).
- \`bcryptjs\` kendi tip tanımlarını getirir; ayrıca \`@types/bcryptjs\` kurma.
- \`server-only\`: bir dosyayı yanlışlıkla istemci koduna import edersen **derleme zamanında** hata verir (parola özeti/gizli anahtar sızmasın).

## 3) Ortam değişkenleri
\`\`\`bash
# .env  (asla git'e koyma; create-next-app .gitignore'u zaten .env* içerir)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fintrack"
SESSION_SECRET="en-az-32-karakterlik-rastgele-bir-metin"   # üretmek için: openssl rand -base64 32
\`\`\`

Yerel Postgres'te veritabanını aç: \`createdb fintrack\` (ya da \`psql -c "create database fintrack"\`).

## 4) Prisma 7 yapılandırması
**prisma.config.ts**

\`\`\`ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: process.env.DATABASE_URL },
});
\`\`\`

**prisma/schema.prisma**

\`\`\`prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

enum TransactionType {
  INCOME
  EXPENSE
}

model User {
  id           String        @id @default(cuid())
  email        String        @unique
  passwordHash String
  createdAt    DateTime      @default(now())
  categories   Category[]
  transactions Transaction[]
}

model Category {
  id           String        @id @default(cuid())
  name         String
  userId       String
  user         User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  transactions Transaction[]

  @@unique([userId, name])
}

model Transaction {
  id         String          @id @default(cuid())
  type       TransactionType
  // Para kuruş cinsinden TAM SAYI olarak saklanır (ondalık hatası olmasın)
  amountKurus Int
  date       DateTime        @db.Date
  note       String          @default("")
  userId     String
  user       User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  categoryId String
  category   Category        @relation(fields: [categoryId], references: [id], onDelete: Restrict)
  createdAt  DateTime        @default(now())

  @@index([userId, date])
}
\`\`\`

Migrasyonu uygula ve istemciyi üret:
\`\`\`bash
npx prisma migrate dev --name ilk
npx prisma generate
\`\`\`

> **Prisma 7 notları:** (1) \`generator\` bloğunda \`provider = "prisma-client"\` ve **output** zorunludur; istemci \`src/generated/prisma\` altına üretilir. (2) Bağlantı adresi \`schema.prisma\`'da değil **prisma.config.ts**'dedir. (3) Çalışma zamanında bir **sürücü adaptörü** (\`@prisma/adapter-pg\`) gerekir (aşağıda). (4) \`migrate dev\` istemciyi her zaman üretmeyebilir; \`prisma generate\`'i ayrıca çalıştır.

\`.gitignore\`'a şunu ekle: \`/src/generated\` — ve \`package.json\` içine \`"postinstall": "prisma generate"\` koy ki temiz kurulumda istemci üretilsin.

## 5) Prisma istemcisi (tek örnek)
**src/lib/prisma.ts**

\`\`\`ts
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Geliştirmede sıcak yeniden yüklemede (HMR) yeni bağlantı havuzu açılmasın diye
// tek bir PrismaClient'ı globalThis üzerinde tutarız.
declare global {
  var __prisma: PrismaClient | undefined;
}

function createClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "", max: 3 });
  return new PrismaClient({ adapter });
}

export const prisma = globalThis.__prisma ?? createClient();
globalThis.__prisma = prisma;
\`\`\`

**Neden \`globalThis\`?** Geliştirmede kod sıcak yeniden yüklenir; her seferinde yeni bağlantı havuzu açılırsa veritabanı bağlantı sınırı dolar.

## 6) Test altyapısı
**vitest.config.mts**

\`\`\`ts
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: { include: ["tests/**/*.test.ts"] },
});
\`\`\`

\`package.json\` scripts: \`"test": "vitest run"\`, \`"postinstall": "prisma generate"\`.

## Sık hatalar
| Belirti | Neden / çözüm |
|---|---|
| \`ERESOLVE could not resolve\` (vitest) | \`@types/node@^22\` kur |
| \`no exported member 'defineConfig'\` / \`Cannot find module '@/generated/prisma/client'\` | Yanlışlıkla Prisma 8 rc kuruldu: \`npm i prisma@^7 @prisma/client@^7 @prisma/adapter-pg@^7\` |
| \`Cannot find module '@/generated/prisma/client'\` | \`npx prisma generate\` çalıştırılmadı |
| \`ECONNREFUSED 5432\` | Postgres çalışmıyor; servisi başlat |
| \`SESSION_SECRET\` boş → JWT hatası | \`.env\` dosyasını kontrol et, sunucuyu yeniden başlat |

## Kontrol
\`\`\`bash
npx tsc --noEmit        # hata yok
npx prisma migrate status  # "Database schema is up to date"
npm run dev             # http://localhost:3000 açılıyor
\`\`\`


**Kontrol listesi — bu ders bitti sayılır:**
- [ ] \`npx tsc --noEmit\` temiz.
- [ ] Veritabanında \`User\`, \`Category\`, \`Transaction\` tabloları var (\`\\dt\`).
- [ ] \`.env\` git'e girmiyor (\`git status\` ile doğrula).`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-para": {
    body: `## Hedef
Para işlemlerini **saf fonksiyonlara** ayırıp **önce testini** yazarak doğru çalıştığını kanıtlamak. Saf fonksiyon: aynı girdi → aynı çıktı, dış dünyaya dokunmaz.

## Neden önce test?
Bu fonksiyonlar uygulamanın en kritik kısmıdır (yanlış para = yanlış bakiye). Tarayıcıyı açıp elle denemek yerine, **kenar durumları** (boş metin, \`12,345\`, negatif, \`0\`) tek komutla doğrularsın.

## Adım 1 — Önce test (kırmızı)
**tests/money.test.ts**

\`\`\`ts
import { describe, expect, it } from "vitest";
import { formatTutar, kurusToPlain, parseTutar } from "@/lib/money";

describe("parseTutar", () => {
  it.each([
    ["50", 5000],
    ["1250,5", 125050],
    ["1.250,50", 125050],
    ["0,99", 99],
    [" 12 ", 1200],
  ])("%s → %i kuruş", (input, expected) => expect(parseTutar(input)).toBe(expected));

  it.each(["", "abc", "1,234", "1.25", "12,345", "-5", "0", "0,00", "1..250,00"])(
    "geçersiz: %s",
    (input) => expect(parseTutar(input)).toBeNull(),
  );
});

describe("biçimlendirme", () => {
  it("TL biçimi", () => expect(formatTutar(125050).replace(/\\s/g, " ")).toContain("1.250,50"));
  it("CSV düz biçimi", () => {
    expect(kurusToPlain(125050)).toBe("1250.50");
    expect(kurusToPlain(5)).toBe("0.05");
  });
  it("float tuzağı: tam sayıyla toplama kesindir", () => {
    expect((parseTutar("0,10") ?? 0) + (parseTutar("0,20") ?? 0)).toBe(30);
  });
});
\`\`\`

\`npx vitest run\` → fonksiyon yok, test **kırmızı**. Bu normaldir.

## Adım 2 — Fonksiyonlar (yeşil)
**src/lib/money.ts**

\`\`\`ts
/**
 * Para birimi kuralı: veritabanında ve kodda tutarlar KURUŞ cinsinden tam sayıdır.
 * Ondalıklı sayı (float) kullanmayız: 0.1 + 0.2 !== 0.3.
 */

/** "1.250,50" | "1250,5" | "50" → kuruş (tam sayı). Geçersizse null. */
export function parseTutar(input: string): number | null {
  const s = input.trim().replace(/\\s/g, "");
  // Türkçe biçim: binlik ayraç nokta (isteğe bağlı), ondalık ayraç virgül (en çok 2 hane)
  if (!/^(\\d{1,3}(\\.\\d{3})+|\\d+)(,\\d{1,2})?$/.test(s)) return null;
  const [lira, kurus = ""] = s.replace(/\\./g, "").split(",");
  const total = Number(lira) * 100 + Number(kurus.padEnd(2, "0"));
  return Number.isSafeInteger(total) && total > 0 ? total : null;
}

const tl = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" });

/** kuruş → "₺1.250,50" */
export function formatTutar(kurus: number): string {
  return tl.format(kurus / 100);
}

/** CSV için sade biçim: kuruş → "1250.50" */
export function kurusToPlain(kurus: number): string {
  const sign = kurus < 0 ? "-" : "";
  const abs = Math.abs(kurus);
  return \`\${sign}\${Math.floor(abs / 100)}.\${String(abs % 100).padStart(2, "0")}\`;
}
\`\`\`

### Satır satır
- Regex \`^(\\d{1,3}(\\.\\d{3})+|\\d+)(,\\d{1,2})?$\`: ya binlik ayraçlı (\`1.250\`) ya düz rakam (\`1250\`); ardından isteğe bağlı **en çok 2 haneli** virgüllü kuruş. \`1.25\` ya da \`12,345\` reddedilir — belirsizlik bırakmayız.
- \`padEnd(2, "0")\`: \`"5"\` → \`"50"\` (yani \`1250,5\` = 1250 lira 50 kuruş).
- \`Number.isSafeInteger\`: aşırı büyük girdileri eler.
- \`total > 0\`: sıfır ve negatif tutar kabul edilmez (tür zaten gelir/gider ile belirtilir).
- \`Intl.NumberFormat("tr-TR")\`: yerel biçim (\`₺1.250,50\`). Kendi biçimlendirmeni yazma.

\`npx vitest run\` → **yeşil**.

## Sık hatalar
| Hata | Sonuç |
|---|---|
| \`parseFloat("1.250,50")\` kullanmak | \`1.25\` döner — Türkçe biçim yanlış okunur |
| Tutarı \`Number\` (ondalıklı) saklamak | \`0.1 + 0.2\` gibi kayan nokta hataları |
| Biçimlendirmeyi veritabanında yapmak | Veri bozulur; biçim yalnızca görüntüleme katmanında |

## Görevin
\`parseTutar\` için **iki yeni kenar durumu** düşün (ör. \`"1.250"\`: lira mı, binlik mi? Bizim kuralımızda \`1.250\` = 1250 lira), testini ekle, geçtiğini gör.

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] \`tests/money.test.ts\` yeşil.
- [ ] "Neden float değil?" sorusuna testteki \`0,10 + 0,20\` örneğiyle cevap verebiliyorum.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-zod": {
    body: `## Hedef
Dış dünyadan gelen **her veriyi** (form, URL, API) sunucuda doğrulamak ve hataları kullanıcıya Türkçe vermek. Doğrulama **tarayıcıya güvenmez**: istemci kontrolü yalnızca kolaylıktır, güvenlik sunucudadır.

## Zod şemaları
**src/lib/validation.ts**

\`\`\`ts
import { z } from "zod";
import { parseTutar } from "./money";

export const transactionSchema = z.object({
  type: z.enum(["INCOME", "EXPENSE"], { error: "Tür seçin" }),
  amount: z
    .string()
    .refine((v) => parseTutar(v) !== null, "Geçerli bir tutar girin (örn. 1.250,50)")
    .transform((v) => parseTutar(v) as number),
  date: z.iso.date({ error: "Geçerli bir tarih girin" }),
  categoryId: z.string({ error: "Kategori seçin" }).min(1, "Kategori seçin"),
  note: z.string().max(200, "En fazla 200 karakter").default(""),
});

export const registerSchema = z.object({
  email: z.email("Geçerli bir e-posta girin").transform((v) => v.toLowerCase()),
  password: z.string().min(8, "Parola en az 8 karakter olmalı").max(72, "Parola en fazla 72 karakter olabilir"),
});

export const loginSchema = z.object({
  email: z.email("Geçerli bir e-posta girin").transform((v) => v.toLowerCase()),
  password: z.string().min(1, "Parola girin"),
});

export const categorySchema = z.object({
  name: z.string().trim().min(1, "Ad girin").max(40, "En fazla 40 karakter"),
});

export type ActionState = {
  errors?: Record<string, string[] | undefined>;
  message?: string;
  /** Hata durumunda formu yeniden doldurmak için gönderilen değerler (parola HARİÇ) */
  values?: Record<string, string>;
};

/** FormData → düz metin değerleri (dosya alanları ve parola atlanır) */
export function formValues(formData: FormData): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of formData.entries()) {
    if (typeof v === "string" && k !== "password") out[k] = v;
  }
  return out;
}

/** Zod hatasını form alanı → mesaj listesine çevirir */
export function fieldErrors(error: z.ZodError): Record<string, string[] | undefined> {
  return z.flattenError(error).fieldErrors;
}
\`\`\`

### Önemli noktalar
- \`z.string().refine(...).transform(...)\`: önce metni **doğrula**, sonra **dönüştür** (\`"1.250,50"\` → \`125050\`). Şema çıktısı artık \`amount: number\`.
- \`z.flattenError(error).fieldErrors\` → \`{ amount: ["..."] }\`: formda alan alan göstermek için.
- \`z.string({ error: "Kategori seçin" })\`: alan **hiç gönderilmezse** (\`undefined\`) varsayılan İngilizce mesaj çıkar; bunu özel mesajla yakalamazsan kullanıcı \`Invalid input: expected string, received undefined\` görür. (Uçtan uca testte bunu gerçekten yakaladık.)
- \`ActionState.values\`: hata olduğunda **kullanıcının yazdıklarını** geri göndermek için. Nedeni bir sonraki derste (React 19 form sıfırlama).
- Parola \`values\` içine **asla** konmaz (\`formValues\` atlar).
- E-posta \`transform(v => v.toLowerCase())\`: \`Ali@x.com\` ve \`ali@x.com\` aynı hesap olsun.

## Testler
**tests/validation.test.ts**

\`\`\`ts
import { describe, expect, it } from "vitest";
import { registerSchema, transactionSchema } from "@/lib/validation";

describe("transactionSchema", () => {
  const ok = { type: "EXPENSE", amount: "1.250,50", date: "2026-11-02", categoryId: "c1", note: "" };

  it("geçerli girdiyi kuruşa çevirir", () => {
    const r = transactionSchema.parse(ok);
    expect(r.amount).toBe(125050);
  });
  it("hatalı tutarı reddeder ve mesaj verir", () => {
    const r = transactionSchema.safeParse({ ...ok, amount: "abc" });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].message).toContain("tutar");
  });
  it("geçersiz tarihi reddeder", () => {
    expect(transactionSchema.safeParse({ ...ok, date: "2026-13-40" }).success).toBe(false);
  });
  it("eksik kategori için Türkçe mesaj verir", () => {
    const r = transactionSchema.safeParse({ ...ok, categoryId: undefined });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues.some((i) => i.message === "Kategori seçin")).toBe(true);
  });
  it("bilinmeyen türü reddeder", () => {
    expect(transactionSchema.safeParse({ ...ok, type: "HEDIYE" }).success).toBe(false);
  });
});

describe("registerSchema", () => {
  it("e-postayı küçük harfe çevirir", () => {
    expect(registerSchema.parse({ email: "Ali@Ornek.com", password: "12345678" }).email).toBe("ali@ornek.com");
  });
  it("kısa parolayı reddeder", () => {
    expect(registerSchema.safeParse({ email: "a@b.co", password: "123" }).success).toBe(false);
  });
});
\`\`\`


## CSV yardımcısı (aynı katman: saf ve testli)
**src/lib/csv.ts**

\`\`\`ts
/**
 * CSV üretimi. İki güvenlik/doğruluk kuralı:
 * 1) Virgül, tırnak veya satır sonu içeren hücre tırnak içine alınır (tırnaklar ikilenir).
 * 2) "CSV enjeksiyonu": hücre = + - @ ile başlıyorsa Excel bunu formül sayar → başına ' koyarız.
 */
export function csvHucre(value: string): string {
  let v = value;
  if (/^[=+\\-@\\t\\r]/.test(v)) v = \`'\${v}\`;
  if (/[",\\n\\r]/.test(v)) v = \`"\${v.replace(/"/g, '""')}"\`;
  return v;
}

export function toCsv(rows: string[][]): string {
  return rows.map((r) => r.map(csvHucre).join(",")).join("\\n");
}
\`\`\`

**tests/csv.test.ts**

\`\`\`ts
import { describe, expect, it } from "vitest";
import { csvHucre, toCsv } from "@/lib/csv";

describe("csv", () => {
  it("virgül ve tırnak içeren hücreyi sarar", () => {
    expect(csvHucre('a,"b"')).toBe('"a,""b"""');
  });
  it("formül başlangıcını etkisizleştirir (CSV enjeksiyonu)", () => {
    expect(csvHucre("=HYPERLINK(\\"x\\")").startsWith(\`"'=\`)).toBe(true);
    expect(csvHucre("+1")).toBe("'+1");
  });
  it("satırları birleştirir", () => {
    expect(toCsv([["a", "b"], ["1", "2"]])).toBe("a,b\\n1,2");
  });
});
\`\`\`

**CSV enjeksiyonu nedir?** Bir hücre \`=\`, \`+\`, \`-\` veya \`@\` ile başlarsa Excel onu **formül** olarak çalıştırabilir (ör. \`=HYPERLINK(...)\`). Kullanıcı notuna kötü niyetli bir formül yazarsa, dışa aktarılan dosyayı açan kişi etkilenir. Çözüm: başına \`'\` koymak.

## Görevin
\`categorySchema\` için "yalnızca boşluktan oluşan ad" durumunu test et (\`trim\` sayesinde reddedilmeli).

## Kontrol
\`\`\`bash
npx vitest run   # 3 dosya, tüm testler yeşil
\`\`\`


**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Hata mesajları Türkçe ve alan bazında.
- [ ] "Sunucuda neden yine doğruluyoruz?" sorusuna cevap verebiliyorum.
- [ ] CSV enjeksiyonunu bir cümleyle anlatabiliyorum.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-sorgu": {
    body: `## Hedef
Veritabanı sorgularını **tek dosyada** toplamak: filtre, sayfalama, özet. Her sorgu **kullanıcıya bağlıdır**.

## Kod
**src/lib/queries.ts**

\`\`\`ts
import "server-only";
import type { Prisma, TransactionType } from "@/generated/prisma/client";
import { prisma } from "./prisma";

export const SAYFA_BOYUTU = 10;

export interface Filters {
  ay?: string; // "2026-11"
  tur?: TransactionType;
  kategori?: string;
  sayfa: number;
}

/** URL'den gelen ham değerleri güvenli Filters nesnesine çevirir */
export function parseFilters(sp: Record<string, string | string[] | undefined>): Filters {
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  const ay = one("ay");
  const tur = one("tur");
  const sayfa = Number(one("sayfa") ?? "1");
  return {
    ay: ay && /^\\d{4}-(0[1-9]|1[0-2])$/.test(ay) ? ay : undefined,
    tur: tur === "INCOME" || tur === "EXPENSE" ? tur : undefined,
    kategori: one("kategori") || undefined,
    sayfa: Number.isInteger(sayfa) && sayfa > 0 ? sayfa : 1,
  };
}

export function monthRange(ay: string) {
  const [y, m] = ay.split("-").map(Number);
  return { gte: new Date(Date.UTC(y, m - 1, 1)), lt: new Date(Date.UTC(y, m, 1)) };
}

export function currentMonth(now = new Date()): string {
  return \`\${now.getFullYear()}-\${String(now.getMonth() + 1).padStart(2, "0")}\`;
}

function whereFor(userId: string, f: Omit<Filters, "sayfa">): Prisma.TransactionWhereInput {
  return {
    userId, // HER sorgu kullanıcıya bağlı: başkasının verisi asla gelmez
    ...(f.ay ? { date: monthRange(f.ay) } : {}),
    ...(f.tur ? { type: f.tur } : {}),
    ...(f.kategori ? { categoryId: f.kategori } : {}),
  };
}

export async function listTransactions(userId: string, f: Filters) {
  const where = whereFor(userId, f);
  const [items, total] = await Promise.all([
    prisma.transaction.findMany({
      where,
      include: { category: { select: { name: true } } }, // tek sorguda ilişki: N+1 yok
      orderBy: [{ date: "desc" }, { createdAt: "desc" }],
      skip: (f.sayfa - 1) * SAYFA_BOYUTU,
      take: SAYFA_BOYUTU,
    }),
    prisma.transaction.count({ where }),
  ]);
  return { items, total, pageCount: Math.max(1, Math.ceil(total / SAYFA_BOYUTU)) };
}

export async function allForExport(userId: string, f: Omit<Filters, "sayfa">) {
  return prisma.transaction.findMany({
    where: whereFor(userId, f),
    include: { category: { select: { name: true } } },
    orderBy: [{ date: "desc" }],
  });
}

export async function monthSummary(userId: string, ay: string) {
  const range = monthRange(ay);
  const byType = await prisma.transaction.groupBy({
    by: ["type"],
    where: { userId, date: range },
    _sum: { amountKurus: true },
  });
  const income = byType.find((x) => x.type === "INCOME")?._sum.amountKurus ?? 0;
  const expense = byType.find((x) => x.type === "EXPENSE")?._sum.amountKurus ?? 0;

  const byCat = await prisma.transaction.groupBy({
    by: ["categoryId"],
    where: { userId, type: "EXPENSE", date: range },
    _sum: { amountKurus: true },
    orderBy: { _sum: { amountKurus: "desc" } },
  });
  const cats = await prisma.category.findMany({
    where: { userId, id: { in: byCat.map((c) => c.categoryId) } },
    select: { id: true, name: true },
  });
  const nameOf = new Map(cats.map((c) => [c.id, c.name]));
  return {
    income,
    expense,
    balance: income - expense,
    categories: byCat.map((c) => ({ name: nameOf.get(c.categoryId) ?? "?", kurus: c._sum.amountKurus ?? 0 })),
  };
}

export function listCategories(userId: string) {
  return prisma.category.findMany({ where: { userId }, orderBy: { name: "asc" } });
}
\`\`\`


## Tasarım kararları
1. **parseFilters**: URL'den gelen ham metni (\`?ay=2026-11&tur=EXPENSE&sayfa=2\`) **güvenli** bir nesneye çevirir. Geçersiz değer sessizce yok sayılır; kullanıcı URL'yi bozsa bile sayfa çökmez (\`sayfa=-5\` → 1).
2. **whereFor(userId, f)** her sorguda \`userId\` koşulunu zorunlu koyar. Böylece "başkasının verisi" hatası **yapısal olarak** imkânsızdır, geliştiricinin unutmasına bağlı değildir.
3. **include: { category: ... }** ilişkiyi **aynı sorguda** getirir. Her satır için ayrı kategori sorgusu atsaydık **N+1** sorunu olurdu (10 satır = 11 sorgu).
4. **Promise.all([findMany, count])**: iki bağımsız sorgu paralel çalışır.
5. **\`groupBy\` + \`_sum\`**: toplamı veritabanı hesaplar; bütün satırları belleğe çekip JS'te toplamayız.
6. Tarih: sütun \`@db.Date\` (saatsiz). Ay aralığı **UTC** olarak \`[ay başı, sonraki ay başı)\` — "yarı açık aralık" hem 31 Aralık gibi sınırları hem artık yılı doğru yönetir.

## Sık hatalar
| Hata | Düzeltme |
|---|---|
| \`where\` içinde \`userId\` unutmak | \`whereFor\` kullan; ham \`prisma.transaction.findMany\` çağırma |
| \`skip\`/\`take\` hesabı: \`(sayfa-1)*boyut\` yerine \`sayfa*boyut\` | Sayfa 1'de ilk 10 kayıt atlanır |
| \`lte: ayın son günü\` | Saat/saat dilimi kayması; **lt: sonraki ayın başı** kullan |

## Görevin
\`listTransactions\` içindeki \`include\`'u kaldırıp sayfada \`t.category.name\` kullanmayı dene → hata; sonra Prisma sorgu günlüğünü açıp (\`log: ["query"]\`) N+1'i kendin üret ve gör. Sonra düzelt.

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] \`npx tsc --noEmit\` temiz.
- [ ] "Neden her sorgu userId ile başlıyor?" sorusuna cevap verebiliyorum.
- [ ] N+1'in ne olduğunu bir örnekle anlatabiliyorum.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-oturum": {
    body: `## Hedef
**Kayıt, giriş, çıkış** ve oturum yönetimi. Parolayı asla düz saklamayız; oturumu **imzalı, httpOnly çerezde** taşırız.

## Kavramlar
- **Hash (özet)**: parola tek yönlü bir fonksiyondan geçirilip saklanır (\`bcrypt\`). Veritabanı sızsa bile parola geri çıkarılamaz. \`12\` = maliyet faktörü (her +1 süreyi ikiye katlar).
- **Oturum**: giriş sonrası tarayıcıya verilen küçük kimlik kartı. Burada **JWT** (imzalı, süreli). İçine yalnızca \`userId\` koyarız; **parola/rol gibi hassas veya sık değişen veri koymayız**.
- **Çerez bayrakları**: \`httpOnly\` (JS okuyamaz → XSS çalamaz), \`secure\` (yalnızca HTTPS), \`sameSite: lax\` (başka sitelerden gelen istekte çerez gönderilmez → temel CSRF koruması).

## Oturum modülü
**src/lib/session.ts**

\`\`\`ts
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
const COOKIE = "oturum";
const SURE_GUN = 7;

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + SURE_GUN * 24 * 60 * 60 * 1000);
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(secret);
  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true, // JavaScript okuyamaz (XSS'e karşı)
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // CSRF'ye karşı temel koruma
    expires: expiresAt,
    path: "/",
  });
}

export async function readSession(): Promise<{ userId: string } | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });
    return typeof payload.userId === "string" ? { userId: payload.userId } : null;
  } catch {
    return null; // süresi dolmuş ya da kurcalanmış
  }
}

export async function deleteSession() {
  (await cookies()).delete(COOKIE);
}
\`\`\`

- \`import "server-only"\` — bu dosya istemciye asla giremez.
- \`jwtVerify(..., { algorithms: ["HS256"] })\`: kabul edilecek algoritmayı **sen** belirlersin (algoritma karıştırma saldırılarına karşı).
- \`try/catch\` → süresi dolmuş/değiştirilmiş token = **oturum yok** (hata fırlatma).
- Next.js 16'da \`cookies()\` **async**: \`await cookies()\`.

## Veri erişim katmanı (DAL)
**src/lib/dal.ts**

\`\`\`ts
import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { readSession } from "./session";
import { prisma } from "./prisma";

/** Veri erişim katmanı (DAL): kimlik kontrolü TEK yerde, veriye dokunmadan önce yapılır. */
export const getUser = cache(async () => {
  const session = await readSession();
  if (!session) return null;
  return prisma.user.findUnique({ where: { id: session.userId }, select: { id: true, email: true } });
});

export async function requireUser() {
  const user = await getUser();
  if (!user) redirect("/giris");
  return user;
}
\`\`\`

\`getUser\` **cache** ile sarılı: aynı istek içinde layout, sayfa ve bileşenler çağırsa bile veritabanına **bir kez** gidilir. \`requireUser\` giriş yoksa yönlendirir.

## Kayıt / giriş / çıkış eylemleri
\`src/app/actions.ts\` dosyasının **başı** (bazı import'lar sonraki derslerde kullanılacak; şimdilik "kullanılmıyor" uyarısı verebilir):
\`\`\`ts
"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { requireUser } from "@/lib/dal";
import {
  type ActionState,
  categorySchema,
  fieldErrors,
  formValues,
  loginSchema,
  registerSchema,
  transactionSchema,
} from "@/lib/validation";

const VARSAYILAN_KATEGORILER = ["Maaş", "Market", "Fatura", "Ulaşım", "Eğlence", "Diğer"];

// Kullanıcı var/yok bilgisini sızdırmamak için giriş hatası her zaman aynı mesajdır.
const GIRIS_HATASI = "E-posta veya parola hatalı";
\`\`\`

Ardından aynı dosyaya şu fonksiyonları yaz:
\`\`\`ts
export async function register(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = registerSchema.safeParse({ email: formData.get("email"), password: formData.get("password") });
  if (!parsed.success) return { errors: fieldErrors(parsed.error), values: formValues(formData) };
  const { email, password } = parsed.data;

  if (await prisma.user.findUnique({ where: { email } })) {
    return { errors: { email: ["Bu e-posta ile zaten bir hesap var"] }, values: formValues(formData) };
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email, passwordHash, categories: { create: VARSAYILAN_KATEGORILER.map((name) => ({ name })) } },
  });
  await createSession(user.id);
  redirect("/");
}
\`\`\`

\`\`\`ts
export async function login(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = loginSchema.safeParse({ email: formData.get("email"), password: formData.get("password") });
  if (!parsed.success) return { errors: fieldErrors(parsed.error), values: formValues(formData) };
  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  const ok = user ? await bcrypt.compare(parsed.data.password, user.passwordHash) : false;
  if (!user || !ok) return { message: GIRIS_HATASI, values: formValues(formData) };
  await createSession(user.id);
  redirect("/");
}
\`\`\`

\`\`\`ts
export async function logout() {
  await deleteSession();
  redirect("/giris");
}
\`\`\`

### Güvenlik ayrıntıları
- **Aynı hata mesajı**: kullanıcı yok ya da parola yanlış → ikisi de "E-posta veya parola hatalı". Aksi halde saldırgan hangi e-postaların kayıtlı olduğunu öğrenir (**kullanıcı numaralandırma**).
- Parola uzunluğu **en çok 72**: bcrypt 72 baytın ötesini yok sayar.
- Kayıtta varsayılan kategoriler **aynı yazma işleminde** (\`categories: { create: [...] }\`) oluşturulur.
- \`redirect()\` bir **istisna fırlatarak** çalışır; bu yüzden \`try/catch\` içine koyma.

## Formlar
**src/components/field.tsx**

\`\`\`tsx
/** Etiketli girdi + hata mesajı. Hata, aria-describedby ile girdiye bağlanır (ekran okuyucu için). */
export function Field({
  label, name, errors, children,
}: { label: string; name: string; errors?: string[]; children: React.ReactNode }) {
  const errId = \`\${name}-hata\`;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      {children}
      {errors?.length ? (
        <p id={errId} role="alert" className="text-sm text-red-600">{errors[0]}</p>
      ) : null}
    </div>
  );
}

export const inputClass = "rounded border border-slate-300 bg-white px-3 py-2 text-sm";
export const buttonClass =
  "rounded bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50";
\`\`\`

**src/components/auth-form.tsx**

\`\`\`tsx
"use client";

import { useActionState } from "react";
import type { ActionState } from "@/lib/validation";
import { Field, buttonClass, inputClass } from "./field";

export function AuthForm({
  action, submitLabel, newPassword,
}: { action: (s: ActionState, f: FormData) => Promise<ActionState>; submitLabel: string; newPassword?: boolean }) {
  const [state, formAction, pending] = useActionState(action, {});
  return (
    <form action={formAction} className="flex max-w-sm flex-col gap-4">
      {state.message && <p role="alert" className="rounded bg-red-50 p-2 text-sm text-red-700">{state.message}</p>}
      <Field label="E-posta" name="email" errors={state.errors?.email}>
        <input id="email" name="email" type="email" autoComplete="email" required defaultValue={state.values?.email} className={inputClass} />
      </Field>
      <Field label="Parola" name="password" errors={state.errors?.password}>
        <input id="password" name="password" type="password" required
          autoComplete={newPassword ? "new-password" : "current-password"} className={inputClass} />
      </Field>
      <button disabled={pending} className={buttonClass}>{pending ? "Gönderiliyor…" : submitLabel}</button>
    </form>
  );
}
\`\`\`

**src/app/giris/page.tsx**

\`\`\`tsx
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { login } from "../actions";

export default function GirisPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Giriş</h1>
      <AuthForm action={login} submitLabel="Giriş yap" />
      <p className="text-sm">Hesabın yok mu? <Link href="/kayit" className="underline">Kayıt ol</Link></p>
    </div>
  );
}
\`\`\`

**src/app/kayit/page.tsx**

\`\`\`tsx
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { register } from "../actions";

export default function KayitPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Kayıt ol</h1>
      <AuthForm action={register} submitLabel="Hesap oluştur" newPassword />
      <p className="text-sm">Zaten hesabın var mı? <Link href="/giris" className="underline">Giriş yap</Link></p>
    </div>
  );
}
\`\`\`

**src/app/layout.tsx**

\`\`\`tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { getUser } from "@/lib/dal";
import { logout } from "./actions";

export const metadata: Metadata = { title: "Finans Takipçisi", description: "Gelir ve gider takibi" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <nav aria-label="Ana menü" className="mx-auto flex max-w-4xl items-center gap-4 p-4">
            <Link href="/" className="font-semibold">Finans Takipçisi</Link>
            {user && (
              <>
                <Link href="/islemler" className="text-sm underline-offset-4 hover:underline">İşlemler</Link>
                <Link href="/kategoriler" className="text-sm underline-offset-4 hover:underline">Kategoriler</Link>
                <form action={logout} className="ml-auto">
                  <span className="mr-3 text-sm text-slate-500">{user.email}</span>
                  <button className="text-sm underline">Çıkış</button>
                </form>
              </>
            )}
          </nav>
        </header>
        <main className="mx-auto max-w-4xl p-4">{children}</main>
      </body>
    </html>
  );
}
\`\`\`


## React 19 tuzağı: form sıfırlanır
Sunucu eylemi bittiğinde React 19 **kontrolsüz formu sıfırlar**. Doğrulama hatasında kullanıcının yazdığı e-posta silinirse çok sinir bozucu olur. Çözüm: eylem yazılanları \`values\` ile geri döner, girdi \`defaultValue={state.values?.email}\` kullanır. (Bu hatayı referans projede uçtan uca testte yakaladık; ilk sürümde alanlar siliniyordu.)

## Kontrol
\`\`\`bash
npm run dev
# /kayit → kısa parola dene: hata görünmeli ve e-posta alanı DOLU kalmalı
# geçerli kayıt → "/" (özet) sayfasına yönlenmeli; tarayıcı çerezlerinde "oturum" (HttpOnly) görünmeli
# psql: select email, "passwordHash" from "User";   -- hash "$2b$12$..." ile başlamalı
\`\`\`


**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Parola veritabanında düz metin değil.
- [ ] Çerez \`HttpOnly\`.
- [ ] Hatalı giriş tek bir genel mesaj veriyor.
- [ ] Hata sonrası e-posta alanı silinmiyor.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-eylem": {
    body: `## Hedef
Form → **sunucu eylemi (server action)** → doğrulama → veritabanı → yönlendirme akışını kurmak.

## Sunucu eylemi nedir?
\`"use server"\` ile işaretli, sunucuda çalışan fonksiyon. Formun \`action\`'ına verirsin; Next.js arka planda bir **POST uç noktası** oluşturur. Yani her sunucu eylemi **herkese açık bir HTTP uç noktasıdır** — kullanıcı formu kullanmadan da doğrudan çağırabilir. Bu yüzden **her eylem kendi yetkisini ve girdisini doğrular.**

## İşlem eylemleri
\`src/app/actions.ts\` dosyasına ekle:
\`\`\`ts
export async function createTransaction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser(); // sunucu eylemi herkese açık bir uç noktadır: her seferinde yetkiyi doğrula
  const parsed = transactionSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { errors: fieldErrors(parsed.error), values: formValues(formData) };
  const { type, amount, date, categoryId, note } = parsed.data;

  // Kategori gerçekten bu kullanıcıya mı ait? (formdan gelen id'ye güvenme)
  const cat = await prisma.category.findFirst({ where: { id: categoryId, userId: user.id } });
  if (!cat) return { errors: { categoryId: ["Kategori bulunamadı"] }, values: formValues(formData) };

  await prisma.transaction.create({
    data: { type, amountKurus: amount, date: new Date(date), note, categoryId, userId: user.id },
  });
  revalidatePath("/");
  revalidatePath("/islemler");
  redirect("/islemler");
}
\`\`\`

\`\`\`ts
export async function deleteTransaction(formData: FormData) {
  const user = await requireUser();
  const id = String(formData.get("id") ?? "");
  // deleteMany + userId: başkasının kaydı eşleşmez, hata da fırlatmaz
  await prisma.transaction.deleteMany({ where: { id, userId: user.id } });
  revalidatePath("/");
  revalidatePath("/islemler");
}
\`\`\`

### Neden böyle?
1. **\`requireUser()\` her eylemin ilk satırı**: oturum yoksa işlem yapılmaz. Arayüzde butonu gizlemek güvenlik değildir.
2. **\`Object.fromEntries(formData)\` → \`safeParse\`**: \`parse\` hata fırlatır, \`safeParse\` sonucu döner; hatayı forma geri taşıyabiliriz.
3. **Sahiplik kontrolü**: formdan gelen \`categoryId\`'ye **güvenme**. Kullanıcı başkasının kategori id'sini gönderebilir; \`findFirst({ id, userId })\` ile doğrula.
4. **deleteMany({ id, userId })**: \`delete\` yalnızca \`id\` ile siler → başkasının kaydını silebilirsin (**IDOR** açığı). \`deleteMany\` + \`userId\` ile eşleşmezse **hiçbir şey olmaz**.
5. **revalidatePath**: önbelleğe alınmış sayfaları geçersiz kılar; liste güncel görünür.
6. \`redirect("/islemler")\` **en sonda** ve \`try/catch\` dışında.

## İşlem formu (istemci bileşeni)
**src/components/transaction-form.tsx**

\`\`\`tsx
"use client";

import { useActionState } from "react";
import { createTransaction } from "@/app/actions";
import { Field, buttonClass, inputClass } from "./field";

export function TransactionForm({ categories }: { categories: { id: string; name: string }[] }) {
  const [state, formAction, pending] = useActionState(createTransaction, {});
  const today = new Date().toISOString().slice(0, 10);
  return (
    <form action={formAction} className="grid max-w-lg gap-4">
      {state.message && <p role="alert" className="text-sm text-red-600">{state.message}</p>}
      <Field label="Tür" name="type" errors={state.errors?.type}>
        <select id="type" name="type" defaultValue={state.values?.type ?? "EXPENSE"} className={inputClass}>
          <option value="EXPENSE">Gider</option>
          <option value="INCOME">Gelir</option>
        </select>
      </Field>
      <Field label="Tutar (₺)" name="amount" errors={state.errors?.amount}>
        <input id="amount" name="amount" inputMode="decimal" placeholder="1.250,50" defaultValue={state.values?.amount} className={inputClass} />
      </Field>
      <Field label="Tarih" name="date" errors={state.errors?.date}>
        <input id="date" name="date" type="date" defaultValue={state.values?.date ?? today} className={inputClass} />
      </Field>
      <Field label="Kategori" name="categoryId" errors={state.errors?.categoryId}>
        <select id="categoryId" name="categoryId" className={inputClass} defaultValue={state.values?.categoryId ?? ""}>
          <option value="" disabled>Seç…</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </Field>
      <Field label="Not (isteğe bağlı)" name="note" errors={state.errors?.note}>
        <input id="note" name="note" maxLength={200} defaultValue={state.values?.note} className={inputClass} />
      </Field>
      <button disabled={pending} className={buttonClass}>{pending ? "Kaydediliyor…" : "Kaydet"}</button>
    </form>
  );
}
\`\`\`

- **useActionState(action, ilkDurum)** → \`[durum, formAction, bekliyor]\`. \`bekliyor\` iken düğme devre dışı (çift gönderimi önler).
- \`defaultValue={state.values?.x}\`: hatada yazılanlar korunur.
- Her \`Field\` hatayı \`role="alert"\` ile duyurur → ekran okuyucu kullanıcıları da hatayı öğrenir.
- Kategori \`<select>\`'inde \`value=""\` olan **disabled** seçenek gönderilmez → sunucu \`undefined\` görür; bu yüzden şemada \`error: "Kategori seçin"\` var.

## Yeni işlem sayfası
**src/app/islemler/yeni/page.tsx**

\`\`\`tsx
import { requireUser } from "@/lib/dal";
import { listCategories } from "@/lib/queries";
import { TransactionForm } from "@/components/transaction-form";

export default async function YeniIslemPage() {
  const user = await requireUser();
  const categories = await listCategories(user.id);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Yeni işlem</h1>
      <TransactionForm categories={categories} />
    </div>
  );
}
\`\`\`

Sunucu bileşeni veriyi çeker (kategoriler), istemci bileşeni etkileşimi yönetir. **Sınır:** yalnızca tarayıcıda gereken şey (\`useActionState\`) \`"use client"\` olur; geri kalanı sunucuda kalır.

## Sık hatalar
| Belirti | Neden |
|---|---|
| Form gönderince sayfa tam yenileniyor | \`action\` yerine \`onSubmit\`+\`preventDefault\` karışımı; \`useActionState\` kullan |
| Kategori hata mesajı İngilizce | \`z.string({error})\` yazılmadı |
| Silme çalışıyor ama liste eski | \`revalidatePath\` yok |
| \`redirect\` sonrası kod çalışmıyor | Normal: \`redirect\` istisna fırlatır |

## Görevin
\`updateTransaction\` eylemi yaz (id + aynı şema). **Sahiplik kontrolünü** (\`updateMany({ where: { id, userId } })\`) unutma ve bir **Vitest/E2E testi** düşün: başka kullanıcının id'siyle çağrılırsa ne olmalı?

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Geçersiz tutar Türkçe hata veriyor, form dolu kalıyor.
- [ ] Geçerli işlem kaydedilince \`/islemler\`'e gidiyor.
- [ ] "Neden \`deleteMany\`?" ve "Neden \`requireUser\` her eylemde?" sorularına cevap verebiliyorum.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-liste": {
    body: `## Hedef
Filtrelenebilir, sayfalanabilir **işlem listesi**. Filtre durumu **URL'de** yaşar.

## Neden URL'de durum?
Filtreyi \`useState\`'te tutarsan: sayfa yenilenince kaybolur, bağlantı paylaşılamaz, geri tuşu çalışmaz. URL'de (\`?ay=2026-11&tur=EXPENSE\`) tutarsan hepsi **bedavaya** gelir; ayrıca sunucu bileşeni filtreyi doğrudan okuyup veriyi çeker — **istemci JavaScript'i gerekmez**.

## Sayfa
**src/app/islemler/page.tsx**

\`\`\`tsx
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { listCategories, listTransactions, parseFilters } from "@/lib/queries";
import { formatTutar } from "@/lib/money";
import { deleteTransaction } from "../actions";
import { inputClass } from "@/components/field";

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function IslemlerPage({ searchParams }: { searchParams: SP }) {
  const user = await requireUser();
  const sp = await searchParams;
  const f = parseFilters(sp);
  const [{ items, total, pageCount }, categories] = await Promise.all([
    listTransactions(user.id, f),
    listCategories(user.id),
  ]);

  // Filtreyi koruyarak sayfa/CSV bağlantısı üret
  const qs = (extra: Record<string, string | number>) => {
    const p = new URLSearchParams();
    if (f.ay) p.set("ay", f.ay);
    if (f.tur) p.set("tur", f.tur);
    if (f.kategori) p.set("kategori", f.kategori);
    for (const [k, v] of Object.entries(extra)) p.set(k, String(v));
    return p.toString();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">İşlemler</h1>
        <Link href="/islemler/yeni" className="rounded bg-slate-900 px-3 py-2 text-sm text-white">Yeni işlem</Link>
      </div>

      {/* GET formu: filtre durumu URL'de yaşar → paylaşılabilir, geri tuşu çalışır */}
      <form className="flex flex-wrap items-end gap-3" method="get">
        <label className="text-sm">Ay <input type="month" name="ay" defaultValue={f.ay} className={inputClass} /></label>
        <label className="text-sm">Tür
          <select name="tur" defaultValue={f.tur ?? ""} className={inputClass}>
            <option value="">Hepsi</option><option value="INCOME">Gelir</option><option value="EXPENSE">Gider</option>
          </select>
        </label>
        <label className="text-sm">Kategori
          <select name="kategori" defaultValue={f.kategori ?? ""} className={inputClass}>
            <option value="">Hepsi</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
        <button className="rounded border px-3 py-2 text-sm">Filtrele</button>
        <a href={\`/api/disa-aktar?\${qs({})}\`} className="text-sm underline">CSV indir</a>
      </form>

      {items.length === 0 ? (
        <p className="rounded border border-dashed p-6 text-center text-slate-500">
          Bu filtreyle işlem yok. <Link href="/islemler/yeni" className="underline">İlk işlemini ekle</Link>.
        </p>
      ) : (
        <table className="w-full text-left text-sm">
          <caption className="sr-only">İşlem listesi</caption>
          <thead><tr className="border-b">
            <th scope="col" className="py-2">Tarih</th><th scope="col">Kategori</th>
            <th scope="col">Not</th><th scope="col" className="text-right">Tutar</th><th scope="col"><span className="sr-only">Eylemler</span></th>
          </tr></thead>
          <tbody>
            {items.map((t) => (
              <tr key={t.id} className="border-b">
                <td className="py-2">{t.date.toLocaleDateString("tr-TR", { timeZone: "UTC" })}</td>
                <td>{t.category.name}</td>
                <td className="max-w-48 truncate">{t.note}</td>
                <td className={\`text-right \${t.type === "INCOME" ? "text-green-700" : "text-red-700"}\`}>
                  {t.type === "INCOME" ? "+" : "−"}{formatTutar(t.amountKurus)}
                </td>
                <td className="text-right">
                  <form action={deleteTransaction}>
                    <input type="hidden" name="id" value={t.id} />
                    <button className="text-xs underline" aria-label={\`\${t.note || t.category.name} işlemini sil\`}>Sil</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav aria-label="Sayfalama" className="flex items-center gap-4 text-sm">
        {f.sayfa > 1 && <Link href={\`/islemler?\${qs({ sayfa: f.sayfa - 1 })}\`}>← Önceki</Link>}
        <span>Sayfa {f.sayfa} / {pageCount} ({total} kayıt)</span>
        {f.sayfa < pageCount && <Link href={\`/islemler?\${qs({ sayfa: f.sayfa + 1 })}\`}>Sonraki →</Link>}
      </nav>
    </div>
  );
}
\`\`\`


## Dikkat edilecekler
- Next.js 16'da \`searchParams\` **Promise**'tir: \`const sp = await searchParams\`.
- Filtre formu \`method="get"\`: tarayıcı değerleri URL'ye yazar. JS kapalı olsa bile çalışır (**aşamalı geliştirme**).
- \`qs()\` yardımcısı mevcut filtreyi koruyarak sayfa/CSV bağlantısı üretir; \`URLSearchParams\` değerleri **kendisi kaçırır** (elle \`+\` ile birleştirme).
- **Boş durum** ayrı tasarlanır: kullanıcıya "ne yapabilirim?" söyler.
- Tablo erişilebilirliği: \`<caption class="sr-only">\`, \`scope="col"\`, silme düğmesinde \`aria-label\` (aynı "Sil" yazan 10 düğmeyi ekran okuyucu ayırt edemez).
- Tutar rengi **tek başına** anlam taşımaz: \`+\`/\`−\` işareti de var (renk körlüğü).
- Tarih gösterimi \`timeZone: "UTC"\`: \`@db.Date\` UTC gece yarısı olarak gelir; yerel saat dilimiyle göstersek bir gün kayabilir.

## Sık hatalar
| Belirti | Neden |
|---|---|
| Filtre uygulayınca sayfa 2'de boş liste | Filtre değişince \`sayfa\` 1'e dönmeli (form gönderimi \`sayfa\` taşımaz → 1) |
| \`searchParams.ay\` tip hatası | Değer metin, metin dizisi ya da undefined olabilir; \`parseFilters\` ile daralt |
| Tarih bir gün kaymış | Gösterimde saat dilimini UTC'ye sabitle |

## Görevin
Liste başlığına **sıralama** ekle (\`?sirala=tutar\`), değerini \`parseFilters\`'ta **beyaz listeyle** doğrula (yalnızca \`tarih\`/\`tutar\`), \`orderBy\`'a bağla.

## Kontrol
\`\`\`bash
# 12+ işlem ekle → "Sonraki →" görünür
# /islemler?tur=EXPENSE&sayfa=2 adresini doğrudan aç → çalışmalı
# /islemler?sayfa=-5&ay=bozuk → çökmemeli (1. sayfa, filtre yok)
\`\`\`


**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Filtre URL'de, geri/ileri tuşları çalışıyor.
- [ ] Geçersiz URL parametreleri sayfayı bozmuyor.
- [ ] Boş durum ve sayfalama görünüyor.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-ozet": {
    body: `## Hedef
Aylık **özet panosu** ve **kategori yönetimi**.

## Özet sayfası
**src/app/page.tsx**

\`\`\`tsx
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { currentMonth, monthSummary } from "@/lib/queries";
import { formatTutar } from "@/lib/money";

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function OzetPage({ searchParams }: { searchParams: SP }) {
  const user = await requireUser();
  const sp = await searchParams;
  const ayParam = typeof sp.ay === "string" && /^\\d{4}-(0[1-9]|1[0-2])$/.test(sp.ay) ? sp.ay : undefined;
  const ay = ayParam ?? currentMonth();
  const s = await monthSummary(user.id, ay);
  const max = Math.max(1, ...s.categories.map((c) => c.kurus));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Aylık özet</h1>
        <form method="get"><input type="month" name="ay" defaultValue={ay} aria-label="Ay seç"
          className="rounded border px-2 py-1 text-sm" /> <button className="text-sm underline">Göster</button></form>
      </div>

      <dl className="grid gap-3 sm:grid-cols-3">
        <div className="rounded border bg-white p-4"><dt className="text-sm text-slate-500">Gelir</dt><dd className="text-xl font-semibold text-green-700">{formatTutar(s.income)}</dd></div>
        <div className="rounded border bg-white p-4"><dt className="text-sm text-slate-500">Gider</dt><dd className="text-xl font-semibold text-red-700">{formatTutar(s.expense)}</dd></div>
        <div className="rounded border bg-white p-4"><dt className="text-sm text-slate-500">Bakiye</dt><dd className="text-xl font-semibold">{formatTutar(s.balance)}</dd></div>
      </dl>

      <section aria-labelledby="kat-baslik">
        <h2 id="kat-baslik" className="mb-2 font-medium">Kategoriye göre gider</h2>
        {s.categories.length === 0 ? (
          <p className="text-sm text-slate-500">Bu ay gider yok. <Link href="/islemler/yeni" className="underline">İşlem ekle</Link></p>
        ) : (
          <ul className="flex flex-col gap-2">
            {s.categories.map((c) => (
              <li key={c.name} className="text-sm">
                <div className="flex justify-between"><span>{c.name}</span><span>{formatTutar(c.kurus)}</span></div>
                {/* Çubuk yalnızca görsel; sayısal değer metinle zaten veriliyor */}
                <div className="h-2 rounded bg-slate-200" aria-hidden="true">
                  <div className="h-2 rounded bg-slate-900" style={{ width: \`\${(c.kurus / max) * 100}%\` }} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
\`\`\`

- Hesaplama \`monthSummary\` içinde: gelir/gider toplamı ve kategori dağılımı veritabanında \`groupBy\` ile hesaplanır; sayfa yalnızca gösterir.
- **Grafik erişilebilirliği:** çubuklar \`aria-hidden\` (yalnızca görsel), **sayısal değer metin olarak** da yazılı. Grafiği göremeyen biri aynı bilgiyi alır. \`dl/dt/dd\` ile "Gelir/Gider/Bakiye" anlamsal olarak etiketlenir.
- Çubuk genişliği \`kurus / max\`: en büyük kategori %100. \`Math.max(1, ...)\` sıfıra bölmeyi önler.
- Ay seçici \`GET\` formu: yine URL'de durum.

## Kategori yönetimi
Eylemler (\`actions.ts\`'e ekle):
\`\`\`ts
export async function createCategory(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();
  const parsed = categorySchema.safeParse({ name: formData.get("name") });
  if (!parsed.success) return { errors: fieldErrors(parsed.error), values: formValues(formData) };
  const exists = await prisma.category.findUnique({
    where: { userId_name: { userId: user.id, name: parsed.data.name } },
  });
  if (exists) return { errors: { name: ["Bu kategori zaten var"] }, values: formValues(formData) };
  await prisma.category.create({ data: { name: parsed.data.name, userId: user.id } });
  revalidatePath("/kategoriler");
  return { message: "Kategori eklendi" };
}
\`\`\`

\`\`\`ts
export async function deleteCategory(formData: FormData) {
  const user = await requireUser();
  const id = String(formData.get("id") ?? "");
  const used = await prisma.transaction.count({ where: { categoryId: id, userId: user.id } });
  if (used > 0) return; // işlemi olan kategori silinmez (veritabanı da Restrict ile korur)
  await prisma.category.deleteMany({ where: { id, userId: user.id } });
  revalidatePath("/kategoriler");
}
\`\`\`

İstemci formu:
**src/components/category-form.tsx**

\`\`\`tsx
"use client";

import { useActionState } from "react";
import { createCategory } from "@/app/actions";
import { Field, buttonClass, inputClass } from "./field";

export function CategoryForm() {
  const [state, formAction, pending] = useActionState(createCategory, {});
  return (
    <form action={formAction} className="flex max-w-sm items-end gap-3">
      <Field label="Yeni kategori" name="name" errors={state.errors?.name}>
        <input id="name" name="name" maxLength={40} defaultValue={state.values?.name} className={inputClass} />
      </Field>
      <button disabled={pending} className={buttonClass}>Ekle</button>
      {state.message && <p role="status" className="text-sm text-green-700">{state.message}</p>}
    </form>
  );
}
\`\`\`

Sayfa:
**src/app/kategoriler/page.tsx**

\`\`\`tsx
import { requireUser } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { CategoryForm } from "@/components/category-form";
import { deleteCategory } from "../actions";

export default async function KategorilerPage() {
  const user = await requireUser();
  // _count ile her kategorinin işlem sayısı tek sorguda gelir
  const categories = await prisma.category.findMany({
    where: { userId: user.id },
    orderBy: { name: "asc" },
    include: { _count: { select: { transactions: true } } },
  });
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Kategoriler</h1>
      <CategoryForm />
      <ul className="divide-y rounded border bg-white">
        {categories.map((c) => (
          <li key={c.id} className="flex items-center justify-between p-3 text-sm">
            <span>{c.name} <span className="text-slate-500">({c._count.transactions} işlem)</span></span>
            {c._count.transactions === 0 && (
              <form action={deleteCategory}>
                <input type="hidden" name="id" value={c.id} />
                <button className="text-xs underline" aria-label={\`\${c.name} kategorisini sil\`}>Sil</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### Kural: işlemi olan kategori silinemez
Üç katmanlı koruma: (1) arayüz silme düğmesini göstermez, (2) eylem \`count\` ile kontrol eder, (3) şema \`onDelete: Restrict\` ile **veritabanı** reddeder. Arayüz kaçırılsa bile veritabanı bütünlüğü korur. \`_count\` ile sayılar **tek sorguda** gelir (N+1 yok).

## Sık hatalar
| Hata | Düzeltme |
|---|---|
| Boş ayda özet \`NaN%\`/\`Infinity%\` | Sıfıra bölmeyi \`Math.max(1, ...)\` ile engelle |
| Toplamı JS'te \`reduce\` ile hesaplamak | 10 bin satırı çekmek yerine \`groupBy\` + \`_sum\` |
| Yalnızca renkle anlam | Metin/ikon da ekle |

## Görevin
Özet sayfasına **önceki ayla karşılaştırma** ekle ("Giderler geçen aya göre %12 arttı"). Sıfıra bölme ve "geçen ay veri yok" durumlarını tasarla; hesaplamayı **saf bir fonksiyona** çıkarıp testle.

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Gelir/gider/bakiye doğru (elle topla ve karşılaştır).
- [ ] Boş ayda sayfa düzgün görünüyor.
- [ ] İşlemi olan kategori silinemiyor.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-csv": {
    body: `## Hedef
**Route Handler** ile CSV dışa aktarma ve **yetkilendirmenin** son halkaları: \`proxy.ts\` ve sahiplik denetimi.

## CSV rotası
**src/app/api/disa-aktar/route.ts**

\`\`\`ts
import { NextResponse } from "next/server";
import { getUser } from "@/lib/dal";
import { allForExport, parseFilters } from "@/lib/queries";
import { kurusToPlain } from "@/lib/money";
import { toCsv } from "@/lib/csv";

export async function GET(request: Request) {
  const user = await getUser();
  if (!user) return new NextResponse("Yetkisiz", { status: 401 });

  const sp = Object.fromEntries(new URL(request.url).searchParams);
  const { ay, tur, kategori } = parseFilters(sp); // sayfa dışarı aktarımda önemsiz
  const filters = { ay, tur, kategori };
  const rows = await allForExport(user.id, filters);

  const csv = toCsv([
    ["Tarih", "Tür", "Kategori", "Tutar", "Not"],
    ...rows.map((t) => [
      t.date.toISOString().slice(0, 10),
      t.type === "INCOME" ? "Gelir" : "Gider",
      t.category.name,
      kurusToPlain(t.amountKurus),
      t.note,
    ]),
  ]);
  return new NextResponse("﻿" + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="islemler.csv"',
    },
  });
}
\`\`\`

- **Route Handler** = \`route.ts\` içinde \`GET/POST...\` fonksiyonları; sayfa değil HTTP yanıtı döner.
- İlk iş **kimlik kontrolü**: \`getUser()\` yoksa \`401\`. (Proxy'ye güvenme — aşağıya bak.)
- Filtreler aynen \`parseFilters\`'tan geçer; sayfalama dışarı aktarımda yoktur.
- \`\\uFEFF\` (BOM): Excel'in UTF-8 Türkçe karakterleri (\`ş, ğ, İ\`) doğru açması için.
- \`Content-Disposition: attachment\` tarayıcıyı dosyayı **indirmeye** zorlar.
- Hücreler \`toCsv\` ile kaçırılır ve **formül enjeksiyonuna** karşı korunur (testli).

## \`proxy.ts\`: iyimser yönlendirme
**src/proxy.ts**

\`\`\`ts
import { NextResponse, type NextRequest } from "next/server";

/**
 * İYİMSER kontrol: oturum çerezi hiç yoksa giriş sayfasına yönlendirir (hızlı, veritabanına gitmez).
 * Gerçek yetkilendirme burada DEĞİL, veriye dokunan her yerde (dal.ts / sunucu eylemleri) yapılır.
 */
export function proxy(request: NextRequest) {
  if (!request.cookies.has("oturum")) {
    return NextResponse.redirect(new URL("/giris", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!giris|kayit|_next/static|_next/image|favicon.ico).*)"],
};
\`\`\`

Next.js 16'da eski \`middleware.ts\` **proxy.ts** oldu. Önemli ilke: proxy **yalnızca iyimser kontroldür** — çerez *var mı* diye bakar (hızlı, veritabanına gitmez). **Çerez sahte olabilir.** Gerçek yetkilendirme, veriye dokunan her yerde (DAL, eylemler, route handler) yapılır. Proxy "kapıdaki görevli", DAL "kasadaki kilit"tir; ikisi de gerekir ama güvenlik **kilide** bağlıdır.

\`matcher\` içindeki negatif ifade \`giris\`, \`kayit\` ve statik dosyaları dışarıda bırakır; yoksa giriş sayfasına yönlendirme döngüsü oluşur.

## Yetkilendirme denetim listesi (kendi kodunu bununla tara)
| Yer | Kontrol | Bu projede |
|---|---|---|
| Sayfa (sunucu bileşeni) | \`requireUser()\` | tüm korunan sayfalar |
| Sunucu eylemi | \`requireUser()\` + sahiplik | \`actions.ts\` |
| Route handler | \`getUser()\` → 401 | \`disa-aktar\` |
| Sorgu | \`where: { userId }\` | \`queries.ts\` |
| Silme/güncelleme | \`...Many({ id, userId })\` | \`deleteTransaction/Category\` |
| Formdan gelen ilişki id'si | sahiplik doğrula | \`createTransaction\` |

## Sık hatalar
| Belirti | Neden |
|---|---|
| CSV'de Türkçe karakterler bozuk | BOM yok / charset belirtilmemiş |
| CSV tarayıcıda metin olarak açılıyor | \`Content-Disposition: attachment\` yok |
| Giriş sayfası sonsuz yönlendirme | \`proxy\` matcher'ı \`giris\`'i dışlamıyor |
| Anonim kullanıcı CSV istediğinde 401 yerine 307 | Proxy önce yakalar (beklenen); yine de rota kendi kontrolünü yapar |

## Görevin
Güvenlik açığını **kendin dene**: \`deleteTransaction\`'daki \`deleteMany\`'yi geçici olarak \`delete({ where: { id } })\`'e çevir; ikinci bir kullanıcıyla birinci kullanıcının işlem id'sini forma elle yazıp gönder. Silinebildiğini gör (IDOR), sonra düzelt ve bunu yakalayan bir E2E testi yaz.

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] CSV Excel'de Türkçe karakterlerle açılıyor.
- [ ] Giriş yapmadan \`/api/disa-aktar\` veri vermiyor.
- [ ] Yukarıdaki denetim listesindeki her satırı kodda gösterebiliyorum.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-e2e": {
    body: `## Hedef
**Test piramidi**nin üst katmanı: gerçek tarayıcıda, gerçek uygulamaya karşı **kullanıcı yolculuğunu** doğrulamak.

## Katmanlar
| Katman | Neyi doğrular | Bu projede |
|---|---|---|
| Birim | Saf mantık (hızlı, çok) | \`tests/*.test.ts\` (27 test) |
| Uçtan uca (E2E) | Tüm yığın birlikte (yavaş, az) | \`e2e/smoke.mjs\` |

Çok birim testi + az ama kritik E2E: hızlı geri bildirim ve gerçekçi güven.

## Duman testi
**e2e/smoke.mjs**

\`\`\`js
// Uçtan uca duman testi. Çalıştırma: uygulama http://localhost:3000 adresinde açıkken \`node e2e/smoke.mjs\`
// Not: test kullanıcıları her çalıştırmada benzersiz e-postayla oluşturulur; veritabanını silmene gerek yok.
import { chromium } from "playwright";
import assert from "node:assert/strict";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const stamp = Date.now();
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const newPage = async () => (await browser.newContext({ baseURL: BASE })).newPage();
const path = (p) => new URL(p.url()).pathname;
const ay = new Date().toISOString().slice(0, 7);

async function kayit(p, email) {
  await p.goto("/kayit");
  await p.fill("#email", email);
  await p.fill("#password", "parola12345");
  await p.click("button");
  await p.waitForFunction(() => location.pathname === "/");
}

async function islemEkle(p, { type, amount, category, date, note }) {
  await p.goto("/islemler/yeni");
  await p.selectOption("#type", type);
  await p.fill("#amount", amount);
  await p.fill("#date", date);
  await p.selectOption("#categoryId", { label: category });
  await p.fill("#note", note);
  await p.click('button:has-text("Kaydet")');
  await p.waitForFunction(() => location.pathname === "/islemler");
}

try {
  const a = await newPage();

  // 1) Girişsiz kullanıcı korunan sayfaya giremez
  await a.goto("/islemler");
  assert.equal(path(a), "/giris");

  // 2) Doğrulama hatası görünür ve girilen e-posta KORUNUR
  await a.goto("/kayit");
  await a.fill("#email", \`a\${stamp}@ornek.com\`);
  await a.fill("#password", "123");
  await a.click("button");
  await a.waitForSelector("p[role=alert]");
  assert.match(await a.textContent("p[role=alert]"), /en az 8/);
  assert.equal(await a.inputValue("#email"), \`a\${stamp}@ornek.com\`);

  // 3) Kayıt başarılı
  await a.fill("#password", "parola12345");
  await a.click("button");
  await a.waitForFunction(() => location.pathname === "/");

  // 4) Geçersiz tutar → Türkçe hata
  await a.goto("/islemler/yeni");
  await a.fill("#amount", "abc");
  await a.click('button:has-text("Kaydet")');
  await a.waitForSelector("p[role=alert]");
  assert.match((await a.locator("p[role=alert]").allTextContents()).join(" "), /Geçerli bir tutar/);

  // 5) Geçerli işlemler ve özet
  await islemEkle(a, { type: "INCOME", amount: "25.000,00", category: "Maaş", date: \`\${ay}-01\`, note: "Maaş" });
  await islemEkle(a, { type: "EXPENSE", amount: "1.250,50", category: "Market", date: \`\${ay}-02\`, note: "Haftalık" });
  await islemEkle(a, { type: "EXPENSE", amount: "300", category: "Fatura", date: \`\${ay}-03\`, note: '=HYPERLINK("http://x")' });
  await a.goto("/islemler");
  assert.equal(await a.locator("tbody tr").count(), 3);
  await a.goto("/islemler?tur=EXPENSE");
  assert.equal(await a.locator("tbody tr").count(), 2);
  await a.goto("/");
  const ozet = (await a.locator("dl").innerText()).replace(/\\s+/g, " ");
  assert.match(ozet, /25\\.000,00/);
  assert.match(ozet, /1\\.550,50/);
  assert.match(ozet, /23\\.449,50/);

  // 6) CSV: giriş yapmış kullanıcı indirir, formül hücresi etkisizleştirilir
  const csv = await (await a.context().request.get("/api/disa-aktar")).text();
  assert.match(csv, /Tarih,Tür,Kategori,Tutar,Not/);
  assert.match(csv, /'=HYPERLINK/);

  // 7) İkinci kullanıcı birincinin verisini GÖREMEZ
  const b = await newPage();
  await kayit(b, \`b\${stamp}@ornek.com\`);
  await b.goto("/islemler");
  assert.equal(await b.locator("tbody tr").count(), 0);

  // 8) Silme ve kategori kuralı
  await a.goto("/islemler");
  await a.locator('button:has-text("Sil")').first().click();
  await a.waitForTimeout(800);
  await a.reload();
  assert.equal(await a.locator("tbody tr").count(), 2);
  await a.goto("/kategoriler");
  assert.equal(await a.locator('li:has-text("Market") button').count(), 0); // işlemi olan kategori silinemez

  console.log("TÜM KONTROLLER GEÇTİ");
} finally {
  await browser.close();
}
\`\`\`


### Bu test neyi yakalar?
- Girişsiz yönlendirme, doğrulama hatası ve **form değerinin korunması** (React 19 sıfırlama hatamızı bu test yakaladı).
- Para toplamı (\`25.000,00 − 1.550,50 = 23.449,50\`) arayüzde doğru.
- **Veri yalıtımı:** ikinci kullanıcı birincinin işlemlerini görmüyor.
- CSV'de **formül enjeksiyonu** etkisiz (\`'=HYPERLINK\`).
- Silme ve "işlemi olan kategori silinmez" kuralı.

## Çalıştırma
\`\`\`bash
npx playwright install chromium        # bir kez
npm run build && npm start               # bir terminalde (üretim derlemesi)
node e2e/smoke.mjs                       # öteki terminalde → "TÜM KONTROLLER GEÇTİ"
\`\`\`

- E2E'yi **üretim derlemesine** (\`next start\`) karşı çalıştır; geliştirme modu daha yavaş ve farklı davranır.
- Her çalıştırmada **benzersiz e-posta** (\`Date.now()\`): veritabanını temizlemeden tekrar çalışır.
- Kırılgan testlerin kaynağı: sabit \`sleep\`. Mümkünse bir **koşulu bekle** (\`waitForFunction\`, \`waitForSelector\`).
- Seçici öncelik sırası: rol/etiket > \`id\` > metin > CSS sınıfı. Etiketle seçmek hem testi sağlamlaştırır hem erişilebilirliği zorlar.

## Sık hatalar
| Belirti | Neden |
|---|---|
| \`p[role=alert]\` yerine \`[role=alert]\` seçince boş metin | Next.js'in rota duyuru öğesi de \`role=alert\` taşır; öğeyi etiketle daralt |
| Testler birbirine bağlı | Her testin kendi verisini oluşturmalı |
| CI'da geçip yerelde kalıyor | Zaman duyarlılık: sabit bekleme yerine koşul bekle |

## Görevin
Silme testini genişlet: **birinci kullanıcının işlem id'sini ikinci kullanıcı oturumuyla silmeyi dene** ve işlemin hâlâ durduğunu doğrula (IDOR regresyon testi).

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] \`npm test\` yeşil, \`node e2e/smoke.mjs\` "TÜM KONTROLLER GEÇTİ" yazıyor.
- [ ] Birim ve E2E'nin farkını bir cümleyle söyleyebiliyorum.
- [ ] Bir kırılgan test örneği ve çözümünü anlatabiliyorum.`,
    verification: `Bu dersteki kod bloğu bu metinden **otomatik çıkarılıp temiz bir create-next-app projesine yazıldı** ve çalıştırıldı (Next.js 16.2.11, React 19.2.4, Prisma 7.10, Zod 4, jose 6, Vitest 5): \`tsc --noEmit\`, ESLint, 27 Vitest testi, \`next build\` ve gerçek tarayıcıda Playwright uçtan uca testi geçti. Next.js davranışları paketle gelen resmî dokümanlarla karşılaştırıldı (\`authentication\`, \`forms\`, \`proxy\`).`,
  },
  "at-yayin": {
    body: `## Hedef
Uygulamayı **canlıya almak**: Vercel + Neon (Postgres).

> **Doğrulama notu:** Bu dersin Vercel/Neon adımları bu ortamda **çalıştırılmadı**; aşağıdaki adımlar standart akıştır ve resmî dokümanlarla karşılaştırarak ilerlemelisin. Üretim derlemesi (\`next build\`) ve yerel çalıştırma ise doğrulandı.

## Hazırlık
1. **Build betiği**: \`package.json\` içinde
\`\`\`json
"scripts": {
  "build": "prisma migrate deploy && next build",
  "test": "vitest run",
  "postinstall": "prisma generate"
}
\`\`\`

   \`migrate deploy\` yalnızca **commit'lenmiş** migrasyonları uygular (üretimde \`migrate dev\` **kullanılmaz**; o geliştirme içindir ve veritabanını sıfırlamayı önerebilir).
2. \`prisma/migrations/\` klasörü **git'e girer**; \`src/generated\` girmez.
3. Sır yönetimi: \`.env\` repoda yok. Üretim değerleri platformun **Environment Variables** ekranında.

## Neon (veritabanı)
- Bir proje oluştur; **bağlantı dizesini** (havuzlu/pooled) kopyala. Dizi sonunda genelde \`?sslmode=require\` bulunur — bırak.
- Üretim için ayrı bir veritabanı kullan; geliştirme verisiyle karıştırma.

## Vercel
1. Reponu içe aktar (Framework: Next.js otomatik algılanır).
2. Environment Variables: \`DATABASE_URL\` (Neon), \`SESSION_SECRET\` (**yeni** üret: \`openssl rand -base64 32\`; geliştirmedekini kullanma).
3. Deploy. Build sırasında \`prisma migrate deploy\` şemayı Neon'a uygular.
4. **Önizleme (preview) dağıtımları** PR başına gelir; üretim veritabanını önizlemede kullanma — ayrı bir Neon dalı/veritabanı kullan.

## Üretim kontrol listesi
| Madde | Neden |
|---|---|
| \`SESSION_SECRET\` yeni ve gizli | Bilinen anahtarla herkes oturum üretebilir |
| Çerez \`secure: true\` (üretimde) | Kodda \`NODE_ENV === "production"\` ile açılır |
| Hata mesajlarında iç ayrıntı yok | Giriş hatası genel; sunucu hatası kullanıcıya sızmaz |
| Yedekleme/geri yükleme planı | Veritabanı sağlayıcısının özelliklerini öğren |
| Günlük/hata izleme | Üretimde sorunu görmeden düzeltemezsin (Vercel günlükleri, Sentry vb.) |

## Sık hatalar
| Belirti | Neden |
|---|---|
| Build: \`Cannot find module '@/generated/prisma/client'\` | \`postinstall: prisma generate\` yok |
| Çalışma zamanında \`DATABASE_URL\` hatası | Değişken yalnızca "Production" kapsamında; Preview'a da ekle |
| \`migrate deploy\` hatası: şema uyuşmazlığı | Üretim veritabanına elle değişiklik yapılmış; migrasyon geçmişini kontrol et |

## Görevin
Bir PR aç; önizleme adresinde **kayıt → işlem ekle → CSV indir** akışını elle dene. Sonra \`e2e/smoke.mjs\`'i \`BASE_URL=<önizleme adresi>\` ile çalıştır.

**Kontrol listesi — bu ders bitti sayılır:**
- [ ] Canlı adreste kayıt/giriş/işlem/CSV çalışıyor.
- [ ] Üretimde \`SESSION_SECRET\` geliştirmedekinden farklı.
- [ ] \`migrate dev\` ile \`migrate deploy\` arasındaki farkı söyleyebiliyorum.`,
    verification: `Yerel çalıştırma ve üretim derlemesi (\`next build\`) doğrulandı. **Vercel/Neon adımları bu ortamda çalıştırılmadı**; standart akış olarak yazıldı — ilgili platform dokümanlarıyla karşılaştır: [Vercel Docs](https://vercel.com/docs), [Neon Docs](https://neon.com/docs), [Prisma — migrate deploy](https://www.prisma.io/docs/orm/prisma-migrate).`,
  },
  "at-genislet": {
    body: `## Hedef
Projeyi **kendi başına** genişletmek. Bu noktadan sonra rehber yok; yukarıdaki kalıpları yeni özelliklere uygularsın.

## Genişletme görevleri (kolaydan zora)
Her görev için **kabul ölçütü**, **hangi dosyalara dokunacağın** ve **hangi testi ekleyeceğin** sende.

| # | Görev | Dokunacağın yerler | Kabul ölçütü |
|---|---|---|---|
| 1 | İşlem **düzenleme** sayfası | \`actions.ts\`, \`islemler/[id]/duzenle/page.tsx\` | Başkasının işlemini düzenleyemem (test) |
| 2 | **Bütçe limiti**: kategori başına aylık limit, aşılınca uyarı | şema (yeni \`Budget\` modeli) + migrasyon, \`queries.ts\`, özet sayfası | Limit aşımı özet sayfasında metinle belirtilir |
| 3 | **Tekrarlayan işlem** (kira, abonelik) | şema, bir "oluştur" eylemi | Aynı ay iki kez oluşmaz (benzersiz kısıt) |
| 4 | **Arama**: nota göre | \`parseFilters\` + \`whereFor\` (\`contains\`, \`mode: "insensitive"\`) | Özel karakterlerle çökmez |
| 5 | **Parola değiştirme** + tüm oturumları kapatma | şema (\`sessionVersion\` alanı), \`session.ts\` | Eski çerezler geçersiz olur |
| 6 | **İstek sınırlama** (giriş denemesi) | \`login\` eylemi | 5 başarısız denemeden sonra kısa bekleme |

## Nasıl çalışmalı?
1. Önce **kabul ölçütünü yaz**, sonra **testi** (saf mantık varsa Vitest, yolculuk varsa E2E).
2. En küçük çalışan dilimi yap (şema → sorgu → eylem → arayüz), her adımda \`tsc\` + testler.
3. Bitince \`Kontrol listesi\`: yetki, sahiplik, doğrulama, boş/yükleme/hata durumu, erişilebilirlik.

## Kendini değerlendir
| Soru | Evet/Hayır |
|---|---|
| Yeni her sorgu \`userId\` ile mi başlıyor? | |
| Yeni her eylem \`requireUser()\` ile mi başlıyor? | |
| Girdiler Zod'dan geçiyor mu? | |
| Hata/boş/yükleme durumları var mı? | |
| Klavyeyle kullanılabiliyor mu? | |
| En az bir test eklendi mi? | |

Bu tabloya "Evet" diyebiliyorsan, bir işte **kıdemsiz değil, bağımsız** bir geliştirici gibi çalışıyorsun.

## Bir sonraki adım
Ana müfredattaki ilgili dersleri bu proje üzerinden tekrar oku: **Web Güvenliği**, **Test ve Performans**, **Next.js ve Full-Stack**. Artık her biri kendi yazdığın bir koda bağlanıyor.`,
    verification: `Görev tablosu bu derste yazılmış öneridir; her görevin çözümü referans projede **uygulanmadı** (bilerek: öğrencinin kendi yapması için). Arama için Prisma \`contains\`/\`mode: "insensitive"\` ve oturum sürüm alanı yaklaşımı genel bilgidir; kendi projende denenip doğrulanmalıdır.`,
  },
};

export const reactAtolyeQuizzes: Record<string, QuizQuestion[]> = {
  w1: [
    qz("Bu projede para neden kuruş cinsinden tam sayı olarak saklanır?", ["Ondalıklı (float) sayılar ikili tabanda tam gösterilemez; toplamlarda hata çıkar", "Tam sayılar daha okunaklıdır", "Veritabanı ondalık desteklemez", "Prisma float'ı yasaklar"], 0),
    qz("Prisma 7'de veritabanı bağlantı adresi nerede tanımlanır?", ["prisma.config.ts içinde", "schema.prisma içinde url alanında", "package.json içinde", "next.config.ts içinde"], 0),
    qz("`server-only` paketinin amacı nedir?", ["Sunucuya özel dosyanın istemci koduna sızmasını derleme zamanında engellemek", "Sunucuyu hızlandırmak", "API anahtarı üretmek", "Cache'i temizlemek"], 0),
    qz("Vitest kurarken npm ERESOLVE hatası alınırsa ilk bakılacak şey nedir?", ["@types/node sürümünün Vitest'in peer aralığına uyması", "Node'u silmek", "React'i düşürmek", "--force ile her zaman devam etmek"], 0),
    qz("Kullanıcı hikâyesine 'kabul ölçütü' yazmanın faydası nedir?", ["Ne zaman bittiğini ve neyin test edileceğini önceden netleştirir", "Kodu kısaltır", "Tasarımı değiştirir", "Hiçbir faydası yoktur"], 0),
    qz("Next.js 16'da eski eğitimlerdeki kod neden çalışmayabilir?", ["middleware→proxy, params/cookies'in Promise olması gibi kırıcı değişiklikler var", "Next.js artık React kullanmıyor", "TypeScript desteklenmiyor", "Tailwind kaldırıldı"], 0),
  ],
  w2: [
    qz("Türkçe girilen '1.250,50' için `parseFloat` neden yanlıştır?", ["1.25 döner; nokta ondalık sanılır", "Hata fırlatır", "Doğru çalışır", "0 döner"], 0),
    qz("Saf (pure) fonksiyon nedir?", ["Aynı girdiye hep aynı çıktıyı veren, dış etkisi olmayan fonksiyon", "Yalnızca string döndüren fonksiyon", "async olmayan fonksiyon", "Sınıf metodu"], 0),
    qz("Sunucuda doğrulama neden zorunludur?", ["İstemci kodu kullanıcının kontrolündedir ve atlanabilir", "Tarayıcı JavaScript'i desteklemez", "Daha hızlıdır", "Zod yalnızca sunucuda çalışır"], 0),
    qz("`z.string({ error: 'Kategori seçin' })` neden yazıldı?", ["Alan hiç gönderilmezse varsayılan İngilizce mesaj yerine Türkçe mesaj için", "Alanı zorunlu olmaktan çıkarmak için", "Tipi number yapmak için", "Performans için"], 0),
    qz("CSV enjeksiyonuna karşı hangi önlem alınır?", ["=, +, -, @ ile başlayan hücrenin başına ' konur", "Dosya sıkıştırılır", "Dosya uzantısı değiştirilir", "Virgül yerine noktalı virgül kullanılır"], 0),
    qz("Önce testi yazıp kırmızı görmenin faydası nedir?", ["Testin gerçekten bir şeyi kontrol ettiğini ve gereksinimin netliğini doğrular", "Kodu kısaltır", "Derlemeyi hızlandırır", "Hiçbiri"], 0),
    qz("Hata sonrası formda parola neden geri gönderilmez?", ["Gizli veri yanıta/HTML'e yazılmamalı", "Tarayıcı zaten saklar", "Zod parolayı siler", "Parola metin değildir"], 0),
  ],
  w3: [
    qz("Her sorguya `userId` koşulunu ortak bir fonksiyonla eklemenin amacı nedir?", ["Başkasının verisine erişimi yapısal olarak imkânsız kılmak", "Sorguyu hızlandırmak", "Tipleri kısaltmak", "Önbelleğe almak"], 0),
    qz("N+1 sorunu nedir?", ["Bir listedeki her satır için ayrı ek sorgu atılması", "Bir sorgunun N kez tekrarlanması", "Tablo sayısının fazla olması", "İndeks eksikliği"], 0),
    qz("Ay aralığında neden `lt: sonraki ayın başı` kullanılır?", ["Saat/saat dilimi ve ay sonu gün sayısı hatalarını önler", "Daha hızlıdır", "Prisma yalnızca lt'yi destekler", "Zorunludur"], 0),
    qz("Parola neden bcrypt ile özetlenir?", ["Veritabanı sızsa bile parola geri çıkarılamasın", "Parolayı kısaltmak için", "Hızlı karşılaştırma için", "Çerezde taşımak için"], 0),
    qz("Oturum çerezindeki `httpOnly` ne sağlar?", ["JavaScript çereze erişemez; XSS ile çalınması zorlaşır", "Çerez şifrelenir", "Çerez süresiz olur", "Yalnızca HTTP'de çalışır"], 0),
    qz("Giriş hatasında neden tek, genel bir mesaj gösterilir?", ["Hangi e-postaların kayıtlı olduğunu sızdırmamak için", "Mesajları kısaltmak için", "Zod kısıtı yüzünden", "Tarayıcı zorunluluğu"], 0),
    qz("React 19'da sunucu eylemi sonrası formun sıfırlanması neye yol açabilir?", ["Doğrulama hatasında kullanıcının yazdıklarının silinmesine", "Sunucunun çökmesine", "Çerezin silinmesine", "Hiçbir şeye"], 0),
  ],
  w4: [
    qz("Sunucu eylemleri neden her seferinde yetki kontrolü yapmalıdır?", ["Eylem herkese açık bir HTTP uç noktasıdır; arayüzde butonu gizlemek güvenlik değildir", "Next.js öyle istiyor", "Performans için", "Prisma zorunlu kılar"], 0),
    qz("Silme işleminde `delete` yerine `deleteMany({ id, userId })` neden kullanıldı?", ["Başkasının kaydının silinmesini (IDOR) engeller", "Daha hızlıdır", "Toplu silme gerektiği için", "Tip güvenliği için"], 0),
    qz("Formdan gelen `categoryId`'ye neden doğrudan güvenilmez?", ["Kullanıcı başkasının kategori id'sini gönderebilir", "Metin olduğu için", "Zod değiştirir", "Prisma reddeder"], 0),
    qz("Filtre durumunu URL'de tutmanın avantajı nedir?", ["Yenilemeye dayanıklı, paylaşılabilir, geri tuşuyla uyumlu; sunucu doğrudan okur", "Daha az kod", "Her zaman daha hızlı", "Güvenlik sağlar"], 0),
    qz("Next.js 16'da `searchParams` nasıl okunur?", ["await searchParams (Promise)", "Doğrudan nesne olarak", "window.location ile", "useState ile"], 0),
    qz("Aynı 'Sil' yazan düğmelerde `aria-label` neden eklenir?", ["Ekran okuyucu kullanıcısı hangi satırın silineceğini ayırt edebilsin", "Stil için", "SEO için", "Test için"], 0),
    qz("`useActionState`'in `pending` değeri ne işe yarar?", ["Gönderim sürerken düğmeyi devre dışı bırakıp çift gönderimi önler", "Hata mesajı üretir", "Formu sıfırlar", "Sayfayı yeniler"], 0),
  ],
  w5: [
    qz("Özet grafiğinde çubuklar neden `aria-hidden` yapılıp değerler metin olarak da yazılır?", ["Grafiği göremeyen kullanıcı aynı bilgiyi alsın", "Çubuklar çirkin diye", "Performans için", "SEO için"], 0),
    qz("İşlemi olan kategorinin silinmesi hangi katmanlarla engellenir?", ["Arayüz, eylemdeki kontrol ve veritabanındaki onDelete: Restrict", "Yalnızca arayüz", "Yalnızca Zod", "Hiçbiri"], 0),
    qz("`proxy.ts` neden tek başına yetkilendirme sayılmaz?", ["Yalnızca çerezin varlığına bakar; sahte olabilir, gerçek kontrol veriye dokunan yerde yapılır", "Çok yavaştır", "Sunucuda çalışmaz", "Yalnızca GET'i yakalar"], 0),
    qz("CSV dosyasının başına `\\uFEFF` (BOM) neden eklenir?", ["Excel'in UTF-8 Türkçe karakterleri doğru açması için", "Dosyayı sıkıştırmak için", "Güvenlik için", "Satır sonu için"], 0),
    qz("Route Handler nedir?", ["route.ts içinde tanımlanan, HTTP yanıtı dönen sunucu fonksiyonu", "Bir React bileşeni", "Bir CSS dosyası", "Bir Prisma modeli"], 0),
    qz("Boş ayda özet sayfasında sıfıra bölme nasıl engellenir?", ["Math.max(1, ...) gibi bir alt sınır kullanarak", "try/catch ile", "Sayfayı gizleyerek", "Her zaman 100 yazarak"], 0),
    qz("Giriş sayfasına yönlendirme döngüsünün nedeni genellikle nedir?", ["proxy matcher'ın giriş sayfasını dışlamaması", "Çerez bayrakları", "Tailwind", "Zod"], 0),
  ],
  w6: [
    qz("Birim testleri ile E2E testleri arasındaki temel fark nedir?", ["Birim: saf mantığı hızlı doğrular; E2E: tüm yığını gerçek tarayıcıda yavaş ama gerçekçi doğrular", "Aynı şeylerdir", "E2E daha hızlıdır", "Birim testi tarayıcı gerektirir"], 0),
    qz("E2E testlerinde sabit `sleep` yerine ne tercih edilir?", ["Bir koşulu bekleyen (waitForSelector/waitForFunction) kodu", "Daha uzun sleep", "Testi tekrar çalıştırmak", "Testi silmek"], 0),
    qz("Üretimde veritabanı şeması neden `migrate dev` değil `migrate deploy` ile uygulanır?", ["deploy yalnızca commit'li migrasyonları uygular; dev şema sıfırlama gibi geliştirme davranışları içerir", "deploy daha yeni", "dev ücretli", "Fark yok"], 0),
    qz("Üretimde `SESSION_SECRET` neden yeni üretilmelidir?", ["Bilinen/geliştirme anahtarıyla herkes geçerli oturum üretebilir", "Daha kısa olsun diye", "Vercel zorunlu kıldığı için", "Gerek yok"], 0),
    qz("E2E testinde her çalıştırmada benzersiz e-posta kullanmanın amacı nedir?", ["Veritabanını temizlemeden testin tekrarlanabilir olması", "E-postayı gizlemek", "Hız", "Zod kuralı"], 0),
    qz("Önizleme (preview) dağıtımlarında neden üretim veritabanı kullanılmamalı?", ["Test verisi ve hatalar gerçek veriyi bozabilir", "Daha yavaştır", "Neon izin vermez", "Fark etmez"], 0),
    qz("Yeni bir eylem eklerken ilk satırda ne olmalıdır?", ["requireUser() ile kimlik/yetki kontrolü", "console.log", "revalidatePath", "redirect"], 0),
  ],
};
