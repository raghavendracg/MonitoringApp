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
  constructor(private _http: Http) {
      this.endpoint = 'http://localhost:8080/api/report';
      
  }
 /*public getmonitoringData = (): Observable<MonitorModel> => {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
      return this._http.post(this.endpoint, this.params, {headers : this.headers}).
      map(res => res.json());
  }*/
 public  getmonitoringData(param) {
    return Observable.interval(2000).switchMap(() => {
        return this._http.post(this.endpoint, param, { headers: contentHeaders })
        .map(response => <MonitorModel> response.json());
    }).takeWhile(data => data === null);
 }
 
}

