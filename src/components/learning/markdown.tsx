import type { ReactNode } from "react";
import { CodeBlock } from "./code-block";
import { MermaidBlock } from "./mermaid-block";
import { LiveDemo } from "./live-demo";

/** Güvenli, bağımlılıksız mini Markdown: başlık, liste, tablo, alıntı, kod bloğu, **kalın**, *italik*, `kod`, [bağlantı](url). */

function safeHref(url: string): string | null {
  return /^https?:\/\//.test(url) || url.startsWith("/") ? url : null;
}

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*[^*\s][^*]*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    const k = `${keyPrefix}-${i++}`;
    if (tok.startsWith("**")) nodes.push(<strong key={k}>{tok.slice(2, -2)}</strong>);
    else if (tok.startsWith("`")) nodes.push(<code key={k} className="ag-code">{tok.slice(1, -1)}</code>);
    else if (tok.startsWith("[")) {
      const mm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok);
      const href = mm ? safeHref(mm[2]) : null;
      nodes.push(
        href ? (
          <a key={k} href={href} target={href.startsWith("/") ? undefined : "_blank"} rel="noreferrer" className="underline">
            {mm![1]}
          </a>
        ) : (
          tok
        )
      );
    } else nodes.push(<em key={k}>{tok.slice(1, -1)}</em>);
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;
  const k = () => `b${key++}`;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    if (line.startsWith("```")) {
      // ```dil bilgi — özel diller: demo (canlı örnek), svg (çizim), mermaid (diyagram). "bilgi" başlık/yükseklik içindir.
      const info = /^```\s*([\w-]*)\s*(.*)$/.exec(line);
      const lang = (info?.[1] ?? "").toLowerCase();
      const rest = (info?.[2] ?? "").trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++;
      const text = code.join("\n");
      if (lang === "demo") {
        const hm = /^h=(\d{2,4})\s*(.*)$/.exec(rest);
        out.push(<LiveDemo key={k()} code={text} height={hm ? Math.min(Number(hm[1]), 900) : undefined} caption={(hm ? hm[2] : rest) || undefined} />);
      } else if (lang === "svg" && /^\s*<svg[\s>]/.test(text)) {
        // Veri adresli <img>: içindeki betikler çalışmaz.
        out.push(
          <figure key={k()} className="ag-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={"data:image/svg+xml;charset=utf-8," + encodeURIComponent(text)} alt={rest || "Çizim"} className="mx-auto h-auto max-w-full" />
            {rest && <figcaption>{rest}</figcaption>}
          </figure>
        );
      } else if (lang === "mermaid") {
        out.push(<MermaidBlock key={k()} code={text} caption={rest || undefined} />);
      } else {
        out.push(<CodeBlock key={k()} code={text} />);
      }
      continue;
    }
    const img = /^!\[([^\]]*)\]\((\S+?)\)\s*$/.exec(line.trim());
    if (img) {
      const src = img[2];
      if (/^https:\/\//.test(src) || src.startsWith("/")) {
        out.push(
          <figure key={k()} className="ag-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={img[1]} loading="lazy" referrerPolicy="no-referrer" className="mx-auto h-auto max-w-full rounded-lg bg-white" />
            {img[1] && <figcaption>{img[1]}</figcaption>}
          </figure>
        );
        i++;
        continue;
      }
    }
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const cls = level <= 2 ? "ag-h2" : "ag-h3";
      out.push(<div key={k()} className={cls} role="heading" aria-level={level + 1}>{inline(h[2], `h${key}`)}</div>);
      i++;
      continue;
    }
    if (/^---+$/.test(line.trim())) { out.push(<hr key={k()} className="ag-hr" />); i++; continue; }
    if (line.startsWith(">")) {
      const q: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) q.push(lines[i++].replace(/^>\s?/, ""));
      out.push(<blockquote key={k()} className="ag-quote">{inline(q.join(" "), `q${key}`)}</blockquote>);
      continue;
    }
    if (line.includes("|") && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const rows: string[][] = [];
      const split = (l: string) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
      const head = split(line);
      i += 2;
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) rows.push(split(lines[i++]));
      out.push(
        <div key={k()} className="overflow-x-auto">
          <table className="ag-table">
            <thead><tr>{head.map((c, j) => <th key={j}>{inline(c, `th${j}`)}</th>)}</tr></thead>
            <tbody>{rows.map((r, a) => <tr key={a}>{r.map((c, j) => <td key={j}>{inline(c, `td${a}-${j}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*]\s+/, ""));
      out.push(<ul key={k()} className="ag-ul">{items.map((t, j) => <li key={j}>{inline(t, `li${j}`)}</li>)}</ul>);
      continue;
    }
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ""));
      out.push(<ol key={k()} className="ag-ol">{items.map((t, j) => <li key={j}>{inline(t, `ol${j}`)}</li>)}</ol>);
      continue;
    }
    const para: string[] = [lines[i++]];
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|```|!\[|>|---+$|\s*[-*]\s+|\s*\d+[.)]\s+)/.test(lines[i])) para.push(lines[i++]);
    out.push(<p key={k()} className="ag-p">{inline(para.join(" "), `p${key}`)}</p>);
  }
  return <div className="ag-prose">{out}</div>;
}
