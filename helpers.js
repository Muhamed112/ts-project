"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayTasks = exports.updateTaskStatus = exports.removeTask = exports.addTask = void 0;
const types_1 = require("./types");
// Function to add a new task to the array
function addTask(id, title, status, tasks) {
    tasks.push([id, title, status]);
}
exports.addTask = addTask;
// Function to remove a task from the rray
function removeTask(id, tasks) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i][0] === id) {
            tasks.splice(i, 1);
            break; // exit the loop once the task is found and removed
        }
    }
}
exports.removeTask = removeTask;
function updateTaskStatus(id, status, tasks) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i][0] === id) {
            tasks[i][2] = status;
            tasks[i][1] = 'Test';
        }
    }
}
exports.updateTaskStatus = updateTaskStatus;
// Function to display all tasks
function displayTasks(tasks) {
    console.log("Tasks:");
    tasks.forEach((task) => {
        console.log(`ID: ${task[0]}, Title: ${task[1]}, Status: ${types_1.TaskStatus[task[2]]}`);
    });
}
exports.displayTasks = displayTasks;
