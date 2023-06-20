import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calc',
  templateUrl: './age-calc.component.html',
  styleUrls: ['./age-calc.component.css']
})
export class AgeCalcComponent implements OnInit {

  age:any;
  showAge:any;

  

  constructor() { }


  ngOnInit() {
  }

  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
}