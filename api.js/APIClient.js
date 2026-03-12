export class APIClient {
    constructor(baseUrl = 'https://jsonplaceholder.typicode.com') {
        this.baseUrl = baseUrl;
    }

    async fetchData() {
        try {
            const [userRes, todosRes] = await Promise.all([
                fetch(`${this.baseUrl}/users`),
                fetch(`${this.baseUrl}/todos`)
            ]);

            if (!userRes.ok || !todosRes.ok) throw new Error("Failed to fetch");

            return {
                users: await userRes.json(),
                todos: await todosRes.json()
            };
        } catch (error) {
            console.error("API Error", error.message);
            return { users: [], todos: [] };
        }
    }
}
