import * as types from '../types';
import { Action } from '@ngrx/store';
import { ITask, ITaskForm } from '../../../../interfaces/tasks.interface';

export class RequestList implements Action {
  readonly type = types.TasksTypes.requestList;
}

export class ResponseList implements Action {
  readonly type = types.TasksTypes.responseList;

  constructor(public payload: ITask[]) {}
}

export class RequestUpdate implements Action {
  readonly type = types.TasksTypes.requestUpdate;

  constructor(public payload: ITaskForm) {
  }
}

export class ResponseUpdate implements Action {
  readonly type = types.TasksTypes.responseUpdate;

  constructor(public payload: ITask) {
  }
}

export class RequestCreate implements Action {
  readonly type = types.TasksTypes.requestCreate;

  constructor(public payload: ITaskForm) {
  }
}

export class ResponseCreate implements Action {
  readonly type = types.TasksTypes.responseCreate;

  constructor(public payload: ITask) {
  }
}

export class RequestDelete implements Action {
  readonly type = types.TasksTypes.requestDelete;

  constructor(public payload: string) {
  }
}

export class ResponseDelete implements Action {
  readonly type = types.TasksTypes.responseDelete;

  constructor(public payload: {_id: string}) {
  }
}

export type TasksActions =
  | RequestList
  | ResponseList
  | RequestUpdate
  | ResponseUpdate
  | RequestCreate
  | ResponseCreate
  | RequestDelete
  | ResponseDelete;
