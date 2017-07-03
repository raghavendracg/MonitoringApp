import { TestBed } from '@angular/core/testing';
import {MonitorComponent} from './monitor.component';
import {Injector} from '@angular/core';


describe('MonitorComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [MonitorComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(MonitorComponent);
    expect(fixture.componentInstance instanceof MonitorComponent).toBe(true, 'should create MonitorComponent');
  });

});