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
import { EmagineComponent } from './emagine/emagine.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { VendorUserComponent } from './vendor-user/vendor-user.component';
import { ClientUserComponent } from './client-user/client-user.component';
import { VuserDashboardComponent } from './vuser-dashboard/vuser-dashboard.component';
import { CuserDashboardComponent } from './cuser-dashboard/cuser-dashboard.component';

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
  path: "client/:id",
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
  path: "dashboard-client",
  component: DashboardClientComponent
},
{
  path: "vendorprofile",
  component: VendorprofileComponent
},
{
  path: "clientprofile",
  component: ClientprofileComponent
},
{
  path: "vendor-user",
  component: VendorUserComponent
},
{
  path: "client-user",
  component: ClientUserComponent
},
{
  path: "vuser-dashboard",
  component: VuserDashboardComponent
},
{
  path: "cuser-dashboard",
  component: CuserDashboardComponent
},
{
  path: "emagine",
  component: EmagineComponent
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
