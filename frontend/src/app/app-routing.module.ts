import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UsersLoginComponent } from './pages/users-login/users-login.component';


const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"login", component:UsersLoginComponent},
  {path:"profile",component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
