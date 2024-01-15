// Enums for Task Status
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["ToDo"] = 0] = "ToDo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus || (TaskStatus = {}));
// Array to store the list of tasks
var tasks = [];
// Function to add a new task to the array
function addTask(id, title, status) {
    tasks.push([id, title, status]);
}
// Function to remove a task from the rray
function removeTask(id) {
    tasks = tasks.filter(function (task) { return task[0] !== id; });
}
// Function to display all tasks
function displayTasks() {
    console.log("Tasks:");
    tasks.forEach(function (task) {
        console.log("ID: ".concat(task[0], ", Title: ").concat(task[1], ", Status: ").concat(TaskStatus[task[2]]));
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
