var str = '';
document.getElementById('test').onkeypress = function(Event) {
    str = str + Event.key;
    console.log(str); //console.log(String.fromCharCode());
    this.value += String.fromCharCode(getRandomInt(65, 122));
    return false;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}