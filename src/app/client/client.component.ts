import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ClientService } from './client.service';
import { ClientprofileService } from '../clientprofile/clientprofile.service';
import { CommonService } from '../shared/services/common.service';
declare var $: any

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

  submitted = false;
  SignupClientForm: FormGroup;
  id:any;
  clientprofile :any;
  LoginClient=false;
  cityLookups:[];
  LookupCategory:[];
  LookupType:[];

  constructor(private ClientServices: ClientService,private CommonServices: CommonService,private ClientprofileServices: ClientprofileService,private formBuilderObj: FormBuilder,private routerObj: Router,private route: ActivatedRoute) {

    this.SignupClientForm = this.formBuilderObj.group({
      ClientName: ['', [Validators.required]],
      ClientShortName: [{value: '.', disabled: true}],
      RegdAddressL1: '.',
      Area: '.',
      City: '00',
      PINCODE:'.',
      ClientPhoneNo:'.',
      ClientFaxNo: '.',
      ClientMobileNo: '.',
      ClientEMAILID: '.',
      MainContact: '.',
      MainContactDesgn: '.',
      MainContactNo:'.',
      MainContactEmailId: '.',
      AltContact: '.',
      AltContactDesgn: '.',
      AltContactNo: '.',
      AltContactEmailId:'.',
      ClientCategory:'00',
      ClientType: '00' ,
      ClientGSTNo:'.',
      ClientLandMark:'.' ,
      ClientID: [{value: '', disabled: true}],
      MasterClientID:'.',
      ClientGLCode:'.'
    });    

    var userId = sessionStorage.getItem("uniqueSessionId");    
    var userName = sessionStorage.getItem("userName");   
    var USERCATEGORY = "C1"; 

    this.route.params.subscribe(params => {
      this.id = params['id'];     
    });

    if (userName && this.id!=0){  
      this.ClientprofileServices.getClientProfileDetails(this.id,"C1").subscribe(
        response => {
          if (response != "No data") {
            if (response == "Login Failed") {           
              alert ("Your given details are not existed.");
              this.routerObj.navigate(["/login"]);           
            }
            else {                     
              this.clientprofile = response;                      
              this.LoginClient=true;            
              this.SignupClientForm.controls['ClientName'].disable(); 
              this.SignupClientForm.patchValue({
                ClientID:this.clientprofile[0]['ClientID'],
                ClientName:this.clientprofile[0]['ClientName'],
                ClientShortName: this.clientprofile[0]['ClientShortName'],
                RegdAddressL1: this.clientprofile[0]['RegdAddressL1'], 
                Area: this.clientprofile[0]['Area'],
                City: this.clientprofile[0]['CityCode'],
                PINCODE:this.clientprofile[0]['PINCODE'],
                ClientPhoneNo:this.clientprofile[0]['ClientPhoneNo'],
                ClientFaxNo: this.clientprofile[0]['ClientFaxNo'],
                ClientMobileNo:this.clientprofile[0]['ClientMobileNo'] ,
                ClientEMAILID:this.clientprofile[0]['ClientEMAILID'],
                MainContact:this.clientprofile[0]['MainContact'] ,
                MainContactDesgn:this.clientprofile[0]['MainContactDesgn'],
                MainContactNo:this.clientprofile[0]['MainContactNo'],
                MainContactEmailId:this.clientprofile[0]['MainContactEmailId'],
                AltContact: this.clientprofile[0]['AltContact'],
                AltContactDesgn: this.clientprofile[0]['AltContactDesgn'],
                AltContactNo: this.clientprofile[0]['AltContactNo'],
                AltContactEmailId:this.clientprofile[0]['AltContactEmailId'],
                ClientCategory: this.clientprofile[0]['ClientCategoryCode'],
                ClientType:this.clientprofile[0]['ClientTypeCode'] ,
                ClientGSTNo:this.clientprofile[0]['ClientGSTNo'] ,
                ClientLandMark:this.clientprofile[0]['ClientLandMark'],
                MasterClientID:this.clientprofile[0]['MasterClientID'],
                ClientGLCode:this.clientprofile[0]['ClientGLCode']              
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
    this.getCLookupCategories();
    this.getCLookupTypes();
    
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
  getCLookupCategories() {
    this.CommonServices.getCLookupCategory().subscribe(
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

  getCLookupTypes() {
    this.CommonServices.getCLookupType().subscribe(
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

  get f() { return this.SignupClientForm.controls; }

  signUpClient(formObj) {

    const phoneControl = this.SignupClientForm.get('ClientMobileNo');

    if(this.SignupClientForm.get('ClientMobileNo').value != '.')
    {     
      this.SignupClientForm.get('ClientMobileNo').setValidators([Validators.minLength(10),       
        Validators.pattern("[0-9]*")]);      
      phoneControl.updateValueAndValidity();
    }

    const EmailControl = this.SignupClientForm.get('ClientEMAILID');
    if(this.SignupClientForm.get('ClientEMAILID').value != '.')
    {   
      this.SignupClientForm.get('ClientEMAILID').setValidators([Validators.pattern("[a-z A-Z,0-9,.,_]+@[a-z A-Z]+[.]+[a-z A-Z,.]+")]);      
      EmailControl.updateValueAndValidity();
    }

    const pincodeControl = this.SignupClientForm.get('PINCODE');
    if(this.SignupClientForm.get('PINCODE').value != '.')
    {    
      this.SignupClientForm.get('PINCODE').setValidators([Validators.pattern("[0-9]*")]);      
      pincodeControl.updateValueAndValidity();
    }

    this.submitted = true;
    if (this.SignupClientForm.invalid) {     
      return;
    }
    var userId = sessionStorage.getItem("uniqueSessionId");    
    var userName = sessionStorage.getItem("userName");

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (userName && this.id!=0){   
      
      var confirm = window.confirm('Do you want to update the Client details?');
      if (confirm == true) {       
        $("#loader").css("display", "block");
        this.ClientServices.UpdateClients(formObj,this.id).subscribe(
          response => {  
            if (response != "No data") {                 
              if (response == "Login Failed") {           
                alert ("Invalid login.");
                this.routerObj.navigate(["/login"]);           
            }          
            else {         
              $("#loader").css("display", "none");
              alert("Your Information updated successfully."); 
              this.routerObj.navigate(["/dashboard-client"]);             
            }
          }
            else{
              console.log('something is wrong with Service Execution');
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
        this.ClientServices.addClients(formObj).subscribe(
          response => {  
            if (response != "No data") {
              $("#loader").css("display", "none");                
              alert("Welcome to VATS as New Client.\nPlease check your email for further details.");
              this.routerObj.navigate(["/login"]);
            }
            else {         
              console.log('something is wrong with Service Execution');
            }
            
          },
          error => console.log("Error Occurd!")
        );
      }          
    }    
  }
}
