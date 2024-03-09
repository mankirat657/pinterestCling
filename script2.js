let toggle = 0;


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
let drop2 = document.querySelector(".dropAccount")
let commentB = document.querySelector(".commentContainer")
let onfocard = document.querySelectorAll(".infoCard1")
let notification1 = document.querySelector(".notificationDropdown")
const menuinfo = document.querySelector(".menuInfo")
const links = document.querySelectorAll(".links ul li a")
const meny = document.querySelector("#meny")
const containerbox = document.querySelectorAll(".right")
console.log(containerbox)
let nav = document.querySelector("nav");
let body = document.querySelector('body')
document.querySelector("#dark").addEventListener("click",()=>{
    if(toggle=!toggle){
        body.style.background = '#15202B'
        nav.style.background = '#15202B'
        nav.style.color = 'white'
        body.style.color = 'white'
        document.querySelector("#dark").style.filter = "invert(1)"
        meny.style.filter = 'invert(1)'
        menuinfo.style.background = '#22303C'
        notification1.style.background = '#22303C'
        commentB.style.background = "#22303C"
        drop2.style.background = "#22303C"
        for(j in onfocard){
            onfocard[j].style.background = "black"
        }

        for(i in containerbox){
            containerbox[i].style.background = '#2d4050';
            containerbox[i].style.border - "1px solid black"
        }
        
     
    }
    else{
        body.style.background = 'White'
        body.style.color = 'black'
        nav.style.background = 'white'
        nav.style.color = 'black'
        document.querySelector("#dark").style.filter = "invert(0)"
        menuinfo.style.background = 'white'
        notification1.style.background = 'white'
        commentB.style.background = "white"
        drop2.style.background = "white"
        for(j in onfocard){
            onfocard[j].style.background = "unset"
        }
        
        for(i in containerbox){
            containerbox[i].style.background = 'unset';
        }
    }
})