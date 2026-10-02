import Link from "next/link";
import { PastToursMenu } from "@/components/PastToursMenu";
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
          <PastToursMenu editions={pastEditions} />
        </nav>
      </div>
    </header>
  );
}
