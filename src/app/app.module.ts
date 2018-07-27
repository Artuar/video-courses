import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/InMemoryDbService';
import {CoreModule} from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
