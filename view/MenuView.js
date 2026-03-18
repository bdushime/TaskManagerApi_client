import readline from 'readline';

/**
 * MenuView: Handles the Command Line Interface (CLI) and user interactions.
 * Features: Uses Node.js 'readline' to capture standard input/output streams.
 * It displays a numbered menu, captures user choices, and delegates actions 
 * to the TaskController. Includes a recursive display loop to keep the 
 * application active until the user chooses to exit.
 */

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
        5. Filter User Tasks by Status
        6. View All Tasks Sorted form A to Z
        7. View Task By User
        8. Toggle Task Status
        9. Exit
        =============================
        `);

        this.rl.question('Choose an option (1-9): ', (choice) => {
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
                this.rl.question('Enter User ID: ', (id) => {
                    this.rl.question('Filter by completed or pending :', (status) => {
                        this.controller.showUserTasksByStatus(Number(id), status.toLowerCase());
                        this.display();
                    })
                });
                break;
            case '6':
                 this.controller.showSortedTasks(true);
                 this.display();
                break;
            case '7':
                 this.controller.showUserTaskDistributin();
                 this.display();
                break;
            case '8':
                this.rl.question('Enter the Task ID to toggle:', (id) => {
                    this.controller.toggleStatus(Number(id));
                    this.display();
                })
                break;             
            case '9':
                console.log("Exiting... ");
                this.rl.close();
                break;
            default:
                console.log("Invalid option, Please try again.");
                this.display();
        }
    }
}