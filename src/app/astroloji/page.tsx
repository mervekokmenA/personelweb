import { computeChart } from "@/lib/astro/ephemeris";
import { getNatalChart, getNatalAscendantSignIndex } from "@/lib/astro/natal";
import { computeCrossAspects } from "@/lib/astro/aspects";
import { generateDailySummary } from "@/lib/astro/summary";
import { dayKey, toDateInputValue, todayKey, formatTrLong } from "@/lib/date";
import { ChartWheel, PositionTable } from "@/components/astroloji/chart-wheel";
import { TransitDatePicker } from "@/components/astroloji/transit-date-picker";
import { PLANET_LABELS_TR } from "@/lib/astro/ephemeris";
import { AlertTriangle, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AstrolojiPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) {
  const params = await searchParams;
  const date = params.date ?? toDateInputValue(todayKey());

  const now = new Date();
  const isToday = date === toDateInputValue(todayKey());
  const msSinceUtcMidnight = now.getTime() - todayKey().getTime();
  const transitDate = isToday ? now : new Date(dayKey(date).getTime() + msSinceUtcMidnight);

  const natal = getNatalChart();
  const ascendantSignIndex = getNatalAscendantSignIndex();
  const transit = computeChart({
    date: transitDate,
    ascendantSignIndex: ascendantSignIndex ?? undefined,
  });

  const crossAspects = natal ? computeCrossAspects(transit, natal) : [];
  const summary =
    natal && ascendantSignIndex !== null
      ? generateDailySummary(transit, natal, ascendantSignIndex, crossAspects)
      : null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Vedik Astroloji</h1>
        <TransitDatePicker date={date} />
      </div>
      <p className="text-sm text-muted">{formatTrLong(dayKey(date))} — sidereal (Lahiri) zodyak, whole sign ev sistemi</p>

      {!natal && (
        <div className="card flex items-start gap-3 border-amber-300 bg-amber-50 p-4 text-sm dark:bg-amber-950/20">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
          <p>
            Natal harita henüz ayarlanmadı, sadece bugünkü transit gösteriliyor. Görünmesi için{" "}
            <code>NATAL_CHART_JSON</code> ortam değişkenini <code>.env</code> (yerelde) ve Vercel
            proje ayarlarında tanımla. Bu bilgi asla repoya/git&apos;e commit edilmez ve arayüzde
            ham olarak gösterilmez.
          </p>
        </div>
      )}

      {summary && (
        <section className="card p-5">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
            <Sparkles size={15} /> Günün Özeti
          </h2>
          <p className="mb-3 text-sm leading-relaxed">{summary.intro}</p>
          {summary.aspectNotes.length > 0 && (
            <div className="mb-3 flex flex-col gap-2">
              {summary.aspectNotes.map((note, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted">
                  {note}
                </p>
              ))}
            </div>
          )}
          <div className="mt-4 border-t border-card-border pt-3">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
              Dikkat Edilecek Konular
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm">
              {summary.attentionPoints.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="card p-6">
        <ChartWheel natal={natal} transit={transit} />
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card p-5">
          <PositionTable title="Bugünkü Transit" positions={transit} colorClass="text-[#c25b7c]" />
        </section>
        {natal && (
          <section className="card p-5">
            <PositionTable title="Natal Haritan" positions={natal} colorClass="text-[#7c5cbf]" />
          </section>
        )}
      </div>

      {natal && (
        <section className="card p-5">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Transit → Natal Açılar
          </h2>
          <div className="flex flex-col divide-y divide-card-border text-sm">
            {crossAspects.length === 0 && (
              <p className="py-3 text-muted">Şu an için orb dahilinde belirgin bir açı yok.</p>
            )}
            {crossAspects.map((c, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <span>
                  Transit <strong>{PLANET_LABELS_TR[c.transitKey as keyof typeof PLANET_LABELS_TR]}</strong> —
                  natal <strong>{PLANET_LABELS_TR[c.natalKey as keyof typeof PLANET_LABELS_TR]}</strong>
                </span>
                <span className="text-muted">
                  {c.aspect.aspect.name} (orb {c.aspect.exactOrb.toFixed(2)}°)
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
