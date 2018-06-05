'use strict'

// 1 Calculator
/*
var calculator = {
 sum: function() {
    return this.num1 + this.num2;
},
    
 mul: function() {
     return this.num1 * this.num2;
 },
    
 read: function() {
this.num1 = +prompt('Введите первое число', '');
this.num2 = +prompt('Введите второе число', '');
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

// 2 Цепочка вызовов

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
      return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
      return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().up().down().showStep(); // 1