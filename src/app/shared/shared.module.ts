import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import {FormsModule} from '@angular/forms';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    SmartInputComponent,
    ModalWindowComponent
  ],
  exports: [
    HeaderComponent,
    SmartInputComponent,
    ModalWindowComponent
  ],
  providers: [
    AuthGuardService
  ]
})
export class SharedModule { }
