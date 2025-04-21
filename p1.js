const decresebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const incresebtn=document.getElementById("increasebtn");
const zero=document.getElementById("zero");
let count=0;

decresebtn.onclick=function(){
    count--;
    zero.textContent=count;
}
incresebtn.onclick=function(){
    count++;
    zero.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    zero.textContent=count;
}
