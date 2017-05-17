import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
let currToken = localStorage.getItem('token');
console.log('currentToken', currToken);
contentHeaders.append('token', currToken);

