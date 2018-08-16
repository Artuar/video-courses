import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {CoreModule} from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from './shared/shared.module';
import {TokenInterceptor} from './shared/services/token.interceptor';
import {appReduсer} from "./app.reduсer";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({store: appReduсer}),
    StoreDevtoolsModule.instrument(),
    SharedModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
