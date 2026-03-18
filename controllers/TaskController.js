import * as processor from "../taskProcessor.js";

/**
 * TaskController: Manages the flow between user data and the display.
 * Functions: showGlobalStats (system totals), showCategories (unique tags), 
 * showUserDashboard (user specific metrics), handleSearch (title lookup), 
 * showUserTasksByStatus (filtered view), showSortedTasks (A-Z list), 
 * showUserTaskDistributin (Map-based grouping), and toggleStatus (updates state).
 */
export class TaskController {
  constructor(users) {
    this.users = users;
    this.allTasks = users.flatMap((user) => user.tasks);
  }

  showGlobalStats() {
    const stats = processor.calculateGlobalStats(this.users);
    console.log(`\n===  GLOBAL SYSTEM STATISTICS ===`);
    console.log(`Total System Users:  ${this.users.length}`);
    console.log(`Total System Tasks:  ${stats.totalTasks}`);
    console.log(`Total Completed:     ${stats.totalCompleted}`);
    const rate = ((stats.totalCompleted / stats.totalTasks) * 100).toFixed(2);
    console.log(`Overall Success:     ${rate}%`);
  }

  showCategories() {
    console.log(`\n===   UNIQUE TASK CATEGORIES ===`);
    const categories = processor.getUniqueCategories(this.allTasks);
    console.log(categories.join(" | "));
  }

  showUserDashboard(userId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) return console.log(`\n Error: User with ID ${userId} not found.`);

    console.log(`\n===   USER DASHBOARD: ${user.name.toUpperCase()} ===`);
    console.log(`Email:       ${user.email}`);
    console.log(`Completed: ${user.getCompletedTasks()} tasks`);
    console.log(`Pending: ${user.getIncompleteTasks()} tasks`);
    console.log(`Completion:  ${user.getCompletionRate()}%`);
    console.log(`Tasks Count: ${user.tasks.length} tasks`);
    
    console.log(`\nRecent Tasks:`);
    user.tasks.slice(0, 5).forEach(t => {
        console.log(`- ${t.getStatus()}: ${t.title}`);
    });
  }

  handleSearch(query) {
    console.log(`\n---  Searching for title: "${query}" ---`);
    const results = processor.searchTasks(this.allTasks, query);

    if (results.length === 0) {
      console.log("No tasks found matching that title.");
    } else {
      results.forEach((task) =>
        console.log(`- [${task.getStatus()}] ${task.title}`),
      );
    }
  }

  showUserTasksByStatus(userId, status) {
    const user = this.users.find(u => u.id === userId);
    if (!user) return console.log("User not found");

    const isCompleted = status === 'completed';
    const filteredTasks = user.getTasksByStatus(isCompleted);

    console.log(`\n=== ${status.toUpperCase()} TASKS FOR ${user.name.toUpperCase()}===`);
    if (filteredTasks.length === 0) {
      console.log(`No ${status} tasks found`);
    } else {
      filteredTasks.forEach(t => console.log(`-${t.title} is ${t.getStatus()}`));
    }
  }

  showSortedTasks() {
    const sorted = processor.sortTasksByTitle(this.allTasks);
    console.log("\n=== ALL Tasks sorted ni ascending order");
    sorted.slice(0, 10).forEach(t => console.log(`-${t.title}`));
  }

  showUserTaskDistributin() {
    const groupMap = processor.groupTaskByUser(this.allTasks);
    console.log("\n=== Task By User Id ===");
    groupMap.forEach((tasks, userId) => {
      console.log(`User ID #${userId}: ${tasks.length} tasks assigned`);
    })
  }

  toggleStatus(taskId) {
    if (isNaN(taskId)) {
      return console.log("  Please enter a valid numeric ID");
    }

    const task = this.allTasks.find(t => t.id === taskId);

    if (!task) {
      return console.log(`Task with this ${taskId} not found`);
    }
    const oldStatus = task.getStatus();
    task.toggle();
    const newStatus = task.getStatus();

    console.log(`Title: ${task.title}`);
    console.log(`Status changed : from ${oldStatus} to ${newStatus}`)
  }
}