import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { interval, Observable, of, timer } from 'rxjs';
import * as types from '../types';
import * as actions from '../actions';
import { catchError, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { CatchError, HideNotification } from '../actions';

@Injectable()
export class UsersEffectsService {

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private router: Router
  ) { }

  @Effect()
  signInRequest$: Observable<Action> = this.actions$.pipe(
    ofType(types.UsersTypes.signInRequest),
    mergeMap((action: actions.SignInRequest) => {
      return this.usersService.signIn(action.payload).pipe(
        map((response) => {
          return new actions.SignInResponse(response);
        }),
        catchError(({ error }) => of(new CatchError(error.errors)))
      );
    })
  );

  @Effect()
  signUpRequest$: Observable<Action> = this.actions$.pipe(
    ofType(types.UsersTypes.signUpRequest),
    mergeMap((action: actions.SignUpRequest) => {
      return this.usersService.signUp(action.payload).pipe(
        map((response) => {
          return new actions.SignInResponse(response);
        }),
        catchError(({ error }) => of(new CatchError(error.errors)))
      );
    })
  );

  @Effect({
    dispatch: false
  })
  signInResponse$: Observable<Action> = this.actions$.pipe(
    ofType(types.UsersTypes.signIn),
    tap((action: actions.SignInResponse) => {
      const { token } = action.payload;

      if (token) {
        localStorage.setItem('token', token);
      }

      this.router.navigate(['tasks']);
    })
  );

  @Effect({
    dispatch: false
  })
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(types.UsersTypes.logout),
    tap(() => {
      localStorage.removeItem('token');

      this.router.navigate(['sign-in']);
    })
  );

  @Effect()
  catchError$: Observable<Action> = this.actions$.pipe(
    ofType(types.AppTypes.catchError),
    switchMap(() => {
      return interval(3 * 1000).pipe(
        map(() => {
          return new HideNotification();
        }),
        take(1)
      );
    })
  );
}
