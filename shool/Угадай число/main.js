var prNum, tempOut;//глобал. перемен.

    //Генерация числа программой
    prNum = Math.floor((Math.random() * 10) + 1);
    /*Math.random-генерирует число от 0 до 1
    .floor-округляет в меньшую сторану 9.9 = 9;*/
  function f2() {
    tempOut = document.getElementById('temp-out');
    tempOut.innerHTML = prNum;
  }

function f1() {
    var num, out;//локальная перем.
    
    num = document.getElementById('mynum').value;
    
    out = document.getElementById('out');
    
    if (num == prNum) {
        out.innerHTML = 'You are a Genius';
    }
    else if (num > prNum) {
        out.innerHTML = 'The number of morre';
    }
    else {
        out.innerHTML = 'The number is less than'
    }
}