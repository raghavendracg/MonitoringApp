import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TimerComponent } from './timer.component';

describe('Timer COmponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should exist', () => {
    // Overrides here, if you need them
     TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TimerComponent);
      // Access the dependency injected component instance
      const timer = fixture.componentInstance;
      // Access the element     
      const element = fixture.nativeElement;
      // Detect changes as necessary
      fixture.detectChanges();

      expect(timer).toBeTruthy();
    });

  });

});

 