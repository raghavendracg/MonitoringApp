import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
/*let currUser = localStorage.getItem('currentUser');
let currToken;
let currUserObject = JSON.parse(currUser);
if(currUserObject){
    currToken = currUserObject.token;
    console.log('currentUser', currToken);
    contentHeaders.append('token', currToken);
}
*/




