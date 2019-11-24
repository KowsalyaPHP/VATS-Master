import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { VuserprofileService } from './vuserprofile.service';
import { Location } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-vuserprofile',
  templateUrl: './vuserprofile.component.html',
  styleUrls: ['./vuserprofile.component.css']
})
export class VuserprofileComponent implements OnInit {
  userId:any;
  userprofile:[];
  
  constructor(private _location: Location,private routerObj: Router,private VuserprofileServices: VuserprofileService,private route: ActivatedRoute) {
    var userName = sessionStorage.getItem("userName");
    var userId = sessionStorage.getItem("uniqueSessionId"); 
    var firstLetter = userId.charAt(0); 
    if (!userName){
      this.routerObj.navigate(['/login']);
    }    
    this.getUserProfile();
  }

  ngOnInit() {
  }
  getUserProfile() {   
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });    

    this.VuserprofileServices.getVuserProfileDetails(this.userId).subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.userprofile = response;  
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
