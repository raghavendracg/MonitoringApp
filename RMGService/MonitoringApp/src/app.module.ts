import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {nvD3} from 'ng2-nvd3';
import { AuthGuard } from './common/auth.guard';
import { MessengerService } from './service/messengerService';
import { NavbarService, NavbarComponent } from './layout/index';

import { MonitorComponent } from './monitor/monitor.component';
import { LoginComponent } from './login/login.component';
import { Dashboard } from './dashboard/dashboard.component';
import { BarChartMonitor } from './dashboard/barchart.component';
import { TimerComponent } from './dashboard/timer.component';
import { App } from './app';

import { UnKnownKey } from './pipes/unknown';

import { routes } from './app.routes';


@NgModule({
  bootstrap: [App],
  declarations: [ NavbarComponent, LoginComponent, MonitorComponent, Dashboard, BarChartMonitor,
    UnKnownKey, nvD3, App, TimerComponent],
  exports: [nvD3],
  providers: [AuthGuard, MessengerService, NavbarService],
  imports: [HttpModule, BrowserModule, FormsModule,
  RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppModule {}
