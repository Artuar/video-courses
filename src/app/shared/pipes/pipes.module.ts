import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderByPipe} from './order-by.pipe';
import {DurationFormatPipe} from './duration-format.pipe';
import {FilterByPipe} from './filter-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    DurationFormatPipe,
    FilterByPipe
  ],
  exports: [
    OrderByPipe,
    DurationFormatPipe,
    FilterByPipe
  ]
})
export class PipesModule { }
