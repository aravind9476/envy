// Mouse Events in js
//Event listener: lissten for specific events to create interactive web pages
//Events=click,mouseOver,mouseOut
//event is an object  provided to us automatically by the web browser. no need to pass it as an argument
//addEventListener(event,callback/anonoymus function/arrow function)
const mybox=document.getElementById("mybox");

mybox.addEventListener("click", (event) => {
         event.target.style.backgroundColor="blue";
         event.target.textContent="Clicked!"; 
});

mybox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor="yellow";
    event.target.textContent="MouseOver";
});

mybox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor="tomato";
    event.target.textContent="MouseOut";
});
