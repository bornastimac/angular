import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IpretragaOglasa, Ioglasi} from './data';
import { Strings } from './strings';


@Injectable()
export class PretragaOglasaService {
//private pretragaUrl = "http://jimsrv.no-ip.info/InProfesa2/api/PretragaOglasa";

private pretragaUrl ="http://" + Strings.domainAndPort + "/api/AdSearch";

 constructor(private http: Http) { }

  getPretragaOglasaResponse(forBody:IpretragaOglasa): Observable<Ioglasi>
  {
     let body = forBody;
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
     let options = new RequestOptions({ headers: headers });
     let response : Observable<Response>  = this.http.post(this.pretragaUrl, body, options);
    return response.map(res => res.json());
    }
}
