import {Component,Inject}  from '@angular/core';
import {FormsModule}  from '@angular/Forms';
@Component({
  selector: 'my-converter',
  template: `
    <div>
      <h2>Currency Converter</h2>
     <label> INR : <input type="number"   placeholder="Enter INR Currency" id="inrcurrency" [(ngModel)]="inrcurrency"></label>      
      <input type="button" id="convert" value="Convert" (click)="convert()">
      <label>US $ : {{ usdollor }} </label>
    </div>`,
    providers :[{provide:'Dollar', useValue: 64.12}]
})
export class CurrencyComponent {

  inrcurrency:number;
  usdollor:number;
  
    constructor(@Inject ('Dollar') private dollar:any){

   }

    convert(){
      this.usdollor =  this.inrcurrency / this.dollar;
      return this.usdollor;
    }


}
