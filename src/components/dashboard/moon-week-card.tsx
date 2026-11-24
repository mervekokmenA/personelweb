import Link from "next/link";
import { Moon, ArrowRight } from "lucide-react";
import { MoonIcon } from "@/components/astroloji/moon-icon";
import { moonAt, moonEventsBetween, noonTR, MOON_QUARTER_NAMES } from "@/lib/astro/moon";
import { addDays, toDateInputValue, TR_DAYS_SHORT } from "@/lib/date";

/** Ana sayfa: içinde bulunulan haftanın (Pzt–Paz) günlük Ay evresi şeridi */
export function MoonWeekCard({ today }: { today: Date }) {
  const mondayOffset = (today.getUTCDay() + 6) % 7;
  const monday = addDays(today, -mondayOffset);
  const days = Array.from({ length: 7 }, (_, i) => addDays(monday, i));
  const events = moonEventsBetween(noonTR(days[0]), addDays(noonTR(days[6]), 1));
  const eventByDay = new Map(events.map((e) => [e.dayKey, e]));
  const todayStr = toDateInputValue(today);

  return (
    <section className="moon-theme card p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Moon size={16} /> Bu Haftanın Ay Takvimi
        </h2>
        <Link
          href="/ay-takvimi"
          className="flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground"
        >
          Ay takvimi <ArrowRight size={13} />
        </Link>
      </div>
      <div className="grid grid-cols-7 gap-1.5 sm:gap-3">
        {days.map((day) => {
          const key = toDateInputValue(day);
          const ev = eventByDay.get(key);
          const info = moonAt(noonTR(day));
          const angle = ev ? ev.quarter * 90 : info.angle;
          const label = ev ? MOON_QUARTER_NAMES[ev.quarter] : info.phaseName;
          const isToday = key === todayStr;
          return (
            <Link
              key={key}
              href={`/ay-takvimi?date=${key}`}
              title={`${day.getUTCDate()}.${day.getUTCMonth() + 1} — ${label}`}
              className={`flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-center transition-colors hover:bg-accent-lilac/20 ${
                isToday ? "bg-accent-lilac/30 ring-1 ring-accent-lilac" : ""
              }`}
            >
              <span className="text-[11px] font-medium text-muted">{TR_DAYS_SHORT[day.getUTCDay()]}</span>
              <MoonIcon angle={angle} size={34} title={label} />
              <span className="text-sm font-semibold">{day.getUTCDate()}</span>
              <span className="hidden min-h-[2.2em] text-[10px] leading-tight text-muted sm:block">{label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
