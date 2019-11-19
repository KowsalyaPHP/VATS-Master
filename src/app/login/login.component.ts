import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from "@angular/forms";
import { LoginService } from './login.service';
declare var $: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  modelform: any = 'false';
  signform: any = 'false';
  userValues: any = 'false';
  display='none';
  signdisplay='none';
  sessionID:any;

  constructor(private LoginServices: LoginService,private formBuilderObj: FormBuilder,private routerObj: Router) { 
    this.loginForm = this.formBuilderObj.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    var userName = sessionStorage.getItem("userName");

    if (typeof userName !== "undefined" && userName !== null) {         
      sessionStorage.clear();   
      this.routerObj.navigate(['/login']);
    }
  }

  @ViewChild(FormGroupDirective,{static:true}) formGroupDirective: FormGroupDirective;

  ngOnInit() {

  }
  
  get f() { return this.loginForm.controls; }
  resetErrorForm(){
    this.loginForm.reset();           
    this.loginForm.controls.username.setErrors(null);
    this.loginForm.controls.password.setErrors(null);
    this.loginForm.updateValueAndValidity();
  }
  validateLoginDetails(formObj) {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    $("#loader").css("display", "block");
    this.LoginServices.LoginUser(formObj).subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {
            $("#loader").css("display", "none");            
            alert ("Login details does not exist.");
            this.resetErrorForm();
          }
          else if(response == "Maximum User Logged"){
              $("#loader").css("display", "none");              
              alert ("Maximum login limit reached.Please try later."); 
              this.resetErrorForm();             
          } else {                     
            $("#loader").css("display", "none");
            this.sessionID = response["Userdetail"][0]["USERID"];   
            sessionStorage.setItem("uniqueSessionId", this.sessionID);            
            sessionStorage.setItem("userName", response["Userdetail"][0]["USERNAME"]);
            sessionStorage.setItem("USERMOBILENO", response["Userdetail"][0]["USERMOBILENO"]);
            sessionStorage.setItem("USERCATEGORY", response["Userdetail"][0]["USERCATEGORY"]);
            sessionStorage.setItem("userID", formObj.username);
            sessionStorage.setItem("Menudetails", JSON.stringify(response["Menudetails"]));
            sessionStorage.setItem("Roles", response["Roles"]);
       
            var str = response["Userdetail"][0]["USERID"]; 
            var firstLetter = str.charAt(0);
            
            if (firstLetter == "C") {
              this.routerObj.navigate(["/clientprofile"]);
            }else if (firstLetter == "V") {
              this.routerObj.navigate(["/vendorprofile"]);
            }else {
              this.routerObj.navigate(["/emagine"]);
            }
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }
  openForgetDialog(){
    this.modelform = 'true';
    this.display='block'; 
    this.userValues = 'true';
   // this.viewForm.patchValue({user_id: item.userid, user_name: item.username, password: item.password});
    //this.getCreateUser(Value);
  }
  openSignDialog(){
    this.signform = 'true';
    this.signdisplay='block'; 
    // this.viewForm.patchValue({user_id: item.userid, user_name: item.username, password: item.password});
    //this.getCreateUser(Value);
  }
  
  closeForgetDialog(){
    this.display='none';
  }
  closeSignDialog(){
    this.signdisplay='none';
  }
}
