# Konfigurator pergoli — pakiet przenośny

Samodzielny konfigurator 3D pergoli lamelowej (React + three.js).
Bez zależności od Tailwinda ani żadnego frameworka CSS — style inline,
kolory konfigurowalne propsami.

## Pliki

- `PergolaCanvas.tsx` — silnik 3D (three.js): parametryczny model, oświetlenie,
  kamera, animacja lameli. Zero zależności poza `three`.
- `PergolaConfigurator.tsx` — gotowy komponent UI (suwaki, próbniki, przełączniki)
  spięty z canvasem.
- `PROMPT.md` — prompt do wklejenia w innym projekcie Claude.

## Zależności

```bash
npm i react react-dom three
npm i -D @types/three typescript
```

React ≥ 18, three ≥ 0.160. Bundler: dowolny (Vite, Next.js, CRA).
W Next.js komponent musi być kliencki (`"use client"` na górze obu plików)
i renderowany bez SSR (`dynamic(() => import(...), { ssr: false })`).

## Użycie

```tsx
import { PergolaConfigurator } from "./pergola-configurator/PergolaConfigurator";

<div style={{ maxWidth: 1200, margin: "0 auto" }}>
  <PergolaConfigurator
    accent="#7a2533"   // kolor akcentu UI (aktywne opcje)
    text="#171717"
    muted="#6f6a63"
    frameBackground="linear-gradient(180deg,#f6f3ee,#e9e3d9)" // tło kadru 3D
  />
</div>
```

Albo tylko silnik 3D z własnym UI:

```tsx
import { PergolaCanvas, type PergolaParams } from "./pergola-configurator/PergolaCanvas";

const params: PergolaParams = {
  widths: [4, 5.5],   // szerokość każdego modułu (m), 1-2 modułów
  depth: 3.2,          // wysięg (m)
  height: 2.6,         // wysokość (m)
  slatAngle: 35,       // otwarcie lameli 0-120°
  frameColor: "#2b2d2e",
  slatColor: "#0e0f10",
  ledLinear: true,     // LED liniowy w rynnach
  ledSpots: true,      // LED punktowy w lamelach (~1 / 1,5 m²)
  spin: false,         // animacja: wolny obrót + otwieranie lameli
};

<div style={{ aspectRatio: "16/10" }}>
  <PergolaCanvas params={params} />
</div>
```

## Zachowania wbudowane

- obrót przeciągnięciem; zoom kółkiem dopiero po kliknięciu modelu
  (scroll strony nigdy nie jest przechwytywany w przelocie),
- kamera nie schodzi pod ziemię, można zajrzeć pod dach,
- kamera przekadrowuje się tylko przy zmianie wymiarów/modułów,
- lamele stykają się przy 0°, a przy 90° wystają ponad kołnierz,
- LED-y realnie oświetlają podłoże (miękkie plamy światła),
- render pauzuje poza viewportem; canvas skaluje się z kontenerem.
