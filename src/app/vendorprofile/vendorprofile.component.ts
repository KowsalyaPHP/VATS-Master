import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { VendorprofileService } from './vendorprofile.service';
import { Location } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {

  vendorprofile : [];
  userId:any;
  usercategory:any;

  constructor(private _location: Location,private routerObj: Router,private VendorprofileServices: VendorprofileService,private route: ActivatedRoute) {    
    
     var userName = sessionStorage.getItem("userName");
  
      if (!userName){
        this.routerObj.navigate(['/login']);
      }     

      this.getVendorProfile();
  }


  ngOnInit() {
  }

  getVendorProfile() {   

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    
    this.usercategory = "V";

    this.VendorprofileServices.getVendorProfileDetails(this.userId,this.usercategory).subscribe(
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
  backClicked() {
    this._location.back();
  }
}
