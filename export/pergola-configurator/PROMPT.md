# Prompt do wklejenia w innym projekcie Claude

Skopiuj poniższy tekst i załącz razem z plikami `PergolaCanvas.tsx`,
`PergolaConfigurator.tsx` i `README.md` (np. jako zip).

---

Załączam gotowy, samodzielny konfigurator 3D pergoli lamelowej
(React + three.js, TypeScript). Zintegruj go z tą stroną według zasad:

1. Zainstaluj zależności: `npm i three` oraz `npm i -D @types/three`
   (React już jest w projekcie). Jeśli to Next.js — dodaj `"use client"`
   na początku obu plików .tsx i renderuj komponent przez
   `dynamic(() => import("..."), { ssr: false })`.

2. Skopiuj katalog `pergola-configurator/` do źródeł projektu bez zmian
   w logice. Nie przepisuj silnika 3D (`PergolaCanvas.tsx`) — on ma
   dopracowane zachowania: zoom kółkiem aktywowany dopiero po kliknięciu
   modelu (żeby nie porywać scrolla strony), kamerę, która nie schodzi
   pod ziemię i nie resetuje się przy zmianie kolorów/oświetlenia,
   lamele stykające się przy 0° i wystające ponad kołnierz przy 90°,
   oraz LED-y rzucające realne światło na podłoże.

3. Osadź `<PergolaConfigurator />` na dedykowanej sekcji/podstronie.
   Dopasuj wyłącznie warstwę wizualną do designu tej strony przez propsy:
   `accent` (kolor aktywnych opcji), `text`, `muted`,
   `frameBackground` (tło kadru 3D). Jeżeli styl strony wymaga innego
   wyglądu kontrolek (fonty, kształty przycisków), możesz przestylować
   `PergolaConfigurator.tsx` — ale zostaw stan, propsy i typ
   `PergolaParams` bez zmian.

4. Wymagania UX, które muszą zostać zachowane:
   - na mobile panel opcji nie może zasłaniać renderu ani być pod nim —
     zastosuj przycisk „Opcje" na kadrze otwierający wysuwany panel
     (bottom sheet, maks. ~45% wysokości ekranu, render dosunięty nad panel),
   - kolejność opcji: Moduły → szerokość każdego modułu osobno →
     wysięg → wysokość → otwarcie lameli → kolor konstrukcji →
     kolor lameli → oświetlenie LED (liniowe i punktowe można łączyć),
   - kolory w kolejności: Antracyt, Biały, Czarny, Brąz,
   - pod kadrem przełącznik „Animacja ruchu" (wolny obrót + cykliczne
     otwieranie/zamykanie lameli) oraz linia spec z aktualną konfiguracją,
     np. „4.0 + 5.5 × 3.2 × 2.6 m · 35°".

5. Sprawdź po integracji: scroll strony nad canvasem działa płynnie,
   obrót przeciągnięciem działa na desktopie i dotyku, zmiana koloru nie
   resetuje pozycji kamery, a suwaki wymiarów przekadrowują widok.
