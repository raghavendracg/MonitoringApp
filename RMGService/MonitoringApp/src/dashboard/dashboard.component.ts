import {Component, OnChanges, OnInit, AfterViewInit,
  Input, ViewChild, SimpleChanges} from '@angular/core';
import {Bucket, Bucket2} from '../model/MonitorModel';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'app-chart',
  entryComponents: [nvD3],
  template: `<div> <nvd3 [options]="options" [data]="responseCodes"></nvd3></div>`
})

export class Dashboard implements OnInit, OnChanges, AfterViewInit {
  options;
  data;
  @Input() bucketCollection: Bucket2[];

  responseCodes : Bucket2[];
  @ViewChild(nvD3)
  nvD3: nvD3;

  constructor() {  }
ngOnInit() {
  this.options = {
      chart: {
        type: 'pieChart',
        height: 350,
        margin : {
          top: 5,
          right: 15,
          bottom: 5,
          left: 0
        },
        x: function(d) { return d.key; },
        y: function(d) { return d.doc_count; },
        showValues: true,
        showLabels: true,     //Display pie labels
        labelThreshold: 0.05,  //Configure the minimum slice size for labels to show up
        labelType: 'percent', // Can be "key", "value" or "percent"
        donut: true,          //Turn on Donut mode. Makes pie chart look tasty!
        donutRatio: 0.35, //Configure how big you want the donut hole size to be.
        valueFormat: function(d){
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
    if (changes['bucketCollection']) {
      this.responseCodes = this.bucketCollection;
    }
  }

  ngAfterViewInit() {
    //  to update the chart .
   // this.nvD3.chart.update();   
  }
}
