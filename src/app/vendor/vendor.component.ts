import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  submitted = false;
  SignupForm: FormGroup;
 
  
  constructor(private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.SignupForm = this.formBuilderObj.group({     
      VendorName: ['', [Validators.required, Validators.minLength(6)]],      
      RegdAddressL1: ['', Validators.required],
      Area: ['', Validators.required],
      City: ['', Validators.required],
      PINCODE: ['', Validators.required],
      VendorPhoneNo: ['', Validators.required],
      VendorFaxNo:'',
      VendorMobileNo:'',
      VendorEMAILID: ['', Validators.required],
      MainContact: ['', Validators.required],
      MainContactDesgn:'',
      MainContactNo:'',
      MainContactEmailId:'',
      AltContact: ['', Validators.required],   
      AltContactDesgn:'',
      AltContactNo:'',
      AltContactEmailId:'',   
      TeamSize: [{value: '5', disabled: true}],
      AllowedUserCt: [{value: '5', disabled: true}, Validators.required],
      ConcurrentUserCt: [{value: '5', disabled: true}, Validators.required],
      CommonPoolYorN:['', Validators.required],
      OwnPoolPermitYorN:['', Validators.required],
      AdminRightsYorN: ['', Validators.required],
      VendorShortName:'',
      /*
      VendorID: [{value: 'Auto Generated Code', disabled: true}, Validators.required],
      VendorGLCode:[{value: 'VendorID Auto Generated Code', disabled: true}],
      VendorTier:['', Validators.required],
      VendorExpertise: ['', Validators.required],
      VendorType: [{value: 'VNDR', disabled: true}, Validators.required],
      VendorGSTNo:'',
      VendorLandMark:''
      VendorShortName:'',VendorStatus: ['', Validators.required],
      VendorStatusDate:'',*/
    });
   }

  ngOnInit() {
  }

}
