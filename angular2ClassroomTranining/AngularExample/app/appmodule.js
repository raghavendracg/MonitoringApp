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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var appcomponent_1 = require('./appcomponent');
var http_1 = require('@angular/http');
var currencycomponent_1 = require('./currencyconverter/currencycomponent');
var employeecomponent_1 = require('./Employee/employeecomponent');
var marksheetcomponent_1 = require('./Marksheet/marksheetcomponent');
var lccomponemt_1 = require('./ComponentLifecycle/lccomponemt');
var yesnopipe_1 = require('./pipes/yesnopipe');
var httpcomponent_1 = require('./Httpdemo/httpcomponent');
var departmentcomponent_1 = require('./Department/departmentcomponent');
var calculatorcomponent_1 = require('./calculator/calculatorcomponent');
var approutes_1 = require('./approutes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, approutes_1.routing, forms_1.ReactiveFormsModule, http_1.HttpModule],
            declarations: [appcomponent_1.AppComponent, currencycomponent_1.CurrencyComponent, employeecomponent_1.EmployeeComponent,
                marksheetcomponent_1.MarksheetComponent, marksheetcomponent_1.ResultComponent,
                lccomponemt_1.LifeCycleComponent, lccomponemt_1.DirectiveComponent,
                yesnopipe_1.YesNoPipe, httpcomponent_1.GuestComponent, departmentcomponent_1.DepartmentComponent,
                calculatorcomponent_1.CalculatorComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/#' }],
            bootstrap: [appcomponent_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=appmodule.js.map