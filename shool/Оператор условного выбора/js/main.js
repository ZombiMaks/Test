function result() {
var a = 10,
    b = document.getElementById('number').value,
    p = document.getElementById('out');
    b = parseInt(b);

if (a > b) {
    p.innerHTML = 'Ваше число маленькое';
} else if(a == b){
    p.innerHTML = 'Ваше число равно';
} else {
    p.innerHTML = 'Ваше число большое';
}
}