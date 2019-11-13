import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-dashboard-vendor',
  templateUrl: './dashboard-vendor.component.html',
  styleUrls: ['./dashboard-vendor.component.css']
})
export class DashboardVendorComponent implements OnInit {
 
  constructor(private routerObj: Router) {    
    var userName = sessionStorage.getItem("userName");
    var userType = sessionStorage.getItem("userMailid");   
    /*if (!userName){
      this.routerObj.navigate(['/login']);
    }*/    
   }

  ngOnInit() {
  }
 
  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#vendorList').DataTable();       
      });      
    }, 1000);    
  }
 
}
