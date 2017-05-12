import {Component, Inject}  from '@angular/core';
import {FormsModule}  from '@angular/Forms';
@Component({
  selector: 'my-app',
  template: `
    <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
          <h1 class="header-text">Angular JS 2 in action</h1>        
        <nav class="nav nav--red">
          <ul class="nav__list">
            <li class="nav__list__item"><a class="mdl-navigation__link" [routerLink]="['/calculator']">Calculator</a></li>
            <li class="nav__list__item"><a class="mdl-navigation__link" [routerLink]="['/currency']">Currency Converter</a></li>
            <li class="nav__list__item"><a class="mdl-navigation__link" [routerLink]="['/marksheet']">MarkSheets</a></li>
            <li class="nav__list__item"><a class="mdl-navigation__link" [routerLink]="['/lifecycle']">Angular Life Cycle</a></li>
            <li class="nav__list__item"><a class="mdl-navigation__link" [routerLink]="['/employee']">Employee</a></li>
            <li class="nav__list__item"> <a class="mdl-navigation__link" [routerLink]="['/department']">Department</a></li>
            <li class="nav__list__item"> <a class="mdl-navigation__link" [routerLink]="['/guest']">GuestList</a></li>
          </ul>
        </nav>         
      </header>      
    </div>
    <!-- Router Outlet -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }
