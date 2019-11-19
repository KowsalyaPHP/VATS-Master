import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VuserDashboardService } from './vuser-dashboard.service';
declare var $: any

@Component({
  selector: 'app-vuser-dashboard',
  templateUrl: './vuser-dashboard.component.html',
  styleUrls: ['./vuser-dashboard.component.css']
})
export class VuserDashboardComponent implements OnInit {

  vendorUserList:[];
 
  constructor(private routerObj: Router,private VuserDashboardServices: VuserDashboardService) {
    
    var userName = sessionStorage.getItem("userName");
    var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
    
    if (!userName && USERCATEGORY != "C"){
      this.routerObj.navigate(['/login']);
    }    
    this.getvendorUserLists();
   }

  ngOnInit() {
  } 

  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#vendorUserList').DataTable();       
      });      
    }, 1000);    
  }

  getvendorUserLists() {   
    this.VuserDashboardServices.getvendorUserList().subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.vendorUserList = response; 
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }

}
