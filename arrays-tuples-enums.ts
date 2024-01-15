// Enums for Task Status
enum TaskStatus {
  ToDo,
  InProgress,
  Done,
}

// Tuple representing a Task with ID, Title, and Status
type Task = [number, string, TaskStatus];

// Array to store the list of tasks
let tasks: Task[] = [];

// Function to add a new task to the array
function addTask(id: number, title: string, status: TaskStatus): void {
  tasks.push([id, title, status]);
}

// Function to remove a task from the rray
function removeTask(id: number): void {
  tasks = tasks.filter((task) => task[0] !== id);
}

// Function to display all tasks
function displayTasks(): void {
  console.log("Tasks:");
  tasks.forEach((task) => {
    console.log(
      `ID: ${task[0]}, Title: ${task[1]}, Status: ${TaskStatus[task[2]]}`
    );
  });
}

// Add tasks
addTask(1, "Complete TypeScript Tutorial", TaskStatus.InProgress);
addTask(2, "Write Code Examples", TaskStatus.ToDo);
addTask(3, "Review and Push Changes", TaskStatus.Done);

// Display tasks before update
console.log("Before Update:");
displayTasks();

// Update the status of the second task
tasks[1][2] = TaskStatus.Done;

// Display tasks after update
console.log("\nAfter Update:");
displayTasks();

// Remove the task with ID 2
removeTask(2);

// Display tasks after removal
console.log("\nAfter Removal:");
displayTasks();
