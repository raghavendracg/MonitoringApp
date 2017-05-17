import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeWhile';
import {MonitorModel} from '../model/MonitorModel';
import { contentHeaders } from '../common/headers';

@Injectable()
export class MonitorService {
  private endpoint : string;
  private params : string;
  constructor(private _http: Http) {
      this.endpoint = 'http://localhost:8765/api/v1/report';
      this.params = null;
  }
  public  getmonitoringData() {
      return this._http.post(this.endpoint, this.params, {headers : contentHeaders})
                  .map(res => res.json());
    /*return Observable.interval(2000).switchMap(() => {
        return this._http.post(this.endpoint, param, { headers: contentHeaders })
        .map(response => <MonitorModel> response.json());
    }).takeWhile(data => data === null);*/
 }

  public set Params(value : string)
  {
      this.params = value;
  }
}

