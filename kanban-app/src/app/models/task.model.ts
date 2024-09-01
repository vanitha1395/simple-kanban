export interface Task {
    id: number;                  // Unique identifier for the task
    title: string;               // Title of the task
    description: string;         // Description of the task
    status: 'To Do' | 'In Progress' | 'Review' | 'Done'; // Status of the task
    priority: 'Low' | 'Medium' | 'High'; // Priority level of the task
    assignee: string;            // Name of the person assigned to the task
    dueDate: Date;               // Due date of the task
  }
