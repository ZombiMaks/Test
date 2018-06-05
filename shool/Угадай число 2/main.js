//var number = Math.floor(Math.random() * (max - min + 1)) + min;
var number = Math.floor(Math.random() * 10) + 1;// 1-10 num;
console.log(number);
var count = 5;

document.getElementById('check').onclick = function () {
    if(count > 0){
        var usernum = document.getElementById('mynum').value,
            out = document.getElementById('out');
        usernum = parseInt(usernum);

        if (usernum == number) {
            out.innerHTML = 'Ура вы угадали!!!';
        }
        else if (usernum > number) {
            out.innerHTML = 'Перелет';
        }
        else {
            out.innerHTML = 'Недолет';
        }
        document.getElementById('count').innerHTML = 'Осталось попыток ' + count;
         count--;
    }
    else {
        var re = confirm('Может еще раз?');
        if(re == true){
             location.reload();
        }
//        alert(x);
       else {
           document.getElementById('out').innerHTML = 'Игра окончена';
           document.getElementById('count').style.display = 'none';
       }
    }
}