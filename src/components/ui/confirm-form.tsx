"use client";

import type { ReactNode } from "react";

/** Gönderilmeden önce onay isteyen form (yıkıcı işlemler için). */
export function ConfirmForm({
  action,
  hidden,
  message,
  className,
  children,
}: {
  action: (formData: FormData) => Promise<void>;
  hidden?: Record<string, string>;
  message: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <form
      action={action}
      className={className}
      onSubmit={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
    >
      {Object.entries(hidden ?? {}).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      {children}
    </form>
  );
}
