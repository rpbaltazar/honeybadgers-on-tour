import type { Edition } from "@/types/edition";

export function EditionHero({ edition }: { edition: Edition }) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Honeybadgers on Tour</p>
        <h1>
          {edition.city}
          <br />
          {edition.year}
        </h1>
        <div className="hero-meta">
          <span className="pill">{edition.country}</span>
          <span className="pill">{edition.displayDate}</span>
          <span className="pill">{edition.format}</span>
        </div>
      </div>

      <div className="poster" aria-label={`${edition.city} ${edition.year} edition artwork placeholder`}>
        <div className="poster-mark">
          <div>
            <strong>{edition.countryCode}</strong>
            <span>{edition.tagline ?? "Honeybadgers away"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
