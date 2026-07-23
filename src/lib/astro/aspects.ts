import type { BodyPosition } from "./ephemeris";
import { findAspect, type AspectHit } from "./zodiac";

export interface CrossAspect {
  transitKey: string;
  natalKey: string;
  aspect: AspectHit;
}

/** Transit gezegenleri ile natal gezegenler arasındaki açıları bulur. */
export function computeCrossAspects(
  transit: BodyPosition[],
  natal: BodyPosition[]
): CrossAspect[] {
  const results: CrossAspect[] = [];
  for (const t of transit) {
    if (t.key === "Ascendant") continue; // transit yükseleni sürekli değişir, anlamsız
    for (const n of natal) {
      const hit = findAspect(t.siderealLongitude, n.siderealLongitude);
      if (hit) {
        results.push({ transitKey: t.key, natalKey: n.key, aspect: hit });
      }
    }
  }
  return results.sort((a, b) => a.aspect.exactOrb - b.aspect.exactOrb);
}
