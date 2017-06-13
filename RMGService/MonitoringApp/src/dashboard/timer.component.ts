import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'timer',
    template: `<span> Refresh Time - {{(minutesDisplay) &&
         (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) &&
         (secondsDisplay <= 59) ? secondsDisplay : '00'}} <br/></span   >`
})

export class TimerComponent implements OnInit {

    ticks = 0;
    refreshConter = 12000;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    constructor() {}

    ngOnInit() {
        this.startTimer();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;

                this.secondsDisplay = this.getSeconds(this.refreshConter - this.ticks);
                this.minutesDisplay = this.getMinutes(this.refreshConter - this.ticks);
                this.hoursDisplay = this.getHours(this.refreshConter - this.ticks);
                if (this.secondsDisplay === 0) {
                    console.log('inside condition');
                    this.refreshConter = this.refreshConter + this.ticks;
                }
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

}
