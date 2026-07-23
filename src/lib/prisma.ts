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

function createClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL tanımlı değil. Vercel env vars / .env içine ekleyin.");
  }
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export const prisma = globalThis.__prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma;
}
