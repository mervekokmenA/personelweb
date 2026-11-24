import Link from "next/link";
import { Code2, Eye, Moon, Hammer, BookOpen, ArrowUpRight, Library, Search, StickyNote } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getProgressMap, getQuizStats, moduleProgress } from "@/lib/learning/progress";
import { EXTRA_TOPICS } from "@/lib/learning/extra/topics";
import { getLearningStats } from "@/lib/learning/stats";
import { findLesson } from "@/lib/learning";
import { TempoPanel, type BookmarkItem, type WeakQuiz } from "@/components/learning/tempo-panel";

export const dynamic = "force-dynamic";

const ICONS = { code: Code2, eye: Eye, moon: Moon, hammer: Hammer, book: BookOpen } as const;

export default async function KendiEgitimlerimPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="agro flex flex-col gap-6">
        <h1 className="ag-title">Kendi Eğitimlerim</h1>
        <DbSetupNotice />
      </div>
    );
  }
  const [modules, progress, quizStats] = await Promise.all([getAllResolvedModules(), getProgressMap(), getQuizStats()]);

  const stats = await getLearningStats(modules, progress);
  const byModule = new Map(modules.map((m) => [m.id, m]));
  const bookmarks: BookmarkItem[] = stats.bookmarks.flatMap((b) => {
    const m = byModule.get(b.moduleId);
    const l = m && findLesson(m, b.lessonId);
    return m && l ? [{ moduleId: m.id, lessonId: b.lessonId, lessonTitle: l.lesson.title, moduleTitle: m.title }] : [];
  });
  const weak: WeakQuiz[] = modules.flatMap((m) =>
    m.tracks.flatMap((t) => t.units.flatMap((u) => {
      const st = quizStats.get(`${m.id}/${u.id}`);
      return st && st.best < 70 && u.quiz?.length ? [{ moduleId: m.id, unitId: u.id, unitTitle: u.title.replace(/^\d+\.\s*/, ""), moduleTitle: m.title, best: st.best }] : [];
    }))
  ).sort((a, b) => a.best - b.best);

  const extraModules = modules.filter((m) => m.group === "ek");
  const dilModules = modules.filter((m) => m.group === "dil");
  const extraStats = extraModules.map((m) => moduleProgress(m, progress));
  const extraDone = extraStats.reduce((s, p) => s + p.done, 0);
  const extraTotal = extraStats.reduce((s, p) => s + p.total, 0);

  return (
    <div className="agro flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <span className="ag-tag w-fit"><span className="ag-dot" /> Kendi Eğitimlerim</span>
        <h1 className="ag-title max-w-2xl">Dört alanda, kaynaklı ve ölçülebilir öğrenme</h1>
        <p className="max-w-2xl text-sm ag-muted">
          Her modül programlara (üniteler), parçalara (dersler) ve konu denemelerine ayrılır. Dersleri tamamladıkça ilerlemen burada görünür;
          içeriklerde eksik gördüğün yeri düzenleyebilir, kendi parçanı ekleyebilirsin.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <form action="/kendi-egitimlerim/ara" className="flex min-w-[16rem] flex-1 items-center gap-2 sm:max-w-md">
            <Search size={15} className="ag-muted" aria-hidden />
            <input name="q" type="search" placeholder="Derslerde ve notlarda ara…" aria-label="Eğitimlerde ara" className="ag-input flex-1" />
            <button className="ag-btn ag-btn-dark">Ara</button>
          </form>
          <Link href="/kendi-egitimlerim/notlar" className="ag-btn ag-btn-outline"><StickyNote size={14} /> Notlarım</Link>
        </div>
      </header>

      <TempoPanel stats={stats} bookmarks={bookmarks} weak={weak} />

      <div className="grid gap-4 md:grid-cols-2">
        {modules.filter((m) => (m.group ?? "ana") === "ana").map((m) => {
          const Icon = ICONS[m.icon];
          const p = moduleProgress(m, progress);
          const units = m.tracks.flatMap((t) => t.units);
          const quizzes = units.filter((u) => u.quiz?.length).length;
          const quizzesPassed = units.filter((u) => (quizStats.get(`${m.id}/${u.id}`)?.best ?? 0) >= 70).length;
          return (
            <Link key={m.id} href={`/kendi-egitimlerim/${m.id}`} className="ag-stat group min-h-[16rem] hover:bg-white">
              <div className="flex items-start justify-between">
                <span className="ag-stat-icon"><Icon size={18} /></span>
                <span className="ag-icon-btn opacity-70 group-hover:opacity-100"><ArrowUpRight size={14} /></span>
              </div>
              <h2 className="text-xl font-medium">{m.title}</h2>
              <p className="text-sm ag-muted">{m.tagline}</p>
              <div className="mt-auto flex flex-col gap-2">
                <div className="ag-progress"><span style={{ width: `${p.pct}%` }} /></div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs ag-muted">
                  <span><strong className="text-[var(--ag-ink)]">%{p.pct}</strong> ({p.done}/{p.total} parça)</span>
                  <span>{units.length} program</span>
                  <span>~{p.hours} sa ders + {p.projectHours} sa proje</span>
                  <span>Test: {quizzesPassed}/{quizzes} geçildi</span>
                  <span className="inline-flex items-center gap-1"><Library size={12} /> {m.library.length} kaynak kitabın</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {dilModules.length > 0 && (
        <section id="yabanci-dil" className="flex flex-col gap-3">
          <h2 className="text-lg font-medium">Yabancı Dil — alfabe, okunuş ve gramer dersleri</h2>
          <p className="max-w-2xl text-sm ag-muted">
            Kelime ve ifade kartları <Link href="/dil" className="underline">Yabancı Dil</Link> sayfasındadır; burada dillerin alfabe, okunuş ve gramer dersleri bulunur.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {dilModules.map((m) => {
              const p = moduleProgress(m, progress);
              return (
                <Link key={m.id} href={`/kendi-egitimlerim/${m.id}`} className="ag-stat group min-h-[8rem] hover:bg-white">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-medium leading-snug">{m.title}</h3>
                    <span className="ag-icon-btn shrink-0 opacity-70 group-hover:opacity-100"><ArrowUpRight size={14} /></span>
                  </div>
                  <div className="mt-auto flex flex-col gap-1.5">
                    <div className="ag-progress"><span style={{ width: `${p.pct}%` }} /></div>
                    <span className="text-xs ag-muted">%{p.pct} · {p.done}/{p.total} parça</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {extraModules.length > 0 && (
        <section id="ek-moduller" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium">Ek Modüller — yüklediğin kitaplar ve internetten bulunan eksik konular</h2>
            <p className="max-w-2xl text-sm ag-muted">
              Her kitap (ve her eksik konu) ayrı bir iç modüldür; burada konularına göre gruplandı. Her birinde yazar ve bağlam, bölüm bölüm ders, konu testi ve &quot;eklenmeyenler&quot; notu bulunur.
              {" "}{extraDone}/{extraTotal} parça tamamlandı.
            </p>
          </div>
          {(() => {
            const byId = new Map(extraModules.map((m) => [m.id, m]));
            const placed = new Set(EXTRA_TOPICS.flatMap((t) => t.moduleIds));
            const leftover = extraModules.filter((m) => !placed.has(m.id));
            const groups = EXTRA_TOPICS.map((t) => ({
              id: t.id,
              title: t.title,
              description: t.description,
              mods: t.moduleIds.map((id) => byId.get(id)).filter((m): m is NonNullable<typeof m> => !!m),
            }));
            if (leftover.length) groups.push({ id: "baska", title: "Diğer", description: "", mods: leftover });
            return groups.filter((g) => g.mods.length > 0).map((g) => (
              <div key={g.id} id={`ek-${g.id}`} className="flex flex-col gap-3">
                <div>
                  <h3 className="text-base font-medium">{g.title} <span className="text-xs font-normal ag-muted">({g.mods.length} modül)</span></h3>
                  {g.description && <p className="text-xs ag-muted">{g.description}</p>}
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {g.mods.map((m) => {
                    const p = moduleProgress(m, progress);
                    return (
                      <Link key={m.id} href={`/kendi-egitimlerim/${m.id}`} className="ag-stat group min-h-[8rem] hover:bg-white">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-base font-medium leading-snug">{m.title}</h4>
                          <span className="ag-icon-btn shrink-0 opacity-70 group-hover:opacity-100"><ArrowUpRight size={14} /></span>
                        </div>
                        <p className="text-xs ag-muted">{m.source?.author} · {m.source?.language}{m.source?.pages ? ` · ${m.source.pages} sayfa` : ""}</p>
                        <div className="mt-auto flex flex-col gap-1.5">
                          <div className="ag-progress"><span style={{ width: `${p.pct}%` }} /></div>
                          <span className="text-xs ag-muted">%{p.pct} · {p.done}/{p.total} parça</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ));
          })()}
        </section>
      )}

      <p className="text-xs ag-muted">
        Bilgi kaynakları: her derste kaynaklar ve doğrulama notu yer alır; güvenilir bir kaynakta doğrulanamayan konular eklenmez ve nedeniyle birlikte
        her modülün &quot;Eklenmeyenler ve doğrulama notları&quot; bölümünde listelenir.
      </p>
    </div>
  );
}
