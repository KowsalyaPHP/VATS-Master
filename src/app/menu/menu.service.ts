import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: Http) { }

  public getMenuList(): Observable<any> {

    const url_login = AppComponent.urlPath + 'signin';
    const params = new URLSearchParams();
    let userID = sessionStorage.getItem('userID');
    let password = sessionStorage.getItem('password');
   
    params.set('userID', userID);
    params.set('password', password);
   
    return this.http.post(url_login, params)
      .map(response => response.json()['UserRoleBasedMenudetail']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
