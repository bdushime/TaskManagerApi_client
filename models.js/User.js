
export class User {
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    getCompletionRate(){
        if(this.tasks.length === 0)return 0;
        const completedCount = this.tasks.filter(t =>t.completed).length;
        return (completedCount / this.tasks.length) * 100;
    }

    getTasksByStatus(isCompleted){
      return this.tasks.filter(task=>task.completed === isCompleted);
    }
}