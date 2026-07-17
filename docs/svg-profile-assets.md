# Profile z przekroju SVG

Profile SVG są tenantowymi, niezmiennymi zasobami wejściowymi. Definicja produktu przechowuje zweryfikowaną referencję i ustawienia osadzenia; treść pliku jest pobierana osobno. Opublikowane i archiwalne wersje produktów zachowują tę samą geometrię, a konfiguracje wskazujące `productVersionId` pozostają odtwarzalne.

## Interpretacja geometrii

- `viewBox` jest obowiązkowy, a jedna jego jednostka oznacza 1 mm.
- Źródłowe X biegnie w prawo, a źródłowe Y w dół.
- Renderer odwraca Y do układu Three.js. Przednia powierzchnia leży na lokalnym `Z = 0`, a bryła jest wyciągana wzdłuż `+Z`.
- Dozwolone są zamknięte, wypełnione kontury `path`, `polygon`, `rect`, `circle` i `ellipse`. Otwory można opisać regułą `evenodd`.
- Nie jest stosowane automatyczne skalowanie. Jedynym przeliczeniem jest mm → m.
- Obrót 0/90/180/270 i odbicia są wykonywane w przekroju przed wyciągnięciem.

`geometryType: "BOX"` zachowuje dotychczasową geometrię. Brak pola w starszej definicji jest normalizowany do `BOX`. `geometryType: "SVG_PROFILE"` wymaga referencji `svgProfile` z wersjami formatu `1.0`.

## Bezpieczeństwo i storage

Importer parsuje XML i geometrię, usuwa metadane oraz nieznane atrybuty i odrzuca między innymi skrypty, zdarzenia, style, odwołania zewnętrzne, obrazy, `foreignObject`, filtry, maski, transformacje, otwarte kontury i pliki bez poprawnego `viewBox`. Sanitizowana treść jest serwowana z CSP `default-src 'none'`, `nosniff` i bez ujawniania wewnętrznego klucza storage.

`ProfileAssetObjectStorage` jest portem storage. Adapter Stage 1 przechowuje treść w tabeli `profile_asset_objects`; adapter S3 może go zastąpić bez zmiany API, panelu ani definicji produktu. Nie ma zależności od dysku lokalnego instancji.

Metadane, obiekty, powiązania z wersjami i audyt są tenantowe. Usunięcie oznacza bezpieczne wycofanie zasobu i jest blokowane, gdy zasób jest powiązany z dowolną wersją produktu. Zdarzenia `CREATED`, `CONFIGURED` i `RETIRED` zapisują aktora, organizację, czas oraz ustawienia geometrii.

## API i uprawnienia

- `POST /api/admin/:tenantSlug/profile-assets` — upload i walidacja.
- `GET /api/admin/:tenantSlug/profile-assets` — biblioteka organizacji i wykorzystanie limitów.
- `GET /api/admin/:tenantSlug/profile-assets/:assetId/content` — chroniona treść do panelu.
- `GET /api/admin/:tenantSlug/profile-assets/audit` — audyt.
- `DELETE /api/admin/:tenantSlug/profile-assets/:assetId` — wycofanie nieużywanego zasobu.
- `GET /api/public/:tenantSlug/profile-assets/:assetId` — treść wyłącznie dla zasobu użytego przez opublikowaną lub archiwalną wersję.

Role `OWNER`, `ADMIN`, `EDITOR`, `VIEWER` mapują się na osobne uprawnienia odczytu, tworzenia, konfiguracji, publikowania i usuwania. Każda operacja ponownie sprawdza tenant z sesji i ścieżki.

Limity są dostarczane przez `ProfileAssetLimitProvider`, więc przyszły plan może zwracać inne wartości per tenant. Obecny provider przyjmuje ustawienia środowiskowe:

- `PROFILE_ASSET_MAX_BYTES`
- `PROFILE_ASSET_MAX_COUNT`
- `PROFILE_ASSET_MAX_TOTAL_BYTES`
- `PROFILE_MAX_DIMENSION_MM`
- `PROFILE_MAX_EXTRUSION_MM`

Przetwarzanie jest oddzielone interfejsem `ProfileAssetProcessor`. Dzisiaj działa synchronicznie; przyszły adapter może zlecić identyczny kontrakt kolejce lub workerowi.
