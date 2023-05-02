import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ProductsComponent } from './products/products.component';

import { ShirtsComponent } from './products/shirts/shirts.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { SportsComponent } from './sports/sports.component';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    NavBarComponent,
    Banner1Component,
    Banner2Component,
    ItemsComponent,
    HomeComponent,
    BrandsComponent,
    FooterComponent,
    SocialmediaComponent,
    ProductsComponent,
   
    ShirtsComponent,
   
    TShirtsComponent,
   
    SportsComponent,
   
    HomePageComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
