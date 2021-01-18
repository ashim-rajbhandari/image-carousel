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

dotcontainer = document.getElementById('position');

dot=[];
    for (i = 0; i < imagesArray.length; i++) {
        var dots=document.createElement("span");
        dots.classList.add("dot");
        dotcontainer.append(dots);
        dots.setAttribute("onclick","currentSlide("+i+")");
        dot.push(dots);
    
   }
        dot[currentIndex].classList.add("active");

function currentSlide(n){
    
    // var dots = document.getElementsByClassName("dot");
    if(currentIndex > dot.length - 1 ){
        currentIndex = 0;
    }
    if(currentIndex < 0 ){
        currentIndex = 2;
    }

    for (i = 0; i < dot.length; i++) {
        console.log(dot[i].className = dot[i].className.replace(" active", ""));
    }
    console.log(dot[currentIndex].className += " active");
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