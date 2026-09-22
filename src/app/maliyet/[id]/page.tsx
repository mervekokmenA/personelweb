import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { DeleteButton } from "@/components/ui/delete-button";
import { SaveToast } from "@/components/ui/save-toast";
import { updateProduct, addCostItem, updateCostItem, deleteCostItem } from "../actions";
import { itemUnitCost, productUnitCost, computePricing, formatTl } from "@/lib/cost";

export const dynamic = "force-dynamic";

const UNIT_OPTIONS = ["gr", "kg", "ml", "lt", "adet", "m", "cm"];

export default async function MaliyetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <Link href="/maliyet" className="w-fit rounded-lg p-2 hover:bg-card">
          <ArrowLeft size={18} />
        </Link>
        <DbSetupNotice />
      </div>
    );
  }

  const { id } = await params;
  const product = await prisma.costProduct.findUnique({
    where: { id },
    include: { items: { orderBy: { order: "asc" } } },
  });
  if (!product) notFound();

  const unitCost = productUnitCost(product.items);
  const pricing = computePricing(unitCost, product);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/maliyet" className="rounded-lg p-2 hover:bg-card">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
      </div>

      {/* MALİYET KALEMLERİ */}
      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Maliyet Kalemleri
        </h2>

        <div className="flex flex-col gap-3">
          {product.items.map((item) => (
            <div key={item.id} className="rounded-lg bg-background p-3">
              <form
                action={updateCostItem}
                className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8 lg:items-end"
              >
                <input type="hidden" name="id" value={item.id} />
                <input type="hidden" name="productId" value={product.id} />
                <label className="flex flex-col gap-1 text-[11px] text-muted lg:col-span-2">
                  Kalem adı
                  <input
                    name="name"
                    defaultValue={item.name}
                    className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-[11px] text-muted">
                  Satın alınan
                  <input
                    type="number"
                    step="any"
                    name="purchaseAmount"
                    defaultValue={item.purchaseAmount}
                    className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-[11px] text-muted">
                  Birim
                  <select
                    name="purchaseUnit"
                    defaultValue={item.purchaseUnit}
                    className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                  >
                    {UNIT_OPTIONS.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-[11px] text-muted">
                  Birimde kullanılan {item.usageIsPercent ? "(%)" : `(${item.purchaseUnit})`}
                  <input
                    type="number"
                    step="any"
                    name="usagePerItem"
                    defaultValue={item.usagePerItem}
                    className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                  />
                </label>
                <label className="flex items-center gap-1.5 self-center text-[11px] text-muted">
                  <input type="checkbox" name="usageIsPercent" defaultChecked={item.usageIsPercent} />
                  Yüzde (%) olarak gir
                </label>
                <label className="flex flex-col gap-1 text-[11px] text-muted">
                  Kaç ürün çıkıyor
                  <input
                    type="number"
                    step="any"
                    name="yieldCount"
                    defaultValue={item.yieldCount}
                    className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-[11px] text-muted">
                  Alım tutarı (TL)
                  <input
                    type="number"
                    step="any"
                    name="purchaseCost"
                    defaultValue={item.purchaseCost}
                    className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                  />
                </label>
                <div className="flex items-center justify-between gap-2 lg:col-span-2">
                  <div className="text-xs">
                    <p className="text-muted">Birim maliyet</p>
                    <p className="font-semibold">{formatTl(itemUnitCost(item))}</p>
                  </div>
                  <button className="rounded-lg bg-accent-mint px-3 py-1.5 text-xs font-medium">
                    Güncelle
                  </button>
                </div>
                <SaveToast label="Kalem güncellendi" />
              </form>
              <div className="mt-1 flex justify-end">
                <DeleteButton action={deleteCostItem} hidden={{ id: item.id, productId: product.id }} />
              </div>
            </div>
          ))}
          {product.items.length === 0 && (
            <p className="text-sm text-muted">Henüz maliyet kalemi eklenmedi.</p>
          )}
        </div>

        <form
          action={addCostItem}
          className="mt-4 grid grid-cols-2 gap-2 border-t border-card-border pt-4 sm:grid-cols-4 lg:grid-cols-8 lg:items-end"
        >
          <input type="hidden" name="productId" value={product.id} />
          <label className="flex flex-col gap-1 text-[11px] text-muted lg:col-span-2">
            Kalem adı
            <input
              name="name"
              placeholder="örn. Parafin"
              required
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-muted">
            Satın alınan
            <input
              type="number"
              step="any"
              name="purchaseAmount"
              placeholder="1000"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-muted">
            Birim
            <select
              name="purchaseUnit"
              defaultValue="gr"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            >
              {UNIT_OPTIONS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-muted">
            Birimde kullanılan
            <input
              type="number"
              step="any"
              name="usagePerItem"
              placeholder="50"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            />
          </label>
          <label className="flex items-center gap-1.5 self-center text-[11px] text-muted">
            <input type="checkbox" name="usageIsPercent" />
            Yüzde (%) olarak gir
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-muted">
            Kaç ürün çıkıyor
            <input
              type="number"
              step="any"
              name="yieldCount"
              placeholder="20"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-muted">
            Alım tutarı (TL)
            <input
              type="number"
              step="any"
              name="purchaseCost"
              placeholder="200"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            />
          </label>
          <button className="h-fit rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Kalem Ekle
          </button>
        </form>
        <p className="mt-3 text-xs text-muted">
          Birim maliyet = alım tutarı / bu alımdan çıkan ürün sayısı. &quot;Birimde kullanılan&quot;
          ve &quot;satın alınan&quot; alanları sadece hesabını nasıl bulduğunu hatırlaman için —
          asıl hesaplamada &quot;kaç ürün çıkıyor&quot; ve &quot;alım tutarı&quot; kullanılır.
        </p>
      </section>

      {/* KÂR / KOMİSYON / TAHMİNİ SATIŞ */}
      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Kâr, Komisyon ve Tahmini Satış
        </h2>
        <form action={updateProduct} className="flex flex-wrap items-end gap-3">
          <input type="hidden" name="id" value={product.id} />
          <input type="hidden" name="name" value={product.name} />
          <label className="flex flex-col gap-1 text-xs text-muted">
            Hedef kâr oranı (%)
            <input
              type="number"
              step="any"
              name="profitMargin"
              defaultValue={product.profitMargin}
              className="w-36 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Platform komisyonu (%)
            <input
              type="number"
              step="any"
              name="commission"
              defaultValue={product.commission}
              className="w-36 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <button className="rounded-lg bg-accent-mint px-4 py-1.5 text-sm font-medium">
            Güncelle
          </button>
          <SaveToast label="Oranlar güncellendi" />
        </form>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-lg bg-background p-3">
            <p className="text-xs text-muted">Toplam Birim Maliyet</p>
            <p className="text-lg font-semibold">{formatTl(pricing.unitCost)}</p>
          </div>
          <div className="rounded-lg bg-background p-3">
            <p className="text-xs text-muted">Kârlı Fiyat (komisyonsuz)</p>
            <p className="text-lg font-semibold">{formatTl(pricing.profitPrice)}</p>
          </div>
          <div className="rounded-lg bg-background p-3">
            <p className="text-xs text-muted">Komisyon Tutarı</p>
            <p className="text-lg font-semibold">{formatTl(pricing.commissionAmount)}</p>
          </div>
          <div className="rounded-lg bg-accent-mint/30 p-3">
            <p className="text-xs text-muted">Tahmini Satış Fiyatı</p>
            <p className="text-lg font-semibold">{formatTl(pricing.estimatedSalePrice)}</p>
          </div>
          <div className="rounded-lg bg-accent-yellow/30 p-3">
            <p className="text-xs text-muted">Net Kâr (birim başına)</p>
            <p className="text-lg font-semibold">{formatTl(pricing.netProfit)}</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">
          Tahmini satış fiyatı, platform komisyonu düşüldükten sonra hâlâ hedeflediğin kâr oranının
          kalması için geriye doğru hesaplanır: satışFiyatı × (1 − komisyon%) = maliyet × (1 + kâr%).
        </p>
      </section>
    </div>
  );
}
