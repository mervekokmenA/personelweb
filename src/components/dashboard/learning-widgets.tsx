import Link from "next/link";
import { Library, ArrowRight, Flame, GraduationCap, BookOpenCheck } from "lucide-react";
import type { LearningWidgetData } from "@/lib/learning/dashboard";

const BARS = ["var(--accent-blue)", "var(--accent-lilac)", "var(--accent-mint)", "var(--accent-yellow)"];

/** Ana sayfa: Kendi Eğitimlerim için küçük widget'lar */
export function LearningWidgets({ data }: { data: LearningWidgetData }) {
  const main = data.modules.filter((m) => m.group === "ana");
  const extra = data.modules.filter((m) => m.group === "ek");
  const extraDone = extra.reduce((s, m) => s + m.done, 0);
  const extraTotal = extra.reduce((s, m) => s + m.total, 0);
  const extraPct = extraTotal ? Math.round((extraDone / extraTotal) * 100) : 0;

  return (
    <section className="flex flex-col gap-3" aria-label="Kendi Eğitimlerim özeti">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Library size={16} /> Kendi Eğitimlerim
        </h2>
        <Link href="/kendi-egitimlerim" className="flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground">
          Tümü <ArrowRight size={13} />
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card flex flex-col gap-3 p-4">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <GraduationCap size={15} /> İlerleme
          </h3>
          <ul className="flex flex-col gap-2.5">
            {main.map((m, i) => (
              <li key={m.id}>
                <Link href={`/kendi-egitimlerim/${m.id}`} className="block rounded-md hover:bg-black/[0.03]">
                  <div className="mb-1 flex items-baseline justify-between text-xs">
                    <span className="font-medium">{m.title}</span>
                    <span className="text-muted">%{m.pct} · {m.done}/{m.total}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-black/10" role="progressbar" aria-valuenow={m.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${m.title} ilerlemesi`}>
                    <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: BARS[i % BARS.length] }} />
                  </div>
                </Link>
              </li>
            ))}
            {extra.length > 0 && (
              <li>
                <Link href="/kendi-egitimlerim#ek-moduller" className="block rounded-md hover:bg-black/[0.03]">
                  <div className="mb-1 flex items-baseline justify-between text-xs">
                    <span className="font-medium">Ek modüller ({extra.length} modül)</span>
                    <span className="text-muted">%{extraPct} · {extraDone}/{extraTotal}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-black/10">
                    <div className="h-full rounded-full" style={{ width: `${extraPct}%`, background: "var(--accent-pink)" }} />
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="card flex flex-col gap-2 p-4">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <BookOpenCheck size={15} /> Sıradaki parça
          </h3>
          {data.next ? (
            <Link
              href={`/kendi-egitimlerim/${data.next.moduleId}/${data.next.lessonId}`}
              className="group flex h-full flex-col gap-1 rounded-lg p-2 -m-2 hover:bg-black/[0.03]"
            >
              <span className="text-xs text-muted">{data.next.moduleTitle} · {data.next.unitTitle}</span>
              <span className="text-base font-medium leading-snug">{data.next.lessonTitle}</span>
              <span className="mt-auto flex items-center gap-1 pt-2 text-xs text-muted">
                ~{data.next.minutes} dk <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" /> Devam et
              </span>
            </Link>
          ) : (
            <p className="text-sm text-muted">Tüm parçaları tamamladın. Yeni bir ek parça ekleyebilirsin.</p>
          )}
        </div>

        <div className="card flex flex-col gap-3 p-4">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <Flame size={15} /> Son 7 gün
          </h3>
          <dl className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-black/[0.04] p-2">
              <dd className="text-xl font-semibold">{data.doneThisWeek}</dd>
              <dt className="text-[11px] text-muted">parça bitti</dt>
            </div>
            <div className="rounded-lg bg-black/[0.04] p-2">
              <dd className="text-xl font-semibold">{data.quizzesThisWeek}</dd>
              <dt className="text-[11px] text-muted">test çözüldü</dt>
            </div>
            <div className="rounded-lg bg-black/[0.04] p-2">
              <dd className="text-xl font-semibold">{data.avgQuizPct === null ? "—" : `%${data.avgQuizPct}`}</dd>
              <dt className="text-[11px] text-muted">ort. başarı</dt>
            </div>
          </dl>
          <p className="mt-auto text-xs text-muted">
            Toplam: {data.totalDone}/{data.totalLessons} parça tamamlandı.
          </p>
        </div>
      </div>
    </section>
  );
}
