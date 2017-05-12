import {Component, Inject}  from '@angular/core';
import {FormsModule}  from '@angular/Forms';
import {CalculatorService} from './services/calService'
@Component({
  selector: 'my-cal',
  template: `
   <div>
     <h2>Calculator</h2>
     <label> Number 1 : <input type="number"   placeholder="Enter First Number" id="num1" [(ngModel)]="num1"></label>
      <label> Number 2 : <input type="number"  placeholder="Enter Second Number" id="num2" [(ngModel)]="num2"></label>
      <hr>
      <input type="button" id="addition" value="ADD" (click)="add()">
      <input type="button" id="substraction" value="Sub" (click)="sub()">
      <input type="button" id="multiplication" value="Mult" (click)="mul()">
      <input type="button" id="division" value="Div" (click)="divd()">
      <hr>
      <label>Result : {{ result }} </label>
    </div>`,  
    providers : [CalculatorService]
})
export class CalculatorComponent {
  num1:number;
  num2:number;
  result:number;
    constructor(@Inject (CalculatorService) private calService:CalculatorService ){}

    add() : number {
      this.result = this.calService.add(this.num1,this.num2);
      return this.result;
    }

    sub(): number{
      this.result =this.calService.substract(this.num1,this.num2);
      return this.result;
    }
    mul():number{
      this.result = this.calService.multiply(this.num1,this.num2);
      return this.result;
    }
    divd(): number{
    this.result = this.calService.divide(this.num1,this.num2);
      return this.result;
    }
}
