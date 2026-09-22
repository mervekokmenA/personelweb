import type { CostItem, CostProduct } from "@/generated/prisma/client";

/** Bir kalemin birim maliyeti: alım tutarı / bu alımdan çıkan ürün sayısı. */
export function itemUnitCost(item: Pick<CostItem, "purchaseCost" | "yieldCount">): number {
  if (!item.yieldCount) return 0;
  return item.purchaseCost / item.yieldCount;
}

/** Bir ürünün tüm kalemlerinin toplamından birim maliyeti. */
export function productUnitCost(items: Pick<CostItem, "purchaseCost" | "yieldCount">[]): number {
  return items.reduce((sum, item) => sum + itemUnitCost(item), 0);
}

export interface PricingBreakdown {
  unitCost: number;
  /** Kâr oranı uygulanmış, komisyonsuz fiyat. */
  profitPrice: number;
  /** Komisyon da hesaba katılan tahmini satış fiyatı. */
  estimatedSalePrice: number;
  /** Tahmini satış fiyatı üzerinden alınacak komisyon tutarı. */
  commissionAmount: number;
  /** Komisyon sonrası net kâr (maliyet + hedef kâr ile eşleşmeli). */
  netProfit: number;
}

/**
 * Hedeflenen kâr oranı maliyet üzerinden, komisyon oranı ise satış fiyatı
 * üzerinden uygulanır — yani komisyon düşüldükten sonra hâlâ hedeflenen kâr
 * kalsın diye satış fiyatı geriye doğru hesaplanır:
 *   satışFiyatı * (1 - komisyon%) = maliyet * (1 + kâr%)
 */
export function computePricing(
  unitCost: number,
  product: Pick<CostProduct, "profitMargin" | "commission">
): PricingBreakdown {
  const profitPrice = unitCost * (1 + product.profitMargin / 100);
  const commissionRatio = Math.min(0.99, Math.max(0, product.commission / 100));
  const estimatedSalePrice = commissionRatio < 1 ? profitPrice / (1 - commissionRatio) : profitPrice;
  const commissionAmount = estimatedSalePrice - profitPrice;
  const netProfit = estimatedSalePrice - commissionAmount - unitCost;
  return { unitCost, profitPrice, estimatedSalePrice, commissionAmount, netProfit };
}

export function formatTl(value: number): string {
  return `${value.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TL`;
}
