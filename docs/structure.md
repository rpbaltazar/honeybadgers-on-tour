# Directory Structure

The project follows the brief's simple static architecture.

```text
app/
  layout.tsx            Shared shell, metadata and navigation
  page.tsx              Current edition, loaded from CURRENT_EDITION
  [year]/page.tsx       Static archived edition pages
  history/page.tsx      Overall history timeline
  globals.css           Tailwind entry and site-level styling

components/
  EditionPage.tsx       Reusable edition page composition
  EditionHero.tsx       Event hero and artwork placeholder
  PastEditions.tsx      Homepage archive links
  HistoryTimeline.tsx   Linked edition timeline
  Header.tsx            Simple desktop/mobile-friendly navigation
  Footer.tsx            Site footer

data/
  editions.ts           Edition records, themes and helpers

types/
  edition.ts            Shared content model

public/
  editions/{year}/      Future event artwork and photography
```

The homepage is not a separate content model. It loads the edition configured by
`CURRENT_EDITION` in `data/editions.ts`. When the next tour is announced, adding
the new edition data and changing that constant moves the homepage while keeping
older editions available at their year URLs.
