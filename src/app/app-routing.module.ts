import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';
import { DashboardVendorComponent } from './dashboard-vendor/dashboard-vendor.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';

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
},
{
  path: "dashboard-vendor",
  component: DashboardVendorComponent
},
{
  path: "footer",
  component: FooterComponent
},
{
  path: "logout",
  component: LogoutComponent
},
{
  path: "menu",
  component: MenuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
