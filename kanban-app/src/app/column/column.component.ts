import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() title: string = '';
  @Input() tasks: Task[] = [];
  @Input() id: number = 0; // Unique ID for the column
  @Input() connectedDropLists: string[] = [];
  @Output() taskDropped = new EventEmitter<{ task: Task; newStatus: number }>();
  @Output() taskDeleted = new EventEmitter<number>();

  onDrop(event: CdkDragDrop<Task[]>): void {

    const task = event.item.data as Task;

    const newStatus = this.id; // Column title becomes the new task status
    console.log('new column:', this.id)
    console.log(newStatus);
    this.taskDropped.emit({ task, newStatus });
  }

  onDelete(taskId: number): void {
    this.taskDeleted.emit(taskId);
  }
}
