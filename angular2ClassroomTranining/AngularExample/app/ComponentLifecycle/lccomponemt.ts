import { Component,enableProdMode,NgModule, EventEmitter,Output, OnInit,OnDestroy} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@Component({
 
 selector: 'lc-app',
 
 template: `<h3>LifeCycle hooks - OnInit and OnDestroy</h3> 
 <button (click)="toggle()">Toggle</button>
  <br/> 
  <span>{{result}}</span> 
<on-init *ngIf="display" (myevent)="onMyEvent($event)"></on-init>`
})



export class LifeCycleComponent{
	display:boolean;
    result:string;
	constructor(){
		this.display = true;
	}
	toggle(){
		this.display = !this.display;		
	}
    onMyEvent(response:any){
		this.result=response;
	}
}



@Component({
  selector: 'on-init',
  template: "<div>I am here</div>"
})

export class DirectiveComponent implements OnInit,OnDestroy{
 msg : string;
  constructor(){}
  
  @Output() myevent = new EventEmitter();

  ngOnInit(): void{
      this.msg = "I am Created in ngOnInit";
      this.myevent.emit(this.msg);
  }
  ngOnDestroy(): void{
    this.msg="I am Destroyed in ngOnDestroy";
    this.myevent.emit(this.msg);
  }
 
}


  



  
  