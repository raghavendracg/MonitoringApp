"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var calService_1 = require('./services/calService');
var CalculatorComponent = (function () {
    function CalculatorComponent(calService) {
        this.calService = calService;
    }
    CalculatorComponent.prototype.add = function () {
        this.result = this.calService.add(this.num1, this.num2);
        return this.result;
    };
    CalculatorComponent.prototype.sub = function () {
        this.result = this.calService.substract(this.num1, this.num2);
        return this.result;
    };
    CalculatorComponent.prototype.mul = function () {
        this.result = this.calService.multiply(this.num1, this.num2);
        return this.result;
    };
    CalculatorComponent.prototype.divd = function () {
        this.result = this.calService.divide(this.num1, this.num2);
        return this.result;
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'my-cal',
            template: "\n   <div>\n     <h2>Calculator</h2>\n     <label> Number 1 : <input type=\"number\"   placeholder=\"Enter First Number\" id=\"num1\" [(ngModel)]=\"num1\"></label>\n      <label> Number 2 : <input type=\"number\"  placeholder=\"Enter Second Number\" id=\"num2\" [(ngModel)]=\"num2\"></label>\n      <hr>\n      <input type=\"button\" id=\"addition\" value=\"ADD\" (click)=\"add()\">\n      <input type=\"button\" id=\"substraction\" value=\"Sub\" (click)=\"sub()\">\n      <input type=\"button\" id=\"multiplication\" value=\"Mult\" (click)=\"mul()\">\n      <input type=\"button\" id=\"division\" value=\"Div\" (click)=\"divd()\">\n      <hr>\n      <label>Result : {{ result }} </label>\n    </div>",
            providers: [calService_1.CalculatorService]
        }),
        __param(0, core_1.Inject(calService_1.CalculatorService)), 
        __metadata('design:paramtypes', [calService_1.CalculatorService])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculatorcomponent.js.map