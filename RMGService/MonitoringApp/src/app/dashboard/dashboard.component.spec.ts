import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Dashboard } from './dashboard.component';

describe('Donut Chart Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboard],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should exist', () => {
    // Overrides here, if you need them
     TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(Dashboard);
      // Access the dependency injected component instance
      const piehart = fixture.componentInstance;
      // Access the element     
      const element = fixture.nativeElement;
      // Detect changes as necessary
      fixture.detectChanges();

      expect(piehart).toBeTruthy();
    });

  });

});

 