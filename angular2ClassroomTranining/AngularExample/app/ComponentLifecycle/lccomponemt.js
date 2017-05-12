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
var LifeCycleComponent = (function () {
    function LifeCycleComponent() {
        this.display = true;
    }
    LifeCycleComponent.prototype.toggle = function () {
        this.display = !this.display;
    };
    LifeCycleComponent.prototype.onMyEvent = function (response) {
        this.result = response;
    };
    LifeCycleComponent = __decorate([
        core_1.Component({
            selector: 'lc-app',
            template: "<h3>LifeCycle hooks - OnInit and OnDestroy</h3> \n <button (click)=\"toggle()\">Toggle</button>\n  <br/> \n  <span>{{result}}</span> \n<on-init *ngIf=\"display\" (myevent)=\"onMyEvent($event)\"></on-init>"
        }), 
        __metadata('design:paramtypes', [])
    ], LifeCycleComponent);
    return LifeCycleComponent;
}());
exports.LifeCycleComponent = LifeCycleComponent;
var DirectiveComponent = (function () {
    function DirectiveComponent() {
        this.myevent = new core_1.EventEmitter();
    }
    DirectiveComponent.prototype.ngOnInit = function () {
        this.msg = "I am Created in ngOnInit";
        this.myevent.emit(this.msg);
    };
    DirectiveComponent.prototype.ngOnDestroy = function () {
        this.msg = "I am Destroyed in ngOnDestroy";
        this.myevent.emit(this.msg);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DirectiveComponent.prototype, "myevent", void 0);
    DirectiveComponent = __decorate([
        core_1.Component({
            selector: 'on-init',
            template: "<div>I am here</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DirectiveComponent);
    return DirectiveComponent;
}());
exports.DirectiveComponent = DirectiveComponent;
//# sourceMappingURL=lccomponemt.js.map