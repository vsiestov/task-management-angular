import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITask, ITaskState } from '../../../interfaces/tasks.interface';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  isFormVisible: boolean;
  search: string;

  $tasks: Observable<ITask[]>;

  form: FormGroup;

  constructor(
    private store: Store<ITaskState>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.$tasks = this.store.pipe(select('tasks'));
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      due: ['', Validators.required],
      _id: ['']
    });
  }

  onCreateTask() {
    this.isFormVisible = true;

    this.form.reset();
  }

  onSubmit(event: Event) {
    event.stopPropagation();

    if (this.form.invalid) {
      return;
    }
  }

  onCancelTask() {
    this.isFormVisible = false;

    this.form.reset();
  }

  onChangeTask(item: ITask) {
    this.isFormVisible = true;

    this.form.patchValue({
      ...item,
      due: format(item.due, 'YYYY-MM-DDTHH:MM')
    });
  }

  onDeleteTask() {

  }

  trackById(index: number, item: ITask) {
    return item._id;
  }

  isInvalid(field: FormControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }
}
