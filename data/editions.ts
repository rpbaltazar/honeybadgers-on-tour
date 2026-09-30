import type { Edition } from "@/types/edition";

export const CURRENT_EDITION = 2027;

export const editions: Edition[] = [
  {
    year: 2027,
    city: "Coimbra",
    country: "Portugal",
    countryCode: "PT",
    displayDate: "July 2027",
    format: "To be confirmed",
    status: "upcoming",
    tagline: "Football, friends and questionable decision-making return to Portugal.",
    introduction:
      "Honeybadgers on Tour heads to Coimbra in July 2027. The tournament format, venue, teams and weekend plans are still being shaped, but the next away weekend is officially pointing at Portugal.",
    travel: {
      notes: "Travel and accommodation information will be added once the weekend plan is confirmed.",
    },
    theme: {
      background: "#f8efd9",
      surface: "#fffaf0",
      text: "#17202a",
      mutedText: "#5f6258",
      accent: "#0f4f7a",
      secondaryAccent: "#b3292f",
      border: "#ddcfad",
    },
  },
  {
    year: 2026,
    city: "'s-Hertogenbosch",
    country: "Netherlands",
    countryCode: "NL",
    displayDate: "2026",
    format: "7-a-side tournament",
    status: "completed",
    tagline: "A Dutch detour with orange edges.",
    theme: {
      background: "#f4eadf",
      surface: "#fff7ef",
      text: "#211a15",
      mutedText: "#685d53",
      accent: "#e66f1f",
      secondaryAccent: "#2f5f75",
      border: "#dfc7b4",
    },
  },
  {
    year: 2025,
    city: "Bath",
    country: "United Kingdom",
    countryCode: "GB",
    displayDate: "2025",
    format: "11-a-side tournament",
    status: "completed",
    tagline: "Roman stones, football boots and a proper weekend away.",
    theme: {
      background: "#efe5d1",
      surface: "#fbf6ea",
      text: "#201f1a",
      mutedText: "#68604f",
      accent: "#7b5f3a",
      secondaryAccent: "#445c6c",
      border: "#d8c7aa",
    },
  },
  {
    year: 2024,
    city: "Cork",
    country: "Ireland",
    countryCode: "IE",
    displayDate: "2024",
    format: "11-a-side match",
    status: "completed",
    tagline: "A one-match Irish chapter.",
    theme: {
      background: "#e8eadc",
      surface: "#f9f5e8",
      text: "#15241d",
      mutedText: "#536358",
      accent: "#17633c",
      secondaryAccent: "#c7812c",
      border: "#cfd8c3",
    },
  },
  {
    year: 2023,
    city: "Sofia",
    country: "Bulgaria",
    countryCode: "BG",
    displayDate: "2023",
    format: "11-a-side tournament",
    status: "completed",
    tagline: "The Honeybadgers head east.",
    theme: {
      background: "#f2eee5",
      surface: "#fffaf2",
      text: "#1f2420",
      mutedText: "#5d645d",
      accent: "#2c7a55",
      secondaryAccent: "#b93434",
      border: "#d7d0bf",
    },
  },
  {
    year: 2022,
    city: "Bucharest",
    country: "Romania",
    countryCode: "RO",
    displayDate: "2022",
    format: "11-a-side tournament",
    status: "completed",
    tagline: "Where the tour archive begins.",
    theme: {
      background: "#ece7d8",
      surface: "#fbf7ec",
      text: "#1d222b",
      mutedText: "#5e6170",
      accent: "#245b9f",
      secondaryAccent: "#caa12b",
      border: "#d4cab3",
    },
  },
];

export function getEdition(year: number) {
  return editions.find((edition) => edition.year === year);
}

export function getCurrentEdition() {
  const edition = getEdition(CURRENT_EDITION);

  if (!edition) {
    throw new Error(`Current edition ${CURRENT_EDITION} is not configured.`);
  }

  return edition;
}

export function getPastEditions() {
  return editions.filter((edition) => edition.year !== CURRENT_EDITION);
}

export function getEditionNeighbors(year: number) {
  const sorted = [...editions].sort((a, b) => a.year - b.year);
  const index = sorted.findIndex((edition) => edition.year === year);

  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}
