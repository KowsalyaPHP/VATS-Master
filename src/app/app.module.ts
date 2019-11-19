import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, NgModel } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorService } from './vendor/vendor.service';
import { ClientService } from './client/client.service';
import { LoginService } from './login/login.service';
import { DashboardVendorComponent } from './dashboard-vendor/dashboard-vendor.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { FormDirective } from './client/form.directive';
import { FocusvendorDirective } from './vendor/focusvendor.directive';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { EmagineComponent } from './emagine/emagine.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { ClientprofileService } from './clientprofile/clientprofile.service';
import { VendorprofileService } from './vendorprofile/vendorprofile.service';
import { UserComponent } from './user/user.component';
import { VendorUserComponent } from './vendor-user/vendor-user.component';
import { ClientUserComponent } from './client-user/client-user.component';
import { VuserDashboardComponent } from './vuser-dashboard/vuser-dashboard.component';
import { CuserDashboardComponent } from './cuser-dashboard/cuser-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ClientComponent,
    VendorComponent,
    DashboardVendorComponent,
    FooterComponent,
    LogoutComponent,
    FormDirective,
    FocusvendorDirective,
    MenuComponent,
    DashboardClientComponent,
    EmagineComponent,
    VendorprofileComponent,
    ClientprofileComponent,
    UserComponent,
    VendorUserComponent,
    ClientUserComponent,
    VuserDashboardComponent,
    CuserDashboardComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    VendorService,
    ClientService,
    LoginService,
    MenuService,
    ClientprofileService,
    VendorprofileService
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
