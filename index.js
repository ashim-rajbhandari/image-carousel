const images = document.getElementsByTagName('img');
console.log(images);
const width = 800;
const height = 500;

const imagesArray= [];

for(let i = 0; i < images.length; i++){
    const image = images[i];

    image.style.left = (i*width) + 'px';
    imagesArray.push(image);
}
console.log(imagesArray);


let currentIndex = 0;

function currentSlide(n){
    
    var dots = document.getElementsByClassName("dot");
    console.log(dots);
    if(currentIndex >2 ){
        currentIndex = 0;
    }
    if(currentIndex < 0 ){
        currentIndex = 2;
    }

    for (i = 0; i < dots.length; i++) {
        console.log(dots[i].className = dots[i].className.replace(" active", ""));
    }
    console.log(dots[currentIndex].className += " active");
}


function animate(n){
    currentIndex ++;

    imagesArray.forEach((image, index)=> {
        
        image.style.left =((index - currentIndex) % imagesArray.length * width) + "px";
    })
    
    console.log(currentSlide());
    
 }

 function back(){
    currentIndex--;

    imagesArray.forEach((image, index)=> {
        console.log(image.style.left =(( index - currentIndex) % imagesArray.length * width) + "px");
    
    })
    currentSlide();
 }
 
setInterval(function(){ 
        animate();
     }, 4000);

 const btn = document.getElementById('btn');
 btn.addEventListener('click',animate);

 const btn1 = document.getElementById('btn1');
 btn1.addEventListener('click',back);