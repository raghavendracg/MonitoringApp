import { NgModule,Input,Output,EventEmitter,ModuleWithProviders  } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import {AppComponent} from './appcomponent';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyComponent} from './currencyconverter/currencycomponent';
import {EmployeeComponent} from './Employee/employeecomponent';
import {MarksheetComponent , ResultComponent} from './Marksheet/marksheetcomponent';
import {LifeCycleComponent ,DirectiveComponent} from './ComponentLifecycle/lccomponemt';
import {YesNoPipe} from './pipes/yesnopipe';
import {GuestComponent} from './Httpdemo/httpcomponent';
import {DepartmentComponent} from './Department/departmentcomponent';
import {CalculatorComponent} from './calculator/calculatorcomponent';
import { routing } from './approutes';


@NgModule({
  imports:      [ BrowserModule ,FormsModule,routing, ReactiveFormsModule, HttpModule],
  declarations: [ AppComponent , CurrencyComponent,EmployeeComponent,
                  MarksheetComponent, ResultComponent,
                  LifeCycleComponent ,DirectiveComponent ,
                  YesNoPipe, GuestComponent,DepartmentComponent,
                  CalculatorComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/#' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }