import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Strings } from './strings';

@Injectable()
export class PrikazProfilaService {
private profileUrl ="http://" + Strings.domainAndPort + "/api/View/Profile";

  constructor(private http: Http) { }

  getProfilResponse(username): Observable<any> {
     let body = {UserName: username};
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.profileUrl, body, options)                               
    .map(res => res.json());
  }
}
