import { User } from './models.js/User.js';
import { Task } from './models.js/Task.js';

export const processData = (rawUsers, rawTodos) => {
  const usersMap = new Map();

  rawUsers.forEach(rawUser => {
    const { id, name, email } = rawUser; 
    usersMap.set(id, new User(id, name, email));
  });

  rawTodos.forEach(rawTodo => {
    const { id, title, userId, completed } = rawTodo;
    const task = new Task(id, title, userId, completed);
    
    const user = usersMap.get(userId);
    if (user) user.addTask(task);
  });

  return Array.from(usersMap.values());
};


export  const calculateGlobalStats = (users)=>{
return users.reduce((acc,user)=>{
    acc.totalTasks += user.tasks.length;
    acc.totalCompleted += user.tasks.filter(t => t.completed).length;
    return acc;
},{totalTasks:0, totalCompleted:0});
}

export const groupByUser = (tasks)=>{
    const group = new Map();
     
    tasks.forEach(task =>{
        if(!group.has(task.userId)){
            group.set(task.userId,[]);
        }
        group.get(task.userId).push(task);
    });
    
    return group;
}


