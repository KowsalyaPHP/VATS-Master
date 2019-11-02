import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  submitted = false;
  SignupForm: FormGroup;

  constructor(private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.SignupForm = this.formBuilderObj.group({
      //ClientID: [{value: 'Auto Generated Code', disabled: true}, Validators.required],
      ClientName: ['', [Validators.required, Validators.minLength(6)]],
      ClientShortName: '',
      RegdAddressL1: ['', Validators.required],
      Area: ['', Validators.required],
      City: ['', Validators.required],
      PINCODE: ['', Validators.required],
      ClientPhoneNo: ['', Validators.required],
      ClientFaxNo: '',
      ClientMobileNo: '',
      ClientEMAILID: ['', Validators.required],
     // ClientGSTNo: ['', Validators.required],
     // ClientLandMark: '',
      MainContact: ['', Validators.required],
      MainContactDesgn: '',
      MainContactNo:'',
      MainContactEmailId: '',
      AltContact: ['', Validators.required],
      AltContactDesgn: '',
      AltContactNo: '',
      AltContactEmailId:'',
     // ClientStatus: ['', Validators.required],
      ClientCategory: ['', Validators.required],
      ClientType: ['', Validators.required],
      MasterClientID: '',
      ClientGLCode:''
    });
   }

  ngOnInit() {
  }

}
