import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesPageComponent} from './courses-list/courses-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Logo' }
  },
  {
    path: '',
    component: CoursesPageComponent,
    data: { title: 'Video courses' },
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
