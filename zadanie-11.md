function sum(a, b) {
  return a + b;
}
: ### Napisz prosty test jednostkowy dla tej funkcji używając Jest. Wyjaśnij, czym jest Jest, jak go zainstalować w projekcie i jak uruchomić ten test. Podaj również strukturę plików projektu.


ChatGPT said:
Jasne! Oto wszystko krok po kroku.

1. Co to jest Jest?
Jest to popularny framework do testów jednostkowych w JavaScript, stworzony przez Facebook.
Pozwala łatwo pisać i uruchamiać testy, obsługuje mockowanie i ma prostą składnię.

2. Funkcja, którą testujemy
js
Copy
Edit
function sum(a, b) {
  return a + b;
}

module.exports = sum; // eksportujemy funkcję, by można ją było testować
Załóżmy, że jest w pliku sum.js.

3. Prosty test jednostkowy w Jest
Utwórz plik sum.test.js z takim testem:

js
Copy
Edit
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
4. Jak zainstalować Jest?
W terminalu, w katalogu projektu:

bash
Copy
Edit
npm init -y                 # jeśli nie masz jeszcze package.json
npm install --save-dev jest
5. Jak uruchomić test?
W package.json dodaj skrypt testowy:

json
Copy
Edit
"scripts": {
  "test": "jest"
}
Następnie w terminalu:

bash
Copy
Edit
npm test
Jest automatycznie znajdzie pliki *.test.js i uruchomi testy.

6. Przykładowa struktura plików projektu
python
Copy
Edit
my-project/
│
├── sum.js
├── sum.test.js
├── package.json
└── node_modules/
Podsumowanie
sum.js — funkcja do testowania

sum.test.js — test jednostkowy w Jest

npm install --save-dev jest — instalacja

npm test — uruchomienie testów

