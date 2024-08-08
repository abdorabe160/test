let sliderImg=document.querySelector('.slider-img');
let images=['1.webp','2.jpg','3.webp','4.jpg','5.jpg','6.jpg'];
let p1=document.querySelector('.slider-img');





function change(x){
    p1.src = x;
}


let i=0;
function prev(){
    if(i<=0) i=images.length;
        i--;
    return setImg();
}

function next(){
    if(i>=images.length - 1) i=-1;
        i++;
    return setImg();
}


function setImg(){
    return sliderImg.setAttribute('src','images/'+images[i])
}