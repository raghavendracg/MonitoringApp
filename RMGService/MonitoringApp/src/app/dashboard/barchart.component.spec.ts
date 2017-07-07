import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarChartMonitor } from './barchart.component';

describe('BarChart Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartMonitor],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should exist', () => {
    // Overrides here, if you need them
     TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(BarChartMonitor);
      // Access the dependency injected component instance
      const barchart = fixture.componentInstance;
      // Access the element     
      const element = fixture.nativeElement;
      // Detect changes as necessary
      fixture.detectChanges();

      expect(barchart).toBeTruthy();
    });

  });

});

 