var m = [1, 3, 54, 'hello'];//об. массив

var n = {
    "one" : 12,
    "two" : 666,
    "three" : "hello"
};
 
n.maks = 'zombi';//добавляет в массив

//console.log( n['one'] ); или
console.log( n.one );

var geck = 'two';
console.log( n['two']);

var out = document.getElementById('one');

for (var key in n) {
    one.innerHTML += key + ' - ' + n[key] + '<br>';
}