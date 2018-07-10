import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderByPipe} from './order-by.pipe';
import {DurationFormatPipe} from './duration-format.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    DurationFormatPipe
  ],
  exports: [
    OrderByPipe,
    DurationFormatPipe
  ]
})
export class PipesModule { }
