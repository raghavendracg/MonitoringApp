import {Component, NgModule }  from '@angular/core';
import {FormsModule}  from '@angular/Forms';
@Component({
  selector: 'my-emp',
  templateUrl:'/app/Employee/employeeForm.html'
})
export class EmployeeComponent {

  emps: Employee[] = []; 

  onSubmit(employee: Employee){
    console.log(employee);
    this.emps.push(employee);    
  }

  delete(id:number){
    this.emps.splice(id,1);
  }
}

 interface Employee {
    id:number,
    fname: string,
    lname: string,
    gender: {
      male:boolean,
      female:boolean
    },
    activities:{
      swiming: boolean,
      running:boolean
    }
}


