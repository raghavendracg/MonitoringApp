import {
  Component, OnChanges, OnInit,
  Input, ViewChild, SimpleChanges
} from '@angular/core';
import { ModelResult } from '../model/FormattedModel';
import { NvD3Module } from 'angular2-nvd3';
declare let d3: any;

@Component({
  selector: 'rmg-piechart',
  template: `<div> <app-nvd3 [options]="options" [data]="responseCodes"></app-nvd3></div>`
})

export class Dashboard implements OnInit, OnChanges {
  options: any;
  data: any;
  @Input() chartData: ModelResult[];
  responseCodes: ModelResult[];
  @ViewChild(NvD3Module) NvD3Module: NvD3Module;

  constructor() { }
  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 300,
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        },
        position: 'relative',
        x: function (d: any) { return d.vendor; },
        y: function (d: any) { return d.successCount; },
        showValues: true,
        showLabels: true,     //Display pie labels
        labelThreshold: 0.001,  //Configure the minimum slice size for labels to show up
        labelType: 'percent', // Can be "key", "value" or "percent"
        donut: true,          //Turn on Donut mode. Makes pie chart look tasty!
        donutRatio: 0.35, //Configure how big you want the donut hole size to be.
        valueFormat: function (d: any) {
          return d3.format(',.4d')(d);
        },
        duration: 300,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed.
    if (changes['chartData']) {
      this.responseCodes = this.chartData;
    }
  } 
}
