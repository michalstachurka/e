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

## Obraz hero

Hero używa pliku `public/images/hero-header.png`. Obecnie jest to wygenerowany
placeholder (charcoal + burgundowa poświata). Aby użyć docelowej grafiki,
podmień ten plik na `header for claude.png` — layout i nakładki gradientowe są
przygotowane pod szeroki, ciemny kadr z sylwetką po prawej stronie.

## Wizualizacje

Obrazy w `public/images/*.webp` są zoptymalizowanymi placeholderami z materiałów
poglądowych. Pipeline konwersji: `scripts/prepare-images.mjs`
(`SRC_DIR=<katalog źródłowy> npm run images`).

## Struktura sekcji

`Navbar → Hero → Manifesto → VisualSystem (sticky) → UseCases → Audience →
Comparison → Process → Packages → CaseStudies → FAQ → FinalCTA → Footer`
— komponenty w `src/components/`.

Zasady marki i design tokens: patrz `CLAUDE.md`.
