import type { Edition } from "@/types/edition";

export const CURRENT_EDITION = 2027;

export const editions: Edition[] = [
  {
    year: 2027,
    city: "Coimbra",
    country: "Portugal",
    countryCode: "PT",
    startDate: "2027-07-01",
    endDate: "2027-07-04",
    displayDate: "1-4 July 2027",
    format: "To be confirmed",
    status: "upcoming",
    tagline: "Yellow, purple and a Portuguese summer away weekend.",
    introduction:
      "Honeybadgers on Tour heads to Coimbra from 1 to 4 July 2027. The tournament format and weekend schedule are still being shaped, but the pitch is set and the next away weekend is officially pointing at Portugal.",
    venue: {
      name: "Campo de Santa Cruz",
      mapUrl: "https://maps.app.goo.gl/AjMK3SU9q4cYAy7a9",
      description: "The 2027 football will be played at Campo de Santa Cruz in Coimbra.",
    },
    travel: {
      airports: ["Lisbon", "Porto"],
      transport:
        "Fly to Lisbon or Porto, then take the train to Coimbra. Train tickets are best bought in advance, ideally a day or two before travelling.",
      notes: "Portuguese rail tickets and timetables are available from CP.",
      bookingUrl: "https://cp.pt/pt",
    },
    theme: {
      background: "#2a1748",
      surface: "#3a2061",
      text: "#fff7d6",
      mutedText: "#dcc9ef",
      accent: "#ffd22e",
      timelineAccent: "#5e2a86",
      timelineShadow: "0 1px 0 #ffd22e, 0 0 8px rgba(255, 210, 46, 0.34)",
      secondaryAccent: "#c53a32",
      border: "#8b6db2",
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
    historyPhoto: {
      src: "/editions/2026/team.png",
      alt: "Honeybadgers team photo in Den Bosch 2026",
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
      timelineShadow: "0 1px 0 #8f3f00, 0 0 8px rgba(143, 63, 0, 0.28)",
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
    historyPhoto: {
      src: "/editions/2025/team.png",
      alt: "Honeybadgers team photo in Bath 2025",
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
      timelineAccent: "#b8ff2c",
      timelineShadow: "0 1px 0 #3a2061, 0 0 8px rgba(58, 32, 97, 0.36)",
      secondaryAccent: "#8c43ff",
      border: "#7dbe27",
    },
  },
  {
    year: 2024,
    city: "Cork",
    country: "Ireland",
    countryCode: "IE",
    startDate: "2024-07-25",
    endDate: "2024-07-28",
    displayDate: "25-28 July 2024",
    format: "11-a-side friendly",
    status: "completed",
    tagline: "One match in Cork, one local side, one loss for the archive.",
    introduction:
      "Cork 2024 was a Thursday-to-Sunday Irish edition built around a single 11-a-side friendly on 27 July against a local over-33 side. Two planned teams had pulled out because of Gaelic football commitments, so the tournament became a one-match Irish chapter: grass pitch, 12 Honeybadgers, plenty of Guinness and a loss for the archive.",
    venue: {
      name: "Local Cork-area grass pitch",
      description:
        "The match was played on a grass field against a strong local over-33 side. The exact venue details can be added once confirmed.",
    },
    schedule: [
      {
        date: "2024-07-27",
        time: "13:30",
        title: "Leave for the match",
        stage: "Travel to the local pitch",
      },
      {
        date: "2024-07-27",
        time: "15:30",
        title: "11-a-side friendly",
        stage: "Match against a local over-33 side",
      },
      {
        date: "2024-07-27",
        time: "17:30",
        title: "Post-match food and beers",
        stage: "Local pub",
      },
    ],
    results: [
      {
        title: "Honeybadgers vs local over-33 side",
        notes: "Honeybadgers lost. Score and opponent name to be added.",
      },
    ],
    sideEvents: [
      {
        title: "Thursday arrival",
        date: "2024-07-25",
        description: "Meet in Cork for the first few beers of the weekend.",
      },
      {
        title: "Friday in Cork",
        date: "2024-07-26",
        description: "Blarney Castle, Jameson Distillery, Dogs, bar, nightclub and bed.",
      },
      {
        title: "Saturday match day",
        date: "2024-07-27",
        description:
          "Leave at 13:30, friendly at 15:30, local pub for food and beers at 17:30, another local pub around 20:00, back to the city around 22:00, then nightclub or whatever people fancied.",
      },
      {
        title: "Sunday free and easy",
        date: "2024-07-28",
        description: "Free and easy departure day.",
      },
    ],
    travel: {
      accommodation: "Hotel rooms were planned two per room, with a possible three-person room option to reduce cost.",
      notes: "The weather forecast was dry but cold. It was Ireland, so rain was never far away.",
    },
    historyPhoto: {
      src: "/editions/2024/team.png",
      alt: "Honeybadgers team photo in Cork 2024",
    },
    theme: {
      background: "#0b6b3a",
      backgroundImage:
        "linear-gradient(135deg, #075c35 0%, #0b6b3a 28%, #f7f2df 54%, #f47a1f 100%)",
      surface: "#0c5a35",
      text: "#ffffff",
      mutedText: "#fff5e8",
      accent: "#ffffff",
      timelineAccent: "#0b6b3a",
      timelineShadow: "0 1px 0 #f47a1f, 0 0 8px rgba(244, 122, 31, 0.32)",
      secondaryAccent: "#f47a1f",
      border: "rgba(255, 255, 255, 0.48)",
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
    historyPhoto: {
      src: "/editions/2023/team.png",
      alt: "Honeybadgers team photo in Sofia 2023",
    },
    theme: {
      background: "#f2eee5",
      surface: "#fffaf2",
      text: "#1f2420",
      mutedText: "#5d645d",
      accent: "#2c7a55",
      timelineAccent: "#b93434",
      timelineShadow: "0 1px 0 #ffffff, 0 0 8px rgba(255, 255, 255, 0.42)",
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
      timelineShadow: "0 1px 0 #ffffff, 0 0 8px rgba(255, 255, 255, 0.42)",
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
