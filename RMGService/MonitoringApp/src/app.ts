import { Component } from '@angular/core';
import { Router } from '@angular/router';

const template = require('./app.html');

@Component({
  selector: 'app-login',
  template: template
})

export class App {
  constructor(public router: Router) {}
}
