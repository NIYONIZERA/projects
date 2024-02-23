const todoList = {
  tasks: [],
  categories: {},

  // Function to add tasks to the ToDo list with specified categories
  addTask: function (taskName, categoryName) {
    const task = { name: taskName, completed: false };
    if (!this.categories[categoryName]) {
      this.categories[categoryName] = [];
    }
    this.categories[categoryName].push(task);
  },

  // Function to display tasks grouped by their categories
  displayTasksByCategory: function () {
    for (const category in this.categories) {
      console.log(`Category: ${category}`);
      this.categories[category].forEach((task) => {
        console.log(
          `- ${task.name} (${task.completed ? "Completed" : "Pending"})`
        );
      });
    }
  },

  // Function to mark tasks as completed
  markTaskAsCompleted: function (taskName, categoryName) {
    const tasks = this.categories[categoryName];
    const task = tasks.find((task) => task.name === taskName);
    if (task) {
      task.completed = true;
    }
  },

  // Function to remove a task from the list
  removeTask: function (taskName, categoryName) {
    const tasks = this.categories[categoryName];
    const taskIndex = tasks.findIndex((task) => task.name === taskName);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }
  },
};

// Example usage
todoList.addTask("Buy groceries", "Shopping");
todoList.addTask("Complete project", "Work");
todoList.addTask("Go for a run", "Fitness");

todoList.displayTasksByCategory();

console.log("\nMarking task as completed...");
todoList.markTaskAsCompleted("Buy groceries", "Shopping");

console.log("\nRemoving task from the list...");
todoList.removeTask("Go for a run", "Fitness");

console.log("\nUpdated tasks:");
todoList.displayTasksByCategory();
