var run = 0;
var timer;

var test = document.getElementById('test');

//move();

function move () {
    test.style.marginLeft = run +  'px';
    
    run += 3;
    
    timer = setTimeout(move, 50);
}

//setInterval(function_name, time);
//var tr = setInterval(move, 10);

document.getElementById('button').onclick = function () {
   // clearInterval(tr);
    clearTimeout(timer);
}

//обратный отсчет
var a = 10;
obr();

function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a < 0) {
        clearTimeout(timer);
    }else{
    timer = setTimeout(obr, 1000);
    }
} 