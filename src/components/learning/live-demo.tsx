import { CodeBlock } from "./code-block";

const BASE =
  "<!doctype html><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'>" +
  "<style>*,*::before,*::after{box-sizing:border-box}body{margin:0;padding:14px;font:14px/1.5 system-ui,sans-serif;color:#1f2937;background:#fff}</style>";

/**
 * ```demo bloğu: HTML/CSS/JS örneğini yalıtılmış (sandbox) bir çerçevede canlı gösterir; kod "Kodu göster" ile açılır ve kopyalanabilir.
 * Çerçeve kaynak kökeni olmadan çalışır: siteye ait çerez/oturum verisine erişemez.
 */
export function LiveDemo({ code, height, caption }: { code: string; height?: number; caption?: string }) {
  return (
    <figure className="ag-figure">
      <iframe
        title={caption || "Canlı örnek"}
        sandbox="allow-scripts"
        srcDoc={BASE + code}
        loading="lazy"
        className="w-full rounded-xl border border-black/10 bg-white"
        style={{ height: height ?? 200 }}
      />
      {caption && <figcaption>{caption}</figcaption>}
      <details className="mt-2">
        <summary className="cursor-pointer text-xs text-muted">Kodu göster ve kopyala</summary>
        <CodeBlock code={code} />
      </details>
    </figure>
  );
}
