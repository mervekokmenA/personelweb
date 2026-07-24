"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateReadingTarget(formData: FormData) {
  const dailyReadingPageTarget = parseInt(String(formData.get("dailyReadingPageTarget")), 10);
  if (!Number.isFinite(dailyReadingPageTarget) || dailyReadingPageTarget < 1) return;

  await prisma.appSettings.upsert({
    where: { id: "singleton" },
    update: { dailyReadingPageTarget },
    create: { id: "singleton", dailyReadingPageTarget },
  });
  revalidatePath("/parametreler");
  revalidatePath("/");
}
