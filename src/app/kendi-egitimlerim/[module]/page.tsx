import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ClipboardCheck, Plus, BookOpen, ExternalLink, RotateCcw } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { Markdown } from "@/components/learning/markdown";
import { getResolvedModule } from "@/lib/learning/resolve";
import { getProgressMap, getQuizStats, moduleProgress, unitProgress } from "@/lib/learning/progress";
import { progressKey, getModule } from "@/lib/learning";
import { topicOfModule, extraIdsForMain } from "@/lib/learning/extra/topics";
import type { Resource } from "@/lib/learning/types";
import { toggleProgress, addCustomLesson, saveModuleNotes, restoreLesson } from "../actions";

export const dynamic = "force-dynamic";

function ResourceItem({ r }: { r: Resource }) {
  const internal = r.url?.startsWith("/");
  const inner = (
    <>
      <span className="ag-pill">{r.kind}</span>
      <span className="font-medium">{r.title}</span>
      {r.author && <span className="ag-muted">· {r.author}</span>}
      {r.note && <span className="ag-muted"> — {r.note}</span>}
      {r.url && !internal && <ExternalLink size={12} className="ag-muted" />}
    </>
  );
  return (
    <li className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
      {r.url ? (
        <a href={r.url} target={internal ? undefined : "_blank"} rel="noreferrer" className="flex flex-wrap items-center gap-x-2 gap-y-1 hover:underline">
          {inner}
        </a>
      ) : (
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">{inner}</span>
      )}
    </li>
  );
}

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: moduleId } = await params;
  if (!hasDatabaseUrl) {
    return (
      <div className="agro flex flex-col gap-6">
        <h1 className="ag-title">Kendi Eğitimlerim</h1>
        <DbSetupNotice />
      </div>
    );
  }
  const [m, progress, quizStats] = await Promise.all([getResolvedModule(moduleId), getProgressMap(), getQuizStats()]);
  if (!m) notFound();
  const p = moduleProgress(m, progress);
  let programNo = 0;

  return (
    <div className="agro flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <Link href="/kendi-egitimlerim" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Tüm modüller</Link>
        <span className="ag-tag w-fit"><span className="ag-dot" /> Modül</span>
        <h1 className="ag-title">{m.title}</h1>
        <p className="max-w-3xl text-sm ag-muted">{m.description}</p>
        {m.disclaimer && <p className="ag-quote-box max-w-3xl text-xs ag-muted">{m.disclaimer}</p>}
        {m.source && (
          <div className="ag-quote-box max-w-3xl text-sm">
            <p><strong>Ek modül · kaynak kitap:</strong> {m.source.author} — <em>{m.source.file}</em> ({m.source.language}{m.source.pages ? `, ${m.source.pages} sayfa` : ""})</p>
            <p className="mt-1 text-xs ag-muted">Ne kadarı okundu: {m.source.readNote}</p>
          </div>
        )}
        {(() => {
          const topic = m.group === "ek" ? topicOfModule(m.id) : undefined;
          const related = extraIdsForMain(m.id);
          return (
            <>
              {topic && (
                <p className="text-xs ag-muted">
                  Konu: <Link href={`/kendi-egitimlerim#ek-${topic.id}`} className="underline">{topic.title}</Link>
                  {topic.mainModule && getModule(topic.mainModule) && (
                    <> · İlgili ana modül: <Link href={`/kendi-egitimlerim/${topic.mainModule}`} className="underline">{getModule(topic.mainModule)!.title}</Link></>
                  )}
                </p>
              )}
              {related.length > 0 && (
                <div className="ag-quote-box max-w-3xl text-sm">
                  <p><strong>İlgili ek modüller</strong> (yüklenen kitaplar ve konu modülleri):</p>
                  {related.map(({ topic: t, ids }) => (
                    <div key={t.id} className="mt-2">
                      <p className="text-xs font-medium">{t.title}</p>
                      <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                        {ids.map((id) => {
                          const em = getModule(id);
                          return em ? <li key={id}><Link href={`/kendi-egitimlerim/${id}`} className="underline">{em.title}</Link></li> : null;
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </>
          );
        })()}
        <div className="ag-panel flex flex-col gap-3">
          <div className="ag-progress"><span style={{ width: `${p.pct}%` }} /></div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <span><strong>%{p.pct}</strong> tamamlandı ({p.done}/{p.total} parça)</span>
            <span className="ag-muted">Ders süresi: ~{p.hoursDone}/{p.hours} sa</span>
            <span className="ag-muted">Proje: {p.projectsDone}/{p.projectsTotal} (~{p.projectHours} sa)</span>
          </div>
        </div>
      </header>

      {m.competencies.length > 0 && <section className="ag-panel">
        <details>
          <summary className="cursor-pointer text-sm font-medium">Hedef: 5 yıllık deneyim seviyesinde yapabileceklerin ({m.competencies.length})</summary>
          <ul className="ag-ul mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm">
            {m.competencies.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <p className="mt-3 text-xs ag-muted">
            Not: Bu liste hedef yetkinlikleri tanımlar. Müfredat + projeler bir temel ve yol haritası verir; gerçek deneyim seviyesi, düzenli ve uzun süreli uygulamayla (günlük, proje, geri bildirim) oluşur.
          </p>
        </details>
      </section>}

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Programlar</h2>
        {m.tracks.map((t) => (
          <div key={t.id} className="flex flex-col gap-4">
            {m.tracks.length > 1 || t.title !== "Ana Müfredat" ? (
              <div>
                <h3 className="text-lg font-medium">{t.title}</h3>
                {t.description && <p className="text-sm ag-muted">{t.description}</p>}
              </div>
            ) : null}
            {t.units.map((u) => {
              programNo++;
              const up = unitProgress(m, u, progress);
              const qs = quizStats.get(`${m.id}/${u.id}`);
              return (
                <article key={u.id} className="ag-panel flex flex-col gap-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="ag-tag">Program {programNo}</span>
                      <h4 className="mt-2 text-lg font-medium">{u.title.replace(/^\d+\.\s*/, "")}</h4>
                      <p className="text-sm ag-muted">{u.description}</p>
                    </div>
                    <div className="w-full max-w-[14rem] shrink-0">
                      <div className="ag-progress"><span style={{ width: `${up.pct}%` }} /></div>
                      <p className="mt-1 text-xs ag-muted">%{up.pct} · {up.done}/{up.total} parça</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-1.5">
                    {u.lessons.map((l, idx) => {
                      const key = progressKey(m.id, l.id);
                      const done = progress.get(key)?.done ?? false;
                      return (
                        <li key={l.id} className="flex items-start gap-3 rounded-xl bg-[var(--ag-card)] px-3 py-2">
                          <AutoSubmitCheckbox action={toggleProgress} hidden={{ key, moduleId: m.id }} checked={done} />
                          <Link href={`/kendi-egitimlerim/${m.id}/${l.id}`} className="min-w-0 flex-1 text-sm hover:underline">
                            <span className="ag-muted">Parça {idx + 1} · </span>
                            <span className={done ? "line-through opacity-60" : "font-medium"}>{l.title}</span>
                            {l.custom && <span className="ag-pill ml-2">kendi eklediğin</span>}
                            {!l.body && !l.bodyRef && <span className="ag-pill ml-2">taslak</span>}
                          </Link>
                          <span className="shrink-0 text-xs ag-muted">{l.minutes} dk</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    {u.quiz && u.quiz.length > 0 ? (
                      <Link href={`/kendi-egitimlerim/${m.id}/test/${u.id}`} className="ag-btn ag-btn-dark">
                        <ClipboardCheck size={14} /> Konu denemesi ({u.quiz.length} soru)
                      </Link>
                    ) : (
                      <Link href={`/kendi-egitimlerim/${m.id}/test/${u.id}/duzenle`} className="ag-btn ag-btn-outline">
                        <ClipboardCheck size={14} /> Test ekle
                      </Link>
                    )}
                    {qs && (
                      <span className="text-xs ag-muted">
                        En iyi: <strong className="text-[var(--ag-ink)]">%{qs.best}</strong> · son: %{qs.last} · {qs.attempts} deneme
                        {qs.best >= 70 ? " · geçildi ✓" : ""}
                      </span>
                    )}
                    <form action={addCustomLesson} className="ml-auto flex flex-wrap items-center gap-2">
                      <input type="hidden" name="moduleId" value={m.id} />
                      <input type="hidden" name="unitId" value={u.id} />
                      <input name="title" required placeholder="Yeni parça başlığı" className="ag-input w-52" />
                      <button className="ag-btn ag-btn-soft"><Plus size={14} /> Parça ekle</button>
                    </form>
                  </div>
                </article>
              );
            })}
          </div>
        ))}

        {m.hiddenLessons.length > 0 && (
          <div className="ag-panel">
            <p className="mb-2 text-sm font-medium">Gizlediğin parçalar</p>
            <ul className="flex flex-col gap-2">
              {m.hiddenLessons.map((h) => (
                <li key={h.id} className="flex items-center gap-3 text-sm">
                  <span className="flex-1">{h.title}</span>
                  <form action={restoreLesson}>
                    <input type="hidden" name="moduleId" value={m.id} />
                    <input type="hidden" name="lessonId" value={h.id} />
                    <button className="ag-btn ag-btn-soft"><RotateCcw size={13} /> Geri getir</button>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {m.projects.length > 0 && <section className="flex flex-col gap-4">
        <h2 className="text-xl font-medium">Örnek Projeler ve Uygulamalar</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {m.projects.map((pr) => {
            const key = `project:${m.id}/${pr.id}`;
            const done = progress.get(key)?.done ?? false;
            return (
              <details key={pr.id} className="ag-panel">
                <summary className="flex cursor-pointer items-start gap-3">
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{pr.title}</span>
                      <span className="ag-pill">{pr.level}</span>
                      <span className="ag-pill">~{pr.hours} sa</span>
                      {done && <span className="ag-pill ag-pill-green">tamamlandı</span>}
                    </span>
                    <span className="mt-1 block text-sm ag-muted">{pr.description}</span>
                  </span>
                </summary>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <div><p className="font-medium">Özellikler</p><ul className="ag-ul list-disc pl-5">{pr.features.map((f, i) => <li key={i}>{f}</li>)}</ul></div>
                  <div><p className="font-medium">Adımlar</p><ol className="ag-ol list-decimal pl-5">{pr.steps.map((f, i) => <li key={i}>{f}</li>)}</ol></div>
                  <div className="flex flex-wrap gap-1.5">{pr.skills.map((s) => <span key={s} className="ag-pill">{s}</span>)}</div>
                  {pr.done && <div><p className="font-medium">Bitti sayılması için</p><ul className="ag-ul list-disc pl-5">{pr.done.map((f, i) => <li key={i}>{f}</li>)}</ul></div>}
                  <AutoSubmitCheckbox action={toggleProgress} hidden={{ key, moduleId: m.id }} checked={done} label={done ? "Tamamlandı (geri al)" : "Bu projeyi tamamladım"} />
                </div>
              </details>
            );
          })}
        </div>
      </section>}

      {m.library.length > 0 && (
        <section className="ag-panel flex flex-col gap-3">
          <h2 className="flex items-center gap-2 text-xl font-medium"><BookOpen size={18} /> Kaynak kitaplığım (yüklediğin dosyalar)</h2>
          <p className="text-xs ag-muted">Dosyalar sitede barındırılmaz; ders içinde bu kitaplardan hangi bölümün okunacağı belirtilir. Dosya adları aramak içindir.</p>
          <ul className="flex flex-col gap-2">{m.library.map((r, i) => <ResourceItem key={i} r={r} />)}</ul>
        </section>
      )}

      {m.resources.length > 0 && <section className="ag-panel flex flex-col gap-3">
        <h2 className="text-xl font-medium">Dış kaynaklar</h2>
        <ul className="flex flex-col gap-2">{m.resources.map((r, i) => <ResourceItem key={i} r={r} />)}</ul>
      </section>}

      <section className="ag-panel flex flex-col gap-3">
        <h2 className="text-xl font-medium">Eklenmeyenler ve doğrulama notları</h2>
        <p className="text-xs ag-muted">Güvenilir/kaynaklı biçimde doğrulanamadığı veya modülün kapsamı dışında kaldığı için eklenmeyen konular, nedenleriyle birlikte burada tutulur.</p>
        {m.notIncluded ? <Markdown source={m.notIncluded} /> : <p className="text-sm ag-muted">Henüz not yok.</p>}
        <details>
          <summary className="cursor-pointer text-sm font-medium">Bu notları düzenle</summary>
          <form action={saveModuleNotes} className="mt-3 flex flex-col gap-2">
            <input type="hidden" name="moduleId" value={m.id} />
            <textarea name="notIncluded" defaultValue={m.notIncluded ?? ""} rows={10} className="ag-textarea" />
            <button className="ag-btn ag-btn-dark w-fit">Kaydet</button>
          </form>
        </details>
      </section>
    </div>
  );
}
