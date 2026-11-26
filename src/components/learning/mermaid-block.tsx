"use client";

import { useEffect, useId, useState } from "react";
import { CodeBlock } from "./code-block";

/** ```mermaid bloğu: akış, sıra, sınıf, ER, durum diyagramlarını tarayıcıda SVG olarak çizer (yalnızca ihtiyaç olduğunda yüklenir). */
export function MermaidBlock({ code, caption }: { code: string; caption?: string }) {
  const rawId = useId();
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "neutral",
          fontFamily: "system-ui, sans-serif",
        });
        const { svg } = await mermaid.render("m" + rawId.replace(/[^a-zA-Z0-9]/g, ""), code);
        if (!cancelled) setSvg(svg);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code, rawId]);

  if (failed) return <CodeBlock code={code} />;
  return (
    <figure className="ag-figure">
      {svg ? (
        <div className="ag-diagram" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="ag-diagram text-xs text-muted">Diyagram yükleniyor…</div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
