const font = document.querySelector("#sizeMores");
const images = document.querySelectorAll('.containerHamInfo .listItems img');
const Prev = document.querySelector(".controlPrevious");
const Next = document.querySelector(".controlNext");
let n = 0;
let toggle = 0;
let obj = {
    "Title" : "Explore Different Anime Related Content,Themes,Gallery and much more",
    "Title2" : "Explore Different Music Related Content,Albums,Videos and Audios",
    "Title3" : "Aesthetic Cars Which will blow your mind you can explore all cars",
    "Title4" : "All foods ideas which will amaze you ",
    
}
function changeSlide(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
        images[i].style.transition = "0.3s ease";  
        font.style.display = "none"

    }
    
    
    images[n].style.display = "block";
    font.style.display = "block"
    
}
changeSlide();
Prev.addEventListener("click",(e)=>{
    if(n>0){
        n--;
    }
    else{
        n = images.length-1
        
    }

    changeSlide();
    changeContent()
})
Next.addEventListener("click",(e)=>{
    if(n<images.length-1){
        n++;
    }
    else{
        n = 0;
    }
   
    changeSlide();
})


document.querySelector(".show").addEventListener("click",()=>{
    document.querySelector(".display").style.display = "block"
    document.querySelector(".display2").style.display = "block"
    document.querySelector(".display3").style.display = "block"
    document.querySelector(".display4").style.display = "block"
    document.querySelector(".show").style.display = "none"
})

changeSlide();

function changeContent(){
    for (let i = 0; i < obj.length; i++) {
        const element = obj[value];
        if(n<0){
            font.innerHTML = obj[obj.length-1]
        }
    }

}
changeContent()
logo = document.querySelector(".logo");
info = document.querySelector(".menuInfo")
logo.addEventListener("click",function(e){
    if(toggle =! toggle){

        info.style.left = "0%"
        info.style.display = "block"
        info.style.transition = "0.3s ease-in-out"
    }
    else{
        info.style.left = "120%"
        info.style.display = "none"
        info.style.transition = "0.3s ease-in-out"
    }

})
profile = document.querySelector(".profile")
enable = document.querySelector(".profileDropdown")
profile.addEventListener("click",()=>{
    if(toggle=!toggle){
        enable.style.display = "block"
        enable.style.left = "48%"
        enable.style.top = "17%"
        document.getElementById("toogle").src = "images/arru.png"
    }
    else{
        document.getElementById("toogle").src = "images/arrow.svg"
        enable.style.display = "none"
        enable.style.left = "-120%"
    }
})
document.querySelector(".svg1").addEventListener("click",()=>{
    document.querySelector(".search input").style.display = "block"
    
})
notification = document.querySelector(".notificationDropdown");
document.querySelector(".svg2").addEventListener("click",()=>{
    if(toggle=!toggle){
        notification.style.display = "block"
        notification.style.right = "0"
    }
    else{
        notification.style.display = "none"
        notification.style.right = "100%"
       
    }
    comment2.style.display = "none"
    dropAcc.style.display = "none"
})

comment2 = document.querySelector(".commentContainer");

document.querySelector(".svg3").addEventListener("click",()=>{
    if(toggle=!toggle){

        comment2.style.display = "block"
        comment2.style.right = "0"
    }
    else{
        comment2.style.display = "none"
        comment2.style.right = "-120%"
        
    }
    notification.style.display ="none"
    dropAcc.style.display = "none"
})

dropAcc = document.querySelector(".dropAccount");

document.querySelector(".svg6").addEventListener("click",()=>{
    if(toggle=!toggle){
        dropAcc.style.display = "block"
        dropAcc.style.right = "0"

    }
    else{
        dropAcc.style.display = "none"
        dropAcc.style.right = "-120%"

    }
    notification.style.display ="none"
    comment2.style.display = "none"
})
cont = document.querySelector(".container");
slide = document.querySelector(".box1Content");

cont.addEventListener("mouseover",()=>{
    slide.style.display = "block"
    slide.style.left = "2%"
    
})
cont.addEventListener("mouseout",()=>{
    slide.style.display = "none"
    slide.style.left = "-120%"

})
cont = document.querySelector(".container");
slide2 = document.querySelector(".box2Content");

cont.addEventListener("mouseover",()=>{
    slide2.style.display = "block"
    slide2.style.left = "34.5%"
    
})
cont.addEventListener("mouseout",()=>{
    slide2.style.display = "none"
    slide2.style.left = "-150%"

})

cont = document.querySelector(".container");
slide3 = document.querySelector(".box3Content");

cont.addEventListener("mouseover",()=>{
    slide3.style.display = "block"
    slide3.style.left = "67%"
    
})
cont.addEventListener("mouseout",()=>{
    slide3.style.display = "none"
    slide3.style.right = "-120%"

})
let drop2 = document.querySelector(".dropAccount")
let commentB = document.querySelector(".commentContainer")
let onfocard = document.querySelectorAll(".infoCard1")
let notification1 = document.querySelector(".notificationDropdown")
const menuinfo = document.querySelector(".menuInfo")

let nav = document.querySelector("nav");
let body = document.querySelector('body')
document.querySelector("#dark").addEventListener("click",()=>{
    if(toggle=!toggle){
        body.style.background = 'black'
        nav.style.background = 'black'
        nav.style.color = 'white'
        body.style.color = 'white'
        document.querySelector("#dark").style.filter = "invert(1)"
        menuinfo.style.background = "black"
        notification1.style.background = "black"
        commentB.style.background = "black"
        drop2.style.background = "black"
        for(i in onfocard){
            onfocard[i].style.background = "#212121"
        }
    }
    else{
        body.style.background = 'White'
        body.style.color = 'black'
        nav.style.background = 'white'
        nav.style.color = 'black'
        document.querySelector("#dark").style.filter = "invert(0)"
        menuinfo.style.background = "white"
        notification1.style.background = "white"
        commentB.style.background = "white"
        drop2.style.background = "white"
        for(i in onfocard){
            onfocard[i].style.background = "unset"
        }
    }
})