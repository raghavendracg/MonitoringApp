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
require('rxjs/Rx');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
core_1.enableProdMode();
var GuestService = (function () {
    function GuestService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts/';
    }
    GuestService.prototype.getAllGuests = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    GuestService.prototype.getGuest = function (uri) {
        var newUrl = this.url + uri.toString();
        return this.http.get(newUrl).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    GuestService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    GuestService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GuestService);
    return GuestService;
}());
var GuestComponent = (function () {
    function GuestComponent(service) {
        this.service = service;
        this.currentvalue = 1;
    }
    GuestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllGuests().subscribe(function (guests) { return _this.guests = guests; }, function (error) { return _this.errorMessage = error; });
    };
    GuestComponent.prototype.show = function (event) {
        var _this = this;
        if (event === "<<") {
            this.currentvalue = 1;
            this.service.getGuest(this.currentvalue).subscribe(function (guest) {
                console.log(guest);
                _this.guest = guest;
            }, function (error) { return _this.errorMessage = error; });
        }
        else if (event === "<") {
            if (this.currentvalue !== 1) {
                this.currentvalue -= 1;
            }
            this.service.getGuest(this.currentvalue).subscribe(function (guest) { return _this.guest = guest; }, function (error) { return _this.errorMessage = error; });
            console.log('Here is response==>', this.guest);
        }
        else if (event === ">") {
            this.currentvalue += 1;
            this.service.getGuest(this.currentvalue).subscribe(function (guest) {
                return _this.guest = guest;
            }, function (error) { return _this.errorMessage = error; });
            console.log('Here is response==>', this.guest);
        }
        else if (event === ">>") {
            var total = this.guests.length;
            this.currentvalue = total - 1;
            this.service.getGuest(this.currentvalue).subscribe(function (guest) {
                return _this.guest = guest;
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.service.getGuest(this.currentvalue).subscribe(function (guest) { return _this.guest = guest; }, function (error) { return _this.errorMessage = error; });
        }
    };
    GuestComponent = __decorate([
        core_1.Component({
            selector: 'my-http',
            template: "<div><h4>HTTP DEMO</h4>\n  <button #btn1 id=\"first\" value=\"<<\" (click)=\"show(btn1.value)\"><<</button>\n  <button #btn2 id=\"prev\" value=\"<\" (click)=\"show(btn2.value)\"><</button>\n  <input type=\"number\" id=\"postid\" [(ngModel)]=\"currentvalue\">&nbsp;\n  <button #btn3 id=\"next\" value=\">\" (click)=\"show(btn3.value)\">></button>\n  <button #btn4 id=\"last\" value=\">>\" (click)=\"show(btn4.value)\">>></button>\n  <div>\n  <br>\n\n  <table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Contact</th>\n            <th>Body</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr *ngIf=\"guest!= undefined\">\n        <td>{{  guest.userId }}</td>\n        <td>{{  guest.id }}</td>\n        <td>{{  guest.title }}</td>\n        <td>{{  guest.body }}</td>\n    </tr>\n         <tr *ngFor=\"let g of guests\">\n              <td *ngIf=\"guest == undefined\">{{  g.userId }}</td>\n              <td *ngIf=\"guest == undefined\">{{  g.id }}</td>\n              <td *ngIf=\"guest == undefined\">{{  g.title }}</td>\n              <td *ngIf=\"guest == undefined\">{{  g.body }}</td>\n          </tr>\n     </tbody>\n</table>",
            providers: [GuestService]
        }),
        __param(0, core_1.Inject(GuestService)), 
        __metadata('design:paramtypes', [GuestService])
    ], GuestComponent);
    return GuestComponent;
}());
exports.GuestComponent = GuestComponent;
//# sourceMappingURL=httpcomponent.js.map