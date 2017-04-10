import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IpredajaOglasa } from './data';
import { Strings } from './strings';


@Injectable()
export class PredajaOglasaService {
 
 private predajaUrl ="http://" + Strings.domainAndPort + "/api/AdPost";

  constructor(private http: Http) { }

  getPredajaOglasaResponse(oglas: IpredajaOglasa): Observable<any> {
    let body = oglas;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.predajaUrl, body, options)
      .map(res => res.json());

  }
}