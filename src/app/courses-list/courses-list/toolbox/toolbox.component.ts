import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  @Output() search = new EventEmitter();
  @Output() add = new EventEmitter();

  public query: string = '';

  constructor() { }

  onSearch() {
    if (!this.query || this.query.length > 2) {
      this.search.emit(this.query);
    }
  }

  addCourse($event) {
    $event.stopPropagation();
    this.add.emit();
  }

}
