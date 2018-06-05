document.onmousemove = function()  {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img id="cat" src="https://cdn0.iconfinder.com/data/icons/yooicons_set09_halloween/48/cheshire_cat.png" alt="">')

var cat = document.getElementById('cat');
cat.style.position = 'fixed';

document.onmousemove = function (event) {
    cat.style.left = event.clientX +20+'px';
    cat.style.top = event.clientY +20+'px';
    
}
}