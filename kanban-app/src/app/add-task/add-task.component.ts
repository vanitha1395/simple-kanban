import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Column } from '../models/column.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() columns: Column[] = [];  // Accept columns as input
  @Output() taskAdded = new EventEmitter<{task: Task}>();
  @Output() cancel = new EventEmitter<void>();

  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'To Do',
    priority: 'Medium',
    assignee: '',
    dueDate: new Date()
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Set the default column to the first in the list, if available
  }

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.taskAdded.emit({ task: this.newTask });
    }
  }

  cancelTask() {
    this.cancel.emit();
  }
}
