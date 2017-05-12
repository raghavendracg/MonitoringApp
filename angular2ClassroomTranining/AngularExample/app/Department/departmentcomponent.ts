import { Component, NgModule, Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormGroup,FormControl, FormBuilder, FormsModule } from '@angular/forms'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-dept',
  templateUrl:'/app/Department/departmentForm.html'
})
export class DepartmentComponent {

 departmentForm : FormGroup;
  department:Department;
  nameControl:FormControl;

  constructor(@Inject(FormBuilder) private builder:FormBuilder){
    this.builtForm();
  }
  private builtForm(){
    this.departmentForm = this.builder.group({
     departmentName:new FormControl('Information Technologies'),
     departmentID:new FormControl(1)  
    });
   

  }
   
  onSubmitForm(){
    this.department = this.departmentForm.value;
     alert("Name : "+this.department.name+" ID : "+this.department.id);
	}
}

 interface Department {
    id:number,
    name: string       
}






  


