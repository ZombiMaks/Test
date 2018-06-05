//var prim, num2;
//prim = 3;
//prim ='hello';
//num2 = 5;


function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);//преобразует к целомму числу
    
    result = num1 + num2;
    document.getElementById('out').innerHTML = result ;//вводит значение в строку с ид out
}
function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);//преобразует к целомму числу
    
    result = num1 - num2;
    document.getElementById('out').innerHTML = result ;//вводит значение в строку с ид out
}