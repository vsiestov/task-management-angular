import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './ngrx/reducers';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    TaskItemComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent
      }
    ]),
    StoreModule.forFeature('tasks', taskReducer)
  ]
})
export class TasksModule { }
