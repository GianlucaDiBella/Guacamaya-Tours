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
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Navbar2Component } from './navbar2/navbar2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { environment } from '../environments/environment';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilteredSliderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
    AdminComponent,
    Navbar2Component,
    DashboardComponent,
    CitiesComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

