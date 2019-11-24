import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteditUserService {

  constructor(private http: Http) { }
  public updateClientUsers(FormObj,UserId:any): Observable<any> {

    const url_user = AppComponent.urlPath + 'EmgCUserProfileEdit';
    const params = new URLSearchParams();
    console.log(FormObj);

    params.set('USERID', UserId);
    params.set('UserMrMs', FormObj.UserMrMs);
    params.set('UserName', FormObj.UserName);
    params.set('Remarks', FormObj.UserRemarks);
    params.set('UserEmail', FormObj.UserEmail);
    params.set('Level', FormObj.UserRoles);
    params.set('Status', FormObj.UserStatus);
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
