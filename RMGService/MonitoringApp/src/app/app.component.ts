import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../assets/css/styles.css';

@Component({
  selector: 'rmg-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) { }
 }
