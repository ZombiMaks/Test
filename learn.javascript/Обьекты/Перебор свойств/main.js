// Задание 1

/*function isEmpty(obj) {
    // количество свойств
    var counter = 0;
    for ( var key in obj) {
        counter++;
        console.log(counter);
    }
    
  if ( counter == 0 ) {
      return true;
  }else {
      return false;
  }
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false*/

// Задание 2

/*"use strict";

var salaries = {
  "Вася": 120,
  "Петя": 230,
  "Даша": 330
};

function suma(obj) {
    var rez = 0;
    for ( var key in salaries){
        rez += obj[key];
    }
    if ( rez == 0 ){
        alert( 'Нет сотрудников')
    }
    return rez;
}

alert(suma(salaries));*/

// Задание 3

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );


// Задание 4

/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

        function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
        }

function multiplyNumeric(obj) {
    
    for ( var key in obj) {
      if (isNumeric(obj[key])) {
          obj[key] *= 2;
      }
    }
}
  multiplyNumeric(menu);
  console.log(menu);



// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};*/