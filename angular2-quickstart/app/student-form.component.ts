import { Component } from '@angular/core';
import { Student }    from './student';
@Component({
  selector: 'student-form',
  templateUrl: 'app/student-form.component.html'
})
export class StudentFormComponent {
  courses = ['Computer', 'Electronics',
            'Mechanical', 'Electrical','Chemical'];
  model = new Student(308251, 'Ram Singh', this.courses[0], 'Engineering');
  submitted = false;
  onSubmit() { 
  		this.submitted = true; 
  }
  active = true;
  newStudent() {
     this.model = new Student(0, '', '');
     this.active = false;
     setTimeout(() => this.active = true, 0);
  }
  
  default() {
  	    this.model = new Student(308251, 'Ram Thakur', this.courses[0], 'Engineering');
  }
  get diagnostic() { 
  		return JSON.stringify(this.model); 
  }
}
