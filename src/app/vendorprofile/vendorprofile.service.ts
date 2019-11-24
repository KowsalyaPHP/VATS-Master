import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VendorprofileService {

  constructor(private http: Http) { }

  public getVendorProfileDetails(userId:any,usercategory:any): Observable<any> {

    const url_get = AppComponent.urlPath + 'EmgCVProfile';
    const params = new URLSearchParams();   
 
    params.set('userID', userId);
    params.set('usercategory', usercategory);
   
    return this.http.post(url_get, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
