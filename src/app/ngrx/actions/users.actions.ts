import { Action } from '@ngrx/store';
import * as types from '../types';
import { IAuth, IRegistration, IUser } from '../../interfaces/users.interfaces';

export class SignInResponse implements Action {
  readonly type = types.UsersTypes.signIn;

  constructor(public payload: IUser) {
  }
}

export class SignInRequest implements Action {
  readonly type = types.UsersTypes.signInRequest;

  constructor(public payload: IAuth) {
  }
}

export class Logout implements Action {
  readonly type = types.UsersTypes.logout;
}

export class SignUpRequest implements Action {
  readonly type = types.UsersTypes.signUpRequest;

  constructor(public payload: IRegistration) { }
}

export type UsersActions =
  | SignInResponse
  | SignInRequest
  | SignUpRequest
  | Logout;
