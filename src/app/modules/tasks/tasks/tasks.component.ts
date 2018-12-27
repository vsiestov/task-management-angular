import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITask, ITaskState } from '../../../interfaces/tasks.interface';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import * as actions from '../ngrx/actions';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  isFormVisible: boolean;
  search: string;

  tasks$: Observable<ITask[]>;
  sub: any;

  form: FormGroup;


  constructor(
    private store: Store<ITaskState>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(select('tasks'));

    this.store.dispatch(new actions.RequestList());

    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      due: ['', Validators.required],
      _id: ['']
    });

    this.sub = this.tasks$.subscribe(() => {
      this.form.reset();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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

    const value = this.form.value;

    if (this.form.value._id) {
      return this.store.dispatch(new actions.RequestUpdate({
        ...value,
        due: new Date(value.due).getTime()
      }));
    }

    this.store.dispatch(new actions.RequestCreate({
      ...value,
      due: new Date(value.due).getTime()
    }));
  }

  onCancelTask() {
    this.isFormVisible = false;

    if (this.form) {
      this.form.reset();
    }
  }

  onChangeTask(item: ITask) {
    this.isFormVisible = true;

    this.form.patchValue({
      ...item,
      due: format(item.due, 'YYYY-MM-DDTHH:MM')
    });
  }

  onDeleteTask(item) {
    this.store.dispatch(new actions.RequestDelete(item._id));
  }

  trackById(index: number, item: ITask) {
    return item._id;
  }

  isInvalid(field: FormControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }
}
