import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ClientUserService } from './client-user.service';
import { CommonService } from '../shared/services/common.service';
declare var $: any

@Component({
  selector: 'app-client-user',
  templateUrl: './client-user.component.html',
  styleUrls: ['./client-user.component.css']
})
export class ClientUserComponent implements OnInit {

  AddClientUser: FormGroup;
  userId:any;
  submitted = false;
  
  constructor(private ClientUserServices: ClientUserService,private formBuilderObj: FormBuilder,private routerObj: Router,private route: ActivatedRoute) {
    this.AddClientUser = this.formBuilderObj.group({     
      UserMrMs: '',      
      UserName: ['', [Validators.required]],
      UserRemarks: '',
      UserEmail: ['', [Validators.required,Validators.pattern("[a-z A-Z,0-9,.,_]+@[a-z A-Z]+[.]+[a-z A-Z,.]+")]],
      UserContactNo: ['', [Validators.required,
                      Validators.minLength(10),       
                      Validators.pattern("[0-9]*")]]
  });  
   
  var userName = sessionStorage.getItem("userName");
  var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
  
  if (!userName){
    this.routerObj.navigate(['/login']);
  } 

 }

  ngOnInit() {
  }
  get f() { return this.AddClientUser.controls; }

  addClientUser(formObj) {

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });

    this.submitted = true;
    if (this.AddClientUser.invalid) {     
      return;
    }

    var confirm = window.confirm('Do you want to add the Client user?');
    if (confirm == true) {       
      $("#loader").css("display", "block");
      this.ClientUserServices.addClientUsers(formObj,this.userId).subscribe(
        response => {
          if (response != '') {         
          $("#loader").css("display", "none");
          alert("Details successfully added.");
          this.routerObj.navigate(["/cuser-dashboard",this.userId]);
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
