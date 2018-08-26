import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {ModalWindowComponent} from '../shared/components/modal-window/modal-window.component';
import {ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public title: string;
  public loginForm : FormGroup;

  @ViewChild(ModalWindowComponent) modal: ModalWindowComponent;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login({email, password}) {
    this.userService.login(email, password)
      .subscribe(
        data => this.router.navigateByUrl(''),
        e => this.showErrorPopup(e.error));
  }

  showErrorPopup(error){
    this.modal.show({
      title: 'Authorization error',
      message: error,
    })
  }

}
