import { Database } from "lucide-react";

export function DbSetupNotice() {
  return (
    <div className="card flex items-start gap-3 border-amber-300 bg-amber-50 p-4 text-sm dark:bg-amber-950/20">
      <Database size={18} className="mt-0.5 shrink-0 text-amber-600" />
      <p>
        Veritabanı henüz bağlanmadı. Bu sayfa <code>DATABASE_URL</code> ortam değişkenini
        gerektiriyor. Bir Neon (veya Vercel Postgres) veritabanı oluşturup bağlantı dizesini
        Vercel proje ayarlarına <code>DATABASE_URL</code> olarak ekle, sonra
        <code> npm run db:migrate</code> ve <code>npm run db:seed</code> komutlarını çalıştır.
        Ayrıntılar için README&apos;deki &quot;Vercel&apos;e deploy&quot; bölümüne bak.
      </p>
    </div>
  );
}
