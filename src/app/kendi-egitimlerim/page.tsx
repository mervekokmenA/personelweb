import Link from "next/link";
import { Code2, Eye, Moon, Hammer, BookOpen, ArrowUpRight, Library } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getProgressMap, getQuizStats, moduleProgress } from "@/lib/learning/progress";

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

  const extraModules = modules.filter((m) => m.group === "ek");
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
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {modules.filter((m) => m.group !== "ek").map((m) => {
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

      {extraModules.length > 0 && (
        <section id="ek-moduller" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium">Ek Modüller — yüklediğin kitaplar ve internetten bulunan eksik konular</h2>
            <p className="max-w-2xl text-sm ag-muted">
              Her kitap (ve her eksik konu) için ayrı bir iç modül: yazar ve bağlam, bölüm bölüm ders, konu testi ve &quot;eklenmeyenler&quot; notu.
              {" "}{extraDone}/{extraTotal} parça tamamlandı.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extraModules.map((m) => {
              const p = moduleProgress(m, progress);
              return (
                <Link key={m.id} href={`/kendi-egitimlerim/${m.id}`} className="ag-stat group min-h-[8rem] hover:bg-white">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-medium leading-snug">{m.title}</h3>
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
        </section>
      )}

      <p className="text-xs ag-muted">
        Bilgi kaynakları: her derste kaynaklar ve doğrulama notu yer alır; güvenilir bir kaynakta doğrulanamayan konular eklenmez ve nedeniyle birlikte
        her modülün &quot;Eklenmeyenler ve doğrulama notları&quot; bölümünde listelenir.
      </p>
    </div>
  );
}
