import { Component,Injectable,Inject,OnInit,NgModule,enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx'; 
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
enableProdMode();

interface IGuest{
    userId:string,
    id:string,
    title:string,
    body:string
}


@Injectable()
class GuestService {
    
    private url = 'https://jsonplaceholder.typicode.com/posts/';
    
    constructor(@Inject(Http) private http:Http){
        
    }
    
    getAllGuests():Observable<IGuest[]>{
        return this.http.get(this.url).map((response:Response)=><IGuest[]>response.json()).catch(this.handleError);
    }

    getGuest(uri:number):Observable<IGuest>{
        let newUrl =this.url+uri.toString();
        return this.http.get(newUrl).map((response:Response)=><IGuest>response.json()).catch(this.handleError);
    }
    
    private handleError(error:Response){
        return Observable.throw(error.json().error || 'Server Error');
    }
}



@Component({
  selector: 'my-http',
  template: `<div><h4>HTTP DEMO</h4>
  <button #btn1 id="first" value="<<" (click)="show(btn1.value)"><<</button>
  <button #btn2 id="prev" value="<" (click)="show(btn2.value)"><</button>
  <input type="number" id="postid" [(ngModel)]="currentvalue">&nbsp;
  <button #btn3 id="next" value=">" (click)="show(btn3.value)">></button>
  <button #btn4 id="last" value=">>" (click)="show(btn4.value)">>></button>
  <div>
  <br>

  <table class="table table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Body</th>
        </tr>
    </thead>
    <tbody>
    <tr *ngIf="guest!= undefined">
        <td>{{  guest.userId }}</td>
        <td>{{  guest.id }}</td>
        <td>{{  guest.title }}</td>
        <td>{{  guest.body }}</td>
    </tr>
         <tr *ngFor="let g of guests">
              <td *ngIf="guest == undefined">{{  g.userId }}</td>
              <td *ngIf="guest == undefined">{{  g.id }}</td>
              <td *ngIf="guest == undefined">{{  g.title }}</td>
              <td *ngIf="guest == undefined">{{  g.body }}</td>
          </tr>
     </tbody>
</table>`,
  providers: [ GuestService ]
})


export class GuestComponent implements OnInit{
   private guests:IGuest[];
   private guest:IGuest;
    private errorMessage:any;
    currentvalue:number = 1;
    
    constructor(@Inject(GuestService) private service:GuestService){
        
    }
    
    ngOnInit():void{
       this.service.getAllGuests().subscribe(guests=>this.guests = guests,error=>this.errorMessage=error);
    }

    show(event:string){

        if(event === "<<"){
        this.currentvalue = 1;
         this.service.getGuest(this.currentvalue).subscribe(guest=>{ 
             console.log(guest);
             this.guest = guest
             },
             error=>this.errorMessage=error
            );
        }
        else if(event ==="<")
        {
         if(this.currentvalue !== 1){
              this.currentvalue -= 1; 
         }           
        this.service.getGuest(this.currentvalue).subscribe(
            guest=>this.guest = guest,
            error=>this.errorMessage=error
            );
            console.log('Here is response==>', this.guest);
        }
        else if(event ===">")
        {
        this.currentvalue += 1; 
        this.service.getGuest(this.currentvalue).subscribe(guest=>
            this.guest = guest,
            error=>this.errorMessage=error
            );
            console.log('Here is response==>', this.guest);
        }
        else if(event ===">>")
        {
        var total = this.guests.length;
        this.currentvalue = total-1; 
        this.service.getGuest(this.currentvalue).subscribe(guest=>
            this.guest = guest,
            error=>this.errorMessage=error
            );
        } 
        else{
           this.service.getGuest(this.currentvalue).subscribe(guest=>this.guest = guest,error=>this.errorMessage=error); 
        }      
    }
}


  