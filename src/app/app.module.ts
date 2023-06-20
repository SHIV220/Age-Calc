import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgeCalcComponent } from './age-calc/age-calc.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent , AgeCalcComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }