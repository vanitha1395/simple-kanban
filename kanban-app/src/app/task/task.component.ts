import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter<number>(); // Output event for deletion

  deleteTask() {
    this.taskDeleted.emit(this.task.id); // Emit the ID of the task to delete
  }
}
