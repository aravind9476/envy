class Nope{
//     static usercount=0;
//     constructor(username){
//         this.username=username;
//         Nope.usercount++;
//     }
//     sayhello(){
//         console.log(`hello my name is ${this.username}`);
//     }
// }
// const user1=new Nope("Aravind");
// const user2=new Nope("Adhithya");
// console.log(user1.username);
// console.log(user2.username);
// console.log(Nope.usercount);
// user1.sayhello();
constructor(name,age){
        this.name=name;
        this.age=age;
}
move(name){
    console.log(name);
}
}
class Rabbit extends Nope
{
    constructor(name,age,runspeed)
    {
        super(name,age);
        this.runspeed=runspeed;
    }
    run(){
        console.log(`this ${this.name} runs at ${this.runspeed}`)
        super.move(this.name);
    }
}
const r=new Rabbit("rabbit",1,20);
r.run();