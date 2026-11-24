import Link from "next/link";
import { Library, ArrowRight, Flame, GraduationCap, BookOpenCheck } from "lucide-react";
import type { LearningWidgetData } from "@/lib/learning/dashboard";

const BARS = ["var(--accent-blue)", "var(--accent-lilac)", "var(--accent-mint)", "var(--accent-yellow)"];

/** Ana sayfa: Kendi Eğitimlerim için küçük widget'lar */
export function LearningWidgets({ data }: { data: LearningWidgetData }) {
  const shown = data.modules.slice(0, 8);
  const hidden = data.modules.length - shown.length;
  const GROUP_LABEL = { ana: "", ek: "Ek", dil: "Dil" } as const;

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
          {shown.length === 0 ? (
            <p className="text-sm text-muted">Henüz başladığın bir eğitim yok. Bir parçayı &quot;Tamamla ve sonrakine geç&quot; ile bitirdiğinde burada ilerleme yüzdesi görünür.</p>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {shown.map((m, i) => (
                <li key={m.id}>
                  <div className="mb-1 flex items-baseline justify-between gap-2 text-xs">
                    <Link href={`/kendi-egitimlerim/${m.id}`} className="min-w-0 truncate font-medium hover:underline">
                      {m.group !== "ana" && <span className="mr-1 rounded bg-black/[0.06] px-1 text-[10px] text-muted">{GROUP_LABEL[m.group]}</span>}
                      {m.title}
                    </Link>
                    <span className="shrink-0 text-muted">%{m.pct} · {m.done}/{m.total}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-black/10" role="progressbar" aria-valuenow={m.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${m.title} ilerlemesi`}>
                    <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: BARS[i % BARS.length] }} />
                  </div>
                  {m.nextLessonId && (
                    <Link href={`/kendi-egitimlerim/${m.id}/${m.nextLessonId}`} className="mt-0.5 inline-flex items-center gap-0.5 text-[11px] text-muted hover:text-foreground">
                      Devam et <ArrowRight size={11} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
          {(hidden > 0 || data.notStarted > 0) && (
            <p className="text-[11px] text-muted">
              {hidden > 0 && <>+{hidden} eğitim daha · </>}
              {data.notStarted > 0 && <>{data.notStarted} eğitim henüz başlanmadı · </>}
              <Link href="/kendi-egitimlerim" className="underline">Tümü</Link>
            </p>
          )}
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
