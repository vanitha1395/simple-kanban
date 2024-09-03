import { TaskStatus } from "./task-status.enum";
import { Priority } from "./priority.enum";

export interface Task {
    id: number;                  // Unique identifier for the task
    title: string;               // Title of the task
    description: string;         // Description of the task
    status: TaskStatus; // Status of the task
    priority: Priority; // Priority level of the task
    assignee: string;            // Name of the person assigned to the task
    dueDate: Date;               // Due date of the task
  }
