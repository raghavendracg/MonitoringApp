import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
   { path: 'monitor', component: MonitorComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },
  ];
