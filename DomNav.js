// const element=document.getElementById("Non-veg");
// // fruits.style.backgroundColor="yellow";
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

// const elements=document.querySelectorAll("ul");
// elements.forEach(element => {
//     const firstChild=element.lastElementChild;
//     firstChild.style.backgroundColor="yellow";
// });


//nextsibling

// const element=document.getElementById("banana");
// const sibling=elements.nextElementSibling;
// sibling.style.backgroundColor="yellow";

//previous element sibling is same as this


//parentelement
// const element=document.getElementById("apple");
// const parent=element.parentElement;
// parent.style.backgroundColor="yellow";


//children
const element=document.getElementById("vegetables");
const children=element.children;
console.log(children);
// for(let child of children){
//     child.style.backgroundColor="yellow";
// }
Array.from(children).forEach(child => {
    child.style.backgroundColor="yellow";
}) 