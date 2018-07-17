import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {CoursesPageModule} from './courses-list/courses-page.module';
import {UserService} from './shared/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {CoreModule} from './core/core.module';

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
    CoreModule.forRoot({}),

    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
