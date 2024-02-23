//define an array to store tasks
let tasks = [];
// functions to add tasks with due dates to the scheduler
function addTask(title, description, dueDate) {
  const task = {
    title: title,
    description: description,
    dueDate: new Date(dueDate),
    completed: false,
  };
  tasks.push(task);
 //  console.log('Task added');
};
//a function to display tasks sorted by their due dates
function displayTask(){
    //sort tasks by duedate
    tasks.sort((a,b)=>a.dueDate-b.dueDate);
    //display tasks
    console.log('TASKS:');
    tasks.forEach((task,index)=>{
        console.log(`${index + 1}. ${task.title} - Duedate: ${task.dueDate.toDateString()} - Completed: ${task.completed ? "Yes" : "No"}`);
    });
};
// function to update task details or mark tasks as completed
function updateTask(index,title,description,dueDate,completed){
    if (index >= 0 && index < tasks.length) {
        const task = tasks[index];
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate ? new Date(dueDate) : task.dueDate;
        task.completed = completed !== undefined ? completed : task.completed;
        console.log("Task updated successfully!");
    } else {
        console.log("Invalid task index!");
    }
};
//function  to remove tasks from the scheduler
function removeTask(index){
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task removed successfully!");
    } else {
        console.log("Invalid task index!");
    }
}
addTask("Complete project", "Finish Project 4", "2024-03-15");
addTask("Call client", "Discuss project requirements", "2024-03-10");
addTask("Buy groceries", "Milk, eggs, bread", "2024-03-05");
displayTask();
updateTask(1, "Call client", "Discuss project details", "2024-03-12", true);
removeTask(2);
displayTask();


