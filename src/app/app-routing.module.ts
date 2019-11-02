import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';

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
},
{
  path: "client",
  component: ClientComponent
},
{
  path: "vendor",
  component: VendorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
