import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MessengerService } from '../service/messengerService';
import { MonitorService } from '../service/monitor.service';
import { MonitorModel } from '../model/MonitorModel';
import { ModelResult } from '../model/FormattedModel';

@Component({
  selector: 'app-monitor',
  providers: [MonitorService],
  templateUrl: './src/monitor/monitor.component.html',
  styleUrls: ['./src/monitor/monitor.component.css']
})

export class MonitorComponent implements OnInit, OnDestroy {
  modelResult: ModelResult[];
  isLoading: boolean = true;
  message: any;
  messageSubscription: Subscription;
  private subscription: Subscription = new Subscription();
  private _monitorModel: MonitorModel;
  //passing real time data.
  private param: string;
  private errorMessage: any;
  constructor(private _monitorService: MonitorService, private messageService: MessengerService) {
    this.message = '{"minutes":"3"}';
    this.messageSubscription = this.messageService.getMessage().subscribe(message => {
      this.message = message.value;
    });
    this.param = '{"minutes":"3"}';
    this.modelResult = [];
  }
  ngOnInit(): void {
    Observable.interval(1000 * 12).subscribe(x => { this.serviceCall(); });
    //setInterval(function(){ this.serviceCall();}, 120000);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
    if (this.param !== this.message) {
      this.param = this.message;
    }
  }

  getFormattedResult(model: MonitorModel) {
    if (model) {
      this.modelResult = [];
      let x : number = 100;
      for (let code = 0; code < model.Result.length; code++) {
        if (model.Result[code]) {
          x = this.isVendorExist(this.modelResult, model.Result[code].Vendor);
            if (x !== 100) {
              this.modelResult[x].failedCount = model.Result[code].api.hits.total;
            } else {
              this.modelResult.push(<ModelResult>{
                vendor: model.Result[code].Vendor,
                successCount: model.Result[code].api.hits.total,
                failedCount: 0
              });
            }
        }
      }
    }
  }

  isVendorExist(arr: ModelResult[], vendor: string) : number {
    let index: number = 100;
    if (arr.length > 0) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].vendor.toLocaleLowerCase() === vendor.toLocaleLowerCase()) {
          index = j;
          return index;
        }
      }
    }
    return index;
  }

  serviceCall() {
    this._monitorService.getmonitoringData(this.param).subscribe(model => {
      this._monitorModel = model;
      this.getFormattedResult(this._monitorModel);
    },
      error => this.errorMessage = error, // *error path.
      () => this.isLoading = false); // * onCompleted.
  }

  public ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
    //this.subscription.unsubscribe();
  }
}
