export class Task {
    constructor(id,title,userId,completed=false){
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }

    getStatus(){
        return this.completed ? "Completed" : "Pending";
    }
}






