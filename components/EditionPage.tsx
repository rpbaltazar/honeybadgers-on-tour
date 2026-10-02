import type { CSSProperties } from "react";
import type { Edition } from "@/types/edition";
import { EditionHero } from "@/components/EditionHero";
import { EditionNavigation } from "@/components/EditionNavigation";
import { PastEditions } from "@/components/PastEditions";
import { Section } from "@/components/Section";
import { getEditionNeighbors } from "@/data/editions";

interface EditionPageProps {
  edition: Edition;
  isHomepage?: boolean;
}

export function EditionPage({ edition, isHomepage = false }: EditionPageProps) {
  const neighbors = getEditionNeighbors(edition.year);
  const scheduleSlots = getScheduleSlots(edition.schedule ?? []);
  const style = {
    "--page-background": edition.theme.backgroundImage,
    "--background": edition.theme.background,
    "--surface": edition.theme.surface,
    "--text": edition.theme.text,
    "--muted-text": edition.theme.mutedText,
    "--accent": edition.theme.accent,
    "--secondary-accent": edition.theme.secondaryAccent,
    "--border": edition.theme.border,
  } as CSSProperties;

  return (
    <article className="edition-page" style={style}>
      <div className="edition-shell">
        <EditionHero edition={edition} />

        <Section title="The Tournament">
          <p>
            {edition.introduction ??
              `${edition.city} ${edition.year} is part of the Honeybadgers on Tour archive. More details, stories and photos can be added here as they become available.`}
          </p>
          <div className="info-grid">
            <InfoCard title="Format" value={edition.format} />
            <InfoCard title="Status" value={edition.status} />
            <InfoCard
              title="Venue"
              value={edition.venue?.name ?? "To be confirmed"}
              href={edition.venue?.websiteUrl ?? edition.venue?.mapUrl}
            />
          </div>
        </Section>

        <Section title="Teams">
          {edition.groups?.length ? (
            <div className="group-grid">
              {edition.groups.map((group) => (
                <TeamGroupCard key={group.name} name={group.name} teams={group.teams} />
              ))}
            </div>
          ) : edition.teams?.length ? (
            <div className="info-grid">
              {edition.teams.map((team) => (
                <InfoCard key={team.name} title={team.name} value={team.city ?? team.country ?? ""} />
              ))}
            </div>
          ) : (
            <p>Teams will be added once confirmed.</p>
          )}
        </Section>

        <Section title="Schedule">
          {edition.schedule?.length ? (
            <div className="schedule-grid">
              {scheduleSlots.map((slot) => (
                <ScheduleSlotCard key={[slot.date, slot.time].filter(Boolean).join("|")} slot={slot} />
              ))}
            </div>
          ) : (
            <p>Schedule details will be published closer to the weekend.</p>
          )}
        </Section>

        {edition.results?.length ? (
          <Section title="Results">
            <div className="info-grid">
              {edition.results.map((result) => (
                <InfoCard
                  key={result.title}
                  title={result.title}
                  value={[result.score, result.notes].filter(Boolean).join(" — ")}
                />
              ))}
            </div>
          </Section>
        ) : null}

        <Section title="The Weekend">
          {edition.sideEvents?.length ? (
            <div className="info-grid">
              {edition.sideEvents.map((event) => (
                <EventCard
                  key={event.title}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <p>Football-adjacent plans are still to be confirmed.</p>
          )}
        </Section>

        <Section title={edition.city}>
          <div className="info-grid">
            <InfoCard title="Country" value={edition.country} />
            <InfoCard title="Airports" value={edition.travel?.airports?.join(" or ") ?? "Travel notes coming soon"} />
            <InfoCard title="Getting there" value={edition.travel?.transport ?? edition.travel?.notes ?? "Travel notes coming soon"} />
            {edition.travel?.bookingUrl ? (
              <InfoCard title="Train tickets" value={edition.travel?.notes ?? "Book in advance"} href={edition.travel.bookingUrl} />
            ) : null}
            <InfoCard
              title="Accommodation"
              value={edition.travel?.accommodation ?? "To be confirmed"}
              href={edition.travel?.accommodationUrl}
            />
          </div>
        </Section>

        {edition.press?.length ? (
          <Section title="In The News">
            <div className="edition-links">
              {edition.press.map((item) => (
                <a className="edition-link" href={item.url} key={item.url}>
                  <h3>{item.source}</h3>
                  <p>{item.title}</p>
                </a>
              ))}
            </div>
          </Section>
        ) : null}

        {isHomepage ? <PastEditions /> : null}

        <EditionNavigation previous={neighbors.previous} next={neighbors.next} />
      </div>
    </article>
  );
}

interface ScheduleSlot {
  date?: string;
  time?: string;
  items: NonNullable<Edition["schedule"]>;
}

function getScheduleSlots(schedule: NonNullable<Edition["schedule"]>) {
  return schedule.reduce<ScheduleSlot[]>((slots, item) => {
    const match = slots.find((slot) => slot.date === item.date && slot.time === item.time);

    if (match) {
      match.items.push(item);
      return slots;
    }

    slots.push({
      date: item.date,
      time: item.time,
      items: [item],
    });

    return slots;
  }, []);
}

function ScheduleSlotCard({ slot }: { slot: ScheduleSlot }) {
  return (
    <div className="schedule-card">
      <div className="schedule-time">{slot.time ?? "TBC"}</div>
      <div className="schedule-matches">
        {slot.items.map((item) => (
          <div
            className="schedule-match"
            key={[item.title, item.pitch, item.teams?.join("-")].filter(Boolean).join("|")}
          >
            <h3>{item.pitch ?? item.title}</h3>
            <p>{item.pitch ? item.teams?.join(" vs ") : item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: NonNullable<Edition["sideEvents"]>[number] }) {
  const content = (
    <>
      <h3>{event.title}</h3>
      {event.date || event.description ? (
        <p>{[event.date, event.description].filter(Boolean).join(" — ")}</p>
      ) : null}
      {event.details?.length ? (
        <ul className="event-list">
          {event.details.map((detail) => (
            <li key={typeof detail === "string" ? detail : detail.label}>
              {typeof detail === "string" ? (
                detail
              ) : detail.url ? (
                <a href={detail.url}>{detail.label}</a>
              ) : (
                detail.label
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  if (event.url) {
    return (
      <a className="info-card" href={event.url}>
        {content}
      </a>
    );
  }

  return (
    <div className="info-card">
      {content}
    </div>
  );
}

function TeamGroupCard({ name, teams }: { name: string; teams: string[] }) {
  return (
    <div className="team-group-card">
      <h3>{name}</h3>
      <ul className="team-list">
        {teams.map((team) => (
          <li key={team}>
            <span className="team-badge" aria-hidden="true">
              {getTeamInitials(team)}
            </span>
            <span>{team}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getTeamInitials(team: string) {
  return team
    .split(" ")
    .filter((word) => !["de", "the"].includes(word.toLowerCase()))
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function InfoCard({ title, value, href }: { title: string; value: string; href?: string }) {
  const content = (
    <>
      <h3>{title}</h3>
      <p>{value || "To be confirmed"}</p>
    </>
  );

  if (href) {
    return (
      <a className="info-card" href={href}>
        {content}
      </a>
    );
  }

  return (
    <div className="info-card">
      {content}
    </div>
  );
}
