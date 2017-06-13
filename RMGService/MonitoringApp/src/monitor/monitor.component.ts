import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MessengerService } from '../service/messengerService';
import { MonitorService } from '../service/monitor.service';
import { MonitorModel } from '../model/MonitorModel';
import { ModelResult, StatusResult, BarChartModel } from '../model/FormattedModel';
import { NavbarService } from '../layout/navbar.service';

@Component({
  selector: 'rmg-monitor',
  providers: [MonitorService],
  templateUrl: './src/monitor/monitor.component1.html',
  styleUrls: ['./src/monitor/monitor.component.css']
})

export class MonitorComponent implements OnInit, OnDestroy {
  modelResult: ModelResult[];
  barchartModel: BarChartModel[];
  successResult: StatusResult[];
  failResult: StatusResult[];
  loading: boolean;
  message: any;
  messageSubscription: Subscription;
  private subscription: Subscription = new Subscription();
  private _monitorModel: MonitorModel;
  private param: string;
  private errorMessage: any;
  constructor(private _monitorService: MonitorService, private messageService: MessengerService,
   public nav: NavbarService  ) {
    this.message = '{"minutes":"3"}';
    this.nav.show();
    this.messageSubscription = this.messageService.getMessage().subscribe(message => {
      this.message = message.value;
    });
    this.param = '{"minutes":"3"}';
    this.modelResult = [];
    this.loading = true;
  }
  ngOnInit(): void {
    Observable.interval(1000 * 12).subscribe(x => { this.serviceCall(); });
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
      this.successResult = [];
      this.failResult = [];
      this.barchartModel = [];
      let x : number = 100;
      for (let code = 0; code < model.Result.length; code++) {
        if (model.Result[code]) {
          x = this.isVendorExist(this.modelResult, model.Result[code].Vendor);
            if (x !== 100) {
              this.modelResult[x].failedCount = model.Result[code].api.hits.total;
              this.failResult.push(<StatusResult>{
                vendor: model.Result[code].Vendor,
                count : model.Result[code].api.hits.total
              });
            } else {
              this.modelResult.push(<ModelResult>{
                vendor: model.Result[code].Vendor,
                successCount: model.Result[code].api.hits.total,
                failedCount: 0
              });
              this.successResult.push(<StatusResult>{
                vendor: model.Result[code].Vendor,
                count : model.Result[code].api.hits.total
              });
            }
        }
      }
      // prepare model for barchart.
      this.barchartModel = [{
        key: 'S',
        color: '#1f77b4',
        values : this.successResult
      },
      {
        key: 'F',
        color: '#d62728',
        values: this.failResult
      }];
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
      () => this.loading = false); // * onCompleted.
  }

  goldCategory(vendor: string) : boolean {
    if (vendor.toLocaleLowerCase() === 'storefeeder') {
      return true;
    } else { return false; }
  }

  public ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }
}
