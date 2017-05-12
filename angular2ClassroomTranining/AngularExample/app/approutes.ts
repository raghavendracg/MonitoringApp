import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyComponent} from './currencyconverter/currencycomponent';
import {EmployeeComponent} from './Employee/employeecomponent';
import {MarksheetComponent , ResultComponent} from './Marksheet/marksheetcomponent';
import {LifeCycleComponent ,DirectiveComponent} from './ComponentLifecycle/lccomponemt';
import {GuestComponent} from './Httpdemo/httpcomponent';
import {DepartmentComponent} from './Department/departmentcomponent';
import {CalculatorComponent} from './calculator/calculatorcomponent'

export const routes: Routes = [  
  { path: 'calculator', component: CalculatorComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'marksheet', component: MarksheetComponent },
  { path: 'lifecycle', component: LifeCycleComponent },
  { path: 'guest', component: GuestComponent },
  { path:'department', component: DepartmentComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);