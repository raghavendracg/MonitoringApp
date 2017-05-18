import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
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
  public  getmonitoringData(params : string ): Observable<MonitorModel> {
      return this._http.post(this.endpoint, params, { headers : contentHeaders } )
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

