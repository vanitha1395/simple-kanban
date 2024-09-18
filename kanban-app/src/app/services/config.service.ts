import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Import the environment

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  get apiUrl(): string {
    return environment.apiUrl;
  }

  get tasksUrl(): string {
    return `${this.apiUrl}${environment.endpoints.tasks}`;
  }
}
