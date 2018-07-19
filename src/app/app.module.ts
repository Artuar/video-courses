import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {CoursesPageModule} from './courses-list/courses-page.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/InMemoryDbService';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoursesPageModule,
    LoginModule,
    AppRoutingModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
