import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {nvD3} from 'ng2-nvd3';
import { AuthGuard } from './common/auth.guard';
import { MessengerService } from './service/messengerService';

import { MonitorComponent } from './monitor/monitor.component';
import { LoginComponent } from './login/login.component';
import { Dashboard } from './dashboard/dashboard.component';
import { App } from './app';
import { UnKnownKey } from './pipes/unknown';

import { routes } from './app.routes';


@NgModule({
  bootstrap: [App],
  declarations: [ LoginComponent, MonitorComponent, Dashboard, UnKnownKey, nvD3, App ],
  exports: [nvD3],
  providers: [AuthGuard, MessengerService],
  imports: [HttpModule, BrowserModule, FormsModule,
  RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppModule {}
