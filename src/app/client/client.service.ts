import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: Http) { }

  public addClients(FormObj): Observable<any> {

    const url_Client = AppComponent.urlPath + 'clientm';
    const params = new URLSearchParams();

    params.set('ClientName', FormObj.ClientName);
    params.set('RegdAddressL1', FormObj.RegdAddressL1);
    params.set('Area', FormObj.Area);
    params.set('City', FormObj.City);
    params.set('PINCODE', FormObj.PINCODE);
    params.set('ClientPhoneNo', FormObj.ClientPhoneNo);
    params.set('ClientFaxNo', FormObj.ClientFaxNo);
    params.set('ClientMobileNo', FormObj.ClientMobileNo);
    params.set('ClientEMAILID', FormObj.ClientEMAILID);
    params.set('MainContact', FormObj.MainContact);
    params.set('MainContactDesgn', FormObj.MainContactDesgn);
    params.set('MainContactNo', FormObj.MainContactNo);
    params.set('MainContactEmailId', FormObj.MainContactEmailId);
    params.set('AltContact', FormObj.AltContact);
    params.set('AltContactDesgn', FormObj.AltContactDesgn);
    params.set('AltContactNo', FormObj.AltContactNo);
    params.set('AltContactEmailId', FormObj.AltContactEmailId);
    params.set('ClientCategory', FormObj.ClientCategory);
    params.set('ClientType', FormObj.ClientType);

    return this.http.post(url_Client, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public UpdateClients(FormObj,ClientId:any): Observable<any> {

    const url_Client = AppComponent.urlPath + 'EmgCProfileEdit';
    const params = new URLSearchParams();
 
    params.set('ClientID', ClientId);    
    params.set('RegdAddressL1', FormObj.RegdAddressL1);
    params.set('Area', FormObj.Area);
    params.set('City', FormObj.City);
    params.set('PINCODE', FormObj.PINCODE);
    params.set('ClientPhoneNo', FormObj.ClientPhoneNo);
    params.set('ClientFaxNo', FormObj.ClientFaxNo);
    params.set('ClientMobileNo', FormObj.ClientMobileNo);
    params.set('ClientEMAILID', FormObj.ClientEMAILID);
    params.set('MainContact', FormObj.MainContact);
    params.set('MainContactDesgn', FormObj.MainContactDesgn);
    params.set('MainContactNo', FormObj.MainContactNo);
    params.set('MainContactEmailId', FormObj.MainContactEmailId);
    params.set('AltContact', FormObj.AltContact);
    params.set('AltContactDesgn', FormObj.AltContactDesgn);
    params.set('AltContactNo', FormObj.AltContactNo);
    params.set('AltContactEmailId', FormObj.AltContactEmailId);
    params.set('ClientCategory', FormObj.ClientCategory);
    params.set('ClientType', FormObj.ClientType);
    params.set('ClientGSTNo', FormObj.ClientGSTNo);
    params.set('ClientLandMark', FormObj.ClientLandMark);
    params.set('MasterClientID', FormObj.MasterClientID);
    params.set('ClientGLCode', FormObj.ClientGLCode);
    
    return this.http.post(url_Client, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }

  public getLookupCity(): Observable<any> {

    const url_city = AppComponent.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'city');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }

}
