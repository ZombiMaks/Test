var m =[];
var m1 = [2, 43, 54, 'Hello'];
m1[4] = 54; //добавляет значение в масив
console.log(m1);
//alert (m1.length); //длинна массива

 /*for (var i = 0; i < m1.length; i++) {
     document.getElementById('out').innerHTML += m1[i] + '<br>';
 } */

function masOut() {
    var p = document.getElementById('out');
    var str = '';
    
    for (var i = 0; i < m1.length; i++) {
     str += i +' - ' + m1[i] + '<br>';
 }
    p.innerHTML = str;
}
masOut();//выводит массив

function f1() {
    var i1 = document.getElementById('i1').value;
    
    m1.push(i1);//добавляем значение в массив
    masOut();
}

function f2() {
    m1.pop();//удоляет последний элемент массива
    masOut();
}

