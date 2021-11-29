import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { UsersLoginComponent } from './pages/users-login/users-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInterceptor } from './providers/user.interceptor';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    UsersLoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:UserInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
