import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './courses-list/toolbox/toolbox.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-list/courses-item/courses-item.component';
import {CoursesService} from './courses.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseHighlightDirective} from '../shared/directives/course-highlight.directive';
import {PipesModule} from '../shared/pipes/pipes.module';
import {BreadcrumbsComponent} from '../shared/components/breadcrumbs/breadcrumbs.component';
import {SharedModule} from '../shared/shared.module';
import {CoursesItemEditComponent} from './courses-item-edit/courses-item-edit.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import {AuthorService} from './author.service';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SharedModule,
    CoursesRoutingModule
  ],
  declarations: [
    BreadcrumbsComponent,
    ToolboxComponent,
    CoursesPageComponent,
    CoursesItemComponent,
    CourseHighlightDirective,
    CoursesItemEditComponent,
    CoursesListComponent
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
