import { Injectable } from '@angular/core';
import {IKontakt } from './data';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Strings } from './strings';

@Injectable()
export class KontaktService {

  constructor(private http: Http) { }
private kontaktUrl ="http://" + Strings.domainAndPort + "/api/ContactUs";

  getKontaktResponse(poruka : IKontakt): Observable<any>
  {
     let body = {Name: poruka.Name, Email: poruka.Email, Text: poruka.Text};
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.kontaktUrl, body, options)                               
    .map(res => res.json());
    }

}
