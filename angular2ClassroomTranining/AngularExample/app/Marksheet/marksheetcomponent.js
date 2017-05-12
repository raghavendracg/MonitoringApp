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
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var ResultComponent = (function () {
    function ResultComponent() {
        this.result = "Fail";
    }
    ResultComponent.prototype.onMyEvent = function (response) {
        this.result = response.result;
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'my-marks',
            template: "<div>\n        <h2> Nested Component Example</h2>\n        <label>Physics: <input type=\"number\" [(ngModel)]=\"phy\"></label><br>\n        <label>Chemistry: <input  type=\"number\" [(ngModel)]=\"che\"></label><br>\n        <label>Maths: <input  type=\"number\" [(ngModel)]=\"maths\"></label><br>\n       <exam-result [phymarks]=\"phy\" [chemarks]=\"che\" [mathsmarks]=\"maths\" (myevent)=\"onMyEvent($event)\">\n       </exam-result>\n       <div> You have {{result}} exam </div>\n       </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
var MarksheetComponent = (function () {
    function MarksheetComponent() {
        this.myevent = new core_1.EventEmitter();
    }
    MarksheetComponent.prototype.sendDataToParent = function () {
        if (this.phymarks > 35 && this.chemarks > 35 && this.mathsmarks > 35) {
            this.myevent.emit({ result: 'Passed' });
        }
        else {
            this.myevent.emit({ result: 'Failed' });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MarksheetComponent.prototype, "phymarks", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MarksheetComponent.prototype, "chemarks", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MarksheetComponent.prototype, "mathsmarks", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MarksheetComponent.prototype, "myevent", void 0);
    MarksheetComponent = __decorate([
        core_1.Component({
            selector: 'exam-result',
            template: "<div>\n\t\t\t<div> Physics Marks : {{phymarks}} </div>\n            <div> Chemistry Marks : {{chemarks}} </div>\n            <div> Maths Marks : {{mathsmarks}} </div>\n            <div> Total Marks : {{phymarks+chemarks+mathsmarks}} </div>\n\t\t\t<button (click)=\"sendDataToParent()\">Process Result</button>\n\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], MarksheetComponent);
    return MarksheetComponent;
}());
exports.MarksheetComponent = MarksheetComponent;
var Marks = (function () {
    function Marks() {
    }
    return Marks;
}());
//# sourceMappingURL=marksheetcomponent.js.map