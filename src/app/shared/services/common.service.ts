import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  urlPath = "http://bincrm.com/vatsdev/";

  constructor(private http: Http) { 

  }
  public getLookupCity(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'city');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public getCLookupCategory(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'CCAT');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public getCLookupType(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'CTYPE');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }

  public getVLookupCategory(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'VCAT');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public getVLookupType(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'VTYPE');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public getVLookupExpertise(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'VExpert');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
  public getVLookupStatus(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'VSTATUS');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }

  public getCLookupStatus(): Observable<any> {

    const url_city = this.urlPath + 'lkup';
    const params = new URLSearchParams();
 
    params.set('lkup', 'CSTATUS');    
    return this.http.post(url_city, params)
      .map(response => response.json()['Message']).map(data => {
        if (data != '')
          return data;
        else
          return '';
      });
  }
}
