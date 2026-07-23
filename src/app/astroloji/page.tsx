import { computeChart } from "@/lib/astro/ephemeris";
import { getNatalChart, getNatalConfig } from "@/lib/astro/natal";
import { computeCrossAspects } from "@/lib/astro/aspects";
import { dayKey, toDateInputValue, todayKey, formatTrLong } from "@/lib/date";
import { ChartWheel, PositionTable } from "@/components/astroloji/chart-wheel";
import { TransitDatePicker } from "@/components/astroloji/transit-date-picker";
import { PLANET_LABELS_TR } from "@/lib/astro/ephemeris";
import { AlertTriangle } from "lucide-react";

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

  const natalConfig = getNatalConfig();
  const natal = getNatalChart();
  const transit = computeChart({
    date: transitDate,
    latitude: natalConfig?.latitude,
    longitude: natalConfig?.longitude,
  });

  const crossAspects = natal ? computeCrossAspects(transit, natal) : [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Vedik Astroloji</h1>
        <TransitDatePicker date={date} />
      </div>
      <p className="text-sm text-muted">{formatTrLong(dayKey(date))} — sidereal (Lahiri) zodyak</p>

      {!natal && (
        <div className="card flex items-start gap-3 border-amber-300 bg-amber-50 p-4 text-sm dark:bg-amber-950/20">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
          <p>
            Doğum bilgileri henüz ayarlanmadı, sadece bugünkü transit gösteriliyor. Natal
            haritanın da görünmesi için <code>NATAL_BIRTH_DATE</code>, <code>NATAL_BIRTH_TIME</code>,{" "}
            <code>NATAL_UTC_OFFSET</code>, <code>NATAL_LATITUDE</code>, <code>NATAL_LONGITUDE</code>{" "}
            ortam değişkenlerini <code>.env</code> (yerelde) ve Vercel proje ayarlarında tanımla.
            Bu bilgiler asla repoya/git&apos;e commit edilmez ve arayüzde ham olarak gösterilmez.
          </p>
        </div>
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
