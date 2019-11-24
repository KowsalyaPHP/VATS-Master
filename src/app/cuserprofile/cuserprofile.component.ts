import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CuserprofileService } from './cuserprofile.service';
import { Location } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-cuserprofile',
  templateUrl: './cuserprofile.component.html',
  styleUrls: ['./cuserprofile.component.css']
})
export class CuserprofileComponent implements OnInit {

  userId:any;
  userprofile:[];

  constructor(private _location: Location,private routerObj: Router,private CuserprofileServices: CuserprofileService,private route: ActivatedRoute) {
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

  backClicked() {
    this._location.back();
  }

  getUserProfile() {   
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });    

    this.CuserprofileServices.getcUserProfileDetails(this.userId).subscribe(
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
}
