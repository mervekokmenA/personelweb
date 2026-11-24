import { prisma } from "@/lib/prisma";
import { authEnabled } from "@/lib/site-auth";

/**
 * Kitap metinleri yalnızca veritabanında tutulur ve yalnızca giriş korumalı sitede gösterilir.
 * Üretimde SITE_PASSWORD tanımlı değilse metin gösterilmez (herkese açık sızıntıyı önlemek için).
 */
export function bookAccessAllowed(): boolean {
  return authEnabled() || process.env.NODE_ENV !== "production";
}

export interface ChapterInfo { idx: number; title: string; book: string; chars: number }

export async function listChapters(moduleId: string): Promise<ChapterInfo[]> {
  return prisma.bookChapter.findMany({
    where: { bookId: moduleId },
    orderBy: { idx: "asc" },
    select: { idx: true, title: true, book: true, chars: true },
  });
}

export async function countChapters(moduleId: string): Promise<number> {
  return prisma.bookChapter.count({ where: { bookId: moduleId } });
}

export async function getChapter(moduleId: string, idx: number) {
  return prisma.bookChapter.findUnique({ where: { bookId_idx: { bookId: moduleId, idx } } });
}
