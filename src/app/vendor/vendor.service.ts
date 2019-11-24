import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: Http) { }

  
  public addVendors(FormObj): Observable<any> {

    const url_vendor = AppComponent.urlPath + 'vendorm';
    const params = new URLSearchParams();

    params.set('VendorName', FormObj.VendorName);
    params.set('RegdAddressL1', FormObj.RegdAddressL1);
    params.set('Area', FormObj.Area);
    params.set('City', FormObj.City);
    params.set('PINCODE', FormObj.PINCODE);
    params.set('VendorPhoneNo', FormObj.VendorPhoneNo);
    params.set('VendorFaxNo', FormObj.VendorFaxNo);
    params.set('VendorMobileNo', FormObj.VendorMobileNo);
    params.set('VendorEMAILID', FormObj.VendorEMAILID);
    params.set('MainContact', FormObj.MainContact);
    params.set('MainContactDesgn', FormObj.MainContactDesgn);
    params.set('MainContactNo', FormObj.MainContactNo);
    params.set('MainContactEmailId', FormObj.MainContactEmailId);
    params.set('AltContact', FormObj.AltContact);
    params.set('AltContactDesgn', FormObj.AltContactDesgn);
    params.set('AltContactNo', FormObj.AltContactNo);
    params.set('AltContactEmailId', FormObj.AltContactEmailId);
    params.set('TeamSize', FormObj.TeamSize);
    params.set('AllowedUserCt', FormObj.AllowedUserCt);
    params.set('ConcurrentUserCt', FormObj.ConcurrentUserCt);
    //params.set('CommonPoolYorN', FormObj.CommonPoolYorN);
   // params.set('OwnPoolPermitYorN', FormObj.OwnPoolPermitYorN);
   // params.set('AdminRightsYorN', FormObj.AdminRightsYorN);
   params.set('CommonPoolYorN', '0');
   params.set('OwnPoolPermitYorN', '0');
   params.set('AdminRightsYorN', '1');

    return this.http.post(url_vendor, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }

  public UpdateVendors(FormObj,VendorId:any): Observable<any> {

    const url_Vendor = AppComponent.urlPath + 'EmgVProfileEdit';
    const params = new URLSearchParams();
   
    params.set('VendorID', VendorId);    
    params.set('RegdAddressL1', FormObj.RegdAddressL1);
    params.set('Area', FormObj.Area);
    params.set('City', FormObj.City);
    params.set('PINCODE', FormObj.PINCODE);
    params.set('VendorPhoneNo', FormObj.VendorPhoneNo);
    params.set('VendorFaxNo', FormObj.VendorFaxNo);
    params.set('VendorGSTNo', FormObj.VendorGSTNo);
    params.set('VendorLandMark', FormObj.VendorLandMark);
    params.set('VendorMobileNo', FormObj.VendorMobileNo);
    params.set('VendorEMAILID', FormObj.VendorEMAILID);
    params.set('MainContact', FormObj.MainContact);
    params.set('MainContactDesgn', FormObj.MainContactDesgn);
    params.set('MainContactNo', FormObj.MainContactNo);
    params.set('MainContactEmailId', FormObj.MainContactEmailId);
    params.set('AltContact', FormObj.AltContact);
    params.set('AltContactDesgn', FormObj.AltContactDesgn);
    params.set('AltContactNo', FormObj.AltContactNo);
    params.set('AltContactEmailId', FormObj.AltContactEmailId);
    params.set('VendorTier', FormObj.VendorTier);
    params.set('VendorExpertise', FormObj.VendorExpertise);
    params.set('VendorType', FormObj.VendorType);
    params.set('TeamSize', FormObj.TeamSize);
    params.set('VendorGLCode', FormObj.VendorGLCode);
    params.set('AllowedUserCt', FormObj.AllowedUserCt);
    params.set('ConcurrentUserCt', FormObj.ConcurrentUserCt);
    params.set('CommonPoolYorN', FormObj.CommonPoolYorN);
    params.set('OwnPoolPermitYorN', FormObj.OwnPoolPermitYorN);
    params.set('AdminRightsYorN', FormObj.AdminRightsYorN);
    console.log(params);
    return this.http.post(url_Vendor, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }  
}
