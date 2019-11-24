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
import { DashboardRequisitionComponent } from './dashboard-requisition/dashboard-requisition.component';
import { VuserprofileComponent } from './vuserprofile/vuserprofile.component';
import { CuserprofileComponent } from './cuserprofile/cuserprofile.component';
import { ClienteditUserComponent } from './clientedit-user/clientedit-user.component';
import { VendoreditUserComponent } from './vendoredit-user/vendoredit-user.component';

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
  path: "vendor/:id",
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
  path: "dashboard-requisition",
  component: DashboardRequisitionComponent
},
{
  path: "vendorprofile/:id",
  component: VendorprofileComponent
},
{
  path: "clientprofile/:id",
  component: ClientprofileComponent
},
{
  path: "cuserprofile/:id",
  component: CuserprofileComponent
},
{
  path: "vuserprofile/:id",
  component: VuserprofileComponent
},
{
  path: "vendor-user/:id",
  component: VendorUserComponent
},
{
  path: "client-user/:id",
  component: ClientUserComponent
},
{
  path: "vuser-dashboard/:id",
  component: VuserDashboardComponent
},
{
  path: "cuser-dashboard/:id",
  component: CuserDashboardComponent
},
{
  path: "clientedit-user/:id",
  component: ClienteditUserComponent
},
{
  path: "vendoredit-user/:id",
  component: VendoreditUserComponent
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
