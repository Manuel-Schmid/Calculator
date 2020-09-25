import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  calculation = '';
  result = '';

  addNumToCalc(num: string): void {
    if (this.calculation.length < 24) {
      this.calculation = this.calculation + num;
    }
  }
  addOperationToCalc(operation: string): void {
    const lastKey = this.calculation[this.calculation.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      this.calculation = this.calculation.substr(0, this.calculation.length - 1);
      this.calculation = this.calculation + operation;
    } else {
      this.calculation = this.calculation + operation;
    }

  }
  allClear(): void{
    this.calculation = '';
    this.result = '';
  }
  getResult(): void{
    const formula = this.calculation;
    this.edgeCases(formula);
    this.result = eval(formula);
  }
  edgeCases(formula: string): void{

    const lastKey = formula[formula.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
      this.calculation = this.calculation.substr(0, this.calculation.length - 1);
      this.result = eval(formula);
    }
  }
  delete(): void{
    this.calculation = this.calculation.substr(0, this.calculation.length - 1);
  }
}
