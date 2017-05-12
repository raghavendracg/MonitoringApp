import { Component, NgModule,Input,Output,EventEmitter } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {FormsModule}  from '@angular/Forms';


enableProdMode();


@Component({
	selector: 'my-marks',
	template:`<div>
        <h2> Nested Component Example</h2>
        <label>Physics: <input type="number" [(ngModel)]="phy"></label><br>
        <label>Chemistry: <input  type="number" [(ngModel)]="che"></label><br>
        <label>Maths: <input  type="number" [(ngModel)]="maths"></label><br>
       <exam-result [phymarks]="phy" [chemarks]="che" [mathsmarks]="maths" (myevent)="onMyEvent($event)">
       </exam-result>
       <div> You have {{result}} exam </div>
       </div>`       
       
})

export class ResultComponent {
	phy:number;
    che:Number;
    maths:number;
    result:string="Fail";
	onMyEvent(response:any){
		this.result=response.result;
	}
}


@Component({
  selector: 'exam-result',
  template:`<div>
			<div> Physics Marks : {{phymarks}} </div>
            <div> Chemistry Marks : {{chemarks}} </div>
            <div> Maths Marks : {{mathsmarks}} </div>
            <div> Total Marks : {{phymarks+chemarks+mathsmarks}} </div>
			<button (click)="sendDataToParent()">Process Result</button>
		</div>`
})

export class MarksheetComponent {
	
	@Input()
    phymarks:number;
    @Input()
    chemarks:number;
    @Input()
    mathsmarks:number;

	@Output() myevent = new EventEmitter();
	sendDataToParent(){
		
        if (this.phymarks > 35 && this.chemarks > 35 && this.mathsmarks > 35 )
        {
           this.myevent.emit({result:'Passed'});
        } else
        {
           this.myevent.emit({result:'Failed'});
        }
		
	}
}

 class Marks{
        phymarks:number;
        chemarks:number;
        mathsmarks:number;
    }