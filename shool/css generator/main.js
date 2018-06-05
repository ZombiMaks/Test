document.getElementById('r1').oninput = cssGenerator;

var div = document.getElementById('test');

var cssBorder = document.getElementById('out');

var color = document.getElementById('out1');
    
function cssGenerator() {
    
    div.style.borderRadius = this.value + 'px';
    
    cssBorder.innerHTML = 'border-radius: ' + this.value + 'px;\n';
    cssBorder.innerHTML += '-webkit-border-radius: ' + this.value + 'px;\n';
}

document.getElementById('color').oninput = cssColor;

function cssColor() {
    div.style.background = this.value;
    
    color.innerHTML = 'background: ' +  this.value + ';';
}