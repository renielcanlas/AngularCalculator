import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string = '0';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  operand: string = '';

  clear() {
    this.value = '0';
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }

  operator(type: string) {
    this.num1 = parseFloat(this.value);
    this.num2 = 0;
    this.operand = type;
    this.value = '0';
  }

  equals() {
    if(this.num2===0) {
      this.num2 = parseFloat(this.value);
    }
    switch(this.operand) {
      case '+': 
        this.result = this.num1 + this.num2;
      break;
      case '-':
        this.result = this.num1 - this.num2;
      break;
      case 'x':
        this.result = this.num1 * this.num2;
      break;
      case '÷': 
        this.result = this.num1 / this.num2;
      break;
      default:
        this.result = this.num2;
      break;
    }
    this.value = this.result.toString();
    console.log(this.num1.toString() + " " + this.operand + " " + this.num2 + " = " + this.result.toString());
    this.num1 = this.result;
  }

  del() {
    this.value = this.value.substr(0,this.value.length - 1);
    this.num1 = 0;
    this.num2 = 0;
    if(this.value === '') {
      this.value = '0';
    }
  }

  negate() {
    this.value = (parseFloat(this.value) * -1).toString();
  }

  percent() {
    this.value = (parseFloat(this.value) / 100).toString();
  }

  decimal() {
    if(!this.value.includes('.')) {
      if(this.value === '0') {
        this.value = '0.';
      } else {
        this.input('.');  
      }
    }
  }

  input(num: string) {
    if(this.value === '0') {
      this.value = num;
    } else {
      this.value = this.value.concat(num);
    }
  }
}
