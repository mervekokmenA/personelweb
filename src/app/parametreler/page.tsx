import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { getAppSettings } from "@/lib/settings";
import { DeleteButton } from "@/components/ui/delete-button";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { SaveToast } from "@/components/ui/save-toast";
import { BookOpen, Droplet, Sparkles, Palette } from "lucide-react";
import {
  addFocusArea,
  updateFocusArea,
  deleteFocusArea,
  addRoutineTemplate,
  updateRoutineTemplate,
  toggleRoutineActive,
  toggleRoutineTrackCompletion,
  deleteRoutineTemplate,
} from "@/app/gunluk/actions";
import { updateHealthSettings } from "@/app/saglik/actions";
import { updateReadingTarget } from "./actions";

export const dynamic = "force-dynamic";

const COLOR_OPTIONS = ["#b9d8c8", "#f0c9d3", "#f3e2a9", "#bcd4e6", "#d3c6e6"];

export default async function ParametrelerPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Parametreler</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const [focusAreas, routines, settings] = await Promise.all([
    prisma.focusArea.findMany({ orderBy: { order: "asc" } }),
    prisma.routineTemplate.findMany({ orderBy: { order: "asc" } }),
    getAppSettings(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold">Parametreler</h1>
        <p className="text-sm text-muted">
          Uygulamadaki farklı sayfaların içeriğini ve varsayılan değerlerini buradan tek yerden düzenle.
        </p>
      </div>

      {/* OKUMA HEDEFİ */}
      <section id="okuma-hedefi" className="card p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <BookOpen size={16} /> Kitap Okuma Hedefi
        </h2>
        <form action={updateReadingTarget} className="flex flex-wrap items-end gap-3">
          <label className="flex flex-col gap-1 text-xs text-muted">
            Günlük sayfa hedefi
            <input
              type="number"
              min={1}
              name="dailyReadingPageTarget"
              defaultValue={settings.dailyReadingPageTarget}
              className="w-32 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <button className="rounded-lg bg-accent-mint px-4 py-1.5 text-sm font-medium">
            Kaydet
          </button>
          <SaveToast label="Okuma hedefi güncellendi" />
        </form>
        <p className="mt-3 text-xs text-muted">
          Ana sayfadaki &quot;Kitap Okuma Borcu&quot; kartı bu hedefe göre hesaplanır.
        </p>
      </section>

      {/* ÇALIŞMALAR - HOBİLER */}
      <section id="hobiler" className="card p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Palette size={16} /> Çalışmalar - Hobiler (Odak Alanları)
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
              <SaveToast label="Alan güncellendi" />
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

      {/* GÜNLÜK RUTİN ŞABLONLARI */}
      <section id="rutinler" className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Günlük Rutin Şablonları
        </h2>
        <div className="flex flex-col gap-2">
          {routines.map((r) => (
            <div key={r.id} className="flex flex-wrap items-center gap-2 rounded-lg bg-background p-3">
              <div className="flex flex-col items-center gap-0.5">
                <AutoSubmitCheckbox
                  action={toggleRoutineActive}
                  hidden={{ id: r.id }}
                  checked={r.active}
                />
                <span className="text-[9px] text-muted">Aktif</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <AutoSubmitCheckbox
                  action={toggleRoutineTrackCompletion}
                  hidden={{ id: r.id }}
                  checked={r.trackCompletion}
                />
                <span className="text-[9px] text-muted">Checkbox</span>
              </div>
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
                <SaveToast label="Rutin güncellendi" />
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

      {/* SAĞLIK AYARLARI */}
      <section id="saglik-ayarlari" className="card p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Droplet size={16} /> Sağlık Parametreleri
        </h2>
        <form action={updateHealthSettings} className="flex flex-wrap gap-3">
          <label className="flex flex-col gap-1 text-xs text-muted">
            Ortalama döngü (gün)
            <input
              type="number"
              name="avgCycleLengthDays"
              defaultValue={settings.avgCycleLengthDays}
              className="w-32 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Ortalama adet süresi (gün)
            <input
              type="number"
              name="avgPeriodLengthDays"
              defaultValue={settings.avgPeriodLengthDays}
              className="w-32 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Sparkles size={12} /> Lazer aralığı (gün)
            </span>
            <input
              type="number"
              name="laserIntervalDays"
              defaultValue={settings.laserIntervalDays}
              className="w-32 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Boy (cm)
            <input
              type="number"
              step="0.1"
              name="heightCm"
              defaultValue={settings.heightCm ?? ""}
              className="w-32 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Hedef kilo (kg)
            <input
              type="number"
              step="0.1"
              name="targetWeightKg"
              defaultValue={settings.targetWeightKg ?? ""}
              className="w-32 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <button className="self-end rounded-lg bg-accent-mint px-4 py-1.5 text-sm font-medium">
            Kaydet
          </button>
          <SaveToast label="Sağlık ayarları güncellendi" />
        </form>
        <p className="mt-3 text-xs text-muted">
          Not: en az 2 adet kaydın varsa ortalama döngü otomatik gerçek verilerden hesaplanır, bu
          alan sadece yeterli veri olmadığında varsayılan olarak kullanılır.
        </p>
      </section>
    </div>
  );
}
