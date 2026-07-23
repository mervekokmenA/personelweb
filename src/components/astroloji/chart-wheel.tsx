import { ZODIAC_SIGNS_TR } from "@/lib/astro/zodiac";
import { PLANET_LABELS_TR, type BodyPosition } from "@/lib/astro/ephemeris";

const PLANET_GLYPH: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mercury: "☿", Venus: "♀", Mars: "♂",
  Jupiter: "♃", Saturn: "♄", Uranus: "♅", Neptune: "♆", Pluto: "♇",
  Rahu: "☊", Ketu: "☋", Ascendant: "As",
};

function polar(cx: number, cy: number, r: number, lonDeg: number) {
  const theta = ((lonDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(theta), y: cy + r * Math.sin(theta) };
}

export function ChartWheel({
  natal,
  transit,
  size = 340,
}: {
  natal: BodyPosition[] | null;
  transit: BodyPosition[];
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 10;
  const signRingR = outerR - 4;
  const transitR = outerR - 34;
  const natalR = outerR - 68;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="mx-auto">
      {/* Burç halkası */}
      <circle cx={cx} cy={cy} r={signRingR} fill="none" stroke="var(--card-border)" strokeWidth={1} />
      <circle cx={cx} cy={cy} r={natalR - 18} fill="none" stroke="var(--card-border)" strokeWidth={1} />
      {Array.from({ length: 12 }, (_, i) => {
        const lon = i * 30;
        const p1 = polar(cx, cy, signRingR, lon);
        const labelP = polar(cx, cy, signRingR - 16, lon + 15);
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={p1.x} y2={p1.y} stroke="var(--card-border)" strokeWidth={1} />
            <text
              x={labelP.x}
              y={labelP.y}
              fontSize={10}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--muted)"
            >
              {ZODIAC_SIGNS_TR[i]}
            </text>
          </g>
        );
      })}

      {/* Natal gezegenler (iç halka) */}
      {natal &&
        natal.map((b) => {
          const p = polar(cx, cy, natalR, b.siderealLongitude);
          return (
            <text
              key={"n-" + b.key}
              x={p.x}
              y={p.y}
              fontSize={13}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#7c5cbf"
            >
              {PLANET_GLYPH[b.key] ?? b.key[0]}
            </text>
          );
        })}

      {/* Transit gezegenler (dış halka) */}
      {transit.map((b) => {
        const p = polar(cx, cy, transitR, b.siderealLongitude);
        return (
          <text
            key={"t-" + b.key}
            x={p.x}
            y={p.y}
            fontSize={13}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#c25b7c"
          >
            {PLANET_GLYPH[b.key] ?? b.key[0]}
          </text>
        );
      })}

      <text x={cx} y={cy - 6} textAnchor="middle" fontSize={10} fill="var(--muted)">
        iç: natal
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize={10} fill="var(--muted)">
        dış: transit
      </text>
    </svg>
  );
}

export function PositionTable({ title, positions, colorClass }: { title: string; positions: BodyPosition[]; colorClass: string }) {
  return (
    <div>
      <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wide ${colorClass}`}>{title}</h3>
      <div className="flex flex-col divide-y divide-card-border text-sm">
        {positions.map((p) => {
          const lon = p.siderealLongitude;
          const signIndex = Math.floor(lon / 30);
          const deg = lon - signIndex * 30;
          const d = Math.floor(deg);
          const m = Math.round((deg - d) * 60);
          return (
            <div key={p.key} className="flex items-center justify-between py-1.5">
              <span className="flex items-center gap-1.5">
                <span className="w-5 text-center">{PLANET_GLYPH[p.key] ?? ""}</span>
                {PLANET_LABELS_TR[p.key]}
                {p.retrograde && <span className="text-xs text-red-500">R</span>}
              </span>
              <span className="text-muted">
                {ZODIAC_SIGNS_TR[signIndex]} {d}° {m.toString().padStart(2, "0")}&apos;
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
