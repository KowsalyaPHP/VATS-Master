import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardClientService } from './dashboard-client.service';
declare var $: any

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {
  
  clientList:[];
 
  constructor(private routerObj: Router,private DashboardClientServices: DashboardClientService) {
    
    var userName = sessionStorage.getItem("userName");
    var userId = sessionStorage.getItem("uniqueSessionId"); 
    var firstLetter = userId.charAt(0); 
    if (!userName){
      this.routerObj.navigate(['/login']);
    }    
    this.getClientDetails();
   }

  ngOnInit() {
  } 

  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#clientList').DataTable();       
      });      
    }, 1000);    
  }
  actionMethod(event) {    
    $(".dropdown-menu").show();
    event.stopPropagation();
    $(document).on("click", function(event){
      var $trigger = $(".dropdown");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          $(".dropdown-menu").slideUp("fast");
      }            
   });
  }
  getClientDetails() {   
    this.DashboardClientServices.getClientList().subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.clientList = response; 
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }

}
