// console.log('hello');
// document.getElementById('one').textContent='hii';
// document.getElementById('two').textContent='i like pizza';
// let  firstname="Aravind";
// let age=30;
// let isstudent=false;
// document.getElementById("one").textContent= firstname;
// document.getElementById("two").textContent=`your age is ${age}`;
// document.getElementById("three").textContent=`enrolled: ${isstudent}`;

// User Input 1
// let username;
// document.getElementById("three").onclick=function(){
//     username=document.getElementById("two").value;
//     document.getElementById("one").textContent=`Hello ${username}`;
// }

// type conversion 2
// let varr=prompt("enter a no.");
// varr=Number(varr);
// varr+=1;
// console.log(varr);


// task - 3
const pi=3.14;
let radius;
let circumference;
document.getElementById("three").onclick=function(){
    radius=document.getElementById("two").value;
    // document.getElementById("one").textContent=radius;
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById("four").textContent=`circumference is ${circumference}`;
}

