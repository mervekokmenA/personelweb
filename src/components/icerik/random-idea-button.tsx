"use client";

import { useState, useTransition } from "react";
import { Dices, ArrowUpRight } from "lucide-react";
import { pickRandomIdea, cycleContentIdeaStatus, type RandomIdea } from "@/app/icerik/actions";

export function RandomIdeaButton() {
  const [idea, setIdea] = useState<RandomIdea | null>(null);
  const [tried, setTried] = useState(false);
  const [pending, startTransition] = useTransition();

  function roll() {
    startTransition(async () => {
      const result = await pickRandomIdea();
      setIdea(result);
      setTried(true);
    });
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <button onClick={roll} disabled={pending} className="ag-btn ag-btn-dark disabled:opacity-60">
        <Dices size={15} /> Bana bir fikir öner
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-black">
          <ArrowUpRight size={13} />
        </span>
      </button>

      {tried && !pending && (
        <div className="ag-panel flex flex-wrap items-center gap-3">
          {idea ? (
            <>
              <span className="text-sm font-medium">{idea.title}</span>
              <span className="ag-pill">{idea.category}</span>
              {idea.format && <span className="ag-pill">{idea.format}</span>}
              <form
                action={async (fd) => {
                  await cycleContentIdeaStatus(fd);
                  roll();
                }}
              >
                <input type="hidden" name="id" value={idea.id} />
                <button className="ag-btn ag-btn-soft">Bunu seç, başka öner</button>
              </form>
            </>
          ) : (
            <span className="text-sm ag-muted">Yapılmadı durumunda fikir kalmamış 🎉</span>
          )}
        </div>
      )}
    </div>
  );
}
