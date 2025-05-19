function getEnvironmentConfig(env) {
  if (env === 'development') {
    return {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    };
  } else if (env === 'testing') {
    return {
      apiUrl: 'http://test-server:3000/api',
      debug: true,
      timeout: 5000
    };
  } else if (env === 'staging') {
    return {
      apiUrl: 'https://staging.example.com/api',
      debug: false,
      timeout: 10000
    };
  } else if (env === 'production') {
    return {
      apiUrl: 'https://api.example.com',
      debug: false,
      timeout: 15000
    };
  } else {
    return {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    };
  }
}:
### Zrefaktoryzuj tę funkcję, aby była bardziej czytelna i łatwiejsza w utrzymaniu.


ChatGPT said:
Jasne! Poniżej masz zrefaktoryzowaną wersję funkcji getEnvironmentConfig, która jest bardziej czytelna, skalowalna i łatwiejsza do modyfikacji w przyszłości:

✅ Refaktoryzacja z wykorzystaniem obiektu konfiguracyjnego:
javascript
Copy
Edit
function getEnvironmentConfig(env) {
  const configs = {
    development: {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    },
    testing: {
      apiUrl: 'http://test-server:3000/api',
      debug: true,
      timeout: 5000
    },
    staging: {
      apiUrl: 'https://staging.example.com/api',
      debug: false,
      timeout: 10000
    },
    production: {
      apiUrl: 'https://api.example.com',
      debug: false,
      timeout: 15000
    }
  };

  // Zwróć odpowiednią konfigurację albo domyślną (development)
  return configs[env] || configs['development'];
}
🔍 Zalety tego podejścia:
✅ Prostszy kod: brak wielokrotnych if/else if

✅ Łatwiej rozszerzyć: dodanie nowego środowiska to tylko nowy klucz w obiekcie

✅ Spójność: domyślna konfiguracja wyciągnięta z tego samego źródła (configs['development'])


