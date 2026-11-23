"use client";

import { useRouter } from "next/navigation";

/**
 * İçindeki bir link/düğme/form alanına tıklanmadığı sürece, kartın herhangi
 * bir yerine tıklayınca (veya Enter'a basınca) `href` sayfasına gider.
 */
export function ClickableCard({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  function isInteractive(target: EventTarget | null) {
    return target instanceof Element && !!target.closest("a, button, input, select, textarea, label, form");
  }

  return (
    <section
      role="link"
      tabIndex={0}
      onClick={(e) => {
        if (!isInteractive(e.target)) router.push(href);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.target === e.currentTarget) router.push(href);
      }}
      className={`cursor-pointer transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </section>
  );
}
