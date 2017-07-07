import { TestBed, inject } from '@angular/core/testing';
import { MessengerService } from './messengerService';

describe('Messenger Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessengerService]
    });
  });

  it('should ...', inject([MessengerService], (service: MessengerService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should run a test that finishes eventually in Service', inject([MessengerService], (api: any) => {
    expect(api.getMessage()).toBe('observable');
  }));*/

});