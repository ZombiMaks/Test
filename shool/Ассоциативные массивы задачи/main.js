var man = {
    "name" : "Maksim",
    "age" : "28" ,
    "sex" : "man",
    "id" : "455"
};

var man2 = {
    "name" : "Maksim",
    "age" : "28" ,
    "sex" : "man",
    "id" : "455",
    "year" : function () {
        return 2018 - this.age;//год рождения
    }
};

//console.log(man);
//console.log(man.age);
//console.log(man.name);
console.log( man2.year() );

var m = {
    "mas" : [5, 7, 45, 12, 45],
    "sum" : function (){
    var sum = 0;
    for (var i=0; i<this.mas.length; i++){
    sum = sum +this.mas[i];
}
return sum;
}
}

console.log(m.sum());