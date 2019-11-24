import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ClienteditUserService } from './clientedit-user.service';
import { CuserprofileService } from '../cuserprofile/cuserprofile.service';
import { CommonService } from '../shared/services/common.service';
import { Location } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-clientedit-user',
  templateUrl: './clientedit-user.component.html',
  styleUrls: ['./clientedit-user.component.css']
})
export class ClienteditUserComponent implements OnInit {
  UpdateClientUser: FormGroup;
  userId:any;
  id:any;
  cuserProfile:any;
  cLoginProfile=false;
  submitted = false;
  CLookupStatus:[];

  constructor(private _location: Location,private ClienteditUserServices: ClienteditUserService,private CuserprofileServices: CuserprofileService,private CommonServices: CommonService,private formBuilderObj: FormBuilder,private routerObj: Router,private route: ActivatedRoute) {
    this.UpdateClientUser = this.formBuilderObj.group({     
      UserId:[{value: '.', disabled: true}], 
      CLIENTID:[{value: '.', disabled: true}],
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
    this.CuserprofileServices.getcUserProfileDetails(this.id).subscribe(
    response => {
      if (response != "No data") {
        if (response == "Login Failed") {           
          alert ("Your given details are not existed.");
          this.routerObj.navigate(["/login"]);           
        }
        else {                     
          this.cuserProfile = response;             
          this.cLoginProfile=true;            
          this.UpdateClientUser.patchValue({            
              UserId:this.cuserProfile[0]['USERID'], 
              CLIENTID:this.cuserProfile[0]['CLIENTID'],
              UserCategory:this.cuserProfile[0]['UserCategory'], 
              UserRoles:this.cuserProfile[0]['LEVEL'], 
              UserMrMs: this.cuserProfile[0]['USERMRMS'],
              UserName: this.cuserProfile[0]['USERNAME'], 
              UserStatus:this.cuserProfile[0]['STATUSCODE'],
              UserRemarks: this.cuserProfile[0]['Remarks'],  
              UserEmail: this.cuserProfile[0]['USEREMAIL'], 
              UserContactNo: this.cuserProfile[0]['USERCONTACTNO']          
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
          this.CLookupStatus = response;
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }

  get f() { return this.UpdateClientUser.controls; }

  UpdateClientUsersvalue(formObj) {

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });

    this.submitted = true;
    if (this.UpdateClientUser.invalid) {     
      return;
    }
    var userId = sessionStorage.getItem("uniqueSessionId");    
    var userName = sessionStorage.getItem("userName");
    if (userName){  
      var confirm = window.confirm('Do you want to update the Client user?');
      if (confirm == true) {       
        $("#loader").css("display", "block"); 
        this.ClienteditUserServices.updateClientUsers(formObj,this.userId).subscribe(
          response => {
            if (response != '') {         
              $("#loader").css("display", "none");
              alert("Details successfully updated.");
              this.backClicked(); 
              //this.routerObj.navigate(["/cuser-dashboard",this.userId]);
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
