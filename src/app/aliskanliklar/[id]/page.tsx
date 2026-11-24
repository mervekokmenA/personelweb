import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { toggleHabitDay, resetHabit } from "../actions";
import { ConfirmForm } from "@/components/ui/confirm-form";
import { getHabitView, dateKey, computeStreaks, formatHabitFrequency } from "@/lib/habit-grid";
import { TR_MONTHS_SHORT } from "@/lib/date";

export const dynamic = "force-dynamic";

const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

export default async function HabitHistoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!hasDatabaseUrl) return <DbSetupNotice />;
  const habit = await prisma.habit.findUnique({ where: { id } });
  if (!habit) notFound();

  const { periods, elapsed } = getHabitView(habit, { all: true });
  const completions = await prisma.habitCompletion.findMany({ where: { habitId: id } });
  const map = new Map(completions.map((c) => [dateKey(c.date), c.done]));

  const past = periods.filter((p) => !p.future);
  const done = past.filter((p) => map.get(dateKey(p.start))).length;
  const streaks = computeStreaks(periods, map);
  const pct = past.length ? Math.round((done / past.length) * 100) : 0;
  const missed = past.filter((p) => !p.current && !map.get(dateKey(p.start))).length;

  // Aya göre grupla
  const groups = new Map<string, { label: string; items: typeof periods }>();
  for (const p of periods) {
    const k = `${p.start.getUTCFullYear()}-${String(p.start.getUTCMonth()).padStart(2, "0")}`;
    const g = groups.get(k) ?? { label: `${MONTHS[p.start.getUTCMonth()]} ${p.start.getUTCFullYear()}`, items: [] };
    g.items.push(p);
    groups.set(k, g);
  }
  const ordered = [...groups.entries()].sort(([a], [b]) => (a < b ? 1 : -1)); // en yeni ay üstte

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link href="/aliskanliklar" className="flex w-fit items-center gap-1 rounded-lg border border-card-border px-3 py-1.5 text-sm text-muted hover:text-foreground">
          <ArrowLeft size={14} /> Alışkanlık Takibi
        </Link>
        <ConfirmForm
          action={resetHabit}
          hidden={{ id }}
          message={`"${habit.title}" için tüm işaretlemeler silinecek ve tarihler bugünden yeniden başlayacak. Emin misin?`}
        >
          <button className="flex items-center gap-1 rounded-lg border border-card-border px-3 py-1.5 text-sm text-muted hover:text-foreground">
            <RotateCcw size={14} /> Sıfırla
          </button>
        </ConfirmForm>
      </div>
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{habit.title}</h1>
        <p className="text-sm text-muted">
          {formatHabitFrequency(habit.frequency, habit.customIntervalDays)} · {habit.indefinite ? "süresiz" : `${habit.totalPeriods} tekrarlık program`} ·
          başlangıç {habit.startDate.getUTCDate()} {TR_MONTHS_SHORT[habit.startDate.getUTCMonth()]} {habit.startDate.getUTCFullYear()}
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {[
          ["Yapılan", `${done}/${past.length}`],
          ["Başarı", `%${pct}`],
          ["Şu anki seri", String(streaks.current)],
          ["En uzun seri", String(streaks.longest)],
          ["Kaçırılan", String(missed)],
        ].map(([k, v]) => (
          <div key={k} className="card p-3 text-center">
            <dd className="text-xl font-semibold">{v}</dd>
            <dt className="text-xs text-muted">{k}</dt>
          </div>
        ))}
      </dl>
      <p className="text-xs text-muted">
        {elapsed} tekrar geçti (bugün dahil); soluk kutular yaklaşan tekrarlardır. Kutuya tıklayarak geçmiş bir tekrarı da işaretleyebilir veya geri alabilirsin.
      </p>

      {ordered.map(([k, g]) => {
        const gPast = g.items.filter((p) => !p.future);
        const gDone = gPast.filter((p) => map.get(dateKey(p.start))).length;
        return (
          <section key={k} className="card p-4">
            <h2 className="mb-3 flex items-baseline justify-between text-sm font-medium">
              {g.label}
              <span className="text-xs font-normal text-muted">{gDone}/{gPast.length}{gPast.length < g.items.length && ` · ${g.items.length - gPast.length} yaklaşan`}</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {g.items.map((p) => {
                const key = dateKey(p.start);
                return (
                  <div key={key} className={`flex flex-col items-center gap-1 ${p.future ? "opacity-50" : ""}`}>
                    <span className={`whitespace-nowrap text-[11px] ${p.current ? "font-semibold underline" : "text-muted"}`}>{p.title}</span>
                    <AutoSubmitCheckbox action={toggleHabitDay} hidden={{ habitId: id, date: key }} checked={!!map.get(key)} />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
