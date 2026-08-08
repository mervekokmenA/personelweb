"use client";

import { useState, useTransition } from "react";
import { Dices } from "lucide-react";
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
    <div className="flex flex-col gap-2">
      <button
        onClick={roll}
        disabled={pending}
        className="flex w-fit items-center gap-1.5 rounded-lg bg-accent-lilac px-4 py-1.5 text-sm font-medium disabled:opacity-60"
      >
        <Dices size={15} /> Bana bir fikir öner
      </button>

      {tried && !pending && (
        <div className="card flex flex-wrap items-center gap-3 border-accent-lilac/40 bg-accent-lilac/10 p-3">
          {idea ? (
            <>
              <span className="text-sm font-medium">{idea.title}</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
                {idea.category}
              </span>
              {idea.format && (
                <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
                  {idea.format}
                </span>
              )}
              <form
                action={async (fd) => {
                  await cycleContentIdeaStatus(fd);
                  roll();
                }}
              >
                <input type="hidden" name="id" value={idea.id} />
                <button className="rounded-lg border border-card-border px-3 py-1 text-xs">
                  Bunu seç, başka öner
                </button>
              </form>
            </>
          ) : (
            <span className="text-sm text-muted">Yapılmadı durumunda fikir kalmamış 🎉</span>
          )}
        </div>
      )}
    </div>
  );
}
