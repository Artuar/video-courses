import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import {FormsModule} from '@angular/forms';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import {SpeanerComponent} from './components/speaner/speaner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    SmartInputComponent,
    ModalWindowComponent,
    SpeanerComponent
  ],
  exports: [
    HeaderComponent,
    SmartInputComponent,
    ModalWindowComponent,
    SpeanerComponent
  ],
  providers: [
    AuthGuardService
  ]
})
export class SharedModule { }
