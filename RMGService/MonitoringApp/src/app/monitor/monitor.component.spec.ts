import { TestBed, inject, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideRoutes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { MonitorComponent } from './monitor.component';
import { MessengerService } from '../service/messengerService';
import { MonitorService } from '../service/monitor.service';
import { NavbarService } from '../layout/navbar.service';

describe('MonitorComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
    ],
      declarations: [MonitorComponent],
      providers: [MonitorService, MessengerService, NavbarService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should do something', () => {
    // Overrides here, if you need them
     TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MonitorComponent);
      // Access the dependency injected component instance
      const monitor = fixture.componentInstance;
      // Access the element
      let vendor: string = 'storefeeder';
      const element = fixture.nativeElement;
      // Detect changes as necessary
      fixture.detectChanges();

      expect(monitor).toBeTruthy();
      expect(monitor.goldCategory(vendor)).toBe(true);

    });

  });

});

 