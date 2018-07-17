import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    LoginComponent,
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
