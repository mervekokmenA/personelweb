import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { CONTENT_IDEA_SEED } from "./seed-data/content-ideas";
import { TRAINING_SEED } from "./seed-data/trainings";

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

async function main() {
  await seedFocusAreasAndRoutines();
  await seedContentIdeas();
  await seedTrainings();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
