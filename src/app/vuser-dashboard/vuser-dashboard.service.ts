import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VuserDashboardService {

  constructor(private http: Http) { }
  
  public getvendorUserList(userId:any): Observable<any> {

    const url_vendorUserList = AppComponent.urlPath + 'userdashboard';
    const params = new URLSearchParams();  

    params.set('userID', userId);    
    params.set('UserCategory','V');

    return this.http.post(url_vendorUserList, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
