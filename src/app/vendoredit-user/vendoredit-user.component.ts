import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { VendoreditUserService } from './vendoredit-user.service';
import { VuserprofileService } from '../vuserprofile/vuserprofile.service';
import { CommonService } from '../shared/services/common.service';
import { Location } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-vendoredit-user',
  templateUrl: './vendoredit-user.component.html',
  styleUrls: ['./vendoredit-user.component.css']
})
export class VendoreditUserComponent implements OnInit {
  updateVendorUser: FormGroup;
  userId:any;
  id:any;
  vuserProfile:any;
  vLoginProfile=false;
  submitted=false;
  VLookupStatus:[];

  constructor(private _location: Location,private route: ActivatedRoute,private CommonServices: CommonService,private VuserprofileServices: VuserprofileService,private VendoreditUserServices: VendoreditUserService,private formBuilderObj: FormBuilder,private routerObj: Router) { 
    this.updateVendorUser = this.formBuilderObj.group({     
        UserId:[{value: '.', disabled: true}], 
        VENDORID:[{value: '.', disabled: true}],
        UserCategory:[{value: '.', disabled: true}], 
        UserRoles:'', 
        UserMrMs:'',
        UserName: ['', [Validators.required]],
        UserStatus:'',
        UserRemarks: '',  
        UserEmail: ['', [Validators.required,Validators.pattern("[a-z A-Z,0-9,.,_]+@[a-z A-Z]+[.]+[a-z A-Z,.]+")]],
        UserContactNo: ['', [Validators.required,
                        Validators.minLength(10),       
                        Validators.pattern("[0-9]*")]]
    });  
  
  this.getStatusLookup();

  var userName = sessionStorage.getItem("userName");
  var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
  
  if (!userName){
    this.routerObj.navigate(['/login']);
  }   
  
  if (userName){            
    this.route.params.subscribe(params => {
    this.id = params['id'];
 
    this.VuserprofileServices.getVuserProfileDetails(this.id).subscribe(
    response => {
      if (response != "No data") {
        if (response == "Login Failed") {           
          alert ("Your given details are not existed.");
          this.routerObj.navigate(["/login"]);           
        }
        else {                     
          this.vuserProfile = response;                    
          this.vLoginProfile=true;            
          this.updateVendorUser.patchValue({
            UserId:this.vuserProfile[0]['USERID'], 
            VENDORID:this.vuserProfile[0]['VENDORID'],
            UserCategory:'Vendor', 
            UserRoles:this.vuserProfile[0]['LEVEL'], 
            UserMrMs: this.vuserProfile[0]['USERMRMS'],
            UserName: this.vuserProfile[0]['USERNAME'], 
            UserStatus:this.vuserProfile[0]['STATUSCODE'],
            UserRemarks: this.vuserProfile[0]['Remarks'],  
            UserEmail: this.vuserProfile[0]['USEREMAIL'], 
            UserContactNo: this.vuserProfile[0]['USERCONTACTNO'] 
          });
        }
      } else {
          console.log("something is wrong with Service Execution");
      }
    });    
     
    });
  } 
  }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
  getStatusLookup() {
    this.CommonServices.getCLookupStatus().subscribe(
      response => {
        if (response != '') {         
          this.VLookupStatus = response;
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }

 get f() { return this.updateVendorUser.controls; }

  updateVendorUserList(formObj) {

  this.submitted = true;
  if (this.updateVendorUser.invalid) {     
    return;
  }

  this.route.params.subscribe(params => {
    this.userId = params['id'];
  });
 // var userId = sessionStorage.getItem("uniqueSessionId");    
  var userName = sessionStorage.getItem("userName");

  if (userName){   
    var confirm = window.confirm('Do you want to update the Vendor user?');
    if (confirm == true) {       
      $("#loader").css("display", "block");
      this.VendoreditUserServices.updateVendorUsers(formObj,this.userId).subscribe(
        response => {
          if (response != '') {         
            $("#loader").css("display", "none");
            alert("Details successfully updated.");       
            this.backClicked(); 
           // this.routerObj.navigate(["/vuser-dashboard",this.userId]);
          }
          else {         
            console.log('something is wrong with Service  Execution');
          }
        },
        error => console.log("Error Occurd!")
      );
    }
  }  
}
}
