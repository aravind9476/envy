
//if condition

// let age;
// const one=document.getElementById("one");
// const two=document.getElementById("two");
// const result=document.getElementById("result");
// two.onclick=function(){
//     age=one.value;
//     age=Number(age);
//     console.log(age);
//     if(age>=18)
//     {
//            console.log("hii");
//            result.textContent=`eligible to vote`;
//     }
//     else{
//         console.log("hello");
//         result.textContent=`not eligible to vote`;  
//     }     
// }
const mysubmit=document.getElementById("mysubmit");
const checkboxx=document.getElementById("checkboxx");
const radio1=document.getElementById("radio1");
const radio2=document.getElementById("radio2");
const radio3=document.getElementById("radio3");
const st1=document.getElementById("st1");
const st2=document.getElementById("st2");

mysubmit.onclick = function(){
    if(checkboxx.checked)
    {
            st1.textContent=`u have subscribed`;
    }
    else{
            st1.textContent=`u have not subscribed`;
    }
    if(radio1.checked)
    {
        st2.textContent=`u have selected Visa`;
    }
    else if(radio2.checked)
    {
            st2.textContent=`u have selected UPI`;
    }
    else if(radio3.checked)
    {
            st2.textContent=`u have selected CARD`;
    }
}