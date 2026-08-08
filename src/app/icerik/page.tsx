import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { addContentIdea, cycleContentIdeaStatus, deleteContentIdea } from "./actions";
import { StatusBadge } from "@/components/icerik/status-badge";
import { DeleteButton } from "@/components/ui/delete-button";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { RandomIdeaButton } from "@/components/icerik/random-idea-button";
import type { Prisma } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 50;

export default async function IcerikPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; status?: string; page?: string }>;
}) {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">İçerik Fikirleri</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const category = params.category ?? "";
  const status = params.status ?? "";
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  const where: Prisma.ContentIdeaWhereInput = {
    ...(q ? { title: { contains: q, mode: "insensitive" } } : {}),
    ...(category ? { category } : {}),
    ...(status ? { status: status as "NOT_STARTED" | "IN_PROGRESS" | "DONE" } : {}),
  };

  const [ideas, total, categories, statusCounts] = await Promise.all([
    prisma.contentIdea.findMany({
      where,
      orderBy: [{ category: "asc" }, { createdAt: "asc" }],
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.contentIdea.count({ where }),
    prisma.contentIdea.findMany({ distinct: ["category"], select: { category: true } }),
    prisma.contentIdea.groupBy({ by: ["status"], _count: true }),
  ]);

  const countMap = Object.fromEntries(statusCounts.map((s) => [s.status, s._count]));
  const totalCount = statusCounts.reduce((sum, s) => sum + s._count, 0);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  function buildQuery(overrides: Record<string, string | undefined>) {
    const merged = { q, category, status, page: String(page), ...overrides };
    const usp = new URLSearchParams();
    for (const [k, v] of Object.entries(merged)) {
      if (v) usp.set(k, v);
    }
    return `/icerik?${usp.toString()}`;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">İçerik Fikirleri</h1>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-background px-3 py-1 border border-card-border">
            Toplam: {totalCount}
          </span>
          <span className="rounded-full bg-background px-3 py-1 border border-card-border">
            Yapılmadı: {countMap.NOT_STARTED ?? 0}
          </span>
          <span className="rounded-full bg-accent-yellow px-3 py-1">
            Yapılıyor: {countMap.IN_PROGRESS ?? 0}
          </span>
          <span className="rounded-full bg-accent-mint px-3 py-1">
            Yapıldı: {countMap.DONE ?? 0}
          </span>
        </div>
      </div>

      <RandomIdeaButton />

      <section className="card p-4">
        <form className="flex flex-wrap gap-2" action="/icerik">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Fikir ara..."
            className="min-w-[12rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <select
            name="category"
            defaultValue={category}
            className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
          >
            <option value="">Tüm kategoriler</option>
            {categories.map((c) => (
              <option key={c.category} value={c.category}>
                {c.category}
              </option>
            ))}
          </select>
          <select
            name="status"
            defaultValue={status}
            className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
          >
            <option value="">Tüm durumlar</option>
            <option value="NOT_STARTED">Yapılmadı</option>
            <option value="IN_PROGRESS">Yapılıyor</option>
            <option value="DONE">Yapıldı</option>
          </select>
          <button className="rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium">
            Filtrele
          </button>
        </form>
      </section>

      <section className="card p-4">
        <form action={addContentIdea} className="flex flex-wrap gap-2">
          <input
            name="title"
            placeholder="Yeni içerik fikri..."
            required
            className="min-w-[14rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <input
            name="category"
            placeholder="Kategori"
            className="w-44 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <input
            name="format"
            placeholder="Format (Video/Yazı/Podcast)"
            className="w-48 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <button className="rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Ekle
          </button>
        </form>
      </section>

      <div className="flex flex-col gap-2">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="card flex flex-col gap-2 p-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <div className="flex min-w-0 items-start gap-3">
              <StatusBadge id={idea.id} status={idea.status} action={cycleContentIdeaStatus} />
              <span className={`min-w-0 flex-1 text-sm ${idea.status === "DONE" ? "text-muted line-through" : ""}`}>
                {idea.title}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:contents">
              <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
                {idea.category}
              </span>
              {idea.format && (
                <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
                  {idea.format}
                </span>
              )}
              <DeleteButton action={deleteContentIdea} hidden={{ id: idea.id }} />
            </div>
          </div>
        ))}
        {ideas.length === 0 && (
          <p className="py-8 text-center text-sm text-muted">Filtreye uyan fikir bulunamadı.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <a
              key={p}
              href={buildQuery({ page: String(p) })}
              className={`rounded-lg px-3 py-1 ${p === page ? "bg-foreground text-background" : "hover:bg-card"}`}
            >
              {p}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
