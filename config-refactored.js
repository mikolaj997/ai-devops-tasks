zrefaktoryzowana funkcja z config.js:
// config-refactored.js

/**
 * Zbiór konfiguracji dla różnych środowisk.
 */
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

/**
 * Zwraca konfigurację środowiska na podstawie podanej nazwy.
 *
 * @param {string} env - Nazwa środowiska (development, testing, staging, production)
 * @returns {{ apiUrl: string, debug: boolean, timeout: number }} Obiekt konfiguracji
 */
function getEnvironmentConfig(env) {
  return configs[env] || configs['development'];
}

module.exports = { getEnvironmentConfig };
