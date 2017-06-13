import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';
import { MasterDataModel } from '../model/MasterDataModel';
import { MessengerService } from '../service/messengerService';

@Component({
    selector: 'rmg-navbar',
    templateUrl: './src/layout/navbar.component.html'
})

export class NavbarComponent {

    masterData = [
        new MasterDataModel('5 Mins', '{"minutes":"5"}'),
        new MasterDataModel('15 Mins', '{"minutes":"15"}'),
        new MasterDataModel('1 Hour', '{"hours":"1"}'),
        new MasterDataModel('5 Hours', '{"hours":"5"}'),
        new MasterDataModel('1 Day', '{"days":"1"}'),
        new MasterDataModel('10 Days', '{"days":"10"}')
    ];
    private param: string;
    private errorMessage: any;
    constructor(public router: Router, public nav: NavbarService, private messageService: MessengerService) {
        this.param = '{"minutes":"5"}';
    }

    changeInSelect(): void {
        // send message to subscribers via observable subject.
        this.messageService.sendMessage(this.param);
    }
    clearMessage(): void {
        // clear message.
        this.messageService.clearMessage();
    }
}
