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
    city: "Den Bosch",
    country: "Netherlands",
    countryCode: "NL",
    startDate: "2026-07-02",
    endDate: "2026-07-05",
    displayDate: "2-5 July 2026",
    format: "7-a-side tournament",
    status: "completed",
    tagline: "The Honey Badgers Dutch edition.",
    introduction:
      "The Honey Badgers Dutch edition ran from 2 to 5 July 2026 in 's-Hertogenbosch, with football on the Saturday and a long weekend built around arrivals, drinks, canoeing, a beer bicycle, Bossche bollen and proper goodbyes.",
    artwork: {
      src: "/editions/2026/den-bosch-2026.png",
      alt: "Honeybadgers on Tour Den Bosch 2026 tournament artwork",
      caption: "Den Bosch 2026 tournament artwork",
    },
    press: [
      {
        title: "Voetbal brengt vrienden uit vijftien landen jaarlijks samen, dit keer bij RKSV Boxtel",
        source: "Brabants Centrum",
        url: "https://www.brabantscentrum.nl/boxtel/boxtel/62882/voetbal-brengt-vrienden-uit-vijftien-landen-jaarlijks-samen-d",
      },
    ],
    venue: {
      name: "RKSV Boxtel",
      description:
        "The local news coverage placed the football at RKSV Boxtel, where the international Honey Badgers group gathered around football and friendship.",
    },
    sideEvents: [
      {
        title: "Thursday arrival",
        date: "2026-07-02",
        description: "Arrival in Den Bosch with drinks and dinner.",
      },
      {
        title: "Friday around Den Bosch",
        date: "2026-07-03",
        description: "Morning canoeing, lunch, beer bicycle, dinner and an early bedtime.",
      },
      {
        title: "Saturday football",
        date: "2026-07-04",
        description: "Bossche bol in the morning, then the football tournament.",
      },
      {
        title: "Sunday goodbyes",
        date: "2026-07-05",
        description: "Bye byes before heading home.",
      },
    ],
    theme: {
      background: "#fff0dd",
      surface: "#fff8ec",
      text: "#241407",
      mutedText: "#6f4a2b",
      accent: "#ff7900",
      secondaryAccent: "#1f5f7a",
      border: "#f2b36e",
    },
  },
  {
    year: 2025,
    city: "Bath",
    country: "United Kingdom",
    countryCode: "GB",
    startDate: "2025-07-10",
    endDate: "2025-07-13",
    displayDate: "10-13 July 2025",
    format: "11-a-side tournament",
    status: "completed",
    tagline: "Purple, lime and the West Country away-day machine.",
    introduction:
      "Bath 2025 brought the Honeybadgers back to the United Kingdom for an 11-a-side tournament weekend, with the kit palette leaning into purple and lime green inspired by Bristol City's gloriously loud 2017/18 away kit.",
    artwork: {
      src: "/editions/2025/bath-2025.png",
      alt: "Honeybadgers on Tour Bath 2025 tournament artwork",
      caption: "Bath 2025 tournament artwork",
    },
    venue: {
      name: "Bath tournament venue",
      mapUrl: "https://maps.app.goo.gl/jMytNbPL1h6k5Etb6?g_st=aw",
      description: "The 2025 matches were played at the Bath tournament venue linked here.",
    },
    sideEvents: [
      {
        title: "Wednesday early arrivals",
        date: "2025-07-09",
        description: "Optional Gloucester Road drinks for anyone already in Bristol.",
      },
      {
        title: "Prime by Pasture",
        date: "2025-07-10 18:30",
        description: "Burgers near Bristol Temple Meads. Walk-up only.",
        url: "https://primebypasture.com",
      },
      {
        title: "Seven Stars",
        date: "2025-07-10 19:30",
        description: "A swift beer one minute from dinner.",
        url: "http://www.7stars.co.uk",
      },
      {
        title: "Left Handed Giant",
        date: "2025-07-10 20:00",
        description: "Sunset craft beers, with pizza available for late arrivals.",
        url: "https://lefthandedgiant.com/pages/custom-pages/brewpub",
      },
      {
        title: "King Street",
        date: "2025-07-10 21:30",
        description: "Small Bar for crispy chicken, then Kongs for anyone going out-out.",
        url: "https://kongsbars.co.uk/bars/bristol/",
      },
      {
        title: "Last train to Bath",
        date: "2025-07-10 23:45",
        description: "Last planned train from Bristol, with cabs back to Bath as the late-night fallback.",
      },
    ],
    travel: {
      transport:
        "The Thursday plan stayed central in Bristol so people could come and go around arrivals. The last train to Bath was 23:45.",
      notes:
        "Bristol Temple Meads was the Thursday meeting point reference, with Bath as the tournament base.",
    },
    theme: {
      background: "#241034",
      surface: "#34154b",
      text: "#f5f1ff",
      mutedText: "#d9c8ea",
      accent: "#b8ff2c",
      secondaryAccent: "#8c43ff",
      border: "#7dbe27",
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
