"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* aşağıdaki yedek yönteme düş */
  }
  // Yedek: gizli textarea + execCommand (güvenli olmayan bağlamlar ve bazı WebView'ler için)
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/** Kod bloğu + tek tıkla kopyala düğmesi. */
export function CodeBlock({ code }: { code: string }) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function onCopy() {
    const ok = await copyText(code);
    setState(ok ? "ok" : "err");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 1800);
  }

  return (
    <div className="ag-codewrap">
      <button type="button" onClick={onCopy} className="ag-copy" aria-label="Kodu kopyala">
        {state === "ok" ? <Check size={14} /> : <Copy size={14} />}
        <span aria-live="polite">{state === "ok" ? "Kopyalandı" : state === "err" ? "Kopyalanamadı" : "Kopyala"}</span>
      </button>
      <pre className="ag-pre"><code>{code}</code></pre>
    </div>
  );
}
