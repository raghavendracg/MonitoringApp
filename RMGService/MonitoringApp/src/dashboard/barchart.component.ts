import {
    Component, OnChanges, OnInit, AfterViewInit,
    Input, ViewChild, SimpleChanges
} from '@angular/core';
import { BarChartModel } from '../model/FormattedModel';
import { nvD3 } from 'ng2-nvd3';
declare let d3: any;

@Component({
    selector: 'model-chart',
    entryComponents: [nvD3],
    template: `<div><nvd3 [options]='options' [data]='responseCodes'></nvd3></div>`
})

export class BarChartMonitor {
    options;
    data;
    @Input() chartData: BarChartModel[];
    responseCodes: BarChartModel[];
    @ViewChild(nvD3)
    nvD3: nvD3;

    constructor() { }
    ngOnInit() {
        this.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 350,
                margin: {
                    top: 30,
                    right: 30,
                    bottom: 40,
                    left: 75
                },
                position: 'relative',
                x: function (d) { return d.vendor; },
                y: function (d) { return d.count; },
                showControls: true,
                showValues: false,
                tooltips: true,
                transitionDuration: 300,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Success vs Failure',
                    tickFormat: function (d) {
                        return d3.format(',.0d')(d);
                    }
                }
            }
        };
    }

    ngOnChanges(changes: SimpleChanges) {
        // only run when property 'data' changed.
        if (changes['chartData']) {
            this.responseCodes = this.chartData;
        }
    }

    ngAfterViewInit() {
        //to update the chart according to container .       
        this.nvD3.chart.update();
    }

    // Test Data Sample for Multibarchart 
    /*let data = [
               {
                   'key': 'S',
                   'color': '#1f77b4',
                   'values': [
                       {
                           'label': 'Amazon',
                           'value': 5
                       },
                       {
                           'label': 'SFeeder',
                           'value': 26
                       },
                       {
                           'label': 'Ebay',
                           'value': 65
                       },
                       {
                           'label': 'PayPal',
                           'value': 11
                       },
                       {
                           'label': 'StubHub',
                           'value': 1
                       }
                   ]
               },
               {
                   'key': 'F',
                   'color': '#d62728',
                   'values': [
                       {
                           'label': 'Amazon',
                           'value': 0
                       },
                       {
                           'label': 'SFeeder',
                           'value': 1
                       },
                       {
                           'label': 'Ebay',
                           'value': 0
                       },
                       {
                           'label': 'PayPal',
                           'value': 1
                       },
                       {
                           'label': 'StubHub',
                           'value': 10
                       }
                   ]
               }
           ];*/
}
