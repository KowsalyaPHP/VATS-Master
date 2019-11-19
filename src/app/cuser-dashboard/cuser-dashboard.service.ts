import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CuserDashboardService {

  constructor(private http: Http) { }
  
  public getClientUserList(): Observable<any> {

    const url_userlist = AppComponent.urlPath + 'userdashboard';
    const params = new URLSearchParams();  

    params.set('UserCategory',sessionStorage.getItem('USERCATEGORY'));
    params.set('userid',sessionStorage.getItem('uniqueSessionId'));

    return this.http.post(url_userlist, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
