import { Task } from './task.model'; // Import the Task model
import { TaskStatus } from './task-status.enum';

export interface Column {
  id: number ;                  // Unique identifier for the column
  title: TaskStatus;               // Title of the column (e.g., "To Do", "In Progress", "Done")
  tasks: Task[];               // Array of Task objects
}
