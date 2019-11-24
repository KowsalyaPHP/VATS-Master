import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ClientprofileService } from './clientprofile.service';
import { Location } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {

  clientprofile : [];
  userId:any;
  usercategory:any;

  constructor(private _location: Location,private routerObj: Router,private ClientprofileServices: ClientprofileService,private route: ActivatedRoute) {    
      var userName = sessionStorage.getItem("userName");
      var userId = sessionStorage.getItem("uniqueSessionId"); 
      var firstLetter = userId.charAt(0); 
      if (!userName){
        this.routerObj.navigate(['/login']);
      }    
      this.getClientProfile();
  }


  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

  getClientProfile() {   
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.usercategory = "C1";

    this.ClientprofileServices.getClientProfileDetails(this.userId,this.usercategory).subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.clientprofile = response;  
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }
}
