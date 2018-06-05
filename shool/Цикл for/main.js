function f1() {
    var p = document.getElementById('out');
    
    //заполняем количество повторений
    
    for(var i = 0; i <= 100; i= i + 1) {
        p.innerHTML += ' ' + i;
    }
}