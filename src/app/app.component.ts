import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  calculation = '';
  displayCalc = '';
  result = '';

  addNumToCalc(num: string): void {
    if (this.calculation.length < 24) {
      this.calculation = this.calculation + num;
      this.displayCalc = this.displayCalc + num;
    }
  }
  addPiToCalc(): void {
    if (this.calculation.length < 24) {
      this.calculation = this.calculation + Math.PI;
      this.displayCalc = this.displayCalc + 3.1415926;
    }
  }
  addOperationToCalc(operation: string): void {
    this.checkLastKey();
    this.calculation = this.calculation + operation;
    this.displayCalc = this.displayCalc + operation;
  }

  addSquareToCalc(): void {
    this.checkLastKey();
    let lastKeys = '';
    for (let i = this.calculation.length - 1; this.calculation[i] !== '/' && this.calculation[i] !== '*' && this.calculation[i] !== '-' && this.calculation[i] !== '+' && this.calculation[i] !== '(' && this.calculation[i] !== undefined; i--) {
      const lastKey = this.calculation[this.calculation.length - 1];
      lastKeys = lastKey + lastKeys;
      this.calculation = this.calculation.substr(0, this.calculation.length - 1);
    }
    const lastKeysNum = parseInt(lastKeys);
    this.calculation = this.calculation + (Math.pow(lastKeysNum, 2));
    this.displayCalc = this.displayCalc + '2'.sup();
  }
  addSquareRootToCalc(): void {
    this.checkLastKey();
    let lastKeys = '';
    for (let i = this.calculation.length - 1; this.calculation[i] !== '/' && this.calculation[i] !== '*' && this.calculation[i] !== '-' && this.calculation[i] !== '+' && this.calculation[i] !== '(' && this.calculation[i] !== undefined; i--) {
      const lastKey = this.calculation[this.calculation.length - 1];
      lastKeys = lastKey + lastKeys;
      this.calculation = this.calculation.substr(0, this.calculation.length - 1);
      this.displayCalc = this.displayCalc.substr(0, this.displayCalc.length - 1);
    }
    const lastKeysNum = parseInt(lastKeys);
    this.calculation = this.calculation + (Math.sqrt(lastKeysNum));
    this.displayCalc = this.displayCalc + `√(${lastKeys})`;
  }
  checkLastKey() {
    const lastKey = this.calculation[this.calculation.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      this.calculation = this.calculation.substr(0, this.calculation.length - 1);
      this.displayCalc = this.displayCalc.substr(0, this.displayCalc.length - 1);
    }
  }

  allClear(): void {
    this.calculation = '';
    this.displayCalc = '';
    this.result = '';
  }
  getResult(): void {
    const formula = this.calculation;
    this.edgeCases(formula);
    console.log(formula);
    this.result = eval(formula);
  }
  edgeCases(formula: string): void {

    const lastKey = formula[formula.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.' || lastKey === '(') {
      formula = formula.substr(0, formula.length - 1);
      this.calculation = this.calculation.substr(0, this.calculation.length - 1);
      this.displayCalc = this.displayCalc.substr(0, this.displayCalc.length - 1);
      this.result = eval(formula);
    }
  }
  delete(): void{
    this.calculation = this.calculation.substr(0, this.calculation.length - 1);
    this.displayCalc = this.displayCalc.substr(0, this.displayCalc.length - 1);
  }
}
