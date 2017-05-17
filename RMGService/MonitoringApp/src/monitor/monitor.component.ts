import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {MonitorService} from '../service/monitor.service';
import {MonitorModel, Bucket2} from '../model/MonitorModel';
import {MasterDataModel} from '../model/MasterDataModel' ;
import {ResponseCollection} from '../model/FormattedModel';

@Component({
  selector: 'app-monitor',
  providers: [MonitorService],
  templateUrl: './src/monitor/monitor.component.html',
  styleUrls: ['./src/monitor/monitor.component.css']
})

export class MonitorComponent implements OnInit {
 results : ResponseCollection[];
 successData : Bucket2[];
 failedDated : Bucket2[];

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
    this.results = [];
    this.successData = [];
    this.failedDated = [];
  }

  ngOnInit() {
    this.serviceCall();    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['this._monitorModel']) {
      this.getFormattedResult();
    }    
  }

  changeInSelect() {
   this.serviceCall();   
  }

  getFormattedResult() {
    if (this._monitorModel !== undefined) {
     this.results = [];
     this.successData = [];
     this.failedDated = [];

    for (let code = 0; code < this._monitorModel.aggregations.words.buckets.length; code++) {
      if (this._monitorModel.aggregations.words.buckets[code].responsecodes.buckets.length === 1){
        this.results[code] = <ResponseCollection> {
          name: this._monitorModel.aggregations.words.buckets[code].key,
          status:  this._monitorModel.aggregations.words.buckets[code].responsecodes.buckets[0].key,
          count: this._monitorModel.aggregations.words.buckets[code].responsecodes.buckets[0].doc_count
        };
      }
      else {
        for (let x = 0; x < this._monitorModel.aggregations.words.buckets[code].responsecodes.buckets.length; x++) {
          this.results[code + x] = <ResponseCollection> {
           name: this._monitorModel.aggregations.words.buckets[code].key,
           status:  this._monitorModel.aggregations.words.buckets[code].responsecodes.buckets[x].key,
           count: this._monitorModel.aggregations.words.buckets[code].responsecodes.buckets[x].doc_count
          };
        }
      }
    }
    console.log ('FormattedResult*=>', this.results);
    for (let res of this.results){
      if (res.status === '200') {
        this.successData.push (<Bucket2> { key: res.name , doc_count: res.count });
      }
      else {
        this.failedDated.push (<Bucket2> {key: res.name , doc_count: res.count});
      }
    }
    console.log ('successResult*=>', this.successData);
    console.log ('failedResult*=>', this.failedDated);
   }
  }

  serviceCall() {    
    this._monitorService.getmonitoringData(this.param).subscribe(
      data => {
        console.log(this._monitorModel);
        this.getFormattedResult();
         this._monitorModel = data;},
      error => this.handleError(error)
    );
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

