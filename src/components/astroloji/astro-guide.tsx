import { SIGNS, PLANETS, MODES, ELEMENTS, DIGNITIES, HOUSES, ANGLES, ASPECTS, STOJANOVIC_ROWS, CRITICAL_DEGREES, SIGN_BY_NAME } from "@/lib/astro/guide-data";

/** Ev tekerleği: 1. ev yükselenden (sol) başlar, saat yönünün tersine (altından) ilerler. Merkez 50,50; yarıçap 46. */
function pos(deg: number, r: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: 50 + r * Math.cos(rad), y: 50 - r * Math.sin(rad) };
}

function HouseWheel() {
  const R = 43, RING = 15.5, CORE = 8.5;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[900px]" style={{ containerType: "inline-size" }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" role="img" aria-label="Ev tekerleği: 12 ev ve anahtar sözcükleri">
        <circle cx="50" cy="50" r={R} fill="none" stroke="currentColor" strokeWidth="0.22" />
        <circle cx="50" cy="50" r={RING} fill="none" stroke="currentColor" strokeWidth="0.18" />
        <circle cx="50" cy="50" r={CORE} fill="none" stroke="currentColor" strokeWidth="0.18" />
        {Array.from({ length: 12 }, (_, k) => {
          const a = pos(180 + 30 * k, CORE);
          const b = pos(180 + 30 * k, R);
          return <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="currentColor" strokeWidth={k % 6 === 0 ? 0.3 : 0.15} />;
        })}
      </svg>

      {HOUSES.map((h) => {
        const mid = 180 + 30 * (h.n - 1) + 15;
        const num = pos(mid, 12);
        const txt = pos(mid, 31);
        return (
          <div key={h.n}>
            <span className="absolute -translate-x-1/2 -translate-y-1/2 font-semibold" style={{ left: `${num.x}%`, top: `${num.y}%`, fontSize: "3cqw" }}>{h.n}</span>
            <div className="absolute w-[13.5%] -translate-x-1/2 -translate-y-1/2 text-center leading-tight" style={{ left: `${txt.x}%`, top: `${txt.y}%`, fontSize: "1.15cqw" }}>
              <p className="font-semibold" style={{ fontSize: "1.5cqw" }}>{h.n}. Ev</p>
              <p className="text-muted">{h.keywords}</p>
            </div>
          </div>
        );
      })}

      {[
        { abbr: "ASC", name: "Yükselen", x: 0.5, y: 50, tx: "0%" },
        { abbr: "DSC", name: "Alçalan", x: 99.5, y: 50, tx: "-100%" },
        { abbr: "MC", name: "Tepe", x: 50, y: 1.2, tx: "-50%" },
        { abbr: "IC", name: "Dip", x: 50, y: 98.8, tx: "-50%" },
      ].map((a) => (
        <span key={a.abbr} className="absolute -translate-y-1/2 font-semibold" style={{ left: `${a.x}%`, top: `${a.y}%`, transform: `translate(${a.tx}, -50%)`, fontSize: "1.7cqw" }}>
          {a.abbr}
        </span>
      ))}
    </div>
  );
}

function Chips({ names }: { names: string[] }) {
  return (
    <span className="inline-flex flex-wrap gap-1">
      {names.map((n) => (
        <span key={n} className="rounded-full border border-card-border px-2 py-0.5 text-xs">{SIGN_BY_NAME[n]?.glyph} {n}</span>
      ))}
    </span>
  );
}

export function AstroGuide() {
  return (
    <div className="flex flex-col gap-6">
      <section className="card p-4 sm:p-5">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">Ev tekerleği — 12 ev</h2>
        <p className="mb-4 text-xs text-muted">1. ev Yükselen&apos;den (soldan) başlar ve haritada saat yönünün tersine ilerler; üst yarı (7–12) ufkun üstüdür.</p>
        <div className="hidden md:block"><HouseWheel /></div>
        <ol className="grid gap-2 text-sm sm:grid-cols-2 md:hidden">
          {HOUSES.map((h) => (
            <li key={h.n} className="rounded-xl border border-card-border p-3">
              <p className="font-semibold">{h.n}. Ev</p>
              <p className="text-xs text-muted">{h.keywords}</p>
            </li>
          ))}
        </ol>
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {ANGLES.map((a) => (
            <div key={a.abbr} className="flex gap-1.5"><dt className="font-semibold">{a.abbr}</dt><dd className="text-muted">— {a.name}</dd></div>
          ))}
        </dl>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Burç anahtar kelimeleri</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {SIGNS.map((s) => (
              <li key={s.key} className="flex gap-2"><span className="w-6 shrink-0 text-lg leading-5">{s.glyph}</span><span><strong>{s.name}:</strong> <span className="text-muted italic">{s.keywords}</span></span></li>
            ))}
          </ul>
        </section>

        <section className="card p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Gezegen anahtar kelimeleri</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {PLANETS.map((p) => (
              <li key={p.key} className="flex gap-2"><span className="w-6 shrink-0 text-lg leading-5">{p.glyph}</span><span><strong>{p.name}:</strong> <span className="text-muted italic">{p.keywords}</span></span></li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card p-4 sm:p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Nitelikler ve elementler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            {MODES.map((m) => (
              <div key={m.name} className="text-sm">
                <p className="font-semibold">{m.name} <span className="font-normal text-muted">— {m.note}</span></p>
                <div className="mt-1"><Chips names={m.signs} /></div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {ELEMENTS.map((e) => (
              <div key={e.name} className="text-sm">
                <p className="font-semibold">{e.name}</p>
                <div className="mt-1"><Chips names={e.signs} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card p-4 sm:p-5">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">Gezegen onurları (klasik yedi gezegen)</h2>
        <p className="mb-3 text-xs text-muted">Yönetim: gezegen kendi burcunda · Detriment: rahat olmadığı burç · Düşüş: zayıfladığı burç · Yücelim: güçlendiği burç.</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead>
              <tr className="border-b border-card-border text-xs text-muted">
                <th className="py-2 pr-3 font-medium">Gezegen</th><th className="py-2 pr-3 font-medium">Yönetim</th><th className="py-2 pr-3 font-medium">Detriment</th><th className="py-2 pr-3 font-medium">Düşüş</th><th className="py-2 font-medium">Yücelim</th>
              </tr>
            </thead>
            <tbody>
              {DIGNITIES.map((d) => (
                <tr key={d.planet} className="border-b border-card-border/60 align-top">
                  <th className="py-2 pr-3 font-semibold"><span className="mr-1">{d.glyph}</span>{d.planet}</th>
                  {[d.rulership, d.detriment, d.fall, d.exaltation].map((col, i) => (
                    <td key={i} className="py-2 pr-3">{col.map((n) => <div key={n}>{SIGN_BY_NAME[n].glyph} {n}</div>)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card p-4 sm:p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Açılar (Aspects)</h2>
        <ul className="flex flex-col gap-2 text-sm">
          {ASPECTS.map((a) => (
            <li key={a.name} className="flex gap-3"><span className="w-6 shrink-0 text-center text-lg leading-5">{a.glyph}</span><span><strong>{a.name}</strong> <span className="text-xs text-muted">({a.angle})</span><br /><span className="text-muted">{a.note}</span></span></li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted">Not: Kaynak görselde kavuşum ve karşıt açıklamaları yer değiştirmiş görünüyordu; burada standart astroloji tanımı kullanıldı (kavuşum = enerjilerin birleşmesi, karşıt = karşıt kutuplar / gerilim).</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card p-4 sm:p-5">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">Nikola Stojanovic derece teorisi</h2>
          <p className="mb-3 text-xs text-muted">Kaynak görsele göre: bir burcun içindeki derece, o derecenin &quot;gerçek ifadesi&quot; olan burcu temsil eder. 0° = bulunduğu burcun gerçek ifadesi.</p>
          <ul className="flex flex-col gap-1 text-sm">
            {STOJANOVIC_ROWS.map((r) => (
              <li key={r.sign} className="flex justify-between gap-2 border-b border-card-border/50 py-1"><span>{r.degrees.join(", ")}°</span><span>→ {r.glyph} {r.sign}</span></li>
            ))}
          </ul>
        </section>

        <section className="card p-4 sm:p-5">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">Kritik dereceler</h2>
          <p className="mb-3 text-xs text-muted">Görseldeki listedir; kaynakları ve yöntem tutarlılığı bağımsız olarak doğrulanamadı.</p>
          <ul className="flex flex-col gap-2 text-sm">
            {CRITICAL_DEGREES.map((c) => (
              <li key={c.group} className="flex justify-between gap-3 border-b border-card-border/50 py-1"><span className="font-medium">{c.group}</span><span>{c.degrees}</span></li>
            ))}
          </ul>
        </section>
      </div>

      <p className="text-xs text-muted">
        Bu sayfa, eklediğin &quot;anahtar kelimeler&quot; özet görselinden aktarıldı. Anahtar sözcükler öğrenme/hatırlama kısaltmalarıdır, kesin hüküm değildir. Genel astroloji (Batı) kavramlarını özetler;
        Vedik (sidereal) sekmesindeki hesaplar burç/ev yorumlarında farklı gelenek kullanabilir.
      </p>
    </div>
  );
}
