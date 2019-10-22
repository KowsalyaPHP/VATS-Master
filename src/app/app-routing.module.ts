import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
{
    path: "",
    component: HomeComponent
},
{
  path: "header",
  component: HeaderComponent
},
{
  path: "login",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
