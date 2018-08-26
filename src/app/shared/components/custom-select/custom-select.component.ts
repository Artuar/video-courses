import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Input() list: {name}[] = [];

  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(item) {
    this.select.emit(item);
  }
}
