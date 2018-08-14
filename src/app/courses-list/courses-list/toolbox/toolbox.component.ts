import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnDestroy{
  @Output() search = new EventEmitter();
  @Output() add = new EventEmitter();

  public queryObserver;
  public queryObservable = new Observable(observer => this.queryObserver = observer);

  constructor() {
    this.queryObservable
      .subscribe(str => this.search.emit(str))
  }

  onSearch($event) {
    const str = $event.target.value;
    if(!str || str.length > 2) {
      this.queryObserver.next(str);
    }
  }

  addCourse($event) {
    $event.stopPropagation();
    this.add.emit();
  }

  ngOnDestroy() {
    this.queryObserver.complete();
  }

}
