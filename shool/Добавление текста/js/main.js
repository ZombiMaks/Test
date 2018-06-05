function out() {
    var p, r;
    r = document.getElementById('out2');
    p = document.getElementById('out');
    
    //p.innerHTML = 'Zombi';меняет текст
    
    //p.innerHTML += ' <b>Zombi</b>';//добавляет текст и обрабатывает теги
    
    //p.innerText += 'Hi';//добавляет текст и теги не обрабатывает (работает в Explorer)
    
    //p.insertAdjacentHTML('beforeBegin', '<p class="text">Zombi</p>');
    /*beforeBegin - вставляет текст перед открывающимся тегом;
    afterEnd-после закрывающ. тега;
    afterBegin-перед текстом внутри тэга;
    beforeEnd-после текста внутри тэга;*/
    
    p.outerHTML = '<div class="new">Zombi</div>';//меняет полность тег
    
} 