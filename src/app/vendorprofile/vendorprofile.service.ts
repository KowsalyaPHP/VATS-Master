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

  public getVendorProfileDetails(): Observable<any> {

    const url_get = AppComponent.urlPath + 'EmgCVProfile';
    const params = new URLSearchParams();   
    var userId = sessionStorage.getItem("uniqueSessionId"); 
    params.set('userID', userId);
    params.set('usercategory', 'V1');
   
    return this.http.post(url_get, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
