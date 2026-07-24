import { Database } from "lucide-react";

export function DbSetupNotice() {
  return (
    <div className="card flex items-start gap-3 border-accent-pink/40 bg-accent-pink/10 p-4 text-sm">
      <Database size={18} className="mt-0.5 shrink-0 text-accent-pink" />
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
