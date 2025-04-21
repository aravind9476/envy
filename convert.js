const mytext=document.getElementById("mytext");
const tofarenheit=document.getElementById("tofarenheit");
const tocelsius=document.getElementById("tocelsius");
let result=document.getElementById("result");
let temp;

function convert(){
    if(tofarenheit.checked)
    {
        temp=Number(mytext.value);
        temp=temp* 9/5 +32;
        result.textContent=temp.toFixed(1)+"*F";
    }
    else if(tocelsius.checked)
    {
        temp=Number(mytext.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp+"*c";
    }
    else{
        result.textContent="Select a Unit";
    }
}