// components/ScrollToHash.js
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;

      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }, 300); // Increased timeout to ensure content loads
        }
      }
    }
  }, [pathname, searchParams]);

  return null;
}
