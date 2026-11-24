import { prisma, hasDatabaseUrl } from "@/lib/prisma";

const KEY = "settings:navOrder";

/** Ayarlardan kaydedilmiş menü sırası (href listesi); yoksa ya da veritabanı yoksa varsayılan sıra. */
export async function getNavOrder(): Promise<string[] | undefined> {
  if (!hasDatabaseUrl) return undefined;
  try {
    const row = await prisma.learningEdit.findUnique({ where: { key: KEY } });
    const order = (row?.data as { order?: unknown } | null)?.order;
    return Array.isArray(order) && order.every((x) => typeof x === "string") ? (order as string[]) : undefined;
  } catch {
    return undefined;
  }
}

export const NAV_ORDER_KEY = KEY;
