import Link from "next/link";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { addTraining } from "./actions";
import { ExternalLink } from "lucide-react";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import type { Prisma } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  PLANNED: "Planlandı",
  ONGOING: "Devam Ediyor",
  COMPLETED: "Tamamlandı",
  PAUSED: "Duraklatıldı",
};

const STATUS_COLOR: Record<string, string> = {
  PLANNED: "bg-background border border-card-border text-muted",
  ONGOING: "bg-accent-yellow",
  COMPLETED: "bg-accent-mint",
  PAUSED: "bg-accent-pink",
};

export default async function EgitimlerPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; status?: string; type?: string }>;
}) {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Eğitimler</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const category = params.category ?? "";
  const status = params.status ?? "";
  const type = params.type ?? "";

  const where: Prisma.TrainingWhereInput = {
    ...(q ? { name: { contains: q, mode: "insensitive" } } : {}),
    ...(category ? { category } : {}),
    ...(status ? { status: status as "PLANNED" | "ONGOING" | "COMPLETED" | "PAUSED" } : {}),
    ...(type ? { type: type as "FREE" | "PAID" } : {}),
  };

  const [trainings, categories] = await Promise.all([
    prisma.training.findMany({
      where,
      orderBy: { order: "asc" },
      include: { _count: { select: { notes: true } } },
    }),
    prisma.training.findMany({
      where: { category: { not: null } },
      distinct: ["category"],
      select: { category: true },
    }),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Eğitimler</h1>

      <section className="card p-4">
        <form className="flex flex-wrap gap-2" action="/egitimler">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Eğitim ara..."
            className="min-w-[12rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <select
            name="category"
            defaultValue={category}
            className="min-w-0 max-w-[9.5rem] rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
          >
            <option value="">Tüm kategoriler</option>
            {categories.map((c) => (
              <option key={c.category} value={c.category ?? ""}>
                {c.category}
              </option>
            ))}
          </select>
          <select
            name="status"
            defaultValue={status}
            className="min-w-0 max-w-[9.5rem] rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
          >
            <option value="">Tüm durumlar</option>
            <option value="PLANNED">Planlandı</option>
            <option value="ONGOING">Devam Ediyor</option>
            <option value="COMPLETED">Tamamlandı</option>
            <option value="PAUSED">Duraklatıldı</option>
          </select>
          <select
            name="type"
            defaultValue={type}
            className="min-w-0 max-w-[9.5rem] rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
          >
            <option value="">Ücretsiz/Ücretli</option>
            <option value="FREE">Ücretsiz</option>
            <option value="PAID">Ücretli</option>
          </select>
          <button className="rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium">
            Filtrele
          </button>
        </form>
      </section>

      <section className="card p-4">
        <form action={addTraining} className="flex flex-wrap gap-2">
          <input
            name="name"
            placeholder="Eğitim adı"
            required
            className="min-w-[12rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <input
            name="provider"
            placeholder="Sağlayıcı / Eğitmen"
            className="w-48 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <input
            name="category"
            placeholder="Kategori"
            className="w-44 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <select name="type" className="min-w-0 max-w-[9.5rem] rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm">
            <option value="FREE">Ücretsiz</option>
            <option value="PAID">Ücretli</option>
          </select>
          <select name="status" className="min-w-0 max-w-[9.5rem] rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm">
            <option value="PLANNED">Planlandı</option>
            <option value="ONGOING">Devam Ediyor</option>
            <option value="COMPLETED">Tamamlandı</option>
            <option value="PAUSED">Duraklatıldı</option>
          </select>
          <input
            name="url"
            placeholder="Bağlantı (opsiyonel)"
            className="w-52 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <button className="rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium">
            Ekle
          </button>
        </form>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainings.map((t) => (
          <Link
            key={t.id}
            href={`/egitimler/${t.id}`}
            className="card flex flex-col gap-2 p-4 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLOR[t.status]}`}>
                {STATUS_LABEL[t.status]}
              </span>
              <span className="text-xs text-muted">{t.type === "FREE" ? "Ücretsiz" : "Ücretli"}</span>
            </div>
            <h3 className="font-medium leading-snug">{t.name}</h3>
            {t.provider && <p className="text-sm text-muted">{t.provider}</p>}
            {t.category && (
              <span className="mt-1 inline-block w-fit rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
                {t.category}
              </span>
            )}
            <div className="mt-2 flex items-center justify-between text-xs text-muted">
              <span>{t._count.notes} not</span>
              {t.url && <ExternalLink size={13} />}
            </div>
          </Link>
        ))}
        {trainings.length === 0 && (
          <p className="text-sm text-muted">Filtreye uyan eğitim bulunamadı.</p>
        )}
      </div>
    </div>
  );
}
