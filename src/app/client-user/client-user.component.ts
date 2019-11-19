import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ClientUserService } from './client-user.service';

@Component({
  selector: 'app-client-user',
  templateUrl: './client-user.component.html',
  styleUrls: ['./client-user.component.css']
})
export class ClientUserComponent implements OnInit {

  AddClientUser: FormGroup;

  constructor(private ClientUserServices: ClientUserService,private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.AddClientUser = this.formBuilderObj.group({     
      UserMrMs: '',      
      UserName: '',
      UserRemarks: '',
      UserEmail: '',
      UserContactNo: ''
  });  
   
  var userName = sessionStorage.getItem("userName");
  var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
  
  if (!userName && USERCATEGORY != "V"){
    this.routerObj.navigate(['/login']);
  } 

 }

  ngOnInit() {
  }
  addClientUser(formObj) {
    this.ClientUserServices.addClientUsers(formObj).subscribe(
      response => {
        if (response != '') {         
         alert("Successfully Added.");
         this.routerObj.navigate(["/client-user"]);
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }

}
