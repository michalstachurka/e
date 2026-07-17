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
- profile konstrukcyjne są wersjonowaną częścią definicji produktu, natomiast ich przekroje i narzędzia edycji są prezentowane wyłącznie administratorowi;
- przekroje SVG korzystają z tenantowych, niezmiennych zasobów, wymiennego object storage i wspólnej fabryki geometrii Three.js opisanej w [`svg-profile-assets.md`](svg-profile-assets.md);
- definicje produktów i zakresy pochodzą z publicznego API, z jawnym fallbackiem demo dla statycznego GitHub Pages;
- API waliduje, zapisuje i wersjonuje konfiguracje;
- jeden wersjonowany dokument projektu jest współdzielony przez tryb publiczny i Tryb doradcy;
- prywatne zdjęcia nieruchomości oraz maski pierwszego planu przechodzą kontrolowany pipeline obrazu i są pobierane wyłącznie przez autoryzowane trasy projektu;
- centralny resolver możliwości łączy ustawienia platformy, planu, organizacji, produktu i roli;
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
- podstawowe dopasowanie prywatnego zdjęcia oraz wspólne komponowanie zdjęcia, WebGL i maski do podglądu i snapshotu;
- eksport aktualnej sceny do AR;
- zachowanie odczytu starszych linków pergoli wyłącznie jako kompatybilność wsteczna.

Frontend nie zawiera pełnych reguł ceny, marż, kosztów ani kodów BOM. Nie generuje nowych linków z pełną konfiguracją w query string.

Publiczny panel nie pokazuje przekrojów profili ani technicznych oznaczeń `a`/`b`. Te dane pozostają w kontrakcie renderera, lecz ich edycja i wizualne objaśnienie należą do chronionego panelu administratora. Starsze katalogi bez pola `profiles` są uzupełniane adapterem na podstawie istniejących wartości wizualnych.

### Wspólny rdzeń

`packages/contracts` zawiera schematy Zod publicznych DTO, bezpiecznych danych administracyjnych, polityk możliwości i dokumentu projektu `1.0`.

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

Na bokach werandy prostokątna zabudowa i górny trójkąt są osobnymi decyzjami. Dla rolety ZIP kaseta jest pozioma, tkanina wychodzi z jej dolnej krawędzi i schodzi do podłoża, a obszar nad kasetą nie jest automatycznie wypełniany. Lewy i prawy trójkąt mogą niezależnie użyć materiału dostępnego dla zabudów bocznych. Opcjonalny profil podpierający jest montowany bezpośrednio nad kasetą i może zostać włączony wyłącznie dla rolety ZIP; zależność sprawdza backend.

### API

`apps/api` to osobna aplikacja Fastify. Korzysta z:

- Zod na granicy każdego zapisu;
- portu `ConfiguratorStore`, który dopuszcza implementację synchroniczną i asynchroniczną;
- SQLite przez `node:sqlite` jako bieżącego adaptera lokalnego i pilotażowego;
- PostgreSQL przez `pg` jako jawnie wybierany adapter docelowy, z wersjonowanymi migracjami blokowanymi przed równoległym wykonaniem;
- losowych identyfikatorów `shareId` i sesji;
- `scrypt` do haseł;
- HTTP-only cookies, `SameSite=Strict` i wygaśnięcia sesji;
- rate limiting logowania;
- konfigurowalnego CORS;
- limitu body 13 MB oraz niższych, konfigurowalnych limitów pliku i pikseli w procesorze zdjęć;
- sanityzacji edytowalnych tekstów;
- filtrowania danych po `tenantSlug`.

Publiczne endpointy:

- `GET /api/public/:tenantSlug/configurator`
- `GET /api/public/:tenantSlug/products/:productType`
- `POST /api/public/:tenantSlug/validate`
- `POST /api/public/:tenantSlug/configurations`
- `GET /api/public/:tenantSlug/configurations/:shareId`
- `PUT /api/public/:tenantSlug/configurations/:shareId`
- `GET|POST|DELETE /api/public/:tenantSlug/configurations/:shareId/assets/...`
- `GET /api/public/:tenantSlug/capabilities`
- `POST /api/public/:tenantSlug/quotes`
- `POST /api/public/:tenantSlug/pdf`
- `GET /api/public/:tenantSlug/profile-assets/:assetId`

Administracyjne endpointy:

- `POST /api/admin/:tenantSlug/login`
- `POST /api/admin/logout`
- `GET /api/admin/me`
- `GET /api/admin/:tenantSlug/products`
- `PUT /api/admin/:tenantSlug/products/:productType`
- `POST /api/admin/:tenantSlug/products/:productType/publish`
- `PUT /api/admin/:tenantSlug/branding`
- `GET|POST /api/admin/:tenantSlug/profile-assets`
- `GET /api/admin/:tenantSlug/profile-assets/:assetId/content`
- `GET /api/admin/:tenantSlug/profile-assets/audit`
- `DELETE /api/admin/:tenantSlug/profile-assets/:assetId`
- `GET|PUT /api/admin/:tenantSlug/features`

Endpointy Trybu doradcy wymagają sesji oraz uprawnienia roli:

- `GET|PUT /api/advisor/:tenantSlug/projects/:shareId`
- `GET /api/advisor/:tenantSlug/projects/:shareId/versions`
- `GET|POST|DELETE /api/advisor/:tenantSlug/projects/:shareId/assets/...`
- `POST /api/advisor/:tenantSlug/projects/:shareId/calculations`
- `POST /api/advisor/:tenantSlug/projects/:shareId/exports`
- `DELETE /api/advisor/:tenantSlug/projects/:shareId/public-share`

Parametr `mode=advisor` wybiera interfejs, ale nie nadaje dostępu. Frontend pobiera możliwości z chronionego endpointu, a każda operacja zdjęcia, kalibracji, kalkulacji i eksportu jest ponownie sprawdzana przez backend.

### Role i możliwości

Kontrakt aplikacyjny przewiduje role `platform_admin`, `organization_admin`, `advisor` i `public_customer`. Bieżące konta pilota zachowują kompatybilne role bazowe: `OWNER`/`ADMIN` są mapowane na `organization_admin`, `EDITOR`/`VIEWER` na `advisor`, a anonimowy posiadacz tokenu na `public_customer`. `platform_admin` jest rolą zarezerwowaną dla przyszłej warstwy operatorskiej i nie otrzymał w Stage 1 publicznego panelu.

`resolveEffectiveCapabilities` jest jedynym miejscem rozstrzygania możliwości. Efektywna wartość to przecięcie polityki platformy, przyszłego planu, ustawień organizacji, opcjonalnej polityki produktu i roli. Panel rozdziela ustawienia trybu publicznego i doradcy dla zdjęcia, dopasowania, kalibracji, maski, ceny, kalkulacji oraz eksportów. Limity obejmują wielkość i rozdzielczość zdjęcia, liczbę zasobów i wersji projektu. Ukrycie kontrolki jest wyłącznie prezentacją wyniku; API niezależnie odrzuca niedozwolone wywołanie.

### Niezmienniki izolacji klientów

- każda publiczna operacja przyjmująca konfigurację porównuje `configuration.tenantSlug` z `:tenantSlug` w adresie i odrzuca rozbieżność jako `tenant_mismatch`;
- każdy administracyjny endpoint z `:tenantSlug` korzysta ze wspólnego `requireTenantPermission`, który porównuje klienta sesji z klientem trasy i sprawdza wymagane uprawnienie roli przed uruchomieniem logiki endpointu;
- odczyt zapisanej konfiguracji wymaga jednocześnie poprawnego `shareId` i zgodnego klienta;
- wszystkie prywatne zasoby są wiązane jednocześnie z `tenant_id`, projektem i zasobem; trasa innego tenanta zwraca 404;
- publiczny token jest losowy, wygasa i może zostać trwale unieważniony przez uprawnionego administratora organizacji bez utraty dostępu doradcy do projektu;
- zapytania do danych produktowych, brandingu, konfiguracji i wycen muszą zawierać filtr klienta. Nowych endpointów nie wolno zabezpieczać wyłącznie identyfikatorem przekazanym przez frontend.
- wspólna domena może wybrać klienta przez zwalidowany `?tenant=slug`, ale host obecny w serwerowej `TENANT_HOST_MAP` jest zablokowany do wskazanego klienta i ma pierwszeństwo przed parametrem URL;
- frontend nie używa katalogu fallback `visnex` dla innego klienta. Brak katalogu lub błędna mapa domeny kończy się stanem fail-closed bez renderowania cudzych produktów.

Te reguły są objęte testami regresyjnymi. Przy migracji do PostgreSQL pozostają granicą aplikacyjną i powinny zostać uzupełnione politykami izolacji na poziomie bazy.

### Kontekst tenantów i domeny white-label

`GET /api/runtime-context` rozwiązuje tenant na podstawie nagłówka hosta, rejestru domen w bazie oraz przejściowej mapy `TENANT_HOST_MAP`. Odpowiedź ma `Cache-Control: no-store` i `Vary: Host`, aby warstwa cache nie przeniosła kontekstu między domenami. Konfigurator i panel korzystają z jednego resolvera: zablokowana domena, mapa osadzającej aplikacji, zwalidowany query string, domyślny tenant serwera, a na końcu lokalny tenant pilota.

Najpierw sprawdzany jest aktywny wpis w `tenant_domains`, a dopiero potem przejściowa mapa środowiskowa `TENANT_HOST_MAP`. Domena z bazy jest host-locked i pierwsza aktywna domena tenanta służy jako kanoniczny adres nowych linków projektów. Panel zachowuje tenant w linku do konfiguratora. Identyfikator jest nadal sprawdzany na każdej granicy API; wybór tenanta we frontendzie nie nadaje uprawnień administratora. Automatyczna weryfikacja DNS i samoobsługowy onboarding pozostają kolejnym etapem, ale nie wymagają już forka aplikacji ani zmiany tras API.

## Model danych

Schematy SQLite i PostgreSQL mają logiczne tabele dla: `Tenant`, `TenantDomain`, `AdminUser`, `BrandingSettings`, `ProductCategory`, `ProductType`, `ProductDefinition`, `ProductVersion`, `ParameterDefinition`, `ProfileDefinition`, `MaterialDefinition`, `ColorDefinition`, `OptionGroup`, `OptionValue`, `DependencyRule`, `ValidationRule`, `PricingRule`, `BomRule`, `PdfTemplate`, `SavedConfiguration`, `Quote` i `BomDocument`.

Rozszerzenie projektowe dodaje `FeaturePolicySet`, `ProjectDocument`, `ProjectVersion`, `ProjectShareRevocation`, `PrivateAsset`, `PrivateAssetVariant`, `PrivateAssetObject`, `ProjectAuditEvent`, `AdvisorCalculation` i `ExportJob`. PostgreSQL dostaje je w migracji `3 / advisor_projects_private_assets_and_capabilities`; SQLite tworzy równoważny schemat idempotentnie. Istniejący `SavedConfiguration` bez dokumentu projektu jest odczytywany przez adapter zgodności jako projekt `1.0` z domyślną sceną.

Jeden dokument projektu przechowuje wersję formatu, konfigurację produktu oraz scenę: identyfikatory prywatnych zasobów, transformację zdjęcia, transformację modelu, kamerę, linie i płaszczyzny kalibracji, punkt montażu, światło, shadow catcher i maskę. Nie zawiera bajtów obrazu, kluczy storage, podpisanych adresów ani kalkulacji. Każdy zapis stosuje optimistic locking przez `expectedVersion`, tworzy niezmienną wersję z autorem i datą oraz zdarzenie audytowe.

### Prywatne zdjęcia i maski

`PrivateAssetService` oddziela metadane, storage i przetwarzanie. `PrivateAssetStorage` można zastąpić adapterem S3 bez zmiany tras lub dokumentu projektu; obecny adapter Stage 1 przechowuje obiekty w dedykowanej, tenantowej tabeli bazy, a nie w lokalnym systemie plików ani JSON projektu. `PrivateAssetProcessor` jest osobnym portem, więc przetwarzanie może zostać przekierowane do workera.

Procesor sprawdza sygnaturę JPG/PNG/WebP, restrykcyjny base64, limit bajtów i pikseli, wykonuje rotację EXIF, po czym ponownie koduje obraz. Re-encoding usuwa EXIF i GPS. Zdjęcie otrzymuje wariant główny WebP oraz podgląd, maska osobny PNG. Oryginalne bajty nie są zachowywane. Dostęp prowadzi przez trasę wymagającą tokenu projektu albo sesji doradcy; odpowiedź ma `private, no-store` i `nosniff`. Usunięcie zdjęcia trwale usuwa obiekty wszystkich wariantów i zależne maski oraz zapisuje audyt.

`ConfiguratorStore` oddziela trasy Fastify od dialektu bazy i od synchronicznego API `node:sqlite`. Wszystkie wywołania w warstwie HTTP są `await`-owane. `ConfiguratorDatabase` implementuje SQLite, a `PostgresConfiguratorDatabase` ten sam kontrakt dla PostgreSQL. `DATASTORE=sqlite|postgres` wybiera adapter jawnie; obecność samego `DATABASE_URL` nie zmienia aktywnego magazynu.

Operatorskie `npm run tenant:provision` tworzy nowego tenanta w jednej transakcji: branding, administratora, kategorię, osobne definicje i identyfikatory wersji obu produktów oraz aktywne domeny. Nie ma publicznego endpointu onboardingu. Niepowodzenie, w tym konflikt domeny, wycofuje całą operację.

Publiczna definicja profilu zawiera stabilne `id`, nazwę, zastosowanie, wymiary `aMm` i `bMm`, typ uproszczonego przekroju oraz flagę `demoOnly`. Panel administratora pozwala zmienić oba wymiary w wersji roboczej. Renderer otrzymuje przekroje razem z definicją produktu, dlatego tenant może podmienić zatwierdzone profile bez forka frontendu.

W pionowym wycinku opublikowane definicje, parametry, kolory oraz prywatne reguły demo są przechowywane w wersjonowanych dokumentach JSON. Osobne tabele normalizacyjne są przygotowane pod kolejną iterację panelu. Publikacja archiwizuje poprzednią wersję, publikuje draft i tworzy następny draft. Zapisana konfiguracja przechowuje `productVersionId`.

## Wycena i BOM

Backend obsługuje demonstracyjnie cenę bazową, stawkę za m², dopłatę za moduł i opcję, dopłatę za kolor, mnożnik, cenę minimalną, zaokrąglenie i VAT. API zwraca wyłącznie wynik oraz flagę `demoOnly`; pełny wzór nie trafia do publicznego katalogu.

BOM obsługuje w pionowym wycinku elementy stałe, na moduł, słup, krokiew, lamelę i powierzchnię. Wynik publiczny zawiera nazwy ogólne, ilości i jednostki, bez kodów, kosztów i instrukcji technologicznych.

Tryb doradcy ma osobny backendowy kalkulator demo. Bierze wersjonowane reguły produktu i wylicza zakup, sprzedaż, marżę, rabat ograniczony rolą, VAT, transport, montaż, pozycje dodatkowe, walutę, ważność oraz identyfikator wersji cennika. Dane przysłane przez przeglądarkę nie są uznawane za wynik ceny. Publiczne API otrzymuje wyłącznie `HIDDEN`, `FROM` albo bezpieczny detal `EXACT`; nie serializuje kosztu zakupu, marży ani wewnętrznych reguł. Nie jest to zatwierdzony algorytm handlowy.

## PDF

Endpoint PDF ponownie waliduje konfigurację, wylicza aktualną wycenę i BOM, a następnie tworzy dokument przez `pdf-lib`. Frontend może przesłać PNG sceny. Dokument zawiera branding, numer projektu, datę, produkt, wymiary, cenę demo, publiczny BOM i informację o weryfikacji technicznej.

Gdy API nie jest dostępne, zachowany jest dotychczasowy lokalny wydruk jako wyraźny fallback, nie jako źródło oferty.

## Zapis i udostępnianie

Nowy projekt jest walidowany i zapisywany przez aktywny `ConfiguratorStore`. Link zawiera tylko `tenant` i losowy `project`. Domyślne wygaśnięcie ustawione przez frontend wynosi 30 dni. Starsze linki pergoli z parametrami mogą zostać odczytane, ale aplikacja nie tworzy nowych linków tego typu.

Tryb publiczny i doradcy modyfikują ten sam projekt. Doradca widzi historię wersji, może uzupełnić kalibrację, maskę i światło, wykonać kalkulację oraz autoryzować eksport. Unieważnienie publicznego linku tworzy oddzielny rekord i audyt; projekt oraz dostęp sesyjny organizacji pozostają zachowane.

## Eksport projektu

Autoryzacja eksportu odbywa się na backendzie i tworzy tenantowy `ExportJob` w stanie `READY`. JSON zawiera wersjonowany dokument potrzebny do ponownego otwarcia projektu, bez sekretów, adresów storage i kalkulacji. GLB jest tworzony z klona aktywnej sceny przez `GLTFExporter`: bez zdjęcia, maski, shadow catchera, prowadnic i danych cenowych. Eksport zachowuje jednostki Three.js, gdzie 1000 mm reprezentowane w scenie jako 1 odpowiada 1 metrowi glTF. Do `extras` trafiają wyłącznie identyfikator projektu i produktu, wersja eksportu oraz podstawowe wymiary. `ExportJob` jest granicą pod przyszłą kolejkę; Stage 1 wykonuje mały eksport synchronicznie w przeglądarce po autoryzacji.

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

Do trwałych testów SQLite usługa Railway powinna mieć wolumen pod `/data`. Backend wykrywa `RAILWAY_VOLUME_MOUNT_PATH`, port, domenę publiczną i buduje na ich podstawie ścieżkę bazy, adres konfiguratora oraz CORS. PostgreSQL wymaga jawnego `DATASTORE=postgres` i `DATABASE_URL`; uruchamia migracje schematu w transakcji z blokadą, bez automatycznego importu pliku SQLite.

Komendy kontroli:

```text
npm run typecheck:api
npm test
VITE_BASE=/e/ npm run build
npm run test:e2e
```

Onboarding pilota korzysta z `NEW_TENANT_NAME`, `NEW_TENANT_ADMIN_PASSWORD` i argumentów `--slug`, `--admin-email`, opcjonalnie `--domains`. Hasło nie jest argumentem procesu. Na Windows nazwę ze spacjami najlepiej przekazać przez `NEW_TENANT_NAME`.

## Ograniczenia pionowego wycinka

- Adapter PostgreSQL i jego test kontraktowy są dostępne, ale produkcja nadal używa SQLite. Przed przełączeniem pozostają: eksport/import danych z kontrolą liczności i sum kontrolnych, próba odtworzenia, plan wycofania oraz test na prawdziwym serwerze PostgreSQL.
- Zapytania obu adapterów filtrują dane tenantem i testy potwierdzają izolację aplikacyjną. Polityki PostgreSQL RLS pozostają dodatkową barierą wymaganą przed samoobsługowym SaaS i nie wolno deklarować ich działania przed wdrożeniem kontekstu tenanta na połączeniu.
- Onboarding płatnego pilota jest transakcyjny, lecz wykonywany przez operatora. Samoobsługowy signup, weryfikacja DNS, billing i automatyczne certyfikaty pozostają poza MVP.
- Panel edytuje podstawowe dane produktu, zakresy, wartości domyślne, widoczność pól, uproszczone profile, ceny demo, branding i publikację. Pełne edytory materiałów, opcji, zależności, BOM i szablonów PDF wymagają kolejnego etapu.
- Reguły ceny i BOM są demonstracyjne, nie handlowe ani produkcyjne.
- GitHub Pages nie hostuje API; bez `VITE_API_BASE_URL` działa jawny tryb statyczny z podglądem i AR, ale zapis, wycena i serwerowy PDF są niedostępne.
- Obecny adapter prywatnych zasobów jest bazodanowy. Przed większym ruchem należy wdrożyć adapter S3, podpisane krótkotrwałe URL-e/CDN, retencję i skanowanie antywirusowe; dokument projektu i API nie wymagają w tym celu migracji formatu.
- Przetwarzanie obrazu i eksport ma port procesora oraz rekord zadania, ale w Stage 1 działa synchronicznie. Worker, retry, idempotency key, monitoring kolejki i limit przestrzeni rozliczany dla planu pozostają kolejnym etapem.
- Role aplikacyjne i centralne możliwości są gotowe na plany, ale UI zarządzania członkostwami, billing, `platform_admin` oraz produktowe nadpisania polityk nie są jeszcze zbudowane.
- Izolacja opiera się na filtrach aplikacyjnych i testach obu adapterów; PostgreSQL RLS nadal jest wymaganym dodatkowym zabezpieczeniem przed samoobsługowym SaaS.
- Kalibracja jest świadomie wspomagana ręcznie. Nie estymuje automatycznie pełnej kamery z niedostatecznej liczby punktów, nie wykonuje segmentacji AI i nie obiecuje dokładności pomiarowej.
- PDF MVP używa bezpiecznego fontu bazowego i transliteracji znaków w warstwie serwerowej. Produkcyjny szablon wymaga zatwierdzonego fontu TTF/OTF i finalnego brandingu.
- Pergola nadal przebudowuje część geometrii po zmianach konstrukcyjnych. Dalsza optymalizacja lameli do jednego `InstancedMesh` pozostaje osobnym zadaniem wydajnościowym.
- Przekroje seedów, w tym profil podpierający kasetę ZIP, pozostają danymi demonstracyjnymi do czasu przekazania kart technicznych producenta. Interfejs nie przedstawia ich jako zatwierdzonych danych wykonawczych.
- Sposób montażu pozostałych zabudów bocznych werandy nie został w tej iteracji przebudowany; kolejne zmiany mogą korzystać z rozdzielonych pól prostokąta i trójkąta bez migracji całego produktu.

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
