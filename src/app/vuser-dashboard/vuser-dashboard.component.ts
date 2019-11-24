import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { VuserDashboardService } from './vuser-dashboard.service';
declare var $: any

@Component({
  selector: 'app-vuser-dashboard',
  templateUrl: './vuser-dashboard.component.html',
  styleUrls: ['./vuser-dashboard.component.css']
})
export class VuserDashboardComponent implements OnInit {

  vendorUserList:[];
  userId:any;

  constructor(private routerObj: Router,private VuserDashboardServices: VuserDashboardService,private route: ActivatedRoute) {
    
    var userName = sessionStorage.getItem("userName");
    var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
    
    if (!userName){
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
  getvendorUserLists() {   

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });

    this.VuserDashboardServices.getvendorUserList(this.userId).subscribe(
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
