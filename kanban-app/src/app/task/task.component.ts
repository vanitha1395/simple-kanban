import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>(); // Output event for deletion

  deleteTask() {
    console.log(this.task)
    this.delete.emit(this.task.id); // Emit the ID of the task to delete
  }

  editTask() {
    console.log("edit-attempted")
  }
}
