// 1
//Create date
/*
var date = new Date(2012, 1, 20, 3, 12);
alert( date );
*/

// 2
//Name day of week
/*
function getWeekDay (date) {
    var arr = [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return arr[date.getDay()];
}

var date = new Date(2012,0,3);
alert( getWeekDay(date) );  


var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) );
*/

// 3
//Day week eu numeric
/*
function getLocalDay(date) {
    var day = date.getDay();
    
    if( day == 0) {
        day = 7;
    }
    return day;
}

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
*/

// 4
//Number day
/*
function getDateAgo(date, days) {
    
    var newDay = new Date(2015, 0, 2);
    
    newDay.setDate(date.getDate() - days);
    return newDay;
}

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
*/

// 5
//Last day month
/*
function getLastDayOfMonth(year, month){
    
     //var date = new Date(year, month + 1, 0);
    //return date.getDate();
    
    var date = new Date(year, month + 1);
    console.log(date);
    date.setDate(0);
    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1) );
*/

// 6
//How many seconds passed today
/*
function getSecondsToday(date) {
    var second = (date.getHours() * 3600) + (date.getMinutes() * 60) +  date.getSeconds();
    return second;
}

var date = new Date();//текущее время

console.log(getSecondsToday(date));
*/

// 7
//How many seconds to tomorrow
/*
function getSecondsToTomorrow(){
    var seconds = 86400 - ((date.getHours() * 3600) + (date.getMinutes() * 60) +  date.getSeconds());
    
    return seconds;   
}

var date = new Date();
alert(getSecondsToTomorrow(date));
*/

 // Or
/*
function getSecondsToTomorrow() {
  var now = new Date();

  // создать объект из завтрашней даты, без часов-минут-секунд
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  var diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // перевести в секунды
}
*/

// 8
//Date in format dd.mm.yy

/*
function formatDate(date) {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    return date.toLocaleDateString("ru", options);
}
*/

// or 
/*
function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


var d = new Date(2014, 0, 30); // 30 Янв 2014
alert( formatDate(d) ); // '30.01.14'
var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'
*/

// 9 
//date formating

function formatDate(date) 
{
    var forDate = new Date() - date;
    
    if (forDate < 1000) {
        return 'Только что';
    }
    
    else if (forDate < 60 * 1000) {
        return forDate / 1000 + ' сек. назад';
    }
    
    else if (forDate < 60 * 60 * 1000) {
        return forDate / 1000 / 60 + ' мин. назад'
    }else{
       var d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ];

  for (var i = 0; i < d.length; i++) {
    d[i] = d[i].slice(-2);
  }

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
    
}

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"