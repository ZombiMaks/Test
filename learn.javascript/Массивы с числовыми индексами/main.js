//Задание 1

/*var goods = [1, 2, 3, 5, 6];
console.log( goods[goods.length - 1]);*/

//Задание 2

/*goods[goods.length] = 7;
console.log( goods );*/

//Задание 3

/*
//1, 2
var styles = ['Джаз', 'Блюз'];
styles.push( 'Рок-н-Ролл' );
console.log( styles );
//3
styles[styles.length - 2] = 'Классика';
console.log( styles );
//4
alert( styles.shift() );
//5
styles.unshift( 'Рэп', 'Регги' );
console.log( styles );
*/

//Задание 4

/*
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var x = arr.length;

var rand = 0 + Math.floor(Math.random() * arr.length);

alert( arr[rand]);
*/

//Задание 5

/*var arr = [];

while (true) {

  var value = prompt("Введите число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  arr.push(+value);
}

alert(arr);

var x = 0;

for ( var i = 0; i < arr.length; i++){
    x += arr[i];
}
    alert(x);
    */

//Задание 6

/*
var arr = ["test", 2, 1.5, false];

function find(arr, value){
    for ( var i = 0; i < arr.length; i++){
    if ( arr[i] === value ) 
     return i;
    }
    
     return -1; 

    
}
 
console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1
*/

//Задание 7

/*
var arr = [5, 4, 3, 8, 0];


  function filterRange(arr, a, b){ 
      
      var x = [];

    for ( var i = 0; i < arr.length; i++) {
        
    if (a<=arr[i] && arr[i]<= b){
        x.push(arr[i]);
   
    }
       
    }
    return x;
}
var filtered=filterRange(arr, 3, 5);
console.log(filtered);
*/

//Задание 8

/*
 var arr = [];

for ( var i = 2; i<100; i++){
   arr[i] = true;
}

var p = 2;
do {
    
for (i = 2 * p; i < 100; i += p){
    arr[i] = false;
}

for (i = p + 1; i < 100; i++ )  {
    if (arr[i]) break;
    
}
    p = i;
    
}while ( p * p < 100);

var sum = 0;

for ( i = 0; i < arr.length; i++){
    if ( arr[i]){
        sum += i;
    }
}
console.log(arr);
alert(sum);
*/

//Задание 9

function getMaxSubSum(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

