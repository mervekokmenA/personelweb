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
  // Serverless fonksiyon örneği başına küçük bir havuz — Neon'un bağlantı
  // limitini zorlamadan sıcak çağrılar arasında yeniden kullanılır.
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "", max: 3 });
  return new PrismaClient({ adapter });
}

// Not: önceden bu satır yalnızca development'ta globalThis'e yazıyordu.
// Production'da (Vercel serverless) her istek için yeni bir PrismaClient +
// pg.Pool + Neon'a yeni bir TCP/SSL bağlantısı açılmasına sebep oluyordu —
// sayfa açılışlarındaki yavaşlığın büyük kısmı buydu. Sıcak (warm) fonksiyon
// çağrıları arasında bağlantıyı yeniden kullanmak için ortamdan bağımsız
// olarak her zaman globalThis'e yazıyoruz.
export const prisma = globalThis.__prisma ?? createClient();
globalThis.__prisma = prisma;
