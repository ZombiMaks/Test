var p = document.getElementsByTagName('p');

for (var i=0; i<p.length; i++) {
    p[i].onclick = f1;
}

function f1() {
    this.style.background = 'red';
}