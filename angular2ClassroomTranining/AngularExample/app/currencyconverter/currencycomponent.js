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
var CurrencyComponent = (function () {
    function CurrencyComponent(dollar) {
        this.dollar = dollar;
    }
    CurrencyComponent.prototype.convert = function () {
        this.usdollor = this.inrcurrency / this.dollar;
        return this.usdollor;
    };
    CurrencyComponent = __decorate([
        core_1.Component({
            selector: 'my-converter',
            template: "\n    <div>\n      <h2>Currency Converter</h2>\n     <label> INR : <input type=\"number\"   placeholder=\"Enter INR Currency\" id=\"inrcurrency\" [(ngModel)]=\"inrcurrency\"></label>      \n      <input type=\"button\" id=\"convert\" value=\"Convert\" (click)=\"convert()\">\n      <label>US $ : {{ usdollor }} </label>\n    </div>",
            providers: [{ provide: 'Dollar', useValue: 64.12 }]
        }),
        __param(0, core_1.Inject('Dollar')), 
        __metadata('design:paramtypes', [Object])
    ], CurrencyComponent);
    return CurrencyComponent;
}());
exports.CurrencyComponent = CurrencyComponent;
//# sourceMappingURL=currencycomponent.js.map