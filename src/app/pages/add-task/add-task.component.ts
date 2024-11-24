import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TaskServiceService } from '../../service/task-service.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskForm: FormGroup;
  @ViewChild('showFlag') closeModalButton!: ElementRef<HTMLButtonElement>; 

  constructor(private fb: FormBuilder, private taskService: TaskServiceService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset();
      this.closeModalButton.nativeElement.click();
    }
  }
}
