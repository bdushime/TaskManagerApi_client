
export class PriorityTask extends Task {
    constructor(id,title,userId,completed,priority,dueDate){
        super(id,title,userId,completed);
        this.priority = priority;
        this.dueDate = new Date(dueDate);
    }

   
    isOverdue(){
        return !this.completed && new Date() > this.dueDate;
    }
}


