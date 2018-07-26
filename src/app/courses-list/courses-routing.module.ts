import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesItemEditComponent} from './courses-item-edit/courses-item-edit.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
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
