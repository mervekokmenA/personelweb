import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { triggerApkBuild, refreshApkBuildStatus } from "./actions";
import { getGithubReleaseInfo } from "@/lib/github";
import { RefreshButton } from "@/components/ayarlar/refresh-button";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { Download, ExternalLink, Smartphone, DatabaseBackup } from "lucide-react";

export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  triggered: "Tetiklendi",
  queued: "Sırada",
  in_progress: "Derleniyor",
  success: "Başarılı ✓",
  failure: "Başarısız",
  failed: "Başarısız",
};

export default async function AyarlarPage() {
  const builds = hasDatabaseUrl
    ? await prisma.apkBuild.findMany({ orderBy: { triggeredAt: "desc" }, take: 10 })
    : [];
  const githubInfo = getGithubReleaseInfo();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "";

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Ayarlar</h1>

      <section className="card p-5">
        <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Smartphone size={16} /> APK Derleme
        </h2>
        <p className="mb-4 text-sm text-muted">
          APK, bu web uygulamasının native bir kabuğudur — içinde sabit veri taşımaz, açılışta
          her zaman canlı siteyi (aşağıdaki adres) yükler. Bu yüzden APK&apos;yı tekrar derlemeden
          de güncel verilerini görürsün; derleme sadece uygulamayı telefona &quot;yükleyebilir&quot;
          hale getirir. Derleme GitHub Actions üzerinde ~3-5 dakika sürer.
        </p>

        {!githubInfo.configured && (
          <div className="mb-4 rounded-lg border border-accent-pink/40 bg-accent-pink/10 p-3 text-sm">
            GitHub bağlantısı ayarlanmadı. Vercel proje ayarlarına <code>GH_PAT</code> (repo +
            workflow izinli bir Personal Access Token) ve <code>GH_REPO</code> (
            <code>owner/repo</code> formatında) ortam değişkenlerini ekle.
          </div>
        )}

        <form action={triggerApkBuild} className="flex flex-wrap gap-2">
          <input
            name="serverUrl"
            defaultValue={appUrl}
            placeholder="https://senin-sitenn.vercel.app"
            className="min-w-[16rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
          <button
            className="rounded-lg bg-accent-pink px-4 py-1.5 text-sm font-medium disabled:opacity-50"
            disabled={!githubInfo.configured || !hasDatabaseUrl}
          >
            APK Oluştur
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {githubInfo.downloadUrl && (
            <a
              href={githubInfo.downloadUrl}
              className="flex items-center gap-1.5 rounded-lg bg-accent-mint px-3 py-1.5 font-medium"
            >
              <Download size={15} /> Son APK&apos;yı indir
            </a>
          )}
          {githubInfo.actionsUrl && (
            <a
              href={githubInfo.actionsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-card-border px-3 py-1.5 text-muted"
            >
              <ExternalLink size={15} /> GitHub Actions&apos;ta izle
            </a>
          )}
        </div>
      </section>

      <section className="card p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Derleme Geçmişi
          </h2>
          <RefreshButton action={refreshApkBuildStatus} />
        </div>
        {!hasDatabaseUrl && <DbSetupNotice />}
        <div className="flex flex-col divide-y divide-card-border text-sm">
          {builds.map((b) => (
            <div key={b.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
              <span className="text-muted">
                {new Date(b.triggeredAt).toLocaleString("tr-TR")}
              </span>
              <span>{STATUS_LABEL[b.status] ?? b.status}</span>
              {b.runUrl && (
                <a href={b.runUrl} target="_blank" rel="noreferrer" className="text-muted underline">
                  run
                </a>
              )}
              {b.message && <span className="text-xs text-red-500">{b.message}</span>}
            </div>
          ))}
          {builds.length === 0 && <p className="py-3 text-muted">Henüz derleme yapılmadı.</p>}
        </div>
      </section>

      <section className="card p-5 text-sm text-muted">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide">Uygulama Adresi</h2>
        <p>{appUrl || "NEXT_PUBLIC_APP_URL tanımlı değil."}</p>
      </section>

      <section className="card p-5">
        <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <DatabaseBackup size={16} /> Veri Yedekleme
        </h2>
        <p className="mb-4 text-sm text-muted">
          Tüm verilerini (günlük program, içerik fikirleri, eğitimler, sağlık, alışkanlıklar,
          astroloji dahil) tek bir JSON dosyası olarak indirir — Neon dışında ek bir yedek
          istersen kendi bilgisayarında saklayabilirsin.
        </p>
        <a
          href="/api/backup"
          download
          className="flex w-fit items-center gap-1.5 rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium"
        >
          <Download size={15} /> Yedeği indir
        </a>
      </section>
    </div>
  );
}
