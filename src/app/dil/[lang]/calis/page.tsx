import { notFound } from "next/navigation";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getLang } from "@/lib/lang/cards";
import { buildQueue } from "@/lib/lang/db";
import { StudySession } from "@/components/lang/study-session";

export const dynamic = "force-dynamic";

export default async function CalisPage({ params, searchParams }: { params: Promise<{ lang: string }>; searchParams: Promise<{ deste?: string }> }) {
  const { lang: langId } = await params;
  const { deste } = await searchParams;
  const lang = getLang(langId);
  if (!lang) notFound();
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;

  const deck = lang.decks.find((d) => d.id === deste)?.id;
  const { items, dueCount, newCount } = await buildQueue(lang.id, deck);
  const deckTitle = deck ? lang.decks.find((d) => d.id === deck)?.title : "Tüm desteler";

  return (
    <div className="agro flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <span className="ag-tag w-fit"><span className="ag-dot" /> {lang.name} · {deckTitle}</span>
        <h1 className="ag-title">Çalışma</h1>
        <p className="text-sm ag-muted">{dueCount} tekrar + {newCount} yeni kart. Kısayollar: Boşluk = cevabı göster, 1–4 = not.</p>
      </header>
      <StudySession
        items={items.map((i) => ({ card: i.card, isNew: i.isNew, state: i.state }))}
        speech={lang.speech}
        rtl={lang.rtl}
        backHref={`/dil/${lang.id}`}
        langName={lang.name}
      />
    </div>
  );
}
