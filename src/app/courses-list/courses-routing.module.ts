import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesItemEditComponent} from './courses-item-edit/courses-item-edit.component';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {CoursesPageComponent} from './courses-page/courses-page.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    data: { title: 'Video courses' },
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: CoursesListComponent,
      },
      {
        path: 'new',
        component: CoursesItemEditComponent,
      },
      {
        path: ':id',
        component: CoursesItemEditComponent,
      },
      {
        path: '**',
        redirectTo: '/courses',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
