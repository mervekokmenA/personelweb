import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl, prisma } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { cardsOf, getLang } from "@/lib/lang/cards";
import { overridesFor, withOverride } from "@/lib/lang/db";
import { toggleSuspend } from "../../../actions";

export const dynamic = "force-dynamic";

export default async function DeckPage({ params }: { params: Promise<{ lang: string; deck: string }> }) {
  const { lang: langId, deck } = await params;
  const lang = getLang(langId);
  const info = lang?.decks.find((d) => d.id === deck);
  if (!lang || !info) notFound();
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;

  const cards = cardsOf(lang.id, deck);
  const [states, ov] = await Promise.all([
    prisma.langCardState.findMany({ where: { lang: lang.id } }),
    overridesFor(cards.map((c) => c.id)),
  ]);
  const st = new Map(states.map((s) => [s.cardId, s]));
  const now = new Date();

  return (
    <div className="agro flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <Link href={`/dil/${lang.id}`} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> {lang.name}</Link>
        <h1 className="ag-title">{info.title}</h1>
        <p className="text-sm ag-muted">{info.description} · {cards.length} kart</p>
      </header>
      <div className="overflow-x-auto">
        <table className="ag-table w-full text-left text-sm">
          <thead>
            <tr><th>#</th><th>{lang.name}</th><th>Okunuş</th><th>Anlam</th><th>Durum</th><th><span className="sr-only">Eylemler</span></th></tr>
          </thead>
          <tbody>
            {cards.map((c0, i) => {
              const c = withOverride(c0, ov.get(c0.id));
              const s = st.get(c.id);
              const status = !s ? "Yeni" : s.suspended ? "Askıda" : s.dueAt <= now ? "Tekrar bekliyor" : `${s.intervalDays} gün`;
              return (
                <tr key={c.id}>
                  <td className="ag-muted">{i + 1}</td>
                  <td lang={lang.speech.slice(0, 2)} dir={lang.rtl ? "rtl" : "ltr"} className="text-base font-medium">{c.front}</td>
                  <td className="ag-muted">{c.reading}</td>
                  <td>{c.meaning}</td>
                  <td className="whitespace-nowrap text-xs">{status}</td>
                  <td className="whitespace-nowrap text-right text-xs">
                    <Link href={`/dil/kart/${c.id}`} className="underline">Düzenle</Link>
                    <form action={toggleSuspend} className="ml-3 inline">
                      <input type="hidden" name="cardId" value={c.id} />
                      <button className="underline" title="Askıya alınan kart bir daha gösterilmez (zaten biliyorsan)">{s?.suspended ? "Geri al" : "Biliyorum, gösterme"}</button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
