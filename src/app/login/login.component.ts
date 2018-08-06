import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {ModalWindowComponent} from '../shared/components/modal-window/modal-window.component';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public title: string;
  public email: string;
  public password: string;

  @ViewChild(ModalWindowComponent) modal: ModalWindowComponent;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  login() {
    this.userService.login(this.email, this.password)
      .subscribe(
        data => this.router.navigateByUrl(''),
        e => this.modal.show({
          title: 'Authorization error',
          message: e.error,
          buttonText: 'Try again',
          buttonAction: () => {}
        }));
  }

}
