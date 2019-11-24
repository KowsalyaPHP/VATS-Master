import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VuserprofileService {

  constructor(private http: Http) { }

  public getVuserProfileDetails(userId:any): Observable<any> {

    const url_get = AppComponent.urlPath + 'userprofile';
    const params = new URLSearchParams();   
   
    params.set('userID', userId);
    params.set('usercategory','V');
   
    return this.http.post(url_get, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
