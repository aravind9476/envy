

function rolldice() {

    const noofdice=document.getElementById("noofdice").value;
    const dicevalues=document.getElementById("dicevalues");
    const values=[];
    for(let i=0;i<noofdice;i++)
    {
        const value=Math.floor(Math.random()*6+1);
        values.push(value);
    }
    dicevalues.textContent=`Dice ${values.join(',')}`;
}