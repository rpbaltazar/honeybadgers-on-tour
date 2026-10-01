import Link from "next/link";
import type { CSSProperties } from "react";
import type { Edition } from "@/types/edition";
import { CURRENT_EDITION } from "@/data/editions";

export function HistoryTimeline({ editions }: { editions: Edition[] }) {
  return (
    <div className="timeline">
      {[...editions]
        .sort((a, b) => a.year - b.year)
        .map((edition) => (
          <Link
            className="timeline-item"
            href={edition.year === CURRENT_EDITION ? "/" : `/${edition.year}`}
            key={edition.year}
            style={{ "--accent": edition.theme.timelineAccent ?? edition.theme.accent } as CSSProperties}
          >
            <div className="timeline-year">{edition.year}</div>
            <div className="timeline-photo" aria-hidden="true">
              <span>Team photo</span>
            </div>
            <div>
              <h2>{edition.city}</h2>
              <p>
                {edition.country}
                <br />
                {edition.status === "upcoming" ? "Upcoming" : edition.format}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
