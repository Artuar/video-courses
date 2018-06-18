import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesListComponent } from './courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolboxComponent, CoursesListComponent, CoursesItemComponent]
})
export class CoursesListModule { }
