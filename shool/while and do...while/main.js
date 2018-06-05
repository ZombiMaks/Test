function f1() {
    var p, p1;
    p = document.getElementById('out');
    p1 = document.getElementById('out1');
    
    var i = 0; //счетчик цикла
    
    while(i < 50) {
        p.innerHTML += i + ' ';
        i++;
    }
    
    var j = 100;
    do {
        j = j - 2;
       p1.innerHTML += j + ' '; 
        
    }
    while (j > 0);
}