"use server";

import { prisma } from "@/lib/prisma";
import { todayKey } from "@/lib/date";
import { revalidatePath } from "next/cache";

export async function updateReadingTarget(formData: FormData) {
  const dailyReadingPageTarget = parseInt(String(formData.get("dailyReadingPageTarget")), 10);
  if (!Number.isFinite(dailyReadingPageTarget) || dailyReadingPageTarget < 1) return;

  await prisma.appSettings.upsert({
    where: { id: "singleton" },
    update: { dailyReadingPageTarget },
    create: { id: "singleton", dailyReadingPageTarget },
  });

  // Hedef değişikliği geçmişi etkilemesin — bugünden itibaren geçerli olacak
  // yeni bir kayıt olarak tutulur (borç hesabı geçmiş günlerde eski hedefi kullanır).
  const effectiveFrom = todayKey();
  await prisma.readingTargetChange.upsert({
    where: { effectiveFrom },
    update: { target: dailyReadingPageTarget },
    create: { effectiveFrom, target: dailyReadingPageTarget },
  });

  revalidatePath("/parametreler");
  revalidatePath("/");
  revalidatePath("/kitap-okuma");
}
