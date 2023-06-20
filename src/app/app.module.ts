import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgeCalcComponent } from './age-calc/age-calc.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , AgeCalcComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }