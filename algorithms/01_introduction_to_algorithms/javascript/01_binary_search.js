'use strict';


/*function binary_search(list, item) {
  
  let low = 0;
  let high = list.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return 'none';
}

var my_list = [1, 3, 5, 7, 9];

//выводит элемент, по нажатию кнопки, в браузер

function one() {
   let name = document.getElementById('name').value;  
    name = +name;
   document.getElementById('tel').innerHTML = binary_search(my_list, name);
}
*/

var userName = {
    'maks' : ['Kolesnik Maksim', '<br>28 year'],
    'nina' : ['Kolesnik Nina', '<br>25 year']
}

  //мини справочник

function maks() {
    var name = document.getElementById('name1').value;
    
    var age = '<br>' + document.getElementById('age').value + 'years';
    
    userName[name] += [name, age];
    
    console.log(userName);
}


document.getElementById('informButton').onclick = function () {
    var inform = document.getElementById('inform').value;
     
    console.log(inform);
    //alert(userName[inform]);

   document.getElementById('information').innerHTML += userName[inform];
    
}
