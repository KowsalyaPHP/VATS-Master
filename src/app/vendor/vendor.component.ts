import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { VendorService } from './vendor.service';
import { VendorprofileService } from '../vendorprofile/vendorprofile.service';
import { CommonService } from '../shared/services/common.service';
declare var $: any

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  submitted = false;
  SignupVendorForm: FormGroup;
  id:any;
  Vendorprofile :any;
  LoginVendor=false;
  cityLookups:[];
  LookupCategory:[];
  LookupType:[];
  LookupExpertise:[];

  constructor(private route: ActivatedRoute,private CommonServices: CommonService,private VendorprofileServices: VendorprofileService,private VendorServices: VendorService,private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.SignupVendorForm = this.formBuilderObj.group({     
      VendorName: ['', [Validators.required]],      
      RegdAddressL1: '.',
      Area: '.',
      City:'00',
      PINCODE: '.',
      VendorPhoneNo: '.',
      VendorFaxNo:'.',
      VendorMobileNo:'.',
      VendorEMAILID: '.',
      MainContact:'.',
      MainContactDesgn:'.',
      MainContactNo:'.',
      MainContactEmailId:'.',
      AltContact:'.',
      AltContactDesgn:'.',
      AltContactNo:'.',
      AltContactEmailId:'.', 
      VendorShortName:[{value: '.', disabled: true}],  
      VendorID: [{value: '', disabled: true}],             
      VendorGSTNo:'' ,
      VendorLandMark:'',    
      VendorTier: '',
      VendorExpertise:'' ,
      VendorType:'' ,
      TeamSize:'' ,
      AllowedUserCt:'',
      ConcurrentUserCt:'',
      CommonPoolYorN:'' ,
      OwnPoolPermitYorN:'' ,
      AdminRightsYorN:'',            
      VendorGLCode:''
    });  

    var userId = sessionStorage.getItem("uniqueSessionId");    
    var userName = sessionStorage.getItem("userName");   
    var USERCATEGORY = "C1"; 

    this.route.params.subscribe(params => {
      this.id = params['id'];     
    });

    if (userName && this.id != 0){      
      
      this.VendorprofileServices.getVendorProfileDetails(this.id,"V").subscribe(
      response => {
        if (response != "No data") {
          if (response == "Login Failed") {           
            alert ("Your given details are not existed.");
            this.routerObj.navigate(["/login"]);           
          }
          else {                     
            this.Vendorprofile = response;       
            console.log(this.Vendorprofile);      
            this.LoginVendor=true;           
            this.SignupVendorForm.controls['VendorName'].disable(); 
            this.SignupVendorForm.patchValue({
              VendorID:this.Vendorprofile[0]['VendorID'], 
              VendorName:this.Vendorprofile[0]['VendorName'], 
              VendorShortName:this.Vendorprofile[0]['VendorShortName'],            
              RegdAddressL1: this.Vendorprofile[0]['RegdAddressL1'],              
              Area: this.Vendorprofile[0]['Area'],
              City: this.Vendorprofile[0]['CityCode'],
              PINCODE:this.Vendorprofile[0]['PINCODE'],
              VendorPhoneNo:this.Vendorprofile[0]['VendorPhoneNo'],
              VendorFaxNo: this.Vendorprofile[0]['VendorFaxNo'],
              VendorGSTNo:this.Vendorprofile[0]['VendorGSTNo'] ,
              VendorLandMark:this.Vendorprofile[0]['VendorLandMark'],
              VendorMobileNo:this.Vendorprofile[0]['VendorMobileNo'] ,
              VendorEMAILID:this.Vendorprofile[0]['VendorEMAILID'],
              MainContact:this.Vendorprofile[0]['MainContact'] ,
              MainContactDesgn:this.Vendorprofile[0]['MainContactDesgn'],
              MainContactNo:this.Vendorprofile[0]['MainContactNo'],
              MainContactEmailId:this.Vendorprofile[0]['MainContactEmailId'],
              AltContact: this.Vendorprofile[0]['AltContact'],
              AltContactDesgn: this.Vendorprofile[0]['AltContactDesgn'],
              AltContactNo: this.Vendorprofile[0]['AltContactNo'],
              AltContactEmailId:this.Vendorprofile[0]['AltContactEmailId'],
              VendorTier: this.Vendorprofile[0]['VendorTierCode'],
              VendorExpertise:this.Vendorprofile[0]['VendorExpertiseCode'] ,
              VendorType:this.Vendorprofile[0]['VendorTypeCode'] ,
              TeamSize:this.Vendorprofile[0]['TeamSize'] ,
              AllowedUserCt:this.Vendorprofile[0]['AllowedUserCt'] ,
              ConcurrentUserCt:this.Vendorprofile[0]['ConcurrentUserCt'] ,
              CommonPoolYorN:this.Vendorprofile[0]['CommonPoolYorN'] ,
              OwnPoolPermitYorN:this.Vendorprofile[0]['OwnPoolPermitYorN'] ,
              AdminRightsYorN:this.Vendorprofile[0]['AdminRightsYorN'],            
              VendorGLCode:this.Vendorprofile[0]['VendorGLCode']              
            });
          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      });
      
       
      
    }
   }

  ngOnInit() {
    this.cityLookup();
    this.getVLookupCategories();
    this.getVLookupTypes();
    this.getVLookupExpertises();
  }
  
  cityLookup() {
    this.CommonServices.getLookupCity().subscribe(
      response => {
        if (response != '') {         
          this.cityLookups = response;
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }
  getVLookupCategories() {
    this.CommonServices.getVLookupCategory().subscribe(
      response => {
        if (response != '') {         
          this.LookupCategory = response;
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }

  getVLookupTypes() {
    this.CommonServices.getVLookupType().subscribe(
      response => {
        if (response != '') {         
          this.LookupType = response;
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }
  getVLookupExpertises() {
    this.CommonServices.getVLookupExpertise().subscribe(
      response => {
        if (response != '') {         
          this.LookupExpertise = response;
        }
        else {         
          console.log('something is wrong with Service  Execution');
        }
      },
      error => console.log("Error Occurd!")
    );
  }
  get f() { return this.SignupVendorForm.controls; } 

  signUpVendor(formObj) {
    const phoneControl = this.SignupVendorForm.get('VendorMobileNo');

    if(this.SignupVendorForm.get('VendorMobileNo').value != '.')
    {     
      this.SignupVendorForm.get('VendorMobileNo').setValidators([Validators.minLength(10),       
        Validators.pattern("[0-9]*")]);      
      phoneControl.updateValueAndValidity();
    }

    const EmailControl = this.SignupVendorForm.get('VendorEMAILID');
    if(this.SignupVendorForm.get('VendorEMAILID').value != '.')
    {   
      this.SignupVendorForm.get('VendorEMAILID').setValidators([Validators.pattern("[a-z A-Z,0-9,.,_]+@[a-z A-Z]+[.]+[a-z A-Z,.]+")]);      
      EmailControl.updateValueAndValidity();
    }

    const pincodeControl = this.SignupVendorForm.get('PINCODE');

    if(this.SignupVendorForm.get('PINCODE').value != '.')
    {    
      this.SignupVendorForm.get('PINCODE').setValidators([Validators.pattern("[0-9]*")]);      
      pincodeControl.updateValueAndValidity();
    }

    this.submitted = true;
    if (this.SignupVendorForm.invalid) {
        return;
    }
    var userId = sessionStorage.getItem("uniqueSessionId");    
    var userName = sessionStorage.getItem("userName");

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (userName && this.id != 0){   

    
      var confirm = window.confirm('Do you want to update the Vendor details?');
      if (confirm == true) {       
        $("#loader").css("display", "block");
        this.VendorServices.UpdateVendors(formObj,this.id).subscribe(
          response => {
            if (response != '') {         
            alert("Welcome to VATS as New Vendor.\nPlease check your email for further details.");
            this.routerObj.navigate(["/dashboard-vendor"]);
            }
            else {         
              console.log('something is wrong with Service  Execution');
            }
          },
          error => console.log("Error Occurd!")
        );
      }
    }
    else{
      var confirm = window.confirm('Certain fields have not been filled.\nThey have been replaced with (.)\nCorrect now or later.');
      if (confirm == true) {       
        $("#loader").css("display", "block");
        this.VendorServices.addVendors(formObj).subscribe(
          response => {
            if (response != '') {         
            $("#loader").css("display", "none");
            alert("Welcome to VATS as New Vendor.\nCheck your email for further details.");
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
  }
}
