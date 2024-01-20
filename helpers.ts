import { Task, TaskStatus } from "./types";

// Function to add a new task to the array
export function addTask(
  id: number,
  title: string,
  status: TaskStatus,
  tasks: Task[]
): void {
  tasks.push([id, title, status]);
}

// Function to remove a task from the rray
export function removeTask(id: number, tasks: Task[]): void {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i][0] === id) {
      tasks.splice(i, 1);
      break; // exit the loop once the task is found and removed
    }
  }
}

export function updateTaskStatus(
  id: number,
  status: TaskStatus,
  tasks: Task[]
): void {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i][0] === id) {
      tasks[i][2] = status;
      tasks[i][1] = 'Test';
    }
  }
}

// Function to display all tasks
export function displayTasks(tasks: Task[]): void {
  console.log("Tasks:");
  tasks.forEach((task) => {
    console.log(
      `ID: ${task[0]}, Title: ${task[1]}, Status: ${TaskStatus[task[2]]}`
    );
  });
}
