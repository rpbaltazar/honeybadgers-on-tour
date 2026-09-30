import Link from "next/link";
import { CURRENT_EDITION, getPastEditions } from "@/data/editions";

export function Header() {
  const pastEditions = getPastEditions().sort((a, b) => b.year - a.year);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="Honeybadgers on Tour home">
          <span>Honeybadgers</span>
          <small>On Tour</small>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">{CURRENT_EDITION}</Link>
          <Link href="/history">History</Link>
          <details className="past-menu">
            <summary>Past Tours</summary>
            <div className="past-menu-list">
              {pastEditions.map((edition) => (
                <Link key={edition.year} href={`/${edition.year}`}>
                  {edition.year} — {edition.city}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
