import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'misviajes', component: MyTripsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyTripsComponent, HomeComponent, LoginComponent];

