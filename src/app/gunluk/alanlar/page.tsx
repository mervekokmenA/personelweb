import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import {
  addFocusArea,
  updateFocusArea,
  deleteFocusArea,
  addRoutineTemplate,
  updateRoutineTemplate,
  toggleRoutineActive,
  deleteRoutineTemplate,
} from "@/app/gunluk/actions";
import { DeleteButton } from "@/components/ui/delete-button";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";

export const dynamic = "force-dynamic";

const COLOR_OPTIONS = [
  "#b9d8c8", "#f0c9d3", "#f3e2a9", "#bcd4e6", "#d3c6e6",
];

export default async function AlanlarPage() {
  const [focusAreas, routines] = await Promise.all([
    prisma.focusArea.findMany({ orderBy: { order: "asc" } }),
    prisma.routineTemplate.findMany({ orderBy: { order: "asc" } }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Link href="/gunluk" className="rounded-lg p-2 hover:bg-card">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-semibold">Parametre Ekranı — Alanlar &amp; Rutinler</h1>
      </div>

      {/* ODAK ALANLARI */}
      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Çalışmalar - Hobiler (Odak Alanları)
        </h2>
        <div className="flex flex-col gap-4">
          {focusAreas.map((a) => (
            <form
              key={a.id}
              action={updateFocusArea}
              className="flex flex-wrap items-center gap-2 rounded-lg bg-background p-3"
            >
              <input type="hidden" name="id" value={a.id} />
              <input
                name="name"
                defaultValue={a.name}
                className="w-32 rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
              />
              <input
                name="items"
                defaultValue={a.items.join(", ")}
                placeholder="Öğeler (virgülle ayır)"
                className="min-w-[14rem] flex-1 rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
              />
              <select
                name="color"
                defaultValue={a.color}
                className="rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
              >
                {COLOR_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <button className="rounded-lg bg-accent-mint px-3 py-1.5 text-xs font-medium">
                Güncelle
              </button>
              <DeleteButton action={deleteFocusArea} hidden={{ id: a.id }} />
            </form>
          ))}
        </div>

        <form action={addFocusArea} className="mt-4 flex flex-wrap gap-2 border-t border-card-border pt-4">
          <input
            name="name"
            placeholder="Alan adı (örn. Yabancı Dil)"
            required
            className="w-40 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <input
            name="items"
            placeholder="Öğeler: İbranice, Rusça, İngilizce"
            className="min-w-[14rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <select
            name="color"
            className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
          >
            {COLOR_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button className="rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Yeni Alan Ekle
          </button>
        </form>
      </section>

      {/* RUTİN ŞABLONLARI */}
      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Günlük Rutin Şablonları
        </h2>
        <div className="flex flex-col gap-2">
          {routines.map((r) => (
            <div key={r.id} className="flex flex-wrap items-center gap-2 rounded-lg bg-background p-3">
              <AutoSubmitCheckbox
                action={toggleRoutineActive}
                hidden={{ id: r.id }}
                checked={r.active}
              />
              <form action={updateRoutineTemplate} className="flex flex-1 flex-wrap items-center gap-2">
                <input type="hidden" name="id" value={r.id} />
                <input
                  name="title"
                  defaultValue={r.title}
                  className="min-w-[12rem] flex-1 rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                />
                <input
                  name="description"
                  defaultValue={r.description ?? ""}
                  placeholder="Açıklama (opsiyonel)"
                  className="min-w-[10rem] flex-1 rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                />
                <button className="rounded-lg bg-accent-mint px-3 py-1.5 text-xs font-medium">
                  Güncelle
                </button>
              </form>
              <DeleteButton action={deleteRoutineTemplate} hidden={{ id: r.id }} />
            </div>
          ))}
        </div>

        <form action={addRoutineTemplate} className="mt-4 flex flex-wrap gap-2 border-t border-card-border pt-4">
          <input
            name="title"
            placeholder="Rutin başlığı (örn. İmajinasyon, 10 dk)"
            required
            className="min-w-[12rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <input
            name="description"
            placeholder="Açıklama (opsiyonel)"
            className="min-w-[10rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <button className="rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Yeni Rutin Ekle
          </button>
        </form>
      </section>
    </div>
  );
}
