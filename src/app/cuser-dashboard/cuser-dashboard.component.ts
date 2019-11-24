import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CuserDashboardService } from './cuser-dashboard.service';
declare var $: any

@Component({
  selector: 'app-cuser-dashboard',
  templateUrl: './cuser-dashboard.component.html',
  styleUrls: ['./cuser-dashboard.component.css']
})
export class CuserDashboardComponent implements OnInit {

  clientUserList:[];
  userId:any;
  constructor(private routerObj: Router,private CuserDashboardServices: CuserDashboardService,private route: ActivatedRoute) {
   
    var userName = sessionStorage.getItem("userName");
    var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
    
    if (!userName){
      this.routerObj.navigate(['/login']);
    }    
   
    this.getClientUserLists();
   }

  ngOnInit() {
    $('a.newTable').on('click', function(event) {
      alert('s');
      event.stopPropagation();
      $(this).parent().hide(500, function() {
        $(this).parent().remove();
      });
    });
    $(document).on('click', '.newTable', function (e) {
      console.log('second box2 handler');
  });
  } 

  ngAfterViewInit() {
    setTimeout(function () {
      $(function () {
        $('#clientUserList').DataTable();       
      });      
    }, 1000);    
  }

  actionMethod(event) {    
    $(".dropdown-menu").slideDown("fast");     
    event.stopImmediatePropagation();
    event.preventDefault();
    $(document).on("click", function(event){      
      var $trigger = $(".dropdown");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          $(".dropdown-menu").slideUp("fast");
      }            
   });
  }
  
  getClientUserLists() {   

    this.route.params.subscribe(params => {
      this.userId = params['id'];      
    });

    this.CuserDashboardServices.getClientUserList(this.userId).subscribe(
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
