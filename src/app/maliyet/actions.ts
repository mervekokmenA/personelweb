"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function num(formData: FormData, key: string): number {
  const raw = String(formData.get(key) ?? "").replace(",", ".");
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 0;
}

export async function addProduct(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return;
  const count = await prisma.costProduct.count();
  const product = await prisma.costProduct.create({
    data: { name, order: count },
  });
  revalidatePath("/maliyet");
  redirect(`/maliyet/${product.id}`);
}

export async function updateProduct(formData: FormData) {
  const id = String(formData.get("id"));
  const name = String(formData.get("name") ?? "").trim();
  if (!id || !name) return;
  const profitMargin = num(formData, "profitMargin");
  const commission = num(formData, "commission");
  await prisma.costProduct.update({
    where: { id },
    data: { name, profitMargin, commission },
  });
  revalidatePath("/maliyet");
  revalidatePath(`/maliyet/${id}`);
}

export async function deleteProduct(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.costProduct.delete({ where: { id } });
  revalidatePath("/maliyet");
}

export async function addCostItem(formData: FormData) {
  const productId = String(formData.get("productId"));
  const name = String(formData.get("name") ?? "").trim();
  if (!productId || !name) return;

  const purchaseAmount = num(formData, "purchaseAmount");
  const purchaseUnit = String(formData.get("purchaseUnit") ?? "gr").trim() || "gr";
  const usagePerItem = num(formData, "usagePerItem");
  const usageIsPercent = formData.get("usageIsPercent") === "on";
  const yieldCount = num(formData, "yieldCount");
  const purchaseCost = num(formData, "purchaseCost");

  const count = await prisma.costItem.count({ where: { productId } });
  await prisma.costItem.create({
    data: {
      productId,
      name,
      purchaseAmount,
      purchaseUnit,
      usagePerItem,
      usageIsPercent,
      yieldCount,
      purchaseCost,
      order: count,
    },
  });
  revalidatePath(`/maliyet/${productId}`);
  revalidatePath("/maliyet");
}

export async function updateCostItem(formData: FormData) {
  const id = String(formData.get("id"));
  const productId = String(formData.get("productId"));
  const name = String(formData.get("name") ?? "").trim();
  if (!id || !name) return;

  await prisma.costItem.update({
    where: { id },
    data: {
      name,
      purchaseAmount: num(formData, "purchaseAmount"),
      purchaseUnit: String(formData.get("purchaseUnit") ?? "gr").trim() || "gr",
      usagePerItem: num(formData, "usagePerItem"),
      usageIsPercent: formData.get("usageIsPercent") === "on",
      yieldCount: num(formData, "yieldCount"),
      purchaseCost: num(formData, "purchaseCost"),
    },
  });
  revalidatePath(`/maliyet/${productId}`);
  revalidatePath("/maliyet");
}

export async function deleteCostItem(formData: FormData) {
  const id = String(formData.get("id"));
  const productId = String(formData.get("productId"));
  await prisma.costItem.delete({ where: { id } });
  revalidatePath(`/maliyet/${productId}`);
  revalidatePath("/maliyet");
}
