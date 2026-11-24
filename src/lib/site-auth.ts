/** Tek parolalı site koruması. SITE_PASSWORD tanımlı değilse koruma kapalıdır (yerel geliştirme / kurulum öncesi). */
export const AUTH_COOKIE = "panel_oturum";
export const AUTH_MAX_AGE = 60 * 60 * 24 * 180; // 180 gün

export function authEnabled(): boolean {
  return !!process.env.SITE_PASSWORD;
}

async function hmacHex(key: string, msg: string): Promise<string> {
  const enc = new TextEncoder();
  const k = await crypto.subtle.importKey("raw", enc.encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Parolaya bağlı oturum belirteci (parola değişince eski çerezler geçersiz olur). */
export async function sessionToken(): Promise<string> {
  return hmacHex(process.env.SITE_PASSWORD ?? "", "kisisel-panel-oturum-v1");
}

export async function isAuthenticated(cookieValue: string | undefined): Promise<boolean> {
  if (!authEnabled()) return true;
  if (!cookieValue) return false;
  const expected = await sessionToken();
  if (cookieValue.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= cookieValue.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

/** Zamanlamaya dayanıklı parola karşılaştırması (uzunluk farkı da sızmasın diye özetler karşılaştırılır). */
export async function passwordMatches(input: string): Promise<boolean> {
  const pw = process.env.SITE_PASSWORD;
  if (!pw) return false;
  const [a, b] = await Promise.all([hmacHex("cmp", input), hmacHex("cmp", pw)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
