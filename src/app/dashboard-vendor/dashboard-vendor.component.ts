import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardVendorService } from './dashboard-vendor.service';
declare var $: any

@Component({
  selector: 'app-dashboard-vendor',
  templateUrl: './dashboard-vendor.component.html',
  styleUrls: ['./dashboard-vendor.component.css']
})
export class DashboardVendorComponent implements OnInit {
  vendorList:[];

  constructor(private routerObj: Router,private DashboardVendorServices: DashboardVendorService) {    
    var userName = sessionStorage.getItem("userName");
    var userId = sessionStorage.getItem("uniqueSessionId"); 
    var firstLetter = userId.charAt(0); 

    if (!userName || firstLetter != 'E'){
      this.routerObj.navigate(['/login']);
    }      
           
    this.getVendorDetails();
   }

  ngOnInit() {
   /* $(document).ready(function(){  
      $(".dropdown").click(function(){     
          $(this).find(".dropdown-menu").slideToggle("fast");
      });
    });
    $(document).ready(function() {

      $('#newTable a').click(function() {
          alert('d')
      });
  
  });
     /* $('body').on("click", "td", $(document).ready( function() {
        alert('ss'); $(this).find(".dropdown-menu").slideToggle("fast");
      }));
      $(document).ready(function(){  
      $("dropdown").click(function(){     
          $(this).find(".dropdown-menu").slideToggle("fast");
      });
  });
  $(document).on("click", function(event){
      var $trigger = $(".dropdown");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          $(".dropdown-menu").slideUp("fast");
      }            
  });*/
  }
 
  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#vendorList').DataTable();       
      });      
    }, 1000);    
  }
  myClickFunction(event) {    
    $(".dropdown-menu").show();
    event.stopPropagation();
    $(document).on("click", function(event){
      var $trigger = $(".dropdown");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          $(".dropdown-menu").slideUp("fast");
      }            
  });
 }
  getVendorDetails() {   
    this.DashboardVendorServices.getVendorList().subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
         else {                     
           this.vendorList = response; 
        }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }
}
