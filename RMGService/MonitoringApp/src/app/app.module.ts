import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NvD3Module } from 'angular2-nvd3';
import { AuthGuard } from './common/auth.guard';
import { MessengerService } from './service/messengerService';
import { NavbarService, NavbarComponent } from './layout/index';

import { MonitorComponent } from './monitor/monitor.component';
import { LoginComponent } from './login/login.component';
import { Dashboard } from './dashboard/dashboard.component';
import { BarChartMonitor } from './dashboard/barchart.component';
import { TimerComponent } from './dashboard/timer.component';
import { UnKnownKey } from './pipes/unknown';

import { AppComponent } from './app.component';
import { routes } from './app.routes';


@NgModule({
  imports: [HttpModule, BrowserModule, FormsModule, NvD3Module,
  RouterModule.forRoot(routes, { useHash: true })],

   schemas: [ NO_ERRORS_SCHEMA ],
  
  declarations: [AppComponent,NavbarComponent, LoginComponent, MonitorComponent,
  Dashboard, BarChartMonitor, UnKnownKey, TimerComponent],

  //exports:[nvD3],

  providers: [AuthGuard, MessengerService, NavbarService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
