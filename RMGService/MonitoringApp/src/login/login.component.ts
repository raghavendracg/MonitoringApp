import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

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
    this.http.post('http://localhost:8765/login', body , {headers : contentHeaders})
      .subscribe(
        response => {
           localStorage.setItem('token', response.json().token);
           this.router.navigate(['monitor']);
        },
        error => { alert( error.json().message ); } );
      }
    }

