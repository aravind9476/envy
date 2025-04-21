
function generatepassword(length,includelowercases,includeuppercase,includesymbol,includenumber){
    const lowerchars="abcdefghijklmnopqrstuvwxyz";
    const upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars="0123456789";
    const symbolchars="!@#$%^&*()_+~=-";

    let allowedchars="";
    let password="";

    allowedchars+= includelowercases ? lowerchars:"";
    allowedchars+= includeuppercase  ? upperchars:"";
    allowedchars+= includenumber  ? numberchars:"";
    allowedchars+= includesymbol  ? symbolchars:"";
    console.log(allowedchars);
    if(length<=0)
    {
        return `length must be greater than 1`;
    }
    if(allowedchars.length === 0)
    {
        return `select atleast one character`;
    }
    for(let i=0;i<length;i++)
    {
        let randomindex=Math.floor(Math.random()*allowedchars.length);
        password+=allowedchars[randomindex];
    }

    return password;
}
const passwordlength=12;
const includelowercases=true;
const includeuppercase=true;
const includesymbol=true;
const includenumber=true;

let password=generatepassword(passwordlength,includelowercases,includeuppercase,includesymbol,includenumber);
console.log(`Generated password: ${password}`);