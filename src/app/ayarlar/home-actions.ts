"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { HOME_LAYOUT_KEY, resolveHomeLayout } from "@/lib/home-sections";

/** Ana sayfa bölüm sırasını ve gizli bölümleri kaydeder. */
export async function saveHomeLayout(order: string[], hidden: string[]) {
  if (!Array.isArray(order) || !Array.isArray(hidden) || order.length > 30 || hidden.length > 30) return;
  const r = resolveHomeLayout({ order: order.filter((x) => typeof x === "string"), hidden: hidden.filter((x) => typeof x === "string") });
  const data = { order: r.order, hidden: [...r.hidden] };
  await prisma.learningEdit.upsert({ where: { key: HOME_LAYOUT_KEY }, update: { data }, create: { key: HOME_LAYOUT_KEY, data } });
  revalidatePath("/");
}

export async function resetHomeLayout() {
  await prisma.learningEdit.deleteMany({ where: { key: HOME_LAYOUT_KEY } });
  revalidatePath("/");
}
