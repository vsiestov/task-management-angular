import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as types from '../types';
import * as actions from '../actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TasksService } from '../../services/tasks.service';
import { CatchError } from '../../../../ngrx/actions';

@Injectable()
export class TasksEffectsService {

  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) { }

  @Effect()
  requestList$: Observable<Action> = this.actions$.pipe(
    ofType(types.TasksTypes.requestList),
    mergeMap(() => {
      return this.tasksService.getList().pipe(
        map((response) => {
          return new actions.ResponseList(response);
        }),
        catchError(({ error }) => of(new CatchError(error.errors)))
      );
    })
  );

  @Effect()
  requestCreate$: Observable<Action> = this.actions$.pipe(
    ofType(types.TasksTypes.requestCreate),
    mergeMap((action: actions.RequestCreate) => {
      return this.tasksService.create(action.payload).pipe(
        map((response) => {
          return new actions.ResponseCreate(response);
        }),
        catchError(({ error }) => of(new CatchError(error.errors)))
      );
    })
  );

  @Effect()
  requestUpdate$: Observable<Action> = this.actions$.pipe(
    ofType(types.TasksTypes.requestUpdate),
    mergeMap((action: actions.RequestUpdate) => {
      const { _id, ...task } = action.payload;

      return this.tasksService.update(_id, task).pipe(
        map((response) => {
          return new actions.ResponseUpdate(response);
        }),
        catchError(({ error }) => of(new CatchError(error.errors)))
      );
    })
  );

  @Effect()
  requestDelete$: Observable<Action> = this.actions$.pipe(
    ofType(types.TasksTypes.requestDelete),
    mergeMap((action: actions.RequestDelete) => {
      return this.tasksService.remove(action.payload).pipe(
        map(() => {
          return new actions.ResponseDelete({
            _id: action.payload
          });
        }),
        catchError(({ error }) => of(new CatchError(error.errors)))
      );
    })
  );
}
