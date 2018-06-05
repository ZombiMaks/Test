// 1 Создать калькулятор

/*
function Calculator() {

    this.read = function() {
        this.num1 = +prompt("Введите число", "0");
        this.num2 = +prompt("Введите число 2", "0");
    };
    this.sum = function() {
        return this.num1 + this.num2;
    };
    this.mul = function() {
        return this.num1 * this.num2 
    };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/

// 2 Accumulator

function Accumulator(startingValue){
    var numberOne = 0;
    this.read = function() {
        this.num = +prompt("Введите число", "0");
        numberOne = this.num;
        return (numberOne);
    };
   alert(numberOne);
    this.value = this.num;
    
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
//accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение