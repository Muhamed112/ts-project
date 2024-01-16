// Enums for Task Status
export enum TaskStatus {
  ToDo,
  InProgress,
  Done,
}

// Tuple representing a Task with ID, Title, and Status
export type Task = [number, string, TaskStatus];
