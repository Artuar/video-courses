import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import {CoursesListModule} from "./courses-list/courses-list.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoursesListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
