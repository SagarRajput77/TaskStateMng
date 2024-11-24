import { Component } from '@angular/core';
import { TaskServiceService } from '../../service/task-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-task',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pending-task.component.html',
  styleUrl: './pending-task.component.css'
})
export class PendingTaskComponent {

  pendingTasks:any = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.pendingTasks = this.taskService.getTasksByStatus('pending');
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  moveToCompleted(id: number) {
    this.taskService.moveTaskToCompleted(id);
  }
}
