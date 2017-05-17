import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './src/login/login.component.html',
  styleUrls: [ './src/login/login.component.css' ]
})
export class LoginComponent {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();    
    let body = JSON.stringify({ username, password });

    this.http.post('http://localhost:8080/login', body)
      .subscribe(
        response => {
         this.router.navigate(['monitor']);
        },
        error => {
         console.log(error.text());
         this.router.navigate(['monitor']);
        }
      );
  }  
}
