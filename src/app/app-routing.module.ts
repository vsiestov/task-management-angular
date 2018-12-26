import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/tasks/tasks.module#TasksModule'
  },
  {
    path: 'sign-in',
    loadChildren: './modules/sign-in/sign-in.module#SignInModule'
  },
  {
    path: 'sign-up',
    loadChildren: './modules/sign-up/sign-up.module#SignUpModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
