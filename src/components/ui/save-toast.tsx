"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";

/**
 * Bir <form> içine yerleştirilir (submit butonunun yanına). Server action
 * "pending" durumundan çıkışını (true -> false) yakalayıp, ekranda hiçbir
 * şey değişmemiş gibi görünen kaydetme işlemleri için görünür bir onay
 * gösterir — kalmak veya ana sayfaya dönmek arasında seçim sunar.
 *
 * Server action'ın imzasını değiştirmeye gerek kalmadan çalışır: sadece bu
 * bileşenin bağlı olduğu formun "pending" durumunu izler.
 */
export function SaveToast({ label = "Kaydedildi" }: { label?: string }) {
  const { pending } = useFormStatus();
  const wasPending = useRef(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (pending) {
      wasPending.current = true;
    } else if (wasPending.current) {
      wasPending.current = false;
      setShow(true);
    }
  }, [pending]);

  if (!show) return null;

  return (
    <div className="animate-bounce-in fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-foreground px-5 py-3 text-background shadow-xl">
      <span className="flex items-center gap-1.5 text-sm font-semibold">
        <Check size={16} className="text-accent-mint" /> {label}
      </span>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="rounded-full bg-accent-yellow px-3 py-1.5 text-xs font-semibold text-foreground"
      >
        Ana Sayfaya Dön
      </button>
      <button
        type="button"
        onClick={() => setShow(false)}
        aria-label="Kapat"
        className="rounded-full bg-background/15 p-1.5"
      >
        <X size={14} />
      </button>
    </div>
  );
}
