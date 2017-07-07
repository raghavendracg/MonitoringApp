import { TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

@Component({
  template: ''
})
class MockLoginComponent { }

@NgModule({
  declarations: [MockLoginComponent],
  exports: [MockLoginComponent]
})
class MockModule { }

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockLoginComponent
          }
        ]),
      ],
      declarations: [AppComponent]
    });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should have an url', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

});
