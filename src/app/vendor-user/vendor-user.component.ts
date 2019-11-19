import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { VendorUserService } from './vendor-user.service';

@Component({
  selector: 'app-vendor-user',
  templateUrl: './vendor-user.component.html',
  styleUrls: ['./vendor-user.component.css']
})
export class VendorUserComponent implements OnInit {

  AddVendorUser: FormGroup;

  constructor(private VendorUserServices: VendorUserService,private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.AddVendorUser = this.formBuilderObj.group({     
      UserMrMs: '',      
      UserName: '',
      UserRemarks: '',
      UserEmail: '',
      UserContactNo: ''
  });  
    var userName = sessionStorage.getItem("userName");
    var USERCATEGORY = sessionStorage.getItem("USERCATEGORY"); 
    
    if (!userName && USERCATEGORY != "C"){
      this.routerObj.navigate(['/login']);
    } 
 }

  ngOnInit() {
  }
  addVendorUser(formObj) {
    this.VendorUserServices.addVendorUsers(formObj).subscribe(
      response => {
        if (response != '') {         
         alert("Successfully Added.");
         this.routerObj.navigate(["/vendor-user"]);
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }
}
