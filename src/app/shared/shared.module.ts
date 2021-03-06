import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import {FormsModule} from '@angular/forms';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import {SpeanerComponent} from './components/speaner/speaner.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    SmartInputComponent,
    ModalWindowComponent,
    SpeanerComponent,
    CustomSelectComponent
  ],
  exports: [
    HeaderComponent,
    SmartInputComponent,
    ModalWindowComponent,
    SpeanerComponent,
    CustomSelectComponent
  ],
  providers: [
    AuthGuardService
  ]
})
export class SharedModule { }
