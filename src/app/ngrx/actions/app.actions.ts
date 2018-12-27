import * as types from '../types';
import { Action } from '@ngrx/store';
import { IError } from '../../interfaces/common.interfaces';

export class CatchError implements Action {
  readonly type = types.AppTypes.catchError;

  constructor(public payload: IError) {
  }
}

export class HideNotification implements Action {
  readonly type = types.AppTypes.hideNotification;
}
