import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ILogin, ILogout, IUser } from './data';
import { Strings } from './strings';


@Injectable()
export class LoginService {
private loginUrl ="http://" + Strings.domainAndPort + "/api/Login";
private logoutUrl ="http://" + Strings.domainAndPort + "/api/Logout";

 constructor(private http: Http) { }

  getLoginResponse(user: IUser): Observable<any>
  {
     let body = {Username: user.username, Password: user.password};
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl, body, options)                               
    .map(res => res.json());
  }
  
  getLogoutResponse(user: IUser): Observable<ILogout>
  {
     let body = {LogoutUser: user.username};
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.logoutUrl, body, options)                               
    .map(res => res.json());
  }
}
