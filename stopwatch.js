const display=document.getElementById("display");
let starttime=0;
let elapsedtime=0;
let timer=null;
let isRunning=false;

function start(){
    if(!isRunning){
        starttime=Date.now()-elapsedtime;
        // console.log(Date.now());
        // console.log(starttime);
        timer=setInterval(update,10);
        console.log(timer);
        isRunning=true;
    }

}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedtime=Date.now()-starttime;
        isRunning=false;
    }
}

function Reset(){
    clearInterval(timer);
     starttime=0;
     elapsedtime=0;
     isRunning=false;
    display.textContent="00:00:00:00";
}

function update(){
    const currenttime=Date.now();
    elapsedtime=currenttime-starttime;
    let hours=Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes=Math.floor(elapsedtime / (1000 * 60) % 60);
    let seconds=Math.floor(elapsedtime / 1000 % 60);
    let milliseconds=Math.floor(elapsedtime % 1000 / 10);
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}