import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { updateTraining, deleteTraining, addTrainingNote, deleteTrainingNote } from "../actions";
import { DeleteButton } from "@/components/ui/delete-button";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { SaveToast } from "@/components/ui/save-toast";

export const dynamic = "force-dynamic";

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <Link href="/egitimler" className="rounded-lg p-2 hover:bg-card w-fit">
          <ArrowLeft size={18} />
        </Link>
        <DbSetupNotice />
      </div>
    );
  }

  const { id } = await params;
  const training = await prisma.training.findUnique({
    where: { id },
    include: { notes: { orderBy: { createdAt: "desc" } } },
  });
  if (!training) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/egitimler" className="rounded-lg p-2 hover:bg-card">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-semibold">{training.name}</h1>
        {training.url && (
          <a href={training.url} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground">
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Eğitim Bilgileri
        </h2>
        <form action={updateTraining} className="grid gap-3 sm:grid-cols-2">
          <input type="hidden" name="id" value={training.id} />
          <label className="flex flex-col gap-1 text-xs text-muted">
            Ad
            <input
              name="name"
              defaultValue={training.name}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Sağlayıcı / Eğitmen
            <input
              name="provider"
              defaultValue={training.provider ?? ""}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Kategori
            <input
              name="category"
              defaultValue={training.category ?? ""}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Bağlantı
            <input
              name="url"
              defaultValue={training.url ?? ""}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Tür
            <select
              name="type"
              defaultValue={training.type}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            >
              <option value="FREE">Ücretsiz</option>
              <option value="PAID">Ücretli</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Durum
            <select
              name="status"
              defaultValue={training.status}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            >
              <option value="PLANNED">Planlandı</option>
              <option value="ONGOING">Devam Ediyor</option>
              <option value="COMPLETED">Tamamlandı</option>
              <option value="PAUSED">Duraklatıldı</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted sm:col-span-2">
            Ödeme Bilgisi
            <input
              name="paymentInfo"
              defaultValue={training.paymentInfo ?? ""}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted sm:col-span-2">
            Açıklama
            <textarea
              name="description"
              defaultValue={training.description ?? ""}
              rows={3}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <div className="flex flex-wrap gap-2 sm:col-span-2">
            <button className="rounded-lg bg-accent-mint px-4 py-1.5 text-sm font-medium">
              Kaydet
            </button>
            <DeleteButton action={deleteTraining} hidden={{ id: training.id }} label="Eğitimi Sil" />
            <SaveToast label="Eğitim güncellendi" />
          </div>
        </form>
      </section>

      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Ders Notlarım
        </h2>
        <form action={addTrainingNote} className="mb-4 flex flex-col gap-2 border-b border-card-border pb-4">
          <input type="hidden" name="trainingId" value={training.id} />
          <div className="flex flex-wrap gap-2">
            <input
              name="title"
              placeholder="Not başlığı (opsiyonel)"
              className="min-w-[8rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
            <input
              type="date"
              name="lessonDate"
              className="min-w-0 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </div>
          <textarea
            name="content"
            placeholder="Ders notunu buraya yaz..."
            required
            rows={3}
            className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <button className="self-end rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Not Ekle
          </button>
        </form>

        <div className="flex flex-col gap-3">
          {training.notes.map((n) => (
            <div key={n.id} className="rounded-lg bg-background p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium text-muted">
                  {n.title && <span className="mr-2 font-semibold text-foreground">{n.title}</span>}
                  {n.lessonDate
                    ? new Date(n.lessonDate).toLocaleDateString("tr-TR")
                    : new Date(n.createdAt).toLocaleDateString("tr-TR")}
                </span>
                <DeleteButton action={deleteTrainingNote} hidden={{ id: n.id, trainingId: training.id }} />
              </div>
              <p className="text-sm whitespace-pre-wrap">{n.content}</p>
            </div>
          ))}
          {training.notes.length === 0 && (
            <p className="text-sm text-muted">Henüz not eklenmedi.</p>
          )}
        </div>
      </section>
    </div>
  );
}
