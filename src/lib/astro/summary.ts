import type { BodyPosition, PlanetKey } from "./ephemeris";
import { PLANET_LABELS_TR } from "./ephemeris";
import { HOUSE_MEANINGS_TR, wholeSignHouse } from "./zodiac";
import { ARCHETYPES_TR } from "./archetypes";
import type { CrossAspect } from "./aspects";

const PLANET_NATURE_TR: Partial<Record<PlanetKey, string>> = {
  Sun: "kimliğin, iraden ve görünürlüğün",
  Moon: "duyguların, iç dünyan ve günlük ihtiyaçların",
  Mercury: "zihnin, iletişimin ve günlük düşünce akışın",
  Venus: "ilişkilerin, değerlerin ve estetik tercihlerin",
  Mars: "eylem gücün, arzuların ve girişkenliğin",
  Jupiter: "büyüme, anlam ve genişleme arayışın",
  Saturn: "sorumlulukların, sınırların ve disiplinin",
  Uranus: "ani değişim ve özgürleşme ihtiyacın",
  Neptune: "sezgilerin, hayal gücün ve belirsizlik hissin",
  Pluto: "dönüşüm, güç ve derinlik arayışın",
  Rahu: "yeni yönelim ve doyumsuz arzuların",
  Ketu: "bırakma, geçmişle hesaplaşma temaların",
  Lilith: "bastırılmış içgüdülerin ve uzlaşmayan tarafının",
  Chiron: "en derin yaranın ve şifa verme potansiyelinin",
  MC: "kamusal rolün ve kariyer yönünün",
  Descendant: "ilişkilerde aynalanan ötekinin",
  Vertex: "kader gibi hissettiren karşılaşmaların",
};

function archetypeClause(key: PlanetKey): string {
  const a = ARCHETYPES_TR[key];
  if (!a) return "";
  return ` (Vedik arketip: ${a.archetype}${a.vedicName !== "—" && !a.vedicName.startsWith("— ") ? `, ${a.vedicName}` : ""} — ${a.description})`;
}

const FAST_PERSONAL_PLANETS: PlanetKey[] = ["Moon", "Sun", "Mercury", "Venus", "Mars"];

const ASPECT_TONE: Record<string, "harmonik" | "gergin" | "yoğun"> = {
  "Kavuşum (0°)": "yoğun",
  "Yarı Kare (45°)": "gergin",
  "Kare (90°)": "gergin",
  "Quintile (72°)": "harmonik",
  "Üçgen (120°)": "harmonik",
  "Biquintile (144°)": "harmonik",
  "Karşıt (180°)": "gergin",
};

function signIndexOf(lon: number): number {
  return Math.floor((((lon % 360) + 360) % 360) / 30);
}

export interface DailySummary {
  intro: string;
  aspectNotes: string[];
  attentionPoints: string[];
}

export function generateDailySummary(
  transit: BodyPosition[],
  natal: BodyPosition[],
  ascendantSignIndex: number,
  crossAspects: CrossAspect[]
): DailySummary {
  const moon = transit.find((p) => p.key === "Moon");
  const sun = transit.find((p) => p.key === "Sun");

  const moonSign = moon ? signIndexOf(moon.siderealLongitude) : null;
  const moonHouse = moonSign !== null ? wholeSignHouse(moonSign, ascendantSignIndex) : null;
  const sunSign = sun ? signIndexOf(sun.siderealLongitude) : null;
  const sunHouse = sunSign !== null ? wholeSignHouse(sunSign, ascendantSignIndex) : null;

  const moonArchetype = ARCHETYPES_TR.Moon;
  const sunArchetype = ARCHETYPES_TR.Sun;
  const intro =
    moonHouse && sunHouse
      ? `Bugün Ay, haritanın ${moonHouse}. evinde (${HOUSE_MEANINGS_TR[moonHouse]}) — günün duygusal odağı burada. ${moonArchetype ? `Ay'ın Vedik arketipi ${moonArchetype.archetype} (${moonArchetype.vedicName}) olduğundan, bugünkü duygu akışın da bu ${HOUSE_MEANINGS_TR[moonHouse]} temasını beslemesi ve bakım/güvenlik ihtiyacının bu alanda öne çıkması olası. ` : ""}Güneş ise ${sunHouse}. evi (${HOUSE_MEANINGS_TR[sunHouse]}) aydınlatıyor, yaşam enerjinin bu alana aktığı bir dönemdesin.${sunArchetype ? ` Güneş'in arketipi ${sunArchetype.archetype} (${sunArchetype.vedicName}) olduğu için, bugün bu alanda görünür olma ve irade koyma isteği artabilir.` : ""}`
      : "Bugünün transit haritası hesaplandı.";

  // En yakın 4 açıyı seç, sadece hızlı kişisel gezegenlerden gelenlere öncelik ver
  const relevant = crossAspects
    .filter((c) => c.transitKey !== "Ascendant")
    .sort((a, b) => {
      const aPriority = FAST_PERSONAL_PLANETS.includes(a.transitKey as PlanetKey) ? 0 : 1;
      const bPriority = FAST_PERSONAL_PLANETS.includes(b.transitKey as PlanetKey) ? 0 : 1;
      if (aPriority !== bPriority) return aPriority - bPriority;
      return a.aspect.exactOrb - b.aspect.exactOrb;
    })
    .slice(0, 5);

  const aspectNotes = relevant.map((c) => {
    const tone = ASPECT_TONE[c.aspect.aspect.name] ?? "yoğun";
    const transitLabel = PLANET_LABELS_TR[c.transitKey as PlanetKey];
    const natalLabel = PLANET_LABELS_TR[c.natalKey as PlanetKey];
    const transitNature = PLANET_NATURE_TR[c.transitKey as PlanetKey] ?? "";
    const natalNature = PLANET_NATURE_TR[c.natalKey as PlanetKey] ?? "";
    const archetypeNote = archetypeClause(c.natalKey as PlanetKey);

    if (tone === "harmonik") {
      return `Transit ${transitLabel} — natal ${natalLabel} arasındaki ${c.aspect.aspect.name.split(" ")[0].toLowerCase()} açı, ${transitNature} ile ${natalNature} arasında akışkan bir destek sunuyor; bu alanda emek zahmetsiz karşılık bulabilir.${archetypeNote}`;
    }
    if (tone === "gergin") {
      return `Transit ${transitLabel} — natal ${natalLabel} arasında gerginlik var: ${transitNature}, ${natalNature} ile sürtüşebilir. Bugün burada acele etmeden, farkındalıkla ilerlemekte fayda var.${archetypeNote}`;
    }
    return `Transit ${transitLabel}, natal ${natalLabel} ile kavuşum halinde — ${transitNature} ve ${natalNature} bugün iç içe geçiyor, bu tema yoğunlaşarak öne çıkabilir.${archetypeNote}`;
  });

  // Dikkat edilecek konular: hızlı gezegenlerin bulunduğu ev + o evdeki natal gezegenler
  const attentionPoints: string[] = [];
  for (const key of FAST_PERSONAL_PLANETS) {
    const t = transit.find((p) => p.key === key);
    if (!t) continue;
    const sIdx = signIndexOf(t.siderealLongitude);
    const house = wholeSignHouse(sIdx, ascendantSignIndex);
    const natalHere = natal.filter((n) => n.house === house && n.key !== "Ascendant");
    if (natalHere.length > 0) {
      const names = natalHere.map((n) => PLANET_LABELS_TR[n.key]).join(", ");
      attentionPoints.push(
        `${PLANET_LABELS_TR[key]} bugün ${house}. evden geçiyor (${HOUSE_MEANINGS_TR[house]}) — burada natal ${names} bulunuyor, bu ev bugün senin için normalden daha canlı.`
      );
    }
  }
  if (attentionPoints.length === 0) {
    attentionPoints.push(
      "Bugün hızlı gezegenler natal gezegenlerinle aynı evde buluşmuyor — daha sakin, rutin bir gün olabilir."
    );
  }

  return { intro, aspectNotes, attentionPoints };
}
