
### Napisz prosty skrypt bash, który sprawdza, czy usługa Docker działa, a jeśli nie - próbuje ją uruchomić.


ChatGPT said:
Oczywiście! Oto prosty skrypt bash, który sprawdza, czy usługa Docker działa, a jeśli nie — próbuje ją uruchomić:

bash
Copy
Edit
#!/bin/bash

# Sprawdź status usługi Docker
if systemctl is-active --quiet docker; then
    echo "Docker działa poprawnie."
else
    echo "Docker nie działa. Próba uruchomienia..."
    sudo systemctl start docker

    # Sprawdź ponownie status po próbie uruchomienia
    if systemctl is-active --quiet docker; then
        echo "Docker został pomyślnie uruchomiony."
    else
        echo "Nie udało się uruchomić Dockera."
        exit 1
    fi
fi
Możesz zapisać ten skrypt np. jako check_docker.sh, nadać mu prawa do wykonania (chmod +x check_docker.sh) i uruchomić.

### Wyjaśnij działanie tego skryptu linia po linii, tak jakbyś tłumaczył osobie początkującej.


ChatGPT said:
Pewnie! Oto wyjaśnienie działania skryptu linia po linii, tak, żeby nawet ktoś początkujący dobrze to zrozumiał:

bash
Copy
Edit
#!/bin/bash
To jest shebang, mówi systemowi, że ten plik ma być uruchomiony przez bash (powłokę bash).

bash
Copy
Edit
# Sprawdź status usługi Docker
if systemctl is-active --quiet docker; then
systemctl is-active --quiet docker sprawdza, czy usługa Docker jest aktywna (czy działa).

--quiet oznacza, że nie wyświetla niczego na ekran, tylko zwraca status (0 jeśli działa, inna wartość jeśli nie).

if ... then to warunek — jeśli Docker działa (status 0), wykonaj kod w bloku then.

bash
Copy
Edit
    echo "Docker działa poprawnie."
Jeśli Docker działa, wyświetl komunikat: „Docker działa poprawnie.”

bash
Copy
Edit
else
Jeśli warunek nie był spełniony (Docker nie działa), przejdź do bloku else — czyli wykonaj to, co jest dalej.

bash
Copy
Edit
    echo "Docker nie działa. Próba uruchomienia..."
Wyświetl informację, że Docker nie działa i spróbujesz go włączyć.

bash
Copy
Edit
    sudo systemctl start docker
Komenda do uruchomienia usługi Docker.

sudo oznacza, że potrzebne są uprawnienia administratora (może poprosić o hasło).

bash
Copy
Edit
    # Sprawdź ponownie status po próbie uruchomienia
    if systemctl is-active --quiet docker; then
Po próbie uruchomienia Docker’a sprawdzamy jeszcze raz, czy usługa faktycznie zaczęła działać.

bash
Copy
Edit
        echo "Docker został pomyślnie uruchomiony."
Jeśli Docker działa po ponownym sprawdzeniu, wyświetlamy komunikat potwierdzający sukces.

bash
Copy
Edit
    else
        echo "Nie udało się uruchomić Dockera."
        exit 1
    fi
fi
Jeśli Docker dalej nie działa, wyświetlamy komunikat o błędzie.

exit 1 oznacza zakończenie skryptu z kodem błędu (1), co zwykle sygnalizuje problem.

fi zamyka oba bloki warunkowe (if i else).

Podsumowując:
Skrypt sprawdza, czy Docker działa. Jeśli tak — mówi o tym i kończy działanie. Jeśli nie — próbuje go uruchomić, a potem sprawdza, czy to się udało. Jeśli nie, zgłasza błąd.

Masz ochotę, żebym pomógł Ci zrobić bardziej rozbudowany skrypt z logowaniem lub obsługą innych systemów?







