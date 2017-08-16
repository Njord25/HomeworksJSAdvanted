var items;
var length;
var deg;
var z;
var move = 0;

function load(){
    items = document.getElementsByClassName('item');
    length = items.length;
    imgs = ['./img/img01.jpeg', './img/img02.jpg', './img/img03.jpg', './img/img04.jpg', './img/img05.jpg', './img/img06.jpg'];
    console.log(items);
    console.log(imgs[0])
    deg = 360 / length;
    z = (items[0].offsetWidth / 2) / Math.tan((deg / 2) * (Math.PI / 180));

    for (var i = 0; i < length; i++) {
        items[i].style.transform = "rotateY("+(deg*i)+"deg) translateZ("+z+"px)";
        var img = document.createElement('img');
        img.src= imgs[i];
        items[i].appendChild(img); 
    }

}

function rotate(direction){
    move += direction;

    for (var i = 0; i < length; i++) {
        items[i].style.transform = "rotateY("+(deg*(i+move))+"deg) translateZ("+z+"px)";
    }
};

window.addEventListener('load', load);

var next = document.getElementById('next');
next.addEventListener('click', function(){
    rotate(-1);
})

var prev = document.getElementById('prev');
prev.addEventListener('click', function(){
    rotate(1);
})



