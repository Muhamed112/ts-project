import { addTask, displayTasks, removeTask, updateTaskStatus } from "./helpers";
import { Task, TaskStatus } from "./types";

// Array to store the list of tasks
let tasks: Task[] = [];

// Add tasks
addTask(1, "Complete TypeScript Tutorial", TaskStatus.InProgress, tasks);
addTask(2, "Write Code Examples", TaskStatus.ToDo, tasks);
addTask(3, "Review and Push Changes", TaskStatus.Done, tasks);

// Display tasks before update
console.log("Before Update:");
displayTasks(tasks);

// Update the status of the second task
updateTaskStatus(2, TaskStatus.Done, tasks)

// Display tasks after update
console.log("\nAfter Update:");
displayTasks(tasks);

// Remove the task with ID 2
removeTask(2, tasks);

// Display tasks after removal
console.log("\nAfter Removal:");
displayTasks(tasks);
