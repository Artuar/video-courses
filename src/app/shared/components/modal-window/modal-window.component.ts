import { Component } from '@angular/core';

const DEFAULT_OPTIONS = {
  title: 'Error',
  message: 'It is not working!',
  buttonText: 'Try again',
  buttonAction: () => {}
};

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  public modalProps: {};

  constructor() { }

  show(props) {
    this.modalProps = {...DEFAULT_OPTIONS, ...props};
  }

  submit() {
    this.modalProps['buttonAction']();
    this.hide();
  }

  hide() {
    delete this.modalProps;
  }
}
