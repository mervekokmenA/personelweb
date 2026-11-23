import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { addContentIdea, importDocContentIdeas } from "./actions";
import { BulkDeleteButton } from "@/components/ui/bulk-delete-button";
import { IdeaBoard } from "@/components/icerik/idea-board";
import { Lightbulb, Circle, Loader, CheckCircle2 } from "lucide-react";
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
      <div className="agro flex flex-col gap-6">
        <h1 className="ag-title">İçerik Fikirleri</h1>
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
      include: { transcripts: { orderBy: { order: "asc" } } },
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

  const isFiltered = !!(q || category || status);

  return (
    <div className="agro flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <span className="ag-tag w-fit">
          <span className="ag-dot" /> İçerik Fikirleri
        </span>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="ag-title max-w-xl">
            Fikirlerini Tek Yerden
            <br />
            Planla ve Takip Et
          </h1>
          <p className="max-w-xs text-sm ag-muted">
            Aklına gelen her içerik fikrini kaydet, durumunu takip et, ihtiyacın olmayanları toplu sil.
          </p>
        </div>
        <RandomIdeaButton />
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="ag-stat ag-stat-dark">
          <span className="ag-stat-icon"><Lightbulb size={18} /></span>
          <span className="ag-stat-num">{totalCount}</span>
          <span className="text-sm opacity-80">Toplam fikir</span>
        </div>
        <div className="ag-stat">
          <span className="ag-stat-icon"><Circle size={18} /></span>
          <span className="ag-stat-num">{countMap.NOT_STARTED ?? 0}</span>
          <span className="text-sm ag-muted">Yapılmadı</span>
        </div>
        <div className="ag-stat">
          <span className="ag-stat-icon"><Loader size={18} /></span>
          <span className="ag-stat-num">{countMap.IN_PROGRESS ?? 0}</span>
          <span className="text-sm ag-muted">Yapılıyor</span>
        </div>
        <div className="ag-stat">
          <span className="ag-stat-icon"><CheckCircle2 size={18} /></span>
          <span className="ag-stat-num">{countMap.DONE ?? 0}</span>
          <span className="text-sm ag-muted">Yapıldı</span>
        </div>
      </section>

      <section className="ag-panel">
        <form className="flex flex-wrap gap-2" action="/icerik">
          <input type="text" name="q" defaultValue={q} placeholder="Fikir ara..." className="ag-input min-w-[12rem] flex-1" />
          <select name="category" defaultValue={category} className="ag-input">
            <option value="">Tüm kategoriler</option>
            {categories.map((c) => (
              <option key={c.category} value={c.category}>
                {c.category}
              </option>
            ))}
          </select>
          <select name="status" defaultValue={status} className="ag-input">
            <option value="">Tüm durumlar</option>
            <option value="NOT_STARTED">Yapılmadı</option>
            <option value="IN_PROGRESS">Yapılıyor</option>
            <option value="DONE">Yapıldı</option>
          </select>
          <button className="ag-btn ag-btn-dark">Filtrele</button>
          {isFiltered && (
            <a href="/icerik" className="ag-btn ag-btn-outline">
              Temizle
            </a>
          )}
        </form>
      </section>

      <section className="ag-panel">
        <form action={addContentIdea} className="flex flex-wrap gap-2">
          <input name="title" placeholder="Yeni içerik fikri..." required className="ag-input min-w-[14rem] flex-1" />
          <input name="category" placeholder="Kategori" className="ag-input w-44" />
          <input name="format" placeholder="Format (Video/Yazı/Podcast)" className="ag-input w-52" />
          <button className="ag-btn ag-btn-dark">Ekle</button>
        </form>
      </section>

      {totalCount === 0 && (
        <section className="ag-panel flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm ag-muted">
            Henüz fikir yok. Google dokümanındaki 300 fikri transkriptleriyle birlikte yükleyebilirsin.
          </p>
          <BulkDeleteButton
            action={importDocContentIdeas}
            label="Dokümandan Yükle (300 fikir)"
            confirmText="300 fikir ve 600 transkript yüklenecek. Devam edilsin mi?"
            variant="primary"
          />
        </section>
      )}

      <IdeaBoard
        ideas={ideas.map((i) => ({
          id: i.id,
          title: i.title,
          category: i.category,
          format: i.format,
          status: i.status,
          transcripts: i.transcripts.map((t) => ({ id: t.id, style: t.style, text: t.text })),
        }))}
        startIndex={(page - 1) * PAGE_SIZE}
        filter={{ q, category, status }}
        filteredTotal={total}
        isFiltered={isFiltered}
      />

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <a key={p} href={buildQuery({ page: String(p) })} className={`ag-page ${p === page ? "ag-page-active" : "ag-pill"}`}>
              {p}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
