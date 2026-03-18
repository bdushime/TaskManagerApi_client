/**
 * PriorityTask: A specialized subclass that extends the base Task with urgency.
 * Features: Uses 'super' to inherit core Task properties, adds 'priority' and 'dueDate',
 * and overrides getStatus() to provide a more detailed, priority-labeled status string.
 * It also includes isOverdue() to check if unfinished tasks have passed their deadline.
 */
export class PriorityTask extends Task {
    constructor(id, title, userId, completed, priority, dueDate) {
        super(id, title, userId, completed);
        this.priority = priority;
        this.dueDate = new Date(dueDate);
    }

    getStatus() {
        const baseStatus = super.getStatus();
        return `[${this.priority} Priority] ${baseStatus}`;
    }

    isOverdue() {
        return !this.completed && new Date() > this.dueDate;
    }
}