import {
    Component, OnChanges, OnInit, AfterViewInit,
    Input, ViewChild, SimpleChanges
} from '@angular/core';
import { BarChartModel } from '../model/FormattedModel';
import { NvD3Module } from 'angular2-nvd3';
declare let d3: any;

@Component({
    selector: 'rmg-barchart',
    template: `<div><app-nvd3 [options]='options' [data]='responseCodes'></app-nvd3></div>`
})

export class BarChartMonitor {
    options: any;
    data: any;
    @Input() chartData: BarChartModel[];
    responseCodes: BarChartModel[];
    @ViewChild(NvD3Module)
    NvD3Module: NvD3Module;

    constructor() { }
    ngOnInit() {
        this.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 350,
                margin: {
                    top: 35,
                    right: 15,
                    bottom: 40,
                    left: 75
                },
                position: 'relative',
                x: function (d: any) { return d.vendor; },
                y: function (d: any) { return d.count; },
                showControls: true,
                controlsPosition: 'bottom',
                showValues: false,
                tooltips: true,
                transitionDuration: 300,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Success vs Failure',
                    tickFormat: function (d: any) {
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
       // this.NvD3Module.chart.update();
    }

 
}
