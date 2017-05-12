import {Injectable} from '@angular/core';

@Injectable()

export class CalculatorService {
    result : number;

    add(x:number, y:number){
      this.result = x+y;
      return this.result;
    }

    substract(x:number , y:number){
      this.result = x - y;
      return this.result;
    }
    multiply(x:number , y:number){
      this.result = x * y;
      return this.result;
    }
    divide(x:number , y:number){
    this.result = x / y;
      return this.result;
    }
}