import Link from "next/link";
import { ChevronLeft, ChevronRight, Moon } from "lucide-react";
import { MoonIcon } from "@/components/astroloji/moon-icon";
import { MoonDatePicker } from "@/components/astroloji/moon-date-picker";
import {
  moonAt,
  moonDetail,
  moonEventsBetween,
  noonTR,
  formatTrTime,
  MOON_QUARTER_NAMES,
} from "@/lib/astro/moon";
import { PHASE_GUIDE, PERIOD_NOTE } from "@/lib/astro/moon-guide";
import { addDays, dayKey, formatTrLong, toDateInputValue, todayKey } from "@/lib/date";

export const dynamic = "force-dynamic";

const TR_MONTHS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];
const WEEK_HEAD = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

function parseDate(input: string | undefined): Date {
  if (input && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
    const d = dayKey(input);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return todayKey();
}

function formatTrDateTime(d: Date): string {
  const dayStr = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "numeric",
    month: "long",
    weekday: "long",
  }).format(d);
  return `${dayStr}, ${formatTrTime(d)}`;
}

export default async function AyTakvimiPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) {
  const params = await searchParams;
  const selected = parseDate(params.date);
  const selectedStr = toDateInputValue(selected);
  const todayStr = toDateInputValue(todayKey());

  const year = selected.getUTCFullYear();
  const month = selected.getUTCMonth();
  const first = new Date(Date.UTC(year, month, 1));
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const lead = (first.getUTCDay() + 6) % 7;

  const prevMonth = toDateInputValue(new Date(Date.UTC(year, month - 1, 1)));
  const nextMonth = toDateInputValue(new Date(Date.UTC(year, month + 1, 1)));

  const events = moonEventsBetween(noonTR(addDays(first, -1)), noonTR(new Date(Date.UTC(year, month + 1, 2))));
  const eventByDay = new Map(events.map((e) => [e.dayKey, e]));

  const cells: (Date | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(Date.UTC(year, month, i + 1))),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const detail = moonDetail(noonTR(selected));
  const selEvent = eventByDay.get(selectedStr);
  const selAngle = selEvent ? selEvent.quarter * 90 : detail.angle;
  const selLabel = selEvent ? MOON_QUARTER_NAMES[selEvent.quarter] : detail.phaseName;

  // Seçili günün evre rehberi: çeyrek olayı varsa o evre, yoksa o günün evresi
  const selPhaseIndex = selEvent ? selEvent.quarter * 2 : detail.phaseIndex;
  const guide = PHASE_GUIDE[selPhaseIndex];

  return (
    <div className="moon-theme flex flex-col gap-6 rounded-3xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Moon size={22} /> Ay Takvimi
        </h1>
        <MoonDatePicker date={selectedStr} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="card p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <Link
              href={`/ay-takvimi?date=${prevMonth}`}
              className="ag-icon-btn"
              aria-label="Önceki ay"
            >
              <ChevronLeft size={16} />
            </Link>
            <h2 className="text-lg font-semibold">
              {TR_MONTHS[month]} {year}
            </h2>
            <Link href={`/ay-takvimi?date=${nextMonth}`} className="ag-icon-btn" aria-label="Sonraki ay">
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted">
            {WEEK_HEAD.map((d) => (
              <div key={d} className="py-1">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <div key={`e${i}`} />;
              const key = toDateInputValue(day);
              const ev = eventByDay.get(key);
              const info = moonAt(noonTR(day));
              const angle = ev ? ev.quarter * 90 : info.angle;
              const label = ev ? MOON_QUARTER_NAMES[ev.quarter] : info.phaseName;
              const isSel = key === selectedStr;
              const isToday = key === todayStr;
              return (
                <Link
                  key={key}
                  href={`/ay-takvimi?date=${key}`}
                  title={label}
                  aria-current={isSel ? "date" : undefined}
                  className={`flex min-h-[4.5rem] flex-col items-center gap-0.5 rounded-xl px-0.5 py-1.5 text-center transition-colors hover:bg-accent-lilac/20 sm:min-h-[6.25rem] ${
                    isSel ? "bg-accent-lilac/40 ring-2 ring-accent-lilac" : isToday ? "ring-1 ring-accent-lilac" : ""
                  }`}
                >
                  <span className={`text-xs ${isToday ? "font-bold" : "font-medium"}`}>{day.getUTCDate()}</span>
                  <MoonIcon angle={angle} size={30} title={label} />
                  <span className={`hidden text-[10px] leading-tight sm:block ${ev ? "font-semibold moon-silver" : "text-muted"}`}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <aside className="card flex flex-col items-center gap-3 p-5 text-center">
          <p className="text-sm text-muted">{formatTrLong(selected)}</p>
          <MoonIcon angle={selAngle} size={120} title={selLabel} />
          <h2 className="text-xl font-semibold">{selLabel}</h2>
          {guide.alias && <p className="-mt-2 text-xs text-muted">({guide.alias})</p>}
          <div className="w-full rounded-2xl border border-card-border bg-black/20 p-3 text-left text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide moon-silver">{guide.keyword}</p>
            <p>{guide.meaning}</p>
            <p className="mt-2 text-xs text-muted">{guide.themes}</p>
          </div>
          {selEvent && (
            <p className="text-sm">
              Tam an: <strong>{formatTrTime(selEvent.time)}</strong> (Türkiye saati)
            </p>
          )}
          <dl className="mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-2 text-left text-sm">
            <dt className="text-muted">Aydınlık</dt>
            <dd className="text-right font-medium">%{Math.round(detail.fraction * 100)}</dd>
            <dt className="text-muted">Ay yaşı</dt>
            <dd className="text-right font-medium">{detail.ageDays.toFixed(1).replace(".", ",")} gün</dd>
            <dt className="text-muted">Ay burcu</dt>
            <dd className="text-right font-medium">
              {detail.sign} {detail.degreeFormatted}
            </dd>
            {detail.nextNewMoon && (
              <>
                <dt className="text-muted">Sonraki Yeni Ay</dt>
                <dd className="text-right font-medium">{formatTrDateTime(detail.nextNewMoon)}</dd>
              </>
            )}
            {detail.nextFullMoon && (
              <>
                <dt className="text-muted">Sonraki Dolunay</dt>
                <dd className="text-right font-medium">{formatTrDateTime(detail.nextFullMoon)}</dd>
              </>
            )}
          </dl>
          <p className="mt-2 text-xs text-muted">
            Evre, öğlen 12:00 (Türkiye saati) için hesaplanır. Ay burcu Batı (tropikal) zodyağa göredir.
            Simgeler kuzey yarımküre görünümündedir: büyüyen Ay&apos;ın sağı, küçülen Ay&apos;ın solu aydınlık.
          </p>
        </aside>
      </div>

      <section className="card p-4 sm:p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
          {TR_MONTHS[month]} ayının evreleri
        </h2>
        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          {events
            .filter((e) => e.dayKey.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
            .map((e) => (
              <li key={e.time.toISOString()}>
                <Link
                  href={`/ay-takvimi?date=${e.dayKey}`}
                  className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-accent-lilac/20"
                >
                  <MoonIcon angle={e.quarter * 90} size={26} title={e.name} />
                  <span className="font-medium">{e.name}</span>
                  <span className="ml-auto text-muted">{formatTrDateTime(e.time)}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="card p-4 sm:p-5" aria-label="Ay evreleri rehberi">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">Ay evreleri rehberi</h2>
        <p className="mb-4 text-xs text-muted">
          Sekiz evre, Yeni Ay&apos;dan başlayarak sırayla. Seçili günün evresi vurgulanır.
        </p>
        <div className="flex flex-col gap-5">
          {(["büyüyen", "küçülen"] as const).map((period) => (
            <div key={period} className="flex flex-col gap-2">
              <p className="text-xs font-medium moon-silver">{PERIOD_NOTE[period]}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {PHASE_GUIDE.filter((g) => (period === "büyüyen" ? g.index <= 3 : g.index >= 4)).map((g) => {
                  const active = g.index === selPhaseIndex;
                  return (
                    <li key={g.index} className={`flex gap-3 rounded-2xl border p-3 ${active ? "border-accent-lilac bg-accent-lilac/15" : "border-card-border bg-black/15"}`}>
                      <MoonIcon angle={g.index * 45} size={52} title={g.name} />
                      <div className="min-w-0 text-sm">
                        <p className="font-semibold">
                          {g.name}
                          {g.alias && <span className="font-normal text-muted"> · {g.alias}</span>}
                          {active && <span className="ml-2 rounded-full bg-accent-lilac/40 px-2 py-0.5 text-[10px] font-medium">seçili gün</span>}
                        </p>
                        <p className="text-xs font-medium moon-silver">{g.keyword}</p>
                        <p className="mt-1 text-xs text-muted">{g.shape}</p>
                        <p className="mt-1.5">{g.meaning}</p>
                        <p className="mt-1.5 text-xs text-muted">{g.themes}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
