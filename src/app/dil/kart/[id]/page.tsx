import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getCard, getLang } from "@/lib/lang/cards";
import { overridesFor, withOverride } from "@/lib/lang/db";
import { resetCardEdit, saveCardEdit } from "../../actions";

export const dynamic = "force-dynamic";

export default async function CardEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const base = getCard(id);
  if (!base) notFound();
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const lang = getLang(base.lang)!;
  const ov = (await overridesFor([id])).get(id);
  const c = withOverride(base, ov);

  async function save(fd: FormData) {
    "use server";
    await saveCardEdit(fd);
    redirect(`/dil/${base!.lang}/deste/${base!.deck}`);
  }
  async function reset(fd: FormData) {
    "use server";
    await resetCardEdit(fd);
    redirect(`/dil/kart/${base!.id}`);
  }

  return (
    <div className="agro flex max-w-2xl flex-col gap-6">
      <header className="flex flex-col gap-2">
        <Link href={`/dil/${lang.id}/deste/${base.deck}`} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Deste</Link>
        <h1 className="ag-title" lang={lang.speech.slice(0, 2)} dir={lang.rtl ? "rtl" : "ltr"}>{c.front}</h1>
        <p className="text-xs ag-muted">
          Kartlar yapay zekâ ile hazırlandı ve anadili konuşan biri tarafından doğrulanmadı. Bir hata görürsen buradan düzeltebilirsin; sıfırlarsan özgün hâline döner.
          Ön yüz (kelime) değiştirilemez, çünkü ilerleme kaydı ona bağlıdır.
        </p>
      </header>
      <form action={save} className="flex flex-col gap-3">
        <input type="hidden" name="cardId" value={id} />
        {[
          ["meaning", "Türkçe anlam", c.meaning],
          ["reading", "Okunuş", c.reading ?? ""],
          ["sentence", "Örnek cümle", c.sentence],
          ["sentenceReading", "Cümle okunuşu", c.sentenceReading ?? ""],
          ["sentenceMeaning", "Cümle anlamı", c.sentenceMeaning],
          ["note", "Not", c.note ?? ""],
        ].map(([name, label, value]) => (
          <label key={name} className="flex flex-col gap-1 text-sm">
            {label}
            <input name={name} defaultValue={value} className="ag-input" dir={name === "sentence" && lang.rtl ? "rtl" : "ltr"} />
          </label>
        ))}
        <div className="flex gap-2"><button className="ag-btn ag-btn-dark">Kaydet</button></div>
      </form>
      {ov && (
        <form action={reset}>
          <input type="hidden" name="cardId" value={id} />
          <button className="ag-btn ag-btn-outline">Özgün hâline sıfırla</button>
        </form>
      )}
    </div>
  );
}
