const images = document.getElementsByTagName('img');
console.log(images);
const width = 800;
const height = 400;

const imagesArray= [];

for(let i = 0; i < images.length; i++){
    const image = images[i];

    image.style.left = (i*width) + 'px';
    imagesArray.push(image);
}
console.log(imagesArray);


let currentIndex = 0;
// function currentSlide(currentIndex) {
//     var dots = document.getElementsByClassName("dot");
//     console.log(dots);
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     dots[currentIndex].dot += " active";
//   }
function currentSlide(n){
    
    var dots = document.getElementsByClassName("dot");
    console.log(dots);
    if(currentIndex >2 ){
        currentIndex = 0;
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
 }
 
//  setInterval(function(){ 
//        animate();
//     }, 1000);

 const btn = document.getElementById('btn');
 btn.addEventListener('click',animate);

 const btn1 = document.getElementById('btn1');
 btn1.addEventListener('click',back);