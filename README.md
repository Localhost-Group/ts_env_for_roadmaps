## Ts Enviroment
Jest to w pełni skonfigurowane środowisko do pracy z zadaniami Ts.
Możesz tutaj przetesować się na prostych zadaniach.

### Jak skorzystać ze środowiska
- Zainstaluj środowisko Node.js + npm
- Ściagnij repozytorium
- W linii komend uruchom komendę `npm install`
- Aby twoje środowisko automatycznie korzystało z ESLinta przy zapisie pliku musisz:
- Wejdź w File -> Preferences -> Settings -> Open Settings (JSON)
- Skopiuj wartości z pliku SaveSettingsForVsCode.js załączonego do repozytorium pliku do settings.json
- Koduj!

### Komendy o których powinieneś wiedzieć:
- `npm run test` -> uruchomi wszystkie testy z plików ***.test.ts
- `node "Ścieżka do pliku"` -> uruchomi kod znajdujący się w podanym pliku

### Jak odpalać zadania HTML + TS przy użyciu Parcela:
- otwórz folder w terminalu w którym masz rozwiązanie
- wpisz w terminal `parcel .\index.html` który odpali program w przeglądarce
- jeżeli chcesz żeby zmiany były aktualizowane na bieżąco to wpisz `parcel serve .\index.html`

#### Co wchodzi w skład tego środowiska
Środowisko jest w pełni skonfigurowane do pracy z projektami JS. \
Zawiera ono podstawową konfigurację ESLint-a oraz Prettiera. \
Dzięki temu twoje środowisko będzie automatycznie starało się trzymać dobrych praktyk w JS.
Styl którego używa ESLint to standard Airbnb:
- https://github.com/airbnb/javascript

Dodatkowo środowisko jest przygotowane do pisania testów jednostkowych przy użyciu Jest-a:
- https://jestjs.io/
