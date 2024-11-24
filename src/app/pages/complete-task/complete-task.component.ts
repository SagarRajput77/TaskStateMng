import { Component } from '@angular/core';
import { TaskServiceService } from '../../service/task-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complete-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complete-task.component.html',
  styleUrl: './complete-task.component.css'
})
export class CompleteTaskComponent {
  completedTasks:any = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.completedTasks = this.taskService.getTasksByStatus('completed');
    });
  }
}
