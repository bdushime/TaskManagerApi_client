/**
 * User: Represents a system user and serves as a container for their assigned tasks.
 * Functions: addTask (associates a Task object), getCompletionRate (calculates % finished),
 * getTasksByStatus (filters tasks by boolean), and helper methods getCompletedTasks/
 * getIncompleteTasks for detailed dashboard reporting and statistics.
 */
export class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getCompletionRate() {
        if (this.tasks.length === 0) return 0;
        const completedCount = this.tasks.filter(t => t.completed).length;
        return (completedCount / this.tasks.length) * 100;
    }

    getTasksByStatus(isCompleted) {
        return this.tasks.filter(task => task.completed === isCompleted);
    }

    getCompletedTasks() {
        if (this.tasks.length === 0) return 0;
        return this.tasks.filter(t => t.completed).length;
    }

    getIncompleteTasks() {
        if (this.tasks.length === 0) return 0;
        return this.tasks.filter(t => !t.completed).length;
    }
}