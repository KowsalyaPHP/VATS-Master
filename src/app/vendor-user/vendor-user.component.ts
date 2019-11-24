import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { VendorUserService } from './vendor-user.service';
import { CommonService } from '../shared/services/common.service';
declare var $: any

@Component({
  selector: 'app-vendor-user',
  templateUrl: './vendor-user.component.html',
  styleUrls: ['./vendor-user.component.css']
})
export class VendorUserComponent implements OnInit {

  AddVendorUser: FormGroup;
  userId:any;
  submitted=false;

  constructor(private route: ActivatedRoute,private VendorUserServices: VendorUserService,private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.AddVendorUser = this.formBuilderObj.group({     
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

  get f() { return this.AddVendorUser.controls; }

  addVendorUser(formObj) {

    this.submitted = true;
    if (this.AddVendorUser.invalid) {     
      return;
    }
    
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });

    var confirm = window.confirm('Do you want to add the Vendor user?');
    if (confirm == true) {       
      $("#loader").css("display", "block");
      this.VendorUserServices.addVendorUsers(formObj,this.userId).subscribe(
        response => {
          if (response != '') {         
            $("#loader").css("display", "none");
            alert("Details successfully added.");
            this.routerObj.navigate(["/vuser-dashboard",this.userId]);
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
