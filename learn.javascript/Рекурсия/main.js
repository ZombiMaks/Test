// 1

/*
function sumTo(n) {
    if ( n > 1){
     return n + sumTo(n - 1);
    }else{
        return n;
    }
}

alert( sumTo(100) ); // 5050
*/

// 1.1

/*
function sumTo(n) {
    var x = 0;
    for ( var i = 0; i <=n; i++){
        x += i;
    }
    return x;
}

alert( sumTo(100) ); // 5050
*/

// 1.3

/*
function sumTo(n) { 
    var sum = ((1 + 100) / 2) * n;
    return sum;
}

alert( sumTo(100) ); // 5050
*/

// 2

/*
function factorial(n) {
    if (n > 1) {
        return n * factorial( n - 1);
        }else {
            return n;
        }
}

alert( factorial(5) );
*/

// 3

function fib(n) {
    var a = 1;
    var b = 1;
    for ( var i = 3; i <= n; i++){
        var c = a + b;
        a = b; 
        b = c;
    }
   return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77)); // 5527939700884757