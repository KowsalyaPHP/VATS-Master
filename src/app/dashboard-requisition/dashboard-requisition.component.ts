import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any

@Component({
  selector: 'app-dashboard-requisition',
  templateUrl: './dashboard-requisition.component.html',
  styleUrls: ['./dashboard-requisition.component.css']
})
export class DashboardRequisitionComponent implements OnInit {

  constructor(private routerObj: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#reqList').DataTable();       
      });      
    }, 1000);    
  }
}
