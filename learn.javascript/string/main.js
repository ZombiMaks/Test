// Задача 1

/*function ucFirst(str) {
    str = str[0].toUpperCase() +     str.slice(1);
    return str;
}
 
console.log(ucFirst("maks"));

var one = 'zombi';

console.log(one[0].toUpperCase() + one.slice(1));*/

// Задача 2

/*function checkSpam(str) {
  str = str.toLowerCase();
  var target = str.indexOf('viagra');   
  var target2 = str.indexOf('xxx');
    
  console.log(target);
  console.log(target2);
    
    
  if ( target > 0 ){
     alert(true);
   }
   else if ( target2 > 0 ){
     alert(true); 
    
  }else {
      alert(false);
  }

}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");*/

// Задача 3

/*function truncate(str, maxlength) {
   
    var long = str.length;
    
    if ( long > maxlength ) {
      var string = str.substr(0, maxlength - 1);
       return string + '...';
    }else {
        return str;
    }
    
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));*/

// Задача 4

function extractCurrencyValue(str) {
    str = +str.slice(1);
    return str;
    
}


console.log(extractCurrencyValue('$120'));
