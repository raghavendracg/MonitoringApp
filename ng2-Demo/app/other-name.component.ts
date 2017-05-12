import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'other-name-component',
  template: 'Hello {{name}}',
  providers: [
    { provide: NameService, useValue: 'Pooran' }
  ]
})
export class OtherNameComponent {
  
  constructor(private name: NameService) {}
}