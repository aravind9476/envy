const mybutton=document.getElementById("mybutton");
const myimage=document.getElementById("myimage");

mybutton.addEventListener("click", event =>{
   
   if(myimage.style.visibility==="hidden"){
        // myimage.style.display="block";      //by using display property it doesnt reserve space for the image
        myimage.style.visibility="visible"; 
        mybutton.textContent="HIDE";
   }
   else{
    myimage.style.visibility="hidden";
    mybutton.textContent="SHOW";
   }
   
})