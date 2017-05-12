import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {MonitorService} from '../service/monitor.service';
import {MonitorModel} from '../model/MonitorModel';
import {MasterDataModel} from '../model/MasterDataModel' ;

@Component({
  selector: 'app-monitor',
  providers: [MonitorService],
  templateUrl: './src/monitor/monitor.component.html',
  styleUrls: ['./src/monitor/monitor.component.css']
})

export class MonitorComponent implements OnInit {

  masterData = [
     new MasterDataModel('5 Mins', '{"minutes":"5"}'),
     new MasterDataModel('15 Mins', '{"minutes":"15"}'),
     new MasterDataModel('1 Hour', '{"hours":"1"}'),
     new MasterDataModel('5 Hours', '{"hours":"5"}'),
     new MasterDataModel('1 Day', '{"days":"1"}'),
     new MasterDataModel('10 Days', '{"days":"10"}')
  ];
  private _monitorModel : MonitorModel;
  //passing real time data.
  private param : string;
  constructor(private _monitorService: MonitorService) {
    this.param = '{"days":"10"}';
  }

  ngOnInit() {
    this._monitorService.Params = this.param;
    this._monitorService.getmonitoringData().subscribe
    (
      data => { console.log(this._monitorModel); this._monitorModel = data; },
      error => this.handleError(error)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    
    }

  changeInSelect() {
    this._monitorService.Params = this.param;
    this._monitorService.getmonitoringData().subscribe(
      data => { console.log(this._monitorModel); this._monitorModel = data; },
      error => this.handleError(error)
    );
  }
  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

