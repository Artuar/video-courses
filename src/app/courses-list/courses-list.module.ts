import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesListComponent } from './courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import {CoursesService} from './courses-list.service';
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
    CoursesListComponent,
    CoursesItemComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesListModule { }
