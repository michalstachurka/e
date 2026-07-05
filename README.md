# visNEX — landing page

Premium landing page dla visNEX: eksperckiej usługi tworzenia wizualizacji AI
dla firm z branży wnętrzarskiej, budowlanej i home improvement.

## Stack

- Vite + React + TypeScript
- Tailwind CSS 4
- Framer Motion
- Fonty: Fraunces (display), Manrope (body), Space Grotesk (etykiety) — self-hosted przez Fontsource

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny do dist/
npm run preview  # podgląd builda
```

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
