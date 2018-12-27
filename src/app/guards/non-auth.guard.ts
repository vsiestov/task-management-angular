import { Injectable } from '@angular/core';
import { Route, UrlSegment, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class NonAuthGuard implements CanLoad {
  constructor(
    private router: Router
  ) {

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['tasks']);
    }

    return !token;
  }
}
