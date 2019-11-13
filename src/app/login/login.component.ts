import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { LoginService } from './login.service';

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
      /*,loginAs: ['', Validators.required]*/
    });
  }

  ngOnInit() {

  }
  
  get f() { return this.loginForm.controls; }

  validateLoginDetails(formObj) {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.LoginServices.LoginUser(formObj).subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {
            this.routerObj.navigate(["/login"]);
          } else {          
           
            this.sessionID = response["Userdetail"][0]["USERID"];          
            sessionStorage.setItem("uniqueSessionId", this.sessionID);            
            sessionStorage.setItem("userName", response["Userdetail"][0]["USERNAME"]);
            sessionStorage.setItem("userID", formObj.username);
            sessionStorage.setItem("password", formObj.password);
            this.routerObj.navigate(["/dashboard-vendor"]);

           /* if (response[0]["usertype"] == "Admin") {
              this.routerObj.navigate(["/app-registration-list"]);
            }else if (response[0]["usertype"] == "Rock Client") {
              this.routerObj.navigate(["/client-job-details"]);
            }else {
              this.routerObj.navigate(["/job-details"]);
            }*/
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
