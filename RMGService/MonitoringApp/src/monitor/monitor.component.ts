import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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

export class MonitorComponent implements OnInit, OnDestroy  {
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
  private subscription: Subscription = new Subscription();
  private _monitorModel : MonitorModel;
  //passing real time data.
  private param : string;
  private errorMessage : any;
  constructor(private _monitorService: MonitorService) {
    this.param = '{"days":"10"}';
    this.results = [];
    this.successData = [];
    this.failedDated = [];
  }

  ngOnInit(): void {
    this.subscription.add(this.serviceCall());
  }

  ngOnChanges(changes: SimpleChanges) { }
  
  changeInSelect() {
   this.serviceCall();
  // this.getFormattedResult();
  }

  getFormattedResult(model: MonitorModel) {
    if (model !== undefined) {
     this.results = [];
     this.successData = [];
     this.failedDated = [];
     let counter = 0;
   

    for (let code = 0; code < model.aggregations.words.buckets.length; code++) {
      if (model.aggregations.words.buckets[code].responsecodes.buckets.length === 1) {
        this.results[counter] = <ResponseCollection> {
          name: model.aggregations.words.buckets[code].key,
          status:  model.aggregations.words.buckets[code].responsecodes.buckets[0].key,
          count: model.aggregations.words.buckets[code].responsecodes.buckets[0].doc_count
        };
        counter++;
      }
      else {
        for (let x = 0; x < model.aggregations.words.buckets[code].responsecodes.buckets.length; x++) {
           this.results[counter] = <ResponseCollection> {
           name: model.aggregations.words.buckets[code].key,
           status:  model.aggregations.words.buckets[code].responsecodes.buckets[x].key,
           count: model.aggregations.words.buckets[code].responsecodes.buckets[x].doc_count
          };
          counter++;
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
  }
}

  serviceCall() {
    this._monitorService.getmonitoringData(this.param).subscribe(model => {
      console.log(model);
      this.getFormattedResult(model);
      this._monitorModel = model;
    },
      error => this.errorMessage = error);
    }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }*/
}

