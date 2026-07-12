# Architektura modułowego konfiguratora visNEX

## Stan przed zmianą

Konfigurator był samodzielną stroną Vite opartą o cztery moduły JavaScript w `public/pergola-configurator/`. Jeden moduł łączył stan UI, dane produktu, zapis parametrów w URL, lokalny wydruk PDF i integrację wyceny. `pergola-canvas.js` tworzył renderer Three.js oraz parametryczną pergolę. AR eksportowało bieżącą scenę do GLB i opcjonalnie USDZ.

Rozwiązanie było sprawne dla pergoli, lecz zakresy, etykiety i reguły produktu były częścią frontendu. Nie istniały wersje definicji, trwały zapis projektu, backendowa walidacja ani panel administracyjny.

## Działający pionowy wycinek

Migracja zachowuje istniejący landing page i renderer pergoli. Rozszerza rozwiązanie etapowo:

- jeden kontekst WebGL i jedna kamera obsługują oba produkty;
- `ProductRendererRegistry` wybiera renderer na podstawie `productType`;
- istniejąca pergola jest adapterem pierwszego modułu;
- weranda jest osobnym rendererem parametrycznym;
- definicje produktów i zakresy pochodzą z publicznego API, z jawnym fallbackiem demo dla statycznego GitHub Pages;
- API waliduje, zapisuje i wersjonuje konfiguracje;
- wycena, publiczny BOM i PDF powstają po stronie serwera;
- panel administratora edytuje wersję roboczą i publikuje nową wersję;
- zapisane projekty wskazują niezmienną wersję produktu.

## Podział odpowiedzialności

### Frontend publiczny

`konfigurator.html` i `public/pergola-configurator/` odpowiadają za:

- wybór produktu i kroki konfiguracji;
- natychmiastowy podgląd Three.js;
- orbitowanie, dotyk, automatyczny obrót i widoki kamery;
- mobilny bottom sheet;
- zebranie publicznego DTO;
- walidację z debounce;
- wysłanie konfiguracji do zapisu, wyceny i PDF;
- eksport aktualnej sceny do AR;
- zachowanie odczytu starszych linków pergoli wyłącznie jako kompatybilność wsteczna.

Frontend nie zawiera pełnych reguł ceny, marż, kosztów ani kodów BOM. Nie generuje nowych linków z pełną konfiguracją w query string.

### Wspólny rdzeń

`packages/contracts` zawiera schematy Zod publicznych DTO i bezpiecznych danych administracyjnych.

`packages/configurator-core` zawiera:

- demonstracyjny katalog tenantów i wersji produktów;
- walidację wymiarów i zależności;
- obliczanie liczby lameli;
- rozmieszczenie słupów;
- zależność geometrii spadku werandy;
- demonstracyjną wycenę;
- publiczny BOM bez kodów produkcyjnych;
- deterministyczną serializację konfiguracji.

### Renderery produktów

Rejestr wymaga metod `createScene`, `updateScene`, `disposeScene` i `getBounds`. Host Three.js pozostaje jeden podczas przełączania produktu.

Pergola zachowuje dotychczasową geometrię, animację lameli, LED, screeny, przeszklenia, dodatkowe słupy, kamerę, snapshot i AR. Zmiany samych kolorów lub kąta lameli nie tworzą nowego renderera i nie wymuszają pełnej przebudowy sceny.

Weranda składa się z parametrycznych belek, słupów, krokwi, pól dachowych i opcjonalnych wypełnień. Krokwie, słupy i pola dachu używają `InstancedMesh`. Dane techniczne werandy są oznaczone jako `demoOnly`.

### API

`apps/api` to osobna aplikacja Fastify. Korzysta z:

- Zod na granicy każdego zapisu;
- SQLite przez `node:sqlite` lokalnie;
- losowych identyfikatorów `shareId` i sesji;
- `scrypt` do haseł;
- HTTP-only cookies, `SameSite=Strict` i wygaśnięcia sesji;
- rate limiting logowania;
- konfigurowalnego CORS;
- limitu body 5 MB;
- sanityzacji edytowalnych tekstów;
- filtrowania danych po `tenantSlug`.

Publiczne endpointy:

- `GET /api/public/:tenantSlug/configurator`
- `GET /api/public/:tenantSlug/products/:productType`
- `POST /api/public/:tenantSlug/validate`
- `POST /api/public/:tenantSlug/configurations`
- `GET /api/public/:tenantSlug/configurations/:shareId`
- `POST /api/public/:tenantSlug/quotes`
- `POST /api/public/:tenantSlug/pdf`

Administracyjne endpointy:

- `POST /api/admin/:tenantSlug/login`
- `POST /api/admin/logout`
- `GET /api/admin/me`
- `GET /api/admin/:tenantSlug/products`
- `PUT /api/admin/:tenantSlug/products/:productType`
- `POST /api/admin/:tenantSlug/products/:productType/publish`
- `PUT /api/admin/:tenantSlug/branding`

## Model danych

Schemat SQLite ma logiczne tabele dla: `Tenant`, `AdminUser`, `BrandingSettings`, `ProductCategory`, `ProductType`, `ProductDefinition`, `ProductVersion`, `ParameterDefinition`, `ProfileDefinition`, `MaterialDefinition`, `ColorDefinition`, `OptionGroup`, `OptionValue`, `DependencyRule`, `ValidationRule`, `PricingRule`, `BomRule`, `PdfTemplate`, `SavedConfiguration`, `Quote` i `BomDocument`.

W pionowym wycinku opublikowane definicje, parametry, kolory oraz prywatne reguły demo są przechowywane w wersjonowanych dokumentach JSON. Osobne tabele normalizacyjne są przygotowane pod kolejną iterację panelu. Publikacja archiwizuje poprzednią wersję, publikuje draft i tworzy następny draft. Zapisana konfiguracja przechowuje `productVersionId`.

## Wycena i BOM

Backend obsługuje demonstracyjnie cenę bazową, stawkę za m², dopłatę za moduł i opcję, dopłatę za kolor, mnożnik, cenę minimalną, zaokrąglenie i VAT. API zwraca wyłącznie wynik oraz flagę `demoOnly`; pełny wzór nie trafia do publicznego katalogu.

BOM obsługuje w pionowym wycinku elementy stałe, na moduł, słup, krokiew, lamelę i powierzchnię. Wynik publiczny zawiera nazwy ogólne, ilości i jednostki, bez kodów, kosztów i instrukcji technologicznych.

## PDF

Endpoint PDF ponownie waliduje konfigurację, wylicza aktualną wycenę i BOM, a następnie tworzy dokument przez `pdf-lib`. Frontend może przesłać PNG sceny. Dokument zawiera branding, numer projektu, datę, produkt, wymiary, cenę demo, publiczny BOM i informację o weryfikacji technicznej.

Gdy API nie jest dostępne, zachowany jest dotychczasowy lokalny wydruk jako wyraźny fallback, nie jako źródło oferty.

## Zapis i udostępnianie

Nowy projekt jest walidowany i zapisywany w SQLite. Link zawiera tylko `tenant` i losowy `project`. Domyślne wygaśnięcie ustawione przez frontend wynosi 30 dni. Starsze linki pergoli z parametrami mogą zostać odczytane, ale aplikacja nie tworzy nowych linków tego typu.

## AR

AR korzysta z tej samej aktualnej sceny dla pergoli i werandy. Eksport:

- pomija światła techniczne, podłoże i pomocniczą ścianę;
- klonuje geometrie i materiały;
- ustawia środek modelu w X/Z i dół na `Y = 0`;
- generuje GLB, a dla iOS także USDZ;
- ogranicza tekstury do 1024 px;
- ustawia stałą skalę i umieszczenie na podłodze w `model-viewer`.

Panel diagnostyczny `debugAR` działa tylko na localhost.

## Uruchomienie

1. Skopiuj `.env.example` do `.env` i ustaw własne `ADMIN_SEED_PASSWORD`.
2. Uruchom `npm install`.
3. W pierwszym terminalu uruchom `npm run api:dev`.
4. W drugim uruchom `npm run dev`.
5. Otwórz `http://localhost:5173/konfigurator.html` oraz `http://localhost:5173/admin.html`.

Frontend pobiera bazę API z `VITE_API_BASE_URL`. GitHub Pages publikuje tylko frontend i wymaga zewnętrznego API. Railway może natomiast uruchomić cały stos pod jedną domeną: `VITE_BASE=/`, `VITE_API_BASE_URL=same-origin`, build `npm run build` i start `npm start`. Plik `railway.toml` zawiera te komendy oraz healthcheck `/health`.

Do trwałych testów SQLite usługa Railway powinna mieć wolumen pod `/data`. Backend wykrywa `RAILWAY_VOLUME_MOUNT_PATH`, port, domenę publiczną i buduje na ich podstawie ścieżkę bazy, adres konfiguratora oraz CORS. W Railway trzeba ustawić tylko bezpieczne dane administratora i zmienne builda opisane w `README.md`.

Komendy kontroli:

```text
npm run typecheck:api
npm test
VITE_BASE=/e/ npm run build
npm run test:e2e
```

## Ograniczenia pionowego wycinka

- SQLite używa lokalnego adaptera `node:sqlite`; migracja na Prisma/PostgreSQL pozostaje etapem wdrożenia produkcyjnego.
- Panel edytuje podstawowe dane produktu, zakresy, wartości domyślne, widoczność pól, uproszczone profile, ceny demo, branding i publikację. Pełne edytory materiałów, opcji, zależności, BOM i szablonów PDF wymagają kolejnego etapu.
- Reguły ceny i BOM są demonstracyjne, nie handlowe ani produkcyjne.
- GitHub Pages nie hostuje API; bez `VITE_API_BASE_URL` działa jawny tryb statyczny z podglądem i AR, ale zapis, wycena i serwerowy PDF są niedostępne.
- PDF MVP używa bezpiecznego fontu bazowego i transliteracji znaków w warstwie serwerowej. Produkcyjny szablon wymaga zatwierdzonego fontu TTF/OTF i finalnego brandingu.
- Pergola nadal przebudowuje część geometrii po zmianach konstrukcyjnych. Dalsza optymalizacja lameli do jednego `InstancedMesh` pozostaje osobnym zadaniem wydajnościowym.

## Dane techniczne potrzebne dla produkcyjnej werandy

- zatwierdzone przekroje i bezpieczne rozpiętości profili;
- reguły rozmieszczenia słupów, krokwi i pól dla szerokości oraz obciążeń;
- strefy śniegowe i wiatrowe, ugięcia i kombinacje obciążeń;
- dozwolone spadki dla każdego pokrycia;
- parametry szkła i poliwęglanu, podparcia, dylatacje i tolerancje;
- detale rynny, odpływów i minimalnych spadków odwodnienia;
- punkty mocowania do ściany i podłoża oraz klasy podłoża;
- kompatybilność zabudów bocznych i frontowych z geometrią spadku;
- ograniczenia wymiarowe paneli, szyb, rolet ZIP i wypełnień;
- wymagania elektryczne, trasy przewodów, IP i sterowanie oświetleniem;
- zatwierdzone palety, materiały i warianty wykończenia;
- reguły produkcyjnego BOM, kody, odpady i długości handlowe;
- zatwierdzone reguły cenowe, podatki i polityka ważności ofert.

Materiał audytowy nie jest częścią repozytorium i nie stanowi źródła żadnej geometrii, reguły ani danych technicznych.
