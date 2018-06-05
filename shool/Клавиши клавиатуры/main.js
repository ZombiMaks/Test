//document.onkeypress = function(Event) {
//    console.log(Event.key);
//}

document.getElementById('test').onkeypress = function key(Event){
    //console.log(Event);
    if(Event.keyCode < 48 || Event.keyCode>57) {
        console.log('No number');
        return false;//запрещаем ввод не цифры
    }
}

