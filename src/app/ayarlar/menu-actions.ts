"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { NAV_ITEMS, applyNavOrder } from "@/lib/nav-items";
import { getNavOrder, NAV_ORDER_KEY } from "@/lib/nav-order";

async function save(hrefs: string[]) {
  await prisma.learningEdit.upsert({
    where: { key: NAV_ORDER_KEY },
    update: { data: { order: hrefs } },
    create: { key: NAV_ORDER_KEY, data: { order: hrefs } },
  });
  revalidatePath("/", "layout");
}

/** Menü öğesini bir basamak yukarı (-1) ya da aşağı (+1) taşır. */
export async function moveNavItem(formData: FormData) {
  const href = String(formData.get("href") ?? "");
  const dir = Number(formData.get("dir"));
  if (!NAV_ITEMS.some((i) => i.href === href) || (dir !== -1 && dir !== 1)) return;
  const list = applyNavOrder(await getNavOrder()).map((i) => i.href);
  const i = list.indexOf(href);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= list.length) return;
  [list[i], list[j]] = [list[j], list[i]];
  await save(list);
}

export async function resetNavOrder() {
  await prisma.learningEdit.deleteMany({ where: { key: NAV_ORDER_KEY } });
  revalidatePath("/", "layout");
}

/** Sürükle-bırak sonrası tam sırayı kaydeder (bilinmeyenler atılır, eksikler sona eklenir). */
export async function saveNavOrder(order: string[]) {
  if (!Array.isArray(order) || order.length > 50 || !order.every((x) => typeof x === "string")) return;
  const hrefs = applyNavOrder(order).map((i) => i.href);
  await save(hrefs);
}
