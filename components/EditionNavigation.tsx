import Link from "next/link";
import type { Edition } from "@/types/edition";
import { CURRENT_EDITION } from "@/data/editions";

interface EditionNavigationProps {
  previous?: Edition;
  next?: Edition;
}

export function EditionNavigation({ previous, next }: EditionNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="edition-nav" aria-label="Edition navigation">
      <span>
        {previous ? (
          <Link href={`/${previous.year}`}>← {previous.city} {previous.year}</Link>
        ) : null}
      </span>
      <span>
        {next ? (
          <Link href={next.year === CURRENT_EDITION ? "/" : `/${next.year}`}>
            {next.city} {next.year} →
          </Link>
        ) : null}
      </span>
    </nav>
  );
}
