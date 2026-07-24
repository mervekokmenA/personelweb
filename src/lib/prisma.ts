import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Standart `pg` (node-postgres) sürücü adaptörü kullanılıyor — hem Neon'un
// normal (havuzlu) bağlantı dizesiyle hem de yerel/başka bir Postgres ile
// çalışır. Vercel'in Node.js serverless fonksiyonları TCP bağlantısını
// desteklediği için Neon'un WebSocket'e özel sürücüsüne gerek yok.
//
// Bağlantı havuzunu fonksiyon çağrıları arasında paylaşmak için globalThis
// üzerinde tekil (singleton) client tutuyoruz.
declare global {
  var __prisma: PrismaClient | undefined;
}

// DATABASE_URL henüz ayarlanmamış olsa bile build/deploy başarısız olmasın
// diye client burada asla throw etmez — bağlantı sadece gerçekten bir sorgu
// çalıştırıldığında denenir. Sayfalar `hasDatabaseUrl`'ü kontrol edip
// DB olmadan da (kurulum uyarısıyla) render olabiliyor.
export const hasDatabaseUrl = !!process.env.DATABASE_URL;

function createClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
  return new PrismaClient({ adapter });
}

export const prisma = globalThis.__prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma;
}
