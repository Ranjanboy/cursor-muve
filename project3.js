let box=document.querySelector("#main");
let crsr=document.querySelector(".cursor");

box.addEventListener("mousemove",function(e){
    crsr.style.left= e.x+"px"
    crsr.style.top=e.y+'px'

});