const open=document.querySelector(".two");
const box2=document.querySelector(".box2");
open.addEventListener("click",()=>{
    box2.style.height="200px";
    open.style.display="none";
    close.style.display="block";
});
const close=document.querySelector(".three");
close.addEventListener("click",()=>{
    box2.style.height="0px";
    open.style.display="block";
    close.style.display="none";
});