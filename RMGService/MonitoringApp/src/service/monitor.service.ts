import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {MonitorModel} from '../model/MonitorModel';


@Injectable()
export class MonitorService {
  private endpoint : string;
  private params : string;
    private headers: Headers;

  constructor(private _http: Http) {
      this.endpoint = 'http://localhost:8080/api/v1/report';
      this.params = null;
  }
  public  getmonitoringData(params : string ): Observable<MonitorModel> {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('token' , JSON.parse(localStorage.getItem('currentUser')).token);
      return this._http.post(this.endpoint, params, { headers : this.headers })
      .map((response : Response) => <MonitorModel>response.json());
    }

  private handleError(error : Response) {
    return Observable.throw( error.json().error || 'Server Error');
  }

  public set Params(value : string)
  {
      this.params = value;
  }
}

