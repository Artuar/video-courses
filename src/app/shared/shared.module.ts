import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  providers: [
    UserService,
    AuthGuardService
  ]
})
export class SharedModule { }
