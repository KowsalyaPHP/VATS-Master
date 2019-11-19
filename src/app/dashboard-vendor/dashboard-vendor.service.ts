import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class DashboardVendorService {

  constructor(private http: Http) { }
  
  public getVendorList(): Observable<any> {

    const url_vendorlist = AppComponent.urlPath + 'EmgDashboard';
    const params = new URLSearchParams();  
    params.set('usercategory', 'V');

    return this.http.post(url_vendorlist, params)
      .map(response => response.json()['Detail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
