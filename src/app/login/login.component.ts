import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";


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
  
  constructor(private formBuilderObj: FormBuilder,private routerObj: Router) { 
    this.loginForm = this.formBuilderObj.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
      //,loginAs: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  
  get f() { return this.loginForm.controls; }

  validateLoginDetails(formObj) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    console.log(formObj);
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
