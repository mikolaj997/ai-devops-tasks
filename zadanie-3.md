dockerfile node:
Jasne! Oto przykładowy Dockerfile dla prostej aplikacji Node.js (np. Express):

Dockerfile

# Pobierz oficjalny obraz Node.js
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj pozostałe pliki aplikacji
COPY . .

# Otwórz port (jeśli np. aplikacja działa na 3000)
EXPOSE 3000

# Domyślne polecenie do uruchomienia aplikacji
CMD ["npm", "start"]
Ten Dockerfile zakłada, że masz standardowy projekt Node.js z plikiem package.json i komendą npm start w sekcji "scripts".

Jeśli chcesz, mogę też dorzucić docker-compose.yml albo pokazać jak zbudować i uruchomić kontener z tego pliku.

### Napisz prosty Dockerfile dla aplikacji Node.js, który:
- używa Node 18 jako obrazu bazowego
- kopiuje pliki package.json i package-lock.json
- instaluje zależności
- kopiuje resztę plików aplikacji
- wystawia port 3000
- uruchamia aplikację poleceniem "npm start":
  
# Użyj Node.js 18 jako obrazu bazowego
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki zależności
COPY package.json package-lock.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików aplikacji
COPY . .

# Wystaw port 3000
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "start"]

: z tym poleceniem sobie chat poradził już na początku, gdy pytanie było ustrukturyzowane podał bardziej 
szczegółowe dane lecz można by było te dane łatwo wprowadzić do pierwotnej odpowiedzi
