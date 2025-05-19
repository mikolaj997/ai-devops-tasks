May 19 10:15:32 server dockerd[1234]: time="2025-05-19T10:15:32.123456789Z" level=info msg="Container 78a2b3c4 health status changed from starting to healthy"
May 19 10:16:45 server dockerd[1234]: time="2025-05-19T10:16:45.987654321Z" level=info msg="Container 78a2b3c4 failed to connect to 172.17.0.3:5432: connection refused"
May 19 10:16:47 server dockerd[1234]: time="2025-05-19T10:16:47.246813579Z" level=warning msg="Container 78a2b3c4 health status changed from healthy to unhealthy":

### Co się dzieje w tych logach? Jakie problemy można zidentyfikować?:

W tych logach mamy podgląd stanu zdrowia (health status) kontenera o ID 78a2b3c4 i problemy z połączeniem sieciowym.

Analiza logów:
pgsql
Copy
Edit
time="2025-05-19T10:15:32.123456789Z" level=info msg="Container 78a2b3c4 health status changed from starting to healthy"
Kontener właśnie się uruchomił i przeszedł z fazy starting (startujący) do healthy (zdrowy).

Oznacza to, że początkowe testy zdrowia (health checks) zakończyły się sukcesem.

pgsql
Copy
Edit
time="2025-05-19T10:16:45.987654321Z" level=info msg="Container 78a2b3c4 failed to connect to 172.17.0.3:5432: connection refused"
Kontener próbował nawiązać połączenie z adresem IP 172.17.0.3 na porcie 5432 (domyślny port PostgreSQL), ale połączenie zostało odrzucone (connection refused).

To wskazuje na problem z bazą danych (np. serwer bazy danych jest niedostępny, wyłączony lub nie nasłuchuje na tym porcie).

pgsql
Copy
Edit
time="2025-05-19T10:16:47.246813579Z" level=warning msg="Container 78a2b3c4 health status changed from healthy to unhealthy"
Ze względu na problem z połączeniem kontener zmienił status zdrowia z healthy na unhealthy.

To oznacza, że kolejne testy zdrowia wykryły problem i kontener nie jest już uważany za prawidłowo działający.

Możliwe problemy i przyczyny:
Baza danych (PostgreSQL) na 172.17.0.3:5432 jest niedostępna — serwer bazy danych może być wyłączony, restartuje się, albo jest problem z konfiguracją sieci Docker.

Kontener aplikacji (78a2b3c4) próbuje się połączyć zanim baza jest gotowa — tzw. race condition, gdzie aplikacja startuje szybciej niż baza.

Firewall lub reguły sieciowe blokują połączenie między kontenerami.

Błędna konfiguracja adresu IP lub portu bazy danych w aplikacji.

Co warto sprawdzić?
Czy kontener bazy danych jest uruchomiony i nasłuchuje na porcie 5432.

Logi kontenera bazy danych pod kątem błędów.

Konfigurację health check w kontenerze aplikacji — co dokładnie sprawdza?

Czy aplikacja ma prawidłową konfigurację adresu i portu bazy danych.

Sieć Docker i reguły firewall.
