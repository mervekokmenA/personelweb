"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

export function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, {});
  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="git" value={next} />
      <label className="flex flex-col gap-1 text-sm">
        Parola
        <input name="password" type="password" required autoFocus autoComplete="current-password" className="rounded-lg border border-card-border bg-background px-3 py-2" />
      </label>
      {state.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}
      <button disabled={pending} className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-60">
        {pending ? "Kontrol ediliyor…" : "Giriş yap"}
      </button>
    </form>
  );
}
