import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { getAppSettings } from "@/lib/settings";
import { computeCycleSummary, computeLaserSummary, computeWeightSummary } from "@/lib/health";
import { toDateInputValue } from "@/lib/date";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { DeleteButton } from "@/components/ui/delete-button";
import Link from "next/link";
import {
  addPeriod,
  deletePeriod,
  addLaserSession,
  deleteLaserSession,
  addWeightEntry,
  deleteWeightEntry,
} from "./actions";
import { Droplet, Sparkles, Settings2, Scale } from "lucide-react";

export const dynamic = "force-dynamic";

function fmt(d: Date | null): string {
  if (!d) return "—";
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function SaglikPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Sağlık</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const [periods, laserSessions, weightEntries, settings] = await Promise.all([
    prisma.periodEntry.findMany({ orderBy: { startDate: "desc" } }),
    prisma.laserSession.findMany({ orderBy: { date: "desc" } }),
    prisma.weightEntry.findMany({ orderBy: { date: "desc" } }),
    getAppSettings(),
  ]);

  const cycle = computeCycleSummary(periods, settings.avgCycleLengthDays, settings.avgPeriodLengthDays);
  const laser = computeLaserSummary(laserSessions[0]?.date ?? null, settings.laserIntervalDays);
  const weight = computeWeightSummary(weightEntries, settings.heightCm, settings.targetWeightKg);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Sağlık</h1>

      {/* MENSTRUAL DÖNGÜ */}
      <section className="card p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Droplet size={16} /> Menstrual Döngü
        </h2>

        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-accent-pink/40 p-3">
            <p className="text-xs text-muted">Son Adet</p>
            <p className="text-sm font-semibold">{fmt(cycle.lastPeriodStart)}</p>
          </div>
          <div className="rounded-xl bg-accent-pink/40 p-3">
            <p className="text-xs text-muted">Tahmini Sonraki</p>
            <p className="text-sm font-semibold">{fmt(cycle.projectedNextPeriod)}</p>
            {cycle.daysUntilNext !== null && (
              <p className="text-xs text-muted">
                {cycle.daysUntilNext >= 0 ? `${cycle.daysUntilNext} gün kaldı` : `${-cycle.daysUntilNext} gün geçti`}
              </p>
            )}
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Ortalama Döngü</p>
            <p className="text-sm font-semibold">{cycle.avgCycleLengthDays} gün</p>
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Ortalama Süre</p>
            <p className="text-sm font-semibold">{cycle.avgPeriodLengthDays} gün</p>
          </div>
        </div>

        <form action={addPeriod} className="mb-4 flex flex-wrap gap-2 border-b border-card-border pb-4">
          <label className="flex flex-col gap-1 text-xs text-muted">
            Başlangıç
            <input
              type="date"
              name="startDate"
              required
              defaultValue={toDateInputValue(new Date())}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Bitiş (opsiyonel)
            <input
              type="date"
              name="endDate"
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1 text-xs text-muted">
            Not (opsiyonel)
            <input
              name="notes"
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <button className="self-end rounded-lg bg-accent-pink px-4 py-1.5 text-sm font-medium">
            Ekle
          </button>
        </form>

        <div className="flex flex-col divide-y divide-card-border text-sm">
          {cycle.cycleHistory.map((c) => (
            <div key={c.id} className="flex items-center justify-between py-2">
              <span>{fmt(c.startDate)}</span>
              <span className="text-muted">{c.cycleLengthDays ? `${c.cycleLengthDays} günlük döngü` : "—"}</span>
              <DeleteButton action={deletePeriod} hidden={{ id: c.id }} />
            </div>
          ))}
          {cycle.cycleHistory.length === 0 && (
            <p className="py-3 text-muted">Henüz kayıt yok.</p>
          )}
        </div>
      </section>

      {/* LAZER */}
      <section className="card p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Sparkles size={16} /> Lazer Takibi
        </h2>

        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-accent-blue/40 p-3">
            <p className="text-xs text-muted">Son Seans</p>
            <p className="text-sm font-semibold">{fmt(laser.lastSessionDate)}</p>
          </div>
          <div className="rounded-xl bg-accent-blue/40 p-3">
            <p className="text-xs text-muted">Önerilen Sonraki</p>
            <p className="text-sm font-semibold">{fmt(laser.nextSuggestedDate)}</p>
            {laser.daysUntilNext !== null && (
              <p className="text-xs text-muted">
                {laser.daysUntilNext >= 0 ? `${laser.daysUntilNext} gün kaldı` : `${-laser.daysUntilNext} gün geçti`}
              </p>
            )}
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Aralık</p>
            <p className="text-sm font-semibold">{settings.laserIntervalDays} gün</p>
          </div>
        </div>

        <form action={addLaserSession} className="mb-4 flex flex-wrap gap-2 border-b border-card-border pb-4">
          <label className="flex flex-col gap-1 text-xs text-muted">
            Tarih
            <input
              type="date"
              name="date"
              required
              defaultValue={toDateInputValue(new Date())}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Bölge (opsiyonel)
            <input
              name="area"
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1 text-xs text-muted">
            Not (opsiyonel)
            <input
              name="notes"
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <button className="self-end rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium">
            Ekle
          </button>
        </form>

        <div className="flex flex-col divide-y divide-card-border text-sm">
          {laserSessions.map((s) => (
            <div key={s.id} className="flex items-center justify-between py-2">
              <span>{fmt(s.date)}</span>
              <span className="text-muted">{s.area ?? ""}</span>
              <DeleteButton action={deleteLaserSession} hidden={{ id: s.id }} />
            </div>
          ))}
          {laserSessions.length === 0 && <p className="py-3 text-muted">Henüz kayıt yok.</p>}
        </div>
      </section>

      {/* KİLO TAKİBİ */}
      <section className="card p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Scale size={16} /> Kilo Takibi
        </h2>

        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-accent-mint/40 p-3">
            <p className="text-xs text-muted">Son Ölçüm</p>
            <p className="text-sm font-semibold">
              {weight.latestWeightKg !== null ? `${weight.latestWeightKg} kg` : "—"}
            </p>
            <p className="text-xs text-muted">{fmt(weight.latestDate)}</p>
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Boy</p>
            <p className="text-sm font-semibold">{settings.heightCm ? `${settings.heightCm} cm` : "—"}</p>
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">VKİ (BMI)</p>
            <p className="text-sm font-semibold">{weight.bmi ?? "—"}</p>
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Hedefe Kalan</p>
            <p className="text-sm font-semibold">
              {weight.diffToTargetKg === null
                ? "—"
                : weight.diffToTargetKg > 0
                  ? `${weight.diffToTargetKg} kg verilecek`
                  : weight.diffToTargetKg < 0
                    ? `${-weight.diffToTargetKg} kg alınacak`
                    : "Hedefe ulaşıldı 🎉"}
            </p>
            {settings.targetWeightKg && (
              <p className="text-xs text-muted">Hedef: {settings.targetWeightKg} kg</p>
            )}
          </div>
        </div>

        <form action={addWeightEntry} className="mb-4 flex flex-wrap gap-2 border-b border-card-border pb-4">
          <label className="flex flex-col gap-1 text-xs text-muted">
            Tarih
            <input
              type="date"
              name="date"
              required
              defaultValue={toDateInputValue(new Date())}
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Kilo (kg)
            <input
              type="number"
              step="0.1"
              name="weightKg"
              required
              className="w-24 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1 text-xs text-muted">
            Not (opsiyonel)
            <input
              name="notes"
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <button className="self-end rounded-lg bg-accent-mint px-4 py-1.5 text-sm font-medium">
            Ekle
          </button>
        </form>

        <div className="flex flex-col divide-y divide-card-border text-sm">
          {weight.history.map((w) => (
            <div key={w.id} className="flex items-center justify-between py-2">
              <span>{fmt(w.date)}</span>
              <span className="text-muted">
                {w.weightKg} kg{w.notes ? ` — ${w.notes}` : ""}
              </span>
              <DeleteButton action={deleteWeightEntry} hidden={{ id: w.id }} />
            </div>
          ))}
          {weight.history.length === 0 && <p className="py-3 text-muted">Henüz kayıt yok.</p>}
        </div>
      </section>

      {/* PARAMETRİK AYARLAR */}
      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
            <Settings2 size={16} /> Parametrik Ayarlar
          </h2>
          <Link
            href="/parametreler#saglik-ayarlari"
            className="flex items-center gap-1 text-xs text-muted hover:text-foreground"
          >
            <Settings2 size={13} /> Düzenle
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <span>
            Ortalama döngü: <strong>{settings.avgCycleLengthDays} gün</strong>
          </span>
          <span>
            Ortalama adet süresi: <strong>{settings.avgPeriodLengthDays} gün</strong>
          </span>
          <span>
            Lazer aralığı: <strong>{settings.laserIntervalDays} gün</strong>
          </span>
          <span>
            Boy: <strong>{settings.heightCm ? `${settings.heightCm} cm` : "—"}</strong>
          </span>
          <span>
            Hedef kilo: <strong>{settings.targetWeightKg ? `${settings.targetWeightKg} kg` : "—"}</strong>
          </span>
        </div>
        <p className="mt-3 text-xs text-muted">
          Bu değerleri Parametreler sayfasından güncelleyebilirsin. En az 2 adet kaydın varsa
          ortalama döngü otomatik gerçek verilerden hesaplanır, bu alan sadece yeterli veri
          olmadığında varsayılan olarak kullanılır.
        </p>
      </section>
    </div>
  );
}
