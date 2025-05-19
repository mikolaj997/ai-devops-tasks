function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}:
### Dodaj do tej funkcji komentarze dokumentacyjne w formacie JSDoc.

Jasne! Oto Twoja funkcja z komentarzami dokumentacyjnymi w formacie JSDoc:

javascript
Copy
Edit
/**
 * Fetches user data from the API by user ID.
 *
 * @param {string|number} userId - The unique identifier of the user to fetch.
 * @returns {Promise<{name: string, email: string, lastLogin: Date} | null>} 
 *          A promise that resolves to an object containing user details:
 *          - name: user's name
 *          - email: user's email
 *          - lastLogin: Date object of the user's last login timestamp
 *          Returns null if the fetch fails or the response is not ok.
 */
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}
