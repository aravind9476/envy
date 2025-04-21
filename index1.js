
// Rolling a dice 


const max=100;
const min=50;
let x=Math.floor(Math.random()*(max-min+1))+min;
console.log(x);
// const button=document.getElementById("button");
// const come=document.getElementById("come");
// const come1=document.getElementById("come1");
// const come2=document.getElementById("come2");
// // let randomnum;
// button.onclick=function(){
//     const randomnum1=Math.floor(Math.random()*6)+1;
//     const randomnum2=Math.floor(Math.random()*6)+1;
//     const randomnum3=Math.floor(Math.random()*6)+1;
//     // console.log(randomnum);
//     come.textContent=randomnum1;
//     come1.textContent=randomnum2;
//     come2.textContent=randomnum3;
// }