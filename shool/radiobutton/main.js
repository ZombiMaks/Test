var m = document.getElementsByName('cheken');

for (var i=0; i<m.length; i++){
    m[i].onchange = testRadio;
}

function testRadio(){
    console.log(this.value);
}

 document.getElementById('one').onclick = testClick;

function  testClick() {
    var n = document.getElementsByName('cheken');
    for ( var i=0; i<n.length; i++){
        if (n[i].checked){
         alert(n[i].value);
            break;
        }
    }
    
}