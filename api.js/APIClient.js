export class APIClient {
    constructor(baseUrl = 'https://jsonplaceholder.typicode.com') {
        this.baseUrl = baseUrl;
    }

    /**
     * Fetches users and todos from the API.
     * @param {number} retries - Number of attempts remaining (default is 3).
     * @param {number} delay - Time to wait between retries in milliseconds.
     * @returns {Promise<Object>} - An object containing arrays of users and todos.
     */
    async fetchData(retries = 3, delay = 1000) {
        try {
          
            const [userRes, todosRes] = await Promise.all([
                fetch(`${this.baseUrl}/users`),
                fetch(`${this.baseUrl}/todos`)
            ]);

            if (!userRes.ok || !todosRes.ok) {
                throw new Error(`HTTP Error: ${userRes.status} / ${todosRes.status}`);
            }

            return {
                users: await userRes.json(),
                todos: await todosRes.json()
            };

        } catch (error) {
            if (retries > 0) {
                console.warn(` API Request failed. Retrying in ${delay}ms... (${retries} attempts left)`);
                
                // Create a 'wait' promise for rate limiting/backoff
                await new Promise(resolve => setTimeout(resolve, delay));
               
                return this.fetchData(retries - 1, delay * 2); 
            }
            console.error("API Error: Max retries reached.", error.message);
            return { users: [], todos: [] };
        }
    }
}