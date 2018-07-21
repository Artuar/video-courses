import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class SmartInputComponent implements OnInit {
  @Input() startList: string[];
  @Output() change = new EventEmitter();
  public list: string[];
  public text: string;

  constructor() { }

  ngOnInit() {
    this.list = this.startList ? [...this.startList] : [];
  }

  keyPress($event) {
    if ($event.key === 'Enter') {
      this.addText();
    }
  }

  addText() {
    if (!this.list.some(item => item === this.text) && this.text) {
      this.list.push(this.text);
      this.text = '';
      this.change.emit(this.list);
    }
  }

  remove(text) {
    this.list = this.list.filter(item => item !== text);
    this.change.emit(this.list);
  }

}
