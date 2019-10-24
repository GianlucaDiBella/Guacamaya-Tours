import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilteredSliderComponent } from './home/filtered-slider/filtered-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
<<<<<<< HEAD
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';

=======
import { Navbar2Component } from './navbar2/navbar2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
>>>>>>> develop-3


@NgModule({
  declarations: [
    AppComponent,
    FilteredSliderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
<<<<<<< HEAD
    AdminComponent,
=======
    Navbar2Component,
    DashboardComponent,
    CitiesComponent,
>>>>>>> develop-3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
<<<<<<< HEAD
    FormsModule,
=======
    CommonModule,
    BrowserModule,
    FormsModule
>>>>>>> develop-3
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

