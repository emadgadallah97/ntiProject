import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsLoginComponent } from './pages/admins/admins-login/admins-login.component';
import { ShowAllProductsComponent } from './pages/admins/products/show-all-products/show-all-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MakeOrderComponent } from './pages/make-order/make-order.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserEditProfileComponent } from './pages/user-edit-profile/user-edit-profile.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { UsersLoginComponent } from './pages/users-login/users-login.component';
import { UserAuthGuard } from './user-auth.guard';


const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"login", component:UsersLoginComponent},
  {path:"editProfile",component:UserEditProfileComponent,canActivate:[UserAuthGuard]},
  {path:"products/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"makeOrder",component:MakeOrderComponent},
  {path:"orders",component:UserOrdersComponent},
  {path:"orders/orderDetails/:id",component:OrderDetailsComponent},
  {path:"admin/login",component:AdminsLoginComponent},
  {path:"admins/allProducts",component:ShowAllProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
