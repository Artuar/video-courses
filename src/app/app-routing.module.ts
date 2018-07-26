import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Logo' }
  },
  {
    path: 'courses',
    loadChildren: './courses-list/courses-page.module#CoursesPageModule',
    data: { title: 'Video courses' },
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
