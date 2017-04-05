import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Strings} from './strings';

@Injectable()
export class RegistracijaService {
  private registracijaFizickaUrl ="http://" + Strings.domainAndPort + "/api/Register/Person";
  private registracijaPravnaUrl ="http://" + Strings.domainAndPort + "/api/Register/Company";
  
  private data ;
  constructor(private http: Http) { }

  getRegistracijaFizickaResponse(forBody): Observable<any> {
     let body = forBody;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.registracijaFizickaUrl, body, options)
      .map(res => res.json());
  }
   getRegistracijaPravnaResponse(forBody): Observable<any> {
     let body = forBody;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.registracijaPravnaUrl, body, options)
      .map(res => res.json());
  }
}
