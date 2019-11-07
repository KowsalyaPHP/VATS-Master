import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  public LoginUser(FormObj): Observable<any> {

    const url_login = AppComponent.urlPath + 'signin';
    const params = new URLSearchParams();

    params.set('Group',FormObj.loginAs);
    params.set('userid', FormObj.username);
    params.set('password', FormObj.password);
    // params.set('userid', FormObj.username);
  //  params.set('password', FormObj.password);
   
    return this.http.post(url_login, params)
      .map(response => response.json()).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }

}
