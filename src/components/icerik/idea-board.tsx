"use client";

import { useState, useTransition } from "react";
import { Trash2, ChevronDown, Copy, Check } from "lucide-react";
import {
  cycleContentIdeaStatus,
  deleteContentIdea,
  deleteSelectedContentIdeas,
  deleteFilteredContentIdeas,
} from "@/app/icerik/actions";
import { StatusBadge } from "@/components/icerik/status-badge";

export interface BoardIdea {
  id: string;
  title: string;
  category: string;
  format: string | null;
  status: string;
  transcripts: { id: string; style: string; text: string }[];
}

export function IdeaBoard({
  ideas,
  startIndex,
  filter,
  filteredTotal,
  isFiltered,
}: {
  ideas: BoardIdea[];
  startIndex: number;
  filter: { q: string; category: string; status: string };
  filteredTotal: number;
  isFiltered: boolean;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);

  const allSelected = ideas.length > 0 && ideas.every((i) => selected.has(i.id));

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleOpen(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function copyText(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1500);
    } catch {
      /* pano erişimi yoksa sessizce geç */
    }
  }

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(ideas.map((i) => i.id)));
  }

  function deleteSelected() {
    if (selected.size === 0) return;
    if (!window.confirm(`${selected.size} fikir silinecek. Emin misin?`)) return;
    const fd = new FormData();
    fd.set("ids", Array.from(selected).join(","));
    startTransition(async () => {
      await deleteSelectedContentIdeas(fd);
      setSelected(new Set());
    });
  }

  function deleteFiltered() {
    const what = isFiltered ? `Filtreye uyan ${filteredTotal}` : `Tüm (${filteredTotal})`;
    if (!window.confirm(`${what} fikir silinecek. Bu işlem geri alınamaz. Emin misin?`)) return;
    const fd = new FormData();
    fd.set("q", filter.q);
    fd.set("category", filter.category);
    fd.set("status", filter.status);
    startTransition(async () => {
      await deleteFilteredContentIdeas(fd);
      setSelected(new Set());
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="ag-bulkbar">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            className="ag-check"
            aria-label="Bu sayfadakilerin hepsini seç"
          />
          Bu sayfadakilerin hepsini seç
        </label>
        <span className="text-xs ag-muted">{selected.size} seçili</span>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={deleteSelected}
            disabled={selected.size === 0 || pending}
            className="ag-btn ag-btn-dark"
          >
            <Trash2 size={14} /> Seçilenleri Sil ({selected.size})
          </button>
          <button
            type="button"
            onClick={deleteFiltered}
            disabled={filteredTotal === 0 || pending}
            className="ag-btn ag-btn-outline"
          >
            <Trash2 size={14} /> {isFiltered ? `Filtredekileri Sil (${filteredTotal})` : `Tümünü Sil (${filteredTotal})`}
          </button>
        </div>
      </div>

      <div className="grid items-start gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {ideas.map((idea, i) => {
          const isSel = selected.has(idea.id);
          const isOpen = open.has(idea.id);
          return (
            <div
              key={idea.id}
              className={`ag-idea ${isSel ? "ag-idea-selected" : ""} ${isOpen ? "sm:col-span-2 xl:col-span-3" : ""}`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="ag-num">{String(startIndex + i + 1).padStart(2, "0")}</span>
                <input
                  type="checkbox"
                  checked={isSel}
                  onChange={() => toggle(idea.id)}
                  className="ag-check"
                  aria-label="Seç"
                />
              </div>
              <p className={`ag-idea-title ${idea.status === "DONE" ? "line-through opacity-60" : ""}`}>{idea.title}</p>
              <div className="mt-auto flex flex-wrap items-center gap-1.5">
                <StatusBadge id={idea.id} status={idea.status} action={cycleContentIdeaStatus} />
                <span className="ag-pill">{idea.category}</span>
                {idea.format && <span className="ag-pill">{idea.format}</span>}
                <form
                  action={deleteContentIdea}
                  onSubmit={(e) => {
                    if (!window.confirm("Bu fikir silinsin mi?")) e.preventDefault();
                  }}
                  className="ml-auto"
                >
                  <input type="hidden" name="id" value={idea.id} />
                  <button type="submit" aria-label="Sil" className="ag-icon-btn">
                    <Trash2 size={14} />
                  </button>
                </form>
              </div>
              {idea.transcripts.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={() => toggleOpen(idea.id)}
                    aria-expanded={isOpen}
                    className="ag-transcript-toggle"
                  >
                    <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    {isOpen ? "Transkripti gizle" : `Transkripti göster (${idea.transcripts.length})`}
                  </button>
                  {isOpen && (
                    <div className="grid gap-3 lg:grid-cols-2">
                      {idea.transcripts.map((t) => (
                        <div key={t.id} className="ag-transcript">
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <span className="ag-pill">{t.style}</span>
                            <button
                              type="button"
                              onClick={() => copyText(t.id, t.text)}
                              className="ag-icon-btn"
                              aria-label="Transkripti kopyala"
                              title="Kopyala"
                            >
                              {copied === t.id ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </div>
                          <p className="text-sm leading-relaxed">{t.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
      {ideas.length === 0 && <p className="py-10 text-center text-sm ag-muted">Henüz fikir yok.</p>}
    </div>
  );
}
