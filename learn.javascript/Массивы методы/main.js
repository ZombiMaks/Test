// 1

/*
var obj = {
  className: 'open menu'
}

function addClass(obj, cls) {
    
  var x = obj.className;
  var y = x.split(' ');  
    
  for (var i = 0; i < y.length; i++){
      if ( y[i] == cls) return;
      
  }
      y.push(cls);
      
      obj.className = y.join(' ');
  
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className);
*/

// 2

/*
function camelize(str) {
    
    var mas = str.split('-');
    
    for ( var i = 1; i < mas.length; i++){
    
    mas[i] = mas[i].charAt(0).toUpperCase()+mas[i].slice(1);
    }
    
    return mas.join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));
*/

// 3

/*
var obj = {
  className: 'my menu menu'
};

function removeClass(obj, cls) {
    
   var arr = obj.className ? obj.className.split(' ') : [] ;
    console.log(arr);
    
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] == cls ) {
           arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
alert( obj.className );
*/

// 4

/*
function filterRangeInPlace(arr, a, b) {
   for ( var i = 0; i < arr.length; i++){
       if ( a < arr[i] && arr[i] > b) {
        arr.splice(i--, 1);
       }
   
   } 
  
}

var arr = [5, 3, 8, 1, 4, 0,];
filterRangeInPlace(arr, 1, 5);
alert( arr );
*/

// 5

/*
var arr = [5, 2, 1, -10, 8];

function compareNumeric (a, b) {
    return a - b;// или b - a в обратном порядке
}

arr.sort(compareNumeric);
arr.reverse();
alert(arr);
*/

// 6

/*
var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.concat();// .slice()
arrSorted.sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

// 7

/*
function myFunction(arr) {
 return Math.random() - 0.5;
}

var arr = [1, 2, 3, 4, 5];
arr.sort(myFunction);
alert( arr );
*/

// 8

/*
function compareAge(personA, personB) {
  return personA.age - personB.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

for(var i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
*/

// 9

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/*function printList(list) {
   var tmp = list;
    while (tmp){
        alert(tmp.value);
        tmp = tmp.next;
    }
}
*/

/*
function printList(list) {
    if ( list != null ) {
    alert(list.value);
    printList(list.next);
    }
}


printList(list);
*/

// 10 

/*
function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // разбить строку на буквы, отсортировать и слить обратно
    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
      console.log( obj );
  }
 
  var result = [];

  // теперь в obj находится для каждого ключа ровно одно значение
  for (var key in obj) result.push(obj[key]);

  return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) );
*/

// 11

/*
function unique(arr) {
    var obj = {};
  for (var i = 0; i < arr.length; i++){
      obj[arr[i]] = arr[i];
  }
    console.log(obj);
    var stringOne = [];
    
    for ( var key in obj){
        stringOne.push(obj[key]);
    }
     return stringOne;
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );
*/

function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()
