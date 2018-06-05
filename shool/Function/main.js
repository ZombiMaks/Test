function suma(a,b) {
    a = a || 13;
    b = b || 12;
    alert( a + b);
}

document.getElementById('b1').onclick = function() {
    suma( 10, 11);//аннонимная функция
}

var d = function() {
    alert ('work');
}

d();