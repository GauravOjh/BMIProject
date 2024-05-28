import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnChanges {
ngOnChanges(changes: SimpleChanges): void {
  this.bmi=this.calculateBMI();
}
height:number=140;
weight:number=10;
bmi:number=this.calculateBMI();


calculateBMI():number{
  const heightInMeters = this.height / 100;
  return this.weight / (heightInMeters * heightInMeters);
}

}
