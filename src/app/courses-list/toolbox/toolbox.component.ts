import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  @Output() search = new EventEmitter();

  public searchString = '';

  constructor() { }

  onSearch() {
    this.search.emit(this.searchString);
    this.searchString = '';
  }

  addCourse() {
    console.log('Click on Add course');
  }
}
