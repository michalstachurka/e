# visNEX — landing page

Premium landing page dla visNEX: eksperckiej usługi tworzenia wizualizacji AI
dla firm z branży wnętrzarskiej, budowlanej i home improvement.

## Stack

- Vite + React + TypeScript
- Tailwind CSS 4
- Framer Motion
- Fonty: Fraunces (display), Manrope (body), Space Grotesk (etykiety) — self-hosted przez Fontsource
- Modułowy konfigurator: vanilla ES modules + Three.js
- API konfiguratora: Fastify + Zod + port `ConfiguratorStore`, adaptery SQLite (`node:sqlite`) i PostgreSQL (`pg`)

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

Konfigurator ma jeden silnik i jeden format projektu. Widok publiczny działa pod zwykłym adresem projektu, a uwierzytelniony Tryb doradcy pod tym samym adresem z `mode=advisor`. Sam parametr nie nadaje uprawnień — backend sprawdza sesję, tenant, rolę i centralnie obliczone możliwości. W panelu sekcja „Dostępność funkcji” rozdziela ustawienia publiczne i doradcy dla prywatnego zdjęcia, kalibracji, maski, ceny, kalkulacji oraz eksportów.

Carport używa parametrycznej blachy trapezowej z osobną, obowiązkową warstwą antykondensacyjną od spodu. Screen ZIP i roleta zewnętrzna są domyślnie osadzane w renderowanych wnękach okiennych; konfigurator pozwala zestawić do 8 osobnych rolet obok siebie. Wartość `unitCount` jest częścią wersjonowanej konfiguracji, a starsze zapisy bez tego pola są odczytywane jako jedna roleta. Wymiary, przekroje, kompatybilność i BOM tych produktów pozostają danymi `demoOnly` do zatwierdzenia przez producenta.

Zdjęcia JPG/PNG/WebP są sprawdzane po sygnaturze, obracane według EXIF, ponownie kodowane bez EXIF/GPS i zapisywane przez wymienny port prywatnego storage. Projekt zapisuje tylko identyfikatory zasobów i wersjonowane parametry sceny. Tryb doradcy udostępnia historię wersji, ręczną kalibrację, maskę, backendową kalkulację demo oraz eksport konstrukcji GLB i `project.json`.

Kontrola: `npm test`, `npm run build` i `npm run test:e2e`. Szczegóły architektury znajdują się w `docs/configurator-architecture.md`, a kontrakt bezpiecznych profili SVG w `docs/svg-profile-assets.md`.

Smoke test dowolnego wdrożenia lub przyszłej domeny white-label:

```bash
npm run test:deployment -- https://adres-wdrozenia.example
```

Test sprawdza healthcheck, strony, zasoby 3D, katalog API i granicę klienta. Opcjonalny test panelu nie zapisuje sekretów w repozytorium — dane przekazuje się wyłącznie przez `SMOKE_ADMIN_EMAIL`, `SMOKE_ADMIN_PASSWORD` i opcjonalny `TENANT_SLUG`.

## Railway — pełne środowisko testowe

Repozytorium zawiera `railway.toml`, który buduje frontend i API, a następnie uruchamia je pod jedną domeną. W usłudze Railway ustaw:

```text
VITE_BASE=/
VITE_API_BASE_URL=same-origin
DATASTORE=sqlite
ADMIN_SEED_EMAIL=<adres administratora>
ADMIN_SEED_PASSWORD=<silne hasło, minimum 12 znaków>
DEFAULT_TENANT_SLUG=visnex
# przejściowy fallback dla domen jeszcze nieprzeniesionych do rejestru bazy
TENANT_HOST_MAP=
NODE_ENV=production
```

Dodaj wolumen zamontowany pod `/data`. Serwer automatycznie zapisze tam `configurator.sqlite` dzięki `RAILWAY_VOLUME_MOUNT_PATH`, użyje portu przekazanego przez Railway i utworzy linki udostępniania z publicznej domeny usługi. Po wdrożeniu dostępne są `/`, `/konfigurator.html`, `/admin.html`, `/api/...` i `/health`.

`DATASTORE` jest przełącznikiem celowo wymagającym jawnej wartości. Domyślne `sqlite` zachowuje bieżące dane pilota. Adapter PostgreSQL uruchamia wersjonowane migracje pod blokadą transakcyjną i włącza się dopiero przez:

```text
DATASTORE=postgres
DATABASE_URL=<wewnętrzny adres PostgreSQL>
DATABASE_SSL_MODE=disable # Railway private network; require/verify-full dla zewnętrznego serwera
```

Samo ustawienie `DATABASE_URL` nie przełącza magazynu. Adapter nie kopiuje automatycznie istniejącego pliku SQLite; przed zmianą produkcji potrzebny jest osobny, sprawdzony eksport/import i próba odtworzenia. Zapobiega to uruchomieniu pustej bazy oraz utracie zapisanych projektów.

Na wspólnej domenie klienta wybiera parametr `?tenant=slug`. Własne domeny aktywowane podczas onboardingu są przechowywane w tabeli `tenant_domains`, blokują host do jednego tenanta i stają się kanonicznym adresem jego linków udostępniania. `TENANT_HOST_MAP` pozostaje tylko przejściowym fallbackiem dla istniejących wdrożeń. Automatyczna weryfikacja DNS nie jest jeszcze dostępna; domenę aktywuje operator dopiero po sprawdzeniu konfiguracji.

## Onboarding płatnego pilota

Nowego klienta tworzy transakcyjne narzędzie operatorskie. Nie istnieje publiczny endpoint tworzenia tenantów. Komenda tworzy branding, administratora, osobne identyfikatory produktów, wersje `published`/`draft` oraz rejestr domen. Hasło podaje się wyłącznie przez zmienną środowiskową, aby nie trafiło do historii poleceń.

PowerShell:

```powershell
$env:NEW_TENANT_NAME='Firma Klienta'
$env:NEW_TENANT_ADMIN_PASSWORD='<silne hasło>'
npm.cmd run tenant:provision -- --slug=firma-klienta --admin-email=admin@firma.example --domains=konfigurator.firma.example
```

Bash:

```bash
NEW_TENANT_NAME='Firma Klienta' \
NEW_TENANT_ADMIN_PASSWORD='<silne hasło>' \
npm run tenant:provision -- --slug=firma-klienta --admin-email=admin@firma.example --domains=konfigurator.firma.example
```

Komenda korzysta z magazynu wybranego przez `DATASTORE`: `DATABASE_PATH`/wolumenu dla SQLite albo `DATABASE_URL` dla PostgreSQL. Po jej wykonaniu usuń jednorazowe zmienne `NEW_TENANT_*`. Jeżeli frontend klienta jest hostowany poza wspólną usługą, dodaj jego origin do `CORS_ORIGINS`.

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
