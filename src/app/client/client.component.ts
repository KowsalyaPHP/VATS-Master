import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  submitted = false;
  SignupClientForm: FormGroup;

  constructor(private ClientServices: ClientService,private formBuilderObj: FormBuilder,private routerObj: Router) {
    this.SignupClientForm = this.formBuilderObj.group({
      ClientName: ['', [Validators.required, Validators.minLength(6)]],
      ClientShortName: [{value: '', disabled: true}],
      RegdAddressL1: ['', Validators.required],
      Area: ['', Validators.required],
      City: ['', Validators.required],
      PINCODE: ['',[Validators.required,
                Validators.pattern("[0-9]*[' '-]*[(]*[0-9]*[)-]*[' '-]*[0-9]*[' '-]*[0-9]*[' '-]*[0-9]*"),
                Validators.minLength(6)]],
      ClientPhoneNo: ['',[Validators.required,
                      Validators.minLength(10),
                      Validators.maxLength(14),
                      Validators.pattern("[0-9]*[' '-]*[(]*[0-9]*[)-]*[' '-]*[0-9]*[' '-]*[0-9]*[' '-]*[0-9]*")]],
      ClientFaxNo: '',
      ClientMobileNo: '',
      ClientEMAILID: ['', [Validators.required, Validators.pattern("[a-z A-Z,0-9,.,_]+@[a-z A-Z]+[.]+[a-z A-Z,.]+")]],
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
      //ClientGLCode:''
    });
   }

  ngOnInit() {
  }
  get f() { return this.SignupClientForm.controls; }

  signUpClient(formObj) {
    this.submitted = true;
    if (this.SignupClientForm.invalid) {
        return;
    }
    this.ClientServices.addClients(formObj).subscribe(
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
