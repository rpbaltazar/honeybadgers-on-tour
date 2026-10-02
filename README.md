# Honeybadgers on Tour

A simple, static Next.js site for Honeybadgers on Tour: the current football
weekend, plus a permanent archive of previous editions.

The current edition is Coimbra 2027 and is rendered at `/`. Historical editions
live at their permanent year URLs.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for Cloudflare Workers Static Assets

## Routes

- `/` — current edition, controlled by `CURRENT_EDITION`
- `/2026` — 's-Hertogenbosch, Netherlands
- `/2025` — Bath, United Kingdom
- `/2024` — Cork, Ireland
- `/2023` — Sofia, Bulgaria
- `/2022` — Belgrade, Serbia
- `/history` — overall archive timeline

## Project Structure

```text
app/                    Next.js routes and global styles
components/             Reusable edition, navigation and timeline components
data/                   Static edition data and CURRENT_EDITION
types/                  Shared TypeScript models
public/editions/{year}/ Event-specific images and artwork
docs/                   Planning and architecture notes
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is exported to `out/`, which is configured in `wrangler.toml`
as Cloudflare Workers Static Assets.

In Cloudflare's Git build settings, use:

```text
Build command: npx next build
Deploy command: npx wrangler deploy
Root directory: /
```
