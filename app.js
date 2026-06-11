let mode=document.querySelector(".mode");
let craft=document.querySelector(".craft");
let body=document.querySelector("body");
let nav=document.querySelector(".nav-bar");
let menu2=document.querySelector(".menu2")
let talk=document.querySelector(".talk")
let overlay=document.querySelector(".overlay");
let together=document.querySelector(".together");
let leo=document.querySelector(".leo");
let overlaymenu=document.querySelector(".overlay-menu");
let allOptions = document.querySelectorAll(".options");
mode.addEventListener("click",()=>{
    if(mode.innerText=="DARK MODE"){
    body.style.backgroundColor="black";
    craft.style.color="white";
    nav.style.color="white";
    mode.innerText="LIGHT MODE"
    
allOptions.forEach((options) => {
        overlaymenu.style.backgroundColor="black";
          let text = options.querySelector("p");
          text.style.color="white";
    }
    
)}
else{
    if(mode.innerText=="LIGHT MODE"){
    body.style.backgroundColor="white";
    craft.style.color="black";
    nav.style.color="black";
    mode.innerText="DARK MODE"
    allOptions.forEach((options) =>{
        overlaymenu.style.backgroundColor="white";
          let text = options.querySelector("p");
          text.style.color="black";
    }
)}}})


menu2.addEventListener("mouseenter", () => {
    if(menu2.innerText == "MENU") {
        menu2.innerText = "OPEN";
    }
});
menu2.addEventListener("mouseleave", () => {
    if(menu2.innerText == "OPEN") {
        menu2.innerText = "MENU";
    }
});

menu2.addEventListener("click", () => {
    if(overlaymenu.classList.contains("activate")) {
        overlaymenu.classList.remove("activate");
        menu2.innerText = "MENU";
    } else {
        overlaymenu.classList.add("activate");
        nav.style.zIndex="1000";
        menu2.innerText = "CLOSE";
    }
});



allOptions.forEach((options) => {
    
    let img = options.querySelector("img");
    let text = options.querySelector("p");

    options.addEventListener("mouseenter", () => {
        img.style.opacity = "1";
        img.style.transform = "translateX(0)";
        text.style.transform = "translateX(160px)";
    });

    options.addEventListener("mouseleave", () => {
        img.style.opacity = "0";
        img.style.transform = "translateX(-50px)";
        text.style.transform = "translateX(0)";
    });
});

    


talk.addEventListener("mouseenter",()=>{
    talk.innerText="CONTACT US"})
    talk.addEventListener("mouseleave",()=>{
    talk.innerText="LET'S TALK"})
talk.addEventListener("click",()=>{
    overlay.classList.add("active");
    nav.style.zIndex="-1";
    setTimeout(()=>{
    together.classList.add("active2");
    leo.classList.add("active3");
    },800);})
let close=document.querySelector(".close");
close.addEventListener("click",()=>{
    overlay.classList.remove("active");
    nav.style.zIndex="1000";
   
    
})  
let one=document.querySelectorAll(".one");
for(let i of one){
    i.addEventListener("click",()=>{
    for(btn of one){
        btn.style.color="";
        btn.style.backgroundColor="";
    }
    
    i.style.backgroundColor="black";
    i.style.color="white";});
};




   






