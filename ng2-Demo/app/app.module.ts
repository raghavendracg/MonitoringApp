import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameComponent } from './name.component';
import { OtherNameComponent } from './other-name.component';
import { NameService } from './name.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NameComponent, OtherNameComponent],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule {}

