import { PuzzleEditor } from "@/components/yapboz/puzzle-editor";

export const metadata = {
  title: "Yapboz — Kişisel Panel",
};

export default function YapbozPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Yapboz</h1>
        <p className="text-sm text-muted">
          Bir görsel yükle, alanını belirle, yazdırılabilir/kesilebilir bir yapboz haline getir.
        </p>
      </div>
      <PuzzleEditor />
    </div>
  );
}
