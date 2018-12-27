import { Component, OnInit } from '@angular/core';
import { IState } from './interfaces/store.interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './ngrx/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  app$: Observable<IState>;

  constructor(private store: Store<IState>) {
  }

  ngOnInit(): void {
    this.app$ = this.store.pipe(select('app'));
  }

  onLogout(): void {
    this.store.dispatch(new actions.Logout());
  }
}
