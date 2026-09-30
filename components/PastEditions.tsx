import Link from "next/link";
import { getPastEditions } from "@/data/editions";
import { Section } from "@/components/Section";

export function PastEditions() {
  const pastEditions = getPastEditions().sort((a, b) => b.year - a.year);

  return (
    <Section title="Past Tours">
      <div className="past-grid">
        {pastEditions.map((edition) => (
          <Link className="edition-link" href={`/${edition.year}`} key={edition.year}>
            <h3>
              {edition.year} — {edition.city}
            </h3>
            <p>
              {edition.country}
              <br />
              {edition.format}
            </p>
          </Link>
        ))}
      </div>
      <p>
        The archive will grow as more photos, tournament results and stories are
        gathered from previous weekends.
      </p>
    </Section>
  );
}
