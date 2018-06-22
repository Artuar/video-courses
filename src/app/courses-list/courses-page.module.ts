import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import {CoursesService} from './courses-page.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ToolboxComponent,
    CoursesPageComponent,
    CoursesItemComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesPageModule { }
