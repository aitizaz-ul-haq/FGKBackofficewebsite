// components/ScrollToHash.js
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname, searchParams]);

  return null;
}
