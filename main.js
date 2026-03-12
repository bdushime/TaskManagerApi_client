import { APIClient } from "./api.js/APIClient.js";

import { processData, calculateGlobalStats } from "./taskProcessor.js";


async function runApplication(){
    console.log("--- Task Manager API Client Starting ---");
    const api = new APIClient();

    console.log("Fetching data from API...");

    const{users: rawUsers, todos:rawTodos}= await api.fetchData();

    if(rawUsers.length === 0){
        console.error("No data found. Check your internet connection.")
        return;
    }

    const processedUsers = processData(rawUsers,rawTodos);

    const stats = calculateGlobalStats(processedUsers);

    console.log("\n=== GLOBAL STATISTICS ===");
    console.log(`Total Users: ${processedUsers.length}`);
    console.log(`Total tasks: ${stats.totalTasks}`);
    console.log(`Overall Completion: ${((stats.totalCompleted / stats.totalTasks) * 100).toFixed(2)}%`);

  const sampleUser = processedUsers[0];
  console.log(`\n=== USER FOCUS: ${sampleUser.name.toUpperCase()} ===`);
  console.log(`Email: ${sampleUser.email}`);
  console.log(`Completion Rate: ${sampleUser.getCompletionRate()}%`);

  console.log("\nRecent Tasks:");
  // Showing only first 3 tasks for clarity
  sampleUser.tasks.slice(0, 3).forEach(task => {
    // This calls the getStatus() method we defined in the Task class!
    console.log(`- [${task.getStatus()}] ${task.title}`);
  });
}

runApplication();