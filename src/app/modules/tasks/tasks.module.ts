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
import { TasksService } from './services/tasks.service';
import { SharedModule } from '../shared.module';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffectsService } from './ngrx/effects/tasks-effects.service';

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
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent
      }
    ]),
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TasksEffectsService])
  ],
  providers: [
    TasksService,
  ]
})
export class TasksModule { }
