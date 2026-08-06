import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { todayKey, dayKey } from "../src/lib/date";
import { CONTENT_IDEA_SEED } from "./seed-data/content-ideas";
import { CONTENT_IDEA_SEED_2 } from "./seed-data/content-ideas-icerik-imparatorlugu";
import { TRAINING_SEED } from "./seed-data/trainings";
import { TRAINING_SEED_2 } from "./seed-data/trainings-2";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function seedContentIdeas() {
  const existing = await prisma.contentIdea.count();
  if (existing > 0) {
    console.log(`ContentIdea zaten ${existing} kayıt içeriyor, seed atlanıyor.`);
    return;
  }
  await prisma.contentIdea.createMany({
    data: CONTENT_IDEA_SEED.map((idea) => ({
      title: idea.title,
      category: idea.category,
      format: idea.format,
      source: "seed" as const,
    })),
  });
  console.log(`${CONTENT_IDEA_SEED.length} içerik fikri eklendi.`);
}

async function seedContentIdeas2() {
  const existing = await prisma.contentIdea.count({
    where: { source: "icerik-imparatorlugu" },
  });
  if (existing > 0) {
    console.log(
      `ContentIdea (icerik-imparatorlugu) zaten ${existing} kayıt içeriyor, seed atlanıyor.`
    );
    return;
  }
  await prisma.contentIdea.createMany({
    data: CONTENT_IDEA_SEED_2.map((idea) => ({
      title: idea.title,
      category: idea.category,
      format: idea.format,
      status: idea.done ? ("DONE" as const) : ("NOT_STARTED" as const),
      source: "icerik-imparatorlugu" as const,
    })),
  });
  console.log(`${CONTENT_IDEA_SEED_2.length} içerik fikri (icerik-imparatorlugu) eklendi.`);
}

async function seedTrainings() {
  const existing = await prisma.training.count();
  if (existing > 0) {
    console.log(`Training zaten ${existing} kayıt içeriyor, seed atlanıyor.`);
    return;
  }
  for (const [i, t] of TRAINING_SEED.entries()) {
    await prisma.training.create({ data: { ...t, order: i } });
  }
  console.log(`${TRAINING_SEED.length} eğitim eklendi.`);
}

async function seedTrainings2() {
  const existing = await prisma.training.count({
    where: { source: "profesyonel-arastirma" },
  });
  if (existing > 0) {
    console.log(
      `Training (profesyonel-arastirma) zaten ${existing} kayıt içeriyor, seed atlanıyor.`
    );
    return;
  }
  const currentMax = await prisma.training.count();
  for (const [i, t] of TRAINING_SEED_2.entries()) {
    await prisma.training.create({
      data: { ...t, order: currentMax + i, source: "profesyonel-arastirma" as const },
    });
  }
  console.log(`${TRAINING_SEED_2.length} eğitim (profesyonel-arastirma) eklendi.`);
}

async function seedFocusAreasAndRoutines() {
  const existingAreas = await prisma.focusArea.count();
  if (existingAreas === 0) {
    await prisma.focusArea.createMany({
      data: [
        { name: "Hobi", items: ["Kil", "Elmas Boyama", "Resim"], color: "#f0c9d3", order: 0 },
        { name: "Yazı", items: ["İçerik Metni", "Kendi Yazılarım (Akış)", "İmj Kitap"], color: "#f3e2a9", order: 1 },
        { name: "Yabancı Dil", items: ["İbranice", "Rusça", "İngilizce"], color: "#bcd4e6", order: 2 },
        { name: "Gelişim", items: ["Astroloji", "Video Çekimi", "Vibe Coding"], color: "#d3c6e6", order: 3 },
      ],
    });
    console.log("Odak alanları (Hobi/Yazı/Yabancı Dil/Gelişim) eklendi.");
  }

  const existingRoutines = await prisma.routineTemplate.count();
  if (existingRoutines === 0) {
    const titles = [
      "İmajinasyon, 10 dk",
      "Düşünce görselleştirme, 10 dk",
      "Altın Oran Nefes Egzersizi, 3 günde 1",
      "Adım çalışması, günlük",
      "Ayna çalışması, günlük",
      "Yeni kozmik sembol çalışması ve imajinasyonu, günlük",
      "Renk meditasyonu, her gün yeni renk",
      "Beyaz gürültü dinleme, günlük",
      "Dokunma, his çalışması, günlük",
      "Tat koku, his çalışması, günlük",
      "Gölge ve korkularla yüzleşme, günlük",
      "Rüya, duyu değişimi, vizyon detaylı takip ve not alma, günlük",
      "Verilen araştırma konularına bakma, günlük",
    ];
    await prisma.routineTemplate.createMany({
      data: titles.map((title, i) => ({ title, order: i })),
    });
    console.log(`${titles.length} günlük rutin şablonu eklendi.`);
  }
}

async function seedReadingTargetHistory() {
  const existing = await prisma.readingTargetChange.count();
  if (existing > 0) return;

  const [settings, earliestLog] = await Promise.all([
    prisma.appSettings.findUnique({ where: { id: "singleton" } }),
    prisma.readingLog.findFirst({ orderBy: { date: "asc" } }),
  ]);
  const target = settings?.dailyReadingPageTarget ?? 5;
  const effectiveFrom = earliestLog ? dayKey(earliestLog.date) : todayKey();

  await prisma.readingTargetChange.create({ data: { effectiveFrom, target } });
  console.log(`Okuma hedefi geçmişi için başlangıç kaydı eklendi (${target} sayfa, ${effectiveFrom.toISOString()}).`);
}

async function main() {
  await seedFocusAreasAndRoutines();
  await seedContentIdeas();
  await seedContentIdeas2();
  await seedTrainings();
  await seedTrainings2();
  await seedReadingTargetHistory();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
