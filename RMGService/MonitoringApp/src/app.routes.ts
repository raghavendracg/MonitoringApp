import { Routes } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';

export const routes: Routes = [
  { path: '', component: MonitorComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: '**', component: MonitorComponent },
  ];
