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
    MenuComponent    
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
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
