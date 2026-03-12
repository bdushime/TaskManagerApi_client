import { APIClient } from "./api.js/APIClient.js";
import { processData, calculateGlobalStats } from "./taskProcessor.js";


async function run() {
    console.log("---Task Manager Starting---");
    
    const api = new APIClient();

    try{
        console.log("Fetching data...");
        const {users: rawUsers, todos:rawTodos}=await api.fetchData();

        if(!rawUsers.length){
            console.log("No data returned...");
            return;
        }
        const processedUsers = processData(rawUsers,rawTodos);
        const stats = calculateGlobalStats(processedUsers);

        console.log("\n=== Global Statistics ===");
        console.log(`Total users: ${processedUsers.length}`);
        console.log(`Total tasks:${stats.totalTasks}`);
        console.log(`Success Rate:${((stats.totalCompleted/stats.totalTasks)*100).toFixed(2)}%`);
        
        const firstUser = processedUsers[0];
        console.log(`\n=== USER FOCUS: ${firstUser.name.toUpperCase()} ===`);
        console.log(`Email: ${firstUser.email}`);
        console.log(`Completion Rate: ${firstUser.getCompletionRate()}%`);

        console.log("\nRecent Tasks:");
        firstUser.tasks.slice(0, 3).forEach(task => {
            console.log(`- [${task.getStatus()}] ${task.title}`);
        });
    }
    catch(err){
        console.log(err);
    }
}

run();