export type EditionStatus = "upcoming" | "completed";

export interface EditionTheme {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  accent: string;
  secondaryAccent: string;
  border: string;
}

export interface Team {
  name: string;
  city?: string;
  country?: string;
  badge?: string;
}

export interface ScheduleItem {
  date?: string;
  time?: string;
  title: string;
  teams?: string[];
  pitch?: string;
  stage?: string;
}

export interface Result {
  title: string;
  score?: string;
  notes?: string;
}

export interface SideEvent {
  title: string;
  date?: string;
  description?: string;
  url?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface EditionArtwork {
  src: string;
  alt: string;
  caption?: string;
}

export interface PressLink {
  title: string;
  source: string;
  url: string;
}

export interface Edition {
  year: number;
  city: string;
  country: string;
  countryCode: string;
  startDate?: string;
  endDate?: string;
  displayDate: string;
  format: string;
  status: EditionStatus;
  tagline?: string;
  introduction?: string;
  heroCityLines?: string[];
  artwork?: EditionArtwork;
  press?: PressLink[];
  venue?: {
    name?: string;
    address?: string;
    mapUrl?: string;
    description?: string;
  };
  teams?: Team[];
  schedule?: ScheduleItem[];
  results?: Result[];
  sideEvents?: SideEvent[];
  travel?: {
    airports?: string[];
    transport?: string;
    accommodation?: string;
    notes?: string;
    bookingUrl?: string;
  };
  winner?: string;
  gallery?: GalleryImage[];
  theme: EditionTheme;
}
