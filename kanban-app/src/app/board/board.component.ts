import { Component, OnInit } from '@angular/core';

import { Column } from '../models/column.model';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/task-status.enum';
import { TaskService } from '../services/task.service';
import { DragAndDropService } from '../services/drag-and-drop.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns: Column[] = [];
  connectedDropLists: string[] = []; // Holds the IDs of connected drop lists
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dragAndDropService: DragAndDropService
  ) {}

  ngOnInit() {
    // Initialize the columns
    this.columns = [
      { id: 1, title: TaskStatus.ToDo, tasks: [] },
      { id: 2, title: TaskStatus.InProgress, tasks: [] },
      { id: 3, title: TaskStatus.Review, tasks: [] },
      { id: 4, title: TaskStatus.Done, tasks: [] }
    ];
    this.loadTasks();
    // Subscribe to the DragAndDropService to reload tasks when notified
    this.dragAndDropService.tasksUpdated$.subscribe(() => {
      this.loadTasks();
    });
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.organizeTasksByStatus();
    });
  }

  organizeTasksByStatus(): void {
    this.columns.forEach(column => {
        column.tasks = this.tasks.filter(task => task.status === column.title);
    });
    // Update connectedDropLists with all column IDs
    this.connectedDropLists = this.columns.map(column => column.title);
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks(); // Reload tasks after adding a new one
    });
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks(); // Reload tasks after updating
    });
  }

  onTaskDelete(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks(); // Reload tasks after deleting
    });
  }


  // Task call back
  onTaskAdded(event: { task: Task }) {
    const { task } = event;
    task.id = this.generateTaskId(); // Generate a unique task ID

    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks(); // Reload tasks after adding a new one
    });
  }

  cancelTask() {
    // Handle task cancelation if needed
  }

  generateTaskId(): number {
    let maxId: number = 0;
    this.tasks.forEach(task =>{
      if (task.id > maxId) {
        maxId = task.id;
      }
    })
    const nextId: number = Number(maxId) + 1;
    return nextId;
  }

  handleTaskUpdate(): void {
    this.loadTasks(); // Reload tasks to reflect changes
  }
}
