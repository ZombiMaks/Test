// 1

/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(name){
    return name.length;
});

alert( arrLength );
*/

// 2

var arr = [1, 2, 3, 4, 5 ];

function getSums(arr) {
    
var resylt = [];
    if ( !arr.length) return resylt;
    var totalSum = arr.reduce(function( sum, i){
        resylt.push(sum);
        return sum + i;
   //console.log(current);
   // console.log(sum);
    //console.log(i);
   });
    resylt.push(totalSum);
    return resylt;
}

alert(getSums( arr ));