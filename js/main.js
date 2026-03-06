/* PAGE LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{
document.getElementById("loader").style.display="none"
},1200)

})

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})

})

})

/* GALLERY LIGHTBOX */

const images=document.querySelectorAll(".gallery-img")
const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

const nextBtn=document.getElementById("next")
const prevBtn=document.getElementById("prev")
const closeBtn=document.querySelector(".close")

let current=0

function showImage(index){
lightboxImg.src=images[index].src
}

images.forEach((img,i)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"
current=i
showImage(current)

})

})

nextBtn.onclick=()=>{

current=(current+1)%images.length
showImage(current)

}

prevBtn.onclick=()=>{

current=(current-1+images.length)%images.length
showImage(current)

}

closeBtn.onclick=()=>{
lightbox.style.display="none"
}

/* KEYBOARD NAVIGATION */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight") nextBtn.click()
if(e.key==="ArrowLeft") prevBtn.click()
if(e.key==="Escape") closeBtn.click()

}

})