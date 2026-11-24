import Link from "next/link";
import { ChevronLeft, Moon } from "lucide-react";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { MoonIcon } from "@/components/astroloji/moon-icon";
import { moonAt, noonTR } from "@/lib/astro/moon";
import { MOON_CYCLES, cycleKindFromAngle, dominantKind, type MoonCycleKind } from "@/lib/astro/moon-cycle";
import { PHASE_GUIDE } from "@/lib/astro/moon-guide";
import { dayKey, formatTrLong, toDateInputValue } from "@/lib/date";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";

export const dynamic = "force-dynamic";

const KINDS: MoonCycleKind[] = ["beyaz", "pembe", "kirmizi", "mor"];

export default async function AyDongusuPage() {
  const periods = hasDatabaseUrl
    ? await prisma.periodEntry.findMany({ orderBy: { startDate: "desc" } })
    : [];

  const rows = periods.map((p) => {
    const key = toDateInputValue(p.startDate);
    const info = moonAt(noonTR(dayKey(key)));
    return { id: p.id, key, date: dayKey(key), info, kind: cycleKindFromAngle(info.angle) };
  });

  const counts = Object.fromEntries(KINDS.map((k) => [k, rows.filter((r) => r.kind === k).length])) as Record<MoonCycleKind, number>;
  const dominant = dominantKind(rows.map((r) => r.kind));

  return (
    <div className="moon-theme flex flex-col gap-6 rounded-3xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Moon size={22} /> Ay Döngüsü
        </h1>
        <Link href="/ay-takvimi" className="ag-btn ag-btn-soft inline-flex items-center gap-1 text-sm">
          <ChevronLeft size={16} /> Ay Takvimi
        </Link>
      </div>

      {!hasDatabaseUrl && <DbSetupNotice />}

      <section className="card p-4 sm:p-5">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Ay döngüsü nedir?</h2>
        <p className="text-sm">
          Adet döngüsünün Ay ile ilişkisi, birçok kültürde anlatılan eski bir inanıştır. Günümüzde en çok Louise Lacey&apos;nin{" "}
          <em>Lunaception</em> (1974) kitabı ve Miranda Gray&apos;in <em>Red Moon</em> çalışmasıyla bilinir. Buna göre adet kanamasının
          başladığı gündeki Ay evresine bakılarak döngü dört türe ayrılır: Beyaz, Pembe, Kırmızı ve Mor Ay.
          Aşağıda, kaydettiğin her adet başlangıcının hangi Ay evresine denk geldiği ve hangi türe girdiği görünür.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {KINDS.map((k) => {
            const c = MOON_CYCLES[k];
            return (
              <li key={k} className="rounded-2xl border border-card-border bg-black/15 p-3 text-sm">
                <p className="flex items-center gap-2 font-semibold">
                  <span className="inline-block size-3 rounded-full" style={{ background: c.color }} aria-hidden />
                  {c.name}
                </p>
                <p className="mt-1 text-xs font-medium moon-silver">{c.when}</p>
                <p className="mt-1.5">{c.meaning}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="card p-4 sm:p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Senin dönemlerin</h2>
        {rows.length === 0 ? (
          <p className="text-sm text-muted">
            Henüz adet başlangıcı kaydı yok. <Link href="/saglik" className="underline">Sağlık</Link> sayfasından ekleyebilirsin.
          </p>
        ) : (
          <>
            <div className="mb-4 flex flex-wrap gap-2 text-sm">
              {KINDS.map((k) => (
                <span key={k} className="inline-flex items-center gap-2 rounded-full border border-card-border bg-black/15 px-3 py-1">
                  <span className="inline-block size-2.5 rounded-full" style={{ background: MOON_CYCLES[k].color }} aria-hidden />
                  {MOON_CYCLES[k].name.replace(" Döngüsü", "")}: <strong>{counts[k]}</strong>
                </span>
              ))}
            </div>
            {dominant && (
              <p className="mb-4 rounded-2xl border border-accent-lilac/60 bg-accent-lilac/15 p-3 text-sm">
                Kayıtlarında en sık görülen: <strong>{MOON_CYCLES[dominant].name}</strong> ({counts[dominant]}/{rows.length}).{" "}
                {MOON_CYCLES[dominant].summary}
              </p>
            )}
            <ul className="flex flex-col gap-2">
              {rows.map((r) => {
                const c = MOON_CYCLES[r.kind];
                const guide = PHASE_GUIDE[r.info.phaseIndex];
                return (
                  <li key={r.id}>
                    <Link
                      href={`/ay-takvimi?date=${r.key}`}
                      className="flex items-center gap-3 rounded-2xl border border-card-border bg-black/15 p-3 transition-colors hover:bg-accent-lilac/20"
                    >
                      <MoonIcon angle={r.info.angle} size={44} title={r.info.phaseName} />
                      <div className="min-w-0 flex-1 text-sm">
                        <p className="font-medium">{formatTrLong(r.date)}</p>
                        <p className="text-xs text-muted">
                          {r.info.phaseName} · aydınlık %{Math.round(r.info.fraction * 100)}
                          {guide?.keyword ? ` · ${guide.keyword}` : ""}
                        </p>
                      </div>
                      <span
                        className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-black"
                        style={{ background: c.color }}
                      >
                        {c.name.replace(" Döngüsü", "")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </section>

      <section className="card p-4 text-sm sm:p-5">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Bilimsel durum</h2>
        <p>
          Bu sınıflandırma geleneksel bir anlatıdır. Araştırmalar karışık sonuç veriyor: 2013&apos;te 74 kadınla yapılan bir yıllık
          çalışma Ay evreleriyle adet arasında bağ bulmadı; 2021&apos;de Science Advances&apos;te yayımlanan uzun dönemli kayıt analizi ise
          döngüleri 26-36 gün arasında olan kişilerde Ay döngüsüyle (≈29,5 gün) zaman zaman uyum görüldüğünü, yapay gece ışığıyla bu
          uyumun azaldığını bildirdi. Bu sayfa teşhis amaçlı değildir; kendi ritmini gözlemlemen için bir ayna işlevi görür.
        </p>
        <p className="mt-3 text-xs text-muted">
          Kaynaklar:{" "}
          <a className="underline" href="https://www.yogajournal.com/lifestyle/astrology/menstrual-cycle-moon/" target="_blank" rel="noreferrer">Yoga Journal</a>
          {" · "}
          <a className="underline" href="https://pubmed.ncbi.nlm.nih.gov/23889481/" target="_blank" rel="noreferrer">PubMed (2013)</a>
          {" · "}
          <a className="underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7840133" target="_blank" rel="noreferrer">Science Advances (PMC)</a>
          {" · "}
          <a className="underline" href="https://www.livescience.com/does-the-moon-affect-menstrual-cycles" target="_blank" rel="noreferrer">Live Science</a>
        </p>
      </section>
    </div>
  );
}
