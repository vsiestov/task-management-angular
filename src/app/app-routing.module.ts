import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: './modules/tasks/tasks.module#TasksModule',
    canLoad: [
      AuthGuard
    ],
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'sign-in',
    loadChildren: './modules/sign-in/sign-in.module#SignInModule',
    canLoad: [
      NonAuthGuard
    ]
  },
  {
    path: 'sign-up',
    loadChildren: './modules/sign-up/sign-up.module#SignUpModule',
    canLoad: [
      NonAuthGuard
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
