import Link from "next/link";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { DeleteButton } from "@/components/ui/delete-button";
import { addProduct, deleteProduct } from "./actions";
import { productUnitCost, computePricing, formatTl } from "@/lib/cost";
import { Calculator } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function MaliyetPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Maliyet Hesaplama</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const products = await prisma.costProduct.findMany({
    orderBy: { order: "asc" },
    include: { items: true },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Calculator size={22} /> Maliyet Hesaplama
        </h1>
        <p className="text-sm text-muted">
          Bir ürün için birden fazla maliyet kalemi (malzeme) gir, birim maliyeti otomatik
          hesaplansın; kâr oranı ve platform komisyonuna göre tahmini satış fiyatını gör.
        </p>
      </div>

      <section className="card p-4">
        <form action={addProduct} className="flex flex-wrap gap-2">
          <input
            name="name"
            placeholder="Yeni ürün adı (örn. Mum)"
            required
            className="min-w-[14rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <button className="rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Ürün Ekle ve Kalemleri Gir
          </button>
        </form>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const unitCost = productUnitCost(p.items);
          const pricing = computePricing(unitCost, p);
          return (
            <div key={p.id} className="card flex flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <Link href={`/maliyet/${p.id}`} className="font-medium leading-snug hover:underline">
                  {p.name}
                </Link>
                <DeleteButton action={deleteProduct} hidden={{ id: p.id }} />
              </div>
              <p className="text-xs text-muted">
                {p.items.length} kalem · %{p.profitMargin} kâr · %{p.commission} komisyon
              </p>
              <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-background p-2">
                  <p className="text-muted">Birim Maliyet</p>
                  <p className="font-semibold">{formatTl(unitCost)}</p>
                </div>
                <div className="rounded-lg bg-accent-mint/30 p-2">
                  <p className="text-muted">Tahmini Satış</p>
                  <p className="font-semibold">{formatTl(pricing.estimatedSalePrice)}</p>
                </div>
              </div>
              <Link
                href={`/maliyet/${p.id}`}
                className="mt-1 rounded-lg border border-card-border px-3 py-1.5 text-center text-xs font-medium hover:bg-background"
              >
                Kalemleri Düzenle
              </Link>
            </div>
          );
        })}
        {products.length === 0 && (
          <p className="text-sm text-muted">Henüz ürün eklenmedi.</p>
        )}
      </div>
    </div>
  );
}
