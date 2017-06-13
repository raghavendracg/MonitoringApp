import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MasterDataModel} from './model/MasterDataModel' ;
import { MessengerService } from './service/messengerService';

const template = require('./app.html');

@Component({
  selector: 'rmg-home',
  template: template
})

export class App {
  constructor(public router: Router) { }
}
