# visNEX — landing page

Premium landing page dla visNEX: eksperckiej usługi tworzenia wizualizacji AI
dla firm z branży wnętrzarskiej, budowlanej i home improvement.

## Stack

- Vite + React + TypeScript
- Tailwind CSS 4
- Framer Motion
- Fonty: Fraunces (display), Manrope (body), Space Grotesk (etykiety) — self-hosted przez Fontsource
- Modułowy konfigurator: vanilla ES modules + Three.js
- API konfiguratora: Fastify + Zod + SQLite (`node:sqlite`)

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny do dist/
npm run preview  # podgląd builda
```

## Konfigurator, API i panel

Skopiuj `.env.example` do `.env`, ustaw własne `ADMIN_SEED_PASSWORD`, a następnie uruchom w dwóch terminalach:

```bash
npm run api:dev
npm run dev
```

- konfigurator: `http://localhost:5173/konfigurator.html`
- panel: `http://localhost:5173/admin.html`
- API: `http://127.0.0.1:8787`

Kontrola: `npm test`, `npm run build` i `npm run test:e2e`. Szczegóły architektury znajdują się w `docs/configurator-architecture.md`.

## Railway — pełne środowisko testowe

Repozytorium zawiera `railway.toml`, który buduje frontend i API, a następnie uruchamia je pod jedną domeną. W usłudze Railway ustaw:

```text
VITE_BASE=/
VITE_API_BASE_URL=same-origin
ADMIN_SEED_EMAIL=<adres administratora>
ADMIN_SEED_PASSWORD=<silne hasło, minimum 12 znaków>
NODE_ENV=production
```

Dodaj wolumen zamontowany pod `/data`. Serwer automatycznie zapisze tam `configurator.sqlite` dzięki `RAILWAY_VOLUME_MOUNT_PATH`, użyje portu przekazanego przez Railway i utworzy linki udostępniania z publicznej domeny usługi. Po wdrożeniu dostępne są `/`, `/konfigurator.html`, `/admin.html`, `/api/...` i `/health`.

## Hero

Hero odtwarza wideo `public/videos/hero.mp4` (fallback `hero.webm`,
poster `public/images/hero-poster.jpg`) pod stałymi nakładkami gradientowymi.
Aby podmienić materiał, wystarczy zastąpić te pliki (H.264 MP4 + VP9 WebM, bez audio).

## Wizualizacje

Obrazy w `public/images/*.webp` są zoptymalizowanymi placeholderami z materiałów
poglądowych. Pipeline konwersji: `scripts/prepare-images.mjs`
(`SRC_DIR=<katalog źródłowy> npm run images`).

## Struktura sekcji

`Navbar → Hero → Manifesto → VisualSystem (sticky) → UseCases → Audience →
Comparison → Process → Packages → CaseStudies → FAQ → FinalCTA → Footer`
— komponenty w `src/components/`.

Zasady marki i design tokens: patrz `CLAUDE.md`.
