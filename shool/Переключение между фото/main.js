document.getElementById('myslider').onmousemove = function (event) {
     var x = event.offsetX;//относительно родителя
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
}

document.getElementById('myslider').onmouseleave = function(event) {document.getElementById('two').style.width = '1200px';
                                                                   }