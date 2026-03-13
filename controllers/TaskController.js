import * as processor from '../taskProcessor.js'

export class TaskController {
    constructor(users){
        this.users = users;
        this.allTasks = users.flatMap(user =>user.tasks);
    }

    handleSearch(query){
        console.log(`\n--- Searching for: "${query}---"`);
        const results = processor.searchTasks(this.allTasks,query);

        if(results.length === 0){
            console.log("No such tasks found ");

        } else {
            results.forEach(task => console.log(` ${task.title} [${task.getStatus()}]`));

        }
    }

    showUserDashboard(userId){
        const user = this.users.find(u=>u.id === userId);
        if(!user) return console.log("User not found");

        console.log(`\nDashboard for ${user.name}:`);
        console.log(`Completion: ${user.getCompletionRate()}%`);
    }
}