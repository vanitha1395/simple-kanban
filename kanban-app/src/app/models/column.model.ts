import { Task } from './task.model'; // Import the Task model

export interface Column {
  id: number ;                  // Unique identifier for the column
  title: 'To Do' | 'In Progress' | 'Review' | 'Done';               // Title of the column (e.g., "To Do", "In Progress", "Done")
  tasks: Task[];               // Array of Task objects
}
