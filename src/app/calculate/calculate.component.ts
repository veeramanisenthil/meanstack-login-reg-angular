import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  public num1: number;
  public num2: number;
  public num3: number;
  public num4: number;
  public result: number;
  add() {
    this.result = this.num1 + this.num2 + this.num3 + this.num4;
  }
  constructor() { }

  ngOnInit() {
  }

}
