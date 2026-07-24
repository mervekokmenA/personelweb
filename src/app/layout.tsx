import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Kişisel Panel",
  description: "Günlük program, içerik fikirleri, eğitimler ve astroloji takibi",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fff8f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        {/* Google Fonts <link> ile yükleniyor (CSS @import değil) — tarayıcı
            bunu HTML head'i parse ederken hemen keşfedip diğer kaynaklarla
            paralel indirebiliyor, bu da açılış hızını iyileştiriyor. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- bu kural Pages Router için; App Router'da root layout tüm sayfalara uygulanır */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full">
        <div className="flex min-h-screen min-w-0 flex-col md:flex-row">
          <Nav />
          <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
