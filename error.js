// try{
//     const dividend=window.prompt("enter a value");
//     const divisor=window.prompt("enter divisor");

//     // if(divisor==0){
//     //     throw new Error("divisor should not be zero");
//     // }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("values must be a number");
//     }
// let result=dividend/divisor;
// console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// console.log("you have reached to end!");



//DOM
// const username="";
// const msg=document.getElementById("welcome-msg");
// // msg+=username===""?"Guest":  username;
// msg.textContent+= username===""? "Guest":username;



//element selectors
// const msg=document.getElementById("welcome-msg");  
// msg.style.backgroundColor="red";
// msg.style.textAlign="center";
// console.log(msg);    

//getelement by class names
// const fruits=document.getElementsByClassName("fruits");
// fruits[2].style.backgroundColor="yellow";
// console.log(fruits);

// // for(let fruit of fruits){
// //     fruit.style.backgroundColor="red";
// //     fruit.style.textAlign="center";
// // }

// Array.from(fruits).forEach(fruit => fruit.style.backgroundColor="orange");


//get element by tagname
// const h4elements=document.getElementsByTagName("h4");
// const lielements=document.getElementsByTagName("li");

// console.log(h4elements);
// h4elements[1].style.backgroundColor="yellow";
// for(let h4element of h4elements){style
//     h4element.style.backgroundColor="yellow";

// }
// for(let lielement of lielements){
//     lielement.style.backgroundColor="lightgreen";
// }
// Array.from(lielements).forEach(lielement => lielement.style.backgroundColor="lightgreen");
// Array.from(h4elements).forEach(h4element => h4element.style.backgroundColor="yellow");


//query  selector :apply styles to  first element and queryselectall will apply styles to all elements
const fruits=document.querySelectorAll("li");
// for(let fruit of fruits){
//     fruit.
// }
console.log(fruits);
fruits.forEach(fruit => fruit.style.backgroundColor="yellow");