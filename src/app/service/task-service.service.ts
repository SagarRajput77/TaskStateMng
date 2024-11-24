import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface Task {
  id: number;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private showFlag = new Subject();
  set(val:boolean){
    this.showFlag.next(val);
  }

  get(){
    return this.showFlag;
  }

  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  addTask(task: Task) {
    task.id = new Date().getTime(); // Generate a unique ID
    task.status = 'pending';
    this.tasks.push(task);
    this.updateTasks();
  }

  moveTaskToCompleted(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].status = 'completed';
      this.updateTasks();
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.updateTasks();
  }

  getTasksByStatus(status: 'pending' | 'completed') {
    return this.tasks.filter((task) => task.status === status);
  }

  private updateTasks() {
    this.tasksSubject.next(this.tasks);
  }
}
