import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/task-status.enum';
import { DragAndDropService } from '../services/drag-and-drop.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

export class ColumnComponent {
  @Input() title: TaskStatus = TaskStatus.ToDo;
  @Input() tasks: Task[] = [];
  @Input() id: number = 0; // Unique ID for the column
  @Input() connectedDropLists: string[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  constructor(private dragAndDropService: DragAndDropService) {}

  onDrop(event: CdkDragDrop<Task[]>): void {
    const newStatus = this.title; // Column title becomes the new task status
    this.dragAndDropService.handleDrop( event, newStatus );
  }

  onDelete(taskId: number): void {
    this.deleteTask.emit(taskId);
  }
}
