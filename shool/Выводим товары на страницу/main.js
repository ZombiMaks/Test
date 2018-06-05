var goods = {
  "2020" : {
    "name" : "Banan",
    "cost" : 12,
    "img" : "https://cdn3.iconfinder.com/data/icons/fruits-8/512/banana-128.png",
    "sklad" : "yes"
},
    "2021" : {
    "name" : "Tomato",
    "cost" : 16,
    "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",   "sklad" : "yes"
    },
    "2022" : {
    "name" : "Strawberry",
    "cost" : 30,
    "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png", "sklad" : "no"
    }
};

console.log(goods);

var out = '';
for(var key in goods) {
    out += 'Name: ' + goods[key].name + '<br>';
    out += 'Cost: ' + goods[key].cost + '<br>';
    out += 'Number: ' + goods[key].sklad + '<br>';
    out += '<img src="' + goods[key].img + '">' + '<hr>';
}

document.getElementById('out').innerHTML = out;