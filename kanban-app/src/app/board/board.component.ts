import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Column } from '../models/column.model';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns: Column[] = [];
  connectedDropLists: string[] = []; // Holds the IDs of connected drop lists
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Initialize the columns
    this.columns = [
      { id: 1, title: 'To Do', tasks: [] },
      { id: 2, title: 'In Progress', tasks: [] },
      { id: 3, title: 'Review', tasks: [] },
      { id: 4, title: 'Done', tasks: [] }
    ];
    this.loadTasks();
  }

  loadTasks(): void {
    console.log("tasks loaded...")
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
    console.log(this.connectedDropLists)
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
    let maxId = 0;
    this.tasks.forEach(task =>{
      if (task.id > maxId) {
        maxId = task.id;
      }
    })
    console.log(maxId);
    return maxId + 1;
  }

  handleTaskDrop(event: { task: Task; newStatus: number }): void {
    const { task, newStatus } = event;
    task.status = this.columns[newStatus-1].title;
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks(); // Reload tasks to reflect changes
    });

  }
}
