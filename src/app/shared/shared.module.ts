import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import {UserService} from './services/user.service';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    SmartInputComponent ],
  exports: [
    HeaderComponent,
    SmartInputComponent
  ],
  providers: [
    UserService,
    AuthGuardService
  ]
})
export class SharedModule { }
