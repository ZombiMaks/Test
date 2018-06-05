// 1

/*
function f(x) {
 if ( arguments.length) {
     alert(1);
 }else{
     alert (0);
 }
}

f(undefined); // 1
f(); // 0
*/

// 2

function sum () {
    var suma = 0;
    for ( var i = 0; i < arguments.length; i++){
    suma += arguments[i];
    }
    alert(suma);
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);