import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsLoginComponent } from './pages/admins/admins-login/admins-login.component';
import { AllOrdersComponent } from './pages/admins/orders/all-orders/all-orders.component';
import { OrdersDetailsComponent } from './pages/admins/orders/orders-details/orders-details.component';
import { AddProductComponent } from './pages/admins/products/add-product/add-product.component';
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
  {path:"products/:id",component:ProductDetailsComponent,canActivate:[UserAuthGuard]},
  {path:"cart",component:CartComponent,canActivate:[UserAuthGuard]},
  {path:"makeOrder",component:MakeOrderComponent,canActivate:[UserAuthGuard]},
  {path:"orders",component:UserOrdersComponent,canActivate:[UserAuthGuard]},
  {path:"orders/orderDetails/:id",component:OrderDetailsComponent,canActivate:[UserAuthGuard]},
  {path:"admin/login",component:AdminsLoginComponent},
  {path:"admins/allProducts",component:ShowAllProductsComponent},
  {path:"admins/addProduct", component:AddProductComponent},
  {path:"admins/allOrders",component:AllOrdersComponent},
  {path:"admins/ordersDetails/:id",component:OrdersDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
