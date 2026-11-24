import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { HOME_LAYOUT_KEY, resolveHomeLayout, type HomeLayout } from "@/lib/home-sections";

export async function getHomeLayout() {
  if (!hasDatabaseUrl) return resolveHomeLayout(null);
  try {
    const row = await prisma.learningEdit.findUnique({ where: { key: HOME_LAYOUT_KEY } });
    return resolveHomeLayout(row?.data as Partial<HomeLayout> | null);
  } catch {
    return resolveHomeLayout(null);
  }
}
