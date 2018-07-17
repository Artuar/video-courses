import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';
import {CourseHighlightDirective} from '../shared/directives/course-highlight.directive';
import {PipesModule} from '../shared/pipes/pipes.module';
import {ModalWindowComponent} from '../shared/components/modal-window/modal-window.component';
import {CoursesEditComponent} from './courses-item/courses-edit/courses-edit.component';
import {BreadcrumbsComponent} from '../shared/components/breadcrumbs/breadcrumbs.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    PipesModule,
    CoreModule
  ],
  declarations: [
    BreadcrumbsComponent,
    ToolboxComponent,
    CoursesPageComponent,
    CoursesItemComponent,
    CoursesEditComponent,
    CourseHighlightDirective,
    ModalWindowComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesPageModule { }
