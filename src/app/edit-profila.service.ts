import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Strings } from './strings';

@Injectable()
export class EditProfilaService {
  private updateProfilaUrl = "http://" + Strings.domainAndPort + "/api/Update/Profile";//api link
  private data;
  constructor(private http: Http) { }

  getEditProfilaResponse(forBody): Observable<any> {
    let body = forBody;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.updateProfilaUrl, body, options)
      .map(res => res.json());
  }
}
