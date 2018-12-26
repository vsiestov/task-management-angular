import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { StoreModule } from '@ngrx/store';

import * as fromRoot from './ngrx/reducers';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromRoot.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
