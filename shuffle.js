const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];



// function shuffle(array){
//     for(let i=cards.length-1;i>0;i--){ 
//         let random=Math.floor(Math.random()*(i+1));
       
//         [array[i],array[random]]=[array[random],array[i]];
//     }
   
// }
// shuffle(cards);


// cards.sort(() => Math.random() -0.5);
// console.log(cards);


// const date=new Date();
// console.log(date);

// function outer(){
//     let messege="hello";
//     function inner(){
//         console.log(messege);
//     }
//     inner();
// }
// outer();

// function outer(){
//     let count=0;
//     function increment(){
//         count++;
//         console.log(`count is incresed to ${count}`);
//     }
//     function getcount(){
//         return count;
//     }
//     return {increment,getcount};
// }

// const result=outer();
// result.increment();
// result.increment();
// result.increment();
// result.increment();
// result.increment();
// result.increment();
// console.log(result.getcount());

const timeoutid=setTimeout(() => window.alert("hello"),3000);
clearTimeout(timeoutid);