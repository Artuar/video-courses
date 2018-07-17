import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesPageComponent} from './courses-list/courses-page.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Logo' }
  },
  {
    path: '',
    component: CoursesPageComponent,
    data: { title: 'Video courses' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
