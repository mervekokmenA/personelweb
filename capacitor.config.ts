import type { CapacitorConfig } from "@capacitor/cli";

// APK, bu web uygulamasının native bir WebView kabuğudur: kendi içinde statik
// dosya taşımaz, her açılışta `server.url` üzerinden CANLI Vercel sitesini
// yükler. Bu sayede "anlık girili bilgilerle apk'ya dönüştürme" isteği,
// APK'yı her seferinde yeniden derlemeye gerek kalmadan karşılanır — APK
// sadece bir kabuktur, veriler her zaman canlı sunucudan gelir.
//
// CAPACITOR_SERVER_URL ortam değişkeni GitHub Actions'ta (build-apk.yml)
// veya yerel `npx cap sync` çalıştırılırken set edilir.
const serverUrl = process.env.CAPACITOR_SERVER_URL || "https://example.vercel.app";

const config: CapacitorConfig = {
  appId: "com.personelweb.app",
  appName: "Kişisel Panel",
  webDir: "public/capacitor-www",
  server: {
    url: serverUrl,
    androidScheme: "https",
  },
};

export default config;
