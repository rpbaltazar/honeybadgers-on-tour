"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Edition } from "@/types/edition";

export function PastToursMenu({ editions }: { editions: Edition[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      const menu = menuRef.current;

      if (menu && !menu.contains(event.target as Node)) {
        menu.open = false;
      }
    }

    document.addEventListener("click", closeOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, []);

  return (
    <details className="past-menu" ref={menuRef}>
      <summary>Past Tours</summary>
      <div className="past-menu-list">
        {editions.map((edition) => (
          <Link
            key={edition.year}
            href={`/${edition.year}`}
            onClick={() => {
              if (menuRef.current) {
                menuRef.current.open = false;
              }
            }}
          >
            {edition.year} — {edition.city}
          </Link>
        ))}
      </div>
    </details>
  );
}
