import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShirtsComponent } from './products/shirts/shirts.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { SportsComponent } from './sports/sports.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {path:'login',

   component:LoginComponent},
   {
    path:'signup',
    component:SignupComponent
   },
   {
    path:'about',
    component:AboutComponent
   },
   {
    path:'shirts',
    component:ShirtsComponent
   },
   {
    path:'t-shirts',
    component:TShirtsComponent
   },
   {
    path:'sports',
    component:SportsComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
