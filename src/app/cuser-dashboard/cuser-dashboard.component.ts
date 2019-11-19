import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuserDashboardService } from './cuser-dashboard.service';
declare var $: any

@Component({
  selector: 'app-cuser-dashboard',
  templateUrl: './cuser-dashboard.component.html',
  styleUrls: ['./cuser-dashboard.component.css']
})
export class CuserDashboardComponent implements OnInit {

  clientUserList:[];
 
  constructor(private routerObj: Router,private CuserDashboardServices: CuserDashboardService) {
   
    var userName = sessionStorage.getItem("userName");
    var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
    
    if (!userName && USERCATEGORY != "V"){
      this.routerObj.navigate(['/login']);
    }    
   
    this.getClientUserLists();
   }

  ngOnInit() {
  } 

  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#clientUserList').DataTable();       
      });      
    }, 1000);    
  }

  getClientUserLists() {   
    this.CuserDashboardServices.getClientUserList().subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.clientUserList = response; 
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }
}
