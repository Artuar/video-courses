import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import {CoursesService} from './courses-page.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {OrderByPipe} from './order-by.pipe';
import {DurationFormatPipe} from './courses-item/duration-format.pipe';
import {CourseHighlightDirective} from './courses-item/course-highlight.directive';

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ToolboxComponent,
    CoursesPageComponent,
    CoursesItemComponent,
    DurationFormatPipe,
    OrderByPipe,
    CourseHighlightDirective
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesPageModule { }
