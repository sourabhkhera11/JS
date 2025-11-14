const images = document.querySelectorAll('.carousel span');
let index=0;
const indi=document.querySelectorAll('.indicators div');
const showImage=(i)=>{
    document.querySelector(".imgBlock.active").classList.remove('active');
    document.querySelector(".indicator.active").classList.remove('active');
    images[i%images.length].classList.add('active');
    indi[i%indi.length].classList.add('active');
}
function previous(){
    index=(index-1+images.length)%images.length;
    showImage(index);
}
function next(){
    index=(index+1)%images.length;
    showImage(index);
}
function indicator(event){
    index=event.target.id; //to main consistency
    showImage(index);
}

















// if(i==0){
//         images[images.length-1].classList.remove('active');
//         indi[indi.length-1].classList.remove('active');
//     }
//     else{
//         images[i-1].classList.remove('active');
//         indi[i-1].classList.remove('active');
//     }
//     if(i==images.length){
//         images[0].classList.remove('active');
//         indi[0].classList.remove('active');
//     }
//     else{
//         images[(i+1)%images.length].classList.remove('active');
//         indi[(i+1)%indi.length].classList.remove('active');
//     }