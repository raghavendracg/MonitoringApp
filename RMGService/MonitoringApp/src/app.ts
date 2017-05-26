import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MasterDataModel} from './model/MasterDataModel' ;

const template = require('./app.html');

@Component({
  selector: 'app-login',
  template: template
})

export class App {

  masterData = [
     new MasterDataModel('5 Mins', '{"minutes":"5"}'),
     new MasterDataModel('15 Mins', '{"minutes":"15"}'),
     new MasterDataModel('1 Hour', '{"hours":"1"}'),
     new MasterDataModel('5 Hours', '{"hours":"5"}'),
     new MasterDataModel('1 Day', '{"days":"1"}'),
     new MasterDataModel('10 Days', '{"days":"10"}')
  ];
  private param : string;
  private errorMessage : any;
  constructor(public router: Router) {
    this.param = '{"days":"10"}';
  }

   changeInSelect() {
   console.log('selected frequency', this.param);
  }
}
