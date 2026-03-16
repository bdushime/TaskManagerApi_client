import readline from 'readline';

export class MenuView {
    constructor(controller) {
        this.controller = controller;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    display() {
        console.log(`
        =============================
           TASK MANAGER CLI MENU
        =============================
        1. View Global Statistics
        2. Search Tasks by Title
        3. View Unique Categories
        4. View User Dashboard
        5. Exit
        =============================
        `);

        this.rl.question('Choose an option (1-5): ', (choice) => {
            this.handleChoice(choice);
        });
    }

    handleChoice(choice) {
        switch (choice) {
            case '1':
                this.controller.showGlobalStats();
                this.display(); 
                break;
            case '2':
                this.rl.question('Enter search query: ', (query) => {
                    this.controller.handleSearch(query);
                    this.display();
                });
                break;
            case '3':
                this.controller.showCategories();
                this.display();
                break;
            case '4':
                this.rl.question('Enter User ID: ', (id) => {
                    this.controller.showUserDashboard(Number(id));
                    this.display();
                });
                break;
            case '5':
                console.log("Exiting... Happy coding!");
                this.rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                this.display();
        }
    }
}