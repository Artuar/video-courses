import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  public modalProps: {title, message, buttonText, buttonAction};

  constructor() { }

  show(data: {title, message, buttonText, buttonAction}) {
    this.modalProps = data;
  }

  submit() {
    this.modalProps.buttonAction();
    this.hide();
  }

  hide() {
    delete this.modalProps;
  }
}
