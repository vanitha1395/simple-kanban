import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { ConfigService } from './config.service'; // Import ConfigService

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.configService.tasksUrl); // Use the globalized URL
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.configService.tasksUrl, task); // Use the globalized URL
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.configService.tasksUrl}/${task.id}`, task); // Use the globalized URL
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.tasksUrl}/${taskId}`); // Use the globalized URL
  }
}
