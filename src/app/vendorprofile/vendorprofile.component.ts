import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorprofileService } from './vendorprofile.service';
declare var $: any

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {

  vendorprofile : [];
  
  constructor(private routerObj: Router,private VendorprofileServices: VendorprofileService) {    
    
     var userName = sessionStorage.getItem("userName");
  
      if (!userName){
        this.routerObj.navigate(['/login']);
      }     

      this.getVendorProfile();
  }


  ngOnInit() {
  }

  getVendorProfile() {   
    this.VendorprofileServices.getVendorProfileDetails().subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.vendorprofile = response;  
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }

}
