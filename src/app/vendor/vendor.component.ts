import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  submitted = false;
  SignupVendorForm: FormGroup;
 
  
  constructor(private VendorServices: VendorService,private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.SignupVendorForm = this.formBuilderObj.group({     
      VendorName: ['', [Validators.required]],      
      RegdAddressL1: ['', Validators.required],
      Area: ['', Validators.required],
      City: ['', Validators.required],
      PINCODE: ['',[Validators.required,
                Validators.pattern("[0-9]*[' '-]*[(]*[0-9]*[)-]*[' '-]*[0-9]*[' '-]*[0-9]*[' '-]*[0-9]*"),
                Validators.minLength(6)]],
      VendorPhoneNo: ['',[Validators.required,
                      Validators.minLength(10),
                      Validators.maxLength(14),
                      Validators.pattern("[0-9]*[' '-]*[(]*[0-9]*[)-]*[' '-]*[0-9]*[' '-]*[0-9]*[' '-]*[0-9]*")]],
      VendorFaxNo:'',
      VendorMobileNo:'',
      VendorEMAILID: ['', [Validators.required, Validators.pattern("[a-z A-Z,0-9,.,_]+@[a-z A-Z]+[.]+[a-z A-Z,.]+")]],
      MainContact: ['', Validators.required],
      MainContactDesgn:'',
      MainContactNo:'',
      MainContactEmailId:'',
      AltContact: ['', Validators.required],
      AltContactDesgn:'',
      AltContactNo:'',
      AltContactEmailId:'',   
      TeamSize: [{value: '5', disabled: true}],
      AllowedUserCt: [{value: '5', disabled: true}],
      ConcurrentUserCt: [{value: '5', disabled: true}],
      CommonPoolYorN:'',
      OwnPoolPermitYorN:'',
      AdminRightsYorN: '',
      VendorShortName:[{value: '', disabled: true}],
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
  get f() { return this.SignupVendorForm.controls; }

  signUpVendor(formObj) {
    this.submitted = true;
    if (this.SignupVendorForm.invalid) {
        return;
    }
    this.VendorServices.addVendors(formObj).subscribe(
      response => {
        if (response != '') {         
         alert("success");
         this.routerObj.navigate(["/login"]);
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }
}
