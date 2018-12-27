import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IState } from '../interfaces/store.interfaces';
import { UsersService } from '../services/users.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as usersActions from '../ngrx/actions';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private store: Store<IState>,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/sign-in']);

      return false;
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/sign-in']);

      return false;
    }

    return this.store.pipe(
      select('app'),
      switchMap((appState: IState) => {
        if (appState.auth && appState.auth.status) {
          return of(appState.auth.status);
        }

        return this.usersService.me()
          .pipe(
            map((response) => {
              this.store.dispatch(new usersActions.SignInResponse({
                ...response,
                token
              }));

              return true;
            }),
            catchError(() => {
              localStorage.removeItem('token');

              this.router.navigate(['/sign-in']);

              return of(false);
            })
          );
      })
    );
  }
}
