import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/shared/material/angular-material.module';
import { LoginPageComponent } from './UI/login-page/login-page.component';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { MainComponent } from './UI/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { Page404Component } from './Components/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './Components/events/events.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    Page404Component,
    EventsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
