//Create the element
const myh1=document.createElement("h1");

//Add attribute/properties
myh1.textContent="I like pizza!";
myh1.id="myh1";
myh1.style.color="tomato";
myh1.style.textAlign="center";

//Append element to dom
// document.body.append(myh1);
// document.getElementById("box1").prepend(myh1);
document.getElementById("box2").append(myh1);

// const box1=document.getElementById("box3");
// document.body.insertBefore(myh1,box1);

// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(myh1,boxes[2]);

//remove html element
// document.getElementById("box1").removeChild(myh1);
//we have to mention parent of that child not grandparent ex: we cant mention body inplace getelementbyid
//if this myh1 i preent in body outside the boxes then we use body like document.body.removeChild(myh1);


// const myli=document.createElement("li");

// myli.textContent="coconut";
// myli.id="coconut";
// myli.style.fontWeight="bold";
// myli.style.backgroundColor="lightgreen";

// // document.body.prepend(myli);

// // document.getElementById("fruits").prepend(myli);
// // document.getElementById("fruits").append(myli);


// // const li1=document.getElementById("orange");
// // document.getElementById("fruits").insertBefore(myli,li1);

// const elements=document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(myli,elements[2]);

// document.getElementById("fruits").removeChild(myli);