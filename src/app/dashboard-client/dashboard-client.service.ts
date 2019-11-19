import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardClientService {
  constructor(private http: Http) { }
  
  public getClientList(): Observable<any> {

    const url_clientlist = AppComponent.urlPath + 'EmgDashboard';
    const params = new URLSearchParams();  
    params.set('usercategory', 'C');

    return this.http.post(url_clientlist, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
