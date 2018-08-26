import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class SmartInputComponent implements OnInit {
  @Input() startList: string[] = [];
  @Output() remove = new EventEmitter();
  @Output() keyPress = new EventEmitter();
  public text: string;

  constructor() { }

  ngOnInit() {
  }

  keyClick($event) {
    if ($event.key === 'Enter') {
      this.addText();
    } else {
      this.keyPress.emit(this.text);
    }
  }

  addText() {
    this.text = '';
    this.keyPress.emit(this.text);
  }

  onRemove(text) {
    this.remove.emit(text);
  }

}
