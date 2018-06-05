var block = document.getElementById('test');
var left1 = 0;
var top1 = 0;
var down1 = 0;
var right1 = 0;


document.onkeydown = function (event) {
    console.log(event);
   
    if (event.key == 'ArrowLeft') {
    block.style.left = left1 + 'px';
    left1++;
    }
    if (event.key == 'ArrowUp') {
    block.style.top = top1 + 'px';
    top1++;
    }
    if (event.key == 'ArrowRight') {
    block.style.right = right1 + 'px';
    right1++;
    }
    if (event.key == 'ArrowDown') {
    block.style.bottom = down1 + 'px';
    down1++;
}
    
}