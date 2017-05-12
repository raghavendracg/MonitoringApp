"use strict";
var router_1 = require('@angular/router');
var currencycomponent_1 = require('./currencyconverter/currencycomponent');
var employeecomponent_1 = require('./Employee/employeecomponent');
var marksheetcomponent_1 = require('./Marksheet/marksheetcomponent');
var lccomponemt_1 = require('./ComponentLifecycle/lccomponemt');
var httpcomponent_1 = require('./Httpdemo/httpcomponent');
var departmentcomponent_1 = require('./Department/departmentcomponent');
var calculatorcomponent_1 = require('./calculator/calculatorcomponent');
exports.routes = [
    { path: 'calculator', component: calculatorcomponent_1.CalculatorComponent },
    { path: 'currency', component: currencycomponent_1.CurrencyComponent },
    { path: 'employee', component: employeecomponent_1.EmployeeComponent },
    { path: 'marksheet', component: marksheetcomponent_1.MarksheetComponent },
    { path: 'lifecycle', component: lccomponemt_1.LifeCycleComponent },
    { path: 'guest', component: httpcomponent_1.GuestComponent },
    { path: 'department', component: departmentcomponent_1.DepartmentComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=approutes.js.map