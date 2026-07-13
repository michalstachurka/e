# Dodawanie nowego produktu

## 1. Dodaj publiczny typ i DTO

Rozszerz `ProductTypeSchema` w `packages/contracts/src/index.ts`. Dodaj osobny schemat `values` i nowy wariant `PublicConfigurationSchema`. DTO powinno zawierać wyłącznie publiczne decyzje użytkownika, `tenantSlug`, `productType` i niezmienny `productVersionId`.

Nie dodawaj do DTO marż, kosztów, kodów produkcyjnych ani pełnych wzorów.

## 2. Dodaj wersjonowaną definicję

Dodaj seed w `packages/configurator-core/src/catalog.ts`:

- nazwę i opis;
- kolejność oraz widoczność;
- kroki;
- parametry z `min`, `max`, `step`, wartością domyślną i jednostką;
- publiczne kolory i opcje;
- uproszczone parametry wizualne;
- profile z nazwą, zastosowaniem i przekrojem `aMm × bMm`, oznaczone `demoOnly`, dopóki producent ich nie zatwierdzi;
- `demoOnly: true` dla danych niezatwierdzonych;
- prywatne reguły ceny i BOM demo.

Po wdrożeniu panelu baza jest źródłem prawdy. Seed służy do pierwszego uruchomienia nowego tenant-a.

## 3. Dodaj walidację domenową

W `packages/configurator-core/src/domain.ts` dodaj walidator produktu. Powinien:

- najpierw przejść przez Zod;
- sprawdzić zakresy opublikowanej wersji;
- rozwiązać zależności;
- zwrócić błędy z `path`, `message` i stabilnym `code`;
- zwrócić publiczne wartości pochodne potrzebne do podsumowania i BOM;
- oznaczyć dane demo ostrzeżeniem.

Walidacja backendowa jest ostateczna. Frontend może liczyć podgląd lokalnie, lecz nie może sam zatwierdzić projektu ani ceny.

## 4. Zbuduj parametryczny renderer

Utwórz moduł w `public/pergola-configurator/js/renderers/`. Renderer musi implementować:

```text
productType
createScene(context, configuration)
updateScene(scene, configuration)
disposeScene(scene)
getBounds(scene)
```

Następnie zarejestruj go w `ProductRendererRegistry`. Produktu nie wybieraj przez warunki rozsiane po UI.

Zasady renderera:

- używaj `BoxGeometry`, `PlaneGeometry`, `ExtrudeGeometry` i uproszczonych geometrii;
- używaj `InstancedMesh` dla elementów powtarzalnych;
- nie odwzorowuj komór profili, śrub i technologii produkcji;
- nie twórz nowego `WebGLRenderer` przy zmianie produktu;
- zwalniaj geometrie i materiały produktu;
- wyłączaj elementy techniczne z AR przez `userData.arExclude`;
- trzymaj dół modelu na `Y = 0`;
- zachowuj stabilny target i dystans kamery.

Wymiary geometrii powtarzalnej powinny pochodzić z `profiles`, a nie z wartości powielonych w UI. Przekroje i techniczne oznaczenia `a`/`b` dodaj do studia profili w panelu administratora, razem z żywym renderem wskazującym konkretny element. Nie ujawniaj tych narzędzi technicznych w publicznym panelu klienta.

## 5. Podłącz kontrolki

Publiczny panel może być generowany z definicji lub mieć dedykowany układ premium. W obu wariantach:

- zakresy wejść muszą pochodzić z definicji API;
- lokalny stan powinien mapować się jeden do jednego na publiczne DTO;
- walidacja API powinna mieć debounce;
- zmiany koloru nie powinny przebudowywać geometrii;
- komunikaty błędów muszą wskazywać pole;
- dane demo muszą być jawnie oznaczone.

## 6. Dodaj wycenę i BOM

Rozszerz backendowe funkcje `calculateQuote` i `generateBom`. Publiczna odpowiedź może zawierać tylko wynik i ogólne pozycje. Prywatne reguły pozostają w wersji produktu.

Reguły administracyjne powinny używać ograniczonego modelu danych. Zabronione są `eval`, `new Function` i zapisywanie kodu JavaScript.

## 7. Sprawdź PDF, zapis i AR

Nowy produkt musi przejść przez wspólne endpointy zapisu, wyceny i PDF. Link powinien zawierać wyłącznie losowy `shareId`. Renderer musi poprawnie klonować aktualną scenę do GLB i USDZ bez helperów oraz świateł technicznych.

## 8. Dodaj testy

Minimalny zestaw:

- poprawne i błędne zakresy;
- co najmniej jedna zależność produktu;
- wartości pochodne geometrii;
- wycena demo;
- publiczny BOM;
- serializacja;
- pobranie definicji API;
- zapis i odczyt projektu;
- ochrona admina;
- przełączenie produktu w Playwright;
- mobile i brak błędów konsoli.

Na końcu uruchom `npm test`, build z `VITE_BASE=/e/` i `npm run test:e2e`.
