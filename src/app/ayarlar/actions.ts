"use server";

import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { githubConfig, APK_WORKFLOW_FILE as WORKFLOW_FILE } from "@/lib/github";

export async function triggerApkBuild(formData: FormData) {
  if (!hasDatabaseUrl) return;
  const cfg = githubConfig();
  if (!cfg) {
    await prisma.apkBuild.create({
      data: {
        status: "failed",
        message: "GH_PAT ve GH_REPO ortam değişkenleri tanımlı değil. Vercel proje ayarlarından ekleyin.",
      },
    });
    revalidatePath("/ayarlar");
    return;
  }
  const serverUrl = String(formData.get("serverUrl") ?? "").trim();

  try {
    const res = await fetch(
      `https://api.github.com/repos/${cfg.repo}/actions/workflows/${WORKFLOW_FILE}/dispatches`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cfg.token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({
          ref: process.env.GH_BRANCH || "main",
          inputs: serverUrl ? { server_url: serverUrl } : {},
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      await prisma.apkBuild.create({
        data: { status: "failed", message: `GitHub Actions tetiklenemedi (${res.status}): ${text}` },
      });
    } else {
      await prisma.apkBuild.create({ data: { status: "triggered" } });
    }
  } catch (err) {
    await prisma.apkBuild.create({
      data: { status: "failed", message: err instanceof Error ? err.message : String(err) },
    });
  }
  revalidatePath("/ayarlar");
}

export async function refreshApkBuildStatus() {
  if (!hasDatabaseUrl) return;
  const cfg = githubConfig();
  if (!cfg) return;

  const res = await fetch(
    `https://api.github.com/repos/${cfg.repo}/actions/workflows/${WORKFLOW_FILE}/runs?per_page=1`,
    {
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) return;
  const data = await res.json();
  const run = data.workflow_runs?.[0];
  if (!run) return;

  const latest = await prisma.apkBuild.findFirst({ orderBy: { triggeredAt: "desc" } });
  if (!latest) return;

  const status = run.status === "completed" ? run.conclusion : run.status;
  await prisma.apkBuild.update({
    where: { id: latest.id },
    data: { status: String(status), runUrl: run.html_url, runId: String(run.id) },
  });
  revalidatePath("/ayarlar");
}
