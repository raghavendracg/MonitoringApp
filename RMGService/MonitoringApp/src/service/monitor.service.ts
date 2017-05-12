import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {MonitorModel} from '../model/MonitorModel';

@Injectable()
export class MonitorService {
    private headers: Headers;
    private params : string;
    private endpoint : string;

  constructor(private _http: Http) {
      this.endpoint = 'http://localhost:8080/api/report';
      this.params = null;
  }
 public getmonitoringData = (): Observable<MonitorModel> => {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
      return this._http.post(this.endpoint, this.params, {headers : this.headers}).
      map(res => res.json());
  }

  public set Params(value : string) {
      this.params = value;
  }
}

