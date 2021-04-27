import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'registro', component:RegisterComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'home', component: HomeComponent} , //HOME es un componente que requiere ser identificado, debido a esto, le introducimos un "guardian" para controlar su acceso
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
