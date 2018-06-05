var block = document.getElementById('one');
//
//block.onclick = function () {
//    this.style.background = 'red';
//}

//двойной клик мышью
//block.ondblclick = function () {
//    this.style.background = 'pink';
//}

//клик правой кнопкой
//block.oncontextmenu = function () {
//    this.style.background = 'black';
//    return false;//запрет вывода контекстного меню браузером
//}

// document.oncontextmenu = function () {
//     return false;//запрет вывода контекстного меню браузером на всей странице
// }
 
//при наведении 
/*block.onmouseenter = function () {
    this.style.background = 'gold';
}

//при отведении
block.onmouseleave = function () {
    this.style.background = 'orange';
}*/


//движение мышью
/*a = 0;
block.onmousemove = function () {
    a++;
    this.style.width =  100 + a + 'px';
}*/


//нажимаем и держим кнопка любая
block.onmousedown = function (event) {
    this.style.background = 'green';
    console.log( 'which: ' + event.which);//показывает кокая кнопка нажата  
}

//нажимаем и отпускаем
block.onmouseup = function() {
    this.style.background = 'purple';
}



