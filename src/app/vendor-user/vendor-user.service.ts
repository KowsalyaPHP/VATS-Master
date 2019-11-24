import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VendorUserService {

  constructor(private http: Http) { }

  public addVendorUsers(FormObj,UserId:any): Observable<any> {

    const url_user = AppComponent.urlPath + 'Addusers';
    const params = new URLSearchParams();

    params.set('UserCategory','V');
    params.set('RefId',UserId);
    params.set('UserMrMs', FormObj.UserMrMs);
    params.set('UserName', FormObj.UserName);
    params.set('UserRemarks', FormObj.UserRemarks);
    params.set('UserEmail', FormObj.UserEmail);
    params.set('UserContactNo', FormObj.UserContactNo);

    return this.http.post(url_user, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public updateVendorUsers(FormObj,UserId:any): Observable<any> {

    const url_user = AppComponent.urlPath + 'EmgVUserProfileEdit';
    const params = new URLSearchParams();

    params.set('USERID', UserId);
    params.set('LEVEL', FormObj.UserRoles);
    params.set('USERMRMS', FormObj.UserMrMs);
    params.set('USERNAME', FormObj.UserName);
    params.set('STATUS', FormObj.UserStatus);
    params.set('Remarks', FormObj.UserRemarks);
    params.set('UserEmail', FormObj.UserEmail);  
    params.set('UserContactNo', FormObj.UserContactNo);

    return this.http.post(url_user, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  
}
