import {
  Component, OnChanges, OnInit, AfterViewInit,
  Input, ViewChild, SimpleChanges
} from '@angular/core';
import { ModelResult } from '../model/FormattedModel';
import { nvD3 } from 'ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'rmg-piechart',
  entryComponents: [nvD3],
  template: `<div> <nvd3 [options]="options" [data]="responseCodes"></nvd3></div>`
})

export class Dashboard implements OnInit, OnChanges, AfterViewInit {
  options;
  data;
  @Input() chartData: ModelResult[];
  responseCodes: ModelResult[];
  @ViewChild(nvD3)
  nvD3: nvD3;

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
        x: function (d) { return d.vendor; },
        y: function (d) { return d.successCount; },
        showValues: true,
        showLabels: true,     //Display pie labels
        labelThreshold: 0.001,  //Configure the minimum slice size for labels to show up
        labelType: 'percent', // Can be "key", "value" or "percent"
        donut: true,          //Turn on Donut mode. Makes pie chart look tasty!
        donutRatio: 0.35, //Configure how big you want the donut hole size to be.
        valueFormat: function (d) {
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

  ngAfterViewInit() {
    //to update the chart .
    this.nvD3.chart.update();
  }
}
