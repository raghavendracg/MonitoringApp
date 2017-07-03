import { TestBed } from '@angular/core/testing';
import { MessengerService } from './messengerService';

describe('Messenger Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MessengerService]});
  });

  it('should ...', inject([MessengerService], (api: any) => {
    expect(api.getMessage()).toBe('observable');
  }));
});