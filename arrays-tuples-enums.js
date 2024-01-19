"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const types_1 = require("./types");
// Array to store the list of tasks
let tasks = [];
// Add tasks
(0, helpers_1.addTask)(1, "Complete TypeScript Tutorial", types_1.TaskStatus.InProgress, tasks);
(0, helpers_1.addTask)(2, "Write Code Examples", types_1.TaskStatus.ToDo, tasks);
(0, helpers_1.addTask)(3, "Review and Push Changes", types_1.TaskStatus.Done, tasks);
// Display tasks before update
console.log("Before Update:");
(0, helpers_1.displayTasks)(tasks);
// Update the status of the second task
(0, helpers_1.updateTaskStatus)(2, types_1.TaskStatus.Done, tasks);
// Display tasks after update
console.log("\nAfter Update:");
(0, helpers_1.displayTasks)(tasks);
// Remove the task with ID 2
(0, helpers_1.removeTask)(2, tasks);
// Display tasks after removal
console.log("\nAfter Removal:");
(0, helpers_1.displayTasks)(tasks);
