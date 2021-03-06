import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { UsersLoginComponent } from './pages/users-login/users-login.component';
import { UserInterceptor } from './providers/user.interceptor';
import { UserEditProfileComponent } from './pages/user-edit-profile/user-edit-profile.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { MakeOrderComponent } from './pages/make-order/make-order.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { AdminsLoginComponent } from './pages/admins/admins-login/admins-login.component';
import { ShowAllProductsComponent } from './pages/admins/products/show-all-products/show-all-products.component';
import { AdminsInterceptor } from './providers/admins/admins.interceptor';
import { AdminNavComponent } from './pages/shared/navbar/admin-nav/admin-nav.component';
import { UserLoginComponent } from './pages/shared/navbar/user-login/user-login.component';
import { AddProductComponent } from './pages/admins/products/add-product/add-product.component';
import { AllOrdersComponent } from './pages/admins/orders/all-orders/all-orders.component';
import { OrdersDetailsComponent } from './pages/admins/orders/orders-details/orders-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    UsersLoginComponent,
    UserEditProfileComponent,
    ProductDetailsComponent,
    CartComponent,
    MakeOrderComponent,
    UserOrdersComponent,
    OrderDetailsComponent,
    AdminsLoginComponent,
    ShowAllProductsComponent,
    AdminNavComponent,
    UserLoginComponent,
    AddProductComponent,
    AllOrdersComponent,
    OrdersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:UserInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:AdminsInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
