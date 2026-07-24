import { prisma } from "@/lib/prisma";

export async function getAppSettings() {
  try {
    return await prisma.appSettings.upsert({
      where: { id: "singleton" },
      update: {},
      create: { id: "singleton" },
    });
  } catch {
    // Eşzamanlı iki istek aynı anda satırı oluşturmaya çalışırsa (unique
    // constraint çakışması), satır artık var demektir — okuyup dönebiliriz.
    return prisma.appSettings.findUniqueOrThrow({ where: { id: "singleton" } });
  }
}
