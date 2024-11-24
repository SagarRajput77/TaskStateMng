import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { PendingTaskComponent } from './pages/pending-task/pending-task.component';
import { CompleteTaskComponent } from './pages/complete-task/complete-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AddTaskComponent,
    PendingTaskComponent,
    CompleteTaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskList';
  
}
