import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { IAuth, IRegistration, IUser } from '../interfaces/users.interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(
    private globalService: GlobalService
  ) { }

  me(): Observable<IUser> {
    return this.globalService.getRequest('/me');
  }

  signIn(params: IAuth): Observable<IUser> {
    return this.globalService.postRequest('/sign-in', params);
  }

  signUp(params: IRegistration): Observable<IUser> {
    return this.globalService.postRequest('/sign-up', params);
  }
}
