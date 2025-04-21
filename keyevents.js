const mybox=document.getElementById("mybox");

document.addEventListener("keydown", event => {
    mybox.textContent="leave";
    mybox.style.backgroundColor="tomato";
});

document.addEventListener("keyup",event =>{
    mybox.textContent="Box";
    mybox.style.backgroundColor="lightblue";
})


const moveAmount=8;
let x=0;
let y=0;

document.addEventListener("keydown",event =>{
    // console.log(event.key);
    if(event.key.startsWith("Arrow"))
    {
        event.preventDefault();
        switch(event.key){
            case "ArrowUp"   :
                y-=moveAmount;
                break;
            case "ArrowDown" :
                y+=moveAmount;
                break;
            case "ArrowLeft" :
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }
        mybox.style.top=`${y}px`;
        mybox.style.left=`${x}px`;
    }
});