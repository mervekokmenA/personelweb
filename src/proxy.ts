import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, authEnabled, isAuthenticated } from "@/lib/site-auth";

/** Giriş koruması: SITE_PASSWORD tanımlıysa oturum çerezi olmayan her istek /giris'e yönlenir. */
export async function proxy(request: NextRequest) {
  if (!authEnabled()) return NextResponse.next();
  const { pathname, search } = request.nextUrl;
  if (pathname === "/giris") return NextResponse.next();
  if (await isAuthenticated(request.cookies.get(AUTH_COOKIE)?.value)) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Giriş gerekli" }, { status: 401 });
  }
  const url = request.nextUrl.clone();
  url.pathname = "/giris";
  url.search = `?git=${encodeURIComponent(pathname + search)}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Statik dosyalar ve PWA/Android kabuğu için gereken dosyalar hariç tüm yollar
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|manifest.webmanifest|capacitor-www).*)"],
};
