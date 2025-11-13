const images=document.querySelectorAll('.carousel img');
console.log(images);

const prev=document.getElementById("prev");
const next=document.getElementById("next");

let index=0;

const showImage=(i)=>{
    // images.forEach((img)=>{
    //     img.classList.remove('active');
    // })
    if(i==0){
        images[images.length-1].classList.remove('active');
    }
    else{
        images[i-1].classList.remove('active');
    }
    if(i==images.length){
        images[0].classList.remove('active');
    }
    else{
        images[(i+1)%images.length].classList.remove('active');
    }
    images[i%images.length].classList.add('active');
}

prev.addEventListener("click",()=>{
    index=(index-1+images.length)%images.length;
    showImage(index);
})

next.addEventListener("click",()=>{
    index=(index+1)%images.length;
    showImage(index);
})
const indicator=document.querySelectorAll('.indicators div');
console.log(indicator);

indicator.addEventListener("click",()=>{
    
})
