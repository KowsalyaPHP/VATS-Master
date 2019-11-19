import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientprofileService } from './clientprofile.service';
declare var $: any

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {

  clientprofile : [];
  
  constructor(private routerObj: Router,private ClientprofileServices: ClientprofileService) {    
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

  getClientProfile() {   
    this.ClientprofileServices.getClientProfileDetails().subscribe(
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
