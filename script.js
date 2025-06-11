
const bodyEl=document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{

    const XPOS=event.offsetX;
    const YPOS=event.offsetY;
    const spanE1=document.createElement("span");
    spanE1.style.left=XPOS+"px";
    spanE1.style.top=YPOS+"px";
    bodyEl.appendChild(spanE1);

    const size=Math.random()*100;
    spanE1.style.width=size+"px";
    spanE1.style.height=size+"px";

    setTimeout(()=>{
        spanE1.remove();
    },3000)
    

})


