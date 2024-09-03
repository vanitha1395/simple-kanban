import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../models/task.model';
import { TaskService } from './task.service';
import { Subject } from 'rxjs';
import { TaskStatus } from '../models/task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  // Subject to notify components when tasks are updated
  private tasksUpdated = new Subject<void>();

  // Observable to allow components to listen to updates
  tasksUpdated$ = this.tasksUpdated.asObservable();

  constructor(private taskService: TaskService) {}

  handleDrop(event: CdkDragDrop<Task[]>, newStatus: TaskStatus): void {
    if (event.previousContainer !== event.container) {
      this.updateTaskStatus(event.item.data, newStatus);
    }
  }

  private updateTaskStatus(task: Task, newStatus: TaskStatus): void {
    if (task.status !== newStatus) {
      task.status = newStatus;
      this.taskService.updateTask(task).subscribe(
        () => {
          // Notify observers that tasks were updated
          this.tasksUpdated.next();
        },
        error => console.error('Error updating task', error)
      );
    }
  }
}
