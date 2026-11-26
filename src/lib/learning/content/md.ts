/**
 * Ders metni yazım kolaylığı: şablon dizgesinde ters tırnak kaçışı gerekmesin diye
 * "~~~" → ``` (kod bloğu) ve "¦" → ` (satır içi kod) dönüşümü yapılır.
 */
export const md = (s: string): string => s.replace(/~~~/g, "```").replace(/¦/g, "`");

export const lessonBody = (body: string, verification?: string) => ({ body: md(body), verification: verification ? md(verification) : undefined });
