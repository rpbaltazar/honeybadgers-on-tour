import type { Edition } from "@/types/edition";

export function EditionHero({ edition }: { edition: Edition }) {
  const cityLines = edition.heroCityLines ?? [edition.city];
  const hasLongTitle = cityLines.some((line) => line.length > 10) || edition.city.length > 14;

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Honeybadgers on Tour</p>
        <h1
          aria-label={`${edition.city} ${edition.year}`}
          className="hero-title"
          data-long={hasLongTitle ? "true" : "false"}
        >
          {cityLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
          {edition.year}
        </h1>
        <div className="hero-meta">
          <span className="pill">{edition.country}</span>
          <span className="pill">{edition.displayDate}</span>
          <span className="pill">{edition.format}</span>
        </div>
      </div>

      <div className="poster" aria-label={`${edition.city} ${edition.year} edition artwork`}>
        {edition.artwork ? (
          <figure className="artwork">
            <img src={edition.artwork.src} alt={edition.artwork.alt} />
            {edition.artwork.caption ? <figcaption>{edition.artwork.caption}</figcaption> : null}
          </figure>
        ) : (
          <div className="poster-mark">
            <div>
              <strong>{edition.countryCode}</strong>
              <span>{edition.tagline ?? "Honeybadgers away"}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
