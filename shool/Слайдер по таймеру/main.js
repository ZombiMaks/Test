/*autoSlider();

var left = 0;
var timer;

function autoSlider () {
    timer = setTimeout(sliderLeft, 1000); //задает время переключенияслайдера
}

function sliderLeft () {
    var polosa = document.getElementById('polosa');
    left = left -128;
    if ( left < -512 ) {
        
        left = 0;//возвращает в ис. положение
        clearTimeout(timer);//обнуление таймера
    } 
    
    polosa.style.left = left + 'px';
    autoSlider (); //задает повтор слайдера
}*/

autoSlider();

var left = 0;
var timer;

function autoSlider () {
    timer = setTimeout(function ()
    {
        var polosa = document.getElementById('polosa');
        left = left -128;
        if ( left < -512 ) {
        
        left = 0;
        clearTimeout(timer);
    } 
    polosa.style.left = left + 'px';
    autoSlider ();
    }
                       , 1000);
}
