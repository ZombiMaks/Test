 'use strict';

// 1

// Сумма через замыкание
 /*
function sum(a){
    return function (b){
        return a + b;
    }
}

alert( sum(1)(2) );
alert( sum(5)(-1) );
*/

// 2

// Функция строковый буфер
/*
function makeBuffer() {
      var buf = '';
   return function buffer(value){
       if (arguments.length == 0){
           // вызов без аргументов(undefined)
       return buf;
       }
       buf += value;
    }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010'
*/

// 3

// Строковый буфер с очисткой
/*
function makeBuffer() {
  var buf = '';
    
       function buffer(value){
       if (arguments.length == 0){
           // вызов без аргументов(undefined)
           return buf;
       }
       buf += value;
    }
       buffer.clear = function(){
           buf = '';
       };
       return buffer;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
*/

// 4

// Сортировка
/*
function byField(field){
    
    if (field == 'name'){
    return function(a, b) {
    return a.name > b.name ? 1 : -1;
    }
    }else{
    return function(a, b) {
    return a.age > b.age ? 1 : -1;
    }
    }
}

// or

function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
  }


var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя
*/

// 5

// Фильтр через функцию
/*
function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }

function inArray(arr) {
    return function(x) {
      return arr.indexOf(x) != -1;
    };
  }



var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
*/

// 6

// Ария функций
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++)(function(i){
    var shooter = function() { // функция-стрелок
       
      alert( i ); // выводит свой номер
  };
    shooters.push(shooter);
  })(i);
  return shooters;
}
var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
